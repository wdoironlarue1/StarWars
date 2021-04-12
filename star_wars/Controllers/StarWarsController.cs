using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using star_wars.Models;
using star_wars.Helpers;

namespace star_wars.Controllers
{
    public class StarWarsController : Controller
    {
        private readonly ILogger<StarWarsController> _logger;

        public StarWarsController(ILogger<StarWarsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Movies()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://swapi.dev/api/films/");
            if (response.IsSuccessStatusCode)
            {
                string responseBody = await response.Content.ReadAsStringAsync();
                dynamic data = JObject.Parse(responseBody);
                IList<Movie> movies = data.results.ToObject<IList<Movie>>();
                return Ok(movies);
            }
            return Problem();
        }

        [HttpGet]
        public async Task<IActionResult> Wookiee()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://swapi.dev/api/films/?format=wookiee");
            if (response.IsSuccessStatusCode)
            {
                string responseBody = await response.Content.ReadAsStringAsync();
                responseBody = ControllerHelper.fixWookieJsonString(responseBody);
                responseBody = responseBody.Replace("\\rc", "\\r").Replace("\\w", "\\n");
                dynamic data = JObject.Parse(responseBody);
                IList<Movie> movies = data.rcwochuanaoc.ToObject<IList<Movie>>();
                return Ok(movies);
            }
            return Problem();
        }

    }
}
