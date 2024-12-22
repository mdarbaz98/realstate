"use client";
import { Link, Stack, Text, type StackProps } from "@chakra-ui/react";
import { LinkItem } from "../../../types";
import {
  FaFileDownload,
  FaHome,
  FaLocationArrow,
  FaVideo,
  FaWifi,
} from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { GiFloorPolisher } from "react-icons/gi";
import { TfiGallery } from "react-icons/tfi";

export const NavbarLinks = (props: StackProps) => {
  const headerLinks: LinkItem[] = [
    { label: "Home", href: "/", icon: FaHome },
    { label: "Price", href: "/Price", icon: FaCircleDollarToSlot },
    {
      label: "Site & floor plan",
      href: "/site-and-floor-plans",
      icon: GiFloorPolisher,
    },
    { label: "Amenities", href: "/amenities", icon: FaWifi },
    { label: "Gallery", href: "/gallery", icon: TfiGallery },
    { label: "Location", href: "/location", icon: FaLocationArrow },
    { label: "virtual site visit", href: "/virtual-site-visit", icon: FaVideo },
    { label: "Contact", href: "/contact", icon: FaFileDownload },
  ];

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      gap={{ base: "6", md: "8" }}
      {...props}>
      {headerLinks.map((link) => (
        <Link as={Stack} key={link.label} href={link.href}>
          <link.icon size={18} />
          <Text as={"span"}>{link.label}</Text>
        </Link>
      ))}
    </Stack>
  );
};
