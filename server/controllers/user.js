import mysql from 'mysql2/promise';

export const getUserInfo = async (req, res) => {
  try {
    console.log(req);
    console.log('Req User ID: ', req.userId);
    return res.status(200).json({
      uuidUser: req.userId
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error'
    });
  }
};
