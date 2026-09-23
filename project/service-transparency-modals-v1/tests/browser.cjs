// Run with NODE_PATH pointing to an installed Playwright package.
const { chromium, firefox } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const data = require('../../../docs/_data/service_transparency_modals_v1.json');
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:8793';
const output = process.env.QA_OUTPUT;
assert(output, 'QA_OUTPUT must identify an evidence directory');
fs.mkdirSync(output, { recursive: true });
const records = [];
const route = '/review/service-transparency-modals/';
const sizes = [[1920,1080],[1440,900],[1280,800],[768,1024],[390,844],[320,640]];
(async () => {
  for (const [engine, type] of Object.entries({chromium,firefox})) {
    const browser = await type.launch({headless:true, ...(engine === 'firefox' && process.env.FIREFOX_PATH ? {executablePath:process.env.FIREFOX_PATH} : {})});
    for (const [width,height] of (process.env.QA_VISUAL_ONLY ? [] : sizes)) {
      const page = await browser.newPage({viewport:{width,height},hasTouch:width<600,reducedMotion:'reduce'});
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if(m.type()==='error') errors.push(m.text()); });
      await page.goto(base+route);
      await page.addScriptTag({url:base+'/assets/js/service-transparency-modals-v1.js'});
      const modal = page.locator('dialog');
      const waitClosed = async trigger => {
        await page.waitForFunction(() => !document.querySelector('dialog').open && !document.body.classList.contains('bbs-method-modal-open'));
        assert.equal(await trigger.evaluate(e=>e===document.activeElement), true, 'focus returned');
        assert.equal(await page.getByRole('dialog').count(),0,'closed dialog absent from accessibility tree');
      };
      for (const model of data) {
        const trigger = page.locator(`[data-method-modal="${model.id}"]`);
        await page.mouse.move(0,0);
        await page.evaluate(()=>document.activeElement.blur());
        const before = await trigger.evaluate(e=>getComputedStyle(e).borderColor);
        await trigger.hover();
        assert.notEqual(await trigger.evaluate(e=>getComputedStyle(e).borderColor), before,'hover highlight');
        assert.equal(await page.getByRole('dialog').count(),0,'hover does not open');
        await trigger.focus();
        assert.equal(await trigger.evaluate(e=>e===document.activeElement),true);
        assert.equal(await page.getByRole('dialog').count(),0,'focus does not open');
        const scroll = await page.evaluate(()=>scrollY);
        if (width<600) await trigger.tap(); else await trigger.click();
        assert.equal(await page.getByRole('dialog').count(),1);
        assert.equal(await modal.getAttribute('aria-modal'),'true');
        assert.equal(await modal.locator('h2').textContent(),model.title);
        assert.equal(await modal.locator('#bbs-method-modal-subtitle').textContent(),model.subtitle);
        assert.deepEqual(await modal.locator('.bbs-method-modal-step h3').allTextContents(),model.steps.map(s=>s.title));
        assert.deepEqual(await modal.locator('.bbs-method-modal-step p').allTextContents(),model.steps.map(s=>s.body));
        assert.deepEqual(await modal.locator('.bbs-method-modal-panel').nth(0).locator('li').allTextContents(),model.inputs);
        assert.deepEqual(await modal.locator('.bbs-method-modal-panel').nth(1).locator('li').allTextContents(),model.outputs);
        assert.equal(await modal.locator('.bbs-method-modal-cta').getAttribute('href'),'/about/#contact');
        assert.equal((await modal.locator('.bbs-method-modal-cta').textContent()).replace('→','').trim(),model.cta);
        assert.equal(await page.getByRole('button',{name:`Close ${model.title}`,exact:true}).evaluate(e=>e===document.activeElement),true);
        assert.equal(await modal.evaluate(e=>getComputedStyle(e).animationName),'none');
        assert.equal(await modal.evaluate(e=>e.scrollWidth<=e.clientWidth),true,'no horizontal dialog overflow');
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
        const overflow = await modal.locator('.bbs-method-modal-step,.bbs-method-modal-panel').evaluateAll(es=>es.flatMap(e=>{const b=e.getBoundingClientRect();return [...e.querySelectorAll('h3,p,li')].filter(t=>{const r=document.createRange();r.selectNodeContents(t);return [...r.getClientRects()].some(x=>x.left<b.left-1||x.right>b.right+1||x.top<b.top-1||x.bottom>b.bottom+1);}).map(t=>t.textContent)}));
        assert.deepEqual(overflow,[],'content is not clipped');
        assert.equal(await page.evaluate(()=>getComputedStyle(document.body).overflow),'hidden');
        // Native modal inertness also blocks programmatic background focus.
        await trigger.evaluate(e=>e.focus());
        assert.equal(await modal.evaluate(e=>e.contains(document.activeElement)),true,'background inert');
        await page.keyboard.press('Shift+Tab');
        assert.equal(await modal.locator('.bbs-method-modal-close').evaluate(e=>e===document.activeElement),true,'reverse trap');
        await page.keyboard.press('Tab');
        assert.equal(await modal.locator('.bbs-method-modal-x').evaluate(e=>e===document.activeElement),true,'forward trap');
        await page.mouse.move(1,1); await page.mouse.wheel(0,300);
        await page.waitForTimeout(35);
        assert.equal(await page.evaluate(()=>scrollY),scroll,'background scroll locked');
        await modal.locator('h2').click();
        assert.equal(await modal.evaluate(e=>e.open),true,'inside click stays open');
        await modal.evaluate(e=>e.scrollTop=0);
        await page.screenshot({path:path.join(output,`${engine}-${width}-${model.id}.png`)});
        await modal.locator('.bbs-method-modal-x').click(); await waitClosed(trigger);
        await trigger.press('Enter');
        assert.equal(await modal.locator('h2').textContent(),model.title);
        await modal.locator('.bbs-method-modal-close').click(); await waitClosed(trigger);
        await trigger.press('Space');
        assert.equal(await modal.locator('h2').textContent(),model.title);
        await page.keyboard.press('Escape'); await waitClosed(trigger);
        await trigger.click();
        if(width<600) await page.touchscreen.tap(1,1); else await page.mouse.click(1,1); await waitClosed(trigger);
        await trigger.click();
        await modal.evaluate(e=>e.scrollTop=e.scrollHeight);
        const closeBox=await modal.locator('.bbs-method-modal-x').boundingBox();
        assert(closeBox.y>=0 && closeBox.y+closeBox.height<=height,'sticky close reachable');
        await page.keyboard.press('Escape'); await waitClosed(trigger);
        await trigger.click();
        assert.equal(await modal.evaluate(e=>e.scrollTop),0,'reopen starts at top');
        // Replace content while open; synthetic activation tests the race path.
        const other = data[(data.indexOf(model)+1)%data.length];
        const otherTrigger = page.locator(`[data-method-modal="${other.id}"]`);
        await otherTrigger.evaluate(e=>e.click());
        assert.equal(await page.getByRole('dialog').count(),1);
        assert.equal(await modal.locator('h2').textContent(),other.title);
        assert.equal(await modal.locator('.bbs-method-modal-step').count(),9);
        assert.equal(await page.evaluate(()=>{const ids=[...document.querySelectorAll('[id]')].map(e=>e.id); return ids.length===new Set(ids).size;}),true);
        await page.keyboard.press('Escape'); await waitClosed(otherTrigger);
        await trigger.click();
        assert.deepEqual(errors,[],'component console');
        await modal.locator('.bbs-method-modal-cta').click();
        await page.waitForURL('**/about/#contact');
        assert.equal(await page.locator('#contact').count(),1,'CTA reaches contact');
        const contactWarnings = [...errors];
        assert(contactWarnings.every(e=>e.includes("directive 'frame-ancestors' is ignored")), 'unexpected contact page error');
        errors.length=0;
        await page.goto(base+route);
        assert.deepEqual(errors,[]);
        records.push({engine,width,height,variant:model.id,status:'pass',contactWarnings,checks:['hover','focus','click/tap','enter','space','exact-copy','semantics','x','close','escape','backdrop','inside-click','focus-trap','focus-return','native-inert','scroll-lock','sticky-close','scroll-reset','replace-open','no-stale-content','unique-ids','reduced-motion','no-overflow','contact-navigation','no-console-errors']});
        fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(records,null,2));
      }
      await page.close();
    }
    // Reference-sized captures, including full scrollable dialog content.
    const visual = await browser.newPage({viewport:{width:1448,height:1086},reducedMotion:'reduce'});
    await visual.goto(base+route);
    for(const model of data){
      await visual.locator(`[data-method-modal="${model.id}"]`).click();
      await visual.evaluate(async()=>{const artwork=new Image();artwork.src='/assets/img/main-locked/main-hero-operations-command-centre.webp';await artwork.decode();await document.fonts.ready;await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});
      await visual.screenshot({path:path.join(output,`${engine}-reference-${model.id}.png`)});
      await visual.keyboard.press('Escape');
      await visual.waitForFunction(()=>!document.body.classList.contains('bbs-method-modal-open'));
    }
    await visual.close(); await browser.close();
  }
  console.log(process.env.QA_VISUAL_ONLY ? '8 reference captures completed after artwork decoding' : `${records.length} browser / viewport / modal cases passed`);
})().catch(e=>{console.error(e);process.exit(1)});
