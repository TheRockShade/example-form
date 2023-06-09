import { MenuItemProps, TextFieldProps } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
import { Control, RegisterOptions } from "react-hook-form";

export interface FormValuesType {
  firstName: string;
  lastName: string;
  sex: string;
  phone: string;
  email: string;
  city: string;
  address: string;
}

export interface InputType {
  control: Control<FormValuesType>;
  data: InputDataType;
}

export interface InputDataType {
  id: number;
  name: keyof FormValuesType;
  type: HTMLInputTypeAttribute | "select";
  label: string;
  rules?: RegisterOptions;
  inputProps?: TextFieldProps;
  inputs?: {
    id: number;
    otherProps: { label: string; value: string };
  }[];
  options?: {
    id: number;
    label: string;
    otherProps: MenuItemProps;
  }[];
}

export interface formCardDataType {
  id: number;
  name: string;
  value: string;
  label?: string;
}

export interface formCardType {
  id: string;
  data: Array<formCardDataType>;
}

const formData: InputDataType[] = [
  {
    id: 1,
    name: "firstName",
    label: "Имя",
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
    label: "фамилия",
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
    name: "sex",
    label: "Пол",
    type: "radio",
    inputs: [
      { id: 1, otherProps: { label: "Мужской", value: "male" } },
      { id: 2, otherProps: { label: "Женский", value: "female" } },
    ],
    rules: {
      required: false,
    },
  },
  {
    id: 4,
    name: "phone",
    label: "Телефон",
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
    label: "Электронная почта",
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
    id: 7,
    name: "city",
    label: "Город",
    type: "select",
    options: [
      { id: 1, label: "Моска", otherProps: { value: "moscov" } },
      { id: 2, label: "Самара", otherProps: { value: "samara" } },
      { id: 3, label: "Тольятти", otherProps: { value: "tolyatti" } },
    ],
    rules: {
      required: false,
    },
  },
  {
    id: 8,
    name: "address",
    label: "Адрес",
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
