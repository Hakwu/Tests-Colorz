// form validators with Yup package

import * as Yup from "yup";

const emailValidation = Yup.object({
  email: Yup.string().email('invalid-email').required('required')
});

const loginValidation = Yup.object({
  email: Yup.string().email('invalid-email').required('required'),
  password: Yup.string().min(8, 'password-min').required('required'),
});

const registerValidation = Yup.object({
  name: Yup.string().min(2, 'name-min').required('required'),
  email: Yup.string().email('invalid-email').required('required'),
  password: Yup.string().min(8, 'password-min').required('required'),
});

const addExchangeValidation = Yup.object({
  exchangeId: Yup.string().required('required'),
  name: Yup.string().min(2, 'name-min').required('required'),
  custom: Yup.bool().required('required'),
  publicKey: Yup.string().when("custom", { is: false,
    then: Yup.string().required("required")
  }),
  secretKey: Yup.string().when("custom", { is: false,
    then: Yup.string().required("required")
  }),
  withPassword: Yup.bool().required('required'),
  password: Yup.string().when("withPassword", { is: true,
    then: Yup.string().required("required")
  })
});

const updateProfileDetails = Yup.object({
  email: Yup.string().email('invalid-email').required('required'),
  name: Yup.string().min(2, 'name-min').required('required')
});

const updateProfilePassword = Yup.object({
  password: Yup.string().min(8, 'password-min').required('required'),
  new_password: Yup.string().min(8, 'password-min').required('required'),
  new_password_confirmation: Yup.string().oneOf([Yup.ref('new_password'), null], 'password-must-match').required('required'),
});

const addOrderValidation = Yup.object({
  side: Yup.string().required('required'),
  baseId: Yup.string().required('required'),
  quoteId: Yup.string().required('required'),
  walletId: Yup.string().required('required'),
  amount: Yup.number().moreThan(0, 'greater-than-zero').required('required'),
  price: Yup.number().moreThan(0, 'greater-than-zero').required('required'),
  doneAt: Yup.date().required('required'),
  type: Yup.string().required('required'),
  fee: Yup.string().nullable(),
});

const addTransactionValidation = Yup.object({
  currencyId: Yup.string().required('required'),
  type: Yup.string().required('required'),
  walletId: Yup.string().required('required'),
  amount: Yup.number().moreThan(0, 'greater-than-zero').required('required'),
  doneAt: Yup.date().required('required'),
});

const feeComparatorValidation = Yup.object({
  base: Yup.string().required('required'),
  quote: Yup.string().required('required'),
  amount: Yup.number().moreThan(0, 'greater-than-zero').required('required'),
  type: Yup.string().required('required'),
  side: Yup.string().required('required'),
});

const resetPasswordValidation = Yup.object({
  email: Yup.string().email('invalid-email').required('required'),
  password: Yup.string().min(8, 'password-min').required('required'),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'password-must-match').required('required'),
});

const contactValidation = Yup.object({
  email: Yup.string().email('invalid-email').required('required'),
  subject: Yup.string().required('required'),
  message: Yup.string().required('required'),
});

const addAlertValidation = Yup.object({
  name: Yup.string().min(2, 'name-min').required('required'),
  cryptoId: Yup.string().required('required'),
  price: Yup.number().moreThan(0, 'greater-than-zero').required('required'),
  type: Yup.string().required('required'),
});

export {
  loginValidation,
  registerValidation,
  emailValidation,
  addExchangeValidation,
  updateProfileDetails,
  updateProfilePassword,
  addOrderValidation,
  addTransactionValidation,
  feeComparatorValidation,
  resetPasswordValidation,
  contactValidation,
  addAlertValidation
};
