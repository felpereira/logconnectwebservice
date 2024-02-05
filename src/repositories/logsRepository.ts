import Log from "../models/logs";

const logs: Log[] = [];

async function getLogs(): Promise<Log[]> {
  return new Promise((resolve, reject) => {
    return resolve(logs);
  });
}

async function getLogsById(secret: string) {
  return new Promise((resolve, reject) => {
    return resolve(logs.filter((x) => (x.secret = secret)));
  });
}

async function addLog(log: Log): Promise<Log> {
  return new Promise((resolve, reject) => {
    if (!log.message) return reject(new Error(`Invalid log.`));

    const newLog = new Log(log.message, log.logLevel, log.secret);
    logs.push(newLog);

    return resolve(newLog);
  });
}

export default {
  getLogs,
  addLog,
  getLogsById,
};
