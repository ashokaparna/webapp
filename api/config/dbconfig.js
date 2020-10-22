require('dotenv').config({ path: '/home/ubuntu/.env' });

module.exports = {
    HOST: process.env.DATABASE_HOST_NAME,
    USER: process.env.DATABASE_USER_NAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_NAME,
    PORT: 3036,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};