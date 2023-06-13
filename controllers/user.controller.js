const User = require('../models/user.model');
const Consignments = require('../models/transf.model');

exports.createAcount = async (req, res) => {
  try {
    const { nameUser, password } = req.body;

    const user = await User.create({
      nameUser,
      password,
    });

    if (!user) {
      return res.status(404).json({
        mesagge:
          'El Usuario no fue creado debe pasar el nombre y la clave 🧨🧨🧨',
      });
    }

    return res.status(200).json({
      mesagge: 'Usuario Creado Exitosamente papa 😎😎😏',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      fail: 'error de servidor 🧨🧨🧨',
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;
    const user = await User.findOne({
      where: {
        accountNumber,
        password,
      },
    });

    console.log(user);
    if (!user) {
      return res.status(404).json({
        mesagge: 'El Usuario no se encontro login erroneo 🧨🧨🧨',
      });
    }

    return res.status(200).json({
      mesagge: 'Login Correcto :) 😎😎',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      fail: 'error de servidor 🧨🧨🧨',
      error,
    });
  }
};

exports.getAllTranf = async (req, res) => {
  try {
    const { id } = req.params;

    const consignments = await Consignments.findAll({
      where: {
        senderUserId: id,
      },
    });

    if (consignments[0] === undefined) {
      return res.status(404).json({
        mensaje: 'El Usuario que indico ho ha hecho tranferencias ☠💀',
        consignments,
      });
    }

    return res.status(200).json({
      mensaje: 'Las tranferencias que el usuario realizo son 🤑🤑',
      consignments,
    });
  } catch (error) {
    return res.status(500).json({
      fail: 'error de servidor 🧨🧨🧨',
      error,
    });
  }
};
