import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login/Login";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    push: () => {},
  }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("Test the login page", () => {
  it("Should match the snapshot", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });

  it("Verifica se existe todas as ", () => {
    render(<Login />);

    const inputCpf = screen.getByRole("textbox", { name: "CPF" });
    const inputPassword = screen.getByLabelText("Senha");
    const buttonSendLogin = screen.getByRole("button", { name: /entrar/i });
    expect(inputCpf).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(buttonSendLogin).toBeInTheDocument();
  });
  it("Não deve permitir digitar valores não numéricos no campo de cpf", () => {
    render(<Login />);
    const inputCpf = screen.getByRole("textbox", { name: "CPF" });
    userEvent.type(inputCpf, "debora");
    expect(inputCpf).not.toHaveTextContent("debora");
  });
  it("Deve digitar o cpf caso seja apenas números", () => {
    render(<Login />);
    const inputCpf = screen.getByLabelText("CPF");
    fireEvent.change(inputCpf, { target: { value: "00000000000" } });
    expect((inputCpf as HTMLInputElement).value).toBe("000.000.000-00");
  });
});
