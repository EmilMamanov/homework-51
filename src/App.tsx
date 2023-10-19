import { useState } from 'react';
import './App.css';
import LotteryNumbers from './LotteryNumbers';


function App() {
    const [currentNumbers, setCurrentNumbers] = useState([5, 11, 16, 23, 32]);

    const generateNewNumbers = () => {
        const newNumbers: number[] = [];
        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }
        newNumbers.sort((a, b) => a - b); // Сортировка по возрастанию
        setCurrentNumbers(newNumbers);
    };

    return (
        <div className="App">
            <h1>Lottery Numbers</h1>
            <LotteryNumbers numbers={currentNumbers} />
            <button onClick={generateNewNumbers}>New Numbers</button>
        </div>
    );
}

export default App;
