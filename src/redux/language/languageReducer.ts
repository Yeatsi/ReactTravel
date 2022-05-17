import i18n from "i18next";
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageAcitonsType } from "./languageActions";

/* eslint-disable import/no-anonymous-default-export */
export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: "zh",
    },
    {
      name: "English",
      code: "en",
    },
  ],
};

export default (
  state = defaultState,
  actions: LanguageAcitonsType
) => {
  switch (actions.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(actions.payload);
      console.log("payload = ", actions.payload)
      console.log("i18n = ", i18n)
      return { ...state, language: actions.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, actions.payload],
      };
    default:
      return state;
  }
};
