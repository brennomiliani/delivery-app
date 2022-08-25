const Joi = require('joi');

const registerObjValid = Joi.object({
name: Joi.string().required().min(12),
password: Joi.string().min(6).required(),
email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
});

const validateRegisterMiddleware = (req, res, next) => {
const { error } = registerObjValid.validate(req.body);
if (error) {
const messages = error.details.map((e) => e.message);
return res.status(400).json({ message: messages[0] });
}
next();
};

module.exports = validateRegisterMiddleware; 
