import React from 'react';
import styles from './modalWrapper.module.scss'
import clsx from "clsx";
import {CloseIcon} from "@/assets/icons/UI/closeIcon";

interface ModalWrapperProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const ModalWrapper = ({active, setActive, children}: ModalWrapperProps) => {
    const closeModal = () => {
        document.body.style.overflow = "";
        setActive(false)
    }

    return (
        <div className={clsx(styles.modalBackground, active && styles.active)} onClick={closeModal}>
            <div className={styles.modalWrapper} onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} className={styles.closeModal}>
                    {CloseIcon}
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;