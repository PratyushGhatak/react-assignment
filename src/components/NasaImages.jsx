import axios from "axios";
import React, { useEffect, useState } from "react";

const NasaImages = (props) => {
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
  const [data, setData] = useState([]);
  const getDataFromNasaApi = async () => {
    try {
      const res = await axios.get(URL);
      if (res.data.photos) {
        setData(res.data.photos);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getDataFromNasaApi();
  }, []);

  return (
    <div className="">
      {data.length > 0 && <h2>List of Images from Nasa</h2>}
      {data?.map((el) => (
        <div className="">
          <img src={el.img_src} loading="lazy" width={500} height={500} />
        </div>
      ))}
    </div>
  );
};

export default NasaImages;
