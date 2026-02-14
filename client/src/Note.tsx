import { useState } from "react";

interface NoteProps {
    title: string;
    content: string;
}

export default function Note({ title, content }: NoteProps) {
    const [isEditing, setIsEditing] = useState(false);
    
    async function saveChanges() {
        console.log("You saved your changes!");
        setIsEditing(false);
    }

    return (
        <div className="bg-yellow-100 p-4 rounded shadow w-64 h-40">
            {isEditing ? (
                <div className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                        <input className="border border-gray-400 rounded p-1 w-full mr-2 bg-yellow-100" defaultValue={title}></input>
                        <button onClick={() => saveChanges()}>Done</button>
                    </div>
                    <textarea className="border border-gray-400 rounded p-1 w-full h-20 bg-yellow-100" defaultValue={content}></textarea>
                </div>
            ) : (
                <div className="cursor-pointer" onClick={() => setIsEditing(true)}>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-gray-700">{content}</p>
                </div>
            )}
        </div>
    )
}