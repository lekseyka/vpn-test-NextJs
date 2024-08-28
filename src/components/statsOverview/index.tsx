import React from 'react';
import styles from './style.module.scss';
import { Roboto } from "next/font/google";
import clsx from "clsx";
import StatsPanel from "@/components/statsPanel";

const roboto = Roboto({
    weight:['400'],
    subsets: ["latin"]
});

const StatsOverview = () => {
    return (
        <div className={styles.statsOverview}>
            <div className={styles.usersAmount}>
                <div className={styles.title}>Trusted by</div>
                <div className={clsx(roboto.className, styles.amount)}>50M+ Users</div>
            </div>

            <StatsPanel />

            <div className={styles.text}>VPN-your <span>ultimate</span> solution for a private and secure online experience!</div>
        </div>
    );
};

export default StatsOverview;