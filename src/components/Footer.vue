<template>
  <footer class="footer">
    <p>Desenvolvido por Ludmylla e Kelvin</p>

    <div class="social">
      <img src="/Facebook.png" alt="Facebook">
      <img src="/insta.png" alt="Instagram">
      <img src="/Twitter.png" alt="Twitter">
    </div>
  </footer>
</template>

<style>
.footer {
  width: 100%;
  background-color: #fdf5ac;
  padding: 20px; 
  color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer p {
  margin: 0;
  margin-left: 43%;
}

.social {
  display: flex;
  gap: 15px;
}

.social img {
  width: 28px;
  cursor: pointer;
  transition: transform 0.2s;
}

.social img:hover {
  transform: scale(1.2);
}
</style>
