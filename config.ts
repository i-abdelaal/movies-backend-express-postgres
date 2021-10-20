// Server
export const httpPort: any = process.env.HTTP_PORT || 5000;
// Database
export const dbPort: any = process.env.DB_PORT || 5432;
// Services
export const premiumFee: any = process.env.PREMIUM_FEE || 40;
export const regularFee: any = process.env.REGULAR_FEE || 30;
export const redeemValue: any = process.env.REDEEM_VALUE || 25;
export const premiumBonus: any = process.env.PREMIUM_BONUS || 2;
export const regularBonus: any = process.env.REGULAR_BONUS || 1;
// Helpers
export const jwtPrivateKey: any = process.env.JWT_PRIVATE_KEY || "secret";
