import { useSpeechSynthesis } from "react-speech-kit";

const VoiceGuide = () => {
  const { speak } = useSpeechSynthesis();

  return (
    <button onClick={() => speak({ text: "Welcome to Living Room Tour" })}>
      Start Voice Tour
    </button>
  );
};

export default VoiceGuide;
