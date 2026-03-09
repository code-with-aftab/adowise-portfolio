"use client";

import { useEffect, useState } from "react";
import { X, Bell, Info, CheckCircle2, AlertTriangle, Megaphone } from "lucide-react";

interface NotificationData {
    _id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'promo';
}

export default function NotificationPopup() {
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [dismissed, setDismissed] = useState<string[]>([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await fetch("/api/admin/notifications?public=true");
                if (res.ok) {
                    const data = await res.json();
                    const dismissedIds = JSON.parse(localStorage.getItem("dismissed_notifs") || "[]");
                    const fresh = data.filter((n: NotificationData) => !dismissedIds.includes(n._id));

                    if (fresh.length > 0) {
                        handleNativeNotifications(fresh);
                    }
                }
            } catch (e) {
                // Silently fail
            }
        };

        const handleNativeNotifications = async (notifs: NotificationData[]) => {
            if (!("Notification" in window)) return;

            let permission = Notification.permission;
            if (permission !== "granted" && permission !== "denied") {
                permission = await Notification.requestPermission();
            }

            if (permission === "granted") {
                notifs.forEach((n, index) => {
                    // Stagger notifications slightly
                    setTimeout(() => {
                        const notification = new Notification(n.title, {
                            body: n.message,
                            icon: "/adowise-logo.png",
                            badge: "/adowise-logo.png",
                            tag: n._id // Prevents duplicates and clusters logically
                        });

                        notification.onclick = () => {
                            window.focus();
                            notification.close();
                        };

                        // Mark as dismissed locally so it won't show again on refresh
                        const currentDismissed = JSON.parse(localStorage.getItem("dismissed_notifs") || "[]");
                        if (!currentDismissed.includes(n._id)) {
                            const updated = [...currentDismissed, n._id];
                            localStorage.setItem("dismissed_notifs", JSON.stringify(updated));
                        }
                    }, index * 1000);
                });
            }
        };

        fetchNotifications();
    }, []);

    return null; // Return nothing to remove UI from the page
}
