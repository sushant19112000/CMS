import React from 'react'
import { useRecoilState } from 'recoil';
import { downloadPageState } from '../atoms/downloadpage';
import { landingPageState } from '../atoms/landingpage';
import { mailerState } from '../atoms/mailer';
export const useClearData = ( type ) => {
    const [download, setDownload] = useRecoilState(downloadPageState)
    const [landingpage, setLandingPage] = useRecoilState(landingPageState)
    const [mailer, setMailer] = useRecoilState(mailerState)
    const clearData = (type) => {
        switch (type) {
            case 'download':
                setDownload({
                    title: "",
                    url: "",
                    campaignCode: "",
                    imageUrl: "",
                    imageHeight: "",
                    imageWidth: "",
                });
                break;
            case 'landing':
                setLandingPage({
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
                    privacy: "",
                    optin: "",
                    headerBackgroundColor: ""
                });
                break;
            case 'mailer':
                setMailer({
                    title: "",
                    url: "",
                    campaignCode: "",
                    landingPageUrl: "",
                    content: "",
                    imageUrl: "",
                    imageHeight: "",
                    imageWidth: "",
                    banner: "",
                    logoHeight: '',
                    logoWidth: '',
                    logoHeight: "auto",
                    logoWidth: "auto",
                    unsubscribe: "",
                    privacyLink: "",
                    updateProfile: "",
                    footer: ""
                });
                break;
        }
    }
    return clearData;
}
