import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './index'

describe('App', () => {
  test('should render Hello World', () => {
    render(<Home />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
