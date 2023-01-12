const Order = ({ order }) => {
  return (
    <div className='order-container'>
      <table className='products-table'>
        <thead>
          <tr>
            <th>PROD</th>
            <th>CTA</th>
            <th>PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {
            order.products.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <div className='order-details'>
        <div>
          <span>{order.createdAt}</span>
          <strong>{order._id}</strong>
        </div>

        <div>
          <span><strong>Total:</strong> ${order.amount}</span>
          <span
            className={order.status === "Delivered" ? "green" : "yellow"}
          ><strong>{order.status}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default Order;