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
  //  defaultMeta: { service: "dietician-playwright-framework" },
  transports: [
    new winston.transports.File({ filename: "logs/combined.log" }),
    new winston.transports.Console({
      // ← for logs in console
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        }),
      ),
    }),
  ],
});

export { logger };
