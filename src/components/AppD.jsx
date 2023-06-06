import { DropdownApp } from "./Dropdown";

function AppD() {
  const handleFilter = () => {
    console.log('66');
  }

  const items = [
    {
      slug: handleFilter,
      anchor: 'On-site'
    },
    {
      slug: handleFilter,
      anchor: 'Hybrid'
    },
    {
      slug: handleFilter,
      anchor: 'Remote'
    }
  ];

  return (
    <aside className="absolute">
      <DropdownApp dropdownTitle="LOCATION TYPE" items={items} />
    </aside>
  );
}

export {AppD}