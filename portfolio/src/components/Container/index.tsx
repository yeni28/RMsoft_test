import React, { ReactNode } from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

function Container({ children, className }: ContainerProps) {
    return (
        <div id="container" className={className}>
            {children}
        </div>
    );
}

Container.Body = Body;
Container.Navbar = Navbar;

export default Container;
