import { error } from 'console';
import { ExpressLoaderType } from './expressTypes';
import express from './express';
import mongos from './mongos';
import depenencyInjector from './depenencyInjector';
import user from '@/models/user';

export default async ({ server }: ExpressLoaderType) => {
  try {
    await mongos();
    console.log('connected to mongoose');

    await depenencyInjector([{ name: 'userModel', model: user }]);
    console.log('dependency injected');

    await express({ server });
    console.log('express loaded');
  } catch {
    console.log(error);
  }
};
