import { Schema, Types, Model } from 'mongoose';
import connectionDB from '../service/connectionDB';

interface IPost {
  title: string;
  category: Types.ObjectId;
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  content: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Post: Model<IPost> = connectionDB.mongo.model<IPost>(
  'post',
  PostSchema,
  'post',
);

export default Post;
