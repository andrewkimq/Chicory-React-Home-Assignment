type DropdownProps = {
  dropdowndata: {
    id: string;
    logoUrl: string;
    name: string;
    requiresLocation: boolean;
    shopOnLogoUrl: string;
    slug: string;
  };
  index: number;
  handleClick: Function;
  defaultIndex: number;
};

export default function ChicoryDropdownOption({
  dropdowndata,
  index,
  handleClick,
  defaultIndex,
}: DropdownProps) {
  const { name } = dropdowndata;

  return (
    <option
      onClick={() => handleClick(index)}
      selected={index === defaultIndex}
      value={name}
    >
      {name}
    </option>
  );
}
