import React from "react";
import Edite from "../Edite";
import Entry from "./Entry";

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <dl className="dictionary">
          {Edite.map((createDite) => (
            <Entry
              key={createDite.id}
              type={createDite.type}
              placeholder={createDite.placeholder}
            />
          ))}
        </dl>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
