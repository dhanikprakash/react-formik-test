import React from "react";
import * as renderer from "react-test-renderer";
import { ContactDetailsSection } from "./ContactDetailsSection";
import { exampleContactDetails } from "./ExampleData";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {},
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

test("ContactDetailsSection should render correctly", () => {
  const data = renderer
    .create(<ContactDetailsSection contactDetails={exampleContactDetails} />)
    .toJSON();

  expect(data).toMatchSnapshot();
});
