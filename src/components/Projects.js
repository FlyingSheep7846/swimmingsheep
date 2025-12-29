import lastcall from "../assets/images/projects/LastCall.png";
import site from "../assets/images/projects/site_home.png";
import siteAbout from "../assets/images/projects/site_aboutme.png";
import pdd1 from "../assets/images/projects/pdd1.png";
import pdd2 from "../assets/images/projects/pdd2.png";
import underfished1 from "../assets/images/projects/underfished1.png"
import underfished2 from "../assets/images/projects/underfished2.png"
import pokeshin1 from "../assets/images/projects/pokeshin1.png"
import pokeshin2 from "../assets/images/projects/pokeshin2.png"
import duck from "../assets/images/projects/proDUCKtive.jpg";
import duckView from "../assets/images/projects/proDUCKtive_view.png";
import shelly from "../assets/images/projects/shelly_screenshot.png";
import shellyGame from "../assets/images/projects/shelly_gameplay.png";
import jeffGame from "../assets/images/projects/jeff_game.png";
import jeffOpening from "../assets/images/projects/jeff_opening.png";
import nepguinGame from "../assets/images/projects/nepguin_game.png";
import nepguinOpening from "../assets/images/projects/nepguin_opening.png";
import martyHome from "../assets/images/projects/marty_home.jpg";
import martyGame from  "../assets/images/projects/marty_game.jpg";

export const projects = [


    {
        name: "SwimmingSheep.com",
        category: "App Development",
        tools: "React, HTML/CSS, Node.js",
        images: [site, siteAbout],
        description: "The current wesbite you are visiting! Fully developed with React.js.",
        link: "https://github.com/FlyingSheep22/swimmingsheep",
        linkName: "Github Repository",

    },

    {
        name: "Pas de Deux: The Chaos Ballet",
        category: "Game Development",
        tools: "Unity, C#",
        images: [pdd1, pdd2],
        description: "Co-op Comedy Ballerina Game submitted to the 2025 Ubisoft Game Lab Competition on behalf of McGill University, " +
        "<b>winner of the Jury's Award</b>. Developed across 10 weeks in a team of eight (four programmers, three artists and one designer). Acted as " +
        "the lead UI/UX developer and designer, as well as general gameplay prorammer. Was responsible " + 
        "for developing all menus, in-game HUD and user experience feedback, as well as camera and object interactions systems.",
        link: "https://typh0n4.itch.io/pas-de-deux-the-chaos-ballet",
        linkName: "Itch.io Page",
    },

    {
        name: "PokéShin",
        category: "Game Development",
        tools: "Unity, C#",
        images: [pokeshin1, pokeshin2],
        description: "Visual novel puzzle game developed for RELG 368 (Japanese Religions in Popular Culture) class final project. " +
        "Fully developed from scratch visual novel and investigation systems, drawing inspiration from games like Ace Attorney. " + 
        "Created an MVVM-powered backend UI system that is very reusable and flexible.",
        link: "https://flyingsheep22.itch.io/pokeshin",
        linkName: "Itch.io Page",
    },

    {
        name: "Underfished",
        category: "Game Development",
        tools: "Unity, C#",
        images: [underfished1, underfished2],
        description: "Horror survival fishing game developed with a team of four in under 36 hours for McGill CodeJam 15, <b>winner of the Best Game Prize.</b> " +
        "Acted as lead programmer for the project, responsible for core fishing gameplay, UI, and cutscene sequencing.",
        link: "https://flyingsheep22.itch.io/pokeshin",
        linkName: "Itch.io Page",
    },

    {
        name: "Shelly's Snack Search",
        category: "Game Development",
        tools: "Unity, C#, Unity Cinemachine, A*, Unity Global Volume, Blender",
        images: [shellyGame,shelly],
        description: "Arcade style 2.5D platformer game where you play as Shelly the spider collecting bugs around the map. Developed in 48 hours for McGameJam 2025 as one of the programmers " +
        "(consisting of four programmers, three artists and one designer). Was responsible for developing UI/HUD and Scene Management, Camera Management, Skin Changing System and other miscellaneous tasks.",
        link: "https://flyingsheep22.itch.io/shellys-snack-search",
        linkName: "Itch.io Page",

    },

    {
        name: "Last Call",
        category: "Game Development",
        tools: "Unity, C#, Unity Cinemachine, Unity URP, Aseprite",
        images: [lastcall, lastcall],
        description: "Solo developed roguelike survival game passion project. Created using Unity, with all other assets drawn or sprited using Procreate and Aseprite. Extensively explored many different" +
             " Unity frameworks such as Cinemachine, UI and URP to create custom camera/lighting effects and cohesive, user-friendly UI, .",
        link: "https://flyingsheep22.itch.io/last-call",
        linkName: "Itch.io Page",

    },

    {
        name: "Marteler la Martlet",
        category: "App Development",
        tools: "Unity, C#, Unity UI",
        images: [martyHome, martyGame],
        description: "Idle clicker-game inspired by McGill's beloved mascot, developed in 24 hours as part McHacks 12. Winner of the Chaotic Evil Hack Prize.",
        link: "https://devpost.com/software/marteler-le-martelet",
        linkName: "Devpost Page",

    },

    {
        name: "ProDUCKtive",
        category: "App Development",
        tools: "Unity, C#, .NET Interop Services",
        images: [duck, duckView],
        description: "Desktop Overlay Companion with Pomodoro and wellness checks through periodic self-care reminders. Developed fully in Unity using the UI system for all screens and transitions, " +
         "as well as Microsoft's Interop Services to crete a fully functionning background overlay. Created in 36 hours with two teammates during McGill CodeJam 2024.",
        link: "https://devpost.com/software/producktive",
        linkName: "Devpost Page",

    },


    {
        name: "Jeff the Shark Minigame",
        category: "Game Development",
        tools: "Unity, C#, Unity Cinemachine, Unity URP, Unity Navmesh Pathfinding",
        images: [jeffOpening, jeffGame],
        description: "Short third-person horror game, solely programmed/developed and made with one artist partner. Game is inspired by Jeff the Land Shark, a Marvel Comics character, and all rights belong to Marvel. This fan-made game is non-commercial and not affiliated with or endorsed by Marvel.",
        link: "/#",
        linkName: "Video Demo",

    },

    {
        name: "Nepguin",
        category: "Game Development",
        tools: "Godot, GDScript",
        images: [nepguinOpening, nepguinGame],
        description: "Two-player cozy winter themed game about a penguin who charms snowmen to attack for it. Developed as a first Godot game in a team of four across 48 hours for Winter Melonjam 5. " +
        "Contributed to UI and Upgrade systems, and created all 2D Assets and UI visuals by hand.",
        link: "https://realdevfrog.itch.io/nepguin",
        linkName: "Itch.io Page",

    },
    

];