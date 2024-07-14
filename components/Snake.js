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
                return <View key={index} className="bg-green-600 absolute w-5 h-5" style={style} />;
            })}
        </>
    );
};

export default Snake;
