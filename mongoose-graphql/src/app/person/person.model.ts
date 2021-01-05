import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

@Schema()
export class Person {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  hobbies: Hobby[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
