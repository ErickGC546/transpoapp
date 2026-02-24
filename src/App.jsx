import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 320)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const featureCards = [
    {
      title: 'Seguridad 24/7',
      description: 'Viaja con monitoreo en tiempo real, soporte continuo y conductores verificados.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-blue-400">
          <path
            d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5l1.8 1.8 3.2-3.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Precios Justos',
      description: 'Tarifas claras y competitivas para que siempre pagues lo justo por tu trayecto.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-blue-400">
          <path
            d="M12 2v20M17 6.5c0-1.7-1.8-3-5-3S7 4.8 7 6.5 8.8 9.5 12 9.5s5 1.3 5 3-1.8 3-5 3-5-1.3-5-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Rapidez',
      description: 'Encuentra un viaje en segundos con rutas optimizadas para llegar más rápido.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-blue-400">
          <path
            d="M12 4a8 8 0 108 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8v4l3 2M20 4l-3 3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  const howItWorks = [
    {
      title: 'Solicita en segundos',
      description: 'Elige destino, método de pago y confirma tu viaje desde la app en pocos toques.',
      step: '01',
    },
    {
      title: 'Conecta con un conductor',
      description: 'Te asignamos el conductor ideal según cercanía, calificación y tiempo estimado.',
      step: '02',
    },
    {
      title: 'Viaja y califica',
      description: 'Llega seguro a tu destino y califica la experiencia para mejorar cada trayecto.',
      step: '03',
    },
  ]

  const cityStats = [
    { label: 'Ciudades activas', value: '25+' },
    { label: 'Conductores aliados', value: '18k+' },
    { label: 'Viajes completados', value: '2.4M+' },
    { label: 'Tiempo promedio de espera', value: '4 min' },
  ]

  const testimonials = [
    {
      text: 'Desde que uso TranspoApp llego más rápido al trabajo y siempre encuentro tarifas claras.',
      name: 'Camila R.',
      role: 'Pasajera frecuente',
    },
    {
      text: 'Me encanta la flexibilidad. Conduzco en mis tiempos libres y mis ingresos subieron bastante.',
      name: 'Luis M.',
      role: 'Conductor aliado',
    },
    {
      text: 'La app es súper simple y el soporte responde rápido cuando necesito ayuda.',
      name: 'Andrea P.',
      role: 'Usuaria premium',
    },
  ]

  const reveal = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  const buttonMotion = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: 'spring', stiffness: 360, damping: 22 },
  }

  const blueButtonMotion = {
    initial: { y: 0, scale: 1 },
    animate: {
      boxShadow: [
        '0 10px 24px rgba(43, 46, 54, 0.28)',
        '0 14px 30px rgba(14, 165, 233, 0.42)',
        '0 10px 24px rgba(37, 99, 235, 0.28)',
      ],
      filter: ['brightness(1)', 'brightness(1.06)', 'brightness(1)'],
    },
    whileHover: {
      y: -3,
      scale: 1.03,
      boxShadow: '0 20px 42px rgba(14, 165, 233, 0.55)',
      transition: { type: 'spring', stiffness: 420, damping: 18 },
    },
    whileTap: { y: 0, scale: 0.97 },
    transition: {
      boxShadow: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
      filter: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const isDark = theme === 'dark'

  const secondaryButtonClass = isDark
    ? 'inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:border-white/45 hover:bg-white/10 hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
    : 'inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-300/30 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:shadow-slate-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

  const iconButtonClass = isDark
    ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white shadow-md shadow-black/30 transition-all duration-300 hover:bg-white/10 hover:shadow-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden'
    : 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-900 shadow-md shadow-slate-300/40 transition-all duration-300 hover:bg-slate-100 hover:shadow-slate-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden'

  const themeButtonClass = isDark
    ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white shadow-md shadow-black/30 transition-all duration-300 hover:bg-white/10 hover:shadow-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
    : 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-900 shadow-md shadow-slate-300/40 transition-all duration-300 hover:bg-slate-100 hover:shadow-slate-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

  const sectionMutedTextClass = isDark ? 'text-white/70' : 'text-slate-600'
  const cardClass = isDark
    ? 'rounded-2xl border border-white/10 bg-neutral-900 p-6'
    : 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
  const stepsCardClass = isDark
    ? 'rounded-2xl border border-white/10 bg-neutral-900 p-7'
    : 'rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'

  return (
    <div className={isDark ? 'bg-black text-white transition-colors duration-300' : 'bg-slate-50 text-slate-900 transition-colors duration-300'}>
      <header className={isDark ? 'fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-lg' : 'fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-lg'}>
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            TranspoApp
          </a>

          <nav className={isDark ? 'hidden items-center gap-8 text-sm text-white/80 md:flex' : 'hidden items-center gap-8 text-sm text-slate-700 md:flex'}>
            <a href="#inicio" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              Inicio
            </a>
            <a href="#seguridad" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              Seguridad
            </a>
            <a href="#como-funciona" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              Cómo funciona
            </a>
            <a href="#conductores" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              Conductores
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              {...buttonMotion}
              className={themeButtonClass}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              <span className="text-base">{isDark ? '☀️' : '🌙'}</span>
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              {...buttonMotion}
              className={iconButtonClass}
              aria-label="Abrir menú"
            >
              <span className="text-lg">{mobileMenuOpen ? '×' : '☰'}</span>
            </motion.button>
          </div>
        </div>

        <motion.nav
          initial={false}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className={isDark ? 'overflow-hidden border-t border-white/10 bg-black/95 md:hidden' : 'overflow-hidden border-t border-slate-200 bg-white/95 md:hidden'}
        >
          <div className={isDark ? 'mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 text-sm text-white/85 sm:px-8' : 'mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 text-sm text-slate-700 sm:px-8'}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </a>
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)}>
              Cómo funciona
            </a>
            <a href="#conductores" onClick={() => setMobileMenuOpen(false)}>
              Conductores
            </a>
            <a href="#seguridad" onClick={() => setMobileMenuOpen(false)}>
              Seguridad
            </a>
          </div>
        </motion.nav>
      </header>

      <main id="inicio" className="pt-20">
        <section className="relative isolate overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80"
            alt="Ciudad de noche"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className={isDark ? 'absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70' : 'absolute inset-0 bg-gradient-to-r from-slate-100/95 via-slate-100/85 to-slate-200/70'} />

          <div className="relative mx-auto grid min-h-[88vh] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
            <motion.div {...reveal}>
              <p className="mb-4 inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
                Movilidad inteligente
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Tu ciudad, a tu alcance
              </h1>
              <p className={isDark ? 'mt-6 max-w-xl text-base text-white/75 sm:text-lg' : 'mt-6 max-w-xl text-base text-slate-700 sm:text-lg'}>
                Muévete más rápido, seguro y al mejor precio. TranspoApp conecta pasajeros y
                conductores con una experiencia simple, moderna y confiable.
              </p>

              <div id="descargar" className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#conductores"
                  {...buttonMotion}
                  className={`${secondaryButtonClass} px-8 py-4 text-base`}
                >
                  Descargar TranspoApp
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mx-auto w-full max-w-md"
            >
              <div className={isDark ? 'rounded-[2.5rem] border border-white/20 bg-white/5 p-3 shadow-2xl shadow-blue-500/20 backdrop-blur' : 'rounded-[2.5rem] border border-slate-200 bg-white/80 p-3 shadow-2xl shadow-blue-200/40 backdrop-blur'}>
                <div className={isDark ? 'overflow-hidden rounded-[2rem] border border-white/10 bg-black/30' : 'overflow-hidden rounded-[2rem] border border-slate-200 bg-white/40'}>
                  <img
                    src="https://i.ibb.co/kNX5HzV/trasport.png"
                    alt="Mockup de celular"
                    className="h-[520px] w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="seguridad" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <motion.div {...reveal} className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Todo lo que necesitas para moverte</h2>
            <p className={`mt-4 ${sectionMutedTextClass}`}>
              Diseñado para que cada viaje sea seguro, rápido y transparente.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={cardClass}
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/15 p-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${sectionMutedTextClass}`}>
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <motion.div {...reveal} className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Cómo funciona TranspoApp</h2>
            <p className={`mt-4 ${sectionMutedTextClass}`}>
              Una experiencia fluida para pasajeros y conductores en cada etapa.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {howItWorks.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={stepsCardClass}
              >
                <p className="text-sm font-bold text-blue-400">Paso {item.step}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${sectionMutedTextClass}`}>
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <motion.div
            {...reveal}
            className={isDark ? 'grid gap-4 rounded-3xl border border-white/10 bg-neutral-950 p-6 sm:grid-cols-2 lg:grid-cols-4' : 'grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4'}
          >
            {cityStats.map((stat) => (
              <div key={stat.label} className={isDark ? 'rounded-2xl border border-white/10 bg-black/60 p-5' : 'rounded-2xl border border-slate-200 bg-slate-50 p-5'}>
                <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                <p className={isDark ? 'mt-2 text-sm text-white/65' : 'mt-2 text-sm text-slate-600'}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="conductores" className="relative isolate overflow-hidden py-20">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
            alt="Conducción nocturna"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className={isDark ? 'absolute inset-0 bg-black/75' : 'absolute inset-0 bg-slate-100/70'} />

          <motion.div
            {...reveal}
            className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8"
          >
            <h2 className="text-3xl font-bold sm:text-5xl">
              Sé tu propio jefe, gana dinero manejando
            </h2>
            <p className={isDark ? 'mx-auto mt-6 max-w-2xl text-white/75 sm:text-lg' : 'mx-auto mt-6 max-w-2xl text-slate-700 sm:text-lg'}>
              Conduce cuando quieras, incrementa tus ingresos y forma parte de una plataforma que
              pone tu seguridad y tiempo primero.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <motion.div {...reveal} className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Lo que dicen nuestros usuarios</h2>
            <p className={`mt-4 ${sectionMutedTextClass}`}>Miles de viajes, miles de historias reales.</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={cardClass}
              >
                <p className={isDark ? 'text-white/80' : 'text-slate-700'}>“{item.text}”</p>
                <div className={isDark ? 'mt-6 border-t border-white/10 pt-4' : 'mt-6 border-t border-slate-200 pt-4'}>
                  <p className="font-semibold">{item.name}</p>
                  <p className={isDark ? 'text-sm text-white/60' : 'text-sm text-slate-500'}>
                    {item.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <motion.div
            {...reveal}
            className={isDark ? 'rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-blue-400/10 p-8 text-center sm:p-12' : 'rounded-3xl border border-blue-300 bg-gradient-to-r from-blue-100 to-blue-50 p-8 text-center sm:p-12'}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Descarga TranspoApp y empieza hoy</h2>
            <p className={isDark ? 'mx-auto mt-4 max-w-2xl text-white/75 sm:text-lg' : 'mx-auto mt-4 max-w-2xl text-slate-700 sm:text-lg'}>
              Ya sea que quieras viajar cómodo o generar ingresos como conductor, esta es tu app.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#"
                {...buttonMotion}
                className={secondaryButtonClass}
              >
                Descargar TranspoApp
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className={isDark ? 'border-t border-white/10 bg-black' : 'border-t border-slate-200 bg-slate-50'}>
        <div className={isDark ? 'mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8' : 'mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8'}>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              Instagram
            </a>
            <a href="https://www.twitter.com" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              X
            </a>
            <a href="https://www.facebook.com" className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
              Facebook
            </a>
          </div>
          <a  className={isDark ? 'transition hover:text-white' : 'transition hover:text-slate-950'}>
            Términos de servicio
          </a>
          <p>© {new Date().getFullYear()} TranspoApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
