import React from 'react';
type AlignItems =
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'baseline'
    | 'normal'
    | 'stretch';

type JustifyContent =
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start'
    | 'normal'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'left'
    | 'right';

type FlexDirection =
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse';
type FlexWrap = '-moz-initial' | 'inherit' | 'initial' | 'nowrap' | 'revert' | 'unset' | 'wrap' | 'wrap-reverse';
interface IProps {
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    direction?: FlexDirection;
    className?: string;
    flexWrap?: FlexWrap;
    onClick?(): void;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
}

const Flex: React.FC<IProps> = ({
    children,
    alignItems,
    justifyContent,
    direction,
    className,
    flexWrap,
    onClick,
    margin,
    padding,
    height,
    width,
}) => {
    return (
        <div
            className={className}
            aria-hidden="true"
            style={{
                display: 'flex',
                flexWrap: flexWrap || 'nowrap',
                flexDirection: direction || 'row',
                position: 'relative',
                width: width || 'fit-content',
                height: height || 'fit-content',
                alignItems: alignItems || 'initial',
                justifyContent: justifyContent || 'initial',
                margin: margin || '0px',
                padding: padding || '0px',
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Flex;
