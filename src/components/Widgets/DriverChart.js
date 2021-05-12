/**
 * Users Area Chart Widget
 */
import React from 'react';
import CountUp from 'react-countup';

// chart
import TinyAreaChart from 'Components/Charts/TinyAreaChart';

// chart config
import ChartConfig from 'Constants/chart-config';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCard, RctCardContent } from 'Components/RctCard';

// helpers
import { hexToRgbA } from 'Helpers/helpers';

const DriverChart = ({ data }) => (
    <RctCard>
        <RctCardContent>
            <div className="clearfix">
                <div className="float-left">
                    <h3 className="mb-15 fw-semi-bold"><IntlMessages id="widgets.drivers" /></h3>
                    <div className="d-flex">
                        <div className="mr-50">
                            <span className="fs-14 d-block"><IntlMessages id="widgets.active" /></span>
                            <CountUp separator="," className="counter-point" start={0} end={data.today} duration={5} useEasing={true} />
                        </div>
                        <div className="">
                            <span className="fs-14 d-block"><IntlMessages id="widgets.inactive" /></span>
                            <CountUp separator="," className="counter-point" start={0} end={data.totalRevenue} duration={5} useEasing={true} />
                        </div>
                    </div>
                </div>
                <div className="float-right hidden-md-down">
                    <div className="featured-section-icon">
                        <i className="zmdi zmdi-car"></i>
                    </div>
                </div>
            </div>
        </RctCardContent>
        {/*<TinyAreaChart*/}
        {/*    label="Sales"*/}
        {/*    chartdata={data.chartData.data}*/}
        {/*    labels={data.chartData.labels}*/}
        {/*    backgroundColor={hexToRgbA(ChartConfig.color.info, 0.1)}*/}
        {/*    borderColor={hexToRgbA(ChartConfig.color.info, 3)}*/}
        {/*    lineTension="0"*/}
        {/*    height={70}*/}
        {/*    gradient*/}
        {/*    hideDots*/}
        {/*/>*/}
    </RctCard>
);

export default DriverChart;
