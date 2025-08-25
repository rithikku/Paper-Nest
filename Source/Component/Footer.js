import { LINKDIN_URL } from "../Utils/constants";

const Footer = () => {
  return (
    <div className="footer">
      <p className="disclaimer">
        DISCLAIMER: These PAPERS Are Shared For EDUCATIONAL Purposes Only. All Rights Belong To The AKTU
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} MCA Previous Year Papers. All Rights Reserved
      </p>
      <p className="developer">
        Developed by <strong>Rithik 🚀</strong> |{" "}
        <a
          href={LINKDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default Footer;
