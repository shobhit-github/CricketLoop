//import dotenv from 'dotenv/config'

export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI;
console.log('database being Used: ', db,);

export default {
    db
};
