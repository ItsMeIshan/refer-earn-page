function Header() {
  return (
    <>
      <nav className="navigation">
        <li className="logo">
          <img src="/logo.png" alt="Tutedude" />
        </li>
        <div className="nav-actions">
          <li>My Assignment</li>
          <li>Chat with Mentor</li>
          <a className="menu">
            <img className="user-icon" src="/user-icon.svg" alt="user" />
            <span>Profile Name</span>
            <div className="dropdown">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
                  fill="#800080"
                />
              </svg>
            </div>
            {/* <img src="/drop-down-icon.svg" alt="open-menu" /> */}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
