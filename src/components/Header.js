const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand fw-bold " href="#Home">bless.dev</a>
            <button class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end"
              tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title"
                  id="offcanvasNavbarLabel">
                </h5>
                <button type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">

                </button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link fw-bold " aria-current="page" href="#Home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bold " href="#project">project</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  fw-bold" href="#AboutMe">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  fw-bold" href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;






<nav className="navbar navbar-expand-lg bg-white fixed-top">
  <div className="container">
    {/* this is for the logo part */}
    <a href="#Home" className="navbar-brand fw-bold ">
      bless.dev
    </a>
    {/* this is for the hamburger icon to toggle the links */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navmenu"
      aria-controls="navmenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* this div holds the links */}
    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item fw-bold">
          <a href="#Home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item fw-bold">
          <a href="#project" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item fw-bold">
          <a href="#AboutMe" className="nav-link">
            About me
          </a>
        </li>
        <li className="nav-item fw-bold">
          <a href="#Contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>