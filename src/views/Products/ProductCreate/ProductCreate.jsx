import { useFormik } from "formik";
import React, { useContext } from "react";
import FormControl from "../../../components/FormControl/FormControl";
import Input from "../../../components/Input/Input";
import { createProduct } from "../../../services/ProductService";
import { productSchema } from "../../../utils/schemas/product.schema";

const initialValues = {
  name: "",
  price: "",
  photo: "",
};

const CreateProduct = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: productSchema,
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("photo", values.photo);

      console.log("values", values);
      console.log(formData.get("name"));

      createProduct(formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitting(false);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormControl
          text="Name"
          error={touched.name && errors.name}
          htmlFor="name"
        >
          <Input
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name}
            placeholder="Enter product name..."
          />
        </FormControl>
        <FormControl
          text="Price"
          error={touched.price && errors.price}
          htmlFor="price"
        >
          <Input
            id="price"
            name="price"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            error={touched.price && errors.price}
            placeholder="Enter product price..."
          />
        </FormControl>
        <FormControl
          text="Photos"
          error={touched.photos && errors.photos}
          htmlFor="photos"
        >
          <input
            id="photo"
            name="photo"
            type="file"
            multiple
            onChange={(event) => {
              setFieldValue("photo", event.currentTarget.files[0]);
            }}
          />
        </FormControl>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
