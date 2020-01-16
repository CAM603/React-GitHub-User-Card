import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: ${props => props.fight ? '5px' : '3px'};
    border-radius: .5rem;
    font-size: ${props => props.fight ? '1rem' : '2rem'};
`;