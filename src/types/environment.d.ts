import { resolve } from 'path';
import dotenv from 'dotenv';
import path from 'path';
const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../.env') });
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      client_id: string;
      client_secret: string;
    }
  }
}
