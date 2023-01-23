export default function EmailValidation(text) {
  let re = /\S+@\S+\.\S+/;
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  if (re.test(text) || regex.test(text)) {
    return true;
  } else {
    return false;
  }
}
