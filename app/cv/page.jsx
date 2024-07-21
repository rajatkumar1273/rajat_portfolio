// app/cv/page.js
import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button"; // Adjust the path as needed
import { Download } from "lucide-react";

const CV = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">My CV</h1>
      <div className="mb-8">
        {/* You can embed a PDF viewer or an image of your CV here */}
        <iframe
          src="/Rajat_Kumar.pdf"
          width="100%"
          height="500px"
          className="border"
        ></iframe>
      </div>
      <a href="/Rajat_Kumar.pdf" download>
        <Button className="gap-x-2">
          Download CV <Download size={18} />
        </Button>
      </a>
      <div className="mt-4">
        <Link href="/" legacyBehavior>
          <a>
            <Button variant="secondary" className="gap-x-2">
              Back to Home
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CV;
