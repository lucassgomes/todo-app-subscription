import { Express } from 'express'

import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'

const { PORT: port } = process.env
function start (app: Express, { typeDefs, resolvers }) {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: {
      endpoint: 'playground'
    },
    subscriptions: {
      onConnect(_connectionParams, _webSocket) {
      }
    }
  })

  app.use('*', cors())

  server.applyMiddleware({ app, path: '/api' })

  const httpServer = createServer(app)
  server.installSubscriptionHandlers(httpServer)

  httpServer.listen(
    { port },
    (): void => {
      console.log(`\n🚀 GraphQL API is now running on http://0.0.0.0:${port}/api`)
      console.log(`🚀 Subscriptions ready at ws://0.0.0.0:${port}${server.subscriptionsPath}`)
    }
  )
}

export {
  start
}