import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoMessage {
  name: string;
  displayName: string;
  videoUrl: string;
  message: string;
  signature: string;
}

const videoMessages: VideoMessage[] = [
  {
    name: "dima",
    displayName: "От Димы",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    message: "Дорогие Лиза и Марк! Желаю вам бесконечной любви, понимания и счастья! Пусть ваш союз будет крепким как алмаз и нежным как утренняя роса!",
    signature: "С любовью, Дима ♥"
  },
  {
    name: "zhenya",
    displayName: "От Жени",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    message: "Лиза и Марк, пусть ваша любовь будет источником силы и вдохновения! Желаю вам много смеха, приключений и прекрасных моментов вместе!",
    signature: "С теплотой, Женя ♥"
  },
  {
    name: "irina",
    displayName: "От Ирины",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    message: "Дорогие молодожены! Пусть ваш дом всегда будет полон любви, тепла и уюта! Желаю вам взаимопонимания и поддержки друг друга во всем!",
    signature: "С наилучшими пожеланиями, Ирина ♥"
  },
  {
    name: "sasha",
    displayName: "От Саши",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    message: "Лиза и Марк, пусть ваша семейная жизнь будет наполнена радостью, здоровьем и благополучием! Желаю вам всегда находить повод для улыбки и быть друг для друга лучшими друзьями!",
    signature: "От всего сердца, Саша ♥"
  }
];

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="heart">♥</div>
      ))}
    </div>
  );
};

const VideoModal = ({ videoMessage, isOpen, onOpenChange }: { 
  videoMessage: VideoMessage; 
  isOpen: boolean; 
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="modal-backdrop max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border-0 p-0">
        <div className="p-6">
          <DialogHeader className="flex flex-row justify-between items-center mb-6 space-y-0">
            <DialogTitle className="font-serif text-2xl" style={{ color: 'var(--purple-gray)' }}>
              Поздравление {videoMessage.displayName.replace('От ', 'от ')}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-purple-gray hover:text-rose transition-colors p-2 rounded-full hover:bg-wedding-pink/20"
              style={{ color: 'var(--purple-gray)' }}
            >
              <X className="w-6 h-6" />
            </Button>
          </DialogHeader>
          
          <div className="video-container mb-6">
            <iframe 
              src={videoMessage.videoUrl}
              title={`Поздравление ${videoMessage.displayName.replace('От ', 'от ')}`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-xl"
            />
          </div>
          
          <div className="text-center">
            <p className="font-serif text-lg mb-4" style={{ color: 'var(--purple-gray)' }}>
              "{videoMessage.message}"
            </p>
            <p className="font-sans text-sm" style={{ color: 'var(--warm-brown)' }}>
              {videoMessage.signature}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio());

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Note: In a real implementation, you would add an actual wedding music file
      // audio.src = "/path/to/wedding-music.mp3";
      // audio.play().catch(e => console.log('Audio play failed:', e));
      setIsPlaying(true);
    }
  };

  return (
    <Button
      onClick={toggleMusic}
      className="fixed top-4 right-4 bg-white/80 backdrop-blur-sm text-2xl p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 h-12 w-12"
      variant="ghost"
    >
      {isPlaying ? '🔇' : '🎵'}
    </Button>
  );
};

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = (videoMessage: VideoMessage) => {
    setSelectedVideo(videoMessage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="gradient-bg min-h-screen relative overflow-x-hidden">
      <FloatingHearts />
      <MusicToggle />

      {/* Main Content */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4 pb-32">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient animate-zoom-in mb-6">
            Лиза & Марк
          </h1>
          
          {/* Wedding Wish */}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl animate-fade-in mb-8" style={{ color: 'var(--purple-gray)' }}>
            С Днём Свадьбы!
          </h2>
          
          {/* Wedding Date */}
          <p className="font-serif text-lg md:text-xl animate-fade-in-delayed opacity-0 mb-12" style={{ color: 'var(--warm-brown)' }}>
            1 августа 2025
          </p>
          
          {/* Decorative Elements */}
          <div className="animate-fade-in-delayed opacity-0 flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose" style={{ background: `linear-gradient(to right, transparent, var(--rose))` }}></div>
            <span className="text-2xl" style={{ color: 'var(--rose)' }}>♥</span>
            <div className="w-16 h-px bg-gradient-to-r from-rose to-transparent" style={{ background: `linear-gradient(to right, var(--rose), transparent)` }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Button Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-rose/20 p-4 animate-slide-up" style={{ borderColor: 'var(--rose)' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-center text-lg mb-4" style={{ color: 'var(--purple-gray)' }}>
            Поздравления от друзей
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {videoMessages.map((videoMessage, index) => {
              const gradients = [
                'bg-gradient-to-r from-rose via-wedding-pink to-rose',
                'bg-gradient-to-r from-wedding-pink via-champagne to-wedding-pink',
                'bg-gradient-to-r from-champagne via-white to-champagne',
                'bg-gradient-to-r from-white via-rose to-white'
              ];
              
              return (
                <Button
                  key={videoMessage.name}
                  onClick={() => openModal(videoMessage)}
                  className={`${gradients[index]} font-sans font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-rose/30 border-0`}
                  style={{ color: 'var(--purple-gray)' }}
                >
                  {videoMessage.displayName}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal 
          videoMessage={selectedVideo}
          isOpen={isModalOpen}
          onOpenChange={closeModal}
        />
      )}
    </div>
  );
}
