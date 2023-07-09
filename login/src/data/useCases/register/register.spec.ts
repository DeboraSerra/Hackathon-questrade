import { UserPayload, UserRegister, ValidateResponse } from "../../../domain/models"
import { JwtSign, UserSign } from "../../../domain/models/user-sign"
import { RegisterRepositorie } from "../../repositories/register"
import { RegisterAdapter } from "./register"

const USER_REGISTER: UserRegister = {
  cpf: "any_cpf",
  email: "any@mail.com",
  password: "any_password",
  proofOfIncome: "any_proof",
  phone: "any_phone"
}

const USER_PAYLOAD: UserPayload = {
  token: "any_token"
}

const USER_SIGN: UserSign = {
  cpf: USER_REGISTER.cpf,
  email: USER_REGISTER.email,
  phone: USER_REGISTER.phone
}

interface SutTypes {
  sut: RegisterAdapter
  repositorie: RegisterRepositorie
  jwt: JwtSign
}

const makeRepositorie = (): RegisterRepositorie => {
  class RegisterRepositorieStub implements RegisterRepositorie {
    handle(user: UserRegister): Promise<void> {
      return new Promise(resolve => resolve());
    }
  }

  return new RegisterRepositorieStub();
}

const makeJwt = (): JwtSign => {
  class Jwt implements JwtSign {
    handle(user: UserSign): string {
      return USER_PAYLOAD.token;
    }
  }

  return new Jwt();
}

const makeSut = (): SutTypes => {
  const repositorie = makeRepositorie();
  const jwt = makeJwt();
  const sut = new RegisterAdapter(repositorie, jwt);

  return {
    sut,
    repositorie,
    jwt
  }
}

describe("RegisterAdapter", () => {
  it('Should call repositorie with correct values.', async () => {
    const { sut, repositorie } = makeSut();
    
    const repositorieSpy = jest.spyOn(repositorie, "handle");
    sut.handle(USER_REGISTER);

    expect(repositorieSpy).toHaveBeenCalledWith(USER_REGISTER);
  })

  it("Should throw if repositorie throws", async () => {
    const { sut, repositorie } = makeSut();
    
    jest.spyOn(repositorie, "handle").mockReturnValueOnce(new Promise((_r, reject) => reject(new Error())));
    const promise = sut.handle(USER_REGISTER);

    expect(promise).rejects.toThrow();
  })

  it("Should call JwtSign with correct values", async () => {
    const { sut, jwt } = makeSut();
    
    const jwtSpy = jest.spyOn(jwt, 'handle');

    await sut.handle(USER_REGISTER);

    expect(jwtSpy).toHaveBeenCalledWith(USER_SIGN);
  })

  it('Should return the correct token if valid values is provided.', async () => {
    const { sut } = makeSut();
    
    const response = await sut.handle(USER_REGISTER);

    expect(response).toEqual(USER_PAYLOAD);
  })
})