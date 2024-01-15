import { ReactNode } from "react";

const Container: React.FC<ContainerProperties> = ({ children }) => {
  return <div className="container">{children}</div>;
};

interface ContainerProperties {
  children: ReactNode;
}

export default Container;
