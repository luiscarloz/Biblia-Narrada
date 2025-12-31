"use client";

import Image from "next/image";

export default function Home() {
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
            filter: drop-shadow(8px 8px 25px rgba(0, 0, 0, 0.8));
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
              marginTop: '35px',
              color: '#eee6d1',
              fontSize: '23px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
          >
            OUÇA AGORA
          </button>

          <a
            href="/plano.pdf"
            download
            className="w-full py-3 px-6 rounded-3xl font-medium text-lg transition-all hover:scale-105 block text-center"
            style={{
              backgroundColor: '#101010',
              color: '#eee6d1',
              fontSize: '23px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              textDecoration: 'none'
            }}
          >
            BAIXE O PLANO ANUAL
          </a>
        </div>

        <div className="scroll-container w-full mt-12">
          <div className="scroll-content" style={{ height: '50px' }}>
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
      </main>
    </div>
  );
}
