"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send } from "lucide-react";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hola soy Martbot, en qué puedo ayudarte?" },
  ]);
  const [value, setValue] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async () => {
    const newMessage: Message = { role: "user", content: value };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    const api = "https://api-herbot.vercel.app/chat";
    // const api = "http://localhost:3001/chat";

    try {
      console.log(updatedMessages, "mensajes");
      const response = await axios.post(api, {
        messages: updatedMessages,
        instruction:
          "Te llamas Martbot. Actúa como un vendedor experto y amigable, con el objetivo de incentivar a los usuarios a adquirir los servicios de MartIA, que ofrece páginas web personalizadas y asistentes inteligentes de ventas para empresas y emprendimientos. Haz recomendaciones activas que muestren cómo nuestros servicios pueden mejorar el rendimiento y las ventas de sus negocios, y enfócate en cerrar reuniones con Javier Martínez, el CEO y fundador de MartIA, quien es un DevOps con experiencia en desarrollo de aplicaciones y páginas web. Si el usuario muestra interés, invítalo a agendar una reunión personalizada con Javier. En caso de que el usuario pregunte sobre temas no relacionados con los servicios de MartIA, responde de forma breve y educada para redirigir el enfoque a nuestros productos, resaltando que nuestras páginas y asistentes inteligentes son personalizables y están diseñados para cerrar ventas y ayudar a alcanzar los objetivos específicos de cada cliente.",
      });
      const assistantMessage = response.data.choices[0].message.content;
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setValue("");
  };

  return (
    <div className="fixed bottom-6 right-8 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-[520px] flex flex-col mb-4">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Chat con MartBot</h2>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`mb-2 p-2 rounded-lg ${
                  message.role === "assistant"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-500 text-white ml-auto"
                }`}
                style={{
                  maxWidth: "80%",
                  alignSelf:
                    message.role === "assistant" ? "flex-start" : "flex-end",
                }}
              >
                {message.content}
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t flex">
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-grow mr-2"
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />
            <Button onClick={handleSubmit}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      <Button
        className={`rounded-full w-12 h-12 ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
