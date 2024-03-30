// atoms/landingPage.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const landingPageState = atom({
  key: "landingPage", // unique ID (with respect to other atoms/selectors)
  default: {
    title: "",
    url: "",
    data: "",
    formdata: "",
    campaignCode: "",
    downloadpageurl: "",
    headerLogoFile: "",
    content: "",
    imageUrl: "",
    imageHeight: "",
    imageWidth: "",
    gdpr:"",
    optin:"",
    headerBackgroundColor:""
  }, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom]
});

