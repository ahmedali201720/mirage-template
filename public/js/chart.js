
$(document).ready(() => {

    const associationPercentage = parseFloat(document.getElementById("investEntities").getAttribute('data-assoc'));
    const individualsPercentage = parseFloat(document.getElementById("investEntities").getAttribute('data-individuals'));
    const egyPercentage = parseFloat(document.getElementById("investCategories").getAttribute('data-egy'));
    const arabsPercentage = parseFloat(document.getElementById("investCategories").getAttribute('data-arabs'));
    const foreignsPercentage = parseFloat(document.getElementById("investCategories").getAttribute('data-foreigns'));

    // investment chart

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

    // investment categories

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

    //market state chart

    Highcharts.chart('marketState', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'الثابتون / الرابحون / الخاسرون'
        },
        xAxis: {
            categories: ['الرابحون', ' الخاسرون', ' الثابتون', ' الإجمالى']
        },

        plotOptions: {
            series: {
                stacking: 'normal',
            }
        },
        series: [{
            name: ' الرابحون',
            data: [5, 0, 0, 5],
            color: '#22bb33'
        }, {
            name: ' الخاسرون',
            data: [0, 2, 0, 2],
            color: '#bb2124',
        }, {
            name: ' الثابتون',
            data: [0, 0, 4, 4],
            color: '#636466'
        },
        {
            name: ' الإجمالى',
            data: [0, 0, 0, 0],
            showInLegend: false,
        }
        ],
        exporting: {
            enabled: false
        }
    });


    // EGX 30 Chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
        const chart = Highcharts.stockChart('egx30Chart', {
            chart: {
                height: 400
            },

            yAxis: {
                opposite: false
            },

            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                selected: 1,
                inputEnabled: false
            },

            series: [{
                name: 'EGX30',
                data: data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    });

    // EGX 30 CAP Chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
        const chart = Highcharts.stockChart('egx30CapChart', {
            chart: {
                height: 400
            },

            yAxis: {
                opposite: false
            },

            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                selected: 1,
                inputEnabled: false
            },

            series: [{
                name: 'EGX30 CAP',
                data: data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    });

    // EGX 30 TR Chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
        const chart = Highcharts.stockChart('egx30TrChart', {
            chart: {
                height: 400
            },

            yAxis: {
                opposite: false
            },

            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                selected: 1,
                inputEnabled: false
            },

            series: [{
                name: 'EGX30TR',
                data: data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    });

    // EGX 50 Chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
        const chart = Highcharts.stockChart('egx50Chart', {
            chart: {
                height: 400
            },

            yAxis: {
                opposite: false
            },

            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                selected: 1,
                inputEnabled: false
            },

            series: [{
                name: 'EGX50',
                data: data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    });

    // EGX 70 Chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
        const chart = Highcharts.stockChart('egx70Chart', {
            chart: {
                height: 400
            },

            yAxis: {
                opposite: false
            },

            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                selected: 1,
                inputEnabled: false
            },

            series: [{
                name: 'EGX70',
                data: data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    });

    // EGX 100 Chart

    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
        const chart = Highcharts.stockChart('egx100Chart', {
            chart: {
                height: 400
            },
            yAxis: {
                opposite: false
            },

            rangeSelector: {
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1day'
                },
                {
                    type: 'week',
                    count: 1,
                    text: '1W'
                },
                {
                    type: 'month',
                    count: 1,
                    text: '1m'
                },
                {
                    type: 'month',
                    count: 3,
                    text: '3m',
                },
                {
                    type: 'month',
                    count: 6,
                    text: '6m'
                },
                {
                    type: 'year',
                    count: 1,
                    text: 'year'
                }],
                inputEnabled: false,
                selected: 1,
            },

            series: [{
                name: 'EGX100',
                data: data,
                type: 'area',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            }
        });
    });

    Highcharts.setOptions({
        lang: {
            rangeSelectorZoom: ''
        }
    });

})