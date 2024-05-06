import Link from "next/link"

import { Github, Linkedin, Download } from "lucide-react"

import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-gradient-to-t from-black to-gray-800"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <p
          className="mt-10 mb-5 font-normal text-base md:text-lg text-neutral-300 max-w-md mx-auto"
        >Hello Guys, I am</p>
        <div className="rounded-full overflow-hidden border-4 border-white w-24 h-24 mx-auto mb-4">
          <img
            src="/gourav.jpeg" // Adjust the path to your image
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Gourav Chatterjee</h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >I am a Full Stack Software Developer with 5 years of experience. I am currently working as a Software Engineer at EY. I am working with MERN Stack, Next.js and a little bit of Blockchain.</p>
        <div className="mt-5">
          <Link href={"https://www.linkedin.com/in/gourav-chatterjee-codewithbogo/"} target="_blank">
            <Button className="rounded-3xl">
              <Linkedin className="mr-2 h-4 w-4" /> Linkedin
            </Button>
          </Link>
          <a href={"/files/gourav-chatterjee-resume.pdf"} download={"/files/gourav-chatterjee-resume.pdf"}>
            <Button className="ml-2 rounded-3xl">
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
          <Link href={"https://github.com/gouravTheDev"} target="_blank">
            <Button className="ml-2 rounded-3xl">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection