using static investment_tracker_be.Enums.InvestmentTrackerPortfolioEnum;

namespace investment_tracker_be.ViewModels
{
    public class InvestmentFundLogsVM
    {
        public int Id { get; set; }
        public string AssetsClass { get; set; }
        public decimal InvestmentAmount { get; set; }
        public DateTime TransactionPerformDate { get; set; }
        public string AssetImageUrl { get; set; }
        public int CurrencyId { get; set; }
        public int StatusId { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string TransactionPerformBy { get; set; }

    }
}
