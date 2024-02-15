namespace investment_tracker_be.ViewModels.Shared
{
    public class ResponseViewModel<ViewModel>
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public ViewModel Data { get; set; }
    }
}
