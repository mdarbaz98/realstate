import { Container, ContainerProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends Omit<ContainerProps, "children"> {
  children: ReactNode;
  as?: React.ElementType;
}

export default function MyContainer({ children, ...props }: Props) {
  return (
    <Container
      {...props}
      px={{ base: 2, md: 4 }}
      width={"100%"}
      maxW={{
        lg: "container.xl",
        xl: "1400px",
      }}
      mx={"auto"}>
      {children}
    </Container>
  );
}
