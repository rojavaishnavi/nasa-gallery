import Link from "next/link";

export default function ImageCard({ image }) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover rounded-md" loading="lazy" />
            <h2 className="text-lg font-bold mt-2">{image.title}</h2>
            <p className="text-sm">{image.date}</p>
            <Link href={`/details/${image.date}`}>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
            </Link>
        </div>
    );
}
