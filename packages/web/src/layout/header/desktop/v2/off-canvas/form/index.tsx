'use client';

import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';
import { Formik } from 'formik';

import * as Yup from 'yup';
import { contactUsFormSubmit } from './server/contact-us-form-submit';
import { toast } from 'sonner';

const mainTitleClasses = cn(
  'relative mb-30px pb-[14px] font-secondary text-[1.25rem] font-bold uppercase text-white',
  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50px] after:bg-white'
);

const inputFieldClasses = cn(
  'border border-current rounded-none bg-accent-700'
);

const errorFieldClasses = cn(' !border-red-600 border');
const errorMessageClasses = cn('sr-only');

const validationMessages = {
  tooShort: 'Must be at least ${min} characters',
  tooLong: 'Must be at most ${max} characters',
  required: 'This field is required',
  email: 'Invalid email format',
};

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, validationMessages.tooShort)
    .max(50, validationMessages.tooLong)
    .required(validationMessages.required),
  email: Yup.string()
    .email(validationMessages.email)
    .required(validationMessages.required),
  subject: Yup.string()
    .min(2, validationMessages.tooShort)
    .max(50, validationMessages.tooLong)
    .required(validationMessages.required),
  message: Yup.string()
    .min(2, validationMessages.tooShort)
    .max(300, validationMessages.tooLong)
    .required(validationMessages.required),
});

export type ContactUsSchemaType = Yup.InferType<typeof ContactUsSchema>;

export function OffcanvasContactUsForm() {
  return (
    <div>
      <h3 className={mainTitleClasses}>GET A FREE QUOTE</h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={ContactUsSchema}
        onSubmit={async (values, { resetForm }) => {
          const result = await contactUsFormSubmit(values);

          if (result.data === null) {
            toast.error(result.message);
          } else {
            toast.success(result.message);
            resetForm();
          }
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          isSubmitting,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <TextInput
                placeholder="Your Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.name && touched.name && errorFieldClasses
                )}
              />
              {errors.name && touched.name && (
                <p
                  title={errors.name}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <TextInput
                placeholder="Your Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.email && touched.email && errorFieldClasses
                )}
              />
              {errors.email && touched.email && (
                <p
                  title={errors.email}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <TextInput
                placeholder="Subject"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.subject && touched.subject && errorFieldClasses
                )}
              />
              {errors.subject && touched.subject && (
                <p
                  title={errors.subject}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <TextAreaInput
                placeholder="Write Message..."
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  inputFieldClasses,
                  errors.message && touched.message && errorFieldClasses
                )}
              />
              {errors.message && touched.message && (
                <p
                  title={errors.message}
                  aria-live="polite"
                  role="error message"
                  className={errorMessageClasses}
                >
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <span>SEND NOW</span>
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
