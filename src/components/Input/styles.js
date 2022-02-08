import styled from "styled-components/native";

export const Container = styled.View`
    border-bottom-color: #DFE0E1;
    border-bottom-width: 1px;
    width: 100%;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "#CBCCCD"
  })`
    width: 100%;
    color: #575756;
    font-size: 20px;
`;