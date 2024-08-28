'use client';

import React from 'react';
import styles from './style.module.scss';
import CustomButton from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className={styles.header}>
            <Image
                onClick={handleLogoClick}
                loading={"eager"}
                src={'/mainLogo/logo.png'}
                alt={'Логотип компании'}
                width={67}
                height={30}
            />
            <Link href={'/#chooseYourName'}>
                <CustomButton buttonType={'blueButton'}>
                        Get VPN
                </CustomButton>
            </Link>
        </header>
    );
};

export default Header;