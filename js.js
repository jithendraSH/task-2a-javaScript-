var marksCanvas = document.getElementById("compchart");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 20;
Chart.defaults.color = "black";

var marksData = {
  labels: ["Processor","RAM","Display","Screen size","Camera","Battery","Connectivity"],
  datasets: [
    {
      label: "iphone 10 pro max",
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      data: [5, 3, 2, 5, 5, 3,4]
    },
    {
      label: "samsung note 22 ultra",
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      data: [2, 3, 4, 5, 1, 2,3]
    }
  ]
};

var chartOptions = {
  plugins: {
    title: {
      display: true,
      align: "start",
    },
    legend: {
      align: "start"
    }
  },
  scales: {
    r: {
      pointLabels: {
        font: {
          size:20
        }
      }
    }
  }
};

var radarChart = new Chart(marksCanvas, {
  type: "radar",
  data: marksData,
  options: chartOptions
});