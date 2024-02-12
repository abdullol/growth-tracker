using System;
using System.Collections.Generic;

namespace investment_tracker_be.Models
{
    public partial class InvestmentFundLog
    {
        public int LogId { get; set; }
        public string AssetsClass { get; set; } = null!;
        public decimal? InvestmentAmount { get; set; }
        public DateTime TransactionPerformDate { get; set; }
        public string? AssetImageUrl { get; set; }
        public int StatusId { get; set; }
        public int CurrencyId { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }
        public string TransactionPerformedBy { get; set; } = null!;

        public virtual TrackerLookup Currency { get; set; } = null!;
        public virtual TrackerLookup Status { get; set; } = null!;
    }
}
