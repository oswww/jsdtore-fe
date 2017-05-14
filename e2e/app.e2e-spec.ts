import { JdstoreFePage } from './app.po';

describe('jdstore-fe App', () => {
  let page: JdstoreFePage;

  beforeEach(() => {
    page = new JdstoreFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
