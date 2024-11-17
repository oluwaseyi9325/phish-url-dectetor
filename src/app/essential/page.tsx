"use client"
import React, { useState } from "react";
import Image from "next/image";
function PortfolioPage() {
    const [quote, setQuote] = useState("Success is not final, failure is not fatal: It is the courage to continue that counts.");
    const telegramLink = "https://t.me/your-telegram-link"; // Replace with your actual Telegram link

    const generateQuote = () => {
        const quotes = [
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "The way to get started is to quit talking and begin doing.",
            "Don't watch the clock; do what it does. Keep going.",
            "You only fail when you stop trying.",
            "Hardships often prepare ordinary people for an extraordinary destiny.",
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(telegramLink);
        alert("Telegram link copied to clipboard!");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4 sm:p-6">
            {/* Profile Section */}
            <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 max-w-md w-full">
                <Image
                    src={require("../asset/seyi.jpg")} // Replace with your picture
                    alt="Your Name"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h1 className="text-xl sm:text-2xl font-bold mb-2">Tobi Omoniyi</h1>
                <h2 className="text-lg sm:text-xl text-gray-600 mb-4">Forex Trader</h2>

                {/* Daily Quote Section */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
                    <p className="italic text-gray-700 text-sm sm:text-base">{quote}</p>
                    <button
                        onClick={generateQuote}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base hover:bg-blue-600 w-full"
                    >
                        Generate Quote
                    </button>
                </div>

                {/* Telegram Button */}
                <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm sm:text-base w-full"
                >
                    Click Here to Join My Telegram Group
                </button>
            </div>
        </div>
    );
}

export default PortfolioPage;
