import React, { useState, useEffect } from 'react'
import plusIcon from '../assets/icon/plusCircle.svg'
import dashIcon from '../assets/icon/dashCircle.svg'


const ItemCount = ({stock, initial}) => {
    const stockInitial = stock;
    const [count, setCount] = useState(initial);
    
    return (
      <div className="container">
        <div className="row">texto1</div>
        <div className="row align-items-center border border-1 p-2">
          <div className="col-3">
            <button type="button" className="border-0" onClick={() => setCount(count > initial ? count - 1 : initial)}>
              <img src={dashIcon} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="col-6">{count}</div>
          <div className="col-3">
            <button type="button" className="border-0" onClick={() => setCount( stockInitial > count ? count + 1 : stockInitial)}>
              <img src={plusIcon} alt="" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="row justify-content-center">texto3</div>
      </div>
    );
}

export default ItemCount