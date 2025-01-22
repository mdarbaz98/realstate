import { Input, Stack, Text, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { toaster } from "@/components/ui/toaster";

type MyInputs = {
  name: string;
  email: string;
  phone: string;
};

const enquirySchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
});

export default function ContactForm() {
  const {
    handleSubmit,
    isSubmitting,
    resetForm,
    touched,
    handleBlur,
    errors,
    values,
    handleChange,
  } = useFormik<MyInputs>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: enquirySchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
  
        if (response.ok) {
          toaster.success({ title: 'Message sent successfully!' })
          resetForm()
        }
      } catch (error) {
        console.log('Error sending message:', error)
      }
    },
  });

  return (
    <Stack p={4} spaceY={3}>
      <Text textStyle={"lg"} textAlign={"center"} fontWeight={700}>
        Get the best deals
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack>
          {/* Name Field */}
          <Field label={"name"} invalid={touched.name && !!errors.name}>
            <Input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </Field>

          {/* Email Field */}
          <Field label={"email"} invalid={touched.email && !!errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </Field>

          {/* Phone Field */}
          <Field label={"phone"} invalid={touched.phone && !!errors.phone}>
            <Input
              id="phone"
              name="phone"
              type="text"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone && <div>{errors.phone}</div>}
          </Field>

          {/* Submit Button */}
          <Button
            type="submit"
            colorPalette="yellow"
            loading={isSubmitting}
            loadingText="Submitting"
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Stack>
  );
}
