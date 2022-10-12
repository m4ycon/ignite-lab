import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Lorem ipsum',
  },
  argTypes: {},
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
