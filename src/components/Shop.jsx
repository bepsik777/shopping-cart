const Card = ({ item }) => {
  return (
      <div>
        <img src={item.url ? item.url : ""} alt="" className="w-60 h-72 border-black border-2"/>
        <p className="w-60 min-h-max border-black border-2 p-4">{item.description}</p>
        <div className="w-60 flex justify-between mt-3">
            <button>+</button>
            <input type="number" />
            <button>-</button>
        </div>
        <button className="w-full mt-2 bg-slate-400 px-2 py-1 hover:bg-slate-500 hover:text-white">Add to cart</button>
      </div>
  );
};

const Shop = () => {
    console.log('rendered')
  const fakeObjectAray = [
    {
      name: "objectOne",
      price: 32,
      description:
        "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
    },
    {
      name: "objectTwo",
      price: 32,
      description:
        "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
    },
    {
      name: "objectThree",
      price: 32,
      description:
        "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
    },
    {
      name: "objectFour",
      price: 32,
      description:
        "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
    },
    {
        name: "objectOne",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectTwo",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectThree",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectFour",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectOne",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectTwo",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectThree",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
      {
        name: "objectFour",
        price: 32,
        description:
          "Lorem ipsum ble ble ble blah b;ah lorem ipsum something something",
      },
  ];
  return (
    <main className="bg-red-400 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {fakeObjectAray.map((item) => {
        return <Card item={item} key={1} />;
      })}
    </main>
  );
};

export default Shop;
