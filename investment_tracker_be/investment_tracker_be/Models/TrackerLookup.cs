using System;
using System.Collections.Generic;

namespace investment_tracker_be.Models
{
    public partial class TrackerLookup
    {
        public TrackerLookup()
        {
            InvestmentFundLogCurrencies = new HashSet<InvestmentFundLog>();
            InvestmentFundLogStatuses = new HashSet<InvestmentFundLog>();
        }

        public int LookupId { get; set; }
        public string? LookupType { get; set; }
        public string? LookupDescription { get; set; }
        public string? HiddenValue { get; set; }
        public string? VisibleValue { get; set; }
        public bool IsActive { get; set; }
        public DateTime? Createddate { get; set; }

        public virtual ICollection<InvestmentFundLog> InvestmentFundLogCurrencies { get; set; }
        public virtual ICollection<InvestmentFundLog> InvestmentFundLogStatuses { get; set; }
    }
}
