import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Trash2, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChatbot } from '@/hooks/useChatbot';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isLoading, sendMessage, clearMessages, stopGeneration } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input.trim());
    setInput('');
  };

  return (
    <>
      {/* Floating Button with Animations */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.button
              key="chat-button"
              onClick={() => setIsOpen(true)}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-2 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing outer ring */}
              <motion.div
                className="absolute -inset-4 border border-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />

              {/* Main button */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <MessageCircle className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                
                {/* Sparkle */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
              >
                💬 Discutez avec PAMM
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-foreground rotate-45" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 w-[380px] h-[550px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)]"
            initial={{ scale: 0, opacity: 0, originX: 0, originY: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="relative w-full h-full bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-bold text-primary-foreground">PAMM</h3>
                    <p className="text-xs text-primary-foreground/80">Assistant Print's Arts</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearMessages}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h4 className="font-heading font-bold text-lg mb-2">Bienvenue ! 👋</h4>
                    <p className="text-muted-foreground text-sm">
                      Je suis PAMM, votre assistant virtuel. Comment puis-je vous aider ?
                    </p>
                    <div className="mt-4 space-y-2">
                      {[
                        "Quels sont vos services ?",
                        "Comment travaillez-vous ?",
                        "Je veux un devis"
                      ].map((suggestion, i) => (
                        <motion.button
                          key={i}
                          onClick={() => sendMessage(suggestion)}
                          className="block w-full text-left text-sm p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-muted text-foreground rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      {msg.images?.map((img, idx) => (
                        <motion.img
                          key={idx}
                          src={img.url}
                          alt="Generated"
                          className="mt-2 rounded-lg max-w-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-muted p-3 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-primary/60 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.1
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-1 rounded-full"
                    disabled={isLoading}
                  />
                  {isLoading ? (
                    <Button
                      type="button"
                      size="icon"
                      onClick={stopGeneration}
                      className="rounded-full bg-destructive hover:bg-destructive/90"
                    >
                      <Square className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="icon"
                      disabled={!input.trim()}
                      className="rounded-full"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
