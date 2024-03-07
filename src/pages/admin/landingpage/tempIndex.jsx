import { useEffect, useState } from "react";
import DataTableComponent from './datatable';
import { formData3 } from '@/app/data/formdata3';


export default function Parent() {
    const [data, setData] = useState(formData3)
    const [commonFields, setCommonFields] = useState(data.normalFields)
    const [specialFields, setSpecialFields] = useState(data.specialFields)
    
    useEffect(() => {
        setData({"normalFields": commonFields,"specialFields": specialFields});
    }, [commonFields, specialFields]);

    useEffect(() => {
        console.log(data, 'datachanged main');
    }, [data]);

    const postData=()=>{
        //Call api to post the data
        console.log('api called')
    }
   
    const receiveDataFromChild = (dataChanged, typeOfField) =>{
        if (typeOfField==="commonFields"){
            setCommonFields(dataChanged)
        }
        if (typeOfField==="specialFields"){
            setSpecialFields(dataChanged)
            console.log(specialFields,'special fields changed')
        }
    }
    
    return (
        <>
            {
                commonFields.length > 0 && (
                    <DataTableComponent formData={commonFields} typeOfField="commonFields" sendDataToParent={receiveDataFromChild} />
                )
            }
            {
                specialFields.length > 0 && (
                    <DataTableComponent formData={specialFields} typeOfField="specialFields" sendDataToParent={receiveDataFromChild} />
                )
            }

            <button onClick={postData}>Create Page</button>
        </>

    )
}

