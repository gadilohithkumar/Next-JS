import axios from "axios";
import { ProductForm } from "@/components/ProductForm";

function NewPage() {
  return (
    <div className="h-5/6 grid place-items-center">
      <ProductForm />
    </div>
  );
}
export default NewPage;

// export const getServerSideProps = async (context) => {
//   const res = await axios.get("http://localhost:3000/api/products_1");
//  console.log("15 = " + res.data)

//   return {
//     props: {
//       products: res.data,
//     },
//   };
// };
