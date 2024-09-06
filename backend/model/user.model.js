import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: 'Username is required',
      unique: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: 'Password is required',
      minlength: 6,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
