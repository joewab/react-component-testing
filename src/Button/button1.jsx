import { useState } from 'react';


function Button() {
    const [buttonText, setButtonText] = useState('push me please')

    function sayHello(){
        setButtonText('Thank You!')
    };

    return(
        <button onClick={sayHello}>
            {buttonText}
        </button>
    )
}

export default Button;