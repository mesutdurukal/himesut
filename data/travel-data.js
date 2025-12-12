// Visited countries (URL is auto-generated from name)
const travelCountries = [
    "Turkey", "Germany", "Bosnia", "Croatia", "France", "Italy",
    "Netherlands", "Montenegro", "Spain", "Czech Republic", "Hungary",
    "Austria", "Belgium", "Portugal", "Japan", "Greece", "United States",
    "Canada", "England", "Singapore", "Taiwan", "Thailand", "Philippines",
    "Vietnam", "Denmark", "Norway", "Malaysia"
];

// Generate full travelData with URLs
const travelData = travelCountries.map(name => ({
    name,
    url: `articles.html?category=travel&id=${name}`
}));
