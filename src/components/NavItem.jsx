function NavItem({ label }) {
  return (
    <p className="transition-all text-gray-300 hover:cursor-pointer hover:text-white border-b-2 border-transparent hover:border-lavender hover:-translate-y-1 font-[Inter]">
      {label}
    </p>
  );
}

export default NavItem;
