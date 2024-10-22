(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        538: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "SentrySdk", (function() {
                return m
            })), t.d(n, "getConfig", (function() {
                return R
            }));
            var o = t(517),
                r = t.n(o),
                c = t(535);
            t.d(n, "init", (function() {
                return c.a
            }));
            var d = t(434),
                l = t(534),
                f = t(542),
                w = t(543),
                v = t(567);
            const m = { ...d,
                ...l
            };

            function R(e) {
                const n = {
                    dsn: "https://987535ba29334c1fb4ea51cf71e5a9c9@o149049.ingest.sentry.io/5742890",
                    environment: "production",
                    whitelistUrls: [new RegExp("campsite\\.bio", "")],
                    ignoreErrors: ["top.GLOBALS", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "Can't find variable: ResizeObserver", "ReportingObserver [deprecation]", "processRandomSelector is not defined", "Can't find variable: _AutofillCallbackHandler", "Can't find variable: _pcmBridgeCallbackHandler", "Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'", "undefined is not an object (evaluating 'J.push')", "n.flatMap is not a function"],
                    denyUrls: [new RegExp("connect\\.facebook\\.net\\/en_US\\/all\\.js", "i"), new RegExp("extensions\\/", "i"), new RegExp("^chrome:\\/\\/", "i")],
                    release: "759154ca912e10d4c96e52927c33bda5e081a4ac"
                };
                n.integrations = [new f.a, new w.a({
                    types: ["crash"]
                }), new v.a];
                const t = "sentry";
                return e.$config && t && e.$config[t] && r()(n, e.$config[t].config, e.$config[t].clientConfig), n
            }
        }
    }
]);