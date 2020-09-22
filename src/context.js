import React from "react";

export const LangContext = React.createContext({
  currentLang: "en",
  setLang: () => {},
});
