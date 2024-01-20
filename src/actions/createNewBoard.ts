"use server";

export async function createNewBoard(title: string) {
    return {
        id: title + Math.ceil(Math.random() * 100),
        title,
    };
}
