import { ValueDefaults } from "../../common";
import type IUseLocalStorage from "./IUseLocalStorage";

export default function useLocalStorage(): IUseLocalStorage {
  const saveRefreshToken = (refreshToken: string): void => {
    localStorage.setItem("refreshToken", refreshToken);
  };

  const getRefreshToken = (): string => {
    return localStorage.getItem("refreshToken") ?? ValueDefaults.string;
  };

  const deleteRefreshToken = (): void => {
    localStorage.removeItem("refreshToken");
  };

  return { saveRefreshToken, getRefreshToken, deleteRefreshToken };
}
