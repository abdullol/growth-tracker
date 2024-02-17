﻿using investment_tracker_be.Models;
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
        public async void PostLogEntry([FromBody] InvestmentFundLogsVM fundLog)
        {
            await _dashbService.LogEntryAsync(fundLog);
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
                resp.Message = "Log Entry Lst fetched";

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
                resp.StatusCode=(int)HttpStatusCode.InternalServerError;
                resp.Message = "Error while deleting Log Entry row.";
                _logger.LogError(ex, "Error while deleting Log Entry row.");
            }
        }
    }
}
