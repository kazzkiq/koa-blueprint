import swaggerAutogen from "swagger-autogen";
import { config } from "./config";
import { version } from "../package.json";

const doc = {
  info: {
    title: "Koalla API",
    description: "🐨 Your description goes here.",
    version,
  },
  host: `localhost:${config.PORT}`,
  swaggerVersion: version,
  schemes: ["http", "https"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/api-status.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
