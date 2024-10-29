import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { PluginWebui } from '../src/plugin-webui.js';
import '../src/plugin-webui.js';

describe('PluginWebui', () => {
  let element: PluginWebui;
  beforeEach(async () => {
    element = await fixture(html`<plugin-webui></plugin-webui>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
