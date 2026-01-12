import { defineComponent as $, computed as p, createElementBlock as s, openBlock as n, createElementVNode as t, unref as b, Fragment as g, renderList as x, normalizeClass as w, toDisplayString as v, createCommentVNode as h, createVNode as m, provide as L, renderSlot as A, onMounted as I, watch as N, nextTick as z } from "vue";
import { useData as y, useRoute as C, withBase as D, Content as F } from "vitepress";
import H from "medium-zoom";
const W = { class: "site-header" }, B = { class: "header-logo-row" }, E = { class: "header-bar" }, T = ["src"], V = { class: "main-nav" }, j = ["href"], M = { class: "lang-switcher" }, S = /* @__PURE__ */ $({
  __name: "Header",
  setup(i) {
    const { theme: a, localeIndex: u } = y(), e = C(), d = p(() => a.value.nav || []), l = p(() => u.value), _ = (r) => {
      const o = e.path;
      return r === "/" || r === "/en/" ? o === r || o === r.slice(0, -1) : o.startsWith(r);
    }, c = (r) => {
      const o = e.path;
      r === "zh" ? o.startsWith("/en/") ? window.location.href = o.replace("/en/", "/") : o === "/en" && (window.location.href = "/") : o.startsWith("/en") || (o === "/" ? window.location.href = "/en/" : window.location.href = "/en" + o);
    };
    return (r, o) => (n(), s("header", W, [
      t("div", B, [
        o[2] || (o[2] = t("a", {
          href: "/",
          class: "site-logo"
        }, " huanjun ", -1)),
        t("div", E, [
          t("img", {
            src: b(D)("/header.svg"),
            alt: "Header decoration"
          }, null, 8, T)
        ])
      ]),
      t("nav", V, [
        (n(!0), s(g, null, x(d.value, (f) => (n(), s("a", {
          key: f.link,
          href: b(D)(f.link),
          class: w(["nav-item", { active: _(f.link) }])
        }, v(f.text), 11, j))), 128)),
        t("div", M, [
          t("button", {
            class: w(["lang-btn", { active: l.value === "root" }]),
            onClick: o[0] || (o[0] = (f) => c("zh"))
          }, " 中文 ", 2),
          t("button", {
            class: w(["lang-btn", { active: l.value === "en" }]),
            onClick: o[1] || (o[1] = (f) => c("en"))
          }, " EN ", 2)
        ])
      ])
    ]));
  }
}), k = (i, a) => {
  const u = i.__vccOpts || i;
  for (const [e, d] of a)
    u[e] = d;
  return u;
}, Y = /* @__PURE__ */ k(S, [["__scopeId", "data-v-41912255"]]), Z = { class: "site-footer" }, O = { class: "footer-content" }, P = { class: "footer-copyright" }, R = {
  key: 0,
  class: "footer-links"
}, q = ["href"], G = { key: 0 }, J = /* @__PURE__ */ $({
  __name: "Footer",
  setup(i) {
    const { theme: a } = y(), u = (/* @__PURE__ */ new Date()).getFullYear(), e = p(() => a.value.footer || {}), d = p(() => e.value.copyright || `© ${u} All rights reserved.`), l = p(() => e.value.links || []);
    return (_, c) => (n(), s("footer", Z, [
      t("div", O, [
        t("div", P, v(d.value), 1),
        l.value.length > 0 ? (n(), s("div", R, [
          (n(!0), s(g, null, x(l.value, (r, o) => (n(), s(g, {
            key: r.link
          }, [
            t("a", {
              href: r.link,
              target: "_blank",
              rel: "noopener"
            }, v(r.text), 9, q),
            o < l.value.length - 1 ? (n(), s("span", G, "·")) : h("", !0)
          ], 64))), 128))
        ])) : h("", !0)
      ])
    ]));
  }
}), K = /* @__PURE__ */ k(J, [["__scopeId", "data-v-f7a9a898"]]), Q = { class: "article-container" }, U = {
  key: 0,
  class: "article-header"
}, X = { class: "article-meta" }, ee = { key: 0 }, te = { key: 1 }, oe = { key: 2 }, se = { class: "article-content" }, ne = {
  key: 1,
  class: "article-footer"
}, ae = { class: "article-tags" }, re = ["href"], ce = /* @__PURE__ */ $({
  __name: "Article",
  setup(i) {
    const { frontmatter: a, page: u } = y(), e = p(() => ({
      date: a.value.date || "",
      category: a.value.category || "",
      tags: a.value.tags || [],
      author: a.value.author || "huanjun"
    })), d = (l) => l ? new Date(l).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) : "";
    return (l, _) => (n(), s("article", Q, [
      e.value.date ? (n(), s("header", U, [
        t("div", X, [
          e.value.date ? (n(), s("span", ee, v(d(e.value.date)), 1)) : h("", !0),
          e.value.category ? (n(), s("span", te, "· " + v(e.value.category), 1)) : h("", !0),
          e.value.author ? (n(), s("span", oe, "· " + v(e.value.author), 1)) : h("", !0)
        ])
      ])) : h("", !0),
      t("div", se, [
        m(b(F))
      ]),
      e.value.tags.length > 0 ? (n(), s("footer", ne, [
        t("div", ae, [
          _[0] || (_[0] = t("span", { class: "tag-label" }, "标签：", -1)),
          (n(!0), s(g, null, x(e.value.tags, (c) => (n(), s("a", {
            key: c,
            href: `/tags/${c}`,
            class: "article-tag"
          }, v(c), 9, re))), 128))
        ])
      ])) : h("", !0)
    ]));
  }
}), le = /* @__PURE__ */ k(ce, [["__scopeId", "data-v-1a2edd8c"]]), ie = { class: "layout" }, ue = { class: "site-container" }, de = { class: "main-content" }, _e = {
  key: 0,
  class: "page-title-section"
}, he = { class: "page-title" }, ve = { class: "content-wrapper" }, pe = /* @__PURE__ */ $({
  __name: "Layout",
  setup(i) {
    const { frontmatter: a, page: u, theme: e } = y(), d = C();
    L("themeConfig", e);
    const l = p(() => {
      const c = d.path;
      return c === "/" || c.endsWith("/en/") || c === "/en";
    }), _ = p(() => l.value ? e.value.homeTitle || "" : a.value.title || u.value.title || "");
    return (c, r) => (n(), s("div", ie, [
      t("div", ue, [
        m(Y),
        t("main", de, [
          _.value ? (n(), s("section", _e, [
            t("h1", he, v(_.value), 1),
            r[0] || (r[0] = t("div", { class: "title-underline" }, null, -1))
          ])) : h("", !0),
          t("div", ve, [
            A(c.$slots, "default", {}, () => [
              m(le)
            ], !0)
          ])
        ]),
        m(K)
      ])
    ]));
  }
}), fe = /* @__PURE__ */ k(pe, [["__scopeId", "data-v-7d08f9b8"]]);
/**
 * vitepress-theme-usgs
 * 
 * A minimalist VitePress theme inspired by U.S. Graphics Company design.
 * 
 * Features:
 * - Clean black & white design with red accent
 * - Responsive layout
 * - Configurable via themeConfig
 * - Medium-zoom for images
 * - Multi-language support
 * 
 * @license MIT
 */
const ye = {
  Layout: fe,
  enhanceApp({ app: i }) {
  },
  setup() {
    const i = C(), a = () => {
      H(".article-content img, .post-excerpt img", {
        background: "rgba(0, 0, 0, 0.9)"
      });
    };
    I(() => a()), N(
      () => i.path,
      () => z(() => a())
    );
  }
};
export {
  le as Article,
  K as Footer,
  Y as Header,
  fe as Layout,
  ye as default
};
