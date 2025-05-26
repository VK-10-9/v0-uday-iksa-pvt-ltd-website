"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Bell, X, CheckCircle, AlertCircle, Info, Calendar } from "lucide-react"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Project Completed",
    message: "Industrial facility project has been successfully completed.",
    time: "2 hours ago",
    href: "/projects/industrial",
    unread: true,
  },
  {
    id: 2,
    type: "info",
    title: "New Innovation Released",
    message: "NANOSUN 3.0 is now available with enhanced features.",
    time: "1 day ago",
    href: "/innovations/nanosun",
    unread: true,
  },
  {
    id: 3,
    type: "warning",
    title: "Maintenance Scheduled",
    message: "System maintenance scheduled for this weekend.",
    time: "2 days ago",
    href: "#",
    unread: false,
  },
  {
    id: 4,
    type: "event",
    title: "Upcoming Event",
    message: "Green Building Conference next month.",
    time: "3 days ago",
    href: "#",
    unread: false,
  },
]

const getIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-400" />
    case "warning":
      return <AlertCircle className="h-5 w-5 text-yellow-400" />
    case "event":
      return <Calendar className="h-5 w-5 text-blue-400" />
    default:
      return <Info className="h-5 w-5 text-purple-400" />
  }
}

export default function NotificationPanel({ isOpen, onClose }) {
  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-20 right-4 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden z-40 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-white mr-2" />
              <h3 className="text-white font-medium">Notifications</h3>
              {unreadCount > 0 && (
                <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">{unreadCount}</span>
              )}
            </div>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y divide-white/10">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    className={`p-4 hover:bg-white/5 transition-colors cursor-pointer ${
                      notification.unread ? "bg-white/5" : ""
                    }`}
                    whileHover={{ x: 4 }}
                    onClick={() => {
                      if (notification.href !== "#") {
                        window.location.href = notification.href
                      }
                      onClose()
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-medium text-sm truncate">{notification.title}</h4>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 ml-2" />
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{notification.message}</p>
                        <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Bell className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No notifications yet</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                  Mark all as read
                </button>
                <Link
                  href="/notifications"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  onClick={onClose}
                >
                  View all
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
