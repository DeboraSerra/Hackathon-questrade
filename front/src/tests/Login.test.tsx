import { title } from "process"
import Login from "../components/Login/Login"
import { render, screen, fireEvent } from '@testing-library/react'

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
    const {container} = render(<Login />);
    const titleForm = screen.getByText('Login');
    expect(titleForm).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  })

  it('Verifica se existe todas as ', () => {
    render(<Login />);

    const inputCpf = screen.getByTestId('login-input-cpf');
    const inputPassword = screen.getByTestId('login-input-password');
    const buttonSendLogin = screen.getByTestId('login-btn-send');
    expect(inputCpf).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(buttonSendLogin).toBeInTheDocument();
  })
})