export default interface IUseLocalStorage {
  saveRefreshToken: (refreshToken: string) => void;
  getRefreshToken: () => string;
  deleteRefreshToken: () => void;
}
