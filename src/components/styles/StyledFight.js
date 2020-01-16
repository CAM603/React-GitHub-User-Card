import styled from 'styled-components';

export const StyledFight = styled.div`
    padding: 10px;

    table {
        background: white;

        th {
            background-color: black;
            color: white;
            padding: 5px;
            
            tr {
                color: blue;
                text-align: left;
                padding: 5px;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2;
        }
        }
`;