// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [134, 83, 79, 56, 54]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#001F3F"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Hogar", "Auto", "Mascotas", "Empresas", "Vida"],
  },
  yaxis: {
    title: {
      text: "Póliza"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Solicitudes de pólizas',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Pólizas disponibles',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#001F3F", "#FF7262"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Solicitudes de pólizas',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Pólizas disponibles',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();


// AREA CHART 2
var areaChartOptions2 = {
  series: [{
    name: 'Vida',
    data: [70, 230, 300, 400, 450, 230, 360]
  }, {
    name: 'Autos',
    data: [30, 100, 170, 240, 310, 60, 230]
  },{
    name: 'Hogar',
    data: [50, 400, 230, 230, 230, 300, 380]
  },{
    name: 'Mascota',
    data: [50, 130, 110, 90, 7, 500, 130]
  },{
    name: 'Empresa',
    data: [50, 120, 180, 340, 360, 400, 250]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#001F3F", "#FF7262", "#f5b74f", "#367952", "#012C5F"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Utilidades en dólares ($k)',
      },
    }    
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};
var areaChart2 = new ApexCharts(document.querySelector("#area-chart2"), areaChartOptions2);
areaChart2.render();