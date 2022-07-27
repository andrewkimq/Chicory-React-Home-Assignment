type DropdownProps = {
  dropdowndata: {
    id: string;
    logoUrl: string;
    name: string;
    requiresLocation: boolean;
    shopOnLogoUrl: string;
    slug: string;
  };
  handleClick: Function;
  defaultValue: string;
};

export default function ChicoryDropdownOption({
  dropdowndata,
  handleClick,
  defaultValue,
}: DropdownProps) {
  const { name } = dropdowndata;

  return (
    <option
      onClick={() => handleClick(name)}
      value={name}
    >
      {name}
    </option>
  );
}
