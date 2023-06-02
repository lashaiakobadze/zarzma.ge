import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import style from "./NavItem.module.css";

interface NavigationItemProps {
  href: string;
  label: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
  dropdownItems,
}) => {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (router.asPath).includes(href);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {!dropdownItems?.length && (
        <Link href={href} legacyBehavior>
          <a className={`${style.navItem} ${isActive ? `${style.active}` : ""}`}>
            {label}
          </a>
        </Link>
      )}

      {dropdownItems?.length && (
        <div className={style.navItemWrapper}>
          <Link href={href} legacyBehavior>
            <a
              className={`${style.navItem} ${isActive ? `${style.active}` : ""}`}
              onMouseEnter={handleMouseEnter}
            >
              {label}
            </a>
          </Link>

          {isDropdownOpen && dropdownItems && (
            <div className={style.dropdown}>
              <ul onMouseLeave={handleMouseLeave}>
                {dropdownItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} legacyBehavior>
                      <a className={style.navItem}>{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavigationItem;
