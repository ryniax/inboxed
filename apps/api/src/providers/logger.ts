import winston from 'winston';
import path from 'path';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  winston.format.printf((info) => `${info.level.toUpperCase()}: ${info.message} (${info.timestamp})`),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: path.resolve('src', 'logs', 'error.log'),
    level: 'error',
  }),
  new winston.transports.File({ filename: path.resolve('src', 'logs', 'all.log') }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
