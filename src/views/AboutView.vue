<template>
  <div class="about-container">
    <h1>About Me</h1>
    <p>
      I'm an aspiring front-end developer specializing in Vue.js. I created this
      To-Do List application to showcase my skills and passion for web
      development. I'm eager to collaborate on exciting projects and open to
      online internships. Connect with me:
    </p>
    <div class="contacts">
      <ul>
        <li>
          <a href="https://github.com/SabirovOR" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://t.me/Sthpw_1" target="_blank"
            >Telegram</a
          >
        </li>
        <li><a href="mailto:O.rsabirov@icloud.com">Email</a></li>
      </ul>
    </div>
    <!-- <img src="@/assets/images/example-photo.jpg" alt="Example Photo" /> -->
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;
}

.contacts ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contacts li {
  display: inline;
  margin: 0 10px;
}

.contacts a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.contacts a:hover {
  text-decoration: underline;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 20px auto;
}
</style>
