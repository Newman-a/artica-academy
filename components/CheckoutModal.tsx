"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CreditCard,
  Smartphone,
  Bitcoin,
  Upload,
  Copy,
  Check,
} from "lucide-react";

export default function CheckoutModal({
  isOpen,
  onClose,
  price,
}: {
  isOpen: boolean;
  onClose: () => void;
  price: number;
}) {
  const [method, setMethod] = useState<"zelle" | "bcv" | "usdt" | null>(null);
  const [copied, setCopied] = useState(false);
  const tasaBCV = 36.5; // Esto lo traerás de una API después
  const montoBS = (price * tasaBCV).toFixed(2);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A2E]/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-xl rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-400 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-3xl font-black mb-2 text-[#1A1A2E]">
              Finalizar Inscripción
            </h2>
            <p className="text-gray-400 mb-8 font-medium">
              Selecciona tu método de pago preferido
            </p>

            {/* Selector de Métodos */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <button
                onClick={() => setMethod("zelle")}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${method === "zelle" ? "border-[#5A4FCF] bg-indigo-50" : "border-gray-100"}`}
              >
                <CreditCard
                  size={20}
                  className={
                    method === "zelle" ? "text-[#5A4FCF]" : "text-gray-400"
                  }
                />
                <span className="text-[10px] font-black uppercase">Zelle</span>
              </button>
              <button
                onClick={() => setMethod("bcv")}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${method === "bcv" ? "border-[#5A4FCF] bg-indigo-50" : "border-gray-100"}`}
              >
                <Smartphone
                  size={20}
                  className={
                    method === "bcv" ? "text-[#5A4FCF]" : "text-gray-400"
                  }
                />
                <span className="text-[10px] font-black uppercase">
                  Pago Móvil
                </span>
              </button>
              <button
                onClick={() => setMethod("usdt")}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${method === "usdt" ? "border-[#5A4FCF] bg-indigo-50" : "border-gray-100"}`}
              >
                <Bitcoin
                  size={20}
                  className={
                    method === "usdt" ? "text-[#5A4FCF]" : "text-gray-400"
                  }
                />
                <span className="text-[10px] font-black uppercase">
                  Binance
                </span>
              </button>
            </div>

            {/* Detalles según método */}
            {method === "zelle" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-6 rounded-[2rem] mb-8"
              >
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                  Enviar a:
                </p>
                <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#1A1A2E]">
                    pagos@artica.group
                  </span>
                  <button onClick={() => copyToClipboard("pagos@artica.group")}>
                    {copied ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {method === "bcv" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-6 rounded-[2rem] mb-8"
              >
                <div className="flex justify-between items-end mb-4">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    Monto a pagar (BCV):
                  </p>
                  <span className="text-2xl font-black text-[#1A1A2E]">
                    Bs. {montoBS}
                  </span>
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    <b>Banco:</b> Banesco (0134)
                  </p>
                  <p>
                    <b>Teléfono:</b> 0412-1234567
                  </p>
                  <p>
                    <b>RIF:</b> J-123456789
                  </p>
                </div>
              </motion.div>
            )}

            {/* Upload Section */}
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block ml-2">
                Sube tu comprobante
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-[2rem] p-8 text-center hover:border-[#5A4FCF] transition-colors cursor-pointer group">
                <Upload className="mx-auto mb-2 text-gray-300 group-hover:text-[#5A4FCF] transition-colors" />
                <span className="text-xs font-bold text-gray-400">
                  JPG, PNG o PDF
                </span>
              </div>
              <button className="w-full bg-[#1A1A2E] text-white py-5 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-black transition-all">
                Confirmar Pago
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
