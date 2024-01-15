import applicationReducer from "./ApplicationReducer";
import { defaultApplicationState } from "../state/ApplicationState";
import { Action } from "../actions/Action";

describe("ApplicationReducer", () => {
  it("default returns current state", () => {
    const defaultState = defaultApplicationState();

    const result = applicationReducer(defaultState, { action: 10 as Action });

    expect(result).toBe(defaultState);
  });
});
