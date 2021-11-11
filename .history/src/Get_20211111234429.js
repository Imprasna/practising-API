import React, { useState } from "react";
import axios from "axios";
// import moment from 'moment';
import Country from "./component/Country";
import Region from "./component/Region";
import Time from "./component/Time";
import Continent from "./component/Continent";
import District from "./component/District";
import Cloud from "./component/Cloud";
import UpdatedWeather from "./component/UpdatedWeather";
import Celcius from "./component/Celcius";
import Farenheit from "./component/Farenheit";
import Latitude from "./component/Latitude";
import Longitude from "./component/Longitude";
import Condition from "./component/Condition";
import Icon from "./component/Icon";
import Humidity from "./component/Humidity";
import WindDirection from "./component/WindDirection";
import WindSpeed from "./component/WindSpeed";
import Uv from "./component/Uv";
import "./component/style.css";
import CircularProgress from '@mui/material/CircularProgress';


const Get = () => {
	const [getPost, setGetPost] = useState([]);
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useState({ cities: "" });

	React.useEffect =
		(() => {
			getData();

			const CName = () => {
				setGetPost(getPost);
			};
			CName();
		},
		[]);

		const getData = async () =>
		{
		const city = values.cities;
		try {
			const res = await axios.get(
				`http://api.weatherapi.com/v1/current.json?key=b572a200fc624a6a85671436211310&q=${city}&aqi=yes`
			);
			// console.log(res.data.current);
			// console.log(res.data.location);
			setGetPost(res.data);
			setLoading(true);
			console.log(getPost);
			// console.log(res.data.current);
			// setGetPost({res});
		} catch (err) {
			console.log(err);
		}
	};
	console.log(getPost);

	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		// here values is the state name
		let inputValues = values;
		inputValues[name] = value;
		setValues({ ...inputValues });
	};

	return (
		<>
			<input
				className="search-box"
				type="text"
				value={values.cities}
				name="cities"
				onChange={(e) => onChangeHandler(e)}
			/>
			<button className="button" onClick={getData}>
				Submit
			</button>

			<div className="whole">
				<div className="Country">
					{loading ? (<Country CName={getPost} />) : (<CircularProgress />)}					
					<h1>Country</h1>
				</div>

				<div className="region">
				{loading ? () : (<CircularProgress />) }
					<h1>State</h1>
					<Region CName={getPost} />
				</div>

				<div className="time">
				{loading ? () : (<CircularProgress />) }
					<h1>Day / Time</h1>
					<Time CName={getPost} />
				</div>

				<div className="continent">
				{loading ? () : (<CircularProgress />) }
					<h1>Continent</h1>
					<Continent CName={getPost} />
				</div>

				<div className="district">
				{loading ? () : (<CircularProgress />) }
					<h1>District</h1>
					<District CName={getPost} />
				</div>

				<div className="lat">
				{loading ? () : (<CircularProgress />) }
					<h1>Latitude</h1>
					<Latitude CName={getPost} />
				</div>

				<div className="lon">
				{loading ? () : (<CircularProgress />) }
					<h1>Longitude</h1>
					<Longitude CName={getPost} />
				</div>

				<div className="cloud">
				{loading ? () : (<CircularProgress />) }
					<h1>Cloud (oktas)</h1>
					<Cloud CName={getPost} />
				</div>

				<div className="upt">
				{loading ? () : (<CircularProgress />) }
					<h1>Info Updated on</h1>
					<UpdatedWeather CName={getPost} />
				</div>

				<div className="cel">
				{loading ? () : (<CircularProgress />) }
					<h1>Celcius</h1>
					<Celcius CName={getPost} />
				</div>

				<div className="far">
				{loading ? () : (<CircularProgress />) }
					<h1>Farenheit</h1>
					<Farenheit CName={getPost} />
				</div>

				<div className="cond">
				{loading ? () : (<CircularProgress />) }
					<h1>Condition</h1>
					<Condition CName={getPost} />
				</div>

				<div className="icon">
				{loading ? () : (<CircularProgress />) }
					<h1>Icon</h1>
					<Icon CName={getPost} />
				</div>

				<div className="hum">
				{loading ? () : (<CircularProgress />) }
					<h1>
						Humidity (<sup>g.m-3</sup>)
					</h1>
					<Humidity CName={getPost} />
				</div>


				<div className="wd">
				{loading ? () : (<CircularProgress />) }
					<h1>Wind Direction</h1>
					<WindDirection CName={getPost} />
				</div>

				<div className="ws">
				{loading ? (<WindSpeed CName={getPost} />) : (<CircularProgress />) }
					<h1>
						Wind Speed (<sup>kph</sup>)
					</h1>
					
				</div>

				<div className="uv">
				{loading ? (<Uv CName={getPost} />) : (<CircularProgress />) }
					<h1>
						UV Ray (<sup>mW/cm2</sup>)
					</h1>
					
				</div>
			</div>
		</>
	);
};

export default Get;
