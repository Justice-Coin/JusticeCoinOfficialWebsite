// import JoditEditor from "jodit-react";
// import DanteEditor from "Dante2";
// import Editor from "alloyeditor";

import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import getOptions from "./getOptions";

const Editor = props => {
    const sunEditorOptions = getOptions();
  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor setOptions={sunEditorOptions}/>
    </div>
  );
};
export default Editor;