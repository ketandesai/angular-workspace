import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from '../lib/components/text-input/text-input.component';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction

const fc = () =>
  new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);

const meta: Meta<TextInputComponent> = {
  title: 'Example/TextInputComponent',
  component: TextInputComponent,
  tags: ['autodocs'],
  render: (args: TextInputComponent) => ({
    props: {
      ...args,
      backgroundColor: 'green',
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
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder Text',
  },
};

