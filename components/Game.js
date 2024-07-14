import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import Snake from './Snake';
import Food from './Food';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const initialSnake = [
    [0, 0],
    [2, 0],
];
const initialFood = [6, 6];

const Game = () => {
    const [snakeDots, setSnakeDots] = useState(initialSnake);
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useState('RIGHT');
    const [isGameRunning, setIsGameRunning] = useState(false);
    const [score, setScore] = useState(0);

    const moveSnake = () => {
        const dots = [...snakeDots];
        const head = dots[dots.length - 1];

        switch (direction) {
            case 'UP':
                head[1] -= 2;
                break;
            case 'DOWN':
                head[1] += 2;
                break;
            case 'LEFT':
                head[0] -= 2;
                break;
            case 'RIGHT':
                head[0] += 2;
                break;
        }

        dots.push([...head]);
        dots.shift();
        setSnakeDots(dots);
    };

    const checkIfOutOfBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            endGame();
        }
    };

    const checkIfCollapsed = () => {
        let snake = [...snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                endGame();
            }
        });
    };

    const checkIfEat = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] === food[0] && head[1] === food[1]) {
            const newFood = [Math.floor(Math.random() * 50) * 2, Math.floor(Math.random() * 50) * 2];
            enlargeSnake();
            setFood(newFood);
            setScore(score + 10); // Increase score by 10
        }
    };

    const enlargeSnake = () => {
        let newSnake = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
    };

    const endGame = () => {
        setIsGameRunning(false);
        alert(`Game Over! Your score was ${score}`);
        resetGame(); // Reset game after game over
    };

    const onPlayPause = () => {
        setIsGameRunning(!isGameRunning);
    };

    const resetGame = () => {
        setSnakeDots(initialSnake);
        setFood(initialFood);
        setDirection('RIGHT');
        setScore(0); // Reset score
        setIsGameRunning(false); // Stop the game
    };

    useEffect(() => {
        if (isGameRunning) {
            const interval = setInterval(() => {
                moveSnake();
                checkIfOutOfBorders();
                checkIfCollapsed();
                checkIfEat();
            }, 100);

            return () => clearInterval(interval);
        }
    }, [snakeDots, isGameRunning]);

    const onGestureEvent = (event) => {
        const { translationX, translationY } = event.nativeEvent;
        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0) {
                setDirection('RIGHT');
            } else {
                setDirection('LEFT');
            }
        } else {
            if (translationY > 0) {
                setDirection('DOWN');
            } else {
                setDirection('UP');
            }
        }
    };

    return (
        <View className='flex-1 justify-center items-center px-4'>
            <View className='bg-green-300 p-4 flex flex-row justify-between items-center w-full rounded-[12px] mb-8'>
                <TouchableOpacity onPress={resetGame}>
                    <Text className="text-3xl ">🔄️</Text>
                </TouchableOpacity>
                <View>
                    <Text className="text-[24px]">🍎  {score}</Text>
                </View>
                <TouchableOpacity onPress={onPlayPause}>
                    <Text className="text-3xl ">{isGameRunning ? '⏸' : '▶️'}</Text>
                </TouchableOpacity>     
            </View>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <View className='w-full h-[85%] bg-green-300 rounded-[12px]'>
                    <Snake snakeDots={snakeDots} />
                    <Food position={food} />
                </View>
            </PanGestureHandler>
        </View>
    );
};

export default Game;