import { Order } from "../";

const OrdersContainer = ({ orders }) => {
  return (
    <section className='orders-section section-p1'>
        <div className="orders-data">
            <h2>Tus Ordenes</h2>
            <div className="orders-container">
                {
                    orders && orders.length !== 0
                        ?
                        orders.map((order) => (
                            <Order order={order} />
                        ))
                        : <span>Aún no tienes ordenes registradas.</span>
                }
            </div>
        </div>
    </section>
  )
}

export default OrdersContainer