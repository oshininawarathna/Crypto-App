import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Center, Button } from "@chakra-ui/react";
import { Image, Badge } from "@chakra-ui/react";
const CoinCard = ({ id, icon, Name, Symbol, price, marketCap }) => {
  let navigate = useNavigate();
  return (
    <div>
      {" "}
      <Box
        boxShadow="2xl"
        filter="auto"
        brightness="90 %"
        backgroundColor="gray.200"
        borderColor="gray.200"
        maxW="sm"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center>
          {" "}
          <Image boxSize="150px" m={10} src={icon} alt="image" />
        </Center>
        <Center>
          <Box p="3" mb={4}>
            <Center>
              <Box display="flex" alignItems="baseline">
                <Badge
                  fontSize="1rem"
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                  ml={2}
                >
                  {Name}
                </Badge>
                <Box
                  color="gray.900"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {Symbol}
                </Box>
              </Box>
            </Center>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            ></Box>

            <Box mt={2}>
              <b>Current Price:</b>
              <Box
                as="span"
                color="gray.600"
                fontSize="sm"
                ml={3}
                fontWeight="bold"
              >
                $ {price.toFixed(2)}
              </Box>
            </Box>

            <Box mt="2" alignItems="center">
              <b> market cap:</b>
              <Box
                as="span"
                ml="3"
                color="gray.600"
                fontSize="sm"
                fontWeight="bold"
              >
                {marketCap.toLocaleString()}
              </Box>
            </Box>
            <Center>
              {" "}
              <Button
                mt={4}
                colorScheme="cyan"
                onClick={() => {
                  navigate(`/CoinPage/${id}`);
                }}
              >
                More Info
              </Button>
            </Center>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default CoinCard;
