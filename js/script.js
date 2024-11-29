// -------------- tooltips ---------------

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

// D-CHART1

var options = {
    series: [
      {
        data: [10, 20, 15, 30, 35, 30, 45, 59, 30, 35, 25, 29, 15]
      }
    ],
    chart: {
      type: "area",
      height: 350,
      background: "#19191E",
      dropShadow: {
        enabled: true,
        color: "#000"
      },
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: true
    },
    markers: {
      colors: ["#FFFFFF"]
    },
    stroke: {
      curve: "smooth",
      width: 3,
      fill: {
        type: "gradient",
        gradient: {
          type: "horizontal",
          colorStops: [
            [
              {
                offset: 0,
                color: "#0085FF",
                opacity: 1
              },
              {
                offset: 33,
                color: "#FF2E92",
                opacity: 1
              },
              {
                offset: 80,
                color: "#FFAC2F",
                opacity: 1
              },
              {
                offset: 99,
                color: "#FFFFFF",
                opacity: 1
              }
            ]
          ]
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        colorStops: [
          [
            {
              offset: 0,
              color: "#F48116",
              opacity: 1.0
            },
            {
              offset: 70,
              color: "#6510F8",
              opacity: 0.2
            },
            {
              offset: 97,
              color: "#6510F8",
              opacity: 0.0
            }
          ]
        ]
      }
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: "#aaa"
        }
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      borderColor: "#222226"
    },
    legend: {
      horizontalAlign: "left"
    },
    theme: {
      mode: "dark"
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#d-chart1"), options);
  chart.render();

//   D-CHART2

var options = {
    chart: {
      type: "area",
      height: 350,
      foreColor: "#999",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: ['#00E396', '#0090FF'],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Total Views',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Unique Views',
      data: generateDayWiseTimeSeries(1, 18)
    }],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 14,
        offsetY: -5
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };

  var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

  chart.render();

  function generateDayWiseTimeSeries(s, count) {
    var values = [[
      4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
    ], [
      2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }


// COUNTER
(() => {
    const counter = document.querySelectorAll('.counter');
    // covert to array
    const array = Array.from(counter);
    // select array element
    array.map((item) => {
        // data layer
        let counterInnerText = item.textContent;

        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})()


