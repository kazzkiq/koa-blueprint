import swaggerAutogen from "swagger-autogen";
import fs from 'fs';
import path from 'path';

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
const endpointsFiles = fs.readdirSync(`./routes`)
.map((file: string) => path.join(`./routes`, file.replace(".ts", ".js")));

swaggerAutogen(outputFile, endpointsFiles, doc);
