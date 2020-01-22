import styled from 'styled-components';

export const StyledUser = styled.div`
    border-radius: 5px;
    // box-shadow: 10px 10px 5px grey;
    border: solid 15px ${props => props.color};
    height: 420px;
    width: 350px;
    background: ${props => props.color};
    background-image: url(${props => props.pic});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 10px 0 30px 0;

    p:first-child {
        color: white;
        font-size: 2.5rem;
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

    p:last-child {
        color: black;
        font-size: 3rem;
        margin: 0;
        -webkit-text-stroke: 1px white;
        text-shadow:
        3px 3px 0 #000,
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
        font-weight: bold;
    }
`;