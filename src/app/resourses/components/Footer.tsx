
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2024 MyApp. All rights reserved.</p>
      <p>
        <a href="/about" className="underline">About</a> | 
        <a href="/resources" className="underline"> Resources</a> | 
        <a href="/podcast" className="underline"> Podcast</a> | 
        <a href="/contact" className="underline"> Contact Us</a>
      </p>
    </footer>
  );
};

export default Footer;
