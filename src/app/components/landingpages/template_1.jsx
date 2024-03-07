import React from 'react';

export const Template_1 = ({Title, TitleBackgroundColor, Content, FormDetails }) => {
    
    return (
        <>
            <div className='container'>
                <div className="row  justify-content-center">
                    <div className="col-md-10 mt-4 mb-4">

                        <div className="text-center p-3" style={{ backgroundColor: `${TitleBackgroundColor}` }}>
                            <h1>{Title}</h1>
                        </div>

                        <div className="row m-3" style={{ fontSize: '16px' }}>
                            <div className="col-md-5">
                              <div dangerouslySetInnerHTML={{ __html: Content }} />
                            </div>

                            <div className="col-md-7" style={{ fontSize: '16px' }}>
                                {FormDetails.map((value, index) => (
                                    <div key={index} className="row mb-2">
                                        <div className="col-md-2  mb-1 mb-md-0">
                                            {value}
                                        </div>
                                        <div className='col'>
                                            <input className='form-control' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
