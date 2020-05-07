<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <router-link tag="a" to="/" class="navbar-brand">
    <a class="navbar-brand" href="#">Users List</a>
       </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link tag="li" to="/user-add" class="nav-item active">
             <a class="nav-link">User Add<span class="sr-only">(current)</span></a>
      </router-link>
      <router-link tag="li" to="/user-delete" class="nav-item active">
              <a class="nav-link">User Delete<span class="sr-only">(current)</span></a>
      </router-link>
    </ul>
  </div>
</nav>
</template>