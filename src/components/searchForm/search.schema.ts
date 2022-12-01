import * as Yup from 'yup';

export const searchSchema = Yup.object().shape({
  phone: Yup.string()
    .nullable()
    // .min(12, 'Некорректный формат телефона')
    // .max(13, 'Некорректный формат телефона'),
  // .length(12, 'Некорректный формат телефона')
  // .test('isValid', 'Укажите корректный код оператора', phoneNumber =>
  //   phoneNumber ? checkIsPhoneCodeCorrect(phoneNumber) : false,
  // ),
});
