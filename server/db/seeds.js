use portfolio;
db.dropDatabase();

db.shares.insertMany([
    {"Meta Data": {
        "1. Information": "Price at purchase",
        "2. Symbol": "TSCO.LON",
        "3. Last Refreshed": "2022-06-30",
        "4. Output Size": "Full size",
        "5. Time Zone": "US/Eastern",
        "6. Purchased Price": "266.520",
        "7. Purchased Date": "2022-03-07",
        "8. Units Held": "2500"
        }
    },
    {"Meta Data": {
        "1. Information": "Price at purchase",
        "2. Symbol": "BARC.LON",
        "3. Last Refreshed": "2022-06-30",
        "4. Output Size": "Full size",
        "5. Time Zone": "US/Eastern",
        "6. Purchased Price": "159.700",
        "7. Purchased Date": "2022-03-04",
        "8. Units Held": "2000"
        }
    },
    {"Meta Data": {
        "1. Information": "Price at purchase",
        "2. Symbol": "RR.LON",
        "3. Last Refreshed": "2022-06-30",
        "4. Output Size": "Full size",
        "5. Time Zone": "US/Eastern",
        "6. Purchased Price": "80.810",
        "7. Purchased Date": "2022-03-04",
        "8. Units Held": "3000"
        }
    },
    {"Meta Data": {
        "1. Information": "Price at purchase",
        "2. Symbol": "SHEL.LON",
        "3. Last Refreshed": "2022-06-30",
        "4. Output Size": "Full size",
        "5. Time Zone": "US/Eastern",
        "6. Purchased Price": "1915.200",
        "7. Purchased Date": "2022-03-04",
        "8. Units Held": "900"
        }
    },
])