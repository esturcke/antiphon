// @flow
import express from "express"
import fs from "fs"
import { valid, uri, ENDPOINTS } from "./util"

type config = { path: string }

export default ({ path }: config) => {
  const app = express()

  app.use(
    (
      req: express$Request,
      res: express$Response,
      next: express$NextFunction
    ) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )
      next()
    }
  )

  app.get(ENDPOINTS.SONGS, (req: express$Request, res: express$Response) => {
    fs.readdir(path, (err, files) => {
      const response = files
        .filter(name => valid(name))
        .map(name => ({ name, uri: uri(name) }))
      res.setHeader("Content-Type", "application/json")
      res.send(JSON.stringify(response))
    })
  })

  app.use(ENDPOINTS.SONG, express.static(path))
  app.use(
    `${ENDPOINTS.SONG}:name`,
    (
      req: express$Request,
      res: express$Response,
      next: express$NextFunction
    ) => {
      const { name } = req.params
      if (name !== undefined && valid(name)) {
        next()
      } else {
        res.status(400).send("Invalid song ID")
      }
    }
  )

  return app
}
