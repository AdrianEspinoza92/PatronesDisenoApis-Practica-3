import { createApp } from './app.js';
import { connectDatabase } from './config/database.js';

const port = Number(process.env.PORT ?? 3000);

const start = async (): Promise<void> => {
  await connectDatabase();
  createApp().listen(port, () => console.log(`API disponible en http://localhost:${port}`));
};

start().catch((error: unknown) => {
  console.error('No se pudo iniciar el servidor:', error);
  process.exit(1);
});
