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

        <div className="home_row ">
          <Product
            id="12345"
            title="Apple iPhone 11 Pro Max (512GB) - Space Grey"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41+UKJYSieL._AC_SY580_.jpg"
            rating={5}
          />
          <Product
            id="638390"
            title="Asus Laptop X509MA-BR239T Intel Celeron N4020 Processor 1.1"
            price={70.99}
            image="https://5zznly.com/d/tNG5L_41P4x6CKwRL._AA200_-removebg-preview.png"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="578900"
            title="BRV Moveis TV Table With Three Open Shelves And One Cabinet for 50 inch TV, Brown, Size 56 x 180 x 29.4 cm"
            price={50.99}
            image="https://5zznly.com/d/UKmGd_-.jpg_q50-removebg-preview.png"
            rating={5}
          />
          <Product
            id="977390"
            title="Infinity(JBL) Glide 510 On-Ear Wireless Headphone with Mic, 72 Hrs Playtime(Quick Charging), Dual Equalizer Deep Bass, Voice Assistant (Black)"
            price={70.99}
            image="https://5zznly.com/d/FeaX4_headphones-png-image-5a35642ed13945.556412291513448494857-removebg-preview.png"
            rating={3}
          />
          <Product
            id="888390"
            title="Apple Airpods Pro with Noise cancellation - White"
            price={666}
            image="https://5zznly.com/d/AG1GI_Air.png"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3333333"
            title="X-Doria Raptic Replaceable Smartwatch Hybrid Mesh Magnetic Stainless Steel Strap/Band for Apple Watch, 40 mm/38 mm, Bigger Version, Series 6/5/4/3/2/1 (Black)
            "
            price={500}
            image="https://5zznly.com/d/beCet_81dRBSMoVkL._AC_UY218_-removebg-preview.png"
            rating={3}
          />
          <Product
            id="3333455"
            title="Nikai 32 Inch TV Smart HD LED Black - NTV3200SLED
            "
            price={5000}
            image="https://5zznly.com/d/xGHC2_6dea7fe1-1f51-40dc-af9e-de5c132cbd2d.__CR0_304_2516_1556_PT0_SX970_V1___-removebg-preview.png"
            rating={3}
          />
          <Product
            id="3333789"
            title="LIMITED TIME DEAL
            Ends in 01:55:55
            Save ₹1,000 with coupon
            Green Soul® Monster Ultimate (S) Multi-Functional Ergonomic Gaming Chair (GS-734US) (Full Black) (Large Size)
            "
            price={5000}
            image="https://5zznly.com/d/7csMw_61c1pv2G5cL._AC_SX480_SY360_-removebg-preview.png"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
