import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('Smoke: user can add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await login.shouldBeLoggedIn();
});