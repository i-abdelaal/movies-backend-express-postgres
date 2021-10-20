export default function (req: any, res: any, next: any) {
  if (!req.user.isSuperAdmin)
    return res.status(403).send("ONLY SUPER ADMIN ALLOWED!");
  next();
}
