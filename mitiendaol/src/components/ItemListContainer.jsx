import React from 'react'

const styles = {
    width: '18rem'
}

const ItemListContainer = (props) => {
  return (
    <div class="card" style={styles}>
      <div class="card-body">{props.greeting}</div>
    </div>
  );
}

export default ItemListContainer