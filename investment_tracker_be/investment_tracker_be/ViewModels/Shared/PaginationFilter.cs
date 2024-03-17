namespace investment_tracker_be.ViewModels.Shared
{
    public class PaginationFilter
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }

        //public PaginationFilter()
        //{
        //    PageSize = PageSize == default(int) ? 5 : PageSize;
        //    PageNumber = PageNumber == default(int) ? 1 : PageNumber;
        //}

        //public PaginationFilter(int pageNumber, int pageSize)
        //{
        //    PageSize = pageSize > 5 ? 5 : pageSize;
        //    PageNumber = pageNumber < 1 ? 1 : pageNumber;
        //}
    }
}
