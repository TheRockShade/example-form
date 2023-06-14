import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch } from "@/hooks/redux";
import { deleteCard } from "@/redux/slices/formSlice";

import { formCardType } from "@/data/formData";

interface FormDataProps {
  data: formCardType[];
}

const FormData: React.FC<FormDataProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const SFormData = styled("div")`
    max-width: 580px;
    margin: 20px auto 0;
  `;

  const SCard = styled(Card)`
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  `;

  return (
    <SFormData>
      {data.map((card) => (
        <SCard key={card.id}>
          <CardHeader
            action={
              <IconButton
                color="inherit"
                sx={{ p: 0 }}
                onClick={() => dispatch(deleteCard(card.id))}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            {card.data.map((textfield) => (
              <Typography key={textfield.id}>
                {textfield.label}: {textfield.value}
              </Typography>
            ))}
          </CardContent>
        </SCard>
      ))}
    </SFormData>
  );
};

export default FormData;
