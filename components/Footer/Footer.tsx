import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row ai-center">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <img src="/Logo-Light.svg" />
            </div>
            <div className="col-lg-6 remove-on-tablet remove-on-mobile ta-center">
              <Link href="/">
                <a className="footer-link m-030">Home</a>
              </Link>
              <Link href="/">
                <a className="footer-link m-030">Cookbook</a>
              </Link>
              <Link href="/">
                <a className="footer-link m-030">Contact Me</a>
              </Link>
            </div>
            <div className="col-lg-3 remove-on-tablet remove-on-mobile footer-link ta-right">
              kush@gmail.com
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 remove-on-desctop mt-26 mb-16">
              <Link href="/">
                <a className="footer-link m-030">Home</a>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 remove-on-desctop mt-26 mb-16">
              <Link href="/">
                <a className="footer-link m-030">Contact Me</a>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 remove-on-desctop">
              <Link href="/">
                <a className="footer-link m-030">Cookbook</a>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 remove-on-desctop footer-link">
              kush@gmail.com
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 mt-30 ta-center terms-text">
              Terms of Use. Privacy Policy
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
