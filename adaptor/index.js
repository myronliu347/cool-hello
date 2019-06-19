import React from 'react';
import MainComponent from '../src';

export default {
  name: 'hello', // 组件名称
  editor: () => {
    return {
      props: [{
        name: 'level',
        type: 'enum',
        options: ['primary', 'secondary', 'success'],
        default: 'primary'
      }, {
        name: 'round',
        type: 'bool',
        default: false,
      }, {
        name: 'width',
        type: 'number',
        default: 200
      }, {
        name: 'height',
        type: 'number',
        default: 40
      }],
      data: {
        default: 'hello world',
      }
    };
  },
  adaptor: ({ level, width, height, data, ...others }) => {
    const background = {
      primary: '#2196f3',
      secondary: '#ff4081',
      success: '#4caf50'
    }[level];
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <MainComponent  {...others} color="#fff" background={background} width={width} height={height} children={data} />
    );
  },
};
