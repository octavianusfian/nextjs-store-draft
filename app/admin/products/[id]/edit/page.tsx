import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

const EditProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const product = await fetchAdminProductDetails(id);

  const { name, featured, price, image, company, description } = product;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <ImageInputContainer
        action={updateProductImageAction}
        name={name}
        image={image}
        text="update image"
      >
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="url" value={image} />
      </ImageInputContainer>
      <FormContainer action={updateProductAction}>
        <div className="grid gap-4 md:grid-cols-2 my-4">
          <input type="hidden" name="id" value={id} />
          <FormInput
            name="name"
            type="text"
            defaultValue={name}
            label="product name"
          />
          <FormInput type="text" name="company" defaultValue={company} />
          <PriceInput defaultValue={price} />
        </div>
        <TextAreaInput
          name="description"
          labelText="product description"
          defaultValue={description}
        />
        <div className="mt-6">
          <CheckboxInput
            name="featured"
            label="featured"
            defaultChecked={featured}
          />
        </div>
        <SubmitButton text="update product" className="mt-8" />
      </FormContainer>
    </section>
  );
};

export default EditProductPage;
