import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TransactionTypeProps } from ".";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)<
  Omit<TransactionTypeProps, "title">
>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
  ${({ type, isSelected, theme }) =>
    isSelected &&
    (type === "up"
      ? css`
          background-color: ${theme.colors.success_light};
          border: none;
        `
      : css`
          background-color: ${theme.colors.attention_light};
          border: none;
        `)}
`;

export const Icon = styled(Feather)<TransactionTypeProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ type, theme }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;
