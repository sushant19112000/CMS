import React from 'react'

export const CalcultorTemplate = ({Title, v1, v2, v3}) => {
  return (
    <div className="row justify-content-center mt-4 mb-4">
    <div className="col-md-10" style={{}}>
        <div className="m-2">
            <div className=''>
                <h4 style={{ fontWeight: '600' }}>{Title}</h4>
            </div>
            <div>
                <button className='text-start' style={{ backgroundColor: '#42454a', width: '100%', color: 'white', height: '40px', fontSize: '20px' }}>Notes(Click to expand)</button>
            </div>
            <div className='mt-2'>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                    Select a channel (Optional)
                </span>

                <div className="mt-2">
                    <div className="d-flex mb-2">
                        <div className='me-2'>
                            <input type='radio' name="channel" style={{ height: '20px', width: '20px' }} />
                        </div>
                        <div>
                            <span style={{ fontWeight: '400' }}>B2B</span>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className='me-2'>
                            <input type='radio' name="channel" style={{ height: '20px', width: '20px' }} />
                        </div>
                        <div>
                            <span style={{ fontWeight: '400' }}>B2C</span>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className='me-2'>
                            <input type='radio' name="channel" style={{ height: '20px', width: '20px' }} />
                        </div>
                        <div>
                            <span style={{ fontWeight: '400' }}>Charity/Non Profit</span>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div className='me-2'>
                            <input type='radio' name="channel" style={{ height: '20px', width: '20px' }} />
                        </div>
                        <div>
                            <span style={{ fontWeight: '400' }}>Other Please Specify</span>
                        </div>
                    </div>
                </div>

                <div className="mt-2 row">
                    <div className="col-md-6">
                        <span style={{ fontSize: '16px', fontWeight: '600' }}>Which industry is this for? (optional)</span>
                        <div className="col-md-6">
                            <select className='form-select h-80'>
                                <option value="Not Set">Not Set</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <span style={{ fontSize: '16px', fontWeight: '600' }}>Select a Country (optional)</span>
                        <div className="col-md-6">
                            <select className='form-select h-80'>
                                <option value="">Select...</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-4 row justify-content-center"  style={{ color: 'white' }}>      
                        <div className="col-4 col-md-4" >
                            <div className="d-flex">
                                <div className="p-4" style={{ backgroundColor: 'rgb(66, 69, 74)' }}>
                                    <span style={{ fontSize: '16px' }}>{v1}</span>
                                    <div className="col-md-6">
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-4">
                            <div className="d-flex">
                                <div className="p-4" style={{ backgroundColor: 'rgb(66, 69, 74)' }}>
                                    <span style={{ fontSize: '16px' }}>{v2}</span>
                                    <div className="col-md-6">
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-4">
                            <div className="d-flex">
                                <div className="p-4" style={{ backgroundColor: 'rgb(66, 69, 74)' }}>
                                    <span style={{ fontSize: '16px' }}>{v3}</span>
                                    <div className="col-md-6">
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>

                <div className="row mt-4">
                    <div className="col-md-6 mb-2">
                        <div className="d-flex">
                            <div className="mx-auto">
                                <button className='btn' style={{ backgroundColor: 'rgb(66, 69, 74)', width: '200px', color: 'white' }}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="d-flex">
                            <div className="mx-auto">
                                <button className='btn' style={{ backgroundColor: 'red', width: '200px', color: 'white' }}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
</div>
  )
}
