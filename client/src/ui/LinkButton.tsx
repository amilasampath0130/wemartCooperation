
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  showButton?: boolean;
  link?: string;
  className?: string;
}

const LinkButton = ({ showButton, link, className }: Props) => {
    const newClassName = twMerge(
        "bg-black/60 text-white px-6 py-2.5 rounded-full flex items-center gap-2 duration-200 hover:bg-black/80 border border-white shadow-md",
        className
      );
      
  return (
    <Link to={link ? link : '/Product'} className={newClassName}>
      {showButton && <FaArrowLeft />} Start Shopping
    </Link>
  );
};

export default LinkButton;
