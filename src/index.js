import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const language = navigator.language.startsWith("es") ? "es-ES" : "en-US";
const messages = language.startsWith("es") ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);