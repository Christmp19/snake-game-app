import React from 'react';
import { View } from 'react-native';

const Snake = ({ snakeDots }) => {
    return (
        <>
            {snakeDots.map((dot, index) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                };
                return <View key={index} className="bg-green-500 absolute w-4 h-4" style={style} />;
            })}
        </>
    );
};

export default Snake;
