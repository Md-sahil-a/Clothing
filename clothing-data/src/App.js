
function App() {
  const productData = [
    {
      id: "1",
      title: "Hats",
    },
    {
      id: "2",
      title: "Shoes",
    },
    {
      id: "3",
      title: "Jackets",
    },
    {
      id: "4",
      title: "Mens",
    },
    {
      id: "5",
      title: "Womens",
    },

  ]
  return (
    <div>
    {
      productData.map(({title}) =>{
        return <div>
        <div>
        <h1>
        {title}
        </h1>
        <p>
        Shop Now
        </p>
        </div>
        
        </div>
      })
    }
     
    </div>
  );
}

export default App;
