const city_country = (city: string, country: string): string =>
{
    return `${city}, ${country}`;
}


console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Florida", "USA"));
console.log(city_country("Tokyo", "Japan"));