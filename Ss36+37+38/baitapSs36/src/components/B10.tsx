import { useEffect, useState } from 'react'

export default function B10() {
    const [keyInfo, setKeyInfo] = useState<any>({ key: '', keyCode: null });

    useEffect(() => {
      const handleKeyPress = (event: any) => {
        setKeyInfo({ key: event.key, keyCode: event.keyCode });
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
  
    return (
      <div>
        {keyInfo.key && (
          <div>
            <p>Bạn đã nhấn phím: {keyInfo.key}</p>
            <p>Mã phím: {keyInfo.keyCode}</p>
          </div>
        )}
      </div>
  )
}
