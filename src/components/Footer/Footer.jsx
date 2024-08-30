
import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <footer className=" w-full footer bg-[#333] text-white p-10">
  <nav>
    <img className='w-32' src={logo} alt="" />
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control md:w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn text-white bg-orange-500 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;