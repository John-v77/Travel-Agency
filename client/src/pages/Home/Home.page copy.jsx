import React from "react";
import { paris, tailand } from "../../assets/images.utils";

function Home(props) {
  return (
    <div>
      <header
        className="w-100% h-[80vh]
                        bg-[url('https://www.ncl.com/sites/default/files/715800_New_Year_Preview_mobile_webhero_1536x1020.jpg')]
                        bg-cover sm:bg-fill md:bg-right-bottom
                        flex items-center justify-center

      "
      >
        <div className="py-auto">
          <h2 className="text-[24px] text-white">A world of colors</h2>
          <p>Explore it with us</p>
        </div>
      </header>

      {/* New Deals */}
      <section className="NewDeals max-w-7xl mx-auto mt-20 ">
        <div className="flex flex-col justify-center px-10 sm:flex-row">
          <div className="border-b-2 w-[100%] mx-auto sm:flex-1 sm:mb-6 md:ml-3"></div>
          <h2 className="text-[20px] my-3 sm:flex-1">Our new Deals</h2>
          <div className="border-b-2 w-[100%] mx-auto sm:flex-1 sm:mb-6 md:mr-3"></div>
        </div>
        <div className="flex flex-wrap  max-w-7xl sm:justify-between">
          {/* Item 1 */}
          <div className="DestinationContainer w-80 mx-auto rounded-t-sm mt-20">
            <img src={paris} alt="paris" className="80w rounded-t-sm" />
            <div className="flex justify-between bg-green-800 h-16 text-white items-center px-4 uppercase rounded-b-sm">
              <p>Paris</p>
              <p>$6000</p>
            </div>
          </div>

          {/* Item 1 */}
          <div className="DestinationContainer w-80 mx-auto rounded-t-sm mt-20 sm:mb-20">
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
        </div>
      </section>

      <section className="MostPopular mt-20 py-20 bg-[#E5E5E5]">
        <div className="flex flex-col justify-center px-10 sm:flex-row max-w-7xl mx-auto">
          <div className="border-b border-black w-[100%] mx-auto sm:flex-1 sm:mb-6 md:ml-3"></div>
          <h2 className="text-[20px] my-3 sm:flex-1">Popular Deals</h2>
          <div className="border-b border-black w-[100%] mx-auto sm:flex-1 sm:mb-6 md:mr-3"></div>
        </div>

        <div className="bg-blue-600 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:px-10 md:px-48 xl:px-0 xl:grid-cols-4 xl:gap-4 max-w-7xl mx-auto">
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
        </div>
      </section>

      <section className="UpComing pt-20 max-w-7xl mx-auto mt-20 ">
        <div className="flex flex-col justify-center px-10 sm:flex-row">
          <div className="border-b-2 w-[100%] mx-auto sm:flex-1 sm:mb-6 md:ml-3"></div>
          <h2 className="text-[20px] my-3 sm:flex-1">UpComing Deals</h2>
          <div className="border-b-2 w-[100%] mx-auto sm:flex-1 sm:mb-6 md:mr-3"></div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16xl:gap-x-0 xl:grid-cols-2 xl:px-24 ">
          {/* Item 3 */}
          <div className="DestinationContainer w-64 mx-auto rounded-t-sm border  sm:w-[30rem] sm:flex">
            <img
              src="https://apicms.thestar.com.my/uploads/images/2022/11/04/1803987.jpg"
              alt="tailand"
              className="rounded-t-sm h-56 sm:w-52 sm:h-48"
            />
            <div className="bg-blue-200 h-20 w-[100%]">
              <div className="bg-white h-32 text-left pt-6 pl-2  border-x-2 sm:border-none sm:w-[100%] sm:text-center sm:mb-4">
                <p className="text-[16px]">Tailand</p>
                <br></br>
                <p className="text-[16px] text-slate-400">March 2023</p>
              </div>
              <div className="flex justify-between bg-white border-2 h-12 items-center px-4 rounded-b-sm sm:border-none sm:bg-blue-200 sm:px-8">
                <p className="text-[24px]">♡</p>
                <p>Travel</p>
                <p className="text-[20px]">☆</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="DestinationContainer w-64 mx-auto rounded-t-sm border  sm:w-[30rem] sm:flex">
            <img
              src="https://apicms.thestar.com.my/uploads/images/2022/11/04/1803987.jpg"
              alt="tailand"
              className="rounded-t-sm h-56 sm:w-52 sm:h-48"
            />
            <div className="bg-blue-200 h-20 w-[100%]">
              <div className="bg-white h-32 text-left pt-6 pl-2  border-x-2 sm:border-none sm:w-[100%] sm:text-center sm:mb-4">
                <p className="text-[16px]">Tailand</p>
                <br></br>
                <p className="text-[16px] text-slate-400">March 2023</p>
              </div>
              <div className="flex justify-between bg-white border-2 h-12 items-center px-4 rounded-b-sm sm:border-none sm:bg-blue-200 sm:px-8">
                <p className="text-[24px]">♡</p>
                <p>Travel</p>
                <p className="text-[20px]">☆</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="DestinationContainer w-64 mx-auto rounded-t-sm border  sm:w-[30rem] sm:flex">
            <img
              src="https://apicms.thestar.com.my/uploads/images/2022/11/04/1803987.jpg"
              alt="tailand"
              className="rounded-t-sm h-56 sm:w-52 sm:h-48"
            />
            <div className="bg-blue-200 h-20 w-[100%]">
              <div className="bg-white h-32 text-left pt-6 pl-2  border-x-2 sm:border-none sm:w-[100%] sm:text-center sm:mb-4">
                <p className="text-[16px]">Tailand</p>
                <br></br>
                <p className="text-[16px] text-slate-400">March 2023</p>
              </div>
              <div className="flex justify-between bg-white border-2 h-12 items-center px-4 rounded-b-sm sm:border-none sm:bg-blue-200 sm:px-8">
                <p className="text-[24px]">♡</p>
                <p>Travel</p>
                <p className="text-[20px]">☆</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="DestinationContainer w-64 mx-auto rounded-t-sm border  sm:w-[30rem] sm:flex">
            <img
              src="https://apicms.thestar.com.my/uploads/images/2022/11/04/1803987.jpg"
              alt="tailand"
              className="rounded-t-sm h-56 sm:w-52 sm:h-48"
            />
            <div className="bg-blue-200 h-20 w-[100%]">
              <div className="bg-white h-32 text-left pt-6 pl-2  border-x-2 sm:border-none sm:w-[100%] sm:text-center sm:mb-4">
                <p className="text-[16px]">Tailand</p>
                <br></br>
                <p className="text-[16px] text-slate-400">March 2023</p>
              </div>
              <div className="flex justify-between bg-white border-2 h-12 items-center px-4 rounded-b-sm sm:border-none sm:bg-blue-200 sm:px-8">
                <p className="text-[24px]">♡</p>
                <p>Travel</p>
                <p className="text-[20px]">☆</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
