export default interface IUseAuthorization {
  authError: string;
  logIn: (userName: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}
