import ChicoryDropdownOption from "./ChicoryDropdownOption";
import { useFetchRetailers, useLocalStorage } from "../../utils/customhooks";
import { endpoint } from "../../utils/endpoints";
import "./chicorydropdown.css";

type JSONResponse = {
  data?: {
    retailers: Array<Retailer>;
  };
};

type Retailer = {
  id: string;
  logoUrl: string;
  name: string;
  requiresLocation: boolean;
  shopOnLogoUrl: string;
  slug: string;
};

export default function ChicoryDropdown() {
  const [retailerResponse, isLoading] = useFetchRetailers(endpoint.retailers);
  const [value, setValueLocalStorage] = useLocalStorage(
    "chicory-dropdown-default",
    ""
  );

  const handleClick = (name: string): void => {
    setValueLocalStorage(name);
  };

  const typedRetailerResponse = retailerResponse as JSONResponse;

  if (isLoading) return <p className="isloading">Is Loading...</p>;

  return (
    <select className="chicory-drop-down" defaultValue={value}>
      {typedRetailerResponse?.data?.retailers?.map((retailer: Retailer) => {
        return (
          <ChicoryDropdownOption
            key={retailer.id}
            dropdowndata={retailer}
            handleClick={handleClick}
            defaultValue={value}
          />
        );
      })}
    </select>
  );
}
