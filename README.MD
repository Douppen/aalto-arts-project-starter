# Getting started

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

# Testing

## End-to-End Testing with Playwright

This project utilizes Playwright for end-to-end (E2E) testing to ensure the application behaves as expected in a production-like environment.

E2E test are ran in 2 places. You can run E2E tests locally on your machine any time you want, or they are automatically ran every time there is a push to the staging branch using **Github Actions**.

In both cases, the data source is a local Postgres and MinIO instance. A seed script is ran every time to populate the database and MinIO with mock data for the e2e tests. After the tests are ran, the database and MinIO are cleaned up.

### Running E2E Tests Locally

To run E2E tests on your local machine, you first need to build the production build of the application, which more closely resembles how the application will behave in the actual production environment. Running E2E tests against a development server (npm run dev) is not possible and discouraged. The development server may have different behaviors and optimizations compared to the production build, leading to inaccurate test results.

Generate the optimized production build of the application:

```
npm run build
```

Then run the E2E tests. Playwright serves the production build you just generated and then runs the tests against it:

```
npm run test:e2e
```

**Tip**: You are also able to serve the generated production build locally to check it out for yourself. No tests will be run in this case:

```
npm run start
```

### Automated E2E Testing on Staging Branch

E2E tests are configured to run automatically when code is pushed to the staging branch using **Github Actions**. This continuous integration step helps catch issues early and ensures that the staging environment remains stable and production-ready.
