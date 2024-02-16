function describe_city(city: string, country: string = "Unknown Country"): void
{
   return console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("Tokyo"); 
describe_city("Berlin", "Germany")