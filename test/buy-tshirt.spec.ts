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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToCardButton();
    await productAddedModalPage.goToCheckoutButton();
    await summaryStepPage.goToCheckoutButton();
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.goToCheckoutButton();
    await shippingStepPage.chooseShippingOption();
    await paymentStepPage.goToPayByBankButton();
    await bankPaymentPage.goToConfirmationButton();

    await expect(orderSummaryPage.getConfirmationLabelText())
    .toBe('Your order on My Store is complete.');
  });
});
