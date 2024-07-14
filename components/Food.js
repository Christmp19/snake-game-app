import React from 'react';
import { Text } from 'react-native';

const Food = ({ position }) => {
    const style = {
        left: `${position[0]}%`,
        top: `${position[1]}%`,
    };

    return <Text style={style} className="absolute text-xl">🍎</Text>;
};

export default Food;
