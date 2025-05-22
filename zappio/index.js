import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import rideRoutes from './routes/ride.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/send-otp', authRoutes);
app.use('/verify-otp', authRoutes);
app.use('/ride-request', rideRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
