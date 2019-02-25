import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  // Form submit handle Add option, the one in parent class changes state, it's called within this one
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);
    //State that is specific to our form
    this.setState(() => ({ error: error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
