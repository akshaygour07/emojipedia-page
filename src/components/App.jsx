import React from "react";
import Heading from "./Heading";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Heading />
      <div className="dictionary">
        {emojipedia.map((emojis) => (
          <Dictionary
            key={emojis.id}
            emoji={emojis.emoji}
            name={emojis.name}
            meaning={emojis.meaning}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
