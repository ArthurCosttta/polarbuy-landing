'use client';

import { useState } from 'react';
import Image from 'next/image';

const QuizSchema = {
  faixa: ['<25','25-34','35-44','45-54','55+'] as const,
  foco: ['flacidez','ressecada','rugas','murcha','manchas'] as const,
  tipo: ['oleosa','seca','mista','sensível'] as const,
  rotina: ['nenhuma','básica','completa'] as const,
  objetivo: ['rugas','firmeza','hidratação','luminosidade'] as const,
};

type Quiz = {
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

interface Question {
  id: string;
  title: string;
  type: 'radio' | 'checkbox';
  layout: 'text' | 'cards';
  options: TextOption[] | CardOption[];
}

export default function SkinQuizPage() {
  const [step, setStep] = useState<'upload'|'loading'|'quiz'|'analyzing'|'result'>('upload');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [photo, setPhoto] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Partial<Quiz>>({});
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const questions: Question[] = [
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
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
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
                  {questions[currentQuestion].options.map((option) => (
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
              <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors transform hover:scale-105">
                Quero Meu Plano Completo
              </button>
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
