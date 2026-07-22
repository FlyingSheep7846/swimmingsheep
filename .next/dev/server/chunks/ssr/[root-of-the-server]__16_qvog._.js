module.exports = [
"[project]/src/stylesheets/Personal.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "image": "Personal-module__Ryk9VG__image",
  "imageContainer": "Personal-module__Ryk9VG__imageContainer",
  "infoBox": "Personal-module__Ryk9VG__infoBox",
  "infoParagraph": "Personal-module__Ryk9VG__infoParagraph",
  "name": "Personal-module__Ryk9VG__name",
  "profile": "Personal-module__Ryk9VG__profile",
  "skillsOverview": "Personal-module__Ryk9VG__skillsOverview",
});
}),
"[project]/src/components/Layout/Layout.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Layout-module__cbqlla__body",
  "bodyWithSidebar": "Layout-module__cbqlla__bodyWithSidebar",
  "content": "Layout-module__cbqlla__content",
  "page": "Layout-module__cbqlla__page",
  "sidebar": "Layout-module__cbqlla__sidebar",
  "site": "Layout-module__cbqlla__site",
  "topStrip": "Layout-module__cbqlla__topStrip",
});
}),
"[project]/src/components/Layout/LayoutNew.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
(()=>{
    const e = new Error("Cannot find module '../Header/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../Footer/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Layout.module.css [ssr] (css module)");
;
;
;
;
function Layout({ children, sidebar = null }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].site,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].topStrip
                }, void 0, false, {
                    fileName: "[project]/src/components/Layout/LayoutNew.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Header, {}, void 0, false, {
                    fileName: "[project]/src/components/Layout/LayoutNew.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: sidebar ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].bodyWithSidebar : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].body,
                    children: [
                        sidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                            children: sidebar
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/LayoutNew.jsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].content,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layout/LayoutNew.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/LayoutNew.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/src/components/Layout/LayoutNew.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Layout/LayoutNew.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Layout/LayoutNew.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SongsCard/SongsCard.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "albumArt": "SongsCard-module__X1WVoq__albumArt",
  "contentRow": "SongsCard-module__X1WVoq__contentRow",
  "featuredColumn": "SongsCard-module__X1WVoq__featuredColumn",
  "featuredSong": "SongsCard-module__X1WVoq__featuredSong",
  "heading": "SongsCard-module__X1WVoq__heading",
  "leftColumn": "SongsCard-module__X1WVoq__leftColumn",
  "smallRow": "SongsCard-module__X1WVoq__smallRow",
  "song": "SongsCard-module__X1WVoq__song",
  "songInfo": "SongsCard-module__X1WVoq__songInfo",
  "wrapper": "SongsCard-module__X1WVoq__wrapper",
});
}),
"[project]/src/components/SongsCard/SongBlock.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SongBlock
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SongsCard/SongsCard.module.css [ssr] (css module)");
;
;
function SongBlock({ track, featured = false }) {
    if (!track) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
        href: track.spotifyUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: featured ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].featuredSong : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].song,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: track.albumArt,
                alt: `${track.name} album cover`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].albumArt
            }, void 0, false, {
                fileName: "[project]/src/components/SongsCard/SongBlock.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].songInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: track.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/SongsCard/SongBlock.jsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: track.artists.join(", ")
                    }, void 0, false, {
                        fileName: "[project]/src/components/SongsCard/SongBlock.jsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SongsCard/SongBlock.jsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SongsCard/SongBlock.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/SongsCard/SongsCard.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SongsCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongBlock$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SongsCard/SongBlock.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SongsCard/SongsCard.module.css [ssr] (css module)");
;
;
;
;
function SongsCard({ songInfo }) {
    const [tracks, setTracks] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!songInfo) return;
        const fetchTracks = async ()=>{
            const requests = songInfo.map(async (song)=>{
                const spotifyLink = song.properties["Spotify Link"]?.url;
                if (!spotifyLink) return null;
                const response = await fetch(`/api/spotify-track?url=${encodeURIComponent(spotifyLink)}`);
                if (!response.ok) return null;
                return response.json();
            });
            const results = await Promise.all(requests);
            setTracks(results.filter(Boolean));
        };
        fetchTracks();
    }, [
        songInfo
    ]);
    if (tracks.length === 0) return null;
    const featuredTrack = tracks[0];
    const secondaryTracks = tracks.slice(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].contentRow,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].leftColumn,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heading,
                            children: "Currently listening to"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].smallRow,
                            children: secondaryTracks.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongBlock$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    track: track
                                }, track.spotifyUrl, false, {
                                    fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].featuredColumn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongBlock$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        track: featuredTrack,
                        featured: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SongsCard/SongsCard.jsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/blocks/IntroBlock.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerPlaceholder": "IntroBlock-module__rDYHHa__bannerPlaceholder",
  "homeGrid": "IntroBlock-module__rDYHHa__homeGrid",
  "introduction": "IntroBlock-module__rDYHHa__introduction",
  "listening": "IntroBlock-module__rDYHHa__listening",
  "panel": "IntroBlock-module__rDYHHa__panel",
  "profile": "IntroBlock-module__rDYHHa__profile",
  "profileImagePlaceholder": "IntroBlock-module__rDYHHa__profileImagePlaceholder",
});
}),
"[project]/src/blocks/IntroBlock.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroBlock
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SongsCard/SongsCard.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/blocks/IntroBlock.module.css [ssr] (css module)");
;
;
;
function IntroBlock({ songInfo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].homeGrid,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profile}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileImagePlaceholder
                    }, void 0, false, {
                        fileName: "[project]/src/blocks/IntroBlock.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Sheep’s place"
                    }, void 0, false, {
                        fileName: "[project]/src/blocks/IntroBlock.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Game Programmer - UI/UX - Artist"
                    }, void 0, false, {
                        fileName: "[project]/src/blocks/IntroBlock.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/blocks/IntroBlock.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].introduction}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Welcome to my website"
                    }, void 0, false, {
                        fileName: "[project]/src/blocks/IntroBlock.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }, void 0, false, {
                        fileName: "[project]/src/blocks/IntroBlock.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].bannerPlaceholder
                    }, void 0, false, {
                        fileName: "[project]/src/blocks/IntroBlock.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/blocks/IntroBlock.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listening}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    songInfo: songInfo
                }, void 0, false, {
                    fileName: "[project]/src/blocks/IntroBlock.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/blocks/IntroBlock.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/blocks/IntroBlock.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/pages/personal.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stylesheets$2f$Personal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/stylesheets/Personal.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$LayoutNew$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/LayoutNew.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SongsCard$2f$SongsCard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SongsCard/SongsCard.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/blocks/IntroBlock.jsx [ssr] (ecmascript)");
;
;
;
const profileImage = "/images/IMG_3868.jpg";
;
;
;
;
// import Layout from "@/components/Layout.jsx";
function Personal() {
    const [notionData, setNotionData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetch('/api/notion-data').then((res)=>{
            console.log('Response status:', res.status);
            return res.text(); // Get as text first to see what it is
        }).then((text)=>{
            console.log('Raw response:', text);
            const data = JSON.parse(text); // Try to parse
            setNotionData(data);
            setLoading(false);
        }).catch((err)=>{
            console.error('Error:', err);
            setError(err.message);
            setLoading(false);
        });
    }, []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/pages/personal.jsx",
        lineNumber: 38,
        columnNumber: 25
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/personal.jsx",
        lineNumber: 39,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$LayoutNew$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$blocks$2f$IntroBlock$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            songInfo: notionData
        }, void 0, false, {
            fileName: "[project]/src/pages/personal.jsx",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/personal.jsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Personal;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16_qvog._.js.map