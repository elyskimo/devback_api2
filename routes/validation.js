const Joi = require('@hapi/joi');

// Register validation
const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
          .required(),
    email: Joi.string()
          .required()
          .email(),
    password: Joi.string()
              .min(6)
              .required(),
    password2: Joi.string()
                .required()
                .valid(Joi.ref('password'))
  });
   return schema.validate(data);
};

// Login validation
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
          .required()
          .email(),
    password: Joi.string()
              .min(6)
              .required()
  });
   return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
