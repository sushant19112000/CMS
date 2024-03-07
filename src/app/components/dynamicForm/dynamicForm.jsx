import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const DynamicForm=({data,landingpageurl,downloadpageurl})=>{
    const router = useRouter();
    const [formData, setFormData] = useState(data);
    const [formValues, setFormValues] = useState({});
  
    const handleInputChange = (fieldName, value) => {
      setFormValues(prevState => ({
        ...prevState,
        [fieldName]: value
      }));
    };
    
    const postData=async()=>{
        console.log(formValues,'formvalues')
        try {
            const response = await fetch(`/api/landingpage/${landingpageurl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            if (response.status==200) {
                 setFormValues({});
                 router.push(`/dp/${downloadpageurl}`);               
            } else {
                console.error('Form submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    }
   
  
   
    return (
     <div>
        {formData.map(field => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                id={field.id}
                name={field.id}
                value={formValues[field.id] || ''}
                className='form-input'
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {field.type === 'checkbox' && (
              <input
                type="checkbox"
                id={field.id}
                name={field.id}
                className='form-input'
                checked={formValues[field.id] || false}
                onChange={(e) => handleInputChange(field.id, e.target.checked)}
              />
            )}
            {field.type === 'select' && (
              <select
                id={field.id}
                name={field.id}
                className='form-select'
                value={formValues[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              >
                <option value="">Select an option</option>
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button onClick={postData} >Submit</button>
        </div>
    );
  }
  
  export default DynamicForm;