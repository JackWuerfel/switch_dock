import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

export const { handleRequest } = createYoga({
    schema,
    graphqlEndpoint: "/api/graphql",
    fetchAPI: {
      Response: Response,
      Request: Request,
    },
});
