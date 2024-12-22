import React from "react";
import MyContainer from "./MyContainer";
import { Image, List, Separator, Stack, Text } from "@chakra-ui/react";
import { LuCheckCircle } from "react-icons/lu";

export default function Footer() {
  return (
    <MyContainer>
      <Stack py={10}>
        <Image
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
          maxW={20}
          alt="logo"
        />
        <Text textStyle={"xl"} fontWeight={"600"}>
          About LNT Realty
        </Text>
        <Text>
          Founded in 2000, LNT Realty is a leading real estate developer in
          India. We have delivered over 10 million sq. ft. of residential and
          commercial projects in Mumbai, Pune, and Bangalore.
        </Text>
        <Text>
          Our projects are known for their quality construction, thoughtful
          design, and timely delivery. We are committed to creating sustainable
          communities that enrich the lives of our customers.
        </Text>
      </Stack>
      <Stack bg={"gray.100"} p={8}>
        <List.Root gap="2" mb={6} variant="plain" align="center">
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCheckCircle />
            </List.Indicator>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCheckCircle />
            </List.Indicator>
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="green.500">
              <LuCheckCircle />
            </List.Indicator>
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </List.Item>
        </List.Root>
        <Text>
          <Text as={"span"} fontWeight={600}>
            Disclaimer
          </Text>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit
          mollitia, cumque soluta pariatur expedita in nulla tempora illo
          provident nemo ipsa nesciunt at itaque eveniet velit quos quod atque.
          Reprehenderit fugit atque voluptas minima ut? Aperiam odio assumenda,
          maxime, delectus porro asperiores rerum dolorem, explicabo quibusdam
          nulla blanditiis maiores! Sequi, cumque debitis? Quo ipsam amet earum
          vero deleniti non. Ullam dolores corrupti ipsam, exercitationem
          dignissimos numquam nihil, sint tempora iste nemo quasi aut. Quaerat
          dolores est recusandae velit magnam inventore molestiae, commodi illo
          et, laboriosam dolore asperiores consequatur tempore?
        </Text>
        <Separator />
        <Text textAlign={"center"} py={4}>
          © 2021 LNT Realty. All rights reserved. Terms of Service Privacy
          Policy
        </Text>
      </Stack>
    </MyContainer>
  );
}
