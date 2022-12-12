import { checkImageToLong, checkSupportedFormats, validaCPF } from './validators';
import { setLocale } from 'yup';
import * as Yup from 'yup';

setLocale({
  mixed: {
    default: 'Não é válido',
    required: 'Este campo é obrigatório',
    notType: 'Não é um tipo válido'
  },
  number: {
    min: 'Mínimo ${min} caracteres',
    max: 'Máximo ${max} caracteres'
  },
  string: {
    email: 'email invalido meu chapa',
    min: 'Mínimo ${min} caracteres',
    max: 'Máximo ${max} caracteres'
  }
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

export const accountSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .test('fileSize', 'A imagem é muito grande', checkImageToLong)
    .test('fileType', 'O formato não é suportado', checkSupportedFormats),
  name: Yup.string().max(30).required(),
  last_name: Yup.string().max(30).required(),
  email: Yup.string().email().required(),
  birthday: Yup.string().optional(),
  cpf: Yup.string().test('CPF invalido', validaCPF).optional(),
  gender: Yup.string().max(20).optional(),
  phone: Yup.string().optional(),
  about: Yup.string().max(200).optional(),
  social_name: Yup.string().max(25).optional(),
  link_social: Yup.string()
    .max(60)
    .test('linkedin', 'Não é um link válido', (v: string | undefined): boolean => {
      if (v?.includes('.') || v?.includes(':')) return false;
      else return true;
    })
    .optional()
});

export const addressSchema = Yup.object().shape({
  cep: Yup.string().required(),
  logradouro: Yup.string().required(),
  number_address: Yup.number().max(100000).required(),
  complement: Yup.string().notRequired(),
  distric: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().notRequired()
});

export const passwordSchema = Yup.object().shape({
  password: Yup.string(),
  new_password: Yup.string().min(6),
  password_confirm: Yup.string().oneOf(
    [Yup.ref('new_password'), null],
    'As senhas não correspondem'
  )
});