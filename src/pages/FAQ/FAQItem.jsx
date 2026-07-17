import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ faq, open, onToggle }) {
    return (
        <motion.div
            layout
            transition={{ duration: 0.3 }}
            className="group"
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition hover:bg-[#fffaf6]"
            >
                <div className="flex items-start gap-5">

                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7c5569]/10 text-[#7c5569] transition group-hover:bg-[#7c5569] group-hover:text-white">
                        {open ? (
                            <Minus size={18} />
                        ) : (
                            <Plus size={18} />
                        )}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold leading-7 text-[#22181d] transition group-hover:text-[#7c5569]">
                            {faq.question}
                        </h3>

                        {faq.category && (
                            <span className="mt-3 inline-flex rounded-full bg-[#b58fa2]/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#7c5569]">
                                {faq.category}
                            </span>
                        )}
                    </div>

                </div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-[#f3e8ee] bg-gradient-to-r from-[#fffaf6] to-white px-8 pb-8 pt-6">

                            <div className="ml-[60px]">

                                <p className="leading-8 text-[#6f6269]">
                                    {faq.answer}
                                </p>

                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}