import React from "react";

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
    </div>
  );
}

export default Home;
