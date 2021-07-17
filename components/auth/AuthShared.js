import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    background-color: ${props => props.theme.transparent};
    padding: 8px 10px;
    margin-bottom: 6px;
    border-radius: 4px;
    color: ${props => props.theme.fontColor};
`;