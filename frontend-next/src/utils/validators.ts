import { AVATAR_SUPPORTED_FORMATS, MAX_FILE_SIZE_MB } from './constants';

export function validaCPF(value: string | undefined): boolean {
  if (!value) return true;
  const cpf = value.replace(/[^\d]+/g, ''); //remove tudo exceto numeros

  //testa os erros mais comuns
  if (
    !cpf ||
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;

  return true;
}

export const checkImageToLong = (file: File | undefined) => {
  const limit = 1000 * 1000 * MAX_FILE_SIZE_MB; // 5 MB
  const isValid = (file?.size || 0) <= limit;
  return isValid;
};

export const checkSupportedFormats = (file: File | undefined) => {
  if (!file) return true;
  return AVATAR_SUPPORTED_FORMATS.includes(file.type);
};