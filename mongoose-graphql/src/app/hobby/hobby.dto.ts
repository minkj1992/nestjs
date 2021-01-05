import { Types } from 'mongoose';

export class CreateHobbyInput {
  name: string;
}

export class ListHobbyInput {
  _id?: Types.ObjectId;
  name?: string;
}

export class UpdateHobbyInput {
  _id: Types.ObjectId;
  name?: string;
}
