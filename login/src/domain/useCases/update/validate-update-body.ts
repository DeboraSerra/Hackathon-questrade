import { UserUpdate, ValidateResponse } from "../../models";

export interface ValidateUpdateBody {
  handle(user: UserUpdate): Promise<ValidateResponse>;
}
