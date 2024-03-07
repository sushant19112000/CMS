import React, { useEffect } from 'react'
import { useState } from 'react'


export const ToolsTemplate = () => {
    const [opened, setOpened] = useState(0)
    const [clicked, setClicked] = useState(0)
    const [ctor, setCtor] = useState(0)
    const calculate = () => {
       const result=clicked / opened * 100;
       return result > 0.2 ? parseFloat(result.toFixed(2)) : NaN;

    }


    const handleclickedChange = (e) => {
        setClicked(e.target.value)

    }

    const handleopenedChange = (e) => {
        setOpened(e.target.value)

    }

    const handleOpenRate = () => {
        setOpenRate(calculate())
    }

    useEffect(() => {
        handleOpenRate()
    }, [clicked, opened])

    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-3" style={{ height: '750px' }}>

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
                                                    <span style={{ fontSize: '16px',fontWeight:'600' }}>Number of emails clicked</span>
                                                    <div className="col-md-12 mt-2">
                                                        <input type="number" value={clicked} onChange={handleclickedChange} className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="mt-4">

                                                    <span style={{ fontSize: '16px',fontWeight:'600'  }}>Number of emails opened</span>
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
                                                                <div className='col-9 col-md-9' style={{fontWeight:''}}>
                                                                    Number of emails clicked
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {clicked}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="row">
                                                                <div className='col-9 col-md-9'>
                                                                    Number of emials opened
                                                                </div>
                                                                <div className='col-3 col-md-3'>
                                                                    {opened}
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className='mb-2 mt-4' style={{ borderTop: '1px solid silver ' }}>
                                                            <div className="row mt-2">
                                                                <div className='col-9 col-md-9'>
                                                                    Open Rate 

                                                                </div>
                                                                <div className='col-3 col-md-3 ' style={{fontWeight:'600'}}>
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
                   

                    <div className="d-flex" style={{ color: 'black' }}>
                        <div className="mx-auto">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className='mt-3 mb-3'>
                        <img src="email-open-rate-calculation.png" className='img-fluid' alt='open rate image'/>

                    </div>

                    
                </div>
            </div>
        </div>
    )
}
