import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import ClientsCarousel from './components/ClientsCarousel';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
  {
    icon: 'ri-team-line',
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Suporte Dedicado',
    description: 'Atendimento rápido e eficaz'
  },
  {
    icon: 'ri-award-line',
    title: 'Desde 2020',
    description: 'Inovação e qualidade'
  }
];

const solutions = [
  'Proteção Personalizada para cada cliente',
  'Especialistas em instalação e suporte',
  'Inovação com equipamentos de segurança',
  'Compromisso sólido desde 2020'
];

const products = [
  {
    name: 'Câmeras',
    icon: 'ri-camera-line',
    image: 'https://readdy.ai/api/search-image?query=Professional%20security%20camera%20system%20installed%20on%20modern%20building%20exterior%20wall%2C%20multiple%20dome%20and%20bullet%20cameras%20visible%2C%20clean%20white%20wall%20background%2C%20generic%20surveillance%20equipment%20without%20brand%20logos%2C%20high%20quality%20product%20photography%20style%2C%20soft%20natural%20lighting%2C%20no%20visible%20text%20or%20branding&width=480&height=361&seq=cameras-generic-001&orientation=landscape'
  },
  {
    name: 'Alarmes',
    icon: 'ri-alarm-warning-line',
    image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20alarm%20system%20with%20motion%20sensors%20and%20control%20panel%20mounted%20on%20clean%20white%20wall%2C%20wireless%20security%20devices%2C%20generic%20equipment%20without%20brand%20names%20or%20logos%2C%20professional%20product%20photography%2C%20neutral%20indoor%20setting%2C%20soft%20lighting%2C%20minimal%20background&width=480&height=360&seq=alarmes-generic-001&orientation=landscape'
  },
  {
    name: 'Fechaduras',
    icon: 'ri-lock-line',
    image: 'https://readdy.ai/api/search-image?query=Modern%20digital%20smart%20door%20lock%20on%20dark%20wooden%20door%2C%20electronic%20keypad%20and%20fingerprint%20scanner%20visible%2C%20generic%20electronic%20lock%20without%20brand%20logos%2C%20professional%20product%20photography%2C%20clean%20minimal%20background%2C%20warm%20lighting%2C%20premium%20finish&width=480&height=361&seq=fechaduras-generic-001&orientation=landscape'
  }
];

const testimonials = [
  {
    name: 'Genário Santos',
    company: 'GNA TRANSPORTES',
    text: '"Precisava de um sistema de segurança no meu galpão, e a Rel-Tech atendeu a minha demanda, oferecendo câmeras de qualidade e gravadores. Serviço nota 10!!"'
  },
  {
    name: 'Edgard Leite',
    company: 'CUBE OFFICE',
    text: '"Agradeço à Rel-Tech pelo ótimo trabalho no Cube Office. Serviço profissional, suporte excelente e soluções de alta qualidade. Recomendo!"'
  },
  {
    name: 'Ronaldo Campestre',
    company: 'DROGARIA FARMAIS',
    text: '"Trabalho com a Rel-Tech há dois anos, sempre que tenho uma necessidade eles me atendem. Atendimento muito eficaz, equipe comprometida."'
  }
];

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />

      {/* SEO Header Content - Hidden but crawlable */}
      <header className="sr-only">
        <h1>Segurança Eletrônica em Guarulhos</h1>
        <p><strong>Rel-Tech Tecnologia do Brasil</strong> – soluções em câmeras, alarmes e fechaduras digitais.</p>
      </header>

      {/* Hero Section — Full-width impactful background */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Realistic%20wide%20angle%20photograph%20of%20a%20modern%20commercial%20warehouse%20interior%20ceiling%20with%20multiple%20professional%20dome%20and%20bullet%20surveillance%20security%20cameras%20installed%20and%20mounted%20on%20white%20ceiling%20beams%20and%20metal%20truss%20structure%2C%20infrared%20LED%20night%20vision%20glowing%20softly%20on%20cameras%2C%20clean%20industrial%20environment%20with%20concrete%20floor%20and%20steel%20shelving%20in%20background%2C%20dramatic%20cinematic%20lighting%20with%20ambient%20shadows%2C%20realistic%20security%20system%20installation%20photography%2C%20no%20people%2C%20no%20text%2C%20no%20logos%2C%20no%20branding%2C%20high%20quality%20commercial%20security%20equipment%20documentation%20photo%2C%20dark%20moody%20atmosphere%20with%20focused%20lighting%20on%20camera%20units&width=1920&height=1080&seq=hero-instalacao-001&orientation=landscape"
            alt="Equipamentos de Segurança Eletrônica"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-green-400/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-green-400/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="scroll-animate-left">
              <div className="inline-block mb-6">
                <span className="bg-green-500/15 text-green-400 px-5 py-2.5 rounded-full text-sm font-semibold border border-green-500/25 backdrop-blur-sm">
                  Revenda Oficial Intelbras e Hikvision
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 drop-shadow-lg">
                Identifique intrusos
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
                <span className="text-green-400 drop-shadow-lg">Evite furtos</span>
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
                Monitore seus bens
              </h2>

              <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-xl drop-shadow-md">
                Soluções eletrônicas completas de segurança em um só lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center whitespace-nowrap cursor-pointer shadow-lg shadow-green-500/25"
                >
                  Peça um Orçamento
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a
                  href="/servicos"
                  className="bg-white/10 backdrop-blur-sm text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/25 inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
                >
                  Conheça Nossos Serviços
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-md">
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-green-400 mb-1">5+</div>
                  <div className="text-sm text-gray-300">Anos no Mercado</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-green-400 mb-1">100+</div>
                  <div className="text-sm text-gray-300">Projetos</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-sm text-gray-300">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 cursor-pointer">
            <i className="ri-arrow-down-line text-white text-xl"></i>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-3xl text-green-400`}></i>
                </div>
                <h3 className="text-gray-100 font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - SEO Content */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20smart%20home%20security%20hub%20and%20control%20devices%20on%20wooden%20desk%2C%20tablet%20showing%20security%20system%20interface%2C%20wireless%20sensors%20and%20key%20fobs%20arranged%20neatly%2C%20generic%20smart%20security%20devices%20without%20brand%20logos%2C%20warm%20indoor%20lighting%2C%20professional%20lifestyle%20photography&width=800&height=600&seq=sobre-generic-001&orientation=landscape"
                alt="Sistema Digital"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 scroll-animate-right">
              <h2 className="text-4xl font-bold text-gray-100">
                Especialistas em <span className="text-green-400">Segurança Eletrônica</span>
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                A <strong className="text-green-400">Rel-Tech</strong> atua em <strong className="text-green-400">Guarulhos</strong> e região (até 50 km), oferecendo instalação e manutenção de sistemas de segurança eletrônica: <strong className="text-green-400">câmeras de vigilância, alarmes, fechaduras e monitoramento remoto</strong>.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Nosso atendimento cobre toda a cidade de <strong className="text-green-400">Guarulhos</strong> e um raio de até <strong className="text-green-400">50 km</strong>, 
                incluindo as regiões de <strong className="text-green-400">São Paulo, Arujá, Mairiporã, Itaquaquecetuba, Poá, Suzano e ABC Paulista</strong>.
              </p>
              <a
                href="/servicos"
                className="inline-flex items-center bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Saiba Mais
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - SEO Content */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Serviços de <span className="text-green-400">Segurança</span>
            </h2>
            <p className="text-gray-300 text-lg">Soluções completas em segurança eletrônica Intelbras e Hikvision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-camera-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">
                <a href="/instalacao-de-cameras-de-seguranca-em-guarulhos.html" className="hover:text-green-400 transition-colors">
                  Câmeras Intelbras e Hikvision
                </a>
              </h3>
              <p className="text-gray-300 text-sm">Câmeras IP, analógicas e sistemas de CFTV completos com monitoramento 24h.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-alarm-warning-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">
                <a href="/alarmes-e-monitoramento-em-guarulhos.html" className="hover:text-green-400 transition-colors">
                  Alarmes e Monitoramento
                </a>
              </h3>
              <p className="text-gray-300 text-sm">Monitoramento e sensores de movimento com alerta via app e central.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-lock-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">
                <a href="/fechaduras-digitais-em-guarulhos.html" className="hover:text-green-400 transition-colors">
                  Fechaduras Digitais
                </a>
              </h3>
              <p className="text-gray-300 text-sm">Modelos com biometria, senha e cartão de acesso para máxima segurança.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-home-gear-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">Automação Residencial</h3>
              <p className="text-gray-300 text-sm">Integração com portões automáticos e controle remoto via smartphone.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-tools-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">Manutenção Técnica</h3>
              <p className="text-gray-300 text-sm">Limpeza, configuração e atualização de sistemas de segurança.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">Equipamentos Intelbras e Hikvision</h3>
              <p className="text-gray-300 text-sm">Trabalhamos com equipamentos originais Intelbras e Hikvision, instalação rápida e suporte local.</p>
            </div>
          </div>
          
          <div className="text-center scroll-animate">
            <a
              href="/servicos"
              className="inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Ver Todos os Serviços
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section - SEO Content */}
      <section id="vantagens" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Por Que Escolher a <span className="text-green-400">Rel-Tech?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-500/10 rounded-full">
                <i className="ri-map-pin-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">📍 Atendimento Regional</h3>
              <p className="text-gray-300 text-sm">Atendimento em Guarulhos e região metropolitana</p>
            </div>
            
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-500/10 rounded-full">
                <i className="ri-shield-check-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">🔒 Equipamentos de Segurança</h3>
              <p className="text-gray-300 text-sm">Equipamentos de segurança eletrônica com garantia</p>
            </div>
            
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-500/10 rounded-full">
                <i className="ri-smartphone-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">📲 Acesso Remoto</h3>
              <p className="text-gray-300 text-sm">Acesso remoto via app</p>
            </div>
            
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-500/10 rounded-full">
                <i className="ri-tools-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">🛠️ Equipe Certificada</h3>
              <p className="text-gray-300 text-sm">Equipe técnica certificada</p>
            </div>
            
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-500/10 rounded-full">
                <i className="ri-chat-3-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-gray-100 font-semibold text-lg mb-2">💬 Orçamento Gratuito</h3>
              <p className="text-gray-300 text-sm">Orçamento gratuito via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelbras e Hikvision Partner Section */}
      <section id="parceiros" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Parceiro Autorizado <span className="text-green-400">Intelbras</span> e <span className="text-green-400">Hikvision</span>
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
              Somos revenda oficial Intelbras e autorizada Hikvision. Produtos originais e integração total entre câmeras, alarmes e controle de acesso.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl cursor-pointer scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={product.image}
                  alt={`Soluções ${product.name} Rel-Tech Guarulhos`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <i className={`${product.icon} text-2xl text-green-400`}></i>
                    </div>
                    <h3 className="text-gray-100 text-2xl font-bold">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 scroll-animate">
            <a
              href="/servicos"
              className="inline-flex items-center bg-green-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Conheça Nossos Serviços
              <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              O Que Nossos <span className="text-green-400">Clientes</span> Dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=22c55e&color=fff`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="text-gray-100 font-semibold">{testimonial.name}</div>
                    <div className="text-green-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-200 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Nossos <span className="text-green-400">Clientes</span>
            </h2>
            <p className="text-gray-300 text-lg">Empresas que confiam em nossas soluções</p>
          </div>
          <div className="scroll-animate-scale">
            <ClientsCarousel />
          </div>
        </div>
      </section>

      {/* Contact Section - SEO Content */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center scroll-animate">
            <h2 className="text-3xl font-bold text-black mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-black mb-8">
              Fale com a <strong>Rel-Tech Tecnologia do Brasil</strong> e garanta sua segurança eletrônica.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511971943263&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Falar com Especialista
              <i className="ri-whatsapp-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <footer className="sr-only">
        <p>© 2026 Rel-Tech Tecnologia do Brasil | Segurança Eletrônica em Guarulhos | Intelbras e Hikvision</p>
      </footer>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}