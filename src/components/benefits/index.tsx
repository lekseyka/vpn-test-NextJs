import React from 'react';
import styles from './style.module.scss';
import {Block} from '@/assets/icons/benefits/block';
import {Speed} from '@/assets/icons/benefits/speed';
import {Content} from '@/assets/icons/benefits/content';
import {Location} from '@/assets/icons/benefits/location';

const Benefits = () => {

    const BenefitsInfo = [
        {title: 'Unlimited', subTitle: 'Access to content', text: 'Enjoy unlimited bandwidth to stay connected to the world\'s best shows, apps, and games!', image: Content},
        {title: 'Flashing', subTitle: 'Connecting speed', text: 'VPN Lumos offers unlimited bandwidth for faster loading and no buffering!', image: Speed},
        {title: 'Hide', subTitle: 'Your location', text: 'Get your own unique IP for added security and access to restricted sites, apps, and services!', image: Location},
        {title: 'Bypass', subTitle: 'Blocked sites', text: 'Access any website safely and anonymously!', image: Block},
    ]

    return (
        <>
            <div className={styles.benefits}>
                {BenefitsInfo.map((item, index) =>
                    <div className={styles.benefit} key={index}>
                        {item.image}
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.subTitle}>{item.subTitle}</div>
                        <div className={styles.text}>{item.text}</div>
                    </div>
                )}
            </div>
            <div className={styles.benefitsTrustText}>Millions of people trust us!</div>
        </>

    );
};

export default Benefits;