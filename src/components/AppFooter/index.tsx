import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Box, Center, HStack, Icon, Pressable, Text } from "native-base";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const AppFooter = () => {
  const [selected, setSelected] = useState(1);

  return (
    <Box maxH={59} bg="white" safeAreaTop width="100%" alignSelf="center">
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
          opacity={selected === 0 ? 1 : 0.5}
        >
          <Center>
            <Icon
              mb="1"
              size="sm"
              color="white"
              as={
                <MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />
              }
            />
            <Text color="white" fontSize="12">Home</Text>
          </Center>
        </Pressable>

        <Pressable
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
          opacity={selected === 1 ? 1 : 0.5}
        >
          <Center>
            <Icon
              mb="1"
              size="sm"
              color="white"
              as={
              <MaterialIcons name="search" />
              }
            />
            <Text color="white" fontSize="12">Search</Text>
          </Center>
        </Pressable>

        <Pressable
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
          opacity={selected === 2 ? 1 : 0.6}
        >
          <Center>
            <Icon
              mb="1"
              size="sm"
              color="white"
              as={
                <MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />
              }
            />
            <Text color="white" fontSize="12">Cart</Text>
          </Center>
        </Pressable>

        <Pressable
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
          opacity={selected === 3 ? 1 : 0.5}
        >
          <Center>
            <Icon
              mb="1"
              size="sm"
              color="white"
              as={
                <MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />
              }
            />
            <Text color="white" fontSize="12">Account</Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}