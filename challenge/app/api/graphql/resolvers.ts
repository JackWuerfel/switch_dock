import prisma from "../../../lib/prisma";
export const resolvers = {
  Query: {
    benefits: () => {
      return prisma.benefit.findMany();
    },
  },
};
