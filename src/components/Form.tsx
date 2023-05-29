import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "styled-components";
import Input from "./Input";
import formData, { FormValuesType, InputDataType } from "@/data/formData";
import Select from "./Select";
import RadioGroup from "./RadioGroup";

const Form: React.FC = () => {
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
  });

  const onSubmit: SubmitHandler<FormValuesType> = (data): void => {
    console.log(data);
    reset();
  };

  // TODO: Fix console warning
  const Form = styled("form")({
    maxWidth: "580px",
    margin: "0 auto",
  });

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formData.map((input) => getInput(input))}
      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", ml: "auto" }}
      >
        Отправить
      </Button>
    </Form>
  );
};

export default Form;
