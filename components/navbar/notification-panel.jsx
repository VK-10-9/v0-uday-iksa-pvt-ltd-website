"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Bell, X, CheckCircle, AlertCircle, Info, Calendar, Zap, Sparkles } from "lucide-react"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Project Milestone",
    message: "Tata Steel Mumbai facility Phase 1 installation completed.",
    time: "2 hours ago",
    href: "/projects",
    unread: true,
  },
  {
    id: 2,
    type: "info",
    title: "Tech Update",
    message: "NANOSUN 3.0 Engineering documentation now available.",
    time: "1 day ago",
    href: "/products",
    unread: true,
  },
  {
    id: 3,
    type: "warning",
    title: "Site Survey",
    message: "Scheduled infrastructure audit for Bangalore Tech Park.",
    time: "2 days ago",
    href: "#",
    unread: false,
  },
  {
    id: 4,
    type: "event",
    title: "Energy Summit",
    message: "Uday IKSA keynote at National Sustainable Factory Expo.",
    time: "3 days ago",
    href: "#",
    unread: false,
  },
]

const getIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-emerald-500" />
    case "warning":
      return <AlertCircle className="h-5 w-5 text-amber-500" />
    case "event":
      return <Zap className="h-5 w-5 text-brand-orange-500" />
    default:
      return <Sparkles className="h-5 w-5 text-brand-orange-500" />
  }
}

export default function NotificationPanel({ isOpen, onClose }) {
  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-24 right-6 w-96 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden z-[100] shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="bg-brand-orange-500/10 p-2 rounded-xl">
                <Bell className="h-5 w-5 text-brand-orange-500" />
              </div>
              <div>
                <h3 className="text-white font-black uppercase text-xs tracking-widest">Board Updates</h3>
                <p className="text-[10px] font-medium text-gray-500 uppercase tracking-tighter mt-0.5">{unreadCount} New Signals Received</p>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
            {notifications.length > 0 ? (
              <div className="divide-y divide-white/5">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    className={`p-6 hover:bg-white/5 transition-all cursor-pointer group ${notification.unread ? "bg-brand-orange-500/[0.03]" : ""
                      }`}
                    whileHover={{ x: 4 }}
                    onClick={() => {
                      if (notification.href !== "#") {
                        window.location.href = notification.href
                      }
                      onClose()
                    }}
                  >
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-black text-xs uppercase tracking-tight group-hover:text-brand-orange-400 transition-colors">{notification.title}</h4>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-brand-orange-500 rounded-full flex-shrink-0 shadow-lg shadow-brand-orange-500/50" />
                          )}
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed font-medium">{notification.message}</p>
                        <p className="text-gray-600 text-[9px] font-black uppercase tracking-widest mt-3">{notification.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <Bell className="h-16 w-16 text-gray-800 mx-auto mb-6" />
                <p className="text-gray-500 font-black uppercase tracking-widest text-xs">No Recent Activity</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-6 border-t border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between">
                <button className="text-[10px] font-black uppercase tracking-widest text-brand-orange-500 hover:text-brand-orange-400 transition-all">
                  CLEAR BOARD
                </button>
                <Link
                  href="#"
                  className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all underline underline-offset-4"
                  onClick={onClose}
                >
                  FULL LOG
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
