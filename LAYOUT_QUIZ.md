# 📋 Layout do Quiz - Guia Completo

Este documento descreve o layout e estrutura de cada página do quiz, facilitando a customização e criação de novas perguntas.

---

## 🎯 **Estrutura Geral do Quiz**

O quiz possui **5 etapas principais**:
1. **Upload** - Envio da foto
2. **Loading** - Análise inicial da foto
3. **Quiz** - Perguntas sequenciais
4. **Analyzing** - Análise final personalizada
5. **Result** - Landing page com resultado

---

## 📝 **Bloco 1: Quiz com Perguntas (Layout Texto)**

### **Características:**
- ✅ **Tipo:** `layout: 'text'`
- ✅ **Navegação:** Botões "Voltar" e "Continuar"
- ✅ **Opções:** Lista vertical com radio/checkbox
- ✅ **Validação:** Só avança após seleção

### **Estrutura das Opções:**
```typescript
{
  value: 'valor_interno',
  label: 'Texto visível para o usuário',
  emoji: '😊'
}
```

### **Exemplo de Pergunta:**
```typescript
{
  id: 'faixa',
  title: 'Qual é a sua faixa etária?',
  type: 'radio',
  layout: 'text',
  options: [
    { value: '<25', label: '18 a 25', emoji: '👶' },
    { value: '25-34', label: '26 a 35', emoji: '👨‍💼' },
    { value: '35-44', label: '36 a 45', emoji: '👩‍💼' }
  ]
}
```

### **📋 Prompt para Criação:**
```
Crie uma nova pergunta de texto para o quiz:
- ID da pergunta: [ex: 'genero', 'estilo_vida']
- Título da pergunta: [ex: 'Qual é o seu gênero?']
- Tipo de resposta: [radio OU checkbox]
- Opções (mínimo 2, máximo 6):
  * Valor: [ex: 'masculino']
  * Label: [ex: 'Masculino']
  * Emoji: [ex: '👨']
```

---

## 🖼️ **Bloco 2: Quiz com Imagens (Layout Cards)**

### **Características:**
- ✅ **Tipo:** `layout: 'cards'`
- ✅ **Navegação:** Avanço automático após clique
- ✅ **Opções:** Grid 2x2 com cards coloridos
- ✅ **Cores:** Cada card tem cor personalizada

### **Estrutura das Opções:**
```typescript
{
  value: 'valor_interno',
  label: 'Texto visível',
  emoji: '😊',
  color: 'bg-blue-100 border-blue-300'
}
```

### **Paleta de Cores Disponíveis:**
- 🔵 **Azul:** `bg-blue-100 border-blue-300`
- 🟢 **Verde:** `bg-green-100 border-green-300`
- 🟣 **Roxo:** `bg-purple-100 border-purple-300`
- 🟡 **Amarelo:** `bg-yellow-100 border-yellow-300`
- 🟠 **Laranja:** `bg-orange-100 border-orange-300`
- 🔴 **Vermelho:** `bg-red-100 border-red-300`
- 🟤 **Marrom:** `bg-amber-100 border-amber-300`
- ⚪ **Cinza:** `bg-gray-100 border-gray-300`

### **Exemplo de Pergunta:**
```typescript
{
  id: 'foco',
  title: 'O que mais te incomoda em sua pele?',
  type: 'checkbox',
  layout: 'cards',
  options: [
    { value: 'flacidez', label: 'Flacidez', emoji: '😔', color: 'bg-blue-100 border-blue-300' },
    { value: 'rugas', label: 'Rugas', emoji: '👴', color: 'bg-purple-100 border-purple-300' }
  ]
}
```

### **📋 Prompt para Criação:**
```
Crie uma nova pergunta com cards para o quiz:
- ID da pergunta: [ex: 'tipo_pele', 'objetivo_tratamento']
- Título da pergunta: [ex: 'Qual é o seu tipo de pele?']
- Tipo de resposta: [radio OU checkbox]
- Opções (mínimo 2, máximo 4 para grid 2x2):
  * Valor: [ex: 'oleosa']
  * Label: [ex: 'Pele Oleosa']
  * Emoji: [ex: '💧']
  * Cor: [escolha da paleta disponível]
```

---

## 🎉 **Bloco 3: Quiz Final (Resultado)**

### **Características:**
- ✅ **Tipo:** Landing page completa
- ✅ **Conteúdo:** Análise personalizada + plano de rotina
- ✅ **Call to Action:** Botão para conversão
- ✅ **Design:** Gradientes e elementos visuais atrativos

### **Estrutura do Resultado:**
```typescript
{
  texto: "Análise personalizada baseada nas respostas...",
  plano: {
    AM: ["Limpeza", "Hidratante", "Protetor"],
    PM: ["Limpeza", "Sérum", "Creme"],
    Semanal: ["Máscara", "Esfoliação"]
  }
}
```

### **📋 Prompt para Criação:**
```
Crie uma nova lógica de resultado para o quiz:
- Condições baseadas nas respostas: [ex: se faixa > 35, mostrar X]
- Análise personalizada: [texto explicativo]
- Rotina matinal (AM): [array de 3-4 passos]
- Rotina noturna (PM): [array de 2-3 passos]
- Rotina semanal: [array de 1-2 tratamentos]
```

---

## 🔧 **Como Adicionar Novas Perguntas**

### **1. Adicione a pergunta no array `questions`:**
```typescript
const questions: Question[] = [
  // ... perguntas existentes ...
  {
    id: 'nova_pergunta',
    title: 'Título da nova pergunta?',
    type: 'radio', // ou 'checkbox'
    layout: 'text', // ou 'cards'
    options: [
      // ... opções ...
    ]
  }
];
```

### **2. Atualize o tipo `Quiz` se necessário:**
```typescript
type Quiz = {
  // ... campos existentes ...
  nova_pergunta: typeof QuizSchema.nova_pergunta[number];
};
```

### **3. Atualize o `QuizSchema`:**
```typescript
const QuizSchema = {
  // ... campos existentes ...
  nova_pergunta: ['opcao1', 'opcao2', 'opcao3'] as const,
};
```

---

## 🎨 **Personalização Visual**

### **Cores e Gradientes:**
- **Header:** `from-purple-600 to-purple-800`
- **CTA:** `from-green-500 to-green-600`
- **Cards:** Paleta de cores pastéis
- **Progress:** `bg-purple-600` (quiz) / `bg-green-500` (análise)

### **Espaçamentos:**
- **Cards:** `p-4` (interno) / `gap-4` (entre cards)
- **Seções:** `mb-6` ou `mb-8` (entre elementos)
- **Padding geral:** `p-8` (conteúdo principal)

### **Responsividade:**
- **Mobile:** `max-w-md` (container principal)
- **Grid:** `grid-cols-2` (cards lado a lado)
- **Texto:** `text-sm` a `text-2xl` (hierarquia)

---

## 📱 **Fluxo de Navegação**

1. **Upload** → **Loading** (automático após 1.4s)
2. **Loading** → **Quiz** (automático após 1.4s)
3. **Quiz** → **Quiz** (próxima pergunta)
4. **Quiz** → **Analyzing** (última pergunta respondida)
5. **Analyzing** → **Result** (automático após 100%)

### **Navegação no Quiz:**
- **Layout 'text':** Botões "Voltar" e "Continuar"
- **Layout 'cards':** Avanço automático após clique (300ms delay)

---

## 🚀 **Dicas para Criação**

1. **Mantenha consistência** no tom das perguntas
2. **Use emojis** para tornar as opções mais atrativas
3. **Limite opções** a 4 para layout 'cards' (grid 2x2)
4. **Valide respostas** antes de permitir avanço
5. **Teste o fluxo** completo após adicionar perguntas

---

## 📞 **Suporte para Criação**

Para criar novas perguntas ou modificar o quiz, use os prompts acima ou me envie uma mensagem com:

```
"Quero criar uma nova pergunta para o quiz:
[descreva a pergunta, opções e tipo de layout desejado]"
```

Vou implementar a pergunta seguindo exatamente suas especificações! 🎯✨
