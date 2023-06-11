'use client'
import { useState, useRef, useEffect } from "react";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import axios from "axios";

import { FullMessageType } from "@/app/types"

interface bodyProps {
    initialMessages: FullMessageType[]
}

export default function Body({ initialMessages }: bodyProps) {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);

    const { conversationId } = useConversation();

    useEffect(() => {
        axios.post(`/api/conversations/${conversationId}/seen`);
    }, [conversationId]);

    return <>
        <div className=" flex-1 overflow-y-auto">
            {messages.map((message, i) => (
                <MessageBox
                    isLast={i === messages.length - 1}
                    key={message.id}
                    data={message}
                />
            ))}
            <div className="pt-24" ref={bottomRef} />
        </div>
    </>

}