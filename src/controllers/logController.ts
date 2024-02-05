import { Request, Response, NextFunction } from "express";
import Log from "../models/logs";
import logsRepository from "../repositories/logsRepository";

async function getLogs(req: Request, res: Response, next: NextFunction) {
  const customer = await logsRepository.getLogs();
  if (customer) res.json(customer);
  else res.sendStatus(404);
}

async function postLog(req: Request, res: Response, next: NextFunction) {
  const customer = req.body as Log;
  const result = await logsRepository.addLog(customer);
  if (result) res.status(201).json(result);
  else res.sendStatus(400);
}

async function getLogById(req: Request, res: Response, next: NextFunction) {
  const secret = req.params.secret as string;
  const log = await logsRepository.getLogsById(secret);
  if (log) res.json(log);
  else res.sendStatus(404);
}

export default { getLogs, postLog, getLogById };
