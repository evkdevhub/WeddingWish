import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const envelopesData = [
  {
    id: 1,
    sender: "От Димы",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    title: "От души",
    message: "Поздравляю!",
  },
  {
    id: 2,
    sender: "От Жени",
     videoUrl: "https://www.youtube.com/embed/RW7Nx8LpR8s",
    title: "Самой красивой и талантливой девчонке и самому везучему пацану",
    message: "Вы создаёте настоящую магию вместе. Пусть так будет всегда!",
  },
  {
    id: 3,
    sender: "От Ирины и Саши",
    videoUrl: "https://www.youtube.com/embed/v2Ag52Xpc0c",
    title: "С любовью",
    message: "Желаем гармонии, тепла и вечной влюблённости друг в друга!",
  },
  {
    id: 4,
    sender: "От Моти",
    videoUrl: "https://www.youtube.com/embed/6BAJm5eAiSU",
    title: "Мур-мур поздравление",
    message: "Мяу! Будьте такими же пушистыми и обнимательными, как я!",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [modalData, setModalData] = useState({ title: "", message: "" });

  const openModal = (videoUrl: string, title: string, message: string) => {
    setSelectedVideo(videoUrl);
    setModalData({ title, message });
    setIsOpen(true);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-start py-16 px-4 bg-gradient-to-br from-[#e0f7fa] to-[#c8e6c9] scrollable-mobile"
      style={{ height: "100vh", maxHeight: "100vh", overflowY: "auto" }}
    >
      {/* Background hearts */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-400 opacity-50 animate-heart"
            style={{
              fontSize: `${Math.random() * 30 + 15}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 100}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Title */}
      <h1
  className="text-center font-script text-6xl md:text-7xl lg:text-8xl mb-6 z-10"
  style={{
    background: "linear-gradient(90deg, #f43f5e, #fb7185, #f43f5e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    paddingBottom: "6px",
    lineHeight: "1.1",
  }}
>
  Лиза & Марк
</h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl max-w-2xl text-gray-700 mb-10 z-10">
        Поздравляем с началом красивой, увлекательной истории! Хоть мы и не рядом сегодня,
        надеемся, что эти видео согреют вас и напомнят, как мы вас любим.
      </p>

      {/* Envelopes */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 z-10"
        style={{ width: "100%" }}
      >
        {envelopesData.map(({ id, sender, videoUrl, title, message }) => (
          <div key={id} className="flex flex-col items-center">
            <p className="text-xl font-semibold text-gray-700 mb-3">{sender}</p>
            <div
              className="letter-image"
              onClick={() => openModal(videoUrl, title, message)}
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(videoUrl, title, message);
              }}
              aria-label={`Открыть поздравление от ${sender}`}
            >
              <div className="animated-mail">
                <div className="back-fold"></div>
                <div className="letter">
                  <div className="letter-border"></div>
                  <div className="letter-title"></div>
                  <div className="letter-context"></div>
                  <div className="letter-stamp">
                    <div className="letter-stamp-inner"></div>
                  </div>
                </div>
                <div className="top-fold"></div>
                <div className="body"></div>
                <div className="left-fold"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Text under envelopes */}
      <p className="text-center text-gray-600 mt-6 mb-8 text-base md:text-lg font-medium z-10">
        Основной подарок прилетит на сбер 📩
      </p>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 z-50">
          <DialogHeader className="flex justify-between items-center mb-4">
            <DialogTitle>{modalData.title}</DialogTitle>
            
          </DialogHeader>
          <p className="text-gray-700 mb-4">{modalData.message}</p>
          {selectedVideo && (
  <div className="w-full flex justify-center">
    <div
      className={`w-full max-w-[480px] ${
        selectedVideo.includes("shorts") ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <iframe
        src={selectedVideo}
        title="Видео поздравление"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl transition-all duration-300"
      />
    </div>
  </div>
)}

        </DialogContent>
      </Dialog>

      {/* Hearts animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <HeartsAnimation count={12} />
      </div>

      {/* Styles */}
      <style>{`
        @keyframes heart {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-1000px) scale(1.2);
            opacity: 0;
          }
        }

        .animate-heart {
          animation-name: heart;
          animation-duration: 6s;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          position: absolute;
          font-size: 24px;
          color: #f43f5e;
          user-select: none;
          pointer-events: none;
          will-change: transform, opacity;
        }

        /* Вертикальный скролл на мобилке */
        @media (max-width: 768px) {
          .scrollable-mobile {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
}

function HeartsAnimation({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = i * 0.5 + Math.random();
        const size = 16 + Math.random() * 24;
        return (
          <div
            key={i}
            className="animate-heart"
            style={{
              left: `${left}%`,
              bottom: "-40px",
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
            }}
          >
            ♥
          </div>
        );
      })}
    </>
  );
}
