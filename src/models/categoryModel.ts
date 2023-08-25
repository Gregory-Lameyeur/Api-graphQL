import { Schema, Types } from 'mongoose';
import connectionDB from '../service/connectionDB';

type ICategory = {
  name: string;
  description: string;
  post: Types.ObjectId;
};

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
});

const Category = connectionDB.mongo.model('category', CategorySchema, 'category');

export default Category;
