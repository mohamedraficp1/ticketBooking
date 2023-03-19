import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiSurveyFill, RiUserAddFill } from "react-icons/ri";

const iconColor = "#8f9691";
const activeIconColor = "#16348D";

const sidemenuData = [
  {
    id: "viewuser",
    label: "Patients",
    icon: <FaUserAlt size={18} color={iconColor} />,
    activeIcon: <FaUserAlt size={18} color={activeIconColor} />,
    to: `view-patients`,
  },
  {
    id: "addpatient",
    label: "Add Patient",
    icon: <RiUserAddFill size={18} color={iconColor} />,
    activeIcon: <RiUserAddFill size={18} color={activeIconColor} />,
    to: `add-patients`,
  },
  {
    id: "viewcategories",
    label: "Categories",
    icon: <MdCategory size={18} color={iconColor} />,
    activeIcon: <MdCategory size={18} color={activeIconColor} />,
    to: `view-categories`,
  },
  {
    id: "viewsurveys",
    label: "Surveys",
    icon: <RiSurveyFill size={18} color={iconColor} />,
    activeIcon: <RiSurveyFill size={18} color={activeIconColor} />,
    to: `view-surveys`,
  },
];

export default sidemenuData;
