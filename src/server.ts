import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database.js'
import { title } from 'node:process'
import { env } from './env/index.js'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex ('transactions').select('*')

  return transactions
})

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP server Running')
})