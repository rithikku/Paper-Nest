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
          href="https://www.linkedin.com/in/rithik-kumar-%F0%9F%9A%80-547074231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
