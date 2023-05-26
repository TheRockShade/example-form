const formData = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    inputProps: {
      label: "Имя",
      type: "text",
    },
    rules: {
      required: true,
      minLength: { value: 2, message: "Минимум 2 буквы" },
    },
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    inputProps: {
      label: "Фамилия",
      type: "text",
    },
    rules: {
      required: false,
      minLength: { value: 2, message: "Минимум 2 буквы" },
    },
  },
  {
    id: 3,
    name: "gender",
    label: "Пол",
    type: "radio",
    inputs: [
      { value: "male", label: "Мужской" },
      { value: "female", label: "Женский" },
    ],
    rules: {
      required: false,
    },
  },
  {
    id: 4,
    name: "phone",
    type: "tel",
    inputProps: {
      label: "Телефон",
      type: "tel",
    },
    rules: {
      required: false,
      pattern: {
        value: /^(\s*)?(\+)?([-_():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        message: "Введите корректный номер телефона",
      },
    },
  },
  {
    id: 5,
    name: "email",
    type: "email",
    inputProps: {
      label: "E-mail",
      type: "email",
    },
    rules: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        message: "Введите корректный e-mail",
      },
    },
  },
  {
    id: 6,
  },
  {
    id: 7,
    name: "country",
    label: "Страна",
    type: "select",
    options: [
      { value: "russia", label: "Россия" },
      { value: "usa", label: "США" },
      { value: "canada", label: "Канада" },
    ],
    rules: {
      required: false,
    },
  },
  {
    id: 8,
    name: "address",
    type: "text",
    inputProps: {
      label: "Адрес",
      type: "text",
    },
    rules: {
      required: false,
      minLength: { value: 2, message: "Минимум 2 буквы" },
    },
  },
];

export default formData;
