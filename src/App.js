
import { useState, useEffect } from 'react';
import './App.css';
import _ from 'underscore';

function App() {

  const [posts, updatePosts] = useState([]);
  const [usersById, updateUsersById] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') //intially, this was mispelled. it was reading "pots" instead of "posts"
      .then(res => res.json()) //the response json was not on the code at first, added that for both and deleted an extra closing parenthesis.
      .then(posts => updatePosts(posts)); //also, added the .then() function as it was not in the code initally...
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => updateUsersById(_.indexBy(users, 'id')))
  }, []);

  const getUsername = (userId) => { //initially, I went ahead and changed the function to getAuthorsName, bit after reading through the code once again, noticed it could be confusing and not as consistent since const contains "users", so i went back and made the change to getUsername()...
    const user = usersById[userId];

    return user ? user.name : "Unknown Name"; //conditional statement created on my end using a ternary operator that checks if the ‘user’ var contains a valid user obj. If ‘user’ is not null or undefined, it will return user.name which is the name of the author with the userId. But, if it is null or undefined, it will return unknown user which indicates that the author name is not found or available.

    //added this function on the return for the <p>{getUsername(post.userId)}</p> element...
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <h1 className="App-title">Debugging App</h1>
        </div>
      </header>
      <section className="posts">
        {posts.map(post => {
          return (
            <article style={{ margin: '10px 0', padding: 10, border: '1px solid #ccc' }}>
              <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>{post.title}</p>
              <p>{getUsername(post.userId)}</p>
              <p>{post.body}</p>
            </article>
          )
        })}
      </section>
    </div >
  );
}

export default App;
