const Footer = () => {
  return (
    <div className="bg-orange-500 p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          FoodEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
