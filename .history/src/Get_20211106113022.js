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
            // console.log(res.data.current);
            // console.log(res.data.location);
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
            <h1>Data from Location</h1>
            <button onClick={getData}>Start</button>
            <p>{ getPost != null && getPost.location != null && getPost.location.name != null && getPost.location.name ? getPost.location.name : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.region != null && getPost.location.region ? getPost.location.region : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.localtime != null && getPost.location.localtime ? getPost.location.localtime : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.tz_id != null && getPost.location.tz_id ? getPost.location.tz_id : undefined }</p>
            <p>{getPost != null && getPost.location != null && getPost.location.country != null && getPost.location.country ? getPost.location.country : undefined}</p>
            
            <h1>Data from Current</h1>
            <button onClick={getData}>Start</button>
            <p>{ getPost != null && getPost.current != null && getPost.current.humidity != null && getPost.current.humidity ? getPost.current.humidity : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.last_updated != null && getPost.location.last_updated ? getPost.location.last_updated : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.localtime != null && getPost.location.localtime ? getPost.location.localtime : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.tz_id != null && getPost.location.tz_id ? getPost.location.tz_id : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.country != null && getPost.location.country ? getPost.location.country : undefined }</p>
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
