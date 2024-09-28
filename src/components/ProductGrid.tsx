/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Imgix from 'react-imgix'

function ProductGrid({ products }: { products: any[] }) {
  return (
    <section
      aria-labelledby="products-heading"
      className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
    >
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className=" aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
              <img src={product.imageSrc} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
              {/*<Imgix
                src={product.imageSrc}
                htmlAttributes={{ alt: product.imageAlt }}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                //if you add parameters, they will be applied to all images// 
                imgixParams={{
                  //auto: 'format,compress', // serve next gen image format with best compression method
                  //fit: 'crop',
                  //crop: 'faces,edges',
                  //'bg-remove': true,
                  //'bg-replace': 'christmas',
                  ...product.params
                }}
              />*/}
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
