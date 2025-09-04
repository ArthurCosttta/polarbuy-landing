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
      subtitle: "conseguiram deixar o rosto 10 anos mais jovem com nossas máscaras",
      image: "/IMAGEM1REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 2,
      title: "95% das usuárias relatam",
      subtitle: "melhora visível na firmeza da pele em apenas 21 dias",
      image: "/IMAGEM2REJUV.jpeg",
      ctaText: "Continuar"
    },
    {
      id: 3,
      title: "Redução de 80% nas rugas",
      subtitle: "com nossa rotina personalizada de rejuvenescimento",
      image: "/IMAGEM3REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 4,
      title: "Pele 15 anos mais jovem",
      subtitle: "sem procedimentos invasivos ou produtos químicos agressivos",
      image: "/IMAGEM4REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 5,
      title: "Brilho e luminosidade restaurados",
      subtitle: "em 90% das mulheres que seguiram nosso método",
      image: "/IMAGE6REJUV.webp",
      ctaText: "Continuar"
    },
    {
      id: 6,
      title: "Transformação completa em 30 dias",
      subtitle: "da pele ao bem-estar emocional e autoestima",
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

      {step === 'result' && (
          <div className="space-y-6">
            {/* Checkout 5XColágeno – clean e minimalista */}
            <div className="space-y-8">
              {/* Header compacto */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-rose-700 text-sm font-semibold">
                  <span>⏳</span>
                  <span>50% de desconto reservado por tempo limitado</span>
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-800">
                  Adquira o e-book 5X Mais Colágeno e recupere a juventude da sua pele naturalmente
                </h2>
                <p className="mt-2 text-gray-700">
                  Mais de 17.500 mulheres já transformaram a pele com nossas receitas caseiras exclusivas
                </p>
              </div>

              {/* Grid: imagem fixa + conteúdo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="md:sticky md:top-24">
                  <div className="border rounded-2xl p-4 bg-rose-50">
                    <Image src="/ChatGPT Image 29 de ago. de 2025, 21_41_54.png" alt="Capa do e-book 5XColágeno" width={540} height={760} className="w-full h-auto rounded-xl" />
                  </div>
                </div>

                <div>
                  {/* Bullets */}
                  <ul className="space-y-3 text-sm text-gray-800">
                    <li className="flex gap-2"><span className="text-green-600">✅</span><span>30 receitas naturais para suavizar até 87% das rugas e linhas finas sem gastar com clínicas ou cremes caros.</span></li>
                    <li className="flex gap-2"><span className="text-green-600">✅</span><span>Pele mais firme, iluminada e com aparência jovem já nas primeiras semanas.</span></li>
                    <li className="flex gap-2"><span className="text-green-600">✅</span><span>Estímulo natural de até 3x mais colágeno, devolvendo elasticidade e brilho.</span></li>
                    <li className="flex gap-2"><span className="text-green-600">✅</span><span>Resultados rápidos: amigas perguntando o segredo e pedindo a identidade.</span></li>
                    <li className="flex gap-2"><span className="text-green-600">✅</span><span>Fórmulas simples, seguras e caseiras para fazer em casa.</span></li>
                  </ul>

                  {/* Preço */}
                  <div className="mt-6">
                    <div className="text-sm text-gray-500">De <span className="line-through text-red-600">R$47,90</span></div>
                    <div className="text-4xl font-extrabold text-emerald-700">R$17,14</div>
                    <div className="text-gray-500 text-sm mt-2">Pagamento único, acesso vitalício e entrega imediata por e-mail</div>
                  </div>

                  {/* Card produto */}
                  <div className="mt-5 border rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📘</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800">E-book Digital 5X Mais Colágeno</h3>
                        <ul className="mt-2 text-sm text-gray-700 space-y-1">
                          <li>• Entrega imediata por e-mail</li>
                          <li>• Conteúdo 100% focado no rejuvenescimento feminino</li>
                        </ul>
                      </div>
                      <div className="text-right font-extrabold text-emerald-700">R$17,14</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a href="https://pay.kiwify.com.br/JnxC3LG" target="_blank" rel="noopener noreferrer" className="mt-6 block w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center py-4 font-semibold">
                    Quero garantir meu e-book 5X Mais Colágeno agora!
                  </a>
                  <div className="text-center text-xs text-gray-500 mt-2">Oferta exclusiva, disponível apenas hoje</div>
                </div>
              </div>

              {/* O que você vai encontrar */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-extrabold text-center mb-6 text-gray-800">O que você vai encontrar dentro</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-rose-500">⭐</span><span>276 páginas com receitas práticas para rejuvenescimento.</span></li>
                    <li className="flex gap-2"><span className="text-rose-500">⭐</span><span>30 máscaras que estimulam o colágeno naturalmente.</span></li>
                    <li className="flex gap-2"><span className="text-rose-500">⭐</span><span>Planos semanais simples e consistentes.</span></li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><span className="text-rose-500">⭐</span><span>Segredos caseiros validados por especialistas em estética natural.</span></li>
                    <li className="flex gap-2"><span className="text-rose-500">⭐</span><span>100% personalizado para mulheres que desejam pele mais jovem e firme.</span></li>
                  </ul>
                </div>
              </div>

              {/* Depoimentos */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-extrabold text-center mb-6 text-gray-800">Depoimentos Reais</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-800">
                  {[{n:'Maria, 52 anos',t:'Achei que era impossível rejuvenescer sem gastar em clínica, mas em 3 semanas minha pele já estava mais firme e luminosa.'},
                    {n:'Claudia, 44 anos',t:'Respondi ao quiz e descobri a receita certa. Foi a primeira vez em anos que elogiaram minha pele.'},
                    {n:'Renata, 39 anos',t:'Pele mais lisa, firme e iluminada. Natural, barato e fácil de fazer em casa.'}].map((d, i) => (
                    <div key={i} className="border rounded-2xl p-4 overflow-hidden max-w-full">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <Image src="/polarbuy-logo.png" alt="avatar" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-700 mb-2 break-words">"{d.t}"</p>
                          <div className="text-xs font-semibold text-gray-600 break-words">{d.n}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Garantia & Segurança */}
              <div className="border rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔒</div>
                    <p className="text-sm text-gray-700">
                      Compra 100% segura. Caso não goste do conteúdo, você tem 7 dias para solicitar reembolso sem burocracia.
                    </p>
                  </div>
                  <a href="https://pay.kiwify.com.br/JnxC3LG" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3">
                    Quero garantir meu e-book 5X Mais Colágeno agora!
                  </a>
                </div>
              </div>
            </div>
        </div>
      )}
      </div>
    </main>
  );
}
