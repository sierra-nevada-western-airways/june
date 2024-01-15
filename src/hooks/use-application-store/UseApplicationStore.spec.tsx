import { act } from "@testing-library/react";
import { ApplicationContext } from "../../stores/store/ApplicationStore";
import useApplicationStore from "./UseApplicationStore";
import { renderHook } from "@testing-library/react";
import { defaultApplicationState } from "../../stores/state/ApplicationState";
import { ReactNode, useReducer } from "react";
import applicationReducer from "../../stores/reducer/ApplicationReducer";

const StoreWrapper: React.FC<StoreWrapperProperties> = ({ children }) => {
  const [state, dispatcher] = useReducer(
    applicationReducer,
    defaultApplicationState(),
  );

  return (
    <ApplicationContext.Provider
      value={{
        state,
        dispatcher,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

interface StoreWrapperProperties {
  children: ReactNode;
}

describe("UseStore", () => {
  it("has correct state", () => {
    const { result } = renderHook(() => useApplicationStore(), {
      wrapper: StoreWrapper,
    });

    act(() => {
      const [state] = result.current;

      expect(state.isLoggedIn).toBeFalse();
      expect(state.customerEmail).toBe("");
    });
  });
});
