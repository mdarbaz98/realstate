import { Box, Flex, Image, Stack, Table, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Card from "../layout/Card";
import { Button } from "../ui/button";

export default function PriceTable() {
  return (
    <Card>
      <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap={4}>
        <GridItem colSpan={{ lg: 2 }}>
          <Table.Root
            textTransform={"capitalize"}
            hideBelow={"lg"}
            size="sm"
            interactive
          >
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Carpet Area</Table.ColumnHeader>
                <Table.ColumnHeader>Type</Table.ColumnHeader>
                <Table.ColumnHeader>Price</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell>{item.carpetArea}</Table.Cell>
                  <Table.Cell>{item.type}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Flex justifyContent={"space-between"}>
                      <Text>{item.price}</Text>{" "}
                      <Button size={"sm"} colorPalette={"yellow"}>
                        Price Breakup
                      </Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
          <Box hideFrom={"lg"} border={"1px solid"} borderColor={"gray.200"}>
            {items.map((item, idx) => (
              <Stack
                textTransform={"capitalize"}
                key={idx}
                textAlign={"center"}
                bg={idx === 0 ? "gray.100" : "white"}
                p={4}
              >
                <Text textStyle={{ base: "xl", md: "3xl" }} fontWeight={700}>
                  {item.type}
                </Text>
                <Text>Carpet Area {item.carpetArea}</Text>
                <Text fontWeight={700}>Price {item.price}</Text>
              </Stack>
            ))}
          </Box>
        </GridItem>
        <GridItem as={Stack} colSpan={{ lg: 1 }}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1671461774955-7aab3ab41b90?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="random image"
            maxH={{ base: "300px", lg: "full" }}
            borderRadius="md"
          />
          <Button colorPalette={"yellow"}>Download Brochure</Button>
        </GridItem>
      </Grid>
    </Card>
  );
}

const items = [
  { carpetArea: "222- 422 ft", type: "1 bhk", price: "2.99 cr" },
  { carpetArea: "222- 422 ft", type: "2 bhk", price: "9.99 cr" },
  { carpetArea: "222- 422 ft", type: "3 bhk", price: "150.0 cr" },
];
