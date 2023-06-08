import Form from "@/components/Form";
import FormData from "@/components/FormData";
import { useSelector } from "react-redux";

const Index: React.FC = () => {
  const formData = useSelector((state) => state?.form.cards);
  console.log(formData);

  return (
    <>
      <Form />
      {!!formData.length && <FormData data={formData} />}
    </>
  );
};

export default Index;
