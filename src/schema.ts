import "graphql-import-node";

import combine from "graphql-combine";
import path from "path";

const { IS_TRANSPILED } = process.env;
const extension = IS_TRANSPILED && JSON.parse(IS_TRANSPILED) ? "js" : "ts";

const { typeDefs: modulesTypeDefs, resolvers: modulesResolvers } = combine({
  // TypeDefs glob pattern
  typeDefs: path.join(__dirname, "modules/**/*/schema.graphql"),

  // Resolvers glob pattern
  resolvers: path.join(__dirname, `modules/**/*/resolvers.${extension}`),
});

export default {
  typeDefs: [modulesTypeDefs],
  resolvers: [modulesResolvers],
};
