import { config } from "@/config";

const Environment = {
  get isProduction() {
    return config.ENVIRONMENT === "production";
  },
  get isQuality() {
    return config.ENVIRONMENT === "staging";
  },
  get isDevelopment() {
    return config.ENVIRONMENT === "development";
  },
  get notProduction() {
    return config.ENVIRONMENT !== "production";
  },
};

export default Environment;
