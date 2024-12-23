"use client";
import React from "react";
import Card from "../layout/Card";
import { Grid, Image } from "@chakra-ui/react";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Gallery() {
  return (
    <Card>
      <PhotoProvider>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}>
          {[1, 2, 3, 4].map((item, idx) => (
            <PhotoView
              key={idx}
              src="https://images.unsplash.com/photo-1728326475125-3b4b62b8d2e6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              <Image
                key={idx}
                w={"full"}
                minH={"250px"}
                objectFit={"cover"}
                maxH={"600px"}
                src={
                  "https://images.unsplash.com/photo-1728326475125-3b4b62b8d2e6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rounded={"md"}
                alt=""
              />
            </PhotoView>
          ))}
        </Grid>
      </PhotoProvider>
    </Card>
  );
}
