import axios from "axios";
import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchUserWishlist = async (product, userToken) => {
    try {
      const response = await axios.post(
        `/api/user/wishlist`,
        {
          product,
        },
        {
          headers: {
            authorization: userToken,
          },
        }
      );

      setWishlistItems(response.data.wishlist);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUserWishlisItems = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: userToken,
        },
      });
      setWishlistItems(response.data.wishlist);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <WishlistContext.Provider
        value={{ wishlistItems, fetchUserWishlist, deleteUserWishlisItems }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
};
