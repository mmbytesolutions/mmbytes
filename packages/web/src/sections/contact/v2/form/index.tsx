'use client';

import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';

import * as Yup from 'yup';
import { contactUsFormSubmit } from './server/contact-us-form-submit';
import { toast } from 'sonner';
import { Formik } from 'formik';

const validationMessages = {
  tooShort: 'Must be at least ${min} characters',
  tooLong: 'Must be at most ${max} characters',
  required: 'This field is required',
  email: 'Invalid email format',
  phoneFormat: 'Invalid phone number format',
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
  phone: Yup.string().matches(
    /^[+\-()\s\d./]{1,15}$/,
    validationMessages.phoneFormat
  ),
});

export type ContactUsSchemaType = Yup.InferType<typeof ContactUsSchema>;

const fieldClasses = cn(
  'bg-accent-100 dark:bg-accent-700 rounded-5 border-none'
);

const errorClasses = cn('text-red-500 mt-1');

export function Form() {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          phone: '',
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
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-30px"
          >
            <div>
              <TextInput
                placeholder="Your name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.name && touched.name && (
                <p
                  title={errors.name}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
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
                className={fieldClasses}
              />
              {errors.email && touched.email && (
                <p
                  title={errors.email}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
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
                className={fieldClasses}
              />
              {errors.subject && touched.subject && (
                <p
                  title={errors.subject}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <TextInput
                placeholder="Phone"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={fieldClasses}
              />
              {errors.phone && touched.phone && (
                <p
                  title={errors.phone}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="lg:col-span-2">
              <TextAreaInput
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  fieldClasses,
                  'min-h-[140px] pt-4 md:min-h-[200px]'
                )}
              />
              {errors.message && touched.message && (
                <p
                  title={errors.message}
                  aria-live="polite"
                  role="error message"
                  className={errorClasses}
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div>
              <Button type="submit" disabled={isSubmitting}>
                <span className="relative z-1">SEND A MESSAGE</span>
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
