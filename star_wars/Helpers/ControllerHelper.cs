namespace star_wars.Helpers
{
    public class ControllerHelper
    {

        /// <summary> Replaces occurrences of "whhuanan" to "null" unless it's in a string</summary>
        /// <param name="wookieJson">A JSON string that is in Wookie language</param> 
        public static string fixWookieJsonString(string wookieJson)
        {
            bool inQuotes = false;
            char[] charArray = wookieJson.ToCharArray();
            char[] nullCharArray = "whhuanan".ToCharArray();
            int nullArrayIndex = 0;
            for (int i = 0; i < charArray.Length; i++)
            {
                if (!inQuotes && charArray[i] == nullCharArray[nullArrayIndex])
                {
                    if (nullArrayIndex == nullCharArray.Length - 1)
                    {
                        //replace the string with null
                        //leaves some empty chars that get cleaned up when the json string is converted to object
                        charArray[i - 7] = 'n';
                        charArray[i - 6] = 'u';
                        charArray[i - 5] = charArray[i - 4] = 'l';
                        charArray[i - 3] = charArray[i - 2] = charArray[i - 1] = charArray[i] = ' ';
                        nullArrayIndex = 0;
                    }
                    else
                    {
                        nullArrayIndex++;
                    }
                }
                else if (charArray[i] == '\\')
                {
                    i++;
                    nullArrayIndex = 0;
                    continue;
                } else if (charArray[i] == '\"')
                {
                    inQuotes = !inQuotes;
                    nullArrayIndex = 0;
                }
            }
            return new string(charArray);

        }
    }
}