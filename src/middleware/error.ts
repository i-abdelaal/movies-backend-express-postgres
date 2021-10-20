const error = function (err: any, req: any, res: any, next: any) {
  // Log errors
  console.log(err);
  res.status(500).send("SOMETHING WENT WRONG!");
};

export default error;
