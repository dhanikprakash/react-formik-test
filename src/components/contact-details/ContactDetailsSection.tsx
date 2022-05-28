import React, { Suspense, useState } from "react";

import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ContactDetailsBO } from "../../../types/contact-details";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./ContactDetailsValidation";
import Button from "@mui/material/Button";
import { toTitleCase } from "../utils/to-title-case";

export const ContactDetailsSection: React.FC<{
  contactDetails: ContactDetailsBO;
}> = ({ contactDetails: contactDetailsProps }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { emailAddress, mobileNumber, homePhoneNumber, workPhoneNumber } =
    contactDetailsProps;

  const { t } = useTranslation("contact-details");

  const onChangeSuccess = (): void => {};

  return (
    <>
      <Suspense fallback={<Spinner animation="border" />}>
        <h3>Contact Details</h3>
        <Formik
          initialValues={{
            emailAddress: emailAddress ?? "",
            mobileNumber: mobileNumber ?? "",
            homePhoneNumber: homePhoneNumber ?? "",
            workPhoneNumber: workPhoneNumber ?? "",
          }}
          validationSchema={validationSchema(t)}
          onSubmit={({
            emailAddress,
            mobileNumber,
            homePhoneNumber,
            workPhoneNumber,
          }): void => {
            setIsSubmitting(true);

            console.log(
              `submitting : ${emailAddress} ${mobileNumber} ${homePhoneNumber} ${workPhoneNumber} ${isSubmitting}`
            );
            //api-call to update data
            //success
            setIsSubmitting(false);
            onChangeSuccess();
            //failure
            //setIsSubmitting(false);
          }}
        >
          {(formik): React.ReactNode => (
            <Form>
              <div>
                {toTitleCase(t("emailAddress.label"))}
                <Field
                  type="text"
                  name="emailAddress"
                  title={t("emailAddress.tooltip")}
                  placeholder="Email"
                ></Field>
              </div>
              <div>
                {t("mobileNumber.label")}
                <Field
                  type="text"
                  name="mobileNumber"
                  title={t("mobileNumber.tooltip")}
                  placeholder="MobileNumber"
                ></Field>
              </div>
              <div>
                {t("homePhoneNumber.label")}
                <Field
                  type="text"
                  name="homePhoneNumber"
                  title={t("homePhoneNumber.tooltip")}
                  placeholder="Home Phone Number"
                ></Field>
              </div>
              <div>
                {t("workPhoneNumber.label")}
                <Field
                  type="text"
                  name="workPhoneNumber"
                  title={t("workPhoneNumber.tooltip")}
                  placeholder="workPhoneNumber"
                ></Field>
              </div>
              <div>
                <br />
                <Button variant="contained" onClick={formik.submitForm}>
                  Update
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Suspense>
    </>
  );
};
