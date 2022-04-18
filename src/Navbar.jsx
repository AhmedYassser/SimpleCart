import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { useGlobalContext } from './Context';


function Navbar() {

    const {amount} = useGlobalContext();

    return <div className="Nav-container">
        <section className="Navbar">
            <div>
                <h2>Cart</h2>
            </div>
            <div className="Icon-Section">
                <div className="Nav-Icon">
                    <BiShoppingBag />
                </div>
                <p className="Amount-counter">{amount}</p>
            </div>
        </section>
    </div>;
}

export default Navbar;
