import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);

    useEffect(() => {

        if (playOnce) {

            axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
                .then((res) => {
                    setData(res.data);
                    setPlayOnce(false);
                });

        }
        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);

            const sortedArray = countryObj.sort((a, b) => {

                return b.population - a.population;
            });
            sortedArray.lenght = rangeValue;
            setSortedData(sortedArray);
        };
           sortedCountry();
       },
        [data,rangeValue,playOnce]);

    return (
        <div className="countries">
            <ul className="countries-list">
                {sortedData.map((country) =>
                (
                    <Card country={country} key={country.name} />

                ))}
            </ul>
        </div>
    );
};

export default Countries;