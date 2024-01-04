import express, { type Application, type Response, type Request } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Express type running on http://localhost:${port}`)
})
