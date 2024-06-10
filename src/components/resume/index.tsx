import React, { useState } from 'react';
import { FootText, FootLink } from '../Footer/styles';
import resumePdf from '../../../static/resume.pdf';
import { IfOpenTrue, StyledLayout } from './styles';

export const ResumeHome = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    return(
        <StyledLayout>
            <IfOpenTrue open={!open}/>
            <IfOpenTrue open={open}>
                <div>
                    <FootText onClick={toggleOpen}>
                     <FootLink href={resumePdf}>&Resume;</FootLink>
                    </FootText>
                </div>
            </IfOpenTrue>
        </StyledLayout>
    );
};
