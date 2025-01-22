const Joi = require('joi');

const idSchema = Joi.object({  // Схема валидации ID
    id: Joi.number().required()
});

const articleSchema = Joi.object({  // Схема валидации статьи
    title: Joi.string().required(),
    content: Joi.string().min(5).required(),
});

module.exports = {idSchema, articleSchema};