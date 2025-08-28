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
    defaultValues: { rotina:'nenhuma' } as any
  });

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result as string);
      setStep('loading');
      setTimeout(() => setStep('quiz'), 1400); // suspense curto
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
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Análise Cosmética Guiada</h1>

      {step === 'upload' && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Envie uma foto frontal, bem iluminada. A imagem é usada apenas para visualização.</p>
          <input type="file" accept="image/*" onChange={onPhoto} className="block" />
        </div>
      )}

      {step === 'loading' && (
        <div className="space-y-3">
          {photo && <img src={photo} alt="preview" className="rounded w-full max-h-64 object-cover" />}
          <p className="animate-pulse">⏳ Analisando sua pele…</p>
          <p className="text-sm text-muted-foreground">Enquanto isso, responda 5 perguntas rápidas.</p>
        </div>
      )}

      {step === 'quiz' && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {photo && <img src={photo} alt="preview" className="rounded w-full max-h-64 object-cover" />}

          <div>
            <label className="block mb-1">Faixa etária</label>
            <select {...register('faixa')} className="border rounded p-2 w-full">
              <option value="<25">&lt; 25</option>
              <option value="25-34">25–34</option>
              <option value="35-44">35–44</option>
              <option value="45-54">45–54</option>
              <option value="55+">55+</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Áreas de maior incômodo</label>
            {['testa','olhos','boca','pescoço'].map(k => (
              <label key={k} className="mr-3">
                <input type="checkbox" value={k} {...register('foco')} className="mr-1" /> {k}
              </label>
            ))}
            {errors.foco && <p className="text-red-500 text-sm">Selecione ao menos uma área.</p>}
          </div>

          <div>
            <label className="block mb-1">Tipo de pele</label>
            <select {...register('tipo')} className="border rounded p-2 w-full">
              <option value="oleosa">Oleosa</option>
              <option value="seca">Seca</option>
              <option value="mista">Mista</option>
              <option value="sensível">Sensível</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Tem rotina hoje?</label>
            <select {...register('rotina')} className="border rounded p-2 w-full">
              <option value="nenhuma">Nenhuma</option>
              <option value="básica">Básica</option>
              <option value="completa">Completa</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Principal objetivo</label>
            <select {...register('objetivo')} className="border rounded p-2 w-full">
              <option value="rugas">Reduzir rugas</option>
              <option value="firmeza">Firmeza</option>
              <option value="hidratação">Hidratação</option>
              <option value="luminosidade">Luminosidade</option>
            </select>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded">Ver recomendação</button>
        </form>
      )}

      {step === 'result' && resultado && (
        <div className="space-y-4">
          {photo && <img src={photo} alt="preview" className="rounded w-full max-h-64 object-cover" />}
          <h2 className="text-xl font-semibold">Seu feedback</h2>
          <p className="text-sm text-muted-foreground">
            Baseado na sua foto (visualização) e nas respostas do quiz.
          </p>
          <p>{resultado.texto}</p>

          <div className="border rounded p-4">
            <h3 className="font-medium mb-2">Rotina sugerida</h3>
            <p><strong>AM:</strong> {resultado.plano.AM.join(' → ')}</p>
            <p><strong>PM:</strong> {resultado.plano.PM.join(' → ')}</p>
            <p><strong>Semanal:</strong> {resultado.plano.Semanal.join(' / ')}</p>
          </div>

          <p className="text-xs text-muted-foreground">
            * Análise cosmética e educacional. Não substitui avaliação médica.
          </p>
        </div>
      )}
    </main>
  );
}
