import express from 'express';
import { saveOTP, getOTP, clearOTP } from '../routes/otpStore.js';

const router = express.Router();

router.post('/send-otp', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone required' });

  const otp = Math.floor(1000 + Math.random() * 9000);
  saveOTP(phone, otp);

  console.log(`📲 OTP for ${phone}: ${otp}`);
  res.json({ success: true, message: 'OTP sent (simulated)' });
});

router.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  const savedOTP = getOTP(phone);

  if (parseInt(otp) === savedOTP) {
    clearOTP(phone);
    return res.json({ success: true, userId: `phone_${phone}` });
  }

  return res.status(400).json({ error: 'Invalid OTP' });
});

export default router;
