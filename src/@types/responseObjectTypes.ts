interface Report
    {
    fiscalDateEnding: string,
    reportedCurrency: string,
    totalAssets: string,
    intangibleAssets: string,
    earningAssets: string,
    otherCurrentAssets: string,
    totalLiabilities: string,
    totalShareholderEquity: string,
    deferredLongTermLiabilities: string,
    otherCurrentLiabilities: string,
    commonStock: string,
    retainedEarnings: string,
    otherLiabilities: string,
    goodwill: string,
    otherAssets: string,
    cash: string,
    totalCurrentLiabilities: string,
    shortTermDebt: string,
    currentLongTermDebt: string,
    otherShareholderEquity: string,
    propertyPlantEquipment: string,
    totalCurrentAssets: string,
    longTermInvestments: string,
    netTangibleAssets: string,
    shortTermInvestments: string,
    netReceivables: string,
    longTermDebt: string,
    inventory: string,
    accountsPayable: string,
    totalPermanentEquity: string,
    additionalPaidInCapital: string,
    commonStockTotalEquity: string,
    preferredStockTotalEquity: string,
    retainedEarningsTotalEquity: string,
    treasuryStock: string,
    accumulatedAmortization: string,
    otherNonCurrrentAssets: string,
    deferredLongTermAssetCharges: string,
    totalNonCurrentAssets: string,
    capitalLeaseObligations: string,
    totalLongTermDebt: string,
    otherNonCurrentLiabilities: string,
    totalNonCurrentLiabilities: string,
    negativeGoodwill: string,
    warrants: string,
    preferredStockRedeemable: string,
    capitalSurplus: string,
    liabilitiesAndShareholderEquity: string,
    cashAndShortTermInvestments: string,
    accumulatedDepreciation: string,
    commonStockSharesOutstanding: string
    }

    interface Response {
        symbol: string,
        annualReports: Report[],
        quarterlyReports: Report[]
    }

    export type { Response, Report }

    