import {Text} from 'react-native';
import React from 'react';

const errorRender = (data) => {
  const results = [];
  for (const [key, value] of Object.entries(data)) {
    results.push(`${key}: ${value}`);
  }
  return results.map((item, index) => (
    <Text key={`error_${index}`}>
      {item}
    </Text>
  ));
};

const consoleFunc = (title, color, res) => {
  console.log(
    `%c ${title} - - ► `,
    `background: #333333;
         border: 1px solid ${color};
         color: ${color};
         font-weight: bold;
         padding: 4px;
         text-transform: capitalize;
         `,
    res,
  );
};

export default {
  errorRender,
  consoleFunc,
};
