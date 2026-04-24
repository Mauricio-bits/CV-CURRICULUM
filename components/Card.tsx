export default function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}