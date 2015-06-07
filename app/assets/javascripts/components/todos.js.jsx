var Todos = React.createClass({

  getInitialState() {
    return { text : '' , items : [] }
  },

  handleSubmit(event) {
    event.preventDefault();

    var text = this.state.text;
    var newItems = this.state.items.concat(text);

    this.setState({text: '', items: newItems });

  },

  handleChange(event) {
    var text = event.target.value;
    this.setState({text: text});
  },

  handleDelete (itemToBeDeleted) {
    function removeFromArray(value) {
      return (value !== itemToBeDeleted);
    };
    var newItems = this.state.items.filter(removeFromArray);
    this.setState({ items: newItems });
  },

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <br/>
        <DisplayList
          handleDelete={this.handleDelete}
          items={this.state.items}
        />
      </div>
    );
  }

});


// Run the renderComponent after the DOM loads.
$(function() {
  React.render(
    <Todos />,
    document.getElementById('content')
  );
})
