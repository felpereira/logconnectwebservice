export default class Log {
  public timestamp: Date;
  public message: string;
  public logLevel: string;
  public secret: string;

  constructor(message: string, logLevel: string = "info", secret: string) {
    this.timestamp = new Date();
    this.message = message;
    this.logLevel = logLevel;
    this.secret = secret;
  }

  public toString(): string {
    return `[${this.timestamp.toISOString()}] [${this.logLevel.toUpperCase()}]: ${
      this.message
    }`;
  }
}
