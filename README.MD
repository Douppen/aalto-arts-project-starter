### Getting started

After cloning the project, run the following command in your terminal while in the project's directory:

```
npm install
```

This will install all the dependencies needed to run the project.

Then, you can run the project locally in development mode with:

```
npm run dev
```

Open http://localhost:3000 with your browser to see your project in the development environment.

The database url and the S3 bucket url are secrets that should not be pushed to Github. They should be kept in a file called `.env.local`. You will have to create this file in the root of the project. Then, secrets can be added to this file. Add the following variables to the file

```
NEON_DATABASE_URL=xxxxxxx
S3_BUCKET_NAME=xxxxxxx
```
