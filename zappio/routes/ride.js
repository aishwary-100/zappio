// routes/rideRoutes.js
import express from 'express';
import { db } from './fireStore.js'; // Adjust path based on structure

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, pickup, drop, timestamp } = req.body;

  if (!userId || !pickup || !drop || !timestamp) {
    return res.status(400).json({ error: 'Missing ride info' });
  }

  const ride = {
    userId,
    pickup,
    drop,
    timestamp,
    status: 'requested',
  };

  try {
    await db.collection('rideRequests').add(ride);
    res.json({ success: true, ride });
  } catch (error) {
    console.error('Firestore error:', error);
    res.status(500).json({ error: 'Failed to save ride' });
  }
});

export default router;
