import { builder } from "../builder";

builder.prismaObject("Benefit", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    description: t.exposeString("description"),
    users: t.relation("users"),
  }),
});

builder.queryField("benefits", (t) =>
  t.prismaField({
    type: ["Benefit"],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.benefit.findMany({ ...query }),
  })
);
