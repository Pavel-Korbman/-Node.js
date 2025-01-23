const Joi = require('joi');

const idSchema = Joi.object({ id: Joi.number().required() });

const bodySchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    secondName: Joi.string().min(2).required(),
    age: Joi.number().max(120).required(),
    city: Joi.string().min(2).required()
});

module.exports = {idSchema, bodySchema};