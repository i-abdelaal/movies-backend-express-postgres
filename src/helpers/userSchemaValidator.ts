import Joi from "joi";

export default function (user: any) {
  const schema = Joi.object({
    name: Joi.string().required().min(1),
    email: Joi.string().required().email().min(5),
    password: Joi.string().required().min(5),
  });
  const { error } = schema.validate(user);
  if (error) return error.details[0].message;
}
