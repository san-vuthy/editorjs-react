import React from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./constants";
import logo from "./logo.svg";
import Output from "editorjs-react-renderer";
// import "./App.css";

function App() {
  const instanceRef = React.useRef(null);
  const [data, setData] = React.useState({
    time: 1556098174501,
    blocks: [
      {
        type: "header",
        data: {
          text: "Editor.js",
          level: 2,
        },
      },
    ],
  });

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    await setData(savedData);
    // instanceRef.current.clear();
  }

  return (
    <div className="App">
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        instanceRef={(instance) => (instanceRef.current = instance)}
      />
      <Output data={data} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
