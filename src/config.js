import { env } from 'react-env';

const config = {
  MONGO_URL: env('MONGO_URL'),
};

export default config;