import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";
import { log } from "console";


const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try{
        console.log("Seeding database");
        await db.delete(schema.userProgress);
        await db.delete(schema.courses);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
    

        await db.insert(schema.courses).values([
            {
              id: 1,
              title: "Hindi",
              imageSrc: "/in.svg",
            },
            
            
          ]);

          await db.insert(schema.units).values([
            {
              id: 1,
              courseId: 1, // Hindi
              title: "Unit 1",
              description: "Learn the basics of Hindi",
              order: 1,
            }
            // {
            //   id: 2,
            //   courseId: 2, // Hokkien (SG)
            //   title: "Unit 1",
            //   description: "Learn the basics of Hokkien",
            //   order: 1,
            // },
          ]);

          await db.insert(schema.lessons).values([
            {
              id: 1,
              unitId: 1, // Unit 1 (Learn the basics of Hindi)
              title: "Basic greetings in Hindi",
              order: 1,
            },
            {
              id: 2,
              unitId: 1, // Unit 1 (Learn the basics of Hindi)
              title: "Verbs",
              order: 2,
            },
            {
              id: 3,
              unitId: 1, // Unit 1 (Learn the basics of Hokkien (SG))
              title: "Verbs",
              order: 3,
            },
            {
              id: 4,
              unitId: 1, // Unit 1 (Learn the basics of Hokkien (SG))
              title: "Verbs",
              order: 4,
            },
            {
              id: 5,
              unitId: 1, // Unit 1 (Learn the basics of Hokkien (SG))
              title: "Verbs",
              order: 5,
            },
          ]);

          await db.insert(schema.challenges).values([
            {
              id: 1,
              lessonId: 1,
              type: "SELECT",
              question: "How do you say 'Hello' in Hindi?",
              order: 1,
            },
            {
              id: 2,
              lessonId: 1,
              type: "ASSIST",
              question: "'Hello'",
              order: 2,
            },
            {
              id: 3,
              lessonId: 1,
              type: "SELECT",
              question: "How do you say 'Thank you' in Hindi?",
              order: 3,
            },
            // {
            //   id: 4,
            //   lessonId: 1,
            //   type: "ASSIST",
            //   question: "'the woman'",
            //   order: 4,
            // },
          ]);

          await db.insert(schema.challengeOptions).values([
            {
               
              challengeId: 1, // "Which one of these is 'a man'?"
              text: "नमस्ते(Namaste)",
              imageSrc: "/namaste.svg",
              audioSrc: "/namaste.mp3",
              correct: true,
            },
            {
               
              challengeId: 1,
              text: "शुक्रिया(Sukriya)",
              imageSrc: "/sukriya.svg",
              audioSrc: "/sukriya.mp3",
              correct: false,
            },
            {
            
              challengeId: 1, // "'the man'"
              text: "अलविदा(alavida)",
              imageSrc: "/alvida.svg",
              audioSrc: "/alvida.mp3",
              correct: false,
            }
            // {
            //   challengeId: 2,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 3, // "Which one of these is 'a woman'?"
            //   text: "အမြိုးသား (a myoe thar)",
            //   imageSrc: "/images/man.jpg",
            //   audioSrc: "/audio/mm_man.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 3,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   imageSrc: "/images/woman.jpg",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: true,
            // },
            // {
            //   challengeId: 4, // "'the woman'"
            //   text: "အမြိုးသား (a myoe thar)",
            //   audioSrc: "/audio/mm_man.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 4,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: true,
            // },
          ]);
          await db.insert(schema.challengeOptions).values([
            {
                
              challengeId: 2, //  'a man'?"
              text: "नमस्ते(Namaste)",
              audioSrc: "/namaste.mp3",
              correct: true,
            },
            {
                
              challengeId: 2,
              text: "शुक्रिया(Sukriya)",
              audioSrc: "/sukriya.mp3",
              correct: false,
            },
            {
                
              challengeId: 2, // "'the man'"
              text: "अलविदा(alavida)",
              audioSrc: "/alvida.mp3",
              correct: false,
            }
            // {
            //   challengeId: 2,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 3, // "Which one of these is 'a woman'?"
            //   text: "အမြိုးသား (a myoe thar)",
            //   imageSrc: "/images/man.jpg",
            //   audioSrc: "/audio/mm_man.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 3,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   imageSrc: "/images/woman.jpg",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: true,
            // },
            // {
            //   challengeId: 4, // "'the woman'"
            //   text: "အမြိုးသား (a myoe thar)",
            //   audioSrc: "/audio/mm_man.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 4,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: true,
            // },
          ]);

          await db.insert(schema.challengeOptions).values([
            {
               
              challengeId: 3, // "Which one of these is 'a man'?"
              text: "नमस्ते(Namaste)",
              imageSrc: "/namaste.svg",
              audioSrc: "/namaste.mp3",
              correct: false,
            },
            {
               
              challengeId: 3,
              text: "शुक्रिया(Sukriya)",
              imageSrc: "/sukriya.svg",
              audioSrc: "/sukriya.mp3",
              correct: true,
            },
            {
            
              challengeId: 3, // "'the man'"
              text: "अलविदा(alavida)",
              imageSrc: "/alvida.svg",
              audioSrc: "/alvida.mp3",
              correct: false,
            }
            // {
            //   challengeId: 2,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 3, // "Which one of these is 'a woman'?"
            //   text: "အမြိုးသား (a myoe thar)",
            //   imageSrc: "/images/man.jpg",
            //   audioSrc: "/audio/mm_man.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 3,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   imageSrc: "/images/woman.jpg",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: true,
            // },
            // {
            //   challengeId: 4, // "'the woman'"
            //   text: "အမြိုးသား (a myoe thar)",
            //   audioSrc: "/audio/mm_man.mp3",
            //   correct: false,
            // },
            // {
            //   challengeId: 4,
            //   text: "အမြိုးသမီး (a myoe tha mee)",
            //   audioSrc: "/audio/mm_woman.mp3",
            //   correct: true,
            // },
          ]);
          
          await db.insert(schema.challenges).values([
            {
              id: 4,
              lessonId: 2,
              type: "SELECT",
              question: "Which one of these is 'a man'?",
              order: 1,
            },
            {
              id: 5,
              lessonId: 2,
              type: "ASSIST",
              question: "'the man'",
              order: 2,
            },
            {
              id: 6,
              lessonId: 2,
              type: "SELECT",
              question: "Which one of these is 'a woman'?",
              order: 3,
            },
            // {
            //   id: 4,
            //   lessonId: 1,
            //   type: "ASSIST",
            //   question: "'the woman'",
            //   order: 4,
            // },
          ]);

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
        
    };

    main();