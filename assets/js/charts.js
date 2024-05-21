    //chart-1
    var options = {
        chart: {
            type: 'bar'
        },
        plotOptions: {
                bar: {
                    columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false,
            },
            series: [{
                name: "男性",
                data: [155, 65, 465, 265, 225, 325, 80]
            },{
                name: "女性",
                data: [113, 42, 65, 54, 76, 65, 35]
            }],
              tooltip: {
                theme: 'dark'
            },
              grid: {
                padding: {
                    top: -20,
                    right: 0,
                    left: -4,
                    bottom: -4
                },
                strokeDashArray: 4,
            },
            xaxis: {
                labels: {
                    padding: 0,
                },
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false,
                },
            },
              yaxis: {
                labels: {
                    padding: 4
                },
            },
            labels: [
                '0-20歲', '21-30歲', '31-40歲', '41-50歲', '51-60歲', '61-70歲', '71-80歲'
            ],
            colors: ["#93C6E7","#EFA3C8","#BA90C6","#FFC764","#7AB2B2","#948979"],
            legend: {
                show: true,
            },
    }
    var chart = new ApexCharts(document.querySelector("#chart-1"), options);
    chart.render();

    //chart-2
    var options = {
        chart: {
            type: 'bar'
        },
        plotOptions: {
                bar: {
                    columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false,
            },
            series: [{
                name: "男性",
                data: [155, 66, 465, 265, 225, 325, 80]
            },{
                name: "女性",
                data: [113, 44, 65, 54, 76, 65, 35]
            }],
              tooltip: {
                theme: 'dark'
            },
              grid: {
                padding: {
                    top: -20,
                    right: 0,
                    left: -4,
                    bottom: -4
                },
                strokeDashArray: 4,
            },
            xaxis: {
                labels: {
                    padding: 0,
                },
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false,
                },
            },
              yaxis: {
                labels: {
                    padding: 4
                },
            },
            labels: [
                '0-20歲', '21-30歲', '31-40歲', '41-50歲', '51-60歲', '61-70歲', '71-80歲'
            ],
            colors: ["#93C6E7","#EFA3C8","#BA90C6","#FFC764","#7AB2B2","#948979"],
            legend: {
                show: true,
            },
    }
    var chart = new ApexCharts(document.querySelector("#chart-2"), options);
    chart.render();

    //chart-3
    var options = {
        chart: {
            type: 'bar'
        },
        plotOptions: {
                bar: {
                    columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false,
            },
            series: [{
                name: "銷貨毛利",
                data: [155, 65, 465, 265, 225]
            }],
            tooltip: {
                theme: 'dark'
            },
            grid: {
                padding: {
                    top: -20,
                    right: 0,
                    left: -4,
                    bottom: -4
                },
                strokeDashArray: 4,
            },
            xaxis: {
                labels: {
                    padding: 0,
                },
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    padding: 4
                },
            },
            labels: [
                '中部', '北部', '南部', '外島', '東部'
            ],
            colors: ["#93C6E7","#EFA3C8","#BA90C6","#FFC764","#7AB2B2","#948979"],
            legend: {
                show: true,
            },
    }
    var chart = new ApexCharts(document.querySelector("#chart-3"), options);
    chart.render();
