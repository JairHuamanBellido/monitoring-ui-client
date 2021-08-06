import React from 'react';

interface IProps {
    text: string;
    background?: string;
    onClick?(): void;
    width?: string;
    margin?: string;
    padding?: string;
    className?:string;
}

const Button: React.FC<IProps> = ({
    children,
    background,
    width,
    text,
    onClick,
    margin,
    padding,
    className
}) => {
    return (
        <button
            style={{
                backgroundColor: background,
                width: width || 'fit-content',
                padding: padding || ' 4px',
                margin: margin || '0px',
            }}
            className={className}
            onClick={onClick}
        >
            {text}
            {children && {children}}
        </button>
    );
};

export default Button;
