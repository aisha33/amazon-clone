import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_contaier">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/40/Gateway/Sunrise/CE/GW-DTH-Mobiles-latest-EN-1X._CB430761243_.jpg"
          className="home_img" alt=""
        />

        <div className="home_row">
          <Product
            id="12345"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51lrkZsL3RL._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            id="638390"
            title="Asus Laptop X509MA-BR239T Intel Celeron N4020 Processor 1.1"
            price={70.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41P4x6CKwRL._AA200_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="578900"
            title="BRV Moveis TV Table With Three Open Shelves And One Cabinet for 50 inch TV, Brown, Size 56 x 180 x 29.4 cm"
            price={50.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71uJd7tC8QL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="977390"
            title="Active Noise Cancelling Headphones, TaoTronics Bluetooth Headphones [2020 Version] Over Ear Wireless Headphones 40H Playtime Type-C Fast Charging Bluetooth 5.0 CVC 8.0 Mic for Online Class Black"
            price={70.99}
            image="https://images-na.ssl-images-amazon.com/images/I/618pTwfyXzL._AC_SL1300_.jpg"
            rating={3}
          />
          <Product
            id="888390"
            title="Apple Airpods Pro with Noise cancellation - White"
            price={666}
            image="https://images-na.ssl-images-amazon.com/images/I/51sxvQY4qhL._AC_SY450_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3333333"
            title="Nikai 32 Inch TV Smart HD LED Black - NTV3200SLED
            "
            price={5000}
            image="https://m.media-amazon.com/images/S/aplus-media/sota/6dea7fe1-1f51-40dc-af9e-de5c132cbd2d.__CR0,304,2516,1556_PT0_SX970_V1___.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
