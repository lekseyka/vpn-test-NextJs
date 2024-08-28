import React from 'react';
import styles from './modalEmail.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "@/components/button";
import {FormLocker} from "@/assets/icons/formLocker/formLocker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
    example: string
    exampleRequired: string
}

interface ModalEmailProps  {
    username: string,
}

const schema = yup
    .object({
        email: yup.string().email("Invalid email address").required("Email is required"),
    })
    .required();

const ModalEmail = ({username}: ModalEmailProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({
            resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        reset();
    };

    return (
        <>
            <div className={styles.modalTitle}>Your name</div>
            <div className={styles.username}>{username ? username : 'User is not selected!'}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={styles.input}
                    type="email"
                    {...register('email')}
                    placeholder={'Enter your email'}
                />
                <div>{errors.email?.message}</div>
                <div className={styles.supportingText}>
                    {FormLocker}
                    <span>Your information is 100% secure. We don’t share your personal information.</span>
                </div>
                <CustomButton type={'submit'} className={styles.selectButton} buttonType={'orangeButton'}>
                    Continue
                </CustomButton>
            </form>
        </>
    );
};

export default ModalEmail;