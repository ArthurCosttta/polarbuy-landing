'use client';

import { useState } from 'react';
import Image from 'next/image';
import TestimonialCard from '../../components/TestimonialCard';

const QuizSchema = {
  tempo_mudanca: ['menos_1_ano','1_a_3_anos','mais_5_anos','desde_sempre'] as const,
  sentimento_espelho: ['triste_rugas','irritada_velha','envergonhada_fotos','indiferente'] as const,
  sinais_adicionais: ['queda_cabelo','unhas_fracas','pele_ressecada','todas_anteriores'] as const,
  sensibilidade_cosmeticos: ['sim_irrita','nao_uso_tudo','alguns_produtos'] as const,
  tempo_cuidado: ['5_minutos','15_minutos','30_mais'] as const,
  resultado_rapido: ['reduzir_rugas','firmar_pele','clarear_manchas','brilho_jovem'] as const,
  ocasiao_especial: ['casamento','reuniao_amigas','praia_ferias','nao_especial'] as const,
  pele_desejada: ['macia_bebe','firme_20_anos','iluminada_uniforme','todas_anteriores'] as const,
  ultimo_elogio: ['esta_semana','mes_passado','mais_6_meses','nem_lembro'] as const,
  gasto_tentativas: ['menos_500','500_2000','mais_5000'] as const,
  faixa: ['<25','25-34','35-44','45-54','55+'] as const,
  foco: ['flacidez','ressecada','rugas','murcha','manchas'] as const,
  tipo: ['oleosa','seca','mista','sensível'] as const,
  rotina: ['nenhuma','básica','completa'] as const,
  objetivo: ['rugas','firmeza','hidratação','luminosidade'] as const,
} as const;

type Quiz = {
  tempo_mudanca: typeof QuizSchema.tempo_mudanca[number];
  sentimento_espelho: typeof QuizSchema.sentimento_espelho[number];
  sinais_adicionais: typeof QuizSchema.sinais_adicionais[number][];
  sensibilidade_cosmeticos: typeof QuizSchema.sensibilidade_cosmeticos[number];
  tempo_cuidado: typeof QuizSchema.tempo_cuidado[number];
  resultado_rapido: typeof QuizSchema.resultado_rapido[number];
  ocasiao_especial: typeof QuizSchema.ocasiao_especial[number];
  pele_desejada: typeof QuizSchema.pele_desejada[number];
  ultimo_elogio: typeof QuizSchema.ultimo_elogio[number];
  gasto_tentativas: typeof QuizSchema.gasto_tentativas[number];
  faixa: typeof QuizSchema.faixa[number];
  foco: typeof QuizSchema.foco[number][];
  tipo: typeof QuizSchema.tipo[number];
  rotina: typeof QuizSchema.rotina[number];
  objetivo: typeof QuizSchema.objetivo[number];
};

// Interfaces para as opções
interface TextOption {
  value: string;
  label: string;
  emoji: string;
}

interface CardOption {
  value: string;
  label: string;
  emoji: string;
  color: string;
}

interface AnimationOption {
  value: string;
  label: string;
  emoji: string;
  animation: string;
}

interface VisualOption {
  value: string;
  label: string;
  emoji: string;
  visual: string;
}

interface TimelineOption {
  value: string;
  label: string;
  emoji: string;
  timeline: string;
}

interface BeforeAfterOption {
  value: string;
  label: string;
  emoji: string;
  beforeAfter: string;
}

interface OccasionOption {
  value: string;
  label: string;
  emoji: string;
  occasion: string;
}

interface TextureOption {
  value: string;
  label: string;
  emoji: string;
  texture: string;
}

interface ComplimentOption {
  value: string;
  label: string;
  emoji: string;
  compliment: string;
}

interface MoneyOption {
  value: string;
  label: string;
  emoji: string;
  money: string;
}

interface Question {
  id: string;
  title: string;
  type: 'radio' | 'checkbox';
  layout: 'text' | 'cards' | 'animation' | 'visual' | 'timeline' | 'before-after' | 'occasion' | 'texture' | 'compliment' | 'money';
  options: TextOption[] | CardOption[] | AnimationOption[] | VisualOption[] | TimelineOption[] | BeforeAfterOption[] | OccasionOption[] | TextureOption[] | ComplimentOption[] | MoneyOption[];
}

export default function SkinQuizPage() {
  const [step, setStep] = useState<'upload'|'loading'|'quiz'|'testimonial'|'analyzing'|'finalizing'|'result'>('upload');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [photo, setPhoto] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Partial<Quiz>>({});
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [finalizingStep, setFinalizingStep] = useState(0);
  const [skinVitality, setSkinVitality] = useState<'baixa'|'média'|'alta'>('média');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Array de depoimentos com as imagens disponíveis
  const testimonials = [
    {
      id: 1,
      title: "Mais de 1.7 milhões de mulheres",
      subtitle: "em seus 30s, 40s e 50s já experimentaram nossos planos de rejuvenescimento",
      image: "/IMAGEM1REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 2,
      title: "Transformações reais em 21 dias",
      subtitle: "mulheres que recuperaram a firmeza e o brilho da pele",
      image: "/IMAGEM2REJUV.jpeg",
      ctaText: "Continuar"
    },
    {
      id: 3,
      title: "Resultados comprovados",
      subtitle: "mais de 95% das usuárias relatam melhora visível",
      image: "/IMAGEM3REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 4,
      title: "Pele rejuvenescida naturalmente",
      subtitle: "sem procedimentos invasivos ou produtos químicos agressivos",
      image: "/IMAGEM4REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 5,
      title: "Confiança renovada",
      subtitle: "mulheres que voltaram a se sentir bonitas e confiantes",
      image: "/IMAGEM5REJUV.jpeg",
      ctaText: "Continuar"
    },
    {
      id: 6,
      title: "Rotinas personalizadas que funcionam",
      subtitle: "adaptadas para cada tipo de pele e estilo de vida",
      image: "/IMAGE6REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 7,
      title: "Transformação completa",
      subtitle: "da pele ao bem-estar emocional",
      image: "/IMAGEM 7 REJUV.avif",
      ctaText: "Continuar"
    }
  ];

  const questions: Question[] = [
    {
      id: 'tempo_mudanca',
      title: 'Há quanto tempo sente que sua pele mudou dessa forma?',
      type: 'radio',
      layout: 'animation',
      options: [
        { value: 'menos_1_ano', label: 'Menos de 1 ano', emoji: '📅', animation: 'aging-timelapse' },
        { value: '1_a_3_anos', label: '1 a 3 anos', emoji: '📆', animation: 'aging-timelapse' },
        { value: 'mais_5_anos', label: 'Mais de 5 anos', emoji: '⏰', animation: 'aging-timelapse' },
        { value: 'desde_sempre', label: 'Desde sempre', emoji: '🕰️', animation: 'aging-timelapse' }
      ]
    },
    {
      id: 'sentimento_espelho',
      title: 'Como você se sente ao olhar no espelho?',
      type: 'radio',
      layout: 'visual',
      options: [
        { value: 'triste_rugas', label: 'Triste com as rugas', emoji: '😔', visual: 'sad-expression' },
        { value: 'irritada_velha', label: 'Irritada por parecer mais velha que a idade', emoji: '😤', visual: 'angry-expression' },
        { value: 'envergonhada_fotos', label: 'Envergonhada em fotos', emoji: '😳', visual: 'embarrassed-expression' },
        { value: 'indiferente', label: 'Indiferente (mas gostaria de melhorar)', emoji: '😐', visual: 'neutral-expression' }
      ]
    },
    {
      id: 'sinais_adicionais',
      title: 'Você também sente algum desses sinais?',
      type: 'checkbox',
      layout: 'visual',
      options: [
        { value: 'queda_cabelo', label: 'Queda de cabelo', emoji: '💇‍♀️', visual: 'collagen-damage' },
        { value: 'unhas_fracas', label: 'Unhas fracas', emoji: '💅', visual: 'collagen-damage' },
        { value: 'pele_ressecada', label: 'Pele ressecada', emoji: '🏜️', visual: 'collagen-damage' },
        { value: 'todas_anteriores', label: 'Todas as anteriores', emoji: '😰', visual: 'collagen-damage' }
      ]
    },
    {
      id: 'sensibilidade_cosmeticos',
      title: 'Sua pele é sensível a cosméticos?',
      type: 'radio',
      layout: 'visual',
      options: [
        { value: 'sim_irrita', label: 'Sim, quase tudo irrita', emoji: '😖', visual: 'sensitive-skin' },
        { value: 'nao_uso_tudo', label: 'Não, uso de tudo', emoji: '😊', visual: 'calm-skin' },
        { value: 'alguns_produtos', label: 'Só alguns produtos causam reação', emoji: '🤔', visual: 'mixed-skin' }
      ]
    },
    {
      id: 'tempo_cuidado',
      title: 'Quanto tempo tem por dia para se cuidar?',
      type: 'radio',
      layout: 'timeline',
      options: [
        { value: '5_minutos', label: '5 minutos', emoji: '⏱️', timeline: 'quick-routine' },
        { value: '15_minutos', label: '15 minutos', emoji: '⏰', timeline: 'medium-routine' },
        { value: '30_mais', label: '30 minutos ou mais', emoji: '🕐', timeline: 'full-routine' }
      ]
    },
    {
      id: 'resultado_rapido',
      title: 'Que tipo de resultado você gostaria mais rápido?',
      type: 'radio',
      layout: 'before-after',
      options: [
        { value: 'reduzir_rugas', label: 'Reduzir rugas', emoji: '👵', beforeAfter: 'wrinkles-transformation' },
        { value: 'firmar_pele', label: 'Firmar pele flácida', emoji: '💪', beforeAfter: 'firmness-transformation' },
        { value: 'clarear_manchas', label: 'Clarear manchas', emoji: '✨', beforeAfter: 'spots-transformation' },
        { value: 'brilho_jovem', label: 'Ter brilho jovem', emoji: '🌟', beforeAfter: 'glow-transformation' }
      ]
    },
    {
      id: 'ocasiao_especial',
      title: 'Alguma ocasião especial chegando?',
      type: 'radio',
      layout: 'occasion',
      options: [
        { value: 'casamento', label: 'Casamento', emoji: '💒', occasion: 'wedding-mask' },
        { value: 'reuniao_amigas', label: 'Reunião de amigas', emoji: '👭', occasion: 'friends-mask' },
        { value: 'praia_ferias', label: 'Praia/férias', emoji: '🏖️', occasion: 'beach-mask' },
        { value: 'nao_especial', label: 'Não, só quero melhorar mesmo', emoji: '🎯', occasion: 'general-mask' }
      ]
    },
    {
      id: 'pele_desejada',
      title: 'Como gostaria que sua pele ficasse?',
      type: 'radio',
      layout: 'texture',
      options: [
        { value: 'macia_bebe', label: 'Macia como pele de bebê', emoji: '👶', texture: 'baby-skin' },
        { value: 'firme_20_anos', label: 'Firme como aos 20 anos', emoji: '💪', texture: 'firm-skin' },
        { value: 'iluminada_uniforme', label: 'Iluminada e uniforme', emoji: '✨', texture: 'glowing-skin' },
        { value: 'todas_anteriores', label: 'Todas as anteriores', emoji: '🎯', texture: 'all-textures' }
      ]
    },
    {
      id: 'ultimo_elogio',
      title: 'Qual foi a última vez que recebeu um elogio pela pele?',
      type: 'radio',
      layout: 'compliment',
      options: [
        { value: 'esta_semana', label: 'Esta semana', emoji: '😊', compliment: 'recent-compliment' },
        { value: 'mes_passado', label: 'Mês passado', emoji: '😌', compliment: 'month-ago-compliment' },
        { value: 'mais_6_meses', label: 'Mais de 6 meses', emoji: '😔', compliment: 'long-ago-compliment' },
        { value: 'nem_lembro', label: 'Nem lembro…', emoji: '😢', compliment: 'no-compliment' }
      ]
    },
    {
      id: 'gasto_tentativas',
      title: 'Quanto já gastou tentando resolver?',
      type: 'radio',
      layout: 'money',
      options: [
        { value: 'menos_500', label: 'Menos de R$500', emoji: '💰', money: 'low-spending' },
        { value: '500_2000', label: 'Entre R$500 e R$2.000', emoji: '💸', money: 'medium-spending' },
        { value: 'mais_5000', label: 'Mais de R$5.000', emoji: '💸', money: 'high-spending' }
      ]
    },
    {
      id: 'faixa',
      title: 'Qual é a sua faixa etária?',
      type: 'radio',
      layout: 'text', // Layout com texto e botão continuar
      options: [
        { value: '<25', label: '18 a 25', emoji: '👶' },
        { value: '25-34', label: '26 a 35', emoji: '👨‍💼' },
        { value: '35-44', label: '36 a 45', emoji: '👩‍💼' },
        { value: '45-54', label: '46 a 55', emoji: '👨‍🦳' },
        { value: '55+', label: '55+', emoji: '👴' }
      ]
    },
    {
      id: 'foco',
      title: 'O que mais te incomoda em sua pele atualmente?',
      type: 'checkbox',
      layout: 'cards', // Layout com cards clicáveis
      options: [
        { value: 'flacidez', label: 'Flacidez', emoji: '😔', color: 'bg-blue-100 border-blue-300' },
        { value: 'ressecada', label: 'Pele ressecada, sem vida', emoji: '🌵', color: 'bg-green-100 border-green-300' },
        { value: 'rugas', label: 'Rugas', emoji: '👴', color: 'bg-purple-100 border-purple-300' },
        { value: 'murcha', label: 'Pele murcha', emoji: '🥀', color: 'bg-pink-100 border-pink-300' },
        { value: 'manchas', label: 'Manchas', emoji: '🔴', color: 'bg-red-100 border-red-300' }
      ]
    },
    {
      id: 'tipo',
      title: 'Qual é o seu tipo de pele?',
      type: 'radio',
      layout: 'text', // Layout com texto e botão continuar
      options: [
        { value: 'oleosa', label: 'Oleosa', emoji: '💧' },
        { value: 'seca', label: 'Seca', emoji: '🏜️' },
        { value: 'mista', label: 'Mista', emoji: '⚖️' },
        { value: 'sensível', label: 'Sensível', emoji: '🥺' }
      ]
    },
    {
      id: 'rotina',
      title: 'Você já tem alguma rotina de cuidados?',
      type: 'radio',
      layout: 'cards', // Layout com cards clicáveis
      options: [
        { value: 'nenhuma', label: 'Nenhuma', emoji: '❌', color: 'bg-gray-100 border-gray-300' },
        { value: 'básica', label: 'Básica', emoji: '🧴', color: 'bg-blue-100 border-blue-300' },
        { value: 'completa', label: 'Completa', emoji: '✨', color: 'bg-yellow-100 border-yellow-300' }
      ]
    },
    {
      id: 'objetivo',
      title: 'Qual é o seu principal objetivo?',
      type: 'radio',
      layout: 'text', // Layout com texto e botão continuar
      options: [
        { value: 'rugas', label: 'Reduzir rugas', emoji: '👵' },
        { value: 'firmeza', label: 'Firmeza', emoji: '💪' },
        { value: 'hidratação', label: 'Hidratação', emoji: '💧' },
        { value: 'luminosidade', label: 'Luminosidade', emoji: '✨' }
      ]
    }
  ];

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result as string);
      setStep('loading');
      setTimeout(() => setStep('quiz'), 1400);
    };
    reader.readAsDataURL(f);
  }

  function handleAnswer(questionId: string, value: string) {
    if (questionId === 'foco') {
      const currentFoco = answers.foco || [];
      const newFoco = currentFoco.includes(value as Quiz['foco'][0]) 
        ? currentFoco.filter(v => v !== value)
        : [...currentFoco, value as Quiz['foco'][0]];
      setAnswers({ ...answers, [questionId]: newFoco });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }

    // Se for layout de cards, vai direto para próxima pergunta
    const currentQ = questions[currentQuestion];
    if (currentQ.layout === 'cards') {
      setTimeout(() => nextQuestion(), 300); // Pequeno delay para feedback visual
    }
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      
      // Verificar se deve mostrar depoimento após esta pergunta
      if (shouldShowTestimonial(currentQuestion + 1)) {
        setStep('testimonial');
        return;
      }
    } else {
      // Todas as perguntas respondidas, mostrar análise final
      setStep('analyzing');
      startFinalAnalysis();
    }
  }

  function shouldShowTestimonial(questionIndex: number): boolean {
    console.log('Verificando depoimento para pergunta:', questionIndex);
    // Mostrar depoimento após a primeira pergunta (índice 0)
    if (questionIndex === 1) {
      console.log('Mostrando depoimento após primeira pergunta');
      return true;
    }
    
    // Mostrar depoimento a cada 2 perguntas (após perguntas 3, 5, 7, etc.)
    if (questionIndex > 1 && questionIndex % 2 === 1) {
      console.log('Mostrando depoimento a cada 2 perguntas');
      return true;
    }
    
    console.log('Não mostrando depoimento');
    return false;
  }

  function handleTestimonialContinue() {
    setStep('quiz');
  }

  function getCurrentTestimonial() {
    // Determinar qual depoimento mostrar baseado na pergunta atual
    const testimonialIndex = Math.floor(currentQuestion / 2);
    return testimonials[testimonialIndex % testimonials.length];
  }

  function startFinalAnalysis() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5; // Incremento variável para parecer mais real
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setStep('finalizing');
          startFinalizingSequence();
        }, 1000);
      }
      setAnalysisProgress(Math.min(progress, 100));
    }, 200);
  }

  function startFinalizingSequence() {
    const steps = [
      'Revisando suas respostas...',
      'Avaliando sinais de envelhecimento da pele...',
      'Analisando hábitos de rotina e fatores externos...',
      'Montando plano de rejuvenescimento único para você...'
    ];

    let currentStep = 0;
    const stepInterval = setInterval(() => {
      if (currentStep < steps.length) {
        setFinalizingStep(currentStep);
        currentStep++;
      } else {
        clearInterval(stepInterval);
        setTimeout(() => {
          calculateSkinVitality();
          setStep('result');
        }, 2000);
      }
    }, 1500);
  }

  function calculateSkinVitality() {
    // Lógica simples para calcular vitalidade baseada nas respostas
    let score = 0;
    
    if (answers.faixa === '55+') score += 3;
    else if (answers.faixa === '45-54') score += 2;
    else if (answers.faixa === '35-44') score += 1;
    
    if (answers.foco?.includes('rugas')) score += 2;
    if (answers.foco?.includes('flacidez')) score += 2;
    if (answers.foco?.includes('ressecada')) score += 1;
    
    if (answers.tempo_mudanca === 'mais_5_anos') score += 2;
    else if (answers.tempo_mudanca === '1_a_3_anos') score += 1;
    
    if (score >= 6) setSkinVitality('baixa');
    else if (score >= 3) setSkinVitality('média');
    else setSkinVitality('alta');
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function canProceed() {
    const currentQ = questions[currentQuestion];
    if (currentQ.type === 'checkbox') {
      return answers[currentQ.id as keyof Quiz] && (answers[currentQ.id as keyof Quiz] as string[])?.length > 0;
    }
    return answers[currentQ.id as keyof Quiz];
  }

  function gerarFeedback(a: Quiz) {
    const blocos: string[] = [];

    if (a.faixa === '35-44' || a.faixa === '45-54' || a.faixa === '55+') {
      blocos.push('Nesta faixa é comum ver linhas mais visíveis em áreas móveis.');
    } else {
      blocos.push('Em faixas mais jovens, foque em barreira e fotoproteção para retardar linhas futuras.');
    }

    if (a.foco.includes('flacidez')) blocos.push('Flacidez: peptídeos e retinoide ajudam na firmeza.');
    if (a.foco.includes('ressecada')) blocos.push('Pele ressecada: ceramidas e ácido hialurônico são essenciais.');
    if (a.foco.includes('rugas')) blocos.push('Rugas: retinoide noturno + antioxidante pela manhã.');
    if (a.foco.includes('murcha')) blocos.push('Pele murcha: hidratação profunda e ativos firmadores.');
    if (a.foco.includes('manchas')) blocos.push('Manchas: Vitamina C e fotoproteção rigorosa.');

    const tipo = {
      oleosa: 'Textura/brilho: texturas leves e esfoliação química suave 1x/semana.',
      seca: 'Barreira: ceramidas + ácido hialurônico; oclusivo noturno opcional.',
      mista: 'Equilíbrio: leve de manhã; mais nutritivo à noite nas áreas secas.',
      sensível: 'Baixa irritação: sem fragrância e ativos potentes entrando devagar.'
    } as const;
    blocos.push(`Tipo de pele: ${tipo[a.tipo]}`);

    const obj = {
      rugas: 'Rugas: retinoide noturno + antioxidante (Vit C) pela manhã + FPS 50+ diário.',
      firmeza: 'Firmeza: peptídeos, niacinamida e estímulo noturno com constância.',
      hidratação: 'Hidratação: limpador suave, sérum hidratante e creme com ceramidas.',
      luminosidade: 'Luminosidade: Vit C de manhã, esfoliação suave semanal e fotoproteção rigorosa.'
    } as const;
    blocos.push(obj[a.objetivo]);

    const AM = ['Limpeza suave', a.objetivo==='luminosidade' ? 'Vitamina C 10–15%' : 'Niacinamida 4–10%', 'Hidratante leve', 'Protetor solar FPS 50+'];
    const PM = ['Limpeza', (a.objetivo==='rugas'||a.objetivo==='firmeza') ? 'Retinol/retinoide baixo' : 'Hidratante foco barreira', (a.tipo==='seca' ? 'Oclusivo opcional' : 'Sérum leve')];

    return { texto: blocos.join(' '), plano: { AM, PM, Semanal: ['Máscara hidratante 1–2x', a.tipo!=='sensível' ? 'Esfoliação química leve 1x' : '—'] } };
  }

  const resultado = step === 'result' && answers ? gerarFeedback(answers as Quiz) : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-md p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Análise da Pele
          </h1>
          <p className="text-gray-600">
            Descubra em 3 minutos como cuidar da sua pele
          </p>
        </div>

      {step === 'upload' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Vamos criar um Plano Personalizado
              </h2>
              <p className="text-gray-600 text-sm">
                Envie uma foto frontal, bem iluminada para começarmos
              </p>
            </div>
            
            <label className="block w-full">
              <input 
                type="file" 
                accept="image/*" 
                onChange={onPhoto} 
                className="hidden" 
              />
              <div className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl cursor-pointer transition-colors">
                Enviar Foto
              </div>
            </label>
        </div>
      )}

      {step === 'loading' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            {photo && (
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full border-4 border-purple-100 overflow-hidden mx-auto">
                  <Image 
                    src={photo} 
                    alt="preview" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Analisando sua pele...
              </h2>
              <p className="text-gray-600 text-sm">
                Enquanto isso, responda algumas perguntas rápidas
              </p>
            </div>
        </div>
      )}

      {step === 'quiz' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Header com logo e navegação */}
            <div className="flex items-center justify-between mb-6">
              <button 
                type="button"
                onClick={previousQuestion}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex-1 mx-4">
                {/* Barra de progresso */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Photo preview */}
            {photo && (
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full border-4 border-purple-100 overflow-hidden mx-auto">
                  <Image 
                    src={photo} 
                    alt="preview" 
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Current question */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {questions[currentQuestion].title}
              </h3>
              
              {/* Layout baseado no tipo de pergunta */}
              {questions[currentQuestion].layout === 'text' ? (
                // Layout com texto e botão continuar
                <div className="space-y-3">
                  {(questions[currentQuestion].options as TextOption[]).map((option) => (
                    <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                      <input 
                        type={questions[currentQuestion].type} 
                        value={option.value} 
                        checked={
                          questions[currentQuestion].type === 'checkbox' 
                            ? (answers[questions[currentQuestion].id as keyof Quiz] as string[])?.includes(option.value)
                            : answers[questions[currentQuestion].id as keyof Quiz] === option.value
                        }
                        onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                      />
                      <span className="text-lg mr-3">{option.emoji}</span>
                      <span className="font-medium text-gray-700">{option.label}</span>
              </label>
            ))}
                </div>
              ) : questions[currentQuestion].layout === 'animation' ? (
                // Layout com animação de envelhecimento
                <div className="space-y-4">
                  <div className="space-y-3">
                    {(questions[currentQuestion].options as AnimationOption[]).map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                        <input 
                          type={questions[currentQuestion].type} 
                          value={option.value} 
                          checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                          onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                          className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                        />
                        <span className="text-lg mr-3">{option.emoji}</span>
                        <span className="font-medium text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'visual' ? (
                // Layout com expressões faciais
                <div className="space-y-4">
                  <div className="space-y-3">
                    {(questions[currentQuestion].options as VisualOption[]).map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                        <input 
                          type={questions[currentQuestion].type} 
                          value={option.value} 
                          checked={
                            questions[currentQuestion].type === 'checkbox' 
                              ? (answers[questions[currentQuestion].id as keyof Quiz] as string[])?.includes(option.value)
                              : answers[questions[currentQuestion].id as keyof Quiz] === option.value
                          }
                          onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                          className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                        />
                        <span className="text-lg mr-3">{option.emoji}</span>
                        <span className="font-medium text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'timeline' ? (
                // Layout com linha do tempo
                <div className="space-y-4">
                  <div className="space-y-3">
                    {(questions[currentQuestion].options as TimelineOption[]).map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                        <input 
                          type={questions[currentQuestion].type} 
                          value={option.value} 
                          checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                          onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                          className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                        />
                        <span className="text-lg mr-3">{option.emoji}</span>
                        <span className="font-medium text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'before-after' ? (
                // Layout antes e depois
                <div className="space-y-4">
                  <div className="space-y-3">
                    {(questions[currentQuestion].options as BeforeAfterOption[]).map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                        <input 
                          type={questions[currentQuestion].type} 
                          value={option.value} 
                          checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                          onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                          className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                        />
                        <span className="text-lg mr-3">{option.emoji}</span>
                        <span className="font-medium text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'occasion' ? (
                // Layout para ocasiões especiais
                <div className="space-y-4">
                  <div className="space-y-3">
                    {(questions[currentQuestion].options as OccasionOption[]).map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                        <input 
                          type={questions[currentQuestion].type} 
                          value={option.value} 
                          checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                          onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                          className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                        />
                        <span className="text-lg mr-3">{option.emoji}</span>
                        <span className="font-medium text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'texture' ? (
                // Layout para texturas de pele
                <div className="space-y-4">
                  <div className="space-y-3">
                    {(questions[currentQuestion].options as TextureOption[]).map((option) => (
                      <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                        <input 
                          type={questions[currentQuestion].type} 
                          value={option.value} 
                          checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                          onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                          className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                        />
                        <span className="text-lg mr-3">{option.emoji}</span>
                        <span className="font-medium text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'compliment' ? (
                // Layout para elogios
                <div className="space-y-3">
                  {(questions[currentQuestion].options as ComplimentOption[]).map((option) => (
                    <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                      <input 
                        type={questions[currentQuestion].type} 
                        value={option.value} 
                        checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                        onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                      />
                      <span className="text-lg mr-3">{option.emoji}</span>
                      <span className="font-medium text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              ) : questions[currentQuestion].layout === 'money' ? (
                // Layout para gastos
                <div className="space-y-3">
                  {(questions[currentQuestion].options as MoneyOption[]).map((option) => (
                    <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                      <input 
                        type={questions[currentQuestion].type} 
                        value={option.value} 
                        checked={answers[questions[currentQuestion].id as keyof Quiz] === option.value}
                        onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                      />
                      <span className="text-lg mr-3">{option.emoji}</span>
                      <span className="font-medium text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              ) : (
                // Layout com cards clicáveis em grid 2x2
                <div className="grid grid-cols-2 gap-4">
                  {(questions[currentQuestion].options as CardOption[]).map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                        questions[currentQuestion].type === 'checkbox' 
                          ? (answers[questions[currentQuestion].id as keyof Quiz] as string[])?.includes(option.value)
                            ? 'border-purple-500 bg-purple-50 shadow-lg'
                            : `${option.color} hover:border-purple-300`
                          : answers[questions[currentQuestion].id as keyof Quiz] === option.value
                            ? 'border-purple-500 bg-purple-50 shadow-lg'
                            : `${option.color} hover:border-purple-300`
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-3xl mb-2">{option.emoji}</span>
                        <h4 className="font-semibold text-gray-800 text-sm leading-tight">{option.label}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

            {/* Navigation buttons - só aparecem para layout de texto */}
            {questions[currentQuestion].layout === 'text' && (
              <div className="flex gap-3">
                {currentQuestion > 0 && (
                  <button 
                    type="button"
                    onClick={previousQuestion}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Voltar
                  </button>
                )}
                
                <button 
                  type="button"
                  onClick={nextQuestion}
                  disabled={!canProceed()}
                  className={`flex-1 font-semibold py-3 px-6 rounded-xl transition-all ${
                    canProceed() 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Continuar'}
                </button>
              </div>
            )}

            {/* Botão Continue para todos os outros layouts */}
            {questions[currentQuestion].layout !== 'text' && (
              <div className="mt-6">
                <button 
                  type="button"
                  onClick={nextQuestion}
                  disabled={!canProceed()}
                  className={`w-full font-semibold py-4 px-6 rounded-xl transition-all ${
                    canProceed() 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Continuar'}
                </button>
              </div>
            )}
          </div>
        )}

        {step === 'testimonial' && (
          <div className="mx-auto max-w-md">
            <TestimonialCard
              testimonial={getCurrentTestimonial()}
              onContinue={handleTestimonialContinue}
            />
          </div>
        )}

        {step === 'analyzing' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-300 flex items-center justify-center" 
                  style={{ width: `${analysisProgress}%` }}
                >
                  {analysisProgress >= 15 && (
                    <span className="text-white text-sm font-semibold">
                      {Math.round(analysisProgress)}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Photo preview */}
            {photo && (
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full border-4 border-green-100 overflow-hidden mx-auto">
                  <Image 
                    src={photo} 
                    alt="preview" 
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Analysis text - mais conversacional */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Sua análise está quase pronta! ✨
              </h2>
              
              {/* Bullets conversacionais */}
              <ul className="text-gray-600 text-lg mb-6 list-disc list-inside text-left mx-auto max-w-xs space-y-2">
                <li>Seu rosto é muito bonito...</li>
                <li>Estamos identificando os pontos chave</li>
                <li>Quase lá para a sua receita personalizada!</li>
              </ul>

              {/* Mensagem personalizada */}
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                Identificamos o principal problema, estamos apenas fazendo os últimos ajustes para te dar a melhor receita.
              </p>
            </div>

            {/* Loading animation */}
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            </div>
          </div>
        )}

        {step === 'finalizing' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-lg p-8 text-center text-white">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Finalizando seu Plano
                </h1>
                <p className="text-purple-100 text-lg">
                  Criando sua solução personalizada de rejuvenescimento
                </p>
              </div>
            </div>

            {/* Etapas de Finalização */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                {finalizingStep >= 0 && (
                  <div className={`flex items-center p-4 rounded-xl transition-all duration-500 ${
                    finalizingStep >= 0 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      finalizingStep >= 0 ? 'bg-green-500 text-white' : 'bg-gray-300'
                    }`}>
                      {finalizingStep >= 0 ? '✓' : '1'}
                    </div>
                    <span className={`font-medium ${
                      finalizingStep >= 0 ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      Revisando suas respostas...
                    </span>
                  </div>
                )}

                {finalizingStep >= 1 && (
                  <div className={`flex items-center p-4 rounded-xl transition-all duration-500 ${
                    finalizingStep >= 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      finalizingStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300'
                    }`}>
                      {finalizingStep >= 1 ? '✓' : '2'}
                    </div>
                    <span className={`font-medium ${
                      finalizingStep >= 1 ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      Avaliando sinais de envelhecimento da pele...
                    </span>
                  </div>
                )}

                {finalizingStep >= 2 && (
                  <div className={`flex items-center p-4 rounded-xl transition-all duration-500 ${
                    finalizingStep >= 2 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      finalizingStep >= 2 ? 'bg-green-500 text-white' : 'bg-gray-300'
                    }`}>
                      {finalizingStep >= 2 ? '✓' : '3'}
                    </div>
                    <span className={`font-medium ${
                      finalizingStep >= 2 ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      Analisando hábitos de rotina e fatores externos...
                    </span>
                  </div>
                )}

                {finalizingStep >= 3 && (
                  <div className={`flex items-center p-4 rounded-xl transition-all duration-500 ${
                    finalizingStep >= 3 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                      finalizingStep >= 3 ? 'bg-green-500 text-white' : 'bg-gray-300'
                    }`}>
                      {finalizingStep >= 3 ? '✓' : '4'}
                    </div>
                    <span className={`font-medium ${
                      finalizingStep >= 3 ? 'text-green-700' : 'text-gray-500'
                    }`}>
                      Montando plano de rejuvenescimento único para você...
                    </span>
                  </div>
                )}
              </div>

              {/* Loading animation */}
              <div className="flex justify-center mt-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              </div>
            </div>
          </div>
        )}

      {step === 'result' && resultado && (
          <div className="space-y-6">
            {/* Header da Landing Page */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-lg p-8 text-center text-white">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  Plano Personalizado
                </h1>
                <p className="text-purple-100 text-lg">
                  Criado especialmente para você
                </p>
              </div>
              
              {photo && (
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-white border-opacity-30 overflow-hidden mx-auto">
                    <Image 
                      src={photo} 
                      alt="preview" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Nome do Produto */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                🧴 **Rotina da Pele Premium**
              </h2>
              <p className="text-gray-600 mb-4">
                Sua solução personalizada para uma pele mais saudável e radiante
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                <p className="text-purple-800 font-semibold">
                  ✨ Baseado na sua análise personalizada ✨
                </p>
              </div>
            </div>
            
            {/* Análise Personalizada */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                📋 Sua Análise Personalizada
              </h3>
              
              <div className="bg-purple-50 rounded-xl p-4 mb-6">
                <p className="text-gray-800 text-sm leading-relaxed">{resultado.texto}</p>
              </div>

              {/* Rotina Sugerida */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-center">🕐 Rotina Sugerida</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-yellow-600 text-xs font-bold">AM</span>
                    </span>
                    <span className="text-sm text-gray-700">{resultado.plano.AM.join(' → ')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs font-bold">PM</span>
                    </span>
                    <span className="text-sm text-gray-700">{resultado.plano.PM.join(' → ')}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-xs font-bold">S</span>
                    </span>
                    <span className="text-sm text-gray-700">{resultado.plano.Semanal.join(' / ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-3">
                🚀 Comece Sua Transformação Hoje!
              </h3>
              <p className="text-green-100 mb-4">
                Aproveite esta análise personalizada e transforme sua pele
              </p>
              <a 
                href="https://pay.kiwify.com.br/JnxC3LG" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  console.log('Checkout link clicked');
                  window.open('https://pay.kiwify.com.br/JnxC3LG', '_blank');
                }}
                className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors transform hover:scale-105 cursor-pointer"
              >
                Quero Meu Plano Completo
              </a>
          </div>

            {/* Disclaimer */}
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <p className="text-xs text-gray-500">
            * Análise cosmética e educacional. Não substitui avaliação médica.
          </p>
            </div>

            {/* Landing Page Completa */}
            <div className="space-y-6">
              {/* 1. Barra Superior Timer - Sticky */}
              <div className="sticky top-0 z-50 w-full h-14 bg-purple-100 flex items-center justify-between px-4 text-purple-700 font-semibold">
                <div className="flex items-center">
                  <span className="mr-2">⏰</span>
                  <span>50% de desconto reservado para você</span>
                </div>
                <div className="text-lg font-bold">
                  14:59
                </div>
              </div>

              {/* 2. Hero Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Coluna Esquerda (7/12) */}
                  <div className="lg:col-span-7">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Conquiste uma pele visivelmente mais jovem com seu plano personalizado
                    </h1>
                    <p className="text-gray-600 mb-6">
                      Mais de 1.705.370 planos já entregues • Avaliação média 4.8/5 ⭐
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">Redução visível de rugas e linhas</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">Firmeza e viço recuperados</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">Rotina simples, personalizada para sua pele</span>
                      </div>
                    </div>
                  </div>
                  {/* Coluna Direita (5/12) */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative">
                      <div className="w-48 h-64 bg-gradient-to-b from-purple-100 to-purple-200 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📱</div>
                          <div className="text-sm text-purple-700">Seu nome na capa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Seletor de Oferta */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Escolha sua melhor opção</h3>
                  <div className="text-sm text-red-600 font-semibold">Termina em 14:59</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* App */}
                  <div className="border-2 border-gray-200 rounded-xl p-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">📱</div>
                      <h4 className="font-bold text-gray-800 mb-2">App de Rejuvenescimento</h4>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">GRÁTIS por 30 dias</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                      <li>• Afirmações diárias</li>
                      <li>• Rotinas guiadas de cuidado</li>
                      <li>• Lembretes inteligentes</li>
                    </ul>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">FREE</div>
                      <div className="text-sm text-gray-500">R$ 29,90/mês (após 30 dias, cancela quando quiser)</div>
                    </div>
                  </div>

                  {/* Plano Impresso - DESTACADO */}
                  <div className="border-2 border-purple-500 rounded-xl p-4 shadow-lg relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">SALE 50% OFF</span>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">📖</div>
                      <h4 className="font-bold text-gray-800 mb-2">Plano Impresso Personalizado</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                      <li>• Envio grátis</li>
                      <li>• Capa com seu nome</li>
                      <li>• Rotina feita para sua pele</li>
                    </ul>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">R$ 79,90</div>
                      <div className="text-sm text-gray-500 line-through">R$ 159,90</div>
                      <div className="text-xs text-purple-600 font-semibold">E-book incluído gratuitamente</div>
                    </div>
                  </div>

                  {/* E-book */}
                  <div className="border-2 border-gray-200 rounded-xl p-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">📄</div>
                      <h4 className="font-bold text-gray-800 mb-2">E-book Personalizado</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 mb-4">
                      <li>• Entrega digital por e-mail</li>
                      <li>• 100% personalizado</li>
                    </ul>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">GRÁTIS</div>
                      <div className="text-sm text-gray-500">com o impresso</div>
                      <div className="text-sm text-gray-500">ou R$ 49,90</div>
                    </div>
                  </div>
                </div>

                {/* Checkbox e Botão */}
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                    <span className="text-sm text-gray-700">Li e concordo com os Termos e Política de Privacidade</span>
                  </label>
                  <button className="w-full bg-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-purple-700 transition-all transform hover:scale-105">
                    ORDER NOW
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Ao clicar em &apos;ORDER NOW&apos;, você concorda que, caso não cancele o teste do app antes do fim de 30 dias, será cobrada a mensalidade regular. Cancele a qualquer momento.
                  </p>
                </div>
              </div>

              {/* 4. O que vem no seu plano */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  O que está dentro do seu plano personalizado?
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">276</div>
                    <div className="text-sm text-gray-700">Páginas personalizadas com passo a passo</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">67</div>
                    <div className="text-sm text-gray-700">Técnicas de rejuvenescimento selecionadas para você</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">72</div>
                    <div className="text-sm text-gray-700">Templates práticos (rotinas, checklist, rastreadores)</div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">100%</div>
                    <div className="text-sm text-gray-700">Conteúdo adaptado à sua idade, pele e estilo de vida</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Rotinas anti-idade manhã/noite</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Mapas de ativos por tipo de pele</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Técnicas de massagem facial e drenagem</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Protocolos para região dos olhos e pescoço</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Hidratação inteligente e barreira cutânea</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Nutrição que favorece colágeno</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Hábitos e sono para pele jovem</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-3">✓</span>
                      <span className="text-gray-700">Plano de 21 dias com ajustes semanais</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 5. Projeções de resultado */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Projeção de Resultados</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Luminosidade</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-3/4 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Firmeza</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-4/5 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Uniformidade</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-2/3 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Hidratação</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="w-5/6 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Sua Transformação</h4>
                    <div className="bg-gradient-to-r from-red-100 to-green-100 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-red-600">Zona cansada</span>
                        <span className="text-sm text-green-600">Alta performance</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full relative">
                        <div className="absolute top-0 left-0 w-3/4 h-3 bg-gradient-to-r from-red-400 to-green-400 rounded-full"></div>
                        <div className="absolute top-0 left-3/4 w-1 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      <p>1ª semana – você sente: pele mais hidratada e viçosa</p>
                      <p>2ª semana – você vê: linhas finas menos aparentes</p>
                      <p>3ª semana – os outros notam: elogios sobre sua pele</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Depoimentos */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  O que outras mulheres estão dizendo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-bold">M</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm mb-2">
                          &ldquo;Em 3 semanas, meu marido disse que parecia lifting. Voltei a gostar do espelho.&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-600 font-semibold text-sm">Marta, 54</span>
                          <span className="text-green-500 text-xs">✓ Verificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-bold">P</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm mb-2">
                          &ldquo;Pele mais iluminada e olheiras sumindo. Comecei a receber elogios no trabalho.&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-pink-600 font-semibold text-sm">Patrícia, 49</span>
                          <span className="text-green-500 text-xs">✓ Verificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-green-600 font-bold">R</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm mb-2">
                          &ldquo;Gastei horrores com cremes. Aqui senti firmeza em 15 dias. Minhas amigas pedem o segredo.&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-600 font-semibold text-sm">Renata, 46</span>
                          <span className="text-green-500 text-xs">✓ Verificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">C</span>
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm mb-2">
                          &ldquo;Depois da menopausa, parecia 10 anos a mais. Hoje voltei a usar maquiagem leve.&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-semibold text-sm">Cláudia, 58</span>
                          <span className="text-green-500 text-xs">✓ Verificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Upsell do App */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  O app certo potencializa seus resultados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-3">💭</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Afirmações diárias</h4>
                    <p className="text-sm text-gray-600">Para disciplina e foco</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-3">📝</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Journaling guiado</h4>
                    <p className="text-sm text-gray-600">Para clareza de hábitos</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-3">🎵</div>
                    <h4 className="font-semibold text-gray-800 mb-2">Áudios relaxantes</h4>
                    <p className="text-sm text-gray-600">Para sono e recuperação da pele</p>
                  </div>
                </div>
              </div>

              {/* 8. FAQ */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Como meu plano é personalizado?</h4>
                    <p className="text-sm text-gray-600">
                      Usamos seu questionário (idade, pele, rotina, hábitos) para montar rotinas, ativos e ajustes semanais específicos para você.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Em quanto tempo vejo resultados?</h4>
                    <p className="text-sm text-gray-600">
                      A maioria das mulheres sente diferença na primeira semana, vê mudanças visuais na segunda e recebe elogios na terceira semana.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Serve para meu tipo de pele?</h4>
                    <p className="text-sm text-gray-600">
                      Sim! O plano é adaptado especificamente para seu tipo de pele, idade e necessidades individuais.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Preciso comprar cremes caros?</h4>
                    <p className="text-sm text-gray-600">
                      Não! Focamos em ingredientes acessíveis e receitas caseiras que funcionam tão bem quanto produtos caros.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Quanto tempo dura o acesso?</h4>
                    <p className="text-sm text-gray-600">
                      Acesso vitalício! Você pode usar o plano quantas vezes quiser e adaptar conforme sua pele evolui.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9. Rodapé */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <p className="text-xs text-gray-500 mb-2">
                  Análise cosmética e educacional. Não substitui avaliação médica.
                </p>
                <p className="text-xs text-gray-400">
                  © 2024 Plano de Rejuvenescimento Personalizado. Todos os direitos reservados.
                </p>
              </div>
            </div>
        </div>
      )}
      </div>
    </main>
  );
}
