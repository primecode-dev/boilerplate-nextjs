import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /boilerplate next.js/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#171738' })
    expect(
      screen.getByRole('heading', { name: /boilerplate next.js/i })
    ).toHaveStyle({ color: '#c3c8d9' })
    expect(
      screen.getByRole('heading', { name: /projeto iniciado com sucesso/i })
    ).toHaveStyle({ color: '#7180b9' })
  })
})
