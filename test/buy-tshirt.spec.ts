import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
   SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
  PaymentStepPage,  BankPaymentPage, OrderSummaryPage} from '../src/page';

describe('Given a clothes website', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('when you want to buy T-Shirts', () => {
    beforeAll(async () =>  {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.goToCardButton();
      await productAddedModalPage.goToCheckoutButton();
      await summaryStepPage.goToCheckoutButton();
    });

    describe('and you sing-in', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();

        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('and you set shipping values', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addressStepPage.goToCheckoutButton();
          await shippingStepPage.chooseShippingOption();
        });

        describe('and you set payment values', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.goToPayByBankButton();
            await bankPaymentPage.goToConfirmationButton();
          });

          it('then should be bought a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getConfirmationLabelText())
            .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
