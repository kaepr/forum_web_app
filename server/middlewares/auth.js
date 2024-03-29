import jwt from 'jsonwebtoken';
//import { JWT_SECRET } from '../config/secrets';

export const isLogged = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ msg: 'Not authorized' });

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = verified.userId;

    return next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      errorMessage: 'Unauthorized'
    });
  }
};
