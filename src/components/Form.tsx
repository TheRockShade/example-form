import { SubmitHandler, useForm } from "react-hook-form";
import { Button, styled } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addCard } from "@/redux/slices/formSlice";

import Input from "@/components/Input";
import Select from "@/components/Select";
import RadioGroup from "@/components/RadioGroup";

import formData, {
  FormValuesType,
  InputDataType,
  formCardType,
} from "@/data/formData";

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state?.form);

  const { handleSubmit, control, reset, setError } = useForm<FormValuesType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      sex: "male",
      phone: "",
      email: "",
      city: "",
      address: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValuesType> = (data): void => {
    const formCard: formCardType = {
      id: data.email,
      data: [],
    };

    // TODO: fix type
    const dataKeys: Array<keyof FormValuesType> = Object.keys(data);

    dataKeys.forEach(
      (key, i) =>
        !!data[key] &&
        formCard.data.push({ id: i, name: key, value: data[key] })
    );

    formCard.data.forEach((input) => {
      const item = formData.find((el) => el.name === input.name);
      input.label = item?.label;
    });

    const isRegister = !!state.find((card) => card.id === formCard.id);

    if (isRegister) {
      setError("email", { message: "Пользователь уже зарегестрирован" });
    } else {
      dispatch(addCard(formCard));
      reset();
    }
  };

  const getInput = (input: InputDataType): JSX.Element => {
    let Component;

    switch (input.type) {
      case "select":
        Component = Select;
        break;
      case "radio":
        Component = RadioGroup;
        break;
      default:
        Component = Input;
    }

    return <Component control={control} data={input} key={input.id} />;
  };

  const SForm = styled("form")`
    max-width: 580px;
    margin: 20px auto 0;
  `;

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      {formData.map((input) => getInput(input))}
      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", ml: "auto" }}
      >
        Отправить
      </Button>
    </SForm>
  );
};

export default Form;
