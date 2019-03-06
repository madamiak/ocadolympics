export const getSignUps = () => {
    return fetch('https://ocadolympics.firebaseio.com/signUps.json')
        .then(it => it.json())
};

export const addSignUp = (user, userSignUps) => {
    const payload = {
        [user]: userSignUps
    };
    return fetch('https://ocadolympics.firebaseio.com/signUps.json',
        {
            method: 'PUT',
            body: JSON.stringify(payload)
        })
        .then(it => it.json());
};
