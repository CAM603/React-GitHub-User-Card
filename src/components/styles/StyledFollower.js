import styled from 'styled-components';

export const StyledFollower = styled.div`
    background-image: url(${props => props.pic});
    background-size: contain;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    margin: 2px;
    
    h5 {
        padding-left: 2px;
        font-weight: bold;
        color: white;
        margin: 0;
        -webkit-text-stroke: .5px black;
        text-shadow:
        2px 2px 0 #000,
        -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    }

    &:hover {
        filter: brightness(1.50);
    }
`;