import Logo from "@/Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* Company Information */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Transform your life with Evogym's world-class fitness facilities and
            expert trainers. We're committed to helping you achieve your fitness
            goals through personalized training, state-of-the-art equipment, and
            a supportive community that motivates you every step of the way.
          </p>
          <p className="my-5">
            Join thousands of members who have already transformed their lives
            with Evogym. Your journey to a healthier, stronger you starts here.
          </p>
          <p className="font-semibold text-gray-500">
            © 2024 Evogym. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-gray-500 mb-4">Quick Links</h4>
          <div className="space-y-3">
            <p className="hover:text-primary-500 cursor-pointer transition-colors">
              Home
            </p>
            <p className="hover:text-primary-500 cursor-pointer transition-colors">
              About Us
            </p>
            <p className="hover:text-primary-500 cursor-pointer transition-colors">
              Membership Plans
            </p>
            <p className="hover:text-primary-500 cursor-pointer transition-colors">
              Personal Training
            </p>
            <p className="hover:text-primary-500 cursor-pointer transition-colors">
              Group Classes
            </p>
            <p className="hover:text-primary-500 cursor-pointer transition-colors">
              Fitness Blog
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-gray-500 mb-4">Contact Us</h4>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="mr-2">📍</span>
              123 Fitness Street, Gym City, GC 12345
            </p>
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              (555) 123-4567
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              info@evogym.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">🕒</span>
              Mon-Fri: 5AM-11PM
              <br />
              <span className="ml-6">Sat-Sun: 6AM-10PM</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto w-5/6 mt-12 pt-8 border-t border-primary-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <p>Privacy Policy • Terms of Service • Cookie Policy</p>
          </div>
          <div className="flex space-x-4">
            <span className="text-2xl cursor-pointer hover:text-primary-500 transition-colors">
              📱
            </span>
            <span className="text-2xl cursor-pointer hover:text-primary-500 transition-colors">
              💻
            </span>
            <span className="text-2xl cursor-pointer hover:text-primary-500 transition-colors">
              📷
            </span>
            <span className="text-2xl cursor-pointer hover:text-primary-500 transition-colors">
              🐦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
