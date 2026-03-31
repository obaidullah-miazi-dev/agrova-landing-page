import React from 'react';

const Button = ({children,className}) => {
    return (
        <div className={`bg-primary text-black px-4 py-2 rounded-full ${className}`}>
            {children}
        </div>
    );
};

export default Button;