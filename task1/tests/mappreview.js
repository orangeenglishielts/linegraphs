// Usage: node mappreview.js <book.js> <outdir> [hot]  → writes one PNG per raw chart in C
const fs=require('fs'),path=require('path');const [,,file,out,hot]=process.argv;
global.window={};global.OE={newBook(){},NAVY:'#292929',GREEN:'#2B6E43',ORANGE:'#F88B48',GREY:'#9C968A'};
eval(fs.readFileSync(file,'utf8'));const lib=Object.values(window).find(v=>v&&v.C);
(async()=>{const {chromium}=require('playwright');const b=await chromium.launch();const p=await b.newPage({viewport:{width:600,height:440},deviceScaleFactor:1.5});
for(const [k,o] of Object.entries(lib.C)){if(o.type!=='raw')continue;const svg=o.svg(hot?Object.assign({},o,{hot:1}):o);
 await p.setContent(`<html><body style="margin:0;background:#fff">${svg.replace('<svg ','<svg width="560" ')}</body></html>`);await p.screenshot({path:path.join(out,k+".png"),fullPage:true});}
await b.close()})();
