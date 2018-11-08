import "reflect-metadata";
import "dotenv/config"
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/typeDefs'
import * as express from 'express'
import { createConnection } from "typeorm";
import * as session from 'express-session'





const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }: any) => ({ req })
  });



  await createConnection()
  
  const app = express()

  app.use(
    session({
      secret: "q342q352",
      resave: true,
      saveUninitialized: false,
    }))

    server.applyMiddleware({ app, cors: {credentials: true, origin: "http://localhost:3000"} });


    app.listen({ port: 5000 }, () =>
      console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
    )
}

startServer()
.then((res) => console.log('Success',res))
.catch((err) => console.log('Error', err))


