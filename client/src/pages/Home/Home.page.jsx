import React from "react";
import { paris, tailand } from "../../assets/images.utils";

function Home(props) {
  return (
    <div>
      <header
        className="w-100% h-96 
                        bg-[url('https://www.ncl.com/sites/default/files/715800_New_Year_Preview_mobile_webhero_1536x1020.jpg')]
                        bg-cover
                        flex items-center justify-center

      "
      >
        <div className="py-auto">
          <h2 className="text-[24px] text-white">A world of colors</h2>
          <p>Explore it with us</p>
        </div>
      </header>

      {/* New Deals */}
      <section className="NewDeals mt-20">
        <h2 className="text-[20px]">Our new Deals</h2>

        {/* Item 1 */}
        <div className="DestinationContainer w-80 mx-auto rounded-t-sm mt-20">
          <img src={paris} alt="paris" className="80w rounded-t-sm" />
          <div className="flex justify-between bg-green-800 h-16 text-white items-center px-4 uppercase rounded-b-sm">
            <p>Paris</p>
            <p>$6000</p>
          </div>
        </div>

        {/* Item 1 */}
        <div className="DestinationContainer w-80 mx-auto rounded-t-sm mt-20">
          <img src={paris} alt="paris" className="80w rounded-t-sm" />
          <div className="flex justify-between bg-green-800 h-16 text-white items-center px-4 uppercase rounded-b-sm">
            <p>Paris</p>
            <p>$6000</p>
          </div>
        </div>
      </section>

      <section className="MostPopular mt-20 pt-20 bg-[#E5E5E5]">
        <h2 className="text-[20px]">Popular Deals</h2>

        {/* Item 2 */}
        <div className="DestinationContainer w-64 mx-auto rounded-t-sm mt-20">
          <img
            src="https://apicms.thestar.com.my/uploads/images/2022/11/04/1803987.jpg"
            alt="tailand"
            className="rounded-t-sm h-56"
          />
          <div className="bg-white h-32 text-left pt-6 pl-2">
            <p className="text-[16px]">Tailand</p>
            <br></br>
            <p className="text-[16px] text-slate-400">March 2023</p>
          </div>
          <div className="flex justify-between bg-white border-t h-12 items-center px-4 rounded-b-sm">
            <p className="text-[24px]">♡</p>
            <p>Travel</p>
            <p className="text-[20px]">☆</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="DestinationContainer w-64 mx-auto rounded-t-sm mt-20">
          <img
            src="https://apicms.thestar.com.my/uploads/images/2022/11/04/1803987.jpg"
            alt="tailand"
            className="rounded-t-sm h-56"
          />
          <div className="bg-white h-32 text-left pt-6 pl-2">
            <p className="text-[16px]">Tailand</p>
            <br></br>
            <p className="text-[16px] text-slate-400">March 2023</p>
          </div>
          <div className="flex justify-between bg-white border-t h-12 items-center px-4 rounded-b-sm">
            <p className="text-[24px]">♡</p>
            <p>Travel</p>
            <p className="text-[20px]">☆</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
