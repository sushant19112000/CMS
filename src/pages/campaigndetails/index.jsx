import { useState,useEffect } from "react";

const temp = [
    { name: 'Event 3', date: new Date('2023-03-05') },
    { name: 'Event 2', date: new Date('2023-01-15') },
    { name: 'Event 1', date: new Date('2022-12-20') }
];


export default function CampaignDetails() {
    const [data, setData] = useState(temp);
    const [tempName,setTempName]=useState("")

    const handleNameChange = (newName) => {
        setTempName(newName)
    };


    const editData = (index) => {
        const updatedEvents = [...data];
        updatedEvents[index] = {
            ...updatedEvents[index],
            name:tempName,
            date: new Date(),
        };
        setData(updatedEvents);
        setTempName("")
    };

    useEffect(() => {
        let newdata = [...data].sort((a, b) => b.date-a.date);
        setData(newdata);
    }, [data]);

    return (
        <>
            <div className="col-md-5">
                <h2>Event List</h2>
                <ul>
                    {data.map((event, index) => (
                        <li key={index}>

                            <div className="row mb-2">
                                <div className="col-md-3">
                                    <span>{event.date.toLocaleString()}</span>
                                </div>

                                <div className="col-md-3">
                                    <span className="">{event.name}</span>
                                </div>
                                <div className="col-md-3">
                                    <input className="form-control"   onChange={(e) => handleNameChange(e.target.value)} />
                                </div>

                                <div className="col-md-3">
                                    <button style={{height:'30px'}} onClick={() => editData(index)} >Save</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
