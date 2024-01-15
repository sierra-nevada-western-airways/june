import IAction from "./IAction";

export default interface IPayloadAction<T> extends IAction {
  payload: T;
}
