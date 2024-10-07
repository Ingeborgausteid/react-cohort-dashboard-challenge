import { createContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { json } from "react-router-dom";

const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])

  const postUrl = "https://boolean-uk-api-server.fly.dev/ingeborgausteid/post"
  const contactUrl = "https://boolean-uk-api-server.fly.dev/ingeborgausteid/contact"

  const fetchPosts = async () => {
    const postsResponse = await fetch(postUrl);
    const jsonPostData = await postsResponse.json();
    setPosts(jsonPostData)
  }

  const fetchContacts = async () => {
    const contactsResponse = await fetch(contactUrl);
    const jsonContactData = await contactsResponse.json();
    setContacts(jsonContactData);
  };

  useEffect(()  => {
    fetchPosts();
    fetchContacts();
  }, [posts, contacts])


  return (
    <AppContext.Provider value={{posts, setPosts, contacts, fetchPosts}}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppContext.Provider>
  );
}

export { App, AppContext }
