"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { Plus } from "lucide-react";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: "Creating a new page...",
      success: "New page created",
      error: "Failed to create a new page",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty document icon"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty document icon"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s space
      </h2>

      <Button onClick={onCreate}>
        <Plus className="w-4 h-4 mr-2" />
        Create new page
      </Button>
    </div>
  );
};

export default DocumentsPage;
