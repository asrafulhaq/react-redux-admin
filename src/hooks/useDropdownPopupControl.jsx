import { useEffect, useRef, useState } from "react";

const useDropdownPopupControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  // toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    console.log(e.target);
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { isOpen, toggleMenu, dropDownRef };
};

export default useDropdownPopupControl;
