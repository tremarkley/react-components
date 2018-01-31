var GroceryList = function(props) {
  const groceries = props.items;
  const groceryListItems = groceries.map((grocery) =>
    <GroceryListItem item = {grocery} />
  );
  return( 
    <ul>
      {props.items.map((groceryItem) => <GroceryListItem item = {groceryItem} />)}
    </ul>
  );
};

var GroceryListItem = (props) => (
  <li>{props.item}</li>
);

const groceries = ['toilet paper', 'bananas', 'chicken', 'eggs', 'pepper'];
ReactDOM.render(<GroceryList items = {groceries}/>, document.getElementById('app'));
