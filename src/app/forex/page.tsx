
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function PortfolioPage() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const quotes = [
            "Success is the sum of small efforts, repeated day in and day out.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Success usually comes to those who are too busy to be looking for it.",
            "You miss 100% of the shots you don’t take.",
            "Don’t wait. The time will never be just right.",
            "Trading is not about being right, it’s about being profitable.",
            "Discipline and patience are the keys to consistent success.",
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, []);

    const telegramLink = "https://t.me/your-telegram-link"; // Replace with your actual Telegram link

    const copyToClipboard = () => {
        navigator.clipboard.writeText(telegramLink);
        alert("Telegram link copied to clipboard!");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-blue-50 to-blue-200 py-6 px-6 sm:px-10 lg:px-20">
            {/* Left Section */}
            <div className="flex-1 flex flex-col justify-center items-start space-y-6">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                    Welcome to My Portfolio
                </h1>
                <div className="rounded-full block lg:hidden overflow-hidden w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 shadow-xl border-4 border-blue-500">
                    <Image
                        src={require("../asset/seyi.jpg")} // Replace with your picture
                        alt="Tobi Omoniyi"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-800 font-semibold">
                    I am Tobi Omoniyi, a Forex Trader
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Discover my journey in forex trading, learn from my insights, and
                    join a thriving community of traders!
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500 max-w-full sm:max-w-md">
                    <p className="italic text-gray-700 text-lg">{quote}</p>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="mt-4 px-5 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 shadow-lg"
                >
                    Click Here to Join My Telegram Group
                </button>
            </div>

            {/* Right Section */}
            <div className="flex-1  hidden lg:flex justify-center items-center mt-6 lg:mt-0">
                <div className="rounded-full overflow-hidden w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 shadow-xl border-4 border-blue-500">
                    <Image
                        src={require("../asset/seyi.jpg")} // Replace with your picture
                        alt="Tobi Omoniyi"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
