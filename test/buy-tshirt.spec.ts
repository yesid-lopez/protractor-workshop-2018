import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
   SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
  PaymentStepPage,  BankPaymentPage, OrderSummaryPage} from '../src/page';

describe('Buy a t-shirt', () => {
  // POM Inicialization
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToCardButton();
    await(browser.sleep(3000));
    await productAddedModalPage.goToCheckoutButton();
    await(browser.sleep(3000));
    await summaryStepPage.goToCheckoutButton();
    await(browser.sleep(3000));

    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.goToCheckoutButton();
    await(browser.sleep(3000));

    await shippingStepPage.checkAgreement();
    await(browser.sleep(3000));

    await shippingStepPage.goToCheckoutButton();
    await(browser.sleep(3000));

    await paymentStepPage.goToPayByBankButton();
    await(browser.sleep(3000));
    await bankPaymentPage.goToConfirmationButton();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.getConfirmationLabelText())
    .toBe('Your order on My Store is complete.');
  });
});
