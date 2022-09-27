import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";

export const AppBar = () => {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

      <Box safeAreaTop bg="violet.600" />

      <HStack bg="indigo.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>

        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </>
  );
}