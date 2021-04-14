import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db';
import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = async (req, res) => {
  try {
    const getPostsQuery =
      'Select Title, Description, SID, posts.UUID, likes, CreatedAt, User_Name from posts, userdata where posts.UUID=userdata.UUID ORDER BY posts.Time DESC';
    const connection = await mysql.createConnection(dbConfig);
    const [postRows] = await connection.execute(getPostsQuery);
    // console.log('res : ', postRows);
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

export const getAllReplies = async (req, res) => {
  try {
    const { SID } = req.body;
    // console.log('req body : ', req.body);
    const getReplyQuery =
      'select ReplyID, user_id, postreplies.SID, postreplies.Description, postreplies.Likes, postreplies.CreatedAt, postreplies.Time, User_Name from postreplies, userdata where postreplies.SID = ? and userdata.UUID = postreplies.user_id ORDER BY postreplies.Time DESC';

    const connection = await mysql.createConnection(dbConfig);
    const [replyRows] = await connection.execute(getReplyQuery, [SID]);
    // console.log('res : ', replyRows);
    return res.status(200).json({
      data: replyRows
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: 'Error in getting replies'
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
      'insert into posts (UUID, Title, SID, Description, likes, CreatedAt, Time) values (?,?,?,?,?,?)';

    const connection = await mysql.createConnection(dbConfig);
    const [postRows] = await connection.execute(createPostQuery, [
      user_uuid,
      title,
      post_id,
      description,
      0,
      dateString,
      time
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

export const createReply = async (req, res) => {
  try {
    const { content, SID } = req.body;
    const user_uuid = req.userId;
    const reply_id = uuidv4();

    const time = Date.now();
    const today = new Date(time);
    const dateString = today.toLocaleDateString();
    // console.log('reply id : ', reply_id);
    // console.log('user id : ', user_uuid);
    // console.log('post id : ', SID);
    // console.log('today : ', time);
    // console.log('content : ', content);
    // console.log('date string : ', dateString);

    const createReplyQuery =
      'insert into postreplies (ReplyID, user_id, SID, Description, Likes, CreatedAt, Time) values (?,?,?,?,?,?,?)';

    const connection = await mysql.createConnection(dbConfig);
    const [replyRows] = await connection.execute(createReplyQuery, [
      reply_id,
      user_uuid,
      SID,
      content,
      0,
      dateString,
      time
    ]);

    return res.status(201).json({
      msg: 'Reply created'
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error in creating reply'
    });
  }
};
