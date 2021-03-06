/*!
 * ··· Chatra | https://chatra.io/
 */

"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

!function (C, I) {
    var o;
    o = function (e) {
        e = e || 21;
        var t = window.crypto || window.msCrypto;
        if (!t) throw new Error("This browser doesn’t support `crypto` :—(");
        for (var a = "", r = t.getRandomValues(new Uint8Array(e)); 0 < e--;) a += "Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-"[63 & r[e]];
        return a
    };
    var S = function (o) {
            var i = {
                browser: {
                    name: "",
                    version: "",
                    majorVersion: null,
                    minorVersion: null,
                    patchVersion: null,
                    engine: ""
                },
                os: {name: "", version: "", majorVersion: null, minorVersion: null, patchVersion: null},
                features: {bw: !1, mobile: !1, tv: !1, proxy: !1}
            }, s = {
                browser: [{
                    test: ["SailfishBrowser"],
                    browser: {name: "sailfishbrowser", engine: "gecko", $version: {search: "SailfishBrowser/"}},
                    features: {mobile: !0}
                }, {
                    test: ["Edge/"],
                    browser: {name: "edge", engine: "edgehtml", $version: {search: "Edge/"}}
                }, {
                    test: ["MSIE"],
                    browser: {name: "ie", engine: "trident", $version: {search: "MSIE "}}
                }, {
                    test: ["Trident"],
                    browser: {name: "ie", engine: "trident", $version: {search: "rv:"}}
                }, {
                    test: ["OPR/"],
                    browser: {name: "opera", engine: "webkit", $version: {search: "OPR/"}}
                }, {
                    test: ["Chrome"],
                    browser: {name: "chrome", engine: "webkit", $version: {search: "Chrome/"}}
                }, {
                    test: ["Firefox"],
                    browser: {name: "firefox", engine: "gecko", $version: {search: "Firefox/"}}
                }, {
                    test: ["NokiaBrowser"],
                    browser: {name: "nokiabrowser", engine: "webkit", $version: {search: "NokiaBrowser/"}},
                    features: {mobile: !0}
                }, {
                    test: ["Opera Mini", "Presto"],
                    browser: {name: "operamini", engine: "presto", $version: {search: "Version/"}},
                    features: {mobile: !0, proxy: !0}
                }, {
                    test: ["Opera Mini", "WebKit"],
                    browser: {name: "operamini", engine: "webkit"},
                    features: {mobile: !0, proxy: !0}
                }, {
                    test: ["Opera"],
                    browser: {name: "opera", engine: "presto", $version: {search: "Version/"}}
                }, {
                    test: ["OviBrowser"],
                    browser: {name: "ovi", engine: "gecko", $version: {search: "OviBrowser/"}},
                    features: {mobile: !0, proxy: !0}
                }, {
                    test: ["CriOS/"],
                    browser: {name: "chrome", engine: "webkit", $version: {search: "CriOS/"}}
                }, {
                    test: ["Coast/"],
                    browser: {name: "coast", engine: "webkit", $version: {search: "Coast/"}}
                }, {
                    test: ["Safari", "Version/", /(iPhone|iPod|iPad|Macintosh|Windows)/],
                    browser: {name: "safari", engine: "webkit", $version: {search: "Version/"}}
                }, {test: ["WebKit"], browser: {engine: "webkit"}}, {test: ["Gecko/"], browser: {engine: "gecko"}}],
                os: [{test: ["Sailfish"], os: {name: "sailfish"}, features: {mobile: !0}}, {
                    test: ["Windows Phone"],
                    os: {name: "winphone", $version: {search: "Windows Phone "}},
                    features: {mobile: !0}
                }, {
                    test: ["Windows"],
                    os: {name: "win", $version: {search: "Windows NT "}}
                }, {test: ["Macintosh", "OS X 10"], os: {name: "osx", $version: {search: /OS X /}}}, {
                    test: ["Ubuntu"],
                    os: {name: "ubuntu"}
                }, {test: ["Fedora"], os: {name: "fedora", $version: {search: "Fedora/"}}}, {
                    test: ["Kindle"],
                    os: {name: "kindle", $version: {search: "Kindle/"}},
                    features: {bw: !0, mobile: !0}
                }, {
                    test: [/(BlackBerry|BB\d+)/],
                    os: {name: "blackberry", $version: {search: "Version/"}},
                    features: {mobile: !0}
                }, {test: ["Symbian"], os: {name: "symbian"}, features: {mobile: !0}}, {
                    test: ["Series40"],
                    os: {name: "symbian"},
                    features: {mobile: !0}
                }, {test: ["PlayStation Vita"], os: {name: "psvita"}, features: {mobile: !0}}, {
                    test: ["Nintendo DSi"],
                    os: {name: "dsi"},
                    features: {mobile: !0}
                }, {
                    test: ["New Nintendo 3DS"],
                    os: {name: "n3ds"},
                    browser: {engine: "webkit"},
                    features: {mobile: !0}
                }, {
                    test: ["Nintendo 3DS"],
                    os: {name: "3ds"},
                    browser: {engine: "webkit"},
                    features: {mobile: !0}
                }, {
                    test: ["Viera"],
                    os: {name: "viera"},
                    browser: {engine: "webkit"},
                    features: {tv: !0}
                }, {test: ["SonyDTV"], features: {tv: !0}}, {
                    test: ["Android"],
                    os: {name: "android", $version: {search: "Android "}},
                    features: {mobile: !0}
                }, {test: [/iPhone|iPod|iPad/], os: {name: "ios", $version: {search: "OS "}}, features: {mobile: !0}}],
                features: [{test: [/mobile/i], features: {mobile: !0}}, {test: [/smart-{0,1}tv/i], features: {tv: !0}}]
            };
            if (!o) return i;

            function t(e) {
                for (var t = 0; t < e.length; t++) {
                    for (var a = !0, r = 0; r < e[t].test.length; r++) if (e[t].test[r] instanceof RegExp) {
                        if (!e[t].test[r].test(o)) {
                            a = !1;
                            break
                        }
                    } else if (-1 === o.indexOf(e[t].test[r])) {
                        a = !1;
                        break
                    }
                    if (a) {
                        n(e[t]);
                        break
                    }
                }
            }

            function n(e) {
                for (var t in s) if (s.hasOwnProperty(t) && e[t]) {
                    if (e[t].$version) {
                        var a = c(e[t].$version.search);
                        if (a) {
                            var r = a.split(".");
                            e[t].version = a, r[0] && (e[t].majorVersion = parseInt(r[0])), r[1] && (e[t].minorVersion = parseInt(r[1])), r[2] && (e[t].patchVersion = parseInt(r[2]))
                        }
                    }
                    for (var n in e[t]) e[t].hasOwnProperty(n) && "$" !== n[0] && (i[t][n] = e[t][n])
                }
            }

            function c(e) {
                var t;
                if (e instanceof RegExp) {
                    if (!(t = (o.match(e) || [])[0])) return
                } else t = e;
                var a = o.indexOf(t);
                if (-1 !== a) {
                    var r = o.substring(a + t.length), n = /^(\d+(\.|_)){0,2}\d+/.exec(r);
                    if (n) return n[0].replace(/_/g, ".")
                }
            }

            return function () {
                for (var e in s) t(s[e])
            }(), i
        },
        M = "@-webkit-keyframes chatra-chat-appear-from-bottom{from{opacity:0;-webkit-transform:translateY(20px) scale(.97);transform:translateY(20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes chatra-chat-appear-from-bottom{from{opacity:0;-webkit-transform:translateY(20px) scale(.97);transform:translateY(20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-webkit-keyframes chatra-chat-appear-from-top{from{opacity:0;-webkit-transform:translateY(-20px) scale(.97);transform:translateY(-20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes chatra-chat-appear-from-top{from{opacity:0;-webkit-transform:translateY(-20px) scale(.97);transform:translateY(-20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-webkit-keyframes chatra-chat-appear{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-chat-appear{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-round-button-appear{from{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-round-button-appear{from{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-tab-button-appear{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-tab-button-appear{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-transparent-appear{from{opacity:0}to{opacity:1}}@keyframes chatra-transparent-appear{from{opacity:0}to{opacity:1}}html.chatra-mobile-widget-expanded,body.chatra-mobile-widget-expanded{overflow:hidden !important;height:100% !important;width:100% !important;position:fixed !important;margin:0 !important;top:0 !important;left:0 !important}#chatra{visibility:hidden;opacity:0;position:fixed;max-height:calc(100% - 40px);max-width:calc(100% - 40px);-webkit-transition:.2s linear;transition:.2s linear;-webkit-transition-property:visibility,opacity;transition-property:visibility,opacity;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:auto;height:auto;min-height:0;min-width:0;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0;margin:0;}@media print{#chatra{display:none}}#chatra__iframe-wrapper,#chatra__iframe{left:0 !important;top:0 !important;height:100% !important;width:100% !important;min-width:100% !important;max-width:100% !important;min-height:100% !important;max-height:100% !important;margin:0 !important;padding:0 !important;display:block !important;background:transparent !important;opacity:1 !important;-webkit-transform:none !important;transform:none !important}#chatra__iframe-wrapper{position:absolute;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);overflow:hidden !important}#chatra #chatra__iframe-wrapper,#chatra.chatra--safari #chatra__iframe,#chatra.chatra--webkit.chatra--expanded #chatra__iframe{border-radius:12px}#chatra.chatra--mobile-widget:not(.chatra--expanded),#chatra.chatra--mobile-widget:not(.chatra--expanded) *{cursor:pointer}#chatra.chatra--safari #chatra__iframe,#chatra.chatra--webkit.chatra--expanded #chatra__iframe{-webkit-mask-image:-webkit-gradient(linear,left top, left bottom,from(#000),to(#000));-webkit-mask-image:linear-gradient(#000,#000);mask-image:-webkit-gradient(linear,left top, left bottom,from(#000),to(#000));mask-image:linear-gradient(#000,#000);-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}#chatra:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-transition:.2s linear;transition:.2s linear;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow}#chatra:not(.chatra--expanded):hover #chatra__iframe-wrapper{-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4);box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4)}#chatra.chatra--visible{visibility:visible;opacity:1}#chatra.chatra--animating{-webkit-transition:350ms cubic-bezier(.25,.1,0,1);transition:350ms cubic-bezier(.25,.1,0,1);-webkit-transition-property:height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,transform,-webkit-transform}#chatra.chatra--style-round:not(.chatra--expanded) #chatra__iframe-wrapper,#chatra.chatra--style-round.chatra--safari:not(.chatra--expanded) #chatra__iframe{border-radius:50%}#chatra.chatra--fast-toggle.chatra--style-round:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-animation:chatra-round-button-appear 150ms ease-out 50ms both;animation:chatra-round-button-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--style-tab:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-animation:chatra-tab-button-appear 150ms ease-out 50ms both;animation:chatra-tab-button-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--expanded #chatra__iframe-wrapper{-webkit-animation:chatra-chat-appear 150ms ease-out 50ms both;animation:chatra-chat-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--transparent #chatra__iframe-wrapper{-webkit-animation-name:chatra-transparent-appear;animation-name:chatra-transparent-appear}#chatra.chatra--fast-toggle.chatra--expanded:not(.chatra--mobile-widget):not(.chatra--transparent) #chatra__iframe-wrapper{-webkit-animation-name:chatra-chat-appear-from-bottom;animation-name:chatra-chat-appear-from-bottom}#chatra.chatra--fast-toggle.chatra--pos-top.chatra--expanded:not(.chatra--mobile-widget):not(.chatra--transparent) #chatra__iframe-wrapper{-webkit-animation-name:chatra-chat-appear-from-top;animation-name:chatra-chat-appear-from-top}#chatra.chatra--expanded #chatra__iframe-wrapper{-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2);box-shadow:0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2)}#chatra.chatra--side-bottom{bottom:20px}#chatra.chatra--side-left{left:20px}#chatra.chatra--side-left.chatra--style-tab:not(.chatra--expanded){left:10px}#chatra.chatra--side-right{right:20px}#chatra.chatra--side-right.chatra--style-tab:not(.chatra--expanded){right:10px}#chatra.chatra--side-left.chatra--expanded{bottom:20px;left:20px}#chatra.chatra--side-right.chatra--expanded{bottom:20px;right:20px}#chatra.chatra--pos-right{right:20px}#chatra.chatra--pos-left{left:20px}#chatra.chatra--pos-center{left:50%}#chatra.chatra--pos-top.chatra--style-tab:not(.chatra--expanded){bottom:100%;margin-bottom:-20px}#chatra.chatra--pos-top.chatra--style-round:not(.chatra--expanded){top:20px}#chatra.chatra--pos-bottom:not(.chatra--expanded){bottom:20px}#chatra.chatra--pos-middle:not(.chatra--expanded){bottom:50%}#chatra.chatra--mobile-widget.chatra--expanded:not(.chatra--transparent){max-width:none;max-height:none;top:0 !important;bottom:0 !important}#chatra.chatra--mobile-widget.chatra--expanded #chatra__iframe-wrapper,#chatra.chatra--safari.chatra--mobile-widget.chatra--expanded #chatra__iframe,#chatra.chatra--webkit.chatra--mobile-widget.chatra--expanded #chatra__iframe{border-radius:.1px}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-right:not(.chatra--transparent){right:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-left:not(.chatra--transparent){left:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-center:not(.chatra--transparent){left:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--side-right:not(.chatra--transparent){right:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--side-left:not(.chatra--transparent){left:0}#chatra.chatra--transparent.chatra--expanded{bottom:10px;}#chatra.chatra--transparent.chatra--expanded #chatra__iframe-wrapper{-webkit-box-shadow:none;box-shadow:none}#chatra.chatra--side-left.chatra--transparent,#chatra.chatra--pos-left.chatra--transparent{left:10px}#chatra.chatra--side-right.chatra--transparent,#chatra.chatra--pos-right.chatra--transparent{right:10px}#chatra.chatra--mobile-widget.chatra--transparent{max-height:300px}#chatra.chatra--bg-white{background:#fff}",
        r = 350, n = 60, T = "#chatraChatExpanded";

    function i() {
    }

    function s(e) {
        var t = 0;
        for (var a in e) e.hasOwnProperty(a) && t++;
        return t
    }

    function c(e, t) {
        new RegExp("(\\s|^)".concat(t, "(\\s|$)")).test(e.className) || (e.className += " ".concat(t))
    }

    function h(e, t) {
        e.className = e.className.replace(new RegExp("(\\s+|^)".concat(t, "(\\s+|$)"), "g"), " ").replace(/^\s+|\s+$/g, "")
    }

    function l(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function E(e) {
        var t = ["Webkit", "Moz", "ms"], a = I.createElement("div");
        if (void 0 !== a.style[e]) return !0;
        for (var r in e = e.charAt(0).toUpperCase() + e.slice(1), t) if (void 0 !== a.style[t[r] + e]) return !0;
        return !1
    }

    function d(e, t, a, r) {
        if (t) return e.addEventListener(t, a, !!r), function () {
            !function (e, t, a, r) {
                if (!t) return;
                e.removeEventListener(t, a, !!r)
            }(e, t, a, r)
        }
    }

    function p(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }

    function f(e) {
        return e % 2 == 1
    }

    function m(e) {
        var t = !0;
        for (var a in e) e.hasOwnProperty(a) && !{
            string: 1,
            boolean: 1,
            number: 1
        }[_typeof(e[a])] && null !== e[a] && (C.console && C.console.warn && C.console.warn("Chatra integration error: We accept Strings, Numbers, Booleans and null as integration property values. `".concat(a, "`’s type is `").concat(_typeof(e[a]), "`.")), t = !1);
        return t
    }

    function _(e) {
        for (var t in e) null !== e[t] && (e[t] = e[t].toString());
        return e
    }

    function B(e) {
        if (!e) return {};
        var t = document.createElement("a");
        return t.href = e, t
    }

    var A = [];
    C.Chatra && C.Chatra.q && (A = C.Chatra.q), function e() {
        function t() {
            arguments.length && ("function" == typeof t[arguments[0]] && "_" !== arguments[0][0] ? t[arguments[0]].apply(t, Array.prototype.slice.call(arguments, 1)) : console.warn("Chatra: No such method: ".concat(arguments[0])))
        }

        var k = t;

        function a(e) {
            return function () {
                k[e].apply(k, arguments)
            }
        }

        !function (e, t) {
            for (var a in e = e || {}, t = t || {}) t.hasOwnProperty(a) && (e[a] = t[a])
        }(t, {
            _init: function () {
                if (C.ChatraID) {
                    if (S) {
                        var e = k._sniff = S(C.navigator.userAgent), r = k._setup = C.ChatraSetup || {},
                            t = k._displayMode = r.mode || "widget";
                        if (k._isMobile = e.features.mobile, "trident" === e.browser.engine && e.browser.majorVersion && e.browser.majorVersion <= 10) k.kill(); else if (k._isSafari = "safari" === e.browser.name || "ios" === e.os.name, "widget" !== t || !0 !== r.mobileOnly || k._isMobile) if ("widget" === t && !0 === r.disabledOnMobile && k._isMobile) k.kill(); else {
                            k._features = {transform: E("transform"), transition: E("transition")};
                            var a = k._iframe = I.createElement("iframe"), n = k._wrapper = I.createElement("div"),
                                o = k._iframeWrapper = I.createElement("div"), i = k._style = I.createElement("style"),
                                s = I.getElementsByTagName("head")[0], c = C.ChatraProtocol || "https:",
                                h = C.ChatraHost || "chat.chatra.io", l = C.ChatraID,
                                d = k._clientId = k._getClientId(), p = function (e) {
                                    function t() {
                                        a || (k._killed || e(), a = !0)
                                    }

                                    var a = !1;
                                    r.deferredLoading ? "complete" === I.readyState ? t() : C.addEventListener("load", t, !1) : (I.attachEvent ? "complete" === I.readyState : "loading" !== I.readyState) ? t() : (I.addEventListener("DOMContentLoaded", t, !1), C.addEventListener("load", t, !1))
                                };
                            k._isSafari && k._addClass("safari"), "webkit" === e.browser.engine && k._addClass("webkit"), s.appendChild(i), i.textContent = M, a.setAttribute("frameborder", "0"), a.setAttribute("id", "chatra__iframe"), a.setAttribute("allowtransparency", "true"), a.setAttribute("title", "Chatra live chat"), a.setAttribute("allow", "autoplay"), n.setAttribute("id", "chatra"), n.setAttribute("data-turbolinks-permanent", ""), o.setAttribute("id", "chatra__iframe-wrapper"), k._addAutoRemovableEvent(C, "message", function (e) {
                                if (k._iframe.contentWindow === e.source) {
                                    var t;
                                    try {
                                        t = JSON.parse(e.data)
                                    } catch (e) {
                                        return
                                    }
                                    t && t.type && "string" == typeof t.type && "Chatra" === t.sender && k._messageHandler(t.type, t.data)
                                }
                            }), k._addAutoRemovableEvent(C, "focus", function () {
                                k._postMessage("focus")
                            }), k._addAutoRemovableEvent(C, "blur", function () {
                                k._postMessage("blur")
                            }), k._addAutoRemovableEvent(C, "mousedown", function () {
                                k._postMessage("mousedown")
                            }), k._addAutoRemovableEvent(C, "keyup", function () {
                                k._postMessage("keyup")
                            }), k._isMobile || k._handleExitIntent(), r.groupId = window.ChatraGroupID || r.groupId, r.scriptId = window.ChatraScriptID || r.scriptId, k._setReferrer();
                            var f = (navigator.language || navigator.userLanguage || "en").split("-")[0],
                                m = encodeURIComponent(I.referrer), _ = encodeURIComponent(k._referrer);
                            if ("trident" === e.browser.engine || "edgehtml" === e.browser.engine) {
                                if (800 < m.length) {
                                    var u = B(I.referrer);
                                    m = encodeURIComponent("".concat(u.protocol, "//").concat(u.host))
                                }
                                if (800 < _.length) {
                                    var g = B(k._referrer);
                                    _ = encodeURIComponent("".concat(g.protocol, "//").concat(g.host))
                                }
                            }
                            var b = "hostId=".concat(l, "&mode=").concat(encodeURIComponent(t), "&clientId=").concat(encodeURIComponent(d)).concat(void 0 !== r.groupId ? "&groupId=".concat(encodeURIComponent(r.groupId)) : "").concat(void 0 !== r.scriptId ? "&scriptId=".concat(encodeURIComponent(r.scriptId)) : "").concat(k._isMobile ? "&isMobile=1" : "").concat(r.buttonStyle ? "&buttonType=".concat(encodeURIComponent(r.buttonStyle)) : "").concat(r.language && "string" == typeof r.language ? "&langOverride=".concat(encodeURIComponent(r.language)) : "", "&lang=").concat(encodeURIComponent(f), "&currentPage=").concat(encodeURIComponent(location.href), "&currentPageTitle=").concat(encodeURIComponent(I.title), "&prevPage=").concat(m, "&referrer=").concat(_),
                                w = "".concat(c, "//").concat(h, "/#").concat(b);
                            switch (t) {
                                case"frame":
                                    var y, v = r.injectTo;
                                    if (!v) return console.warn("Chatra: `ChatraSetup.injectTo` is required when using `frame` mode!"), void k.kill();
                                    p(function () {
                                        if ("string" == typeof v ? y = I.getElementById(v) : v[0] && v[0].appendChild ? y = v[0] : v.appendChild && (y = v), !y) return console.warn("Chatra: something is wrong with your `ChatraSetup.injectTo`"), void k.kill();
                                        a.src = w, a.className = "chatra__iframe--mode-frame", y.innerHTML = "", y.appendChild(a), k._attachedToDom = !0
                                    });
                                    break;
                                default:
                                    k._isMobile && k._addClass("mobile-widget"), k._setButtonType("tab"), k._setChatPosition("br"), a.src = w, a.style.position = "absolute", o.appendChild(a), n.appendChild(o), p(function () {
                                        if (r.disableChatOpenHash || I.location.hash !== T || k._postMessage("openChat", !1), r.disableChatOpenHash || k._addAutoRemovableEvent(C, "hashchange", function () {
                                            var e = I.location.hash === T;
                                            !e || k._chatExpanded && !k._chatTransparent ? k._isMobile && !e && k._chatExpanded && !k._chatTransparent && k._postMessage("collapseChat") : k._postMessage("openChat", !1)
                                        }), k._isMobile && k._features.transform) {
                                            setTimeout(function () {
                                                k._adjustZoomLevel()
                                            }, 100);
                                            var e = k._adjustZoomLevel.bind(k);
                                            k._addAutoRemovableEvent(I.body, "touchend", e), k._addAutoRemovableEvent(C, "scroll", e), k._addAutoRemovableEvent(C, "orientationchange", e), k._addAutoRemovableEvent(C, "resize", e)
                                        }
                                        if (I.body.appendChild(n), k._attachedToDom = !0, C.Shopify && "function" == typeof C.doShift) {
                                            var a = C.doShift;
                                            C.doShift = function () {
                                                var e = n.style.position;
                                                n.style.position = "absolute";
                                                var t = a.apply(this, arguments);
                                                return n.style.position = e, t
                                            }
                                        }
                                    })
                            }
                            C.ChatraIntegration && k.setIntegrationData(C.ChatraIntegration), r.startHidden && k.hide(), k.setZIndex("number" == typeof r.zIndex ? r.zIndex : k._zIndex), r.colors && k.setColors(r.colors), r.chatWidth && k.setChatWidth(r.chatWidth), r.buttonSize && k.setButtonSize(r.buttonSize), r.chatHeight && k.setChatHeight(r.chatHeight), r.buttonPosition && k.setButtonPosition(r.buttonPosition), r.locale && k.setLocale(r.locale), "function" == typeof r.onInit && r.onInit(), k.pageView();
                            for (var x = 0; x < A.length; x++) k.apply(k, A[x])
                        } else k.kill()
                    }
                } else console.warn("Chatra: No ChatraID specified, shutting down")
            },
            _chatWidth: 380,
            _chatMinWidth: 150,
            _transparentChatWidth: 335,
            _mobileTransparentChatWidth: 335,
            _chatHeight: 600,
            _labelHeight: 40,
            _mobileLabelHeight: 40,
            _roundButtonSize: n,
            _labelMinWidth: 70,
            _zIndex: 9999,
            setIntegrationData: function (e) {
                m(e) && k._postMessage("integrationData", _(e))
            },
            updateIntegrationData: function (e) {
                m(e) && k._postMessage("updateIntegrationData", _(e))
            },
            pageView: function () {
                var e = {
                    currentPage: I.location.href,
                    currentPageTitle: I.title === k._titleBlink.newTitle ? k._titleBlink.originalTitle : I.title,
                    referrer: k._referrer
                };
                !function (e, t) {
                    if (s(e) === s(t)) {
                        for (var a in e) if (e.hasOwnProperty(a) && t[a] !== e[a]) return;
                        return 1
                    }
                }(k._lastPageData, e) && (k._lastPageData = e, k._chatReady ? k._sendPageInfo(e) : k._pageInfoQ.push(e), k._setStoredItem("Chatra.lastPageViewAt", "".concat(+new Date)))
            },
            setChatWidth: function (e) {
                "number" == typeof e && (k._chatWidth = e, k._recalcChatSize())
            },
            setButtonSize: function (e) {
                "number" == typeof e && (e < 20 && (e = 20), k._roundButtonSize = e, k._recalcChatSize())
            },
            setChatHeight: function (e) {
                "number" == typeof e && (k._chatHeight = e, k._recalcChatSize())
            },
            setZIndex: function (e) {
                "number" == typeof e && (k._zIndex = e, k._refreshZIndex())
            },
            setButtonPosition: function (e) {
                -1 !== ["lt", "lm", "lb", "bl", "bc", "br", "rt", "rm", "rb"].indexOf(e) ? k._postMessage("setPosition", e) : console.warn("Chatra: invalid `positionCode`!")
            },
            resetButtonPosition: function () {
                k._postMessage("resetPosition")
            },
            setColors: function (e) {
                k._postMessage("colors", e)
            },
            resetColors: function () {
                k._postMessage("resetColors")
            },
            setLocale: function (e) {
                k._postMessage("setLocale", e)
            },
            _openChat: function (e) {
                k._postMessage("openChat", !!e)
            },
            openChat: function (e) {
                "widget" === k._displayMode && k._openChat(!!e)
            },
            expandWidget: function (e) {
                "widget" === k._displayMode && (k._isMobile || k._openChat(!!e))
            },
            minimizeWidget: function () {
                "widget" === k._displayMode && k._postMessage("collapseChat")
            },
            expandChat: a("expandWidget"),
            collapseChat: a("minimizeWidget"),
            closeChat: a("minimizeWidget"),
            hide: function () {
                "widget" === k._displayMode && (k._chatHiddenByUser = !0, k._refreshChatVisibility())
            },
            show: function () {
                "widget" === k._displayMode && (k._chatHiddenByUser = !1, k._refreshChatVisibility())
            },
            hideChat: a("hide"),
            showChat: a("show"),
            setGroupId: function (e) {
                void 0 !== e && k._postMessage("setGroupId", e)
            },
            sendAutoMessage: function (e) {
                if ("string" == typeof e) {
                    var t = e.trim();
                    t.length && k._postMessage("sendAutoMessage", t)
                }
            },
            _messageHandler: function (e, t) {
                switch (e) {
                    case"setHostedItem":
                        if (!t || "object" !== _typeof(t) || "string" != typeof t.key) return;
                        k._setHostedItem(t.key, t.value);
                        break;
                    case"apiReady":
                        k._apiReady = !0, k._sendMessageQ();
                        break;
                    case"readyToRetriveHostedStorage":
                        k._sendHostedStorage();
                        break;
                    case"readyToRetriveData":
                        k._chatReady = !0, k._sendFocus(), k._resolvePageInfoQ();
                        break;
                    case"headerReady":
                        k._chatRendered = !0, "function" == typeof k._setup.onRendered && k._setup.onRendered();
                        break;
                    case"collapseWindow":
                        k._collapseChatWindow();
                        break;
                    case"expandWindow":
                        k._expandChatWindow(t);
                        break;
                    case"hideChat":
                        k._hideChatFromFrame();
                        break;
                    case"showChat":
                        k._showChatFromFrame();
                        break;
                    case"setPosition":
                        if (!t || "string" != typeof t) return;
                        k._setChatPosition(t);
                        break;
                    case"buttonType":
                        if (!t || "string" != typeof t) return;
                        k._setButtonType(t);
                        break;
                    case"titleBlink":
                        k._titleBlink(t);
                        break;
                    case"banned":
                        k._setStoredItem("Chatra.banned", t ? k._clientId : ""), k._refreshChatVisibility();
                        break;
                    case"restart":
                        k.restart();
                        break;
                    case"analyticsEvent":
                        if (!t) return;
                        "string" == typeof t ? k._logAnalyticsEvent(t) : "object" === _typeof(t) && k._logAnalyticsEvent(t[0], t[1]);
                        break;
                    case"labelWidth":
                        if ("number" != typeof t && null !== t) return;
                        k._animating(), k._computedLabelWidth = t, k._recalcChatSize();
                        break;
                    case"transparentChatHeight":
                        if ("number" != typeof t) return;
                        k._transparentChatHeight = t, k._recalcChatSize();
                        break;
                    case"s":
                        k.kill()
                }
            },
            _hideChatFromFrame: function () {
                k._chatHiddenByFrame = !0, k._refreshChatVisibility()
            },
            _showChatFromFrame: function () {
                k._chatHiddenByFrame = !1, k._refreshChatVisibility()
            },
            _getScaleLevel: function () {
                var e = C.screen, t = e.width;
                return {
                    90: 1,
                    "-90": 1
                }[C.orientation] && "winphone" === k._sniff.os.name && "trident" === k._sniff.browser.engine && (t = e.height), t < I.documentElement.clientWidth ? C.innerWidth / t : C.innerWidth / I.documentElement.clientWidth
            },
            _adjustZoomLevel: function () {
                if (k._isMobile && k._features.transform && ("webkit" !== k._sniff.browser.engine || "ios" !== k._sniff.os.name)) {
                    var e = 1;
                    k._chatExpanded && !k._chatTransparent || (e = k._getScaleLevel()), e < 1.1 && (e = 1), (e = e.toFixed(2)) !== k._scale && (k._transform.scale = e, k._recalcTransform(), k._scale = e)
                }
            },
            _transform: {},
            _recalcTransform: function () {
                var e = "";
                for (var t in k._transform) k._transform[t] && k._transform.hasOwnProperty(t) && (e += " ".concat(t, "(").concat(k._transform[t], ")"));
                e = e || "none", k._wrapper.style.transform = k._wrapper.style.WebkitTransform = k._wrapper.style.MozTransform = k._wrapper.style.msTransform = e
            },
            _refreshZIndex: function () {
                k._wrapper.style.zIndex = k._chatExpanded ? 2147483647 : k._zIndex
            },
            _refreshChatVisibility: function () {
                !k._chatRendered || k._chatHiddenByUser || k._chatHiddenByFrame || k._getStoredItem("Chatra.banned") === k._clientId ? (k._visible = !1, k._removeClass("visible"), k._postMessage("visible", !1)) : (k._visible = !0, k._addClass("visible"), k._postMessage("visible", !0), k._isSafari && k._safariForceRedraw()), k._refreshMobileBodyFix(), k._refreshMobileViewportFix()
            },
            _refreshMobileBodyFix: function () {
                if (k._isMobile && "widget" === k._displayMode) if (k._visible && k._chatExpanded && !k._chatTransparent) {
                    if (k._mobileBodyFixEnabled) return;
                    k._lastScrollTop = C.pageYOffset, k._lastScrollLeft = C.pageXOffset, k._addClass("bg-white"), c(I.body, "chatra-mobile-widget-expanded"), c(I.documentElement, "chatra-mobile-widget-expanded"), k._mobileBodyFixEnabled = !0
                } else {
                    if (!k._mobileBodyFixEnabled) return;
                    k._removeClass("bg-white"), h(I.body, "chatra-mobile-widget-expanded"), h(I.documentElement, "chatra-mobile-widget-expanded"), C.scrollTo(k._lastScrollLeft, k._lastScrollTop), k._mobileBodyFixEnabled = !1
                }
            },
            _refreshMobileViewportFix: function () {
                if (k._isMobile && "widget" == k._displayMode && ("android" === k._sniff.os.name && "webkit" === k._sniff.browser.engine && 4 <= k._sniff.os.majorVersion || "ios" === k._sniff.os.name && "webkit" === k._sniff.browser.engine || "gecko" === k._sniff.browser.engine)) {
                    var e = function () {
                        var t;
                        try {
                            t = I.querySelector('meta[name="viewport" i]')
                        } catch (e) {
                            t = I.querySelector('meta[name="viewport"]')
                        }
                        return t
                    }();
                    k._visible && k._chatExpanded && !k._chatTransparent ? (e || ((e = I.createElement("meta")).setAttribute("name", "viewport"), document.head.appendChild(e)), k._lastMetaViewportValue = e.getAttribute("content") || "width=none", e.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")) : e && "string" == typeof k._lastMetaViewportValue && e.setAttribute("content", k._lastMetaViewportValue)
                }
            },
            _chatExpanded: !1,
            _expandChatWindow: function (e) {
                var t = k._chatExpanded, a = k._chatTransparent;
                k._chatExpanded = !0, k._addClass("expanded"), e ? (k._chatTransparent = !0, k._addClass("transparent")) : (k._chatTransparent = !1, k._removeClass("transparent")), k._refreshZIndex(), k._adjustZoomLevel(), k._isToggling = !0, k._addClass("toggling"), k._animating(function () {
                    k._isToggling = !1, k._removeClass("toggling"), k._isSafari && k._recalcChatSize(), k._refreshMobileViewportFix(), setTimeout(k._refreshMobileBodyFix, 250)
                }, a), k._recalcChatSize(), k._setup.disableChatOpenHash || !k._isMobile || e || t && !a || document.location.hash === T || (document.location.hash = T, k._chatOpenHashPushed = !0)
            },
            _collapseChatWindow: function () {
                var e = k._chatTransparent;
                k._chatExpanded = !1, k._chatTransparent = !1, k._refreshMobileViewportFix(), k._refreshMobileBodyFix(), k._removeClass("expanded"), k._removeClass("transparent"), k._isToggling = !0, k._addClass("toggling"), k._animating(function () {
                    k._isToggling = !1, k._removeClass("toggling"), k._isSafari && k._recalcChatSize(), k._adjustZoomLevel(), k._refreshZIndex()
                }, e), k._recalcChatSize(), k._setup.disableChatOpenHash || document.location.hash !== T || (k._chatOpenHashPushed ? (window.history.go(-1), k._chatOpenHashPushed = !1) : window.history.replaceState ? window.history.replaceState(window.history.state, "", "".concat(window.location.pathname).concat(window.location.search)) : document.location.hash = "#")
            },
            _animating: function (e, t) {
                if (k._features.transition && k._chatRendered) {
                    if ("round" === k._buttonType || k._isMobile || k._chatTransparent || t) return k._addClass("fast-toggle"), void (e && e());
                    k._removeClass("fast-toggle"), k._addClass("animating"), clearTimeout(k._animatingTimer);
                    var a = r + 30;
                    k._animatingTimer = setTimeout(function () {
                        k._removeClass("animating"), e && e()
                    }, a)
                } else e && e()
            },
            _setChatPosition: function (e) {
                var t = {r: "right", l: "left", c: "center", t: "top", b: "bottom", m: "middle"}, a = t[e.charAt(0)],
                    r = t[e.charAt(1)];
                if (k._isMobile) {
                    var n = ["0%", "0%"];
                    "center" === r && (n[0] = "50%"), "right" !== r && "right" !== a || (n[0] = "100%"), "middle" === r && (n[1] = "50%"), "bottom" === r && (n[1] = "100%"), "bottom" === a && (n[1] = "100%"), k._wrapper.style.transformOrigin = k._wrapper.style.WebkitTransformOrigin = k._wrapper.style.MozTransformOrigin = k._wrapper.style.msTransformOrigin = n.join(" ")
                }
                k._side && k._removeClass("side-".concat(k._side)), k._position && k._removeClass("pos-".concat(k._position)), k._addClass("side-".concat(a)), k._addClass("pos-".concat(r)), k._side = a, k._position = r, k._recalcChatSize()
            },
            _setButtonType: function (e) {
                k._buttonType && k._removeClass("style-".concat(k._buttonType)), k._addClass("style-".concat(e)), k._buttonType = e, k._recalcChatSize()
            },
            _recalcChatSize: function () {
                var e, t, a = Math.max(k._chatWidth, k._chatMinWidth), r = k._chatHeight,
                    n = Math.max(k._computedLabelWidth || k._chatWidth, k._labelMinWidth),
                    o = k._chatExpanded && k._isMobile && !k._chatTransparent, i = !!{left: 1, right: 1}[k._side];
                k._iframe.style.width = "".concat(Math.max(a, i ? 0 : n), "px"), k._iframe.style.height = "".concat(Math.max(r, i ? n : 0), "px"), k._chatExpanded ? t = k._chatTransparent ? (e = k._isMobile ? k._mobileTransparentChatWidth : k._transparentChatWidth, k._transparentChatHeight ? Math.min(k._transparentChatHeight, r) : r) : (e = a, r) : "round" === k._buttonType ? e = t = k._roundButtonSize : (e = n, t = k._isMobile ? k._mobileLabelHeight : k._labelHeight, i && (t = [e, e = t][0])), "center" === k._position && !o && f(e) && e++, "middle" === k._position && !k._chatExpanded && f(t) && t++, o ? (k._wrapper.style.width = "100%", k._wrapper.style.height = "100%") : (k._wrapper.style.width = "".concat(e, "px"), k._wrapper.style.height = "".concat(t, "px")), "middle" !== k._position || k._chatExpanded ? "top" !== k._position || k._chatExpanded || "round" === k._buttonType ? k._transform.translateY = void 0 : k._transform.translateY = k._isToggling && k._isSafari ? "".concat(t, "px") : "100%" : k._transform.translateY = k._isToggling && k._isSafari ? "".concat(t / 2, "px") : "50%", "center" !== k._position || o ? k._transform.translateX = void 0 : k._transform.translateX = "-50%", k._recalcTransform()
            },
            _postMessageQ: [],
            _postMessage: function (e, t) {
                k._apiReady ? k._iframe.contentWindow && k._iframe.contentWindow.postMessage(JSON.stringify({
                    type: e,
                    data: t,
                    sender: "Chatra"
                }), "*") : k._postMessageQ.push([e, t])
            },
            _sendMessageQ: function () {
                for (; k._postMessageQ.length;) k._postMessage.apply(k, k._postMessageQ.shift())
            },
            _pageInfoQ: [],
            _resolvePageInfoQ: function () {
                for (; k._pageInfoQ.length;) k._sendPageInfo(k._pageInfoQ.shift())
            },
            _sendPageInfo: function (e) {
                k._postMessage("clientData", e)
            },
            _sendFocus: function () {
                var e = !I.hasFocus || I.hasFocus();
                k._postMessage(e ? "focus" : "blur")
            },
            _getClientId: function () {
                var t = k._getStoredItem("Chatra.clientId"), e = k._setup.clientId;
                if (e) {
                    var a = _typeof(e);
                    "string" !== a && "number" !== a || (t = e)
                }
                if (t) return t;
                try {
                    t = o(40)
                } catch (e) {
                    for (var r = "".concat(+new Date).split(""), n = "abcdefghijklmnopqrstuvwxyz".split(""); n.length;) r.splice(p(r.length - 1), 0, n.splice(p(n.length - 1), 1)[0]);
                    t = r.join("")
                }
                return k._setStoredItem("Chatra.clientId", t), t
            },
            _setReferrer: function () {
                var e = I.referrer;
                if (e && B(e).host !== location.host) k._referrer = e; else {
                    var t = +(k._getStoredItem("Chatra.lastPageViewAt") || "");
                    36e5 < new Date - t ? k._referrer = e : k._referrer = k._getStoredItem("Chatra.referrer") || ""
                }
                k._setStoredItem("Chatra.referrer", k._referrer || "")
            },
            _getHostedStorage: function () {
                var t;
                try {
                    t = JSON.parse(k._getStoredItem("Chatra.hostedItems"))
                } catch (e) {
                    t = {}, k._setStoredItem("Chatra.hostedItems", "{}")
                }
                return t
            },
            _sendHostedStorage: function () {
                k._postMessage("hostedStorage", k._getHostedStorage())
            },
            _setHostedItem: function (e, t) {
                if ("string" == typeof e) {
                    var a = k._getHostedStorage();
                    a[e] = t, k._setStoredItem("Chatra.hostedItems", JSON.stringify(a))
                }
            },
            _getStoredItem: function (e) {
                var t;
                try {
                    t = localStorage.getItem(e)
                } catch (e) {
                }
                return t || function (e) {
                    var t = I.cookie.split(";");
                    e += "=";
                    for (var a = 0; a < t.length; a++) {
                        for (var r = t[a]; " " === r.charAt(0);) r = r.substring(1);
                        if (0 === r.indexOf(e)) return r.substring(e.length, r.length)
                    }
                }(e)
            },
            _setStoredItem: function (t, a) {
                try {
                    localStorage.setItem(t, a)
                } catch (e) {
                    !function (e, t) {
                        var a = new Date;
                        a.setTime(a.getTime() + 31536e7), I.cookie = "".concat(e, "=").concat(t, ";expires=").concat(a.toGMTString(), ";SameSite=None;secure;")
                    }(t, a)
                }
            },
            _addClass: function (e) {
                for (var t = k._wrapper, a = [].concat(e), r = a.length - 1; 0 <= r; r--) c(t, "chatra--".concat(a[r]))
            },
            _removeClass: function (e) {
                for (var t = k._wrapper, a = [].concat(e), r = a.length - 1; 0 <= r; r--) h(t, "chatra--".concat(a[r]))
            },
            _safariForceRedraw: function () {
                k._wrapper.style.zIndex = k._zIndex - 1, k._wrapper.offsetWidth, k._refreshZIndex()
            },
            _titleBlink: function (e) {
                clearTimeout(k._titleBlink._timeout), k._titleBlink.originalNow && e ? (k._titleBlink.originalTitle = I.title, I.title = k._titleBlink.newTitle = e) : (I.title !== k._titleBlink.newTitle && (k._titleBlink.originalTitle = I.title), I.title = k._titleBlink.originalTitle), k._titleBlink.originalNow = !e || !k._titleBlink.originalNow, e && (k._titleBlink._timeout = setTimeout(function () {
                    k._titleBlink(e)
                }, p(1e3, 2e3)))
            },
            _logAnalyticsEvent: function (t, e) {
                if ((e = e || {custom: !0, metrika: !0, ga: !0}).custom) try {
                    "function" == typeof k._setup.onAnalyticEvent && k._setup.onAnalyticEvent(t)
                } catch (e) {
                    console.warn("Chatra: Error while trying to execute `ChatraSetup.onAnalyticEvent` function:", e)
                }
                if (e.ga && !k._setup.disableGaTracking) try {
                    var a, r;
                    if ("function" == typeof C.ga && (r = C.ga), a = C.GoogleAnalyticsObject && "function" == typeof C[C.GoogleAnalyticsObject] ? C[C.GoogleAnalyticsObject] : r) if (k._setup.gaTrackerName) {
                        if ("function" == typeof a.getByName) {
                            var n = a.getByName(k._setup.gaTrackerName);
                            !n && r && a !== r && "function" == typeof r.getByName && (n = r.getByName(k._setup.gaTrackerName)), n && "function" == typeof n.send && n.send("event", "Chatra", t), n || console.warn("Chatra: Could’t find Google Analytics tracker named “".concat(k._setup.gaTrackerName, "”."))
                        }
                    } else if (k._setup.gaTrackingId) {
                        if ("function" == typeof a.getAll) {
                            var o = (a.getAll() || []).some(function (e) {
                                if (e && "function" == typeof e.get && e.get("trackingId") == k._setup.gaTrackingId) return "function" == typeof e.send && e.send("event", "Chatra", t), !0
                            });
                            !o && r && a !== r && "function" == typeof r.getAll && (o = (r.getAll() || []).some(function (e) {
                                if (e && "function" == typeof e.get && e.get("trackingId") == k._setup.gaTrackingId) return "function" == typeof e.send && e.send("event", "Chatra", t), !0
                            })), o || console.warn("Chatra: Could’t find Google Analytics tracker with tracking ID “".concat(k._setup.gaTrackingId, "”."))
                        }
                    } else {
                        var i = "function" == typeof a.getAll ? (a.getAll() || [])[0] : void 0;
                        i && "function" == typeof i.send ? i.send("event", "Chatra", t) : a("send", "event", "Chatra", t)
                    } else C._gaq && "function" == typeof C._gaq.push && C._gaq.push(["_trackEvent", "Chatra", t])
                } catch (e) {
                    console.warn("Chatra: Error while trying to create Google Analytics event:", e)
                }
                if (e.metrika && !k._setup.disableYaTracking) try {
                    var s;
                    if (k._setup.yaCounterId) C["yaCounter".concat(k._setup.yaCounterId)] ? s = C["yaCounter".concat(k._setup.yaCounterId)] : console.warn("Chatra: Could’t find Yandex Metrika counter with ID “".concat(k._setup.yaCounterId, "”.")); else {
                        var c = C.Ya && (C.Ya.Metrika || C.Ya.Metrika2),
                            h = c && "function" == typeof c.counters && c.counters(), l = h && h[0] && h[0].id;
                        l && C["yaCounter".concat(l)] && (s = C["yaCounter".concat(l)])
                    }
                    s && s.reachGoal && s.reachGoal("Chatra_".concat(t.replace(/\s/g, "_")))
                } catch (e) {
                    console.warn("Chatra: Error while trying to create Yandex.Metrika event:", e)
                }
            },
            _eventRemovers: [],
            _addAutoRemovableEvent: function () {
                k._eventRemovers.push(d.apply(k, arguments))
            },
            _cleanEventListeners: function () {
                for (var e = k._eventRemovers.length - 1; 0 <= e; e--) k._eventRemovers[e]()
            },
            _exitIntentBorderThreshold: 30,
            _handleExitIntent: function () {
                var o = k._exitIntentBorderThreshold, i = !1;
                k._addAutoRemovableEvent(document, "mousemove", function (e) {
                    var t = e.clientX, a = e.clientY, r = window.innerHeight, n = window.innerWidth;
                    i && a <= o && k._postMessage("exit-intent"), i = o < a && a < r - o && o < t && t < n - o
                })
            },
            restart: function () {
                k.kill(), e()
            },
            kill: function () {
                if (!k._killed) for (var e in k._cleanEventListeners(), k._style && (l(k._style), delete k._style), k._iframe && (l(k._iframe), k._iframe.src = "", delete k._iframe), k._iframeWrapper && (l(k._iframeWrapper), delete k._iframeWrapper), k._wrapper && (l(k._wrapper), delete k._wrapper), k._killed = !0, k) k.hasOwnProperty(e) && "function" == typeof k[e] && "restart" !== e && (k[e] = i)
            }
        }), C.Chatra && C.Chatra.kill && C.Chatra.kill(), (C.Chatra = t)._init()
    }()
}(window, document);
