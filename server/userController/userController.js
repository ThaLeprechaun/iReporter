/* eslint-disable no-restricted-globals */
import data from "../../data.json";

exports.getAllUsers = (req, res) => {
	const users = data.user;
	res.status(200).json({
	 status: 200,
	 users 
	});
}

exports.getSingleUser = (req, res) => {
	const userId = req.params.userId * 1;
	const user = data.user;
	const findUser = user.find(e => e.id === userId);
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
    findUser
  });
}

exports.createUser = (req, res) => {
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
  	if (!((req.body.userName) && (req.body.email))) {
	   return res.status(400).json({
	   	status: 400,
	   	error: "These fields cannot be left blank"
	   });
  	}

  	const users = data.user;
  	const newUserId = users.length + 1;
  	const dateRegistered = new Date("November 25, 2018 11:08:00");

  	const newUser = {
  		id: newUserId,
  		firstname: req.body.firstname,
      	lastname: req.body.lastname,
      	othernames: req.body.othernames,
      	email: req.body.email,
      	phoneNumber: req.body.phoneNumber,
      	userName: req.body.userName,
      	registered: dateRegistered,
      	isAdmin : req.body.isAdmin
  	}
  	users.splice(newUserId, 0, newUser)
  	return res.status(200).json({
  		status: 200,
  		data: [{
  			id: newUserId,
  			message: "Account successfully Created"
  		}]
  	});
}

exports.deleteUser = (req, res) => {
	const userId = req.params.userId * 1;
	const user = data.user;
	const findUser = user.find(e => e.id === userId);
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
  	const newId = userId;
  	const index = user.indexOf(findUser);
  	user.splice(index, 1);
  	res.status(200).json({
    	status: 200,
    	data: [{
      		id: newId,
      		message: "user record has been deleted"
    	}]
  	})
}
