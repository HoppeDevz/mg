import dayjs from 'dayjs';

import { useState } from 'react';
import { useTimer } from '../hooks/useTimer';
import { useHeartbeat } from '../hooks/useHeartbeat';

import kissingHer from "../../public/photos/kissing-her.jpeg";
import mplusg from "../../public/photos/mplusg.jpeg";
import skatepark from "../../public/photos/skatepark.jpeg"

export const FirstSection = () => {

  // Array de fotos
  const photos = [
    kissingHer,
    mplusg,
    skatepark
  ];

  // Estado para controlar a imagem atual do carrossel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para ir para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Função para ir para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  // Data em que se conheceram
  const { seconds } = useTimer('2024-11-16T20:34:00');
  const { heartbeat } = useHeartbeat('2024-11-16T20:34:00');
  const dateOfMeeting = dayjs('2024-11-16T20:34:00'); // Coloque aqui a data em que vocês se conheceram

  // Calculando o tempo que passou desde o momento em que se conheceram
  const timeSinceMeeting = dayjs().diff(dateOfMeeting, 'day');
  const songsPlayed = Math.ceil(timeSinceMeeting / 2);

  return (
    <div 
        className="w-[100vw] h-[100vh] flex flex-col justify-start items-start"
    >

        <div
            className='w-full h-[5vh] flex justify-center items-center bg-[#D3212C]'
        >
            <p
                className='text-[14px] text-[#FFFFFF] font-[700]'
            >
                M + G
            </p>
        </div>
        
        <div
            className='w-full flex-1 flex flex-col justify-start items-center pt-[5vh] gap-y-[2vh] overflow-hidden'
        >

        

            <div 
                className="w-full flex justify-center items-center"
            >

                <div
                    className="relative"
                >

                    <div 
                        className='w-[200px] h-[200px] bg-[#B0B0B0] rounded-[8px] overflow-hidden'
                        style={{
                            backgroundImage: `url('${photos[currentImageIndex]}')`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />

                    <div
                        className="absolute top-[0px] left-[-16px] w-[32px] h-full flex justify-center items-center"
                    >
                        <div
                            className='w-[32px] h-[32px] flex justify-center items-center bg-[#D3212C] rounded-full cursor-pointer'
                            onClick={prevImage}
                        >
                            <p
                                className='text-[14px] text-[#FFFFFF] font-[700]'
                            >
                                {"<"}
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute top-[0px] right-[-16px] w-[32px] h-full flex justify-center items-center"
                    >
                        <div
                            className='w-[32px] h-[32px] flex justify-center items-center bg-[#D3212C] rounded-full cursor-pointer'
                            onClick={nextImage}
                        >
                            <p
                                className='text-[14px] text-[#FFFFFF] font-[700]'
                            >
                                {">"}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex flex-col justify-center items-center gap-y-[3vh]">
                
                <div
                    className="w-full flex flex-col justify-center items-center"
                >
                    <p className="text-[20px] text-[#FFFFFF] font-[700]">
                        NOSSO TEMPO...
                    </p>

                    <p className="text-[14px] text-[#FFFFFF] font-[400]">
                        A gente se conheceu <span className="bg-[#D3212C] px-[5px] rounded-[4px]">{dateOfMeeting.format('DD/MM/YYYY HH:mm')}</span>
                    </p>
                </div>

                <div
                    className='w-full flex flex-col justify-center items-center gap-y-[5px]'
                >

                    <p className="text-[14px] text-[#FFFFFF] font-[400]">
                        Já se foram <span className='font-[700]'>{seconds.toLocaleString()}</span> segundos
                    </p>

                    <p className="text-[14px] text-[#FFFFFF] font-[400]">
                        O meu coracão já bateu <span className='font-[700]'>{heartbeat.toLocaleString()}</span> vezes
                    </p>

                    <p className="text-[14px] text-[#FFFFFF] font-[400]">
                        Já ouvi <span className='font-[700]'>{songsPlayed}</span> músicas pensando em você 🎶
                    </p>

                </div>

                <div
                    className="w-full flex flex-col justify-center items-center"
                >

                    <p
                        className="text-[14px] text-[#FFFFFF] font-[400]"
                    >
                        O quanto eu gosto de você: 
                    </p>

                    <p 
                        className="text-[18px] text-[#FFFFFF] font-[700]"
                    >
                        Muito, e a cada dia mais! 💖
                    </p>

                </div>

                <p
                    className='text-[10px] text-[red] font-[400]'
                >
                    (Sempre que você entrar aqui, vou ser avisado.)
                </p>

            </div>
        </div>

    </div>
  );
};
