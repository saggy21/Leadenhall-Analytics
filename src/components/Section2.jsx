"use client";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Section2 = () => {
  const [data, setData] = useState([]);

  const [category, setCategory] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [],
    },
  });

  const [data2, setData2] = useState([
    {
      name: "series-1",
      data: [],
    },
  ]);

  const [selectedField, setSelectedField] = useState("GWP");

  const [selectedPlannedField, setSelectedPlannedField] =
    useState("Planned GWP");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = require("../data/data.json");
        setData2(response);
        setData(response);

        const categories = [];
        const values = [];

        for (const item of response) {
          categories.push(item[selectedField]);
          values.push(item[selectedPlannedField]);
        }

        setCategory({
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: categories,
          },
        });

        setData2([
          {
            name: "series-1",
            data: values,
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedField, selectedPlannedField]);

  // --------------------------------------------------------------
  // Function to generate data for the bar chart
  const generateChartData = () => {
    const combinedData = combineMarketData(data);
    const top10Combined = sortBrokersByGWP(combinedData).slice(0, 10);

    const categories = top10Combined.map((broker) => broker["Broker Name"]);
    const openMarketGWP = top10Combined.map(
      (broker) => broker["Open Market GWP"] || 0
    );
    const facilitiesGWP = top10Combined.map(
      (broker) => broker["Facilities GWP"] || 0
    );
    const combinedGWP = top10Combined.map(
      (broker) => broker["Combined GWP"] || 0
    );

    return { categories, openMarketGWP, facilitiesGWP, combinedGWP };
  };

  // Function to combine data for each broker across Open Market and Facilities
  const combineMarketData = (data) => {
    const combinedData = {};

    data.forEach((item) => {
      const brokerName = item["Broker Name"];
      const marketType = item["Market Type"];
      const gwp = item["GWP"] || 0;

      if (!combinedData[brokerName]) {
        combinedData[brokerName] = {
          "Broker Name": brokerName,
          "Open Market GWP": 0,
          "Facilities GWP": 0,
          "Combined GWP": 0,
        };
      }

      if (marketType === "Open Market") {
        combinedData[brokerName]["Open Market GWP"] += gwp;
      } else if (marketType === "Facilities") {
        combinedData[brokerName]["Facilities GWP"] += gwp;
      }
    });

    // Calculate combined GWP
    Object.values(combinedData).forEach((broker) => {
      broker["Combined GWP"] =
        broker["Open Market GWP"] + broker["Facilities GWP"];
    });

    return Object.values(combinedData);
  };

  // Function to sort brokers based on GWP
  const sortBrokersByGWP = (data) => {
    return data.sort((a, b) => b["Combined GWP"] - a["Combined GWP"]);
  };

  // Options for bar chart
  const barOptions = {
    chart: {
      id: "bar-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: generateChartData().categories,
    },
    yaxis: {
      title: {
        text: "GWP",
      },
    },
  };
  // --------------------------------------------------------------

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handlePlannedFieldChange = (event) => {
    setSelectedPlannedField(event.target.value);
  };

  const pieOptions = {
    labels: category.xaxis.categories,
  };

  const pieSeries = data2[0].data;

  return (
    <>
      <div className="w-[100%]   lg:ml-24 justify-center mx-auto lg:p-14 grid grid-cols-1 ">
        <div className="text-center">
          <h2 className="font-bold text-2xl">Top 10 Brokers Comparison</h2>
          <Chart
            className="border-2 backdrop-blur-xl backdrop-brightness-100 bg-white/30"
            options={barOptions}
            series={[
              { name: "Open Market", data: generateChartData().openMarketGWP },
              { name: "Facilities", data: generateChartData().facilitiesGWP },
              { name: "Combined", data: generateChartData().combinedGWP },
            ]}
            type="bar"
            height={400}
          />
        </div>
      </div>

      <div className="w-[100%] py-12 justify-center mx-auto lg:p-14 ">
        <div className="flex lg:w-[100%] mx-auto justify-center">
          {/* <label className="" htmlFor="field ">Select Field:</label> */}
          <select
            id="field"
            className="border-2 p-4 mx-16 rounded-2xl"
            onChange={handleFieldChange}
            value={selectedField}
          >
            <option value="Year">Year</option>
            <option value="Broker Name">Broker Name</option>
            <option value="GWP">GWP</option>
            <option value="Market Type">Market Type</option>
            <option value="output">Output</option>
          </select>

          <select
            className="border-2 p-4 mx-16 rounded-2xl"
            id="plannedField"
            onChange={handlePlannedFieldChange}
            value={selectedPlannedField}
          >
            <option value="Year">Year</option>
            <option value="Planned GWP">Planned GWP</option>
            <option value="output">Output</option>
          </select>
        </div>

        {/* <div className="grid lg:ml-24 justify-center text-black sm:grid-1 md:mb-12 md:grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-2 lg:gap-x-2"> */}
        <div className="w-[100%]  lg:ml-24 justify-center mx-auto gap-4 lg:p-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
          <Chart
            className=" backdrop-blur-xl backdrop-brightness-100 bg-white/30 "
            height={305}
            options={category}
            series={data2}
            type="bar"
          />
          <Chart
            className=" backdrop-blur-xl backdrop-brightness-100 bg-white/30"
            height={305}
            options={category}
            series={data2}
            type="line"
          />
          <Chart
            className=" backdrop-blur-xl backdrop-brightness-100 bg-white/30"
            height={305}
            options={category}
            series={data2}
            type="area"
          />
          <Chart
            className=" backdrop-blur-xl backdrop-brightness-100 bg-white/30"
            height={305}
            options={pieOptions}
            series={pieSeries}
            type="pie"
          />
        </div>
      </div>
    </>
  );
};

export default Section2;
