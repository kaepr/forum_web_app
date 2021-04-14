import jwt from 'jsonwebtoken';
import { dbConfig } from '../config/db';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mysql from 'mysql2/promise';

import { JWT_SECRET } from '../config/secrets';

export const register = async (req, res) => {
  try {
    const {
      email,
      password,
      occupation,
      age,
      phoneNumber,
      userName
    } = req.body;
    if (
      !email ||
      !password ||
      !occupation ||
      !age ||
      !phoneNumber ||
      !userName
    ) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      });
    }
    
    const emailExists = 'Select * from userdata where EmailID=?';
    const userNameExists = 'Select * from userdata where User_Name=?';

    const connection = await mysql.createConnection(dbConfig);
    const [emailRes] = await connection.execute(emailExists, [email]);
    const [usernameRes] = await connection.execute(userNameExists, [userName]);

    if (emailRes.length !== 0 || usernameRes.length !== 0) {
      return res.status(409).json({
        msg: 'User already exists. Try different email and username'
      });
    }

    // No user exists, so possible to create new user
    const user_id = uuidv4();
    const createUser =
      'insert into userdata (UUID, User_Name, Occupation, Age, PhoneNumber, EmailID, password, dateCreated) values (?,?,?,?,?,?,?,?)';

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(Date.now());
    const time = Date.now();
    const today = new Date(time);
    const dateString = today.toLocaleDateString();
    const [userCreated] = await connection.execute(createUser, [
      user_id,
      userName,
      occupation,
      age,
      phoneNumber,
      email,
      passwordHash,
      dateString
    ]);

    const token = jwt.sign(
      {
        userId: user_id
      },
      JWT_SECRET
    );

    return res
      .status(201)
      .cookie('token', token, {
        httpOnly: true
      })
      .json({
        msg: 'User successfully created.'
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: 'Error in registration'
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      });
    }

    const emailExists = 'Select * from userdata where EmailID=?';
    const connection = await mysql.createConnection(dbConfig);
    const [emailRes] = await connection.execute(emailExists, [email]);

    if (emailRes.length === 0) {
      return res.status(409).json({
        msg: 'User with email does not exist. Try Again'
      });
    }

    const existingUser = emailRes[0];

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordCorrect) {
      return res.status(401).json({
        msg: 'Invalid Credentials'
      });
    }

    const token = jwt.sign(
      {
        userId: existingUser.UUID
      },
      JWT_SECRET
    );

    return res
      .status(200)
      .cookie('token', token, {
        httpOnly: true
      })
      .json({
        msg: 'Successfully Logged In'
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: 'Error in Logging In'
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
      })
      .send();
  } catch (err) {
    return res.status(400).json({
      msg: 'Could not log out properly'
    });
  }
};

export const isLoggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token || token === undefined) return res.json(false);
    jwt.verify(token, JWT_SECRET);
    return res.json(true);
  } catch (err) {
    return res.json(false);
  }
};
