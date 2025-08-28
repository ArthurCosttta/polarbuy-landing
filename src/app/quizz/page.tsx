'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const QuizSchema = z.object({
  faixa: z.enum(['<25','25-34','35-44','45-54','55+']),
  foco: z.array(z.enum(['testa','olhos','boca','pescoço'])).min(1),
  tipo: z.enum(['oleosa','seca','mista','sensível']),
  rotina: z.enum(['nenhuma','básica','completa']),
  objetivo: z.enum(['rugas','firmeza','hidratação','luminosidade']),
});
type Quiz = z.infer<typeof QuizSchema>;

export default function SkinQuizPage() {
  const [step, setStep] = useState<'upload'|'loading'|'quiz'|'result'>('upload');
  const [photo, setPhoto] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Quiz | null>(null);

  const { register, handleSubmit, formState:{ errors } } = useForm<Quiz>({
    defaultValues: { rotina:'nenhuma' }
  });

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

  function onSubmit(data: Quiz) {
    const parsed = QuizSchema.safeParse(data);
    if (!parsed.success) return;
    setAnswers(parsed.data);
    setStep('result');
  }

  function gerarFeedback(a: Quiz) {
    const blocos: string[] = [];

    if (a.faixa === '35-44' || a.faixa === '45-54' || a.faixa === '55+') {
      blocos.push('Nesta faixa é comum ver linhas mais visíveis em áreas móveis.');
    } else {
      blocos.push('Em faixas mais jovens, foque em barreira e fotoproteção para retardar linhas futuras.');
    }

    if (a.foco.includes('olhos')) blocos.push('Olhos: pele fina → hidratação + peptídeos; retinoide com cautela.');
    if (a.foco.includes('testa')) blocos.push('Testa: linhas dinâmicas respondem bem a retinoide à noite e Vit C pela manhã.');
    if (a.foco.includes('boca')) blocos.push('Lábios/sulco: hidratação oclusiva noturna e ativos firmadores ajudam na aparência.');
    if (a.foco.includes('pescoço')) blocos.push('Pescoço: introdução gradual dos mesmos ativos do rosto, por ser área sensível.');

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

  const resultado = answers ? gerarFeedback(answers) : null;

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
                <img src={photo} alt="preview" className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-purple-100" />
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {photo && (
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <img src={photo} alt="preview" className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-purple-100" />
              </div>
            )}

            {/* Faixa etária */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Qual é a sua faixa etária?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '<25', label: '18 a 25' },
                  { value: '25-34', label: '26 a 35' },
                  { value: '35-44', label: '36 a 45' },
                  { value: '45-54', label: '46 a 55' },
                  { value: '55+', label: '55+' }
                ].map((option) => (
                  <label key={option.value} className="relative">
                    <input 
                      type="radio" 
                      value={option.value} 
                      {...register('faixa')} 
                      className="sr-only" 
                    />
                    <div className="w-full p-4 border-2 border-gray-200 rounded-xl text-center cursor-pointer transition-all hover:border-purple-300 peer-checked:border-purple-600 peer-checked:bg-purple-50">
                      <span className="font-medium text-gray-700">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Áreas de incômodo */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                O que mais te incomoda em sua pele atualmente?
              </h3>
              <div className="space-y-3">
                {[
                  { value: 'flacidez', label: 'Flacidez', emoji: '😔' },
                  { value: 'ressecada', label: 'Pele ressecada, sem vida', emoji: '🌵' },
                  { value: 'rugas', label: 'Rugas', emoji: '👴' },
                  { value: 'murcha', label: 'Pele murcha', emoji: '🥀' },
                  { value: 'manchas', label: 'Manchas', emoji: '🔴' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                    <input 
                      type="checkbox" 
                      value={option.value} 
                      {...register('foco')} 
                      className="mr-3 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
                    />
                    <span className="text-lg mr-3">{option.emoji}</span>
                    <span className="font-medium text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.foco && <p className="text-red-500 text-sm mt-2">Selecione ao menos uma área.</p>}
            </div>

            {/* Tipo de pele */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Qual é o seu tipo de pele?
              </h3>
              <div className="space-y-3">
                {[
                  { value: 'oleosa', label: 'Oleosa', emoji: '💧' },
                  { value: 'seca', label: 'Seca', emoji: '🏜️' },
                  { value: 'mista', label: 'Mista', emoji: '⚖️' },
                  { value: 'sensível', label: 'Sensível', emoji: '🥺' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                    <input 
                      type="radio" 
                      value={option.value} 
                      {...register('tipo')} 
                      className="mr-3 w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500" 
                    />
                    <span className="text-lg mr-3">{option.emoji}</span>
                    <span className="font-medium text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rotina atual */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Você já tem alguma rotina de cuidados?
              </h3>
              <div className="space-y-3">
                {[
                  { value: 'nenhuma', label: 'Nenhuma', emoji: '❌' },
                  { value: 'básica', label: 'Básica', emoji: '🧴' },
                  { value: 'completa', label: 'Completa', emoji: '✨' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                    <input 
                      type="radio" 
                      value={option.value} 
                      {...register('rotina')} 
                      className="mr-3 w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500" 
                    />
                    <span className="text-lg mr-3">{option.emoji}</span>
                    <span className="font-medium text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Objetivo principal */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Qual é o seu principal objetivo?
              </h3>
              <div className="space-y-3">
                {[
                  { value: 'rugas', label: 'Reduzir rugas', emoji: '👵' },
                  { value: 'firmeza', label: 'Firmeza', emoji: '💪' },
                  { value: 'hidratação', label: 'Hidratação', emoji: '💧' },
                  { value: 'luminosidade', label: 'Luminosidade', emoji: '✨' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-purple-300">
                    <input 
                      type="radio" 
                      value={option.value} 
                      {...register('objetivo')} 
                      className="mr-3 w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500" 
                    />
                    <span className="text-lg mr-3">{option.emoji}</span>
                    <span className="font-medium text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Minha Recomendação
            </button>
          </form>
        )}

        {step === 'result' && resultado && (
          <div className="space-y-6">
            {photo && (
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <img src={photo} alt="preview" className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-purple-100" />
              </div>
            )}
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Seu Plano Personalizado
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Baseado na sua análise e respostas
              </p>
              
              <div className="bg-purple-50 rounded-xl p-4 mb-6">
                <p className="text-gray-800 text-sm leading-relaxed">{resultado.texto}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-3 text-center">Rotina Sugerida</h3>
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

              <p className="text-xs text-gray-500 text-center mt-6">
                * Análise cosmética e educacional. Não substitui avaliação médica.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
