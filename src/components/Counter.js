import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    // const [text, setText] = useState('foo');
let color = 'red'
if (count > 5) {
    color = 'blue';
}


    const addCount = () => {
setCount(count +1);
    }
    return (
        <div> 
            <h1> Counter!</h1>
            <h2 style={{backgroundColor: color}}>{count}</h2>
            <h3>{color}</h3>
            <button onClick ={addCount}>+</button>
        </div>
    );
}

export default Counter;