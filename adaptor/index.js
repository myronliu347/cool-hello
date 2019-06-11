import React from 'react';
import MainComponent from '../src';

export default {
  name: 'hello', // 组件名称
  editor: () => {
    return {
      props: [{
        name: 'color',
        type: 'enum',
        options: ['red', 'blue', 'yellow', 'orange', 'white', 'black'],
        default: 'red',
      }, {
        name: 'background',
        type: 'enum',
        options: ['transparent', 'red', 'blue', 'yellow', 'orange', 'white', 'black'],
        default: 'transparent',
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
  adaptor: ({ color, background, width, height, data, ...others }) => {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <MainComponent  {...others} color={color} background={background} width={width} height={height} children={data} />
    );
  },
};
