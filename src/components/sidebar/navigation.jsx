import { Link } from "react-router-dom";
import slugify from "slugify";

const Navigation = ({ menuItems }) => {
  return (
    <nav className="p-5">
      <ul>
        {menuItems.map((item, index) => {
          const menuItemPath = index
            ? `/${slugify(item, { lower: true })}`
            : "/";
          return (
            <li key={item}>
              <Link key={item} to={menuItemPath}>
                <a className="no-underline block text-white font-regular p-6 hover:text-siesta-grey-light">
                  {item}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
