"use client"

import React, { useState } from "react"
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from '../convex/_generated/dataModel'; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface UpdateNumberDialogProps {
isDialogOpen: boolean;
onClose: () => void;
numberToUpdateId: Id<"numbers">;
}

export function UpdateNumberDialog({
    isDialogOpen,
    onClose,
    numberToUpdateId,
}: UpdateNumberDialogProps) {
const [inputValue, setInputValue] = useState("");
const updateNumber = useMutation(api.myFunctions.updateNumber);

  return (
    <Dialog open={isDialogOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update number</DialogTitle>
          <DialogDescription>Enter a new value</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter a new value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            autoFocus
          />
        </div>
        <DialogFooter>
          <button
            type="button"
            onClick={() => onClose()}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={() => {updateNumber({ id: numberToUpdateId, value: parseInt(inputValue) }); onClose()}}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inputValue.trim()}
          >
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
