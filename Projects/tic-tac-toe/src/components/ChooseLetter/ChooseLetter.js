import React from 'react';
import styles from './ChooseLetter.module.css';
import * as constants from '../../constants';

import { FaArrowLeft, FaTimes, FaRegCircle } from 'react-icons/fa';

const ChooseLetter = ({ isMultiPayer, setGameState, setPlayerOneLetter, setPlayerTwoLetter, setCurrentPlayer }) => {

    const selectLetter = (letter) => {
        if (letter === constants.LETTERS.X) {
            setPlayerOneLetter(constants.LETTERS.X);
            setPlayerTwoLetter(constants.LETTERS.O);

            setCurrentPlayer(constants.ROLE.PLAYER_ONE);
        } else {
            setPlayerOneLetter(constants.LETTERS.O);
            setPlayerTwoLetter(constants.LETTERS.X);

            let currentPlayer = isMultiPayer ? constants.ROLE.PLAYER_TWO : constants.ROLE.COMPUTER;
            setCurrentPlayer(currentPlayer);
        }

        setGameState(constants.GAME_STATE.ACTIVE);
    }; 

    return (
        <div className={styles.chooseLetterContainer}>
            <h1 style={{ margin: '10px', textAlign: 'center'}}>
                {isMultiPayer && (constants.ROLE.PLAYER_ONE + ": ")} 
                 Would you like to be X or O ?
            </h1>
            
            <div className={styles.gameIconContainer}>
                <button 
                    className={styles.gameIconButton} 
                    onClick={() => selectLetter(constants.LETTERS.X)}
                >
                    <FaTimes className={styles.gameIcon}/>
                </button>
                <button 
                    className={styles.gameIconButton}
                    onClick={() => selectLetter(constants.LETTERS.O)}
                    >
                    <FaRegCircle className={styles.gameIcon}/>
                </button>
            </div>

            <button className={styles.backButton} onClick={() => setGameState(constants.GAME_STATE.CHOOSE_TYPE)}>
                <FaArrowLeft className={styles.icon} />
                Back
            </button>
        </div>
    );
};

export default ChooseLetter;