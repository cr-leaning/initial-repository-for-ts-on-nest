import dotenv from 'dotenv';
import path from 'path';

const testEnv = dotenv.config({ path: path.join(process.cwd(), '.env.test') });

// 環境変数の上書き
Object.assign(process.env, { ...testEnv.parsed });
