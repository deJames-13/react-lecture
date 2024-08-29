import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      minlength: 4,
      maxlength: 150,
    },
    content: {
      type: String,
      required: 'Body is required',
      minlength: 4,
      maxlength: 2000,
    },
    user: {
      type: String,
      required: 'User is required',
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
