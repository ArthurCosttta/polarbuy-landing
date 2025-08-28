# 📋 Layout do Quiz - Documentação Completa

## 🎯 Visão Geral
Este documento descreve o layout e estrutura de cada página do quiz de análise da pele, permitindo fácil personalização das perguntas e conteúdo.

---

## 📱 **PÁGINA 1: UPLOAD DE FOTO**

### **Estrutura Visual:**
- **Background:** Gradiente sutil (gray-50 → white)
- **Container:** Card branco com sombra e bordas arredondadas
- **Layout:** Centralizado com espaçamento generoso

### **Elementos:**
```tsx
// Ícone da câmera (16x16, fundo roxo claro)
<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
  <svg className="w-8 h-8 text-purple-600">...</svg>
</div>

// Título principal
<h2 className="text-xl font-semibold text-gray-800 mb-2">
  Vamos criar um Plano Personalizado
</h2>

// Descrição
<p className="text-gray-600 text-sm">
  Envie uma foto frontal, bem iluminada para começarmos
</p>

// Botão de upload
<div className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl cursor-pointer transition-colors">
  Enviar Foto
</div>
```

### **Personalização:**
- **Título:** "Vamos criar um Plano Personalizado"
- **Descrição:** "Envie uma foto frontal, bem iluminada para começarmos"
- **Botão:** "Enviar Foto"

---

## ⏳ **PÁGINA 2: LOADING/ANÁLISE**

### **Estrutura Visual:**
- **Background:** Card branco com sombra
- **Layout:** Centralizado com animação de pulse

### **Elementos:**
```tsx
// Foto do usuário (32x32, circular com borda roxa)
<img src={photo} alt="preview" className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-purple-100" />

// Ícone de loading (16x16, fundo roxo claro)
<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
  <svg className="w-8 h-8 text-purple-600">...</svg>
</div>

// Título animado
<h2 className="text-xl font-semibold text-gray-800 mb-2">
  Analisando sua pele...
</h2>

// Descrição
<p className="text-gray-600 text-sm">
  Enquanto isso, responda algumas perguntas rápidas
</p>
```

### **Personalização:**
- **Título:** "Analisando sua pele..."
- **Descrição:** "Enquanto isso, responda algumas perguntas rápidas"

---

## ❓ **PÁGINA 3: QUIZ (PERGUNTAS SEQUENCIAIS)**

### **Estrutura Visual:**
- **Background:** Card branco com sombra
- **Layout:** Uma pergunta por vez com barra de progresso

### **Elementos Principais:**

#### **1. Barra de Progresso:**
```tsx
// Indicador de progresso
<div className="flex justify-between text-sm text-gray-600 mb-2">
  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
</div>

// Barra visual
<div className="w-full bg-gray-200 rounded-full h-2">
  <div className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
       style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}>
  </div>
</div>
```

#### **2. Foto Preview:**
```tsx
// Foto circular pequena (20x20)
<img src={photo} alt="preview" className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-purple-100" />
```

#### **3. Pergunta Atual:**
```tsx
// Título da pergunta
<h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
  {questions[currentQuestion].title}
</h3>

// Opções de resposta
<div className="space-y-3">
  {questions[currentQuestion].options.map((option) => (
    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
      <input type={questions[currentQuestion].type} ... />
      <span className="text-lg mr-3">{option.emoji}</span>
      <span className="font-medium text-gray-700">{option.label}</span>
    </label>
  ))}
</div>
```

#### **4. Botões de Navegação:**
```tsx
// Botão Voltar (só aparece se não for a primeira pergunta)
{currentQuestion > 0 && (
  <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors">
    Voltar
  </button>
)}

// Botão Continuar/Ver Resultado
<button className={`flex-1 font-semibold py-3 px-6 rounded-xl transition-all ${
  canProceed() 
    ? 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105' 
    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
}`}>
  {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Continuar'}
</button>
```

---

## 📝 **ESTRUTURA DAS PERGUNTAS**

### **Formato da Array de Perguntas:**
```tsx
const questions = [
  {
    id: 'faixa',                    // Identificador único
    title: 'Qual é a sua faixa etária?',  // Título da pergunta
    type: 'radio',                  // Tipo: 'radio' ou 'checkbox'
    options: [                      // Array de opções
      { 
        value: '<25',               // Valor interno
        label: '18 a 25',           // Texto visível
        emoji: '👶'                 // Emoji decorativo
      },
      // ... mais opções
    ]
  },
  // ... mais perguntas
];
```

### **Tipos de Pergunta:**
- **`radio`:** Seleção única (ex: faixa etária, tipo de pele)
- **`checkbox`:** Seleção múltipla (ex: áreas de incômodo)

---

## 🎯 **PÁGINA 4: RESULTADO**

### **Estrutura Visual:**
- **Background:** Múltiplos cards brancos com sombras
- **Layout:** Informações organizadas em seções

### **Elementos:**

#### **1. Foto do Usuário:**
```tsx
<img src={photo} alt="preview" className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-purple-100" />
```

#### **2. Título do Resultado:**
```tsx
<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
  Seu Plano Personalizado
</h2>
<p className="text-gray-600 text-center mb-6">
  Baseado na sua análise e respostas
</p>
```

#### **3. Análise Personalizada:**
```tsx
<div className="bg-purple-50 rounded-xl p-4 mb-6">
  <p className="text-gray-800 text-sm leading-relaxed">{resultado.texto}</p>
</div>
```

#### **4. Rotina Sugerida:**
```tsx
<div className="bg-gray-50 rounded-xl p-4">
  <h3 className="font-semibold text-gray-800 mb-3 text-center">Rotina Sugerida</h3>
  
  {/* Manhã */}
  <div className="flex items-center">
    <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
      <span className="text-yellow-600 text-xs font-bold">AM</span>
    </span>
    <span className="text-sm text-gray-700">{resultado.plano.AM.join(' → ')}</span>
  </div>
  
  {/* Noite */}
  <div className="flex items-center">
    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
      <span className="text-blue-600 text-xs font-bold">PM</span>
    </span>
    <span className="text-sm text-gray-700">{resultado.plano.PM.join(' → ')}</span>
  </div>
  
  {/* Semanal */}
  <div className="flex items-center">
    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
      <span className="text-green-600 text-xs font-bold">S</span>
    </span>
    <span className="text-sm text-gray-700">{resultado.plano.Semanal.join(' / ')}</span>
  </div>
</div>
```

#### **5. Disclaimer:**
```tsx
<p className="text-xs text-gray-500 text-center mt-6">
  * Análise cosmética e educacional. Não substitui avaliação médica.
</p>
```

---

## 🎨 **PALETA DE CORES**

### **Cores Principais:**
- **Roxo:** `purple-600`, `purple-700` (botões principais)
- **Roxo Claro:** `purple-100`, `purple-50` (fundos e bordas)
- **Cinza:** `gray-50`, `gray-100`, `gray-200` (fundos e bordas)
- **Texto:** `gray-800` (títulos), `gray-700` (texto), `gray-600` (descrições)

### **Cores dos Badges:**
- **AM (Manhã):** `yellow-100` (fundo), `yellow-600` (texto)
- **PM (Noite):** `blue-100` (fundo), `blue-600` (texto)
- **S (Semanal):** `green-100` (fundo), `green-600` (texto)

---

## 📱 **RESPONSIVIDADE**

### **Breakpoints:**
- **Mobile:** `max-w-md` (container principal)
- **Padding:** `p-6` (espaçamento geral)
- **Cards:** `p-8` (upload/loading), `p-6` (quiz/resultado)

### **Elementos Responsivos:**
- **Grid:** `grid-cols-2` para opções de faixa etária
- **Botões:** `flex-1` para distribuição igual
- **Imagens:** Tamanhos fixos para consistência

---

## 🔧 **FUNÇÕES PRINCIPAIS**

### **Navegação:**
- `nextQuestion()`: Avança para próxima pergunta
- `previousQuestion()`: Volta para pergunta anterior
- `canProceed()`: Verifica se pode avançar

### **Gerenciamento de Estado:**
- `currentQuestion`: Índice da pergunta atual
- `answers`: Respostas coletadas
- `step`: Etapa atual do processo

---

## 📝 **COMO PERSONALIZAR**

### **1. Alterar Perguntas:**
Modifique o array `questions` no arquivo `page.tsx`:
```tsx
const questions = [
  {
    id: 'nova_pergunta',
    title: 'Sua nova pergunta aqui?',
    type: 'radio', // ou 'checkbox'
    options: [
      { value: 'valor1', label: 'Opção 1', emoji: '😊' },
      { value: 'valor2', label: 'Opção 2', emoji: '😎' }
    ]
  }
];
```

### **2. Alterar Textos:**
Modifique os textos diretamente nos elementos JSX:
```tsx
<h1 className="text-3xl font-bold text-gray-800 mb-2">
  Seu Novo Título
</h1>
```

### **3. Alterar Cores:**
Substitua as classes de cor do Tailwind:
```tsx
// De:
className="bg-purple-600"
// Para:
className="bg-blue-600"
```

### **4. Adicionar Novas Páginas:**
Crie novos casos no switch de `step` e adicione a lógica correspondente.

---

## 🚀 **PRÓXIMOS PASSOS SUGERIDOS**

1. **Personalizar perguntas** para seu nicho específico
2. **Adicionar validações** mais robustas
3. **Implementar persistência** de dados
4. **Adicionar animações** de transição entre perguntas
5. **Criar sistema de pontuação** para resultados mais precisos
6. **Integrar com backend** para salvar respostas
7. **Adicionar analytics** para acompanhar conversões

---

*Este documento foi criado para facilitar a personalização e manutenção do quiz. Para dúvidas técnicas, consulte o código fonte em `src/app/quizz/page.tsx`.*
