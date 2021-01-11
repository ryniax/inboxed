import { app } from './app';

const PORT = 3000;
const NODE_ENV = 'development';

app.listen(PORT, async () => {
    console.log(`Server is listening on http://localhost:${PORT} in ${NODE_ENV} mode`);
});