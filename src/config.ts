import dotenv from "dotenv";

dotenv.config();

export const config = {
  ENVIRONMENT: process.env.ENVIRONMENT ?? "development",
  PORT: process.env.PORT ?? 4000,
  REQUEST_BODY_SIZE_LIMIT: "10mb",
  // Add other relevant global config params here.
};
