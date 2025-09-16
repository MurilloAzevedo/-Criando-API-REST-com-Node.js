import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database.js'
import { title } from 'node:process'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex ('transactions').select('*')

  return transactions
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server Running')
})