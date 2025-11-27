const { User } = require("../models");

const createNewUser = async (request, response) => {
  try {
    const data = request.body;
    if (!data || Object.keys(data).length === 0) {
      return response.status(400).json({
        status: "Error",
        message: "Request body cannot be empty",
      });
    }
    const check = await User.findOne({
      where: { correo: data.correo },
    });
    if (!check) {
      const newUser = await User.create(request.body);
      response.status(201).json({
        status: "Success",
        mesage: newUser,
      });
    } else {
      response.status(409).json({
        status: "Email Conflict",
        message: "Email already exists, please use another email",
      });
    }
  } catch (error) {
    response.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    response.status(200).json({
      status: "Usuarios encontrados",
      data: users,
    });
  } catch (error) {
    response.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
};
