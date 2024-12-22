import { HStack, Image, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { MobilePopover } from "./MobilePopover";
import MyContainer from "../MyContainer";
export default function Header() {
  return (
    <MyContainer>
      <HStack justify="space-between" py={2}>
        <MobilePopover>
          <NavbarLinks />
        </MobilePopover>
        <Link href="/">
          <Image
            src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            w={20}
            h={10}
          />
        </Link>
        <Spacer hideFrom="md" />
        <NavbarLinks hideBelow="md" />
      </HStack>
    </MyContainer>
  );
}
