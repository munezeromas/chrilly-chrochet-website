const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  await page.goto('http://localhost:5173');
  // Wait for animations and videos to settle
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'verify_fullpage_revert.png', fullPage: true });

  await browser.close();
})();
