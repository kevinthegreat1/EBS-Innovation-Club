<template>
  <header>
    <nav class="navbar site-header fixed-top navbar-expand-lg navbar-dark p-md-3 ">
      <div class="container">
        <a class="navbar-brand" href="#">Eaglebucks</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/leaderboard">Leaderboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Rewards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <div class="home-head p-4 w-100 vh-100 d-flex">
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-lg-6">
          <img src="static/images/logo.png" class=" img-fluid" alt="Bootstrap Themes" loading="lazy">
        </div>
        <div class="col-lg-4">
          <h1 class="display-5 fw-bold text-white">Get Started With Eaglebucks</h1>
          <p class="lead text-light">Quickly get started with Eaglebucks. Eaglebrook School was founded in 1922 by
            Howard Gibbs as a private boarding and day school for boys in middle school.</p>
          <div class="d-grid">
            <button type="button" class="btn btn-primary shadow0lg btn-lg px-4 me-md-2">Try Now</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero -->
  </main>

  <footer class="container py-5">
    <div class="row">
      <div class="col-12 col-md">
        <img src="static/images/logo.png" width="30" height="30">
        <small class="d-block mb-3 text-muted">&copy; 2022-2024</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Home</a></li>
          <li><a class="link-secondary" href="#">LeaderBoard</a></li>
          <li><a class="link-secondary" href="#">Rewards</a></li>
          <li><a class="link-secondary" href="#">Pricing</a></li>
          <li><a class="link-secondary" href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Resource name</a></li>
          <li><a class="link-secondary" href="#">Resource</a></li>
          <li><a class="link-secondary" href="#">Another resource</a></li>
          <li><a class="link-secondary" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Business</a></li>
          <li><a class="link-secondary" href="#">Education</a></li>
          <li><a class="link-secondary" href="#">Government</a></li>
          <li><a class="link-secondary" href="#">Gaming</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Team</a></li>
          <li><a class="link-secondary" href="#">Locations</a></li>
          <li><a class="link-secondary" href="#">Privacy</a></li>
          <li><a class="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.container {
  max-width: 960px;
}

.site-header {
  background-color: rgba(0, 0, 0, .80);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);
}

.home-head{
  background-color: #000;
}

.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}

</style>