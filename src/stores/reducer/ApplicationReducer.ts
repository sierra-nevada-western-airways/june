import { ApplicationAction } from "../actions/common/ApplicationAction";
import IAction from "../actions/common/IAction";
import {
  ApplicationState,
  defaultApplicationState,
} from "../state/ApplicationState";

export default function applicationReducer(
  state: ApplicationState,
  action: IAction,
): ApplicationState {
  switch (action.action) {
    case ApplicationAction.LogIn: {
      return state;
    }
    case ApplicationAction.LogOut: {
      return defaultApplicationState();
    }
    default: {
      return state;
    }
  }
}
