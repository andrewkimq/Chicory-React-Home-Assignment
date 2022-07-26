type DropdownProps = {
  dropdowndata: {
    id: string;
    logoUrl: string;
    name: string;
    requiresLocation: boolean;
    shopOnLogoUrl: string;
    slug: string;
  },
  index: Number
};

export default function ChicoryDropdownOption({
  dropdowndata, index
}: DropdownProps) {
  const {id, logoUrl, name, requiresLocation, shopOnLogoUrl, slug} = dropdowndata

  return <option selected={index===5}>{name}</option>;
}
