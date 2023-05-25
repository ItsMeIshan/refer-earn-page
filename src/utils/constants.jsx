import ReferScreen from "../components/Refer&EarnScreen";

export const routes = [
  { name: "UI/UX", component: <ReferScreen />, link: "/" },
  { name: "Refer & Earn", component: <ReferScreen />, link: "/" },
];
export const referralData = [
  {
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    numberOfCourses: 6,
    topics: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    referralAmount: "₹185",
  },
  {
    name: "Subhash Mishra",
    date: "15 Sep, 2022",
    numberOfCourses: 23,
    topics: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
    ],
    referralAmount: "₹485",
  },
  {
    name: "Prafull Kumar",
    date: "11 Sep, 2022",
    numberOfCourses: 26,
    topics: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    referralAmount: "₹485",
  },
];
