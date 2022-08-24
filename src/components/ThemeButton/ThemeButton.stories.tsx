import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ThemeButton } from './index'

export default {
  title: 'ThemeButton',
  component: ThemeButton,
} as ComponentMeta<typeof ThemeButton>

export const Button = () => <ThemeButton text="Trocar tema" />
