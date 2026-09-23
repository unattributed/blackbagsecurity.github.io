const {chromium,firefox}=require('playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const routes=['/','/services/','/capability/','/about/','/arsenal/browser-safe-ai-security/','/arsenal/security-engagement-platform/','/arsenal/openbsd-mailstack/','/arsenal/aotp/','/services/penetration-testing/','/services/red-teaming/','/services/secure-code-review/','/services/reverse-engineering/','/services/secure-engineering/','/methodology/'];
const output=process.env.QA_OUTPUT; assert(output); fs.mkdirSync(output,{recursive:true});
(async()=>{const records=[];for(const [engine,type] of Object.entries({chromium,firefox})){
 const browser=await type.launch({headless:true,...(engine==='firefox'&&process.env.FIREFOX_PATH?{executablePath:process.env.FIREFOX_PATH}:{})});
 for(const width of [1440,390]) for(const route of routes){
  const states=[]; const shots=[];
  for(const port of [8794,8793]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'}); const errors=[];
   page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
   const r=await page.goto(`http://127.0.0.1:${port}${route}`,{waitUntil:'networkidle'}); assert.equal(r.status(),200);
   await page.locator('img').evaluateAll(es=>es.forEach(e=>e.loading='eager'));
   await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
   states.push(await page.evaluate(()=>({title:document.title,text:document.body.innerText,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.getAttribute('src'))})));
   states[states.length-1].errors=errors;
   shots.push(await page.screenshot({fullPage:true})); await page.close();
  }
  assert.deepEqual(states[0],states[1],`${engine} ${width} ${route} baseline parity`);
  assert(shots[0].equals(shots[1]),`${engine} ${width} ${route} pixel parity`);
  const name=route.replaceAll('/','_')||'main';
  fs.writeFileSync(path.join(output,`${engine}-${width}${name}.png`),shots[1]);
  records.push({engine,width,route,status:'pass',pixelIdentical:true,existingWarnings:states[1].errors,existingOverflow:states[1].overflow});
  fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(records,null,2));
 }
 await browser.close();
}console.log(`${records.length} route/browser/viewport comparisons are byte-identical screenshots`);})().catch(e=>{console.error(e);process.exit(1)});
