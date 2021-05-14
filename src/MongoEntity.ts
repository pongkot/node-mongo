import { Db, MongoClient } from 'mongodb';

export class MongoEntity {
  protected client: MongoClient;
  protected database: string;

  constructor(db: MongoClient, database: string) {
    this.client = db;
    this.database = database;
  }

  async dbo(): Promise<Db> {
    return (await this.client.connect()).db(this.database);
  }
}
