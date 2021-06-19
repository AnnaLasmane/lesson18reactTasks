import { useState } from 'react';


function SmartInput() {
    const [text, setText] = useState('');
const changeText = (event)=>{
setText(event.target.value);

}
   let h2Content =   <em> No text field </em>
   if(text !='') {
       h2Content = text;
   }
return (
        <div> 
         <h1> Smart Input</h1>
            <input onChange={changeText} />
            <h2> 
               {h2Content}
            </h2>
       
        </div>
    );
}

export default SmartInput;