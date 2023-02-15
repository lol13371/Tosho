(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [549], {
        9017: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/checker", function () {
                return s(6501)
            }])
        },
        5508: function (e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/logo.9ee0c8d1.png",
                height: 124,
                width: 342,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPUlEQVR42gWAQQpAQBRA/zmdgWSrLJDslGIWKKu5wBzrvUtM4cvnzMjByWQJWjsbNrOJyztY3el5WBhI/BV9aCLRRzw3IQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        6144: function (e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/discord.93c4bca5.png",
                height: 80,
                width: 80,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAa0lEQVR42l2IqxGDUBREb+IwKSAlICKjEkEDeCQ14LBYJEgUBdAChjZQaDDIe+axMxiG3dmv8bALeMqI+PnHY/68zncguEhgIjK+miub777ozIxCkXvlA4laZ7QEZhy5NBpvGmpSsaQntjsOPChKF0Dt2TkAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        305: function (e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/twitter.de49e0be.png",
                height: 80,
                width: 80,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAY0lEQVR42iWHMQ5AABAELyISlcQ7VDQ6FT0eIJ6g9A0tf1FrvUKi1UgY3NlNZndEg2f0f6lIbQc2RjqhZSen5LH2Qs2l17gRCCGL6flxFg0ND38L1YyJg5tVFUdwSYiJcEzlBRTZTwBW0vnJAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        1965: function (e, t, s) {
            "use strict";
            s.d(t, {
                Z: function () {
                    return A
                }
            });
            var r = s(5893);
            s(7294);
            var i = s(4305),
                a = s(3478),
                n = s(5820),
                l = s(5675),
                c = s.n(l),
                o = s(1664),
                h = s.n(o),
                d = s(3302),
                u = s.n(d),
                m = s(5508),
                g = s(305),
                x = s(6144);
            let p = {
                    closed: {
                        opacity: 0
                    },
                    open: {
                        opacity: 1
                    }
                },
                j = {
                    closed: {
                        transition: {
                            staggerChildren: .1,
                            staggerDirection: -1
                        }
                    },
                    open: {
                        transition: {
                            staggerChildren: .2,
                            staggerDirection: 1
                        }
                    }
                };

            function A() {
                let [e, t] = (0, i.n)(!1, !0);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: u().navbar,
                        children: [(0, r.jsxs)("nav", {
                            className: u().container,
                            children: [(0, r.jsxs)("div", {
                                className: u().brand,
                                children: [(0, r.jsx)(h(), {
                                    href: "/",
                                    children: (0, r.jsx)(c(), {
                                        src: m.Z,
                                        className: u().logo,
                                        alt: "Toshies Logo",
                                        priority: !0
                                    })
                                }), (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("h4", {
                                        children: "Mint date:"
                                    }), (0, r.jsx)("h4", {
                                        style: {
                                            color: "#FFA100"
                                        },
                                        children: "sold out"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: u().right,
                                children: [(0, r.jsxs)("ul", {
                                    className: u().menu,
                                    children: [(0, r.jsx)("li", {
                                        className: u().menuItem,
                                        children: (0, r.jsx)(h(), {
                                            scroll: !1,
                                            href: "/#honorary",
                                            children: "Toshies"
                                        })
                                    }), (0, r.jsx)("li", {
                                        className: u().menuItem,
                                        children: (0, r.jsx)(h(), {
                                            scroll: !1,
                                            href: "/#about",
                                            children: "Story"
                                        })
                                    }), (0, r.jsxs)("div", {
                                    className: u().socials,
                                    children: [(0, r.jsx)("a", {
                                        href: "https://twitter.com/ToshiesByChuck",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, r.jsx)(c(), {
                                            src: g.Z,
                                            alt: "Follow us on Twitter",
                                            className: u().socialImage
                                        })
                                    }), (0, r.jsx)("a", {
                                        href: "https://discord.gg/toshies",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, r.jsx)(c(), {
                                            src: x.Z,
                                            alt: "Join our Discord",
                                            className: u().socialImage
                                        })
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: u().hamburger,
                                onClick: t,
                                children: e ? (0, r.jsx)(a.E.div, {
                                    style: {
                                        display: "flex"
                                    },
                                    animate: {
                                        opacity: 1,
                                        rotate: 180
                                    },
                                    exit: {
                                        opacity: 0,
                                        transition: {
                                            duration: .6
                                        }
                                    },
                                    children: (0, r.jsx)(c(), {
                                        src: "/x.svg",
                                        alt: "menu",
                                        width: 24,
                                        height: 24
                                    })
                                }) : (0, r.jsx)(a.E.div, {
                                    style: {
                                        display: "flex"
                                    },
                                    children: (0, r.jsx)(c(), {
                                        src: "/menu.svg",
                                        alt: "menu",
                                        width: 24,
                                        height: 24
                                    })
                                })
                            })]
                        }), (0, r.jsx)(n.M, {
                            children: e && (0, r.jsx)(a.E.aside, {
                                className: u().aside,
                                initial: {
                                    height: 0
                                },
                                animate: {
                                    height: "100vh"
                                },
                                exit: {
                                    height: 0,
                                    transition: {
                                        delay: .3,
                                        duration: .3
                                    }
                                },
                                children: (0, r.jsx)(a.E.div, {
                                    className: u().hamburger_menu,
                                    initial: "closed",
                                    animate: "open",
                                    exit: "closed",
                                    variants: j,
                                    children: (0, r.jsxs)(a.E.ul, {
                                        variants: p,
                                        children: [(0, r.jsx)("li", {
                                            onClick: t,
                                            className: u().hamburgerItem,
                                            children: (0, r.jsx)(h(), {
                                                href: "/#honorary",
                                                children: "Toshies"
                                            })
                                        }), (0, r.jsx)("li", {
                                            onClick: t,
                                            className: u().hamburgerItem,
                                            children: (0, r.jsx)(h(), {
                                                href: "/#about",
                                                children: "Chuckchee's story"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: u().hamburgersocials,
                                            children: [(0, r.jsx)("a", {
                                                href: "https://twitter.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, r.jsx)(c(), {
                                                    src: g.Z,
                                                    alt: "Follow us on Twitter",
                                                    className: u().hamburgerSocialImage
                                                })
                                            }), (0, r.jsx)("a", {
                                                href: "https://discord.com/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, r.jsx)(c(), {
                                                    src: x.Z,
                                                    alt: "Join our Discord",
                                                    className: u().hamburgerSocialImage
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        6501: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function () {
                    return b
                },
                fetchIsOnAllowList: function () {
                    return f
                }
            });
            var r = s(5893),
                i = s(9008),
                a = s.n(i),
                n = s(5675),
                l = s.n(n),
                c = s(9837),
                o = s.n(c),
                h = s(1965),
                d = s(3478),
                u = s(7294),
                m = s(8945),
                g = {
                    src: "/_next/static/media/spinner.efa1a2cc.svg",
                    height: 24,
                    width: 24
                },
                x = s(1664),
                p = s.n(x),
                j = s(6018),
                A = s(725),
                _ = s.n(A);
            async function f(e) {
                try {
                    let t = await m.Z.get("https://thirdphase-api.onrender.com/api/allowlist/".concat(e));
                    if (400 === t.status) throw Error("Address not found in the endpoint");
                    if (200 !== t.status) throw Error("Failed to fetch isOnAllowList");
                    return t.data.isOnAllowList
                } catch (s) {
                    return {
                        error: s.message
                    }
                }
            }

            function b() {
                let {
                    width: e,
                    height: t
                } = (0, j.Z)(), [s, i] = u.useState(""), [n, c] = u.useState(null), [m, x] = u.useState(!1), [A, b] = u.useState(!1), [w, y] = u.useState(null), N = e => {
                    i(e.target.value), b(42 === e.target.value.length)
                }, v = async () => {
                    if (A) {
                        x(!0), y(null);
                        try {
                            let e = await f(s);
                            if (e.error) throw Error(e.error);
                            c(e), console.log(e), console.log(s)
                        } catch (t) {
                            y(t.message)
                        } finally {
                            x(!1), i("")
                        }
                    }
                };
                return (0, u.useEffect)(() => {
                    null !== n && i("")
                }, [n]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a(), {
                        children: [(0, r.jsx)("title", {
                            children: "Toshies — NFT Collection"
                        }), (0, r.jsx)("meta", {
                            name: "title",
                            content: "Toshies — NFT Collection"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "Introducing Toshies, the new NFT collection from artist Chuckchee, creator of the popular ALPACADABRAZ series."
                        }), (0, r.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, r.jsx)("meta", {
                            property: "og:url",
                            content: "https://toshies.xyz/"
                        }), (0, r.jsx)("meta", {
                            property: "og:title",
                            content: "Toshies — NFT Collection by Chuckchee"
                        }), (0, r.jsx)("meta", {
                            property: "og:description",
                            content: "Introducing Toshies, the new NFT collection from artist Chuckchee, creator of the popular ALPACADABRAZ series."
                        }), (0, r.jsx)("meta", {
                            property: "og:image",
                            content: "https://toshies.xyz/toshies_meta.png"
                        }), (0, r.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), (0, r.jsx)("meta", {
                            property: "twitter:url",
                            content: "https://toshies.xyz"
                        }), (0, r.jsx)("meta", {
                            property: "twitter:title",
                            content: "Toshies — NFT Collection by Chuckchee"
                        }), (0, r.jsx)("meta", {
                            property: "twitter:description",
                            content: "Introducing Toshies, the new NFT collection from artist Chuckchee, creator of the popular ALPACADABRAZ series."
                        }), (0, r.jsx)("meta", {
                            property: "twitter:image",
                            content: "https://toshies.xyz/toshies_meta.png"
                        }), (0, r.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }), (0, r.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }), (0, r.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), (0, r.jsx)("link", {
                            rel: "mask-icon",
                            href: "/safari-pinned-tab.svg",
                            color: "#da88f9"
                        }), (0, r.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#da532c"
                        }), (0, r.jsx)("meta", {
                            name: "theme-color",
                            content: "#2843B9"
                        })]
                    }), (0, r.jsxs)(d.E.main, {
                        className: o().main,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 50,
                            duration: .6,
                            delay: .3
                        },
                        children: [(0, r.jsx)(h.Z, {}), (0, r.jsxs)("div", {
                            style: {
                                marginTop: "120px"
                            },
                            children: [(0, r.jsx)("h1", {
                                children: "Allowlist Checker"
                            }), (0, r.jsxs)("section", {
                                className: o().container,
                                children: [(0, r.jsxs)("div", {
                                    className: o().card,
                                    children: [(0, r.jsxs)("div", {
                                        className: o().form,
                                        children: [(0, r.jsxs)("label", {
                                            children: [(0, r.jsx)("h4", {
                                                children: "Enter Your ETH Address:"
                                            }), (0, r.jsx)("input", {
                                                type: "text",
                                                value: s,
                                                onChange: N,
                                                className: o().input,
                                                placeholder: "0x..."
                                            })]
                                        }), (0, r.jsx)("button", {
                                            onClick: v,
                                            disabled: !A,
                                            className: o().fetch,
                                            children: "Check my ETH address"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: o().result,
                                        children: [m && (0, r.jsx)("div", {
                                            children: (0, r.jsx)(l(), {
                                                src: g,
                                                alt: "Loading..."
                                            })
                                        }), null !== n ? n ? (0, r.jsxs)("div", {
                                            className: o().resultTextSuccess,
                                            children: [(0, r.jsxs)("h5", {
                                                children: [(0, r.jsx)("span", {
                                                    children: "Congratulations!"
                                                }), (0, r.jsx)("br", {}), "You are on the list"]
                                            }), (0, r.jsx)(_(), {
                                                width: e,
                                                height: t
                                            })]
                                        }) : (0, r.jsx)("div", {
                                            className: o().resultText,
                                            children: (0, r.jsxs)("h5", {
                                                children: ["You are currently ", (0, r.jsx)("span", {
                                                    style: {
                                                        color: "red",
                                                        textDecoration: "underline"
                                                    },
                                                    children: "NOT"
                                                }), " on the allowlist - please check options below how you can secure your spot \uD83D\uDC47"]
                                            })
                                        }) : null]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: o().information,
                                    children: [(0, r.jsxs)("h4", {
                                        children: ["The Early Toshie allowlist raffle has generated significant interest, with over ", (0, r.jsx)("span", {
                                            style: {
                                                color: "#FFA100"
                                            },
                                            children: "65,000"
                                        }), " participants. Here are three ways to secure a spot on the allowlist:"]
                                    }), (0, r.jsxs)("ul", {
                                        children: [(0, r.jsx)("li", {
                                            children: (0, r.jsxs)("p", {
                                                children: [(0, r.jsx)("span", {
                                                    children: "1."
                                                }), " Register for the allowlist raffle at ", (0, r.jsx)(p(), {
                                                    href: "/whitelist",
                                                    children: "https://toshies.net/allowlist"
                                                }), ". The results will be announced on January 22nd at 4PM CET."]
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsxs)("p", {
                                                children: [(0, r.jsx)("span", {
                                                    children: "2."
                                                }), " Increase your chances by being active on Twitter, using the hashtag #Toooth, creating posts and threads, sharing memes and fan art, and engaging with our content."]
                                            })
                                        }), (0, r.jsx)("li", {
                                            children: (0, r.jsxs)("p", {
                                                children: [(0, r.jsx)("span", {
                                                    children: "3."
                                                }), " ", (0, r.jsx)("a", {
                                                    href: "https://discord.gg/toshies",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Join our Discord community"
                                                }), " and be one of the early members to receive the Early Toshie role, as we randomly give out allowlist addresses to members who join early and engage with the community and announcements."]
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {})]
                        })]
                    })]
                })
            }
        },
        9837: function (e) {
            e.exports = {
                container: "Checker_container__UQDf7",
                card: "Checker_card__HsB89",
                form: "Checker_form__668UZ",
                input: "Checker_input__lbIwb",
                result: "Checker_result__2Sl1b",
                resultTextSuccess: "Checker_resultTextSuccess__L63Z9",
                resultText: "Checker_resultText__KuL7U",
                address: "Checker_address__1cp_L",
                fetch: "Checker_fetch__pVH4U",
                information: "Checker_information__FoJSg",
                fullWidth: "Checker_fullWidth__DSUra"
            }
        },
        3302: function (e) {
            e.exports = {
                navbar: "Navbar_navbar__VBDwK",
                container: "Navbar_container__TmvYv",
                brand: "Navbar_brand__i7DaD",
                logo: "Navbar_logo__FI2xK",
                right: "Navbar_right__QLVSo",
                menu: "Navbar_menu__eWF6S",
                mintButton: "Navbar_mintButton__VUCi1",
                menuItem: "Navbar_menuItem__wImv_",
                socials: "Navbar_socials__dk3ZR",
                socialImage: "Navbar_socialImage__SOP9D",
                hamburger: "Navbar_hamburger__dVhv5",
                hamburger_menu: "Navbar_hamburger_menu__TB8au",
                hamburgerItem: "Navbar_hamburgerItem__rnqqp",
                hamburgermintButton: "Navbar_hamburgermintButton__gY3QX",
                hamburgersocials: "Navbar_hamburgersocials__ubfnR",
                hamburgerSocialImage: "Navbar_hamburgerSocialImage__EfYuy"
            }
        }
    },
    function (e) {
        e.O(0, [451, 623, 774, 888, 179], function () {
            return e(e.s = 9017)
        }), _N_E = e.O()
    }
]);