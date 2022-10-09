import dotenv from 'dotenv'

dotenv.config()

const NODE_ENV =  process.env.NODE_ENV.toString.toLowerCase ?? 'development';
const isProduction = NODE_ENV === 'production';

export const env = {
    isProduction,
    app: {
        environment: NODE_ENV,
        port: +process.env.APP_PORT || 8080
    },
    mysqlConnectionObject: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.MYSQL_DB
    },
};
console.info(env);
console.info(`${'='.repeat(30)}`);
console.info(`NODE_ENV: ${env.app.environment}`);
console.info(`${'='.repeat(30)}`);