import { postgraphile } from "postgraphile";
import express from "express";

const app = express();

app.use(
  postgraphile(
    "postgres://beeline:84527Vikas@beeline.ch5kagpemeo0.ap-southeast-2.rds.amazonaws.com/beeline?sslmode=no-verify",
    ["public"],
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      subscriptions: true,
      retryOnInitFail: true
    }
  )
);

app.listen(3009);
