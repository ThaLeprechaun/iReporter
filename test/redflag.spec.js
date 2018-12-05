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
        .get("/api/v1/redflags")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
      done();
    })
  });
  describe("/GET a single red-flag record", () => {
    it("should return a single red-flag record", (done) => {
      request(app)
        .get("/api/v1/redflags/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
      done();
    })
  });
  describe("/POST a red-flag record", () => {
    it("should post a new red-flag record", (done) => {
      request(app)
        .post("/api/v1/redflags")
        .send({
          id: 4,
          createdOn: "25/11/2018",
          createdBy: 2,
          type: "red-flag",
          location: "64",
          status: "draft",
          Images: [],
          Videos: [],
          comment: "blah blah blah"
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
      done();
    })
  });
  describe("/DELETE a red-flag record", () => {
    it("should delete a red-flag record", (done) => {
      request(app)
        .delete("/api/v1/redflags/2")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
      done();
    })
  });
  describe("/UPDATE the location of a red-flag record", () => {
    it("should update the location of a red-flag record", (done) => {
      request(app)
        .patch("/api/v1/redflags/1/location")
        .send({
          id: 1,
          createdOn: "25/11/2018",
          createdBy: 2,
          type: "red-flag",
          location: "64",
          status: "draft",
          Images: [],
          Videos: [],
          comment: "blah blah blah"
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
      done();
    })
  });
  describe("/UPDATE the comment of a red-flag record", () => {
    it("should update the comment of a red-flag record", (done) => {
      request(app)
        .patch("/api/v1/redflags/1/comment")
        .send({
          id: 1,
          createdOn: "25/11/2018",
          createdBy: 2,
          type: "red-flag",
          location: "64",
          status: "draft",
          Images: [],
          Videos: [],
          comment: "blah black sheep"
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
      done();
    })
  });
})
