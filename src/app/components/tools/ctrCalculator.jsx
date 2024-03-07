import React, { useEffect } from 'react'
import { useState } from 'react'
import './styles.module.css'
import Ad1 from '../Advertise/ad1'
import CountUp from 'react-countup';

export const CtrCalculator = () => {
    const [impressions, setImpressions] = useState(0)
    const [clicks, setClicks] = useState(0)
    const [ctr, setCtr] = useState(0)
    const calculate = () => {
        const result = clicks / impressions * 100;
        return result > 0.2 ? parseFloat(result.toFixed(2)) : NaN;

    }


    const handleclicksChange = (e) => {
        setClicks(e.target.value)

    }

    const handleimpressionsChange = (e) => {
        setImpressions(e.target.value)

    }

    const handlectr = () => {
        setCtr(calculate())
    }

    useEffect(() => {
        handlectr()
    }, [clicks, impressions])

    return (
        <div className='container' >

            <div className="row mt-4 justify-content-center ">
                <div className="col-10 col-md-3" >
                    <Ad1 />
                </div>
                <div className="col ms-2">
                    <div className="row justify-content-center mt-2 mb-4">
                        <div className='text-center'>
                            <h3 style={{ fontWeight: '600' }}>Click-Through Rate Calculator</h3>
                        </div>
                        <div className="col-md-10" style={{}}>
                            <div className="m-2">
                                <div className='mt-2'>
                                    <div className="mt-4 row justify-content-center" style={{ color: 'black' }}>
                                        <div className="col-10 col-md-6 mb-3 " >

                                            <div className="p-4  ms-md-4 me-md-4" style={{ backgroundColor: '#fcebe3', }}>
                                                <div>
                                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Number of  clicks</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={clicks} onChange={handleclicksChange} className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Number of  impressions</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={impressions} onChange={handleimpressionsChange} className='form-control' />
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
                                                                    Number of  clicks
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {clicks}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="row">
                                                                <div className='col-9 col-md-9'>
                                                                    Number of  impressions
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {impressions}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mb-2 mt-4' style={{ borderTop: '1px solid silver ' }}>
                                                            <div className="row mt-2">
                                                                <div className='col-9 col-md-9'>
                                                                    Click-Through Rate
                                                                </div>
                                                                <div className='col-3 col-md-3 ' style={{ fontWeight: '600' }}>  
                                                                    {
                                                                        ctr!="Infinity" && (
                                                                            <div> 
                                                                            <CountUp end={ctr} duration={1}/>%
                                                                            </div>
                                                                        )
                                                                    }
                                                                     {
                                                                        ctr=="Infinity" && (
                                                                            <div> 
                                                                              {ctr}%
                                                                            </div>
                                                                        )
                                                                    }
                                                                   
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
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>Click-through rate (CTR) is a vital metric used in online advertising and marketing campaigns to measure the effectiveness of an advertisement or a link in generating clicks relative to its impressions. It's expressed as a percentage and calculated by dividing the total number of clicks an ad receives by the total number of times it was shown (impressions), then multiplying by 100.</p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>CTR serves as a crucial performance indicator, showcasing the success of an ad in engaging its target audience. A higher CTR generally indicates that the ad is resonating well with viewers and compelling them to take action, such as clicking through to the desired destination—be it a website, landing page, or specific content. It reflects the relevance and attractiveness of the ad's content, creative elements, and placement.</p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>Marketers closely monitor CTR to assess the effectiveness of their campaigns, optimize ad content, targeting strategies, and placement. A low CTR might signify various issues, such as poor ad relevance, ineffective targeting, or unengaging creative elements, prompting advertisers to refine their approach to enhance engagement and drive better results in achieving their advertising objectives.</p>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <picture>
                        <img src="/tools/CTR.jpg" className='img-fluid' alt='open rate image' />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

