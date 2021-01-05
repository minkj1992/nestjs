import { Types } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

export class CreatePersonInput {
  name: string;
  hobbies: Types.ObjectId[];
}

export class ListPersonInput {
  _id?: Types.ObjectId;
  name?: string;
  hobbies?: Types.ObjectId[];
}

export class UpdatePersonInput {
  _id: Types.ObjectId;
  name?: string;
  hobbies?: Types.ObjectId[];
}
