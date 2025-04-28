import { Fragment, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import Imgix from 'react-imgix';
import { products } from '../data/products';
import ProductGrid from './ProductGrid';

const navigation = {
  categories: [],
  pages: [
    { name: 'Home', href: '#' },
    { name: 'Docs', href: 'https://docs.imgix.com/' },
    { name: 'GitHub', href: 'https://github.com/imgix' }
  ]
};

const footerNavigation = {
  links: [
    { name: 'Docs', href: 'https://docs.imgix.com/' },
    { name: 'GitHub', href: 'https://github.com/imgix' }
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Press', href: '#' }
  ],
  contact: [{ name: 'Contact', href: '#' }]
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  // ヒーロー画像用商品を抽出
  const heroProduct = products.find((product) => product.isHero);
  // 通常の商品だけ
  const regularProducts = products.filter((product) => !product.isHero);

  return (
    <div className="bg-gray-50">
      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name === 'Home' ? t('home') : 
                         page.name === 'Docs' ? t('docs') : 
                         page.name === 'GitHub' ? t('github') : page.name}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <div className="p-2 font-medium text-gray-900">
                      <LanguageToggle />
                    </div>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      {language === 'en' ? 'Sign in' : 'サインイン'}
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Header */}
<header className="relative">
  <nav aria-label="トップメニュー">
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-800">
          <div className="flex h-16 items-center justify-between">
            {/* ロゴ（デスクトップ） */}
            <div className="hidden lg:flex lg:items-center">
              <a href="#">
                <span className="sr-only">会社ロゴ</span>
                <img
                  className="h-8 w-auto"
                  src="https://jpblogtzk.imgix.net/imgix_logo.png"
                  alt="会社ロゴ"
                />
              </a>
            </div>
            {/* ナビゲーション（デスクトップ） */}
            <div className="hidden lg:flex">
              <Popover.Group className="ml-8">
                <div className="flex h-full items-center space-x-8">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-300 hover:text-white"
                  >
                    {t('home')}
                  </a>
                  <a
                    href="https://docs.imgix.com/"
                    className="text-sm font-medium text-gray-300 hover:text-white"
                  >
                    {t('docs')}
                  </a>
                  <a
                    href="https://github.com/imgix"
                    className="text-sm font-medium text-gray-300 hover:text-white"
                  >
                    {t('github')}
                  </a>
                  <LanguageToggle />
                </div>
              </Popover.Group>
            </div>
            {/* モバイルメニューと検索 */}
            <div className="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md bg-gray-900 p-2 text-gray-300"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">メニューを開く</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <a
                href="#"
                className="ml-2 p-2 text-gray-300 hover:text-white"
              >
                <span className="sr-only">検索</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <div className="ml-2">
                <LanguageToggle />
              </div>
            </div>
            {/* モバイルロゴ */}
            <a href="#" className="lg:hidden">
              <span className="sr-only">会社ロゴ</span>
              <img
                className="h-8 w-auto"
                src="https://assets.imgix.net/case-study/joybird/imgix_badge_1_medium.png"
                alt="会社ロゴ"
              />
            </a>
            {/* 右側のアイコン（アカウント・カート） */}
            <div className="flex flex-1 items-center justify-end">
              <div className="flex items-center space-x-8 lg:ml-8">
                <div className="hidden lg:flex">
                  <a
                    href="#"
                    className="p-2 text-gray-300 hover:text-white"
                  >
                    <span className="sr-only">検索</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="p-2 text-gray-300 hover:text-white"
                  >
                    <span className="sr-only">アカウント</span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="mx-4 h-6 w-px bg-gray-800 lg:mx-6" aria-hidden="true" />
              <div className="flow-root">
                <a
                  href="#"
                  className="group flex items-center p-2"
                >
                  <ShoppingCartIcon
                    className="h-6 w-6 shrink-0 text-gray-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-white">
                    0
                  </span>
                  <span className="sr-only">カートの中身を確認</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>


      {/* Main Content */}
      <main>

          {/* Hero Section */}
          {heroProduct && (
            <section className="relative w-full" style={{ height: '600px' }}>
              {/* コンテナは画面全体の幅に広げる */}
              <Imgix
                src={heroProduct.imageSrc}
                width={1920}         // 例として生成する画像の横幅（必要に応じて調整）
                height={600}         // 生成する画像の高さ
                alt={heroProduct.imageAlt || heroProduct.name}
                className="w-full h-full object-cover" 
                imgixParams={{
                  auto: 'format,compress',
                  fit: 'fill',
                  fill: 'gen',
                  ...heroProduct.params,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-4xl text-white font-bold">
                  {t('hero_title')}
                </h1>
              </div>
            </section>
          )}


                {/* Content Section */}
                <section className="bg-white py-16">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                      {t('imgix_demo')}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-700">
                      {t('demo_desc1')}
                      <br className="hidden sm:block" />
                      {t('demo_desc2')}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                      {t('demo_desc3')}
                    </p>
                  </div>
                </section>

        {/* Product Grid */}
        <section>
          <ProductGrid products={regularProducts} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              {/* Image Section */}
                <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1 ml-[-50px]">
                  <img
                    src="https://jpblogtzk.imgix.net/imgix-logo.png"
                    alt=""
                    className="h-8 w-auto"
                  />
                </div>

              {/* Sitemap Sections */}
              <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{t('links')}</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.links.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-gray-500 hover:text-gray-600">
                            {item.name === 'Docs' ? t('docs') : 
                             item.name === 'GitHub' ? t('github') : item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{t('company')}</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-gray-500 hover:text-gray-600">
                            {item.name === 'Who we are' ? t('who_we_are') : 
                             item.name === 'Press' ? t('press') : item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{t('get_in_touch')}</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.contact.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                          {t('contact')}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
