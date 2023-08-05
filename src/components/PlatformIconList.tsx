import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms = [] }: Props) {
  const iconMap = new Map<string, IconType>([
    ["pc", FaWindows],
    ["playstation", FaPlaystation],
    ["xbox", FaXbox],
    ["nintendo", SiNintendo],
    ["mac", FaApple],
    ["linux", FaLinux],
    ["android", FaAndroid],
    ["ios", MdPhoneIphone],
    ["web", BsGlobe],
  ]);
  return (
    <HStack marginY={"1em"}>
      {platforms.map((platform) => (
        <Icon as={iconMap.get(platform.slug)} key={platform.id} />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
