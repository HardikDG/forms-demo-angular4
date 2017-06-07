import { FormsSamplePage } from './app.po';

describe('forms-sample App', () => {
  let page: FormsSamplePage;

  beforeEach(() => {
    page = new FormsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
