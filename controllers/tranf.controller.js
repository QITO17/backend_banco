const User = require('../models/user.model');
const Consignments = require('../models/transf.model');

exports.transferencia = async (req, res) => {
  const { monto, numeroCuentaRecibe, numeroCuentaEnvia } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber: numeroCuentaRecibe,
    },
  });

  const cuentaRemitente = await User.findOne({
    where: {
      accountNumber: numeroCuentaEnvia,
    },
  });

  if (!cuentaRemitente) {
    return res.status(404).json({
      mesagge: `El Usuario Con El Numero De Cuenta ${numeroCuentaRecibe} No Existe 😅😅`,
    });
  }

  if (!user) {
    return res.status(404).json({
      mesagge: `El Usuario Con El Numero De Cuenta ${numeroCuentaEnvia} No Existe 😅😅`,
    });
  }

  if (cuentaRemitente.dataValues.amount < monto) {
    return res.status(404).json({
      mesagge: `Dinero Insuficiente 😑😐😑`,
    });
  }

  cuentaRemitente.dataValues.amount = cuentaRemitente.dataValues.amount - monto;
  user.dataValues.amount = user.dataValues.amount + monto;

  const tranf = await Consignments.create({
    amount: monto,
    receiverUserId: numeroCuentaRecibe,
    senderUserId: numeroCuentaEnvia,
  });

  return res.status(200).json({
    mesagge: `Tranferencia Realizada exitosamente 😁😀😎`,
    tranf,
    mesagge2: `Al Usuario le queda ${cuentaRemitente.dataValues.amount} y envio ${monto}`,
  });
};
