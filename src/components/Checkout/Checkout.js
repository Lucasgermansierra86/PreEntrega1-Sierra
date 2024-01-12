import { useState } from "react";
import { useCartContext } from "../../contexts/cartContext";

const Checkout = () => {
  const { finishOrder, removeAllFromCart } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(false);
  const completeOrder = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.email != data.confirmEmail) {
      return setError("El mail y la confirmacion deben ser iguales!");
    }

    setOrderId(
      await finishOrder({
        name: data.name,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
      })
    );

    removeAllFromCart();
  };
  return (
    <div className="d-flex justify-content-center">
      {orderId ? (
        <h2>your order:{orderId}</h2>
      ) : (
        <form onSubmit={completeOrder} className="w-50 mt-5">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email Confirmation
            </label>
            <input
              required
              name="confirmEmail"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              LastName
            </label>
            <input
              required
              name="lastName"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            {error && (
              <div className="alert alert-danger ml-2" role="alert">
                {error}
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
