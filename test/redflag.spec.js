/* eslint-disable import/first */
const app = require("../build/app").default;
const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;

// const should = chai.should();
// require("should-http");

describe("Red-flag API Integration tests", () => {
  const redflagId = 1;
  let redflag = {
    id: 1,
    createdOn: "25/11/2018",
    createdBy: 2,
    type: "red-flag",
    location: "64",
    status: "draft",
    Images: [],
    Videos: [],
    comment: "blah blah blah"
  };

  describe("/GET all red-flag records", () => {
    it("should return all red-flag records", (done) => {
      request(app)
        .get("/api/v1/redflags")
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  describe("/GET a single red-flag by id", () => {
    it("should return a single red-flag record by id", (done) => {
      request(app)
        .get(`/api/v1/redflags/${redflagId}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  describe("/POST a red-flag record", () => {
    it("should post a new red-flag record", (done) => {
      request(app)
        .post("/api/v1/redflags")
        .send(redflag)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          expect(redflag.type).to.be.a("string");
          redflag = res.body;
          done();
        });
    });
  });

  describe("/UPDATE the comment of a red-flag record by id", () => {
    it("should update the comment of a red-flag record", (done) => {
      redflag.comment = "black sheep sheep";
      request(app)
        .patch(`/api/v1/redflags/${redflagId}/comment`)
        .send(redflag)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(redflag.comment).to.equal("black sheep sheep");
          done();
        });
    });
  });

  describe("/UPDATE the location of a red-flag record by id", () => {
    it("should update the location of a red-flag record", (done) => {
      redflag.location = "666";
      request(app)
        .patch(`/api/v1/redflags/${redflagId}/location`)
        .send(redflag)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(redflag.location).to.equal("666");
          done();
        });
    });
  });

  describe("/DELETE a red-flag record by id", () => {
    it("should delete a red-flag record", (done) => {
      request(app)
        .delete(`/api/v1/redflags/${redflagId}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.data).to.be.an("array");
          done();
        });
    })
  });
});
