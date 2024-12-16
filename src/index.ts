import { serve } from "@hono/node-server";
import { Hono } from "hono";
import usersRoute from "./routes/users-route.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// add users route to app
app.route("/users", usersRoute);

// set port
const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

// serve app
serve({
  fetch: app.fetch,
  port,
});
