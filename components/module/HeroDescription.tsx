import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "../ui/button";
import Card from "../layout/Card";

export default function HeroDescription() {
  return (
    <Card>
      <Heading as="h1" textStyle={"4xl"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        eos.
      </Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
        consectetur vitae libero hic delectus voluptatem atque? Rerum, ipsam
        iure pariatur recusandae eaque eligendi incidunt vero quam reiciendis
        alias repudiandae consectetur? Labore est assumenda delectus quisquam
        architecto ex rem aliquam nesciunt adipisci totam deleniti amet possimus
        itaque ea aut perferendis inventore quia beatae facilis, debitis
        consequuntur. Beatae repudiandae eligendi id accusamus.
      </Text>
      <Button>Download Brochure</Button>
    </Card>
  );
}
