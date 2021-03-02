
$(document).ready(() => {

    const associationPercentage = parseFloat(document.getElementById("investEntities").getAttribute('data-assoc'));
    const individualsPercentage = parseFloat(document.getElementById("investEntities").getAttribute('data-individuals'));
    const egyPercentage = parseFloat(document.getElementById("investCategories").getAttribute('data-egy'));
    const arabsPercentage = parseFloat(document.getElementById("investCategories").getAttribute('data-arabs'));
    const foreignsPercentage = parseFloat(document.getElementById("investCategories").getAttribute('data-foreigns'));

    Highcharts.chart('investEntities', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 220,
        },
        title: {
            text: 'أفراد / مستثمرين'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'أفراد ',
                y: individualsPercentage,
                sliced: false,
                selected: true,
                color: '#F26C2C'
            }, {
                name: 'مؤسسات ',
                y: associationPercentage,
                color: '#636466'
            }]
        }],
        exporting: {
            enabled: false
        }
    });

    Highcharts.chart('investCategories', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 220,
        },
        title: {
            text: 'مصريين / عرب / أجانب'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'مصريين ',
                y: egyPercentage,
                sliced: false,
                selected: true
            }, {
                name: 'عرب ',
                y: arabsPercentage
            },
            {
                name: 'أجانب ',
                y: foreignsPercentage
            }
            ]
        }],
        exporting: {
            enabled: false
        }
    });

    Highcharts.chart('marketState', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'الثابتون / الرابحون / الثابتون'
        },
        xAxis: {
            categories: [' الرابحون ', 'الخاسرون ', 'الثابتون ']
        },

        plotOptions: {
            series: {
                stacking: 'normal',
            }
        },
        series: [{
            name: ' الثابتون',
            data: [5, 0, 0]
        }, {
            name: ' الخاسرون',
            data: [0, 2, 0],
            color: '#bb2124',
        }, {
            name: ' الرابحون',
            data: [0, 0, 4],
            color: '#22bb33'
        }
        ],
        exporting: {
            enabled: false
        }
    });

})