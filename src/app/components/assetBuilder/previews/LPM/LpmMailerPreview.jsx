import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const LpmMailerPreview = ({ temp, closeModal }) => {
    const [data, setData] = useState(temp)
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
    const [bannerPreview, setBannerPreview] = useState(null)
    const [logo,setLogo]=useState(null)
    
    useEffect(() => {
        convertBlobToFile(data.banner)
        convertLogoBlobToFile(data.logo)
    }, [data])

    const convertBlobToFile = (banner) => {
        if (banner instanceof Blob) {
            const file = new File([banner], `${banner.type}`);
            
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setBannerPreview(reader.result);
                    console.log(bannerPreview, 'banner preview')
                };
                reader.readAsDataURL(file);
            }
        }
    }
    const convertLogoBlobToFile = (logo) => {
        if (logo instanceof Blob) {
            const file = new File([logo], `${logo.type}`);      
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setLogo(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    }
    const handleClose = () => { setShow(false); closeModal() }
    return (
        <>
            <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Mailer Preview
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#f3f4f6' }}>
                    <>
                        <div
                            style={{
                                display: "none",
                                fontSize: 1,
                                color: "#333333",
                                lineHeight: 1,
                                maxHeight: 0,
                                maxWidth: 0,
                                opacity: 0,
                                overflow: "hidden",
                                fontFamily:""
                            }}
                        >
                            Special second edition now available
                        </div>
                        <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className="main-wrapper"
                            style={{ backgroundColor: "#f7f7f7", width: "100%" }}
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            className="primary-message-wrap"
                                            style={{ width: "100%" }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td height={15}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: 11,
                                                            color: "#666666",
                                                            fontFamily: "Arial, Helvetica, sans-serif"
                                                        }}
                                                        align="center"
                                                    >
                                                        <div style={{ textAlign: "center" }}>
                                                            <span
                                                                style={{
                                                                    fontFamily: "arial, helvetica, sans-serif",
                                                                    fontSize: 11,
                                                                    color: "#888888"
                                                                }}
                                                            >
                                                                <span style={{ color: "#888888" }}>
                                                                    <a
                                                                        href="/new-and-improved-sase-for-dummies-mailer"
                                                                        style={{ color: "#000", textDecoration: "none" }}
                                                                    >
                                                                        View email in browser
                                                                    </a>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height={15}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border={0}
                                                            cellPadding={0}
                                                            cellSpacing={0}
                                                            className="primary-content-wrap"
                                                            style={{
                                                                border: "1px solid #e5e5e5",
                                                                width: 640,
                                                                background: "#FFFFFF"
                                                            }}
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td className="mobile-pad-btm20">
                                                                        <table
                                                                            align="center"
                                                                            border={0}
                                                                            cellPadding={0}
                                                                            cellSpacing={0}
                                                                            className="primary-content"
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <table>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td width={205}>
                                                                                                        <table>
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td width={20}>&nbsp;</td>
                                                                                                                    <td>
                                                                                                                        <img
                                                                                                                            src={logo}
                                                                                                                            border={0}
                                                                                                                            alt="Logo"
                                                                                                                            width={250}
                                                                                                                        />
                                                                                                                    </td>
                                                                                                                    <td width={20}>&nbsp;</td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                    <td width={205}>
                                                                                                        <table>
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td width={120}>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td height={50}>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <table
                                                                                            bgcolor="#e3653c"
                                                                                            cellPadding={0}
                                                                                            cellSpacing={0}
                                                                                        >
                                                                                        
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <a href="#">
                                                                                                            <img
                                                                                                                src={bannerPreview}
                                                                                                                border={0}
                                                                                                                alt="Hero Banner"
                                                                                                                width={640}
                                                                                                                height={250}
                                                                                                            />
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr
                                                                                                    style={{
                                                                                                        background: "#e3653c",
                                                                                                        margin: 0,
                                                                                                        padding: 0
                                                                                                    }}
                                                                                                >
                                                                                                    <td>
                                                                                                        <table
                                                                                                            bgcolor="#e3653c"
                                                                                                            cellPadding={0}
                                                                                                            cellSpacing={0}
                                                                                                            style={{ width: 638 }}
                                                                                                        >
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                    <td
                                                                                                                        style={{
                                                                                                                            fontFamily:
                                                                                                                                '"Lato", sans-serif',
                                                                                                                            fontSize: 26,
                                                                                                                            color: "#ffffff",
                                                                                                                            lineHeight: '26px',
                                                                                                                            textAlign: "center"
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <a
                                                                                                                            href="#"
                                                                                                                            target="_blank"
                                                                                                                            style={{
                                                                                                                                textDecoration: "none",
                                                                                                                                color: "#ffffff",
                                                                                                                                fontFamily:'"Lato", sans-serif',
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            {data.title}
                                                                                                                        </a>
                                                                                                                    </td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                    <td>&nbsp;</td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <table
                                                                                                            bgcolor="#ffffff"
                                                                                                            cellPadding={0}
                                                                                                            cellSpacing={0}
                                                                                                        >
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td width={20}>&nbsp;</td>
                                                                                                                    <td>
                                                                                                                        <table
                                                                                                                            cellPadding={0}
                                                                                                                            cellSpacing={0}
                                                                                                                        >
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td>&nbsp;</td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                        <table>
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td>&nbsp;</td>
                                                                                                                                </tr>
                                                                                                                                <tr>
                                                                                                                                    <td
                                                                                                                                        style={{
                                                                                                                                            fontFamily:
                                                                                                                                                '"Lato", sans-serif',
                                                                                                                                            fontSize: 12,
                                                                                                                                            color: "#343434",
                                                                                                                                            lineHeight: '18px'
                                                                                                                                        }}
                                                                                                                                        align="left"
                                                                                                                                        valign="top"
                                                                                                                                    >
                                                                                                                                        <div dangerouslySetInnerHTML={{ __html: data.content }} style={{margin:0,padding:0, fontFamily:
                                                                                                                                                '"Lato", sans-serif !important'}}></div>
                                                                                                                                        <p>&nbsp;</p>
                                                                                                                                    </td>
                                                                                                                                    <td valign="top">
                                                                                                                                        <a href="#">
                                                                                                                                            <img
                                                                                                                                                src="/campaign/buttons/Download_button_black.jpg"
                                                                                                                                                border={0}
                                                                                                                                                alt="Download Button"
                                                                                                                                            />
                                                                                                                                        </a>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                                <tr>
                                                                                                                                    <td>
                                                                                                                                        <table
                                                                                                                                            border={0}
                                                                                                                                            cellPadding={0}
                                                                                                                                            cellSpacing={0}
                                                                                                                                            style={{
                                                                                                                                                borderRadius: 5,
                                                                                                                                                width: 150,
                                                                                                                                                borderCollapse:
                                                                                                                                                    "separate",
                                                                                                                                                backgroundColor:
                                                                                                                                                    "#e3653c"
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <tbody>
                                                                                                                                                <tr>
                                                                                                                                                    <td
                                                                                                                                                        style={{
                                                                                                                                                            padding:
                                                                                                                                                                "10px 0px"
                                                                                                                                                        }}
                                                                                                                                                        align="center"
                                                                                                                                                        valign="middle"
                                                                                                                                                    >
                                                                                                                                                        <a
                                                                                                                                                            href="#"
                                                                                                                                                            target="_blank"
                                                                                                                                                            style={{
                                                                                                                                                                color:
                                                                                                                                                                    "#ffffff",
                                                                                                                                                                fontFamily:
                                                                                                                                                                    "arial",
                                                                                                                                                                fontSize: 14,
                                                                                                                                                                lineHeight:
                                                                                                                                                                    "1.5",
                                                                                                                                                                padding: 0,
                                                                                                                                                                display:
                                                                                                                                                                    "block",
                                                                                                                                                                textDecoration:
                                                                                                                                                                    "none"
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            Download
                                                                                                                                                        </a>
                                                                                                                                                    </td>
                                                                                                                                                </tr>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                    <td width={20}>&nbsp;</td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td width={20}>&nbsp;</td>
                                                                                                                    <td></td>
                                                                                                                    <td width={20}>&nbsp;</td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <table
                                                                                            bgcolor="#FFFFFF"
                                                                                            border={0}
                                                                                            cellPadding={0}
                                                                                            cellSpacing={0}
                                                                                            style={{ backgroundColor: "#ffffff" }}
                                                                                        >
                                                                                         
                                                                                            <tbody></tbody>
                                                                                        </table>
                                                                                        <table
                                                                                            align="center"
                                                                                            border={0}
                                                                                            cellPadding={0}
                                                                                            cellSpacing={5}
                                                                                            style={{ width: "100%", maxWidth: 620 }}
                                                                                            dir="ltr"
                                                                                        >
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style={{
                                                                                                            fontSize: 11,
                                                                                                            fontFamily: '"Lato", sans-serif',
                                                                                                            color: "#343434"
                                                                                                        }}
                                                                                                        align="center"
                                                                                                    >
                                                                                                        This email was sent to .
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style={{
                                                                                                            fontSize: 11,
                                                                                                            fontFamily: '"Lato", sans-serif',
                                                                                                            color: "#343434"
                                                                                                        }}
                                                                                                        align="center"
                                                                                                    >
                                                                                                       {data.footer}
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style={{
                                                                                                            fontSize: 11,
                                                                                                            fontFamily: '"Lato", sans-serif',
                                                                                                            color: "#666666"
                                                                                                        }}
                                                                                                        align="center"
                                                                                                    >
                                                                                                        <a
                                                                                                            href={data.unsubscribe}
                                                                                                            target="_blank"
                                                                                                            style={{
                                                                                                                fontSize: 11,
                                                                                                                fontFamily: '"Lato", sans-serif',
                                                                                                                color: "#3778cd"
                                                                                                            }}
                                                                                                        >
                                                                                                            Click here to unsubscribe
                                                                                                        </a>{" "}
                                                                                                        |{" "}
                                                                                                        <a
                                                                                                            href={data.updateProfile}
                                                                                                            target="_blank"
                                                                                                            style={{
                                                                                                                fontSize: 11,
                                                                                                                fontFamily: '"Lato", sans-serif',
                                                                                                                color: "#3778cd"
                                                                                                            }}
                                                                                                        >
                                                                                                            Update your profile
                                                                                                        </a>{" "}
                                                                                                        |{" "}
                                                                                                        <a
                                                                                                            href={data.privacyLink}
                                                                                                            target="_blank"
                                                                                                            style={{
                                                                                                                fontSize: 11,
                                                                                                                fontFamily: '"Lato", sans-serif',
                                                                                                                color: "#3778cd"
                                                                                                            }}
                                                                                                        >
                                                                                                            Privacy Policy
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>&nbsp;</td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height={15}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td height={15}>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                </Modal.Body>
            </Modal>
        </>
    );
}