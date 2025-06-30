
export const academicProjects = [
  {
    title: "Industrial Defect Detection Suite",
    description: "Client bootcamp project targeting defects on plastic bottles (YOLOv11, YOLOv5) and aluminium cans (Faster R-CNN, SSD). Built unified GUI for real-time testing.",
    tech: ["YOLOv11", "YOLOv5", "Faster R-CNN", "SSD", "OpenCV", "Python", "PyQt"],
    category: "Computer Vision",
    semester: "Semester 5"
  },
  {
    title: "World War II Knowledge Chatbot",
    description: "Fine-tuned RoBERTa on curated WWII corpus to deliver accurate historical dialogue—fully local, no external APIs.",
    tech: ["RoBERTa", "PyTorch", "Python", "NLP"],
    category: "AI/ML",
    semester: "Semester 5"
  },
  {
    title: "AI Medical Guidance Chatbot",
    description: "Conversational agent providing medical advice while staying on topic. Orchestrated multiple LLM endpoints with Python safeguards.",
    tech: ["Mixtral API", "Llama API", "Gemma API", "Groq", "Python"],
    category: "AI/ML",
    semester: "Semester 4"
  },
  {
    title: "Language Learning App - Guess the Word",
    description: "Gamified vocabulary builder built with Flutter, backed by Firebase, tested on Android Emulator.",
    tech: ["Flutter", "Dart", "Firebase", "Android"],
    category: "Mobile Development",
    semester: "Semester 4"
  },
  {
    title: "Hotel Reservation System",
    description: "Desktop Java application with MySQL backend and JFrame UI for room availability and booking workflows.",
    tech: ["Java", "JDBC", "NetBeans", "MySQL"],
    category: "Desktop Application",
    semester: "Semester 2"
  },
  {
    title: "Car Rental Website",
    description: "Full LAMP stack application with MySQL backend for reservations and fleet management with security layers.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    category: "Web Development",
    semester: "Semester 2"
  }
];

export const personalProjects = [
  {
    title: "AIBantu",
    description: "Mobile assistant for seniors using GPT-4o Mini & YOLOv10, focusing on accessibility design and conversational AI.",
    tech: ["GPT-4o Mini", "YOLOv10", "Mobile Development"],
    category: "AI Assistant"
  },
  {
    title: "Traffix",
    description: "Smart city traffic optimizer combining satellite imagery and road camera feeds for real-time data fusion.",
    tech: ["Computer Vision", "Real-time Processing", "Data Fusion"],
    category: "Smart City"
  },
  {
    title: "EssAI",
    description: "Web platform evaluating student essays via Google Generative AI with automated feedback generation.",
    tech: ["Google Generative AI", "Web Development", "NLP"],
    category: "Education Tech"
  }
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  semester?: string;
}
