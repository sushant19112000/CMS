import React, { useState,useEffect } from 'react'
import DynamicFormNew from '../../dynamicForm/dynamicFormNew'

export const LandingPage = ({data}) => {
  const [headerBackgroundColor,setHeaderBackgroundColor]=useState("#8596b0")

  useEffect(()=>{
    if (data.headerBackgroundColor!="")setHeaderBackgroundColor(data.headerBackgroundColor);
  },[])

  return (
    <div
    className="container"
    style={{ backgroundColor: "#ffffff", marginTop: 100, marginBottom: 70 }}
  >
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="text-center">
          <img src={`/campaign/logos/${data.imgSrc}`} style={{height:data.imageHeight,width:data.imageWidth}} />
        </div>
        <div
          className="mb-4"
          style={{ backgroundColor: headerBackgroundColor, padding: "1em", margin: "1em 0" }}
        >
          <h3
            className="pt-2 pb-2 text-center"
            style={{
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 500,
              marginBottom: "0.5rem",
              fontFamily:
                'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            }}
          >
            {data.header}
          </h3>
        </div>
        <div
          className="row "
          style={{ letterSpacing: "normal", wordSpacing: "normal" }}
        >
          <div className="col-md-6">
            <div className="m-3" style={{fontFamily:'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}></div>
          </div>
          <div className="col-md-6">
            <h4
              className="mb-2"
              style={{
                fontSize: 28,
                color: "#000000",
                fontWeight: 500,
                letterSpacing: "normal",
                wordSpacing: "normal",
                paddingBottom: 10,
                lineHeight: "33.6px",
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}
            >
              Please fill out the form below to download.
            </h4>
            <p
              className="mb-3"
              style={{
                color: "#000000",
                fontSize: "12.8px",
                paddingBottom: 10,
                lineHeight: "19.2px",
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}
            >
              *Required fields
            </p>
            <DynamicFormNew data={JSON.parse(data.formdata)} privacy={JSON.parse(data.privacy)} optin={data.optin}  />
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
