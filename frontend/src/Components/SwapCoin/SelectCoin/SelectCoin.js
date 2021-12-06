import React, { useState } from 'react'
import styles from './selectCoin.module.css'

const SelectCoin = ({label, coins}) => {
    // Using a state here because options don't render images
    // Used also to persist the image of the selected coin 
    const [selectCoin, setselectCoin] = useState(coins[0]);

    console.log(selectCoin);

    const handleSelectedCoin = (e) => {
        const coin = JSON.parse(e.target.value); 
        setselectCoin(coin)
    }
    
    return (
        <div className={styles.root}>
            <label className={styles.label} htmlFor="coins">{label}</label>
            <div  className={styles.select__zone}>
                <div className={styles.select}>
                    <img src={`${selectCoin.image}`} alt={`${selectCoin.name}`} />
                    <select
                        className={styles.select__input}
                        name="coins"
                        id="coins" 
                        onChange={(e) => handleSelectedCoin(e)}
                    >
                        {coins.map((coin, idx) => {
                            return (
                                <option key={coin.id} value={JSON.stringify(coin)}>
                                    {coin.symbol}
                                </option>
                            )
                        })}
                    </select>
                </div>
                
                <input className={styles.input__number} type="number" />
            </div>
        </div>
    )
}

export default SelectCoin
