import { FaGithub } from "react-icons/fa6";

const ELit = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Description, Functionalities, Source Code */}
          <div>
            <h2 className="text-gray-500 text-2xl font-semibold mb-4">
              Project Description
            </h2>
            <p className="text-gray-500 mb-4">
              The book store website is being developed using a tech stack that
              includes Django REST Framework for backend functionality, React
              for front-end user interface, and Tailwind CSS for styling.
              Postman is utilized for comprehensive API testing to ensure
              seamless communication between the front-end and the PostgreSQL
              database backend. This integrated approach ensures a robust and
              efficient development process for the bookstore project.
            </p>
            <h2 className="text-gray-500 text-2xl font-semibold mb-4">
              Functionalities
            </h2>
            <ul className="list-disc list-inside text-gray-500 mb-4">
              <li>
                Developed a book store website using React and Django REST
                framework for API creation.
              </li>
              <li>
                Implemented JWT Token authentication for user, admin, and
                publisher login and registration.
              </li>
              <li>
                Created a dynamic book catalog allowing users to browse, search,
                and filter books.
              </li>
              <li>
                Enabled users to place orders securely, with features like
                shopping cart functionality for convenient book purchasing.
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ripionck/e-Lit-client"
                className="flex items-center gap-2 text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end Code <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://github.com/ripionck/e-Lit-api"
                className="flex items-center gap-2 text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end Code <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* -------------Images-------------------- */}
          <div className="grid grid-cols-2 gap-4 image-container">
            <img
              src="https://i.ibb.co/6Hg3Qx2/E-Lit-Emporium.png"
              alt="E-Lit-Emporium"
              className="image w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/Pwz7V7Y/E-Lit-Emporium-Register.png"
              alt="Register"
              className="image w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/Hr1Xmkb/E-Lit-Emporium-Profile.png"
              alt="Profile"
              className="image w-full h-auto rounded-md"
            />
            <img
              src="https://i.ibb.co/NrnmsXf/E-Lit-Emporium-All-Books.png"
              alt="All Books"
              className="image w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ELit;
