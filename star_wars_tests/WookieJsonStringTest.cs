using Xunit;
using star_wars.Helpers;

namespace star_wars_tests
{
    public class WookieJsonStringTest
    {
        [Fact]
        public void fixWookieJsonString_whhuananAsProperty_replacesWithNull()
        {
            string testString = "{\"property\": whhuanan}";

            string actual = ControllerHelper.fixWookieJsonString(testString);

            Assert.Equal("{\"property\": null    }", actual);
        }

        [Fact]
        public void fixWookieJsonString_whhuananAsStringProperty_doesntReplace()
        {
            string testString = "{\"property\": \"whhuanan\"}";

            string actual = ControllerHelper.fixWookieJsonString(testString);

            Assert.Equal("{\"property\": \"whhuanan\"}", actual);
        }

        [Fact]
        public void fixWookieJsonString_multipleProperties_replacesBoth()
        {
            string testString = "{\"property1\": whhuanan, \"property2\": whhuanan}";

            string actual = ControllerHelper.fixWookieJsonString(testString);

            Assert.Equal("{\"property1\": null    , \"property2\": null    }", actual);
        }

        [Fact]
        public void fixWookieJsonString_multipleProperties_replacesNonString()
        {
            string testString = "{\"property1\": whhuanan, \"property2\": \"whhuanan\"}";

            string actual = ControllerHelper.fixWookieJsonString(testString);

            Assert.Equal("{\"property1\": null    , \"property2\": \"whhuanan\"}", actual);
        }
    }
}
