module.exports = [
"[project]/src/components/Project.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Project({ name, images, link, linkName, description, tools }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "projectBox",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "title",
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/components/Project.jsx",
                    lineNumber: 6,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                            children: "Tools used:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Project.jsx",
                            lineNumber: 7,
                            columnNumber: 17
                        }, this),
                        " ",
                        tools
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Project.jsx",
                    lineNumber: 7,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text",
                    dangerouslySetInnerHTML: {
                        __html: description
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Project.jsx",
                    lineNumber: 9,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "imagesGrid",
                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            className: "image",
                            src: image
                        }, index, false, {
                            fileName: "[project]/src/components/Project.jsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Project.jsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("center", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: link,
                        children: linkName
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Project.jsx",
                    lineNumber: 19,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Project.jsx",
            lineNumber: 4,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = Project;
}),
"[project]/src/components/Projects.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const lastcall = "/images/projects/LastCall.png";
const site = "/images/projects/site_home.png";
const siteAbout = "/images/projects/site_aboutme.png";
const pdd1 = "/images/projects/pdd1.png";
const pdd2 = "/images/projects/pdd2.png";
const underfished1 = "/images/projects/underfished1.png";
const underfished2 = "/images/projects/underfished2.png";
const pokeshin1 = "/images/projects/pokeshin1.png";
const pokeshin2 = "/images/projects/pokeshin2.png";
const duck = "/images/projects/proDUCKtive.jpg";
const duckView = "/images/projects/proDUCKtive_view.png";
const shelly = "/images/projects/shelly_screenshot.png";
const shellyGame = "/images/projects/shelly_gameplay.png";
const jeffGame = "/images/projects/jeff_game.png";
const jeffOpening = "/images/projects/jeff_opening.png";
const nepguinGame = "/images/projects/nepguin_game.png";
const nepguinOpening = "/images/projects/nepguin_opening.png";
const martyHome = "/images/projects/marty_home.jpg";
const martyGame = "/images/projects/marty_game.jpg";
const projects = [
    {
        name: "SwimmingSheep.com",
        category: "App Development",
        tools: "React, HTML/CSS, Node.js",
        images: [
            site,
            siteAbout
        ],
        description: "The current wesbite you are visiting! Fully developed with React.js.",
        link: "https://github.com/FlyingSheep22/swimmingsheep",
        linkName: "Github Repository"
    },
    {
        name: "Pas de Deux: The Chaos Ballet",
        category: "Game Development",
        tools: "Unity, C#",
        images: [
            pdd1,
            pdd2
        ],
        description: "Co-op Comedy Ballerina Game submitted to the 2025 Ubisoft Game Lab Competition on behalf of McGill University, " + "<b>winner of the Jury's Award</b>. Developed across 10 weeks in a team of eight (four programmers, three artists and one designer). Acted as " + "the lead UI/UX developer and designer, as well as general gameplay prorammer. Was responsible " + "for developing all menus, in-game HUD and user experience feedback, as well as camera and object interactions systems.",
        link: "https://typh0n4.itch.io/pas-de-deux-the-chaos-ballet",
        linkName: "Itch.io Page"
    },
    {
        name: "PokéShin",
        category: "Game Development",
        tools: "Unity, C#",
        images: [
            pokeshin1,
            pokeshin2
        ],
        description: "Visual novel puzzle game developed for RELG 368 (Japanese Religions in Popular Culture) class final project. " + "Fully developed from scratch visual novel and investigation systems, drawing inspiration from games like Ace Attorney. " + "Created an MVVM-powered backend UI system that is very reusable and flexible.",
        link: "https://flyingsheep22.itch.io/pokeshin",
        linkName: "Itch.io Page"
    },
    {
        name: "Underfished",
        category: "Game Development",
        tools: "Unity, C#",
        images: [
            underfished1,
            underfished2
        ],
        description: "Horror survival fishing game developed with a team of four in under 36 hours for McGill CodeJam 15, <b>winner of the Best Game Prize.</b> " + "Acted as lead programmer for the project, responsible for core fishing gameplay, UI, and cutscene sequencing.",
        link: "https://flyingsheep22.itch.io/pokeshin",
        linkName: "Itch.io Page"
    },
    {
        name: "Shelly's Snack Search",
        category: "Game Development",
        tools: "Unity, C#, Unity Cinemachine, A*, Unity Global Volume, Blender",
        images: [
            shellyGame,
            shelly
        ],
        description: "Arcade style 2.5D platformer game where you play as Shelly the spider collecting bugs around the map. Developed in 48 hours for McGameJam 2025 as one of the programmers " + "(consisting of four programmers, three artists and one designer). Was responsible for developing UI/HUD and Scene Management, Camera Management, Skin Changing System and other miscellaneous tasks.",
        link: "https://flyingsheep22.itch.io/shellys-snack-search",
        linkName: "Itch.io Page"
    },
    {
        name: "Last Call",
        category: "Game Development",
        tools: "Unity, C#, Unity Cinemachine, Unity URP, Aseprite",
        images: [
            lastcall,
            lastcall
        ],
        description: "Solo developed roguelike survival game passion project. Created using Unity, with all other assets drawn or sprited using Procreate and Aseprite. Extensively explored many different" + " Unity frameworks such as Cinemachine, UI and URP to create custom camera/lighting effects and cohesive, user-friendly UI, .",
        link: "https://flyingsheep22.itch.io/last-call",
        linkName: "Itch.io Page"
    },
    {
        name: "Marteler la Martlet",
        category: "App Development",
        tools: "Unity, C#, Unity UI",
        images: [
            martyHome,
            martyGame
        ],
        description: "Idle clicker-game inspired by McGill's beloved mascot, developed in 24 hours as part McHacks 12. Winner of the Chaotic Evil Hack Prize.",
        link: "https://devpost.com/software/marteler-le-martelet",
        linkName: "Devpost Page"
    },
    {
        name: "ProDUCKtive",
        category: "App Development",
        tools: "Unity, C#, .NET Interop Services",
        images: [
            duck,
            duckView
        ],
        description: "Desktop Overlay Companion with Pomodoro and wellness checks through periodic self-care reminders. Developed fully in Unity using the UI system for all screens and transitions, " + "as well as Microsoft's Interop Services to crete a fully functionning background overlay. Created in 36 hours with two teammates during McGill CodeJam 2024.",
        link: "https://devpost.com/software/producktive",
        linkName: "Devpost Page"
    },
    {
        name: "Jeff the Shark Minigame",
        category: "Game Development",
        tools: "Unity, C#, Unity Cinemachine, Unity URP, Unity Navmesh Pathfinding",
        images: [
            jeffOpening,
            jeffGame
        ],
        description: "Short third-person horror game, solely programmed/developed and made with one artist partner. Game is inspired by Jeff the Land Shark, a Marvel Comics character, and all rights belong to Marvel. This fan-made game is non-commercial and not affiliated with or endorsed by Marvel.",
        link: "/#",
        linkName: "Video Demo"
    },
    {
        name: "Nepguin",
        category: "Game Development",
        tools: "Godot, GDScript",
        images: [
            nepguinOpening,
            nepguinGame
        ],
        description: "Two-player cozy winter themed game about a penguin who charms snowmen to attack for it. Developed as a first Godot game in a team of four across 48 hours for Winter Melonjam 5. " + "Contributed to UI and Upgrade systems, and created all 2D Assets and UI visuals by hand.",
        link: "https://realdevfrog.itch.io/nepguin",
        linkName: "Itch.io Page"
    }
];
}),
"[project]/pages/projects.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Project.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Projects.js [ssr] (ecmascript)");
;
;
;
;
const Projects = ()=>{
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("All");
    const categories = [
        "All",
        "Game Development",
        "App Development"
    ];
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["projects"].filter((project)=>selectedCategory === "All" ? true : project.category === selectedCategory);
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Layout, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "category-filters",
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleCategoryChange(category),
                        className: selectedCategory === category ? "active" : "",
                        children: category
                    }, category, false, {
                        fileName: "[project]/pages/projects.jsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/pages/projects.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'start',
                    gap: '20px',
                    padding: '25px 0px'
                },
                children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: project.name,
                        tools: project.tools,
                        images: project.images,
                        description: project.description,
                        link: project.link,
                        linkName: project.linkName
                    }, void 0, false, {
                        fileName: "[project]/pages/projects.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/pages/projects.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/projects.jsx",
        lineNumber: 21,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Projects;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fe68048a._.js.map