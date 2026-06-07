/**
 * Node Modules
 */
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

/**
 * Routes
 */
import userRoutes from './routes/user.routes';

/**
 * Rate-limit
 */
import { apiLimiter } from './config/rateLimit';

const app = express();

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use(apiLimiter)

app.use('/api',userRoutes);

export default app;

