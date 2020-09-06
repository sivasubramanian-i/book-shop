/**
 * API call actions for the core components
 */
import bookData from "../books.json";
export const getProducts = async () => {
  try {
    return bookData;
  } catch (err) {
    console.log(err);
  }
};
