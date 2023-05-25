import { Button, Input as MInput } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import Input from "./Input";
import formData from "@/data/formData";

const Form: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const Form = styled("form")({
    maxWidth: "580px",
    margin: "0 auto",
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} inputData={formData[0]} />
      <Input control={control} inputData={formData[1]} />
      <Input control={control} inputData={formData[3]} />
      <Input control={control} inputData={formData[4]} />
      <Input control={control} inputData={formData[5]} />
      <Button type="submit" variant="contained" /* disabled={!isValid} */>Отправить</Button>
    </Form>
  );
};

export default Form;
