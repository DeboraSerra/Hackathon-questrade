import { UserLogin, ValidateResponse } from "../../../models";

export interface ValidateLoginBody {
  handle(user: UserLogin): Promise<ValidateResponse>;
}
