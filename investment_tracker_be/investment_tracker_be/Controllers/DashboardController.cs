using investment_tracker_be.Models;
using investment_tracker_be.Services.DashboardService;
using investment_tracker_be.ViewModels;
using investment_tracker_be.ViewModels.Shared;
using Microsoft.AspNetCore.Mvc;
using System.Net;


namespace investment_tracker_be.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        private readonly IDashBoardService _dashbService;
        private readonly ILogger<DashboardController> _logger;
        public DashboardController(IDashBoardService dashbService,
            ILogger<DashboardController> logger)
        {
            _dashbService = dashbService;
            _logger = logger;
        }

        [HttpPost]
        [Route("PostLogEntry")]
        public async Task<ActionResult> PostLogEntry([FromBody] InvestmentFundLogsVM fundLog)
        {
            ResponseViewModel<object> resp = new ResponseViewModel<object>();
            try
            {
                await _dashbService.LogEntryAsync(fundLog);

                resp.Data = null;
                resp.StatusCode = (int)HttpStatusCode.OK;
                resp.Message = "Log entry posted successfully";
                _logger.LogInformation("Log entry posted successfully");
                return Ok(resp);
            }
            catch (Exception ex)
            {
                resp.StatusCode = (int)HttpStatusCode.InternalServerError;
                resp.Message = $"Error post log entry: {ex.Message}";
                _logger.LogError(ex, "Error posting entry.");
                return BadRequest(resp);
            }
        }

        [HttpGet]
        [Route("GetLogEntry")]
        public async Task<ActionResult> GetLogEntry()
        {
            ResponseViewModel<object> resp = new ResponseViewModel<object>();

            try
            {
                resp.Data = await _dashbService.FetchLogEntryAsync();
                
                resp.StatusCode = (int)HttpStatusCode.OK;
                resp.Message = "Log entry fetched successfully";
                _logger.LogInformation("Log entry fetched successfully");
                return Ok(resp);
            }
            catch (Exception ex)
            {
                resp.StatusCode = (int)HttpStatusCode.InternalServerError;
                resp.Message = $"Error fetch log entry: {ex.Message}";
                _logger.LogError(ex, "Error fetching entry.");
                return Ok(resp);
            }
        }

        [HttpDelete]
        [Route("DeleteLogEntry")]
        public async void DeleteLogEntry(int Id)
        {
            ResponseViewModel<object> resp = new ResponseViewModel<object>();
            try
            {
                await _dashbService.DeleteLogEntryRow(Id);
                resp.StatusCode = (int)HttpStatusCode.OK;
                resp.Message = "Log Entry Row has been deleted successfully.";
                _logger.LogInformation("Log Entry Row has been deleted successfully.");
            }
            catch (Exception ex)
            {
                resp.StatusCode = (int)HttpStatusCode.InternalServerError;
                resp.Message = "Error while deleting Log Entry row.";
                _logger.LogError(ex, "Error while deleting Log Entry row.");
            }
        }

        [HttpPut]
        [Route("UpdateLogEntry")]
        public async void UpdateLogEntry([FromBody] InvestmentFundLogsVM fundLog)
        {
            ResponseViewModel<object> resp = new ResponseViewModel<object>();
            try
            {
                await _dashbService.UpdateLogEntry(fundLog);
                resp.StatusCode = (int)HttpStatusCode.OK;
                resp.Message = "Log Entry Row has been updated successfully.";
                _logger.LogInformation("Log Entry Row has been updated successfully.");
            }
            catch (Exception ex)
            {
                resp.StatusCode = (int)HttpStatusCode.InternalServerError;
                resp.Message = "Error while updating Log Entry row.";
                _logger.LogError(ex, "Error while updating Log Entry row.");
            }

        }
    }
}
