import { useState } from 'react';

export default function FormDisplay(props) {
    const [data, setData] = useState({
        fname: 'Vijay',
        lname: 'Anand',
        email: 'vijayanand2k20@gmail.com',
    });
    const fnamechangeHandler = (element) => {
        setData({
            ...data, 
            fname: element.target.value
        })
    }
    return (
        <>
            <h1>Form Display</h1>
            <input type="text" onChange={fnamechangeHandler}/>
            <input type="text" onChange={(element) => {
                setData({
                    ...data, 
                    lname: element.target.value
                })
            }}
            />
            <input type="email" onChange={(element) => {
                setData({
                    ...data, 
                    email: element.target.value
                })
            }}
            />
            <h2>{ data.fname } {data.lname} ({data.email})</h2>
        </>
    );
}