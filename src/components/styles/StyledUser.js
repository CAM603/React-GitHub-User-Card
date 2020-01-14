import styled from 'styled-components';

export const StyledUser = styled.div`
    border-radius: 5px;
    box-shadow: 10px 10px 5px grey;
    border: solid 15px ${props => props.color};
    height: 400px;
    width: 300px;
    background: ${props => props.color};
    background-image: url(${props => props.pic});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;

    p:first-child {
        color: white;
        font-size: 2.5rem;
    }

    p {
        margin: 0;
        -webkit-text-stroke: 2px black;
        text-shadow:
        3px 3px 0 #000,
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
        font-weight: bold;
    }
`;