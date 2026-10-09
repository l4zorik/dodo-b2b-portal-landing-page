'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Globe2,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Plus,
  Minus,
  Star,
  Truck,
  X,
  Zap,
} from 'lucide-react'

const categories = [
  { icon: '◈', name: 'Elektronika', count: '32 400 dodavatelů', tone: 'bg-[#e5f0ff]' },
  { icon: '⌂', name: 'Dům & dílna', count: '18 920 dodavatelů', tone: 'bg-[#fff0db]' },
  { icon: '✦', name: 'Móda & textil', count: '26 100 dodavatelů', tone: 'bg-[#f5e7ff]' },
  { icon: '◇', name: 'Obaly & branding', count: '9 840 dodavatelů', tone: 'bg-[#e0f5ed]' },
  { icon: '◎', name: 'Gastro & retail', count: '12 630 dodavatelů', tone: 'bg-[#ffe4e2]' },
  { icon: '＋', name: 'Všechny kategorie', count: '120+ kategorií', tone: 'bg-[#edf0f2]' },
]

const segments = [
  { title: 'E-shopy', text: 'Nakupujte rychleji, levněji a bez zbytečných mezičlánků.', stat: '−38 % nákladů', color: 'bg-[#eaf2ff]' },
  { title: 'Výrobci', text: 'Najděte partnera pro výrobu na míru i pravidelný odběr.', stat: 'MOQ od 10 ks', color: 'bg-[#fff1df]' },
  { title: 'Restaurace & hotely', text: 'Kvalitní vybavení, gastro obaly a spotřební sortiment na jednom místě.', stat: '7–14 dní dodání', color: 'bg-[#e9f7ef]' },
  { title: 'Řemesla & firmy', text: 'Materiál, nářadí i vybavení pro každý projekt bez čekání.', stat: 'Ověření do 24 h', color: 'bg-[#f8e9f5]' },
  { title: 'Marketing & eventy', text: 'Proměňte nápad ve výrobek. Od vzorku až po tisíce kusů.', stat: 'Vzorek zdarma', color: 'bg-[#fff1ef]' },
]

const products = [
  { name: 'Prémiové poštovní obálky', meta: 'Balení 500 ks · 4 varianty', price: '1 290 Kč', oldPrice: '1 690 Kč', badge: '−24 %', tone: 'from-[#c9d6ff] via-[#e1ddff] to-[#ffcae3]', tag: 'Bestseller' },
  { name: 'Recyklované dárkové krabičky', meta: 'MOQ 50 ks · vlastní potisk', price: 'od 18 Kč / ks', oldPrice: '24 Kč / ks', badge: 'Novinka', tone: 'from-[#ffd6e7] via-[#ffe9de] to-[#fff6c9]', tag: 'Top nabídka' },
  { name: 'Bezdrátový skener skladů', meta: 'EU sklad · doprava zdarma', price: '2 490 Kč', oldPrice: '3 190 Kč', badge: '−22 %', tone: 'from-[#bfe2ff] via-[#d6e7ff] to-[#d7cbff]', tag: 'Ověřeno' },
  { name: 'Stojan pro výdejní místa', meta: 'Kov · 3 velikosti · od 10 ks', price: 'od 890 Kč', oldPrice: '1 120 Kč', badge: '−20 %', tone: 'from-[#d8f4eb] via-[#d9edff] to-[#ddd4ff]', tag: 'Rychlé dodání' },
  { name: 'Personalizované samolepky', meta: 'Od 100 ks · výroba 5 dní', price: 'od 0,80 Kč / ks', oldPrice: '1,20 Kč / ks', badge: '−33 %', tone: 'from-[#ffe1cf] via-[#ffe0f1] to-[#d7d9ff]', tag: 'Pro e-shopy' },
  { name: 'Termo tašky pro rozvoz', meta: 'Izolace 6 h · logo na přání', price: 'od 349 Kč', oldPrice: '449 Kč', badge: '−22 %', tone: 'from-[#c9eff1] via-[#d7e0ff] to-[#f0d6ff]', tag: 'Akce týdne' },
]

const plans = [
  { name: 'Start', price: '0', description: 'Pro první nákup a ověření trhu.', features: ['Procházení katalogu', 'Poptávky od 5 dodavatelů', 'Základní ochrana nákupu'], cta: 'Začít zdarma' },
  { name: 'Růst', price: '1 490', description: 'Pro e-shopy a firmy, které nakupují pravidelně.', features: ['Neomezené poptávky', 'Prioritní ověření dodavatelů', 'Osobní nákupčí v češtině', 'Výhodnější doprava'], cta: 'Vybrat Růst', featured: true },
  { name: 'Profi', price: '4 990', description: 'Pro velkoobchod, výrobu a velké objemy.', features: ['Vše z Růstu', 'Kontrola kvality před expedicí', 'Individuální sourcing', 'Report nákladů a marží'], cta: 'Promluvit s expertem' },
]

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activePlan, setActivePlan] = useState('Růst')
  const [cartCount, setCartCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fa] text-[#14202b]">
      <div className="bg-[#132532] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white/90">
        <span className="mr-2 inline-flex items-center gap-1 text-[#ff6aa8]"><Zap size={13} fill="currentColor" /> AKČNÍ VLNA</span>
        Doprava pro první objednávku zdarma · platí do neděle
      </div>
      <header className="border-b border-[#dbe2e7] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-black tracking-tight" aria-label="DodoSupply domů">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#6d35d9] text-xl text-white shadow-[3px_3px_0_#132532]">D</span>
            <span className="text-xl">dodo<span className="text-[#6d35d9]">supply</span><sup className="ml-1 text-[9px] text-[#7c8b96]">CZ</sup></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#52616b] lg:flex">
            <a href="#katalog" className="hover:text-[#6d35d9]">Katalog</a><a href="#jak-to-funguje" className="hover:text-[#6d35d9]">Jak to funguje</a><a href="#dodavatele" className="hover:text-[#6d35d9]">Pro dodavatele</a><a href="#cenik" className="hover:text-[#6d35d9]">Ceník</a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex"><a href="#kontakt" className="text-sm font-semibold text-[#52616b]">Přihlásit se</a><a href="#cenik" className="rounded-full bg-[#6d35d9] px-5 py-2.5 text-sm font-bold text-white shadow-[3px_3px_0_#132532] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">Začít nakupovat <ArrowRight className="ml-1 inline" size={15} /></a></div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Otevřít menu">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && <nav className="flex flex-col gap-4 border-t border-[#dbe2e7] px-5 py-5 text-sm font-semibold lg:hidden"><a href="#katalog" onClick={() => setMobileOpen(false)}>Katalog</a><a href="#jak-to-funguje" onClick={() => setMobileOpen(false)}>Jak to funguje</a><a href="#dodavatele" onClick={() => setMobileOpen(false)}>Pro dodavatele</a><a href="#cenik" onClick={() => setMobileOpen(false)}>Ceník</a></nav>}
      </header>

      <section id="top" className="relative bg-[#f4f0ff] px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-28 top-10 size-96 rounded-full bg-[#d7b8ff]/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#efc69e] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-[#7b3fe4]"><Sparkles size={14} /> Česko nakupuje chytřeji</div>
            <h1 className="max-w-3xl text-[clamp(3.25rem,7vw,6.7rem)] font-black leading-[.9] tracking-[-.07em] text-[#14202b]">Dobrý nákup.<br /><span className="text-[#6d35d9]">Velký náskok.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#52616b] lg:text-xl">DodoSupply je český portál pro firmy, které chtějí nakupovat přímo od prověřených dodavatelů. Výhodnější ceny, rychlé vzorky a člověk na telefonu, když ho potřebujete.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#katalog" className="rounded-full bg-[#6d35d9] px-6 py-3.5 font-bold text-white shadow-[4px_4px_0_#132532] transition hover:translate-y-0.5 hover:shadow-none">Prohlédnout katalog <ArrowRight className="ml-1 inline" size={17} /></a><a href="#jak-to-funguje" className="rounded-full border border-[#b9c3ca] bg-white px-6 py-3.5 font-bold text-[#14202b] hover:border-[#14202b]">Jak to funguje</a></div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-[#687984]"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#1e9c68]" /> Ochrana platby</span><span className="flex items-center gap-2"><BadgeCheck size={16} className="text-[#1e9c68]" /> Ověření dodavatelé</span><span className="flex items-center gap-2"><Globe2 size={16} className="text-[#1e9c68]" /> Nákup v češtině</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-5 top-9 hidden rotate-[-7deg] rounded-2xl bg-[#132532] px-4 py-3 text-white shadow-xl sm:block"><p className="text-[10px] uppercase tracking-[.18em] text-white/60">Dnešní úspora</p><p className="text-2xl font-black text-[#ff6aa8]">− 28 640 Kč</p></div>
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-[#dcebf2] shadow-[0_25px_70px_rgba(20,32,43,.18)]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_34%,#fff5b3_0,transparent_25%),linear-gradient(135deg,#a9caff_0%,#bda7ff_58%,#ff6aa8_100%)]" /><div className="relative flex aspect-square flex-col justify-between p-7"><div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[.18em] text-[#132532]/70"><span>DS / 01</span><span>Supply faster</span></div><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#132532]/70">Ověřeno. Výhodně. Bez bariér.</p><p className="mt-2 max-w-xs text-4xl font-black leading-[.92] tracking-[-.06em] text-[#132532]">Váš nový<br />dodavatelský<br /><span className="text-white">náskok.</span></p></div><div className="flex items-end justify-between"><div className="rounded-xl bg-white/85 px-3 py-2 text-xs font-bold text-[#132532] shadow-lg"><span className="text-[#6d35d9]">●</span> 12 490 aktivních nabídek</div><div className="flex size-16 items-center justify-center rounded-full border border-white/70 bg-[#6d35d9] text-center text-[9px] font-black uppercase leading-3 text-white">Bez<br />prostředníků</div></div></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe2e7] bg-white px-5 py-7 lg:px-8"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4"><div><p className="text-3xl font-black">120+</p><p className="text-xs font-semibold uppercase tracking-widest text-[#7a8992]">kategorií produktů</p></div><div><p className="text-3xl font-black">8 600+</p><p className="text-xs font-semibold uppercase tracking-widest text-[#7a8992]">ověřených partnerů</p></div><div><p className="text-3xl font-black">24 h</p><p className="text-xs font-semibold uppercase tracking-widest text-[#7a8992]">první odpověď</p></div><div><p className="text-3xl font-black">4,9/5</p><p className="text-xs font-semibold uppercase tracking-widest text-[#7a8992]">hodnocení zákazníků</p></div></div></section>

      <section id="katalog" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#6d35d9]">Katalog bez hranic</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.05em] lg:text-6xl">Od prvního kusu<br />po plný kamion.</h2></div><p className="max-w-md text-base leading-7 text-[#687984]">Ať hledáte obal na svíčku, CNC díl nebo nový bestseller pro váš e-shop, na DodoSupply najdete cestu od nápadu k doručení.</p></div>
        <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-[#132532] p-3 sm:flex-row"><div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-3"><Search size={19} className="text-[#6d35d9]" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Co dnes nakupujete? Zkuste třeba 'papírové krabičky'" className="w-full bg-transparent text-sm outline-none placeholder:text-[#9aa6ad]" /></div><button className="rounded-xl bg-[#6d35d9] px-6 py-3 font-bold text-white hover:bg-[#d93127]">Hledat dodavatele</button></div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map((category) => <a href="#kontakt" key={category.name} className={`${category.tone} group rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-lg`}><span className="flex size-10 items-center justify-center rounded-xl bg-white/75 text-xl font-bold">{category.icon}</span><p className="mt-9 text-sm font-black">{category.name}</p><p className="mt-1 text-[11px] font-medium leading-4 text-[#6c7a83]">{category.count}</p><ChevronRight size={16} className="mt-4 text-[#6d35d9] transition group-hover:translate-x-1" /></a>)}</div>
      </section>

      <section id="nabidky" className="bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#e83d92]">Dnešní výběr pro váš byznys</p><h2 className="text-4xl font-black tracking-[-.05em] lg:text-6xl">Nabídky, které dávají<br /><span className="text-[#6d35d9]">smysl už na první pohled.</span></h2></div>
            <div className="flex items-center gap-2 rounded-full border border-[#e7dff8] bg-[#faf8ff] px-4 py-2 text-sm font-bold text-[#6d35d9]"><BadgeCheck size={16} /> Ceny pro firmy · bez skrytých poplatků</div>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
            <aside className="hidden rounded-2xl border border-[#e6e8ef] bg-[#fbfcff] p-5 lg:block"><p className="text-sm font-black">Filtrovat nabídky</p><div className="mt-6 flex flex-col gap-5 text-sm text-[#5d6974]"><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#6d35d9]" defaultChecked /> Ověřený dodavatel</label><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#6d35d9]" /> Doprava zdarma</label><label className="flex items-center gap-3"><input type="checkbox" className="accent-[#6d35d9]" /> EU sklad</label><div className="border-t border-[#e6e8ef] pt-5"><p className="mb-3 font-bold text-[#14202b]">Kategorie</p><p className="py-1">Obaly & branding</p><p className="py-1">Sklad & logistika</p><p className="py-1">Pro e-shopy</p><p className="py-1">Gastro & retail</p></div></div></aside>
            <div>
              <div className="mb-5 flex items-center justify-between"><p className="text-sm font-bold text-[#5d6974]">Nejlepší nabídky <span className="text-[#9ba5ae]">· 1 248 výsledků</span></p><button className="rounded-full border border-[#dfe3ea] px-4 py-2 text-xs font-bold">Řazení: doporučené <ChevronDown className="ml-1 inline" size={14} /></button></div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <article key={product.name} className="group overflow-hidden rounded-2xl border border-[#e6e8ef] bg-white transition hover:-translate-y-1 hover:border-[#c9b5f3] hover:shadow-[0_18px_40px_rgba(109,53,217,.12)]"><div className={`relative flex h-40 items-end bg-gradient-to-br ${product.tone} p-4`}><span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-black text-[#e83d92]">{product.badge}</span><span className="absolute right-3 top-3 rounded-full bg-[#14202b]/85 px-2.5 py-1 text-[10px] font-bold text-white">{product.tag}</span><div className="h-16 w-24 rotate-[-6deg] rounded-xl border-4 border-white/80 bg-white/50 shadow-lg" /><div className="ml-[-5px] h-20 w-32 rotate-[5deg] rounded-xl border-4 border-white/80 bg-white/70 shadow-lg" /></div><div className="p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-base font-black leading-5">{product.name}</h3><p className="mt-2 text-xs text-[#7c8791]">{product.meta}</p></div><div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f2edff] text-[#6d35d9]"><BadgeCheck size={16} /></div></div><div className="mt-5 flex items-end justify-between"><div><p className="text-lg font-black text-[#6d35d9]">{product.price}</p><p className="text-xs text-[#9ba5ae] line-through">{product.oldPrice}</p></div><button onClick={() => { setCartCount((count) => count + 1); setCartOpen(true) }} className="flex items-center gap-1 rounded-full bg-[#6d35d9] px-3 py-2 text-xs font-black text-white transition hover:bg-[#e83d92]" aria-label={`Přidat ${product.name} do košíku`}><Plus size={14} /> Přidat</button></div></div></article>)}</div>
            </div>
          </div>
        </div>
      </section>

      {cartOpen && <div className="fixed bottom-5 right-5 z-20 w-[min(380px,calc(100vw-2rem))] rounded-3xl border border-[#eadffb] bg-white p-5 shadow-[0_20px_70px_rgba(20,32,43,.25)]"><div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[.18em] text-[#e83d92]">Košík · {cartCount} položek</p><h3 className="mt-1 text-xl font-black">Dokončete nákup chytřeji</h3></div><button onClick={() => setCartOpen(false)} className="rounded-full p-2 text-[#7c8791] hover:bg-[#f5f1ff]" aria-label="Zavřít košík"><X size={18} /></button></div><div className="mt-5 rounded-2xl bg-[#f6f1ff] p-4"><p className="text-sm font-black">Přidejte k objednávce a ušetřete</p><p className="mt-1 text-xs leading-5 text-[#6c7480]">Doprava zdarma od 2 500 Kč. K objednávce doporučujeme obaly nebo samolepky pro lepší marži.</p><div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3"><div><p className="text-sm font-bold">Vzorkovací balíček obalů</p><p className="text-xs text-[#e83d92]">Jen 249 Kč místo 399 Kč</p></div><button onClick={() => setCartCount((count) => count + 1)} className="rounded-full bg-[#e83d92] p-2 text-white" aria-label="Přidat vzorkovací balíček"><Plus size={16} /></button></div></div><button className="mt-4 w-full rounded-xl bg-[#14202b] px-5 py-3.5 text-sm font-black text-white hover:bg-[#6d35d9]">Pokračovat k objednávce <ArrowRight className="ml-1 inline" size={15} /></button></div>}

      <section id="jak-to-funguje" className="bg-[#132532] px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#ff6aa8]">Méně řešení. Více obchodu.</p><h2 className="text-4xl font-black tracking-[-.05em] lg:text-6xl">Dodavatelský portál, který chápe český byznys.</h2><p className="mt-6 max-w-md leading-7 text-white/65">Spojili jsme rychlost velkého marketplace, kontrolu osobního nákupčího a férové podmínky pro firmy všech velikostí.</p><a href="#kontakt" className="mt-8 inline-flex items-center gap-2 font-bold text-[#ff6aa8]">Poznat DodoSupply <ArrowRight size={17} /></a></div><div className="grid gap-3 sm:grid-cols-2">{['Najděte správný produkt', 'Porovnejte nabídky', 'Ověřte kvalitu', 'Objednejte bezpečně'].map((item, i) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[.06] p-6"><div className="mb-10 flex items-center justify-between"><span className="text-3xl font-black text-[#ff6aa8]">0{i + 1}</span><ArrowRight size={18} className="text-white/40" /></div><h3 className="text-lg font-black">{item}</h3><p className="mt-2 text-sm leading-6 text-white/55">{['Zadejte poptávku nebo procházejte katalog od ověřených partnerů.', 'Vidíte cenu za kus, MOQ, dopravu i reálný termín dodání.', 'Vzorky, fotografie, certifikace a kontrola před odesláním.', 'Platba s ochranou a podpora v češtině od prvního dotazu.'][i]}</p></div>)}</div></div></div></section>

      <section id="dodavatele" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#6d35d9]">Pro koho jsme</p><h2 className="text-4xl font-black tracking-[-.05em] lg:text-6xl">Jedna platforma.<br />Pět způsobů, jak růst.</h2></div><p className="max-w-sm text-sm leading-6 text-[#687984]">Pro malé podnikatele i týmy, které už mají nákupní oddělení. Přizpůsobíme se vašemu objemu, ne naopak.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{segments.map((item, i) => <a href="#kontakt" key={item.title} className={`${item.color} group rounded-2xl p-5 transition hover:-translate-y-1`}><span className="text-xs font-black text-[#6d35d9]">0{i + 1}</span><h3 className="mt-16 text-xl font-black tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#5f6e77]">{item.text}</p><div className="mt-8 flex items-center justify-between border-t border-black/10 pt-3 text-xs font-bold"><span>{item.stat}</span><ChevronRight size={16} className="text-[#6d35d9] transition group-hover:translate-x-1" /></div></a>)}</div></section>

      <section id="cenik" className="bg-[#f4f0ff] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#6d35d9]">Ceník bez drobného písmene</p><h2 className="text-4xl font-black tracking-[-.05em] lg:text-6xl">Začněte po svém.<br />Rosteme s vámi.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#687984]">Žádné složité provize. Vyberte si režim, který odpovídá vašemu podnikání. Kdykoliv můžete přejít výš nebo níž.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`relative flex flex-col rounded-3xl border p-7 ${plan.featured ? 'border-[#6d35d9] bg-[#132532] text-white shadow-[7px_7px_0_#6d35d9]' : 'border-[#dbe2e7] bg-white'}`}>{plan.featured && <span className="absolute -top-3 left-7 rounded-full bg-[#6d35d9] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Nejčastější volba</span>}<h3 className="text-xl font-black">{plan.name}</h3><p className={`mt-2 text-sm ${plan.featured ? 'text-white/60' : 'text-[#687984]'}`}>{plan.description}</p><p className="mt-8 text-4xl font-black">{plan.price} <span className="text-sm font-bold">Kč / měsíc</span></p><ul className={`mt-8 flex flex-1 flex-col gap-4 text-sm ${plan.featured ? 'text-white/80' : 'text-[#52616b]'}`}>{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><BadgeCheck size={17} className="shrink-0 text-[#1e9c68]" />{feature}</li>)}</ul><button onClick={() => setActivePlan(plan.name)} className={`mt-9 rounded-full px-5 py-3 text-sm font-bold transition ${plan.featured ? 'bg-[#ff6aa8] text-[#132532] hover:bg-white' : 'border border-[#b9c3ca] hover:border-[#132532]'}`}>{activePlan === plan.name ? 'Vybráno ✓' : plan.cta}</button></div>)}</div></div></section>

      <section id="kontakt" className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#6d35d9] p-8 text-white md:p-14 lg:grid-cols-[1fr_.75fr] lg:items-center"><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-white/65">Připraveno pro váš další krok</p><h2 className="max-w-xl text-4xl font-black tracking-[-.05em] lg:text-6xl">Nakupujte méně. Vydělávejte více.</h2><p className="mt-5 max-w-lg leading-7 text-white/80">Napište nám, co hledáte. Do 24 hodin vám pošleme první shortlist dodavatelů, orientační cenu a nejrychlejší cestu k objednávce.</p></div><div className="rounded-2xl bg-white p-3"><div className="flex items-center gap-3 rounded-xl border border-[#dbe2e7] px-4 py-3"><CircleHelp size={18} className="text-[#6d35d9]" /><input placeholder="Váš pracovní e-mail" type="email" className="w-full bg-transparent text-sm text-[#14202b] outline-none" /></div><button className="mt-3 w-full rounded-xl bg-[#132532] px-5 py-3.5 font-bold text-white hover:bg-[#203846]">Chci najít dodavatele <ArrowRight className="ml-1 inline" size={16} /></button><p className="mt-3 text-center text-[10px] text-[#7a8992]">Bez spamu. Jen konkrétní nabídka pro váš byznys.</p></div></div></section>

      <footer className="border-t border-[#dbe2e7] bg-white px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><div className="flex items-center gap-2 font-black"><span className="flex size-8 items-center justify-center rounded-lg bg-[#6d35d9] text-white">D</span>dodo<span className="text-[#6d35d9]">supply</span></div><p className="mt-3 max-w-xs text-xs leading-5 text-[#7a8992]">Český dodavatelský portál pro podnikatele, kteří chtějí růst bez zbytečných překážek.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-semibold text-[#52616b]"><a href="#katalog">Katalog</a><a href="#dodavatele">Pro dodavatele</a><a href="#cenik">Ceník</a><a href="#kontakt">Kontakt</a><a href="#jak-to-funguje">O nás</a><a href="#kontakt">Podpora</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-[#edf0f2] pt-5 text-xs text-[#9aa6ad]">© 2025 DodoSupply s.r.o. · Všechna práva vyhrazena · Vytvořeno pro český byznys.</div></footer>
    </main>
  )
}

void Truck
void PackageCheck
void Clock3
void Star
void ChevronDown
