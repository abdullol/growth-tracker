namespace investment_tracker_be.Enums
{
    public class InvestmentTrackerPortfolioEnum
    {
        public enum TransactionStatus
        {
            Pending = 0,
            Completed = 1,
            Failed = 2,
            Cancelled = 3,
            OnHold = 4,
            Refunded = 5
        }

        public enum CurrencyType
        {
            USD = 0,
            EUR = 1,
            GBP = 2,
            PKR = 3,
            USDT = 4,
            // Add more currencies as needed
        }
    }
}
