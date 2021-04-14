import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db';

export const getUserInfo = async (req, res) => {
  try {
    const user_uuid = req.userId;
    const getUserQuery = 'Select * from userdata where UUID=?';

    const connection = await mysql.createConnection(dbConfig);
    const [userRows] = await connection.execute(getUserQuery, [user_uuid]);

    const userData = {
      userName: userRows[0].User_Name,
      occupation: userRows[0].Occupation,
      age: userRows[0].Age,
      phoneNumber: userRows[0].phoneNumber,
      emailID: userRows[0].EmailID,
      dateCreated: userRows[0].dateCreated
    };

    return res.status(200).json({
      data: userData
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error'
    });
  }
};
