export const parsePhone = (val: string) => {
  let formatted = val.replace(/\D/g, "");
  formatted = formatted.replace(/(\d{2})(\d)/, "$1 $2");
  formatted = formatted.replace(/(\d{5})(\d)/, "$1-$2");
  return formatted;
};

export const validateCpf = (val: string) => {
  let cpf = val.replace(/[^\d]+/g, "");
  let sum = 0;
  let rest = 0;
  if (cpf === "00000000000") return false;
  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i += 1) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  return true;
};

export const parseCpf = (val: string) => {
  let formatted = val.replace(/\D/g, "");
  if (formatted.length <= 11) {
    formatted = formatted.replace(/(\d{3})(\d)/, "$1.$2");
    formatted = formatted.replace(/(\d{3})(\d)/, "$1.$2");
    formatted = formatted.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    formatted = formatted.replace(/^(\d{2})(\d)/, "$1.$2");
    formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    formatted = formatted.replace(/\.(\d{3})(\d)/, ".$1/$2");
    formatted = formatted.replace(/(\d{4})(\d)/, "$1-$2");
  }
  return formatted;
};

export const validatePassword = (val: string) => {
  const hasUppercase = val.toLowerCase() !== val;
  const hasSpecial = val.replaceAll(/\W/g, "") !== val;
  const hasNumber = val.replaceAll(/\d/g, "") !== val;
  const hasLength = val.length >= 8;
  if (!hasUppercase || !hasSpecial || !hasNumber || !hasLength) {
    return false;
  }
  return true;
};
