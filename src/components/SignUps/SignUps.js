import React from 'react';
import SignUp from '../SignUp/SignUp';

const SignUps = (props) => {
    const signUps = [];
    Object.keys(props.signUps || {}).forEach(user => {
        signUps.push(
            <div key={ user }>
                { user + '\'s sign ups:' }
                { props.signUps[user].map(it => (
                    <SignUp key={ it } name={ props.disciplines.filter(d => d.id === it)[0].name }/>
                )) }
            </div>
        );
    });
    return signUps;
};

export default SignUps;
