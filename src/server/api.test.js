// @flow
import supertest from "supertest"
import api from "./api"

const path = "./test-data/songs"
const request = supertest(api({ path }))

test("200 for song list", () =>
  request
    .get("/songs")
    .expect("Content-Type", /json/)
    .expect(200)
    .then(({ body }) => expect(body).toMatchSnapshot()))

test("400 for invalid id", () =>
  request.get("/song/this is invalid.doc").expect(400, /Invalid song ID/))

test("404 for unknown file", () =>
  request
    .get("/song/unknown-song")
    .expect(404, /Cannot GET \/song\/unknown-song/))

test("200 for known file", () =>
  request
    .get("/song/test-song")
    .expect(200)
    .then(({ body }) => expect(body.toString()).toMatchSnapshot()))
