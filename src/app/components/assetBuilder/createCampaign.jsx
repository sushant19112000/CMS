"use client";
import { campaignState } from '@/app/atoms/campaign'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Select from 'react-select'
import { useRecoilState } from 'recoil'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
// const options = [
//     { value: '48604-01', label: '48604-01' },
//     { value: '48605-02', label: '48605-02' },
//     { value: '48606-02', label: '48606-02' }
// ]


export const CreateCampaign = ({ nextTab, clear }) => {
    const { data, error } = useSWR('/api/campaign', fetcher);
    const [options, setOptions] = useState([])
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [campaign, setCampaign] = useRecoilState(campaignState)
    const [alert, setAlert] = useState(false)
    const [codeForView, setCodeForView] = useState("")

    useEffect(() => {
        if (data && data.campaigns) {
            setOptions(data.campaigns);
        } else {
            setOptions([]);
        }
    }, [data]);

    useEffect(() => {
        setCodeForView(campaign.code)
    }, [campaign])

    const handleCodeChange = (selectedoption) => {
        const value = selectedoption.value
        setCode(value)
    }

    const handleNext = () => {
        if (code === "" && name === "") {
            setAlert(true)
        }
        setCampaign({ name: name, code: code })
        nextTab('downloadpage')
    }

    const handleClearSelection = () => {
        setCampaign({ name: '', code: '' });
        clear("campaign")
    };


    return (
        <div className="container">
            <div className="row justify-content-center">




                <div className="col-md-12">
                    <div className="text-center mb-3">
                        <h3 style={{ fontWeight: '900' }}>Campaign Selection</h3>
                    </div>
                    {
                        codeForView && (
                            <div >

                                <div className="d-flex">
                                    <div>
                                        Preview
                                    </div>
                                    <div className='ms-auto'>
                                        <button className='btn btn-danger' onClick={handleClearSelection}>Clear Data</button>

                                    </div>


                                </div>
                                <div>
                                    <span>Code:<span style={{ fontWeight: '900' }}>{codeForView}</span></span>

                                </div>
                                <hr></hr>
                            </div>

                        )
                    }
                    <div>
                        {alert && (
                            <>Fill one the select campaign or create campaign</>
                        )}
                    </div>
                    <div className='mb-4'>
                        <div className="row">
                            <div className="col-md-3">
                                <span>Select Campaign </span>
                            </div>
                            <div className="col">
                                <Select isClearable options={options} onChange={handleCodeChange} />

                            </div>
                        </div>
                    </div>


                    <div className='mb-3'>
                        Create campaign if its not in select
                    </div>
                    <div className="row mb-4">
                        <div className='col-md-3'>
                            Name
                        </div>
                        <div className="col">
                            <input className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className='col-md-3'>
                            Code
                        </div>
                        <div className="col">
                            <input className='form-control' value={code} onChange={(e) => setCode(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={handleNext}>Save & Next</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
