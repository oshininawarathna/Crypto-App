import React, { useState } from "react";

import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import CoinCard from "../../components/CoinCard/CoinCard";
import useFetch from "../../Hook/useFetch";
const Home = () => {
  const [search, setSearch] = useState("");
  const [data, isLoading] = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const filterCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Text textAlign={["left", "center"]} fontSize="2rem" fontWeight="bold">
        {" "}
        Crypto App
      </Text>
      <Center>
        <Input
          w={"30%"}
          backgroundColor="gray.200"
          m={2}
          placeholder="Search Coins"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Center>
      <div>
        {isLoading && <h1>Data Loading...</h1>}{" "}
        {/* <SimpleGrid columns={2} spacing={10}> */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {filterCoins.map((coins) => {
            return (
              <GridItem m={10}>
                <CoinCard
                  id={coins.id}
                  icon={coins.image}
                  Name={coins.name}
                  Symbol={coins.symbol}
                  price={coins.current_price}
                  marketCap={coins.market_cap}
                />
              </GridItem>
            );
          })}{" "}
        </Grid>
        {/* </SimpleGrid> */}
      </div>
    </div>
  );
};

export default Home;
