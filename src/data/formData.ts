const formData = [
  {
    name: "firstName",
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
    name: "lastName",
    inputProps: {
      label: "Фамилия",
      type: "text",
    },
    rules: {
      required: false,
      minLength: { value: 2, message: "Минимум 2 буквы" },
    },
  },
  {},
  {
    name: "phone",
    inputProps: {
      label: "Телефон",
      type: "tel",
    },
    rules: {
      required: false,
      pattern: {
				value: /^(\s*)?(\+)?([-_():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
				message: 'Введите корректный номер телефона'
			},
    },
  },
  {
    name: "email",
    inputProps: {
      label: "E-mail",
      type: "email",
    },
    rules: {
      required: true,
      pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
				message: 'Введите корректный e-mail'
			},
    },
  },
	{
    name: "address",
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
