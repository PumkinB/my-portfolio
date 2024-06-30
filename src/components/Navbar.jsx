const Navbar = ({ Navigation }) => {
  return (
    <div className="flex w-full justify-center rounded-r-lg rounded-l-lg md:rounded-r-none md:rounded-l-none fixed bottom-0 right-0  md:top-0 md:right-0 md:left-0 md:bottom-auto md:justify-between px-20 py-5 bg-primary bg-opacity-80 backdrop-blur-sm text-white z-50">
      <div className="font-medium text-2xl">
        <a href="/" className="hidden md:block text-secondary hover:opacity-70 duration-500">
          Oliver Chin
        </a>
      </div>

      <ul className="flex gap-12 px-20 text-lg text-center">
        {Navigation.map((Link) => (
          <li key={Link.name} className="group">
            <a href={Link.link} className=" hover:text-secondary">
              {Link.name}
            </a>
            <div className="group-hover:border border-secondary border-y-2 rounded-lg group-hover:border-y-2 w-0 group-hover:w-full transform duration-300 ease-in-out"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
