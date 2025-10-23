import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Подбор психолога под ваши запросы</h1>
        <p className="text-lg md:text-2xl mb-6">Наш сервис поможет подобрать специалиста, который подойдет именно вам.</p>
        <a href="#how-it-works" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Начать поиск</a>
      </section>
      <section className="w-full max-w-5xl py-16 px-4" id="trust">
        <h2 className="text-3xl font-bold text-center mb-8">Нам доверяют</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">1000+</p>
            <p>успешных подборов</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">500+</p>
            <p>психологов</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">4.9/5</p>
            <p>средний рейтинг</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-16 px-4" id="how-it-works">
        <h2 className="text-3xl font-bold text-center mb-8">Как это работает</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">1. Заполните анкету</h3>
            <p>Ответьте на несколько вопросов о своих запросах и предпочтениях.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">2. Получите подборку</h3>
            <p>Мы подберем психологов, которые лучше всего подходят вам.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">3. Начните сессию</h3>
            <p>Выберите специалиста и договоритесь о времени, оплате и формате.</p>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4" id="features">
        <h2 className="text-3xl font-bold text-center mb-8">Возможности платформы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Поиск и фильтры</h3>
            <p>Ищите специалистов по специализации, опыту, стоимости и другим параметрам.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Профили и отзывы</h3>
            <p>Подробные профили психологов с описанием, сертификациями и отзывами клиентов.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Бронирование и оплата</h3>
            <p>Удобный календарь для бронирования сессий и безопасная оплата онлайн.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Безопасная коммуникация</h3>
            <p>Встроенный чат и видеосвязь для комфортного и защищенного общения.</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
        <p className="mb-6">Подберите своего специалиста и начните менять жизнь к лучшему уже сегодня.</p>
        <a href="#start" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Начать подбор</a>
      </section>
    </main>
  );
}
