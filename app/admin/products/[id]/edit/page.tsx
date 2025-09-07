import { fetchAdminProductDetails } from "@/utils/actions";
import EditProductForm from "./edit-product-form";

const EditProductPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const product = await fetchAdminProductDetails(id);

  if (!product) {
    throw new Error("Produk tidak ditemukan");
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <EditProductForm id={id} product={product} />
    </section>
  );
};

export default EditProductPage;
