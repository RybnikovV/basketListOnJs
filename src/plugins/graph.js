import Highcharts from 'highcharts'

Highcharts.chart('highchartsWork', {
    plotOptions: {
        series: {
            stacking: 'normal',
            point: {
                events: {
                    click: function(events){
                        console.log(events);
                        console.log(this);
                        console.log(this.index);
                        console.log(this.series.chart);
                        console.log(this.series.data[0].color = 'red');
                        console.log(this.series.chart.options);

                        this.update();
                    }
                } 
            }
        }
    },
    chart: {
        type: 'column'
    },
    colors: ['#CDCDCD', '#A0A0A0'],
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    tooltip:{
        shared:true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2, -1, -2, -3],
        colors:['#CDCDCD', '#CDCDCD', '#CDCDCD', '#CDCDCD', '#CDCDCD', '#CDCDCD', '#CDCDCD', '#CDCDCD',]
    }, {
        name: 'kko',
        data: [5, 3, 4, 7, 2, -1, -2, -3],
        colors:['#A0A0A0', '#A0A0A0', '#A0A0A0', '#A0A0A0', '#A0A0A0', '#A0A0A0', '#A0A0A0', '#A0A0A0',]
    }]
});
