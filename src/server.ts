import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database.js'
import { title } from 'node:process'
import { env } from './env/index.js'
import { transactionsRoutes } from './routes/transactions.js'

const app = fastify()

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP server Running')
})