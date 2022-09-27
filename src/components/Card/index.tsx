import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AspectRatio, Box, Center, Heading, HStack, Icon, IconButton, Image, Stack, StatusBar, Text } from "native-base";

export const Card = () => {
  return (
    <Center flex='1' bg='indigo.100'>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }}
          _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              px="3"
              py="1.5"
              bottom="0"
              bg="violet.500"
              position="absolute"
              _dark={{
                bg: "violet.400"
              }}
              _text={{
                fontSize: "xs",
                fontWeight: "700",
                color: "warmGray.50",
              }}
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">The Garden City</Heading>
              <Text
                mt="-1"
                ml="-0.5"
                fontSize="xs"
                fontWeight="500"
                _light={{
                  color: "violet.500"
                }}
                _dark={{
                  color: "violet.400"
                }}
              >
                The Silicon Valley of India.
              </Text>
            </Stack>

            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech
              industry. The city is also known for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  fontWeight="400"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200"
                  }}
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}