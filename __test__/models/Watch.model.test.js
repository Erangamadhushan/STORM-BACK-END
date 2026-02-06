const Watch = require("../../models/watch/watch.model");

describe("Audit watch model", () => {
    test("should create a watch with valid data", async () => {
        const watchData = {
            modelNumber: "WM-1234",
            imageURL: "http://example.com/watch.jpg",
            brand: "Omega",
            countryOfOrigin: "Switzerland",
            price: 5000,
            type: "Luxury"
        };

        const watch = new Watch(watchData);
        await watch.validate();

        expect(watch.modelNumber).toBe(watchData.modelNumber);
        expect(watch.imageURL).toBe(watchData.imageURL);
        expect(watch.brand).toBe(watchData.brand);
        expect(watch.countryOfOrigin).toBe(watchData.countryOfOrigin);
        expect(watch.price).toBe(watchData.price);
        expect(watch.type).toBe(watchData.type);
    });
})