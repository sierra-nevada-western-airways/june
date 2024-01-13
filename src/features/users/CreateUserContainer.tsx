import { CreateUserRequest } from "../../data/Api";
import apiClient from "../../data/ApiClient";
import CreateUser from "./CreateUser";

const CreateUserContainer: React.FC = () => {
  const createUser = async (request: CreateUserRequest): Promise<void> => {
    apiClient()
      .user.createUser(request)
      .then((response) => {});
  };

  return <CreateUser createUser={createUser} />;
};

export default CreateUserContainer;
