"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../../lib/apollo";
import CardWrapper from "../card-wrapper";
import { useEffect, useState } from "react";

const ClientWrapper = () => {
  const [domloaded, setDomloaded] = useState(false);

  useEffect(() => {
    setDomloaded(true);
  }, []);

  return domloaded ? (
    <ApolloProvider client={apolloClient}>
      <CardWrapper />
    </ApolloProvider>
  ) : null;
};

export default ClientWrapper;
