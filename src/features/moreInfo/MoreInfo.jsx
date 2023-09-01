import React, {useEffect} from "react";
import Masonry from "react-masonry-css";
import Accordion from "react-bootstrap/Accordion";
import { useSelector, useDispatch } from "react-redux";
import { setNulltoNA } from "./moreInfoSlice";

export const MoreInfo = () => {
    const dispatch = useDispatch();
    const props = useSelector((state) => state.quote)
    const stockAdditionalInfo = useSelector((state) => state.moreInfo.moreInfoData);
    const moreInfoStatus = useSelector((state) => state.moreInfo.status)


    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
      };

    //   useEffect(() => {
    //     if (moreInfoStatus === "idle") {
    //       dispatch(fetchCompanyName(props.ticker));
    //       console.log("dispatched fetchQuote");
    //       console.log("dispatched fetchQuoteMoreInfo");
    //     }
    //   }, [props.ticker, dispatch]);


  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="0" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Valuation Measures</Accordion.Header>
                <Accordion.Body>
                  <p className="marketCapitalization">
                    Market Capitalization:{" "}
                    {stockAdditionalInfo.metric.marketCapitalization}
                  </p>
                  <p className="enterpriseValue">
                    Enterprise Value:{" "}
                    {stockAdditionalInfo.metric.enterpriseValue}
                  </p>
                  <p>Beta: {stockAdditionalInfo.metric.beta}</p>
                  <p className="peAnnual">
                    PE (Annual): {stockAdditionalInfo.metric.peAnnual}
                  </p>
                  <p className="peTTM">
                    PE (TTM): {stockAdditionalInfo.metric.peTTM}
                  </p>
                  <p className="pfcfShareAnnual">
                    PFCF Share (Annual):{" "}
                    {stockAdditionalInfo.metric.pfcfShareAnnual}
                  </p>
                  <p className="pfcfShareTTM">
                    PFCF Share (TTM): {stockAdditionalInfo.metric.pfcfShareTTM}
                  </p>
                  <p className="pbAnnual">
                    PB (Annual): {stockAdditionalInfo.metric.pbAnnual}
                  </p>
                  <p className="pbQuarterly">
                    PB (Quarterly): {stockAdditionalInfo.metric.pbQuarterly}
                  </p>
                  <p className="psAnnual">
                    PS (Annual): {stockAdditionalInfo.metric.psAnnual}
                  </p>
                  <p className="psTTM">
                    PS (TTM): {stockAdditionalInfo.metric.psTTM}
                  </p>
                  <p className="ptbvAnnual">
                    PTBV (Annual): {stockAdditionalInfo.metric.ptbvAnnual}
                  </p>
                  <p className="ptbvQuarterly">
                    PTBV (Quarterly): {stockAdditionalInfo.metric.ptbvQuarterly}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="0" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Dividends</Accordion.Header>
                <Accordion.Body>
                  <p className="dividendGrowthRate5Y">
                    Dividend Growth Rate (5Y):{" "}
                    {stockAdditionalInfo.metric.dividendGrowthRate5Y ? stockAdditionalInfo.metric.dividendGrowthRate5Y : "N/A"}
                  </p>
                  <p className="dividendPerShareAnnual">
                    Dividend Per Share (Annual):{" "}
                    {stockAdditionalInfo.metric.dividendPerShareAnnual ? stockAdditionalInfo.metric.dividendPerShareAnnual : "N/A"}
                  </p>
                  <p className="dividendPerShareTTM">
                    Dividend Per Share (TTM):{" "}
                    {stockAdditionalInfo.metric.dividendPerShareTTM ? stockAdditionalInfo.metric.dividendPerShareTTM : "N/A"}
                  </p>
                  <p className="dividendYieldIndicatedAnnual">
                    Dividend Yield Indicated (Annual):{" "}
                    {stockAdditionalInfo.metric.dividendYieldIndicatedAnnual ? stockAdditionalInfo.metric.dividendYieldIndicatedAnnual : "N/A"}
                  </p>
                  <p className="dividendsPerShareTTM">
                    Dividends Per Share (TTM):{" "}
                    {stockAdditionalInfo.metric.dividendsPerShareTTM ? stockAdditionalInfo.metric.dividendsPerShareTTM : "N/A"}
                  </p>
                  <p className="currentDividendYieldTTM">
                    Current Dividend Yield (TTM):{" "}
                    {stockAdditionalInfo.metric.currentDividendYieldTTM ? stockAdditionalInfo.metric.currentDividendYieldTTM : "N/A"}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="0" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Trading Information</Accordion.Header>
                <Accordion.Body>
                  <h5>Share Statistics</h5>
                  <p>
                    3 Month Average Trading Volume:{" "}
                    {stockAdditionalInfo.metric["3MonthAverageTradingVolume"]}
                  </p>
                  <p>
                    10 Day Average Trading Volume:{" "}
                    {stockAdditionalInfo.metric["10DayAverageTradingVolume"]}
                  </p>
                  <h5>Price Return Daily</h5>
                  <p>
                    5 Day Price Return Daily:{" "}
                    {stockAdditionalInfo.metric["5DayPriceReturnDaily"]}
                  </p>
                  <p>
                    13 Week Price Return Daily:{" "}
                    {stockAdditionalInfo.metric["13WeekPriceReturnDaily"]}
                  </p>
                  <p>
                    26 Week Price Return Daily:{" "}
                    {stockAdditionalInfo.metric["26WeekPriceReturnDaily"]}
                  </p>
                  <p>
                    52 Week Price Return Daily:{" "}
                    {stockAdditionalInfo.metric["52WeekPriceReturnDaily"]}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Asset Turnover</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Asset Turnover (Annual):{" "}
                    {stockAdditionalInfo.metric.assetTurnoverAnnual}
                  </p>
                  <p>
                    Asset Turnover (TTM):{" "}
                    {stockAdditionalInfo.metric.assetTurnoverTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Book Value Per Share</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Book Value Per Share (Annual):{" "}
                    {stockAdditionalInfo.metric.bookValuePerShareAnnual}
                  </p>
                  <p>
                    Book Value Per Share (Quarterly):{" "}
                    {stockAdditionalInfo.metric.bookValuePerShareQuarterly}
                  </p>
                  <p>
                    Book Value Share Growth (5Y):{" "}
                    {stockAdditionalInfo.metric.bookValueShareGrowth5Y}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cash Flow Per Share</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Cash Flow Per Share (Annual):{" "}
                    {stockAdditionalInfo.metric.cashFlowPerShareAnnual}
                  </p>
                  <p className="cashFlowPerShareQuarterly">
                    Cash Flow Per Share (Quarterly):{" "}
                    {stockAdditionalInfo.metric.cashFlowPerShareQuarterly}
                  </p>
                  <p className="cashFlowPerShareTTM">
                    Cash Flow Per Share (TTM):{" "}
                    {stockAdditionalInfo.metric.cashFlowPerShareTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cash Per Share</Accordion.Header>
                <Accordion.Body>
                  <p className="cashPerSharePerShareAnnual">
                    Cash Per Share (Per Share Annual):{" "}
                    {stockAdditionalInfo.metric.cashPerSharePerShareAnnual}
                  </p>
                  <p className="cashPerSharePerShareQuarterly">
                    Cash Per Share (Per Share Quarterly):{" "}
                    {stockAdditionalInfo.metric.cashPerSharePerShareQuarterly}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Current EV/Free Cash Flow</Accordion.Header>
                <Accordion.Body>
                  <p className="currentEv/freeCashFlowAnnual">
                    Current EV/Free Cash Flow (Annual):{" "}
                    {stockAdditionalInfo.metric["currentEv/freeCashFlowAnnual"]}
                  </p>
                  <p className="currentEv/freeCashFlowTTM">
                    Current EV/Free Cash Flow (TTM):{" "}
                    {stockAdditionalInfo.metric["currentEv/freeCashFlowTTM"]}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Current Ratio</Accordion.Header>
                <Accordion.Body>
                  <p className="currentRatioAnnual">
                    Current Ratio (Annual):{" "}
                    {stockAdditionalInfo.metric.currentRatioAnnual}
                  </p>
                  <p className="currentRatioQuarterly">
                    Current Ratio (Quarterly):{" "}
                    {stockAdditionalInfo.metric.currentRatioQuarterly}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>EBITD/EBITDA CAGR</Accordion.Header>
                <Accordion.Body>
                  <p className="ebitdPerShareAnnual">
                    EBITD Per Share (Annual):{" "}
                    {stockAdditionalInfo.metric.ebitdPerShareAnnual}
                  </p>
                  <p className="ebitdPerShareTTM">
                    EBITD Per Share (TTM):{" "}
                    {stockAdditionalInfo.metric.ebitdPerShareTTM}
                  </p>
                  <p className="ebitdaCagr5Y">
                    EBITDA CAGR (5Y): {stockAdditionalInfo.metric.ebitdaCagr5Y}
                  </p>
                  <p className="ebitdaInterimCagr5Y">
                    EBITDA Interim CAGR (5Y):{" "}
                    {stockAdditionalInfo.metric.ebitdaInterimCagr5Y}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>EPS</Accordion.Header>
                <Accordion.Body>
                  <p className="epsAnnual">
                    EPS Annual: {stockAdditionalInfo.metric.epsAnnual}
                  </p>
                  <p className="epsBasicExclExtraItemsAnnual">
                    EPS Basic Excl Extra Items Annual:{" "}
                    {stockAdditionalInfo.metric.epsBasicExclExtraItemsAnnual}
                  </p>
                  <p className="epsBasicExclExtraItemsTTM">
                    EPS Basic Excl Extra Items TTM:{" "}
                    {stockAdditionalInfo.metric.epsBasicExclExtraItemsTTM}
                  </p>
                  <p className="epsExclExtraItemsAnnual">
                    EPS Excl Extra Items Annual:{" "}
                    {stockAdditionalInfo.metric.epsExclExtraItemsAnnual}
                  </p>
                  <p className="epsExclExtraItemsTTM">
                    EPS Excl Extra Items TTM:{" "}
                    {stockAdditionalInfo.metric.epsExclExtraItemsTTM}
                  </p>
                  <p className="epsGrowth3Y">
                    EPS Growth 3Y: {stockAdditionalInfo.metric.epsGrowth3Y}
                  </p>
                  <p className="epsGrowth5Y">
                    EPS Growth 5Y: {stockAdditionalInfo.metric.epsGrowth5Y}
                  </p>
                  <p className="epsGrowthQuarterlyYoy">
                    EPS Growth Quarterly YoY:{" "}
                    {stockAdditionalInfo.metric.epsGrowthQuarterlyYoy}
                  </p>
                  <p className="epsGrowthTTMYoy">
                    EPS Growth TTM YoY:{" "}
                    {stockAdditionalInfo.metric.epsGrowthTTMYoy}
                  </p>
                  <p className="epsInclExtraItemsAnnual">
                    EPS Incl Extra Items Annual:{" "}
                    {stockAdditionalInfo.metric.epsInclExtraItemsAnnual}
                  </p>
                  <p className="epsInclExtraItemsTTM">
                    EPS Incl Extra Items TTM:{" "}
                    {stockAdditionalInfo.metric.epsInclExtraItemsTTM}
                  </p>
                  <p className="epsNormalizedAnnual">
                    EPS Normalized Annual:{" "}
                    {stockAdditionalInfo.metric.epsNormalizedAnnual}
                  </p>
                  <p className="epsTTM">
                    EPS TTM: {stockAdditionalInfo.metric.epsTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Gross Margin</Accordion.Header>
                <Accordion.Body>
                  <p className="grossMargin5Y">
                    Gross Margin (5Y):{" "}
                    {stockAdditionalInfo.metric.grossMargin5Y}
                  </p>
                  <p className="grossMarginAnnual">
                    Gross Margin (Annual):{" "}
                    {stockAdditionalInfo.metric.grossMarginAnnual}
                  </p>
                  <p className="grossMarginTTM">
                    Gross Margin (TTM):{" "}
                    {stockAdditionalInfo.metric.grossMarginTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Inventory Turnover</Accordion.Header>
                <Accordion.Body>
                  <p className="inventoryTurnoverAnnual">
                    Inventory Turnover (Annual):{" "}
                    {stockAdditionalInfo.metric.inventoryTurnoverAnnual}
                  </p>
                  <p className="inventoryTurnoverTTM">
                    Inventory Turnover (TTM):{" "}
                    {stockAdditionalInfo.metric.inventoryTurnoverTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Long Term Debt/Equity</Accordion.Header>
                <Accordion.Body>
                  <p className="longTermDebt/equityAnnual">
                    Long Term Debt/Equity Annual:{" "}
                    {stockAdditionalInfo.metric["longTermDebt/equityAnnual"]}
                  </p>
                  <p className="longTermDebt/equityQuarterly">
                    Long Term Debt/Equity Quarterly:{" "}
                    {stockAdditionalInfo.metric["longTermDebt/equityQuarterly"]}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Market Capitalization</Accordion.Header>
                <Accordion.Body>
                  <p className="marketCapitalization">
                    Market Capitalization:{" "}
                    {stockAdditionalInfo.metric.marketCapitalization}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Month-to-Date Price Return</Accordion.Header>
                <Accordion.Body>
                  <p className="monthToDatePriceReturnDaily">
                    Month-to-Date Price Return (Daily):{" "}
                    {stockAdditionalInfo.metric.monthToDatePriceReturnDaily}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Net Income Employee</Accordion.Header>
                <Accordion.Body>
                  <p className="netIncomeEmployeeAnnual">
                    Net Income Employee (Annual):{" "}
                    {stockAdditionalInfo.metric.netIncomeEmployeeAnnual}
                  </p>
                  <p className="netIncomeEmployeeTTM">
                    Net Income Employee (TTM):{" "}
                    {stockAdditionalInfo.metric.netIncomeEmployeeTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Net Interest Coverage</Accordion.Header>
                <Accordion.Body>
                  <p className="netInterestCoverageAnnual">
                    Net Interest Coverage (Annual):{" "}
                    {stockAdditionalInfo.metric.netInterestCoverageAnnual}
                  </p>
                  <p className="netInterestCoverageTTM">
                    Net Interest Coverage (TTM):{" "}
                    {stockAdditionalInfo.metric.netInterestCoverageTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Margins</Accordion.Header>
                <Accordion.Body>
                  <div className="net-margin-growth">
                    <h5>Net Margin Growth</h5>
                    <p className="netMarginGrowth5Y">
                      Net Margin Growth (5Y):{" "}
                      {stockAdditionalInfo.metric.netMarginGrowth5Y}
                    </p>
                  </div>

                  <div className="net-profit-margin">
                    <h5>Net Profit Margin</h5>
                    <p className="netProfitMargin5Y">
                      Net Profit Margin (5Y):{" "}
                      {stockAdditionalInfo.metric.netProfitMargin5Y}
                    </p>
                    <p className="netProfitMarginAnnual">
                      Net Profit Margin (Annual):{" "}
                      {stockAdditionalInfo.metric.netProfitMarginAnnual}
                    </p>
                    <p className="netProfitMarginTTM">
                      Net Profit Margin (TTM):{" "}
                      {stockAdditionalInfo.metric.netProfitMarginTTM}
                    </p>
                  </div>

                  <div className="operating-margin">
                    <h5>Operating Margin</h5>
                    <p className="operatingMargin5Y">
                      Operating Margin (5Y):{" "}
                      {stockAdditionalInfo.metric.operatingMargin5Y}
                    </p>
                    <p className="operatingMarginAnnual">
                      Operating Margin (Annual):{" "}
                      {stockAdditionalInfo.metric.operatingMarginAnnual}
                    </p>
                    <p className="operatingMarginTTM">
                      Operating Margin (TTM):{" "}
                      {stockAdditionalInfo.metric.operatingMarginTTM}
                    </p>
                  </div>
                  <div className="pretax-margin">
                    <h5>Pretax Margin</h5>
                    <p className="pretaxMargin5Y">
                      Pretax Margin (5Y):{" "}
                      {stockAdditionalInfo.metric.pretaxMargin5Y}
                    </p>
                    <p className="pretaxMarginAnnual">
                      Pretax Margin (Annual):{" "}
                      {stockAdditionalInfo.metric.pretaxMarginAnnual}
                    </p>
                    <p className="pretaxMarginTTM">
                      Pretax Margin (TTM):{" "}
                      {stockAdditionalInfo.metric.pretaxMarginTTM}
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Payout Ratio</Accordion.Header>
                <Accordion.Body>
                  <p className="payoutRatioAnnual">
                    Payout Ratio (Annual):{" "}
                    {stockAdditionalInfo.metric.payoutRatioAnnual}
                  </p>
                  <p className="payoutRatioTTM">
                    Payout Ratio (TTM):{" "}
                    {stockAdditionalInfo.metric.payoutRatioTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Price Relative to S&amp;P500
                </Accordion.Header>
                <Accordion.Body>
                  <p className="priceRelativeToS&P500Ytd">
                    Price Relative to S&amp;P500 (YTD):{" "}
                    {stockAdditionalInfo.metric["priceRelativeToS&P500Ytd"]}
                  </p>
                  <p className="priceRelativeToS&P5004Week">
                    Price Relative to S&amp;P500 (4-Week):{" "}
                    {stockAdditionalInfo.metric["priceRelativeToS&P5004Week"]}
                  </p>
                  <p className="priceRelativeToS&P50013Week">
                    Price Relative to S&amp;P500 (13-Week):{" "}
                    {stockAdditionalInfo.metric["priceRelativeToS&P50013Week"]}
                  </p>
                  <p className="priceRelativeToS&P50026Week">
                    Price Relative to S&amp;P500 (26-Week):{" "}
                    {stockAdditionalInfo.metric["priceRelativeToS&P50026Week"]}
                  </p>
                  <p className="priceRelativeToS&P50052Week">
                    Price Relative to S&amp;P500 (52-Week):{" "}
                    {stockAdditionalInfo.metric["priceRelativeToS&P50052Week"]}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Receivables Turnover</Accordion.Header>
                <Accordion.Body>
                  <p className="receivablesTurnoverAnnual">
                    Receivables Turnover (Annual):{" "}
                    {stockAdditionalInfo.metric.receivablesTurnoverAnnual}
                  </p>
                  <p className="receivablesTurnoverTTM">
                    Receivables Turnover (TTM):{" "}
                    {stockAdditionalInfo.metric.receivablesTurnoverTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Revenue Employee</Accordion.Header>
                <Accordion.Body>
                  <p className="revenueEmployeeAnnual">
                    Revenue Employee (Annual):{" "}
                    {stockAdditionalInfo.metric.revenueEmployeeAnnual}
                  </p>
                  <p className="revenueEmployeeTTM">
                    Revenue Employee (TTM):{" "}
                    {stockAdditionalInfo.metric.revenueEmployeeTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Revenue Growth</Accordion.Header>
                <Accordion.Body>
                  <p className="revenueGrowth3Y">
                    Revenue Growth (3Y):{" "}
                    {stockAdditionalInfo.metric.revenueGrowth3Y}
                  </p>
                  <p className="revenueGrowth5Y">
                    Revenue Growth (5Y):{" "}
                    {stockAdditionalInfo.metric.revenueGrowth5Y}
                  </p>
                  <p className="revenueGrowthQuarterlyYoy">
                    Revenue Growth Quarterly (YoY):{" "}
                    {stockAdditionalInfo.metric.revenueGrowthQuarterlyYoy}
                  </p>
                  <p className="revenueGrowthTTMYoy">
                    Revenue Growth TTM (YoY):{" "}
                    {stockAdditionalInfo.metric.revenueGrowthTTMYoy}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Revenue Per Share</Accordion.Header>
                <Accordion.Body>
                  <p className="revenuePerShareAnnual">
                    Revenue Per Share (Annual):{" "}
                    {stockAdditionalInfo.metric.revenuePerShareAnnual}
                  </p>
                  <p className="revenuePerShareTTM">
                    Revenue Per Share (TTM):{" "}
                    {stockAdditionalInfo.metric.revenuePerShareTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Revenue Share Growth</Accordion.Header>
                <Accordion.Body>
                  <p className="revenueShareGrowth5Y">
                    Revenue Share Growth (5Y):{" "}
                    {stockAdditionalInfo.metric.revenueShareGrowth5Y}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ROA</Accordion.Header>
                <Accordion.Body>
                  <p className="roa5Y">
                    ROA (5Y): {stockAdditionalInfo.metric.roa5Y}
                  </p>
                  <p className="roaRfy">
                    ROA RFY: {stockAdditionalInfo.metric.roaRfy}
                  </p>
                  <p className="roaTTM">
                    ROA (TTM): {stockAdditionalInfo.metric.roaTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ROE</Accordion.Header>
                <Accordion.Body>
                  <p className="roe5Y">
                    ROE (5Y): {stockAdditionalInfo.metric.roe5Y}
                  </p>
                  <p className="roeRfy">
                    ROE RFY: {stockAdditionalInfo.metric.roeRfy}
                  </p>
                  <p className="roeTTM">
                    ROE (TTM): {stockAdditionalInfo.metric.roeTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ROI</Accordion.Header>
                <Accordion.Body>
                  <p className="roi5Y">
                    ROI (5Y): {stockAdditionalInfo.metric.roi5Y}
                  </p>
                  <p className="roiAnnual">
                    ROI (Annual): {stockAdditionalInfo.metric.roiAnnual}
                  </p>
                  <p className="roiTTM">
                    ROI (TTM): {stockAdditionalInfo.metric.roiTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Tangible Book Value Per Share
                </Accordion.Header>
                <Accordion.Body>
                  <p className="tangibleBookValuePerShareAnnual">
                    Tangible Book Value Per Share (Annual):{" "}
                    {stockAdditionalInfo.metric.tangibleBookValuePerShareAnnual}
                  </p>
                  <p className="tangibleBookValuePerShareQuarterly">
                    Tangible Book Value Per Share (Quarterly):{" "}
                    {
                      stockAdditionalInfo.metric
                        .tangibleBookValuePerShareQuarterly
                    }
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>TBV CAGR</Accordion.Header>
                <Accordion.Body>
                  <p className="tbvCagr5Y">
                    TBV CAGR (5Y): {stockAdditionalInfo.metric.tbvCagr5Y}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total Debt/Total Equity</Accordion.Header>
                <Accordion.Body>
                  <p className="totalDebt/totalEquityAnnual">
                    Total Debt/Total Equity (Annual):{" "}
                    {stockAdditionalInfo.metric["totalDebt/totalEquityAnnual"]}
                  </p>
                  <p className="totalDebt/totalEquityQuarterly">
                    Total Debt/Total Equity (Quarterly):{" "}
                    {
                      stockAdditionalInfo.metric[
                        "totalDebt/totalEquityQuarterly"
                      ]
                    }
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>YTD Price Return (Daily)</Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <p className="yearToDatePriceReturnDaily">
                    Year-to-Date Price Return (Daily):{" "}
                    {stockAdditionalInfo.metric.yearToDatePriceReturnDaily}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>52 Week High/Low</Accordion.Header>
                <Accordion.Body>
                  <p>
                    52 Week High: {stockAdditionalInfo.metric["52WeekHigh"]}
                  </p>
                  <p>
                    52 Week High Date:{" "}
                    {stockAdditionalInfo.metric["52WeekHighDate"]}
                  </p>
                  <p>52 Week Low: {stockAdditionalInfo.metric["52WeekLow"]}</p>
                  <p>
                    52 Week Low Date:{" "}
                    {stockAdditionalInfo.metric["52WeekLowDate"]}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Beta</Accordion.Header>
                <Accordion.Body>
                  <p>Beta: {stockAdditionalInfo.metric.beta}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cap Ex CAGR</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Capital Expenditure CAGR (5Y):{" "}
                    {stockAdditionalInfo.metric.capexCagr5Y}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Enterprise Value</Accordion.Header>
                <Accordion.Body>
                  <p className="enterpriseValue">
                    Enterprise Value:{" "}
                    {stockAdditionalInfo.metric.enterpriseValue}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>FOCF CAGR</Accordion.Header>
                <Accordion.Body>
                  <p className="focfCagr5Y">
                    FOCF CAGR 5Y: {stockAdditionalInfo.metric.focfCagr5Y}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>PB</Accordion.Header>
                <Accordion.Body>
                  <p className="pbAnnual">
                    PB (Annual): {stockAdditionalInfo.metric.pbAnnual}
                  </p>
                  <p className="pbQuarterly">
                    PB (Quarterly): {stockAdditionalInfo.metric.pbQuarterly}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>PCF Share</Accordion.Header>
                <Accordion.Body>
                  <p className="pcfShareAnnual">
                    PCF Share (Annual):{" "}
                    {stockAdditionalInfo.metric.pcfShareAnnual}
                  </p>
                  <p className="pcfShareTTM">
                    PCF Share (TTM): {stockAdditionalInfo.metric.pcfShareTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>PE</Accordion.Header>
                <Accordion.Body>
                  <p className="peAnnual">
                    PE (Annual): {stockAdditionalInfo.metric.peAnnual}
                  </p>
                  <p className="peBasicExclExtraTTM">
                    PE Basic Excl Extra TTM:{" "}
                    {stockAdditionalInfo.metric.peBasicExclExtraTTM}
                  </p>
                  <p className="peExclExtraAnnual">
                    PE Excl Extra Annual:{" "}
                    {stockAdditionalInfo.metric.peExclExtraAnnual}
                  </p>
                  <p className="peExclExtraTTM">
                    PE Excl Extra TTM:{" "}
                    {stockAdditionalInfo.metric.peExclExtraTTM}
                  </p>
                  <p className="peInclExtraTTM">
                    PE Incl Extra TTM:{" "}
                    {stockAdditionalInfo.metric.peInclExtraTTM}
                  </p>
                  <p className="peNormalizedAnnual">
                    PE Normalized Annual:{" "}
                    {stockAdditionalInfo.metric.peNormalizedAnnual}
                  </p>
                  <p className="peTTM">
                    PE TTM: {stockAdditionalInfo.metric.peTTM}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <Accordion defaultActiveKey="1" data-bs-theme={props.darkMode}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Quick Ratio</Accordion.Header>
                <Accordion.Body>
                  <p className="quickRatioAnnual">
                    Quick Ratio Annual:{" "}
                    {stockAdditionalInfo.metric.quickRatioAnnual}
                  </p>
                  <p className="quickRatioQuarterly">
                    Quick Ratio Quarterly:{" "}
                    {stockAdditionalInfo.metric.quickRatioQuarterly}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        {/* <div className="grid-item">
        <div className="grid-item-content"></div>
      </div> --- COMMENTED OUT - format to add another grid item to masonry layout*/}
      </Masonry>
    </>
  );
};
