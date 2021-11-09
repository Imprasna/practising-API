import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import Country from './component/Country';
import Region from './component/Region';
import Time from './component/Time';
import Continent from './component/Continent';
import District from './component/District';
import Cloud from './component/Cloud';
import UpdatedWeather from './component/UpdatedWeather';
import Celcius from './component/Celcius';
import Farenheit from './component/Farenheit';
import Latitude from './component/Latitude';
import Longitude from './component/Longitude';
import Condition from './component/Condition';
import Icon from './component/Icon';

const Get = () =>
{
    const [getPost, setGetPost] = useState([]);
    const [values, setValues] = useState({cities: ''});

    React.useEffect = (() =>
    {
        getData();

        const CName = () => {
            setGetPost(getPost);
        }
        CName();
    }, []);

    
    
    const getData = async () =>
    {
        const city = values.cities;
        try {
            const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b572a200fc624a6a85671436211310&q=${city}&aqi=yes`)   
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

    const onChangeHandler= (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // here values is the state name
        let inputValues = values;
        inputValues[name] = value;
        setValues({...inputValues});
    }

    return (
        <>
            <input type="text" value={values.cities} name="cities" onChange={(e)=>onChangeHandler(e)} /> 
            <button onClick={getData}>Submit</button>
        
        <div>
            {/* <h1>Data from Location</h1>
            <p>{ getPost != null && getPost.location != null && getPost.location.name != null && getPost.location.name ? getPost.location.name : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.region != null && getPost.location.region ? getPost.location.region : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.localtime != null && getPost.location.localtime ? moment(getPost.location.localtime).format('LLLL') : undefined }</p>
            <p>{ getPost != null && getPost.location != null && getPost.location.tz_id != null && getPost.location.tz_id ? getPost.location.tz_id : undefined }</p>
            <p>{getPost != null && getPost.location != null && getPost.location.country != null && getPost.location.country ? getPost.location.country : undefined}</p> */}
            
            <h1>Data from Current</h1>
            {/* <button onClick={getData}>Start</button> */}
            <p>{ getPost != null && getPost.current != null && getPost.current.humidity != null && getPost.current.humidity ? getPost.current.humidity : undefined }</p>
            <p>{ getPost != null && getPost.current != null && getPost.current.last_updated != null && getPost.current.last_updated ? moment(getPost.current.last_updated).format('LLLL') : undefined }</p>
            <p>{ getPost != null && getPost.current != null && getPost.current.wind_dir != null && getPost.current.wind_dir ? getPost.current.wind_dir : undefined }</p>
            <p>{ getPost != null && getPost.current != null && getPost.current.temp_c != null && getPost.current.temp_c ? getPost.current.temp_c : undefined } C</p>
            <p>{ getPost != null && getPost.current != null && getPost.current.temp_f != null && getPost.current.temp_f ? getPost.current.temp_f : undefined } F</p>
            <p>{ getPost != null && getPost.current != null && getPost.current.condition.text != null && getPost.current.condition.text ? getPost.current.condition.text : undefined }</p>
            <p> <img src={ getPost != null && getPost.current != null && getPost.current.condition != null && getPost.current.condition ? getPost.current.condition.icon : undefined }></img> </p>
            {/* <p>{getPost.map((i) =>
            {
                return (
                    <p>{i }</p>
                )
            })}</p> */}

            <Country CName={ getPost } />
                <Region CName={getPost} />
                <Time CName={getPost} />
                <Continent CName={getPost} />
                <District CName={getPost} />
                <Latitude CName={getPost} />
                <Longitude CName={getPost} />
                <Cloud CName={getPost} />
                <UpdatedWeather CName={getPost} />
                <Celcius CName={getPost} />
                <Farenheit CName={getPost} />
                <Condition CName={getPost} />
                <Icon CName={getPost} />

                
        </div>
        </>
    )
}

export default Get;
