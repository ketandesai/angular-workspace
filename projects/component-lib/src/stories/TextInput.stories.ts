import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from '../lib/components/text-input/text-input.component';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction

const fc = () =>
  new FormControl('stuff');

const meta: Meta<TextInputComponent> = {
  title: 'Example/TextInputComponent',
  component: TextInputComponent,
  tags: ['autodocs'],
  render: (args: TextInputComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
      control: fc?.(),
    },
  }),
  argTypes: {},
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
    moduleMetadata({
      declarations: [],
      imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<TextInputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Some Test Label',
    placeholder: 'Placeholder Text',
  },
};
