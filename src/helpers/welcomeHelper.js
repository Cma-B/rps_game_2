export const clickMe = (name) => {
    const welcomeMessage = setWelcomeMessage(name);
    return [welcomeMessage];
};

const setWelcomeMessage = message => {
  return `Welcome ${name}, let's play ROCK PAPER SCISSORS`
}
     