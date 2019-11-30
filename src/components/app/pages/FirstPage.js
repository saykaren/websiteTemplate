import React from 'react';
import {useHistory} from 'react-router';

const FirstPage = () =>{
    const history = useHistory();

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button onClick={goBackHistory}>Back</button>
            <div>First Page</div>
          
        </>
    );
}

export default FirstPage;