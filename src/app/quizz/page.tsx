'use client';

import { useState } from 'react';
import Image from 'next/image';

const QuizSchema = {
  areas_rosto: ['testa','olhos','bochechas','boca','pescoco'] as const,
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
  areas_rosto: typeof QuizSchema.areas_rosto[number][];
  tempo_mudanca: typeof QuizSchema.tempo_mudanca[number];
  sentimento_espelho: typeof QuizSchema.sentimento_espelho[number];
  sinais_adicionais: typeof QuizSchema.sinais_adicionais[number];
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

interface FaceAreaOption {
  value: string;
  label: string;
  position: 'left' | 'right';
  order: number;
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
  layout: 'text' | 'cards' | 'face-areas' | 'animation' | 'visual' | 'timeline' | 'before-after' | 'occasion' | 'texture' | 'compliment' | 'money';
  options: TextOption[] | CardOption[] | FaceAreaOption[] | AnimationOption[] | VisualOption[] | TimelineOption[] | BeforeAfterOption[] | OccasionOption[] | TextureOption[] | ComplimentOption[] | MoneyOption[];
}

export default function SkinQuizPage() {
  const [step, setStep] = useState<'upload'|'loading'|'quiz'|'analyzing'|'result'>('upload');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [photo, setPhoto] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Partial<Quiz>>({});
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedFaceAreas, setSelectedFaceAreas] = useState<string[]>([]);

  const questions: Question[] = [
    {
      id: 'areas_rosto',
      title: 'Qual parte do seu rosto mais incomoda hoje?',
      type: 'checkbox',
      layout: 'face-areas',
      options: [
        { value: 'testa', label: 'Testa (linhas de expressão)', position: 'left', order: 1 },
        { value: 'olhos', label: 'Olhos (pés de galinha, olheiras)', position: 'left', order: 2 },
        { value: 'bochechas', label: 'Bochechas (flacidez, sulcos)', position: 'left', order: 3 },
        { value: 'boca', label: 'Boca (código de barras, linhas finas)', position: 'right', order: 1 },
        { value: 'pescoco', label: 'Pescoço/Colo (pele caída)', position: 'right', order: 2 }
      ]
    },
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
    if (questionId === 'areas_rosto') {
      const currentAreas = answers.areas_rosto || [];
      const newAreas = currentAreas.includes(value as Quiz['areas_rosto'][0]) 
        ? currentAreas.filter(v => v !== value)
        : [...currentAreas, value as Quiz['areas_rosto'][0]];
      setAnswers({ ...answers, [questionId]: newAreas });
      setSelectedFaceAreas(newAreas);
    } else if (questionId === 'foco') {
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
    } else {
      // Todas as perguntas respondidas, mostrar análise final
      setStep('analyzing');
      startFinalAnalysis();
    }
  }

  function startFinalAnalysis() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5; // Incremento variável para parecer mais real
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setStep('result'), 1000);
      }
      setAnalysisProgress(Math.min(progress, 100));
    }, 200);
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function canProceed() {
    const currentQ = questions[currentQuestion];
    if (currentQ.id === 'areas_rosto') {
      return answers.areas_rosto && answers.areas_rosto.length > 0;
    }
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
              
              {/* Instrução adicional para áreas do rosto */}
              {questions[currentQuestion].layout === 'face-areas' && (
                <p className="text-gray-600 text-sm text-center mb-6">
                  Se você está feliz com sua aparência, então pressione Continue
                </p>
              )}
              
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
              ) : questions[currentQuestion].layout === 'face-areas' ? (
                // Layout com áreas do rosto e overlay
                <div className="relative">
                  {/* Imagem base da mulher em tela cheia com botões posicionados */}
                  <div className="relative w-full h-96 mb-6 overflow-hidden rounded-xl">
                    <Image 
                      src="/IMAGEM BASE.png" 
                      alt="Mulher sorrindo" 
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Overlays para cada área selecionada */}
                    {selectedFaceAreas.map((area) => (
                      <div key={area} className="absolute inset-0 z-10">
                        <Image 
                          src={`/${area === 'testa' ? 'linhas de express' : area === 'olhos' ? 'OLHOS' : area === 'bochechas' ? 'RUGAS' : area === 'boca' ? 'bigodechines' : 'pescoçotatruga'}.png`}
                          alt={`Overlay ${area}`}
                          fill
                          className="object-cover"
                          style={{ 
                            mixBlendMode: 'multiply',
                            opacity: 0.8
                          }}
                        />
                      </div>
                    ))}

                    {/* Botões posicionados ao redor da imagem */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Testa - posicionado acima da testa */}
                      <button
                        onClick={() => handleAnswer(questions[currentQuestion].id, 'testa')}
                        className={`absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-auto px-3 py-1 border-2 rounded-full cursor-pointer transition-all hover:scale-105 ${
                          selectedFaceAreas.includes('testa')
                            ? 'border-red-500 bg-red-500 text-white shadow-lg'
                            : 'border-gray-300 bg-white text-gray-700 shadow-md'
                        }`}
                      >
                        <span className="text-sm font-medium">Testa</span>
                      </button>

                      {/* Olhos - posicionado ao lado dos olhos */}
                      <button
                        onClick={() => handleAnswer(questions[currentQuestion].id, 'olhos')}
                        className={`absolute top-1/3 -left-2 pointer-events-auto px-3 py-1 border-2 rounded-full cursor-pointer transition-all hover:scale-105 ${
                          selectedFaceAreas.includes('olhos')
                            ? 'border-red-500 bg-red-500 text-white shadow-lg'
                            : 'border-gray-300 bg-white text-gray-700 shadow-md'
                        }`}
                      >
                        <span className="text-sm font-medium">Olhos</span>
                      </button>

                      {/* Bochechas - posicionado nas bochechas */}
                      <button
                        onClick={() => handleAnswer(questions[currentQuestion].id, 'bochechas')}
                        className={`absolute top-1/2 -right-2 pointer-events-auto px-3 py-1 border-2 rounded-full cursor-pointer transition-all hover:scale-105 ${
                          selectedFaceAreas.includes('bochechas')
                            ? 'border-red-500 bg-red-500 text-white shadow-lg'
                            : 'border-gray-300 bg-white text-gray-700 shadow-md'
                        }`}
                      >
                        <span className="text-sm font-medium">Bochechas</span>
                      </button>

                      {/* Boca - posicionado na boca */}
                      <button
                        onClick={() => handleAnswer(questions[currentQuestion].id, 'boca')}
                        className={`absolute top-2/3 left-1/2 transform -translate-x-1/2 pointer-events-auto px-3 py-1 border-2 rounded-full cursor-pointer transition-all hover:scale-105 ${
                          selectedFaceAreas.includes('boca')
                            ? 'border-red-500 bg-red-500 text-white shadow-lg'
                            : 'border-gray-300 bg-white text-gray-700 shadow-md'
                        }`}
                      >
                        <span className="text-sm font-medium">Boca</span>
                      </button>

                      {/* Pescoço - posicionado no pescoço */}
                      <button
                        onClick={() => handleAnswer(questions[currentQuestion].id, 'pescoco')}
                        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto px-3 py-1 border-2 rounded-full cursor-pointer transition-all hover:scale-105 ${
                          selectedFaceAreas.includes('pescoco')
                            ? 'border-red-500 bg-red-500 text-white shadow-lg'
                            : 'border-gray-300 bg-white text-gray-700 shadow-md'
                        }`}
                      >
                        <span className="text-sm font-medium">Pescoço</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : questions[currentQuestion].layout === 'animation' ? (
                // Layout com animação de envelhecimento
                <div className="space-y-4">
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl p-4 text-center">
                      <div className="animate-pulse">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                        <div className="text-sm text-gray-600">Pele envelhecendo...</div>
                      </div>
                    </div>
                  </div>
                  
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
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl p-4 text-center">
                      <div className="text-4xl mb-2">😊</div>
                      <div className="text-sm text-gray-600">Expressão facial</div>
                    </div>
                  </div>
                  
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
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-green-100 to-green-200 rounded-xl p-4 text-center">
                      <div className="flex justify-between items-center mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-600">Linha do tempo de cuidados</div>
                    </div>
                  </div>
                  
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
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">😔</div>
                        <div className="text-xs text-gray-600">Antes</div>
                      </div>
                      <div className="bg-gradient-to-b from-purple-100 to-purple-200 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">😊</div>
                        <div className="text-xs text-gray-600">Depois</div>
                      </div>
                    </div>
                  </div>
                  
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
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-pink-100 to-pink-200 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">🎭</div>
                      <div className="text-sm text-gray-600">Máscaras específicas</div>
                    </div>
                  </div>
                  
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
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">✨</div>
                      <div className="text-sm text-gray-600">Texturas de pele</div>
                    </div>
                  </div>
                  
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
                <div className="space-y-4">
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-xl p-4 text-center relative">
                      <div className="text-3xl mb-2">😊</div>
                      <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                        <div className="text-xs">&ldquo;Que pele linda!&rdquo;</div>
                      </div>
                      <div className="text-sm text-gray-600">Recebendo elogio</div>
                    </div>
                  </div>
                  
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
                </div>
              ) : questions[currentQuestion].layout === 'money' ? (
                // Layout para gastos
                <div className="space-y-4">
                  <div className="relative mx-auto mb-6" style={{ maxWidth: '300px' }}>
                    <div className="bg-gradient-to-b from-red-100 to-red-200 rounded-xl p-4 text-center">
                      <div className="flex justify-center items-center mb-2">
                        <div className="text-2xl mr-2">💸</div>
                        <div className="text-2xl">→</div>
                        <div className="text-2xl ml-2">✨</div>
                      </div>
                      <div className="text-sm text-gray-600">Dinheiro → Resultado</div>
                    </div>
                  </div>
                  
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
        </div>
      )}
      </div>
    </main>
  );
}
