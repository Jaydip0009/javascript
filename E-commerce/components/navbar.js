const navbar = () => {
  return `        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
      <a class="navbar-brand" href="#">E-commerce</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/Produts.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/Cart.html">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/Signup.html">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/Login.html">Login</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> `;
};

export default navbar;
