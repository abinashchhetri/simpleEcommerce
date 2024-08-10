import { UserInterface } from '@/interface/UserInterface';
import mongoose from 'mongoose';

const user = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },

  lname: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    match: [/.+@.+\..+/, 'Please enter a valid email addres'],
    index: true,
  },

  password: {
    type: String,
    require: true,
  },
});

export default mongoose.model<UserInterface & mongoose.Document>('User', user);
