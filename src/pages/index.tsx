import Form from "@/components/Form";
import FormData from "@/components/FormData";
import { formCardType } from "@/data/formData";
import { useAppSelector } from "@/hooks/redux";

const Index: React.FC = () => {
  const formData: formCardType[] = useAppSelector((state) => state?.form);

  return (
    <>
      <Form />
      {!!formData.length && <FormData data={formData} />}
    </>
  );
};

export default Index;
