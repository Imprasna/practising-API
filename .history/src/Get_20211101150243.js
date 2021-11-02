import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Get = () =>
{
    const [getPost, setGetPost] = useState([{}]);

    // useEffect = (() =>
    // {
    //     GetData();
    // }, []);

    
    const getData = async () =>
    {
        try {
            const res = await axios.get('http://api.weatherapi.com/v1/current.json?key=b572a200fc624a6a85671436211310&q=Coimbatore&aqi=yes')   
            console.log(res.data.current);
            console.log(res.data.location);
            console.log(res.data);
            setGetPost({res});
        }
        catch (err) {
            
            console.log(err);
        }
    }

    return (
        <div>
            <h1>This is from Get.js</h1>
            <button onClick={getData}>Start</button>
            return (
            
            )
            <p>{getPost.data }</p>
            {/* <p>{getPost.map((i) =>
            {
                return (
                    <p>{i }</p>
                )
            })}</p> */}
        </div>
    )
}

export default Get;
