import { FootText, Footer, FootLink } from './styles';
import React, { useEffect, useRef } from 'react';
import { ResumeHome } from '../resume/index';

export const Foots = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const iosTopBarHandler = footerRef.current.getBoundingClientRect().bottom
        >= window.innerHeight;
        const handleScrollios = () => {
            footerRef.current.style.marginBottom = '20px';
            const currentView = footerRef.current.getBoundingClientRect();
            const isSeen = currentView.bottom <= window.innerHeight;
            if (!isSeen){
                footerRef.current.style.marginBottom = '120px';
            }
            document.body.scrollTop = 0;
        };
        if (iosTopBarHandler){
            window.addEventListener('scroll', handleScrollios);
        }
        handleScrollios();
        return function cleanup(){
            if (iosTopBarHandler){
                window.removeEventListener('scroll', handleScrollios);
            }
        };
    });
    return(
        <Footer>
            <FootText ref={footerRef}>
                <FootLink href="www.linkedin.com/in/alex-sorichetti">LinkedIn</FootLink>
                -
                <ResumeHome></ResumeHome>
                -
                <FootLink href="mailto:alex@sorichetti.org">eMail</FootLink>
            </FootText>
        </Footer>
    );
};