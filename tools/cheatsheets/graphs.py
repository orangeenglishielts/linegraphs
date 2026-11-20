# Small explanatory diagrams, one per cheat sheet. viewBox 300 x 170 unless noted.
OR='#F88B48'; ORK='#B9541A'; GR='#2F7A49'; GRL='#5FB27B'; DK='#292929'; MU='#6B6359'; LN='#E4DED1'; SAND='#D6B9A7'
F='font-family="Inter,sans-serif"'
TS=1.3

def axes(x0,y0,x1,y1,ylabels,xlabels,ymin,ymax):
    s=''
    for v,lab in ylabels:
        y=y1-(v-ymin)/(ymax-ymin)*(y1-y0)
        s+=f'<line x1="{x0}" x2="{x1}" y1="{y:.1f}" y2="{y:.1f}" stroke="{LN}" stroke-width="0.8"/><text x="{x0-5}" y="{y+3:.1f}" text-anchor="end" font-size="{7.5*TS}" fill="{MU}" {F}>{lab}</text>'
    s+=f'<line x1="{x0}" x2="{x1}" y1="{y1}" y2="{y1}" stroke="{DK}" stroke-width="1"/>'
    n=len(xlabels)
    for i,lab in enumerate(xlabels):
        x=x0+i*(x1-x0)/(n-1)
        s+=f'<text x="{x:.1f}" y="{y1+13}" text-anchor="middle" font-size="{7.5*TS}" fill="{MU}" {F}>{lab}</text>'
    return s

def pts(vals,x0,y0,x1,y1,ymin,ymax):
    n=len(vals);out=[]
    for i,v in enumerate(vals):
        if v is None: out.append(None);continue
        out.append((x0+i*(x1-x0)/(n-1), y1-(v-ymin)/(ymax-ymin)*(y1-y0)))
    return out

def path(p,color,w=2.4,dash=None):
    d=' '.join(('M' if i==0 else 'L')+f'{x:.1f},{y:.1f}' for i,(x,y) in enumerate(p))
    return f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{w}" stroke-linejoin="round" stroke-linecap="round"{f" stroke-dasharray=\"{dash}\"" if dash else ""}/>'

def badge(x,y,n):
    return f'<circle cx="{x}" cy="{y}" r="8.5" fill="{OR}"/><text x="{x}" y="{y+3.6}" text-anchor="middle" font-size="10.5" font-weight="800" fill="{DK}" {F}>{n}</text>'

def lab(x,y,t,anchor='start',col=DK,size=8,w=600):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="{size*TS:.1f}" font-weight="{w}" fill="{col}" {F}>{t}</text>'

def g1():
    x0,y0,x1,y1=58,42,262,128
    s=f'<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">'
    s+=lab(162,11,'Percentage of adults who read the news','middle',DK,7.4,700)+lab(162,22,'online and in print, 2004–2024','middle',DK,7.4,700)
    s+=axes(x0,y0,x1,y1,[(0,'0'),(20,'20'),(40,'40'),(60,'60'),(80,'80')],['2004','2008','2012','2016','2020','2024'],0,80)
    s+=f'<text transform="translate(26 {(y0+y1)/2}) rotate(-90)" text-anchor="middle" font-size="{7.5*TS}" font-weight="600" fill="{DK}" {F}>% of adults</text>'
    on=pts([18,30,45,58,70,74],x0,y0,x1,y1,0,80); pr=pts([64,60,52,41,30,26],x0,y0,x1,y1,0,80)
    s+=path(on,GR)+path(pr,DK,2.2,'5 4')
    for x,y in on+pr: s+=f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.4" fill="#fff" stroke="{GR if (x,y) in on else DK}" stroke-width="1.4"/>'
    s+=f'<line x1="70" x2="86" y1="160" y2="160" stroke="{GR}" stroke-width="2.4"/>'+lab(90,163,'Online','start',DK,7.5,500)
    s+=f'<line x1="128" x2="144" y1="160" y2="160" stroke="{DK}" stroke-width="2.2" stroke-dasharray="4 3"/>'+lab(148,163,'Print','start',DK,7.5,500)
    # numbered callouts matching "Read in this order"
    s+=badge(30,13,1)+badge(286,142,2)+badge(10,62,3)+badge(186,160,4)
    tx,ty=on[3]; s+=f'<circle cx="{tx:.1f}" cy="{ty:.1f}" r="6" fill="none" stroke="{OR}" stroke-width="1.6"/>'+badge(tx+14,ty-12,5)
    return s+'</svg>','Find these five things before you write: <b>1</b> title, <b>2</b> horizontal axis, <b>3</b> vertical axis and unit, <b>4</b> legend, <b>5</b> data points.'

def g2():
    tiles=[('rose sharply',[10,14,40,80,92]),('rose gradually',[20,32,44,56,68]),('edged up',[50,51,53,54,56]),('levelled off',[15,45,70,71,71]),
           ('fluctuated',[40,62,35,66,42]),('dipped',[60,61,40,58,61]),('fell steadily',[85,70,55,40,25]),('plummeted',[90,86,40,10,6])]
    s='<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">'
    for k,(t,v) in enumerate(tiles):
        cx=6+(k%4)*74; cy=6+(k//4)*82
        s+=f'<rect x="{cx}" y="{cy}" width="68" height="76" rx="6" fill="#fff" stroke="{LN}"/>'
        p=pts(v,cx+8,cy+10,cx+60,cy+50,0,100)
        col=GR if v[-1]>v[0]+3 else (ORK if v[-1]<v[0]-3 else DK)
        s+=f'<line x1="{cx+8}" x2="{cx+60}" y1="{cy+50}" y2="{cy+50}" stroke="{LN}"/>'+path(p,col,2.4)
        s+=lab(cx+34,cy+66,t,'middle',DK,6.9,600)
    return s+'</svg>','The shape of the line tells you the verb. The steepness tells you the adverb.'

def g3():
    x0,y0,x1,y1=34,24,286,124
    s='<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">'
    n=6; X=lambda i:x0+i*(x1-x0)/(n-1); Y=lambda v:y1-v/48*(y1-y0)
    rec=[(X(0),Y(3)),(X(1),Y(5)),(X(2),Y(7.5)),(X(2.75),Y(9)),(X(3),Y(12))]
    proj=[(X(3),Y(12)),(X(4),Y(26)),(X(5),Y(45))]
    s+=f'<rect x="{X(3):.1f}" y="{y0}" width="{X(5)-X(3):.1f}" height="{y1-y0}" fill="#FFF0E6"/>'
    s+=axes(x0,y0,x1,y1,[(0,'0%'),(15,'15%'),(30,'30%'),(45,'45%')],['2010','2014','2018','2022','2026','2030'],0,48)
    s+=path(rec,GR)+path(proj,GR,2.4,'5 4')
    s+=f'<circle cx="{X(2.75):.1f}" cy="{Y(9):.1f}" r="3.4" fill="{OR}"/>'
    s+=lab(X(0)+2,y0+10,'Recorded: past simple','start',GR,7.8,700)+lab(X(0)+2,y0+21,'The share rose…','start',MU,7.4,500)
    s+=lab(X(3.55),y1-30,'Projected:','start',ORK,7.6,700)+lab(X(3.55),y1-19,'future form','start',ORK,7.6,700)+lab(X(3.55),y1-7,'is expected to…','start',MU,7.2,500)
    s+=f'<line x1="{X(2.75):.1f}" x2="{X(2.75)-26:.1f}" y1="{Y(9)-4:.1f}" y2="{Y(9)-26:.1f}" stroke="{OR}" stroke-width="1"/>'
    s+=lab(X(2.75)-28,Y(9)-34,'Past perfect + by:','end',DK,7.4,700)+lab(X(2.75)-28,Y(9)-24,'By 2021, it had risen to 9%.','end',MU,7.2,500)
    s+=f'<line x1="{X(3):.1f}" x2="{X(3):.1f}" y1="{y0}" y2="{y1}" stroke="{OR}" stroke-dasharray="2 2"/>'
    return s+'</svg>','A solid line is recorded data: past simple. A dashed line is a projection: future form.'

def g4():
    x0,y0,x1,y1=34,22,250,128
    s='<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">'
    s+=axes(x0,y0,x1,y1,[(0,'0%'),(10,'10%'),(20,'20%'),(30,'30%'),(40,'40%'),(50,'50%')],['2004','2008','2012','2016','2020'],0,50)
    gas=pts([22,30,42,38,35],x0,y0,x1,y1,0,50); coal=pts([45,38,30,20,12],x0,y0,x1,y1,0,50)
    s+=path(coal,DK,2.2,'5 4')+path(gas,GR)
    for x,y in gas: s+=f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.3" fill="#fff" stroke="{GR}" stroke-width="1.4"/>'
    for x,y in coal: s+=f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.3" fill="#fff" stroke="{DK}" stroke-width="1.4"/>'
    # crossover region between 2008 and 2012
    xa,xb=gas[1][0],gas[2][0]
    s+=f'<rect x="{xa:.1f}" y="{y0}" width="{xb-xa:.1f}" height="{y1-y0}" fill="{OR}" opacity=".13"/>'
    s+=badge((xa+xb)/2,y1-12,1)
    s+=f'<circle cx="{gas[2][0]:.1f}" cy="{gas[2][1]:.1f}" r="5.5" fill="none" stroke="{OR}" stroke-width="1.5"/>'+badge(gas[2][0]+12,gas[2][1]-10,2)
    s+=f'<circle cx="{coal[4][0]:.1f}" cy="{coal[4][1]:.1f}" r="5.5" fill="none" stroke="{OR}" stroke-width="1.5"/>'+badge(coal[4][0]-14,coal[4][1]+10,3)
    s+=lab(258,40,'Gas','start',GR,8,700)+lab(258,98,'Coal','start',DK,8,700)
    s+=lab(150,156,'1 crossover · 2 peak · 3 lowest point','middle',DK,7.8,600)
    return s+'</svg>','Gas overtook coal between 2008 and 2012, peaked at 42% in 2012, and coal reached its lowest point, 12%, in 2020.'

def g5():
    s='<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg">'
    s+=f'<rect x="8" y="6" width="150" height="158" rx="6" fill="#fff" stroke="{LN}"/>'
    rows=[(1,'Introduction','paraphrase',1,SAND),(2,'Overview','patterns, no figures',2,OR),(3,'Body paragraph 1','one group + figures',4,GRL),(4,'Body paragraph 2','the rest + figures',4,GRL)]
    y=16
    for n,t,d,lines,col in rows:
        for k in range(lines):
            w=128 if k<lines-1 or lines==1 else 86
            s+=f'<rect x="18" y="{y+k*7}" width="{w}" height="4" rx="2" fill="{col}"/>'
        cy=y+(lines*7-3)/2
        s+=badge(170,cy+1,n)+lab(182,cy-1,t,'start',DK,8.2,700)+lab(182,cy+9,d,'start',MU,7.6,500)
        y+=lines*7+14
    return s+'</svg>','Four paragraphs. The overview comes second and has no data figures.'

def g6():
    s='<svg viewBox="0 0 300 124" xmlns="http://www.w3.org/2000/svg">'
    x0,x1=14,286; W=x1-x0; seg=[(2,'Plan',SAND),(15,'Write',GRL),(3,'Check',OR)]; x=x0
    for m,t,c in seg:
        w=W*m/20
        s+=f'<rect x="{x:.1f}" y="36" width="{w:.1f}" height="34" fill="{c}"/>'
        s+=lab(x+w/2,57,(f'{m} min' if m>=5 else str(m)),'middle',DK,8.4,800)
        s+=lab(max(x+w/2,x0+14),28,t,'middle',DK,8,700)
        x+=w
    s+=f'<rect x="{x0}" y="36" width="{W}" height="34" fill="none" stroke="{DK}" stroke-width="1"/>'
    for m in (0,2,17,20):
        xx=x0+W*m/20; s+=f'<line x1="{xx:.1f}" x2="{xx:.1f}" y1="70" y2="76" stroke="{DK}"/>'+lab(xx,86,(f'{m} min' if m==20 else str(m)),('end' if m==20 else 'middle'),MU,7.2,500)
    s+=lab(150,104,'Introduction 25–30 words · overview 30–40 words','middle',DK,7.2,600)+lab(150,116,'each body paragraph 50–60 words','middle',DK,7.2,600)
    return s+'</svg>','Keep going forward while you write, and leave the last 3 minutes for checking.'

GRAPHS={'g1':g1,'g2':g2,'g3':g3,'g4':g4,'g5':g5,'g6':g6}
