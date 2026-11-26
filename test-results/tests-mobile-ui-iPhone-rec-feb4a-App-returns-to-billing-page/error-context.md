# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\mobile-ui.spec.js >> iPhone receipt preview Back to App returns to billing page
- Location: tests\mobile-ui.spec.js:59:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\visha\AppData\Local\ms-playwright\webkit-2272\Playwright.exe
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
```

# Test source

```ts
  1   | const http = require('http');
  2   | const fs = require('fs');
  3   | const path = require('path');
  4   | const { test, expect, webkit, devices } = require('@playwright/test');
  5   | 
  6   | const root = path.resolve(__dirname, '..');
  7   | let server;
  8   | let baseUrl;
  9   | 
  10  | const types = {
  11  |   '.html': 'text/html; charset=utf-8',
  12  |   '.js': 'text/javascript; charset=utf-8',
  13  |   '.css': 'text/css; charset=utf-8',
  14  |   '.json': 'application/json; charset=utf-8',
  15  |   '.png': 'image/png'
  16  | };
  17  | 
  18  | test.beforeAll(async () => {
  19  |   server = http.createServer((req, res) => {
  20  |     const url = new URL(req.url, 'http://127.0.0.1');
  21  |     let filePath = path.join(root, decodeURIComponent(url.pathname));
  22  |     if (url.pathname === '/') filePath = path.join(root, 'index.html');
  23  |     if (!filePath.startsWith(root)) {
  24  |       res.writeHead(403);
  25  |       res.end('Forbidden');
  26  |       return;
  27  |     }
  28  |     fs.readFile(filePath, (err, data) => {
  29  |       if (err) {
  30  |         res.writeHead(404);
  31  |         res.end('Not found');
  32  |         return;
  33  |       }
  34  |       res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' });
  35  |       res.end(data);
  36  |     });
  37  |   });
  38  | 
  39  |   await new Promise((resolve) => {
  40  |     server.listen(0, '127.0.0.1', () => {
  41  |       const address = server.address();
  42  |       baseUrl = `http://127.0.0.1:${address.port}`;
  43  |       resolve();
  44  |     });
  45  |   });
  46  | });
  47  | 
  48  | test.afterAll(async () => {
  49  |   await new Promise((resolve) => server.close(resolve));
  50  | });
  51  | 
  52  | async function seedInventoryProduct(page, name, billingPrice, stock = 100, invoicePrice = 0) {
  53  |   await page.evaluate(async ({ name, stock, billingPrice, invoicePrice }) => {
  54  |     await window.db.addProduct(name, stock, billingPrice, invoicePrice, 5);
  55  |     await window.billing.refreshProducts();
  56  |   }, { name, stock, billingPrice, invoicePrice });
  57  | }
  58  | 
  59  | test('iPhone receipt preview Back to App returns to billing page', async () => {
> 60  |   const browser = await webkit.launch();
      |                                ^ Error: browserType.launch: Executable doesn't exist at C:\Users\visha\AppData\Local\ms-playwright\webkit-2272\Playwright.exe
  61  |   const context = await browser.newContext({
  62  |     ...devices['iPhone 13'],
  63  |     serviceWorkers: 'block'
  64  |   });
  65  |   const page = await context.newPage();
  66  | 
  67  |   await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  68  |   await page.locator('#auth-user').fill(`tester-${Date.now()}`);
  69  |   await page.locator('#auth-pass').fill('1234');
  70  |   await page.locator('#btn-login').click();
  71  |   await expect(page.locator('#billing-page')).toHaveClass(/active/);
  72  | 
  73  |   await seedInventoryProduct(page, 'Mobile Test Product', 1500);
  74  |   await page.locator('#customer-name').fill('Mobile Test Customer');
  75  |   await page.locator('[id^="product-name-"]').first().fill('Mobile Test Product');
  76  |   await page.locator('.bill-item input[placeholder="Price"]').first().fill('1500');
  77  |   await page.locator('#received-amount').fill('1500');
  78  | 
  79  |   await page.locator('#btn-generate-bill').click();
  80  |   await expect(page.locator('#share-modal')).toHaveClass(/active/);
  81  | 
  82  |   const popupPromise = page.waitForEvent('popup');
  83  |   await page.getByRole('button', { name: /print receipt/i }).click();
  84  |   const receiptPage = await popupPromise;
  85  |   await receiptPage.waitForLoadState('domcontentloaded');
  86  | 
  87  |   await expect(receiptPage.getByRole('button', { name: 'Print' })).toBeVisible();
  88  |   await expect(receiptPage.getByRole('button', { name: 'Edit Bill' })).toBeVisible();
  89  |   await expect(receiptPage.getByRole('button', { name: 'Back to App' })).toBeVisible();
  90  | 
  91  |   await receiptPage.getByRole('button', { name: 'Back to App' }).click();
  92  |   await page.waitForTimeout(500);
  93  | 
  94  |   if (!receiptPage.isClosed()) {
  95  |     await expect(receiptPage.locator('#app')).toBeVisible();
  96  |     await expect(receiptPage.locator('#billing-page')).toHaveClass(/active/);
  97  |   }
  98  | 
  99  |   await expect(page.locator('#billing-page')).toHaveClass(/active/);
  100 |   await context.close();
  101 |   await browser.close();
  102 | });
  103 | 
  104 | test('cheque receipt preview shows cheque details', async () => {
  105 |   const browser = await webkit.launch();
  106 |   const context = await browser.newContext({
  107 |     ...devices['iPhone 13'],
  108 |     serviceWorkers: 'block'
  109 |   });
  110 |   const page = await context.newPage();
  111 | 
  112 |   await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  113 |   await page.locator('#auth-user').fill(`cheque-${Date.now()}`);
  114 |   await page.locator('#auth-pass').fill('1234');
  115 |   await page.locator('#btn-login').click();
  116 |   await page.waitForSelector('#customer-name', { timeout: 5000 });
  117 |   await expect(page.locator('#billing-page')).toHaveClass(/active/);
  118 | 
  119 |   await seedInventoryProduct(page, 'Cheque Test Product', 2500);
  120 |   await page.locator('#customer-name').fill('Cheque Test Customer');
  121 |   await page.locator('[id^="product-name-"]').first().fill('Cheque Test Product');
  122 |   await page.locator('.bill-item input[placeholder="Price"]').first().fill('2500');
  123 |   await page.locator('#received-amount').fill('2500');
  124 |   await page.locator('#payment-method').selectOption('cheque');
  125 |   await expect(page.locator('#cheque-details')).not.toHaveClass(/hidden/);
  126 |   await page.locator('#cheque-date').fill('2026-04-30');
  127 |   await page.locator('#cheque-number').fill('CHQ-7788');
  128 |   await page.locator('#cheque-bank').fill('People Bank');
  129 | 
  130 |   await page.locator('#btn-generate-bill').click();
  131 |   await expect(page.locator('#share-modal')).toHaveClass(/active/);
  132 | 
  133 |   const popupPromise = page.waitForEvent('popup');
  134 |   await page.getByRole('button', { name: /print receipt/i }).click();
  135 |   const receiptPage = await popupPromise;
  136 |   await receiptPage.waitForLoadState('domcontentloaded');
  137 | 
  138 |   await expect(receiptPage.getByText('Payment Method')).toBeVisible();
  139 |   await expect(receiptPage.getByText('Cheque', { exact: true })).toBeVisible();
  140 |   await expect(receiptPage.getByText('Cheque Amount')).toBeVisible();
  141 |   await expect(receiptPage.locator('.totals .row').filter({ hasText: 'Cheque Amount' }).getByText('2,500')).toBeVisible();
  142 |   await expect(receiptPage.getByText('Cheque Date')).toBeVisible();
  143 |   await expect(receiptPage.getByText('2026-04-30')).toBeVisible();
  144 |   await expect(receiptPage.getByText('Cheque No')).toBeVisible();
  145 |   await expect(receiptPage.getByText('CHQ-7788')).toBeVisible();
  146 |   await expect(receiptPage.getByText('People Bank')).toBeVisible();
  147 | 
  148 |   await context.close();
  149 |   await browser.close();
  150 | });
  151 | 
  152 | test('decimal amounts do not leave a false due balance', async () => {
  153 |   const browser = await webkit.launch();
  154 |   const context = await browser.newContext({
  155 |     ...devices['iPhone 13'],
  156 |     serviceWorkers: 'block'
  157 |   });
  158 |   const page = await context.newPage();
  159 |   const customerName = `Decimal Customer ${Date.now()}`;
  160 | 
```