import { render } from '@testing-library/react'

import Form from '.'

describe('<Form />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<Form />)

    expect(container.firstChild).toHaveStyle({ 'background-color': 'white' })
  })
})
