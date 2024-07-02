import styled from 'styled-components';

export const IfOpenTrue = styled.div<{open: boolean}>`
    display: ${(props) => (props.open ? 'block':'none')}
`;

export const StyledLayout = styled.span`
    display: inline-block;
    text-decoration: underline;
    text-decoration: overline;
    cursor: pointer
`;
