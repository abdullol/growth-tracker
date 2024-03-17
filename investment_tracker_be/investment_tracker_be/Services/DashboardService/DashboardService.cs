using investment_tracker_be.Models;
using investment_tracker_be.ViewModels;
using investment_tracker_be.ViewModels.Shared;
using Microsoft.EntityFrameworkCore;

namespace investment_tracker_be.Services.DashboardService
{
    public class DashboardService : IDashBoardService
    {
        public readonly InvestmentTrackerDbContext dbContext;
        public DashboardService(InvestmentTrackerDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public Task<int> CountDbLogs()
        {
            return dbContext.InvestmentFundLogs.CountAsync();
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

        public async Task<List<InvestmentFundLog>> FetchLogEntryAsync(PaginationFilter pagination)
        {
            try
            {
                return await dbContext.InvestmentFundLogs.
                    Skip((pagination.PageNumber - 1) * pagination.PageSize)
                    .Take(pagination.PageSize)
                    .ToListAsync();

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

                dbLogObj.CurrencyId = fundLog.CurrencyId;
                dbLogObj.StatusId = fundLog.StatusId;
                dbLogObj.Location = fundLog.Location;
                dbLogObj.AssetImageUrl = fundLog.AssetImageUrl;
                dbLogObj.AssetsClass = fundLog.AssetsClass;
                dbLogObj.Description = fundLog.Description;
                dbLogObj.InvestmentAmount = fundLog.InvestmentAmount;
                dbLogObj.TransactionPerformDate = fundLog.TransactionPerformDate;
                dbLogObj.TransactionPerformedBy = fundLog.TransactionPerformBy;

                await dbContext.InvestmentFundLogs.AddAsync(dbLogObj);
                await dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task UpdateLogEntry(InvestmentFundLogsVM fundLog)
        {
            try
            {
                var logFund =await dbContext.InvestmentFundLogs.FindAsync(fundLog.Id);
                if (logFund == null)
                {
                    
                }

                logFund.CurrencyId = fundLog.CurrencyId;
                logFund.StatusId = fundLog.StatusId;
                logFund.Location = fundLog.Location;
                logFund.AssetImageUrl = fundLog.AssetImageUrl;
                logFund.AssetsClass = fundLog.AssetsClass;
                logFund.Description = fundLog.Description;
                logFund.InvestmentAmount = fundLog.InvestmentAmount;
                logFund.TransactionPerformDate = fundLog.TransactionPerformDate;
                logFund.TransactionPerformedBy = fundLog.TransactionPerformBy;

                dbContext.InvestmentFundLogs.Update(logFund);

            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
