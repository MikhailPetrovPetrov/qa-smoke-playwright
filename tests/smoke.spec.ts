import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';



test('Smoke: user can add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const stepOne = new CheckoutStepOnePage(page);
  const overview = new CheckoutOverviewPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await login.shouldBeLoggedIn();

  await products.verifyLoaded();
  await products.addFirstProduct();
  await products.openCart();

  await cart.verifyProductInCart();
  await cart.checkout();

  await stepOne.fillInformation('Mikhail', 'Petrov', '11000');
  await stepOne.continue();

  await overview.shouldDisplayItems();
  await overview.shouldDisplayTotal();
  await overview.finish();
});