import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
import "./App.css";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div>
        <UserList />
        <button
          onClick={() => setResource("posts")}
          className="ui button primary"
        >
          Posts
        </button>{" "}
        <button
          onClick={() => setResource("todos")}
          className="ui button primary"
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
