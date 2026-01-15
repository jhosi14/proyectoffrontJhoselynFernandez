// src/components/Card.tsx
interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}
