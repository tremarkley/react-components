class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onGroceryItemMouseEnter() {
    this.setState({
      hover: true
    })
  }

  onGroceryItemMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    var style = {
      fontWeight : this.state.hover ? 'bold' : 'normal'
    }
    
    return (
      <li style={style} onMouseEnter={this.onGroceryItemMouseEnter.bind(this)} onMouseLeave={this.onGroceryItemMouseLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <ul>
        {this.props.items.map((groceryItem) => <GroceryListItem item = {groceryItem} />)}
      </ul>
    );
  }
} 

const groceries = ['toilet paper', 'bananas', 'chicken', 'eggs', 'pepper'];
ReactDOM.render(<GroceryList items = {groceries}/>, document.getElementById('app'));
