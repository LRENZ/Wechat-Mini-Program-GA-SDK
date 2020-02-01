const Joi = require('@hapi/joi');
const schema = Joi.object({
    tid:Joi.string().pattern(new RegExp('^UA-[0-9]*$')).required(),
    v:Joi.string().pattern(new RegExp('1')).required(),
})

export default schema
