import { useState } from "react";

interface NoteProps {
    title: string;
    content: string;
    onSave: (newTitle: string, newContent: string) => void;
}

export default function Note({ title, content, onSave }: NoteProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);
    
    async function saveChanges() {
        console.log("You saved your changes!");
        onSave(newTitle, newContent);
        setIsEditing(false);
    }

    return (
        <div className="bg-yellow-100 p-4 rounded shadow w-64 h-40">
            {isEditing ? (
                <div className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                        <input 
                            className="border border-gray-400 rounded p-1 w-full mr-2 bg-yellow-100" 
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <button onClick={() => saveChanges()}>Done</button>
                    </div>
                    <textarea 
                        className="border border-gray-400 rounded p-1 w-full h-20 bg-yellow-100" 
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    />
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