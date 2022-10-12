import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    placeholder: 'Lorem ipsum',
    children: [
      <TextInput.Icon>
        <Envelope size={24} />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type something here" />,
    ],
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
