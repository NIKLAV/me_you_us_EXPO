export const empty = (arr) => {
  return arr.find((i) => i === "") === "";
};
export const passwordValid = (password) => {
  if (password.length <= 6) return false;
  const regExp = /(?=^.{8,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};
export const passwordConfirm = (password, confirmPassword) => {
  if (password !== confirmPassword) return false;
  return true;
};

export const emailValid = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  if (!regExp.test(email)) return false;
  return true;
};

export const phoneValid = (phone) => {
  const regExp = /^[\+][1-9]{1}[\d]{9,13}$/;

  if (!regExp.test(phone)) return false;

  return true;
};

export const shake = (Animated, shakeAnim) => {
  Animated.timing(shakeAnim, {
    toValue: 20,
    duration: 200,
    useNativeDriver: false,
  }).start(() => {
    Animated.timing(shakeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(shakeAnim, {
        toValue: 20,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      });
    });
  });
};


export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });