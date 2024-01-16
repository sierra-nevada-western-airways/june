import React from "react";
import { CreateUserRequest } from "../../data/Api";
import { useTextInput } from "../../hooks/use-input/UseTextInput";
import TextInput from "../../components/forms/TextInput";
import Container from "../../components/layout/container/Container";

const CreateUser: React.FC<CreateUserProperties> = ({ createUser }) => {
  const userName = useTextInput();
  const email = useTextInput();
  const password = useTextInput();

  const myFunction = () => {
    return;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    void createUser({
      userName: userName.value,
      email: email.value,
      password: password.value,
    }).then(() => {
      return;
    });

    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <TextInput placeholder="UserName" useInput={userName} />
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </Container>
  );
};

interface CreateUserProperties {
  createUser: (request: CreateUserRequest) => Promise<void>;
}

export default CreateUser;
