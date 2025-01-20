import { HStack, Spacer } from "@chakra-ui/react";
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
        <Link href="/">Logo</Link>
        <Spacer hideFrom="md" />
        <NavbarLinks hideBelow="md" />
      </HStack>
    </MyContainer>
  );
}
