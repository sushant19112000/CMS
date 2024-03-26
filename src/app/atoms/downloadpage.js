// atoms/downloadPage.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const downloadPageState = atom({
  key: "downloadPage", // unique ID (with respect to other atoms/selectors)
  default: {
    title:"",
    url:"",
    campaignCode:"",
    imageUrl:"",
    imageHeight:"",
    imageWidth:"", 
    banner:null,
    pdf:null,
    link:""  
  }, // default value (aka initial value)
  effects_UNSTABLE:[persistAtom]
});



