import { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta: Meta = {
  component: Container,
  tags: ["autodocs"],
  parameters: {
    jest: "Container.spec.tsx",
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: () => (
    <Container>
      <p>I'm in a container.</p>
    </Container>
  ),
};
