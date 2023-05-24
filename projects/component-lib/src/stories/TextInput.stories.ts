import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from '../lib/components/text-input/text-input.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TextInputComponent> = {
  title: 'Example/TextInputComponent',
  component: TextInputComponent,
  tags: ['autodocs'],
  render: (args: TextInputComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<TextInputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Some Test Label',
  },
};
