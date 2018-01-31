class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
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
