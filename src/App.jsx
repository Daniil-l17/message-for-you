import { useEffect, useRef, useState } from 'react';

function App() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    ref.current.addEventListener('mouseover', () => {
      const noBtnRect = ref.current.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      ref.current.style.position = 'fixed';
      ref.current.style.left = randomX + 'px';
      ref.current.style.top = randomY + 'px';
    });
  }, []);

  return (
    <div className="relative">
      <h2 className="text-2xl text-center mb-4  text-[#e94d58]">
        {visible ? 'Ааааа, ты мне тоже нравишься' : ' Я тебе нравлюсь?'}
      </h2>
      {visible ? (
        <img className="m-auto" src={'/gif.webp'} alt="gif" />
      ) : (
        <img className="m-auto" src={'/gifyou.webp'} alt="gif" />
      )}
      {visible ? null : (
        <>
          <div className="flex relative h-[100px] mt-14 justify-between items-center">
            <button
              onClick={() => setVisible(true)}
              className="py-[10px] hover:scale-110 transition-all duration-300 cursor-pointer top-0 left-0 absolute bg-[#e94d58] text-white border-none w-[140px] px-4 rounded-[19px]">
              ДА
            </button>
            <button
              ref={ref}
              className="py-[8px] bg-white cursor-pointer absolute right-0 top-0 border-[2px] border-[#e94d58] text-[#e94d58] w-[140px] px-4 rounded-[19px]">
              НЕТ
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
