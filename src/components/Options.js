import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <h3>Options</h3>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => {
        return (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </div>
  );
};

export default Options;
