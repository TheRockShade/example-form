import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";

interface FormDataProps {}

const FormData: React.FC<FormDataProps> = ({ data }) => {
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
      {data.map((card, i: number) => (
        <SCard key={i}>
          <CardHeader
            action={
              <IconButton
                color="inherit"
                sx={{ p: 0 }}
                onClick={() => console.log("close")}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            {card.map((textfield) => (
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
