import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../store/slices/userSlice";
import DestinationsDisplayCard from "../../Features/destinationsDisplay/DestinationsDisplay.card";

function Account(props) {
  const { userToken, userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div className="min-h-screen">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="navbar background"
      />
      {/* log out container */}
      <div className="p-4 flex justify-end">
        <p>{userToken ? `Welcome ${userInfo.name}` : "not auth"}</p>
        <div className="test11 ">
          <button
            className="py-0 px-2 ml-4 hover:bg-orange-600"
            onClick={() => dispatch(logOut())}
          >
            log out
          </button>
        </div>
      </div>

      {/* favorites container */}
      <div className="max-w-[1640px] m-auto px-8 py-12">
        <h2 className="mb-10">Favorites</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {!userInfo ? (
            <div className="bg bg-red-500 text-white">
              Destinations could not be fetched
            </div>
          ) : (
            // mapping products
            userInfo.favorites.map((el) => {
              return (
                <DestinationsDisplayCard
                  key={el._id}
                  name={el.name}
                  description={el.description}
                  bg={el.image_url}
                  price={el.price}
                  prodId={el._id}
                  userId={userInfo.id}
                  favD={true}
                />
              );
            })
          )}
          {userInfo && userInfo.favorites.length === 0 ? (
            <p>No favorites yet</p>
          ) : null}
          {/* Test the products */}
        </div>
      </div>
    </div>
  );
}

export default Account;
