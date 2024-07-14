import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import Snake from './Snake';
import Food from './Food';

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
        let newFood = [...food];
        if (head[0] === food[0] && head[1] === food[1]) {
            newFood = [Math.floor(Math.random() * 50) * 2, Math.floor(Math.random() * 50) * 2];
            enlargeSnake();
            setFood(newFood);
        }
    };

    const enlargeSnake = () => {
        let newSnake = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
    };

    const endGame = () => {
        setIsGameRunning(false);
        alert('Game Over!');
        setSnakeDots(initialSnake);
        setFood(initialFood);
        setDirection('RIGHT');
    };

    const onPlayPause = () => {
        setIsGameRunning(!isGameRunning);
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

    useEffect(() => {
        const changeDirection = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    setDirection('UP');
                    break;
                case 'ArrowDown':
                    setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    setDirection('RIGHT');
                    break;
            }
        };

        document.addEventListener('keydown', changeDirection);

        return () => document.removeEventListener('keydown', changeDirection);
    }, []);

    return (
        <View className="bg-green-100 flex-1 items-center justify-center relative">
            <Snake snakeDots={snakeDots} />
            <Food position={food} />
            <View className="absolute top-4 left-4 z-10">
                <TouchableOpacity onPress={onPlayPause} className="bg-white p-2 rounded-full">
                    <Text className="text-2xl">{isGameRunning ? '⏸' : '▶️'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Game;
