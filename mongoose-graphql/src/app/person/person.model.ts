import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

@Schema()
export class Person {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  // to save ref of objects
  // TODO: ref for what? id or name?
  @Prop({ type: [Types.ObjectId], ref: Hobby.name })
  hobbies: Types.ObjectId[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
