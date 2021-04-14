import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db';
import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = async (req, res) => {
  try {
    const getPostsQuery =
      'Select Title, Description, SID, posts.UUID, likes, CreatedAt, User_Name from posts, userdata where posts.UUID=userdata.UUID';
    const connection = await mysql.createConnection(dbConfig);
    const [postRows] = await connection.execute(getPostsQuery);
    console.log('res : ', postRows);
    return res.status(200).json({
      data: postRows
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: 'Error in getting posts'
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      });
    }

    const user_uuid = req.userId;
    const post_id = uuidv4();

    const time = Date.now();
    const today = new Date(time);
    const dateString = today.toLocaleDateString();

    const createPostQuery =
      'insert into posts (UUID, Title, SID, Description, likes, CreatedAt) values (?,?,?,?,?,?)';

    const connection = await mysql.createConnection(dbConfig);
    const [postRows] = await connection.execute(createPostQuery, [
      user_uuid,
      title,
      post_id,
      description,
      0,
      dateString
    ]);

    return res.status(200).json({
      msg: 'Post created successfully'
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error in creating post'
    });
  }
};
