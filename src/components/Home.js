import React from "react";

export default function Home() {
    return (
        <main>
            <img 
              className="absolute object-cover w-full h-full" 
              alt="background-img"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="tex-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Jeremy.</h1>
            </section>
        </main>
    )
}