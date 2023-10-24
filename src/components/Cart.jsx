import { useOutletContext } from "react-router-dom";

const TableRow = ({ el, handleRemove }) => {
  return (
    <tr className="">
      <td className="px-2 py-1 border-2">{el.title}</td>
      <td className="px-2 py-1 border-2 text-right">{el.count}</td>
      <td className="px-2 py-1 border-2 text-right">{el.price * el.count}</td>
      <td className="px-2 py-1">
        <button className="border-sky-600 bg-sky-400 border-2 p-1 rounded-md" data-elementid={el.id} onClick={(e) => handleRemove(e)}>
          remove
        </button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const [, , , cart, setCart] = useOutletContext();

  const createfinalArray = (array) => {
    let counterArray = [];
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
      console.log(finalArray, "final array");
      // array[i].count = 1;
      if (counterArray.indexOf(array[i].id) === -1) {
        counterArray.push(array[i].id);
        // finalArray.push(array[i]);
        finalArray.push({
          title: array[i].title,
          price: array[i].price,
          count: 1,
          id: array[i].id,
        });
      } else {
        const found = finalArray.find((el) => el.id === array[i].id);
        console.log(found.count);
        found.count += 1;
        console.log(found.count);
      }
    }
    return finalArray;
  };

  const removeFromCart = (e) => {
    const elementId = Number(e.target.getAttribute('data-elementid'))
    const newCart = cart.filter(el => el.id !== elementId)
    setCart(newCart)
  }

  if (cart.length !== 0) {
    const finalArray = createfinalArray(cart);
    console.log(finalArray, "final array");
    const total = finalArray
      .map((el) => el.price * el.count)
      .reduce((acc, cv) => acc + cv);

    return (
      <main className="h-full  grow flex flex-col justify-center items-center">
        <table className="w-[80%] p-10">
          <colgroup>
            <col className="border-2" />
            <col className="border-2" />
            <col className="border-2" />
            <col />
          </colgroup>
          <thead>
            <tr className="p-2">
              <th className="px-2 py-1 border-2 text-left">Name</th>
              <th className="px-2 py-1 border-2 text-right">Amount</th>
              <th className="px-2 py-1 border-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {finalArray.map((el) => (
              <TableRow el={el} key={el.title} handleRemove={removeFromCart}></TableRow>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 w-1/3 ml-24 mt-10 justify-end items-center pr-2 py-2">
          <p>Total: {total}</p>
          <button className="bg-violet-600 text-white p-1">Checkout</button>
        </div>
      </main>
    );
  }
  return (
    <div className="h-full grow flex flex-col justify-center items-center">
      No item in cart yet
    </div>
  );
};

export default Cart;
