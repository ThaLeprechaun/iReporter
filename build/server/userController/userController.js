"use strict";

var _data = _interopRequireDefault(require("../../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-restricted-globals */
exports.getAllUsers = function (req, res) {
  var users = _data.default.user;
  res.status(200).json({
    status: 200,
    users: users
  });
};

exports.getSingleUser = function (req, res) {
  var userId = req.params.userId * 1;
  var user = _data.default.user;
  var findUser = user.find(function (e) {
    return e.id === userId;
  });

  if (isNaN(userId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!findUser) {
    return res.status(404).json({
      status: 404,
      error: "User was not found"
    });
  }

  res.status(200).json({
    status: 200,
    findUser: findUser
  });
};

exports.createUser = function (req, res) {
  if (!req.body.userName) {
    return res.status(400).json({
      status: 400,
      error: "Username is required"
    });
  }

  if (!req.body.email) {
    return res.status(400).json({
      status: 400,
      error: "Email is required"
    });
  }

  if (!(req.body.userName && req.body.email)) {
    return res.status(400).json({
      status: 400,
      error: "These fields cannot be left blank"
    });
  }

  var users = _data.default.user;
  var newUserId = users.length + 1;
  var dateRegistered = new Date("November 25, 2018 11:08:00");
  var newUser = {
    id: newUserId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othernames: req.body.othernames,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    userName: req.body.userName,
    registered: dateRegistered,
    isAdmin: req.body.isAdmin
  };
  users.splice(newUserId, 0, newUser);
  return res.status(200).json({
    status: 200,
    data: [{
      id: newUserId,
      message: "Account successfully Created"
    }]
  });
};

exports.deleteUser = function (req, res) {
  var userId = req.params.userId * 1;
  var user = _data.default.user;
  var findUser = user.find(function (e) {
    return e.id === userId;
  });

  if (isNaN(userId)) {
    return res.status(404).json({
      status: 404,
      error: "Path does not exist"
    });
  }

  if (!findUser) {
    return res.status(404).json({
      status: 404,
      error: "User was not found"
    });
  }

  var newId = userId;
  var index = user.indexOf(findUser);
  user.splice(index, 1);
  res.status(200).json({
    status: 200,
    data: [{
      id: newId,
      message: "user record has been deleted"
    }]
  });
};