import { Card, Button } from "flowbite-react";

export default function ProductCard({ imgSrc, title, price, rating }) {
  return (
    <Card
      className="max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-md p-4 rounded-2xl"
      imgAlt={title}
      imgSrc={imgSrc}
    >
      <div className="p-2">
        {/* Judul */}
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h5>
        </a>

        {/* Rating */}
        <div className="mb-5 mt-3 flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-3 rounded bg-gray-200 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-semibold">
            {rating}.0
          </span>
        </div>

        {/* Harga & Tombol */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${Number(price).toLocaleString()}
          </span>
          <Button color="purple" pill>
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
