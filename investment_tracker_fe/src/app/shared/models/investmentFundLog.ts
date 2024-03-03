import { trackerLookup } from "./trackerLookup";

export interface InvestmentFundLog {
    logId: number;
    assetsClass: string;
    investmentAmount: number | null;
    transactionPerformDate: string;
    assetImageUrl: string | null;
    statusId: number;
    currencyId: number;
    description: string | null;
    location: string | null;
    transactionPerformedBy: string;
}