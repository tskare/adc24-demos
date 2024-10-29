import { html, TemplateResult } from 'lit';
import '../src/plugin-webui.js';

export default {
  title: 'PluginWebui',
  component: 'plugin-webui',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <plugin-webui style="--plugin-webui-background-color: ${backgroundColor}" .header=${header}></plugin-webui>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
