const signUps = {};

export const getSignUps = () => {
    return signUps;
};

export const addSignUp = (user, userSignUps) => {
    signUps[user] = userSignUps;
    return new Promise(resolve => resolve(null));
};