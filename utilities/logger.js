import winston from "winston";
import fs from "fs";

fs.mkdirSync("logs", { recursive: true });

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports: [new winston.transports.File({ filename: "logs/combined.log" })],
});

export { logger };
