import { ApplicationAction } from "./common/ApplicationAction";
import IPayloadAction from "./common/IPayloadAction";

export interface LogInPayload {
  user: string;
  accessToken: string;
}

export function logInAction(
  user: string,
  accessToken: string,
): IPayloadAction<LogInPayload> {
  return {
    action: ApplicationAction.LogIn,
    payload: {
      user,
      accessToken,
    },
  };
}
