import React, {useState} from 'react';
import axios from 'axios';

const Get = () =>
{
    const [getPost, setGetPost] = useState([]);

    React.useEffect = (() =>
    {
        getData();
    }, []);

    
    const getData = async () =>
    {
        try {
            const res = await axios.get('http://api.weatherapi.com/v1/current.json?key=b572a200fc624a6a85671436211310&q=Coimbatore&aqi=yes')   
            console.log(res.data.current);
            console.log(res.data.location);
            setGetPost(res.data);
            console.log(getPost);
            // console.log(res.data.current);
            // setGetPost({res});
        }
        catch (err) {
            
            console.log(err);
        }
    }
    console.log(getPost);

    return (
        <div>
            <h1>This is from Get.js</h1>
            <button onClick={getData}>Start</button>
            <p>{ getPost != null && getPost.location != null && getPost.location.name != null ? getPost.location.name :}</p>
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
