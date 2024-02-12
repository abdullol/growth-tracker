using investment_tracker_be.Models;
using investment_tracker_be.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace investment_tracker_be.Services.DashboardService
{
    public interface IDashBoardService
    {
        Task LogEntryAsync(InvestmentFundLogsVM fundLog);
        List<InvestmentFundLog> FetchLogEntryAsync();
    }
}
