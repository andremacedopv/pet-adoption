import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 45%;
  background-color: #e6e7e7;
  align-items: center;
  justify-content: center;
  height: 128px;
  width: 128px;
  flexDirection: column;
  box-shadow: 0px 2px 2px #434343;

  ${props => (props.size === 'large') &&
        `
        width: 100%;
        `
    }
`

export const TextImage = styled.Text`
  font-size: 14px;
  color: #757575;
`
