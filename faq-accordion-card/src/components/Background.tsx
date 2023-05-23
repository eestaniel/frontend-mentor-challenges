import React from 'react';

interface BackgroundProps {
    bgClass: string;
}

const Background: React.FC<BackgroundProps> = ({ bgClass, children }) => {
    return (
        <div className={bgClass}>
            {children}
        </div>
    )
};

export default Background;
