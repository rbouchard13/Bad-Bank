function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a id="brand" className="navbar-brand" href="#" title="Go to BadBank Home">BadBank</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" role="navigation">
          <li id="CreateAccount" className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="Create a new user account">Create Account</a>
          </li>
          <li id="login" className="nav-item">
            <a className="nav-link" href="#/login/" title="Login to access your account">Login</a>
          </li>
          <li id="deposit" className="nav-item">
          <a className="nav-link" href="#/deposit/" title="Process Deposit Transaction">Deposit</a>
          </li>
          <li id="withdraw" className="nav-item">
          <a className="nav-link" href="#/withdraw/" title="Process Withdraw Transaction">Withdraw</a>
          </li>
          <li id="alldata" className="nav-item">
          <a className="nav-link" href="#/alldata/" title="View Session Log">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}