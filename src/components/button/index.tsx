import React from 'react';
import styles from './style.module.scss'
import clsx from "clsx";

type ButtonPropsType = {
    children: string,
    buttonType: 'blueButton' | 'orangeButton',
    className?: string,
}

const CustomButton = ({children, buttonType, className, ...props}: ButtonPropsType) => {
    return (
        <button {...props} className={clsx(styles.button, styles[buttonType], className)}>
            {children}
        </button>
    );
};

export default CustomButton;