(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AIReceptionist.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIReceptionist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AIReceptionist({ company }) {
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [answer, setAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function generateAnswer() {
        const q = question.toLowerCase();
        if (q.includes("öppet") || q.includes("öppettider")) {
            setAnswer(`Våra öppettider är: ${company.hours || "inte angivna ännu"}.`);
        } else if (q.includes("tjänst") || q.includes("erbjuder") || q.includes("gör ni")) {
            setAnswer(`Vi erbjuder: ${company.services || "inga tjänster angivna ännu"}.`);
        } else if (q.includes("telefon") || q.includes("ringa") || q.includes("kontakt")) {
            setAnswer(`Du kan kontakta oss på ${company.phone || "telefon saknas"} eller ${company.email || "e-post saknas"}.`);
        } else if (q.includes("boka") || q.includes("tid")) {
            setAnswer(`Du kan boka här: ${company.booking || "bokningslänk saknas"}.`);
        } else {
            setAnswer(`Tack för din fråga! Kontakta oss gärna på ${company.email || "vår e-post"} så hjälper vi dig vidare.`);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "🤖 AI Receptionist"
            }, void 0, false, {
                fileName: "[project]/components/AIReceptionist.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "Testa hur AI:n skulle svara kunder baserat på företagets information."
            }, void 0, false, {
                fileName: "[project]/components/AIReceptionist.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: "Ställ en fråga"
            }, void 0, false, {
                fileName: "[project]/components/AIReceptionist.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: question,
                onChange: (e)=>setQuestion(e.target.value),
                placeholder: "Ex: Har ni öppet på lördag?"
            }, void 0, false, {
                fileName: "[project]/components/AIReceptionist.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: generateAnswer,
                children: "Skicka fråga"
            }, void 0, false, {
                fileName: "[project]/components/AIReceptionist.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "message",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "AI svarar:"
                    }, void 0, false, {
                        fileName: "[project]/components/AIReceptionist.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/components/AIReceptionist.jsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AIReceptionist.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AIReceptionist.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(AIReceptionist, "dVijXm+eIaUVMus3afQ4nLRSQHQ=");
_c = AIReceptionist;
var _c;
__turbopack_context__.k.register(_c, "AIReceptionist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://kgsnornpjfvnfxpplorn.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_wbKjcU9vOAc6fONUI7CTVg_AzowDpHi");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIReceptionist$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AIReceptionist.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Dashboard() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [company, setCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: 'Din Salong',
        services: 'Klippning, färgning, styling',
        hours: 'Mån–fre 09:00–18:00',
        phone: '070-000 00 00',
        email: 'kontakt@dinsalong.se',
        booking: 'https://example.com/boka'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            async function loadUser() {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!data.user) {
                    window.location.href = '/login';
                } else {
                    setUser(data.user);
                    const { data: companyData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("companies").select("*").eq("user_id", data.user.id).single();
                    if (companyData && !error) {
                        setCompany({
                            name: companyData.company_name || "",
                            services: companyData.services || "",
                            hours: companyData.opening_hours || "",
                            phone: companyData.phone || "",
                            email: companyData.email || "",
                            booking: companyData.booking_url || ""
                        });
                    }
                }
            }
            loadUser();
        }
    }["Dashboard.useEffect"], []);
    async function handleLogout() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        window.location.href = '/login';
    }
    function updateCompany(field, value) {
        setCompany({
            ...company,
            [field]: value
        });
    }
    async function saveCompany() {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            alert("Du är inte inloggad.");
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("companies").upsert({
            user_id: user.id,
            company_name: company.name,
            services: company.services,
            opening_hours: company.hours,
            phone: company.phone,
            email: company.email,
            booking_url: company.booking
        }, {
            onConflict: "user_id"
        });
        if (error) {
            alert(error.message);
        } else {
            alert("Företagsinformationen sparades!");
        }
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "loading",
            children: "Laddar dashboard..."
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.js",
            lineNumber: 89,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "AutoKund AI"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        children: "Företagsinfo"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        children: "Chatbot"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        children: "Installation"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "logout",
                        onClick: handleLogout,
                        children: "Logga ut"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "dashContent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            "Inloggad som ",
                            user.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashGrid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Företagsinfo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Företagsnamn"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: company.name,
                                        onChange: (e)=>updateCompany('name', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Tjänster"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: company.services,
                                        onChange: (e)=>updateCompany('services', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Öppettider"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: company.hours,
                                        onChange: (e)=>updateCompany('hours', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Telefon"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: company.phone,
                                        onChange: (e)=>updateCompany('phone', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "E-post"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: company.email,
                                        onChange: (e)=>updateCompany('email', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Bokningslänk"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: company.booking,
                                        onChange: (e)=>updateCompany('booking', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: saveCompany,
                                        children: "Spara ändringar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted",
                                        children: "Spara-knappen kopplas till databasen i nästa steg."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Chatbot-preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "miniChat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "miniHeader",
                                                children: company.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chatMessage user",
                                                children: "Hej, vad erbjuder ni?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chatMessage bot",
                                                children: [
                                                    "Vi erbjuder ",
                                                    company.services,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chatMessage user",
                                                children: "När har ni öppet?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chatMessage bot",
                                                children: [
                                                    "Våra öppettider är ",
                                                    company.hours,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chatMessage user",
                                                children: "Hur kontaktar jag er?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chatMessage bot",
                                                children: [
                                                    "Du kan nå oss på ",
                                                    company.phone,
                                                    " eller ",
                                                    company.email,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Installationskod"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: '<script src="https://autokund-ai.vercel.app/widget.js"></script>'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "uLSsr0T5z/6L/kYVa/Opp1d3o28=");
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0xzkmnm._.js.map