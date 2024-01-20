"use client"
import { createNewBoard } from "@/actions/createNewBoard";
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { redirect } from "next/navigation";

import React from 'react'

export default function NewBoard()
{
  async function handleCreateBoard(formData: FormData)
  {
    const title = formData.get('title');
    const newBoard = await createNewBoard(title as string)
    console.log(newBoard)
    if (newBoard)
    {
      redirect(`/board/${newBoard.title}`)
    }
  }
  return (
    <Popover className="w-[350px] p-4 h-36 shadow-sm" placement="bottom-start">
      <PopoverTrigger inputMode="text">
        <Button className="m-2" variant="shadow" color="primary">
          New Board
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <h1 className="text-2xl my-2">
            New Board
          </h1>
          <form action={handleCreateBoard} className="max-w-xl">
            <Input label="Title" variant="underlined" className="p-2 w-full" name="title" placeholder="My Board" color="primary" />
            {/* <Input label="Description" variant="underlined" className="p-2" name="description" /> */}
            <Button className="w-full my-2" variant="shadow" color="secondary" type="submit">
              Create
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
