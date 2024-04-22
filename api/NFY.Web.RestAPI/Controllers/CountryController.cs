using Microsoft.AspNetCore.Mvc;

namespace NFY.Web.RestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly List<Country> Countries = new List<Country>()
        {
            new Country() { Id = 1, Name = "Russia", Flag = @"f/f3/Flag_of_Russia.svg", Area = 17075200, Population = 146989754 },
            new Country() { Id = 2, Name = "Canada", Flag = @"c/cf/Flag_of_Canada.svg", Area = 9976140, Population = 36624199 },
            new Country() { Id = 3, Name = "United States", Flag = @"a/a4/Flag_of_the_United_States.svg", Area = 9629091, Population = 324459463 },
            new Country() { Id = 4, Name = "China", Flag = @"f/fa/Flag_of_the_People%27s_Republic_of_China.svg", Area = 9596960, Population = 1409517397 },
        };

        private readonly ILogger<CountryController> _logger;

        public CountryController(ILogger<CountryController> logger)
        {
            _logger = logger;
        }

        [HttpGet()]
        public ActionResult<IEnumerable<Country>> Get()
        {
            return Ok(this.Countries);
        }

        [HttpGet("{id}")]
        public ActionResult<Country> GetCountryById(int Id)
        {
            return Ok(this.Countries.FirstOrDefault(f => f.Id == Id));
        }

        [HttpPost()]
        public ActionResult<Country> AddCountry(Country country)
        {
            this.Countries.Add(country);
            return Ok(country);
        }

        [HttpPut()]
        public ActionResult<Country> UpdateCountry(Country country)
        {
            this.Countries[this.Countries.FindIndex(f => f.Id == country.Id)] = country;

            return Ok(country);
        }

    }
}