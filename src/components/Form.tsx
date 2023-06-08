import { Button, styled } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import formData, { FormValuesType, InputDataType } from "@/data/formData";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import { useDispatch } from "react-redux";
import { addCard } from "@/redux/slices/formSlice";

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm<FormValuesType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      sex: "male",
      phone: "",
      email: "",
      country: "",
      address: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValuesType> = (data): void => {
    interface dataType {
      id: number;
      name: string;
      value: string;
      label?: string;
    }

    const newData: dataType[] = [];

    Object.keys(data).forEach(
      (key, i) =>
        !!data[key] && newData.push({ id: i, name: key, value: data[key] })
    );

    newData.forEach((input) => {
      const item = formData.find((el) => el.name === input.name);
      input.label = item?.label;
    });

    dispatch(addCard(newData));

    // reset();
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
