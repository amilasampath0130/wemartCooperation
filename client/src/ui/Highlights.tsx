import React, { useEffect, useState } from "react";
import Container from "./Container";
import { getData } from "../lib";
import { config } from "../../config";
import { HighlightsType } from "../../type";
import { Link } from "react-router-dom";

const Highlights = () => {
  const [highlightsData, setHighlightsData] = useState<HighlightsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/highlights`;
      try {
        const data = await getData(endpoint);
        setHighlightsData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="w-full max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlightsData.map((item) => (
          <div
            key={item?._id}
            className="relative flex items-center h-60 sm:h-52 md:h-48 lg:h-60 bg-gray-100 rounded-lg shadow-md cursor-pointer overflow-hidden group"
          >
            {/* Image (Left Side, Smaller) */}
            <div className="w-1/3 h-full overflow-hidden rounded-l-lg">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item?.image})`,
                }}
              ></div>
            </div>

            {/* Text Content (Right Side) */}
            <div className="w-2/3 p-6 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-logoRed">
                  {item?.name}
                </h3>
                <p className="text-sm md:text-base lg:text-lg font-bold mt-2 text-white bg-logoBack py-1 px-2 inline-block rounded">
                  {item?.title}
                </p>
              </div>
              <Link
                to={item?._base}
                className="text-sm md:text-base lg:text-lg hover:underline font-bold text-logoBlue"
              >
                {item?.buttonTitle}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Highlights;
