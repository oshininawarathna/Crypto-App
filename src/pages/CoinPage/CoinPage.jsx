import React from "react";

import { useParams, Link } from "react-router-dom";
import { Box, Center, Button } from "@chakra-ui/react";
import { Image, Badge } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import useFetch from "../../Hook/useFetch";
const CoinPage = () => {
  let { id } = useParams();

  const [data, isLoading] = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  if (isLoading) {
    return (
      <>
        <Progress size="xs" isIndeterminate />
      </>
    );
  }
  return (
    <div>
      <Center>
        <Box
          boxShadow="2xl"
          filter="auto"
          brightness="90%"
          backgroundColor="gray.100"
          borderColor="gray.200"
          w={"50%"}
          m={30}
          borderWidth="7px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Center>
            {" "}
            <Image boxSize="200px" m={10} src={data?.image.large} alt="image" />
          </Center>
          <Center>
            <Box mb={5} p={3}>
              <Center>
                <Box display="flex" alignItems="baseline">
                  <Badge
                    fontSize="1.5rem"
                    borderRadius="full"
                    px="2"
                    colorScheme="teal"
                    ml={2}
                  >
                    {data?.name}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  ></Box>
                </Box>
              </Center>

              <Box mt="2" alignItems="center">
                <b>Current Price :</b>
                <Box
                  as="span"
                  ml="4"
                  color="gray.600"
                  fontSize="md"
                  fontWeight="bold"
                >
                  $ {data?.market_data.current_price.usd.toLocaleString()}
                </Box>
              </Box>
              <Box mt="2" alignItems="center">
                <b>Market Cap :</b>
                <Box
                  as="span"
                  ml="4"
                  color="gray.600"
                  fontSize="md"
                  fontWeight="bold"
                >
                  $ {data?.market_data.market_cap.usd.toLocaleString()}
                </Box>
              </Box>
              <Box mt="2" alignItems="center">
                <b>Total Volume : </b>
                <Box
                  as="span"
                  ml="4"
                  color="gray.600"
                  fontSize="md"
                  fontWeight="bold"
                >
                  $ {data?.market_data.total_volume.usd.toLocaleString()}
                </Box>
              </Box>
              <Box mt="2" alignItems="center" fontWeight="bold">
                <b>Total Supply : </b>
                <Box as="span" ml="4" color="gray.600" fontSize="sm">
                  $ {data?.market_data.total_supply.toLocaleString()}
                </Box>
              </Box>
              <Center>
                <Link to="/">
                  {" "}
                  <Button mt={4} colorScheme="cyan">
                    Go Back
                  </Button>
                </Link>
              </Center>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default CoinPage;
