import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, MicOff, Loader2, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import ReactMarkdown from "react-markdown";

// API Configuration
// Uses Vite proxy in development (configured in vite.config.ts)
// Falls back to direct URL if VITE_API_URL is set
const getApiUrl = (endpoint: string) => {
  const baseUrl = import.meta.env.VITE_API_URL || "";
  // If baseUrl is set, it's a full URL, otherwise use proxy
  if (baseUrl) {
    return `${baseUrl}${endpoint}`;
  }
  return endpoint; // Proxy will handle /api prefix
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessage: Message = {
  id: "1",
  role: "assistant",
  content: `# Welcome to Safarnama.ai! 🇵🇰

I'm your AI travel assistant, here to help you plan an unforgettable journey through Pakistan.

**I can help you with:**
- 📍 Destination recommendations
- 🗓️ Custom itinerary planning
- 🏨 Accommodation suggestions
- 🚗 Transportation options
- 💰 Budget planning
- 📋 Travel tips and safety advice

**Try asking me:**
- "Plan a 7-day trip to Northern Pakistan"
- "What's the best time to visit Hunza Valley?"
- "Suggest a budget-friendly itinerary for families"

How can I help you plan your Pakistani adventure today?`,
  timestamp: new Date(),
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      // Call FastAPI backend
      const response = await fetch(getApiUrl("/api/chat"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
          conversation_history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: data.id || (Date.now() + 1).toString(),
        role: data.role || "assistant",
        content: data.content,
        timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling API:", error);
      
      // Fallback to simulated response if API is unavailable
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getSimulatedResponse(userInput),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getSimulatedResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("hunza") || input.includes("northern")) {
      return `## Hunza Valley Adventure 🏔️

Great choice! Hunza Valley is one of Pakistan's most stunning destinations. Here's what I recommend:

### Best Time to Visit
**April to October** offers the best weather, with autumn (September-October) being particularly magical with golden apricot orchards.

### Must-See Places
1. **Baltit Fort** - 700-year-old heritage site
2. **Eagle's Nest** - Panoramic viewpoint
3. **Attabad Lake** - Stunning turquoise waters
4. **Passu Cones** - Dramatic mountain formations

### Suggested Itinerary (5 Days)
- Day 1: Arrive in Gilgit, drive to Karimabad
- Day 2: Explore Baltit & Altit Forts
- Day 3: Attabad Lake boating excursion
- Day 4: Passu and Khunjerab Pass
- Day 5: Return journey

Would you like me to create a detailed day-by-day itinerary or help with accommodation recommendations?`;
    }
    
    if (input.includes("budget") || input.includes("cost")) {
      return `## Budget Planning for Pakistan 💰

Here's a general budget breakdown for traveling in Pakistan:

### Daily Budget Estimates (per person)

| Category | Budget | Mid-Range | Luxury |
|----------|--------|-----------|--------|
| Accommodation | $10-20 | $30-60 | $80+ |
| Food | $5-10 | $15-25 | $40+ |
| Transport | $10-20 | $30-50 | $80+ |

### Money-Saving Tips
- Travel in groups to share jeep costs
- Stay in local guesthouses for authentic experiences
- Eat at local dhabas (roadside restaurants)
- Book through local tour operators

Would you like a detailed budget breakdown for a specific destination or trip duration?`;
    }

    return `## I'd Love to Help! 🌟

Thank you for your interest in exploring Pakistan! I can help you with:

- **Specific Destinations**: Tell me where you'd like to go
- **Trip Duration**: How many days are you planning?
- **Travel Style**: Adventure, cultural, relaxation?
- **Budget Range**: Helps me tailor recommendations

Just share more details about your dream trip, and I'll create a personalized plan for you!

For example, try asking:
- "Plan a romantic trip to Swat Valley"
- "What are the best hiking trails in Pakistan?"
- "Family-friendly destinations for summer"`;
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here with Web Speech API
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Chat Container */}
      <div className="flex-1 flex flex-col pt-16 lg:pt-20">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl mx-auto px-4 py-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex gap-4 mb-6 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-table:text-sm">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-accent-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 mb-6"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-secondary rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-background/80 backdrop-blur-sm">
          <div className="container max-w-4xl mx-auto px-4 py-4">
            <form onSubmit={handleSubmit} className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me about traveling in Pakistan..."
                  rows={1}
                  className="w-full resize-none rounded-xl border border-input bg-card px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[48px] max-h-[200px]"
                  style={{ height: "auto" }}
                />
              </div>
              
              <Button
                type="button"
                variant={isListening ? "destructive" : "outline"}
                size="icon"
                onClick={toggleVoice}
                className="flex-shrink-0 h-12 w-12 rounded-xl"
              >
                {isListening ? (
                  <MicOff className="w-5 h-5" />
                ) : (
                  <Mic className="w-5 h-5" />
                )}
              </Button>
              
              <Button
                type="submit"
                variant="default"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="flex-shrink-0 h-12 w-12 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
            
            <p className="text-center text-xs text-muted-foreground mt-3">
              Safarnama.ai may occasionally provide inaccurate information. Please verify important details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
