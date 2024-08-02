# Next.js Project Setup with Integrations

## Fork and Clone the Repository
1. Fork this repository to your GitHub account.
2. Clone the forked repository to your local development environment.

## Set Up Supabase
1. Create a new project on Supabase.
2. Note down the Supabase API keys: `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

## Deploy to Vercel
1. Deploy your Next.js app on Vercel for easy and scalable hosting.
2. During deployment, add the Supabase API keys to your Vercel environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Integrate with Cubid.me
1. Create an account at [Cubid.me](https://admin.cubid.me).
2. After signing in, create a new application within Cubid.me.
3. Obtain your Cubid.me API keys:
   - `NEXT_PUBLIC_CUBID_APP_ID`
   - `NEXT_PUBLIC_CUBID_SECRET_KEY`

## Configure Environment Variables
1. In your local environment or on Vercel, add the Cubid.me API keys:
   - `NEXT_PUBLIC_CUBID_APP_ID`
   - `NEXT_PUBLIC_CUBID_SECRET_KEY`

## Finalize Setup
1. Ensure all environment variables are correctly set up in your development and production environments.
2. Run your Next.js application locally to verify the integration and deployment setup.

## Start Developing
1. With everything set up, you can now start developing your application using Next.js.
2. Remember to regularly push your changes to your GitHub repository and redeploy your project on Vercel.
