import STRINGS from '../../constants/strings';

export default function PasswordValidation(text) {
  const isNonWhiteSpace = /^\S*$/;
  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  const isContainsNumber = /^(?=.*[0-9]).*$/;
  const isValidLength = /^.{8,16}$/;

  if (!isNonWhiteSpace.test(text)) {
    let result = {
      status: true,
      errorMessage: STRINGS.NON_WHITE_SPACE,
    };
    return result;
  } else if (!isContainsUppercase.test(text)) {
    let result = {
      status: true,
      errorMessage: STRINGS.NO_UPPER_CASE,
    };
    return result;
  } else if (!isContainsLowercase.test(text)) {
    let result = {
      status: true,
      errorMessage: STRINGS.NO_LOWER_CASE,
    };
    return result;
  } else if (!isContainsNumber.test(text)) {
    let result = {
      status: true,
      errorMessage: STRINGS.NO_NUMBER,
    };
    return result;
  } else if (!isValidLength.test(text)) {
    let result = {
      status: true,
      errorMessage: STRINGS.VALID_LENGTH,
    };
    return result;
  }

  const isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(value)) {
    let result = {
   status: true,
   errorMessage: STRINGS.SPECIAL_SYMBOL,
  };
  return result;
  }
  return false;
}
