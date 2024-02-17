using investment_tracker_be.Models;
using investment_tracker_be.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

namespace investment_tracker_be.Services.DashboardService
{
    public class DashboardService : IDashBoardService
    {
        public readonly InvestmentTrackerDbContext dbContext;
        public DashboardService(InvestmentTrackerDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task DeleteLogEntryRow(int id)
        {
            try
            {
                var logFound = await dbContext.InvestmentFundLogs.FindAsync(id);

                if (logFound != null)
                {
                    dbContext.InvestmentFundLogs.Remove(logFound);
                    await dbContext.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<List<InvestmentFundLog>> FetchLogEntryAsync()
        {
            try
            {
                return await dbContext.InvestmentFundLogs.ToListAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task LogEntryAsync(InvestmentFundLogsVM fundLog)
        {
            try
            {
                InvestmentFundLog dbLogObj = new InvestmentFundLog();
                dbLogObj.StatusId = fundLog.StatusId;
                dbLogObj.CurrencyId = fundLog.CurrencyId;
                await dbContext.InvestmentFundLogs.AddAsync(dbLogObj);
                await dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

    }
}
