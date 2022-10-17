import { StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignInPage } from '.'

export default {
  title: 'Pages/Sign in',
  component: SignInPage,
  args: {},
  argTypes: {},
}

export const Default: StoryObj<{}> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'e-ma@i.l')
    userEvent.type(canvas.getByPlaceholderText('********'), 'senha-secreta')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  },
}
