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
            setGetPost({rescurrent});
        }
        catch (err) {
            
            console.log(err);
        }
    }

    return (
        <div>
            <h1>This is from Get.js</h1>
            <button onClick={getData}>Start</button>
            <p>{getPost.data}</p>
        </div>
    )
}

export default Get;
