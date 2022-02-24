import { Link } from "react-router-dom";
import slugify from "slugify";

const Navigation = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => {
          const menuItemPath = index
            ? `/${slugify(item, { lower: true })}`
            : "/";
          return (
            <li key={item}>
              <Link key={item} to={menuItemPath}>
                <a>{item}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
