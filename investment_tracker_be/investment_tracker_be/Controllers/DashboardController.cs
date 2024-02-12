using investment_tracker_be.Models;
using investment_tracker_be.Services.DashboardService;
using investment_tracker_be.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace investment_tracker_be.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        private readonly IDashBoardService _dashbService;
        public DashboardController(IDashBoardService dashbService)
        {
            _dashbService = dashbService;
        }

        [HttpPost]
        [Route("PostLogEntry")]
        public async void PostLogEntry([FromBody] InvestmentFundLogsVM fundLog)
        {
            await _dashbService.LogEntryAsync(fundLog);
        }

        [HttpGet]
        [Route("GetLogEntry")]
        public List<InvestmentFundLog> GetLogEntry()
        {
            return _dashbService.FetchLogEntryAsync();
        }
    }
}
