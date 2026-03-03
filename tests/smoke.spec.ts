import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';


test('Smoke: user can add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await login.shouldBeLoggedIn();

  await products.verifyLoaded();
  await products.addFirstProduct();
  await products.openCart();

  await cart.verifyProductInCart();
});