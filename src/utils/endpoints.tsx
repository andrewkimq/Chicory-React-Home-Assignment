export const endpoint = {
  retailers: `https://cors-anywhere.herokuapp.com/http://prod-cart.chicoryapp.com/api/graph?query= query retailers {
    retailers(zipCode: "11234", blacklistedRetailers: [], whitelistedRetailers: []) {
    id
    slug
    shopOnLogoUrl
    logoUrl
    name
    requiresLocation
    }
    }`,
};
