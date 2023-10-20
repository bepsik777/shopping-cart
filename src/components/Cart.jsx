import { fakeAddedarray } from "./fakeData";

const TableRow = ({el}) => {
  return (
    // <div className="w-full grid grid-cols-4 py-2 place-items-center">
    //     <p className="py-2">{el.name}</p>
    //     <p className="py-2">{el.count}</p>
    //     <p className="py-2">{el.price * el.count}</p>
    //     <button>remove</button>
    // </div>
    <tr className="">
        <td className="px-2 py-1 border-2">{el.name}</td>
        <td className="px-2 py-1 border-2 text-right">{el.count}</td>
        <td className="px-2 py-1 border-2 text-right">{el.price * el.count}</td>
        <td className="px-2 py-1"><button className="border-sky-600 bg-sky-400 border-2 p-1 rounded-md">remove</button></td>
    </tr>
  )
}

const Cart = () => {
  console.log(fakeAddedarray);
  const createfinalArray = (array) => {
    let counterArray = [];
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
      array[i].count = 1;
      if (counterArray.indexOf(array[i].name) === -1) {
        counterArray.push(array[i].name);
        finalArray.push(array[i]);
      } else {
        const found = finalArray.find((el) => el.name === array[i].name);
        found.count += 1;
      }
    }
    return finalArray;
  };

  const finalArray = createfinalArray(fakeAddedarray);
  const total = finalArray.reduce((cv, acc) => {
    console.log(cv, acc);
    return (cv.price * cv.count) + (acc.price * acc.count)
  })
  console.log(total, 'total')
  
  return (
    <main className="h-full bg-red-400 grow flex flex-col justify-center items-center">
      <table className="w-[80%] p-10">
        <colgroup>
          <col className="border-2"/>
          <col className="border-2"/>
          <col className="border-2"/>
          <col />
        </colgroup>
        <tr className="p-2">
          <th className="px-2 py-1 border-2 text-left">Name</th>
          <th className="px-2 py-1 border-2 text-right">Amount</th>
          <th className="px-2 py-1 border-2 text-right">Price</th>
        </tr>
        {finalArray.map(el => <TableRow el={el} key={el.name}></TableRow>)}
      </table>
    </main>
  );
};



export default Cart;
