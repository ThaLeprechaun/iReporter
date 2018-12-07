/* eslint-disable class-methods-use-this */
import data from "../../data.json";

class RedflagController {
  getAllRedflags(req, res) {
    const redflag = data.redflag;
    res.status(200).json({
      status: 200,
      redflag
    });
  }

  getSingleRedflag(req, res) {
    const redflagId = req.params.redflagId * 1;
    const findRedflag = data.redflag.find(e => e.id === redflagId);
    if (!findRedflag) {
      return res.status(404).json({
        status: 404,
        error: "Record was not found"
      });
    }
    res.status(200).json({
      status: 200,
      findRedflag
    });
  }

  createRedflag(req, res) {
    if (!req.body.type) {
      return res.status(400).json({
        status: 400,
        error: "Type is required"
      });
    }
    const redflag = data.redflag;
    const newId = redflag.length + 1;
    const day = new Date();

    const newRecord = {
      id: newId,
      createdOn: day,
      createdBy: req.body.createdBy,
      type: req.body.type,
      location: req.body.location,
      status: req.body.status,
      Images: [],
      Videos: [],
      comment: req.body.comment
    }

    redflag.push(newRecord);
    return res.status(200).json({
      status: 200,
      data: [{
        id: newId,
        message: "Created red-flag record"
      }]
    });
  }

  updateRedflagComment(req, res) {
    const redflagId = req.params.redflagId * 1;
    const redflag = data.redflag;
    const findRedflag = redflag.find(e => e.id === redflagId);
    if (!findRedflag) {
      return res.status(404).json({
        status: 404,
        error: "Record was not found"
      });
    }
    if (!req.body.comment) {
      return res.status(404).json({
        status: 404,
        error: "Comment is required"
      });
    }
    const day = new Date();
    const updatedRedflag = {
      id: findRedflag.id,
      createdOn: day,
      createdBy: req.body.createdBy,
      type: req.body.type,
      location: req.body.location,
      status: req.body.status,
      Images: [],
      Videos: [],
      comment: req.body.comment
    }
    redflag.splice(findRedflag.location, 1, updatedRedflag);
    return res.status(200).json({
      status: 200,
      data: [{
        id: redflagId,
        message: "Updated red-flag record's comment"
      }]
    })
  }

  updateRedflagLocation(req, res) {
    const redflagId = req.params.redflagId * 1;
    const redflag = data.redflag;
    let notFound = true;
    const findRedflag = redflag.forEach((record) => {
      if (record.id === redflagId) {
        notFound = false;
      }
    });
    if (notFound) {
      return res.status(404).json({
        status: 404,
        error: "Record was not found"
      });
    }
    if (!req.body.location) {
      return res.status(404).json({
        status: 404,
        error: "Location is required"
      });
    }
    const day = new Date();
    const updatedRedflag = {
      id: redflagId,
      createdOn: day,
      createdBy: req.body.createdBy,
      type: req.body.type,
      location: req.body.location,
      status: req.body.status,
      Images: [],
      Videos: [],
      comment: req.body.comment
    }
    redflag.splice(findRedflag, 1, updatedRedflag);
    return res.status(200).json({
      status: 200,
      data: [{
        id: redflagId,
        message: "Updated red-flag record's location"
      }]
    })
  }

  deleteRedflag(req, res) {
    const redflagId = req.params.redflagId * 1;
    const redflag = data.redflag;
    const findRedflag = redflag.find(e => e.id === redflagId);
    if (!findRedflag) {
      return res.status(404).json({
        status: 404,
        error: "Record was not found"
      });
    }
    const newId = redflagId;
    redflag.splice(newId, 1);
    res.status(200).json({
      status: 200,
      data: [{
        id: newId,
        message: "red-flag record has been deleted"
      }]
    })
  }
}

const redflag = new RedflagController();
export default redflag;
