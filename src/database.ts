import 'dotenv/config'
import type { Knex } from "knex"
import setUpKnex from 'knex'

if (!process.env.DATABASE_URL){
  throw new Error('DataBase env not found!')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  }
}

export const knex = setUpKnex(config)