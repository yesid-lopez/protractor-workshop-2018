import { ElementFinder, ElementArrayFinder, $$ } from 'protractor';

export class PersonalInformationPage {
  private form: ElementArrayFinder;
  constructor() {
    this.form = $$('form-horizontal');
  }
  public findElementByName(valueField:string): ElementFinder {
    return this.form.filter((element:ElementFinder) => {
      return element.$('input').getAttribute('type').then((valueType:string) => {
        let condition:boolean = false;
        if (valueType === 'text') {
          element.getText().then(valueText => condition = valueText ===  valueField);
        } else {
          if (valueType === 'checkbox') {
            element.getAttribute('value')
            .then(valueText => condition = valueText ===  valueField);
          } else {
            if (valueType === 'radio') {
              element.getAttribute('value')
              .then(valueText => condition = valueText ===  valueField);
            }
          }
        }
        return condition;
      });
    }).first();
  }
}
