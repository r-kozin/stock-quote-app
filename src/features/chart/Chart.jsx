import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '../../components/Spinner';
import { fetchChartData } from './chartSlice';
import ReactApexChart from 'react-apexcharts';
  
export const Chart = () => {
    const dispatch = useDispatch()
    const dataPoints = useSelector((state) => state.chart.chartData)
    const chartStatus = useSelector((state) => state.chart.status);
    const ticker = useSelector((state) => state.quote.ticker)
    const theme = useSelector((state) => state.quote.darkMode)
    const error = useSelector((state) => state.chart.error)

    let chartBackground

    if (theme === 'light') {
        chartBackground = '#fff'
    } else {
       chartBackground = ""
    }
        
    useEffect(() => {
        dispatch(fetchChartData(ticker));
      }, []);

      let chartOptions = {
        series: [{
            data: dataPoints,
          }],
          plotOptions: {
            candlestick: {
              wick: {
                useFillColor: true,
              }
            },
            xaxis: {
                type:'datetime',
                labels: {
                  format: 'dd/MM',
                }
              },
              chart: {
                background: chartBackground
            }
          }        
      }

      let content;

      if (chartStatus === 'loading') {
        content = <Spinner text="Loading..." />;
      } else if (chartStatus === 'succeeded') {
        content = (
          <div className="chart-container">
  <ReactApexChart options={chartOptions.plotOptions} series={chartOptions.series} type="candlestick" height={350} />
          </div>
        );
      } else if (chartStatus === 'failed') {
        content = <div style={{color: "red", fontWeight: "bolder", textAlign: "center"}}>{error}</div>;
      }
    
      return <>{content}</>;
    };