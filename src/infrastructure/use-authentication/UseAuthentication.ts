import { useState } from "react";
import IUseAuthorization from "./IUseAuthentication";
import { ValueDefaults } from "../../common";
import { UserNameSignInRequest } from "../../data/Api";
import apiClient from "../../data/ApiClient";
import { useNavigate } from "react-router-dom";
import { StatusCodes } from "../use-data-fetch/StatusCodes";
import AccessTokenPayload from "../../data/AccessTokenPayload";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../use-local-storage/UseLocalStorage";
import useApplicationStore from "../../hooks/use-application-store/UseApplicationStore";
import { logInAction } from "../../stores/actions/LogInAction";

export default function useAuthentication(): IUseAuthorization {
  const navigate = useNavigate();
  const localStorage = useLocalStorage();
  const [, dispatcher] = useApplicationStore();

  const [authError] = useState<string>(ValueDefaults.string);

  const logIn = async (userName: string, password: string): Promise<void> => {
    const request: UserNameSignInRequest = { userName, password };

    try {
      const response = await apiClient().user.userNameSignIn(request);
      if (response.status === StatusCodes.Success.valueOf()) {
        const payload = jwtDecode<AccessTokenPayload>(
          response.data.bearerToken,
        );

        localStorage.saveRefreshToken(response.data.refreshToken);

        dispatcher(logInAction(payload.UserName, response.data.bearerToken));
      }
      return navigate("");
    } catch {
      navigate("/Error");
    }
  };

  const logOut = (): Promise<void> => {
    return new Promise(() => {
      return;
    });
  };

  return { authError, logIn, logOut };
}
