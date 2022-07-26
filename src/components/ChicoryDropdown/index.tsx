import React from "react";

const data = {
  data: {
    retailers: [
      {
        id: "15",
        slug: "walmartgrocery",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/15/walmart.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/15/Walmart_2.png",
        name: "Walmart Grocery",
        requiresLocation: false,
      },
      {
        id: "4",
        slug: "amazonfresh",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/shoponlogos/amazon-fresh.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/fresh.png",
        name: "Amazon Fresh",
        requiresLocation: false,
      },
      {
        id: "3",
        slug: "instacart",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/3/instacart-shopmore-new.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/3/InstacartLogo_Kale-602x124-ca27fd3.png",
        name: "Instacart",
        requiresLocation: false,
      },
      {
        id: "12",
        slug: "stopandshop",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/12/stop-and-shop.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/stop_and_shop_logo_1.webp",
        name: "Stop and Shop (Ahold)",
        requiresLocation: false,
      },
      {
        id: "44",
        slug: "targetfresh",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/44/target_shopmore.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/44/target_logo.png",
        name: "Target (pick up and same day delivery)",
        requiresLocation: false,
      },
      {
        id: "10",
        slug: "shoprite",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/shoponlogos/shoprite.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/image_logos_Shoprite.png",
        name: "ShopRite (Wakefern)",
        requiresLocation: false,
      },
      {
        id: "14",
        slug: "amazon",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/shoponlogos/amazon.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/amazon_logo.svg",
        name: "Amazon",
        requiresLocation: false,
      },
      {
        id: "59",
        slug: "wholefoods",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/None/whole-foods.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/59/108-1081811_whole-foods-logo-png.png",
        name: "Whole Foods Market (Amazon Fresh)",
        requiresLocation: false,
      },
      {
        id: "118",
        slug: "cvs",
        shopOnLogoUrl: "",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/118/image_logos_cvs.png",
        name: "CVS (Instacart)",
        requiresLocation: false,
      },
      {
        id: "16",
        slug: "foodtown",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/shoponlogos/foodtown.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/foodtown_DUJ6rpS.png",
        name: "Foodtown (Freshop)",
        requiresLocation: false,
      },
      {
        id: "1390",
        slug: "7-eleven",
        shopOnLogoUrl: "",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/1390/image_logos_7_eleven.png",
        name: "7-Eleven (Instacart)",
        requiresLocation: false,
      },
      {
        id: "50",
        slug: "targetshipping",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/50/shop-on.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/50/target_logo.png",
        name: "Target (standard shipping)",
        requiresLocation: false,
      },
      {
        id: "1573",
        slug: "walgreens",
        shopOnLogoUrl: "",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/1573/image_logos_walgreens.png",
        name: "Walgreens (Instacart)",
        requiresLocation: false,
      },
      {
        id: "231",
        slug: "wegmans",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/231/wegmans_button.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/231/Wegmans_logo.png",
        name: "Wegman's",
        requiresLocation: false,
      },
      {
        id: "43",
        slug: "walmart",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/shoponlogos/walmart.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/image_logos_Walmart_logo.svg",
        name: "Walmart",
        requiresLocation: false,
      },
      {
        id: "35",
        slug: "acmemarkets",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/shoponlogos/acme-shopon.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/image/logos/acme.png",
        name: "Acme Markets (Instacart)",
        requiresLocation: false,
      },
      {
        id: "54",
        slug: "bjs",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/54/bjs_button.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/54/BJs.png",
        name: "BJ's Wholesale Club (Instacart)",
        requiresLocation: false,
      },
      {
        id: "456",
        slug: "rite-aid",
        shopOnLogoUrl: "",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/456/image_logos_rite_aid.png",
        name: "Rite-Aid (Instacart)",
        requiresLocation: false,
      },
      {
        id: "51",
        slug: "costco",
        shopOnLogoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/51/costco_button.png",
        logoUrl:
          "https://prod-cdn.chicoryapp.com/chicory-retailer/retailer/51/Costco.png",
        name: "Costco (Instacart)",
        requiresLocation: false,
      },
    ],
  },
};

type DropdownProps = {
  dropdowndata: {
    id: string;
    logoUrl: string;
    name: string;
    requiresLocation: boolean;
    shopOnLogoUrl: string;
    slug: string;
  };
};

export default function ChicoryDropdown() {
  return <select></select>;
}
