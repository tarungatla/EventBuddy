import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Render the footer section
  return (
    <footer className="border-t">
      {/* Container for the footer content */}
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        {/* Link to the home page with the site logo */}
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={50}
            height={38}
          />
        </Link>

        <p>{currentYear} EventBuddy. All Rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;