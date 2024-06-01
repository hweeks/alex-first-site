import styled from 'styled-components';

export const Footer = styled.footer`
    width:100vw;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: center;
`;

export const FootText = styled.p`
    text-align: center;
    font-size: 3rem;
    -webkit-text-fill-color: #F5D547;
    `;

export const FootLink = styled.a`
    font-size: 3rem;
    -webkit-text-fill-color: #F5D547;
    @media (max-width: 768px){
        font-size: 1rem;
    }
    `;
    