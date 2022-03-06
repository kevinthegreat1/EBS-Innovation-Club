<template>
  <header>
    <nav class="navbar site-header fixed-top navbar-expand-md navbar-dark p-md-3">
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
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Leaderboard</a>
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
    <div class="container-panel w-100 vh-100">
      <div class="col-6">
        <div class="display-6 p-4 text-white">Leaderboard</div>
        <div class="list-group-flush p-4">
          <a href="#" class="list-group-item list-group-item-action active py-4 my-2" aria-current="true">
            <img src="static/images/crown.svg" alt="Crown" width="25" height="25">
            Mayer
          </a>
          <a href="#" class="list-group-item leaderboard-item py-4 my-2">Halsted</a>
          <a href="#" class="list-group-item leaderboard-item py-4 my-2">Eagles Nest</a>
          <a href="#" class="list-group-item leaderboard-item py-4 my-2">Kravis</a>
          <a href="#" class="list-group-item leaderboard-item py-4 my-2">Flagler</a>
          <a href="#" class="list-group-item leaderboard-item py-4 my-2">Tayler</a>
        </div>
      </div>
      <div class="col-4">
      </div>
    </div>
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
  name: "lb"
}
</script>

<style scoped>
.site-header {
  background-color: rgba(0, 0, 0, .80);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  backdrop-filter: saturate(180%) blur(15px);
}

.container {
  max-width: 960px;
}

.container-panel {
  padding-top: 70px;
  background-color: black;
}

.leaderboard-item {
  background-color: rgba(30, 39, 46,1.0);
  color:azure
}

.leaderboard-item:hover{
  background-color: rgba(44, 62, 80,1.0);
  color:azure
}

.chart-container {
  width: 50%;
  height: 50%;
}
</style>