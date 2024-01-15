import { ApplicationAction } from "./common/ApplicationAction";
import IAction from "./common/IAction";

export function logOutAction(): IAction {
  return {
    action: ApplicationAction.LogOut,
  };
}
