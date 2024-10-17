"use client";

import { useState } from "react";
import { phishingUrls } from "./PhishiData";

export default function Home() {
    const [url, setUrl] = useState<string>("");
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // Array of known phishing URLs



    const checkUrl = () => {
        setLoading(true);
        setStatus(null);

        // Validate URL using regex
        if (!isValidUrl(url)) {
            setStatus("Please enter a valid URL.");
            setLoading(false);
            return;
        }

        // Check if the URL is in the phishing URL list
        if (isPhishingUrl(url)) {
            setStatus("Threat detected!");
        } else {
            setStatus("Safe link.");
        }

        setLoading(false);
    };

    // Regex for URL validation
    const isValidUrl = (urlString: string) => {
        const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(:[0-9]{1,5})?(\/[^\s]*)?$/;
        return urlPattern.test(urlString);
    };

    // Check if the URL is in the phishing URLs array
    const isPhishingUrl = (urlString: string) => {
        // return phishingUrls.includes(urlString);
        return /^http/i.test(urlString) || phishingUrls.includes(urlString);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
                {/* Responsive Title */}
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Phishing Website Detection</h2>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Enter URL"
                    className="w-full p-2 sm:p-3 border rounded-md mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                {/* Button with Loader Icon when checking */}
                <button
                    className={`w-full py-2 sm:py-3 bg-blue-500 text-white rounded-md font-semibold transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={checkUrl}
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex justify-center items-center">

                            Checking...
                        </div>
                    ) : (
                        "Check URL"
                    )}
                </button>

                {/* Status Display */}
                {status && (
                    <div
                        className={`mt-4 text-center p-3 rounded-md ${status.includes("Threat") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                    >
                        {status}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Powered by <span className="font-semibold">Bammy & Tetro</span>
                </div>
            </div>
        </div>

    );
}
