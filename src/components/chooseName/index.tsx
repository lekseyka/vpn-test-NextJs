'use client';
import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {Unchecked} from '@/assets/icons/chooseYourName/unchecked';
import {Checked} from '@/assets/icons/chooseYourName/checked';
import CustomButton from "@/components/button";
import ModalWrapper from "@/components/modal/ModalWrapper";
import ModalEmail from "@/components/modal/ModalEmail";

const ChooseName = () => {
    const [selectedName, SetSelectedName] = useState<number>(null);
    const [names, setNames] = useState<string[]>([]);
    const [modalForm, setModalForm] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=10');
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const data = await response.json();
                const namesList = data.results.map((user: any) => `${user.name.first} ${user.name.last}`);
                setNames(namesList);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const showForm = () => {
        document.body.style.overflow = "hidden";
        setModalForm(true)
    }

    return (
        <div className={styles.chooseYourName} id={'chooseYourName'}>
            <div className={styles.title}>Choose <span>your Name</span></div>
            <div className={styles.selectWrapper}>
                {loading
                    ?<div>Loading...</div>
                    :error
                        ?<div>{error}</div>
                        :   names.map((name, index) => (
                            <div key={index} onClick={() => SetSelectedName(index)} className={styles.select}>
                                <div>{selectedName === index ? Checked : Unchecked}</div>
                                <div key={index}>{name}</div>
                            </div>
                        ))}
                <CustomButton onClick={showForm} className={styles.selectButton} buttonType={'orangeButton'}>
                    Get VPN
                </CustomButton>
                <ModalWrapper active={modalForm} setActive={setModalForm}>
                    <ModalEmail username={names[selectedName]}/>
                </ModalWrapper>
            </div>
        </div>
    )
        ;
};

export default ChooseName;