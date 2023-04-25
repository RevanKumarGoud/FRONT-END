import React, {useState,useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

const Speaktotext = () => {
  const [Msg, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
    const [message, setMassage] = useState('');
    const commands = [
        {
            command:'reset',
            callback:() => resetTranscript()
        },
        {
            command:'shut up',
            callback:() => setMassage('I was\'t? talking.')
        },
        {
            command:'Hellow',
            callback:() =>setMassage('Hi There')
        }
    ]
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
      } = useSpeechRecognition({ commands });
      useEffect(() => {
        if (finalTranscript !== '') {
          console.log('Got final result:', finalTranscript);
        }
      }, [interimTranscript, finalTranscript]);
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }
     
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
      }
      const listenContinuously = () => {
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-Us',
        });
      };
  return (
    <div className='card col-sm-6 container'>
      <h4 className='card-header-pills text-light bg-primary'>Speech to Text</h4>
      <div className='card-body'>
       <h5 className='card-title'>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </h5>
       <div>
       <div className="form-group">
       <textarea className="form-control bg-transparent" rows="4" onChange={(e) => setValue(e.target.value)}></textarea>
       <textarea className="form-control bg-transparent" rows="4" value={transcript}></textarea>
     </div>
         <button type="submit" className='btn btn-primary mt-3 m-3' onClick={resetTranscript}><i className="bi bi-arrow-clockwise"></i></button>
         <button type="submit" className='btn btn-primary mt-3 m-3' onClick={listenContinuously}><i className="bi bi-mic"></i></button>
         <button type="submit" className='btn btn-primary mt-3 m-3' onClick={SpeechRecognition.stopListening}><i className="bi bi-mic-mute"></i></button>
         <button type="submit" className='btn btn-primary mt-3 m-3' onClick={() => speak({ text: Msg })}>Speak</button>
       </div>
     </div>
     <div>
       <span>{message}</span>
     </div>
    </div>
  )
}

export default Speaktotext
