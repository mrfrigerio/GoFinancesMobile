import { useCallback, useState } from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Header, Title, Form, TransactionTypes } from "./styles";

export const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState<
    "up" | "down" | undefined
  >();

  const handleSelectTransaction = useCallback((transaction: "up" | "down") => {
    setTransactionType(transaction);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
        <TransactionTypes>
          <TransactionTypeButton
            type="up"
            title="Income"
            isSelected={transactionType === "up"}
            onPress={() => handleSelectTransaction("up")}
          />
          <TransactionTypeButton
            type="down"
            title="Outcome"
            isSelected={transactionType === "down"}
            onPress={() => handleSelectTransaction("down")}
          />
        </TransactionTypes>
        <Button label="Enviar" />
      </Form>
    </Container>
  );
};
