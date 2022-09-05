const Joi = require('joi');

const statusObjValid = Joi.object({
  status: Joi
  .string().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue').required(),
});

const validateStatusMiddleware = (req, res, next) => {
  const { error } = statusObjValid.validate(req.body);
  if (error) {
    const messages = error.details.map((e) => e.message);
    return res.status(400).json({ message: messages[0] });
  }
  next();
};

module.exports = validateStatusMiddleware; 
