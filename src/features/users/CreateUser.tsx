import React from "react";
import { CreateUserRequest } from "../../data/Api";
import { useTextInput } from "../../hooks/use-input/UseTextInput";
import TextInput from "../../components/forms/TextInput";

const CreateUser: React.FC<CreateUserProperties> = ({ createUser }) => {
  const userName = useTextInput();
  const email = useTextInput();
  const password = useTextInput();

  const handleOnSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    await createUser({
      userName: userName.value,
      email: email.value,
      password: password.value,
    });

    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextInput placeholder="UserName" useInput={userName} />
      <div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

interface CreateUserProperties {
  createUser: (request: CreateUserRequest) => Promise<void>;
}

export default CreateUser;
