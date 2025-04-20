export const checkValidData = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isEmailValid) return "Email ID is invalid";
  if (!isPasswordValid) return "Password is invalid ";
};

export const secondsToMinutesAndSeconds = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  const padSeconds = padNumber(seconds);

  return { minutes, seconds, padSeconds };
};

export const padNumber = (value) => {
  return value.toString().padStart(2, "0");
};
