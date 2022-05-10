import { Container } from "./styles";
import { TextInputProps } from "react-native";
export const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};
