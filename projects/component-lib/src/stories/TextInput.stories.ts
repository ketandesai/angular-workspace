import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from '../lib/components/text-input/text-input.component';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { moduleMetadata, applicationConfig} from '@storybook/angular';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
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
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ]
};

export default meta;
type Story = StoryObj<TextInputComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Some Test Label',
    control: new FormControl('value'),
    placeholder: "Placeholder Text",

  },
};



