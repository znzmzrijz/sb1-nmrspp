"use client";

import { ImageGenerator } from '@/components/ImageGenerator';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ImageIcon, StarIcon, HistoryIcon, SettingsIcon } from 'lucide-react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("generator");
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  const menuItems = [
    { id: "generator", label: "Generator", icon: ImageIcon },
    { id: "favorites", label: "Favorites", icon: StarIcon },
    { id: "history", label: "History", icon: HistoryIcon },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "generator":
        return <ImageGenerator />;
      case "favorites":
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Favorites</h2>
            <p>Your favorite generated images will appear here.</p>
          </div>
        );
      case "history":
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Generation History</h2>
            <p className="mb-4">Your image generation history will appear here.</p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete All History</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your entire image generation history.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete All History</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="mt-2 space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input type="password" id="current-password" />
                  <Label htmlFor="new-password">New Password</Label>
                  <Input type="password" id="new-password" />
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input type="password" id="confirm-password" />
                  <Button className="mt-2">Change Password</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Manage Subscription</h3>
                <p className="text-sm text-muted-foreground mt-1">Current Plan: Pro</p>
                <Button className="mt-2">Upgrade Plan</Button>
              </div>
              <div>
                <h3 className="text-lg font-medium">Newsletter Subscription</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <Switch id="newsletter" />
                  <Label htmlFor="newsletter">Receive newsletter</Label>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Change Email</h3>
                <div className="mt-2 space-y-2">
                  <Label htmlFor="new-email">New Email Address</Label>
                  <Input type="email" id="new-email" />
                  <Button>Update Email</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Data Management</h3>
                <p className="text-sm text-muted-foreground mt-1">Download or delete your account data</p>
                <div className="mt-2 space-x-2">
                  <Button variant="outline">Download Data</Button>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <aside className="md:w-48 flex-shrink-0">
          <nav className="flex md:flex-col gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className="justify-start"
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-grow">
          <div className="bg-card rounded-lg p-4 md:p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}