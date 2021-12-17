import { useSelector } from "react-redux";

let products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "500",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve",
  },
  {
    id: 2,
    title: "Mens Cotton Jacket",
    category: "men's clothing",
    url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: "200",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
  },
  {
    id: 3,
    title: "Solid Gold Petite Micropave ",
    category: "jewelery",
    url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    price: "5000",
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless",
  },
  {
    id: 4,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    category: "electronics",
    url: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    price: "300",
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted ",
  },
  {
    id: 5,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    category: "electronics",
    url: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    price: "900",
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design",
  },
];

export const getProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS", payload: products });
};
