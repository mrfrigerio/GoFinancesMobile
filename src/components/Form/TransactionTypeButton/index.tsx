import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

export interface TransactionTypeProps extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isSelected: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export const TransactionTypeButton: React.FC<TransactionTypeProps> = ({
  title,
  type,
  isSelected,
  ...rest
}) => {
  return (
    <Container isSelected={isSelected} type={type} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
