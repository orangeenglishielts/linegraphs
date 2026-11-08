#!/usr/bin/env python3
"""Build plain-HTML copies of the Orange English Task 1 blog posts.

GoDaddy loads post text with JavaScript, which many AI crawlers do not run.
Each copy here is ordinary HTML and names the original post as its canonical URL.
"""
import datetime, html, json, os, re, shutil, sys, urllib.parse, urllib.request
import xml.etree.ElementTree as ET

SITE = "https://orangeenglish.nl"
HOME = "https://orangeenglishielts.github.io/linegraphs/guides/"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "guides")
INCLUDE = re.compile(r"task 1|line graph|bar chart|pie chart", re.I)
EXCLUDE = re.compile(r"english gym", re.I)
UA = "Mozilla/5.0 (compatible; OrangeEnglishGuidesBuilder/1.0)"
E = html.escape


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read().decode("utf-8", "replace")


def units(text, a, b):
    return text.encode("utf-16-le")[a * 2:b * 2].decode("utf-16-le", "ignore")


def inline(block, entities):
    text = block.get("text", "")
    length = len(text.encode("utf-16-le")) // 2
    cuts = {0, length}
    for r in block.get("inlineStyleRanges", []) + block.get("entityRanges", []):
        cuts.update((r["offset"], r["offset"] + r["length"]))
    cuts = sorted(c for c in cuts if 0 <= c <= length)
    out = []
    for a, b in zip(cuts, cuts[1:]):
        piece = E(units(text, a, b), quote=False)
        for r in block.get("inlineStyleRanges", []):
            if r["offset"] <= a and b <= r["offset"] + r["length"]:
                tag = {"BOLD": "strong", "ITALIC": "em"}.get(r.get("style"))
                if tag:
                    piece = f"<{tag}>{piece}</{tag}>"
        for r in block.get("entityRanges", []):
            if r["offset"] <= a and b <= r["offset"] + r["length"]:
                ent = entities.get(str(r["key"]), {})
                href = ent.get("data", {}).get("url") or ent.get("data", {}).get("href")
                if ent.get("type") == "LINK" and href:
                    piece = f'<a href="{E(href)}">{piece}</a>'
        out.append(piece)
    return "".join(out)


def body(content, title):
    blocks, entities = content.get("blocks", []), content.get("entityMap", {})
    out, open_list = [], None
    tags = {"unstyled": "p", "header-one": "h2", "header-two": "h2", "header-three": "h3",
            "header-four": "h3", "blockquote": "blockquote"}
    for b in blocks:
        kind = b.get("type")
        want = {"unordered-list-item": "ul", "ordered-list-item": "ol"}.get(kind)
        if want != open_list:
            if open_list:
                out.append(f"</{open_list}>")
            if want:
                out.append(f"<{want}>")
            open_list = want
        if kind == "atomic":
            for r in b.get("entityRanges", []):
                ent = entities.get(str(r["key"]), {})
                src = ent.get("data", {}).get("src")
                if ent.get("type") == "IMAGE" and src:
                    src = "https:" + src if src.startswith("//") else src
                    alt = ent["data"].get("alt") or f"Illustration for: {title}"
                    out.append(f'<img src="{E(src)}" alt="{E(alt)}" loading="lazy">')
            continue
        content_html = inline(b, entities)
        if not b.get("text", "").strip():
            continue
        if want:
            out.append(f"<li>{content_html}</li>")
        else:
            out.append(f"<{tags.get(kind, 'p')}>{content_html}</{tags.get(kind, 'p')}>")
    if open_list:
        out.append(f"</{open_list}>")
    return "\n".join(out)


def post_data(page):
    start = page.index("window._BLOG_DATA=") + len("window._BLOG_DATA=")
    data, _ = json.JSONDecoder().raw_decode(page[start:])
    found = {}
    def walk(node):
        if isinstance(node, dict):
            for k, v in node.items():
                if k in ("fullContent", "publishedDate") and isinstance(v, str):
                    found.setdefault(k, v)
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)
    walk(data)
    return found


CSS = """*{box-sizing:border-box}body{margin:0;background:#FBF7F0;color:#292929;font:18px/1.65 Inter,Arial,sans-serif}
.w{max-width:720px;margin:0 auto;padding:22px 20px 48px}header img{height:56px;width:auto;display:block}
h1,h2,h3{font-family:Fraunces,Georgia,serif;line-height:1.15}h1{font-size:38px;margin:24px 0 12px}h2{font-size:27px;margin:36px 0 10px}h3{font-size:22px;margin:28px 0 8px}
a{color:#A3361A}main img{max-width:100%;height:auto;border-radius:14px;display:block;margin:20px 0}blockquote{margin:20px 0;padding:14px 18px;background:#fff;border-left:4px solid #C4521E;border-radius:0 12px 12px 0}
.m{font-size:15px;color:#5E564E}.c{margin:40px 0 0;background:#fff;border-radius:20px;padding:22px}.c h2{margin:0 0 6px}.c p{margin:0 0 12px}.r{display:flex;flex-wrap:wrap;gap:10px}
input[type=email]{flex:1 1 220px;min-width:0;padding:14px 18px;border-radius:999px;border:2px solid #E7DFD3;font:16px Inter,Arial,sans-serif}button{background:#C4521E;color:#fff;border:0;border-radius:999px;padding:14px 26px;font:700 16px Inter,Arial,sans-serif;cursor:pointer}
.h{position:absolute;left:-9999px;height:0;overflow:hidden}small{display:block;margin-top:10px;color:#5E564E;font-size:13px}.g{list-style:none;padding:0}.g li{background:#fff;border-radius:16px;padding:16px 18px;margin:12px 0}.g a{font-weight:700}
@media(max-width:520px){h1{font-size:31px}h2{font-size:24px}}"""

SIGNUP = """<section class="c"><h2>Get the free line graphs course</h2><p>Six short chapters with videos and practice, from a former IELTS examiner.</p>
<form action="https://gem.godaddy.com/signups/subscribe/5cdfe95f1e574a818971f13fe0557ea2" method="post" target="_blank"><div class="r"><label class="h" for="e">Email address</label><input id="e" name="signup[email]" type="email" autocomplete="email" placeholder="you@example.com" required><button type="submit">Send me the free course</button></div>
<div class="h" aria-hidden="true"><input type="text" name="d55f345b6aaa74773d072714bd2e52e0" tabindex="-1" autocomplete="off"><input type="checkbox" name="beacon" tabindex="-1"></div>
<small>Free, no card needed. I never share your email, and you can unsubscribe any time.</small></form></section>"""


def shell(title, desc, canonical, logo, main, schema):
    return f"""<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(title)}</title><meta name="description" content="{E(desc)}"><link rel="canonical" href="{E(canonical)}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,800&family=Inter:wght@400;700&display=swap">
<style>{CSS}</style><script type="application/ld+json">{json.dumps(schema, ensure_ascii=False).replace("</", "<\\/")}</script></head>
<body><div class="w"><header><a href="{SITE}/"><img src="{logo}" alt="Orange English" width="56" height="56"></a></header><main>
{main}
{SIGNUP}</main></div></body></html>
"""


def main():
    rss = ET.fromstring(get(SITE + "/blog/f.rss"))
    made, failed = [], []
    tmp = OUT + ".new"
    shutil.rmtree(tmp, ignore_errors=True)
    os.makedirs(tmp)
    for item in rss.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        if not INCLUDE.search(title) or EXCLUDE.search(title):
            continue
        desc = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", item.findtext("description") or "")).strip()[:155]
        slug = re.sub(r"[^a-z0-9-]+", "-", urllib.parse.unquote(link.rsplit("/", 1)[-1]).lower()).strip("-")
        try:
            info = post_data(get(link))
            article = body(json.loads(info["fullContent"]), title)
        except Exception as exc:
            failed.append(f"{title}: {exc}")
            continue
        if len(article) < 500:
            failed.append(f"{title}: text too short")
            continue
        date = info.get("publishedDate", "")
        shown = date[:10]
        try:
            shown = datetime.date.fromisoformat(date[:10]).strftime("%-d %B %Y")
        except ValueError:
            pass
        schema = {"@context": "https://schema.org", "@type": "Article", "headline": title, "description": desc,
                  "url": link, "datePublished": date,
                  "author": {"@type": "Person", "name": "Lindsey", "jobTitle": "Former IELTS examiner", "url": SITE + "/about"},
                  "publisher": {"@type": "EducationalOrganization", "name": "Orange English", "url": SITE + "/"}}
        page = (f'<h1>{E(title)}</h1><p class="m">By Lindsey, former IELTS examiner. {E(shown)}. '
                f'<a href="{E(link)}">Read this post with its interactive exercises</a>.</p>\n{article}')
        os.makedirs(os.path.join(tmp, slug))
        with open(os.path.join(tmp, slug, "index.html"), "w", encoding="utf-8") as f:
            f.write(shell(title, desc, link, "../../waitlist/logo-no-ielts.png", page, schema))
        made.append((title, slug, desc))
    for f in failed:
        print("FAILED", f, file=sys.stderr)
    if len(made) < 5:
        shutil.rmtree(tmp, ignore_errors=True)
        sys.exit(f"Only {len(made)} guides built, keeping the existing pages")
    items = "\n".join(f'<li><a href="{s}/">{E(t)}</a><br><span class="m">{E(d)}</span></li>' for t, s, d in made)
    title = "IELTS Academic Writing Task 1 Guides | Orange English"
    desc = "Free IELTS Academic Writing Task 1 guides on line graphs, bar charts, pie charts, maps and overviews, from a former IELTS examiner."
    schema = {"@context": "https://schema.org", "@type": "CollectionPage", "name": title, "description": desc, "url": HOME,
              "publisher": {"@type": "EducationalOrganization", "name": "Orange English", "url": SITE + "/"}}
    page = ('<h1>IELTS Writing Task 1 guides</h1><p>Free guides to IELTS Academic Writing Task 1, written by Lindsey, a former IELTS examiner and '
            f'founder of <a href="{SITE}/">Orange English</a>.</p>\n<ul class="g">\n{items}\n</ul>')
    with open(os.path.join(tmp, "index.html"), "w", encoding="utf-8") as f:
        f.write(shell(title, desc, HOME, "../waitlist/logo-no-ielts.png", page, schema))
    shutil.rmtree(OUT, ignore_errors=True)
    os.replace(tmp, OUT)
    print(f"Built {len(made)} guides, {len(failed)} failed")


if __name__ == "__main__":
    main()
