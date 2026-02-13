<template>
<section class="contato">
  <h1>Fale com a gente</h1>
  <p class="contato-desc">
    Tem alguma dúvida ou sugestão? Preencha o formulário abaixo 
  </p>

  <div class="contato-card">
    <form>
      <input type="text" placeholder="Seu nome" required>
      <input type="email" placeholder="Seu email" required>
      <textarea placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar mensagem</button>
    </form>
  </div>

  <div class="contato-info">
    <p>contato@goldenstyle.com</p>
    <p> @goldenstyle</p>
    <p> (84) 99999-9999</p>
  </div>
</section>
</template>
<style scoped>
.contato {
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
}

.contato h1 {
  color: #fff;
  margin-bottom: 10px;
}

.contato-desc {
  color: #eee;
  margin-bottom: 30px;
}

.contato-card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.contato-card form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contato-card input,
.contato-card textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.contato-card textarea {
  resize: none;
  height: 120px;
}

.contato-card button {
  background: #a67c00;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.contato-card button:hover {
  background: #8f6a00;
}

.contato-info {
  margin-top: 30px;
  color: #eee;
}
</style>