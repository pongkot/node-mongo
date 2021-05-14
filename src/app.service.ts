import { Injectable } from '@nestjs/common';
import { MongoEntity } from './MongoEntity';
import { MongoClient } from 'mongodb';

const session = new MongoClient('mongodb://localhost:27017', {
  useUnifiedTopology: true,
});

@Injectable()
export class AppService extends MongoEntity {
  constructor() {
    super(session, 'DataPipeline');
  }

  async getHello(): Promise<any> {
    const dbo = await this.dbo();
    return dbo.collection('FacebookInsightBucket').findOne({});
  }
}
