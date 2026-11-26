# ÁUREA ARCHITECTURE

Landing page de alto padrão para o ateliê de arquitetura contemporânea e design monolítico **ÁUREA ARCHITECTURE**.

## 🚀 Tecnologias

- **React 18**
- **Vite 6**
- **Tailwind CSS**
- **GSAP (ScrollTrigger)**
- **Lenis Smooth Scroll**
- **Lucide Icons**

---

## 🛠️ Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento
npm run dev

# Gerar build otimizado para produção (dist/)
npm run build

# Visualizar build de produção localmente
npm run preview
```

---

## 🌐 Deploy na Hostinger

Este repositório está configurado para publicação automática na Hostinger via **GitHub Deployment** ou através de upload dos arquivos estáticos da pasta `dist/`.

O projeto inclui um arquivo `public/.htaccess` pré-configurado que é injetado no build para:
- Redirecionamento automático de HTTP para HTTPS
- Roteamento SPA (Single Page Application) sem erros 404
- Compressão GZIP / Deflate para alta performance
- Políticas de cache para fontes, imagens, CSS e JS
