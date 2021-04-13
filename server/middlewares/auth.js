import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/secrets';

export const isLogged = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log('token = ', token);
    if (!token) return res.status(401).json({ msg: 'Guy Not authorized' });

    const verified = jwt.verify(token, JWT_SECRET);

    req.userId = verified.userId;

    console.log(req);

    return next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      errorMessage: 'Unauthorized'
    });
  }
};
