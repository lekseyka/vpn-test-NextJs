import React from 'react';
import styles from './style.module.scss';
import {Location} from '@/assets/icons/stats/location';
import {Server} from '@/assets/icons/stats/server';

const StatsPanel = () => {
    return (
        <div className={styles.statsPanel}>
            <div className={styles.item}>
                {Location}
                <div>
                    <div className={styles.itemAmount}>50+</div>
                    <div className={styles.itemText}>Locations</div>
                </div>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.item}>
                {Server}
                <div>
                    <div className={styles.itemAmount}>1000+</div>
                    <div className={styles.itemText}>Servers</div>
                </div>

            </div>
        </div>
    );
};

export default StatsPanel;