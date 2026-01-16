import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Contact",
    href: "#enroll",
  },
  {
    name: "Call Us",
    href: "tel:+971521240237",
  },
];

export const phoneNumber = "+971521240237";

export const downloadBrochure = () => {
  // download brochure
  if (typeof window !== "undefined") {
    const link = document.createElement("a");
    link.href = "/1.pdf";
    link.download = "brochure.pdf";
    link.click();
    window.open("/1.pdf", "_blank");
  }
};



export const links=[
    {
        name:"whatsapp",
        href:"https://youtube.com/@deltadigitalacademy?si=lfD7dT4ImJw7kydV",
        icon:FaWhatsapp,
    },
    {
        name:"youtube",
        href:"https://youtube.com/@deltadigitalacademy?si=lfD7dT4ImJw7kydV",
        icon:FaYoutube,
    },
    {
        name:"linkedin",
        href:"https://www.linkedin.com/company/delta-digital-academy/",
        icon:FaLinkedin,
    },
    {
        name:"instagram",
        href:"https://www.instagram.com/delta_digital_academy",
        icon:FaInstagram,
    }
]

export const whatsappRedirect=()=>{
    if(typeof window !==undefined){
        window.open("https://wa.me/971521240237", "_blank");
    }
}

export const phoneRedirect=()=>{
    if(typeof window !==undefined){
        window.open("tel:+971521240237", "_blank");
    }
}



export function minutesLeftUntilJan30_2026(): number {
    const now = new Date(); // current date & time
    const targetDate = new Date("2026-01-30T00:00:00"); // Jan 30, 2026
  
    const diffMs = targetDate.getTime() - now.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
  
    return diffMinutes;
  }

 export const detectCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
     
      return data?.country_calling_code || "+971"; // e.g. "IN", "AE"
    } catch {
      return "+971"; // fallback
    }
  };
