import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="bg-white dark:bg-gray-900 ">
      <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 text-center p-5">
        <span class="text-lg text-gray-500 dark:text-gray-300 sm:text-center">
          © {currentYear} <a href="https://tanzid.xyz/">TH™</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
