import Imgix from 'react-imgix';

interface Product {
  id: number | string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  price: string;
  params?: { [key: string]: any };
}

interface ProductGridProps {
  products: Product[];
  // heroGenFillEnabled プロパティはここでは使用しない前提（ヒーロー画像は App.tsx で管理）
  heroGenFillEnabled?: boolean;
}

// 通常の商品画像用の既定パラメーター（変更はせずそのまま残します）
const defaultProductParams = {
  auto: 'format,compress',
  fit: 'crop',
  crop: 'faces,edges',
  //'bg-remove': true,
  //'bg' : '49c6dd',
  'bg-replace':'christmas',
  //mark: 'https://jpblogtzk.imgix.net/imgix-logo.png?w=300',
  // 他に必要なパラメーターがあればここに追加
};

function ProductGrid({ products }: ProductGridProps) {
  return (
    // セクション全体の背景をダークに設定
    <section
      aria-labelledby="products-heading"
      className="bg-gray-900 py-12"
    >
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* グリッドレイアウト */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => {
            // 各商品の個別パラメーターと既定パラメーターをマージ
            const finalParams = { ...defaultProductParams, ...product.params };
            return (
              <a
                key={`${product.id}-${index}`}
                href={product.href}
                className="group block"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform transform group-hover:scale-105">
                  <Imgix
                    src={product.imageSrc}
                    htmlAttributes={{ alt: product.imageAlt || product.name }}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    imgixParams={finalParams}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  {product.price}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
