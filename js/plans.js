const fiberPlans = [
  {
    name: "Fibra Start",
    speed: 100,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 100 Mbps",
      "Upload 50 Mbps"
    ]
  },
  {
    name: "Fibra Plus",
    speed: 200,
    price: 119.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 200 Mbps",
      "Upload 100 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Fibra Ultra",
    speed: 300,
    price: 149.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 300 Mbps",
      "Upload 150 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  },
  {
    name: "Fibra Max",
    speed: 400,
    price: 199.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 400 Mbps",
      "Upload 200 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento",
      "Atendimento VIP"
    ]
  }
];

const radioPlans = [
  {
    name: "Rádio Basic",
    speed: 10,
    price: 69.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 10 Mbps",
      "Upload 5 Mbps"
    ]
  },
  {
    name: "Rádio Plus",
    speed: 15,
    price: 89.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 15 Mbps",
      "Upload 7 Mbps",
      "IP Fixo"
    ],
    highlighted: true
  },
  {
    name: "Rádio Pro",
    speed: 20,
    price: 109.90,
    features: [
      "Wi-Fi Grátis",
      "Instalação Gratuita",
      "Suporte 24/7",
      "Download 20 Mbps",
      "Upload 10 Mbps",
      "IP Fixo",
      "Prioridade no Atendimento"
    ]
  }
];

function createPlanCard(plan, type) {
  const card = document.createElement('div');
  card.className = `plan-card ${plan.highlighted ? 'highlighted' : ''}`;
  
  // Ícones melhorados para fibra e rádio
  const icon = type === 'fiber' 
    ? `<svg class="plan-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/>
         <line x1="2" y1="20" x2="2" y2="20"/>
       </svg>`
    : `<svg class="plan-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <circle cx="12" cy="12" r="10"/>
         <path d="M8.5 8.5a4 4 0 0 1 6.5 1.5"/>
         <path d="M15.5 15.5a4 4 0 0 1-6.5-1.5"/>
         <path d="M12 12h.01"/>
       </svg>`;

  card.innerHTML = `
    <div class="plan-icon-wrapper">
      ${icon}
    </div>
    <h3 class="plan-name">${plan.name}</h3>
    <div class="plan-price">
      R$ ${plan.price.toFixed(2)}<span>/mês</span>
    </div>
    <div class="speed-info">
      <svg class="speed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
        <path d="m15 9-3 3-3-3"/>
        <path d="M12 12v5"/>
      </svg>
      <span>${plan.speed} Mega ${type === 'fiber' ? 'Fibra' : 'Rádio'}</span>
    </div>
    <ul class="plan-features">
      ${plan.features.map(feature => `
        <li>
          <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          ${feature}
        </li>
      `).join('')}
    </ul>
    <a href="https://wa.me/553899999999?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}." 
       class="plan-button" target="_blank" rel="noopener noreferrer">
      Assinar Agora
    </a>
  `;
  
  return card;
}

function initializePlans() {
  const fiberPlansContainer = document.querySelector('.fiber-plans');
  const radioPlansContainer = document.querySelector('.radio-plans');
  
  fiberPlans.forEach(plan => {
    fiberPlansContainer.appendChild(createPlanCard(plan, 'fiber'));
  });
  
  radioPlans.forEach(plan => {
    radioPlansContainer.appendChild(createPlanCard(plan, 'radio'));
  });
}

document.addEventListener('DOMContentLoaded', initializePlans);