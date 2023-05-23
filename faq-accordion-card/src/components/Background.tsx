import React from 'react';

interface BackgroundProps {
    bgClass: string;
    children?: React.ReactNode;
}




const Background: React.FC<BackgroundProps> = ({ bgClass, children }) => {
    return (
        <div className={bgClass}>
            {children}
        </div>
    )
};

export default Background;
