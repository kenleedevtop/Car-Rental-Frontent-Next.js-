import { object, string } from 'yup';

export const emailSchema = object().shape({
  email: string().email(),
});

export const passwordSchema = object().shape({
  password: string().min(8),
  // .matches(/[0-9]/)
  // .matches(/[a-z]/)
  // .matches(/[A-Z]/)
  // .matches(/[^\w]/),
});

export const firstNameSchema = object().shape({
  firstName: string().min(3),
});

export const lastNameSchema = object().shape({
  lastName: string().min(3),
});

export const usernameSchema = object().shape({
  username: string()
    .min(6)
    .matches(/[a-z0-9.]/)
    .matches(/^\S*$/),
});
