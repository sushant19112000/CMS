import React, { useEffect } from 'react'
import { useState } from 'react'
import Ad1 from '../Advertise/ad1'


export const CtorCalculator = () => {
    const [opened, setOpened] = useState(0)
    const [clicked, setClicked] = useState(0)
    const [ctor, setCtor] = useState(0)
    const calculate = () => {
        const result = clicked / opened * 100;
        return result > 0.2 ? parseFloat(result.toFixed(2)) : NaN;

    }


    const handleclickedChange = (e) => {
        setClicked(e.target.value)

    }

    const handleopenedChange = (e) => {
        setOpened(e.target.value)

    }

    const handleCtorRate = () => {
        setCtor(calculate())
    }

    useEffect(() => {
        handleCtorRate()
    }, [clicked, opened])

    return (
        <div className='container'>
            <div className="row mt-4 justify-content-center">
                <div className="col-10 col-md-3"  >
                    <Ad1 />
                </div>
                <div className="col ms-2">

                    <div className="row justify-content-center  mb-4">
                        <div className='text-center'>
                            <h3 style={{ fontWeight: '600' }}>Email Click-To-Open Rate Calculator </h3>
                        </div>
                        <div className="col-md-10" style={{}}>
                            <div className="m-2">


                                <div className='mt-2'>
                                    <div className="mt-4 row justify-content-center" style={{ color: 'black' }}>
                                        <div className="col-10 col-md-6 mb-3 " >

                                            <div className="p-4  ms-md-4 me-md-4" style={{ backgroundColor: '#fcebe3', }}>
                                                <div>
                                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Total Clicks on the Link</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={clicked} onChange={handleclickedChange} className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="mt-4">

                                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Number of emails  opened</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={opened} onChange={handleopenedChange} className='form-control' />
                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                        <div className="col-10 col-md-6" >
                                            <div className="d-flex">
                                                <div className="p-4" style={{ backgroundColor: '#fcebe3', width: '100%', color: 'black' }}>
                                                    <div className='pt-1 pb-1'>
                                                        <div className='mb-3'>
                                                            <span style={{ fontSize: '20px', fontWeight: '600' }}>Total Summary</span>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="row">
                                                                <div className='col-9 col-md-9' style={{ fontWeight: '' }}>
                                                                    Total Clicks on the Link
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {clicked}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="row">
                                                                <div className='col-9 col-md-9'>
                                                                    Number of emails opened
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {opened}
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className='mb-2 mt-4' style={{ borderTop: '1px solid silver ' }}>
                                                            <div className="row mt-2">
                                                                <div className='col-9 col-md-9'>
                                                                    Ctor

                                                                </div>
                                                                <div className='col-3 col-md-3 ' style={{ fontWeight: '600' }}>
                                                                    {ctor}%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex" style={{ fontWeight: '450' }}>
                        <div className="mx-auto">
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                The Email Click-To-Open Rate (CTOR) is a pivotal metric used in email marketing campaigns to gauge the effectiveness of email content by measuring user engagement. Unlike the click-through rate (CTR), which evaluates the percentage of recipients clicking on any link within an email, CTOR specifically focuses on the ratio of unique email opens to unique email clicks. It serves as a more refined indicator, showcasing not just the initial click but the subsequent engagement after the email has been opened.
                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>This metric is calculated by dividing the unique number of email clicks by the unique number of email opens and then multiplying the result by 100 to express it as a percentage. By tracking the CTOR, marketers gain insights into the relevancy and attractiveness of the email content. A higher CTOR suggests that the content within the email successfully resonated with recipients, prompting them not only to open the email but also to engage further by clicking on embedded links or calls to action.</p>

                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>A high CTOR implies that the content and call-to-action within the email were compelling enough to encourage recipients to explore further. This metric helps marketers assess the effectiveness of their email campaigns, allowing them to optimize content strategies, placement of links, and overall design to enhance user engagement. A low CTOR might signal potential areas for improvement, such as the need for more enticing subject lines, clearer calls to action, or more relevant content, prompting marketers to refine their approach for better engagement and conversion rates.</p>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <picture>
                        <img src="/tools/CTOR.jpg" className='img-fluid' alt='open rate image' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
