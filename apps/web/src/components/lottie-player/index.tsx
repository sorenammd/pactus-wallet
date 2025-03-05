import React, { useEffect, useRef } from 'react'
import { AnimationItem } from 'lottie-web'
import Lottie from 'react-lottie-player'
const LottiePlayer = ({lottieFile,endFrame}:{lottieFile:object ,endFrame:number}) => {
    const lottieRef = useRef<AnimationItem | null>(null);

    const handleEnterFrame = () => {
        if (lottieRef.current && lottieRef.current.currentFrame >= endFrame) {
            lottieRef.current.goToAndStop(endFrame, true);
        }
    };

    useEffect(() => {
        const currentLottie = lottieRef.current;

        if (currentLottie) {
            currentLottie.addEventListener('enterFrame', handleEnterFrame);
        }

        return () => {
            if (currentLottie) {
                currentLottie.removeEventListener('enterFrame', handleEnterFrame);
            }
        };
    }, []);

    return (
        <Lottie
            ref={lottieRef}
            animationData={lottieFile}
            loop={false}
            play
        />
    )
}

export default LottiePlayer