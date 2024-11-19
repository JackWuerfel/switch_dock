"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../../lib/apollo";
import CardWrapper from "../card-wrapper";

const ClientWrapper = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <CardWrapper />
    </ApolloProvider>
  );
};

export default ClientWrapper;
