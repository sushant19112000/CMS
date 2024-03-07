import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const DynamicForm3 = ({ data, landingpageurl, downloadpageurl }) => {
    const router = useRouter();
    const [formData, setFormData] = useState(data);
    const [formValues, setFormValues] = useState({});
    const handleInputChange = (fieldName, value) => {
        setFormValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };
    const postData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/landingpage/${landingpageurl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            if (response.status == 200) {
                router.push(`/dp/${downloadpageurl}`);
                setFormValues({});
            } else {
                console.error('Form submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }
    return (
        <div className='col-md-7'>
            <h4 className='mb-2'>Please fill out the form below to download.</h4>
            <form onSubmit={(e) => postData(e)}>
                {formData.normalFields && formData.normalFields.map(field => (
                    <div key={field.id} className='mb-2'>
                        <div className="">

                            {field.type === 'text' && (
                                <>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label htmlFor={field.id}>{field.label}</label>
                                        </div>

                                        <div className="col">
                                            <input
                                                type="text"
                                                id={field.id}
                                                name={field.id}
                                                value={formValues[field.id] || ''}
                                                className='form-control'
                                                required
                                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {field.type === 'checkbox' && (
                                <>
                                    <div className="row">


                                        <div className="col-md-3">
                                            <label htmlFor={field.id}>{field.label}</label>
                                        </div>

                                        <div className="col">
                                            <input
                                                type="checkbox"
                                                id={field.id}
                                                name={field.id}
                                                className='form-check-input'
                                                required
                                                checked={formValues[field.id] || false}
                                                onChange={(e) => handleInputChange(field.id, e.target.checked)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {field.type === 'select' && (
                                <>
                                    <div className="row">

                                        <div className="col-md-3">
                                            <label htmlFor={field.id}>{field.label}</label>
                                        </div>
                                        <div className="col">


                                            <select
                                                id={field.id}
                                                name={field.id}
                                                className='form-select'
                                                value={formValues[field.id] || ''}
                                                required
                                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                                            >
                                                <option value="">Select an option</option>
                                                {field.options.map(option => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}


                {formData.specialFields && formData.specialFields.map(field => (
                    <>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <div key={field.id} className='mb-2'>
                            <div className="">

                                {field.type === 'text' && (
                                    <>
                                        <div className="">
                                            <div className="mb-2">
                                                <label htmlFor={field.id}>{field.label}</label>
                                            </div>

                                            <div className="">
                                                <input
                                                    type="text"
                                                    id={field.id}
                                                    name={field.id}
                                                    value={formValues[field.id] || ''}
                                                    className='form-control'
                                                    required
                                                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {field.type === 'checkbox' && (
                                    <>
                                        <div className="">


                                            <div className="mb-2">
                                                <label htmlFor={field.id}>{field.label}</label>
                                            </div>

                                            <div className="">
                                                <input
                                                    type="checkbox"
                                                    id={field.id}
                                                    name={field.id}
                                                    className='form-check-input'
                                                    required
                                                    checked={formValues[field.id] || false}
                                                    onChange={(e) => handleInputChange(field.id, e.target.checked)}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {field.type === 'select' && (
                                    <>
                                        <div className="">

                                            <div className="mb-2">
                                                <label htmlFor={field.id}>{field.label}</label>
                                            </div>
                                            <div className="">


                                                <select
                                                    id={field.id}
                                                    name={field.id}
                                                    className='form-select'
                                                    value={formValues[field.id] || ''}
                                                    required
                                                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                >
                                                    <option value="">Select an option</option>
                                                    {field.options.map(option => (
                                                        <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                ))}
                <button type='submit' >Submit</button>
            </form>
        </div>
    );
}

export default DynamicForm3;