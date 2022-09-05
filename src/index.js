import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { useState, useEffect } from 'react';
import reportWebVitals from './reportWebVitals';

function App(){
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData)

  },[]);
  if(data) {
    return (
      <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Remove Data</button>
      </div>
    )
  }
  return <p>No Users</p>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
