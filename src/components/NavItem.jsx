function NavItem({ label }) {
  return (
    <p className="transition-all text-gray-300 hover:cursor-pointer hover:text-white border-b border-transparent hover:border-lavender font-[Inter]">
      {label}
    </p>
  );
}

export default NavItem;
