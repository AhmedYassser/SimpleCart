import React from 'react';
import Cartitem from './Cartitem';
import { useGlobalContext } from './Context'


function Cartcontainer() {

      const {Cart , total , clearCart} = useGlobalContext();

      if (Cart.length === 0) {
        return (
          <div className='cart'>
            <div>
              <h3>your bag</h3>
              <h4 className='empty-cart'>is currently empty</h4>
            </div>
          </div>
        )
      }

    return (
    <section className='container-body'>
        <header>
            <h2>YOUR BAG</h2>
        </header>
        <article>
        {Cart.map((item) => {
          return <Cartitem key={item.id} {...item} />
        })}
        </article>
        <footer>
            <hr />
            <div className="Footer-container">
                <h4>Total</h4>
                <h4>$ {total} </h4>
            </div>
            <div className='center-BTN'>
                <button className='Clear-BTN' onClick={clearCart}>
                    clear cart
                </button>
            </div>
        </footer>
    </section> 
    )
}

export default Cartcontainer;
