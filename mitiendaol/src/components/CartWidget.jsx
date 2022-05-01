import React from 'react'
import Cart from '../assets/img/shoppingcart.png'

const styles = {
    filter: 'Invert(100)'
};
const CartWidget = () => {
  return (
    <div className='d-flex justify-content-end p-2'>
      <img src={Cart} alt="" width="30" height="30" style={styles} />
    </div>
  );
}

export default CartWidget