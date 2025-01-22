import React from "react";
import { Provider } from "../ui/provider";
import { Toaster } from "../ui/toaster";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header/Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Provider>
      <Toaster />
      <Grid
        as={Container}
        maxW={"container.xl"}
        mx={"auto"}
        w={"full"}
        templateColumns={{ base: "1fr", lg: "3fr 1fr" }}
        gap={4}>
        <GridItem>
          <Header />
          {children}
          <Footer />
        </GridItem>
        <GridItem hideBelow={"lg"}>
          <SideBar />
        </GridItem>
      </Grid>
    </Provider>
  );
}
