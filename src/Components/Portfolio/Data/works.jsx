import bindu from "/images/icons/bindu.png";
import elit from "/images/icons/elit.png";
export default [
  {
    title: "Bindu Blood Bank",
    imgUrl: bindu,
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind", "Django", "PostGres"],
    live: "https://bindu-blood-bank.onrender.com/",
    features: (
      <>
        Features:
        <li>
          Developed a secure user registration system with email verification
          for account activation.
        </li>
        <li>
          {" "}
          Implemented admin functionalities for service management and contact
          us message.
        </li>
        <li>
          {" "}
          Create a user friendly profile system. Added blood request and blood
          donation functionalities for authenticated users.
        </li>
        <li>
          Enabled features for filtering donors, total donation, filtering blood
          requests and many more.
        </li>
      </>
    ),
  },
  {
    title: "E-Lit Emporium",
    imgUrl: elit,
    tech: [
      "HTML5",
      "CSS3",
      "ReactJS",
      "Django REST Framework",
      "PostgreSQL",
    ],
    live: "https://e-lit-emporium.netlify.app/",
    features: (
      <>
        Features:
        <li>
          {" "}
          Developed a book store website using React and Django REST framework
          for API creation.
        </li>
        <li>
          {" "}
          Implemented JWT Token authentication for user, admin, and publisher
          login and registration.
        </li>
        <li>
          {" "}
          Created a dynamic book catalog allowing users to browse, search, and
          filter books.
        </li>
        <li>
          Enabled users to place orders securely, with features like shopping
          cart functionality for convenient book purchasing.
        </li>
      </>
    ),
  },
];
