import { useState, useRef, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Loader2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

const suggestedQuestions = [
  "I have a persistent headache and blurred vision",
  "My child has a high fever and rash",
  "I need a specialist for knee pain",
  "What should I do for chest tightness?",
];

export default function CareNavigator() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    setInput('');
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    const conversationContext = newMessages.slice(-8).map(m =>
      `${m.role === 'user' ? 'Patient' : 'NeronaHealth'}: ${m.content}`
    ).join('\n');

    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `You are NeronaHealth Care Navigator, an AI healthcare assistant for patients in Africa. You help patients understand their symptoms, recommend appropriate care levels, and suggest whether they need urgent care, a specialist, or can manage at home.

Be empathetic, clear, and concise. Always remind patients that you are an AI assistant and they should consult a medical professional for proper diagnosis.

If the conversation suggests urgency, recommend they use the "Find Care Now" or "Request Ambulance" features.

Conversation so far:
${conversationContext}

Respond naturally as NeronaHealth to the patient's latest message. Use markdown for formatting where helpful. Keep responses under 200 words.`,
    });

    setMessages([...newMessages, { role: 'assistant', content: response, showDownload: true }]);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">AI Care Navigator</h1>
            <p className="text-xs text-muted-foreground">Describe your symptoms for personalized guidance</p>
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-1">Hello! I'm your Care Navigator</h2>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              Tell me about your symptoms and I'll help guide you to the right care. Try one of these:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-left p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all text-sm text-muted-foreground hover:text-foreground"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
              msg.role === 'user'
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border'
            }`}>
              {msg.role === 'user' ? (
                <p className="text-sm">{msg.content}</p>
              ) : (
                <div className="text-sm prose prose-sm prose-slate max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              )}
            </div>
            {msg.showDownload && (
              <div className="mt-3 max-w-[85%] bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center">
                <p className="text-sm font-semibold text-foreground mb-1">Want to continue this conversation?</p>
                <p className="text-xs text-muted-foreground mb-4">Download the Neurona app for full AI Care Navigator access.</p>
                <Link to="/download">
                  <Button size="sm" className="gap-2 rounded-xl">
                    <Download className="w-3.5 h-3.5" /> Download App
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-card border border-border rounded-2xl px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span className="text-sm text-muted-foreground">Thinking...</span>
            </div>
          </div>
        )}

        <div ref={scrollRef} />
      </div>

      {/* Quick Actions */}
      {messages.length > 2 && (
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
          <Link to="/FindCare">
            <Button variant="outline" size="sm" className="rounded-full text-xs gap-1 whitespace-nowrap">
              Find Care <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
          <Link to="/Ambulance">
            <Button variant="outline" size="sm" className="rounded-full text-xs gap-1 whitespace-nowrap text-accent border-accent/30">
              Emergency <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 pt-2 border-t border-border">
        <Input
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          disabled={loading}
          className="rounded-xl"
        />
        <Button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          className="rounded-xl px-4"
          size="icon"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}