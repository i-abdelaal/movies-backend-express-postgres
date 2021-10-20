import Joi from "joi";

export default function (movie: any) {
  const schema = Joi.object({
    title: Joi.string().required().min(1),
    type: Joi.string().required(),
  });
  const { error } = schema.validate(movie);
  if (error) return error.details[0].message;
}
