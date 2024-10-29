import { html, TemplateResult } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { ArgTypes, ColorControl } from '@storybook/blocks';
import '../src/rotary.js';

const meta: Meta = {
  title: 'Rotary',
  component: 'rotary-control',
};
 
export default meta;
type Story = StoryObj;
 
export const Rotary: Story = {
  name: 'Rotary',
  argTypes: {
    colorBackground: { control: 'color', defaultValue: '#22f' },
    colorForeground: { control: 'color', defaultValue: '#4caf50' },
    colorTrack: { control: 'color', defaultValue: '#ccc' },
  },
  tags: ['autodocs'],
  args: {
    value: 20,
    width: 300,
    height: 300,
    label: 'Gain',
    colorBackground: '#117',
    colorForeground: '#ccc',
    colorTrack: '#66d',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Linear: Story = {
  args: {
    primary: true,
    label: 'Linear',
  },
}

/*
export default {
  title: 'Rotary',
  component: 'rotary-control',
};
*/

/*interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}*/

/*
interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const RotaryTemplate: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <rotary-control style="--plugin-webui-background-color: ${backgroundColor}" .header=${header}></rotary-control>
`;

export const Rotary = RotaryTemplate.bind({});
Rotary.args = {
  header: 'Rotary Test',
};
*/