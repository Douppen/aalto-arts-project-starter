### Getting started

After cloning the project, run the following command in your terminal while in the project's directory:
```
npm install
```
This will install all the dependencies needed to run the project.

To spin up the Postgres Docker container and MinIO (local S3-like and S3-compatible storage), make sure you have Docker installed. Run the following command to start the container:
```
docker compose up -d
```
MinIO takes couple of seconds to set up.

Then, you can run the NextJS app locally in development mode with:
```
npm run dev
```
Open http://localhost:3000 with your browser to see your project in the development environment.

The MinIO console is exposed at http://localhost:9001 - log in with with "minioadmin" as username and "minioadmin" as password if you want to access the console and the bucket named "bucket".

Drizzle Studio is a tool with which you can inspect the contents of the Postgres database and add rows manually.
You can open Drizzle Studio by running:
```
npm run db:studio
```
Make sure that you have the NextJS application running before you try to launch Drizzle Studio - Drizzle Studio is dependent of the Next app's migrations.

The database url and the S3 bucket url are secrets that should not be pushed to Github. They should be kept in a file called `.env.local`. You will have to create this file in the root of the project. Then, secrets can be added to this file. Add the following variables to the file:
```
NEON_DATABASE_URL=xxxxxxx
S3_BUCKET_NAME=xxxxxxx
```
You only need these secrets when you run the application in production.

To shut down the Postgres instance, run:
```
docker compose down
```

To shut down the NextJS app, you can press `ctrl+c/cmd+c` in the terminal window in which you launched the app.