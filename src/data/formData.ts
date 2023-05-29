import {
  FormControlLabelProps,
  MenuItemProps,
  TextFieldProps,
} from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions } from "react-hook-form";

export interface FormValuesType {
  firstName: string;
  lastName: string;
  sex: string;
  phone: string;
  email: string;
  country: string;
  address: string;
}

export interface InputType {
  // TODO: Пофиксить тип
  control: any; // Control<FormValuesType>
  data: InputDataType;
}

export interface InputDataType {
  id: number;
  name: string;
  type: HTMLInputTypeAttribute | "select";
  label?: string;
  rules?: RegisterOptions;
  inputProps?: TextFieldProps;
  inputs?: {
    id: number;
    otherProps: any; // TODO: Пофиксить тип
  }[];
  options?: {
    id: number;
    label: string;
    otherProps: MenuItemProps;
  }[];
}

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
    id: 7,
    name: "country",
    label: "Страна",
    type: "select",
    options: [
      { id: 1, label: "Россия", otherProps: { value: "russia" } },
      { id: 2, label: "США", otherProps: { value: "usa" } },
      { id: 3, label: "Канада", otherProps: { value: "canada" } },
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
