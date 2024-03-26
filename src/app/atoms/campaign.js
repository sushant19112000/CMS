// atoms/campaign.js

import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const campaignState = atom({
  key: "campaign", // unique ID (with respect to other atoms/selectors)
  default: {
    name:"",
    code:""
  }, // default value (aka initial value)
  effects_UNSTABLE:[persistAtom]
});



