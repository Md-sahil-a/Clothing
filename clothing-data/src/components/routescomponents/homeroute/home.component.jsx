import MainCont  from "../../mainCategory/mainCategory.component";
import { Outlet } from "react-router-dom";

const Home = ()=>{

    const productData = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://user-images.githubusercontent.com/77974484/173227879-69fb96b1-5947-4423-867c-f77b87439563.jpeg"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]
      return (
        <>
        <MainCont productData={productData}/>
        <Outlet/>
        </>
        
      );


}

export default Home