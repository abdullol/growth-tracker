import { InvestmentFundLog } from "./investmentFundLog";

export interface trackerLookup {
    lookupId: number;
    lookupType: string | null;
    lookupDescription: string | null;
    hiddenValue: string | null;
    visibleValue: string | null;
    isActive: boolean;
    createddate: string | null;
    investmentFundLogCurrencies: InvestmentFundLog[];
    investmentFundLogStatuses: InvestmentFundLog[];
}