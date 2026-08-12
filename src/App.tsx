/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';

const moods = [
  { id: 'happy', label: 'Happy', emoji: '😊', drink: 'Strawberry Sparkler' },
  { id: 'relaxed', label: 'Relaxed', emoji: '😌', drink: 'Chamomile Cooler' },
  { id: 'energetic', label: 'Energetic', emoji: '⚡', drink: 'Ginger Citrus Zing' },
  { id: 'tired', label: 'Tired', emoji: '😴', drink: 'Matcha Refresher' },
  { id: 'focused', label: 'Focused', emoji: '🧠', drink: 'Citrus Cold Brew' },
];

export default function App() {
  const [selectedMood, setSelectedMood] = useState('happy');
  const [recommendation, setRecommendation] = useState('');

  const selectedMoodLabel = useMemo(
    () => moods.find((mood) => mood.id === selectedMood)?.label || 'Happy',
    [selectedMood],
  );

  const handleFindSip = () => {
    const mood = moods.find((item) => item.id === selectedMood);
    setRecommendation(
      mood ? `Try a ${mood.drink} for ${mood.label.toLowerCase()} vibes.` : 'Choose a mood to get started.',
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.55)] backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-rose-200 ring-1 ring-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-base text-rose-300">auto_awesome</span>
                Personalized Drink AI
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                SipFlow
              </h1>
              <p className="mt-4 max-w-xl text-slate-300 sm:text-lg">
                Your mood. Your moment. Your sip. Let SipFlow recommend the perfect beverage to match how you feel.
              </p>
            </div>

            <button
              onClick={handleFindSip}
              className="inline-flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-rose-500 to-red-500 px-8 py-4 text-sm font-bold uppercase text-white shadow-[0_20px_60px_rgba(239,68,68,0.4)] transition hover:scale-[1.02] active:scale-95"
            >
              <span className="material-symbols-outlined">bolt</span>
              Find My Sip
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {moods.map((mood) => (
              <button
                key={mood.id}
                type="button"
                onClick={() => setSelectedMood(mood.id)}
                className={`rounded-3xl border px-5 py-6 text-center transition ${
                  selectedMood === mood.id
                    ? 'border-rose-500 bg-rose-500/10 text-white shadow-[0_20px_50px_rgba(239,68,68,0.18)]'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-rose-400/40 hover:bg-white/10'
                }`}
              >
                <div className="text-4xl">{mood.emoji}</div>
                <div className="mt-4 text-sm font-semibold">{mood.label}</div>
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 text-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.4)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-rose-300">Recommendation</p>
                <h2 className="mt-3 text-2xl font-bold text-white">Your next sip</h2>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-200">
                {selectedMoodLabel}
              </span>
            </div>
            <p className="mt-6 text-base leading-7 text-slate-300">
              {recommendation || 'Select a mood and tap "Find My Sip" to get a tailored beverage suggestion.'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
