import { UserInterface } from '@/interface/UserInterface';

import { Document, Model } from 'mongoose';

declare global {
  namespace Models {
    export type UserModel = Model<UserInterface & Document>;
  }
}
