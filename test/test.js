const chai = require("chai");
const app = require("../app");
const request = require("supertest");

const expect = chai.expect;

const should = chai.should();
require("should-http");

describe("Red-Flag API Tests", () => {
  describe("/GET all red-flag records", () => {
    it("should return all red-flag records", (done) => {
      request(app)
        .get("/api/v1/incident")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    })
  });
  describe("/GET a single red-flag record", () => {
    it("should return a single red-flag record", (done) => {
      request(app)
        .get("/api/v1/incident/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    })
  });
});
