using investment_tracker_be.Models;
using investment_tracker_be.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace investment_tracker_be.Services.DashboardService
{
    public class DashboardService : IDashBoardService
    {
        public readonly InvestmentTrackerDbContext dbContext;
        public DashboardService(InvestmentTrackerDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public List<InvestmentFundLog> FetchLogEntryAsync()
        {
            return dbContext.InvestmentFundLogs.ToList();
        }

        public async Task LogEntryAsync(InvestmentFundLogsVM fundLog)
        {
            InvestmentFundLog dbLogObj = new InvestmentFundLog();
            dbLogObj.StatusId = fundLog.StatusId;
            dbLogObj.CurrencyId = fundLog.CurrencyId;
            await dbContext.InvestmentFundLogs.AddAsync(dbLogObj);
            await dbContext.SaveChangesAsync();
        }
    }
}
