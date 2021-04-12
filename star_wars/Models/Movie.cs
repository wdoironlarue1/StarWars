using Newtonsoft.Json;

namespace star_wars.Models
{
    public class Movie
    {
        public string title { get; set; }

        [JsonProperty("opening_crawl")]
        public string openingCrawl { get; set; }

        [JsonProperty("release_date")]
        public string releaseDate { get; set; }

        [JsonProperty("episode_id")]
        public int episodeId { get; set; }

        [JsonProperty("aoahaoanwo")]
        private string wookieeTitle { set { title = value; } }

        [JsonProperty("ooakwowhahwhrr_oarcraohan")]
        private string wookieeOpeningCrawl { set { openingCrawl = value; } }

        [JsonProperty("rcwoanworacwo_waraaowo")]
        private string wookieeReleaseDate { set { releaseDate = value; } }

        [JsonProperty("woakahcoowawo_ahwa")]
        private int wookieEpisodeId { set { episodeId = value; } }
    }
}