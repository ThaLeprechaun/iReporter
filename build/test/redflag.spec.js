"use strict";

/* eslint-disable import/first */
var app = require("../build/app").default;

var chai = require("chai");

var request = require("supertest");

var expect = chai.expect;
describe("Red-flag API Integration tests", function () {
  var id = 1;
  var redflag = {
    id: 1,
    createdOn: "25/11/2018",
    createdBy: 2,
    type: "red-flag",
    location: "64",
    status: "draft",
    Images: [],
    Videos: [],
    comment: "blah blah blah"
  },
      intervention = {
    id: 1,
    createdOn: "25/11/2018",
    createdBy: 1,
    type: "Intervention",
    location: "90.0123,30.234",
    status: "draft",
    Images: [],
    Videos: [],
    comment: "blu blu blu"
  },
      user = {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    othernames: "",
    email: "jdoe@yahoo.com",
    phoneNumber: "08012345678",
    userName: "jdoe",
    registered: "25/11/2018",
    isAdmin: 0
  }; // Test for Redflag record

  describe("/GET all red-flag records", function () {
    it("should return all red-flag records", function (done) {
      request(app).get("/api/v1/redflags").end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    });
  });
  describe("/GET a single red-flag by id", function () {
    it("should return a single red-flag record by id", function (done) {
      request(app).get("/api/v1/redflags/".concat(id)).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    });
  });
  describe("/POST a red-flag record", function () {
    it("should post a new red-flag record", function (done) {
      request(app).post("/api/v1/redflags").send(redflag).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(redflag.type).to.be.a("string");
        redflag = res.body;
        done();
      });
    });
  });
  describe("/UPDATE the comment of a red-flag record by id", function () {
    it("should update the comment of a red-flag record", function (done) {
      redflag.comment = "black sheep sheep";
      request(app).patch("/api/v1/redflags/".concat(id, "/comment")).send(redflag).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(redflag.comment).to.equal("black sheep sheep");
        done();
      });
    });
  });
  describe("/UPDATE the location of a red-flag record by id", function () {
    it("should update the location of a red-flag record", function (done) {
      redflag.location = "666";
      request(app).patch("/api/v1/redflags/".concat(id, "/location")).send(redflag).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(redflag.location).to.equal("666");
        done();
      });
    });
  });
  describe("/DELETE a red-flag record by id", function () {
    it("should delete a red-flag record", function (done) {
      request(app).delete("/api/v1/redflags/".concat(id)).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.data).to.be.an("array");
        done();
      });
    });
  }); // Test for Intervention record

  describe("/GET all Intervention records", function () {
    it("should return all intervention records", function (done) {
      request(app).get("/api/v1/interventions").end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    });
  });
  describe("/GET a single Intervention by id", function () {
    it("should return a single Intervention record by id", function (done) {
      request(app).get("/api/v1/interventions/".concat(id)).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    });
  });
  describe("/POST an Intervention record", function () {
    it("should post a new Intervention record", function (done) {
      request(app).post("/api/v1/interventions").send(intervention).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(intervention.type).to.be.a("string");
        intervention = res.body;
        done();
      });
    });
  });
  describe("/UPDATE the comment of an Intervention record by id", function () {
    it("should update the comment of an Intervention record", function (done) {
      intervention.comment = "PJ Mask";
      request(app).patch("/api/v1/interventions/".concat(id, "/comment")).send(intervention).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(intervention.comment).to.equal("PJ Mask");
        done();
      });
    });
  });
  describe("/UPDATE the location of an Intervention record by id", function () {
    it("should update the location of an Intervention record", function (done) {
      intervention.location = "20.33, 50.020";
      request(app).patch("/api/v1/interventions/".concat(id, "/location")).send(intervention).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(intervention.location).to.equal("20.33, 50.020");
        done();
      });
    });
  });
  describe("/DELETE an Intervention record by id", function () {
    it("should delete an Intervention record", function (done) {
      request(app).delete("/api/v1/interventions/".concat(id)).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.data).to.be.an("array");
        done();
      });
    });
  });
  describe("/GET All users", function () {
    it("should return all users", function (done) {
      request(app).get("/api/v1/users").end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    });
  });
  describe("/GET a single user", function () {
    it("should return a single user", function (done) {
      request(app).get("/api/v1/users/".concat(id)).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    });
  });
  describe("/Post a user", function () {
    it("should create a new user", function (done) {
      request(app).post("/api/v1/users").send(user).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(user.username).to.be.a("string");
        expect(user.phoneNumber).to.be.a("number");
        done();
      });
    });
  });
  describe("/DELETE a user", function () {
    it("should delete a user", function (done) {
      request(app).delete("/api/v1/users/".concat(id)).end(function (err, res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body.data).to.be.an("array");
        done();
      });
    });
  });
});