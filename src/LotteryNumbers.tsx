import React from 'react';
import Ball from './Ball';

interface LotteryNumbersProps {
    numbers: number[];
}

const LotteryNumbers: React.FC<LotteryNumbersProps> = ({ numbers }) => {
    return (
        <div className="lottery-numbers">
            {numbers.map((number, index) => (
                <Ball key={index} number={number} />
            ))}
        </div>
    );
};

export default LotteryNumbers;
