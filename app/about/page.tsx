import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | HyperText",
    description: "Detailed Explanation of what HyperText is",   
}

export default function About() {
    return (
        <div>
            <h1>What is HyperText?</h1>
            <p>HyperText is the online platform for creating live subtitles. This application can be used by professors to help students note take.</p>
        </div>   
    );
}