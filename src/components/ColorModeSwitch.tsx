import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>{colorMode[0].toUpperCase() + colorMode.slice(1)} Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
