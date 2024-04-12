import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Copyright © 2024</span>
        <span className="hidden md:block"> &copy;MovieMania</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Made with &#x2764; by Gokul </p>
        <div className="flex gap-2">
        </div>
      </div>
    </div>
  );
};

export default Footer;
