function getShippingCost(country, price) {
    switch (country) {
        case 'China':
        case 'Chile':
        case 'Australia':
        case 'Jamaica':
            console.log (`Shipping to ${country} will cost ${price} credits`);
            break;
        default:
            console.log("Sorry, there is no delivery to your country");
            break;
    }
}

getShippingCost("Australia", 170);
getShippingCost("Germany");
getShippingCost("China", 100);
getShippingCost("Chile", 250);
getShippingCost("Jamaica", 120);
getShippingCost("Sweden");