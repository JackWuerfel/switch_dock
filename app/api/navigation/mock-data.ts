import { v4 as uuidv4 } from "uuid";

const MockDataNavigation = [
  {
    id: uuidv4(),
    label: "Benefits",
    activeRoute: "/",
    routeTo: "/",
  },
  {
    id: uuidv4(),
    label: "Safety",
    activeRoute: "/safety",
    routeTo: "/safety",
  },
  {
    id: uuidv4(),
    label: "Policies",
    active: false,
    routeTo: "/policies",
    activeRoute: "/policies",
  },
];

export default MockDataNavigation;
