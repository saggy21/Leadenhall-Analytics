"use client"
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// import Chart from "react-apexcharts";


const jsonData = [
  // Your JSON data here
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "33,94,741",
    "Earned Premium": "9,97,433",
    "GWP": "12,96,662"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "31,76,909",
    "Earned Premium": "2,86,415",
    "GWP": "3,72,339"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "7,53,794",
    "Earned Premium": "20,313",
    "GWP": "26,407"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "12,33,886",
    "Earned Premium": "9,64,000",
    "GWP": "12,53,199"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "42,74,607",
    "Earned Premium": "1,81,602",
    "GWP": "2,36,082"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "27,63,863",
    "Earned Premium": "5,54,720",
    "GWP": "7,21,136"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "5,47,030",
    "Earned Premium": "1,13,394",
    "GWP": "1,47,412"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "34,27,263",
    "Earned Premium": "7,81,318",
    "GWP": "10,15,714"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "20,27,759",
    "Earned Premium": "3,23,575",
    "GWP": "4,20,648"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "97,834",
    "Earned Premium": "3,37,040",
    "GWP": "4,38,151"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "2,20,407",
    "Earned Premium": "8,03,516",
    "GWP": "10,44,571"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "18,59,327",
    "Earned Premium": "6,89,803",
    "GWP": "8,96,744"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "28,03,088",
    "Earned Premium": "46,883",
    "GWP": "60,948"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "26,97,379",
    "Earned Premium": "6,06,219",
    "GWP": "7,88,084"
  },
  {
    "Year": 2021,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "49,46,601",
    "Earned Premium": "3,09,120",
    "GWP": "4,01,855"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "17,33,388",
    "Earned Premium": "3,77,211",
    "GWP": "4,90,375"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "30,00,811",
    "Earned Premium": "6,37,997",
    "GWP": "8,29,396"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "15,51,108",
    "Earned Premium": "2,83,450",
    "GWP": "3,68,485"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "23,35,509",
    "Earned Premium": "2,35,217",
    "GWP": "3,05,782"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "24,57,146",
    "Earned Premium": "2,12,852",
    "GWP": "2,76,707"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "2,16,132",
    "Earned Premium": "5,03,653",
    "GWP": "6,54,749"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "24,20,383",
    "Earned Premium": "4,77,959",
    "GWP": "6,21,347"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "44,10,724",
    "Earned Premium": "6,57,029",
    "GWP": "8,54,137"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "20,27,745",
    "Earned Premium": "6,75,687",
    "GWP": "8,78,393"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "36,47,362",
    "Earned Premium": "5,94,016",
    "GWP": "7,72,221"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "22,13,853",
    "Earned Premium": "3,91,492",
    "GWP": "5,08,940"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "22,15,647",
    "Earned Premium": "8,39,810",
    "GWP": "10,91,753"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "31,16,710",
    "Earned Premium": "69,643",
    "GWP": "90,536"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "12,26,781",
    "Earned Premium": "9,26,341",
    "GWP": "12,04,243"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "7,28,337",
    "Earned Premium": "91,425",
    "GWP": "1,18,852"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "11,55,300",
    "Earned Premium": "6,88,570",
    "GWP": "8,95,141"
  },
  {
    "Year": 2021,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "9,01,923",
    "Earned Premium": "7,32,525",
    "GWP": "9,52,282"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "4,77,836",
    "Earned Premium": "6,04,961",
    "GWP": "6,21,187"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "7,44,666",
    "Earned Premium": "4,56,007",
    "GWP": "9,68,066"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "5,35,143",
    "Earned Premium": "3,50,677",
    "GWP": "6,95,686"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "2,66,430",
    "Earned Premium": "2,65,856",
    "GWP": "3,46,359"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "5,45,661",
    "Earned Premium": "7,04,725",
    "GWP": "7,09,360"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "70,097",
    "Earned Premium": "4,63,657",
    "GWP": "91,125"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "6,14,613",
    "Earned Premium": "93,895",
    "GWP": "7,98,997"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "5,75,902",
    "Earned Premium": "6,71,804",
    "GWP": "7,48,673"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "2,84,195",
    "Earned Premium": "1,82,719",
    "GWP": "3,69,454"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "3,82,158",
    "Earned Premium": "9,37,773",
    "GWP": "4,96,805"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "5,85,380",
    "Earned Premium": "5,33,444",
    "GWP": "7,60,994"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "4,34,169",
    "Earned Premium": "2,99,001",
    "GWP": "5,64,420"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "Crime",
    "Business Plan": "6,98,735",
    "Earned Premium": "3,22,340",
    "GWP": "9,08,356"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "FIPI",
    "Business Plan": "1,01,695",
    "Earned Premium": "67,276",
    "GWP": "1,32,203"
  },
  {
    "Year": 2022,
    "Class of Business": "Financial Institution",
    "ClassType": "D&O",
    "Business Plan": "8,90,532",
    "Earned Premium": "6,11,878",
    "GWP": "11,57,691"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "3,93,736",
    "Earned Premium": "50,607",
    "GWP": "5,11,857"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "26,155",
    "Earned Premium": "2,01,318",
    "GWP": "34,001"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "8,80,534",
    "Earned Premium": "3,91,246",
    "GWP": "11,44,694"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "4,19,011",
    "Earned Premium": "8,16,784",
    "GWP": "5,44,714"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "1,44,535",
    "Earned Premium": "3,30,032",
    "GWP": "1,87,895"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "9,06,945",
    "Earned Premium": "7,78,406",
    "GWP": "11,79,029"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "4,50,145",
    "Earned Premium": "2,60,897",
    "GWP": "5,85,189"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "9,04,679",
    "Earned Premium": "3,13,715",
    "GWP": "11,76,083"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "6,29,789",
    "Earned Premium": "6,43,565",
    "GWP": "8,18,726"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "1,19,251",
    "Earned Premium": "2,80,734",
    "GWP": "1,55,026"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "7,68,374",
    "Earned Premium": "5,98,304",
    "GWP": "9,98,887"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "4,00,844",
    "Earned Premium": "7,56,721",
    "GWP": "5,21,097"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "6,09,807",
    "Earned Premium": "4,72,576",
    "GWP": "7,92,749"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "3,84,931",
    "Earned Premium": "5,13,460",
    "GWP": "5,00,410"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "2,39,681",
    "Earned Premium": "5,06,542",
    "GWP": "3,11,586"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "4,46,797",
    "Earned Premium": "9,42,128",
    "GWP": "5,80,835"
  },
  {
    "Year": 2022,
    "Class of Business": "Commercial PI",
    "ClassType": "PI",
    "Business Plan": "1,40,457",
    "Earned Premium": "9,52,097",
    "GWP": "1,82,593"
  }
];

const Section3 = () => {
  // Step 1: Parse JSON data
  const parsedData = jsonData.map(entry => ({
    year: entry.Year,
    classOfBusiness: entry["Class of Business"],
    classType: entry.ClassType,
    businessPlan: parseFloat(entry["Business Plan"].replace(/,/g, '')),
    earnedPremium: parseFloat(entry["Earned Premium"].replace(/,/g, '')),
    gwp: parseFloat(entry.GWP.replace(/,/g, ''))
  }));

  console.log(parsedData);

  // Step 2: Group data by 'ClassType'
  const [groupedData, setGroupedData] = useState(() => {
    return parsedData.reduce((acc, curr) => {
      const { classType } = curr;
      acc[classType] = acc[classType] || {
        businessPlan: 0,
        earnedPremium: 0,
        gwp: 0
      };
      acc[classType].businessPlan += curr.businessPlan;
      acc[classType].earnedPremium += curr.earnedPremium;
      acc[classType].gwp += curr.gwp;
      return acc;
    }, {});
  });

  // Step 3: Prepare data for graphs
  const chartData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: "Business Plan",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: Object.values(groupedData).map(data => data.businessPlan)
      },
      {
        label: "Earned Premium",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: Object.values(groupedData).map(data => data.earnedPremium)
      },
      {
        label: "GWP",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 206, 86, 0.4)",
        hoverBorderColor: "rgba(255, 206, 86, 1)",
        data: Object.values(groupedData).map(data => data.gwp)
      }
    ]
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Bar
          data={chartData}
          width={100}
          height={50}
        //   type="bar"
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  );
};

export default Section3;
