import {
  faBriefcase,
  faUser,
  faPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Data =
  // I will assume that role="2000" for "Admin"
  // and role="2001" for "Writer"
  // and role ="2002" for Seller
  // and Any other user will take role="2003"

  [
    {
      name: "Users",
      to: "/Dashboard/Users",
      icon: faUser,
      role: ["2000"],
    },
    {
      name: "New User",
      to: "/Dashboard/AddUser",
      icon: faPlus,
      role: ["2000"],
    },

    {
      name: "Categories",
      to: "/Dashboard/Categories",
      icon: faCartShopping,
      role: ["2000", "2001"],
    },

    {
      name: "Products",
      to: "/Dashboard/Products",
      icon: faBriefcase,
      role: ["2000", "2001", "2002"],
    },
    {
      name: "Reviews",
      to: "/Dashboard/Reviews",
      icon: faBriefcase,
      role: ["2000", "2001"],
    },
  ];
