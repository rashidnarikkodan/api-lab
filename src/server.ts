import express from "express";
import cors from "cors";
import restUserRouter from "./REST/routes";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import { typeDefs } from "./GraphQL/schema";
import { resolvers } from "./GraphQL/resolvers";
import { createServer } from "http";
import { initWebSocket } from "./WebSocket/socket";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/rest", restUserRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "server is running" });
});

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(apolloServer)
  );

  const server = createServer(app);

  // ✅ attach WS to same server
  initWebSocket(server);

  // ✅ start THIS server (not app.listen)
  server.listen(3000, () => {
    console.log("REST: http://localhost:3000/rest");
    console.log("GraphQL: http://localhost:3000/graphql");
    console.log("WebSocket: ws://localhost:3000");
  });
};

startServer();