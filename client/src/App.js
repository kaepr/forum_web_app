/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PostPage from './component/Post/PostPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts Page</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            hi
          </Route>
          <Route path="/about">About</Route>
          <Route path="/users">Users</Route>
          <Route path="/posts" component={PostPage} />
        </Switch>
      </div>
    </Router>
  );
}

// const [name, setUserName] = useState("");
//   const [age, setAge] = useState(0);
//   const [userList, setUserList] = useState([]);
//   const [newAge, setNewAge] = useState(0);

//   useEffect(() => {
//     Axios.get("/api/get").then((response) => {
//       console.log(response.data);
//       setUserList(response.data);
//     });
//   }, []);

//   const submitButton = () => {
//     Axios.post("/api/insert", {
//       userName: name,
//       userAge: age,
//     });
//     setUserList([...userList, { name: name, age: age }]);
//   };

//   const deleteUser = (userName) => {
//     Axios.delete(`/api/delete/${userName}`);
//   };

//   const updateAge = (userName) => {
//     Axios.put("/api/update", {
//       userName: userName,
//       userAge: newAge,
//     });
//     setNewAge("");
//   };

{
  /* <Button colorScheme="blue">Test</Button>
<h1>SIGNUP PAGE</h1>
<div className="form-container">
  <label>UserName: </label>
  <input
    className="form-input"
    type="text"
    name="userName"
    onChange={(e) => setUserName(e.target.value)}
  />
  <label>Age: </label>
  <input
    className="form-input"
    type="number"
    name="userAge"
    onChange={(e) => setAge(e.target.value)}
  />
</div>
<button className="form-button" onClick={submitButton}>
  Submit
</button>
{userList.map((val) => {
  return (
    <div className="user-list">
      <h1> UserName: {val.name}</h1>
      <p1>Age: {val.age}</p1>
      <button
        onClick={() => {
          deleteUser(val.name);
        }}
      >
        Delete
      </button>
      <input
        type="number"
        id="updateAge"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updateAge(val.name);
        }}
      >
        Update
      </button>
    </div>
  );
})} */
}
