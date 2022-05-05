import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px 42px 23px;
  margin-right: 16px;

  ${(props) =>
    props.type === "total"
      ? css`
          background-color: ${({ theme }) => theme.colors.secondary};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.shape};
        `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  ${(props) =>
    props.type === "total"
      ? css`
          color: ${({ theme }) => theme.colors.shape};
        `
      : css`
          color: ${({ theme }) => theme.colors.text_dark};
        `}
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${(props) => {
    switch (props.type) {
      case "up":
        return css`
          color: ${({ theme }) => theme.colors.success};
        `;
      case "down":
        return css`
          color: ${({ theme }) => theme.colors.attention};
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colors.shape};
        `;
    }
  }}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
  ${(props) =>
    props.type === "total"
      ? css`
          color: ${({ theme }) => theme.colors.shape};
        `
      : css`
          color: ${({ theme }) => theme.colors.text_dark};
        `}
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  ${(props) =>
    props.type === "total"
      ? css`
          color: ${({ theme }) => theme.colors.shape};
        `
      : css`
          color: ${({ theme }) => theme.colors.text_dark};
        `}
`;
