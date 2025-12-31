"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const text1 = "Este projeto convida a igreja a uma jornada anual de leitura bíblica diária, percorrendo toda a Escritura de Gênesis a Apocalipse. A proposta é simples: pequenas porções lidas com atenção e entendimento, em vez de grandes blocos apressados. Essa abordagem reduz a desistência e permite enxergar a ação de Deus em toda a Bíblia simultaneamente. Não se trata apenas de cumprir uma meta, mas de formar um hábito transformador de caminhada constante nas Escrituras.";
  const text2 = "Junte-se a nós nessa jornada! Comprometa-se a ouvir a leitura bíblica diária ou baixe o PDF para acompanhar. Juntos, vamos percorrer toda a Palavra de Deus ao longo do ano, para Sua glória. Comece hoje mesmo!";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text1.length) {
        setDisplayedText1(text1.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const delay = text1.length * 20;
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text2.length) {
          setDisplayedText2(text2.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#c89635' }}>
      <style jsx>{`
        @keyframes fallDownBounce {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
            filter: drop-shadow(15px 15px 20px rgba(0, 0, 0, 0.3));
          }
          60% {
            opacity: 1;
          }
          75% {
            transform: translateY(0);
            filter: drop-shadow(8px 8px 25px rgba(0, 0, 0, 0.8));
          }
          85% {
            transform: translateY(-15px);
            filter: drop-shadow(12px 12px 22px rgba(0, 0, 0, 0.6));
          }
          92% {
            transform: translateY(0);
            filter: drop-shadow(8px 8px 25px rgba(0, 0, 0, 0.8));
          }
          96% {
            transform: translateY(-5px);
            filter: drop-shadow(10px 10px 22px rgba(0, 0, 0, 0.7));
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            filter: none;
          }
        }

        .mockup-animation {
          animation: fallDownBounce 1.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes scrollInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .scroll-content {
          display: inline-block;
          animation: scrollInfinite 20s linear infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .typing-cursor {
          animation: blink 0.7s infinite;
          margin-left: 2px;
        }
      `}</style>

      <main className="flex flex-col items-center">
        <div className="w-[90%] max-w-[385px] mx-auto mt-[50px] relative pb-12">
          <div className="mb-[-20px] relative z-0">
            <Image
              src="/title.png"
              alt="Title"
              width={385}
              height={100}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mockup-animation relative z-10">
            <Image
              src="/mockup2.png"
              alt="Mockup"
              width={385}
              height={500}
              className="w-full h-auto"
              priority
              style={{
                maxWidth: '180px',
                margin: '0 auto',
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full px-6">
          <button
            className="w-full py-3 px-6 rounded-3xl font-medium text-lg transition-all hover:scale-105"
            style={{
              backgroundColor: '#101010',
              color: '#eee6d1',
              fontSize: '21px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
          >
            OUÇA AGORA NO SPOTIFY
          </button>

          <a
            href="/plano.pdf"
            download
            className="w-full py-3 px-6 rounded-3xl font-medium text-lg transition-all hover:scale-105 block text-center"
            style={{
              backgroundColor: '#101010',
              color: '#eee6d1',
              fontSize: '21px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              textDecoration: 'none'
            }}
          >
            BAIXE O PLANO ANUAL
          </a>
          <a
            href="https://chat.whatsapp.com/DRb12ml3PEU0juWAvbFDSV  "
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 rounded-3xl font-medium text-lg transition-all hover:scale-105 block text-center"
            style={{
              backgroundColor: '#101010',
              color: '#eee6d1',
              fontSize: '21px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              textDecoration: 'none'
            }}
          >
            GRUPO DO WHATSAPP
          </a>
        </div>

        <div className="scroll-container w-full ">
          <div className="scroll-content" style={{ height: '50px', marginTop: '70px', marginBottom: '25px' }}>
            <Image
              style={{
                height: '50px',
                width: 'auto',
                maxWidth: 'fit-content',
              }}
              src="/asset.png"
              alt="Asset"
              width={2000}
              height={100}
              className="inline-block"
            />
            <Image
                style={{
                  height: '50px',
                  width: 'auto',
                  maxWidth: 'fit-content',
                  marginLeft: '-40px',
                }}
              src="/asset.png"
              alt="Asset"
              width={2000}
              height={100}
              className="inline-block"
            />
          </div>
        </div>

        <div className="w-full px-6 py-12 max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/0_-lvAyl_W4?enablejsapi=1&modestbranding=1&rel=0"
              title="Vídeo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)' }}
            ></iframe>
          </div>
        </div>

        <div ref={sectionRef} className="w-full px-6 py-12 max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              backgroundColor: '#f0e7d2',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h1 className="text-3xl font-bold mb-6" style={{ color: '#1c1c1c' }}>
              Sobre o projeto
            </h1>
            
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{ color: '#1c1c1c', minHeight: '200px' }}
            >
              {displayedText1}
              <br />
              <br />
              {displayedText2}
              <span className="typing-cursor" style={{ opacity: displayedText1.length < text1.length ? 1 : 0, color: '#1c1c1c' }}>|</span>
            </p>

            {/* <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: '#1c1c1c', minHeight: '100px' }}
            >
              {displayedText2}
              <span className="typing-cursor" style={{ opacity: displayedText2.length < text2.length && displayedText1.length >= text1.length ? 1 : 0, color: '#1c1c1c' }}>|</span>
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
}
