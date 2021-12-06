import React, { useState, useEffect } from 'react';
import SelectCoin from './SelectCoin/SelectCoin';
import styles from './swapForm.module.css'
import coinsData from './Coins';

const SwapCoin = () => {
    const balance = 40;
    // coins to be swapped
    const [coins, setCoins] = useState(coinsData);
    

    
    return (
        <form className={styles.form}>
            <div className={styles.form__header}>
                <div className={styles.form__title}>Swap</div>
                <div className={styles.form__balance}> <small>Balance:</small> {balance} ETH</div>
            </div>
            <SelectCoin coins={coins} label={"From"} />
            <div className={styles.form__exchangeIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
            </div>
            <SelectCoin coins={coins} label={"To"} />
            <div className={styles.fees}>
                <div className={styles.form__transfer}>
                    <div className={styles.form__fees}>
                    <div className={styles.fees__text}>Transfer Fees</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className={styles.balance}> 0.25%</div>
                </div>
                <div className={styles.form__transfer}>
                    <div className={styles.form__fees}>
                        <div className={styles.fees__text}>Gas Fees</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className={styles.balance}> 0.25%</div>
                </div>
            </div>

            <div className={styles.form__submit}>
                <button type="submit">Swap Now</button>
            </div>
            
        </form>
    )
}

export default SwapCoin;
