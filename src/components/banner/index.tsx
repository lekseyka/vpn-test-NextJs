import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import CustomButton from "@/components/button";
import Link from "next/link";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerTitle}>Access <span>everything securely</span> with <br />VPN</div>
            <Image
                className={styles.bannerImage}
                loading={"eager"}
                src={'/banner/banner.png'}
                alt={'Баннер'}
                layout="responsive"
                width={540}
                height={210}
            />
            <Link href={'/#chooseYourName'}>
                <CustomButton buttonType={'orangeButton'}>
                    Get VPN
                </CustomButton>
            </Link>
        </div>
    );
};

export default Banner;