import { Stack, StackProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  props?: StackProps;
};

export default function Card({ children, props }: Props) {
  return (
    <Stack borderRadius={"md"} shadow={"lg"} p={6} spaceY={6} {...props}>
      {children}
    </Stack>
  );
}
