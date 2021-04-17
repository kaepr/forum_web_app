import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db';
import { v4 as uuidv4 } from 'uuid';

export const getAllPosts = async (req, res) => {
  try {
    const getPostsQuery =
      'Select Title, Description, SID, posts.UUID, CreatedAt, User_Name from posts, userdata where posts.UUID=userdata.UUID ORDER BY posts.Time DESC';
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

export const getAllPostsUser = async (req, res) => {
  try {
    const user_uuid = req.userId;
    const getPostsQuery =
      'Select Title, Description, SID, posts.UUID, CreatedAt, User_Name from posts, userdata where posts.UUID=userdata.UUID and posts.UUID = ? ORDER BY posts.Time DESC';
    const connection = await mysql.createConnection(dbConfig);
    const [postRows] = await connection.execute(getPostsQuery, [user_uuid]);
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
      'select ReplyID, user_id, postreplies.SID, postreplies.Description, postreplies.CreatedAt, postreplies.Time, User_Name from postreplies, userdata where postreplies.SID = ? and userdata.UUID = postreplies.user_id ORDER BY postreplies.Time DESC';

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

    console.log('title, desc : ', title, description);

    if (!title || !description) {
      return res.status(400).json({
        msg: 'Please enter all fields'
      });
    }

    const user_uuid = req.userId;
    const post_id = uuidv4();

    console.log('uuid : ', user_uuid);

    const time = Date.now();
    const today = new Date(time);
    const dateString = today.toLocaleDateString();

    const createPostQuery =
      'call newPost(?,?,?,?,?,?)';

    const connection = await mysql.createConnection(dbConfig);
    const [postRows] = await connection.execute(createPostQuery, [
      user_uuid,
      title,
      post_id,
      description,
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
      'call insertPostReplies(?,?,?,?,?,?)';

    const connection = await mysql.createConnection(dbConfig);
    const [replyRows] = await connection.execute(createReplyQuery, [
      reply_id,
      user_uuid,
      SID,
      content,
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

export const deletePost = async (req, res) => {
  try {
    const { SID } = req.body;
    const user_uuid = req.userId;

    const deletePostQuery =
      'delete from posts where posts.SID=? AND posts.UUID=?';

    const connection = await mysql.createConnection(dbConfig);
    const [deletePost] = await connection.execute(deletePostQuery, [
      SID,
      user_uuid
    ]);

    return res.status(201).json({
      msg: 'Deleted Post Successfully'
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error in deleting post'
    });
  }
};

export const deleteReply = async (req, res) => {
  try {
    const { replyId } = req.body;
    const user_uuid = req.userId;

    const deleteReplyQuery =
      'delete from postreplies where postreplies.ReplyID=? and postreplies.user_id=?';

    const connection = await mysql.createConnection(dbConfig);
    const [deleteReply] = await connection.execute(deleteReplyQuery, [
      replyId,
      user_uuid
    ]);

    return res.status(201).json({
      msg: 'Deleted Reply Successfully'
    });
  } catch (err) {
    return res.status(500).json({
      msg: 'Error in deleting reply'
    });
  }
};
