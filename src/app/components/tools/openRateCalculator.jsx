import React, { useEffect } from 'react'
import { useState } from 'react'
import Ad1 from '../Advertise/ad1'


export const OpenRateCalculator = () => {
    const [opened, setOpened] = useState(0)
    const [delivered, setDelivered] = useState(0)
    const [openRate, setOpenRate] = useState(0)

    const calculate = () => {
        const result = opened / delivered * 100;
        return result > 0.2 ? parseFloat(result.toFixed(2)) : NaN;

    }


    const handleOpenedChange = (e) => {
        setOpened(e.target.value)

    }

    const handleDeliveredChange = (e) => {
        setDelivered(e.target.value)

    }

    const handleOpenRate = () => {
        setOpenRate(calculate())
    }

    useEffect(() => {
        handleOpenRate()
    }, [opened, delivered])

    return (
        <div className='container'>

            <div className="row mt-4 justify-content-center">
                <div className="col-10 col-md-3"  >
                    <Ad1 />
                </div>
                <div className="col ms-2">
                    <div className="row justify-content-center mt-2 mb-4">
                        <div className='text-center'>
                            <h3 style={{ fontWeight: '600' }}>Email Open Rate Calculator</h3>
                        </div>
                        <div className="col-md-10" style={{}}>
                            <div className="m-2">
                                <div className='mt-2'>
                                    <div className="mt-4 row justify-content-center" style={{ color: 'black' }}>
                                        <div className="col-10 col-md-6 mb-3 " >

                                            <div className="p-4  ms-md-4 me-md-4" style={{ backgroundColor: '#fcebe3', }}>
                                                <div>
                                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Number of emails opened</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={opened} onChange={handleOpenedChange} className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="mt-4">

                                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Number of emails delivered</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={delivered} onChange={handleDeliveredChange} className='form-control' />
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
                                                                    Number of emails opened
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {opened}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="row">
                                                                <div className='col-9 col-md-9'>
                                                                    Number of emials delivered
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {delivered}
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className='mb-2 mt-4' style={{ borderTop: '1px solid silver ' }}>
                                                            <div className="row mt-2">
                                                                <div className='col-9 col-md-9'>
                                                                    Open Rate

                                                                </div>
                                                                <div className='col-3 col-md-3 ' style={{ fontWeight: '600' }}>
                                                                    {openRate}%
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
                                Open Rate Calculator is a tool that offers a more insightful comparison between email campaigns of different sizes, avoiding the pitfalls of relying solely on raw open numbers. Let's dig deeper into an illustrative example:
                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Say Email ONE, reaching 18,000 recipients with 1,421 opens, and Email TWO, delivered to 9,000 recipients with 1,014 opens.

                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                While Email ONE may seem superior due to its higher open count, it's crucial to account for the fact that it was presented to two times as many people, providing a larger opportunity for opens. Adjusting for this reveals that Email TWO actually outperforms.

                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Adopting Open Rate as the benchmark clarifies the picture. Email ONE registers an Open Rate of 7.89%, while Email TWO, with a smaller audience, boasts a higher Open Rate of 11.26%. This signifies that recipients of Email TWO were more receptive and engaged compared to those receiving Email ONE.
                            </p>

                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Nevertheless, it's imperative not to view Open Rate in isolation. Complementary metrics like CTOR (Click-Through Rate) and Conversion Rate are essential for a comprehensive understanding of post-open engagement and the overall efficacy of an email marketing campaign.
                            </p>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <picture>
                        <img src="/tools/ORC.jpg" className='img-fluid' alt='open rate image' />
                        </picture>

                    </div>


                </div>
            </div>
        </div>
    )
}
