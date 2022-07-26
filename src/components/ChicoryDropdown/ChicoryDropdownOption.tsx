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

export default function ChicoryDropdownOption({
  dropdowndata,
}: DropdownProps) {
  const {id, logoUrl, name, requiresLocation, shopOnLogoUrl, slug} = dropdowndata

  return <option>{name}</option>;
}
