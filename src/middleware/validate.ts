export default function (validator: any) {
  return (req: any, res: any, next: any) => {
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
  };
}
