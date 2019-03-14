export const getSignUps = () => {
  return fetch('https://ocadolympics.firebaseio.com/signUps.json')
    .then(it => it.json())
};

export const addSignUp = userWithDisciplines => {
  return fetch('https://ocadolympics.firebaseio.com/signUps/.json',
    {
      method: 'PATCH',
      body: JSON.stringify(userWithDisciplines)
    })
    .then(it => it.json());
};
