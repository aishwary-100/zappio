import dotenv from 'dotenv';
dotenv.config();

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === `Bearer ${process.env.AUTH_TOKEN}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
