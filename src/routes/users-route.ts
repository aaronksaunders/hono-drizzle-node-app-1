import { Hono } from "hono";
import { db } from "../db/index.js";
import { usersTable } from "../db/schema.js";
import { eq } from "drizzle-orm";

// create users route
const usersRoute = new Hono();

// get all users
usersRoute.get("/", async (c) => {
  const users = await db.select().from(usersTable);
  return c.json(users);
});

// create a new user
usersRoute.post("/", async (c) => {
  const { name, age, email } = await c.req.json();
  const newUser = await db.insert(usersTable).values({ name, age, email });
  return c.json(newUser);
});

// get a user by id
usersRoute.get("/:id", async (c) => {
  const { id } = c.req.param();
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, Number(id)));
  return c.json(user);
});

// update a user by id
usersRoute.put("/:id", async (c) => {
  const { id } = c.req.param();
  const { name, age, email } = await c.req.json();
  const updatedUserResult = await db
    .update(usersTable)
    .set({ name, age, email })
    .where(eq(usersTable.id, Number(id)));

  // error if not found
  if (!updatedUserResult) {
    return c.json({ error: "User not found" }, 404);
  }

  // else get updated user
  const updatedUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, Number(id)));

  return c.json(updatedUser);
});

// delete a user by id
usersRoute.delete("/:id", async (c) => {
  const { id } = c.req.param();
  const deletedUser = await db
    .delete(usersTable)
    .where(eq(usersTable.id, Number(id)));
  return c.json(deletedUser);
});

// export users route
export default usersRoute;
