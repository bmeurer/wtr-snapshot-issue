import { expect, fixture } from '@open-wc/testing';

describe('foo', () => {
  it('renders foo correctly', async () => {
    const el = await(fixture(`<h1>foo</h1>`));
    expect(el).dom.to.equalSnapshot();
  });
});
