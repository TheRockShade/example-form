import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import Input from "./Input";
import formData from "@/data/formData";
import RadioGroup from "./RadioGroup";

const Form: React.FC = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      gender: "male",
    },
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
      <Input control={control} data={formData[0]} />
      <Input control={control} data={formData[1]} />
      <RadioGroup control={control} data={formData[2]} />
      <Input control={control} data={formData[3]} />
      <Input control={control} data={formData[4]} />
      <Input control={control} data={formData[5]} />
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
