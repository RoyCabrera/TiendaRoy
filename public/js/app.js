/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext;

    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || F, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return K(a, "nextSibling")
        },
        prev: function(a) {
            return K(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = e || a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function N(a) {
        return a
    }

    function O(a) {
        throw a
    }

    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var R = r.Deferred();
    r.fn.ready = function(a) {
        return R.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) T(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
    }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = $(c)
                } catch (e) {}
                X.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function(a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function(a, b) {
            X.remove(a, b)
        },
        _data: function(a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function(a, b) {
            W.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                X.set(this, a)
            }) : T(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;
                    if (c = _(f, a), void 0 !== c) return c
                } else this.each(function() {
                    X.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                X.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    W.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        ea = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
    }

    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0)
        },
        hide: function() {
            return ia(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }

    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
            k = 0;
            while (f = g[k++]) la.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() {
        return !0
    }

    function wa() {
        return !1
    }

    function xa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(L) || [""], j = b.length;
                while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
    }

    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0)
        },
        remove: function(a) {
            return Ka(this, a)
        },
        text: function(a) {
            return T(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--)
            if (a = Ua[c] + b, a in Va) return a
    }

    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b
    }

    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                    return $a(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya)
    }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e)
    }
    r.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
    }

    function fb() {
        return a.setTimeout(function() {
            ab = void 0
        }), ab = r.now()
    }

    function gb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
                p || ia([a]), W.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }
    r.Animation = r.extend(kb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
            },
            prefilters: [ib],
            prefilter: function(a, b) {
                b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
            }, d
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(da).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), r.fx.start()
        }, r.fx.interval = 13, r.fx.start = function() {
            bb || (bb = !0, eb())
        }, r.fx.stop = function() {
            bb = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
        }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ")
    }

    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, qb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, qb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Rb = {
            0: 200,
            1223: 204
        },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || ra
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return T(this, function(a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.holdReady = function(a) {
        a ? r.readyWait++ : r.ready(!0)
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
});
/*!
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.5
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

;
(function($, window, document, undefined) {

  /* Defaults
  ================================================== */
  var pluginName = 'sharrre',
    defaults = {
      className: 'sharrre',
      share: {
        googlePlus: false,
        facebook: false,
        twitter: false,
        digg: false,
        delicious: false,
        stumbleupon: false,
        linkedin: false,
        pinterest: false
      },
      shareTotal: 0,
      template: '',
      title: '',
      url: document.location.href,
      text: document.title,
      urlCurl: 'sharrre.php', //PHP script for google plus...
      count: {}, //counter by social network
      total: 0, //total of sharing
      shorterTotal: true, //show total by k or M when number is to big
      enableHover: true, //disable if you want to personalize hover event with callback
      enableCounter: true, //disable if you just want use buttons
      enableTracking: false, //tracking with google analitycs
      hover: function() {}, //personalize hover event with this callback function
      hide: function() {}, //personalize hide event with this callback function
      click: function() {}, //personalize click event with this callback function
      render: function() {}, //personalize render event with this callback function
      buttons: { //settings for buttons
        googlePlus: { //http://www.google.com/webmasters/+1/button/
          url: '', //if you need to personnalize button url
          urlCount: false, //if you want to use personnalize button url on global counter
          size: 'medium',
          lang: 'en-US',
          annotation: ''
        },
        facebook: { //http://developers.facebook.com/docs/reference/plugins/like/
          url: '', //if you need to personalize url button
          urlCount: false, //if you want to use personnalize button url on global counter
          action: 'like',
          layout: 'button_count',
          width: '',
          send: 'false',
          faces: 'false',
          colorscheme: '',
          font: '',
          lang: 'en_US'
        },
        twitter: { //http://twitter.com/about/resources/tweetbutton
          url: '', //if you need to personalize url button
          urlCount: false, //if you want to use personnalize button url on global counter
          count: 'horizontal',
          hashtags: '',
          via: '',
          related: '',
          lang: 'en'
        },
        digg: { //http://about.digg.com/downloads/button/smart
          url: '', //if you need to personalize url button
          urlCount: false, //if you want to use personnalize button url on global counter
          type: 'DiggCompact'
        },
        delicious: {
          url: '', //if you need to personalize url button
          urlCount: false, //if you want to use personnalize button url on global counter
          size: 'medium' //medium or tall
        },
        stumbleupon: { //http://www.stumbleupon.com/badges/
          url: '', //if you need to personalize url button
          urlCount: false, //if you want to use personnalize button url on global counter
          layout: '1'
        },
        linkedin: { //http://developer.linkedin.com/plugins/share-button
          url: '', //if you need to personalize url button
          urlCount: false, //if you want to use personnalize button url on global counter
          counter: ''
        },
        pinterest: { //http://pinterest.com/about/goodies/
          url: '', //if you need to personalize url button
          media: '',
          description: '',
          layout: 'horizontal'
        }
      }
    },
    /* Json URL to get count number
    ================================================== */
    urlJson = {
      googlePlus: "",

      //new FQL method by Sire
      facebook: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
      //old method facebook: "http://graph.facebook.com/?id={url}&callback=?",
      //facebook : "http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls={url}&format=json"

      twitter: "http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
      digg: "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
      delicious: 'http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?',
      //stumbleupon: "http://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}&format=jsonp&callback=?",
      stumbleupon: "",
      linkedin: "http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
      pinterest: "http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"
    },
    /* Load share buttons asynchronously
    ================================================== */
    loadButton = {
      googlePlus: function(self) {
        var sett = self.options.buttons.googlePlus;
        //$(self.element).find('.buttons').append('<div class="button googleplus"><g:plusone size="'+self.options.buttons.googlePlus.size+'" href="'+self.options.url+'"></g:plusone></div>');
        $(self.element).find('.buttons').append('<div class="button googleplus"><div class="g-plusone" data-size="' + sett.size + '" data-href="' + (sett.url !== '' ? sett.url : self.options.url) + '" data-annotation="' + sett.annotation + '"></div></div>');
        window.___gcfg = {
          lang: self.options.buttons.googlePlus.lang
        };
        var loading = 0;
        if (typeof gapi === 'undefined' && loading == 0) {
          loading = 1;
          (function() {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = '//apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
          })();
        } else {
          gapi.plusone.go();
        }
      },
      facebook: function(self) {
        var sett = self.options.buttons.facebook;
        $(self.element).find('.buttons').append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' + (sett.url !== '' ? sett.url : self.options.url) + '" data-send="' + sett.send + '" data-layout="' + sett.layout + '" data-width="' + sett.width + '" data-show-faces="' + sett.faces + '" data-action="' + sett.action + '" data-colorscheme="' + sett.colorscheme + '" data-font="' + sett.font + '" data-via="' + sett.via + '"></div></div>');
        var loading = 0;
        if (typeof FB === 'undefined' && loading == 0) {
          loading = 1;
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/' + sett.lang + '/all.js#xfbml=1';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        } else {
          FB.XFBML.parse();
        }
      },
      twitter: function(self) {
        var sett = self.options.buttons.twitter;
        $(self.element).find('.buttons').append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + (sett.url !== '' ? sett.url : self.options.url) + '" data-count="' + sett.count + '" data-text="' + self.options.text + '" data-via="' + sett.via + '" data-hashtags="' + sett.hashtags + '" data-related="' + sett.related + '" data-lang="' + sett.lang + '">Tweet</a></div>');
        var loading = 0;
        if (typeof twttr === 'undefined' && loading == 0) {
          loading = 1;
          (function() {
            var twitterScriptTag = document.createElement('script');
            twitterScriptTag.type = 'text/javascript';
            twitterScriptTag.async = true;
            twitterScriptTag.src = '//platform.twitter.com/widgets.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(twitterScriptTag, s);
          })();
        } else {
          $.ajax({
            url: '//platform.twitter.com/widgets.js',
            dataType: 'script',
            cache: true
          }); //http://stackoverflow.com/q/6536108
        }
      },
      digg: function(self) {
        var sett = self.options.buttons.digg;
        $(self.element).find('.buttons').append('<div class="button digg"><a class="DiggThisButton ' + sett.type + '" rel="nofollow external" href="http://digg.com/submit?url=' + encodeURIComponent((sett.url !== '' ? sett.url : self.options.url)) + '"></a></div>');
        var loading = 0;
        if (typeof __DBW === 'undefined' && loading == 0) {
          loading = 1;
          (function() {
            var s = document.createElement('SCRIPT'),
              s1 = document.getElementsByTagName('SCRIPT')[0];
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//widgets.digg.com/buttons.js';
            s1.parentNode.insertBefore(s, s1);
          })();
        }
      },
      delicious: function(self) {
        if (self.options.buttons.delicious.size == 'tall') { //tall
          var css = 'width:50px;',
            cssCount = 'height:35px;width:50px;font-size:15px;line-height:35px;',
            cssShare = 'height:18px;line-height:18px;margin-top:3px;';
        } else { //medium
          var css = 'width:93px;',
            cssCount = 'float:right;padding:0 3px;height:20px;width:26px;line-height:20px;',
            cssShare = 'float:left;height:20px;line-height:20px;';
        }
        var count = self.shorterTotal(self.options.count.delicious);
        if (typeof count === "undefined") {
          count = 0;
        }
        $(self.element).find('.buttons').append(
          '<div class="button delicious"><div style="' + css + 'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;">' +
          '<div style="' + cssCount + 'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' + count + '</div>' +
          '<div style="' + cssShare + 'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;">' +
          '<img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>');

        $(self.element).find('.delicious').on('click', function() {
          self.openPopup('delicious');
        });
      },
      stumbleupon: function(self) {
        var sett = self.options.buttons.stumbleupon;
        $(self.element).find('.buttons').append('<div class="button stumbleupon"><su:badge layout="' + sett.layout + '" location="' + (sett.url !== '' ? sett.url : self.options.url) + '"></su:badge></div>');
        var loading = 0;
        if (typeof STMBLPN === 'undefined' && loading == 0) {
          loading = 1;
          (function() {
            var li = document.createElement('script');
            li.type = 'text/javascript';
            li.async = true;
            li.src = '//platform.stumbleupon.com/1/widgets.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(li, s);
          })();
          s = window.setTimeout(function() {
            if (typeof STMBLPN !== 'undefined') {
              STMBLPN.processWidgets();
              clearInterval(s);
            }
          }, 500);
        } else {
          STMBLPN.processWidgets();
        }
      },
      linkedin: function(self) {
        var sett = self.options.buttons.linkedin;
        $(self.element).find('.buttons').append('<div class="button linkedin"><script type="in/share" data-url="' + (sett.url !== '' ? sett.url : self.options.url) + '" data-counter="' + sett.counter + '"></script></div>');
        var loading = 0;
        if (typeof window.IN === 'undefined' && loading == 0) {
          loading = 1;
          (function() {
            var li = document.createElement('script');
            li.type = 'text/javascript';
            li.async = true;
            li.src = '//platform.linkedin.com/in.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(li, s);
          })();
        } else {
          window.IN.init();
        }
      },
      pinterest: function(self) {
        var sett = self.options.buttons.pinterest;
        $(self.element).find('.buttons').append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url=' + (sett.url !== '' ? sett.url : self.options.url) + '&media=' + sett.media + '&description=' + sett.description + '" class="pin-it-button" count-layout="' + sett.layout + '">Pin It</a></div>');

        (function() {
          var li = document.createElement('script');
          li.type = 'text/javascript';
          li.async = true;
          li.src = '//assets.pinterest.com/js/pinit.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(li, s);
        })();
      }
    },
    /* Tracking for Google Analytics
    ================================================== */
    tracking = {
      googlePlus: function() {},
      facebook: function() {
        //console.log('facebook');
        fb = window.setInterval(function() {
          if (typeof FB !== 'undefined') {
            FB.Event.subscribe('edge.create', function(targetUrl) {
              _gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
            });
            FB.Event.subscribe('edge.remove', function(targetUrl) {
              _gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
            });
            FB.Event.subscribe('message.send', function(targetUrl) {
              _gaq.push(['_trackSocial', 'facebook', 'send', targetUrl]);
            });
            //console.log('ok');
            clearInterval(fb);
          }
        }, 1000);
      },
      twitter: function() {
        //console.log('twitter');
        tw = window.setInterval(function() {
          if (typeof twttr !== 'undefined') {
            twttr.events.bind('tweet', function(event) {
              if (event) {
                _gaq.push(['_trackSocial', 'twitter', 'tweet']);
              }
            });
            //console.log('ok');
            clearInterval(tw);
          }
        }, 1000);
      },
      digg: function() {
        //if somenone find a solution, mail me !
        /*$(this.element).find('.digg').on('click', function(){
          _gaq.push(['_trackSocial', 'digg', 'add']);
        });*/
      },
      delicious: function() {},
      stumbleupon: function() {},
      linkedin: function() {
        function LinkedInShare() {
          _gaq.push(['_trackSocial', 'linkedin', 'share']);
        }
      },
      pinterest: function() {
        //if somenone find a solution, mail me !
      }
    },
    /* Popup for each social network
    ================================================== */
    popup = {
      googlePlus: function(opt) {
        window.open("https://plus.google.com/share?hl=" + opt.buttons.googlePlus.lang + "&url=" + encodeURIComponent((opt.buttons.googlePlus.url !== '' ? opt.buttons.googlePlus.url : opt.url)), "", "toolbar=0, status=0, width=900, height=500");
      },
      facebook: function(opt) {
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent((opt.buttons.facebook.url !== '' ? opt.buttons.facebook.url : opt.url)) + "&t=" + opt.text + "", "", "toolbar=0, status=0, width=900, height=500");
      },
      twitter: function(opt) {
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(opt.text) + "&url=" + encodeURIComponent((opt.buttons.twitter.url !== '' ? opt.buttons.twitter.url : opt.url)) + (opt.buttons.twitter.via !== '' ? '&via=' + opt.buttons.twitter.via : ''), "", "toolbar=0, status=0, width=650, height=360");
      },
      digg: function(opt) {
        window.open("http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent((opt.buttons.digg.url !== '' ? opt.buttons.digg.url : opt.url)) + "&title=" + opt.text + "&related=true&style=true", "", "toolbar=0, status=0, width=650, height=360");
      },
      delicious: function(opt) {
        window.open('http://www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURIComponent((opt.buttons.delicious.url !== '' ? opt.buttons.delicious.url : opt.url)) + '&title=' + opt.text, 'delicious', 'toolbar=no,width=550,height=550');
      },
      stumbleupon: function(opt) {
        window.open('http://www.stumbleupon.com/badge/?url=' + encodeURIComponent((opt.buttons.stumbleupon.url !== '' ? opt.buttons.stumbleupon.url : opt.url)), 'stumbleupon', 'toolbar=no,width=550,height=550');
      },
      linkedin: function(opt) {
        window.open('https://www.linkedin.com/cws/share?url=' + encodeURIComponent((opt.buttons.linkedin.url !== '' ? opt.buttons.linkedin.url : opt.url)) + '&token=&isFramed=true', 'linkedin', 'toolbar=no,width=550,height=550');
      },
      pinterest: function(opt) {
        window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent((opt.buttons.pinterest.url !== '' ? opt.buttons.pinterest.url : opt.url)) + '&media=' + encodeURIComponent(opt.buttons.pinterest.media) + '&description=' + opt.buttons.pinterest.description, 'pinterest', 'toolbar=no,width=700,height=300');
      }
    };

  /* Plugin constructor
  ================================================== */
  function Plugin(element, options) {
    this.element = element;

    this.options = $.extend(true, {}, defaults, options);
    this.options.share = options.share; //simple solution to allow order of buttons

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  };

  /* Initialization method
  ================================================== */
  Plugin.prototype.init = function() {
    var self = this;
    if (this.options.urlCurl !== '') {
      urlJson.googlePlus = this.options.urlCurl + '?url={url}&type=googlePlus'; // PHP script for GooglePlus...
      urlJson.stumbleupon = this.options.urlCurl + '?url={url}&type=stumbleupon'; // PHP script for Stumbleupon...
    }
    $(this.element).addClass(this.options.className); //add class

    //HTML5 Custom data
    if (typeof $(this.element).data('title') !== 'undefined') {
      this.options.title = $(this.element).attr('data-title');
    }
    if (typeof $(this.element).data('url') !== 'undefined') {
      this.options.url = $(this.element).data('url');
    }
    if (typeof $(this.element).data('text') !== 'undefined') {
      this.options.text = $(this.element).data('text');
    }

    //how many social website have been selected
    $.each(this.options.share, function(name, val) {
      if (val === true) {
        self.options.shareTotal++;
      }
    });

    if (self.options.enableCounter === true) { //if for some reason you don't need counter
      //get count of social share that have been selected
      $.each(this.options.share, function(name, val) {
        if (val === true) {
          //self.getSocialJson(name);
          try {
            self.getSocialJson(name);
          } catch (e) {}
        }
      });
    } else if (self.options.template !== '') { //for personalized button (with template)
      this.options.render(this, this.options);
    } else { // if you want to use official button like example 3 or 5
      this.loadButtons();
    }

    //add hover event
    $(this.element).hover(function() {
      //load social button if enable and 1 time
      if ($(this).find('.buttons').length === 0 && self.options.enableHover === true) {
        self.loadButtons();
      }
      self.options.hover(self, self.options);
    }, function() {
      self.options.hide(self, self.options);
    });

    //click event
    $(this.element).click(function() {
      self.options.click(self, self.options);
      return false;
    });
  };

  /* loadButtons methode
  ================================================== */
  Plugin.prototype.loadButtons = function() {
    var self = this;
    $(this.element).append('<div class="buttons"></div>');
    $.each(self.options.share, function(name, val) {
      if (val == true) {
        loadButton[name](self);
        if (self.options.enableTracking === true) { //add tracking
          tracking[name]();
        }
      }
    });
  };

  /* getSocialJson methode
  ================================================== */
  Plugin.prototype.getSocialJson = function(name) {
    var self = this,
      count = 0,
      url = urlJson[name].replace('{url}', encodeURIComponent(this.options.url));
    if (this.options.buttons[name].urlCount === true && this.options.buttons[name].url !== '') {
      url = urlJson[name].replace('{url}', this.options.buttons[name].url);
    }
    //console.log('name : ' + name + ' - url : '+url); //debug
    if (url != '' && self.options.urlCurl !== '') { //urlCurl = '' if you don't want to used PHP script but used social button
      $.getJSON(url, function(json) {
          if (typeof json.count !== "undefined") { //GooglePlus, Stumbleupon, Twitter, Pinterest and Digg
            var temp = json.count + '';
            temp = temp.replace('\u00c2\u00a0', ''); //remove google plus special chars
            count += parseInt(temp, 10);
          }
          //get the FB total count (shares, likes and more)
          else if (json.data && json.data.length > 0 && typeof json.data[0].total_count !== "undefined") { //Facebook total count
            count += parseInt(json.data[0].total_count, 10);
          } else if (typeof json[0] !== "undefined") { //Delicious
            count += parseInt(json[0].total_posts, 10);
          } else if (typeof json[0] !== "undefined") { //Stumbleupon
          }
          self.options.count[name] = count;
          self.options.total += count;
          self.renderer();
          self.rendererPerso();
          //console.log(json); //debug
        })
        .error(function() {
          self.options.count[name] = 0;
          self.rendererPerso();
        });
    } else {
      self.renderer();
      self.options.count[name] = 0;
      self.rendererPerso();
    }
  };

  /* launch render methode
  ================================================== */
  Plugin.prototype.rendererPerso = function() {
    //check if this is the last social website to launch render
    var shareCount = 0;
    for (e in this.options.count) {
      shareCount++;
    }
    if (shareCount === this.options.shareTotal) {
      this.options.render(this, this.options);
    }
  };

  /* render methode
  ================================================== */
  Plugin.prototype.renderer = function() {
    var total = this.options.total,
      template = this.options.template;
    if (this.options.shorterTotal === true) { //format number like 1.2k or 5M
      total = this.shorterTotal(total);
    }

    if (template !== '') { //if there is a template
      template = template.replace('{total}', total);
      $(this.element).html(template);
    } else { //template by defaults
      $(this.element).html(
        '<div class="box"><a class="count" href="#">' + total + '</a>' +
        (this.options.title !== '' ? '<a class="share" href="#">' + this.options.title + '</a>' : '') +
        '</div>'
      );
    }
  };

  /* format total numbers like 1.2k or 5M
  ================================================== */
  Plugin.prototype.shorterTotal = function(num) {
    if (num >= 1e6) {
      num = (num / 1e6).toFixed(2) + "M"
    } else if (num >= 1e3) {
      num = (num / 1e3).toFixed(1) + "k"
    }
    return num;
  };

  /* Methode for open popup
  ================================================== */
  Plugin.prototype.openPopup = function(site) {
    popup[site](this.options); //open
    if (this.options.enableTracking === true) { //tracking!
      var tracking = {
        googlePlus: {
          site: 'Google',
          action: '+1'
        },
        facebook: {
          site: 'facebook',
          action: 'like'
        },
        twitter: {
          site: 'twitter',
          action: 'tweet'
        },
        digg: {
          site: 'digg',
          action: 'add'
        },
        delicious: {
          site: 'delicious',
          action: 'add'
        },
        stumbleupon: {
          site: 'stumbleupon',
          action: 'add'
        },
        linkedin: {
          site: 'linkedin',
          action: 'share'
        },
        pinterest: {
          site: 'pinterest',
          action: 'pin'
        }
      };
      _gaq.push(['_trackSocial', tracking[site].site, tracking[site].action]);
    }
  };

  /* Methode for add +1 to a counter
  ================================================== */
  Plugin.prototype.simulateClick = function() {
    var html = $(this.element).html();
    $(this.element).html(html.replace(this.options.total, this.options.total + 1));
  };

  /* Methode for add +1 to a counter
  ================================================== */
  Plugin.prototype.update = function(url, text) {
    if (url !== '') {
      this.options.url = url;
    }
    if (text !== '') {
      this.options.text = text;
    }
  };

  /* A really lightweight plugin wrapper around the constructor, preventing against multiple instantiations
  ================================================== */
  $.fn[pluginName] = function(options) {
    var args = arguments;
    if (options === undefined || typeof options === 'object') {
      return this.each(function() {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      return this.each(function() {
        var instance = $.data(this, 'plugin_' + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === 'function') {
          instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });
    }
  };
})(jQuery, window, document);
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
(function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.4',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass);

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,
                    closeOnHover: true,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: 'toast-close-button',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false,
                    progressClass: 'toast-progress',
                    rtl: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null) {
                        source = '';
                    }

                    return source
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setRTL();
                    setSequence();
                    setAria();
                }

                function setAria() {
                    var ariaValue = '';
                    switch (map.iconClass) {
                        case 'toast-success':
                        case 'toast-info':
                            ariaValue =  'polite';
                            break;
                        default:
                            ariaValue = 'assertive';
                    }
                    $toastElement.attr('aria-live', ariaValue);
                }

                function handleEvents() {
                    if (options.closeOnHover) {
                        $toastElement.hover(stickAround, delayedHideToast);
                    }

                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }

                            if (options.onCloseClick) {
                                options.onCloseClick(event);
                            }

                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        var suffix = map.title;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.title);
                        }
                        $titleElement.append(suffix).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        var suffix = map.message;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.message);
                        }
                        $messageElement.append(suffix).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass(options.closeClass).attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass(options.progressClass);
                        $toastElement.prepend($progressElement);
                    }
                }

                function setRTL() {
                    if (options.rtl) {
                        $toastElement.addClass('rtl');
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            clearTimeout(intervalId);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
    }

    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var f = a.commonAncestorContainer;
        if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
        var l = s(e);
        return l.host ? d(l.host, t) : d(e, s(t).host)
    }

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement,
                r = window.document.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, 'top'),
            n = a(t, 'left'),
            r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
    }

    function l(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }

    function m(e, t, o, i) {
        return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function h() {
        var e = window.document.body,
            t = window.document.documentElement,
            o = ie() && window.getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }

    function c(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function g(e) {
        var o = {};
        if (ie()) try {
            o = e.getBoundingClientRect();
            var i = a(e, 'top'),
                n = a(e, 'left');
            o.top += i, o.left += n, o.bottom += i, o.right += n
        } catch (e) {} else o = e.getBoundingClientRect();
        var r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            p = 'HTML' === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            f = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (f || m) {
            var g = t(e);
            f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m
        }
        return c(r)
    }

    function u(e, o) {
        var i = ie(),
            r = 'HTML' === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            l = +a.borderTopWidth.split('px')[0],
            m = +a.borderLeftWidth.split('px')[0],
            h = c({
                top: p.top - s.top - l,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = +a.marginTop.split('px')[0],
                b = +a.marginLeft.split('px')[0];
            h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h
    }

    function b(e) {
        var t = window.document.documentElement,
            o = u(e, t),
            i = _(t.clientWidth, window.innerWidth || 0),
            n = _(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, 'left'),
            s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return c(s)
    }

    function y(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }

    function w(e, t, i, r) {
        var p = {
                top: 0,
                left: 0
            },
            s = d(e, t);
        if ('viewport' === r) p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var f = u(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var l = h(),
                    m = l.height,
                    c = l.width;
                p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left
            } else p = f
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
    }

    function v(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function E(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = w(o, i, r, n),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return se({
                    key: e
                }, s[e], {
                    area: v(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight
            }),
            f = 0 < a.length ? a[0].key : d[0].key,
            l = e.split('-')[1];
        return f + (l ? '-' + l : '')
    }

    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }

    function O(e) {
        var t = window.getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + o
            };
        return n
    }

    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e),
            n = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
    }

    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function C(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var i = T(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }

    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function(t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function(e) {
            var o = e.name,
                i = e.enabled;
            return i && o === t
        })
    }

    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r]) return r
        }
        return null
    }

    function D() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || H(n(p.parentNode), t, o, i), i.push(p)
    }

    function P(e, t, o, i) {
        o.updateBound = i, window.addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function M(e, t) {
        return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }

    function R(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function U(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
        })
    }

    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function F(e, t, o) {
        var i = T(e, function(e) {
                var o = e.name;
                return o === t
            }),
            n = !!i && e.some(function(e) {
                return e.name === o && e.enabled && e.order < i.order
            });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }

    function j(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i
    }

    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = c(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function G(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(i),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(T(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return q(e, n, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
            })
        }), n
    }
    for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function(e) {
            return X.some(function(t) {
                return -1 < (e || '').toString().indexOf(t)
            })
        }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break
        }
    var i, te = J && Q(window.MutationObserver),
        oe = te ? function(e) {
            var t = !1,
                o = 0,
                i = document.createElement('span'),
                n = new MutationObserver(function() {
                    e(), t = !1
                });
            return n.observe(i, {
                    attributes: !0
                }),
                function() {
                    t || (t = !0, i.setAttribute('x-index', o), ++o)
                }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, $))
            }
        },
        ie = function() {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
        },
        ne = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        re = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        pe = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        se = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        ae = de.slice(3),
        fe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        le = function() {
            function t(o, i) {
                var n = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ne(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return se({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return re(t, [{
                key: 'update',
                value: function() {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return D.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return A.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return I.call(this)
                }
            }]), t
        }();
    return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets,
                            r = n.reference,
                            p = n.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            f = {
                                start: pe({}, d, r[d]),
                                end: pe({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = se({}, p, f[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var o, i = t.offset,
                        n = e.placement,
                        r = e.offsets,
                        p = r.popper,
                        s = r.reference,
                        d = n.split('-')[0];
                    return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority,
                        p = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var o = p[e];
                                return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = p[o];
                                return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
                            }
                        };
                    return n.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = se({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        i = t.reference,
                        n = e.placement.split('-')[0],
                        r = V,
                        p = -1 !== ['top', 'bottom'].indexOf(n),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var o = t.element;
                    if ('string' == typeof o) {
                        if (o = e.instance.popper.querySelector(o), !o) return e;
                    } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var i = e.placement.split('-')[0],
                        n = e.offsets,
                        r = n.popper,
                        p = n.reference,
                        s = -1 !== ['left', 'right'].indexOf(i),
                        d = s ? 'height' : 'width',
                        a = s ? 'top' : 'left',
                        f = s ? 'left' : 'top',
                        l = s ? 'bottom' : 'right',
                        m = O(o)[d];
                    p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                    var h = p[a] + p[d] / 2 - m / 2,
                        g = h - c(e.offsets.popper)[a];
                    return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split('-')[0],
                        n = L(i),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case fe.FLIP:
                            p = [i, n];
                            break;
                        case fe.CLOCKWISE:
                            p = K(i);
                            break;
                        case fe.COUNTERCLOCKWISE:
                            p = K(i, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split('-')[0], n = L(i);
                        var a = e.offsets.popper,
                            f = e.offsets.reference,
                            l = V,
                            m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
                            h = l(a.left) < l(o.left),
                            c = l(a.right) > l(o.right),
                            g = l(a.top) < l(o.top),
                            u = l(a.bottom) > l(o.bottom),
                            b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                            y = -1 !== ['top', 'bottom'].indexOf(i),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        r = i.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = T(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        i = t.y,
                        n = e.offsets.popper,
                        p = T(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                        f = r(e.instance.popper),
                        l = g(f),
                        m = {
                            position: n.position
                        },
                        h = {
                            left: V(n.left),
                            top: V(n.top),
                            bottom: V(n.bottom),
                            right: V(n.right)
                        },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        u = 'right' === i ? 'left' : 'right',
                        b = B('transform');
                    if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1,
                            w = 'right' == u ? -1 : 1;
                        m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e
                },
                onLoad: function(e, t, o, i, n) {
                    var r = x(n, t, e),
                        p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), U(t, {
                        position: 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, le
});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["jquery","popper.js"],e):e(t.jQuery,t.Popper)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}t=t&&t.hasOwnProperty("default")?t.default:t,e=e&&e.hasOwnProperty("default")?e.default:e;var s,a,l,c,h,u,d,f,p,m,g,_,v,y,E,b,C,I,T,A,S,w,D,N,O,k,$,j,R,L,P,x,F,M,Q,H,U,G,W,B,K,V,Y,q,z,X,Z,J,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,dt,ft,pt,mt,gt,_t,vt,yt,Et,bt,Ct,It,Tt,At,St,wt,Dt,Nt,Ot,kt,$t,jt,Rt,Lt,Pt,xt,Ft,Mt,Qt,Ht,Ut,Gt,Wt,Bt,Kt,Vt,Yt,qt,zt,Xt,Zt,Jt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,de,fe,pe,me,ge,_e,ve,ye,Ee,be,Ce,Ie,Te,Ae,Se,we,De,Ne,Oe,ke,$e,je,Re,Le,Pe,xe,Fe,Me,Qe,He,Ue,Ge,We,Be,Ke,Ve,Ye,qe,ze,Xe,Ze,Je,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,dn,fn,pn,mn,gn,_n,vn,yn,En,bn,Cn,In,Tn,An,Sn,wn,Dn,Nn,On,kn,$n,jn,Rn,Ln,Pn,xn,Fn,Mn,Qn,Hn,Un,Gn,Wn,Bn,Kn,Vn,Yn,qn,zn,Xn,Zn,Jn,ti,ei,ni,ii,ri,oi,si,ai,li,ci,hi,ui,di,fi,pi,mi,gi,_i,vi,yi,Ei,bi,Ci,Ii,Ti,Ai,Si,wi,Di,Ni,Oi,ki,$i,ji,Ri,Li,Pi,xi,Fi,Mi,Qi,Hi,Ui,Gi,Wi,Bi,Ki,Vi,Yi,qi,zi,Xi,Zi,Ji,tr,er,nr,ir,rr,or,sr,ar,lr,cr,hr=function(t){var e=!1;function n(e){var n=this,r=!1;return t(this).one(i.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=n[r],s=e[r],a=s&&i.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(t),ur=(a="alert",c="."+(l="bs.alert"),h=(s=t).fn[a],u={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",f="fade",p="show",m=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){s.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=hr.getSelectorFromElement(t),n=!1;return e&&(n=s(e)[0]),n||(n=s(t).closest("."+d)[0]),n},e._triggerCloseEvent=function(t){var e=s.Event(u.CLOSE);return s(t).trigger(e),e},e._removeElement=function(t){var e=this;s(t).removeClass(p),hr.supportsTransitionEnd()&&s(t).hasClass(f)?s(t).one(hr.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){s(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=s(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),s(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',m._handleDismiss(new m)),s.fn[a]=m._jQueryInterface,s.fn[a].Constructor=m,s.fn[a].noConflict=function(){return s.fn[a]=h,m._jQueryInterface},_="button",y="."+(v="bs.button"),E=".data-api",b=(g=t).fn[_],C="active",I="btn",T="focus",A='[data-toggle^="button"]',S='[data-toggle="buttons"]',w="input",D=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:"focus"+y+E+" blur"+y+E},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(S)[0];if(n){var i=g(this._element).find(w)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(C))t=!1;else{var r=g(n).find(D)[0];r&&g(r).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(C),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(C)),t&&g(this._element).toggleClass(C)},e.dispose=function(){g.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=g(this).data(v);n||(n=new t(this),g(this).data(v,n)),"toggle"===e&&n[e]()})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),g(document).on(O.CLICK_DATA_API,A,function(t){t.preventDefault();var e=t.target;g(e).hasClass(I)||(e=g(e).closest(N)),k._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,A,function(t){var e=g(t.target).closest(N)[0];g(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),g.fn[_]=k._jQueryInterface,g.fn[_].Constructor=k,g.fn[_].noConflict=function(){return g.fn[_]=b,k._jQueryInterface},j="carousel",L="."+(R="bs.carousel"),P=".data-api",x=($=t).fn[j],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},Q="next",H="prev",U="left",G="right",W={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+P,CLICK_DATA_API:"click"+L+P},B="carousel",K="active",V="slide",Y="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",Z={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},J=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=$(t)[0],this._indicatorsElement=$(this._element).find(Z.INDICATORS)[0],this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(Q)},e.nextWhenVisible=function(){!document.hidden&&$(this._element).is(":visible")&&"hidden"!==$(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(H)},e.pause=function(t){t||(this._isPaused=!0),$(this._element).find(Z.NEXT_PREV)[0]&&hr.supportsTransitionEnd()&&(hr.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=$(this._element).find(Z.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)$(this._element).one(W.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=t>n?Q:H;this._slide(i,this._items[t])}},e.dispose=function(){$(this._element).off(L),$.removeData(this._element,R),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=r({},F,t),hr.typeCheckConfig(j,t,M),t},e._addEventListeners=function(){var t=this;this._config.keyboard&&$(this._element).on(W.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&($(this._element).on(W.MOUSEENTER,function(e){return t.pause(e)}).on(W.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&$(this._element).on(W.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=$.makeArray($(t).parent().find(Z.ITEM)),this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===Q,i=t===H,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===H?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex($(this._element).find(Z.ACTIVE_ITEM)[0]),r=$.Event(W.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return $(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){$(this._indicatorsElement).find(Z.ACTIVE).removeClass(K);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&$(e).addClass(K)}},e._slide=function(t,e){var n,i,r,o=this,s=$(this._element).find(Z.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===Q?(n=q,i=z,r=U):(n=Y,i=X,r=G),l&&$(l).hasClass(K))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=$.Event(W.SLID,{relatedTarget:l,direction:r,from:a,to:c});hr.supportsTransitionEnd()&&$(this._element).hasClass(V)?($(l).addClass(i),hr.reflow(l),$(s).addClass(n),$(l).addClass(n),$(s).one(hr.TRANSITION_END,function(){$(l).removeClass(n+" "+i).addClass(K),$(s).removeClass(K+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return $(o._element).trigger(u)},0)}).emulateTransitionEnd(600)):($(s).removeClass(K),$(l).addClass(K),this._isSliding=!1,$(this._element).trigger(u)),h&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var n=$(this).data(R),i=r({},F,$(this).data());"object"==typeof e&&(i=r({},i,e));var o="string"==typeof e?e:i.slide;if(n||(n=new t(this,i),$(this).data(R,n)),"number"==typeof e)n.to(e);else if("string"==typeof o){if(void 0===n[o])throw new TypeError('No method named "'+o+'"');n[o]()}else i.interval&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(e){var n=hr.getSelectorFromElement(this);if(n){var i=$(n)[0];if(i&&$(i).hasClass(B)){var o=r({},$(i).data(),$(this).data()),s=this.getAttribute("data-slide-to");s&&(o.interval=!1),t._jQueryInterface.call($(i),o),s&&$(i).data(R).to(s),e.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return F}}]),t}(),$(document).on(W.CLICK_DATA_API,Z.DATA_SLIDE,J._dataApiClickHandler),$(window).on(W.LOAD_DATA_API,function(){$(Z.DATA_RIDE).each(function(){var t=$(this);J._jQueryInterface.call(t,t.data())})}),$.fn[j]=J._jQueryInterface,$.fn[j].Constructor=J,$.fn[j].noConflict=function(){return $.fn[j]=x,J._jQueryInterface},et="collapse",it="."+(nt="bs.collapse"),rt=(tt=t).fn[et],ot={toggle:!0,parent:""},st={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ct="collapse",ht="collapsing",ut="collapsed",dt="width",ft="height",pt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},mt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(pt.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=hr.getSelectorFromElement(r);null!==o&&tt(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},e.show=function(){var e,n,i=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(e=tt.makeArray(tt(this._parent).find(pt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(n=tt(e).not(this._selector).data(nt))&&n._isTransitioning))){var r=tt.Event(at.SHOW);if(tt(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call(tt(e).not(this._selector),"hide"),n||tt(e).data(nt,null));var o=this._getDimension();tt(this._element).removeClass(ct).addClass(ht),this._element.style[o]=0,this._triggerArray.length>0&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var s=function(){tt(i._element).removeClass(ht).addClass(ct).addClass(lt),i._element.style[o]="",i.setTransitioning(!1),tt(i._element).trigger(at.SHOWN)};if(hr.supportsTransitionEnd()){var a="scroll"+(o[0].toUpperCase()+o.slice(1));tt(this._element).one(hr.TRANSITION_END,s).emulateTransitionEnd(600),this._element.style[o]=this._element[a]+"px"}else s()}}},e.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",hr.reflow(this._element),tt(this._element).addClass(ht).removeClass(ct).removeClass(lt),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=hr.getSelectorFromElement(r);if(null!==o)tt(o).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);var s=function(){t.setTransitioning(!1),tt(t._element).removeClass(ht).addClass(ct).trigger(at.HIDDEN)};this._element.style[n]="",hr.supportsTransitionEnd()?tt(this._element).one(hr.TRANSITION_END,s).emulateTransitionEnd(600):s()}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=r({},ot,t)).toggle=Boolean(t.toggle),hr.typeCheckConfig(et,t,st),t},e._getDimension=function(){return tt(this._element).hasClass(dt)?dt:ft},e._getParent=function(){var e=this,n=null;hr.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=tt(this._config.parent)[0];var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(n).find(i).each(function(n,i){e._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])}),n},e._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);e.length>0&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},t._getTargetFromElement=function(t){var e=hr.getSelectorFromElement(t);return e?tt(e)[0]:null},t._jQueryInterface=function(e){return this.each(function(){var n=tt(this),i=n.data(nt),o=r({},ot,n.data(),"object"==typeof e&&e);if(!i&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),i||(i=new t(this,o),n.data(nt,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return ot}}]),t}(),tt(document).on(at.CLICK_DATA_API,pt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=tt(this),n=hr.getSelectorFromElement(this);tt(n).each(function(){var t=tt(this),n=t.data(nt)?"toggle":e.data();mt._jQueryInterface.call(t,n)})}),tt.fn[et]=mt._jQueryInterface,tt.fn[et].Constructor=mt,tt.fn[et].noConflict=function(){return tt.fn[et]=rt,mt._jQueryInterface},_t="modal",yt="."+(vt="bs.modal"),Et=(gt=t).fn[_t],bt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Ct={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},It={HIDE:"hide"+yt,HIDDEN:"hidden"+yt,SHOW:"show"+yt,SHOWN:"shown"+yt,FOCUSIN:"focusin"+yt,RESIZE:"resize"+yt,CLICK_DISMISS:"click.dismiss"+yt,KEYDOWN_DISMISS:"keydown.dismiss"+yt,MOUSEUP_DISMISS:"mouseup.dismiss"+yt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+yt,CLICK_DATA_API:"click"+yt+".data-api"},Tt="modal-scrollbar-measure",At="modal-backdrop",St="modal-open",wt="fade",Dt="show",Nt={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},Ot=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=gt(t).find(Nt.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){hr.supportsTransitionEnd()&&gt(this._element).hasClass(wt)&&(this._isTransitioning=!0);var n=gt.Event(It.SHOW,{relatedTarget:t});gt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),gt(document.body).addClass(St),this._setEscapeEvent(),this._setResizeEvent(),gt(this._element).on(It.CLICK_DISMISS,Nt.DATA_DISMISS,function(t){return e.hide(t)}),gt(this._dialog).on(It.MOUSEDOWN_DISMISS,function(){gt(e._element).one(It.MOUSEUP_DISMISS,function(t){gt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=gt.Event(It.HIDE);if(gt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=hr.supportsTransitionEnd()&&gt(this._element).hasClass(wt);i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),gt(document).off(It.FOCUSIN),gt(this._element).removeClass(Dt),gt(this._element).off(It.CLICK_DISMISS),gt(this._dialog).off(It.MOUSEDOWN_DISMISS),i?gt(this._element).one(hr.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},e.dispose=function(){gt.removeData(this._element,vt),gt(window,document,this._element,this._backdrop).off(yt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=r({},bt,t),hr.typeCheckConfig(_t,t,Ct),t},e._showElement=function(t){var e=this,n=hr.supportsTransitionEnd()&&gt(this._element).hasClass(wt);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&hr.reflow(this._element),gt(this._element).addClass(Dt),this._config.focus&&this._enforceFocus();var i=gt.Event(It.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,gt(e._element).trigger(i)};n?gt(this._dialog).one(hr.TRANSITION_END,r).emulateTransitionEnd(300):r()},e._enforceFocus=function(){var t=this;gt(document).off(It.FOCUSIN).on(It.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===gt(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?gt(this._element).on(It.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||gt(this._element).off(It.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?gt(window).on(It.RESIZE,function(e){return t.handleUpdate(e)}):gt(window).off(It.RESIZE)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){gt(document.body).removeClass(St),t._resetAdjustments(),t._resetScrollbar(),gt(t._element).trigger(It.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(gt(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=gt(this._element).hasClass(wt)?wt:"";if(this._isShown&&this._config.backdrop){var i=hr.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=At,n&&gt(this._backdrop).addClass(n),gt(this._backdrop).appendTo(document.body),gt(this._element).on(It.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),i&&hr.reflow(this._backdrop),gt(this._backdrop).addClass(Dt),!t)return;if(!i)return void t();gt(this._backdrop).one(hr.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){gt(this._backdrop).removeClass(Dt);var r=function(){e._removeBackdrop(),t&&t()};hr.supportsTransitionEnd()&&gt(this._element).hasClass(wt)?gt(this._backdrop).one(hr.TRANSITION_END,r).emulateTransitionEnd(150):r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){gt(Nt.FIXED_CONTENT).each(function(e,n){var i=gt(n)[0].style.paddingRight,r=gt(n).css("padding-right");gt(n).data("padding-right",i).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),gt(Nt.STICKY_CONTENT).each(function(e,n){var i=gt(n)[0].style.marginRight,r=gt(n).css("margin-right");gt(n).data("margin-right",i).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}),gt(Nt.NAVBAR_TOGGLER).each(function(e,n){var i=gt(n)[0].style.marginRight,r=gt(n).css("margin-right");gt(n).data("margin-right",i).css("margin-right",parseFloat(r)+t._scrollbarWidth+"px")});var e=document.body.style.paddingRight,n=gt("body").css("padding-right");gt("body").data("padding-right",e).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},e._resetScrollbar=function(){gt(Nt.FIXED_CONTENT).each(function(t,e){var n=gt(e).data("padding-right");void 0!==n&&gt(e).css("padding-right",n).removeData("padding-right")}),gt(Nt.STICKY_CONTENT+", "+Nt.NAVBAR_TOGGLER).each(function(t,e){var n=gt(e).data("margin-right");void 0!==n&&gt(e).css("margin-right",n).removeData("margin-right")});var t=gt("body").data("padding-right");void 0!==t&&gt("body").css("padding-right",t).removeData("padding-right")},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Tt,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each(function(){var i=gt(this).data(vt),o=r({},t.Default,gt(this).data(),"object"==typeof e&&e);if(i||(i=new t(this,o),gt(this).data(vt,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e](n)}else o.show&&i.show(n)})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return bt}}]),t}(),gt(document).on(It.CLICK_DATA_API,Nt.DATA_TOGGLE,function(t){var e,n=this,i=hr.getSelectorFromElement(this);i&&(e=gt(i)[0]);var o=gt(e).data(vt)?"toggle":r({},gt(e).data(),gt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=gt(e).one(It.SHOW,function(t){t.isDefaultPrevented()||s.one(It.HIDDEN,function(){gt(n).is(":visible")&&n.focus()})});Ot._jQueryInterface.call(gt(e),o,this)}),gt.fn[_t]=Ot._jQueryInterface,gt.fn[_t].Constructor=Ot,gt.fn[_t].noConflict=function(){return gt.fn[_t]=Et,Ot._jQueryInterface},$t="tooltip",Rt="."+(jt="bs.tooltip"),Lt=(kt=t).fn[$t],Pt="bs-tooltip",xt=new RegExp("(^|\\s)"+Pt+"\\S+","g"),Ft={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},Mt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Qt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},Ht="show",Ut="out",Gt={HIDE:"hide"+Rt,HIDDEN:"hidden"+Rt,SHOW:"show"+Rt,SHOWN:"shown"+Rt,INSERTED:"inserted"+Rt,CLICK:"click"+Rt,FOCUSIN:"focusin"+Rt,FOCUSOUT:"focusout"+Rt,MOUSEENTER:"mouseenter"+Rt,MOUSELEAVE:"mouseleave"+Rt},Wt="fade",Bt="show",Kt=".tooltip-inner",Vt=".arrow",Yt="hover",qt="focus",zt="click",Xt="manual",Zt=function(){function t(t,n){if(void 0===e)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(n),this.tip=null,this._setListeners()}var n=t.prototype;return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=kt(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),kt(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(kt(this.getTipElement()).hasClass(Bt))return void this._leave(null,this);this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),kt.removeData(this.element,this.constructor.DATA_KEY),kt(this.element).off(this.constructor.EVENT_KEY),kt(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&kt(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var n=this;if("none"===kt(this.element).css("display"))throw new Error("Please use show on visible elements");var i=kt.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){kt(this.element).trigger(i);var r=kt.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var o=this.getTipElement(),s=hr.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&kt(o).addClass(Wt);var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,l=this._getAttachment(a);this.addAttachmentClass(l);var c=!1===this.config.container?document.body:kt(this.config.container);kt(o).data(this.constructor.DATA_KEY,this),kt.contains(this.element.ownerDocument.documentElement,this.tip)||kt(o).appendTo(c),kt(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new e(this.element,o,{placement:l,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Vt},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&n._handlePopperPlacementChange(t)},onUpdate:function(t){n._handlePopperPlacementChange(t)}}),kt(o).addClass(Bt),"ontouchstart"in document.documentElement&&kt("body").children().on("mouseover",null,kt.noop);var h=function(){n.config.animation&&n._fixTransition();var t=n._hoverState;n._hoverState=null,kt(n.element).trigger(n.constructor.Event.SHOWN),t===Ut&&n._leave(null,n)};hr.supportsTransitionEnd()&&kt(this.tip).hasClass(Wt)?kt(this.tip).one(hr.TRANSITION_END,h).emulateTransitionEnd(t._TRANSITION_DURATION):h()}},n.hide=function(t){var e=this,n=this.getTipElement(),i=kt.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==Ht&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),kt(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};kt(this.element).trigger(i),i.isDefaultPrevented()||(kt(n).removeClass(Bt),"ontouchstart"in document.documentElement&&kt("body").children().off("mouseover",null,kt.noop),this._activeTrigger[zt]=!1,this._activeTrigger[qt]=!1,this._activeTrigger[Yt]=!1,hr.supportsTransitionEnd()&&kt(this.tip).hasClass(Wt)?kt(n).one(hr.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){kt(this.getTipElement()).addClass(Pt+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||kt(this.config.template)[0],this.tip},n.setContent=function(){var t=kt(this.getTipElement());this.setElementContent(t.find(Kt),this.getTitle()),t.removeClass(Wt+" "+Bt)},n.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?kt(e).parent().is(t)||t.empty().append(e):t.text(kt(e).text()):t[n?"html":"text"](e)},n.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},n._getAttachment=function(t){return Mt[t.toUpperCase()]},n._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)kt(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(e!==Xt){var n=e===Yt?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=e===Yt?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;kt(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}kt(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||kt(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),kt(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?qt:Yt]=!0),kt(e.getTipElement()).hasClass(Bt)||e._hoverState===Ht?e._hoverState=Ht:(clearTimeout(e._timeout),e._hoverState=Ht,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Ht&&e.show()},e.config.delay.show):e.show())},n._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||kt(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),kt(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?qt:Yt]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ut,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ut&&e.hide()},e.config.delay.hide):e.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},n._getConfig=function(t){return"number"==typeof(t=r({},this.constructor.Default,kt(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),hr.typeCheckConfig($t,t,this.constructor.DefaultType),t},n._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},n._cleanTipClass=function(){var t=kt(this.getTipElement()),e=t.attr("class").match(xt);null!==e&&e.length>0&&t.removeClass(e.join(""))},n._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(kt(t).removeClass(Wt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=kt(this).data(jt),i="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new t(this,i),kt(this).data(jt,n)),"string"==typeof e)){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Qt}},{key:"NAME",get:function(){return $t}},{key:"DATA_KEY",get:function(){return jt}},{key:"Event",get:function(){return Gt}},{key:"EVENT_KEY",get:function(){return Rt}},{key:"DefaultType",get:function(){return Ft}}]),t}(),kt.fn[$t]=Zt._jQueryInterface,kt.fn[$t].Constructor=Zt,kt.fn[$t].noConflict=function(){return kt.fn[$t]=Lt,Zt._jQueryInterface},Zt),dr=(te="popover",ne="."+(ee="bs.popover"),ie=(Jt=t).fn[te],re="bs-popover",oe=new RegExp("(^|\\s)"+re+"\\S+","g"),se=r({},ur.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ae=r({},ur.DefaultType,{content:"(string|element|function)"}),le="fade",ce="show",he=".popover-header",ue=".popover-body",de={HIDE:"hide"+ne,HIDDEN:"hidden"+ne,SHOW:"show"+ne,SHOWN:"shown"+ne,INSERTED:"inserted"+ne,CLICK:"click"+ne,FOCUSIN:"focusin"+ne,FOCUSOUT:"focusout"+ne,MOUSEENTER:"mouseenter"+ne,MOUSELEAVE:"mouseleave"+ne},fe=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.isWithContent=function(){return this.getTitle()||this._getContent()},n.addAttachmentClass=function(t){Jt(this.getTipElement()).addClass(re+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||Jt(this.config.template)[0],this.tip},n.setContent=function(){var t=Jt(this.getTipElement());this.setElementContent(t.find(he),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ue),e),t.removeClass(le+" "+ce)},n._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},n._cleanTipClass=function(){var t=Jt(this.getTipElement()),e=t.attr("class").match(oe);null!==e&&e.length>0&&t.removeClass(e.join(""))},e._jQueryInterface=function(t){return this.each(function(){var n=Jt(this).data(ee),i="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new e(this,i),Jt(this).data(ee,n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i(e,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return se}},{key:"NAME",get:function(){return te}},{key:"DATA_KEY",get:function(){return ee}},{key:"Event",get:function(){return de}},{key:"EVENT_KEY",get:function(){return ne}},{key:"DefaultType",get:function(){return ae}}]),e}(ur),Jt.fn[te]=fe._jQueryInterface,Jt.fn[te].Constructor=fe,Jt.fn[te].noConflict=function(){return Jt.fn[te]=ie,fe._jQueryInterface},me="scrollspy",_e="."+(ge="bs.scrollspy"),ve=(pe=t).fn[me],ye={offset:10,method:"auto",target:""},Ee={offset:"number",method:"string",target:"(string|element)"},be={ACTIVATE:"activate"+_e,SCROLL:"scroll"+_e,LOAD_DATA_API:"load"+_e+".data-api"},Ce="dropdown-item",Ie="active",Te={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},Ae="offset",Se="position",we=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Te.NAV_LINKS+","+this._config.target+" "+Te.LIST_ITEMS+","+this._config.target+" "+Te.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,pe(this._scrollElement).on(be.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?Ae:Se,n="auto"===this._config.method?e:this._config.method,i=n===Se?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),pe.makeArray(pe(this._selector)).map(function(t){var e,r=hr.getSelectorFromElement(t);if(r&&(e=pe(r)[0]),e){var o=e.getBoundingClientRect();if(o.width||o.height)return[pe(e)[n]().top+i,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){pe.removeData(this._element,ge),pe(this._scrollElement).off(_e),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=r({},ye,t)).target){var e=pe(t.target).attr("id");e||(e=hr.getUID(me),pe(t.target).attr("id",e)),t.target="#"+e}return hr.typeCheckConfig(me,t,Ee),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",");e=e.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=pe(e.join(","));n.hasClass(Ce)?(n.closest(Te.DROPDOWN).find(Te.DROPDOWN_TOGGLE).addClass(Ie),n.addClass(Ie)):(n.addClass(Ie),n.parents(Te.NAV_LIST_GROUP).prev(Te.NAV_LINKS+", "+Te.LIST_ITEMS).addClass(Ie),n.parents(Te.NAV_LIST_GROUP).prev(Te.NAV_ITEMS).children(Te.NAV_LINKS).addClass(Ie)),pe(this._scrollElement).trigger(be.ACTIVATE,{relatedTarget:t})},e._clear=function(){pe(this._selector).filter(Te.ACTIVE).removeClass(Ie)},t._jQueryInterface=function(e){return this.each(function(){var n=pe(this).data(ge);if(n||(n=new t(this,"object"==typeof e&&e),pe(this).data(ge,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return ye}}]),t}(),pe(window).on(be.LOAD_DATA_API,function(){for(var t=pe.makeArray(pe(Te.DATA_SPY)),e=t.length;e--;){var n=pe(t[e]);we._jQueryInterface.call(n,n.data())}}),pe.fn[me]=we._jQueryInterface,pe.fn[me].Constructor=we,pe.fn[me].noConflict=function(){return pe.fn[me]=ve,we._jQueryInterface},Oe="."+(Ne="bs.tab"),ke=(De=t).fn.tab,$e={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,CLICK_DATA_API:"click"+Oe+".data-api"},je="dropdown-menu",Re="active",Le="disabled",Pe="fade",xe="show",Fe=".dropdown",Me=".nav, .list-group",Qe=".active",He="> li > .active",Ue='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ge=".dropdown-toggle",We="> .dropdown-menu .active",Be=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&De(this._element).hasClass(Re)||De(this._element).hasClass(Le))){var e,n,i=De(this._element).closest(Me)[0],r=hr.getSelectorFromElement(this._element);if(i){var o="UL"===i.nodeName?He:Qe;n=(n=De.makeArray(De(i).find(o)))[n.length-1]}var s=De.Event($e.HIDE,{relatedTarget:this._element}),a=De.Event($e.SHOW,{relatedTarget:n});if(n&&De(n).trigger(s),De(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=De(r)[0]),this._activate(this._element,i);var l=function(){var e=De.Event($e.HIDDEN,{relatedTarget:t._element}),i=De.Event($e.SHOWN,{relatedTarget:n});De(n).trigger(e),De(t._element).trigger(i)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){De.removeData(this._element,Ne),this._element=null},e._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?De(e).find(He):De(e).children(Qe))[0],o=n&&hr.supportsTransitionEnd()&&r&&De(r).hasClass(Pe),s=function(){return i._transitionComplete(t,r,n)};r&&o?De(r).one(hr.TRANSITION_END,s).emulateTransitionEnd(150):s()},e._transitionComplete=function(t,e,n){if(e){De(e).removeClass(xe+" "+Re);var i=De(e.parentNode).find(We)[0];i&&De(i).removeClass(Re),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(De(t).addClass(Re),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),hr.reflow(t),De(t).addClass(xe),t.parentNode&&De(t.parentNode).hasClass(je)){var r=De(t).closest(Fe)[0];r&&De(r).find(Ge).addClass(Re),t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each(function(){var n=De(this),i=n.data(Ne);if(i||(i=new t(this),n.data(Ne,i)),"string"==typeof e){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),De(document).on($e.CLICK_DATA_API,Ue,function(t){t.preventDefault(),Be._jQueryInterface.call(De(this),"show")}),De.fn.tab=Be._jQueryInterface,De.fn.tab.Constructor=Be,De.fn.tab.noConflict=function(){return De.fn.tab=ke,Be._jQueryInterface},function(){var t=!1,e="",n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};var i={transitionEndSupported:function(){return t},transitionEndSelector:function(){return e},isChar:function(t){return void 0===t.which||"number"==typeof t.which&&t.which>0&&(!t.ctrlKey&&!t.metaKey&&!t.altKey&&8!==t.which&&9!==t.which&&13!==t.which&&16!==t.which&&17!==t.which&&20!==t.which&&27!==t.which)},assert:function(t,e,n){if(e)throw void 0===!t&&t.css("border","1px solid red"),console.error(n,t),n},describe:function(t){return void 0===t?"undefined":0===t.length?"(no matching elements)":t[0].outerHTML.split(">")[0]+">"}};return function(){t=function(){if(window.QUnit)return!1;var t=document.createElement("bmd");for(var e in n)if(void 0!==t.style[e])return n[e];return!1}();for(var i in n)e+=" "+n[i]}(),i}(jQuery)),fr=(Ke=jQuery,Ve="is-filled",Ye="is-focused",qe={BMD_FORM_GROUP:"."+"bmd-form-group"},ze={},function(){function t(t,e,n){void 0===n&&(n={}),this.$element=t,this.config=Ke.extend(!0,{},ze,e);for(var i in n)this[i]=n[i]}var e=t.prototype;return e.dispose=function(t){this.$element.data(t,null),this.$element=null,this.config=null},e.addFormGroupFocus=function(){this.$element.prop("disabled")||this.$bmdFormGroup.addClass(Ye)},e.removeFormGroupFocus=function(){this.$bmdFormGroup.removeClass(Ye)},e.removeIsFilled=function(){this.$bmdFormGroup.removeClass(Ve)},e.addIsFilled=function(){this.$bmdFormGroup.addClass(Ve)},e.findMdbFormGroup=function(t){void 0===t&&(t=!0);var e=this.$element.closest(qe.BMD_FORM_GROUP);return 0===e.length&&t&&Ke.error("Failed to find "+qe.BMD_FORM_GROUP+" for "+dr.describe(this.$element)),e},t}()),pr=(Xe=jQuery,tn="has-danger",en="input-group",nn={FORM_GROUP:"."+"form-group",BMD_FORM_GROUP:"."+(Ze="bmd-form-group"),BMD_LABEL_WILDCARD:"label[class^='"+(Je="bmd-label")+"'], label[class*=' "+Je+"']"},rn={validate:!1,formGroup:{required:!1},bmdFormGroup:{template:"<span class='"+Ze+"'></span>",create:!0,required:!0},label:{required:!1,selectors:[".form-control-label","> label"],className:"bmd-label-static"},requiredClasses:[],invalidComponentMatches:[],convertInputSizeVariations:!0},on={"form-control-lg":"bmd-form-group-lg","form-control-sm":"bmd-form-group-sm"},function(t){function e(e,n,i){var r;return void 0===i&&(i={}),(r=t.call(this,e,Xe.extend(!0,{},rn,n),i)||this)._rejectInvalidComponentMatches(),r.rejectWithoutRequiredStructure(),r._rejectWithoutRequiredClasses(),r.$formGroup=r.findFormGroup(r.config.formGroup.required),r.$bmdFormGroup=r.resolveMdbFormGroup(),r.$bmdLabel=r.resolveMdbLabel(),r.resolveMdbFormGroupSizing(),r.addFocusListener(),r.addChangeListener(),""!=r.$element.val()&&r.addIsFilled(),r}o(e,t);var n=e.prototype;return n.dispose=function(e){t.prototype.dispose.call(this,e),this.$bmdFormGroup=null,this.$formGroup=null},n.rejectWithoutRequiredStructure=function(){},n.addFocusListener=function(){var t=this;this.$element.on("focus",function(){t.addFormGroupFocus()}).on("blur",function(){t.removeFormGroupFocus()})},n.addChangeListener=function(){var t=this;this.$element.on("keydown paste",function(e){dr.isChar(e)&&t.addIsFilled()}).on("keyup change",function(){t.isEmpty()?t.removeIsFilled():t.addIsFilled(),t.config.validate&&(void 0===t.$element[0].checkValidity||t.$element[0].checkValidity()?t.removeHasDanger():t.addHasDanger())})},n.addHasDanger=function(){this.$bmdFormGroup.addClass(tn)},n.removeHasDanger=function(){this.$bmdFormGroup.removeClass(tn)},n.isEmpty=function(){return null===this.$element.val()||void 0===this.$element.val()||""===this.$element.val()},n.resolveMdbFormGroup=function(){var t=this.findMdbFormGroup(!1);return void 0!==t&&0!==t.length||(!this.config.bmdFormGroup.create||void 0!==this.$formGroup&&0!==this.$formGroup.length?this.$formGroup.addClass(Ze):this.outerElement().parent().hasClass(en)?this.outerElement().parent().wrap(this.config.bmdFormGroup.template):this.outerElement().wrap(this.config.bmdFormGroup.template),t=this.findMdbFormGroup(this.config.bmdFormGroup.required)),t},n.outerElement=function(){return this.$element},n.resolveMdbLabel=function(){var t=this.$bmdFormGroup.find(nn.BMD_LABEL_WILDCARD);return void 0!==t&&0!==t.length||void 0===(t=this.findMdbLabel(this.config.label.required))||0===t.length||t.addClass(this.config.label.className),t},n.findMdbLabel=function(t){void 0===t&&(t=!0);var e=null,n=this.config.label.selectors,i=Array.isArray(n),r=0;for(n=i?n:n[Symbol.iterator]();;){var o;if(i){if(r>=n.length)break;o=n[r++]}else{if((r=n.next()).done)break;o=r.value}var s=o;if(void 0!==(e=Xe.isFunction(s)?s(this):this.$bmdFormGroup.find(s))&&e.length>0)break}return 0===e.length&&t&&Xe.error("Failed to find "+nn.BMD_LABEL_WILDCARD+" within form-group for "+dr.describe(this.$element)),e},n.findFormGroup=function(t){void 0===t&&(t=!0);var e=this.$element.closest(nn.FORM_GROUP);return 0===e.length&&t&&Xe.error("Failed to find "+nn.FORM_GROUP+" for "+dr.describe(this.$element)),e},n.resolveMdbFormGroupSizing=function(){if(this.config.convertInputSizeVariations)for(var t in on)this.$element.hasClass(t)&&this.$bmdFormGroup.addClass(on[t])},n._rejectInvalidComponentMatches=function(){var t=this.config.invalidComponentMatches,e=Array.isArray(t),n=0;for(t=e?t:t[Symbol.iterator]();;){var i;if(e){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}i.rejectMatch(this.constructor.name,this.$element)}},n._rejectWithoutRequiredClasses=function(){var t=this.config.requiredClasses,e=Array.isArray(t),n=0;for(t=e?t:t[Symbol.iterator]();;){var i;if(e){if(n>=t.length)break;i=t[n++]}else{if((n=t.next()).done)break;i=n.value}var r=i,o=!1;if(-1!==r.indexOf("||")){var s=r.split("||"),a=Array.isArray(s),l=0;for(s=a?s:s[Symbol.iterator]();;){var c;if(a){if(l>=s.length)break;c=s[l++]}else{if((l=s.next()).done)break;c=l.value}var h=c;if(this.$element.hasClass(h)){o=!0;break}}}else this.$element.hasClass(r)&&(o=!0);o||Xe.error(this.constructor.name+" element: "+dr.describe(this.$element)+" requires class: "+r)}},e}(fr)),mr=(sn=jQuery,an={label:{required:!1}},ln="label",function(t){function e(e,n,i){var r;return(r=t.call(this,e,sn.extend(!0,{},an,n),i)||this).decorateMarkup(),r}o(e,t);var n=e.prototype;return n.decorateMarkup=function(){var t=sn(this.config.template);this.$element.after(t),!1!==this.config.ripples&&t.bmdRipples()},n.outerElement=function(){return this.$element.parent().closest("."+this.outerClass)},n.rejectWithoutRequiredStructure=function(){dr.assert(this.$element,"label"===!this.$element.parent().prop("tagName"),this.constructor.name+"'s "+dr.describe(this.$element)+" parent element should be <label>."),dr.assert(this.$element,!this.outerElement().hasClass(this.outerClass),this.constructor.name+"'s "+dr.describe(this.$element)+" outer element should have class "+this.outerClass+".")},n.addFocusListener=function(){var t=this;this.$element.closest(ln).hover(function(){t.addFormGroupFocus()},function(){t.removeFormGroupFocus()})},n.addChangeListener=function(){var t=this;this.$element.change(function(){t.$element.blur()})},e}(pr)),gr=(cn=jQuery,un="bmd."+(hn="checkbox"),dn="bmd"+(hn.charAt(0).toUpperCase()+hn.slice(1)),fn=cn.fn[dn],pn={template:"<span class='checkbox-decorator'><span class='check'></span></span>"},mn=function(t){function e(e,n,i){return void 0===i&&(i={inputType:hn,outerClass:hn}),t.call(this,e,cn.extend(!0,pn,n),i)||this}return o(e,t),e.prototype.dispose=function(e){void 0===e&&(e=un),t.prototype.dispose.call(this,e)},e.matches=function(t){return"checkbox"===t.attr("type")},e.rejectMatch=function(t,e){dr.assert(this.$element,this.matches(e),t+" component element "+dr.describe(e)+" is invalid for type='checkbox'.")},e._jQueryInterface=function(t){return this.each(function(){var n=cn(this),i=n.data(un);i||(i=new e(n,t),n.data(un,i))})},e}(mr),cn.fn[dn]=mn._jQueryInterface,cn.fn[dn].Constructor=mn,cn.fn[dn].noConflict=function(){return cn.fn[dn]=fn,mn._jQueryInterface},mn),_r=(gn=jQuery,vn="bmd."+(_n="checkboxInline"),yn="bmd"+(_n.charAt(0).toUpperCase()+_n.slice(1)),En=gn.fn[yn],bn={bmdFormGroup:{create:!1,required:!1}},Cn=function(t){function e(e,n,i){return void 0===i&&(i={inputType:"checkbox",outerClass:"checkbox-inline"}),t.call(this,e,gn.extend(!0,{},bn,n),i)||this}return o(e,t),e.prototype.dispose=function(){t.prototype.dispose.call(this,vn)},e._jQueryInterface=function(t){return this.each(function(){var n=gn(this),i=n.data(vn);i||(i=new e(n,t),n.data(vn,i))})},e}(gr),gn.fn[yn]=Cn._jQueryInterface,gn.fn[yn].Constructor=Cn,gn.fn[yn].noConflict=function(){return gn.fn[yn]=En,Cn._jQueryInterface},In=jQuery,An="bmd."+(Tn="collapseInline"),Sn="bmd"+(Tn.charAt(0).toUpperCase()+Tn.slice(1)),wn=In.fn[Sn],Dn={ANY_INPUT:"input, select, textarea"},Nn={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed",WIDTH:"width"},On={},kn=function(t){function e(e,n){var i;(i=t.call(this,e,In.extend(!0,{},On,n))||this).$bmdFormGroup=i.findMdbFormGroup(!0);var r=e.data("target");i.$collapse=In(r),dr.assert(e,0===i.$collapse.length,"Cannot find collapse target for "+dr.describe(e)),dr.assert(i.$collapse,!i.$collapse.hasClass(Nn.COLLAPSE),dr.describe(i.$collapse)+" is expected to have the '"+Nn.COLLAPSE+"' class.  It is being targeted by "+dr.describe(e));var o=i.$bmdFormGroup.find(Dn.ANY_INPUT);return o.length>0&&(i.$input=o.first()),i.$collapse.hasClass(Nn.WIDTH)||i.$collapse.addClass(Nn.WIDTH),i.$input&&(i.$collapse.on("shown.bs.collapse",function(){i.$input.focus()}),i.$input.blur(function(){i.$collapse.collapse("hide")})),i}return o(e,t),e.prototype.dispose=function(){t.prototype.dispose.call(this,An),this.$bmdFormGroup=null,this.$collapse=null,this.$input=null},e._jQueryInterface=function(t){return this.each(function(){var n=In(this),i=n.data(An);i||(i=new e(n,t),n.data(An,i))})},e}(fr),In.fn[Sn]=kn._jQueryInterface,In.fn[Sn].Constructor=kn,In.fn[Sn].noConflict=function(){return In.fn[Sn]=wn,kn._jQueryInterface},$n=jQuery,Rn="bmd."+(jn="file"),Ln="bmd"+(jn.charAt(0).toUpperCase()+jn.slice(1)),Pn=$n.fn[Ln],xn={},Fn={FILE:jn,IS_FILE:"is-file"},Mn="input.form-control[readonly]",Qn=function(t){function e(e,n){var i;return(i=t.call(this,e,$n.extend(!0,xn,n))||this).$bmdFormGroup.addClass(Fn.IS_FILE),i}o(e,t);var n=e.prototype;return n.dispose=function(){t.prototype.dispose.call(this,Rn)},e.matches=function(t){return"file"===t.attr("type")},e.rejectMatch=function(t,e){dr.assert(this.$element,this.matches(e),t+" component element "+dr.describe(e)+" is invalid for type='file'.")},n.outerElement=function(){return this.$element.parent().closest("."+Fn.FILE)},n.rejectWithoutRequiredStructure=function(){dr.assert(this.$element,"label"===!this.outerElement().prop("tagName"),this.constructor.name+"'s "+dr.describe(this.$element)+" parent element "+dr.describe(this.outerElement())+" should be <label>."),dr.assert(this.$element,!this.outerElement().hasClass(Fn.FILE),this.constructor.name+"'s "+dr.describe(this.$element)+" parent element "+dr.describe(this.outerElement())+" should have class ."+Fn.FILE+".")},n.addFocusListener=function(){var t=this;this.$bmdFormGroup.on("focus",function(){t.addFormGroupFocus()}).on("blur",function(){t.removeFormGroupFocus()})},n.addChangeListener=function(){var t=this;this.$element.on("change",function(){var e="";$n.each(t.$element.files,function(t,n){e+=n.name+"  , "}),(e=e.substring(0,e.length-2))?t.addIsFilled():t.removeIsFilled(),t.$bmdFormGroup.find(Mn).val(e)})},e._jQueryInterface=function(t){return this.each(function(){var n=$n(this),i=n.data(Rn);i||(i=new e(n,t),n.data(Rn,i))})},e}(pr),$n.fn[Ln]=Qn._jQueryInterface,$n.fn[Ln].Constructor=Qn,$n.fn[Ln].noConflict=function(){return $n.fn[Ln]=Pn,Qn._jQueryInterface},Hn=jQuery,Gn="bmd."+(Un="radio"),Wn="bmd"+(Un.charAt(0).toUpperCase()+Un.slice(1)),Bn=Hn.fn[Wn],Kn={template:"<span class='bmd-radio'></span>"},Vn=function(t){function e(e,n,i){return void 0===i&&(i={inputType:Un,outerClass:Un}),t.call(this,e,Hn.extend(!0,Kn,n),i)||this}return o(e,t),e.prototype.dispose=function(e){void 0===e&&(e=Gn),t.prototype.dispose.call(this,e)},e.matches=function(t){return"radio"===t.attr("type")},e.rejectMatch=function(t,e){dr.assert(this.$element,this.matches(e),t+" component element "+dr.describe(e)+" is invalid for type='radio'.")},e._jQueryInterface=function(t){return this.each(function(){var n=Hn(this),i=n.data(Gn);i||(i=new e(n,t),n.data(Gn,i))})},e}(mr),Hn.fn[Wn]=Vn._jQueryInterface,Hn.fn[Wn].Constructor=Vn,Hn.fn[Wn].noConflict=function(){return Hn.fn[Wn]=Bn,Vn._jQueryInterface},Vn),vr=(Yn=jQuery,zn="bmd."+(qn="radioInline"),Xn="bmd"+(qn.charAt(0).toUpperCase()+qn.slice(1)),Zn=Yn.fn[Xn],Jn={bmdFormGroup:{create:!1,required:!1}},ti=function(t){function e(e,n,i){return void 0===i&&(i={inputType:"radio",outerClass:"radio-inline"}),t.call(this,e,Yn.extend(!0,{},Jn,n),i)||this}return o(e,t),e.prototype.dispose=function(){t.prototype.dispose.call(this,zn)},e._jQueryInterface=function(t){return this.each(function(){var n=Yn(this),i=n.data(zn);i||(i=new e(n,t),n.data(zn,i))})},e}(_r),Yn.fn[Xn]=ti._jQueryInterface,Yn.fn[Xn].Constructor=ti,Yn.fn[Xn].noConflict=function(){return Yn.fn[Xn]=Zn,ti._jQueryInterface},ei=jQuery,ni={requiredClasses:["form-control"]},function(t){function e(e,n){var i;return(i=t.call(this,e,ei.extend(!0,ni,n))||this).isEmpty()&&i.removeIsFilled(),i}return o(e,t),e}(pr)),yr=(ii=jQuery,oi="bmd."+(ri="select"),si="bmd"+(ri.charAt(0).toUpperCase()+ri.slice(1)),ai=ii.fn[si],li={requiredClasses:["form-control||custom-select"]},ci=function(t){function e(e,n){var i;return(i=t.call(this,e,ii.extend(!0,li,n))||this).addIsFilled(),i}return o(e,t),e.prototype.dispose=function(){t.prototype.dispose.call(this,oi)},e.matches=function(t){return"select"===t.prop("tagName")},e.rejectMatch=function(t,e){dr.assert(this.$element,this.matches(e),t+" component element "+dr.describe(e)+" is invalid for <select>.")},e._jQueryInterface=function(t){return this.each(function(){var n=ii(this),i=n.data(oi);i||(i=new e(n,t),n.data(oi,i))})},e}(vr),ii.fn[si]=ci._jQueryInterface,ii.fn[si].Constructor=ci,ii.fn[si].noConflict=function(){return ii.fn[si]=ai,ci._jQueryInterface},hi=jQuery,di="bmd."+(ui="switch"),fi="bmd"+(ui.charAt(0).toUpperCase()+ui.slice(1)),pi=hi.fn[fi],mi={template:"<span class='bmd-switch-track'></span>"},gi=function(t){function e(e,n,i){return void 0===i&&(i={inputType:"checkbox",outerClass:"switch"}),t.call(this,e,hi.extend(!0,{},mi,n),i)||this}return o(e,t),e.prototype.dispose=function(){t.prototype.dispose.call(this,di)},e._jQueryInterface=function(t){return this.each(function(){var n=hi(this),i=n.data(di);i||(i=new e(n,t),n.data(di,i))})},e}(gr),hi.fn[fi]=gi._jQueryInterface,hi.fn[fi].Constructor=gi,hi.fn[fi].noConflict=function(){return hi.fn[fi]=pi,gi._jQueryInterface},_i=jQuery,yi="bmd."+(vi="text"),Ei="bmd"+(vi.charAt(0).toUpperCase()+vi.slice(1)),bi=_i.fn[Ei],Ci={},Ii=function(t){function e(e,n){return t.call(this,e,_i.extend(!0,Ci,n))||this}return o(e,t),e.prototype.dispose=function(e){void 0===e&&(e=yi),t.prototype.dispose.call(this,e)},e.matches=function(t){return"text"===t.attr("type")},e.rejectMatch=function(t,e){dr.assert(this.$element,this.matches(e),t+" component element "+dr.describe(e)+" is invalid for type='text'.")},e._jQueryInterface=function(t){return this.each(function(){var n=_i(this),i=n.data(yi);i||(i=new e(n,t),n.data(yi,i))})},e}(vr),_i.fn[Ei]=Ii._jQueryInterface,_i.fn[Ei].Constructor=Ii,_i.fn[Ei].noConflict=function(){return _i.fn[Ei]=bi,Ii._jQueryInterface},Ti=jQuery,Si="bmd."+(Ai="textarea"),wi="bmd"+(Ai.charAt(0).toUpperCase()+Ai.slice(1)),Di=Ti.fn[wi],Ni={},Oi=function(t){function e(e,n){return t.call(this,e,Ti.extend(!0,Ni,n))||this}return o(e,t),e.prototype.dispose=function(){t.prototype.dispose.call(this,Si)},e.matches=function(t){return"textarea"===t.prop("tagName")},e.rejectMatch=function(t,e){dr.assert(this.$element,this.matches(e),t+" component element "+dr.describe(e)+" is invalid for <textarea>.")},e._jQueryInterface=function(t){return this.each(function(){var n=Ti(this),i=n.data(Si);i||(i=new e(n,t),n.data(Si,i))})},e}(vr),Ti.fn[wi]=Oi._jQueryInterface,Ti.fn[wi].Constructor=Oi,Ti.fn[wi].noConflict=function(){return Ti.fn[wi]=Di,Oi._jQueryInterface},function(t){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var e="dropdown",n="bs.dropdown",r="."+n,o=".data-api",s=t.fn[e],a=new RegExp("38|40|27"),l={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,CLICK:"click"+r,CLICK_DATA_API:"click"+r+o,KEYDOWN_DATA_API:"keydown"+r+o,KEYUP_DATA_API:"keyup"+r+o,TRANSITION_END:"transitionend webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd oAnimationEnd"},c="disabled",h="show",u="showing",d="hiding",f="dropup",p="dropdown-menu-right",m="dropdown-menu-left",g='[data-toggle="dropdown"]',_=".dropdown form",v=".dropdown-menu",y=".navbar-nav",E=".dropdown-menu .dropdown-item:not(.disabled)",b={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},C={placement:b.BOTTOM,offset:0,flip:!0},I={placement:"string",offset:"(number|string)",flip:"boolean"},T=function(){function o(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var s=o.prototype;return s.toggle=function(){var e=this;if(!this._element.disabled&&!t(this._element).hasClass(c)){var n=o._getParentFromElement(this._element),i=t(this._menu).hasClass(h);if(o._clearMenus(),!i){var r={relatedTarget:this._element},s=t.Event(l.SHOW,r);if(t(n).trigger(s),!s.isDefaultPrevented()){var a=this._element;t(n).hasClass(f)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(a=n),this._popper=new Popper(a,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!t(n).closest(y).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).one(l.TRANSITION_END,function(){t(n).trigger(t.Event(l.SHOWN,r)),t(e._menu).removeClass(u)}),t(this._menu).addClass(h+" "+u),t(n).addClass(h)}}}},s.dispose=function(){t.removeData(this._element,n),t(this._element).off(r),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},s.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},s._addEventListeners=function(){var e=this;t(this._element).on(l.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},s._getConfig=function(n){var i=t(this._element).data();return void 0!==i.placement&&(i.placement=b[i.placement.toUpperCase()]),n=t.extend({},this.constructor.Default,t(this._element).data(),n),hr.typeCheckConfig(e,n,this.constructor.DefaultType),n},s._getMenuElement=function(){if(!this._menu){var e=o._getParentFromElement(this._element);this._menu=t(e).find(v)[0]}return this._menu},s._getPlacement=function(){var e=t(this._element).parent(),n=this._config.placement;return e.hasClass(f)||this._config.placement===b.TOP?(n=b.TOP,t(this._menu).hasClass(p)&&(n=b.TOPEND)):t(this._menu).hasClass(p)&&(n=b.BOTTOMEND),n},s._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},s._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e?e:null),t(this).data(n,i)),"string"==typeof e){if(void 0===i[e])throw new Error('No method named "'+e+'"');i[e]()}})},o._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var i=t.makeArray(t(g)),r=function(r){var s=o._getParentFromElement(i[r]),a=t(i[r]).data(n),c={relatedTarget:i[r]};if(!a)return"continue";var u=a._menu;if(!t(s).hasClass(h))return"continue";if(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(s,e.target))return"continue";var f=t.Event(l.HIDE,c);if(t(s).trigger(f),f.isDefaultPrevented())return"continue";"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),i[r].setAttribute("aria-expanded","false"),t(u).addClass(d).removeClass(h),t(s).removeClass(h),t(u).one(l.TRANSITION_END,function(){t(s).trigger(t.Event(l.HIDDEN,c)),t(u).removeClass(d)})},s=0;s<i.length;s++)r(s)},o._getParentFromElement=function(e){var n,i=hr.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},o._dataApiKeydownHandler=function(e){if(!(!a.test(e.which)||/button/i.test(e.target.tagName)&&32===e.which||/input|textarea/i.test(e.target.tagName)||(e.preventDefault(),e.stopPropagation(),this.disabled||t(this).hasClass(c)))){var n=o._getParentFromElement(this),i=t(n).hasClass(h);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var r=t(n).find(E).get();if(r.length){var s=r.indexOf(e.target);38===e.which&&s>0&&s--,40===e.which&&s<r.length-1&&s++,s<0&&(s=0),r[s].focus()}}else{if(27===e.which){var l=t(n).find(g)[0];t(l).trigger("focus")}t(this).trigger("click")}}},i(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return C}},{key:"DefaultType",get:function(){return I}}]),o}();t(document).on(l.KEYDOWN_DATA_API,g,T._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API,v,T._dataApiKeydownHandler).on(l.CLICK_DATA_API+" "+l.KEYUP_DATA_API,T._clearMenus).on(l.CLICK_DATA_API,g,function(e){e.preventDefault(),e.stopPropagation(),T._jQueryInterface.call(t(this),"toggle")}).on(l.CLICK_DATA_API,_,function(t){t.stopPropagation()}),t.fn[e]=T._jQueryInterface,t.fn[e].Constructor=T,t.fn[e].noConflict=function(){return t.fn[e]=s,T._jQueryInterface}}(jQuery),ki=jQuery,Ri={CANVAS:"."+($i="bmd-layout-canvas"),CONTAINER:"."+"bmd-layout-container",BACKDROP:"."+(ji="bmd-layout-backdrop")},Li={canvas:{create:!0,required:!0,template:'<div class="'+$i+'"></div>'},backdrop:{create:!0,required:!0,template:'<div class="'+ji+'"></div>'}},function(t){function e(e,n,i){var r;return void 0===i&&(i={}),(r=t.call(this,e,ki.extend(!0,{},Li,n),i)||this).$container=r.findContainer(!0),r.$backdrop=r.resolveBackdrop(),r.resolveCanvas(),r}o(e,t);var n=e.prototype;return n.dispose=function(e){t.prototype.dispose.call(this,e),this.$container=null,this.$backdrop=null},n.resolveCanvas=function(){var t=this.findCanvas(!1);return void 0!==t&&0!==t.length||(this.config.canvas.create&&this.$container.wrap(this.config.canvas.template),t=this.findCanvas(this.config.canvas.required)),t},n.findCanvas=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=this.$container);var n=e.closest(Ri.CANVAS);return 0===n.length&&t&&ki.error("Failed to find "+Ri.CANVAS+" for "+dr.describe(e)),n},n.resolveBackdrop=function(){var t=this.findBackdrop(!1);return void 0!==t&&0!==t.length||(this.config.backdrop.create&&this.$container.append(this.config.backdrop.template),t=this.findBackdrop(this.config.backdrop.required)),t},n.findBackdrop=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=this.$container);var n=e.find("> "+Ri.BACKDROP);return 0===n.length&&t&&ki.error("Failed to find "+Ri.BACKDROP+" for "+dr.describe(e)),n},n.findContainer=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=this.$element);var n=e.closest(Ri.CONTAINER);return 0===n.length&&t&&ki.error("Failed to find "+Ri.CONTAINER+" for "+dr.describe(e)),n},e}(fr));Pi=jQuery,Fi="bmd."+(xi="drawer"),Mi="bmd"+(xi.charAt(0).toUpperCase()+xi.slice(1)),Qi=Pi.fn[Mi],Hi={ESCAPE:27},Ui="in",Gi="bmd-drawer-in",Wi="bmd-drawer-out",Bi={focusSelector:"a, button, input"},Ki=function(t){function e(e,n){var i;return(i=t.call(this,e,Pi.extend(!0,{},Bi,n))||this).$toggles=Pi('[data-toggle="drawer"][href="#'+i.$element[0].id+'"], [data-toggle="drawer"][data-target="#'+i.$element[0].id+'"]'),i._addAria(),i.$backdrop.keydown(function(t){t.which===Hi.ESCAPE&&i.hide()}).click(function(){i.hide()}),i.$element.keydown(function(t){t.which===Hi.ESCAPE&&i.hide()}),i.$toggles.click(function(){i.toggle()}),i}o(e,t);var n=e.prototype;return n.dispose=function(){t.prototype.dispose.call(this,Fi),this.$toggles=null},n.toggle=function(){this._isOpen()?this.hide():this.show()},n.show=function(){if(!this._isForcedClosed()&&!this._isOpen()){this.$toggles.attr("aria-expanded",!0),this.$element.attr("aria-expanded",!0),this.$element.attr("aria-hidden",!1);var t=this.$element.find(this.config.focusSelector);t.length>0&&t.first().focus(),this.$container.addClass(Gi),this.$backdrop.addClass(Ui)}},n.hide=function(){this._isOpen()&&(this.$toggles.attr("aria-expanded",!1),this.$element.attr("aria-expanded",!1),this.$element.attr("aria-hidden",!0),this.$container.removeClass(Gi),this.$backdrop.removeClass(Ui))},n._isOpen=function(){return this.$container.hasClass(Gi)},n._isForcedClosed=function(){return this.$container.hasClass(Wi)},n._addAria=function(){var t=this._isOpen();this.$element.attr("aria-expanded",t),this.$element.attr("aria-hidden",t),this.$toggles.length&&this.$toggles.attr("aria-expanded",t)},e._jQueryInterface=function(t){return this.each(function(){var n=Pi(this),i=n.data(Fi);i||(i=new e(n,t),n.data(Fi,i))})},e}(yr),Pi.fn[Mi]=Ki._jQueryInterface,Pi.fn[Mi].Constructor=Ki,Pi.fn[Mi].noConflict=function(){return Pi.fn[Mi]=Qi,Ki._jQueryInterface},Vi=jQuery,qi="bmd."+(Yi="ripples"),zi="bmd"+(Yi.charAt(0).toUpperCase()+Yi.slice(1)),Xi=Vi.fn[zi],tr={CONTAINER:"."+(Zi="ripple-container"),DECORATOR:"."+(Ji="ripple-decorator")},er={container:{template:"<div class='"+Zi+"'></div>"},decorator:{template:"<div class='"+Ji+"'></div>"},trigger:{start:"mousedown touchstart",end:"mouseup mouseleave touchend"},touchUserAgentRegex:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,duration:500},nr=function(){function t(t,e){var n=this;this.$element=t,this.config=Vi.extend(!0,{},er,e),this.$element.on(this.config.trigger.start,function(t){n._onStartRipple(t)})}var e=t.prototype;return e.dispose=function(){this.$element.data(qi,null),this.$element=null,this.$container=null,this.$decorator=null,this.config=null},e._onStartRipple=function(t){var e=this;if(!this._isTouch()||"mousedown"!==t.type){this._findOrCreateContainer();var n=this._getRelY(t),i=this._getRelX(t);(n||i)&&(this.$decorator.css({left:i,top:n,"background-color":this._getRipplesColor()}),this._forceStyleApplication(),this.rippleOn(),setTimeout(function(){e.rippleEnd()},this.config.duration),this.$element.on(this.config.trigger.end,function(){e.$decorator&&(e.$decorator.data("mousedown","off"),"off"===e.$decorator.data("animating")&&e.rippleOut())}))}},e._findOrCreateContainer=function(){(!this.$container||!this.$container.length>0)&&(this.$element.append(this.config.container.template),this.$container=this.$element.find(tr.CONTAINER)),this.$container.append(this.config.decorator.template),this.$decorator=this.$container.find(tr.DECORATOR)},e._forceStyleApplication=function(){return window.getComputedStyle(this.$decorator[0]).opacity},e._getRelX=function(t){var e=this.$container.offset();return this._isTouch()?1===(t=t.originalEvent).touches.length&&t.touches[0].pageX-e.left:t.pageX-e.left},e._getRelY=function(t){var e=this.$container.offset();return this._isTouch()?1===(t=t.originalEvent).touches.length&&t.touches[0].pageY-e.top:t.pageY-e.top},e._getRipplesColor=function(){return this.$element.data("ripple-color")?this.$element.data("ripple-color"):window.getComputedStyle(this.$element[0]).color},e._isTouch=function(){return this.config.touchUserAgentRegex.test(navigator.userAgent)},e.rippleEnd=function(){this.$decorator&&(this.$decorator.data("animating","off"),"off"===this.$decorator.data("mousedown")&&this.rippleOut(this.$decorator))},e.rippleOut=function(){var t=this;this.$decorator.off(),dr.transitionEndSupported()?this.$decorator.addClass("ripple-out"):this.$decorator.animate({opacity:0},100,function(){t.$decorator.trigger("transitionend")}),this.$decorator.on(dr.transitionEndSelector(),function(){t.$decorator&&(t.$decorator.remove(),t.$decorator=null)})},e.rippleOn=function(){var t=this,e=this._getNewSize();dr.transitionEndSupported()?this.$decorator.css({"-ms-transform":"scale("+e+")","-moz-transform":"scale("+e+")","-webkit-transform":"scale("+e+")",transform:"scale("+e+")"}).addClass("ripple-on").data("animating","on").data("mousedown","on"):this.$decorator.animate({width:2*Math.max(this.$element.outerWidth(),this.$element.outerHeight()),height:2*Math.max(this.$element.outerWidth(),this.$element.outerHeight()),"margin-left":-1*Math.max(this.$element.outerWidth(),this.$element.outerHeight()),"margin-top":-1*Math.max(this.$element.outerWidth(),this.$element.outerHeight()),opacity:.2},this.config.duration,function(){t.$decorator.trigger("transitionend")})},e._getNewSize=function(){return Math.max(this.$element.outerWidth(),this.$element.outerHeight())/this.$decorator.outerWidth()*2.5},t._jQueryInterface=function(e){return this.each(function(){var n=Vi(this),i=n.data(qi);i||(i=new t(n,e),n.data(qi,i))})},t}(),Vi.fn[zi]=nr._jQueryInterface,Vi.fn[zi].Constructor=nr,Vi.fn[zi].noConflict=function(){return Vi.fn[zi]=Xi,nr._jQueryInterface},ir=jQuery,or="bmd."+(rr="autofill"),sr="bmd"+(rr.charAt(0).toUpperCase()+rr.slice(1)),ar=ir.fn[sr],lr={},cr=function(t){function e(e,n){var i;return(i=t.call(this,e,ir.extend(!0,{},lr,n))||this)._watchLoading(),i._attachEventHandlers(),i}o(e,t);var n=e.prototype;return n.dispose=function(){t.prototype.dispose.call(this,or)},n._watchLoading=function(){var t=this;setTimeout(function(){clearInterval(t._onLoading)},1e4)},n._onLoading=function(){setInterval(function(){ir("input[type!=checkbox]").each(function(t,e){var n=ir(e);n.val()&&n.val()!==n.attr("value")&&n.trigger("change")})},100)},n._attachEventHandlers=function(){var t=null;ir(document).on("focus","input",function(e){var n=ir(e.currentTarget).closest("form").find("input").not("[type=file]").not('[class*="picker"]');t=setInterval(function(){n.each(function(t,e){var n=ir(e);n.val()!==n.attr("value")&&n.trigger("change")})},100)}).on("blur",".form-group input",function(){clearInterval(t)})},e._jQueryInterface=function(t){return this.each(function(){var n=ir(this),i=n.data(or);i||(i=new e(n,t),n.data(or,i))})},e}(fr),ir.fn[sr]=cr._jQueryInterface,ir.fn[sr].Constructor=cr,ir.fn[sr].noConflict=function(){return ir.fn[sr]=ar,cr._jQueryInterface};Popper.Defaults.modifiers.computeStyle.gpuAcceleration=!1;var Er,br,Cr,Ir,Tr,Ar,Sr;Er=jQuery,Cr="bmd."+(br="bootstrapMaterialDesign"),Ir=br,Tr=Er.fn[Ir],Ar={global:{validate:!1,label:{className:"bmd-label-static"}},autofill:{selector:"body"},checkbox:{selector:".checkbox > label > input[type=checkbox]"},checkboxInline:{selector:"label.checkbox-inline > input[type=checkbox]"},collapseInline:{selector:'.bmd-collapse-inline [data-toggle="collapse"]'},drawer:{selector:".bmd-layout-drawer"},file:{selector:"input[type=file]"},radio:{selector:".radio > label > input[type=radio]"},radioInline:{selector:"label.radio-inline > input[type=radio]"},ripples:{selector:[".btn:not(.ripple-none)",".card-image:not(.ripple-none)",".navbar a:not(.ripple-none)",".dropdown-menu a:not(.ripple-none)",".nav-tabs a:not(.ripple-none)",".pagination li:not(.active):not(.disabled) a:not(.ripple-none)",".ripple"]},select:{selector:["select"]},switch:{selector:".switch > label > input[type=checkbox]"},text:{selector:["input.form-control:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])"]},textarea:{selector:["textarea.form-control"]},arrive:!0,instantiation:["ripples","checkbox","checkboxInline","collapseInline","drawer","radio","radioInline","switch","text","textarea","autofill"]},Sr=function(){function t(t,e){var n=this;this.$element=t,this.config=Er.extend(!0,{},Ar,e);var i=Er(document),r=function(t){var e=n.config[t];if(e){var r=n._resolveSelector(e);e=Er.extend(!0,{},n.config.global,e);var o="bmd"+(""+(t.charAt(0).toUpperCase()+t.slice(1)));try{Er(r)[o](e),document.arrive&&n.config.arrive&&i.arrive(r,function(){Er(this)[o](e)})}catch(t){var s="Failed to instantiate component: $('"+r+"')["+o+"]("+e+")";throw console.error(s,t,"\nSelected elements: ",Er(r)),t}}},o=this.config.instantiation,s=Array.isArray(o),a=0;for(o=s?o:o[Symbol.iterator]();;){var l;if(s){if(a>=o.length)break;l=o[a++]}else{if((a=o.next()).done)break;l=a.value}r(l)}}var e=t.prototype;return e.dispose=function(){this.$element.data(Cr,null),this.$element=null,this.config=null},e._resolveSelector=function(t){var e=t.selector;return Array.isArray(e)&&(e=e.join(", ")),e},t._jQueryInterface=function(e){return this.each(function(){var n=Er(this),i=n.data(Cr);i||(i=new t(n,e),n.data(Cr,i))})},t}(),Er.fn[Ir]=Sr._jQueryInterface,Er.fn[Ir].Constructor=Sr,Er.fn[Ir].noConflict=function(){return Er.fn[Ir]=Tr,Sr._jQueryInterface}});

//! moment.js
//! version : 2.14.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return md.apply(null, arguments)
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function b(a) {
        md = a
    }

    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    }

    function e(a) {
        var b;
        for (b in a)
            // even if its not own property I'd still call it non-empty
            return !1;
        return !0
    }

    function f(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function g(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function h(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function i(a, b) {
        for (var c in b) h(b, c) && (a[c] = b[c]);
        return h(b, "toString") && (a.toString = b.toString), h(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function j(a, b, c, d) {
        return qb(a, b, c, d, !0).utc()
    }

    function k() {
        // We need to deep clone this object.
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function l(a) {
        return null == a._pf && (a._pf = k()), a._pf
    }

    function m(a) {
        if (null == a._isValid) {
            var b = l(a),
                c = nd.call(b.parsedDateParts, function(a) {
                    return null != a
                });
            a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function n(a) {
        var b = j(NaN);
        return null != a ? i(l(b), a) : l(b).userInvalidated = !0, b
    }

    function o(a) {
        return void 0 === a
    }

    function p(a, b) {
        var c, d, e;
        if (o(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), o(b._i) || (a._i = b._i), o(b._f) || (a._f = b._f), o(b._l) || (a._l = b._l), o(b._strict) || (a._strict = b._strict), o(b._tzm) || (a._tzm = b._tzm), o(b._isUTC) || (a._isUTC = b._isUTC), o(b._offset) || (a._offset = b._offset), o(b._pf) || (a._pf = l(b)), o(b._locale) || (a._locale = b._locale), od.length > 0)
            for (c in od) d = od[c], e = b[d], o(e) || (a[d] = e);
        return a
    }
    // Moment prototype object
    function q(b) {
        p(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), pd === !1 && (pd = !0, a.updateOffset(this), pd = !1)
    }

    function r(a) {
        return a instanceof q || null != a && null != a._isAMomentObject
    }

    function s(a) {
        return 0 > a ? Math.ceil(a) || 0 : Math.floor(a)
    }

    function t(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = s(b)), c
    }
    // compare two arrays, return the number of differences
    function u(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++;
        return g + f
    }

    function v(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function w(b, c) {
        var d = !0;
        return i(function() {
            return null != a.deprecationHandler && a.deprecationHandler(null, b), d && (v(b + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), d = !1), c.apply(this, arguments)
        }, c)
    }

    function x(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), qd[b] || (v(c), qd[b] = !0)
    }

    function y(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function z(a) {
        var b, c;
        for (c in a) b = a[c], y(b) ? this[c] = b : this["_" + c] = b;
        this._config = a,
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function A(a, b) {
        var c, e = i({}, a);
        for (c in b) h(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, i(e[c], a[c]), i(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) h(a, c) && !h(b, c) && d(a[c]) && (
            // make sure changes to properties don't modify parent config
            e[c] = i({}, e[c]));
        return e
    }

    function B(a) {
        null != a && this.set(a)
    }

    function C(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return y(d) ? d.call(b, c) : d
    }

    function D(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function E() {
        return this._invalidDate
    }

    function F(a) {
        return this._ordinal.replace("%d", a)
    }

    function G(a, b, c, d) {
        var e = this._relativeTime[c];
        return y(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function H(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return y(c) ? c(b) : c.replace(/%s/i, b)
    }

    function I(a, b) {
        var c = a.toLowerCase();
        zd[c] = zd[c + "s"] = zd[b] = a
    }

    function J(a) {
        return "string" == typeof a ? zd[a] || zd[a.toLowerCase()] : void 0
    }

    function K(a) {
        var b, c, d = {};
        for (c in a) h(a, c) && (b = J(c), b && (d[b] = a[c]));
        return d
    }

    function L(a, b) {
        Ad[a] = b
    }

    function M(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: Ad[c]
        });
        return b.sort(function(a, b) {
            return a.priority - b.priority
        }), b
    }

    function N(b, c) {
        return function(d) {
            return null != d ? (P(this, b, d), a.updateOffset(this, c), this) : O(this, b)
        }
    }

    function O(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function P(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }
    // MOMENTS
    function Q(a) {
        return a = J(a), y(this[a]) ? this[a]() : this
    }

    function R(a, b) {
        if ("object" == typeof a) {
            a = K(a);
            for (var c = M(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
        } else if (a = J(a), y(this[a])) return this[a](b);
        return this
    }

    function S(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function T(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (Ed[a] = e), b && (Ed[b[0]] = function() {
            return S(e.apply(this, arguments), b[1], b[2])
        }), c && (Ed[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function U(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function V(a) {
        var b, c, d = a.match(Bd);
        for (b = 0, c = d.length; c > b; b++) Ed[d[b]] ? d[b] = Ed[d[b]] : d[b] = U(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; c > e; e++) f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
            return f
        }
    }
    // format date using native date object
    function W(a, b) {
        return a.isValid() ? (b = X(b, a.localeData()), Dd[b] = Dd[b] || V(b), Dd[b](a)) : a.localeData().invalidDate()
    }

    function X(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Cd.lastIndex = 0; d >= 0 && Cd.test(a);) a = a.replace(Cd, c), Cd.lastIndex = 0, d -= 1;
        return a
    }

    function Y(a, b, c) {
        Wd[a] = y(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }

    function Z(a, b) {
        return h(Wd, a) ? Wd[a](b._strict, b._locale) : new RegExp($(a))
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function $(a) {
        return _(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function _(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function aa(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                c[b] = t(a)
            }), c = 0; c < a.length; c++) Xd[a[c]] = d
    }

    function ba(a, b) {
        aa(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function ca(a, b, c) {
        null != b && h(Xd, a) && Xd[a](b, c._a, c, a)
    }

    function da(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function ea(a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || fe).test(b) ? "format" : "standalone"][a.month()]
    }

    function fa(a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[fe.test(b) ? "format" : "standalone"][a.month()]
    }

    function ga(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (
                // this is not used
                this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; 12 > d; ++d) f = j([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : null) : (e = sd.call(this._longMonthsParse, g), -1 !== e ? e : null) : "MMM" === b ? (e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : (e = sd.call(this._longMonthsParse, g), -1 !== e ? e : null)) : (e = sd.call(this._longMonthsParse, g), -1 !== e ? e : (e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : null))
    }

    function ha(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ga.call(this, a, b, c);
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            // test the regex
            if (e = j([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }
    // MOMENTS
    function ia(a, b) {
        var c;
        if (!a.isValid())
            // No op
            return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = t(b);
            else
                // TODO: Another silent failure?
                if (b = a.localeData().monthsParse(b), "number" != typeof b) return a;
        return c = Math.min(a.date(), da(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
    }

    function ja(b) {
        return null != b ? (ia(this, b), a.updateOffset(this, !0), this) : O(this, "Month")
    }

    function ka() {
        return da(this.year(), this.month())
    }

    function la(a) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = ie), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function ma(a) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = je), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    }

    function na() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; 12 > b; b++) c = j([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (
            // Sorting makes sure if one month (or abbr) is a prefix of another it
            // will match the longer piece.
            d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = _(d[b]), e[b] = _(e[b]);
        for (b = 0; 24 > b; b++) f[b] = _(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
    }
    // HELPERS
    function oa(a) {
        return pa(a) ? 366 : 365
    }

    function pa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function qa() {
        return pa(this.year())
    }

    function ra(a, b, c, d, e, f, g) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var h = new Date(a, b, c, d, e, f, g);
        //the date constructor remaps years 0-99 to 1900-1999
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function sa(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        //the Date.UTC function remaps years 0-99 to 1900-1999
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }
    // start-of-first-week - start-of-year
    function ta(a, b, c) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            d = 7 + b - c,
            // first-week day local weekday -- which local weekday is fwd
            e = (7 + sa(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function ua(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = ta(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1, g = oa(f) + j) : j > oa(a) ? (f = a + 1, g = j - oa(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function va(a, b, c) {
        var d, e, f = ta(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1, d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function wa(a, b, c) {
        var d = ta(a, b, c),
            e = ta(a + 1, b, c);
        return (oa(a) - d + e) / 7
    }
    // HELPERS
    // LOCALES
    function xa(a) {
        return va(a, this._week.dow, this._week.doy).week
    }

    function ya() {
        return this._week.dow
    }

    function za() {
        return this._week.doy
    }
    // MOMENTS
    function Aa(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ba(a) {
        var b = va(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }
    // HELPERS
    function Ca(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Da(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
    }

    function Ea(a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
    }

    function Fa(a) {
        return this._weekdaysShort[a.day()]
    }

    function Ga(a) {
        return this._weekdaysMin[a.day()]
    }

    function Ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; 7 > d; ++d) f = j([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : null) : "ddd" === b ? (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : null) : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null) : "dddd" === b ? (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : "ddd" === b ? (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : (e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : (e = sd.call(this._weekdaysParse, g), -1 !== e ? e : (e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : null)))
    }

    function Ia(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ha.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
            // test the regex
            if (e = j([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }
    // MOMENTS
    function Ja(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Ca(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (null != a) {
            var b = Da(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7)
        }
        return this.day() || 7
    }

    function Ma(a) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = pe), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Na(a) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Oa(a) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = re), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Pa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d, e, f, g = [],
            h = [],
            i = [],
            k = [];
        for (b = 0; 7 > b; b++) c = j([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), k.push(d), k.push(e), k.push(f);
        for (
            // Sorting makes sure if one weekday (or abbr) is a prefix of another it
            // will match the longer piece.
            g.sort(a), h.sort(a), i.sort(a), k.sort(a), b = 0; 7 > b; b++) h[b] = _(h[b]), i[b] = _(i[b]), k[b] = _(k[b]);
        this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
    }
    // FORMATTING
    function Qa() {
        return this.hours() % 12 || 12
    }

    function Ra() {
        return this.hours() || 24
    }

    function Sa(a, b) {
        T(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }
    // PARSING
    function Ta(a, b) {
        return b._meridiemParse
    }
    // LOCALES
    function Ua(a) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Va(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Wa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function Xa(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = Wa(a[f]).split("-"), b = e.length, c = Wa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = Ya(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && u(e, c, !0) >= b - 1)
                    //the next array item is better than a shallower substring of this one
                    break;
                b--
            }
            f++
        }
        return null
    }

    function Ya(a) {
        var b = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!we[a] && "undefined" != typeof module && module && module.exports) try {
            b = se._abbr, require("./locale/" + a),
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                Za(b)
        } catch (c) {}
        return we[a]
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function Za(a, b) {
        var c;
        // moment.duration._locale = moment._locale = data;
        return a && (c = o(b) ? ab(a) : $a(a, b), c && (se = c)), se._abbr
    }

    function $a(a, b) {
        if (null !== b) {
            var c = ve;
            // treat as if there is no base config
            // backwards compat for now: also set the locale
            return b.abbr = a, null != we[a] ? (x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = we[a]._config) : null != b.parentLocale && (null != we[b.parentLocale] ? c = we[b.parentLocale]._config : x("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), we[a] = new B(A(c, b)), Za(a), we[a]
        }
        // useful for testing
        return delete we[a], null
    }

    function _a(a, b) {
        if (null != b) {
            var c, d = ve;
            // MERGE
            null != we[a] && (d = we[a]._config), b = A(d, b), c = new B(b), c.parentLocale = we[a], we[a] = c,
                // backwards compat for now: also set the locale
                Za(a)
        } else
            // pass null for config to unupdate, useful for tests
            null != we[a] && (null != we[a].parentLocale ? we[a] = we[a].parentLocale : null != we[a] && delete we[a]);
        return we[a]
    }
    // returns locale data
    function ab(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return se;
        if (!c(a)) {
            if (b = Ya(a)) return b;
            a = [a]
        }
        return Xa(a)
    }

    function bb() {
        return rd(we)
    }

    function cb(a) {
        var b, c = a._a;
        return c && -2 === l(a).overflow && (b = c[Zd] < 0 || c[Zd] > 11 ? Zd : c[$d] < 1 || c[$d] > da(c[Yd], c[Zd]) ? $d : c[_d] < 0 || c[_d] > 24 || 24 === c[_d] && (0 !== c[ae] || 0 !== c[be] || 0 !== c[ce]) ? _d : c[ae] < 0 || c[ae] > 59 ? ae : c[be] < 0 || c[be] > 59 ? be : c[ce] < 0 || c[ce] > 999 ? ce : -1, l(a)._overflowDayOfYear && (Yd > b || b > $d) && (b = $d), l(a)._overflowWeeks && -1 === b && (b = de), l(a)._overflowWeekday && -1 === b && (b = ee), l(a).overflow = b), a
    }
    // date from iso format
    function db(a) {
        var b, c, d, e, f, g, h = a._i,
            i = xe.exec(h) || ye.exec(h);
        if (i) {
            for (l(a).iso = !0, b = 0, c = Ae.length; c > b; b++)
                if (Ae[b][1].exec(i[1])) {
                    e = Ae[b][0], d = Ae[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Be.length; c > b; b++)
                    if (Be[b][1].exec(i[3])) {
                        // match[2] should be 'T' or space
                        f = (i[2] || " ") + Be[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!ze.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), jb(a)
        } else a._isValid = !1
    }
    // date from iso format or fallback
    function eb(b) {
        var c = Ce.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (db(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }
    // Pick the first defined of two or three arguments.
    function fb(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function gb(b) {
        // hooks is actually the exported moment object
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function hb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything
            for (d = gb(a), a._w && null == a._a[$d] && null == a._a[Zd] && ib(a), a._dayOfYear && (e = fb(a._a[Yd], d[Yd]), a._dayOfYear > oa(e) && (l(a)._overflowDayOfYear = !0), c = sa(e, 0, a._dayOfYear), a._a[Zd] = c.getUTCMonth(), a._a[$d] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            // Zero out whatever was not defaulted, including time
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            // Check for 24:00:00.000
            24 === a._a[_d] && 0 === a._a[ae] && 0 === a._a[be] && 0 === a._a[ce] && (a._nextDay = !0, a._a[_d] = 0), a._d = (a._useUTC ? sa : ra).apply(null, f),
                // Apply timezone offset from input. The actual utcOffset can be changed
                // with parseZone.
                null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[_d] = 24)
        }
    }

    function ib(a) {
        var b, c, d, e, f, g, h, i;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = fb(b.GG, a._a[Yd], va(rb(), 1, 4).year), d = fb(b.W, 1), e = fb(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = fb(b.gg, a._a[Yd], va(rb(), f, g).year), d = fb(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? l(a)._overflowWeeks = !0 : null != i ? l(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g), a._a[Yd] = h.year, a._dayOfYear = h.dayOfYear)
    }
    // date from string and format string
    function jb(b) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (b._f === a.ISO_8601) return void db(b);
        b._a = [], l(b).empty = !0;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = X(b._f, b._locale).match(Bd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(Z(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && l(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Ed[f] ? (d ? l(b).empty = !1 : l(b).unusedTokens.push(f), ca(f, d, b)) : b._strict && !d && l(b).unusedTokens.push(f);
        // add remaining unparsed input length to the string
        l(b).charsLeftOver = i - j, h.length > 0 && l(b).unusedInput.push(h),
            // clear _12h flag if hour is <= 12
            b._a[_d] <= 12 && l(b).bigHour === !0 && b._a[_d] > 0 && (l(b).bigHour = void 0), l(b).parsedDateParts = b._a.slice(0), l(b).meridiem = b._meridiem,
            // handle meridiem
            b._a[_d] = kb(b._locale, b._a[_d], b._meridiem), hb(b), cb(b)
    }

    function kb(a, b, c) {
        var d;
        // Fallback
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }
    // date from string and array of format strings
    function lb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return l(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], jb(b), m(b) && (f += l(b).charsLeftOver, f += 10 * l(b).unusedTokens.length, l(b).score = f, (null == d || d > f) && (d = f, c = b));
        i(a, c || b)
    }

    function mb(a) {
        if (!a._d) {
            var b = K(a._i);
            a._a = g([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), hb(a)
        }
    }

    function nb(a) {
        var b = new q(cb(ob(a)));
        // Adding is smart enough around DST
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function ob(a) {
        var b = a._i,
            d = a._f;
        return a._locale = a._locale || ab(a._l), null === b || void 0 === d && "" === b ? n({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), r(b) ? new q(cb(b)) : (c(d) ? lb(a) : f(b) ? a._d = b : d ? jb(a) : pb(a), m(a) || (a._d = null), a))
    }

    function pb(b) {
        var d = b._i;
        void 0 === d ? b._d = new Date(a.now()) : f(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? eb(b) : c(d) ? (b._a = g(d.slice(0), function(a) {
                return parseInt(a, 10)
            }), hb(b)) : "object" == typeof d ? mb(b) : "number" == typeof d ?
            // from milliseconds
            b._d = new Date(d) : a.createFromInputFallback(b)
    }

    function qb(a, b, f, g, h) {
        var i = {};
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        return "boolean" == typeof f && (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, nb(i)
    }

    function rb(a, b, c, d) {
        return qb(a, b, c, d, !1)
    }
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function sb(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return rb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d
    }
    // TODO: Use [].sort instead?
    function tb() {
        var a = [].slice.call(arguments, 0);
        return sb("isBefore", a)
    }

    function ub() {
        var a = [].slice.call(arguments, 0);
        return sb("isAfter", a)
    }

    function vb(a) {
        var b = K(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        // representation for dateAddRemove
        this._milliseconds = +k + 1e3 * j + // 1000
            6e4 * i + // 1000 * 60
            1e3 * h * 60 * 60, //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            this._days = +g + 7 * f,
            // It is impossible translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = ab(), this._bubble()
    }

    function wb(a) {
        return a instanceof vb
    }
    // FORMATTING
    function xb(a, b) {
        T(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return 0 > a && (a = -a, c = "-"), c + S(~~(a / 60), 2) + b + S(~~a % 60, 2)
        })
    }

    function yb(a, b) {
        var c = (b || "").match(a) || [],
            d = c[c.length - 1] || [],
            e = (d + "").match(Ge) || ["-", 0, 0],
            f = +(60 * e[1]) + t(e[2]);
        return "+" === e[0] ? f : -f
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function zb(b, c) {
        var d, e;
        // Use low-level api, because this fn is low-level api.
        return c._isUTC ? (d = c.clone(), e = (r(b) || f(b) ? b.valueOf() : rb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : rb(b).local()
    }

    function Ab(a) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function Bb(b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ("string" == typeof b ? b = yb(Td, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ab(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Sb(this, Mb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ab(this) : null != b ? this : NaN
    }

    function Cb(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Db(a) {
        return this.utcOffset(0, a)
    }

    function Eb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ab(this), "m")), this
    }

    function Fb() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(yb(Sd, this._i)), this
    }

    function Gb(a) {
        return this.isValid() ? (a = a ? rb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
    }

    function Hb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ib() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (p(a, this), a = ob(a), a._a) {
            var b = a._isUTC ? j(a._a) : rb(a._a);
            this._isDSTShifted = this.isValid() && u(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Jb() {
        return this.isValid() ? !this._isUTC : !1
    }

    function Kb() {
        return this.isValid() ? this._isUTC : !1
    }

    function Lb() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Mb(a, b) {
        var c, d, e, f = a,
            // matching against regexp is expensive, do it on demand
            g = null; // checks for null or undefined
        return wb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = He.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
            y: 0,
            d: t(g[$d]) * c,
            h: t(g[_d]) * c,
            m: t(g[ae]) * c,
            s: t(g[be]) * c,
            ms: t(g[ce]) * c
        }) : (g = Ie.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {
            y: Nb(g[2], c),
            M: Nb(g[3], c),
            w: Nb(g[4], c),
            d: Nb(g[5], c),
            h: Nb(g[6], c),
            m: Nb(g[7], c),
            s: Nb(g[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Pb(rb(f.from), rb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new vb(f), wb(a) && h(a, "_locale") && (d._locale = a._locale), d
    }

    function Nb(a, b) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var c = a && parseFloat(a.replace(",", "."));
        // apply sign while we're at it
        return (isNaN(c) ? 0 : c) * b
    }

    function Ob(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Pb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = zb(b, a), a.isBefore(b) ? c = Ob(a, b) : (c = Ob(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Qb(a) {
        return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
    }
    // TODO: remove 'name' arg after deprecation is removed
    function Rb(a, b) {
        return function(c, d) {
            var e, f;
            //invert the arguments, but complain about it
            return null === d || isNaN(+d) || (x(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Mb(c, d), Sb(this, e, a), this
        }
    }

    function Sb(b, c, d, e) {
        var f = c._milliseconds,
            g = Qb(c._days),
            h = Qb(c._months);
        b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(b._d.valueOf() + f * d), g && P(b, "Date", O(b, "Date") + g * d), h && ia(b, O(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function Tb(a, b) {
        var c = a.diff(b, "days", !0);
        return -6 > c ? "sameElse" : -1 > c ? "lastWeek" : 0 > c ? "lastDay" : 1 > c ? "sameDay" : 2 > c ? "nextDay" : 7 > c ? "nextWeek" : "sameElse"
    }

    function Ub(b, c) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var d = b || rb(),
            e = zb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (y(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, rb(d)))
    }

    function Vb() {
        return new q(this)
    }

    function Wb(a, b) {
        var c = r(a) ? a : rb(a);
        return this.isValid() && c.isValid() ? (b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf()) : !1
    }

    function Xb(a, b) {
        var c = r(a) ? a : rb(a);
        return this.isValid() && c.isValid() ? (b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf()) : !1
    }

    function Yb(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    }

    function Zb(a, b) {
        var c, d = r(a) ? a : rb(a);
        return this.isValid() && d.isValid() ? (b = J(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf())) : !1
    }

    function $b(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function _b(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function ac(a, b, c) {
        var d, e, f, g; // 1000
        // 1000 * 60
        // 1000 * 60 * 60
        // 1000 * 60 * 60 * 24, negate dst
        // 1000 * 60 * 60 * 24 * 7, negate dst
        return this.isValid() ? (d = zb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = J(b), "year" === b || "month" === b || "quarter" === b ? (g = bc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : s(g)) : NaN) : NaN
    }

    function bc(a, b) {
        // difference in months
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            f = a.clone().add(e, "months");
        //check for negative zero, return zero if negative zero
        // linear across the month
        // linear across the month
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
    }

    function cc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function dc() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? y(Date.prototype.toISOString) ? this.toDate().toISOString() : W(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function ec(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = W(this, b);
        return this.localeData().postformat(c)
    }

    function fc(a, b) {
        return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function gc(a) {
        return this.from(rb(), a)
    }

    function hc(a, b) {
        return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function ic(a) {
        return this.to(rb(), a)
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function jc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = ab(a), null != b && (this._locale = b), this)
    }

    function kc() {
        return this._locale
    }

    function lc(a) {
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (a = J(a)) {
            case "year":
                this.month(0); /* falls through */
            case "quarter":
            case "month":
                this.date(1); /* falls through */
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0); /* falls through */
            case "hour":
                this.minutes(0); /* falls through */
            case "minute":
                this.seconds(0); /* falls through */
            case "second":
                this.milliseconds(0)
        }
        // weeks are a special case
        // quarters are also special
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function mc(a) {
        // 'date' is an alias for 'day', so it should be considered as such.
        return a = J(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
    }

    function nc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function oc() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function pc() {
        return new Date(this.valueOf())
    }

    function qc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function rc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function sc() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null
    }

    function tc() {
        return m(this)
    }

    function uc() {
        return i({}, l(this))
    }

    function vc() {
        return l(this).overflow
    }

    function wc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function xc(a, b) {
        T(0, [a, a.length], 0, b)
    }
    // MOMENTS
    function yc(a) {
        return Cc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function zc(a) {
        return Cc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Ac() {
        return wa(this.year(), 1, 4)
    }

    function Bc() {
        var a = this.localeData()._week;
        return wa(this.year(), a.dow, a.doy)
    }

    function Cc(a, b, c, d, e) {
        var f;
        return null == a ? va(this, d, e).year : (f = wa(a, d, e), b > f && (b = f), Dc.call(this, a, b, c, d, e))
    }

    function Dc(a, b, c, d, e) {
        var f = ua(a, b, c, d, e),
            g = sa(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }
    // MOMENTS
    function Ec(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }
    // HELPERS
    // MOMENTS
    function Fc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function Gc(a, b) {
        b[ce] = t(1e3 * ("0." + a))
    }
    // MOMENTS
    function Hc() {
        return this._isUTC ? "UTC" : ""
    }

    function Ic() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Jc(a) {
        return rb(1e3 * a)
    }

    function Kc() {
        return rb.apply(null, arguments).parseZone()
    }

    function Lc(a) {
        return a
    }

    function Mc(a, b, c, d) {
        var e = ab(),
            f = j().set(d, b);
        return e[c](f, a)
    }

    function Nc(a, b, c) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return Mc(a, b, c, "month");
        var d, e = [];
        for (d = 0; 12 > d; d++) e[d] = Mc(a, d, c, "month");
        return e
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function Oc(a, b, c, d) {
        "boolean" == typeof a ? ("number" == typeof b && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, "number" == typeof b && (c = b, b = void 0), b = b || "");
        var e = ab(),
            f = a ? e._week.dow : 0;
        if (null != c) return Mc(b, (c + f) % 7, d, "day");
        var g, h = [];
        for (g = 0; 7 > g; g++) h[g] = Mc(b, (g + f) % 7, d, "day");
        return h
    }

    function Pc(a, b) {
        return Nc(a, b, "months")
    }

    function Qc(a, b) {
        return Nc(a, b, "monthsShort")
    }

    function Rc(a, b, c) {
        return Oc(a, b, c, "weekdays")
    }

    function Sc(a, b, c) {
        return Oc(a, b, c, "weekdaysShort")
    }

    function Tc(a, b, c) {
        return Oc(a, b, c, "weekdaysMin")
    }

    function Uc() {
        var a = this._data;
        return this._milliseconds = Ue(this._milliseconds), this._days = Ue(this._days), this._months = Ue(this._months), a.milliseconds = Ue(a.milliseconds), a.seconds = Ue(a.seconds), a.minutes = Ue(a.minutes), a.hours = Ue(a.hours), a.months = Ue(a.months), a.years = Ue(a.years), this
    }

    function Vc(a, b, c, d) {
        var e = Mb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function Wc(a, b) {
        return Vc(this, a, b, 1)
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function Xc(a, b) {
        return Vc(this, a, b, -1)
    }

    function Yc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function Zc() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        // convert days to months
        // 12 months -> 1 year
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Yc(_c(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = s(f / 1e3), i.seconds = a % 60, b = s(a / 60), i.minutes = b % 60, c = s(b / 60), i.hours = c % 24, g += s(c / 24), e = s($c(g)), h += e, g -= Yc(_c(e)), d = s(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function $c(a) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return 4800 * a / 146097
    }

    function _c(a) {
        // the reverse of daysToMonths
        return 146097 * a / 4800
    }

    function ad(a) {
        var b, c, d = this._milliseconds;
        if (a = J(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + $c(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(_c(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
                // Math.floor prevents floating point math errors here
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }
    // TODO: Use this.as('ms')?
    function bd() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * t(this._months / 12)
    }

    function cd(a) {
        return function() {
            return this.as(a)
        }
    }

    function dd(a) {
        return a = J(a), this[a + "s"]()
    }

    function ed(a) {
        return function() {
            return this._data[a]
        }
    }

    function fd() {
        return s(this.days() / 7)
    }
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function gd(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function hd(a, b, c) {
        var d = Mb(a).abs(),
            e = jf(d.as("s")),
            f = jf(d.as("m")),
            g = jf(d.as("h")),
            h = jf(d.as("d")),
            i = jf(d.as("M")),
            j = jf(d.as("y")),
            k = e < kf.s && ["s", e] || 1 >= f && ["m"] || f < kf.m && ["mm", f] || 1 >= g && ["h"] || g < kf.h && ["hh", g] || 1 >= h && ["d"] || h < kf.d && ["dd", h] || 1 >= i && ["M"] || i < kf.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, gd.apply(null, k)
    }
    // This function allows you to set the rounding function for relative time strings
    function id(a) {
        return void 0 === a ? jf : "function" == typeof a ? (jf = a, !0) : !1
    }
    // This function allows you to set a threshold for relative time strings
    function jd(a, b) {
        return void 0 === kf[a] ? !1 : void 0 === b ? kf[a] : (kf[a] = b, !0)
    }

    function kd(a) {
        var b = this.localeData(),
            c = hd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function ld() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var a, b, c, d = lf(this._milliseconds) / 1e3,
            e = lf(this._days),
            f = lf(this._months);
        a = s(d / 60), b = s(a / 60), d %= 60, a %= 60, c = s(f / 12), f %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var md, nd;
    nd = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; c > d; d++)
            if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1
    };
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var od = a.momentProperties = [],
        pd = !1,
        qd = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var rd;
    rd = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a) h(a, b) && c.push(b);
        return c
    };
    var sd, td = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        ud = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        vd = "Invalid date",
        wd = "%d",
        xd = /\d{1,2}/,
        yd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        zd = {},
        Ad = {},
        Bd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Cd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Dd = {},
        Ed = {},
        Fd = /\d/,
        Gd = /\d\d/,
        Hd = /\d{3}/,
        Id = /\d{4}/,
        Jd = /[+-]?\d{6}/,
        Kd = /\d\d?/,
        Ld = /\d\d\d\d?/,
        Md = /\d\d\d\d\d\d?/,
        Nd = /\d{1,3}/,
        Od = /\d{1,4}/,
        Pd = /[+-]?\d{1,6}/,
        Qd = /\d+/,
        Rd = /[+-]?\d+/,
        Sd = /Z|[+-]\d\d:?\d\d/gi,
        Td = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Ud = /[+-]?\d+(\.\d{1,3})?/,
        Vd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        Wd = {},
        Xd = {},
        Yd = 0,
        Zd = 1,
        $d = 2,
        _d = 3,
        ae = 4,
        be = 5,
        ce = 6,
        de = 7,
        ee = 8;
    sd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        // I know
        var b;
        for (b = 0; b < this.length; ++b)
            if (this[b] === a) return b;
        return -1
    }, T("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), T("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), T("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), I("month", "M"), L("month", 8), Y("M", Kd), Y("MM", Kd, Gd), Y("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }), Y("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }), aa(["M", "MM"], function(a, b) {
        b[Zd] = t(a) - 1
    }), aa(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[Zd] = e : l(c).invalidMonth = a
    });
    // LOCALES
    var fe = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        ge = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        he = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ie = Vd,
        je = Vd;
    // FORMATTING
    T("Y", 0, 0, function() {
            var a = this.year();
            return 9999 >= a ? "" + a : "+" + a
        }), T(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), T(0, ["YYYY", 4], 0, "year"), T(0, ["YYYYY", 5], 0, "year"), T(0, ["YYYYYY", 6, !0], 0, "year"),
        // ALIASES
        I("year", "y"),
        // PRIORITIES
        L("year", 1),
        // PARSING
        Y("Y", Rd), Y("YY", Kd, Gd), Y("YYYY", Od, Id), Y("YYYYY", Pd, Jd), Y("YYYYYY", Pd, Jd), aa(["YYYYY", "YYYYYY"], Yd), aa("YYYY", function(b, c) {
            c[Yd] = 2 === b.length ? a.parseTwoDigitYear(b) : t(b)
        }), aa("YY", function(b, c) {
            c[Yd] = a.parseTwoDigitYear(b)
        }), aa("Y", function(a, b) {
            b[Yd] = parseInt(a, 10)
        }),
        // HOOKS
        a.parseTwoDigitYear = function(a) {
            return t(a) + (t(a) > 68 ? 1900 : 2e3)
        };
    // MOMENTS
    var ke = N("FullYear", !0);
    // FORMATTING
    T("w", ["ww", 2], "wo", "week"), T("W", ["WW", 2], "Wo", "isoWeek"),
        // ALIASES
        I("week", "w"), I("isoWeek", "W"),
        // PRIORITIES
        L("week", 5), L("isoWeek", 5),
        // PARSING
        Y("w", Kd), Y("ww", Kd, Gd), Y("W", Kd), Y("WW", Kd, Gd), ba(["w", "ww", "W", "WW"], function(a, b, c, d) {
            b[d.substr(0, 1)] = t(a)
        });
    var le = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6
    };
    // FORMATTING
    T("d", 0, "do", "day"), T("dd", 0, 0, function(a) {
            return this.localeData().weekdaysMin(this, a)
        }), T("ddd", 0, 0, function(a) {
            return this.localeData().weekdaysShort(this, a)
        }), T("dddd", 0, 0, function(a) {
            return this.localeData().weekdays(this, a)
        }), T("e", 0, 0, "weekday"), T("E", 0, 0, "isoWeekday"),
        // ALIASES
        I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"),
        // PRIORITY
        L("day", 11), L("weekday", 11), L("isoWeekday", 11),
        // PARSING
        Y("d", Kd), Y("e", Kd), Y("E", Kd), Y("dd", function(a, b) {
            return b.weekdaysMinRegex(a)
        }), Y("ddd", function(a, b) {
            return b.weekdaysShortRegex(a)
        }), Y("dddd", function(a, b) {
            return b.weekdaysRegex(a)
        }), ba(["dd", "ddd", "dddd"], function(a, b, c, d) {
            var e = c._locale.weekdaysParse(a, d, c._strict);
            // if we didn't get a weekday name, mark the date as invalid
            null != e ? b.d = e : l(c).invalidWeekday = a
        }), ba(["d", "e", "E"], function(a, b, c, d) {
            b[d] = t(a)
        });
    // LOCALES
    var me = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        ne = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        oe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        pe = Vd,
        qe = Vd,
        re = Vd;
    T("H", ["HH", 2], 0, "hour"), T("h", ["hh", 2], 0, Qa), T("k", ["kk", 2], 0, Ra), T("hmm", 0, 0, function() {
            return "" + Qa.apply(this) + S(this.minutes(), 2)
        }), T("hmmss", 0, 0, function() {
            return "" + Qa.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2)
        }), T("Hmm", 0, 0, function() {
            return "" + this.hours() + S(this.minutes(), 2)
        }), T("Hmmss", 0, 0, function() {
            return "" + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2)
        }), Sa("a", !0), Sa("A", !1),
        // ALIASES
        I("hour", "h"),
        // PRIORITY
        L("hour", 13), Y("a", Ta), Y("A", Ta), Y("H", Kd), Y("h", Kd), Y("HH", Kd, Gd), Y("hh", Kd, Gd), Y("hmm", Ld), Y("hmmss", Md), Y("Hmm", Ld), Y("Hmmss", Md), aa(["H", "HH"], _d), aa(["a", "A"], function(a, b, c) {
            c._isPm = c._locale.isPM(a), c._meridiem = a
        }), aa(["h", "hh"], function(a, b, c) {
            b[_d] = t(a), l(c).bigHour = !0
        }), aa("hmm", function(a, b, c) {
            var d = a.length - 2;
            b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d)), l(c).bigHour = !0
        }), aa("hmmss", function(a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d, 2)), b[be] = t(a.substr(e)), l(c).bigHour = !0
        }), aa("Hmm", function(a, b, c) {
            var d = a.length - 2;
            b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d))
        }), aa("Hmmss", function(a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d, 2)), b[be] = t(a.substr(e))
        });
    var se, te = /[ap]\.?m?\.?/i,
        ue = N("Hours", !0),
        ve = {
            calendar: td,
            longDateFormat: ud,
            invalidDate: vd,
            ordinal: wd,
            ordinalParse: xd,
            relativeTime: yd,
            months: ge,
            monthsShort: he,
            week: le,
            weekdays: me,
            weekdaysMin: oe,
            weekdaysShort: ne,
            meridiemParse: te
        },
        we = {},
        xe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ye = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ze = /Z|[+-]\d\d(?::?\d\d)?/,
        Ae = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            // YYYYMM is NOT allowed by the standard
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Be = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Ce = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        }),
        // constant that refers to the ISO standard
        a.ISO_8601 = function() {};
    var De = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = rb.apply(null, arguments);
            return this.isValid() && a.isValid() ? this > a ? this : a : n()
        }),
        Ee = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = rb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : n()
        }),
        Fe = function() {
            return Date.now ? Date.now() : +new Date
        };
    xb("Z", ":"), xb("ZZ", ""),
        // PARSING
        Y("Z", Td), Y("ZZ", Td), aa(["Z", "ZZ"], function(a, b, c) {
            c._useUTC = !0, c._tzm = yb(Td, a)
        });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var Ge = /([\+\-]|\d\d)/gi;
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    a.updateOffset = function() {};
    // ASP.NET json date format regex
    var He = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
        Ie = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Mb.fn = vb.prototype;
    var Je = Rb(1, "add"),
        Ke = Rb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Le = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    // FORMATTING
    T(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), T(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), xc("gggg", "weekYear"), xc("ggggg", "weekYear"), xc("GGGG", "isoWeekYear"), xc("GGGGG", "isoWeekYear"),
        // ALIASES
        I("weekYear", "gg"), I("isoWeekYear", "GG"),
        // PRIORITY
        L("weekYear", 1), L("isoWeekYear", 1),
        // PARSING
        Y("G", Rd), Y("g", Rd), Y("GG", Kd, Gd), Y("gg", Kd, Gd), Y("GGGG", Od, Id), Y("gggg", Od, Id), Y("GGGGG", Pd, Jd), Y("ggggg", Pd, Jd), ba(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
            b[d.substr(0, 2)] = t(a)
        }), ba(["gg", "GG"], function(b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b)
        }),
        // FORMATTING
        T("Q", 0, "Qo", "quarter"),
        // ALIASES
        I("quarter", "Q"),
        // PRIORITY
        L("quarter", 7),
        // PARSING
        Y("Q", Fd), aa("Q", function(a, b) {
            b[Zd] = 3 * (t(a) - 1)
        }),
        // FORMATTING
        T("D", ["DD", 2], "Do", "date"),
        // ALIASES
        I("date", "D"),
        // PRIOROITY
        L("date", 9),
        // PARSING
        Y("D", Kd), Y("DD", Kd, Gd), Y("Do", function(a, b) {
            return a ? b._ordinalParse : b._ordinalParseLenient
        }), aa(["D", "DD"], $d), aa("Do", function(a, b) {
            b[$d] = t(a.match(Kd)[0], 10)
        });
    // MOMENTS
    var Me = N("Date", !0);
    // FORMATTING
    T("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        // ALIASES
        I("dayOfYear", "DDD"),
        // PRIORITY
        L("dayOfYear", 4),
        // PARSING
        Y("DDD", Nd), Y("DDDD", Hd), aa(["DDD", "DDDD"], function(a, b, c) {
            c._dayOfYear = t(a)
        }),
        // FORMATTING
        T("m", ["mm", 2], 0, "minute"),
        // ALIASES
        I("minute", "m"),
        // PRIORITY
        L("minute", 14),
        // PARSING
        Y("m", Kd), Y("mm", Kd, Gd), aa(["m", "mm"], ae);
    // MOMENTS
    var Ne = N("Minutes", !1);
    // FORMATTING
    T("s", ["ss", 2], 0, "second"),
        // ALIASES
        I("second", "s"),
        // PRIORITY
        L("second", 15),
        // PARSING
        Y("s", Kd), Y("ss", Kd, Gd), aa(["s", "ss"], be);
    // MOMENTS
    var Oe = N("Seconds", !1);
    // FORMATTING
    T("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), T(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), T(0, ["SSS", 3], 0, "millisecond"), T(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), T(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), T(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), T(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), T(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), T(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }),
        // ALIASES
        I("millisecond", "ms"),
        // PRIORITY
        L("millisecond", 16),
        // PARSING
        Y("S", Nd, Fd), Y("SS", Nd, Gd), Y("SSS", Nd, Hd);
    var Pe;
    for (Pe = "SSSS"; Pe.length <= 9; Pe += "S") Y(Pe, Qd);
    for (Pe = "S"; Pe.length <= 9; Pe += "S") aa(Pe, Gc);
    // MOMENTS
    var Qe = N("Milliseconds", !1);
    // FORMATTING
    T("z", 0, 0, "zoneAbbr"), T("zz", 0, 0, "zoneName");
    var Re = q.prototype;
    Re.add = Je, Re.calendar = Ub, Re.clone = Vb, Re.diff = ac, Re.endOf = mc, Re.format = ec, Re.from = fc, Re.fromNow = gc, Re.to = hc, Re.toNow = ic, Re.get = Q, Re.invalidAt = vc, Re.isAfter = Wb, Re.isBefore = Xb, Re.isBetween = Yb, Re.isSame = Zb, Re.isSameOrAfter = $b, Re.isSameOrBefore = _b, Re.isValid = tc, Re.lang = Le, Re.locale = jc, Re.localeData = kc, Re.max = Ee, Re.min = De, Re.parsingFlags = uc, Re.set = R, Re.startOf = lc, Re.subtract = Ke, Re.toArray = qc, Re.toObject = rc, Re.toDate = pc, Re.toISOString = dc, Re.toJSON = sc, Re.toString = cc, Re.unix = oc, Re.valueOf = nc, Re.creationData = wc,
        // Year
        Re.year = ke, Re.isLeapYear = qa,
        // Week Year
        Re.weekYear = yc, Re.isoWeekYear = zc,
        // Quarter
        Re.quarter = Re.quarters = Ec,
        // Month
        Re.month = ja, Re.daysInMonth = ka,
        // Week
        Re.week = Re.weeks = Aa, Re.isoWeek = Re.isoWeeks = Ba, Re.weeksInYear = Bc, Re.isoWeeksInYear = Ac,
        // Day
        Re.date = Me, Re.day = Re.days = Ja, Re.weekday = Ka, Re.isoWeekday = La, Re.dayOfYear = Fc,
        // Hour
        Re.hour = Re.hours = ue,
        // Minute
        Re.minute = Re.minutes = Ne,
        // Second
        Re.second = Re.seconds = Oe,
        // Millisecond
        Re.millisecond = Re.milliseconds = Qe,
        // Offset
        Re.utcOffset = Bb, Re.utc = Db, Re.local = Eb, Re.parseZone = Fb, Re.hasAlignedHourOffset = Gb, Re.isDST = Hb, Re.isLocal = Jb, Re.isUtcOffset = Kb, Re.isUtc = Lb, Re.isUTC = Lb,
        // Timezone
        Re.zoneAbbr = Hc, Re.zoneName = Ic,
        // Deprecations
        Re.dates = w("dates accessor is deprecated. Use date instead.", Me), Re.months = w("months accessor is deprecated. Use month instead", ja), Re.years = w("years accessor is deprecated. Use year instead", ke), Re.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Cb), Re.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ib);
    var Se = Re,
        Te = B.prototype;
    Te.calendar = C, Te.longDateFormat = D, Te.invalidDate = E, Te.ordinal = F, Te.preparse = Lc, Te.postformat = Lc, Te.relativeTime = G, Te.pastFuture = H, Te.set = z,
        // Month
        Te.months = ea, Te.monthsShort = fa, Te.monthsParse = ha, Te.monthsRegex = ma, Te.monthsShortRegex = la,
        // Week
        Te.week = xa, Te.firstDayOfYear = za, Te.firstDayOfWeek = ya,
        // Day of Week
        Te.weekdays = Ea, Te.weekdaysMin = Ga, Te.weekdaysShort = Fa, Te.weekdaysParse = Ia, Te.weekdaysRegex = Ma, Te.weekdaysShortRegex = Na, Te.weekdaysMinRegex = Oa,
        // Hours
        Te.isPM = Ua, Te.meridiem = Va, Za("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }),
        // Side effect imports
        a.lang = w("moment.lang is deprecated. Use moment.locale instead.", Za), a.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ab);
    var Ue = Math.abs,
        Ve = cd("ms"),
        We = cd("s"),
        Xe = cd("m"),
        Ye = cd("h"),
        Ze = cd("d"),
        $e = cd("w"),
        _e = cd("M"),
        af = cd("y"),
        bf = ed("milliseconds"),
        cf = ed("seconds"),
        df = ed("minutes"),
        ef = ed("hours"),
        ff = ed("days"),
        gf = ed("months"),
        hf = ed("years"),
        jf = Math.round,
        kf = {
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month
            M: 11
        },
        lf = Math.abs,
        mf = vb.prototype;
    mf.abs = Uc, mf.add = Wc, mf.subtract = Xc, mf.as = ad, mf.asMilliseconds = Ve, mf.asSeconds = We, mf.asMinutes = Xe, mf.asHours = Ye, mf.asDays = Ze, mf.asWeeks = $e, mf.asMonths = _e, mf.asYears = af, mf.valueOf = bd, mf._bubble = Zc, mf.get = dd, mf.milliseconds = bf, mf.seconds = cf, mf.minutes = df, mf.hours = ef, mf.days = ff, mf.weeks = fd, mf.months = gf, mf.years = hf, mf.humanize = kd, mf.toISOString = ld, mf.toString = ld, mf.toJSON = ld, mf.locale = jc, mf.localeData = kc,
        // Deprecations
        mf.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ld), mf.lang = Le,
        // Side effect imports
        // FORMATTING
        T("X", 0, 0, "unix"), T("x", 0, 0, "valueOf"),
        // PARSING
        Y("x", Rd), Y("X", Ud), aa("X", function(a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10))
        }), aa("x", function(a, b, c) {
            c._d = new Date(t(a))
        }),
        // Side effect imports
        a.version = "2.14.1", b(rb), a.fn = Se, a.min = tb, a.max = ub, a.now = Fe, a.utc = j, a.unix = Jc, a.months = Pc, a.isDate = f, a.locale = Za, a.invalid = n, a.duration = Mb, a.isMoment = r, a.weekdays = Rc, a.parseZone = Kc, a.localeData = ab, a.isDuration = wb, a.monthsShort = Qc, a.weekdaysMin = Tc, a.defineLocale = $a, a.updateLocale = _a, a.locales = bb, a.weekdaysShort = Sc, a.normalizeUnits = J, a.relativeTimeRounding = id, a.relativeTimeThreshold = jd, a.calendarFormat = Tb, a.prototype = Se;
    var nf = a;
    return nf
});
/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */

/*


     Creative Tim Modifications

     We added class btn-primary for custom styling button.


*/

! function(e) {
  "use strict";
  if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
  else if ("object" == typeof exports) module.exports = e(require("jquery"), require("moment"));
  else {
    if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
    if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
    e(jQuery, moment)
  }
}(function(e, t) {
  "use strict";
  if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
  var n = function(n, a) {
    var r, i, o, s, d, l, p, c = {},
      u = !0,
      f = !1,
      h = !1,
      m = 0,
      y = [{
        clsName: "days",
        navFnc: "M",
        navStep: 1
      }, {
        clsName: "months",
        navFnc: "y",
        navStep: 1
      }, {
        clsName: "years",
        navFnc: "y",
        navStep: 10
      }, {
        clsName: "decades",
        navFnc: "y",
        navStep: 100
      }],
      b = ["days", "months", "years", "decades"],
      g = ["top", "bottom", "auto"],
      w = ["left", "right", "auto"],
      v = ["default", "top", "bottom"],
      k = {
        up: 38,
        38: "up",
        down: 40,
        40: "down",
        left: 37,
        37: "left",
        right: 39,
        39: "right",
        tab: 9,
        9: "tab",
        escape: 27,
        27: "escape",
        enter: 13,
        13: "enter",
        pageUp: 33,
        33: "pageUp",
        pageDown: 34,
        34: "pageDown",
        shift: 16,
        16: "shift",
        control: 17,
        17: "control",
        space: 32,
        32: "space",
        t: 84,
        84: "t",
        delete: 46,
        46: "delete"
      },
      D = {},
      C = function() {
        return void 0 !== t.tz && void 0 !== a.timeZone && null !== a.timeZone && "" !== a.timeZone
      },
      x = function(e) {
        var n;
        return n = void 0 === e || null === e ? t() : t.isDate(e) || t.isMoment(e) ? t(e) : C() ? t.tz(e, l, a.useStrict, a.timeZone) : t(e, l, a.useStrict), C() && n.tz(a.timeZone), n
      },
      T = function(e) {
        if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
        switch (e) {
          case "y":
            return -1 !== d.indexOf("Y");
          case "M":
            return -1 !== d.indexOf("M");
          case "d":
            return -1 !== d.toLowerCase().indexOf("d");
          case "h":
          case "H":
            return -1 !== d.toLowerCase().indexOf("h");
          case "m":
            return -1 !== d.indexOf("m");
          case "s":
            return -1 !== d.indexOf("s");
          default:
            return !1
        }
      },
      M = function() {
        return T("h") || T("m") || T("s")
      },
      S = function() {
        return T("y") || T("M") || T("d")
      },
      O = function() {
        var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(a.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", a.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(a.icons.next)))),
          n = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", a.calendarWeeks ? "8" : "7")));
        return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]
      },
      P = function() {
        var t = e("<tr>"),
          n = e("<tr>"),
          r = e("<tr>");
        return T("h") && (t.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: a.tooltips.incrementHour
        }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(a.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
          "data-time-component": "hours",
          title: a.tooltips.pickHour
        }).attr("data-action", "showHours"))), r.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: a.tooltips.decrementHour
        }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(a.icons.down))))), T("m") && (T("h") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), r.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: a.tooltips.incrementMinute
        }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(a.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
          "data-time-component": "minutes",
          title: a.tooltips.pickMinute
        }).attr("data-action", "showMinutes"))), r.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: a.tooltips.decrementMinute
        }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(a.icons.down))))), T("s") && (T("m") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), r.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: a.tooltips.incrementSecond
        }).addClass("btn btn-link").attr("data-action", "incrementSeconds").append(e("<span>").addClass(a.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
          "data-time-component": "seconds",
          title: a.tooltips.pickSecond
        }).attr("data-action", "showSeconds"))), r.append(e("<td>").append(e("<a>").attr({
          href: "#",
          tabindex: "-1",
          title: a.tooltips.decrementSecond
        }).addClass("btn btn-link").attr("data-action", "decrementSeconds").append(e("<span>").addClass(a.icons.down))))), s || (t.append(e("<td>").addClass("separator")), n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
          "data-action": "togglePeriod",
          tabindex: "-1",
          title: a.tooltips.togglePeriod
        }))), r.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, n, r]))
      },
      E = function() {
        var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
          n = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
          a = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
          r = [P()];
        return T("h") && r.push(t), T("m") && r.push(n), T("s") && r.push(a), r
      },
      H = function() {
        var t = [];
        return a.showTodayButton && t.push(e("<td>").append(e("<a>").attr({
          "data-action": "today",
          title: a.tooltips.today
        }).append(e("<span>").addClass(a.icons.today)))), !a.sideBySide && S() && M() && t.push(e("<td>").append(e("<a>").attr({
          "data-action": "togglePicker",
          title: a.tooltips.selectTime
        }).append(e("<span>").addClass(a.icons.time)))), a.showClear && t.push(e("<td>").append(e("<a>").attr({
          "data-action": "clear",
          title: a.tooltips.clear
        }).append(e("<span>").addClass(a.icons.clear)))), a.showClose && t.push(e("<td>").append(e("<a>").attr({
          "data-action": "close",
          title: a.tooltips.close
        }).append(e("<span>").addClass(a.icons.close)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
      },
      I = function() {
        var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
          n = e("<div>").addClass("datepicker").append(O()),
          r = e("<div>").addClass("timepicker").append(E()),
          i = e("<ul>").addClass("list-unstyled"),
          o = e("<li>").addClass("picker-switch" + (a.collapse ? " accordion-toggle" : "")).append(H());
        return a.inline && t.removeClass("dropdown-menu"), s && t.addClass("usetwentyfour"), T("s") && !s && t.addClass("wider"), a.sideBySide && S() && M() ? (t.addClass("timepicker-sbs"), "top" === a.toolbarPlacement && t.append(o), t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(r.addClass("col-md-6"))), "bottom" === a.toolbarPlacement && t.append(o), t) : ("top" === a.toolbarPlacement && i.append(o), S() && i.append(e("<li>").addClass(a.collapse && M() ? "collapse show" : "").append(n)), "default" === a.toolbarPlacement && i.append(o), M() && i.append(e("<li>").addClass(a.collapse && S() ? "collapse" : "").append(r)), "bottom" === a.toolbarPlacement && i.append(o), t.append(i))
      },
      Y = function() {
        var t, r = (f || n).position(),
          i = (f || n).offset(),
          o = a.widgetPositioning.vertical,
          s = a.widgetPositioning.horizontal;
        if (a.widgetParent) t = a.widgetParent.append(h);
        else if (n.is("input")) t = n.after(h).parent();
        else {
          if (a.inline) return void(t = n.append(h));
          t = n, n.children().first().after(h)
        }
        if ("auto" === o && (o = i.top + 1.5 * h.height() >= e(window).height() + e(window).scrollTop() && h.height() + n.outerHeight() < i.top ? "top" : "bottom"), "auto" === s && (s = t.width() < i.left + h.outerWidth() / 2 && i.left + h.outerWidth() > e(window).width() ? "right" : "left"), "top" === o ? h.addClass("top").removeClass("bottom") : h.addClass("bottom").removeClass("top"), "right" === s ? h.addClass("pull-right") : h.removeClass("pull-right"), "static" === t.css("position") && (t = t.parents().filter(function() {
            return "static" !== e(this).css("position")
          }).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a non-static positioned container");
        h.css({
          top: "top" === o ? "auto" : r.top + n.outerHeight(),
          bottom: "top" === o ? t.outerHeight() - (t === n ? 0 : r.top) : "auto",
          left: "left" === s ? t === n ? 0 : r.left : "auto",
          right: "left" === s ? "auto" : t.outerWidth() - n.outerWidth() - (t === n ? 0 : r.left)
        }), setTimeout(function() {
          h.addClass("open")
        }, 180)
      },
      q = function(e) {
        "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || n.trigger(e)
      },
      B = function(e) {
        "y" === e && (e = "YYYY"), q({
          type: "dp.update",
          change: e,
          viewDate: i.clone()
        })
      },
      j = function(e) {
        h && (e && (p = Math.max(m, Math.min(3, p + e))), h.find(".datepicker > div").hide().filter(".datepicker-" + y[p].clsName).show())
      },
      A = function() {
        var t = e("<tr>"),
          n = i.clone().startOf("w").startOf("d");
        for (!0 === a.calendarWeeks && t.append(e("<th>").addClass("cw").text("#")); n.isBefore(i.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
        h.find(".datepicker-days thead").append(t)
      },
      F = function(e) {
        return !0 === a.disabledDates[e.format("YYYY-MM-DD")]
      },
      L = function(e) {
        return !0 === a.enabledDates[e.format("YYYY-MM-DD")]
      },
      W = function(e) {
        return !0 === a.disabledHours[e.format("H")]
      },
      z = function(e) {
        return !0 === a.enabledHours[e.format("H")]
      },
      N = function(t, n) {
        if (!t.isValid()) return !1;
        if (a.disabledDates && "d" === n && F(t)) return !1;
        if (a.enabledDates && "d" === n && !L(t)) return !1;
        if (a.minDate && t.isBefore(a.minDate, n)) return !1;
        if (a.maxDate && t.isAfter(a.maxDate, n)) return !1;
        if (a.daysOfWeekDisabled && "d" === n && -1 !== a.daysOfWeekDisabled.indexOf(t.day())) return !1;
        if (a.disabledHours && ("h" === n || "m" === n || "s" === n) && W(t)) return !1;
        if (a.enabledHours && ("h" === n || "m" === n || "s" === n) && !z(t)) return !1;
        if (a.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
          var r = !1;
          if (e.each(a.disabledTimeIntervals, function() {
              if (t.isBetween(this[0], this[1])) return r = !0, !1
            }), r) return !1
        }
        return !0
      },
      V = function() {
        for (var t = [], n = i.clone().startOf("y").startOf("d"); n.isSame(i, "y");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
        h.find(".datepicker-months td").empty().append(t)
      },
      Z = function() {
        var t = h.find(".datepicker-months"),
          n = t.find("th"),
          o = t.find("tbody").find("span");
        n.eq(0).find("span").attr("title", a.tooltips.prevYear), n.eq(1).attr("title", a.tooltips.selectYear), n.eq(2).find("span").attr("title", a.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), N(i.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(i.year()), N(i.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), o.removeClass("active"), r.isSame(i, "y") && !u && o.eq(r.month()).addClass("active"), o.each(function(t) {
          N(i.clone().month(t), "M") || e(this).addClass("disabled")
        })
      },
      R = function() {
        var e = h.find(".datepicker-years"),
          t = e.find("th"),
          n = i.clone().subtract(5, "y"),
          o = i.clone().add(6, "y"),
          s = "";
        for (t.eq(0).find("span").attr("title", a.tooltips.prevDecade), t.eq(1).attr("title", a.tooltips.selectDecade), t.eq(2).find("span").attr("title", a.tooltips.nextDecade), e.find(".disabled").removeClass("disabled"), a.minDate && a.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + o.year()), a.maxDate && a.maxDate.isBefore(o, "y") && t.eq(2).addClass("disabled"); !n.isAfter(o, "y");) s += '<span data-action="selectYear" class="year' + (n.isSame(r, "y") && !u ? " active" : "") + (N(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
        e.find("td").html(s)
      },
      Q = function() {
        var e, n = h.find(".datepicker-decades"),
          o = n.find("th"),
          s = t({
            y: i.year() - i.year() % 100 - 1
          }),
          d = s.clone().add(100, "y"),
          l = s.clone(),
          p = !1,
          c = !1,
          u = "";
        for (o.eq(0).find("span").attr("title", a.tooltips.prevCentury), o.eq(2).find("span").attr("title", a.tooltips.nextCentury), n.find(".disabled").removeClass("disabled"), (s.isSame(t({
            y: 1900
          })) || a.minDate && a.minDate.isAfter(s, "y")) && o.eq(0).addClass("disabled"), o.eq(1).text(s.year() + "-" + d.year()), (s.isSame(t({
            y: 2e3
          })) || a.maxDate && a.maxDate.isBefore(d, "y")) && o.eq(2).addClass("disabled"); !s.isAfter(d, "y");) e = s.year() + 12, p = a.minDate && a.minDate.isAfter(s, "y") && a.minDate.year() <= e, c = a.maxDate && a.maxDate.isAfter(s, "y") && a.maxDate.year() <= e, u += '<span data-action="selectDecade" class="decade' + (r.isAfter(s) && r.year() <= e ? " active" : "") + (N(s, "y") || p || c ? "" : " disabled") + '" data-selection="' + (s.year() + 6) + '">' + (s.year() + 1) + " - " + (s.year() + 12) + "</span>", s.add(12, "y");
        u += "<span></span><span></span><span></span>", n.find("td").html(u), o.eq(1).text(l.year() + 1 + "-" + s.year())
      },
      U = function() {
        var t, n, o, s = h.find(".datepicker-days"),
          d = s.find("th"),
          l = [],
          p = [];
        if (S()) {
          for (d.eq(0).find("span").attr("title", a.tooltips.prevMonth), d.eq(1).attr("title", a.tooltips.selectMonth), d.eq(2).find("span").attr("title", a.tooltips.nextMonth), s.find(".disabled").removeClass("disabled"), d.eq(1).text(i.format(a.dayViewHeaderFormat)), N(i.clone().subtract(1, "M"), "M") || d.eq(0).addClass("disabled"), N(i.clone().add(1, "M"), "M") || d.eq(2).addClass("disabled"), t = i.clone().startOf("M").startOf("w").startOf("d"), o = 0; o < 42; o++) 0 === t.weekday() && (n = e("<tr>"), a.calendarWeeks && n.append('<td class="cw">' + t.week() + "</td>"), l.push(n)), p = ["day"], t.isBefore(i, "M") && p.push("old"), t.isAfter(i, "M") && p.push("new"), t.isSame(r, "d") && !u && p.push("active"), N(t, "d") || p.push("disabled"), t.isSame(x(), "d") && p.push("today"), 0 !== t.day() && 6 !== t.day() || p.push("weekend"), q({
            type: "dp.classify",
            date: t,
            classNames: p
          }), n.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="' + p.join(" ") + '"><div>' + t.date() + "</div></td>"), t.add(1, "d");
          s.find("tbody").empty().append(l), Z(), R(), Q()
        }
      },
      G = function() {
        var t = h.find(".timepicker-hours table"),
          n = i.clone().startOf("d"),
          a = [],
          r = e("<tr>");
        for (i.hour() > 11 && !s && n.hour(12); n.isSame(i, "d") && (s || i.hour() < 12 && n.hour() < 12 || i.hour() > 11);) n.hour() % 4 == 0 && (r = e("<tr>"), a.push(r)), r.append('<td data-action="selectHour" class="hour' + (N(n, "h") ? "" : " disabled") + '"><div>' + n.format(s ? "HH" : "hh") + "</div></td>"), n.add(1, "h");
        t.empty().append(a)
      },
      J = function() {
        for (var t = h.find(".timepicker-minutes table"), n = i.clone().startOf("h"), r = [], o = e("<tr>"), s = 1 === a.stepping ? 5 : a.stepping; i.isSame(n, "h");) n.minute() % (4 * s) == 0 && (o = e("<tr>"), r.push(o)), o.append('<td data-action="selectMinute" class="minute' + (N(n, "m") ? "" : " disabled") + '"><div>' + n.format("mm") + "</div></td>"), n.add(s, "m");
        t.empty().append(r)
      },
      K = function() {
        for (var t = h.find(".timepicker-seconds table"), n = i.clone().startOf("m"), a = [], r = e("<tr>"); i.isSame(n, "m");) n.second() % 20 == 0 && (r = e("<tr>"), a.push(r)), r.append('<td data-action="selectSecond" class="second' + (N(n, "s") ? "" : " disabled") + '"><div>' + n.format("ss") + "</div></td>"), n.add(5, "s");
        t.empty().append(a)
      },
      X = function() {
        var e, t, n = h.find(".timepicker span[data-time-component]");
        s || (e = h.find(".timepicker [data-action=togglePeriod]"), t = r.clone().add(r.hours() >= 12 ? -12 : 12, "h"), e.text(r.format("A")), N(t, "h") ? e.removeClass("disabled") : e.addClass("disabled")), n.filter("[data-time-component=hours]").text(r.format(s ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(r.format("mm")), n.filter("[data-time-component=seconds]").text(r.format("ss")), G(), J(), K()
      },
      $ = function() {
        h && (U(), X())
      },
      _ = function(e) {
        var t = u ? null : r;
        if (!e) return u = !0, o.val(""), n.data("date", ""), q({
          type: "dp.change",
          date: !1,
          oldDate: t
        }), void $();
        if (e = e.clone().locale(a.locale), C() && e.tz(a.timeZone), 1 !== a.stepping)
          for (e.minutes(Math.round(e.minutes() / a.stepping) * a.stepping).seconds(0); a.minDate && e.isBefore(a.minDate);) e.add(a.stepping, "minutes");
        N(e) ? (i = (r = e).clone(), o.val(r.format(d)), n.data("date", r.format(d)), u = !1, $(), q({
          type: "dp.change",
          date: r.clone(),
          oldDate: t
        })) : (a.keepInvalid ? q({
          type: "dp.change",
          date: e,
          oldDate: t
        }) : o.val(u ? "" : r.format(d)), q({
          type: "dp.error",
          date: e,
          oldDate: t
        }))
      },
      ee = function() {
        var t = !1;
        return h ? (h.find(".collapse").each(function() {
          var n = e(this).data("collapse");
          return !n || !n.transitioning || (t = !0, !1)
        }), t ? c : (f && f.hasClass("btn") && f.toggleClass("active"), e(window).off("resize", Y), h.off("click", "[data-action]"), h.off("mousedown", !1), h.removeClass("open"), void setTimeout(function() {
          return h.remove(), h.hide(), h = !1, q({
            type: "dp.hide",
            date: r.clone()
          }), o.blur(), p = 0, i = r.clone(), c
        }, 400))) : c
      },
      te = function() {
        _(null)
      },
      ne = function(e) {
        return void 0 === a.parseInputDate ? (!t.isMoment(e) || e instanceof Date) && (e = x(e)) : e = a.parseInputDate(e), e
      },
      ae = {
        next: function() {
          var e = y[p].navFnc;
          i.add(y[p].navStep, e), U(), B(e)
        },
        previous: function() {
          var e = y[p].navFnc;
          i.subtract(y[p].navStep, e), U(), B(e)
        },
        pickerSwitch: function() {
          j(1)
        },
        selectMonth: function(t) {
          var n = e(t.target).closest("tbody").find("span").index(e(t.target));
          i.month(n), p === m ? (_(r.clone().year(i.year()).month(i.month())), a.inline || ee()) : (j(-1), U()), B("M")
        },
        selectYear: function(t) {
          var n = parseInt(e(t.target).text(), 10) || 0;
          i.year(n), p === m ? (_(r.clone().year(i.year())), a.inline || ee()) : (j(-1), U()), B("YYYY")
        },
        selectDecade: function(t) {
          var n = parseInt(e(t.target).data("selection"), 10) || 0;
          i.year(n), p === m ? (_(r.clone().year(i.year())), a.inline || ee()) : (j(-1), U()), B("YYYY")
        },
        selectDay: function(t) {
          var n = i.clone();
          e(t.target).is(".old") && n.subtract(1, "M"), e(t.target).is(".new") && n.add(1, "M"), _(n.date(parseInt(e(t.target).text(), 10))), M() || a.keepOpen || a.inline || ee()
        },
        incrementHours: function() {
          var e = r.clone().add(1, "h");
          N(e, "h") && _(e)
        },
        incrementMinutes: function() {
          var e = r.clone().add(a.stepping, "m");
          N(e, "m") && _(e)
        },
        incrementSeconds: function() {
          var e = r.clone().add(1, "s");
          N(e, "s") && _(e)
        },
        decrementHours: function() {
          var e = r.clone().subtract(1, "h");
          N(e, "h") && _(e)
        },
        decrementMinutes: function() {
          var e = r.clone().subtract(a.stepping, "m");
          N(e, "m") && _(e)
        },
        decrementSeconds: function() {
          var e = r.clone().subtract(1, "s");
          N(e, "s") && _(e)
        },
        togglePeriod: function() {
          _(r.clone().add(r.hours() >= 12 ? -12 : 12, "h"))
        },
        togglePicker: function(t) {
          var n, r = e(t.target),
            i = r.closest("ul"),
            o = i.find(".show"),
            s = i.find(".collapse:not(.show)");
          if (o && o.length) {
            if ((n = o.data("collapse")) && n.transitioning) return;
            o.collapse ? (o.collapse("hide"), s.collapse("show")) : (o.removeClass("show"), s.addClass("show")), r.is("span") ? r.toggleClass(a.icons.time + " " + a.icons.date) : r.find("span").toggleClass(a.icons.time + " " + a.icons.date)
          }
        },
        showPicker: function() {
          h.find(".timepicker > div:not(.timepicker-picker)").hide(), h.find(".timepicker .timepicker-picker").show()
        },
        showHours: function() {
          h.find(".timepicker .timepicker-picker").hide(), h.find(".timepicker .timepicker-hours").show()
        },
        showMinutes: function() {
          h.find(".timepicker .timepicker-picker").hide(), h.find(".timepicker .timepicker-minutes").show()
        },
        showSeconds: function() {
          h.find(".timepicker .timepicker-picker").hide(), h.find(".timepicker .timepicker-seconds").show()
        },
        selectHour: function(t) {
          var n = parseInt(e(t.target).text(), 10);
          s || (r.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), _(r.clone().hours(n)), ae.showPicker.call(c)
        },
        selectMinute: function(t) {
          _(r.clone().minutes(parseInt(e(t.target).text(), 10))), ae.showPicker.call(c)
        },
        selectSecond: function(t) {
          _(r.clone().seconds(parseInt(e(t.target).text(), 10))), ae.showPicker.call(c)
        },
        clear: te,
        today: function() {
          var e = x();
          N(e, "d") && _(e)
        },
        close: ee
      },
      re = function(t) {
        return !e(t.currentTarget).is(".disabled") && (ae[e(t.currentTarget).data("action")].apply(c, arguments), !1)
      },
      ie = function() {
        var t, n = {
          year: function(e) {
            return e.month(0).date(1).hours(0).seconds(0).minutes(0)
          },
          month: function(e) {
            return e.date(1).hours(0).seconds(0).minutes(0)
          },
          day: function(e) {
            return e.hours(0).seconds(0).minutes(0)
          },
          hour: function(e) {
            return e.seconds(0).minutes(0)
          },
          minute: function(e) {
            return e.seconds(0)
          }
        };
        return o.prop("disabled") || !a.ignoreReadonly && o.prop("readonly") || h ? c : (void 0 !== o.val() && 0 !== o.val().trim().length ? _(ne(o.val().trim())) : u && a.useCurrent && (a.inline || o.is("input") && 0 === o.val().trim().length) && (t = x(), "string" == typeof a.useCurrent && (t = n[a.useCurrent](t)), _(t)), h = I(), A(), V(), h.find(".timepicker-hours").hide(), h.find(".timepicker-minutes").hide(), h.find(".timepicker-seconds").hide(), $(), j(), e(window).on("resize", Y), h.on("click", "[data-action]", re), h.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), Y(), h.show(), a.focusOnShow && !o.is(":focus") && o.focus(), q({
          type: "dp.show"
        }), c)
      },
      oe = function() {
        return h ? ee() : ie()
      },
      se = function(e) {
        var t, n, r, i, o = null,
          s = [],
          d = {},
          l = e.which;
        D[l] = "p";
        for (t in D) D.hasOwnProperty(t) && "p" === D[t] && (s.push(t), parseInt(t, 10) !== l && (d[t] = !0));
        for (t in a.keyBinds)
          if (a.keyBinds.hasOwnProperty(t) && "function" == typeof a.keyBinds[t] && (r = t.split(" ")).length === s.length && k[l] === r[r.length - 1]) {
            for (i = !0, n = r.length - 2; n >= 0; n--)
              if (!(k[r[n]] in d)) {
                i = !1;
                break
              }
            if (i) {
              o = a.keyBinds[t];
              break
            }
          }
        o && (o.call(c, h), e.stopPropagation(), e.preventDefault())
      },
      de = function(e) {
        D[e.which] = "r", e.stopPropagation(), e.preventDefault()
      },
      le = function(t) {
        var n = e(t.target).val().trim(),
          a = n ? ne(n) : null;
        return _(a), t.stopImmediatePropagation(), !1
      },
      pe = function() {
        o.off({
          change: le,
          blur: blur,
          keydown: se,
          keyup: de,
          focus: a.allowInputToggle ? ee : ""
        }), n.is("input") ? o.off({
          focus: ie
        }) : f && (f.off("click", oe), f.off("mousedown", !1))
      },
      ce = function(t) {
        var n = {};
        return e.each(t, function() {
          var e = ne(this);
          e.isValid() && (n[e.format("YYYY-MM-DD")] = !0)
        }), !!Object.keys(n).length && n
      },
      ue = function(t) {
        var n = {};
        return e.each(t, function() {
          n[this] = !0
        }), !!Object.keys(n).length && n
      },
      fe = function() {
        var e = a.format || "L LT";
        d = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
          return (r.localeData().longDateFormat(e) || e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
            return r.localeData().longDateFormat(e) || e
          })
        }), (l = a.extraFormats ? a.extraFormats.slice() : []).indexOf(e) < 0 && l.indexOf(d) < 0 && l.push(d), s = d.toLowerCase().indexOf("a") < 1 && d.replace(/\[.*?\]/g, "").indexOf("h") < 1, T("y") && (m = 2), T("M") && (m = 1), T("d") && (m = 0), p = Math.max(m, p), u || _(r)
      };
    if (c.destroy = function() {
        ee(), pe(), n.removeData("DateTimePicker"), n.removeData("date")
      }, c.toggle = oe, c.show = ie, c.hide = ee, c.disable = function() {
        return ee(), f && f.hasClass("btn") && f.addClass("disabled"), o.prop("disabled", !0), c
      }, c.enable = function() {
        return f && f.hasClass("btn") && f.removeClass("disabled"), o.prop("disabled", !1), c
      }, c.ignoreReadonly = function(e) {
        if (0 === arguments.length) return a.ignoreReadonly;
        if ("boolean" != typeof e) throw new TypeError("ignoreReadonly () expects a boolean parameter");
        return a.ignoreReadonly = e, c
      }, c.options = function(t) {
        if (0 === arguments.length) return e.extend(!0, {}, a);
        if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
        return e.extend(!0, a, t), e.each(a, function(e, t) {
          if (void 0 === c[e]) throw new TypeError("option " + e + " is not recognized!");
          c[e](t)
        }), c
      }, c.date = function(e) {
        if (0 === arguments.length) return u ? null : r.clone();
        if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
        return _(null === e ? null : ne(e)), c
      }, c.format = function(e) {
        if (0 === arguments.length) return a.format;
        if ("string" != typeof e && ("boolean" != typeof e || !1 !== e)) throw new TypeError("format() expects a string or boolean:false parameter " + e);
        return a.format = e, d && fe(), c
      }, c.timeZone = function(e) {
        if (0 === arguments.length) return a.timeZone;
        if ("string" != typeof e) throw new TypeError("newZone() expects a string parameter");
        return a.timeZone = e, c
      }, c.dayViewHeaderFormat = function(e) {
        if (0 === arguments.length) return a.dayViewHeaderFormat;
        if ("string" != typeof e) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
        return a.dayViewHeaderFormat = e, c
      }, c.extraFormats = function(e) {
        if (0 === arguments.length) return a.extraFormats;
        if (!1 !== e && !(e instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
        return a.extraFormats = e, l && fe(), c
      }, c.disabledDates = function(t) {
        if (0 === arguments.length) return a.disabledDates ? e.extend({}, a.disabledDates) : a.disabledDates;
        if (!t) return a.disabledDates = !1, $(), c;
        if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
        return a.disabledDates = ce(t), a.enabledDates = !1, $(), c
      }, c.enabledDates = function(t) {
        if (0 === arguments.length) return a.enabledDates ? e.extend({}, a.enabledDates) : a.enabledDates;
        if (!t) return a.enabledDates = !1, $(), c;
        if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
        return a.enabledDates = ce(t), a.disabledDates = !1, $(), c
      }, c.daysOfWeekDisabled = function(e) {
        if (0 === arguments.length) return a.daysOfWeekDisabled.splice(0);
        if ("boolean" == typeof e && !e) return a.daysOfWeekDisabled = !1, $(), c;
        if (!(e instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
        if (a.daysOfWeekDisabled = e.reduce(function(e, t) {
            return (t = parseInt(t, 10)) > 6 || t < 0 || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e)
          }, []).sort(), a.useCurrent && !a.keepInvalid) {
          for (var t = 0; !N(r, "d");) {
            if (r.add(1, "d"), 31 === t) throw "Tried 31 times to find a valid date";
            t++
          }
          _(r)
        }
        return $(), c
      }, c.maxDate = function(e) {
        if (0 === arguments.length) return a.maxDate ? a.maxDate.clone() : a.maxDate;
        if ("boolean" == typeof e && !1 === e) return a.maxDate = !1, $(), c;
        "string" == typeof e && ("now" !== e && "moment" !== e || (e = x()));
        var t = ne(e);
        if (!t.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + e);
        if (a.minDate && t.isBefore(a.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(d));
        return a.maxDate = t, a.useCurrent && !a.keepInvalid && r.isAfter(e) && _(a.maxDate), i.isAfter(t) && (i = t.clone().subtract(a.stepping, "m")), $(), c
      }, c.minDate = function(e) {
        if (0 === arguments.length) return a.minDate ? a.minDate.clone() : a.minDate;
        if ("boolean" == typeof e && !1 === e) return a.minDate = !1, $(), c;
        "string" == typeof e && ("now" !== e && "moment" !== e || (e = x()));
        var t = ne(e);
        if (!t.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + e);
        if (a.maxDate && t.isAfter(a.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(d));
        return a.minDate = t, a.useCurrent && !a.keepInvalid && r.isBefore(e) && _(a.minDate), i.isBefore(t) && (i = t.clone().add(a.stepping, "m")), $(), c
      }, c.defaultDate = function(e) {
        if (0 === arguments.length) return a.defaultDate ? a.defaultDate.clone() : a.defaultDate;
        if (!e) return a.defaultDate = !1, c;
        "string" == typeof e && (e = "now" === e || "moment" === e ? x() : x(e));
        var t = ne(e);
        if (!t.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + e);
        if (!N(t)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
        return a.defaultDate = t, (a.defaultDate && a.inline || "" === o.val().trim()) && _(a.defaultDate), c
      }, c.locale = function(e) {
        if (0 === arguments.length) return a.locale;
        if (!t.localeData(e)) throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
        return a.locale = e, r.locale(a.locale), i.locale(a.locale), d && fe(), h && (ee(), ie()), c
      }, c.stepping = function(e) {
        return 0 === arguments.length ? a.stepping : (e = parseInt(e, 10), (isNaN(e) || e < 1) && (e = 1), a.stepping = e, c)
      }, c.useCurrent = function(e) {
        var t = ["year", "month", "day", "hour", "minute"];
        if (0 === arguments.length) return a.useCurrent;
        if ("boolean" != typeof e && "string" != typeof e) throw new TypeError("useCurrent() expects a boolean or string parameter");
        if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
        return a.useCurrent = e, c
      }, c.collapse = function(e) {
        if (0 === arguments.length) return a.collapse;
        if ("boolean" != typeof e) throw new TypeError("collapse() expects a boolean parameter");
        return a.collapse === e ? c : (a.collapse = e, h && (ee(), ie()), c)
      }, c.icons = function(t) {
        if (0 === arguments.length) return e.extend({}, a.icons);
        if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
        return e.extend(a.icons, t), h && (ee(), ie()), c
      }, c.tooltips = function(t) {
        if (0 === arguments.length) return e.extend({}, a.tooltips);
        if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
        return e.extend(a.tooltips, t), h && (ee(), ie()), c
      }, c.useStrict = function(e) {
        if (0 === arguments.length) return a.useStrict;
        if ("boolean" != typeof e) throw new TypeError("useStrict() expects a boolean parameter");
        return a.useStrict = e, c
      }, c.sideBySide = function(e) {
        if (0 === arguments.length) return a.sideBySide;
        if ("boolean" != typeof e) throw new TypeError("sideBySide() expects a boolean parameter");
        return a.sideBySide = e, h && (ee(), ie()), c
      }, c.viewMode = function(e) {
        if (0 === arguments.length) return a.viewMode;
        if ("string" != typeof e) throw new TypeError("viewMode() expects a string parameter");
        if (-1 === b.indexOf(e)) throw new TypeError("viewMode() parameter must be one of (" + b.join(", ") + ") value");
        return a.viewMode = e, p = Math.max(b.indexOf(e), m), j(), c
      }, c.toolbarPlacement = function(e) {
        if (0 === arguments.length) return a.toolbarPlacement;
        if ("string" != typeof e) throw new TypeError("toolbarPlacement() expects a string parameter");
        if (-1 === v.indexOf(e)) throw new TypeError("toolbarPlacement() parameter must be one of (" + v.join(", ") + ") value");
        return a.toolbarPlacement = e, h && (ee(), ie()), c
      }, c.widgetPositioning = function(t) {
        if (0 === arguments.length) return e.extend({}, a.widgetPositioning);
        if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
        if (t.horizontal) {
          if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
          if (t.horizontal = t.horizontal.toLowerCase(), -1 === w.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + w.join(", ") + ")");
          a.widgetPositioning.horizontal = t.horizontal
        }
        if (t.vertical) {
          if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
          if (t.vertical = t.vertical.toLowerCase(), -1 === g.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + g.join(", ") + ")");
          a.widgetPositioning.vertical = t.vertical
        }
        return $(), c
      }, c.calendarWeeks = function(e) {
        if (0 === arguments.length) return a.calendarWeeks;
        if ("boolean" != typeof e) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
        return a.calendarWeeks = e, $(), c
      }, c.showTodayButton = function(e) {
        if (0 === arguments.length) return a.showTodayButton;
        if ("boolean" != typeof e) throw new TypeError("showTodayButton() expects a boolean parameter");
        return a.showTodayButton = e, h && (ee(), ie()), c
      }, c.showClear = function(e) {
        if (0 === arguments.length) return a.showClear;
        if ("boolean" != typeof e) throw new TypeError("showClear() expects a boolean parameter");
        return a.showClear = e, h && (ee(), ie()), c
      }, c.widgetParent = function(t) {
        if (0 === arguments.length) return a.widgetParent;
        if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof e)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
        return a.widgetParent = t, h && (ee(), ie()), c
      }, c.keepOpen = function(e) {
        if (0 === arguments.length) return a.keepOpen;
        if ("boolean" != typeof e) throw new TypeError("keepOpen() expects a boolean parameter");
        return a.keepOpen = e, c
      }, c.focusOnShow = function(e) {
        if (0 === arguments.length) return a.focusOnShow;
        if ("boolean" != typeof e) throw new TypeError("focusOnShow() expects a boolean parameter");
        return a.focusOnShow = e, c
      }, c.inline = function(e) {
        if (0 === arguments.length) return a.inline;
        if ("boolean" != typeof e) throw new TypeError("inline() expects a boolean parameter");
        return a.inline = e, c
      }, c.clear = function() {
        return te(), c
      }, c.keyBinds = function(e) {
        return 0 === arguments.length ? a.keyBinds : (a.keyBinds = e, c)
      }, c.getMoment = function(e) {
        return x(e)
      }, c.debug = function(e) {
        if ("boolean" != typeof e) throw new TypeError("debug() expects a boolean parameter");
        return a.debug = e, c
      }, c.allowInputToggle = function(e) {
        if (0 === arguments.length) return a.allowInputToggle;
        if ("boolean" != typeof e) throw new TypeError("allowInputToggle() expects a boolean parameter");
        return a.allowInputToggle = e, c
      }, c.showClose = function(e) {
        if (0 === arguments.length) return a.showClose;
        if ("boolean" != typeof e) throw new TypeError("showClose() expects a boolean parameter");
        return a.showClose = e, c
      }, c.keepInvalid = function(e) {
        if (0 === arguments.length) return a.keepInvalid;
        if ("boolean" != typeof e) throw new TypeError("keepInvalid() expects a boolean parameter");
        return a.keepInvalid = e, c
      }, c.datepickerInput = function(e) {
        if (0 === arguments.length) return a.datepickerInput;
        if ("string" != typeof e) throw new TypeError("datepickerInput() expects a string parameter");
        return a.datepickerInput = e, c
      }, c.parseInputDate = function(e) {
        if (0 === arguments.length) return a.parseInputDate;
        if ("function" != typeof e) throw new TypeError("parseInputDate() sholud be as function");
        return a.parseInputDate = e, c
      }, c.disabledTimeIntervals = function(t) {
        if (0 === arguments.length) return a.disabledTimeIntervals ? e.extend({}, a.disabledTimeIntervals) : a.disabledTimeIntervals;
        if (!t) return a.disabledTimeIntervals = !1, $(), c;
        if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
        return a.disabledTimeIntervals = t, $(), c
      }, c.disabledHours = function(t) {
        if (0 === arguments.length) return a.disabledHours ? e.extend({}, a.disabledHours) : a.disabledHours;
        if (!t) return a.disabledHours = !1, $(), c;
        if (!(t instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
        if (a.disabledHours = ue(t), a.enabledHours = !1, a.useCurrent && !a.keepInvalid) {
          for (var n = 0; !N(r, "h");) {
            if (r.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
            n++
          }
          _(r)
        }
        return $(), c
      }, c.enabledHours = function(t) {
        if (0 === arguments.length) return a.enabledHours ? e.extend({}, a.enabledHours) : a.enabledHours;
        if (!t) return a.enabledHours = !1, $(), c;
        if (!(t instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
        if (a.enabledHours = ue(t), a.disabledHours = !1, a.useCurrent && !a.keepInvalid) {
          for (var n = 0; !N(r, "h");) {
            if (r.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
            n++
          }
          _(r)
        }
        return $(), c
      }, c.viewDate = function(e) {
        if (0 === arguments.length) return i.clone();
        if (!e) return i = r.clone(), c;
        if (!("string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
        return i = ne(e), B(), c
      }, n.is("input")) o = n;
    else if (0 === (o = n.find(a.datepickerInput)).length) o = n.find("input");
    else if (!o.is("input")) throw new Error('CSS class "' + a.datepickerInput + '" cannot be applied to non input element');
    if (n.hasClass("input-group") && (f = 0 === n.find(".datepickerbutton").length ? n.find(".input-group-addon") : n.find(".datepickerbutton")), !a.inline && !o.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
    return r = x(), i = r.clone(), e.extend(!0, a, function() {
      var t, r = {};
      return (t = n.is("input") || a.inline ? n.data() : n.find("input").data()).dateOptions && t.dateOptions instanceof Object && (r = e.extend(!0, r, t.dateOptions)), e.each(a, function(e) {
        var n = "date" + e.charAt(0).toUpperCase() + e.slice(1);
        void 0 !== t[n] && (r[e] = t[n])
      }), r
    }()), c.options(a), fe(), o.on({
      change: le,
      blur: a.debug ? "" : ee,
      keydown: se,
      keyup: de,
      focus: a.allowInputToggle ? ie : ""
    }), n.is("input") ? o.on({
      focus: ie
    }) : f && (f.on("click", oe), f.on("mousedown", !1)), o.prop("disabled") && c.disable(), o.is("input") && 0 !== o.val().trim().length ? _(ne(o.val().trim())) : a.defaultDate && void 0 === o.attr("placeholder") && _(a.defaultDate), a.inline && ie(), c
  };
  return e.fn.datetimepicker = function(t) {
    t = t || {};
    var a, r = Array.prototype.slice.call(arguments, 1),
      i = !0,
      o = ["destroy", "hide", "show", "toggle"];
    if ("object" == typeof t) return this.each(function() {
      var a, r = e(this);
      r.data("DateTimePicker") || (a = e.extend(!0, {}, e.fn.datetimepicker.defaults, t), r.data("DateTimePicker", n(r, a)))
    });
    if ("string" == typeof t) return this.each(function() {
      var n = e(this).data("DateTimePicker");
      if (!n) throw new Error('bootstrap-datetimepicker("' + t + '") method was called on an element that is not using DateTimePicker');
      a = n[t].apply(n, r), i = a === n
    }), i || e.inArray(t, o) > -1 ? this : a;
    throw new TypeError("Invalid arguments for DateTimePicker: " + t)
  }, e.fn.datetimepicker.defaults = {
    timeZone: "",
    format: !1,
    dayViewHeaderFormat: "MMMM YYYY",
    extraFormats: !1,
    stepping: 1,
    minDate: !1,
    maxDate: !1,
    useCurrent: !0,
    collapse: !0,
    locale: t.locale(),
    defaultDate: !1,
    disabledDates: !1,
    enabledDates: !1,
    icons: {
      time: "glyphicon glyphicon-time",
      date: "glyphicon glyphicon-calendar",
      up: "glyphicon glyphicon-chevron-up",
      down: "glyphicon glyphicon-chevron-down",
      previous: "glyphicon glyphicon-chevron-left",
      next: "glyphicon glyphicon-chevron-right",
      today: "glyphicon glyphicon-screenshot",
      clear: "glyphicon glyphicon-trash",
      close: "glyphicon glyphicon-remove"
    },
    tooltips: {
      today: "Go to today",
      clear: "Clear selection",
      close: "Close the picker",
      selectMonth: "Select Month",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      selectYear: "Select Year",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      selectDecade: "Select Decade",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      prevCentury: "Previous Century",
      nextCentury: "Next Century",
      pickHour: "Pick Hour",
      incrementHour: "Increment Hour",
      decrementHour: "Decrement Hour",
      pickMinute: "Pick Minute",
      incrementMinute: "Increment Minute",
      decrementMinute: "Decrement Minute",
      pickSecond: "Pick Second",
      incrementSecond: "Increment Second",
      decrementSecond: "Decrement Second",
      togglePeriod: "Toggle Period",
      selectTime: "Select Time"
    },
    useStrict: !1,
    sideBySide: !1,
    daysOfWeekDisabled: !1,
    calendarWeeks: !1,
    viewMode: "days",
    toolbarPlacement: "default",
    showTodayButton: !1,
    showClear: !1,
    showClose: !1,
    widgetPositioning: {
      horizontal: "auto",
      vertical: "auto"
    },
    widgetParent: null,
    ignoreReadonly: !1,
    keepOpen: !1,
    focusOnShow: !0,
    inline: !1,
    keepInvalid: !1,
    datepickerInput: ".datepickerinput",
    keyBinds: {
      up: function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(7, "d")) : this.date(t.clone().add(this.stepping(), "m"))
        }
      },
      down: function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") ? this.date(t.clone().add(7, "d")) : this.date(t.clone().subtract(this.stepping(), "m"))
        } else this.show()
      },
      "control up": function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(1, "y")) : this.date(t.clone().add(1, "h"))
        }
      },
      "control down": function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") ? this.date(t.clone().add(1, "y")) : this.date(t.clone().subtract(1, "h"))
        }
      },
      left: function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "d"))
        }
      },
      right: function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "d"))
        }
      },
      pageUp: function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "M"))
        }
      },
      pageDown: function(e) {
        if (e) {
          var t = this.date() || this.getMoment();
          e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "M"))
        }
      },
      enter: function() {
        this.hide()
      },
      escape: function() {
        this.hide()
      },
      "control space": function(e) {
        e && e.find(".timepicker").is(":visible") && e.find('.btn[data-action="togglePeriod"]').click()
      },
      t: function() {
        this.date(this.getMoment())
      },
      delete: function() {
        this.clear()
      }
    },
    debug: !1,
    allowInputToggle: !1,
    disabledTimeIntervals: !1,
    disabledHours: !1,
    enabledHours: !1,
    viewDate: !1
  }, e.fn.datetimepicker
});
/*! nouislider - 9.1.0 - 2016-12-10 16:00:32 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a,b){var c=document.createElement("div");return j(c,b),a.appendChild(c),c}function b(a){return a.filter(function(a){return!this[a]&&(this[a]=!0)},{})}function c(a,b){return Math.round(a/b)*b}function d(a,b){var c=a.getBoundingClientRect(),d=a.ownerDocument,e=d.documentElement,f=m();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f.x=0),b?c.top+f.y-e.clientTop:c.left+f.x-e.clientLeft}function e(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function f(a,b,c){c>0&&(j(a,b),setTimeout(function(){k(a,b)},c))}function g(a){return Math.max(Math.min(a,100),0)}function h(a){return Array.isArray(a)?a:[a]}function i(a){a=String(a);var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function k(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function l(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)}function m(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===(document.compatMode||""),c=a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,d=a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop;return{x:c,y:d}}function n(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function o(a,b){return 100/(b-a)}function p(a,b){return 100*b/(a[1]-a[0])}function q(a,b){return p(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function r(a,b){return b*(a[1]-a[0])/100+a[0]}function s(a,b){for(var c=1;a>=b[c];)c+=1;return c}function t(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=s(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+q([d,e],c)/o(f,g)}function u(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=s(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],r([d,e],(c-f)*o(f,g))}function v(a,b,d,e){if(100===e)return e;var f,g,h=s(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):b[h-1]?a[h-1]+c(e-a[h-1],b[h-1]):e}function w(a,b,c){var d;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(d="min"===a?0:"max"===a?100:parseFloat(a),!e(d)||!e(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(d),c.xVal.push(b[0]),d?c.xSteps.push(!isNaN(b[1])&&b[1]):isNaN(b[1])||(c.xSteps[0]=b[1]),c.xHighestCompleteStep.push(0)}function x(a,b,c){if(!b)return!0;c.xSteps[a]=p([c.xVal[a],c.xVal[a+1]],b)/o(c.xPct[a],c.xPct[a+1]);var d=(c.xVal[a+1]-c.xVal[a])/c.xNumSteps[a],e=Math.ceil(Number(d.toFixed(3))-1),f=c.xVal[a]+c.xNumSteps[a]*e;c.xHighestCompleteStep[a]=f}function y(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.length&&"object"==typeof f[0][0]?f.sort(function(a,b){return a[0][0]-b[0][0]}):f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)w(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)x(e,this.xNumSteps[e],this)}function z(a,b){if(!e(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function A(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");a.spectrum=new y(b,a.snap,a.dir,a.singleStep)}function B(a,b){if(b=h(b),!Array.isArray(b)||!b.length)throw new Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length,a.start=b}function C(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function D(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function E(a,b){if(a.animationDuration=b,"number"!=typeof b)throw new Error("noUiSlider: 'animationDuration' option must be a number.")}function F(a,b){var c,d=[!1];if("lower"===b?b=[!0,!1]:"upper"===b&&(b=[!1,!0]),b===!0||b===!1){for(c=1;c<a.handles;c++)d.push(b);d.push(!1)}else{if(!Array.isArray(b)||!b.length||b.length!==a.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");d=b}a.connect=d}function G(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function H(a,b){if(!e(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function I(a,b){if(!e(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit||a.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function J(a,b){if(!e(b))throw new Error("noUiSlider: 'padding' option must be numeric.");if(0!==b){if(a.padding=a.spectrum.getMargin(b),!a.padding)throw new Error("noUiSlider: 'padding' option is only supported on linear sliders.");if(a.padding<0)throw new Error("noUiSlider: 'padding' option must be a positive number.");if(a.padding>=50)throw new Error("noUiSlider: 'padding' option must be less than half the range.")}}function K(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function L(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(e){if(2!==a.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");H(a,a.start[1]-a.start[0])}a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function M(a,b){if(b!==!1)if(b===!0){a.tooltips=[];for(var c=0;c<a.handles;c++)a.tooltips.push(!0)}else{if(a.tooltips=h(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})}}function N(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function O(a,b){if(void 0!==b&&"string"!=typeof b&&b!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function P(a,b){if(void 0!==b&&"object"!=typeof b)throw new Error("noUiSlider: 'cssClasses' must be an object.");if("string"==typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function Q(a,b){if(b!==!0&&b!==!1)throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");a.useRequestAnimationFrame=b}function R(a){var b={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,format:U},c={step:{r:!1,t:z},start:{r:!0,t:B},connect:{r:!0,t:F},direction:{r:!0,t:K},snap:{r:!1,t:C},animate:{r:!1,t:D},animationDuration:{r:!1,t:E},range:{r:!0,t:A},orientation:{r:!1,t:G},margin:{r:!1,t:H},limit:{r:!1,t:I},padding:{r:!1,t:J},behaviour:{r:!0,t:L},format:{r:!1,t:N},tooltips:{r:!1,t:M},cssPrefix:{r:!1,t:O},cssClasses:{r:!1,t:P},useRequestAnimationFrame:{r:!1,t:Q}},d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};Object.keys(c).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(c[e].r)throw new Error("noUiSlider: '"+e+"' is required.");return!0}c[e].t(b,void 0===a[e]?d[e]:a[e])}),b.pips=a.pips;var e=[["left","top"],["right","bottom"]];return b.style=e[b.dir][b.ort],b.styleOposite=e[b.dir?0:1][b.ort],b}function S(c,e,i){function o(b,c){var d=a(b,e.cssClasses.origin),f=a(d,e.cssClasses.handle);return f.setAttribute("data-handle",c),0===c?j(f,e.cssClasses.handleLower):c===e.handles-1&&j(f,e.cssClasses.handleUpper),d}function p(b,c){return!!c&&a(b,e.cssClasses.connect)}function q(a,b){ba=[],ca=[],ca.push(p(b,a[0]));for(var c=0;c<e.handles;c++)ba.push(o(b,c)),ha[c]=c,ca.push(p(b,a[c+1]))}function r(b){j(b,e.cssClasses.target),0===e.dir?j(b,e.cssClasses.ltr):j(b,e.cssClasses.rtl),0===e.ort?j(b,e.cssClasses.horizontal):j(b,e.cssClasses.vertical),aa=a(b,e.cssClasses.base)}function s(b,c){return!!e.tooltips[c]&&a(b.firstChild,e.cssClasses.tooltip)}function t(){var a=ba.map(s);Z("update",function(b,c,d){if(a[c]){var f=b[c];e.tooltips[c]!==!0&&(f=e.tooltips[c].to(d[c])),a[c].innerHTML=f}})}function u(a,b,c){if("range"===a||"steps"===a)return ja.xVal;if("count"===a){var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return ja.fromStepping(c?ja.getStep(a):a)}):"values"===a?c?b.map(function(a){return ja.fromStepping(ja.getStep(ja.toStepping(a)))}):b:void 0}function v(a,c,d){function e(a,b){return(a+b).toFixed(7)/1}var f={},g=ja.xVal[0],h=ja.xVal[ja.xVal.length-1],i=!1,j=!1,k=0;return d=b(d.slice().sort(function(a,b){return a-b})),d[0]!==g&&(d.unshift(g),i=!0),d[d.length-1]!==h&&(d.push(h),j=!0),d.forEach(function(b,g){var h,l,m,n,o,p,q,r,s,t,u=b,v=d[g+1];if("steps"===c&&(h=ja.xNumSteps[g]),h||(h=v-u),u!==!1&&void 0!==v)for(h=Math.max(h,1e-7),l=u;l<=v;l=e(l,h)){for(n=ja.toStepping(l),o=n-k,r=o/a,s=Math.round(r),t=o/s,m=1;m<=s;m+=1)p=k+m*t,f[p.toFixed(5)]=["x",0];q=d.indexOf(l)>-1?1:"steps"===c?2:0,!g&&i&&(q=0),l===v&&j||(f[n.toFixed(5)]=[l,q]),k=n}}),f}function w(a,b,c){function d(a,b){var c=b===e.cssClasses.value,d=c?m:n,f=c?k:l;return b+" "+d[e.ort]+" "+f[a]}function f(a,b,c){return'class="'+d(c[1],b)+'" style="'+e.style+": "+a+'%"'}function g(a,d){d[1]=d[1]&&b?b(d[0],d[1]):d[1],i+="<div "+f(a,e.cssClasses.marker,d)+"></div>",d[1]&&(i+="<div "+f(a,e.cssClasses.value,d)+">"+c.to(d[0])+"</div>")}var h=document.createElement("div"),i="",k=[e.cssClasses.valueNormal,e.cssClasses.valueLarge,e.cssClasses.valueSub],l=[e.cssClasses.markerNormal,e.cssClasses.markerLarge,e.cssClasses.markerSub],m=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],n=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];return j(h,e.cssClasses.pips),j(h,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(a).forEach(function(b){g(b,a[b])}),h.innerHTML=i,h}function x(a){var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=u(b,e,f),h=v(c,b,g),i=a.format||{to:Math.round};return fa.appendChild(w(h,d,i))}function y(){var a=aa.getBoundingClientRect(),b="offset"+["Width","Height"][e.ort];return 0===e.ort?a.width||aa[b]:a.height||aa[b]}function z(a,b,c,d){var f=function(b){return!fa.hasAttribute("disabled")&&(!l(fa,e.cssClasses.tap)&&(!!(b=A(b,d.pageOffset))&&(!(a===ea.start&&void 0!==b.buttons&&b.buttons>1)&&((!d.hover||!b.buttons)&&(b.calcPoint=b.points[e.ort],void c(b,d))))))},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,!1),g.push([a,f])}),g}function A(a,b){a.preventDefault();var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer");if(0===a.type.indexOf("MSPointer")&&(g=!0),e){if(a.touches.length>1)return!1;c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY}return b=b||m(),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),a.pageOffset=b,a.points=[c,d],a.cursor=f||g,a}function B(a){var b=a-d(aa,e.ort),c=100*b/y();return e.dir?100-c:c}function C(a){var b=100,c=!1;return ba.forEach(function(d,e){if(!d.hasAttribute("disabled")){var f=Math.abs(ga[e]-a);f<b&&(c=e,b=f)}}),c}function D(a,b,c,d){var e=c.slice(),f=[!a,a],g=[a,!a];d=d.slice(),a&&d.reverse(),d.length>1?d.forEach(function(a,c){var d=M(e,a,e[a]+b,f[c],g[c]);d===!1?b=0:(b=d-e[a],e[a]=d)}):f=g=[!0];var h=!1;d.forEach(function(a,d){h=Q(a,c[a]+b,f[d],g[d])||h}),h&&d.forEach(function(a){E("update",a),E("slide",a)})}function E(a,b,c){Object.keys(la).forEach(function(d){var f=d.split(".")[0];a===f&&la[d].forEach(function(a){a.call(da,ka.map(e.format.to),b,ka.slice(),c||!1,ga.slice())})})}function F(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&H(a,b)}function G(a,b){if(navigator.appVersion.indexOf("MSIE 9")===-1&&0===a.buttons&&0!==b.buttonsProperty)return H(a,b);var c=(e.dir?-1:1)*(a.calcPoint-b.startCalcPoint),d=100*c/b.baseSize;D(c>0,d,b.locations,b.handleNumbers)}function H(a,b){ia&&(k(ia,e.cssClasses.active),ia=!1),a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener)),document.documentElement.noUiListeners.forEach(function(a){document.documentElement.removeEventListener(a[0],a[1])}),k(fa,e.cssClasses.drag),P(),b.handleNumbers.forEach(function(a){E("set",a),E("change",a),E("end",a)})}function I(a,b){if(1===b.handleNumbers.length){var c=ba[b.handleNumbers[0]];if(c.hasAttribute("disabled"))return!1;ia=c.children[0],j(ia,e.cssClasses.active)}a.preventDefault(),a.stopPropagation();var d=z(ea.move,document.documentElement,G,{startCalcPoint:a.calcPoint,baseSize:y(),pageOffset:a.pageOffset,handleNumbers:b.handleNumbers,buttonsProperty:a.buttons,locations:ga.slice()}),f=z(ea.end,document.documentElement,H,{handleNumbers:b.handleNumbers}),g=z("mouseout",document.documentElement,F,{handleNumbers:b.handleNumbers});if(document.documentElement.noUiListeners=d.concat(f,g),a.cursor){document.body.style.cursor=getComputedStyle(a.target).cursor,ba.length>1&&j(fa,e.cssClasses.drag);var h=function(){return!1};document.body.noUiListener=h,document.body.addEventListener("selectstart",h,!1)}b.handleNumbers.forEach(function(a){E("start",a)})}function J(a){a.stopPropagation();var b=B(a.calcPoint),c=C(b);return c!==!1&&(e.events.snap||f(fa,e.cssClasses.tap,e.animationDuration),Q(c,b,!0,!0),P(),E("slide",c,!0),E("set",c,!0),E("change",c,!0),E("update",c,!0),void(e.events.snap&&I(a,{handleNumbers:[c]})))}function K(a){var b=B(a.calcPoint),c=ja.getStep(b),d=ja.fromStepping(c);Object.keys(la).forEach(function(a){"hover"===a.split(".")[0]&&la[a].forEach(function(a){a.call(da,d)})})}function L(a){a.fixed||ba.forEach(function(a,b){z(ea.start,a.children[0],I,{handleNumbers:[b]})}),a.tap&&z(ea.start,aa,J,{}),a.hover&&z(ea.move,aa,K,{hover:!0}),a.drag&&ca.forEach(function(b,c){if(b!==!1&&0!==c&&c!==ca.length-1){var d=ba[c-1],f=ba[c],g=[b];j(b,e.cssClasses.draggable),a.fixed&&(g.push(d.children[0]),g.push(f.children[0])),g.forEach(function(a){z(ea.start,a,I,{handles:[d,f],handleNumbers:[c-1,c]})})}})}function M(a,b,c,d,f){return ba.length>1&&(d&&b>0&&(c=Math.max(c,a[b-1]+e.margin)),f&&b<ba.length-1&&(c=Math.min(c,a[b+1]-e.margin))),ba.length>1&&e.limit&&(d&&b>0&&(c=Math.min(c,a[b-1]+e.limit)),f&&b<ba.length-1&&(c=Math.max(c,a[b+1]-e.limit))),e.padding&&(0===b&&(c=Math.max(c,e.padding)),b===ba.length-1&&(c=Math.min(c,100-e.padding))),c=ja.getStep(c),c=g(c),c!==a[b]&&c}function N(a){return a+"%"}function O(a,b){ga[a]=b,ka[a]=ja.fromStepping(b);var c=function(){ba[a].style[e.style]=N(b),S(a),S(a+1)};window.requestAnimationFrame&&e.useRequestAnimationFrame?window.requestAnimationFrame(c):c()}function P(){ha.forEach(function(a){var b=ga[a]>50?-1:1,c=3+(ba.length+b*a);ba[a].childNodes[0].style.zIndex=c})}function Q(a,b,c,d){return b=M(ga,a,b,c,d),b!==!1&&(O(a,b),!0)}function S(a){if(ca[a]){var b=0,c=100;0!==a&&(b=ga[a-1]),a!==ca.length-1&&(c=ga[a]),ca[a].style[e.style]=N(b),ca[a].style[e.styleOposite]=N(100-c)}}function T(a,b){null!==a&&a!==!1&&("number"==typeof a&&(a=String(a)),a=e.format.from(a),a===!1||isNaN(a)||Q(b,ja.toStepping(a),!1,!1))}function U(a,b){var c=h(a),d=void 0===ga[0];b=void 0===b||!!b,c.forEach(T),e.animate&&!d&&f(fa,e.cssClasses.tap,e.animationDuration),ha.forEach(function(a){Q(a,ga[a],!0,!1)}),P(),ha.forEach(function(a){E("update",a),null!==c[a]&&b&&E("set",a)})}function V(a){U(e.start,a)}function W(){var a=ka.map(e.format.to);return 1===a.length?a[0]:a}function X(){for(var a in e.cssClasses)e.cssClasses.hasOwnProperty(a)&&k(fa,e.cssClasses[a]);for(;fa.firstChild;)fa.removeChild(fa.firstChild);delete fa.noUiSlider}function Y(){return ga.map(function(a,b){var c=ja.getNearbySteps(a),d=ka[b],e=c.thisStep.step,f=null;e!==!1&&d+e>c.stepAfter.startValue&&(e=c.stepAfter.startValue-d),f=d>c.thisStep.startValue?c.thisStep.step:c.stepBefore.step!==!1&&d-c.stepBefore.highestStep,100===a?e=null:0===a&&(f=null);var g=ja.countStepDecimals();return null!==e&&e!==!1&&(e=Number(e.toFixed(g))),null!==f&&f!==!1&&(f=Number(f.toFixed(g))),[f,e]})}function Z(a,b){la[a]=la[a]||[],la[a].push(b),"update"===a.split(".")[0]&&ba.forEach(function(a,b){E("update",b)})}function $(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(la).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete la[a]})}function _(a,b){var c=W(),d=["margin","limit","padding","range","animate","snap","step","format"];d.forEach(function(b){void 0!==a[b]&&(i[b]=a[b])});var f=R(i);d.forEach(function(b){void 0!==a[b]&&(e[b]=f[b])}),f.spectrum.direction=ja.direction,ja=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,ga=[],U(a.start||c,b)}var aa,ba,ca,da,ea=n(),fa=c,ga=[],ha=[],ia=!1,ja=e.spectrum,ka=[],la={};if(fa.noUiSlider)throw new Error("Slider was already initialized.");return r(fa),q(e.connect,aa),da={destroy:X,steps:Y,on:Z,off:$,get:W,set:U,reset:V,__moveHandles:function(a,b,c){D(a,b,ga,c)},options:i,updateOptions:_,target:fa,pips:x},L(e.events),U(e.start),e.pips&&x(e.pips),e.tooltips&&t(),da}function T(a,b){if(!a.nodeName)throw new Error("noUiSlider.create requires a single element.");var c=R(b,a),d=S(a,c,b);return a.noUiSlider=d,d}y.prototype.getMargin=function(a){var b=this.xNumSteps[0];if(b&&a/b%1!==0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,a)},y.prototype.toStepping=function(a){return a=t(this.xVal,this.xPct,a)},y.prototype.fromStepping=function(a){return u(this.xVal,this.xPct,a)},y.prototype.getStep=function(a){return a=v(this.xPct,this.xSteps,this.snap,a)},y.prototype.getNearbySteps=function(a){var b=s(a,this.xPct);return{stepBefore:{startValue:this.xVal[b-2],step:this.xNumSteps[b-2],highestStep:this.xHighestCompleteStep[b-2]},thisStep:{startValue:this.xVal[b-1],step:this.xNumSteps[b-1],highestStep:this.xHighestCompleteStep[b-1]},stepAfter:{startValue:this.xVal[b-0],step:this.xNumSteps[b-0],highestStep:this.xHighestCompleteStep[b-0]}}},y.prototype.countStepDecimals=function(){var a=this.xNumSteps.map(i);return Math.max.apply(null,a)},y.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var U={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{create:T}});
/*!

 =========================================================
 * Material Kit - v2.0.4
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var big_image;

$(document).ready(function() {
  BrowserDetect.init();

  // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
  $('body').bootstrapMaterialDesign();

  window_width = $(window).width();

  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;

  $navbar_collapse = $('.navbar').find('.navbar-collapse');

  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

  // Activate Popovers
  $('[data-toggle="popover"]').popover();

  if ($('.navbar-color-on-scroll').length != 0) {
    $(window).on('scroll', materialKit.checkScrollForTransparentNavbar);
  }

  materialKit.checkScrollForTransparentNavbar();

  if (window_width >= 768) {
    big_image = $('.page-header[data-parallax="true"]');
    if (big_image.length != 0) {
      $(window).on('scroll', materialKit.checkScrollForParallax);
    }

  }


});

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (materialKit.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    materialKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);

    $('html').removeClass('nav-open-absolute');
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 580);


    div = '<div id="bodyClick"></div>';
    $(div).appendTo("body").click(function() {
      $('html').removeClass('nav-open');

      if ($('nav').hasClass('navbar-absolute')) {
        $('html').removeClass('nav-open-absolute');
      }
      materialKit.misc.navbar_menu_visible = 0;
      $('#bodyClick').remove();
      setTimeout(function() {
        $toggle.removeClass('toggled');
      }, 550);
    });

    if ($('nav').hasClass('navbar-absolute')) {
      $('html').addClass('nav-open-absolute');
    }

    $('html').addClass('nav-open');
    materialKit.misc.navbar_menu_visible = 1;
  }
});

materialKit = {
  misc: {
    navbar_menu_visible: 0,
    window_width: 0,
    transparent: true,
    fixedTop: false,
    navbar_initialized: false,
    isWindow: document.documentMode || /Edge/.test(navigator.userAgent)
  },

  initFormExtendedDatetimepickers: function() {
    $('.datetimepicker').datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  },

  initSliders: function() {
    // Sliders for demo purpose
    var slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  },

  checkScrollForParallax: function() {
    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (materialKit.misc.transparent) {
        materialKit.misc.transparent = false;
        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
      }
    } else {
      if (!materialKit.misc.transparent) {
        materialKit.misc.transparent = true;
        $('.navbar-color-on-scroll').addClass('navbar-transparent');
      }
    }
  }, 17)
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

var BrowserDetect = {
  init: function() {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function(data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function(dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");
    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [{
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer"
    },
    {
      string: navigator.userAgent,
      subString: "Trident",
      identity: "Explorer"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },
    {
      string: navigator.userAgent,
      subString: "Safari",
      identity: "Safari"
    },
    {
      string: navigator.userAgent,
      subString: "Opera",
      identity: "Opera"
    }
  ]

};

var better_browser = '<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>';
$(document).ready(function () {

    //$('#alert').hide();
    $('.btn-delete').click(function (e) {
        e.preventDefault();
        if(!confirm("¿Está seguro de eliminar el producto definitivamente?"))
        {
            return false;
        }

        var row =$(this).parents('tr');
        var form=$(this).parents('form');
        var url =form.attr('action');

        //$('#alert').show();

        $.post(url,form.serialize(),function (result) {
            row.fadeOut();
            $('#products-total').html(result.total);
            //$('#alert').html(result.message);

            toastr.success().html(result.mensaje);//mensaje
        }).fail(function () {
            toastr.error('algo salió mal ')
        });
    });


    //$('#alert').hide();
    $('.btn-delete-cart').click(function (e)
    {
        e.preventDefault();
        if(!confirm("¿Está seguro de eliminar el producto del carrito?"))
        {
            return false;
        }

        var row =$(this).parents('tr');
        var form=$(this).parents('form');
        var url =form.attr('action');

        //$('#alert').show();

        $.post(url,form.serialize(),function (result)
        {
            row.fadeOut();
            $('#idcarrito').html(result.totalcarrito);
            toastr.info().html(result.mensaje);

        }).fail(function ()
        {
            toastr.error('algo salió mal ')
        });
    });



});