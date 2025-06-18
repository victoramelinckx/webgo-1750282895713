
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tu Negocio Hoy Mismo" subheadline="Para dueños de pequeños negocios, ofrecemos una solución rápida y eficaz para iniciar tus ventas online en menos de 24 horas. Soporte 24/7 incluido." cta1="Inicia Ahora" />
<How step1Title="Decide Digitalizar" step1Desc="Deja atrás la venta solo por recomendación." step2Title="Nos Entregas tu Visión" step2Desc="Nos cuentas sobre tu negocio y tus metas." step3Title="Vende en Menos de 24 Horas" step3Desc="Tu web de ventas lista, con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza tu negocio, potencia tus ventas" subheadline="Nosotros generamos y gestionamos tu sitio web, diferénciate con WebGo y alcanza nuevas oportunidades de venta." beneficiotitulo1="Ventas 24/7" beneficio1="Tu negocio disponible siempre, aumenta tus ventas." beneficiotitulo2="Gestión integral" beneficio2="Nos encargamos de tu sitio, tú enfócate en crecer." />
<Services heading="Impulsa Tu Negocio Digitalmente, Haz Crecer Tus Ventas" description="Con WebGo, transforma tu negocio en una potente máquina de ventas online. Precio: 1234. No necesitas ser un experto en tecnología, nos encargamos de todo por ti." services={[{"name":"Diseño de Sitio Web","icon":"globe","description":"Creación de sitios web atractivos y eficientes."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad online con SEO."},{"name":"Gestión de Redes Sociales","icon":"share-alt","description":"Conecta con tus clientes a través de las redes."},{"name":"Soporte 24/7","icon":"headset","description":"Soporte constante para mantener tu web activa."},{"name":"Marketing Digital","icon":"bullhorn","description":"Promociona tu negocio en el mundo digital."},{"name":"Análisis de Métricas","icon":"chart-line","description":"Entiende mejor a tus clientes con análisis de datos."}]} />
<BeforeAndAfter subheadline="Revelando éxitos digitales, un proyecto web a la vez" />
<Faq faqs={[{"pregunta":"¿Es costoso el servicio de digitalización de ventas de WebGo?","respuesta":"Nuestro servicio de digitalización en WebGo tiene un precio competitivo de 1234. Nos enfocamos en ofrecer un servicio de alta calidad y efectivo que impulse las ventas online de tu negocio a un precio accesible."},{"pregunta":"¿Es complicado manejar las ventas online si nunca lo he hecho antes?","respuesta":"Entendemos que puede parecer un desafío si no estás familiarizado con las ventas online. En WebGo, te facilitamos este proceso. Nuestros servicios están diseñados para que sean fáciles de usar, incluso si no tienes experiencia previa en ventas online."},{"pregunta":"Si mis clientes son principalmente por recomendación, ¿puedo seguir aprovechando eso en línea?","respuesta":"Absolutamente, en WebGo sabemos lo valiosas que son las recomendaciones. Nuestro servicio te permitirá no solo mantener esas recomendaciones, sino también amplificarlas al llegar a una audiencia más amplia en línea."},{"pregunta":"¿Cuánto tiempo tengo que invertir para gestionar mi sitio web con WebGo?","respuesta":"En WebGo, nuestro objetivo es ahorrarte tiempo. Nuestra plataforma es fácil de usar y administrar. Además, nuestro equipo de soporte está disponible para ayudarte en cada paso del camino, para que puedas enfocarte en lo que mejor sabes hacer: administrar tu negocio."},{"pregunta":"¿Qué pasa si mis clientes no están acostumbrados a comprar en línea?","respuesta":"En WebGo, nos esforzamos por hacer que el proceso de compra en línea sea lo más simple y natural posible. Esto fomenta la facilidad de uso para tus clientes, incluso si no están acostumbrados a comprar en línea. De esta manera, podrás expandir tu negocio y llegar a más clientes que nunca."}]} />
<BookAppointment 
                      heading="Emprende el Camino Digital Hoy" 
                      description="En WebGo, hacemos que la digitalización de tus ventas sea fácil, rápida y asequible. Empieza a vender en línea por solo 1234 con asdasd - asdada."
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="G7fOe2FysqVLgEch31sEf4Xp6pv2"
                    />
<Footer />
    </main>
  );
}
