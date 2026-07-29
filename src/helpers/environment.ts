import dotenv from 'dotenv';

dotenv.config();

export const environment = {
  baseUrl:
    process.env.BASE_URL || 'https://www.demoblaze.com',

  apiUrl:
    process.env.API_URL || 'https://dummyjson.com',
};