import React from 'react';
import Moment from 'react-moment';

export default function Cart(props) {
  const { cart } = props;
  const totalCart = cart.reduce((total, product) => {
    return total + product.lessonCost * product.quantity;
  },0);

  console.log(cart);

  return (<>
    <h1>Your Cart</h1>
    {cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
    {cart.length > 0 && <table className="table table-cart table-striped">
      <thead>
        <tr>
          <th width="20%" className="th-product">Instructor</th>
          <th width="20%" className="th-product">Type</th>
          <th width="20%" className="th-product">Date</th>
          <th width="15%">Price</th>
          <th width="10%">Qty</th>
          <th width="15%">Total</th>
        </tr>
      </thead>
      <tbody>
      {cart.map(product => {
        return (<tr>
          <td>
            {/*<img width="40" height="40" alt="" src="/images/snowboard_icon_colorpow200-200.png" className="mr-1"/>*/}
            {product.instructorName}
          </td>
          <td>{product.lsnType}</td>
        <td><pre><Moment
          date={product.lessonDate}
          format="MM-DD"
        />  <Moment
          date={product.lsnTime}
          format="hh:mm a"
        /></pre></td>
          <td>{product.lessonCost}</td>
          <td>{product.quantity}</td>
          <td>
            <strong>$ {product.lessonCost * product.quantity}</strong>
          </td>
        </tr>)
      })}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="2"></th>
          <th className="cart-highlight">Total</th>
          <th className="cart-highlight">${totalCart}</th>
        </tr>
      </tfoot>
</table>}
</>)
}
