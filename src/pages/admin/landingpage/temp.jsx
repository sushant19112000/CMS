'use client';
import { useState, useEffect } from 'react'
import { formData2 } from '@/app/data/fromdata2';


function DataTable({ formData }) {
    const [data, setData] = useState(formData2);
    const [showInput, setShowInput] = useState(false)
    const [newData, setNewData] = useState({})
    const [id, setId] = useState("")
    const [label, setLabel] = useState("")
    const [type, setType] = useState("")
    const [option, setOption] = useState([])
    const [showOptionInput, setShowOptionInput] = useState(false)

    const toggleInput = () => {
        setShowInput(!showInput)
    }
    const toggleOtherInput = () => {
        setShowOptionInput(!showOptionInput)
    }

    const handleInputChange=(e,setState)=>{
        setState(e.target.value)
    }

    const resetStates=()=>{
        setId('')
        setLabel('')
        setOption([])
        setType('')
        setShowInput(false)
        setShowOptionInput(false)
    }

    const handleOptionChange = (e) => {
        if (e.key === 'Enter') {
            let o = e.target.value;
            let ob = { "value": o, "label": o };
            setOption(prevOptions => [...prevOptions, ob]);
            console.log(option);
        }
    }

    const handleAdd = () => {
        let newFormData;
        if (option!=[]) {
            newFormData = {
                "id": id,
                "type": type,
                "label": label,
                "options": option
            }
            console.log(newFormData,'new form data')
            setData(prevData => [...prevData, newFormData]);
            resetStates()
        }
        newFormData = {
            "id": id,
            "type": type,
            "label": label
        }
        setData(prevData => [...prevData, newFormData]);
        console.log(newFormData,'new form data without options')
        resetStates()
    };
    const handleDelete = (index) => {
        setData(prevData => prevData.filter((_, i) => i !== index));
    };
    const handleEdit = (index) => {
        console.log('Edit index:', index);
    };
    return (
        <div>
            <h2>Entries</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Field ID</th>
                        <th>Type</th>
                        <th>Label</th>
                        <th>Options</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((field, index) => (
                        <tr key={index}>
                            <td>{field.id}</td>
                            <td>{field.type}</td>
                            <td>{field.label}</td>
                            <td>
                                {field.type === 'select' && field.options && (
                                    <ul>
                                        {field.options.map(option => (
                                            <li key={option.value}>{option.label}</li>
                                        ))}
                                    </ul>
                                )}
                            </td>
                            <td>
                                {field.type === 'select' && field.options && (
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                )}
                                <button className="mt-2" onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                    {
                        showInput && (
                            <tr>
                                <td><input style={{ width: '70%' }} onChange={(e)=>handleInputChange(e,setId)} value={id} placeholder={id} /></td>
                                <td><input style={{ width: '70%' }} onChange={(e)=>handleInputChange(e,setType)} value={type} placeholder={type} /></td>
                                <td><input style={{ width: '70%' }} onChange={(e)=>handleInputChange(e,setLabel)} value={label} placeholder={label} /></td>
                                <td>
                                    {type === 'select' && (
                                        <>
                                            {option.length > 0 && option.map((opt, index) => (
                                                <div key={index}>{opt.label}</div>
                                            ))}
                                            
                                            <button onClick={toggleOtherInput}>+</button>
                                            {
                                                showOptionInput && (
                                                    <input style={{ width: '70%' }} onKeyDown={handleOptionChange} />
                                                )
                                            }

                                        </>
                                    )}
                                </td>
                                <td>
                                    <button onClick={handleAdd}>Save</button>

                                </td>
                                <td>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button onClick={toggleInput}>Add Entry</button>
        </div>
    );
}

export default function LandingPages() {
    return (
        <div className="">
            Landing Page Post
            <DataTable formData={formData2} />
        </div>
    )
}

