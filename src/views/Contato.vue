<template>
  <main class="pagina">
    <h1>Contato</h1>

    <form class="formulario">
      <input type="text" placeholder="Seu nome" />

      <input type="email" placeholder="Seu email" />

      <textarea placeholder="Sua mensagem"></textarea>
  
      <button>Enviar mensagem</button>
    </form>
     <p>Email: contato@goldenstyle.com</p> 
     <p>Instagram: @goldenstyle</p> 
     <p>WhatsApp: (84) 99999-9999</p>

  </main>
</template>

<style scoped>
.pagina {
  padding: 60px;
  color: white;
  text-align: center;
}

.formulario {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.formulario input,
.formulario textarea {
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
}

.formulario textarea {
  height: 120px;
  resize: none;
}

.formulario button {
  padding: 12px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s;
}

.formulario button:hover {
  transform: scale(1.05);
}
</style>
