<template>
  <div
    class="public-theme bg-background min-h-screen flex items-center justify-center p-margin-x text-on-surface font-body-md"
  >
    <!-- Login Container -->
    <main
      class="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-lg login-card-shadow overflow-hidden"
    >
      <!-- Header / Logo -->
      <div
        class="px-stack-lg pt-section-padding pb-stack-lg flex flex-col items-center border-b border-surface-container-high bg-surface-bright"
      >
        <img
          alt="G8 News Logo"
          class="w-24 h-24 object-contain mb-stack-sm rounded-sm"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_6Cdf9QgYTJuNXlEceGqzDIBEyA7GL6zo47Y7urb1ZsRCZgSvlNrmf-36GrfeUshoQYwjPzmpjvzigrB-PPe3pmjN-8z2_MNT40DhlmmFvYYZNd_1CizMJdG7opsMYk-rzflkQPynz5kTUwMaMwpUGktxKrQmkYe8ujLdBHDrO0o0q9iIZwBUtCu-vJUNhmQCKWjcibZ8IHzEoNXT3JO_zh0aKxGKHFPzivSVOip4480pvMHfF4DCxwagg33dcZf7qgV-UXSBnbErELU"
        />
        <h1 class="font-headline-md text-headline-md text-primary">Painel Administrativo</h1>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-2 text-center">
          Acesse o sistema de gestão de conteúdo com suas credenciais seguras.
        </p>
      </div>
      <!-- Login Form -->
      <form class="p-stack-lg flex flex-col gap-stack-lg" onsubmit="event.preventDefault()">
        <!-- Usuário Field -->
        <div class="flex flex-col gap-2">
          <label
            class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
            for="username"
            >Usuário</label
          >
          <div class="relative">
            <span
              class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
              >person</span
            >
            <input
              class="input-signature w-full pl-10 pr-4 py-3 font-body-md text-body-md text-on-surface"
              id="username"
              name="username"
              placeholder="Digite seu usuário"
              type="text"
            />
          </div>
        </div>
        <!-- Senha Field -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <label
              class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
              for="password"
              >Senha</label
            >
            <a
              class="font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
              href="#"
              >Esqueci minha senha</a
            >
          </div>
          <div class="relative">
            <span
              class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
              >lock</span
            >
            <input
              class="input-signature w-full pl-10 pr-10 py-3 font-body-md text-body-md text-on-surface"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
            <button
              aria-label="Mostrar senha"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors focus:outline-none"
              type="button"
            >
              <span class="material-symbols-outlined text-lg">visibility_off</span>
            </button>
          </div>
        </div>
        <!-- Submit Button -->
        <RouterLink :to="{ name: 'Dashboard' }">
          <button
            class="w-full mt-4 bg-primary text-on-primary font-label-lg text-label-lg py-4 px-6 rounded-lg hover:bg-primary-container hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            type="submit"
          >
            <span>Entrar</span>
            <span class="material-symbols-outlined text-sm">login</span>
          </button>
        </RouterLink>
      </form>
      <!-- Footer -->
      <div class="px-stack-lg pb-stack-lg pt-4 text-center">
        <p
          class="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-1"
        >
          <span class="material-symbols-outlined text-[16px]">encrypted</span>
          Conexão segura
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.input-signature {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #c1c8c2;
  background-color: #f3f4f5;
  border-radius: 0.125rem 0.125rem 0 0;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}
.input-signature:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: #012d1d;
  background-color: #edeeef;
}
.login-card-shadow {
  box-shadow: 0 10px 40px -10px rgba(1, 45, 29, 0.08);
}
</style>
