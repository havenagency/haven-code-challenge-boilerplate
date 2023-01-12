import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  removeUnresolved: true,
});

export default client;