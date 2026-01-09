const Footer = () => {
  return (
     <footer className="border-t py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        © {new Date().getFullYear()} SellSharp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
