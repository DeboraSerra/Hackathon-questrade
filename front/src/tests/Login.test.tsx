import Login from "../components/Login/Login"
import { render } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    push: () => {}
  })
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('Test the login page', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  })
})