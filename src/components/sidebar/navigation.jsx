import { Link } from "react-router-dom";
import slugify from "slugify";

const Navigation = ({ menuItems }) => {
  return (
    <nav className="p-5">
      <ul>
        {menuItems.map((item) => {
          const menuItemPath = `/${slugify(item, { lower: true })}`;

          return (
            <li key={item}>
              <Link key={item} to={menuItemPath}>
                <a className="p-5 no-underline block text-white font-regular hover:text-siesta-grey-light hover:border-b-3 hover:border-siesta-grey-light">
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
