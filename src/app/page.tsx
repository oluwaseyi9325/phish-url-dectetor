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
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Bammy Project</h1>
                <h2 className="text-lg font-bold mb-4 text-center">Phishing Link Checker</h2>
                <input
                    type="text"
                    placeholder="Enter URL"
                    className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <button
                    className={`w-full py-3 bg-blue-500 text-white rounded-md font-semibold transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={checkUrl}
                    disabled={loading}
                >
                    {loading ? "Checking..." : "Check URL"}
                </button>

                {status && (
                    <div
                        className={`mt-4 text-center p-3 rounded-md ${status.includes("Threat") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                    >
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}
