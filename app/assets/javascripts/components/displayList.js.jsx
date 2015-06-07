var DisplayList = React.createClass({
  displayItem (item) {
    return(
      /* Note: bind will change this value, which we dont' want, so pass null */
      <li key={item}>
        {item}
        <a href="#" onClick={this.props.handleDelete.bind(null, item)}>
          [x]
        </a>
      </li>
    )

  },

  render () {
    return (
      <p>
        { this.props.items.map(this.displayItem) }
      </p>
    )
  }

});
