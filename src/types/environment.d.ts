import { resolve } from 'path';
import dotenv from 'dotenv';
import path from 'path';
const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../.env') });
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      auth_server_url: string;
      server_url: string;
      client_id: string;
      client_secret: string;
    }
  }
}
