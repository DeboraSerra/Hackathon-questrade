import { UserRegister, UserPayload, ValidateResponse } from "../../../domain/models";
import { RegisterController } from "./register";
import { HttpRequest, InvalidParamError, MissingParamError, NotFoundError, Register, ServerError, ValidateRegisterBody } from "./register-protocols";

const USER_REGISTER: UserRegister = {
  cpf: "any_cpf",
  email: "any@mail.com",
  password: "any_password",
  proofOfIncome: "any_proof",
  phone: "any_phone"
}

const HTTP_REQUEST: HttpRequest = {
  body: USER_REGISTER
}

const USER_PAYLOAD: UserPayload = {
  cpf: "any_cpf",
  email: "any@mail.com"
}

const VALIDATE_RESPONSE: ValidateResponse = {
  error: "",
  param: "",
  message: ""
}

interface ControllerTypes {
  sut: RegisterController
  registerService: Register
  validateRegisterBodyService: ValidateRegisterBody
}

const makeRegisterService = (): Register => {
  class RegisterStub implements Register {
    handle(user: UserRegister): Promise<UserPayload> {
      return new Promise(resolve => resolve(USER_PAYLOAD));
    }
  }

  return new RegisterStub();
}

const makeValidateRegisterBody = (): ValidateRegisterBody => {
  class ValidateStub implements ValidateRegisterBody {
    handle(user: UserRegister): Promise<ValidateResponse> {
      return new Promise(resolve => resolve(VALIDATE_RESPONSE))
    }
  }

  return new ValidateStub();
}

const makeSut = (): ControllerTypes => {
  const registerService = makeRegisterService();
  const validateRegisterBodyService = makeValidateRegisterBody();
  const sut = new RegisterController(registerService, validateRegisterBodyService);

  return {
    sut,
    registerService,
    validateRegisterBodyService
  }
}

describe("Register Controller", () => {
  it('Should call ValidateRegisterService with correct values.', async () => {
    const { sut, validateRegisterBodyService} = makeSut();
    
    const validateSpy = jest.spyOn(validateRegisterBodyService, "handle");
    sut.handle(HTTP_REQUEST);

    expect(validateSpy).toHaveBeenCalledWith(HTTP_REQUEST.body);
  })

  it("Should return 400 if no cpf is provided", async () => {
    const { sut, validateRegisterBodyService } = makeSut();

    const cpfError: ValidateResponse = {
      error: 'MissingParam',
      param: "cpf",
      message: ""
    }
    
    jest.spyOn(validateRegisterBodyService, 'handle').mockReturnValueOnce(new Promise(resolve => resolve(cpfError)))

    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('cpf'));
  })

  it("Should return 400 if no email is provided", async () => {
    const { sut, validateRegisterBodyService } = makeSut();

    const emailError: ValidateResponse = {
      error: 'MissingParam',
      param: "email",
      message: ""
    }
    
    jest.spyOn(validateRegisterBodyService, 'handle').mockReturnValueOnce(new Promise(resolve => resolve(emailError)))

    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  })

  it("Should return 400 and right message if cpf is invalid", async () => {
    const { sut, validateRegisterBodyService } = makeSut();

    const cpfError: ValidateResponse = {
      error: 'InvalidParam',
      param: "cpf",
      message: "CPF not exists"
    }
    
    jest.spyOn(validateRegisterBodyService, 'handle').mockReturnValueOnce(new Promise(resolve => resolve(cpfError)))

    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamError(cpfError.param, cpfError.message));
  })

  it("Should return 400 and right message if cpf is invalid", async () => {
    const { sut, validateRegisterBodyService } = makeSut();

    const phoneError: ValidateResponse = {
      error: 'InvalidParam',
      param: "phone",
      message: "phone is invalid"
    }
    
    jest.spyOn(validateRegisterBodyService, 'handle').mockReturnValueOnce(new Promise(resolve => resolve(phoneError)))

    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamError(phoneError.param, phoneError.message));
  })

  it('Should return 500 if ValidateRegisterBody throws', async () => {
    const { sut, validateRegisterBodyService } = makeSut();
    
    jest.spyOn(validateRegisterBodyService, "handle").mockImplementationOnce(() => {
      throw new Error();
    })
    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  })

  it('Should call Register with correct values.', async () => {
    const { sut, registerService} = makeSut();
    
    const registerSpy = jest.spyOn(registerService, "handle");
    sut.handle(HTTP_REQUEST);

    expect(registerSpy).toHaveBeenCalledWith(HTTP_REQUEST.body);
  })

  it('Should return 500 if Register throws', async () => {
    const { sut, registerService } = makeSut();
    
    jest.spyOn(registerService, "handle").mockImplementationOnce(() => {
      throw new Error();
    })
    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError());
  })

  it('Should return 201 if valid values is provided.', async () => {
    const { sut } = makeSut();
    
    const httpResponse = await sut.handle(HTTP_REQUEST);

    expect(httpResponse.statusCode).toBe(201);
    expect(httpResponse.body).toBe(USER_PAYLOAD);
  })
})