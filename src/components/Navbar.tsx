const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <h1 className="text-xl font-bold text-blue-600">SellSharp</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
