import express from 'express';

import 'reflect-metadata';

const startServer = async () => {
  const server = express();

  await (await import('@/loaders')).default({ server });

  server.listen(8801, () => {
    console.log('server started at 8801');
  });
};

startServer();
