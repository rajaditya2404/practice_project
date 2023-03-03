// import {}
import style from "./Navbar.module.css";

const Navbar = () => {
  console.log(style);
  return (
    <header className={`${style.header} bg-yellow-400`}>
      <nav className={style.nav}>
        <h2>Logo</h2>
        <div className={style.element}>
          <a className="bg-green-400" href="/home">
            home
          </a>
          <a href="/My work">My work</a>
          <a href="/Blog">Blog</a>
          <a href="/About me">About me</a>
        </div>

        {/* <ul>
          //{" "}
          <li>
            // <a href="/">home</a>
            //{" "}
          </li>
          //{" "}
          <li>
            // <a href="/about">about</a>
            //{" "}
          </li>
          //{" "}
          <li>
            // <a href="/contact">contact</a>
            //{" "}
          </li>
          //{" "}
        </ul> */}
      </nav>

      <input
        className={style.searchhere}
        type="text"
        name="search"
        id="search"
        placeholder="search here"
      />

      <button className={style.navbtn}>search</button>
    </header>
  );
};
export default Navbar;
