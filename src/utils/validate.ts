const validatePhone = (phoneText = '') => {
  let message = '';

  if (phoneText) {
    if (phoneText.length < 9 || phoneText[0] !== '0' || phoneText.length > 12) {
      message = 'Số điện thoại không hợp lệ';
      return { result: false, message };
    }
    return { result: true, message: '' };
  }
  message = 'Bạn cần phải nhập số điện thoại';
  return { result: false, message };
};

const validatePassword = (password: string) => {
  if (!password) return { result: false, message: 'Bạn chưa điền thông tin' };
  if (password.length < 6) {
    return { result: false, message: 'Mật khẩu cần có tối thiểu 6 kí tự' };
  }
  if (password.length > 40) {
    return { result: false, message: 'Mật khẩu chỉ có tối đa 40 kí tự' };
  }
  const regex = /["'\s/]/;
  const check = password.search(regex);
  if (check !== -1) {
    return { result: false, message: 'Mật khẩu không hợp lệ' };
  }
  return { result: true, message: '' };
};

const checkSpecialName = (name = '') => {
  const otherLetters = '[a-eghik-vxyàáâãèéêìíòóôõùúýỳỹỷỵựửữừứưụủũợởỡờớơộổỗồốọỏịỉĩệểễềếẹẻẽặẳẵằắăậẩẫầấạảđ₫0123456789]'.normalize(
    'NFC',
  );
  const regexString = `^${otherLetters}+\\s(${otherLetters}+\\s)*${otherLetters}+$`;
  const regexPattern = RegExp(regexString);
  return regexPattern.test(name.toLowerCase().normalize('NFC'));
};

const validateEmail = (email = '') => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
export { validateEmail, validatePassword, checkSpecialName, validatePhone };
