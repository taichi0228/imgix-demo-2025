// Product name translations
export const productTranslations: { [key: string]: { en: string; ja: string } } = {
  'Hero Image': { en: 'Hero Image', ja: 'ヒーロー画像' },
  'Omaha Camera': { en: 'Omaha Camera', ja: 'オマハカメラ' },
  'Fujifilm Camera': { en: 'Fujifilm Camera', ja: '富士フイルムカメラ' },
  'Canon Camera': { en: 'Canon Camera', ja: 'キヤノンカメラ' },
  'Rolleiflex Camera': { en: 'Rolleiflex Camera', ja: 'ローライフレックスカメラ' },
  'Feather Hat': { en: 'Feather Hat', ja: 'フェザーハット' },
  'Blue Hat': { en: 'Blue Hat', ja: 'ブルーハット' },
  'Wicker Hat': { en: 'Wicker Hat', ja: '籐帽子' },
  'Bucket Hat': { en: 'Bucket Hat', ja: 'バケットハット' },
  'Basic Sneaker': { en: 'Basic Sneaker', ja: 'ベーシックスニーカー' },
  'Pink Sneaker': { en: 'Pink Sneaker', ja: 'ピンクスニーカー' },
  'Basic Running Shoe': { en: 'Basic Running Shoe', ja: 'ランニングシューズ' },
  'Red Running Shoe': { en: 'Red Running Shoe', ja: 'レッドランニングシューズ' },
  'Brown Purse': { en: 'Brown Purse', ja: 'ブラウンパース' },
  'Grey Purse': { en: 'Grey Purse', ja: 'グレーパース' },
  'Black Purse': { en: 'Black Purse', ja: 'ブラックパース' },
  'Purple Purse': { en: 'Purple Purse', ja: 'パープルパース' },
};

export const products = [
  // ヒーロー画像用オブジェクト（新規追加）
  {
    id: 'hero-1', // ユニークなID
    name: 'Hero Image',
    href: '#',
    imageSrc: 'https://jpblogtzk.imgix.net/pexels-walid-ahmad-1372014.jpg',
    imageAlt: 'Hero Image with Generative Fill',
    price: '', // ヒーロー画像は価格不要なら空文字
    isHero: true,
    params: {
      // generative fill 用のパラメーター（ProductGrid 内でトグルにより使用されます）
      // ここでは幅や高さも Imgix 側で生成する画像サイズの目安として設定できます
      width: '5000',
      height: '1500',
      //fit: 'fill',
      //fill: 'gen',
      fillGenPrompt: 'Extend the background elegantly'
    }
  },
  // Cameras
  {
    id: 5,
    name: 'Omaha Camera',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/omeha-camera.jpg',
    price: '$200',
    color: 'Black',
    params: {
      crop: 'focalpoint',
      'fp-x': 0.5,
      'fp-y': 0.65,
      'fp-z': 1.5
    }
  },
  {
    id: 6,
    name: 'Fujifilm Camera',
    href: '#',
    imageSrc: 'https://jpblogtzk.imgix.net/pexels-pixabay-247304.jpg',
    price: '$priceless',
    color: 'Black',
    params: {
      crop: 'center',
      //'object-removal-rect':'1029%2C493%2C1097%2C1127',
      //'object-removal-rect':'1061%2C388%2C1270%2C1236',
      //'object-removal-prompt':'cherry%20blossom%20trees',
    }
  },
  {
    id: 7,
    name: 'Canon Camera',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/canon-camera.jpg',
    price: '$459',
    color: 'Black',
    params: {
      crop: 'center'
    }
  },
  {
    id: 8,
    name: 'Rolleiflex Camera',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/rolleiflex-camera.jpg',
    price: '$212',
    color: 'Black',
    params: {
      crop: 'center'
    }
  },
  // Hats
  {
    id: 10,
    name: 'Feather Hat',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/feather-hat.jpg',
    price: '$90',
    color: 'Black',
    params: {}
  },
  {
    id: 13,
    name: 'Blue Hat',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/blue-hat.jpg',
    price: '$79',
    color: 'Black',
    params: {}
  },
  {
    id: 14,
    name: 'Wicker Hat',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/fellipe-ditadi-dEU1q5s7GPY-unsplash.jpg',
    price: '$150',
    color: 'Black',
    params: {}
  },
  {
    id: 'hat-1',
    name: 'Bucket Hat',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/bucket-hat.jpg',
    price: '$335',
    color: 'Black',
    params: {}
  },
  // Sneakers
  {
    id: 'sneaker-1',
    name: 'Basic Sneaker',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/xavier-teo-SxAXphIPWeg-unsplash.jpg',
    imageAlt: "Side of men's black sneaker on blue background",
    price: '$135',
    color: 'Black',
    params: {}
  },
  {
    id: 'sneaker-2',
    name: 'Pink Sneaker',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/red-and-white-sneaker.jpg',
    price: '$135',
    color: 'Red',
    params: {}
  },
  {
    id: 'sneaker-3',
    name: 'Basic Running Shoe',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/sneaker-large.jpg',
    price: '$149',
    color: 'Orange',
    params: {}
  },
  {
    id: 'sneaker-4',
    name: 'Red Running Shoe',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/tennis-sneaker.jpg',
    price: '$120',
    color: 'Red',
    params: {}
  },
  {
    id: 'purse-1',
    name: 'Brown Purse',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/brown-chain-purse.jpg',
    price: '$355',
    color: 'Brown',
    params: { upscale: true }
  },
  {
    id: 'purse-2',
    name: 'Grey Purse',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/grey-pruse.jpg',
    price: '$635',
    color: 'Grey',
    params: { upscale: true }
  },
  {
    id: 'purse-3',
    name: 'Black Purse',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/black-purse.jpg',
    price: '$635',
    color: 'Black',
    params: { upscale: true }
  },
  {
    id: 'purse-4',
    name: 'Purple Purse',
    href: '#',
    imageSrc: 'https://sdk-test.imgix.net/purple-purse.jpg',
    price: '$335',
    color: 'Purple',
    params: { upscale: true, crop: 'center' }
  }
];
