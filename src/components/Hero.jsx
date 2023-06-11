import {logo} from '../assets';

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Matsumoto138", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        
        <span className='orange_gradient '>OpenAI GPT-4</span> <br  />
        Kullanarak Uzun Makaleleri Özetleyin
      </h1>
      <h2 className='desc'>
        Okuması uzun ve yorucu makaleleri GPT4 yardımıyla hızlıca özetleyin
      </h2>
    </header>
  )
}

export default Hero