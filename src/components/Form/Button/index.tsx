import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  label: string;
}

export const Button: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{label}</Title>
    </Container>
  );
};
