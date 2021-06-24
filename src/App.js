import React,{useState} from 'react';
import { Remarkable } from 'remarkable';


function getRawMarkup(e){
    const md = new Remarkable();
    return {__html: md.render(e)};
} 

function App() {
  const [text,setState] = useState('Type some *markdown* here!');

  
  return (
     <>
     <div className="container">
     <div className="input">
         <h3>Input</h3>
     <textarea
         className="input-text"
         onChange={setState()}
         defaultValue={text}
     />
     </div>
     <div className="output">
         <h3>Markdown</h3>
     <div 
         dangerouslySetInnerHTML={getRawMarkup(text)}
         className="output-text"
     >
     </div>
     </div>                
     </div>
     </>
  );
}

export default App;
