declare module 'graphql-combine' {
  export default function(configs: object): {
    typeDefs: string
    resolvers: object
  }
}
