# Hono Drizzle Node App

## Installation

To install the necessary dependencies, run:

```
npm install
npm run dev
```

## Running the Application

Set up the environment variables:

```
DATABASE_URL=sqlite.db
```

To start the development server, use the following command:

```
npm run dev
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### Users Route

- **GET** `/users` - Retrieve all users.
- **POST** `/users` - Create a new user. Requires a JSON body with `name`, `age`, and `email`.
- **GET** `/users/:id` - Retrieve a user by ID.
- **PUT** `/users/:id` - Update a user by ID. Requires a JSON body with `name`, `age`, and `email`.
- **DELETE** `/users/:id` - Delete a user by ID.

## Accessing the Application

Open your browser and navigate to:

```
http://localhost:3000
```

You can also use tools like Postman or curl to interact with the API endpoints.

## Development Workflow

1. **Set Up Environment Variables**: Ensure you have your environment variables set up in a `.env` file. For example:

   ```
   DATABASE_URL=sqlite.db
   ```

2. **Install Dependencies**: Run the following command to install all necessary dependencies:

   ```
   npm install
   ```

3. **Run Database Migrations**: If you have made changes to the database schema, run the migration command:

   ```
   npm run db:migrate
   ```

4. **Generate Database Schema**: To generate the database schema based on your models, use:

   ```
   npm run db:generate
   ```

5. **View Database**: To view the database, use the following command:

   ```
   npx drizzle-kit studio
   ```

6. **Start the Development Server**: Use the following command to start the server:

   ```
   npm run dev
   ```

7. **Testing the API**: Use tools like Postman or curl to test the API endpoints as described in the API Endpoints section.

8. **Stopping the Server**: To stop the server, simply interrupt the process in your terminal (usually Ctrl + C).

9. **Version Control**: Make sure to commit your changes regularly and push to your repository to keep your work backed up.

## 🔗 Helpful Links

- Hono - https://hono.dev/
- Drizzle - https://orm.drizzle.team/
