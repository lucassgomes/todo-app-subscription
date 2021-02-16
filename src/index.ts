import 'reflect-metadata'

import express from 'express'
import schema from './schema'

import { start } from './config/server'

const app = express()

app.get('/', (_req, res) => {
  res.status(200).json({ ok: true })
})

start(app, schema)
