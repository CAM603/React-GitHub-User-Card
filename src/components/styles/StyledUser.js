import styled from 'styled-components';

export const StyledUser = styled.div`
    border-radius: 5px;
    box-shadow: 10px 10px 5px grey;
    border: solid black 10px;
    height: 600px;
    width: 300px;
    background: blue;
    background-image: url(${props => props.pic});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;

    p:first-child {
        background: white;
    }

    p {
        margin: 0;
    }
`;