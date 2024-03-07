import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import useSWR from 'swr';
import NextLink from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());
function WhitepaperSearchComponent() {
    const { data, error } = useSWR('/api/whitepaper', fetcher);
    const [show, setShow] = useState(false);
    const [searchTerm, setsearchTerm] = useState("")
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (data) {
            const filteredData = data.filter(
                (blog) =>
                    blog.title.includes(searchTerm)
            );
            setFilteredData(filteredData);
        }
    }, [data, searchTerm]);
    const handleSearchChange = (e) => {
        setsearchTerm(e.target.value);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <input className='form-control' onClick={handleShow} placeholder='Search...' />

            <Modal show={show} onHide={handleClose} centered scrollable={true} >
                <Modal.Header closeButton>
                    <Modal.Title>  <input type="text" value={searchTerm}
                        onChange={handleSearchChange} className='form-control' placeholder='Search...' style={{ width: '440px' }} /></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ minHeight: '80vh', maxHeight: 'auto' }}>
                    {filteredData.map((blog) => (
                        <div className=" mb-2" key={blog.id}>
                            <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
                                <div className="">
                                    <NextLink href={`/blogs/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                                        <span className='mb-1' style={{ fontSize: '15px', fontWeight: 500 }}>{blog.title}</span>
                                    </NextLink>
                                    <p>
                                        A good UI kit can 10-100x your workow by saving you time and money usually spent on meticulously building the same components over and over again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WhitepaperSearchComponent;
