// Automation Framework: Playwright with Node.js

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL;

test('Learner Journey Automation Test', async ({ page }) => {

  // 1 Navigate to application
  await page.goto(BASE_URL);

  const email = `user${Date.now()}@test.com`;
  const password = 'Test@12345';

  // 2 Register new user
  await page.click('[data-testid="register-link"]');

  await page.fill('[data-testid="name"]', 'Test User');
  await page.fill('[data-testid="email"]', email);
  await page.fill('[data-testid="password"]', password);

  await page.click('[data-testid="register-button"]');

  // 3 Login with new account
  await page.click('[data-testid="login-link"]');

  await page.fill('[data-testid="email"]', email);
  await page.fill('[data-testid="password"]', password);

  await page.click('[data-testid="login-button"]');

  // 4 Search for course
  await page.fill('[data-testid="search-input"]', 'testing');
  await page.press('[data-testid="search-input"]', 'Enter');

  await page.click('[data-testid="course-card"]');

  // 5 Check basket count before
  const basketBefore = await page.locator('[data-testid="basket-count"]').innerText();

  // 6 Add course to basket
  await page.click('[data-testid="add-to-basket"]');

  const basketAfter = await page.locator('[data-testid="basket-count"]').innerText();

  // 7 Assertion
  await expect(Number(basketAfter)).toBeGreaterThan(Number(basketBefore));

});
