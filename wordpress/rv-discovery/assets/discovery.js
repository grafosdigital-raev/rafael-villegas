/* Rafael Villegas Discovery MVP 0.1 — no tracking, no remote API, no storage. */
(() => {
  'use strict';
  const paths = {
    vida: {
      tag: 'TU VIDA',
      title: '¿Qué parte de tu vida pide hoy una nueva mirada?',
      subtitle: 'No hay una respuesta correcta. Elige lo que más resuene contigo.',
      choices: [
        {label:'Quiero recuperar claridad', answer:'claridad'},
        {label:'Deseo cambiar un hábito', answer:'habito'},
        {label:'Necesito volver a escucharme', answer:'escuchar'}
      ],
      prompt: '¿Qué pequeño cambio podrías elegir esta semana para acercarte a la vida que deseas?',
      exercise: 'Escribe una situación que hoy te incomoda. Separa lo que está ocurriendo de la historia que te cuentas sobre ello. Después, anota una acción pequeña que sí depende de ti.',
      support: 'La transformación no siempre comienza con respuestas. A veces comienza con una conversación que nos ayuda a ver de otra manera.',
      btn: 'Conoce los caminos de eXeT', target: 'exet'
    },
    liderazgo: {
      tag: 'TUS RELACIONES',
      title: '¿Dónde te gustaría generar una relación diferente?',
      subtitle: 'Liderar también significa aprender a relacionarnos con nosotros mismos.',
      choices: [
        {label:'En mi familia o pareja', answer:'familia'},
        {label:'En mi equipo de trabajo', answer:'equipo'},
        {label:'En la forma en que me comunico', answer:'comunicacion'}
      ],
      prompt: '¿Qué conversación necesaria has postergado y qué cambiaría si la abordaras desde la escucha?',
      exercise: 'Elige una conversación pendiente. Antes de hablar, escribe qué quieres comprender, qué necesitas expresar y qué resultado sería valioso para ambas partes.',
      support: 'Una nueva conversación puede abrir posibilidades que no existían cuando solo repetíamos nuestras certezas.',
      btn: 'Explora formación y acompañamiento', target: 'exet'
    },
    negocio: {
      tag: 'TU NEGOCIO',
      title: '¿Qué obstáculo está frenando tus siguientes resultados?',
      subtitle: 'Crecer no siempre significa hacer más; a veces significa ordenar mejor.',
      choices: [
        {label:'Quiero conseguir más clientes', answer:'clientes'},
        {label:'Necesito ordenar mi operación', answer:'orden'},
        {label:'Quiero usar IA con sentido', answer:'ia'}
      ],
      prompt: 'Si resolvieras una sola restricción de tu negocio este mes, ¿cuál produciría el mayor avance?',
      exercise: 'Dibuja tres columnas: atraer, convertir y atender. Anota dónde se pierde hoy más tiempo, oportunidades o calidad. Ese podría ser tu primer punto de intervención.',
      support: 'La estrategia y la tecnología tienen valor cuando resuelven un problema concreto de las personas y los negocios.',
      btn: 'Descubre soluciones de Funnel-IA', target: 'funnel'
    },
    aprendizaje: {
      tag: 'TU EVOLUCIÓN',
      title: '¿Qué capacidad te gustaría desarrollar para tu próxima etapa?',
      subtitle: 'Aprender cobra sentido cuando lo llevamos a nuestra vida.',
      choices: [
        {label:'Conocerme y crecer', answer:'crecimiento'},
        {label:'Aprender a liderar', answer:'liderar'},
        {label:'Entender y aplicar tecnología', answer:'tecnologia'}
      ],
      prompt: '¿Qué aprendizaje, si lo llevaras a la práctica durante 30 días, haría una diferencia tangible?',
      exercise: 'Elige un tema, una fuente confiable y una acción de 15 minutos. Repítela tres veces esta semana y registra qué cambia en tu manera de pensar o actuar.',
      support: 'La biblioteca y la escuela de Rafael Villegas reunirán contenidos y experiencias para avanzar a tu propio ritmo.',
      btn: 'Explorar la biblioteca', target: 'biblioteca'
    }
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const link = (root, key) => {
    const val = root.getAttribute('data-' + key + '-url') || '';
    try { const u = new URL(val, window.location.href); return /^https?:$/.test(u.protocol) ? u.href : ''; } catch { return ''; }
  };
  document.querySelectorAll('.rvd').forEach(root => {
    const stage = root.querySelector('.rvd__stage');
    if (!stage) return;
    const initial = stage.innerHTML;
    const chapter = root.querySelector('.rvd__chapter');
    const bar = root.querySelector('.rvd__progress-inner');
    let currentPath = null;
    let currentAnswer = null;

    function setProgress(step){ chapter.textContent = '0' + step + ' / 03'; bar.style.width = (step/3*100)+'%'; }
    function renderFirst(){ currentPath=null;currentAnswer=null;stage.innerHTML=initial;setProgress(1); stage.querySelector('.rvd__choice')?.focus(); }
    function renderSecond(){
      const data = paths[currentPath]; if (!data) return;
      stage.innerHTML = `<div class="rvd__intro"><div class="rvd__overline">${esc(data.tag)} · SEGUNDO DESCUBRIMIENTO</div><h2 class="rvd__heading rvd__heading--small">${esc(data.title)}</h2><p class="rvd__description">${esc(data.subtitle)}</p></div><div class="rvd__choices rvd__choices--compact" role="group" aria-label="Elige lo que resuena contigo">${data.choices.map((choice,i)=>`<button type="button" class="rvd__choice" data-answer="${esc(choice.answer)}"><span class="rvd__choice-index">0${i+1}</span><span class="rvd__choice-name">${esc(choice.label)}</span><span class="rvd__choice-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><button type="button" class="rvd__back" data-back="start">← Elegir otro camino</button>`;
      setProgress(2); stage.querySelector('.rvd__choice')?.focus();
    }
    function renderThird(){
      const data = paths[currentPath]; if (!data) return;
      const url = link(root, data.target);
      const cta = url ? `<a class="rvd__cta" href="${esc(url)}" ${data.target==='biblioteca' ? '' : 'target="_blank" rel="noopener noreferrer"'}>${esc(data.btn)} <span aria-hidden="true">↗</span></a>` : '';
      stage.innerHTML = `<div class="rvd__intro"><div class="rvd__overline">TERCER DESCUBRIMIENTO · TU SIGUIENTE PASO</div><h2 class="rvd__heading rvd__heading--small">Una pregunta que puede abrir <em>posibilidades.</em></h2><p class="rvd__highlight">${esc(data.prompt)}</p></div><div class="rvd__reflection"><span class="rvd__reflection-index">01 / ACCIÓN CONCRETA</span><p>${esc(data.exercise)}</p></div><p class="rvd__summary">${esc(data.support)}</p><div class="rvd__actions">${cta}<button type="button" class="rvd__back" data-back="second">← Volver a la pregunta</button><button type="button" class="rvd__back" data-back="start">Explorar otro camino ↗</button></div>`;
      setProgress(3); (stage.querySelector('.rvd__cta') || stage.querySelector('.rvd__back'))?.focus();
    }
    root.addEventListener('click', e => {
      const path = e.target.closest('[data-path]');
      if(path && root.contains(path)){currentPath=path.dataset.path;currentAnswer=null;renderSecond();return;}
      const answer = e.target.closest('[data-answer]');
      if(answer && root.contains(answer)){currentAnswer=answer.dataset.answer;renderThird();return;}
      const back=e.target.closest('[data-back]');
      if(back && root.contains(back)){if(back.dataset.back==='start') renderFirst(); else renderSecond();}
    });
    setProgress(1);
  });
})();
