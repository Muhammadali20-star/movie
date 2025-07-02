import photo from '@/assets/vite.svg'
import photo2 from '@/assets/goglePlay.png'
import photo3 from '@/assets/AppStore.png'
import { AudioOutlined, FileTextOutlined, PhoneOutlined, PlayCircleOutlined, QuestionCircleOutlined, SmileOutlined, StarOutlined, TrophyOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <footer className="container mx-auto dark:bg-[#111111] bg-white dark:text-white py-20 px-4">
  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div className="space-y-4">
      <img src={photo} alt="" />
      <img src={photo2} alt="" className='w-40' />
      <img src={photo3} alt="" className='w-40' />
    </div>
    <div>
      <h3 className="font-semibold mb-3">О нас</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li className="flex items-center gap-2"><FileTextOutlined /> Публичная оферта</li>
        <li className="flex items-center gap-2 text-red-500"><StarOutlined /> Реклама</li>
        <li className="flex items-center gap-2"><QuestionCircleOutlined /> F.A.Q</li>
        <li className="flex items-center gap-2"><PhoneOutlined /> Контакты</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-3">Категории</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li className="flex items-center gap-2 text-red-500"><PlayCircleOutlined /> Кино</li>
        <li className="flex items-center gap-2 text-red-500"><SmileOutlined /> Театр</li>
        <li className="flex items-center gap-2 text-red-500"><AudioOutlined /> Концерты</li>
        <li className="flex items-center gap-2 text-red-500"><TrophyOutlined /> Спорт</li>
      </ul>
    </div>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Связаться с нами</h3>
        <p className="text-red-500 font-semibold text-lg">+998 (95) 897-33-38</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Социальные сети</h3>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer