/* eslint-disable import/first */
const app = require("../build/app").default;
const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;

describe("Red-flag API Integration tests", () => {
  const id = 1;
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
      firstname: "John" ,
      lastname: "Doe",
      othernames: "" ,
      email: "jdoe@yahoo.com" ,
      phoneNumber: 2348012345678,
      userName: "jdoe",
      registered:  "25/11/2018",
      isAdmin: 0
    }
  ;

  // Test for Redflag record
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
        .get(`/api/v1/redflags/${id}`)
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
        .patch(`/api/v1/redflags/${id}/comment`)
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
        .patch(`/api/v1/redflags/${id}/location`)
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
        .delete(`/api/v1/redflags/${id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.data).to.be.an("array");
          done();
        });
    })
  });

  // Test for Intervention record
  describe("/GET all Intervention records", () => {
    it("should return all intervention records", (done) => {
      request(app)
        .get("/api/v1/interventions")
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  describe("/GET a single Intervention by id", () => {
    it("should return a single Intervention record by id", (done) => {
      request(app)
        .get(`/api/v1/interventions/${id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  describe("/POST an Intervention record", () => {
    it("should post a new Intervention record", (done) => {
      request(app)
        .post("/api/v1/interventions")
        .send(intervention)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          expect(intervention.type).to.be.a("string");
          intervention = res.body;
          done();
        });
    });
  });

  describe("/UPDATE the comment of an Intervention record by id", () => {
    it("should update the comment of an Intervention record", (done) => {
      intervention.comment = "PJ Mask";
      request(app)
        .patch(`/api/v1/interventions/${id}/comment`)
        .send(intervention)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(intervention.comment).to.equal("PJ Mask");
          done();
        });
    });
  });

  describe("/UPDATE the location of an Intervention record by id", () => {
    it("should update the location of an Intervention record", (done) => {
      intervention.location = "20.33, 50.020";
      request(app)
        .patch(`/api/v1/interventions/${id}/location`)
        .send(intervention)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(intervention.location).to.equal("20.33, 50.020");
          done();
        });
    });
  });

  describe("/DELETE an Intervention record by id", () => {
    it("should delete an Intervention record", (done) => {
      request(app)
        .delete(`/api/v1/interventions/${id}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.data).to.be.an("array");
          done();
        });
    })
  });

  describe("/GET All users", () => {
    it("should return all users", (done) =>{
      request(app)
      .get(`/api/v1/users`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    })
  });

  describe("/GET a single user", () => {
    it("should return a single user", (done) =>{
      request(app)
      .get(`/api/v1/users/${id}`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        done();
      });
    })
  });

  describe("/Post a user", () => {
    it("should create a new user", (done) =>{
      request(app)
      .post(`/api/v1/users`)
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(user.userName).to.be.a("string");
        expect(user.phoneNumber).to.be.a("number");
        done();
      });
    })
  });

  describe("/DELETE a user", () => {
    it("should delete a user", (done) => {
      request(app)
      .delete(`/api/v1/users/${id}`)
      .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.data).to.be.an("array");
          done();
      });
    })
  })
});
