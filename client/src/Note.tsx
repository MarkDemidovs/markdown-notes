interface NoteProps {
    id: number;
    title: string;
    content: string;
}

export default function Note({ title, content }: NoteProps) {
    return (
        <div className="bg-yellow-100 p-4 rounded shadow">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-700">{content}</p>
        </div>
    )
}