use portfolio;
db.dropDatabase();

db.shares.insertMany([
    {
        "companyName": "Electronic Arts",
        "symbol": "EA",
        "currency": "USD",
        "high": "123.02",
        "low": "120.71",
        "Purchased Price": "126.18",
        "Purchased Date": "2022-03-07",
        "Units Held": "2500"

    },
    {
        "companyName": "Alphabet Inc",
        "symbol": "GOOG",
        "currency": "USD",
        "high": "2196.13",
        "low": "2142.10",
        "Purchased Price": "2597.30",
        "Purchased Date": "2022-03-07",
        "Units Held": "2500"

    },
    {
        "companyName": "Amazon",
        "symbol": "AMZN",
        "currency": "USD",
        "high": "109.75",
        "low": "105.85",
        "Purchased Price": "141.40",
        "Purchased Date": "2022-03-07",
        "Units Held": "2500"

    },
    {
        "companyName": "Ebay",
        "symbol": "EBAY",
        "currency": "USD",
        "high": "43.04",
        "low": "41.76",
        "Purchased Price": "55.80",
        "Purchased Date": "2022-03-07",
        "Units Held": "2500"

    },
])