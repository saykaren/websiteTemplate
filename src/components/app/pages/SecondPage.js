import React from 'react';
import {useHistory} from 'react-router';

const SecondPage = () =>{
    const history = {useHistory}

    const goBackHistory = () =>{
        history.goBack();
    }

    return(
        <>
            <button onClick={goBackHistory}>Back</button>
            <div>Second Page</div>
        </>
    );
}

export default SecondPage;