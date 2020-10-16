<template>
  <div>
    <NavBar />
    <main role="main">
      <Jumbotron></Jumbotron>
      <!-- Your nuxt pages will always be injected here -->
      <nuxt></nuxt>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Home/NavBar";
import Footer from "~/components/Home/Footer";
import jumbotron from "~/components/Home/jumbotron";
export default {};
</script>
