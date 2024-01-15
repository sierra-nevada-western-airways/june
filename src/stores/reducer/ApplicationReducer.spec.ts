import applicationReducer from "./ApplicationReducer";
import { defaultApplicationState } from "../state/ApplicationState";
import { ApplicationAction } from "../actions/common/ApplicationAction";

describe("ApplicationReducer", () => {
  it("default returns current state", () => {
    const defaultState = defaultApplicationState();

    const result = applicationReducer(defaultState, {
      action: 10 as ApplicationAction,
    });

    expect(result).toBe(defaultState);
  });
});
