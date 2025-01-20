"use client";
import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Button } from "../ui/button";
import ContactForm from "../module/ContactForm";

export default function SideBar() {
  return (
    <Box
      position={"sticky"}
      textTransform={"capitalize"}
      top={0}
      bg={"gray.50"}
    >
      <VStack bg={"gray.100"} spaceY={2} p={4} pt={0} gap={"1px"}>
        <HStack gap={"1px"} w={"full"}>
          <Button flex={1} size={"sm"}>
            Pre register
          </Button>
          <Button flex={1} size={"sm"}>
            +91 9876543210
          </Button>
        </HStack>
        <Button colorPalette={"yellow"} size={"sm"}>
          Instant callback
        </Button>
      </VStack>
      <ContactForm />
    </Box>
  );
}
