import { UserRegister, ValidateResponse } from "../../../models";

export interface ValidateRegisterBody {
  handle(user: UserRegister): Promise<ValidateResponse>;
}
