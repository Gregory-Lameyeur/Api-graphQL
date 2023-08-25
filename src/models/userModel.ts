import { Schema, Types } from 'mongoose';
import connectionDB from '../service/connectionDB';

interface IUser {
  name: string;
  email: string;
  createdAt: Date;
  password: string;
  posts: Types.ObjectId;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    toJSON: {
      transform(_doc, ret) {
        delete ret.password;
      },
    },
  },
);

const User = connectionDB.mongo.model('user', UserSchema, 'userBlog');
export default User;
