import Uf, { Notification as Ju, app as kt, protocol as zf, Tray as jy, Menu as ky, net as Ny, ipcMain as be, dialog as Ri, shell as Iy, BrowserWindow as Cy } from "electron";
import Hn from "util";
import Xe, { Readable as Dy } from "stream";
import Y, { resolve as Xu } from "path";
import Ws from "http";
import Js from "https";
import Xs from "url";
import Fy, { existsSync as Pe, readFileSync as Ly } from "fs";
import qf from "crypto";
import My from "net";
import Uy from "tls";
import $c from "assert";
import Vf from "tty";
import ct from "os";
import zy, { EventEmitter as qy } from "events";
import Bf from "http2";
import Pt from "zlib";
import * as se from "node:path";
import ne, { resolve as Yu, join as Vy, relative as By, sep as Hy } from "node:path";
import { fileURLToPath as Hf } from "node:url";
import Re from "fs/promises";
import Ie from "node:process";
import { promisify as tt, isDeepStrictEqual as Zu } from "node:util";
import pe, { existsSync as _c, unwatchFile as Qu, watchFile as Gy, watch as Ky, stat as Wy } from "node:fs";
import Lr from "node:crypto";
import ep from "node:assert";
import yn, { type as Jy } from "node:os";
import { EventEmitter as Xy } from "node:events";
import { Readable as Yy } from "node:stream";
import Gf, { lstat as Co, stat as Ys, readdir as Kf, realpath as cs, open as Zy } from "node:fs/promises";
import { exec as Qy } from "node:child_process";
function Wf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: eg } = Object.prototype, { getPrototypeOf: mr } = Object, { iterator: $a, toStringTag: Jf } = Symbol, Ts = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), fa = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), Ts(n, t))
      return !0;
    n = mr(n);
  }
  return !1;
}, tg = (e, t) => e != null && fa(e, t) ? e[t] : void 0, wc = /* @__PURE__ */ ((e) => (t) => {
  const n = eg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Mt = (e) => (e = e.toLowerCase(), (t) => wc(t) === e), Zs = (e) => (t) => typeof t === e, { isArray: Dn } = Array, hr = Zs("undefined");
function Er(e) {
  return e !== null && !hr(e) && e.constructor !== null && !hr(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xf = Mt("ArrayBuffer");
function ng(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xf(e.buffer), t;
}
const rg = Zs("string"), gt = Zs("function"), Yf = Zs("number"), Sr = (e) => e !== null && typeof e == "object", ag = (e) => e === !0 || e === !1, ls = (e) => {
  if (!Sr(e))
    return !1;
  const t = mr(e);
  return (t === null || t === Object.prototype || mr(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !fa(e, Jf) && !fa(e, $a);
}, sg = (e) => {
  if (!Sr(e) || Er(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ig = Mt("Date"), og = Mt("File"), cg = (e) => !!(e && typeof e.uri < "u"), lg = (e) => e && typeof e.getParts < "u", ug = Mt("Blob"), pg = Mt("FileList"), dg = (e) => Sr(e) && gt(e.pipe);
function fg() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const tp = fg(), np = typeof tp.FormData < "u" ? tp.FormData : void 0, mg = (e) => {
  if (!e) return !1;
  if (np && e instanceof np) return !0;
  const t = mr(e);
  if (!t || t === Object.prototype || !gt(e.append)) return !1;
  const n = wc(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && gt(e.toString) && e.toString() === "[object FormData]";
}, hg = Mt("URLSearchParams"), [vg, yg, gg, bg] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Mt), $g = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _a(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Dn(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (Er(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let o;
    for (r = 0; r < i; r++)
      o = s[r], t.call(null, e[o], o, e);
  }
}
function Zf(e, t) {
  if (Er(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Qf = (e) => !hr(e) && e !== Tn;
function Do(...e) {
  const { caseless: t, skipUndefined: n } = Qf(this) && this || {}, r = {}, a = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const o = t && typeof i == "string" && Zf(r, i) || i, c = Ts(r, o) ? r[o] : void 0;
    ls(c) && ls(s) ? r[o] = Do(c, s) : ls(s) ? r[o] = Do({}, s) : Dn(s) ? r[o] = s.slice() : (!n || !hr(s)) && (r[o] = s);
  };
  for (let s = 0, i = e.length; s < i; s++) {
    const o = e[s];
    if (!o || Er(o) || (_a(o, a), typeof o != "object" || Dn(o)))
      continue;
    const c = Object.getOwnPropertySymbols(o);
    for (let u = 0; u < c.length; u++) {
      const l = c[u];
      kg.call(o, l) && a(o[l], l);
    }
  }
  return r;
}
const _g = (e, t, n, { allOwnKeys: r } = {}) => (_a(
  t,
  (a, s) => {
    n && gt(a) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Wf(a, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, s, {
      __proto__: null,
      value: a,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), wg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), xg = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Eg = (e, t, n, r) => {
  let a, s, i;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      i = a[s], (!r || r(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = n !== !1 && mr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Sg = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Pg = (e) => {
  if (!e) return null;
  if (Dn(e)) return e;
  let t = e.length;
  if (!Yf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Rg = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mr(Uint8Array)), Og = (e, t) => {
  const r = (e && e[$a]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, Ag = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Tg = Mt("HTMLFormElement"), jg = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
  return r.toUpperCase() + a;
}), { propertyIsEnumerable: kg } = Object.prototype, Ng = Mt("RegExp"), em = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _a(n, (a, s) => {
    let i;
    (i = t(a, s, e)) !== !1 && (r[s] = i || a);
  }), Object.defineProperties(e, r);
}, Ig = (e) => {
  em(e, (t, n) => {
    if (gt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (gt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Cg = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Dn(e) ? r(e) : r(String(e).split(t)), n;
}, Dg = () => {
}, Fg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Lg(e) {
  return !!(e && gt(e.append) && e[Jf] === "FormData" && e[$a]);
}
const Mg = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Sr(r)) {
      if (t.has(r))
        return;
      if (Er(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const a = Dn(r) ? [] : {};
        return _a(r, (s, i) => {
          const o = n(s);
          !hr(o) && (a[i] = o);
        }), t.delete(r), a;
      }
    }
    return r;
  };
  return n(e);
}, Ug = Mt("AsyncFunction"), zg = (e) => e && (Sr(e) || gt(e)) && gt(e.then) && gt(e.catch), tm = ((e, t) => e ? setImmediate : t ? ((n, r) => (Tn.addEventListener(
  "message",
  ({ source: a, data: s }) => {
    a === Tn && s === n && r.length && r.shift()();
  },
  !1
), (a) => {
  r.push(a), Tn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", gt(Tn.postMessage)), qg = typeof queueMicrotask < "u" ? queueMicrotask.bind(Tn) : typeof process < "u" && process.nextTick || tm, nm = (e) => e != null && gt(e[$a]), Vg = (e) => e != null && fa(e, $a) && nm(e), P = {
  isArray: Dn,
  isArrayBuffer: Xf,
  isBuffer: Er,
  isFormData: mg,
  isArrayBufferView: ng,
  isString: rg,
  isNumber: Yf,
  isBoolean: ag,
  isObject: Sr,
  isPlainObject: ls,
  isEmptyObject: sg,
  isReadableStream: vg,
  isRequest: yg,
  isResponse: gg,
  isHeaders: bg,
  isUndefined: hr,
  isDate: ig,
  isFile: og,
  isReactNativeBlob: cg,
  isReactNative: lg,
  isBlob: ug,
  isRegExp: Ng,
  isFunction: gt,
  isStream: dg,
  isURLSearchParams: hg,
  isTypedArray: Rg,
  isFileList: pg,
  forEach: _a,
  merge: Do,
  extend: _g,
  trim: $g,
  stripBOM: wg,
  inherits: xg,
  toFlatObject: Eg,
  kindOf: wc,
  kindOfTest: Mt,
  endsWith: Sg,
  toArray: Pg,
  forEachEntry: Og,
  matchAll: Ag,
  isHTMLForm: Tg,
  hasOwnProperty: Ts,
  hasOwnProp: Ts,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: fa,
  getSafeProp: tg,
  reduceDescriptors: em,
  freezeMethods: Ig,
  toObjectSet: Cg,
  toCamelCase: jg,
  noop: Dg,
  toFiniteNumber: Fg,
  findKey: Zf,
  global: Tn,
  isContextDefined: Qf,
  isSpecCompliantForm: Lg,
  toJSONObject: Mg,
  isAsyncFn: Ug,
  isThenable: zg,
  setImmediate: tm,
  asap: qg,
  isIterable: nm,
  isSafeIterable: Vg
}, Bg = P.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Hg = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && Bg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function Gg(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const Kg = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Wg = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function xc(e, t) {
  return P.isArray(e) ? e.map((n) => xc(n, t)) : Gg(String(e).replace(t, ""));
}
const Jg = (e) => xc(e, Kg), Xg = (e) => xc(e, Wg);
function Ec(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return P.forEach(e.toJSON(), (n, r) => {
    t[r] = Xg(n);
  }), t;
}
const rp = Symbol("internals");
function Mr(e) {
  return e && String(e).trim().toLowerCase();
}
function us(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(us) : Jg(String(e));
}
function Yg(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Zg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Oi(e, t, n, r, a) {
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function Qg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function eb(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(a, s, i) {
        return this[r].call(this, t, a, s, i);
      },
      configurable: !0
    });
  });
}
let Ve = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(o, c, u) {
      const l = Mr(c);
      if (!l)
        return;
      const p = P.findKey(a, l);
      (!p || a[p] === void 0 || u === !0 || u === void 0 && a[p] !== !1) && (a[p || c] = us(o));
    }
    const i = (o, c) => P.forEach(o, (u, l) => s(u, l, c));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (P.isString(t) && (t = t.trim()) && !Zg(t))
      i(Hg(t), n);
    else if (P.isObject(t) && P.isSafeIterable(t)) {
      let o = /* @__PURE__ */ Object.create(null), c, u;
      for (const l of t) {
        if (!P.isArray(l))
          throw new TypeError("Object iterator must return a key-value pair");
        u = l[0], P.hasOwnProp(o, u) ? (c = o[u], o[u] = P.isArray(c) ? [...c, l[1]] : [c, l[1]]) : o[u] = l[1];
      }
      i(o, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Mr(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Yg(a);
        if (P.isFunction(n))
          return n.call(this, a, r);
        if (P.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Mr(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Oi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(i) {
      if (i = Mr(i), i) {
        const o = P.findKey(r, i);
        o && (!n || Oi(r, r[o], o, n)) && (delete r[o], a = !0);
      }
    }
    return P.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Oi(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return P.forEach(this, (a, s) => {
      const i = P.findKey(r, s);
      if (i) {
        n[i] = us(a), delete n[s];
        return;
      }
      const o = t ? Qg(s) : String(s).trim();
      o !== s && delete n[s], n[o] = us(a), r[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && P.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[rp] = this[rp] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(i) {
      const o = Mr(i);
      r[o] || (eb(a, i), r[o] = !0);
    }
    return P.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Ve.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
P.reduceDescriptors(Ve.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
P.freezeMethods(Ve);
const tb = "[REDACTED ****]";
function nb(e) {
  if (P.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (P.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function rb(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], a = (s) => {
    if (s === null || typeof s != "object" || P.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof Ve && (s = s.toJSON()), r.push(s);
    let i;
    if (P.isArray(s))
      i = [], s.forEach((o, c) => {
        const u = a(o);
        P.isUndefined(u) || (i[c] = u);
      });
    else {
      if (!P.isPlainObject(s) && nb(s))
        return r.pop(), s;
      i = /* @__PURE__ */ Object.create(null);
      for (const [o, c] of Object.entries(s)) {
        const u = n.has(o.toLowerCase()) ? tb : a(c);
        P.isUndefined(u) || (i[o] = u);
      }
    }
    return r.pop(), i;
  };
  return a(e);
}
let N = class rm extends Error {
  static from(t, n, r, a, s, i) {
    const o = new rm(t.message, n || t.code, r, a, s);
    return Object.defineProperty(o, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), o.name = t.name, t.status != null && o.status == null && (o.status = t.status), i && Object.assign(o, i), o;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, a, s) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), a && (this.request = a), s && (this.response = s, this.status = s.status);
  }
  toJSON() {
    const t = this.config, n = t && P.hasOwnProp(t, "redact") ? t.redact : void 0, r = P.isArray(n) && n.length > 0 ? rb(t, n) : P.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: r,
      code: this.code,
      status: this.status
    };
  }
};
N.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
N.ERR_BAD_OPTION = "ERR_BAD_OPTION";
N.ECONNABORTED = "ECONNABORTED";
N.ETIMEDOUT = "ETIMEDOUT";
N.ECONNREFUSED = "ECONNREFUSED";
N.ERR_NETWORK = "ERR_NETWORK";
N.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
N.ERR_DEPRECATED = "ERR_DEPRECATED";
N.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
N.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
N.ERR_CANCELED = "ERR_CANCELED";
N.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
N.ERR_INVALID_URL = "ERR_INVALID_URL";
N.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var am = Xe.Stream, ab = Hn, sb = Ut;
function Ut() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
ab.inherits(Ut, am);
Ut.create = function(e, t) {
  var n = new this();
  t = t || {};
  for (var r in t)
    n[r] = t[r];
  n.source = e;
  var a = e.emit;
  return e.emit = function() {
    return n._handleEmit(arguments), a.apply(e, arguments);
  }, e.on("error", function() {
  }), n.pauseStream && e.pause(), n;
};
Object.defineProperty(Ut.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
Ut.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
Ut.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
Ut.prototype.pause = function() {
  this.source.pause();
};
Ut.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach(function(e) {
    this.emit.apply(this, e);
  }.bind(this)), this._bufferedEvents = [];
};
Ut.prototype.pipe = function() {
  var e = am.prototype.pipe.apply(this, arguments);
  return this.resume(), e;
};
Ut.prototype._handleEmit = function(e) {
  if (this._released) {
    this.emit.apply(this, e);
    return;
  }
  e[0] === "data" && (this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e);
};
Ut.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(e));
  }
};
var ib = Hn, sm = Xe.Stream, ap = sb, ob = Fe;
function Fe() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
ib.inherits(Fe, sm);
Fe.create = function(e) {
  var t = new this();
  e = e || {};
  for (var n in e)
    t[n] = e[n];
  return t;
};
Fe.isStreamLike = function(e) {
  return typeof e != "function" && typeof e != "string" && typeof e != "boolean" && typeof e != "number" && !Buffer.isBuffer(e);
};
Fe.prototype.append = function(e) {
  var t = Fe.isStreamLike(e);
  if (t) {
    if (!(e instanceof ap)) {
      var n = ap.create(e, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      e.on("data", this._checkDataSize.bind(this)), e = n;
    }
    this._handleErrors(e), this.pauseStreams && e.pause();
  }
  return this._streams.push(e), this;
};
Fe.prototype.pipe = function(e, t) {
  return sm.prototype.pipe.call(this, e, t), this.resume(), e;
};
Fe.prototype._getNext = function() {
  if (this._currentStream = null, this._insideLoop) {
    this._pendingNext = !0;
    return;
  }
  this._insideLoop = !0;
  try {
    do
      this._pendingNext = !1, this._realGetNext();
    while (this._pendingNext);
  } finally {
    this._insideLoop = !1;
  }
};
Fe.prototype._realGetNext = function() {
  var e = this._streams.shift();
  if (typeof e > "u") {
    this.end();
    return;
  }
  if (typeof e != "function") {
    this._pipeNext(e);
    return;
  }
  var t = e;
  t(function(n) {
    var r = Fe.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }.bind(this));
};
Fe.prototype._pipeNext = function(e) {
  this._currentStream = e;
  var t = Fe.isStreamLike(e);
  if (t) {
    e.on("end", this._getNext.bind(this)), e.pipe(this, { end: !1 });
    return;
  }
  var n = e;
  this.write(n), this._getNext();
};
Fe.prototype._handleErrors = function(e) {
  var t = this;
  e.on("error", function(n) {
    t._emitError(n);
  });
};
Fe.prototype.write = function(e) {
  this.emit("data", e);
};
Fe.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
Fe.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
Fe.prototype.end = function() {
  this._reset(), this.emit("end");
};
Fe.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
Fe.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
Fe.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(e));
  }
};
Fe.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var e = this;
  this._streams.forEach(function(t) {
    t.dataSize && (e.dataSize += t.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
Fe.prototype._emitError = function(e) {
  this._reset(), this.emit("error", e);
};
var im = {};
const cb = {
  "application/1d-interleaved-parityfec": {
    source: "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/3gpp-ims+xml": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphal+json": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphalforms+json": {
    source: "iana",
    compressible: !0
  },
  "application/a2l": {
    source: "iana"
  },
  "application/ace+cbor": {
    source: "iana"
  },
  "application/activemessage": {
    source: "iana"
  },
  "application/activity+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-directory+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcost+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcostparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointprop+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointpropparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-error+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamcontrol+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/aml": {
    source: "iana"
  },
  "application/andrew-inset": {
    source: "iana",
    extensions: [
      "ez"
    ]
  },
  "application/applefile": {
    source: "iana"
  },
  "application/applixware": {
    source: "apache",
    extensions: [
      "aw"
    ]
  },
  "application/at+jwt": {
    source: "iana"
  },
  "application/atf": {
    source: "iana"
  },
  "application/atfx": {
    source: "iana"
  },
  "application/atom+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atom"
    ]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomcat"
    ]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomdeleted"
    ]
  },
  "application/atomicmail": {
    source: "iana"
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomsvc"
    ]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dwd"
    ]
  },
  "application/atsc-dynamic-event-message": {
    source: "iana"
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "held"
    ]
  },
  "application/atsc-rdt+json": {
    source: "iana",
    compressible: !0
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsat"
    ]
  },
  "application/atxml": {
    source: "iana"
  },
  "application/auth-policy+xml": {
    source: "iana",
    compressible: !0
  },
  "application/bacnet-xdd+zip": {
    source: "iana",
    compressible: !1
  },
  "application/batch-smtp": {
    source: "iana"
  },
  "application/bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/beep+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/calendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xcs"
    ]
  },
  "application/call-completion": {
    source: "iana"
  },
  "application/cals-1840": {
    source: "iana"
  },
  "application/captive+json": {
    source: "iana",
    compressible: !0
  },
  "application/cbor": {
    source: "iana"
  },
  "application/cbor-seq": {
    source: "iana"
  },
  "application/cccex": {
    source: "iana"
  },
  "application/ccmp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ccxml"
    ]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdfx"
    ]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: [
      "cdmia"
    ]
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: [
      "cdmic"
    ]
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: [
      "cdmid"
    ]
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: [
      "cdmio"
    ]
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: [
      "cdmiq"
    ]
  },
  "application/cdni": {
    source: "iana"
  },
  "application/cea": {
    source: "iana"
  },
  "application/cea-2018+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cellml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cfw": {
    source: "iana"
  },
  "application/city+json": {
    source: "iana",
    compressible: !0
  },
  "application/clr": {
    source: "iana"
  },
  "application/clue+xml": {
    source: "iana",
    compressible: !0
  },
  "application/clue_info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cms": {
    source: "iana"
  },
  "application/cnrp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/coap-group+json": {
    source: "iana",
    compressible: !0
  },
  "application/coap-payload": {
    source: "iana"
  },
  "application/commonground": {
    source: "iana"
  },
  "application/conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cose": {
    source: "iana"
  },
  "application/cose-key": {
    source: "iana"
  },
  "application/cose-key-set": {
    source: "iana"
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cpl"
    ]
  },
  "application/csrattrs": {
    source: "iana"
  },
  "application/csta+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cstadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/csvm+json": {
    source: "iana",
    compressible: !0
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: [
      "cu"
    ]
  },
  "application/cwt": {
    source: "iana"
  },
  "application/cybercash": {
    source: "iana"
  },
  "application/dart": {
    compressible: !0
  },
  "application/dash+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpd"
    ]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpp"
    ]
  },
  "application/dashdelta": {
    source: "iana"
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "davmount"
    ]
  },
  "application/dca-rft": {
    source: "iana"
  },
  "application/dcd": {
    source: "iana"
  },
  "application/dec-dx": {
    source: "iana"
  },
  "application/dialog-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dicom": {
    source: "iana"
  },
  "application/dicom+json": {
    source: "iana",
    compressible: !0
  },
  "application/dicom+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dii": {
    source: "iana"
  },
  "application/dit": {
    source: "iana"
  },
  "application/dns": {
    source: "iana"
  },
  "application/dns+json": {
    source: "iana",
    compressible: !0
  },
  "application/dns-message": {
    source: "iana"
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dbk"
    ]
  },
  "application/dots+cbor": {
    source: "iana"
  },
  "application/dskpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dssc+der": {
    source: "iana",
    extensions: [
      "dssc"
    ]
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdssc"
    ]
  },
  "application/dvcs": {
    source: "iana"
  },
  "application/ecmascript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es",
      "ecma"
    ]
  },
  "application/edi-consent": {
    source: "iana"
  },
  "application/edi-x12": {
    source: "iana",
    compressible: !1
  },
  "application/edifact": {
    source: "iana",
    compressible: !1
  },
  "application/efi": {
    source: "iana"
  },
  "application/elm+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/elm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.cap+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/emergencycalldata.comment+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.deviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.ecall.msd": {
    source: "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.serviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.veds+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emma+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emma"
    ]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emotionml"
    ]
  },
  "application/encaprtp": {
    source: "iana"
  },
  "application/epp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/epub+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "epub"
    ]
  },
  "application/eshop": {
    source: "iana"
  },
  "application/exi": {
    source: "iana",
    extensions: [
      "exi"
    ]
  },
  "application/expect-ct-report+json": {
    source: "iana",
    compressible: !0
  },
  "application/express": {
    source: "iana",
    extensions: [
      "exp"
    ]
  },
  "application/fastinfoset": {
    source: "iana"
  },
  "application/fastsoap": {
    source: "iana"
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fdt"
    ]
  },
  "application/fhir+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fhir+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fido.trusted-apps+json": {
    compressible: !0
  },
  "application/fits": {
    source: "iana"
  },
  "application/flexfec": {
    source: "iana"
  },
  "application/font-sfnt": {
    source: "iana"
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: [
      "pfr"
    ]
  },
  "application/font-woff": {
    source: "iana",
    compressible: !1
  },
  "application/framework-attributes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/geo+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "geojson"
    ]
  },
  "application/geo+json-seq": {
    source: "iana"
  },
  "application/geopackage+sqlite3": {
    source: "iana"
  },
  "application/geoxacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/gltf-buffer": {
    source: "iana"
  },
  "application/gml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gml"
    ]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "gpx"
    ]
  },
  "application/gxf": {
    source: "apache",
    extensions: [
      "gxf"
    ]
  },
  "application/gzip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gz"
    ]
  },
  "application/h224": {
    source: "iana"
  },
  "application/held+xml": {
    source: "iana",
    compressible: !0
  },
  "application/hjson": {
    extensions: [
      "hjson"
    ]
  },
  "application/http": {
    source: "iana"
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: [
      "stk"
    ]
  },
  "application/ibe-key-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pkg-reply+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pp-data": {
    source: "iana"
  },
  "application/iges": {
    source: "iana"
  },
  "application/im-iscomposing+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/index": {
    source: "iana"
  },
  "application/index.cmd": {
    source: "iana"
  },
  "application/index.obj": {
    source: "iana"
  },
  "application/index.response": {
    source: "iana"
  },
  "application/index.vnd": {
    source: "iana"
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ink",
      "inkml"
    ]
  },
  "application/iotp": {
    source: "iana"
  },
  "application/ipfix": {
    source: "iana",
    extensions: [
      "ipfix"
    ]
  },
  "application/ipp": {
    source: "iana"
  },
  "application/isup": {
    source: "iana"
  },
  "application/its+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "its"
    ]
  },
  "application/java-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jar",
      "war",
      "ear"
    ]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: !1,
    extensions: [
      "ser"
    ]
  },
  "application/java-vm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "class"
    ]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "js",
      "mjs"
    ]
  },
  "application/jf2feed+json": {
    source: "iana",
    compressible: !0
  },
  "application/jose": {
    source: "iana"
  },
  "application/jose+json": {
    source: "iana",
    compressible: !0
  },
  "application/jrd+json": {
    source: "iana",
    compressible: !0
  },
  "application/jscalendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "json",
      "map"
    ]
  },
  "application/json-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/json-seq": {
    source: "iana"
  },
  "application/json5": {
    extensions: [
      "json5"
    ]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: !0,
    extensions: [
      "jsonml"
    ]
  },
  "application/jwk+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwk-set+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwt": {
    source: "iana"
  },
  "application/kpml-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/kpml-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ld+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "jsonld"
    ]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lgr"
    ]
  },
  "application/link-format": {
    source: "iana"
  },
  "application/load-control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lost+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lostxml"
    ]
  },
  "application/lostsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lpf+zip": {
    source: "iana",
    compressible: !1
  },
  "application/lxf": {
    source: "iana"
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: [
      "hqx"
    ]
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: [
      "cpt"
    ]
  },
  "application/macwriteii": {
    source: "iana"
  },
  "application/mads+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mads"
    ]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "webmanifest"
    ]
  },
  "application/marc": {
    source: "iana",
    extensions: [
      "mrc"
    ]
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mrcx"
    ]
  },
  "application/mathematica": {
    source: "iana",
    extensions: [
      "ma",
      "nb",
      "mb"
    ]
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mathml"
    ]
  },
  "application/mathml-content+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mathml-presentation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-associated-procedure-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-deregister+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-envelope+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-protection-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-reception-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-schedule+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-user-service-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbox": {
    source: "iana",
    extensions: [
      "mbox"
    ]
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpf"
    ]
  },
  "application/media_control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mscml"
    ]
  },
  "application/merge-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "metalink"
    ]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "meta4"
    ]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mets"
    ]
  },
  "application/mf4": {
    source: "iana"
  },
  "application/mikey": {
    source: "iana"
  },
  "application/mipc": {
    source: "iana"
  },
  "application/missing-blocks+cbor-seq": {
    source: "iana"
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "maei"
    ]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musd"
    ]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mods"
    ]
  },
  "application/moss-keys": {
    source: "iana"
  },
  "application/moss-signature": {
    source: "iana"
  },
  "application/mosskey-data": {
    source: "iana"
  },
  "application/mosskey-request": {
    source: "iana"
  },
  "application/mp21": {
    source: "iana",
    extensions: [
      "m21",
      "mp21"
    ]
  },
  "application/mp4": {
    source: "iana",
    extensions: [
      "mp4s",
      "m4p"
    ]
  },
  "application/mpeg4-generic": {
    source: "iana"
  },
  "application/mpeg4-iod": {
    source: "iana"
  },
  "application/mpeg4-iod-xmt": {
    source: "iana"
  },
  "application/mrb-consumer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mrb-publish+xml": {
    source: "iana",
    compressible: !0
  },
  "application/msc-ivr+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msc-mixer+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msword": {
    source: "iana",
    compressible: !1,
    extensions: [
      "doc",
      "dot"
    ]
  },
  "application/mud+json": {
    source: "iana",
    compressible: !0
  },
  "application/multipart-core": {
    source: "iana"
  },
  "application/mxf": {
    source: "iana",
    extensions: [
      "mxf"
    ]
  },
  "application/n-quads": {
    source: "iana",
    extensions: [
      "nq"
    ]
  },
  "application/n-triples": {
    source: "iana",
    extensions: [
      "nt"
    ]
  },
  "application/nasdata": {
    source: "iana"
  },
  "application/news-checkgroups": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-groupinfo": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-transmission": {
    source: "iana"
  },
  "application/nlsml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/node": {
    source: "iana",
    extensions: [
      "cjs"
    ]
  },
  "application/nss": {
    source: "iana"
  },
  "application/oauth-authz-req+jwt": {
    source: "iana"
  },
  "application/oblivious-dns-message": {
    source: "iana"
  },
  "application/ocsp-request": {
    source: "iana"
  },
  "application/ocsp-response": {
    source: "iana"
  },
  "application/octet-stream": {
    source: "iana",
    compressible: !1,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: [
      "oda"
    ]
  },
  "application/odm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/odx": {
    source: "iana"
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "opf"
    ]
  },
  "application/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogx"
    ]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "omdoc"
    ]
  },
  "application/onenote": {
    source: "apache",
    extensions: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ]
  },
  "application/opc-nodeset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/oscore": {
    source: "iana"
  },
  "application/oxps": {
    source: "iana",
    extensions: [
      "oxps"
    ]
  },
  "application/p21": {
    source: "iana"
  },
  "application/p21+zip": {
    source: "iana",
    compressible: !1
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "relo"
    ]
  },
  "application/parityfec": {
    source: "iana"
  },
  "application/passport": {
    source: "iana"
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xer"
    ]
  },
  "application/pdf": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pdf"
    ]
  },
  "application/pdx": {
    source: "iana"
  },
  "application/pem-certificate-chain": {
    source: "iana"
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pgp"
    ]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: [
      "asc"
    ]
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: [
      "asc",
      "sig"
    ]
  },
  "application/pics-rules": {
    source: "apache",
    extensions: [
      "prf"
    ]
  },
  "application/pidf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pidf-diff+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pkcs10": {
    source: "iana",
    extensions: [
      "p10"
    ]
  },
  "application/pkcs12": {
    source: "iana"
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: [
      "p7m",
      "p7c"
    ]
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: [
      "p7s"
    ]
  },
  "application/pkcs8": {
    source: "iana",
    extensions: [
      "p8"
    ]
  },
  "application/pkcs8-encrypted": {
    source: "iana"
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: [
      "ac"
    ]
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: [
      "cer"
    ]
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: [
      "crl"
    ]
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: [
      "pkipath"
    ]
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: [
      "pki"
    ]
  },
  "application/pls+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pls"
    ]
  },
  "application/poc-settings+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/postscript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ai",
      "eps",
      "ps"
    ]
  },
  "application/ppsp-tracker+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "provx"
    ]
  },
  "application/prs.alvestrand.titrax-sheet": {
    source: "iana"
  },
  "application/prs.cww": {
    source: "iana",
    extensions: [
      "cww"
    ]
  },
  "application/prs.cyn": {
    source: "iana",
    charset: "7-BIT"
  },
  "application/prs.hpub+zip": {
    source: "iana",
    compressible: !1
  },
  "application/prs.nprend": {
    source: "iana"
  },
  "application/prs.plucker": {
    source: "iana"
  },
  "application/prs.rdf-xml-crypt": {
    source: "iana"
  },
  "application/prs.xsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pskcxml"
    ]
  },
  "application/pvd+json": {
    source: "iana",
    compressible: !0
  },
  "application/qsig": {
    source: "iana"
  },
  "application/raml+yaml": {
    compressible: !0,
    extensions: [
      "raml"
    ]
  },
  "application/raptorfec": {
    source: "iana"
  },
  "application/rdap+json": {
    source: "iana",
    compressible: !0
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rdf",
      "owl"
    ]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rif"
    ]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: [
      "rnc"
    ]
  },
  "application/remote-printing": {
    source: "iana"
  },
  "application/reputon+json": {
    source: "iana",
    compressible: !0
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rl"
    ]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rld"
    ]
  },
  "application/rfc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/riscos": {
    source: "iana"
  },
  "application/rlmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rs"
    ]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rapd"
    ]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sls"
    ]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rusd"
    ]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: [
      "gbr"
    ]
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: [
      "mft"
    ]
  },
  "application/rpki-publication": {
    source: "iana"
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: [
      "roa"
    ]
  },
  "application/rpki-updown": {
    source: "iana"
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rsd"
    ]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rss"
    ]
  },
  "application/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "application/rtploopback": {
    source: "iana"
  },
  "application/rtx": {
    source: "iana"
  },
  "application/samlassertion+xml": {
    source: "iana",
    compressible: !0
  },
  "application/samlmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sarif+json": {
    source: "iana",
    compressible: !0
  },
  "application/sarif-external-properties+json": {
    source: "iana",
    compressible: !0
  },
  "application/sbe": {
    source: "iana"
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sbml"
    ]
  },
  "application/scaip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/scim+json": {
    source: "iana",
    compressible: !0
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: [
      "scq"
    ]
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: [
      "scs"
    ]
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: [
      "spq"
    ]
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: [
      "spp"
    ]
  },
  "application/sdp": {
    source: "iana",
    extensions: [
      "sdp"
    ]
  },
  "application/secevent+jwt": {
    source: "iana"
  },
  "application/senml+cbor": {
    source: "iana"
  },
  "application/senml+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "senmlx"
    ]
  },
  "application/senml-etch+cbor": {
    source: "iana"
  },
  "application/senml-etch+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml-exi": {
    source: "iana"
  },
  "application/sensml+cbor": {
    source: "iana"
  },
  "application/sensml+json": {
    source: "iana",
    compressible: !0
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sensmlx"
    ]
  },
  "application/sensml-exi": {
    source: "iana"
  },
  "application/sep+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sep-exi": {
    source: "iana"
  },
  "application/session-info": {
    source: "iana"
  },
  "application/set-payment": {
    source: "iana"
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: [
      "setpay"
    ]
  },
  "application/set-registration": {
    source: "iana"
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: [
      "setreg"
    ]
  },
  "application/sgml": {
    source: "iana"
  },
  "application/sgml-open-catalog": {
    source: "iana"
  },
  "application/shf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "shf"
    ]
  },
  "application/sieve": {
    source: "iana",
    extensions: [
      "siv",
      "sieve"
    ]
  },
  "application/simple-filter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/simple-message-summary": {
    source: "iana"
  },
  "application/simplesymbolcontainer": {
    source: "iana"
  },
  "application/sipc": {
    source: "iana"
  },
  "application/slate": {
    source: "iana"
  },
  "application/smil": {
    source: "iana"
  },
  "application/smil+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "smi",
      "smil"
    ]
  },
  "application/smpte336m": {
    source: "iana"
  },
  "application/soap+fastinfoset": {
    source: "iana"
  },
  "application/soap+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sparql-query": {
    source: "iana",
    extensions: [
      "rq"
    ]
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "srx"
    ]
  },
  "application/spdx+json": {
    source: "iana",
    compressible: !0
  },
  "application/spirits-event+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sql": {
    source: "iana"
  },
  "application/srgs": {
    source: "iana",
    extensions: [
      "gram"
    ]
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "grxml"
    ]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sru"
    ]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ssdl"
    ]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ssml"
    ]
  },
  "application/stix+json": {
    source: "iana",
    compressible: !0
  },
  "application/swid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "swidtag"
    ]
  },
  "application/tamp-apex-update": {
    source: "iana"
  },
  "application/tamp-apex-update-confirm": {
    source: "iana"
  },
  "application/tamp-community-update": {
    source: "iana"
  },
  "application/tamp-community-update-confirm": {
    source: "iana"
  },
  "application/tamp-error": {
    source: "iana"
  },
  "application/tamp-sequence-adjust": {
    source: "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    source: "iana"
  },
  "application/tamp-status-query": {
    source: "iana"
  },
  "application/tamp-status-response": {
    source: "iana"
  },
  "application/tamp-update": {
    source: "iana"
  },
  "application/tamp-update-confirm": {
    source: "iana"
  },
  "application/tar": {
    compressible: !0
  },
  "application/taxii+json": {
    source: "iana",
    compressible: !0
  },
  "application/td+json": {
    source: "iana",
    compressible: !0
  },
  "application/tei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tei",
      "teicorpus"
    ]
  },
  "application/tetra_isi": {
    source: "iana"
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tfi"
    ]
  },
  "application/timestamp-query": {
    source: "iana"
  },
  "application/timestamp-reply": {
    source: "iana"
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: [
      "tsd"
    ]
  },
  "application/tlsrpt+gzip": {
    source: "iana"
  },
  "application/tlsrpt+json": {
    source: "iana",
    compressible: !0
  },
  "application/tnauthlist": {
    source: "iana"
  },
  "application/token-introspection+jwt": {
    source: "iana"
  },
  "application/toml": {
    compressible: !0,
    extensions: [
      "toml"
    ]
  },
  "application/trickle-ice-sdpfrag": {
    source: "iana"
  },
  "application/trig": {
    source: "iana",
    extensions: [
      "trig"
    ]
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttml"
    ]
  },
  "application/tve-trigger": {
    source: "iana"
  },
  "application/tzif": {
    source: "iana"
  },
  "application/tzif-leap": {
    source: "iana"
  },
  "application/ubjson": {
    compressible: !1,
    extensions: [
      "ubj"
    ]
  },
  "application/ulpfec": {
    source: "iana"
  },
  "application/urc-grpsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsheet"
    ]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "td"
    ]
  },
  "application/urc-uisocketdesc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+json": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vemmi": {
    source: "iana"
  },
  "application/vividence.scriptfile": {
    source: "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "1km"
    ]
  },
  "application/vnd.3gpp-prose+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    source: "iana"
  },
  "application/vnd.3gpp.5gnas": {
    source: "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.bsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gmop+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gtpc": {
    source: "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    source: "iana"
  },
  "application/vnd.3gpp.lpp": {
    source: "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-payload": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-signalling": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mid-call+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ngap": {
    source: "iana"
  },
  "application/vnd.3gpp.pfcp": {
    source: "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: [
      "plb"
    ]
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: [
      "psb"
    ]
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: [
      "pvb"
    ]
  },
  "application/vnd.3gpp.s1ap": {
    source: "iana"
  },
  "application/vnd.3gpp.sms": {
    source: "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ussd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.sms": {
    source: "iana"
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: [
      "tcap"
    ]
  },
  "application/vnd.3lightssoftware.imagescal": {
    source: "iana"
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: [
      "pwn"
    ]
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: [
      "aso"
    ]
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: [
      "imp"
    ]
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: [
      "acu"
    ]
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: [
      "atc",
      "acutc"
    ]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "air"
    ]
  },
  "application/vnd.adobe.flash.movie": {
    source: "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: [
      "fcdt"
    ]
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: [
      "fxp",
      "fxpl"
    ]
  },
  "application/vnd.adobe.partial-upload": {
    source: "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdp"
    ]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: [
      "xfdf"
    ]
  },
  "application/vnd.aether.imp": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    source: "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    source: "iana"
  },
  "application/vnd.afpc.foca-charset": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    source: "iana"
  },
  "application/vnd.afpc.modca": {
    source: "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    source: "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    source: "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    source: "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    source: "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    source: "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    source: "iana"
  },
  "application/vnd.age": {
    source: "iana",
    extensions: [
      "age"
    ]
  },
  "application/vnd.ah-barcode": {
    source: "iana"
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: [
      "ahead"
    ]
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: [
      "azf"
    ]
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: [
      "azs"
    ]
  },
  "application/vnd.amadeus+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: [
      "azw"
    ]
  },
  "application/vnd.amazon.mobi8-ebook": {
    source: "iana"
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: [
      "acc"
    ]
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: [
      "ami"
    ]
  },
  "application/vnd.amundsen.maze+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.android.ota": {
    source: "iana"
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "apk"
    ]
  },
  "application/vnd.anki": {
    source: "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: [
      "cii"
    ]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: [
      "fti"
    ]
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: [
      "atx"
    ]
  },
  "application/vnd.apache.arrow.file": {
    source: "iana"
  },
  "application/vnd.apache.arrow.stream": {
    source: "iana"
  },
  "application/vnd.apache.thrift.binary": {
    source: "iana"
  },
  "application/vnd.apache.thrift.compact": {
    source: "iana"
  },
  "application/vnd.apache.thrift.json": {
    source: "iana"
  },
  "application/vnd.api+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.aplextor.warrp+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apothekende.reservation+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpkg"
    ]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: [
      "key"
    ]
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: [
      "m3u8"
    ]
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: [
      "numbers"
    ]
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: [
      "pages"
    ]
  },
  "application/vnd.apple.pkpass": {
    compressible: !1,
    extensions: [
      "pkpass"
    ]
  },
  "application/vnd.arastra.swi": {
    source: "iana"
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: [
      "swi"
    ]
  },
  "application/vnd.artisan+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.artsquare": {
    source: "iana"
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: [
      "iota"
    ]
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: [
      "aep"
    ]
  },
  "application/vnd.autopackage": {
    source: "iana"
  },
  "application/vnd.avalon+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.avistar+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmml"
    ]
  },
  "application/vnd.balsamiq.bmpr": {
    source: "iana"
  },
  "application/vnd.banana-accounting": {
    source: "iana"
  },
  "application/vnd.bbf.usp.error": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bekitzur-stech+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bint.med-content": {
    source: "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.blink-idb-value-wrapper": {
    source: "iana"
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: [
      "mpm"
    ]
  },
  "application/vnd.bluetooth.ep.oob": {
    source: "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    source: "iana"
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: [
      "bmi"
    ]
  },
  "application/vnd.bpf": {
    source: "iana"
  },
  "application/vnd.bpf3": {
    source: "iana"
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: [
      "rep"
    ]
  },
  "application/vnd.byu.uapi+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cab-jscript": {
    source: "iana"
  },
  "application/vnd.canon-cpdl": {
    source: "iana"
  },
  "application/vnd.canon-lips": {
    source: "iana"
  },
  "application/vnd.capasystems-pg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    source: "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    source: "iana"
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdxml"
    ]
  },
  "application/vnd.chess-pgn": {
    source: "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: [
      "mmd"
    ]
  },
  "application/vnd.ciedi": {
    source: "iana"
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: [
      "cdy"
    ]
  },
  "application/vnd.cirpack.isdn-ext": {
    source: "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csl"
    ]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: [
      "cla"
    ]
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: [
      "rp9"
    ]
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: [
      "c11amc"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: [
      "c11amz"
    ]
  },
  "application/vnd.coffeescript": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    source: "iana"
  },
  "application/vnd.collection+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.doc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.next+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.comicbook+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.comicbook-rar": {
    source: "iana"
  },
  "application/vnd.commerce-battelle": {
    source: "iana"
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: [
      "csp"
    ]
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: [
      "cdbcmsg"
    ]
  },
  "application/vnd.coreos.ignition+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: [
      "cmc"
    ]
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: [
      "clkx"
    ]
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: [
      "clkk"
    ]
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: [
      "clkp"
    ]
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: [
      "clkt"
    ]
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: [
      "clkw"
    ]
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wbs"
    ]
  },
  "application/vnd.cryptii.pipe+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.crypto-shade-file": {
    source: "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    source: "iana"
  },
  "application/vnd.cryptomator.vault": {
    source: "iana"
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: [
      "pml"
    ]
  },
  "application/vnd.ctct.ws+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cups-pdf": {
    source: "iana"
  },
  "application/vnd.cups-postscript": {
    source: "iana"
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: [
      "ppd"
    ]
  },
  "application/vnd.cups-raster": {
    source: "iana"
  },
  "application/vnd.cups-raw": {
    source: "iana"
  },
  "application/vnd.curl": {
    source: "iana"
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: [
      "car"
    ]
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: [
      "pcurl"
    ]
  },
  "application/vnd.cyan.dean.root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cybank": {
    source: "iana"
  },
  "application/vnd.cyclonedx+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cyclonedx+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.d3m-dataset": {
    source: "iana"
  },
  "application/vnd.d3m-problem": {
    source: "iana"
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dart"
    ]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: [
      "rdz"
    ]
  },
  "application/vnd.datapackage+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dataresource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: [
      "dbf"
    ]
  },
  "application/vnd.debian.binary-package": {
    source: "iana"
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ]
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uvt",
      "uvvt"
    ]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: [
      "uvx",
      "uvvx"
    ]
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: [
      "uvz",
      "uvvz"
    ]
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: [
      "fe_launch"
    ]
  },
  "application/vnd.desmume.movie": {
    source: "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    source: "iana"
  },
  "application/vnd.dm.delegation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: [
      "dna"
    ]
  },
  "application/vnd.document+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: [
      "mlp"
    ]
  },
  "application/vnd.dolby.mobile.1": {
    source: "iana"
  },
  "application/vnd.dolby.mobile.2": {
    source: "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    source: "iana"
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: [
      "dpg"
    ]
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: [
      "dfac"
    ]
  },
  "application/vnd.drive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: [
      "kpxx"
    ]
  },
  "application/vnd.dtg.local": {
    source: "iana"
  },
  "application/vnd.dtg.local.flash": {
    source: "iana"
  },
  "application/vnd.dtg.local.html": {
    source: "iana"
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: [
      "ait"
    ]
  },
  "application/vnd.dvb.dvbisl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.dvbj": {
    source: "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    source: "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-container+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-generic+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-init+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.pfr": {
    source: "iana"
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: [
      "svc"
    ]
  },
  "application/vnd.dxr": {
    source: "iana"
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: [
      "geo"
    ]
  },
  "application/vnd.dzr": {
    source: "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    source: "iana"
  },
  "application/vnd.ecdis-update": {
    source: "iana"
  },
  "application/vnd.ecip.rlp": {
    source: "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: [
      "mag"
    ]
  },
  "application/vnd.ecowin.filerequest": {
    source: "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    source: "iana"
  },
  "application/vnd.ecowin.series": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    source: "iana"
  },
  "application/vnd.efi.img": {
    source: "iana"
  },
  "application/vnd.efi.iso": {
    source: "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: [
      "nml"
    ]
  },
  "application/vnd.enphase.envoy": {
    source: "iana"
  },
  "application/vnd.eprints.data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: [
      "esf"
    ]
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: [
      "msf"
    ]
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: [
      "qam"
    ]
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: [
      "slt"
    ]
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: [
      "ssf"
    ]
  },
  "application/vnd.ericsson.quickcall": {
    source: "iana"
  },
  "application/vnd.espass-espass+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es3",
      "et3"
    ]
  },
  "application/vnd.etsi.aoc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.asic-e+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.asic-s+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.cug+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvcommand+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvservice+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mcid+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mheg5": {
    source: "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.pstn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.sci+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.simservs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.timestamp-token": {
    source: "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.tsl.der": {
    source: "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.eudora.data": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    source: "iana"
  },
  "application/vnd.exstream-empower+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.exstream-package": {
    source: "iana"
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: [
      "ez2"
    ]
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: [
      "ez3"
    ]
  },
  "application/vnd.f-secure.mobile": {
    source: "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.fastcopy-disk-image": {
    source: "iana"
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: [
      "fdf"
    ]
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: [
      "mseed"
    ]
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: [
      "seed",
      "dataless"
    ]
  },
  "application/vnd.ffsns": {
    source: "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.filmit.zfc": {
    source: "iana"
  },
  "application/vnd.fints": {
    source: "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    source: "iana"
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: [
      "gph"
    ]
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: [
      "ftc"
    ]
  },
  "application/vnd.font-fontforge-sfd": {
    source: "iana"
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: [
      "fm",
      "frame",
      "maker",
      "book"
    ]
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: [
      "fnc"
    ]
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: [
      "ltf"
    ]
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: [
      "fsc"
    ]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: [
      "oas"
    ]
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: [
      "oa2"
    ]
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: [
      "oa3"
    ]
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: [
      "fg5"
    ]
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: [
      "bh2"
    ]
  },
  "application/vnd.fujixerox.art-ex": {
    source: "iana"
  },
  "application/vnd.fujixerox.art4": {
    source: "iana"
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: [
      "ddd"
    ]
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: [
      "xdw"
    ]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: [
      "xbd"
    ]
  },
  "application/vnd.fujixerox.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    source: "iana"
  },
  "application/vnd.fut-misnet": {
    source: "iana"
  },
  "application/vnd.futoin+cbor": {
    source: "iana"
  },
  "application/vnd.futoin+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: [
      "fzs"
    ]
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: [
      "txd"
    ]
  },
  "application/vnd.gentics.grd+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geo+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geocube+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: [
      "ggb"
    ]
  },
  "application/vnd.geogebra.slides": {
    source: "iana"
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: [
      "ggt"
    ]
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: [
      "gex",
      "gre"
    ]
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: [
      "gxt"
    ]
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: [
      "g2w"
    ]
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: [
      "g3w"
    ]
  },
  "application/vnd.gerber": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    source: "iana"
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: [
      "gmx"
    ]
  },
  "application/vnd.google-apps.document": {
    compressible: !1,
    extensions: [
      "gdoc"
    ]
  },
  "application/vnd.google-apps.presentation": {
    compressible: !1,
    extensions: [
      "gslides"
    ]
  },
  "application/vnd.google-apps.spreadsheet": {
    compressible: !1,
    extensions: [
      "gsheet"
    ]
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "kml"
    ]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: !1,
    extensions: [
      "kmz"
    ]
  },
  "application/vnd.gov.sk.e-form+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.gov.sk.e-form+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: [
      "gqf",
      "gqs"
    ]
  },
  "application/vnd.gridmp": {
    source: "iana"
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: [
      "gac"
    ]
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: [
      "ghf"
    ]
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: [
      "gim"
    ]
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: [
      "grv"
    ]
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: [
      "gtm"
    ]
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: [
      "tpl"
    ]
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: [
      "vcg"
    ]
  },
  "application/vnd.hal+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "hal"
    ]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zmm"
    ]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: [
      "hbci"
    ]
  },
  "application/vnd.hc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hcl-bireports": {
    source: "iana"
  },
  "application/vnd.hdt": {
    source: "iana"
  },
  "application/vnd.heroku+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: [
      "les"
    ]
  },
  "application/vnd.hl7cda+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hl7v2+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: [
      "hpgl"
    ]
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: [
      "hpid"
    ]
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: [
      "hps"
    ]
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: [
      "jlt"
    ]
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: [
      "pcl"
    ]
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: [
      "pclxl"
    ]
  },
  "application/vnd.httphone": {
    source: "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: [
      "sfd-hdstx"
    ]
  },
  "application/vnd.hyper+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyper-item+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyperdrive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hzn-3d-crossword": {
    source: "iana"
  },
  "application/vnd.ibm.afplinedata": {
    source: "iana"
  },
  "application/vnd.ibm.electronic-media": {
    source: "iana"
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: [
      "mpy"
    ]
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: [
      "afp",
      "listafp",
      "list3820"
    ]
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: [
      "irm"
    ]
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: [
      "sc"
    ]
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: [
      "icc",
      "icm"
    ]
  },
  "application/vnd.ieee.1905": {
    source: "iana"
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: [
      "igl"
    ]
  },
  "application/vnd.imagemeter.folder+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.imagemeter.image+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: [
      "ivp"
    ]
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: [
      "ivu"
    ]
  },
  "application/vnd.ims.imsccv1p1": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    source: "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informedcontrol.rms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informix-visionary": {
    source: "iana"
  },
  "application/vnd.infotech.project": {
    source: "iana"
  },
  "application/vnd.infotech.project+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.innopath.wamp.notification": {
    source: "iana"
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: [
      "igm"
    ]
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: [
      "xpw",
      "xpx"
    ]
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: [
      "i2g"
    ]
  },
  "application/vnd.intertrust.digibox": {
    source: "iana"
  },
  "application/vnd.intertrust.nncp": {
    source: "iana"
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: [
      "qbo"
    ]
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: [
      "qfx"
    ]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: [
      "rcprofile"
    ]
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "irp"
    ]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: [
      "xpr"
    ]
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: [
      "fcs"
    ]
  },
  "application/vnd.iso11783-10+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: [
      "jam"
    ]
  },
  "application/vnd.japannet-directory-service": {
    source: "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-registration": {
    source: "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-verification": {
    source: "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    source: "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: [
      "rms"
    ]
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: [
      "jisp"
    ]
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: [
      "joda"
    ]
  },
  "application/vnd.jsk.isdn-ngn": {
    source: "iana"
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: [
      "ktz",
      "ktr"
    ]
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: [
      "karbon"
    ]
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: [
      "chrt"
    ]
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: [
      "kfo"
    ]
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: [
      "flw"
    ]
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: [
      "kon"
    ]
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: [
      "kpr",
      "kpt"
    ]
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: [
      "ksp"
    ]
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: [
      "kwd",
      "kwt"
    ]
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: [
      "htke"
    ]
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: [
      "kia"
    ]
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: [
      "kne",
      "knp"
    ]
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: [
      "skp",
      "skd",
      "skt",
      "skm"
    ]
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: [
      "sse"
    ]
  },
  "application/vnd.las": {
    source: "iana"
  },
  "application/vnd.las.las+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lasxml"
    ]
  },
  "application/vnd.laszip": {
    source: "iana"
  },
  "application/vnd.leap+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.liberty-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: [
      "lbd"
    ]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lbe"
    ]
  },
  "application/vnd.logipipe.circuit+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.loom": {
    source: "iana"
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: [
      "123"
    ]
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: [
      "apr"
    ]
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: [
      "pre"
    ]
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: [
      "nsf"
    ]
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: [
      "org"
    ]
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: [
      "scm"
    ]
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: [
      "lwp"
    ]
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: [
      "portpkg"
    ]
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: [
      "mvt"
    ]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.license+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.mdcf": {
    source: "iana"
  },
  "application/vnd.mason+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.maxar.archive.3tz+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.maxmind.maxmind-db": {
    source: "iana"
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: [
      "mcd"
    ]
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: [
      "mc1"
    ]
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: [
      "cdkey"
    ]
  },
  "application/vnd.meridian-slingshot": {
    source: "iana"
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: [
      "mwf"
    ]
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: [
      "mfm"
    ]
  },
  "application/vnd.micro+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: [
      "flo"
    ]
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: [
      "igx"
    ]
  },
  "application/vnd.microsoft.portable-executable": {
    source: "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    source: "iana"
  },
  "application/vnd.miele+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: [
      "mif"
    ]
  },
  "application/vnd.minisoft-hp3000-save": {
    source: "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    source: "iana"
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: [
      "daf"
    ]
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: [
      "dis"
    ]
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: [
      "mbk"
    ]
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: [
      "mqy"
    ]
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: [
      "msl"
    ]
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: [
      "plc"
    ]
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: [
      "txf"
    ]
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: [
      "mpn"
    ]
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: [
      "mpc"
    ]
  },
  "application/vnd.motorola.flexsuite": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    source: "iana"
  },
  "application/vnd.motorola.iprm": {
    source: "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xul"
    ]
  },
  "application/vnd.ms-3mfdocument": {
    source: "iana"
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: [
      "cil"
    ]
  },
  "application/vnd.ms-asf": {
    source: "iana"
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: [
      "cab"
    ]
  },
  "application/vnd.ms-color.iccprofile": {
    source: "apache"
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xls",
      "xlm",
      "xla",
      "xlc",
      "xlt",
      "xlw"
    ]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlam"
    ]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsb"
    ]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsm"
    ]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "xltm"
    ]
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eot"
    ]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: [
      "chm"
    ]
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: [
      "ims"
    ]
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: [
      "lrm"
    ]
  },
  "application/vnd.ms-office.activex+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: [
      "thmx"
    ]
  },
  "application/vnd.ms-opentype": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-outlook": {
    compressible: !1,
    extensions: [
      "msg"
    ]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    source: "apache"
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: [
      "cat"
    ]
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: [
      "stl"
    ]
  },
  "application/vnd.ms-playready.initiator+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ppt",
      "pps",
      "pot"
    ]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppam"
    ]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: [
      "pptm"
    ]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: [
      "sldm"
    ]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppsm"
    ]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "potm"
    ]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-printing.printticket+xml": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-printschematicket+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: [
      "mpp",
      "mpt"
    ]
  },
  "application/vnd.ms-tnef": {
    source: "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    source: "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    source: "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: [
      "docm"
    ]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "dotm"
    ]
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ]
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: [
      "wpl"
    ]
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xps"
    ]
  },
  "application/vnd.msa-disk-image": {
    source: "iana"
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: [
      "mseq"
    ]
  },
  "application/vnd.msign": {
    source: "iana"
  },
  "application/vnd.multiad.creator": {
    source: "iana"
  },
  "application/vnd.multiad.creator.cif": {
    source: "iana"
  },
  "application/vnd.music-niff": {
    source: "iana"
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: [
      "mus"
    ]
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: [
      "msty"
    ]
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: [
      "taglet"
    ]
  },
  "application/vnd.nacamar.ybrid+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ncd.control": {
    source: "iana"
  },
  "application/vnd.ncd.reference": {
    source: "iana"
  },
  "application/vnd.nearst.inv+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nebumind.line": {
    source: "iana"
  },
  "application/vnd.nervana": {
    source: "iana"
  },
  "application/vnd.netfpx": {
    source: "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: [
      "nlu"
    ]
  },
  "application/vnd.nimn": {
    source: "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    source: "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    source: "iana"
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: [
      "ntf",
      "nitf"
    ]
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: [
      "nnd"
    ]
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: [
      "nns"
    ]
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: [
      "nnw"
    ]
  },
  "application/vnd.nokia.catalogs": {
    source: "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.conml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.iptv.config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.isds-radio-presets": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ac"
    ]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: [
      "ngdat"
    ]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: [
      "n-gage"
    ]
  },
  "application/vnd.nokia.ncd": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: [
      "rpst"
    ]
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: [
      "rpss"
    ]
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: [
      "edm"
    ]
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: [
      "edx"
    ]
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: [
      "ext"
    ]
  },
  "application/vnd.ntt-local.content-share": {
    source: "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    source: "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    source: "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: [
      "odc"
    ]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: [
      "otc"
    ]
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: [
      "odb"
    ]
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: [
      "odf"
    ]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: [
      "odft"
    ]
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odg"
    ]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: [
      "otg"
    ]
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: [
      "odi"
    ]
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: [
      "oti"
    ]
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odp"
    ]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: [
      "otp"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ods"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: [
      "ots"
    ]
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odt"
    ]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: [
      "odm"
    ]
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: [
      "ott"
    ]
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: [
      "oth"
    ]
  },
  "application/vnd.obn": {
    source: "iana"
  },
  "application/vnd.ocf+cbor": {
    source: "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oftn.l10n+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.cspg-hexbinary": {
    source: "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.pae.gem": {
    source: "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.spdlist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.ueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.userprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: [
      "xo"
    ]
  },
  "application/vnd.oma-scws-config": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-request": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-response": {
    source: "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.imd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.ltkm": {
    source: "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sgdu": {
    source: "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    source: "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sprov+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.stkm": {
    source: "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-pcc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.dcd": {
    source: "iana"
  },
  "application/vnd.oma.dcdc": {
    source: "iana"
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dd2"
    ]
  },
  "application/vnd.oma.drm.risd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.group-usage-list+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+cbor": {
    source: "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+tlv": {
    source: "iana"
  },
  "application/vnd.oma.pal+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.final-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.groups+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.push": {
    source: "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.xcap-directory+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.omads-email+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-file+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-folder+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omaloc-supl-init": {
    source: "iana"
  },
  "application/vnd.onepager": {
    source: "iana"
  },
  "application/vnd.onepagertamp": {
    source: "iana"
  },
  "application/vnd.onepagertamx": {
    source: "iana"
  },
  "application/vnd.onepagertat": {
    source: "iana"
  },
  "application/vnd.onepagertatp": {
    source: "iana"
  },
  "application/vnd.onepagertatx": {
    source: "iana"
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "obgx"
    ]
  },
  "application/vnd.openblox.game-binary": {
    source: "iana"
  },
  "application/vnd.openeye.oeb": {
    source: "iana"
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: [
      "oxt"
    ]
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osm"
    ]
  },
  "application/vnd.opentimestamps.ots": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pptx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: [
      "sldx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: [
      "ppsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: [
      "potx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xlsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: [
      "xltx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: !1,
    extensions: [
      "docx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: [
      "dotx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oracle.resource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.orange.indata": {
    source: "iana"
  },
  "application/vnd.osa.netdeploy": {
    source: "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: [
      "mgp"
    ]
  },
  "application/vnd.osgi.bundle": {
    source: "iana"
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: [
      "dp"
    ]
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: [
      "esa"
    ]
  },
  "application/vnd.otps.ct-kip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oxli.countgraph": {
    source: "iana"
  },
  "application/vnd.pagerduty+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: [
      "pdb",
      "pqa",
      "oprc"
    ]
  },
  "application/vnd.panoply": {
    source: "iana"
  },
  "application/vnd.paos.xml": {
    source: "iana"
  },
  "application/vnd.patentdive": {
    source: "iana"
  },
  "application/vnd.patientecommsdoc": {
    source: "iana"
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: [
      "paw"
    ]
  },
  "application/vnd.pcos": {
    source: "iana"
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: [
      "str"
    ]
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: [
      "ei6"
    ]
  },
  "application/vnd.piaccess.application-licence": {
    source: "iana"
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: [
      "efif"
    ]
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: [
      "wg"
    ]
  },
  "application/vnd.poc.group-advertisement+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: [
      "plf"
    ]
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: [
      "pbd"
    ]
  },
  "application/vnd.powerbuilder6-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder7": {
    source: "iana"
  },
  "application/vnd.powerbuilder7-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder75": {
    source: "iana"
  },
  "application/vnd.powerbuilder75-s": {
    source: "iana"
  },
  "application/vnd.preminet": {
    source: "iana"
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: [
      "box"
    ]
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: [
      "mgz"
    ]
  },
  "application/vnd.psfs": {
    source: "iana"
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: [
      "qps"
    ]
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: [
      "ptid"
    ]
  },
  "application/vnd.pwg-multiplexed": {
    source: "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.qualcomm.brew-app-res": {
    source: "iana"
  },
  "application/vnd.quarantainenet": {
    source: "iana"
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ]
  },
  "application/vnd.quobject-quoxdocument": {
    source: "iana"
  },
  "application/vnd.radisys.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rainstor.data": {
    source: "iana"
  },
  "application/vnd.rapid": {
    source: "iana"
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: [
      "rar"
    ]
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: [
      "bed"
    ]
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: [
      "mxl"
    ]
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musicxml"
    ]
  },
  "application/vnd.renlearn.rlprint": {
    source: "iana"
  },
  "application/vnd.resilient.logic": {
    source: "iana"
  },
  "application/vnd.restful+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: [
      "cryptonote"
    ]
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: [
      "cod"
    ]
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: [
      "rm"
    ]
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: [
      "rmvb"
    ]
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "link66"
    ]
  },
  "application/vnd.rs-274x": {
    source: "iana"
  },
  "application/vnd.ruckus.download": {
    source: "iana"
  },
  "application/vnd.s3sms": {
    source: "iana"
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: [
      "st"
    ]
  },
  "application/vnd.sar": {
    source: "iana"
  },
  "application/vnd.sbm.cid": {
    source: "iana"
  },
  "application/vnd.sbm.mid2": {
    source: "iana"
  },
  "application/vnd.scribus": {
    source: "iana"
  },
  "application/vnd.sealed.3df": {
    source: "iana"
  },
  "application/vnd.sealed.csf": {
    source: "iana"
  },
  "application/vnd.sealed.doc": {
    source: "iana"
  },
  "application/vnd.sealed.eml": {
    source: "iana"
  },
  "application/vnd.sealed.mht": {
    source: "iana"
  },
  "application/vnd.sealed.net": {
    source: "iana"
  },
  "application/vnd.sealed.ppt": {
    source: "iana"
  },
  "application/vnd.sealed.tiff": {
    source: "iana"
  },
  "application/vnd.sealed.xls": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    source: "iana"
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: [
      "see"
    ]
  },
  "application/vnd.seis+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: [
      "sema"
    ]
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: [
      "semd"
    ]
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: [
      "semf"
    ]
  },
  "application/vnd.shade-save-file": {
    source: "iana"
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: [
      "ifm"
    ]
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: [
      "itp"
    ]
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: [
      "iif"
    ]
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: [
      "ipk"
    ]
  },
  "application/vnd.shootproof+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shopkick+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shp": {
    source: "iana"
  },
  "application/vnd.shx": {
    source: "iana"
  },
  "application/vnd.sigrok.session": {
    source: "iana"
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: [
      "twd",
      "twds"
    ]
  },
  "application/vnd.siren+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: [
      "mmf"
    ]
  },
  "application/vnd.smart.notebook": {
    source: "iana"
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: [
      "teacher"
    ]
  },
  "application/vnd.snesdev-page-table": {
    source: "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fo"
    ]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    source: "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sdkm",
      "sdkd"
    ]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: [
      "dxp"
    ]
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: [
      "sfs"
    ]
  },
  "application/vnd.sqlite3": {
    source: "iana"
  },
  "application/vnd.sss-cod": {
    source: "iana"
  },
  "application/vnd.sss-dtf": {
    source: "iana"
  },
  "application/vnd.sss-ntf": {
    source: "iana"
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: [
      "sdc"
    ]
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: [
      "sda"
    ]
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: [
      "sdd"
    ]
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: [
      "smf"
    ]
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: [
      "sdw",
      "vor"
    ]
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: [
      "sgl"
    ]
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: [
      "smzip"
    ]
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: [
      "sm"
    ]
  },
  "application/vnd.street-stream": {
    source: "iana"
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wadl"
    ]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: [
      "sxc"
    ]
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: [
      "stc"
    ]
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: [
      "sxd"
    ]
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: [
      "std"
    ]
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: [
      "sxi"
    ]
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: [
      "sti"
    ]
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: [
      "sxm"
    ]
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: [
      "sxw"
    ]
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: [
      "sxg"
    ]
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: [
      "stw"
    ]
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: [
      "sus",
      "susp"
    ]
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: [
      "svd"
    ]
  },
  "application/vnd.swiftview-ics": {
    source: "iana"
  },
  "application/vnd.sycle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.syft+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: [
      "sis",
      "sisx"
    ]
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xsm"
    ]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "bdm"
    ]
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xdm"
    ]
  },
  "application/vnd.syncml.dm.notification": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "ddf"
    ]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.syncml.ds.notification": {
    source: "iana"
  },
  "application/vnd.tableschema+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: [
      "tao"
    ]
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: [
      "pcap",
      "cap",
      "dmp"
    ]
  },
  "application/vnd.think-cell.ppttc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tml": {
    source: "iana"
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: [
      "tmo"
    ]
  },
  "application/vnd.tri.onesource": {
    source: "iana"
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: [
      "tpt"
    ]
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: [
      "mxs"
    ]
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: [
      "tra"
    ]
  },
  "application/vnd.truedoc": {
    source: "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    source: "iana"
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: [
      "ufd",
      "ufdl"
    ]
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: [
      "utz"
    ]
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: [
      "umj"
    ]
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: [
      "unityweb"
    ]
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uoml"
    ]
  },
  "application/vnd.uplanet.alert": {
    source: "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.channel": {
    source: "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.list": {
    source: "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.signal": {
    source: "iana"
  },
  "application/vnd.uri-map": {
    source: "iana"
  },
  "application/vnd.valve.source.material": {
    source: "iana"
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: [
      "vcx"
    ]
  },
  "application/vnd.vd-study": {
    source: "iana"
  },
  "application/vnd.vectorworks": {
    source: "iana"
  },
  "application/vnd.vel+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.verimatrix.vcas": {
    source: "iana"
  },
  "application/vnd.veritone.aion+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.veryant.thin": {
    source: "iana"
  },
  "application/vnd.ves.encrypted": {
    source: "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    source: "iana"
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: [
      "vsd",
      "vst",
      "vss",
      "vsw"
    ]
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: [
      "vis"
    ]
  },
  "application/vnd.vividence.scriptfile": {
    source: "iana"
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: [
      "vsf"
    ]
  },
  "application/vnd.wap.sic": {
    source: "iana"
  },
  "application/vnd.wap.slc": {
    source: "iana"
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "wbxml"
    ]
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: [
      "wmlc"
    ]
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: [
      "wmlsc"
    ]
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: [
      "wtb"
    ]
  },
  "application/vnd.wfa.dpp": {
    source: "iana"
  },
  "application/vnd.wfa.p2p": {
    source: "iana"
  },
  "application/vnd.wfa.wsc": {
    source: "iana"
  },
  "application/vnd.windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.wmc": {
    source: "iana"
  },
  "application/vnd.wmf.bootstrap": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    source: "iana"
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: [
      "nbp"
    ]
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: [
      "wpd"
    ]
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: [
      "wqd"
    ]
  },
  "application/vnd.wrq-hp3000-labelled": {
    source: "iana"
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: [
      "stf"
    ]
  },
  "application/vnd.wv.csp+wbxml": {
    source: "iana"
  },
  "application/vnd.wv.csp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.wv.ssp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xacml+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: [
      "xar"
    ]
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: [
      "xfdl"
    ]
  },
  "application/vnd.xfdl.webform": {
    source: "iana"
  },
  "application/vnd.xmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xmpie.cpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.dpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.plan": {
    source: "iana"
  },
  "application/vnd.xmpie.ppkg": {
    source: "iana"
  },
  "application/vnd.xmpie.xlim": {
    source: "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: [
      "hvd"
    ]
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: [
      "hvs"
    ]
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: [
      "hvp"
    ]
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: [
      "osf"
    ]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osfpvg"
    ]
  },
  "application/vnd.yamaha.remote-setup": {
    source: "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: [
      "saf"
    ]
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: [
      "spf"
    ]
  },
  "application/vnd.yamaha.through-ngn": {
    source: "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    source: "iana"
  },
  "application/vnd.yaoweme": {
    source: "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: [
      "cmp"
    ]
  },
  "application/vnd.youtube.yt": {
    source: "iana"
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: [
      "zir",
      "zirz"
    ]
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zaz"
    ]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vxml"
    ]
  },
  "application/voucher-cms+json": {
    source: "iana",
    compressible: !0
  },
  "application/vq-rtcpxr": {
    source: "iana"
  },
  "application/wasm": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wasm"
    ]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wif"
    ]
  },
  "application/webpush-options+json": {
    source: "iana",
    compressible: !0
  },
  "application/whoispp-query": {
    source: "iana"
  },
  "application/whoispp-response": {
    source: "iana"
  },
  "application/widget": {
    source: "iana",
    extensions: [
      "wgt"
    ]
  },
  "application/winhlp": {
    source: "apache",
    extensions: [
      "hlp"
    ]
  },
  "application/wita": {
    source: "iana"
  },
  "application/wordperfect5.1": {
    source: "iana"
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wsdl"
    ]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wspolicy"
    ]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "7z"
    ]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: [
      "abw"
    ]
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: [
      "ace"
    ]
  },
  "application/x-amf": {
    source: "apache"
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: [
      "dmg"
    ]
  },
  "application/x-arj": {
    compressible: !1,
    extensions: [
      "arj"
    ]
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: [
      "aab",
      "x32",
      "u32",
      "vox"
    ]
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: [
      "aam"
    ]
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: [
      "aas"
    ]
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: [
      "bcpio"
    ]
  },
  "application/x-bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: [
      "torrent"
    ]
  },
  "application/x-blorb": {
    source: "apache",
    extensions: [
      "blb",
      "blorb"
    ]
  },
  "application/x-bzip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz"
    ]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz2",
      "boz"
    ]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: [
      "cbr",
      "cba",
      "cbt",
      "cbz",
      "cb7"
    ]
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: [
      "vcd"
    ]
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: [
      "cfs"
    ]
  },
  "application/x-chat": {
    source: "apache",
    extensions: [
      "chat"
    ]
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: [
      "pgn"
    ]
  },
  "application/x-chrome-extension": {
    extensions: [
      "crx"
    ]
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: [
      "cco"
    ]
  },
  "application/x-compress": {
    source: "apache"
  },
  "application/x-conference": {
    source: "apache",
    extensions: [
      "nsc"
    ]
  },
  "application/x-cpio": {
    source: "apache",
    extensions: [
      "cpio"
    ]
  },
  "application/x-csh": {
    source: "apache",
    extensions: [
      "csh"
    ]
  },
  "application/x-deb": {
    compressible: !1
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: [
      "deb",
      "udeb"
    ]
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: [
      "dgc"
    ]
  },
  "application/x-director": {
    source: "apache",
    extensions: [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    source: "apache",
    extensions: [
      "wad"
    ]
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ncx"
    ]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dtb"
    ]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "res"
    ]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: !1,
    extensions: [
      "dvi"
    ]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: [
      "evy"
    ]
  },
  "application/x-eva": {
    source: "apache",
    extensions: [
      "eva"
    ]
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: [
      "bdf"
    ]
  },
  "application/x-font-dos": {
    source: "apache"
  },
  "application/x-font-framemaker": {
    source: "apache"
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: [
      "gsf"
    ]
  },
  "application/x-font-libgrx": {
    source: "apache"
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: [
      "psf"
    ]
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: [
      "pcf"
    ]
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: [
      "snf"
    ]
  },
  "application/x-font-speedo": {
    source: "apache"
  },
  "application/x-font-sunos-news": {
    source: "apache"
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ]
  },
  "application/x-font-vfont": {
    source: "apache"
  },
  "application/x-freearc": {
    source: "apache",
    extensions: [
      "arc"
    ]
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: [
      "spl"
    ]
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: [
      "gca"
    ]
  },
  "application/x-glulx": {
    source: "apache",
    extensions: [
      "ulx"
    ]
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: [
      "gnumeric"
    ]
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: [
      "gramps"
    ]
  },
  "application/x-gtar": {
    source: "apache",
    extensions: [
      "gtar"
    ]
  },
  "application/x-gzip": {
    source: "apache"
  },
  "application/x-hdf": {
    source: "apache",
    extensions: [
      "hdf"
    ]
  },
  "application/x-httpd-php": {
    compressible: !0,
    extensions: [
      "php"
    ]
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: [
      "install"
    ]
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: [
      "iso"
    ]
  },
  "application/x-iwork-keynote-sffkey": {
    extensions: [
      "key"
    ]
  },
  "application/x-iwork-numbers-sffnumbers": {
    extensions: [
      "numbers"
    ]
  },
  "application/x-iwork-pages-sffpages": {
    extensions: [
      "pages"
    ]
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: [
      "jardiff"
    ]
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jnlp"
    ]
  },
  "application/x-javascript": {
    compressible: !0
  },
  "application/x-keepass2": {
    extensions: [
      "kdbx"
    ]
  },
  "application/x-latex": {
    source: "apache",
    compressible: !1,
    extensions: [
      "latex"
    ]
  },
  "application/x-lua-bytecode": {
    extensions: [
      "luac"
    ]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: [
      "lzh",
      "lha"
    ]
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: [
      "run"
    ]
  },
  "application/x-mie": {
    source: "apache",
    extensions: [
      "mie"
    ]
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: [
      "prc",
      "mobi"
    ]
  },
  "application/x-mpegurl": {
    compressible: !1
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: [
      "application"
    ]
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: [
      "lnk"
    ]
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: [
      "wmd"
    ]
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: [
      "wmz"
    ]
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: [
      "xbap"
    ]
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: [
      "mdb"
    ]
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: [
      "obd"
    ]
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: [
      "crd"
    ]
  },
  "application/x-msclip": {
    source: "apache",
    extensions: [
      "clp"
    ]
  },
  "application/x-msdos-program": {
    extensions: [
      "exe"
    ]
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: [
      "exe",
      "dll",
      "com",
      "bat",
      "msi"
    ]
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: [
      "mvb",
      "m13",
      "m14"
    ]
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ]
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: [
      "mny"
    ]
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: [
      "pub"
    ]
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: [
      "scd"
    ]
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: [
      "trm"
    ]
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: [
      "wri"
    ]
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: [
      "nc",
      "cdf"
    ]
  },
  "application/x-ns-proxy-autoconfig": {
    compressible: !0,
    extensions: [
      "pac"
    ]
  },
  "application/x-nzb": {
    source: "apache",
    extensions: [
      "nzb"
    ]
  },
  "application/x-perl": {
    source: "nginx",
    extensions: [
      "pl",
      "pm"
    ]
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: [
      "prc",
      "pdb"
    ]
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: !1,
    extensions: [
      "p12",
      "pfx"
    ]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: [
      "p7b",
      "spc"
    ]
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: [
      "p7r"
    ]
  },
  "application/x-pki-message": {
    source: "iana"
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "rar"
    ]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: [
      "rpm"
    ]
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: [
      "ris"
    ]
  },
  "application/x-sea": {
    source: "nginx",
    extensions: [
      "sea"
    ]
  },
  "application/x-sh": {
    source: "apache",
    compressible: !0,
    extensions: [
      "sh"
    ]
  },
  "application/x-shar": {
    source: "apache",
    extensions: [
      "shar"
    ]
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: !1,
    extensions: [
      "swf"
    ]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: [
      "xap"
    ]
  },
  "application/x-sql": {
    source: "apache",
    extensions: [
      "sql"
    ]
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: !1,
    extensions: [
      "sit"
    ]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: [
      "sitx"
    ]
  },
  "application/x-subrip": {
    source: "apache",
    extensions: [
      "srt"
    ]
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: [
      "sv4cpio"
    ]
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: [
      "sv4crc"
    ]
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: [
      "t3"
    ]
  },
  "application/x-tads": {
    source: "apache",
    extensions: [
      "gam"
    ]
  },
  "application/x-tar": {
    source: "apache",
    compressible: !0,
    extensions: [
      "tar"
    ]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: [
      "tcl",
      "tk"
    ]
  },
  "application/x-tex": {
    source: "apache",
    extensions: [
      "tex"
    ]
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: [
      "tfm"
    ]
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: [
      "texinfo",
      "texi"
    ]
  },
  "application/x-tgif": {
    source: "apache",
    extensions: [
      "obj"
    ]
  },
  "application/x-ustar": {
    source: "apache",
    extensions: [
      "ustar"
    ]
  },
  "application/x-virtualbox-hdd": {
    compressible: !0,
    extensions: [
      "hdd"
    ]
  },
  "application/x-virtualbox-ova": {
    compressible: !0,
    extensions: [
      "ova"
    ]
  },
  "application/x-virtualbox-ovf": {
    compressible: !0,
    extensions: [
      "ovf"
    ]
  },
  "application/x-virtualbox-vbox": {
    compressible: !0,
    extensions: [
      "vbox"
    ]
  },
  "application/x-virtualbox-vbox-extpack": {
    compressible: !1,
    extensions: [
      "vbox-extpack"
    ]
  },
  "application/x-virtualbox-vdi": {
    compressible: !0,
    extensions: [
      "vdi"
    ]
  },
  "application/x-virtualbox-vhd": {
    compressible: !0,
    extensions: [
      "vhd"
    ]
  },
  "application/x-virtualbox-vmdk": {
    compressible: !0,
    extensions: [
      "vmdk"
    ]
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: [
      "src"
    ]
  },
  "application/x-web-app-manifest+json": {
    compressible: !0,
    extensions: [
      "webapp"
    ]
  },
  "application/x-www-form-urlencoded": {
    source: "iana",
    compressible: !0
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: [
      "der",
      "crt",
      "pem"
    ]
  },
  "application/x-x509-ca-ra-cert": {
    source: "iana"
  },
  "application/x-x509-next-ca-cert": {
    source: "iana"
  },
  "application/x-xfig": {
    source: "apache",
    extensions: [
      "fig"
    ]
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: !1,
    extensions: [
      "xpi"
    ]
  },
  "application/x-xz": {
    source: "apache",
    extensions: [
      "xz"
    ]
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ]
  },
  "application/x400-bp": {
    source: "iana"
  },
  "application/xacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xaml"
    ]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xav"
    ]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xca"
    ]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdf"
    ]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xel"
    ]
  },
  "application/xcap-error+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xns"
    ]
  },
  "application/xcon-conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcon-conference-info-diff+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xenc"
    ]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xhtml",
      "xht"
    ]
  },
  "application/xhtml-voice+xml": {
    source: "apache",
    compressible: !0
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml",
      "xsl",
      "xsd",
      "rng"
    ]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dtd"
    ]
  },
  "application/xml-external-parsed-entity": {
    source: "iana"
  },
  "application/xml-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xmpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xop+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xop"
    ]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xpl"
    ]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xsl",
      "xslt"
    ]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xspf"
    ]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ]
  },
  "application/yang": {
    source: "iana",
    extensions: [
      "yang"
    ]
  },
  "application/yang-data+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yin+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "yin"
    ]
  },
  "application/zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "zip"
    ]
  },
  "application/zlib": {
    source: "iana"
  },
  "application/zstd": {
    source: "iana"
  },
  "audio/1d-interleaved-parityfec": {
    source: "iana"
  },
  "audio/32kadpcm": {
    source: "iana"
  },
  "audio/3gpp": {
    source: "iana",
    compressible: !1,
    extensions: [
      "3gpp"
    ]
  },
  "audio/3gpp2": {
    source: "iana"
  },
  "audio/aac": {
    source: "iana"
  },
  "audio/ac3": {
    source: "iana"
  },
  "audio/adpcm": {
    source: "apache",
    extensions: [
      "adp"
    ]
  },
  "audio/amr": {
    source: "iana",
    extensions: [
      "amr"
    ]
  },
  "audio/amr-wb": {
    source: "iana"
  },
  "audio/amr-wb+": {
    source: "iana"
  },
  "audio/aptx": {
    source: "iana"
  },
  "audio/asc": {
    source: "iana"
  },
  "audio/atrac-advanced-lossless": {
    source: "iana"
  },
  "audio/atrac-x": {
    source: "iana"
  },
  "audio/atrac3": {
    source: "iana"
  },
  "audio/basic": {
    source: "iana",
    compressible: !1,
    extensions: [
      "au",
      "snd"
    ]
  },
  "audio/bv16": {
    source: "iana"
  },
  "audio/bv32": {
    source: "iana"
  },
  "audio/clearmode": {
    source: "iana"
  },
  "audio/cn": {
    source: "iana"
  },
  "audio/dat12": {
    source: "iana"
  },
  "audio/dls": {
    source: "iana"
  },
  "audio/dsr-es201108": {
    source: "iana"
  },
  "audio/dsr-es202050": {
    source: "iana"
  },
  "audio/dsr-es202211": {
    source: "iana"
  },
  "audio/dsr-es202212": {
    source: "iana"
  },
  "audio/dv": {
    source: "iana"
  },
  "audio/dvi4": {
    source: "iana"
  },
  "audio/eac3": {
    source: "iana"
  },
  "audio/encaprtp": {
    source: "iana"
  },
  "audio/evrc": {
    source: "iana"
  },
  "audio/evrc-qcp": {
    source: "iana"
  },
  "audio/evrc0": {
    source: "iana"
  },
  "audio/evrc1": {
    source: "iana"
  },
  "audio/evrcb": {
    source: "iana"
  },
  "audio/evrcb0": {
    source: "iana"
  },
  "audio/evrcb1": {
    source: "iana"
  },
  "audio/evrcnw": {
    source: "iana"
  },
  "audio/evrcnw0": {
    source: "iana"
  },
  "audio/evrcnw1": {
    source: "iana"
  },
  "audio/evrcwb": {
    source: "iana"
  },
  "audio/evrcwb0": {
    source: "iana"
  },
  "audio/evrcwb1": {
    source: "iana"
  },
  "audio/evs": {
    source: "iana"
  },
  "audio/flexfec": {
    source: "iana"
  },
  "audio/fwdred": {
    source: "iana"
  },
  "audio/g711-0": {
    source: "iana"
  },
  "audio/g719": {
    source: "iana"
  },
  "audio/g722": {
    source: "iana"
  },
  "audio/g7221": {
    source: "iana"
  },
  "audio/g723": {
    source: "iana"
  },
  "audio/g726-16": {
    source: "iana"
  },
  "audio/g726-24": {
    source: "iana"
  },
  "audio/g726-32": {
    source: "iana"
  },
  "audio/g726-40": {
    source: "iana"
  },
  "audio/g728": {
    source: "iana"
  },
  "audio/g729": {
    source: "iana"
  },
  "audio/g7291": {
    source: "iana"
  },
  "audio/g729d": {
    source: "iana"
  },
  "audio/g729e": {
    source: "iana"
  },
  "audio/gsm": {
    source: "iana"
  },
  "audio/gsm-efr": {
    source: "iana"
  },
  "audio/gsm-hr-08": {
    source: "iana"
  },
  "audio/ilbc": {
    source: "iana"
  },
  "audio/ip-mr_v2.5": {
    source: "iana"
  },
  "audio/isac": {
    source: "apache"
  },
  "audio/l16": {
    source: "iana"
  },
  "audio/l20": {
    source: "iana"
  },
  "audio/l24": {
    source: "iana",
    compressible: !1
  },
  "audio/l8": {
    source: "iana"
  },
  "audio/lpc": {
    source: "iana"
  },
  "audio/melp": {
    source: "iana"
  },
  "audio/melp1200": {
    source: "iana"
  },
  "audio/melp2400": {
    source: "iana"
  },
  "audio/melp600": {
    source: "iana"
  },
  "audio/mhas": {
    source: "iana"
  },
  "audio/midi": {
    source: "apache",
    extensions: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ]
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: [
      "mxmf"
    ]
  },
  "audio/mp3": {
    compressible: !1,
    extensions: [
      "mp3"
    ]
  },
  "audio/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "m4a",
      "mp4a"
    ]
  },
  "audio/mp4a-latm": {
    source: "iana"
  },
  "audio/mpa": {
    source: "iana"
  },
  "audio/mpa-robust": {
    source: "iana"
  },
  "audio/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpga",
      "mp2",
      "mp2a",
      "mp3",
      "m2a",
      "m3a"
    ]
  },
  "audio/mpeg4-generic": {
    source: "iana"
  },
  "audio/musepack": {
    source: "apache"
  },
  "audio/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "oga",
      "ogg",
      "spx",
      "opus"
    ]
  },
  "audio/opus": {
    source: "iana"
  },
  "audio/parityfec": {
    source: "iana"
  },
  "audio/pcma": {
    source: "iana"
  },
  "audio/pcma-wb": {
    source: "iana"
  },
  "audio/pcmu": {
    source: "iana"
  },
  "audio/pcmu-wb": {
    source: "iana"
  },
  "audio/prs.sid": {
    source: "iana"
  },
  "audio/qcelp": {
    source: "iana"
  },
  "audio/raptorfec": {
    source: "iana"
  },
  "audio/red": {
    source: "iana"
  },
  "audio/rtp-enc-aescm128": {
    source: "iana"
  },
  "audio/rtp-midi": {
    source: "iana"
  },
  "audio/rtploopback": {
    source: "iana"
  },
  "audio/rtx": {
    source: "iana"
  },
  "audio/s3m": {
    source: "apache",
    extensions: [
      "s3m"
    ]
  },
  "audio/scip": {
    source: "iana"
  },
  "audio/silk": {
    source: "apache",
    extensions: [
      "sil"
    ]
  },
  "audio/smv": {
    source: "iana"
  },
  "audio/smv-qcp": {
    source: "iana"
  },
  "audio/smv0": {
    source: "iana"
  },
  "audio/sofa": {
    source: "iana"
  },
  "audio/sp-midi": {
    source: "iana"
  },
  "audio/speex": {
    source: "iana"
  },
  "audio/t140c": {
    source: "iana"
  },
  "audio/t38": {
    source: "iana"
  },
  "audio/telephone-event": {
    source: "iana"
  },
  "audio/tetra_acelp": {
    source: "iana"
  },
  "audio/tetra_acelp_bb": {
    source: "iana"
  },
  "audio/tone": {
    source: "iana"
  },
  "audio/tsvcis": {
    source: "iana"
  },
  "audio/uemclip": {
    source: "iana"
  },
  "audio/ulpfec": {
    source: "iana"
  },
  "audio/usac": {
    source: "iana"
  },
  "audio/vdvi": {
    source: "iana"
  },
  "audio/vmr-wb": {
    source: "iana"
  },
  "audio/vnd.3gpp.iufp": {
    source: "iana"
  },
  "audio/vnd.4sb": {
    source: "iana"
  },
  "audio/vnd.audiokoz": {
    source: "iana"
  },
  "audio/vnd.celp": {
    source: "iana"
  },
  "audio/vnd.cisco.nse": {
    source: "iana"
  },
  "audio/vnd.cmles.radio-events": {
    source: "iana"
  },
  "audio/vnd.cns.anp1": {
    source: "iana"
  },
  "audio/vnd.cns.inf1": {
    source: "iana"
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: [
      "uva",
      "uvva"
    ]
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: [
      "eol"
    ]
  },
  "audio/vnd.dlna.adts": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    source: "iana"
  },
  "audio/vnd.dolby.mlp": {
    source: "iana"
  },
  "audio/vnd.dolby.mps": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2x": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2z": {
    source: "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    source: "iana"
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: [
      "dra"
    ]
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: [
      "dts"
    ]
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: [
      "dtshd"
    ]
  },
  "audio/vnd.dts.uhd": {
    source: "iana"
  },
  "audio/vnd.dvb.file": {
    source: "iana"
  },
  "audio/vnd.everad.plj": {
    source: "iana"
  },
  "audio/vnd.hns.audio": {
    source: "iana"
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: [
      "lvp"
    ]
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: [
      "pya"
    ]
  },
  "audio/vnd.nokia.mobile-xmf": {
    source: "iana"
  },
  "audio/vnd.nortel.vbk": {
    source: "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: [
      "ecelp4800"
    ]
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: [
      "ecelp7470"
    ]
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: [
      "ecelp9600"
    ]
  },
  "audio/vnd.octel.sbc": {
    source: "iana"
  },
  "audio/vnd.presonus.multitrack": {
    source: "iana"
  },
  "audio/vnd.qcelp": {
    source: "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    source: "iana"
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: [
      "rip"
    ]
  },
  "audio/vnd.rn-realaudio": {
    compressible: !1
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    source: "iana"
  },
  "audio/vnd.vmx.cvsd": {
    source: "iana"
  },
  "audio/vnd.wave": {
    compressible: !1
  },
  "audio/vorbis": {
    source: "iana",
    compressible: !1
  },
  "audio/vorbis-config": {
    source: "iana"
  },
  "audio/wav": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/wave": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "weba"
    ]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: !1,
    extensions: [
      "aac"
    ]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: [
      "aif",
      "aiff",
      "aifc"
    ]
  },
  "audio/x-caf": {
    source: "apache",
    compressible: !1,
    extensions: [
      "caf"
    ]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: [
      "flac"
    ]
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: [
      "m4a"
    ]
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: [
      "mka"
    ]
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: [
      "m3u"
    ]
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: [
      "wax"
    ]
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: [
      "wma"
    ]
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: [
      "ram",
      "ra"
    ]
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: [
      "rmp"
    ]
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: [
      "ra"
    ]
  },
  "audio/x-tta": {
    source: "apache"
  },
  "audio/x-wav": {
    source: "apache",
    extensions: [
      "wav"
    ]
  },
  "audio/xm": {
    source: "apache",
    extensions: [
      "xm"
    ]
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: [
      "cdx"
    ]
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: [
      "cif"
    ]
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: [
      "cmdf"
    ]
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: [
      "cml"
    ]
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: [
      "csml"
    ]
  },
  "chemical/x-pdb": {
    source: "apache"
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: [
      "xyz"
    ]
  },
  "font/collection": {
    source: "iana",
    extensions: [
      "ttc"
    ]
  },
  "font/otf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "otf"
    ]
  },
  "font/sfnt": {
    source: "iana"
  },
  "font/ttf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttf"
    ]
  },
  "font/woff": {
    source: "iana",
    extensions: [
      "woff"
    ]
  },
  "font/woff2": {
    source: "iana",
    extensions: [
      "woff2"
    ]
  },
  "image/aces": {
    source: "iana",
    extensions: [
      "exr"
    ]
  },
  "image/apng": {
    compressible: !1,
    extensions: [
      "apng"
    ]
  },
  "image/avci": {
    source: "iana",
    extensions: [
      "avci"
    ]
  },
  "image/avcs": {
    source: "iana",
    extensions: [
      "avcs"
    ]
  },
  "image/avif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "avif"
    ]
  },
  "image/bmp": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/cgm": {
    source: "iana",
    extensions: [
      "cgm"
    ]
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: [
      "drle"
    ]
  },
  "image/emf": {
    source: "iana",
    extensions: [
      "emf"
    ]
  },
  "image/fits": {
    source: "iana",
    extensions: [
      "fits"
    ]
  },
  "image/g3fax": {
    source: "iana",
    extensions: [
      "g3"
    ]
  },
  "image/gif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gif"
    ]
  },
  "image/heic": {
    source: "iana",
    extensions: [
      "heic"
    ]
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: [
      "heics"
    ]
  },
  "image/heif": {
    source: "iana",
    extensions: [
      "heif"
    ]
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: [
      "heifs"
    ]
  },
  "image/hej2k": {
    source: "iana",
    extensions: [
      "hej2"
    ]
  },
  "image/hsj2": {
    source: "iana",
    extensions: [
      "hsj2"
    ]
  },
  "image/ief": {
    source: "iana",
    extensions: [
      "ief"
    ]
  },
  "image/jls": {
    source: "iana",
    extensions: [
      "jls"
    ]
  },
  "image/jp2": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jp2",
      "jpg2"
    ]
  },
  "image/jpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpeg",
      "jpg",
      "jpe"
    ]
  },
  "image/jph": {
    source: "iana",
    extensions: [
      "jph"
    ]
  },
  "image/jphc": {
    source: "iana",
    extensions: [
      "jhc"
    ]
  },
  "image/jpm": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpm"
    ]
  },
  "image/jpx": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpx",
      "jpf"
    ]
  },
  "image/jxr": {
    source: "iana",
    extensions: [
      "jxr"
    ]
  },
  "image/jxra": {
    source: "iana",
    extensions: [
      "jxra"
    ]
  },
  "image/jxrs": {
    source: "iana",
    extensions: [
      "jxrs"
    ]
  },
  "image/jxs": {
    source: "iana",
    extensions: [
      "jxs"
    ]
  },
  "image/jxsc": {
    source: "iana",
    extensions: [
      "jxsc"
    ]
  },
  "image/jxsi": {
    source: "iana",
    extensions: [
      "jxsi"
    ]
  },
  "image/jxss": {
    source: "iana",
    extensions: [
      "jxss"
    ]
  },
  "image/ktx": {
    source: "iana",
    extensions: [
      "ktx"
    ]
  },
  "image/ktx2": {
    source: "iana",
    extensions: [
      "ktx2"
    ]
  },
  "image/naplps": {
    source: "iana"
  },
  "image/pjpeg": {
    compressible: !1
  },
  "image/png": {
    source: "iana",
    compressible: !1,
    extensions: [
      "png"
    ]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: [
      "btif"
    ]
  },
  "image/prs.pti": {
    source: "iana",
    extensions: [
      "pti"
    ]
  },
  "image/pwg-raster": {
    source: "iana"
  },
  "image/sgi": {
    source: "apache",
    extensions: [
      "sgi"
    ]
  },
  "image/svg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "svg",
      "svgz"
    ]
  },
  "image/t38": {
    source: "iana",
    extensions: [
      "t38"
    ]
  },
  "image/tiff": {
    source: "iana",
    compressible: !1,
    extensions: [
      "tif",
      "tiff"
    ]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: [
      "tfx"
    ]
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: !0,
    extensions: [
      "psd"
    ]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: [
      "azv"
    ]
  },
  "image/vnd.cns.inf2": {
    source: "iana"
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ]
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: [
      "djvu",
      "djv"
    ]
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: [
      "dwg"
    ]
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: [
      "dxf"
    ]
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: [
      "fbs"
    ]
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: [
      "fpx"
    ]
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: [
      "fst"
    ]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: [
      "mmr"
    ]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: [
      "rlc"
    ]
  },
  "image/vnd.globalgraphics.pgb": {
    source: "iana"
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/vnd.mix": {
    source: "iana"
  },
  "image/vnd.mozilla.apng": {
    source: "iana"
  },
  "image/vnd.ms-dds": {
    compressible: !0,
    extensions: [
      "dds"
    ]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: [
      "mdi"
    ]
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: [
      "wdp"
    ]
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: [
      "npx"
    ]
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: [
      "b16"
    ]
  },
  "image/vnd.radiance": {
    source: "iana"
  },
  "image/vnd.sealed.png": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    source: "iana"
  },
  "image/vnd.svf": {
    source: "iana"
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: [
      "tap"
    ]
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: [
      "vtf"
    ]
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: [
      "wbmp"
    ]
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: [
      "xif"
    ]
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: [
      "pcx"
    ]
  },
  "image/webp": {
    source: "apache",
    extensions: [
      "webp"
    ]
  },
  "image/wmf": {
    source: "iana",
    extensions: [
      "wmf"
    ]
  },
  "image/x-3ds": {
    source: "apache",
    extensions: [
      "3ds"
    ]
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: [
      "ras"
    ]
  },
  "image/x-cmx": {
    source: "apache",
    extensions: [
      "cmx"
    ]
  },
  "image/x-freehand": {
    source: "apache",
    extensions: [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ]
  },
  "image/x-icon": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: [
      "jng"
    ]
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: [
      "sid"
    ]
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: [
      "pcx"
    ]
  },
  "image/x-pict": {
    source: "apache",
    extensions: [
      "pic",
      "pct"
    ]
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: [
      "pnm"
    ]
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: [
      "pbm"
    ]
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: [
      "pgm"
    ]
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: [
      "ppm"
    ]
  },
  "image/x-rgb": {
    source: "apache",
    extensions: [
      "rgb"
    ]
  },
  "image/x-tga": {
    source: "apache",
    extensions: [
      "tga"
    ]
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: [
      "xbm"
    ]
  },
  "image/x-xcf": {
    compressible: !1
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: [
      "xpm"
    ]
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: [
      "xwd"
    ]
  },
  "message/cpim": {
    source: "iana"
  },
  "message/delivery-status": {
    source: "iana"
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    source: "iana"
  },
  "message/feedback-report": {
    source: "iana"
  },
  "message/global": {
    source: "iana",
    extensions: [
      "u8msg"
    ]
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: [
      "u8dsn"
    ]
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: [
      "u8mdn"
    ]
  },
  "message/global-headers": {
    source: "iana",
    extensions: [
      "u8hdr"
    ]
  },
  "message/http": {
    source: "iana",
    compressible: !1
  },
  "message/imdn+xml": {
    source: "iana",
    compressible: !0
  },
  "message/news": {
    source: "iana"
  },
  "message/partial": {
    source: "iana",
    compressible: !1
  },
  "message/rfc822": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eml",
      "mime"
    ]
  },
  "message/s-http": {
    source: "iana"
  },
  "message/sip": {
    source: "iana"
  },
  "message/sipfrag": {
    source: "iana"
  },
  "message/tracking-status": {
    source: "iana"
  },
  "message/vnd.si.simp": {
    source: "iana"
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: [
      "wsc"
    ]
  },
  "model/3mf": {
    source: "iana",
    extensions: [
      "3mf"
    ]
  },
  "model/e57": {
    source: "iana"
  },
  "model/gltf+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gltf"
    ]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: !0,
    extensions: [
      "glb"
    ]
  },
  "model/iges": {
    source: "iana",
    compressible: !1,
    extensions: [
      "igs",
      "iges"
    ]
  },
  "model/mesh": {
    source: "iana",
    compressible: !1,
    extensions: [
      "msh",
      "mesh",
      "silo"
    ]
  },
  "model/mtl": {
    source: "iana",
    extensions: [
      "mtl"
    ]
  },
  "model/obj": {
    source: "iana",
    extensions: [
      "obj"
    ]
  },
  "model/step": {
    source: "iana"
  },
  "model/step+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "stpx"
    ]
  },
  "model/step+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpz"
    ]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpxz"
    ]
  },
  "model/stl": {
    source: "iana",
    extensions: [
      "stl"
    ]
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dae"
    ]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: [
      "dwf"
    ]
  },
  "model/vnd.flatland.3dml": {
    source: "iana"
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: [
      "gdl"
    ]
  },
  "model/vnd.gs-gdl": {
    source: "apache"
  },
  "model/vnd.gs.gdl": {
    source: "iana"
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: [
      "gtw"
    ]
  },
  "model/vnd.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: [
      "mts"
    ]
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: [
      "ogex"
    ]
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: [
      "x_b"
    ]
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: [
      "x_t"
    ]
  },
  "model/vnd.pytha.pyox": {
    source: "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    source: "iana"
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: [
      "vds"
    ]
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "usdz"
    ]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: [
      "bsp"
    ]
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: [
      "vtu"
    ]
  },
  "model/vrml": {
    source: "iana",
    compressible: !1,
    extensions: [
      "wrl",
      "vrml"
    ]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3db",
      "x3dbz"
    ]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: [
      "x3db"
    ]
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3dv",
      "x3dvz"
    ]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "x3d",
      "x3dz"
    ]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: [
      "x3dv"
    ]
  },
  "multipart/alternative": {
    source: "iana",
    compressible: !1
  },
  "multipart/appledouble": {
    source: "iana"
  },
  "multipart/byteranges": {
    source: "iana"
  },
  "multipart/digest": {
    source: "iana"
  },
  "multipart/encrypted": {
    source: "iana",
    compressible: !1
  },
  "multipart/form-data": {
    source: "iana",
    compressible: !1
  },
  "multipart/header-set": {
    source: "iana"
  },
  "multipart/mixed": {
    source: "iana"
  },
  "multipart/multilingual": {
    source: "iana"
  },
  "multipart/parallel": {
    source: "iana"
  },
  "multipart/related": {
    source: "iana",
    compressible: !1
  },
  "multipart/report": {
    source: "iana"
  },
  "multipart/signed": {
    source: "iana",
    compressible: !1
  },
  "multipart/vnd.bint.med-plus": {
    source: "iana"
  },
  "multipart/voice-message": {
    source: "iana"
  },
  "multipart/x-mixed-replace": {
    source: "iana"
  },
  "text/1d-interleaved-parityfec": {
    source: "iana"
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: !0,
    extensions: [
      "appcache",
      "manifest"
    ]
  },
  "text/calendar": {
    source: "iana",
    extensions: [
      "ics",
      "ifb"
    ]
  },
  "text/calender": {
    compressible: !0
  },
  "text/cmd": {
    compressible: !0
  },
  "text/coffeescript": {
    extensions: [
      "coffee",
      "litcoffee"
    ]
  },
  "text/cql": {
    source: "iana"
  },
  "text/cql-expression": {
    source: "iana"
  },
  "text/cql-identifier": {
    source: "iana"
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "css"
    ]
  },
  "text/csv": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csv"
    ]
  },
  "text/csv-schema": {
    source: "iana"
  },
  "text/directory": {
    source: "iana"
  },
  "text/dns": {
    source: "iana"
  },
  "text/ecmascript": {
    source: "iana"
  },
  "text/encaprtp": {
    source: "iana"
  },
  "text/enriched": {
    source: "iana"
  },
  "text/fhirpath": {
    source: "iana"
  },
  "text/flexfec": {
    source: "iana"
  },
  "text/fwdred": {
    source: "iana"
  },
  "text/gff3": {
    source: "iana"
  },
  "text/grammar-ref-list": {
    source: "iana"
  },
  "text/html": {
    source: "iana",
    compressible: !0,
    extensions: [
      "html",
      "htm",
      "shtml"
    ]
  },
  "text/jade": {
    extensions: [
      "jade"
    ]
  },
  "text/javascript": {
    source: "iana",
    compressible: !0
  },
  "text/jcr-cnd": {
    source: "iana"
  },
  "text/jsx": {
    compressible: !0,
    extensions: [
      "jsx"
    ]
  },
  "text/less": {
    compressible: !0,
    extensions: [
      "less"
    ]
  },
  "text/markdown": {
    source: "iana",
    compressible: !0,
    extensions: [
      "markdown",
      "md"
    ]
  },
  "text/mathml": {
    source: "nginx",
    extensions: [
      "mml"
    ]
  },
  "text/mdx": {
    compressible: !0,
    extensions: [
      "mdx"
    ]
  },
  "text/mizar": {
    source: "iana"
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "n3"
    ]
  },
  "text/parameters": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/parityfec": {
    source: "iana"
  },
  "text/plain": {
    source: "iana",
    compressible: !0,
    extensions: [
      "txt",
      "text",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "ini"
    ]
  },
  "text/provenance-notation": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    source: "iana"
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: [
      "dsc"
    ]
  },
  "text/prs.prop.logic": {
    source: "iana"
  },
  "text/raptorfec": {
    source: "iana"
  },
  "text/red": {
    source: "iana"
  },
  "text/rfc822-headers": {
    source: "iana"
  },
  "text/richtext": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtx"
    ]
  },
  "text/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "text/rtp-enc-aescm128": {
    source: "iana"
  },
  "text/rtploopback": {
    source: "iana"
  },
  "text/rtx": {
    source: "iana"
  },
  "text/sgml": {
    source: "iana",
    extensions: [
      "sgml",
      "sgm"
    ]
  },
  "text/shaclc": {
    source: "iana"
  },
  "text/shex": {
    source: "iana",
    extensions: [
      "shex"
    ]
  },
  "text/slim": {
    extensions: [
      "slim",
      "slm"
    ]
  },
  "text/spdx": {
    source: "iana",
    extensions: [
      "spdx"
    ]
  },
  "text/strings": {
    source: "iana"
  },
  "text/stylus": {
    extensions: [
      "stylus",
      "styl"
    ]
  },
  "text/t140": {
    source: "iana"
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tsv"
    ]
  },
  "text/troff": {
    source: "iana",
    extensions: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ]
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "ttl"
    ]
  },
  "text/ulpfec": {
    source: "iana"
  },
  "text/uri-list": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uri",
      "uris",
      "urls"
    ]
  },
  "text/vcard": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vcard"
    ]
  },
  "text/vnd.a": {
    source: "iana"
  },
  "text/vnd.abc": {
    source: "iana"
  },
  "text/vnd.ascii-art": {
    source: "iana"
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: [
      "curl"
    ]
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: [
      "dcurl"
    ]
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: [
      "mcurl"
    ]
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: [
      "scurl"
    ]
  },
  "text/vnd.debian.copyright": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.dmclientscript": {
    source: "iana"
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "text/vnd.esmertec.theme-descriptor": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: [
      "ged"
    ]
  },
  "text/vnd.ficlab.flt": {
    source: "iana"
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: [
      "fly"
    ]
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: [
      "flx"
    ]
  },
  "text/vnd.gml": {
    source: "iana"
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: [
      "gv"
    ]
  },
  "text/vnd.hans": {
    source: "iana"
  },
  "text/vnd.hgl": {
    source: "iana"
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: [
      "3dml"
    ]
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: [
      "spot"
    ]
  },
  "text/vnd.iptc.newsml": {
    source: "iana"
  },
  "text/vnd.iptc.nitf": {
    source: "iana"
  },
  "text/vnd.latex-z": {
    source: "iana"
  },
  "text/vnd.motorola.reflex": {
    source: "iana"
  },
  "text/vnd.ms-mediapackage": {
    source: "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    source: "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    source: "iana"
  },
  "text/vnd.senx.warpscript": {
    source: "iana"
  },
  "text/vnd.si.uricatalogue": {
    source: "iana"
  },
  "text/vnd.sosi": {
    source: "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "jad"
    ]
  },
  "text/vnd.trolltech.linguist": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.wap.si": {
    source: "iana"
  },
  "text/vnd.wap.sl": {
    source: "iana"
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: [
      "wml"
    ]
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: [
      "wmls"
    ]
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "vtt"
    ]
  },
  "text/x-asm": {
    source: "apache",
    extensions: [
      "s",
      "asm"
    ]
  },
  "text/x-c": {
    source: "apache",
    extensions: [
      "c",
      "cc",
      "cxx",
      "cpp",
      "h",
      "hh",
      "dic"
    ]
  },
  "text/x-component": {
    source: "nginx",
    extensions: [
      "htc"
    ]
  },
  "text/x-fortran": {
    source: "apache",
    extensions: [
      "f",
      "for",
      "f77",
      "f90"
    ]
  },
  "text/x-gwt-rpc": {
    compressible: !0
  },
  "text/x-handlebars-template": {
    extensions: [
      "hbs"
    ]
  },
  "text/x-java-source": {
    source: "apache",
    extensions: [
      "java"
    ]
  },
  "text/x-jquery-tmpl": {
    compressible: !0
  },
  "text/x-lua": {
    extensions: [
      "lua"
    ]
  },
  "text/x-markdown": {
    compressible: !0,
    extensions: [
      "mkd"
    ]
  },
  "text/x-nfo": {
    source: "apache",
    extensions: [
      "nfo"
    ]
  },
  "text/x-opml": {
    source: "apache",
    extensions: [
      "opml"
    ]
  },
  "text/x-org": {
    compressible: !0,
    extensions: [
      "org"
    ]
  },
  "text/x-pascal": {
    source: "apache",
    extensions: [
      "p",
      "pas"
    ]
  },
  "text/x-processing": {
    compressible: !0,
    extensions: [
      "pde"
    ]
  },
  "text/x-sass": {
    extensions: [
      "sass"
    ]
  },
  "text/x-scss": {
    extensions: [
      "scss"
    ]
  },
  "text/x-setext": {
    source: "apache",
    extensions: [
      "etx"
    ]
  },
  "text/x-sfv": {
    source: "apache",
    extensions: [
      "sfv"
    ]
  },
  "text/x-suse-ymp": {
    compressible: !0,
    extensions: [
      "ymp"
    ]
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: [
      "uu"
    ]
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: [
      "vcs"
    ]
  },
  "text/x-vcard": {
    source: "apache",
    extensions: [
      "vcf"
    ]
  },
  "text/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml"
    ]
  },
  "text/xml-external-parsed-entity": {
    source: "iana"
  },
  "text/yaml": {
    compressible: !0,
    extensions: [
      "yaml",
      "yml"
    ]
  },
  "video/1d-interleaved-parityfec": {
    source: "iana"
  },
  "video/3gpp": {
    source: "iana",
    extensions: [
      "3gp",
      "3gpp"
    ]
  },
  "video/3gpp-tt": {
    source: "iana"
  },
  "video/3gpp2": {
    source: "iana",
    extensions: [
      "3g2"
    ]
  },
  "video/av1": {
    source: "iana"
  },
  "video/bmpeg": {
    source: "iana"
  },
  "video/bt656": {
    source: "iana"
  },
  "video/celb": {
    source: "iana"
  },
  "video/dv": {
    source: "iana"
  },
  "video/encaprtp": {
    source: "iana"
  },
  "video/ffv1": {
    source: "iana"
  },
  "video/flexfec": {
    source: "iana"
  },
  "video/h261": {
    source: "iana",
    extensions: [
      "h261"
    ]
  },
  "video/h263": {
    source: "iana",
    extensions: [
      "h263"
    ]
  },
  "video/h263-1998": {
    source: "iana"
  },
  "video/h263-2000": {
    source: "iana"
  },
  "video/h264": {
    source: "iana",
    extensions: [
      "h264"
    ]
  },
  "video/h264-rcdo": {
    source: "iana"
  },
  "video/h264-svc": {
    source: "iana"
  },
  "video/h265": {
    source: "iana"
  },
  "video/iso.segment": {
    source: "iana",
    extensions: [
      "m4s"
    ]
  },
  "video/jpeg": {
    source: "iana",
    extensions: [
      "jpgv"
    ]
  },
  "video/jpeg2000": {
    source: "iana"
  },
  "video/jpm": {
    source: "apache",
    extensions: [
      "jpm",
      "jpgm"
    ]
  },
  "video/jxsv": {
    source: "iana"
  },
  "video/mj2": {
    source: "iana",
    extensions: [
      "mj2",
      "mjp2"
    ]
  },
  "video/mp1s": {
    source: "iana"
  },
  "video/mp2p": {
    source: "iana"
  },
  "video/mp2t": {
    source: "iana",
    extensions: [
      "ts"
    ]
  },
  "video/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mp4",
      "mp4v",
      "mpg4"
    ]
  },
  "video/mp4v-es": {
    source: "iana"
  },
  "video/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v"
    ]
  },
  "video/mpeg4-generic": {
    source: "iana"
  },
  "video/mpv": {
    source: "iana"
  },
  "video/nv": {
    source: "iana"
  },
  "video/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogv"
    ]
  },
  "video/parityfec": {
    source: "iana"
  },
  "video/pointer": {
    source: "iana"
  },
  "video/quicktime": {
    source: "iana",
    compressible: !1,
    extensions: [
      "qt",
      "mov"
    ]
  },
  "video/raptorfec": {
    source: "iana"
  },
  "video/raw": {
    source: "iana"
  },
  "video/rtp-enc-aescm128": {
    source: "iana"
  },
  "video/rtploopback": {
    source: "iana"
  },
  "video/rtx": {
    source: "iana"
  },
  "video/scip": {
    source: "iana"
  },
  "video/smpte291": {
    source: "iana"
  },
  "video/smpte292m": {
    source: "iana"
  },
  "video/ulpfec": {
    source: "iana"
  },
  "video/vc1": {
    source: "iana"
  },
  "video/vc2": {
    source: "iana"
  },
  "video/vnd.cctv": {
    source: "iana"
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: [
      "uvh",
      "uvvh"
    ]
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: [
      "uvm",
      "uvvm"
    ]
  },
  "video/vnd.dece.mp4": {
    source: "iana"
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: [
      "uvp",
      "uvvp"
    ]
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: [
      "uvs",
      "uvvs"
    ]
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: [
      "uvv",
      "uvvv"
    ]
  },
  "video/vnd.directv.mpeg": {
    source: "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: [
      "dvb"
    ]
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: [
      "fvt"
    ]
  },
  "video/vnd.hns.video": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    source: "iana"
  },
  "video/vnd.motorola.video": {
    source: "iana"
  },
  "video/vnd.motorola.videop": {
    source: "iana"
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: [
      "mxu",
      "m4u"
    ]
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: [
      "pyv"
    ]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    source: "iana"
  },
  "video/vnd.nokia.mp4vr": {
    source: "iana"
  },
  "video/vnd.nokia.videovoip": {
    source: "iana"
  },
  "video/vnd.objectvideo": {
    source: "iana"
  },
  "video/vnd.radgamettools.bink": {
    source: "iana"
  },
  "video/vnd.radgamettools.smacker": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg1": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg4": {
    source: "iana"
  },
  "video/vnd.sealed.swf": {
    source: "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    source: "iana"
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: [
      "uvu",
      "uvvu"
    ]
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: [
      "viv"
    ]
  },
  "video/vnd.youtube.yt": {
    source: "iana"
  },
  "video/vp8": {
    source: "iana"
  },
  "video/vp9": {
    source: "iana"
  },
  "video/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "webm"
    ]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: [
      "f4v"
    ]
  },
  "video/x-fli": {
    source: "apache",
    extensions: [
      "fli"
    ]
  },
  "video/x-flv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "flv"
    ]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: [
      "m4v"
    ]
  },
  "video/x-matroska": {
    source: "apache",
    compressible: !1,
    extensions: [
      "mkv",
      "mk3d",
      "mks"
    ]
  },
  "video/x-mng": {
    source: "apache",
    extensions: [
      "mng"
    ]
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: [
      "asf",
      "asx"
    ]
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: [
      "vob"
    ]
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: [
      "wm"
    ]
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "wmv"
    ]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: [
      "wmx"
    ]
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: [
      "wvx"
    ]
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: [
      "avi"
    ]
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: [
      "movie"
    ]
  },
  "video/x-smv": {
    source: "apache",
    extensions: [
      "smv"
    ]
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: [
      "ice"
    ]
  },
  "x-shader/x-fragment": {
    compressible: !0
  },
  "x-shader/x-vertex": {
    compressible: !0
  }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var lb = cb;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = lb, n = Y.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, a = /^text\//i;
  e.charset = s, e.charsets = { lookup: s }, e.contentType = i, e.extension = o, e.extensions = /* @__PURE__ */ Object.create(null), e.lookup = c, e.types = /* @__PURE__ */ Object.create(null), u(e.extensions, e.types);
  function s(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = r.exec(l), m = p && t[p[1].toLowerCase()];
    return m && m.charset ? m.charset : p && a.test(p[1]) ? "UTF-8" : !1;
  }
  function i(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = l.indexOf("/") === -1 ? e.lookup(l) : l;
    if (!p)
      return !1;
    if (p.indexOf("charset") === -1) {
      var m = e.charset(p);
      m && (p += "; charset=" + m.toLowerCase());
    }
    return p;
  }
  function o(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = r.exec(l), m = p && e.extensions[p[1].toLowerCase()];
    return !m || !m.length ? !1 : m[0];
  }
  function c(l) {
    if (!l || typeof l != "string")
      return !1;
    var p = n("x." + l).toLowerCase().substr(1);
    return p && e.types[p] || !1;
  }
  function u(l, p) {
    var m = ["nginx", "apache", void 0, "iana"];
    Object.keys(t).forEach(function(g) {
      var y = t[g], v = y.extensions;
      if (!(!v || !v.length)) {
        l[g] = v;
        for (var f = 0; f < v.length; f++) {
          var $ = v[f];
          if (p[$]) {
            var E = m.indexOf(t[p[$]].source), O = m.indexOf(y.source);
            if (p[$] !== "application/octet-stream" && (E > O || E === O && p[$].substr(0, 12) === "application/"))
              continue;
          }
          p[$] = g;
        }
      }
    });
  }
})(im);
var ub = pb;
function pb(e) {
  var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  t ? t(e) : setTimeout(e, 0);
}
var sp = ub, om = db;
function db(e) {
  var t = !1;
  return sp(function() {
    t = !0;
  }), function(r, a) {
    t ? e(r, a) : sp(function() {
      e(r, a);
    });
  };
}
var cm = fb;
function fb(e) {
  Object.keys(e.jobs).forEach(mb.bind(e)), e.jobs = {};
}
function mb(e) {
  typeof this.jobs[e] == "function" && this.jobs[e]();
}
var ip = om, hb = cm, lm = vb;
function vb(e, t, n, r) {
  var a = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[a] = yb(t, a, e[a], function(s, i) {
    a in n.jobs && (delete n.jobs[a], s ? hb(n) : n.results[a] = i, r(s, n.results));
  });
}
function yb(e, t, n, r) {
  var a;
  return e.length == 2 ? a = e(n, ip(r)) : a = e(n, t, ip(r)), a;
}
var um = gb;
function gb(e, t) {
  var n = !Array.isArray(e), r = {
    index: 0,
    keyedList: n || t ? Object.keys(e) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(e).length : e.length
  };
  return t && r.keyedList.sort(n ? t : function(a, s) {
    return t(e[a], e[s]);
  }), r;
}
var bb = cm, $b = om, pm = _b;
function _b(e) {
  Object.keys(this.jobs).length && (this.index = this.size, bb(this), $b(e)(null, this.results));
}
var wb = lm, xb = um, Eb = pm, Sb = Pb;
function Pb(e, t, n) {
  for (var r = xb(e); r.index < (r.keyedList || e).length; )
    wb(e, t, r, function(a, s) {
      if (a) {
        n(a, s);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return Eb.bind(r, n);
}
var Qs = { exports: {} }, op = lm, Rb = um, Ob = pm;
Qs.exports = Ab;
Qs.exports.ascending = dm;
Qs.exports.descending = Tb;
function Ab(e, t, n, r) {
  var a = Rb(e, n);
  return op(e, t, a, function s(i, o) {
    if (i) {
      r(i, o);
      return;
    }
    if (a.index++, a.index < (a.keyedList || e).length) {
      op(e, t, a, s);
      return;
    }
    r(null, a.results);
  }), Ob.bind(a, r);
}
function dm(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Tb(e, t) {
  return -1 * dm(e, t);
}
var fm = Qs.exports, jb = fm, kb = Nb;
function Nb(e, t, n) {
  return jb(e, t, null, n);
}
var Ib = {
  parallel: Sb,
  serial: kb,
  serialOrdered: fm
}, mm = Object, Cb = Error, Db = EvalError, Fb = RangeError, Lb = ReferenceError, Mb = SyntaxError, Sc = TypeError, Ub = URIError, zb = Math.abs, qb = Math.floor, Vb = Math.max, Bb = Math.min, Hb = Math.pow, Gb = Math.round, Kb = Number.isNaN || function(t) {
  return t !== t;
}, Wb = Kb, Jb = function(t) {
  return Wb(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, Xb = Object.getOwnPropertyDescriptor, ps = Xb;
if (ps)
  try {
    ps([], "length");
  } catch {
    ps = null;
  }
var hm = ps, ds = Object.defineProperty || !1;
if (ds)
  try {
    ds({}, "a", { value: 1 });
  } catch {
    ds = !1;
  }
var Yb = ds, Ai, cp;
function vm() {
  return cp || (cp = 1, Ai = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var a = 42;
    t[n] = a;
    for (var s in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (o.value !== a || o.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ai;
}
var Ti, lp;
function Zb() {
  if (lp) return Ti;
  lp = 1;
  var e = typeof Symbol < "u" && Symbol, t = vm();
  return Ti = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Ti;
}
var ji, up;
function ym() {
  return up || (up = 1, ji = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ji;
}
var ki, pp;
function gm() {
  if (pp) return ki;
  pp = 1;
  var e = mm;
  return ki = e.getPrototypeOf || null, ki;
}
var Qb = "Function.prototype.bind called on incompatible ", e$ = Object.prototype.toString, t$ = Math.max, n$ = "[object Function]", dp = function(t, n) {
  for (var r = [], a = 0; a < t.length; a += 1)
    r[a] = t[a];
  for (var s = 0; s < n.length; s += 1)
    r[s + t.length] = n[s];
  return r;
}, r$ = function(t, n) {
  for (var r = [], a = n, s = 0; a < t.length; a += 1, s += 1)
    r[s] = t[a];
  return r;
}, a$ = function(e, t) {
  for (var n = "", r = 0; r < e.length; r += 1)
    n += e[r], r + 1 < e.length && (n += t);
  return n;
}, s$ = function(t) {
  var n = this;
  if (typeof n != "function" || e$.apply(n) !== n$)
    throw new TypeError(Qb + n);
  for (var r = r$(arguments, 1), a, s = function() {
    if (this instanceof a) {
      var l = n.apply(
        this,
        dp(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      t,
      dp(r, arguments)
    );
  }, i = t$(0, n.length - r.length), o = [], c = 0; c < i; c++)
    o[c] = "$" + c;
  if (a = Function("binder", "return function (" + a$(o, ",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, i$ = s$, ei = Function.prototype.bind || i$, Ni, fp;
function Pc() {
  return fp || (fp = 1, Ni = Function.prototype.call), Ni;
}
var Ii, mp;
function bm() {
  return mp || (mp = 1, Ii = Function.prototype.apply), Ii;
}
var Ci, hp;
function o$() {
  return hp || (hp = 1, Ci = typeof Reflect < "u" && Reflect && Reflect.apply), Ci;
}
var Di, vp;
function c$() {
  if (vp) return Di;
  vp = 1;
  var e = ei, t = bm(), n = Pc(), r = o$();
  return Di = r || e.call(n, t), Di;
}
var Fi, yp;
function l$() {
  if (yp) return Fi;
  yp = 1;
  var e = ei, t = Sc, n = Pc(), r = c$();
  return Fi = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new t("a function is required");
    return r(e, n, s);
  }, Fi;
}
var Li, gp;
function u$() {
  if (gp) return Li;
  gp = 1;
  var e = l$(), t = hm, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), a = Object, s = a.getPrototypeOf;
  return Li = r && typeof r.get == "function" ? e([r.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(o) {
      return s(o == null ? o : a(o));
    }
  ) : !1, Li;
}
var Mi, bp;
function p$() {
  if (bp) return Mi;
  bp = 1;
  var e = ym(), t = gm(), n = u$();
  return Mi = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : n ? function(a) {
    return n(a);
  } : null, Mi;
}
var d$ = Function.prototype.call, f$ = Object.prototype.hasOwnProperty, m$ = ei, Rc = m$.call(d$, f$), ge, h$ = mm, v$ = Cb, y$ = Db, g$ = Fb, b$ = Lb, vr = Mb, cr = Sc, $$ = Ub, _$ = zb, w$ = qb, x$ = Vb, E$ = Bb, S$ = Hb, P$ = Gb, R$ = Jb, $m = Function, Ui = function(e) {
  try {
    return $m('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ma = hm, O$ = Yb, zi = function() {
  throw new cr();
}, A$ = ma ? function() {
  try {
    return arguments.callee, zi;
  } catch {
    try {
      return ma(arguments, "callee").get;
    } catch {
      return zi;
    }
  }
}() : zi, Kn = Zb()(), He = p$(), T$ = gm(), j$ = ym(), _m = bm(), wa = Pc(), er = {}, k$ = typeof Uint8Array > "u" || !He ? ge : He(Uint8Array), kn = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? ge : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ge : ArrayBuffer,
  "%ArrayIteratorPrototype%": Kn && He ? He([][Symbol.iterator]()) : ge,
  "%AsyncFromSyncIteratorPrototype%": ge,
  "%AsyncFunction%": er,
  "%AsyncGenerator%": er,
  "%AsyncGeneratorFunction%": er,
  "%AsyncIteratorPrototype%": er,
  "%Atomics%": typeof Atomics > "u" ? ge : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ge : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ge : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ge : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ge : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": v$,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": y$,
  "%Float16Array%": typeof Float16Array > "u" ? ge : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? ge : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ge : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ge : FinalizationRegistry,
  "%Function%": $m,
  "%GeneratorFunction%": er,
  "%Int8Array%": typeof Int8Array > "u" ? ge : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ge : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ge : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Kn && He ? He(He([][Symbol.iterator]())) : ge,
  "%JSON%": typeof JSON == "object" ? JSON : ge,
  "%Map%": typeof Map > "u" ? ge : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Kn || !He ? ge : He((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": h$,
  "%Object.getOwnPropertyDescriptor%": ma,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ge : Promise,
  "%Proxy%": typeof Proxy > "u" ? ge : Proxy,
  "%RangeError%": g$,
  "%ReferenceError%": b$,
  "%Reflect%": typeof Reflect > "u" ? ge : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ge : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Kn || !He ? ge : He((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ge : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Kn && He ? He(""[Symbol.iterator]()) : ge,
  "%Symbol%": Kn ? Symbol : ge,
  "%SyntaxError%": vr,
  "%ThrowTypeError%": A$,
  "%TypedArray%": k$,
  "%TypeError%": cr,
  "%Uint8Array%": typeof Uint8Array > "u" ? ge : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ge : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ge : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ge : Uint32Array,
  "%URIError%": $$,
  "%WeakMap%": typeof WeakMap > "u" ? ge : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ge : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ge : WeakSet,
  "%Function.prototype.call%": wa,
  "%Function.prototype.apply%": _m,
  "%Object.defineProperty%": O$,
  "%Object.getPrototypeOf%": T$,
  "%Math.abs%": _$,
  "%Math.floor%": w$,
  "%Math.max%": x$,
  "%Math.min%": E$,
  "%Math.pow%": S$,
  "%Math.round%": P$,
  "%Math.sign%": R$,
  "%Reflect.getPrototypeOf%": j$
};
if (He)
  try {
    null.error;
  } catch (e) {
    var N$ = He(He(e));
    kn["%Error.prototype%"] = N$;
  }
var I$ = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Ui("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Ui("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Ui("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && He && (n = He(a.prototype));
  }
  return kn[t] = n, n;
}, $p = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, xa = ei, js = Rc, C$ = xa.call(wa, Array.prototype.concat), D$ = xa.call(_m, Array.prototype.splice), _p = xa.call(wa, String.prototype.replace), ks = xa.call(wa, String.prototype.slice), F$ = xa.call(wa, RegExp.prototype.exec), L$ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, M$ = /\\(\\)?/g, U$ = function(t) {
  var n = ks(t, 0, 1), r = ks(t, -1);
  if (n === "%" && r !== "%")
    throw new vr("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new vr("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return _p(t, L$, function(s, i, o, c) {
    a[a.length] = o ? _p(c, M$, "$1") : i || s;
  }), a;
}, z$ = function(t, n) {
  var r = t, a;
  if (js($p, r) && (a = $p[r], r = "%" + a[0] + "%"), js(kn, r)) {
    var s = kn[r];
    if (s === er && (s = I$(r)), typeof s > "u" && !n)
      throw new cr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: s
    };
  }
  throw new vr("intrinsic " + t + " does not exist!");
}, q$ = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new cr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new cr('"allowMissing" argument must be a boolean');
  if (F$(/^%?[^%]*%?$/, t) === null)
    throw new vr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = U$(t), a = r.length > 0 ? r[0] : "", s = z$("%" + a + "%", n), i = s.name, o = s.value, c = !1, u = s.alias;
  u && (a = u[0], D$(r, C$([0, 1], u)));
  for (var l = 1, p = !0; l < r.length; l += 1) {
    var m = r[l], h = ks(m, 0, 1), g = ks(m, -1);
    if ((h === '"' || h === "'" || h === "`" || g === '"' || g === "'" || g === "`") && h !== g)
      throw new vr("property names with quotes must have matching quotes");
    if ((m === "constructor" || !p) && (c = !0), a += "." + m, i = "%" + a + "%", js(kn, i))
      o = kn[i];
    else if (o != null) {
      if (!(m in o)) {
        if (!n)
          throw new cr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ma && l + 1 >= r.length) {
        var y = ma(o, m);
        p = !!y, p && "get" in y && !("originalValue" in y.get) ? o = y.get : o = o[m];
      } else
        p = js(o, m), o = o[m];
      p && !c && (kn[i] = o);
    }
  }
  return o;
}, qi, wp;
function V$() {
  if (wp) return qi;
  wp = 1;
  var e = vm();
  return qi = function() {
    return e() && !!Symbol.toStringTag;
  }, qi;
}
var B$ = q$, xp = B$("%Object.defineProperty%", !0), H$ = V$()(), G$ = Rc, K$ = Sc, Ca = H$ ? Symbol.toStringTag : null, W$ = function(t, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, a = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof a < "u" && typeof a != "boolean")
    throw new K$("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Ca && (r || !G$(t, Ca)) && (xp ? xp(t, Ca, {
    configurable: !a,
    enumerable: !1,
    value: n,
    writable: !1
  }) : t[Ca] = n);
}, J$ = function(e, t) {
  return Object.keys(t).forEach(function(n) {
    e[n] = e[n] || t[n];
  }), e;
}, Oc = ob, X$ = Hn, Vi = Y, Y$ = Ws, Z$ = Js, Q$ = Xs.parse, e_ = Fy, t_ = Xe.Stream, n_ = qf, Bi = im, r_ = Ib, a_ = W$, gn = Rc, Fo = J$;
function $e(e) {
  if (!(this instanceof $e))
    return new $e(e);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], Oc.call(this), e = e || {};
  for (var t in e)
    this[t] = e[t];
}
X$.inherits($e, Oc);
$e.LINE_BREAK = `\r
`;
$e.DEFAULT_CONTENT_TYPE = "application/octet-stream";
$e.prototype.append = function(e, t, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = Oc.prototype.append.bind(this);
  if ((typeof t == "number" || t == null) && (t = String(t)), Array.isArray(t)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var a = this._multiPartHeader(e, t, n), s = this._multiPartFooter();
  r(a), r(t), r(s), this._trackLength(a, t, n);
};
$e.prototype._trackLength = function(e, t, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(t) ? r = t.length : typeof t == "string" && (r = Buffer.byteLength(t)), this._valueLength += r, this._overheadLength += Buffer.byteLength(e) + $e.LINE_BREAK.length, !(!t || !t.path && !(t.readable && gn(t, "httpVersion")) && !(t instanceof t_)) && (n.knownLength || this._valuesToMeasure.push(t));
};
$e.prototype._lengthRetriever = function(e, t) {
  gn(e, "fd") ? e.end != null && e.end != 1 / 0 && e.start != null ? t(null, e.end + 1 - (e.start ? e.start : 0)) : e_.stat(e.path, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    var a = r.size - (e.start ? e.start : 0);
    t(null, a);
  }) : gn(e, "httpVersion") ? t(null, Number(e.headers["content-length"])) : gn(e, "httpModule") ? (e.on("response", function(n) {
    e.pause(), t(null, Number(n.headers["content-length"]));
  }), e.resume()) : t("Unknown stream");
};
$e.prototype._multiPartHeader = function(e, t, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(t, n), a = this._getContentType(t, n), s = "", i = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(a || [])
  };
  typeof n.header == "object" && Fo(i, n.header);
  var o;
  for (var c in i)
    if (gn(i, c)) {
      if (o = i[c], o == null)
        continue;
      Array.isArray(o) || (o = [o]), o.length && (s += c + ": " + o.join("; ") + $e.LINE_BREAK);
    }
  return "--" + this.getBoundary() + $e.LINE_BREAK + s + $e.LINE_BREAK;
};
$e.prototype._getContentDisposition = function(e, t) {
  var n;
  if (typeof t.filepath == "string" ? n = Vi.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e && (e.name || e.path) ? n = Vi.basename(t.filename || e && (e.name || e.path)) : e && e.readable && gn(e, "httpVersion") && (n = Vi.basename(e.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
$e.prototype._getContentType = function(e, t) {
  var n = t.contentType;
  return !n && e && e.name && (n = Bi.lookup(e.name)), !n && e && e.path && (n = Bi.lookup(e.path)), !n && e && e.readable && gn(e, "httpVersion") && (n = e.headers["content-type"]), !n && (t.filepath || t.filename) && (n = Bi.lookup(t.filepath || t.filename)), !n && e && typeof e == "object" && (n = $e.DEFAULT_CONTENT_TYPE), n;
};
$e.prototype._multiPartFooter = function() {
  return function(e) {
    var t = $e.LINE_BREAK, n = this._streams.length === 0;
    n && (t += this._lastBoundary()), e(t);
  }.bind(this);
};
$e.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + $e.LINE_BREAK;
};
$e.prototype.getHeaders = function(e) {
  var t, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (t in e)
    gn(e, t) && (n[t.toLowerCase()] = e[t]);
  return n;
};
$e.prototype.setBoundary = function(e) {
  if (typeof e != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = e;
};
$e.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
$e.prototype.getBuffer = function() {
  for (var e = new Buffer.alloc(0), t = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? e = Buffer.concat([e, this._streams[n]]) : e = Buffer.concat([e, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, t.length + 2) !== t) && (e = Buffer.concat([e, Buffer.from($e.LINE_BREAK)])));
  return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
};
$e.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + n_.randomBytes(12).toString("hex");
};
$e.prototype.getLengthSync = function() {
  var e = this._overheadLength + this._valueLength;
  return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), e;
};
$e.prototype.hasKnownLength = function() {
  var e = !0;
  return this._valuesToMeasure.length && (e = !1), e;
};
$e.prototype.getLength = function(e) {
  var t = this._overheadLength + this._valueLength;
  if (this._streams.length && (t += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(e.bind(this, null, t));
    return;
  }
  r_.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    r.forEach(function(a) {
      t += a;
    }), e(null, t);
  });
};
$e.prototype.submit = function(e, t) {
  var n, r, a = { method: "post" };
  return typeof e == "string" ? (e = Q$(e), r = Fo({
    port: e.port,
    path: e.pathname,
    host: e.hostname,
    protocol: e.protocol
  }, a)) : (r = Fo(e, a), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(e.headers), r.protocol === "https:" ? n = Z$.request(r) : n = Y$.request(r), this.getLength(function(s, i) {
    if (s && s !== "Unknown stream") {
      this._error(s);
      return;
    }
    if (i && n.setHeader("Content-Length", i), this.pipe(n), t) {
      var o, c = function(u, l) {
        return n.removeListener("error", c), n.removeListener("response", o), t.call(this, u, l);
      };
      o = c.bind(this, null), n.on("error", c), n.on("response", o);
    }
  }.bind(this)), n;
};
$e.prototype._error = function(e) {
  this.error || (this.error = e, this.pause(), this.emit("error", e));
};
$e.prototype.toString = function() {
  return "[object FormData]";
};
a_($e.prototype, "FormData");
var s_ = $e;
const wm = /* @__PURE__ */ Pr(s_), xm = 100;
function Lo(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Em(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hi(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = Em(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function i_(e) {
  return P.isArray(e) && !e.some(Lo);
}
const o_ = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ti(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (wm || FormData)(), n = P.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function($, E) {
      return !P.isUndefined(E[$]);
    }
  );
  const r = n.metaTokens, a = n.visitor || g, s = n.dots, i = n.indexes, o = n.Blob || typeof Blob < "u" && Blob, c = n.maxDepth === void 0 ? xm : n.maxDepth, u = o && P.isSpecCompliantForm(t), l = [];
  if (!P.isFunction(a))
    throw new TypeError("visitor must be a function");
  function p(f) {
    if (f === null) return "";
    if (P.isDate(f))
      return f.toISOString();
    if (P.isBoolean(f))
      return f.toString();
    if (!u && P.isBlob(f))
      throw new N("Blob is not supported. Use a Buffer instead.");
    if (P.isArrayBuffer(f) || P.isTypedArray(f)) {
      if (u && typeof o == "function")
        return new o([f]);
      if (typeof Buffer < "u")
        return Buffer.from(f);
      throw new N("Blob is not supported. Use a Buffer instead.", N.ERR_NOT_SUPPORT);
    }
    return f;
  }
  function m(f) {
    if (f > c)
      throw new N(
        "Object is too deeply nested (" + f + " levels). Max depth: " + c,
        N.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function h(f, $) {
    if (c === 1 / 0)
      return JSON.stringify(f);
    const E = [];
    return JSON.stringify(f, function(A, M) {
      if (!P.isObject(M))
        return M;
      for (; E.length && E[E.length - 1] !== this; )
        E.pop();
      return E.push(M), m($ + E.length - 1), M;
    });
  }
  function g(f, $, E) {
    let O = f;
    if (P.isReactNative(t) && P.isReactNativeBlob(f))
      return t.append(Hi(E, $, s), p(f)), !1;
    if (f && !E && typeof f == "object") {
      if (P.endsWith($, "{}"))
        $ = r ? $ : $.slice(0, -2), f = h(f, 1);
      else if (P.isArray(f) && i_(f) || (P.isFileList(f) || P.endsWith($, "[]")) && (O = P.toArray(f)))
        return $ = Em($), O.forEach(function(M, X) {
          !(P.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Hi([$], X, s) : i === null ? $ : $ + "[]",
            p(M)
          );
        }), !1;
    }
    return Lo(f) ? !0 : (t.append(Hi(E, $, s), p(f)), !1);
  }
  const y = Object.assign(o_, {
    defaultVisitor: g,
    convertValue: p,
    isVisitable: Lo
  });
  function v(f, $, E = 0) {
    if (!P.isUndefined(f)) {
      if (m(E), l.indexOf(f) !== -1)
        throw new Error("Circular reference detected in " + $.join("."));
      l.push(f), P.forEach(f, function(A, M) {
        (!(P.isUndefined(A) || A === null) && a.call(t, A, P.isString(M) ? M.trim() : M, $, y)) === !0 && v(A, $ ? $.concat(M) : [M], E + 1);
      }), l.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function Ep(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function Sm(e, t) {
  this._pairs = [], e && ti(e, this, t);
}
const Pm = Sm.prototype;
Pm.append = function(t, n) {
  this._pairs.push([t, n]);
};
Pm.toString = function(t) {
  const n = t ? (r) => t.call(this, r, Ep) : Ep;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function c_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ac(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = P.isFunction(n) ? {
    serialize: n
  } : n, a = P.getSafeProp(r, "encode") || c_, s = P.getSafeProp(r, "serialize");
  let i;
  if (s ? i = s(t, r) : i = P.isURLSearchParams(t) ? t.toString() : new Sm(t, r).toString(a), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Sp {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    P.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ni = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, l_ = Xs.URLSearchParams, Gi = "abcdefghijklmnopqrstuvwxyz", Pp = "0123456789", Rm = {
  DIGIT: Pp,
  ALPHA: Gi,
  ALPHA_DIGIT: Gi + Gi.toUpperCase() + Pp
}, u_ = (e = 16, t = Rm.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t, a = new Uint32Array(e);
  qf.randomFillSync(a);
  for (let s = 0; s < e; s++)
    n += t[a[s] % r];
  return n;
}, p_ = {
  isNode: !0,
  classes: {
    URLSearchParams: l_,
    FormData: wm,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Rm,
  generateString: u_,
  protocols: ["http", "https", "file", "data"]
}, Tc = typeof window < "u" && typeof document < "u", Mo = typeof navigator == "object" && navigator || void 0, d_ = Tc && (!Mo || ["ReactNative", "NativeScript", "NS"].indexOf(Mo.product) < 0), f_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", m_ = Tc && window.location.href || "http://localhost", h_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tc,
  hasStandardBrowserEnv: d_,
  hasStandardBrowserWebWorkerEnv: f_,
  navigator: Mo,
  origin: m_
}, Symbol.toStringTag, { value: "Module" })), Ce = {
  ...h_,
  ...p_
};
function v_(e, t) {
  return ti(e, new Ce.classes.URLSearchParams(), {
    visitor: function(n, r, a, s) {
      return Ce.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Rp = xm;
function Om(e) {
  if (e > Rp)
    throw new N(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Rp,
      N.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function y_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Om(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function g_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Am(e) {
  function t(n, r, a, s) {
    Om(s);
    let i = n[s++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), c = s >= n.length;
    return i = !i && P.isArray(a) ? a.length : i, c ? (P.hasOwnProp(a, i) ? a[i] = P.isArray(a[i]) ? a[i].concat(r) : [a[i], r] : a[i] = r, !o) : ((!P.hasOwnProp(a, i) || !P.isObject(a[i])) && (a[i] = []), t(n, r, a[i], s) && P.isArray(a[i]) && (a[i] = g_(a[i])), !o);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, a) => {
      t(y_(r), a, n, 0);
    }), n;
  }
  return null;
}
const Wn = (e, t) => e != null && P.hasOwnProp(e, t) ? e[t] : void 0;
function b_(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ea = {
  transitional: ni,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = P.isObject(t);
      if (s && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
        return a ? JSON.stringify(Am(t)) : t;
      if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
        return t;
      if (P.isArrayBufferView(t))
        return t.buffer;
      if (P.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let o;
      if (s) {
        const c = Wn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return v_(t, c).toString();
        if ((o = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Wn(this, "env"), l = u && u.FormData;
          return ti(
            o ? { "files[]": t } : t,
            l && new l(),
            c
          );
        }
      }
      return s || a ? (n.setContentType("application/json", !1), b_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Wn(this, "transitional") || Ea.transitional, r = n && n.forcedJSONParsing, a = Wn(this, "responseType"), s = a === "json";
      if (P.isResponse(t) || P.isReadableStream(t))
        return t;
      if (t && P.isString(t) && (r && !a || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Wn(this, "parseReviver"));
        } catch (c) {
          if (o)
            throw c.name === "SyntaxError" ? N.from(c, N.ERR_BAD_RESPONSE, this, null, Wn(this, "response")) : c;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ce.classes.FormData,
    Blob: Ce.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
P.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Ea.headers[e] = {};
});
function Ki(e, t) {
  const n = this || Ea, r = t || n, a = Ve.from(r.headers);
  let s = r.data;
  return P.forEach(e, function(o) {
    s = o.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Tm(e) {
  return !!(e && e.__CANCEL__);
}
let Fn = class extends N {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", N.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function rr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new N(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? N.ERR_BAD_REQUEST : N.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function $_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function __(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const w_ = /^https?:(?!\/\/)/i, x_ = /[\t\n\r]/g;
function E_(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function S_(e) {
  return E_(e).replace(x_, "");
}
function Op(e, t) {
  if (typeof e == "string" && w_.test(S_(e)))
    throw new N(
      'Invalid URL: missing "//" after protocol',
      N.ERR_INVALID_URL,
      t
    );
}
function jc(e, t, n, r) {
  Op(t, r);
  let a = !$_(t);
  return e && (a || n === !1) ? (Op(e, r), __(e, t)) : t;
}
var P_ = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
function R_(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function O_(e) {
  var t = (typeof e == "string" ? R_(e) : e) || {}, n = t.protocol, r = t.host, a = t.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), a = parseInt(a) || P_[n] || 0, !A_(r, a)))
    return "";
  var s = Uo(n + "_proxy") || Uo("all_proxy");
  return s && s.indexOf("://") === -1 && (s = n + "://" + s), s;
}
function A_(e, t) {
  var n = Uo("no_proxy").toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var a = r.match(/^(.+):(\d+)$/), s = a ? a[1] : r, i = a ? parseInt(a[2]) : 0;
    return i && i !== t ? !0 : /^[.*]/.test(s) ? (s.charAt(0) === "*" && (s = s.slice(1)), !e.endsWith(s)) : e !== s;
  }) : !0;
}
function Uo(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
var kc = {}, zo = { exports: {} }, Da = { exports: {} }, Wi, Ap;
function T_() {
  if (Ap) return Wi;
  Ap = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, a = r * 7, s = r * 365.25;
  Wi = function(l, p) {
    p = p || {};
    var m = typeof l;
    if (m === "string" && l.length > 0)
      return i(l);
    if (m === "number" && isFinite(l))
      return p.long ? c(l) : o(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function i(l) {
    if (l = String(l), !(l.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (p) {
        var m = parseFloat(p[1]), h = (p[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return m * s;
          case "weeks":
          case "week":
          case "w":
            return m * a;
          case "days":
          case "day":
          case "d":
            return m * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return m * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return m * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return m * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return m;
          default:
            return;
        }
      }
    }
  }
  function o(l) {
    var p = Math.abs(l);
    return p >= r ? Math.round(l / r) + "d" : p >= n ? Math.round(l / n) + "h" : p >= t ? Math.round(l / t) + "m" : p >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function c(l) {
    var p = Math.abs(l);
    return p >= r ? u(l, p, r, "day") : p >= n ? u(l, p, n, "hour") : p >= t ? u(l, p, t, "minute") : p >= e ? u(l, p, e, "second") : l + " ms";
  }
  function u(l, p, m, h) {
    var g = p >= m * 1.5;
    return Math.round(l / m) + " " + h + (g ? "s" : "");
  }
  return Wi;
}
var Ji, Tp;
function jm() {
  if (Tp) return Ji;
  Tp = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = u, r.disable = o, r.enable = s, r.enabled = c, r.humanize = T_(), r.destroy = l, Object.keys(t).forEach((p) => {
      r[p] = t[p];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(p) {
      let m = 0;
      for (let h = 0; h < p.length; h++)
        m = (m << 5) - m + p.charCodeAt(h), m |= 0;
      return r.colors[Math.abs(m) % r.colors.length];
    }
    r.selectColor = n;
    function r(p) {
      let m, h = null, g, y;
      function v(...f) {
        if (!v.enabled)
          return;
        const $ = v, E = Number(/* @__PURE__ */ new Date()), O = E - (m || E);
        $.diff = O, $.prev = m, $.curr = E, m = E, f[0] = r.coerce(f[0]), typeof f[0] != "string" && f.unshift("%O");
        let A = 0;
        f[0] = f[0].replace(/%([a-zA-Z%])/g, (X, C) => {
          if (X === "%%")
            return "%";
          A++;
          const J = r.formatters[C];
          if (typeof J == "function") {
            const T = f[A];
            X = J.call($, T), f.splice(A, 1), A--;
          }
          return X;
        }), r.formatArgs.call($, f), ($.log || r.log).apply($, f);
      }
      return v.namespace = p, v.useColors = r.useColors(), v.color = r.selectColor(p), v.extend = a, v.destroy = r.destroy, Object.defineProperty(v, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (g !== r.namespaces && (g = r.namespaces, y = r.enabled(p)), y),
        set: (f) => {
          h = f;
        }
      }), typeof r.init == "function" && r.init(v), v;
    }
    function a(p, m) {
      const h = r(this.namespace + (typeof m > "u" ? ":" : m) + p);
      return h.log = this.log, h;
    }
    function s(p) {
      r.save(p), r.namespaces = p, r.names = [], r.skips = [];
      const m = (typeof p == "string" ? p : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of m)
        h[0] === "-" ? r.skips.push(h.slice(1)) : r.names.push(h);
    }
    function i(p, m) {
      let h = 0, g = 0, y = -1, v = 0;
      for (; h < p.length; )
        if (g < m.length && (m[g] === p[h] || m[g] === "*"))
          m[g] === "*" ? (y = g, v = h, g++) : (h++, g++);
        else if (y !== -1)
          g = y + 1, v++, h = v;
        else
          return !1;
      for (; g < m.length && m[g] === "*"; )
        g++;
      return g === m.length;
    }
    function o() {
      const p = [
        ...r.names,
        ...r.skips.map((m) => "-" + m)
      ].join(",");
      return r.enable(""), p;
    }
    function c(p) {
      for (const m of r.skips)
        if (i(p, m))
          return !1;
      for (const m of r.names)
        if (i(p, m))
          return !0;
      return !1;
    }
    function u(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return Ji = e, Ji;
}
var jp;
function j_() {
  return jp || (jp = 1, function(e, t) {
    t.formatArgs = r, t.save = a, t.load = s, t.useColors = n, t.storage = i(), t.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function r(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let l = 0, p = 0;
      c[0].replace(/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (l++, m === "%c" && (p = l));
      }), c.splice(p, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function a(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function s() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
    }
    function i() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = jm()(t);
    const { formatters: o } = e.exports;
    o.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  }(Da, Da.exports)), Da.exports;
}
var Fa = { exports: {} }, Xi, kp;
function k_() {
  return kp || (kp = 1, Xi = (e, t = process.argv) => {
    const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), a = t.indexOf("--");
    return r !== -1 && (a === -1 || r < a);
  }), Xi;
}
var Yi, Np;
function N_() {
  if (Np) return Yi;
  Np = 1;
  const e = ct, t = Vf, n = k_(), { env: r } = process;
  let a;
  n("no-color") || n("no-colors") || n("color=false") || n("color=never") ? a = 0 : (n("color") || n("colors") || n("color=true") || n("color=always")) && (a = 1), "FORCE_COLOR" in r && (r.FORCE_COLOR === "true" ? a = 1 : r.FORCE_COLOR === "false" ? a = 0 : a = r.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(r.FORCE_COLOR, 10), 3));
  function s(c) {
    return c === 0 ? !1 : {
      level: c,
      hasBasic: !0,
      has256: c >= 2,
      has16m: c >= 3
    };
  }
  function i(c, u) {
    if (a === 0)
      return 0;
    if (n("color=16m") || n("color=full") || n("color=truecolor"))
      return 3;
    if (n("color=256"))
      return 2;
    if (c && !u && a === void 0)
      return 0;
    const l = a || 0;
    if (r.TERM === "dumb")
      return l;
    if (process.platform === "win32") {
      const p = e.release().split(".");
      return Number(p[0]) >= 10 && Number(p[2]) >= 10586 ? Number(p[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in r)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((p) => p in r) || r.CI_NAME === "codeship" ? 1 : l;
    if ("TEAMCITY_VERSION" in r)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(r.TEAMCITY_VERSION) ? 1 : 0;
    if (r.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in r) {
      const p = parseInt((r.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (r.TERM_PROGRAM) {
        case "iTerm.app":
          return p >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(r.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(r.TERM) || "COLORTERM" in r ? 1 : l;
  }
  function o(c) {
    const u = i(c, c && c.isTTY);
    return s(u);
  }
  return Yi = {
    supportsColor: o,
    stdout: s(i(!0, t.isatty(1))),
    stderr: s(i(!0, t.isatty(2)))
  }, Yi;
}
var Ip;
function I_() {
  return Ip || (Ip = 1, function(e, t) {
    const n = Vf, r = Hn;
    t.init = l, t.log = o, t.formatArgs = s, t.save = c, t.load = u, t.useColors = a, t.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), t.colors = [6, 2, 3, 4, 5, 1];
    try {
      const m = N_();
      m && (m.stderr || m).level >= 2 && (t.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    t.inspectOpts = Object.keys(process.env).filter((m) => /^debug_/i.test(m)).reduce((m, h) => {
      const g = h.substring(6).toLowerCase().replace(/_([a-z])/g, (v, f) => f.toUpperCase());
      let y = process.env[h];
      return /^(yes|on|true|enabled)$/i.test(y) ? y = !0 : /^(no|off|false|disabled)$/i.test(y) ? y = !1 : y === "null" ? y = null : y = Number(y), m[g] = y, m;
    }, {});
    function a() {
      return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function s(m) {
      const { namespace: h, useColors: g } = this;
      if (g) {
        const y = this.color, v = "\x1B[3" + (y < 8 ? y : "8;5;" + y), f = `  ${v};1m${h} \x1B[0m`;
        m[0] = f + m[0].split(`
`).join(`
` + f), m.push(v + "m+" + e.exports.humanize(this.diff) + "\x1B[0m");
      } else
        m[0] = i() + h + " " + m[0];
    }
    function i() {
      return t.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function o(...m) {
      return process.stderr.write(r.formatWithOptions(t.inspectOpts, ...m) + `
`);
    }
    function c(m) {
      m ? process.env.DEBUG = m : delete process.env.DEBUG;
    }
    function u() {
      return process.env.DEBUG;
    }
    function l(m) {
      m.inspectOpts = {};
      const h = Object.keys(t.inspectOpts);
      for (let g = 0; g < h.length; g++)
        m.inspectOpts[h[g]] = t.inspectOpts[h[g]];
    }
    e.exports = jm()(t);
    const { formatters: p } = e.exports;
    p.o = function(m) {
      return this.inspectOpts.colors = this.useColors, r.inspect(m, this.inspectOpts).split(`
`).map((h) => h.trim()).join(" ");
    }, p.O = function(m) {
      return this.inspectOpts.colors = this.useColors, r.inspect(m, this.inspectOpts);
    };
  }(Fa, Fa.exports)), Fa.exports;
}
typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? zo.exports = j_() : zo.exports = I_();
var ri = zo.exports, Nc = {};
Object.defineProperty(Nc, "__esModule", { value: !0 });
function C_(e) {
  return function(t, n) {
    return new Promise((r, a) => {
      e.call(this, t, n, (s, i) => {
        s ? a(s) : r(i);
      });
    });
  };
}
Nc.default = C_;
var km = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
const D_ = zy, F_ = km(ri), L_ = km(Nc), Ur = F_.default("agent-base");
function M_(e) {
  return !!e && typeof e.addRequest == "function";
}
function Zi() {
  const { stack: e } = new Error();
  return typeof e != "string" ? !1 : e.split(`
`).some((t) => t.indexOf("(https.js:") !== -1 || t.indexOf("node:https:") !== -1);
}
function Ns(e, t) {
  return new Ns.Agent(e, t);
}
(function(e) {
  class t extends D_.EventEmitter {
    constructor(r, a) {
      super();
      let s = a;
      typeof r == "function" ? this.callback = r : r && (s = r), this.timeout = null, s && typeof s.timeout == "number" && (this.timeout = s.timeout), this.maxFreeSockets = 1, this.maxSockets = 1, this.maxTotalSockets = 1 / 0, this.sockets = {}, this.freeSockets = {}, this.requests = {}, this.options = {};
    }
    get defaultPort() {
      return typeof this.explicitDefaultPort == "number" ? this.explicitDefaultPort : Zi() ? 443 : 80;
    }
    set defaultPort(r) {
      this.explicitDefaultPort = r;
    }
    get protocol() {
      return typeof this.explicitProtocol == "string" ? this.explicitProtocol : Zi() ? "https:" : "http:";
    }
    set protocol(r) {
      this.explicitProtocol = r;
    }
    callback(r, a, s) {
      throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
    }
    /**
     * Called by node-core's "_http_client.js" module when creating
     * a new HTTP request with this Agent instance.
     *
     * @api public
     */
    addRequest(r, a) {
      const s = Object.assign({}, a);
      typeof s.secureEndpoint != "boolean" && (s.secureEndpoint = Zi()), s.host == null && (s.host = "localhost"), s.port == null && (s.port = s.secureEndpoint ? 443 : 80), s.protocol == null && (s.protocol = s.secureEndpoint ? "https:" : "http:"), s.host && s.path && delete s.path, delete s.agent, delete s.hostname, delete s._defaultAgent, delete s.defaultPort, delete s.createConnection, r._last = !0, r.shouldKeepAlive = !1;
      let i = !1, o = null;
      const c = s.timeout || this.timeout, u = (h) => {
        r._hadError || (r.emit("error", h), r._hadError = !0);
      }, l = () => {
        o = null, i = !0;
        const h = new Error(`A "socket" was not created for HTTP request before ${c}ms`);
        h.code = "ETIMEOUT", u(h);
      }, p = (h) => {
        i || (o !== null && (clearTimeout(o), o = null), u(h));
      }, m = (h) => {
        if (i)
          return;
        if (o != null && (clearTimeout(o), o = null), M_(h)) {
          Ur("Callback returned another Agent instance %o", h.constructor.name), h.addRequest(r, s);
          return;
        }
        if (h) {
          h.once("free", () => {
            this.freeSocket(h, s);
          }), r.onSocket(h);
          return;
        }
        const g = new Error(`no Duplex stream was returned to agent-base for \`${r.method} ${r.path}\``);
        u(g);
      };
      if (typeof this.callback != "function") {
        u(new Error("`callback` is not defined"));
        return;
      }
      this.promisifiedCallback || (this.callback.length >= 3 ? (Ur("Converting legacy callback function to promise"), this.promisifiedCallback = L_.default(this.callback)) : this.promisifiedCallback = this.callback), typeof c == "number" && c > 0 && (o = setTimeout(l, c)), "port" in s && typeof s.port != "number" && (s.port = Number(s.port));
      try {
        Ur("Resolving socket for %o request: %o", s.protocol, `${r.method} ${r.path}`), Promise.resolve(this.promisifiedCallback(r, s)).then(m, p);
      } catch (h) {
        Promise.reject(h).catch(p);
      }
    }
    freeSocket(r, a) {
      Ur("Freeing socket %o %o", r.constructor.name, a), r.destroy();
    }
    destroy() {
      Ur("Destroying agent %o", this.constructor.name);
    }
  }
  e.Agent = t, e.prototype = e.Agent.prototype;
})(Ns || (Ns = {}));
var U_ = Ns, Ic = {}, z_ = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ic, "__esModule", { value: !0 });
const q_ = z_(ri), zr = q_.default("https-proxy-agent:parse-proxy-response");
function V_(e) {
  return new Promise((t, n) => {
    let r = 0;
    const a = [];
    function s() {
      const p = e.read();
      p ? l(p) : e.once("readable", s);
    }
    function i() {
      e.removeListener("end", c), e.removeListener("error", u), e.removeListener("close", o), e.removeListener("readable", s);
    }
    function o(p) {
      zr("onclose had error %o", p);
    }
    function c() {
      zr("onend");
    }
    function u(p) {
      i(), zr("onerror %o", p), n(p);
    }
    function l(p) {
      a.push(p), r += p.length;
      const m = Buffer.concat(a, r);
      if (m.indexOf(`\r
\r
`) === -1) {
        zr("have not received end of HTTP headers yet..."), s();
        return;
      }
      const g = m.toString("ascii", 0, m.indexOf(`\r
`)), y = +g.split(" ")[1];
      zr("got proxy server response: %o", g), t({
        statusCode: y,
        buffered: m
      });
    }
    e.on("error", u), e.on("close", o), e.on("end", c), s();
  });
}
Ic.default = V_;
var B_ = Ke && Ke.__awaiter || function(e, t, n, r) {
  function a(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function o(l) {
      try {
        u(r.next(l));
      } catch (p) {
        i(p);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (p) {
        i(p);
      }
    }
    function u(l) {
      l.done ? s(l.value) : a(l.value).then(o, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, Rr = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(kc, "__esModule", { value: !0 });
const Cp = Rr(My), Dp = Rr(Uy), H_ = Rr(Xs), G_ = Rr($c), K_ = Rr(ri), W_ = U_, J_ = Rr(Ic), qr = K_.default("https-proxy-agent:agent");
let X_ = class extends W_.Agent {
  constructor(t) {
    let n;
    if (typeof t == "string" ? n = H_.default.parse(t) : n = t, !n)
      throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
    qr("creating new HttpsProxyAgent instance: %o", n), super(n);
    const r = Object.assign({}, n);
    this.secureProxy = n.secureProxy || Q_(r.protocol), r.host = r.hostname || r.host, typeof r.port == "string" && (r.port = parseInt(r.port, 10)), !r.port && r.host && (r.port = this.secureProxy ? 443 : 80), this.secureProxy && !("ALPNProtocols" in r) && (r.ALPNProtocols = ["http 1.1"]), r.host && r.path && (delete r.path, delete r.pathname), this.proxy = r;
  }
  /**
   * Called when the node-core HTTP client library is creating a
   * new HTTP request.
   *
   * @api protected
   */
  callback(t, n) {
    return B_(this, void 0, void 0, function* () {
      const { proxy: r, secureProxy: a } = this;
      let s;
      a ? (qr("Creating `tls.Socket`: %o", r), s = Dp.default.connect(r)) : (qr("Creating `net.Socket`: %o", r), s = Cp.default.connect(r));
      const i = Object.assign({}, r.headers);
      let c = `CONNECT ${`${n.host}:${n.port}`} HTTP/1.1\r
`;
      r.auth && (i["Proxy-Authorization"] = `Basic ${Buffer.from(r.auth).toString("base64")}`);
      let { host: u, port: l, secureEndpoint: p } = n;
      Z_(l, p) || (u += `:${l}`), i.Host = u, i.Connection = "close";
      for (const v of Object.keys(i))
        c += `${v}: ${i[v]}\r
`;
      const m = J_.default(s);
      s.write(`${c}\r
`);
      const { statusCode: h, buffered: g } = yield m;
      if (h === 200) {
        if (t.once("socket", Y_), n.secureEndpoint) {
          qr("Upgrading socket connection to TLS");
          const v = n.servername || n.host;
          return Dp.default.connect(Object.assign(Object.assign({}, e0(n, "host", "hostname", "path", "port")), {
            socket: s,
            servername: v
          }));
        }
        return s;
      }
      s.destroy();
      const y = new Cp.default.Socket({ writable: !1 });
      return y.readable = !0, t.once("socket", (v) => {
        qr("replaying proxy buffer for failed request"), G_.default(v.listenerCount("data") > 0), v.push(g), v.push(null);
      }), y;
    });
  }
};
kc.default = X_;
function Y_(e) {
  e.resume();
}
function Z_(e, t) {
  return !!(!t && e === 80 || t && e === 443);
}
function Q_(e) {
  return typeof e == "string" ? /^https:?$/i.test(e) : !1;
}
function e0(e, ...t) {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
var t0 = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
const qo = t0(kc);
function Vo(e) {
  return new qo.default(e);
}
(function(e) {
  e.HttpsProxyAgent = qo.default, e.prototype = qo.default.prototype;
})(Vo || (Vo = {}));
var n0 = Vo;
const Nm = /* @__PURE__ */ Pr(n0);
var Cc = { exports: {} }, Vr, r0 = function() {
  if (!Vr) {
    try {
      Vr = ri("follow-redirects");
    } catch {
    }
    typeof Vr != "function" && (Vr = function() {
    });
  }
  Vr.apply(null, arguments);
}, Sa = Xs, ha = Sa.URL, a0 = Ws, s0 = Js, Dc = Xe.Writable, Fc = $c, Im = r0;
(function() {
  var t = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = Ln(Error.captureStackTrace);
  !t && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var Lc = !1;
try {
  Fc(new ha(""));
} catch (e) {
  Lc = e.code === "ERR_INVALID_URL";
}
var i0 = [
  "Authorization",
  "Proxy-Authorization",
  "Cookie"
], o0 = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash"
], Mc = ["abort", "aborted", "connect", "error", "socket", "timeout"], Uc = /* @__PURE__ */ Object.create(null);
Mc.forEach(function(e) {
  Uc[e] = function(t, n, r) {
    this._redirectable.emit(e, t, n, r);
  };
});
var Bo = Pa(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), Ho = Pa(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), c0 = Pa(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Ho
), l0 = Pa(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), u0 = Pa(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), p0 = Dc.prototype.destroy || Dm;
function bt(e, t) {
  Dc.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (a) {
      n.emit("error", a instanceof Ho ? a : new Ho({ cause: a }));
    }
  }, this._headerFilter = new RegExp("^(?:" + i0.concat(e.sensitiveHeaders).map(y0).join("|") + ")$", "i"), this._performRequest();
}
bt.prototype = Object.create(Dc.prototype);
bt.prototype.abort = function() {
  qc(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
bt.prototype.destroy = function(e) {
  return qc(this._currentRequest, e), p0.call(this, e), this;
};
bt.prototype.write = function(e, t, n) {
  if (this._ending)
    throw new u0();
  if (!Nn(e) && !h0(e))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (Ln(t) && (n = t, t = null), e.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: t }), this._currentRequest.write(e, t, n)) : (this.emit("error", new l0()), this.abort());
};
bt.prototype.end = function(e, t, n) {
  if (Ln(e) ? (n = e, e = t = null) : Ln(t) && (n = t, t = null), !e)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, a = this._currentRequest;
    this.write(e, t, function() {
      r._ended = !0, a.end(null, null, n);
    }), this._ending = !0;
  }
};
bt.prototype.setHeader = function(e, t) {
  this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
};
bt.prototype.removeHeader = function(e) {
  delete this._options.headers[e], this._currentRequest.removeHeader(e);
};
bt.prototype.setTimeout = function(e, t) {
  var n = this;
  function r(i) {
    i.setTimeout(e), i.removeListener("timeout", i.destroy), i.addListener("timeout", i.destroy);
  }
  function a(i) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), s();
    }, e), r(i);
  }
  function s() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", s), n.removeListener("error", s), n.removeListener("response", s), n.removeListener("close", s), t && n.removeListener("timeout", t), n.socket || n._currentRequest.removeListener("socket", a);
  }
  return t && this.on("timeout", t), this.socket ? a(this.socket) : this._currentRequest.once("socket", a), this.on("socket", r), this.on("abort", s), this.on("error", s), this.on("response", s), this.on("close", s), this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(e) {
  bt.prototype[e] = function(t, n) {
    return this._currentRequest[e](t, n);
  };
});
["aborted", "connection", "socket"].forEach(function(e) {
  Object.defineProperty(bt.prototype, e, {
    get: function() {
      return this._currentRequest[e];
    }
  });
});
bt.prototype._sanitizeOptions = function(e) {
  if (e.headers || (e.headers = {}), m0(e.sensitiveHeaders) || (e.sensitiveHeaders = []), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
    var t = e.path.indexOf("?");
    t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t));
  }
};
bt.prototype._performRequest = function() {
  var e = this._options.protocol, t = this._options.nativeProtocols[e];
  if (!t)
    throw new TypeError("Unsupported protocol " + e);
  if (this._options.agents) {
    var n = e.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
  r._redirectable = this;
  for (var a of Mc)
    r.on(a, Uc[a]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Sa.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var s = 0, i = this, o = this._requestBodyBuffers;
    (function c(u) {
      if (r === i._currentRequest)
        if (u)
          i.emit("error", u);
        else if (s < o.length) {
          var l = o[s++];
          r.finished || r.write(l.data, l.encoding, c);
        } else i._ended && r.end();
    })();
  }
};
bt.prototype._processResponse = function(e) {
  var t = e.statusCode;
  this._options.trackRedirects && this._redirects.push({
    url: this._currentUrl,
    headers: e.headers,
    statusCode: t
  });
  var n = e.headers.location;
  if (!n || this._options.followRedirects === !1 || t < 300 || t >= 400) {
    e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = [];
    return;
  }
  if (qc(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new c0();
  var r, a = this._options.beforeRedirect;
  a && (r = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: e.req.getHeader("host")
  }, this._options.headers));
  var s = this._options.method;
  ((t === 301 || t === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], Qi(/^content-/i, this._options.headers));
  var i = Qi(/^host$/i, this._options.headers), o = zc(this._currentUrl), c = i || o.host, u = /^\w+:/.test(n) ? this._currentUrl : Sa.format(Object.assign(o, { host: c })), l = d0(n, u);
  if (Im("redirecting to", l.href), this._isRedirect = !0, Go(l, this._options), (l.protocol !== o.protocol && l.protocol !== "https:" || l.host !== c && !f0(l.host, c)) && Qi(this._headerFilter, this._options.headers), Ln(a)) {
    var p = {
      headers: e.headers,
      statusCode: t
    }, m = {
      url: u,
      method: s,
      headers: r
    };
    a(this._options, p, m), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function Cm(e) {
  var t = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(e).forEach(function(r) {
    var a = r + ":", s = n[a] = e[r], i = t[r] = Object.create(s);
    function o(u, l, p) {
      return v0(u) ? u = Go(u) : Nn(u) ? u = Go(zc(u)) : (p = l, l = Fm(u), u = { protocol: a }), Ln(l) && (p = l, l = null), l = Object.assign({
        maxRedirects: t.maxRedirects,
        maxBodyLength: t.maxBodyLength
      }, u, l), l.nativeProtocols = n, !Nn(l.host) && !Nn(l.hostname) && (l.hostname = "::1"), Fc.equal(l.protocol, a, "protocol mismatch"), Im("options", l), new bt(l, p);
    }
    function c(u, l, p) {
      var m = i.request(u, l, p);
      return m.end(), m;
    }
    Object.defineProperties(i, {
      request: { value: o, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: c, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), t;
}
function Dm() {
}
function zc(e) {
  var t;
  if (Lc)
    t = new ha(e);
  else if (t = Fm(Sa.parse(e)), !Nn(t.protocol))
    throw new Bo({ input: e });
  return t;
}
function d0(e, t) {
  return Lc ? new ha(e, t) : zc(Sa.resolve(t, e));
}
function Fm(e) {
  if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
    throw new Bo({ input: e.href || e });
  if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
    throw new Bo({ input: e.href || e });
  return e;
}
function Go(e, t) {
  var n = t || {};
  for (var r of o0)
    n[r] = e[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function Qi(e, t) {
  var n;
  for (var r in t)
    e.test(r) && (n = t[r], delete t[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Pa(e, t, n) {
  function r(a) {
    Ln(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, a || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
  }
  return r.prototype = new (n || Error)(), Object.defineProperties(r.prototype, {
    constructor: {
      value: r,
      enumerable: !1
    },
    name: {
      value: "Error [" + e + "]",
      enumerable: !1
    }
  }), r;
}
function qc(e, t) {
  for (var n of Mc)
    e.removeListener(n, Uc[n]);
  e.on("error", Dm), e.destroy(t);
}
function f0(e, t) {
  Fc(Nn(e) && Nn(t));
  var n = e.length - t.length - 1;
  return n > 0 && e[n] === "." && e.endsWith(t);
}
function m0(e) {
  return e instanceof Array;
}
function Nn(e) {
  return typeof e == "string" || e instanceof String;
}
function Ln(e) {
  return typeof e == "function";
}
function h0(e) {
  return typeof e == "object" && "length" in e;
}
function v0(e) {
  return ha && e instanceof ha;
}
function y0(e) {
  return e.replace(/[\]\\/()*+?.$]/g, "\\$&");
}
Cc.exports = Cm({ http: a0, https: s0 });
Cc.exports.wrap = Cm;
var g0 = Cc.exports;
const b0 = /* @__PURE__ */ Pr(g0), va = "1.18.1";
function Lm(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
const $0 = /^([^,;]+\/[^,;]+)?((?:;[^,;=]+=[^,;]+)*)(;base64)?,([\s\S]*)$/;
function _0(e, t, n) {
  const r = n && n.Blob || Ce.classes.Blob, a = Lm(e);
  if (t === void 0 && r && (t = !0), a === "data") {
    e = a.length ? e.slice(a.length + 1) : e;
    const s = $0.exec(e);
    if (!s)
      throw new N("Invalid URL", N.ERR_INVALID_URL);
    const i = s[1], o = s[2], c = s[3] ? "base64" : "utf8", u = s[4];
    let l = "";
    i ? l = o ? i + o : i : o && (l = "text/plain" + o);
    const p = c === "base64" ? Buffer.from(u, "base64") : Buffer.from(decodeURIComponent(u), c);
    if (t) {
      if (!r)
        throw new N("Blob is not supported", N.ERR_NOT_SUPPORT);
      return new r([p], { type: l });
    }
    return p;
  }
  throw new N("Unsupported protocol " + a, N.ERR_NOT_SUPPORT);
}
const eo = Symbol("internals");
class Fp extends Xe.Transform {
  constructor(t) {
    t = P.toFlatObject(
      t,
      {
        maxRate: 0,
        chunkSize: 64 * 1024,
        minChunkSize: 100,
        timeWindow: 500,
        ticksRate: 2,
        samplesCount: 15
      },
      null,
      (r, a) => !P.isUndefined(a[r])
    ), super({
      readableHighWaterMark: t.chunkSize
    });
    const n = this[eo] = {
      timeWindow: t.timeWindow,
      chunkSize: t.chunkSize,
      maxRate: t.maxRate,
      minChunkSize: t.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (r) => {
      r === "progress" && (n.isCaptured || (n.isCaptured = !0));
    });
  }
  _read(t) {
    const n = this[eo];
    return n.onReadCallback && n.onReadCallback(), super._read(t);
  }
  _transform(t, n, r) {
    const a = this[eo], s = a.maxRate, i = this.readableHighWaterMark, o = a.timeWindow, c = 1e3 / o, u = s / c, l = a.minChunkSize !== !1 ? Math.max(a.minChunkSize, u * 0.01) : 0, p = (h, g) => {
      const y = Buffer.byteLength(h);
      a.bytesSeen += y, a.bytes += y, a.isCaptured && this.emit("progress", a.bytesSeen), this.push(h) ? process.nextTick(g) : a.onReadCallback = () => {
        a.onReadCallback = null, process.nextTick(g);
      };
    }, m = (h, g) => {
      const y = Buffer.byteLength(h);
      let v = null, f = i, $, E = 0;
      if (s) {
        const O = Date.now();
        (!a.ts || (E = O - a.ts) >= o) && (a.ts = O, $ = u - a.bytes, a.bytes = $ < 0 ? -$ : 0, E = 0), $ = u - a.bytes;
      }
      if (s) {
        if ($ <= 0)
          return setTimeout(() => {
            g(null, h);
          }, o - E);
        $ < f && (f = $);
      }
      f && y > f && y - f > l && (v = h.subarray(f), h = h.subarray(0, f)), p(
        h,
        v ? () => {
          process.nextTick(g, null, v);
        } : g
      );
    };
    m(t, function h(g, y) {
      if (g)
        return r(g);
      y ? m(y, h) : r(null);
    });
  }
}
const { asyncIterator: Lp } = Symbol, Mm = async function* (e) {
  e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[Lp] ? yield* e[Lp]() : yield e;
}, w0 = Ce.ALPHABET.ALPHA_DIGIT + "-_", ya = typeof TextEncoder == "function" ? new TextEncoder() : new Hn.TextEncoder(), jn = `\r
`, x0 = ya.encode(jn), E0 = 2;
class S0 {
  constructor(t, n) {
    const { escapeName: r } = this.constructor, a = P.isString(n);
    let s = `Content-Disposition: form-data; name="${r(t)}"${!a && n.name ? `; filename="${r(n.name)}"` : ""}${jn}`;
    if (a)
      n = ya.encode(String(n).replace(/\r?\n|\r\n?/g, jn));
    else {
      const i = String(n.type || "application/octet-stream").replace(/[\r\n]/g, "");
      s += `Content-Type: ${i}${jn}`;
    }
    this.headers = ya.encode(s + jn), this.contentLength = a ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + E0, this.name = t, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: t } = this;
    P.isTypedArray(t) ? yield t : yield* Mm(t), yield x0;
  }
  static escapeName(t) {
    return String(t).replace(
      /[\r\n"]/g,
      (n) => ({
        "\r": "%0D",
        "\n": "%0A",
        '"': "%22"
      })[n]
    );
  }
}
const P0 = (e, t, n) => {
  const {
    tag: r = "form-data-boundary",
    size: a = 25,
    boundary: s = r + "-" + Ce.generateString(a, w0)
  } = n || {};
  if (!P.isFormData(e))
    throw new TypeError("FormData instance required");
  if (s.length < 1 || s.length > 70)
    throw new Error("boundary must be 1-70 characters long");
  const i = ya.encode("--" + s + jn), o = ya.encode("--" + s + "--" + jn);
  let c = o.byteLength;
  const u = Array.from(e.entries()).map(([p, m]) => {
    const h = new S0(p, m);
    return c += h.size, h;
  });
  c += i.byteLength * u.length, c = P.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${s}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), t && t(l), Dy.from(
    async function* () {
      for (const p of u)
        yield i, yield* p.encode();
      yield o;
    }()
  );
};
class R0 extends Xe.Transform {
  __transform(t, n, r) {
    this.push(t), r();
  }
  _transform(t, n, r) {
    if (t.length !== 0 && (this._transform = this.__transform, t[0] !== 120)) {
      const a = Buffer.alloc(2);
      a[0] = 120, a[1] = 156, this.push(a, n);
    }
    this.__transform(t, n, r);
  }
}
class O0 {
  constructor() {
    this.sessions = /* @__PURE__ */ Object.create(null);
  }
  getSession(t, n) {
    n = Object.assign(
      {
        sessionTimeout: 1e3
      },
      n
    );
    let r = this.sessions[t];
    if (r) {
      let p = r.length;
      for (let m = 0; m < p; m++) {
        const [h, g] = r[m];
        if (!h.destroyed && !h.closed && Hn.isDeepStrictEqual(g, n))
          return h;
      }
    }
    const a = Bf.connect(t, n);
    let s, i;
    const o = () => {
      if (s)
        return;
      s = !0, i && (clearTimeout(i), i = null);
      let p = r, m = p.length, h = m;
      for (; h--; )
        if (p[h][0] === a) {
          m === 1 ? delete this.sessions[t] : p.splice(h, 1), a.closed || a.close();
          return;
        }
    }, c = a.request, { sessionTimeout: u } = n;
    if (u != null) {
      let p = 0;
      a.request = function() {
        const m = c.apply(this, arguments);
        return p++, i && (clearTimeout(i), i = null), m.once("close", () => {
          --p || (i = setTimeout(() => {
            i = null, o();
          }, u));
        }), m;
      };
    }
    a.once("close", o);
    let l = [a, n];
    return r ? r.push(l) : r = this.sessions[t] = [l], a;
  }
}
const A0 = (e, t) => P.isAsyncFn(e) ? function(...n) {
  const r = n.pop();
  e.apply(this, n).then((a) => {
    try {
      t ? r(null, ...t(a)) : r(null, a);
    } catch (s) {
      r(s);
    }
  }, r);
} : e, T0 = /* @__PURE__ */ new Set(["localhost", "0.0.0.0"]), Um = (e) => {
  const t = e.split(".");
  return t.length !== 4 || t[0] !== "127" ? !1 : t.every((n) => /^\d+$/.test(n) && Number(n) >= 0 && Number(n) <= 255);
}, to = (e) => /^0{1,4}$/.test(e), j0 = (e) => {
  if (e === "::") return !0;
  const t = e.indexOf("::");
  if (t !== -1) {
    if (t !== e.lastIndexOf("::")) return !1;
    const r = e.slice(0, t), a = e.slice(t + 2), s = r ? r.split(":") : [], i = a ? a.split(":") : [];
    return s.length + i.length < 8 && s.every(to) && i.every(to);
  }
  const n = e.split(":");
  return n.length === 8 && n.every(to);
}, k0 = (e) => {
  if (e === "::1") return !0;
  const t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (t) return Um(t[1]);
  const n = e.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (n) {
    const a = parseInt(n[1], 16);
    return a >= 32512 && a <= 32767;
  }
  const r = e.split(":");
  if (r.length === 8) {
    for (let a = 0; a < 7; a++)
      if (!/^0+$/.test(r[a])) return !1;
    return /^0*1$/.test(r[7]);
  }
  return !1;
}, Mp = (e) => e ? T0.has(e) || Um(e) || j0(e) ? !0 : k0(e) : !1, N0 = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
}, I0 = (e) => {
  let t = e, n = 0;
  if (t.charAt(0) === "[") {
    const s = t.indexOf("]");
    if (s !== -1) {
      const i = t.slice(1, s), o = t.slice(s + 1);
      return o.charAt(0) === ":" && /^\d+$/.test(o.slice(1)) && (n = Number.parseInt(o.slice(1), 10)), [i, n];
    }
  }
  const r = t.indexOf(":"), a = t.lastIndexOf(":");
  return r !== -1 && r === a && /^\d+$/.test(t.slice(a + 1)) && (n = Number.parseInt(t.slice(a + 1), 10), t = t.slice(0, a)), [t, n];
}, C0 = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:(\d+\.\d+\.\d+\.\d+)$/i, D0 = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i, F0 = (e) => {
  if (typeof e != "string" || e.indexOf(":") === -1) return e;
  const t = e.match(C0);
  if (t) return t[1];
  const n = e.match(D0);
  if (n) {
    const r = parseInt(n[1], 16), a = parseInt(n[2], 16);
    return `${r >> 8}.${r & 255}.${a >> 8}.${a & 255}`;
  }
  return e;
}, Up = (e) => e && (e.charAt(0) === "[" && e.charAt(e.length - 1) === "]" && (e = e.slice(1, -1)), F0(e.replace(/\.+$/, "")));
function L0(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  const n = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
  if (!n)
    return !1;
  if (n === "*")
    return !0;
  const r = Number.parseInt(t.port, 10) || N0[t.protocol.split(":", 1)[0]] || 0, a = Up(t.hostname.toLowerCase());
  return n.split(/[\s,]+/).some((s) => {
    if (!s)
      return !1;
    let [i, o] = I0(s);
    return i = Up(i), !i || o && o !== r ? !1 : (i.charAt(0) === "*" && (i = i.slice(1)), i.charAt(0) === "." ? a.endsWith(i) : a === i || Mp(a) && Mp(i));
  });
}
function M0(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = r[s];
    i || (i = u), n[a] = c, r[a] = u;
    let p = s, m = 0;
    for (; p !== a; )
      m += n[p++], p = p % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), u - i < t)
      return;
    const h = l && u - l;
    return h ? Math.round(m * 1e3 / h) : void 0;
  };
}
function U0(e, t) {
  let n = 0, r = 1e3 / t, a, s;
  const i = (u, l = Date.now()) => {
    n = l, a = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), p = l - n;
    p >= r ? i(u, l) : (a = u, s || (s = setTimeout(() => {
      s = null, i(a);
    }, r - p)));
  }, () => a && i(a)];
}
const yr = (e, t, n = 3) => {
  let r = 0;
  const a = M0(50, 250);
  return U0((s) => {
    if (!s || typeof s.loaded != "number")
      return;
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, c = o != null ? Math.min(i, o) : i, u = Math.max(0, c - r), l = a(u);
    r = Math.max(r, c);
    const p = {
      loaded: c,
      total: o,
      progress: o ? c / o : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && o ? (o - c) / l : void 0,
      event: s,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, Is = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Cs = (e) => (...t) => P.asap(() => e(...t)), Ds = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, z0 = (e, t, n) => t + 2 < n && Ds(e.charCodeAt(t + 1)) && Ds(e.charCodeAt(t + 2));
function zm(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const o = r.length;
    for (let h = 0; h < o; h++)
      if (r.charCodeAt(h) === 37 && h + 2 < o) {
        const g = r.charCodeAt(h + 1), y = r.charCodeAt(h + 2);
        Ds(g) && Ds(y) && (i -= 2, h += 2);
      }
    let c = 0, u = o - 1;
    const l = (h) => h >= 2 && r.charCodeAt(h - 2) === 37 && // '%'
    r.charCodeAt(h - 1) === 51 && // '3'
    (r.charCodeAt(h) === 68 || r.charCodeAt(h) === 100);
    u >= 0 && (r.charCodeAt(u) === 61 ? (c++, u--) : l(u) && (c++, u -= 3)), c === 1 && u >= 0 && (r.charCodeAt(u) === 61 || l(u)) && c++;
    const m = Math.floor(i / 4) * 3 - (c || 0);
    return m > 0 ? m : 0;
  }
  let s = 0;
  for (let i = 0, o = r.length; i < o; i++) {
    const c = r.charCodeAt(i);
    if (c === 37 && z0(r, i, o))
      s += 1, i += 2;
    else if (c < 128)
      s += 1;
    else if (c < 2048)
      s += 2;
    else if (c >= 55296 && c <= 56319 && i + 1 < o) {
      const u = r.charCodeAt(i + 1);
      u >= 56320 && u <= 57343 ? (s += 4, i++) : s += 3;
    } else
      s += 3;
  }
  return s;
}
const zp = {
  flush: Pt.constants.Z_SYNC_FLUSH,
  finishFlush: Pt.constants.Z_SYNC_FLUSH
}, q0 = {
  flush: Pt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: Pt.constants.BROTLI_OPERATION_FLUSH
}, V0 = {
  flush: Pt.constants.ZSTD_e_flush,
  finishFlush: Pt.constants.ZSTD_e_flush
}, qm = P.isFunction(Pt.createBrotliDecompress), Vm = P.isFunction(Pt.createZstdDecompress), Bm = "gzip, compress, deflate" + (qm ? ", br" : ""), B0 = Bm + (Vm ? ", zstd" : ""), { http: H0, https: G0 } = b0, Vc = /https:?/, K0 = ["content-type", "content-length"];
function W0(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, a]) => {
    K0.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const qp = Symbol("axios.http.socketListener"), La = Symbol("axios.http.currentReq"), Hm = Symbol("axios.http.installedTunnel"), J0 = /* @__PURE__ */ new Map(), Vp = /* @__PURE__ */ new WeakMap(), Bp = {
  22: 21,
  24: 5
};
function X0(e = process.versions && process.versions.node) {
  if (!e)
    return !1;
  const [t, n] = e.split(".").map((r) => Number(r));
  return !Number.isInteger(t) || !Number.isInteger(n) ? !1 : t > 24 ? !0 : Bp[t] != null && n >= Bp[t];
}
function Y0(e, t = process.versions && process.versions.node) {
  if (!X0(t))
    return !1;
  const n = e && e.options;
  return !!(n && P.hasOwnProp(n, "proxyEnv") && n.proxyEnv != null);
}
function Z0(e, t, n) {
  return Vc.test(e.protocol) ? n || Js.globalAgent : t || Ws.globalAgent;
}
function Q0(e, t) {
  const n = e.protocol + "//" + e.hostname + ":" + (e.port || "") + "#" + (e.auth || ""), r = t ? Vp.get(t) || Vp.set(t, /* @__PURE__ */ new Map()).get(t) : J0;
  let a = r.get(n);
  if (a) return a;
  const s = t && t.options ? { ...t.options, ...e } : e;
  if (a = new Nm(s), t && t.options) {
    const i = { ...t.options }, o = a.callback;
    a.callback = function(u, l) {
      return o.call(this, u, { ...i, ...l });
    };
  }
  return a[Hm] = !0, r.set(n, a), a;
}
const Hp = Ce.protocols.map((e) => e + ":"), Gp = (e) => {
  if (!P.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Kp = (e, [t, n]) => (e.on("end", n).on("error", n), t), ew = new O0();
function tw(e, t, n) {
  e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.auth && e.beforeRedirects.auth(e), e.beforeRedirects.sensitiveHeaders && e.beforeRedirects.sensitiveHeaders(e, n), e.beforeRedirects.config && e.beforeRedirects.config(e, t, n);
}
function nw(e, t) {
  e && Object.keys(e).forEach((n) => {
    t.has(n.toLowerCase()) && delete e[n];
  });
}
function rw(e, t) {
  if (!t)
    return !1;
  try {
    return new URL(t.url).origin === new URL(e.href).origin;
  } catch {
    return !1;
  }
}
function Gm(e, t, n, r, a, s) {
  let i = t;
  const o = Z0(e, s, a);
  if (!i && i !== !1 && !Y0(o)) {
    const c = O_(n);
    c && (L0(n) || (i = new URL(c)));
  }
  if (r && e.headers)
    for (const c of Object.keys(e.headers))
      c.toLowerCase() === "proxy-authorization" && delete e.headers[c];
  if (r && e.agent && e.agent[Hm] && (e.agent = void 0), i) {
    const c = i instanceof URL, u = (g) => c || P.hasOwnProp(i, g) ? i[g] : void 0, l = u("username"), p = u("password");
    let m = P.hasOwnProp(i, "auth") ? i.auth : void 0;
    if (l && (m = (l || "") + ":" + (p || "")), m) {
      const g = typeof m == "object", y = g && P.hasOwnProp(m, "username") ? m.username : void 0, v = g && P.hasOwnProp(m, "password") ? m.password : void 0;
      if (!!(y || v))
        m = (y || "") + ":" + (v || "");
      else if (g)
        throw new N("Invalid proxy authorization", N.ERR_BAD_OPTION, { proxy: i });
    }
    if (Vc.test(e.protocol)) {
      if (!(a instanceof Nm)) {
        const g = u("hostname") || u("host"), y = u("port"), v = u("protocol"), f = v ? v.includes(":") ? v : `${v}:` : "http:", $ = g && g.includes(":") && !g.startsWith("[") ? `[${g}]` : g, E = new URL(
          `${f}//${$}${y ? ":" + y : ""}`
        ), O = {
          protocol: E.protocol,
          hostname: E.hostname.replace(/^\[|\]$/g, ""),
          port: E.port,
          auth: m && typeof m == "string" ? m : void 0
        };
        E.protocol === "https:" && (O.ALPNProtocols = ["http/1.1"]);
        const A = Q0(O, a);
        e.agent = A, e.agents && (e.agents.https = A);
      }
    } else {
      if (m) {
        const f = Buffer.from(m, "utf8").toString("base64");
        e.headers["Proxy-Authorization"] = "Basic " + f;
      }
      let g = !1;
      for (const f of Object.keys(e.headers))
        if (f.toLowerCase() === "host") {
          g = !0;
          break;
        }
      g || (e.headers.host = e.hostname + (e.port ? ":" + e.port : ""));
      const y = u("hostname") || u("host");
      e.hostname = y, e.host = y, e.port = u("port"), e.path = n;
      const v = u("protocol");
      v && (e.protocol = v.includes(":") ? v : `${v}:`);
    }
  }
  e.beforeRedirects.proxy = function(u) {
    Gm(
      u,
      t,
      u.href,
      !0,
      a,
      s
    );
  };
}
const aw = typeof process < "u" && P.kindOf(process) === "process", sw = (e) => new Promise((t, n) => {
  let r, a;
  const s = (c, u) => {
    a || (a = !0, r && r(c, u));
  }, i = (c) => {
    s(c), t(c);
  }, o = (c) => {
    s(c, !0), n(c);
  };
  e(i, o, (c) => r = c).catch(o);
}), iw = ({ address: e, family: t }) => {
  if (!P.isString(e))
    throw TypeError("address must be a string");
  return {
    address: e,
    family: t || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, Wp = (e, t) => iw(P.isObject(e) ? e : { address: e, family: t }), ow = {
  request(e, t) {
    const n = e.protocol + "//" + e.hostname + ":" + (e.port || (e.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: a } = e, s = ew.getSession(n, r), { HTTP2_HEADER_SCHEME: i, HTTP2_HEADER_METHOD: o, HTTP2_HEADER_PATH: c, HTTP2_HEADER_STATUS: u } = Bf.constants, l = {
      [i]: e.protocol.replace(":", ""),
      [o]: e.method,
      [c]: e.path
    };
    P.forEach(a, (m, h) => {
      h.charAt(0) !== ":" && (l[h] = m);
    });
    const p = s.request(l);
    return p.once("response", (m) => {
      const h = p;
      m = Object.assign({}, m);
      const g = m[u];
      delete m[u], h.headers = m, h.statusCode = +g, t(h);
    }), p;
  }
}, cw = aw && function(t) {
  return sw(async function(r, a, s) {
    const i = (q) => P.getSafeProp(t, q), o = i("transitional") || ni;
    let c = i("data"), u = i("lookup"), l = i("family"), p = i("httpVersion");
    p === void 0 && (p = 1);
    let m = i("http2Options");
    const h = i("httpAgent"), g = i("httpsAgent"), y = i("proxy"), v = i("responseType"), f = i("responseEncoding"), $ = i("socketPath"), E = i("method").toUpperCase(), O = i("maxRedirects"), A = i("maxBodyLength"), M = i("maxContentLength"), X = i("decompress");
    let C, J = !1, T, F;
    if (p = +p, Number.isNaN(p))
      throw TypeError(`Invalid protocol version: '${t.httpVersion}' is not a number`);
    if (p !== 1 && p !== 2)
      throw TypeError(`Unsupported protocol version '${p}'`);
    const L = p === 2;
    if (u) {
      const q = A0(u, (U) => P.isArray(U) ? U : [U]);
      u = (U, ue, we) => {
        q(U, ue, (ae, Oe, ke) => {
          if (ae)
            return we(ae);
          const xe = P.isArray(Oe) ? Oe.map((Be) => Wp(Be)) : [Wp(Oe, ke)];
          ue.all ? we(ae, xe) : we(ae, xe[0].address, xe[0].family);
        });
      };
    }
    const Z = new qy();
    function j(q) {
      try {
        Z.emit(
          "abort",
          !q || q.type ? new Fn(null, t, T) : q
        );
      } catch {
      }
    }
    function D() {
      F && (clearTimeout(F), F = null);
    }
    function B() {
      const q = i("timeout");
      let U = q ? "timeout of " + q + "ms exceeded" : "timeout exceeded";
      const ue = i("timeoutErrorMessage");
      return ue && (U = ue), new N(
        U,
        o.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED,
        t,
        T
      );
    }
    Z.once("abort", a);
    const z = () => {
      D(), t.cancelToken && t.cancelToken.unsubscribe(j), t.signal && t.signal.removeEventListener("abort", j), Z.removeAllListeners();
    };
    (t.cancelToken || t.signal) && (t.cancelToken && t.cancelToken.subscribe(j), t.signal && (t.signal.aborted ? j() : t.signal.addEventListener("abort", j))), s((q, U) => {
      if (C = !0, D(), U) {
        J = !0, z();
        return;
      }
      const { data: ue } = q;
      if (ue instanceof Xe.Readable || ue instanceof Xe.Duplex) {
        const we = Xe.finished(ue, () => {
          we(), z();
        });
      } else
        z();
    });
    const Q = jc(i("baseURL"), i("url"), i("allowAbsoluteUrls"), t), H = $ ? "http://localhost" : Ce.hasBrowserEnv ? Ce.origin : void 0, R = new URL(Q, H), _ = R.protocol || Hp[0];
    if (_ === "data:") {
      if (M > -1) {
        const U = String(i("url") || Q || "");
        if (zm(U) > M)
          return a(
            new N(
              "maxContentLength size of " + M + " exceeded",
              N.ERR_BAD_RESPONSE,
              t
            )
          );
      }
      let q;
      if (E !== "GET")
        return rr(r, a, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: t
        });
      try {
        q = _0(i("url"), v === "blob", {
          Blob: t.env && t.env.Blob
        });
      } catch (U) {
        throw N.from(U, N.ERR_BAD_REQUEST, t);
      }
      return v === "text" ? (q = q.toString(f), (!f || f === "utf8") && (q = P.stripBOM(q))) : v === "stream" && (q = Xe.Readable.from(q)), rr(r, a, {
        data: q,
        status: 200,
        statusText: "OK",
        headers: new Ve(),
        config: t
      });
    }
    if (Hp.indexOf(_) === -1)
      return a(
        new N("Unsupported protocol " + _, N.ERR_BAD_REQUEST, t)
      );
    const S = Ve.from(t.headers).normalize();
    S.set("User-Agent", "axios/" + va, !1);
    const { onUploadProgress: w, onDownloadProgress: d } = t, b = t.maxRate;
    let x, k;
    if (P.isSpecCompliantForm(c)) {
      const q = S.getContentType(/boundary=([-_\w\d]{10,70})/i);
      c = P0(
        c,
        (U) => {
          S.set(U);
        },
        {
          tag: `axios-${va}-boundary`,
          boundary: q && q[1] || void 0
        }
      );
    } else if (P.isFormData(c) && P.isFunction(c.getHeaders) && c.getHeaders !== Object.prototype.getHeaders) {
      if (W0(S, c.getHeaders(), i("formDataHeaderPolicy")), !S.hasContentLength())
        try {
          const q = await Hn.promisify(c.getLength).call(c);
          Number.isFinite(q) && q >= 0 && S.setContentLength(q);
        } catch {
        }
    } else if (P.isBlob(c) || P.isFile(c))
      c.size && S.setContentType(c.type || "application/octet-stream"), S.setContentLength(c.size || 0), c = Xe.Readable.from(Mm(c));
    else if (c && !P.isStream(c)) {
      if (!Buffer.isBuffer(c)) if (P.isArrayBuffer(c))
        c = Buffer.from(new Uint8Array(c));
      else if (P.isString(c))
        c = Buffer.from(c, "utf-8");
      else
        return a(
          new N(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            N.ERR_BAD_REQUEST,
            t
          )
        );
      if (S.setContentLength(c.length, !1), A > -1 && c.length > A)
        return a(
          new N(
            "Request body larger than maxBodyLength limit",
            N.ERR_BAD_REQUEST,
            t
          )
        );
    }
    const I = P.toFiniteNumber(S.getContentLength());
    P.isArray(b) ? (x = b[0], k = b[1]) : x = k = b, c && (w || x) && (P.isStream(c) || (c = Xe.Readable.from(c, { objectMode: !1 })), c = Xe.pipeline(
      [
        c,
        new Fp({
          maxRate: P.toFiniteNumber(x)
        })
      ],
      P.noop
    ), w && c.on(
      "progress",
      Kp(
        c,
        Is(
          I,
          yr(Cs(w), !1, 3)
        )
      )
    ));
    let G;
    const W = i("auth");
    if (W) {
      const q = P.getSafeProp(W, "username") || "", U = P.getSafeProp(W, "password") || "";
      G = q + ":" + U;
    }
    if (!G && (R.username || R.password)) {
      const q = Gp(R.username), U = Gp(R.password);
      G = q + ":" + U;
    }
    G && S.delete("authorization");
    let ce;
    try {
      ce = Ac(
        R.pathname + R.search,
        i("params"),
        i("paramsSerializer")
      ).replace(/^\?/, "");
    } catch (q) {
      return a(
        N.from(q, N.ERR_BAD_REQUEST, t, null, null, {
          url: i("url"),
          exists: !0
        })
      );
    }
    S.set(
      "Accept-Encoding",
      P.hasOwnProp(o, "advertiseZstdAcceptEncoding") && o.advertiseZstdAcceptEncoding === !0 ? B0 : Bm,
      !1
    );
    const le = Object.assign(/* @__PURE__ */ Object.create(null), {
      path: ce,
      method: E,
      headers: Ec(S),
      agents: { http: h, https: g },
      auth: G,
      protocol: _,
      family: l,
      beforeRedirect: tw,
      beforeRedirects: /* @__PURE__ */ Object.create(null),
      http2Options: m
    });
    if (!P.isUndefined(u) && (le.lookup = u), $) {
      if (typeof $ != "string")
        return a(
          new N("socketPath must be a string", N.ERR_BAD_OPTION_VALUE, t)
        );
      const q = i("allowedSocketPaths");
      if (q != null) {
        const U = Array.isArray(q) ? q : [q], ue = Xu($);
        if (!U.some(
          (ae) => typeof ae == "string" && Xu(ae) === ue
        ))
          return a(
            new N(
              `socketPath "${$}" is not permitted by allowedSocketPaths`,
              N.ERR_BAD_OPTION_VALUE,
              t
            )
          );
      }
      le.socketPath = $;
    } else
      le.hostname = R.hostname.startsWith("[") ? R.hostname.slice(1, -1) : R.hostname, le.port = R.port, Gm(
        le,
        y,
        _ + "//" + R.hostname + (R.port ? ":" + R.port : "") + le.path,
        !1,
        g,
        h
      );
    let et, ft = !1, Ue = !1;
    const re = Vc.test(le.protocol);
    if (le.agent == null && (le.agent = re ? g : h), L)
      et = ow;
    else {
      const q = i("transport");
      if (q)
        et = q;
      else if (O === 0)
        et = re ? Js : Ws, ft = !0;
      else {
        Ue = !0, le.sensitiveHeaders = [], O && (le.maxRedirects = O);
        const U = i("beforeRedirect");
        if (U && (le.beforeRedirects.config = U), G) {
          const we = R.origin, ae = G;
          le.beforeRedirects.auth = function(ke) {
            try {
              new URL(ke.href).origin === we && (ke.auth = ae);
            } catch {
            }
          };
        }
        const ue = i("sensitiveHeaders");
        if (ue != null) {
          if (!P.isArray(ue))
            return a(
              new N(
                "sensitiveHeaders must be an array of strings",
                N.ERR_BAD_OPTION_VALUE,
                t
              )
            );
          const we = /* @__PURE__ */ new Set();
          for (const ae of ue) {
            if (!P.isString(ae))
              return a(
                new N(
                  "sensitiveHeaders must be an array of strings",
                  N.ERR_BAD_OPTION_VALUE,
                  t
                )
              );
            we.add(ae.toLowerCase());
          }
          we.size && (le.sensitiveHeaders = Array.from(we), le.beforeRedirects.sensitiveHeaders = function(Oe, ke) {
            rw(Oe, ke) || nw(Oe.headers, we);
          });
        }
        et = re ? G0 : H0;
      }
    }
    A > -1 ? le.maxBodyLength = A : le.maxBodyLength = 1 / 0, le.insecureHTTPParser = !!i("insecureHTTPParser"), T = et.request(le, function(U) {
      if (D(), T.destroyed) return;
      const ue = [U], we = P.toFiniteNumber(U.headers["content-length"]);
      if (d || k) {
        const xe = new Fp({
          maxRate: P.toFiniteNumber(k)
        });
        d && xe.on(
          "progress",
          Kp(
            xe,
            Is(
              we,
              yr(Cs(d), !0, 3)
            )
          )
        ), ue.push(xe);
      }
      let ae = U;
      const Oe = U.req || T;
      if (X !== !1 && U.headers["content-encoding"])
        switch ((E === "HEAD" || U.statusCode === 204) && delete U.headers["content-encoding"], (U.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            ue.push(Pt.createUnzip(zp)), delete U.headers["content-encoding"];
            break;
          case "deflate":
            ue.push(new R0()), ue.push(Pt.createUnzip(zp)), delete U.headers["content-encoding"];
            break;
          case "br":
            qm && (ue.push(Pt.createBrotliDecompress(q0)), delete U.headers["content-encoding"]);
            break;
          case "zstd":
            Vm && (ue.push(Pt.createZstdDecompress(V0)), delete U.headers["content-encoding"]);
            break;
        }
      ae = ue.length > 1 ? Xe.pipeline(ue, P.noop) : ue[0];
      const ke = {
        status: U.statusCode,
        statusText: U.statusMessage,
        headers: new Ve(U.headers),
        config: t,
        request: Oe
      };
      if (v === "stream") {
        if (M > -1) {
          const xe = M, Be = ae;
          async function* $t() {
            let Ne = 0;
            for await (const rn of Be) {
              if (Ne += rn.length, Ne > xe)
                throw new N(
                  "maxContentLength size of " + xe + " exceeded",
                  N.ERR_BAD_RESPONSE,
                  t,
                  Oe
                );
              yield rn;
            }
          }
          ae = Xe.Readable.from($t(), {
            objectMode: !1
          });
        }
        ke.data = ae, rr(r, a, ke);
      } else {
        const xe = [];
        let Be = 0;
        ae.on("data", function(Ne) {
          xe.push(Ne), Be += Ne.length, M > -1 && Be > M && (J = !0, ae.destroy(), j(
            new N(
              "maxContentLength size of " + M + " exceeded",
              N.ERR_BAD_RESPONSE,
              t,
              Oe
            )
          ));
        }), ae.on("aborted", function() {
          if (J)
            return;
          const Ne = new N(
            "stream has been aborted",
            N.ERR_BAD_RESPONSE,
            t,
            Oe,
            ke
          );
          ae.destroy(Ne), a(Ne);
        }), ae.on("error", function(Ne) {
          J || a(N.from(Ne, null, t, Oe, ke));
        }), ae.on("end", function() {
          try {
            let Ne = xe.length === 1 ? xe[0] : Buffer.concat(xe);
            v !== "arraybuffer" && (Ne = Ne.toString(f), (!f || f === "utf8") && (Ne = P.stripBOM(Ne))), ke.data = Ne;
          } catch (Ne) {
            return a(N.from(Ne, null, t, ke.request, ke));
          }
          rr(r, a, ke);
        });
      }
      Z.once("abort", (xe) => {
        ae.destroyed || (ae.emit("error", xe), ae.destroy());
      });
    }), Z.once("abort", (q) => {
      T.close ? T.close() : T.destroy(q);
    }), T.on("error", function(U) {
      a(N.from(U, null, t, T));
    });
    const Ae = /* @__PURE__ */ new Set();
    if (T.on("socket", function(U) {
      typeof U.setKeepAlive == "function" && U.setKeepAlive(!0, 1e3 * 60), U[qp] || (U.on("error", function(we) {
        const ae = U[La];
        ae && !ae.destroyed && ae.destroy(we);
      }), U[qp] = !0), U[La] = T, Ae.add(U);
    }), T.once("close", function() {
      D();
      for (const U of Ae)
        U[La] === T && (U[La] = null);
      Ae.clear();
    }), i("timeout")) {
      const q = parseInt(i("timeout"), 10);
      if (Number.isNaN(q)) {
        j(
          new N(
            "error trying to parse `config.timeout` to int",
            N.ERR_BAD_OPTION_VALUE,
            t,
            T
          )
        );
        return;
      }
      const U = function() {
        C || j(B());
      };
      ft && q > 0 && (F = setTimeout(U, q)), T.setTimeout(q, U);
    } else
      T.setTimeout(0);
    if (P.isStream(c)) {
      let q = !1, U = !1;
      c.on("end", () => {
        q = !0;
      }), c.once("error", (we) => {
        U = !0, T.destroy(we);
      }), c.on("close", () => {
        !q && !U && j(new Fn("Request stream has been aborted", t, T));
      });
      let ue = c;
      if (A > -1 && !Ue) {
        const we = A;
        let ae = 0;
        ue = Xe.pipeline(
          [
            c,
            new Xe.Transform({
              transform(Oe, ke, xe) {
                if (ae += Oe.length, ae > we)
                  return xe(
                    new N(
                      "Request body larger than maxBodyLength limit",
                      N.ERR_BAD_REQUEST,
                      t,
                      T
                    )
                  );
                xe(null, Oe);
              }
            })
          ],
          P.noop
        ), ue.on("error", (Oe) => {
          T.destroyed || T.destroy(Oe);
        });
      }
      ue.pipe(T);
    } else
      c && T.write(c), T.end();
  });
}, lw = Ce.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ce.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ce.origin),
  Ce.navigator && /(msie|trident)/i.test(Ce.navigator.userAgent)
) : () => !0, uw = Ce.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, s, i) {
      if (typeof document > "u") return;
      const o = [`${e}=${encodeURIComponent(t)}`];
      P.isNumber(n) && o.push(`expires=${new Date(n).toUTCString()}`), P.isString(r) && o.push(`path=${r}`), P.isString(a) && o.push(`domain=${a}`), s === !0 && o.push("secure"), P.isString(i) && o.push(`SameSite=${i}`), document.cookie = o.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), a = r.indexOf("=");
        if (a !== -1 && r.slice(0, a) === e)
          try {
            return decodeURIComponent(r.slice(a + 1));
          } catch {
            return r.slice(a + 1);
          }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
), Jp = (e) => e instanceof Ve ? { ...e } : e;
function Mn(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(l, p, m, h) {
    return P.isPlainObject(l) && P.isPlainObject(p) ? P.merge.call({ caseless: h }, l, p) : P.isPlainObject(p) ? P.merge({}, p) : P.isArray(p) ? p.slice() : p;
  }
  function a(l, p, m, h) {
    if (P.isUndefined(p)) {
      if (!P.isUndefined(l))
        return r(void 0, l, m, h);
    } else return r(l, p, m, h);
  }
  function s(l, p) {
    if (!P.isUndefined(p))
      return r(void 0, p);
  }
  function i(l, p) {
    if (P.isUndefined(p)) {
      if (!P.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, p);
  }
  function o(l) {
    const p = P.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!P.isUndefined(p))
      if (P.isPlainObject(p)) {
        if (P.hasOwnProp(p, l))
          return p[l];
      } else
        return;
    const m = P.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (P.isPlainObject(m) && P.hasOwnProp(m, l))
      return m[l];
  }
  function c(l, p, m) {
    if (P.hasOwnProp(t, m))
      return r(l, p);
    if (P.hasOwnProp(e, m))
      return r(void 0, l);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, p, m) => a(Jp(l), Jp(p), m, !0)
  };
  return P.forEach(Object.keys({ ...e, ...t }), function(p) {
    if (p === "__proto__" || p === "constructor" || p === "prototype") return;
    const m = P.hasOwnProp(u, p) ? u[p] : a, h = P.hasOwnProp(e, p) ? e[p] : void 0, g = P.hasOwnProp(t, p) ? t[p] : void 0, y = m(h, g, p);
    P.isUndefined(y) && m !== c || (n[p] = y);
  }), P.hasOwnProp(t, "validateStatus") && P.isUndefined(t.validateStatus) && o("validateStatusUndefinedResolves") === !1 && (P.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const pw = ["content-type", "content-length"];
function dw(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, a]) => {
    pw.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const fw = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Km(e) {
  const t = Mn({}, e), n = (m) => P.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let a = n("withXSRFToken");
  const s = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let o = n("headers");
  const c = n("auth"), u = n("baseURL"), l = n("allowAbsoluteUrls"), p = n("url");
  if (t.headers = o = Ve.from(o), t.url = Ac(
    jc(u, p, l, t),
    n("params"),
    n("paramsSerializer")
  ), c) {
    const m = P.getSafeProp(c, "username") || "", h = P.getSafeProp(c, "password") || "";
    try {
      o.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (h ? fw(h) : ""))
      );
    } catch (g) {
      throw N.from(g, N.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (P.isFormData(r) && (Ce.hasStandardBrowserEnv || Ce.hasStandardBrowserWebWorkerEnv || P.isReactNative(r) ? o.setContentType(void 0) : P.isFunction(r.getHeaders) && dw(o, r.getHeaders(), n("formDataHeaderPolicy"))), Ce.hasStandardBrowserEnv && (P.isFunction(a) && (a = a(t)), a === !0 || a == null && lw(t.url))) {
    const h = s && i && uw.read(i);
    h && o.set(s, h);
  }
  return t;
}
const mw = typeof XMLHttpRequest < "u", hw = mw && function(e) {
  return new Promise(function(n, r) {
    const a = Km(e);
    let s = a.data;
    const i = Ve.from(a.headers).normalize();
    let { responseType: o, onUploadProgress: c, onDownloadProgress: u } = a, l, p, m, h, g;
    function y() {
      h && h(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(l), a.signal && a.signal.removeEventListener("abort", l);
    }
    let v = new XMLHttpRequest();
    v.open(a.method.toUpperCase(), a.url, !0), v.timeout = a.timeout;
    function f() {
      if (!v)
        return;
      const E = Ve.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), A = {
        data: !o || o === "text" || o === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: E,
        config: e,
        request: v
      };
      rr(
        function(X) {
          n(X), y();
        },
        function(X) {
          r(X), y();
        },
        A
      ), v = null;
    }
    "onloadend" in v ? v.onloadend = f : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.startsWith("file:")) || setTimeout(f);
    }, v.onabort = function() {
      v && (r(new N("Request aborted", N.ECONNABORTED, e, v)), y(), v = null);
    }, v.onerror = function(O) {
      const A = O && O.message ? O.message : "Network Error", M = new N(A, N.ERR_NETWORK, e, v);
      M.event = O || null, r(M), y(), v = null;
    }, v.ontimeout = function() {
      let O = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const A = a.transitional || ni;
      a.timeoutErrorMessage && (O = a.timeoutErrorMessage), r(
        new N(
          O,
          A.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED,
          e,
          v
        )
      ), y(), v = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in v && P.forEach(Ec(i), function(O, A) {
      v.setRequestHeader(A, O);
    }), P.isUndefined(a.withCredentials) || (v.withCredentials = !!a.withCredentials), o && o !== "json" && (v.responseType = a.responseType), u && ([m, g] = yr(u, !0), v.addEventListener("progress", m)), c && v.upload && ([p, h] = yr(c), v.upload.addEventListener("progress", p), v.upload.addEventListener("loadend", h)), (a.cancelToken || a.signal) && (l = (E) => {
      v && (r(!E || E.type ? new Fn(null, e, v) : E), v.abort(), y(), v = null);
    }, a.cancelToken && a.cancelToken.subscribe(l), a.signal && (a.signal.aborted ? l() : a.signal.addEventListener("abort", l)));
    const $ = Lm(a.url);
    if ($ && !Ce.protocols.includes($)) {
      r(
        new N(
          "Unsupported protocol " + $ + ":",
          N.ERR_BAD_REQUEST,
          e
        )
      ), y();
      return;
    }
    v.send(s || null);
  });
}, vw = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const a = function(c) {
    if (!r) {
      r = !0, i();
      const u = c instanceof Error ? c : this.reason;
      n.abort(
        u instanceof N ? u : new Fn(u instanceof Error ? u.message : u)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, a(new N(`timeout of ${t}ms exceeded`, N.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((c) => {
      c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
    }), e = null);
  };
  e.forEach((c) => c.addEventListener("abort", a, { once: !0 }));
  const { signal: o } = n;
  return o.unsubscribe = () => P.asap(i), o;
}, yw = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, gw = async function* (e, t) {
  for await (const n of bw(e))
    yield* yw(n, t);
}, bw = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Xp = (e, t, n, r) => {
  const a = gw(e, t);
  let s = 0, i, o = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream(
    {
      async pull(c) {
        try {
          const { done: u, value: l } = await a.next();
          if (u) {
            o(), c.close();
            return;
          }
          let p = l.byteLength;
          if (n) {
            let m = s += p;
            n(m);
          }
          c.enqueue(new Uint8Array(l));
        } catch (u) {
          throw o(u), u;
        }
      },
      cancel(c) {
        return o(c), a.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Yp = 64 * 1024, { isFunction: Ma } = P, $w = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Zp = (e) => {
  if (!P.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Qp = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, _w = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, ww = (e) => {
  const t = P.global !== void 0 && P.global !== null ? P.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = P.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: a, Request: s, Response: i } = e, o = a ? Ma(a) : typeof fetch == "function", c = Ma(s), u = Ma(i);
  if (!o)
    return !1;
  const l = o && Ma(n), p = o && (typeof r == "function" ? /* @__PURE__ */ ((f) => ($) => f.encode($))(new r()) : async (f) => new Uint8Array(await new s(f).arrayBuffer())), m = c && l && Qp(() => {
    let f = !1;
    const $ = new s(Ce.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }), E = $.headers.has("Content-Type");
    return $.body != null && $.body.cancel(), f && !E;
  }), h = u && l && Qp(() => P.isReadableStream(new i("").body)), g = {
    stream: h && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !g[f] && (g[f] = ($, E) => {
      let O = $ && $[f];
      if (O)
        return O.call($);
      throw new N(
        `Response type '${f}' is not supported`,
        N.ERR_NOT_SUPPORT,
        E
      );
    });
  });
  const y = async (f) => {
    if (f == null)
      return 0;
    if (P.isBlob(f))
      return f.size;
    if (P.isSpecCompliantForm(f))
      return (await new s(Ce.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (P.isArrayBufferView(f) || P.isArrayBuffer(f))
      return f.byteLength;
    if (P.isURLSearchParams(f) && (f = f + ""), P.isString(f))
      return (await p(f)).byteLength;
  }, v = async (f, $) => {
    const E = P.toFiniteNumber(f.getContentLength());
    return E ?? y($);
  };
  return async (f) => {
    let {
      url: $,
      method: E,
      data: O,
      signal: A,
      cancelToken: M,
      timeout: X,
      onDownloadProgress: C,
      onUploadProgress: J,
      responseType: T,
      headers: F,
      withCredentials: L = "same-origin",
      fetchOptions: Z,
      maxContentLength: j,
      maxBodyLength: D
    } = Km(f);
    const B = P.isNumber(j) && j > -1, z = P.isNumber(D) && D > -1, Q = (x) => P.hasOwnProp(f, x) ? f[x] : void 0;
    let H = a || fetch;
    T = T ? (T + "").toLowerCase() : "text";
    let R = vw(
      [A, M && M.toAbortSignal()],
      X
    ), _ = null;
    const S = R && R.unsubscribe && (() => {
      R.unsubscribe();
    });
    let w, d = null;
    const b = () => new N(
      "Request body larger than maxBodyLength limit",
      N.ERR_BAD_REQUEST,
      f,
      _
    );
    try {
      let x;
      const k = Q("auth");
      if (k) {
        const re = P.getSafeProp(k, "username") || "", Ae = P.getSafeProp(k, "password") || "";
        x = {
          username: re,
          password: Ae
        };
      }
      if (_w($)) {
        const re = new URL($, Ce.origin);
        if (!x && (re.username || re.password)) {
          const Ae = Zp(re.username), q = Zp(re.password);
          x = {
            username: Ae,
            password: q
          };
        }
        (re.username || re.password) && (re.username = "", re.password = "", $ = re.href);
      }
      if (x && (F.delete("authorization"), F.set(
        "Authorization",
        "Basic " + btoa($w((x.username || "") + ":" + (x.password || "")))
      )), B && typeof $ == "string" && $.startsWith("data:") && zm($) > j)
        throw new N(
          "maxContentLength size of " + j + " exceeded",
          N.ERR_BAD_RESPONSE,
          f,
          _
        );
      if (z && E !== "get" && E !== "head") {
        const re = await y(O);
        if (typeof re == "number" && isFinite(re) && (w = re, re > D))
          throw b();
      }
      const I = z && (P.isReadableStream(O) || P.isStream(O)), G = (re, Ae, q) => Xp(
        re,
        Yp,
        (U) => {
          if (z && U > D)
            throw d = b();
          Ae && Ae(U);
        },
        q
      );
      if (m && E !== "get" && E !== "head" && (J || I)) {
        if (w = w ?? await v(F, O), w !== 0 || I) {
          let re = new s($, {
            method: "POST",
            body: O,
            duplex: "half"
          }), Ae;
          if (P.isFormData(O) && (Ae = re.headers.get("content-type")) && F.setContentType(Ae), re.body) {
            const [q, U] = J && Is(
              w,
              yr(Cs(J))
            ) || [];
            O = G(re.body, q, U);
          }
        }
      } else if (I && !c && l && E !== "get" && E !== "head")
        O = G(O);
      else if (I && c && !m && E !== "get" && E !== "head")
        throw new N(
          "Stream request bodies are not supported by the current fetch implementation",
          N.ERR_NOT_SUPPORT,
          f,
          _
        );
      P.isString(L) || (L = L ? "include" : "omit");
      const W = c && "credentials" in s.prototype;
      if (P.isFormData(O)) {
        const re = F.getContentType();
        re && /^multipart\/form-data/i.test(re) && !/boundary=/i.test(re) && F.delete("content-type");
      }
      F.set("User-Agent", "axios/" + va, !1);
      const ce = {
        ...Z,
        signal: R,
        method: E.toUpperCase(),
        headers: Ec(F.normalize()),
        body: O,
        duplex: "half",
        credentials: W ? L : void 0
      };
      _ = c && new s($, ce);
      let le = await (c ? H(_, Z) : H($, ce));
      const et = Ve.from(le.headers);
      if (B) {
        const re = P.toFiniteNumber(et.getContentLength());
        if (re != null && re > j)
          throw new N(
            "maxContentLength size of " + j + " exceeded",
            N.ERR_BAD_RESPONSE,
            f,
            _
          );
      }
      const ft = h && (T === "stream" || T === "response");
      if (h && le.body && (C || B || ft && S)) {
        const re = {};
        ["status", "statusText", "headers"].forEach((ae) => {
          re[ae] = le[ae];
        });
        const Ae = P.toFiniteNumber(et.getContentLength()), [q, U] = C && Is(
          Ae,
          yr(Cs(C), !0)
        ) || [];
        let ue = 0;
        const we = (ae) => {
          if (B && (ue = ae, ue > j))
            throw new N(
              "maxContentLength size of " + j + " exceeded",
              N.ERR_BAD_RESPONSE,
              f,
              _
            );
          q && q(ae);
        };
        le = new i(
          Xp(le.body, Yp, we, () => {
            U && U(), S && S();
          }),
          re
        );
      }
      T = T || "text";
      let Ue = await g[P.findKey(g, T) || "text"](
        le,
        f
      );
      if (B && !h && !ft) {
        let re;
        if (Ue != null && (typeof Ue.byteLength == "number" ? re = Ue.byteLength : typeof Ue.size == "number" ? re = Ue.size : typeof Ue == "string" && (re = typeof r == "function" ? new r().encode(Ue).byteLength : Ue.length)), typeof re == "number" && re > j)
          throw new N(
            "maxContentLength size of " + j + " exceeded",
            N.ERR_BAD_RESPONSE,
            f,
            _
          );
      }
      return !ft && S && S(), await new Promise((re, Ae) => {
        rr(re, Ae, {
          data: Ue,
          headers: Ve.from(le.headers),
          status: le.status,
          statusText: le.statusText,
          config: f,
          request: _
        });
      });
    } catch (x) {
      if (S && S(), R && R.aborted && R.reason instanceof N) {
        const k = R.reason;
        throw k.config = f, _ && (k.request = _), x !== k && Object.defineProperty(k, "cause", {
          __proto__: null,
          value: x,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), k;
      }
      if (d)
        throw _ && !d.request && (d.request = _), d;
      if (x instanceof N)
        throw _ && !x.request && (x.request = _), x;
      if (x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message)) {
        const k = new N(
          "Network Error",
          N.ERR_NETWORK,
          f,
          _,
          x && x.response
        );
        throw Object.defineProperty(k, "cause", {
          __proto__: null,
          value: x.cause || x,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), k;
      }
      throw N.from(x, x && x.code, f, _, x && x.response);
    }
  };
}, xw = /* @__PURE__ */ new Map(), Wm = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: a } = t, s = [r, a, n];
  let i = s.length, o = i, c, u, l = xw;
  for (; o--; )
    c = s[o], u = l.get(c), u === void 0 && l.set(c, u = o ? /* @__PURE__ */ new Map() : ww(t)), l = u;
  return u;
};
Wm();
const Bc = {
  http: cw,
  xhr: hw,
  fetch: {
    get: Wm
  }
};
P.forEach(Bc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const ed = (e) => `- ${e}`, Ew = (e) => P.isFunction(e) || e === null || e === !1;
function Sw(e, t) {
  e = P.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, a;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let o;
    if (a = r, !Ew(r) && (a = Bc[(o = String(r)).toLowerCase()], a === void 0))
      throw new N(`Unknown adapter '${o}'`);
    if (a && (P.isFunction(a) || (a = a.get(t))))
      break;
    s[o || "#" + i] = a;
  }
  if (!a) {
    const i = Object.entries(s).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let o = n ? i.length > 1 ? `since :
` + i.map(ed).join(`
`) : " " + ed(i[0]) : "as no adapter specified";
    throw new N(
      "There is no suitable adapter to dispatch the request " + o,
      N.ERR_NOT_SUPPORT
    );
  }
  return a;
}
const Jm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Sw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Bc
};
function no(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Fn(null, e);
}
function td(e) {
  return no(e), e.headers = Ve.from(e.headers), e.data = Ki.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Jm.getAdapter(e.adapter || Ea.adapter, e)(e).then(
    function(r) {
      no(e), e.response = r;
      try {
        r.data = Ki.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = Ve.from(r.headers), r;
    },
    function(r) {
      if (!Tm(r) && (no(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Ki.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = Ve.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const ai = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ai[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nd = {};
ai.transitional = function(t, n, r) {
  function a(s, i) {
    return "[Axios v" + va + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, o) => {
    if (t === !1)
      throw new N(
        a(i, " has been removed" + (n ? " in " + n : "")),
        N.ERR_DEPRECATED
      );
    return n && !nd[i] && (nd[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, o) : !0;
  };
};
ai.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Pw(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new N("options must be an object", N.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      const o = e[s], c = o === void 0 || i(o, s, e);
      if (c !== !0)
        throw new N(
          "option " + s + " must be " + c,
          N.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new N("Unknown option " + s, N.ERR_BAD_OPTION);
  }
}
const fs = {
  assertOptions: Pw,
  validators: ai
}, nt = fs.validators;
let In = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Sp(),
      response: new Sp()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const s = (() => {
          if (!a.stack)
            return "";
          const i = a.stack.indexOf(`
`);
          return i === -1 ? "" : a.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = s;
          else if (s) {
            const i = s.indexOf(`
`), o = i === -1 ? -1 : s.indexOf(`
`, i + 1), c = o === -1 ? "" : s.slice(o + 1);
            String(r.stack).endsWith(c) || (r.stack += `
` + s);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Mn(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && fs.assertOptions(
      r,
      {
        silentJSONParsing: nt.transitional(nt.boolean),
        forcedJSONParsing: nt.transitional(nt.boolean),
        clarifyTimeoutError: nt.transitional(nt.boolean),
        legacyInterceptorReqResOrdering: nt.transitional(nt.boolean),
        advertiseZstdAcceptEncoding: nt.transitional(nt.boolean),
        validateStatusUndefinedResolves: nt.transitional(nt.boolean)
      },
      !1
    ), a != null && (P.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : fs.assertOptions(
      a,
      {
        encode: nt.function,
        serialize: nt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), fs.assertOptions(
      n,
      {
        baseUrl: nt.spelling("baseURL"),
        withXsrfToken: nt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && P.merge(s.common, s[n.method]);
    s && P.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (g) => {
      delete s[g];
    }), n.headers = Ve.concat(i, s);
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      if (typeof y.runWhen == "function" && y.runWhen(n) === !1)
        return;
      c = c && y.synchronous;
      const v = n.transitional || ni;
      v && v.legacyInterceptorReqResOrdering ? o.unshift(y.fulfilled, y.rejected) : o.push(y.fulfilled, y.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, p = 0, m;
    if (!c) {
      const g = [td.bind(this), void 0];
      for (g.unshift(...o), g.push(...u), m = g.length, l = Promise.resolve(n); p < m; )
        l = l.then(g[p++], g[p++]);
      return l;
    }
    m = o.length;
    let h = n;
    for (; p < m; ) {
      const g = o[p++], y = o[p++];
      try {
        h = g(h);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      l = td.call(this, h);
    } catch (g) {
      return Promise.reject(g);
    }
    for (p = 0, m = u.length; p < m; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(t) {
    t = Mn(this.defaults, t);
    const n = jc(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Ac(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  In.prototype[t] = function(n, r) {
    return this.request(
      Mn(r || {}, {
        method: t,
        url: n,
        data: r && P.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
P.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(s, i, o) {
      return this.request(
        Mn(o || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: i
        })
      );
    };
  }
  In.prototype[t] = n(), t !== "query" && (In.prototype[t + "Form"] = n(!0));
});
let Rw = class Xm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const i = new Promise((o) => {
        r.subscribe(o), s = o;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, o) {
      r.reason || (r.reason = new Fn(s, i, o), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Xm(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function Ow(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Aw(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Ko = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ko).forEach(([e, t]) => {
  Ko[t] = e;
});
function Ym(e) {
  const t = new In(e), n = Wf(In.prototype.request, t);
  return P.extend(n, In.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Ym(Mn(e, a));
  }, n;
}
const _e = Ym(Ea);
_e.Axios = In;
_e.CanceledError = Fn;
_e.CancelToken = Rw;
_e.isCancel = Tm;
_e.VERSION = va;
_e.toFormData = ti;
_e.AxiosError = N;
_e.Cancel = _e.CanceledError;
_e.all = function(t) {
  return Promise.all(t);
};
_e.spread = Ow;
_e.isAxiosError = Aw;
_e.mergeConfig = Mn;
_e.AxiosHeaders = Ve;
_e.formToJSON = (e) => Am(P.isHTMLForm(e) ? new FormData(e) : e);
_e.getAdapter = Jm.getAdapter;
_e.HttpStatusCode = Ko;
_e.default = _e;
const {
  Axios: WF,
  AxiosError: JF,
  CanceledError: XF,
  isCancel: YF,
  CancelToken: ZF,
  VERSION: QF,
  all: eL,
  Cancel: tL,
  isAxiosError: nL,
  spread: rL,
  toFormData: aL,
  AxiosHeaders: sL,
  HttpStatusCode: iL,
  formToJSON: oL,
  getAdapter: cL,
  mergeConfig: lL,
  create: uL
} = _e, Un = (e) => {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
}, Zm = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Qm = 1e6, Tw = (e) => e >= "0" && e <= "9";
function eh(e) {
  if (e === "0")
    return !0;
  if (/^[1-9]\d*$/.test(e)) {
    const t = Number.parseInt(e, 10);
    return t <= Number.MAX_SAFE_INTEGER && t <= Qm;
  }
  return !1;
}
function ro(e, t) {
  return Zm.has(e) ? !1 : (e && eh(e) ? t.push(Number.parseInt(e, 10)) : t.push(e), !0);
}
function jw(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got ${typeof e}`);
  const t = [];
  let n = "", r = "start", a = !1, s = 0;
  for (const i of e) {
    if (s++, a) {
      n += i, a = !1;
      continue;
    }
    if (i === "\\") {
      if (r === "index")
        throw new Error(`Invalid character '${i}' in an index at position ${s}`);
      if (r === "indexEnd")
        throw new Error(`Invalid character '${i}' after an index at position ${s}`);
      a = !0, r = r === "start" ? "property" : r;
      continue;
    }
    switch (i) {
      case ".": {
        if (r === "index")
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd") {
          r = "property";
          break;
        }
        if (!ro(n, t))
          return [];
        n = "", r = "property";
        break;
      }
      case "[": {
        if (r === "index")
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd") {
          r = "index";
          break;
        }
        if (r === "property" || r === "start") {
          if ((n || r === "property") && !ro(n, t))
            return [];
          n = "";
        }
        r = "index";
        break;
      }
      case "]": {
        if (r === "index") {
          if (n === "")
            n = (t.pop() || "") + "[]", r = "property";
          else {
            const o = Number.parseInt(n, 10);
            !Number.isNaN(o) && Number.isFinite(o) && o >= 0 && o <= Number.MAX_SAFE_INTEGER && o <= Qm && n === String(o) ? t.push(o) : t.push(n), n = "", r = "indexEnd";
          }
          break;
        }
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        n += i;
        break;
      }
      default: {
        if (r === "index" && !Tw(i))
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        r === "start" && (r = "property"), n += i;
      }
    }
  }
  switch (a && (n += "\\"), r) {
    case "property": {
      if (!ro(n, t))
        return [];
      break;
    }
    case "index":
      throw new Error("Index was not closed");
    case "start": {
      t.push("");
      break;
    }
  }
  return t;
}
function si(e) {
  if (typeof e == "string")
    return jw(e);
  if (Array.isArray(e)) {
    const t = [];
    for (const [n, r] of e.entries()) {
      if (typeof r != "string" && typeof r != "number")
        throw new TypeError(`Expected a string or number for path segment at index ${n}, got ${typeof r}`);
      if (typeof r == "number" && !Number.isFinite(r))
        throw new TypeError(`Path segment at index ${n} must be a finite number, got ${r}`);
      if (Zm.has(r))
        return [];
      typeof r == "string" && eh(r) ? t.push(Number.parseInt(r, 10)) : t.push(r);
    }
    return t;
  }
  return [];
}
function rd(e, t, n) {
  if (!Un(e) || typeof t != "string" && !Array.isArray(t))
    return n === void 0 ? e : n;
  const r = si(t);
  if (r.length === 0)
    return n;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (e = e[s], e == null) {
      if (a !== r.length - 1)
        return n;
      break;
    }
  }
  return e === void 0 ? n : e;
}
function Ua(e, t, n) {
  if (!Un(e) || typeof t != "string" && !Array.isArray(t))
    return e;
  const r = e, a = si(t);
  if (a.length === 0)
    return e;
  for (let s = 0; s < a.length; s++) {
    const i = a[s];
    if (s === a.length - 1)
      e[i] = n;
    else if (!Un(e[i])) {
      const c = typeof a[s + 1] == "number";
      e[i] = c ? [] : {};
    }
    e = e[i];
  }
  return r;
}
function kw(e, t) {
  if (!Un(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = si(t);
  if (n.length === 0)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (r === n.length - 1)
      return Object.hasOwn(e, a) ? (delete e[a], !0) : !1;
    if (e = e[a], !Un(e))
      return !1;
  }
}
function ao(e, t) {
  if (!Un(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = si(t);
  if (n.length === 0)
    return !1;
  for (const r of n) {
    if (!Un(e) || !(r in e))
      return !1;
    e = e[r];
  }
  return !0;
}
const mn = yn.homedir(), Hc = yn.tmpdir(), { env: ar } = Ie, Nw = (e) => {
  const t = ne.join(mn, "Library");
  return {
    data: ne.join(t, "Application Support", e),
    config: ne.join(t, "Preferences", e),
    cache: ne.join(t, "Caches", e),
    log: ne.join(t, "Logs", e),
    temp: ne.join(Hc, e)
  };
}, Iw = (e) => {
  const t = ar.APPDATA || ne.join(mn, "AppData", "Roaming"), n = ar.LOCALAPPDATA || ne.join(mn, "AppData", "Local");
  return {
    // Data/config/cache/log are invented by me as Windows isn't opinionated about this
    data: ne.join(n, e, "Data"),
    config: ne.join(t, e, "Config"),
    cache: ne.join(n, e, "Cache"),
    log: ne.join(n, e, "Log"),
    temp: ne.join(Hc, e)
  };
}, Cw = (e) => {
  const t = ne.basename(mn);
  return {
    data: ne.join(ar.XDG_DATA_HOME || ne.join(mn, ".local", "share"), e),
    config: ne.join(ar.XDG_CONFIG_HOME || ne.join(mn, ".config"), e),
    cache: ne.join(ar.XDG_CACHE_HOME || ne.join(mn, ".cache"), e),
    // https://wiki.debian.org/XDGBaseDirectorySpecification#state
    log: ne.join(ar.XDG_STATE_HOME || ne.join(mn, ".local", "state"), e),
    temp: ne.join(Hc, t, e)
  };
};
function Dw(e, { suffix: t = "nodejs" } = {}) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got ${typeof e}`);
  return t && (e += `-${t}`), Ie.platform === "darwin" ? Nw(e) : Ie.platform === "win32" ? Iw(e) : Cw(e);
}
const an = (e, t) => {
  const { onError: n } = t;
  return function(...a) {
    return e.apply(void 0, a).catch(n);
  };
}, Jt = (e, t) => {
  const { onError: n } = t;
  return function(...a) {
    try {
      return e.apply(void 0, a);
    } catch (s) {
      return n(s);
    }
  };
}, Fw = 250, sn = (e, t) => {
  const { isRetriable: n } = t;
  return function(a) {
    const { timeout: s } = a, i = a.interval ?? Fw, o = Date.now() + s;
    return function c(...u) {
      return e.apply(void 0, u).catch((l) => {
        if (!n(l) || Date.now() >= o)
          throw l;
        const p = Math.round(i * Math.random());
        return p > 0 ? new Promise((h) => setTimeout(h, p)).then(() => c.apply(void 0, u)) : c.apply(void 0, u);
      });
    };
  };
}, on = (e, t) => {
  const { isRetriable: n } = t;
  return function(a) {
    const { timeout: s } = a, i = Date.now() + s;
    return function(...c) {
      for (; ; )
        try {
          return e.apply(void 0, c);
        } catch (u) {
          if (!n(u) || Date.now() >= i)
            throw u;
          continue;
        }
    };
  };
}, sr = {
  /* API */
  isChangeErrorOk: (e) => {
    if (!sr.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "ENOSYS" || !Lw && (t === "EINVAL" || t === "EPERM");
  },
  isNodeError: (e) => e instanceof Error,
  isRetriableError: (e) => {
    if (!sr.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "EMFILE" || t === "ENFILE" || t === "EAGAIN" || t === "EBUSY" || t === "EACCESS" || t === "EACCES" || t === "EACCS" || t === "EPERM";
  },
  onChangeError: (e) => {
    if (!sr.isNodeError(e))
      throw e;
    if (!sr.isChangeErrorOk(e))
      throw e;
  }
}, za = {
  onError: sr.onChangeError
}, _t = {
  onError: () => {
  }
}, Lw = Ie.getuid ? !Ie.getuid() : !1, rt = {
  isRetriable: sr.isRetriableError
}, it = {
  attempt: {
    /* ASYNC */
    chmod: an(tt(pe.chmod), za),
    chown: an(tt(pe.chown), za),
    close: an(tt(pe.close), _t),
    fsync: an(tt(pe.fsync), _t),
    mkdir: an(tt(pe.mkdir), _t),
    realpath: an(tt(pe.realpath), _t),
    stat: an(tt(pe.stat), _t),
    unlink: an(tt(pe.unlink), _t),
    /* SYNC */
    chmodSync: Jt(pe.chmodSync, za),
    chownSync: Jt(pe.chownSync, za),
    closeSync: Jt(pe.closeSync, _t),
    existsSync: Jt(pe.existsSync, _t),
    fsyncSync: Jt(pe.fsync, _t),
    mkdirSync: Jt(pe.mkdirSync, _t),
    realpathSync: Jt(pe.realpathSync, _t),
    statSync: Jt(pe.statSync, _t),
    unlinkSync: Jt(pe.unlinkSync, _t)
  },
  retry: {
    /* ASYNC */
    close: sn(tt(pe.close), rt),
    fsync: sn(tt(pe.fsync), rt),
    open: sn(tt(pe.open), rt),
    readFile: sn(tt(pe.readFile), rt),
    rename: sn(tt(pe.rename), rt),
    stat: sn(tt(pe.stat), rt),
    write: sn(tt(pe.write), rt),
    writeFile: sn(tt(pe.writeFile), rt),
    /* SYNC */
    closeSync: on(pe.closeSync, rt),
    fsyncSync: on(pe.fsyncSync, rt),
    openSync: on(pe.openSync, rt),
    readFileSync: on(pe.readFileSync, rt),
    renameSync: on(pe.renameSync, rt),
    statSync: on(pe.statSync, rt),
    writeSync: on(pe.writeSync, rt),
    writeFileSync: on(pe.writeFileSync, rt)
  }
}, Mw = "utf8", ad = 438, Uw = 511, zw = {}, qw = Ie.geteuid ? Ie.geteuid() : -1, Vw = Ie.getegid ? Ie.getegid() : -1, Bw = 1e3, Hw = !!Ie.getuid;
Ie.getuid && Ie.getuid();
const sd = 128, Gw = (e) => e instanceof Error && "code" in e, id = (e) => typeof e == "string", so = (e) => e === void 0, Kw = Ie.platform === "linux", th = Ie.platform === "win32", Gc = ["SIGHUP", "SIGINT", "SIGTERM"];
th || Gc.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
Kw && Gc.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
class Ww {
  /* CONSTRUCTOR */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.exited = !1, this.exit = (t) => {
      if (!this.exited) {
        this.exited = !0;
        for (const n of this.callbacks)
          n();
        t && (th && t !== "SIGINT" && t !== "SIGTERM" && t !== "SIGKILL" ? Ie.kill(Ie.pid, "SIGTERM") : Ie.kill(Ie.pid, t));
      }
    }, this.hook = () => {
      Ie.once("exit", () => this.exit());
      for (const t of Gc)
        try {
          Ie.once(t, () => this.exit(t));
        } catch {
        }
    }, this.register = (t) => (this.callbacks.add(t), () => {
      this.callbacks.delete(t);
    }), this.hook();
  }
}
const Jw = new Ww(), Xw = Jw.register, ot = {
  /* VARIABLES */
  store: {},
  // filePath => purge
  /* API */
  create: (e) => {
    const t = `000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6), a = `.tmp-${Date.now().toString().slice(-10)}${t}`;
    return `${e}${a}`;
  },
  get: (e, t, n = !0) => {
    const r = ot.truncate(t(e));
    return r in ot.store ? ot.get(e, t, n) : (ot.store[r] = n, [r, () => delete ot.store[r]]);
  },
  purge: (e) => {
    ot.store[e] && (delete ot.store[e], it.attempt.unlink(e));
  },
  purgeSync: (e) => {
    ot.store[e] && (delete ot.store[e], it.attempt.unlinkSync(e));
  },
  purgeSyncAll: () => {
    for (const e in ot.store)
      ot.purgeSync(e);
  },
  truncate: (e) => {
    const t = ne.basename(e);
    if (t.length <= sd)
      return e;
    const n = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(t);
    if (!n)
      return e;
    const r = t.length - sd;
    return `${e.slice(0, -t.length)}${n[1]}${n[2].slice(0, -r)}${n[3]}`;
  }
};
Xw(ot.purgeSyncAll);
function nh(e, t, n = zw) {
  if (id(n))
    return nh(e, t, { encoding: n });
  const a = { timeout: n.timeout ?? Bw };
  let s = null, i = null, o = null;
  try {
    const c = it.attempt.realpathSync(e), u = !!c;
    e = c || e, [i, s] = ot.get(e, n.tmpCreate || ot.create, n.tmpPurge !== !1);
    const l = Hw && so(n.chown), p = so(n.mode);
    if (u && (l || p)) {
      const m = it.attempt.statSync(e);
      m && (n = { ...n }, l && (n.chown = { uid: m.uid, gid: m.gid }), p && (n.mode = m.mode));
    }
    if (!u) {
      const m = ne.dirname(e);
      it.attempt.mkdirSync(m, {
        mode: Uw,
        recursive: !0
      });
    }
    o = it.retry.openSync(a)(i, "w", n.mode || ad), n.tmpCreated && n.tmpCreated(i), id(t) ? it.retry.writeSync(a)(o, t, 0, n.encoding || Mw) : so(t) || it.retry.writeSync(a)(o, t, 0, t.length, 0), n.fsync !== !1 && (n.fsyncWait !== !1 ? it.retry.fsyncSync(a)(o) : it.attempt.fsync(o)), it.retry.closeSync(a)(o), o = null, n.chown && (n.chown.uid !== qw || n.chown.gid !== Vw) && it.attempt.chownSync(i, n.chown.uid, n.chown.gid), n.mode && n.mode !== ad && it.attempt.chmodSync(i, n.mode);
    try {
      it.retry.renameSync(a)(i, e);
    } catch (m) {
      if (!Gw(m) || m.code !== "ENAMETOOLONG")
        throw m;
      it.retry.renameSync(a)(i, ot.truncate(e));
    }
    s(), i = null;
  } finally {
    o && it.attempt.closeSync(o), i && ot.purge(i);
  }
}
var Wo = { exports: {} }, rh = {}, Ct = {}, gr = {}, Ra = {}, de = {}, ga = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor($) {
      if (super(), !e.IDENTIFIER.test($))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = n;
  class r extends t {
    constructor($) {
      super(), this._items = typeof $ == "string" ? [$] : $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const $ = this._items[0];
      return $ === "" || $ === '""';
    }
    get str() {
      var $;
      return ($ = this._str) !== null && $ !== void 0 ? $ : this._str = this._items.reduce((E, O) => `${E}${O}`, "");
    }
    get names() {
      var $;
      return ($ = this._names) !== null && $ !== void 0 ? $ : this._names = this._items.reduce((E, O) => (O instanceof n && (E[O.str] = (E[O.str] || 0) + 1), E), {});
    }
  }
  e._Code = r, e.nil = new r("");
  function a(f, ...$) {
    const E = [f[0]];
    let O = 0;
    for (; O < $.length; )
      o(E, $[O]), E.push(f[++O]);
    return new r(E);
  }
  e._ = a;
  const s = new r("+");
  function i(f, ...$) {
    const E = [h(f[0])];
    let O = 0;
    for (; O < $.length; )
      E.push(s), o(E, $[O]), E.push(s, h(f[++O]));
    return c(E), new r(E);
  }
  e.str = i;
  function o(f, $) {
    $ instanceof r ? f.push(...$._items) : $ instanceof n ? f.push($) : f.push(p($));
  }
  e.addCodeArg = o;
  function c(f) {
    let $ = 1;
    for (; $ < f.length - 1; ) {
      if (f[$] === s) {
        const E = u(f[$ - 1], f[$ + 1]);
        if (E !== void 0) {
          f.splice($ - 1, 3, E);
          continue;
        }
        f[$++] = "+";
      }
      $++;
    }
  }
  function u(f, $) {
    if ($ === '""')
      return f;
    if (f === '""')
      return $;
    if (typeof f == "string")
      return $ instanceof n || f[f.length - 1] !== '"' ? void 0 : typeof $ != "string" ? `${f.slice(0, -1)}${$}"` : $[0] === '"' ? f.slice(0, -1) + $.slice(1) : void 0;
    if (typeof $ == "string" && $[0] === '"' && !(f instanceof n))
      return `"${f}${$.slice(1)}`;
  }
  function l(f, $) {
    return $.emptyStr() ? f : f.emptyStr() ? $ : i`${f}${$}`;
  }
  e.strConcat = l;
  function p(f) {
    return typeof f == "number" || typeof f == "boolean" || f === null ? f : h(Array.isArray(f) ? f.join(",") : f);
  }
  function m(f) {
    return new r(h(f));
  }
  e.stringify = m;
  function h(f) {
    return JSON.stringify(f).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = h;
  function g(f) {
    return typeof f == "string" && e.IDENTIFIER.test(f) ? new r(`.${f}`) : a`[${f}]`;
  }
  e.getProperty = g;
  function y(f) {
    if (typeof f == "string" && e.IDENTIFIER.test(f))
      return new r(`${f}`);
    throw new Error(`CodeGen: invalid export name: ${f}, use explicit $id name mapping`);
  }
  e.getEsmExportName = y;
  function v(f) {
    return new r(f.toString());
  }
  e.regexpCode = v;
})(ga);
var Jo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = ga;
  class n extends Error {
    constructor(u) {
      super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
    }
  }
  var r;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(r || (e.UsedValueState = r = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class a {
    constructor({ prefixes: u, parent: l } = {}) {
      this._names = {}, this._prefixes = u, this._parent = l;
    }
    toName(u) {
      return u instanceof t.Name ? u : this.name(u);
    }
    name(u) {
      return new t.Name(this._newName(u));
    }
    _newName(u) {
      const l = this._names[u] || this._nameGroup(u);
      return `${u}${l.index++}`;
    }
    _nameGroup(u) {
      var l, p;
      if (!((p = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || p === void 0) && p.has(u) || this._prefixes && !this._prefixes.has(u))
        throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
      return this._names[u] = { prefix: u, index: 0 };
    }
  }
  e.Scope = a;
  class s extends t.Name {
    constructor(u, l) {
      super(l), this.prefix = u;
    }
    setValue(u, { property: l, itemIndex: p }) {
      this.value = u, this.scopePath = (0, t._)`.${new t.Name(l)}[${p}]`;
    }
  }
  e.ValueScopeName = s;
  const i = (0, t._)`\n`;
  class o extends a {
    constructor(u) {
      super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? i : t.nil };
    }
    get() {
      return this._scope;
    }
    name(u) {
      return new s(u, this._newName(u));
    }
    value(u, l) {
      var p;
      if (l.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const m = this.toName(u), { prefix: h } = m, g = (p = l.key) !== null && p !== void 0 ? p : l.ref;
      let y = this._values[h];
      if (y) {
        const $ = y.get(g);
        if ($)
          return $;
      } else
        y = this._values[h] = /* @__PURE__ */ new Map();
      y.set(g, m);
      const v = this._scope[h] || (this._scope[h] = []), f = v.length;
      return v[f] = l.ref, m.setValue(l, { property: h, itemIndex: f }), m;
    }
    getValue(u, l) {
      const p = this._values[u];
      if (p)
        return p.get(l);
    }
    scopeRefs(u, l = this._values) {
      return this._reduceValues(l, (p) => {
        if (p.scopePath === void 0)
          throw new Error(`CodeGen: name "${p}" has no value`);
        return (0, t._)`${u}${p.scopePath}`;
      });
    }
    scopeCode(u = this._values, l, p) {
      return this._reduceValues(u, (m) => {
        if (m.value === void 0)
          throw new Error(`CodeGen: name "${m}" has no value`);
        return m.value.code;
      }, l, p);
    }
    _reduceValues(u, l, p = {}, m) {
      let h = t.nil;
      for (const g in u) {
        const y = u[g];
        if (!y)
          continue;
        const v = p[g] = p[g] || /* @__PURE__ */ new Map();
        y.forEach((f) => {
          if (v.has(f))
            return;
          v.set(f, r.Started);
          let $ = l(f);
          if ($) {
            const E = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            h = (0, t._)`${h}${E} ${f} = ${$};${this.opts._n}`;
          } else if ($ = m?.(f))
            h = (0, t._)`${h}${$}${this.opts._n}`;
          else
            throw new n(f);
          v.set(f, r.Completed);
        });
      }
      return h;
    }
  }
  e.ValueScope = o;
})(Jo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = ga, n = Jo;
  var r = ga;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return r._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return r.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return r.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return r.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return r.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return r.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return r.Name;
  } });
  var a = Jo;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return a.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return a.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return a.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return a.varKinds;
  } }), e.operators = {
    GT: new t._Code(">"),
    GTE: new t._Code(">="),
    LT: new t._Code("<"),
    LTE: new t._Code("<="),
    EQ: new t._Code("==="),
    NEQ: new t._Code("!=="),
    NOT: new t._Code("!"),
    OR: new t._Code("||"),
    AND: new t._Code("&&"),
    ADD: new t._Code("+")
  };
  class s {
    optimizeNodes() {
      return this;
    }
    optimizeNames(d, b) {
      return this;
    }
  }
  class i extends s {
    constructor(d, b, x) {
      super(), this.varKind = d, this.name = b, this.rhs = x;
    }
    render({ es5: d, _n: b }) {
      const x = d ? n.varKinds.var : this.varKind, k = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${x} ${this.name}${k};` + b;
    }
    optimizeNames(d, b) {
      if (d[this.name.str])
        return this.rhs && (this.rhs = j(this.rhs, d, b)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends s {
    constructor(d, b, x) {
      super(), this.lhs = d, this.rhs = b, this.sideEffects = x;
    }
    render({ _n: d }) {
      return `${this.lhs} = ${this.rhs};` + d;
    }
    optimizeNames(d, b) {
      if (!(this.lhs instanceof t.Name && !d[this.lhs.str] && !this.sideEffects))
        return this.rhs = j(this.rhs, d, b), this;
    }
    get names() {
      const d = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return Z(d, this.rhs);
    }
  }
  class c extends o {
    constructor(d, b, x, k) {
      super(d, x, k), this.op = b;
    }
    render({ _n: d }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + d;
    }
  }
  class u extends s {
    constructor(d) {
      super(), this.label = d, this.names = {};
    }
    render({ _n: d }) {
      return `${this.label}:` + d;
    }
  }
  class l extends s {
    constructor(d) {
      super(), this.label = d, this.names = {};
    }
    render({ _n: d }) {
      return `break${this.label ? ` ${this.label}` : ""};` + d;
    }
  }
  class p extends s {
    constructor(d) {
      super(), this.error = d;
    }
    render({ _n: d }) {
      return `throw ${this.error};` + d;
    }
    get names() {
      return this.error.names;
    }
  }
  class m extends s {
    constructor(d) {
      super(), this.code = d;
    }
    render({ _n: d }) {
      return `${this.code};` + d;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(d, b) {
      return this.code = j(this.code, d, b), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class h extends s {
    constructor(d = []) {
      super(), this.nodes = d;
    }
    render(d) {
      return this.nodes.reduce((b, x) => b + x.render(d), "");
    }
    optimizeNodes() {
      const { nodes: d } = this;
      let b = d.length;
      for (; b--; ) {
        const x = d[b].optimizeNodes();
        Array.isArray(x) ? d.splice(b, 1, ...x) : x ? d[b] = x : d.splice(b, 1);
      }
      return d.length > 0 ? this : void 0;
    }
    optimizeNames(d, b) {
      const { nodes: x } = this;
      let k = x.length;
      for (; k--; ) {
        const I = x[k];
        I.optimizeNames(d, b) || (D(d, I.names), x.splice(k, 1));
      }
      return x.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((d, b) => L(d, b.names), {});
    }
  }
  class g extends h {
    render(d) {
      return "{" + d._n + super.render(d) + "}" + d._n;
    }
  }
  class y extends h {
  }
  class v extends g {
  }
  v.kind = "else";
  class f extends g {
    constructor(d, b) {
      super(b), this.condition = d;
    }
    render(d) {
      let b = `if(${this.condition})` + super.render(d);
      return this.else && (b += "else " + this.else.render(d)), b;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const d = this.condition;
      if (d === !0)
        return this.nodes;
      let b = this.else;
      if (b) {
        const x = b.optimizeNodes();
        b = this.else = Array.isArray(x) ? new v(x) : x;
      }
      if (b)
        return d === !1 ? b instanceof f ? b : b.nodes : this.nodes.length ? this : new f(B(d), b instanceof f ? [b] : b.nodes);
      if (!(d === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(d, b) {
      var x;
      if (this.else = (x = this.else) === null || x === void 0 ? void 0 : x.optimizeNames(d, b), !!(super.optimizeNames(d, b) || this.else))
        return this.condition = j(this.condition, d, b), this;
    }
    get names() {
      const d = super.names;
      return Z(d, this.condition), this.else && L(d, this.else.names), d;
    }
  }
  f.kind = "if";
  class $ extends g {
  }
  $.kind = "for";
  class E extends $ {
    constructor(d) {
      super(), this.iteration = d;
    }
    render(d) {
      return `for(${this.iteration})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iteration = j(this.iteration, d, b), this;
    }
    get names() {
      return L(super.names, this.iteration.names);
    }
  }
  class O extends $ {
    constructor(d, b, x, k) {
      super(), this.varKind = d, this.name = b, this.from = x, this.to = k;
    }
    render(d) {
      const b = d.es5 ? n.varKinds.var : this.varKind, { name: x, from: k, to: I } = this;
      return `for(${b} ${x}=${k}; ${x}<${I}; ${x}++)` + super.render(d);
    }
    get names() {
      const d = Z(super.names, this.from);
      return Z(d, this.to);
    }
  }
  class A extends $ {
    constructor(d, b, x, k) {
      super(), this.loop = d, this.varKind = b, this.name = x, this.iterable = k;
    }
    render(d) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iterable = j(this.iterable, d, b), this;
    }
    get names() {
      return L(super.names, this.iterable.names);
    }
  }
  class M extends g {
    constructor(d, b, x) {
      super(), this.name = d, this.args = b, this.async = x;
    }
    render(d) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(d);
    }
  }
  M.kind = "func";
  class X extends h {
    render(d) {
      return "return " + super.render(d);
    }
  }
  X.kind = "return";
  class C extends g {
    render(d) {
      let b = "try" + super.render(d);
      return this.catch && (b += this.catch.render(d)), this.finally && (b += this.finally.render(d)), b;
    }
    optimizeNodes() {
      var d, b;
      return super.optimizeNodes(), (d = this.catch) === null || d === void 0 || d.optimizeNodes(), (b = this.finally) === null || b === void 0 || b.optimizeNodes(), this;
    }
    optimizeNames(d, b) {
      var x, k;
      return super.optimizeNames(d, b), (x = this.catch) === null || x === void 0 || x.optimizeNames(d, b), (k = this.finally) === null || k === void 0 || k.optimizeNames(d, b), this;
    }
    get names() {
      const d = super.names;
      return this.catch && L(d, this.catch.names), this.finally && L(d, this.finally.names), d;
    }
  }
  class J extends g {
    constructor(d) {
      super(), this.error = d;
    }
    render(d) {
      return `catch(${this.error})` + super.render(d);
    }
  }
  J.kind = "catch";
  class T extends g {
    render(d) {
      return "finally" + super.render(d);
    }
  }
  T.kind = "finally";
  class F {
    constructor(d, b = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...b, _n: b.lines ? `
` : "" }, this._extScope = d, this._scope = new n.Scope({ parent: d }), this._nodes = [new y()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(d) {
      return this._scope.name(d);
    }
    // reserves unique name in the external scope
    scopeName(d) {
      return this._extScope.name(d);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(d, b) {
      const x = this._extScope.value(d, b);
      return (this._values[x.prefix] || (this._values[x.prefix] = /* @__PURE__ */ new Set())).add(x), x;
    }
    getScopeValue(d, b) {
      return this._extScope.getValue(d, b);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(d) {
      return this._extScope.scopeRefs(d, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(d, b, x, k) {
      const I = this._scope.toName(b);
      return x !== void 0 && k && (this._constants[I.str] = x), this._leafNode(new i(d, I, x)), I;
    }
    // `const` declaration (`var` in es5 mode)
    const(d, b, x) {
      return this._def(n.varKinds.const, d, b, x);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(d, b, x) {
      return this._def(n.varKinds.let, d, b, x);
    }
    // `var` declaration with optional assignment
    var(d, b, x) {
      return this._def(n.varKinds.var, d, b, x);
    }
    // assignment code
    assign(d, b, x) {
      return this._leafNode(new o(d, b, x));
    }
    // `+=` code
    add(d, b) {
      return this._leafNode(new c(d, e.operators.ADD, b));
    }
    // appends passed SafeExpr to code or executes Block
    code(d) {
      return typeof d == "function" ? d() : d !== t.nil && this._leafNode(new m(d)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...d) {
      const b = ["{"];
      for (const [x, k] of d)
        b.length > 1 && b.push(","), b.push(x), (x !== k || this.opts.es5) && (b.push(":"), (0, t.addCodeArg)(b, k));
      return b.push("}"), new t._Code(b);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(d, b, x) {
      if (this._blockNode(new f(d)), b && x)
        this.code(b).else().code(x).endIf();
      else if (b)
        this.code(b).endIf();
      else if (x)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(d) {
      return this._elseNode(new f(d));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new v());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(f, v);
    }
    _for(d, b) {
      return this._blockNode(d), b && this.code(b).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(d, b) {
      return this._for(new E(d), b);
    }
    // `for` statement for a range of values
    forRange(d, b, x, k, I = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const G = this._scope.toName(d);
      return this._for(new O(I, G, b, x), () => k(G));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(d, b, x, k = n.varKinds.const) {
      const I = this._scope.toName(d);
      if (this.opts.es5) {
        const G = b instanceof t.Name ? b : this.var("_arr", b);
        return this.forRange("_i", 0, (0, t._)`${G}.length`, (W) => {
          this.var(I, (0, t._)`${G}[${W}]`), x(I);
        });
      }
      return this._for(new A("of", k, I, b), () => x(I));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(d, b, x, k = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(d, (0, t._)`Object.keys(${b})`, x);
      const I = this._scope.toName(d);
      return this._for(new A("in", k, I, b), () => x(I));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode($);
    }
    // `label` statement
    label(d) {
      return this._leafNode(new u(d));
    }
    // `break` statement
    break(d) {
      return this._leafNode(new l(d));
    }
    // `return` statement
    return(d) {
      const b = new X();
      if (this._blockNode(b), this.code(d), b.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(X);
    }
    // `try` statement
    try(d, b, x) {
      if (!b && !x)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const k = new C();
      if (this._blockNode(k), this.code(d), b) {
        const I = this.name("e");
        this._currNode = k.catch = new J(I), b(I);
      }
      return x && (this._currNode = k.finally = new T(), this.code(x)), this._endBlockNode(J, T);
    }
    // `throw` statement
    throw(d) {
      return this._leafNode(new p(d));
    }
    // start self-balancing block
    block(d, b) {
      return this._blockStarts.push(this._nodes.length), d && this.code(d).endBlock(b), this;
    }
    // end the current self-balancing block
    endBlock(d) {
      const b = this._blockStarts.pop();
      if (b === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const x = this._nodes.length - b;
      if (x < 0 || d !== void 0 && x !== d)
        throw new Error(`CodeGen: wrong number of nodes: ${x} vs ${d} expected`);
      return this._nodes.length = b, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(d, b = t.nil, x, k) {
      return this._blockNode(new M(d, b, x)), k && this.code(k).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(M);
    }
    optimize(d = 1) {
      for (; d-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(d) {
      return this._currNode.nodes.push(d), this;
    }
    _blockNode(d) {
      this._currNode.nodes.push(d), this._nodes.push(d);
    }
    _endBlockNode(d, b) {
      const x = this._currNode;
      if (x instanceof d || b && x instanceof b)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${b ? `${d.kind}/${b.kind}` : d.kind}"`);
    }
    _elseNode(d) {
      const b = this._currNode;
      if (!(b instanceof f))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = b.else = d, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const d = this._nodes;
      return d[d.length - 1];
    }
    set _currNode(d) {
      const b = this._nodes;
      b[b.length - 1] = d;
    }
  }
  e.CodeGen = F;
  function L(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) + (d[b] || 0);
    return w;
  }
  function Z(w, d) {
    return d instanceof t._CodeOrName ? L(w, d.names) : w;
  }
  function j(w, d, b) {
    if (w instanceof t.Name)
      return x(w);
    if (!k(w))
      return w;
    return new t._Code(w._items.reduce((I, G) => (G instanceof t.Name && (G = x(G)), G instanceof t._Code ? I.push(...G._items) : I.push(G), I), []));
    function x(I) {
      const G = b[I.str];
      return G === void 0 || d[I.str] !== 1 ? I : (delete d[I.str], G);
    }
    function k(I) {
      return I instanceof t._Code && I._items.some((G) => G instanceof t.Name && d[G.str] === 1 && b[G.str] !== void 0);
    }
  }
  function D(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) - (d[b] || 0);
  }
  function B(w) {
    return typeof w == "boolean" || typeof w == "number" || w === null ? !w : (0, t._)`!${S(w)}`;
  }
  e.not = B;
  const z = _(e.operators.AND);
  function Q(...w) {
    return w.reduce(z);
  }
  e.and = Q;
  const H = _(e.operators.OR);
  function R(...w) {
    return w.reduce(H);
  }
  e.or = R;
  function _(w) {
    return (d, b) => d === t.nil ? b : b === t.nil ? d : (0, t._)`${S(d)} ${w} ${S(b)}`;
  }
  function S(w) {
    return w instanceof t.Name ? w : (0, t._)`(${w})`;
  }
})(de);
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.checkStrictMode = V.getErrorPath = V.Type = V.useFunc = V.setEvaluated = V.evaluatedPropsToName = V.mergeEvaluated = V.eachItem = V.unescapeJsonPointer = V.escapeJsonPointer = V.escapeFragment = V.unescapeFragment = V.schemaRefOrVal = V.schemaHasRulesButRef = V.schemaHasRules = V.checkUnknownRules = V.alwaysValidSchema = V.toHash = void 0;
const Ee = de, Yw = ga;
function Zw(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
V.toHash = Zw;
function Qw(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (ah(e, t), !sh(t, e.self.RULES.all));
}
V.alwaysValidSchema = Qw;
function ah(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const a = r.RULES.keywords;
  for (const s in t)
    a[s] || ch(e, `unknown keyword: "${s}"`);
}
V.checkUnknownRules = ah;
function sh(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
V.schemaHasRules = sh;
function ex(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
V.schemaHasRulesButRef = ex;
function tx({ topSchemaRef: e, schemaPath: t }, n, r, a) {
  if (!a) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, Ee._)`${n}`;
  }
  return (0, Ee._)`${e}${t}${(0, Ee.getProperty)(r)}`;
}
V.schemaRefOrVal = tx;
function nx(e) {
  return ih(decodeURIComponent(e));
}
V.unescapeFragment = nx;
function rx(e) {
  return encodeURIComponent(Kc(e));
}
V.escapeFragment = rx;
function Kc(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
V.escapeJsonPointer = Kc;
function ih(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
V.unescapeJsonPointer = ih;
function ax(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
V.eachItem = ax;
function od({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (a, s, i, o) => {
    const c = i === void 0 ? s : i instanceof Ee.Name ? (s instanceof Ee.Name ? e(a, s, i) : t(a, s, i), i) : s instanceof Ee.Name ? (t(a, i, s), s) : n(s, i);
    return o === Ee.Name && !(c instanceof Ee.Name) ? r(a, c) : c;
  };
}
V.mergeEvaluated = {
  props: od({
    mergeNames: (e, t, n) => e.if((0, Ee._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, Ee._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, Ee._)`${n} || {}`).code((0, Ee._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, Ee._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, Ee._)`${n} || {}`), Wc(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: oh
  }),
  items: od({
    mergeNames: (e, t, n) => e.if((0, Ee._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, Ee._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, Ee._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, Ee._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function oh(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, Ee._)`{}`);
  return t !== void 0 && Wc(e, n, t), n;
}
V.evaluatedPropsToName = oh;
function Wc(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, Ee._)`${t}${(0, Ee.getProperty)(r)}`, !0));
}
V.setEvaluated = Wc;
const cd = {};
function sx(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: cd[t.code] || (cd[t.code] = new Yw._Code(t.code))
  });
}
V.useFunc = sx;
var Xo;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(Xo || (V.Type = Xo = {}));
function ix(e, t, n) {
  if (e instanceof Ee.Name) {
    const r = t === Xo.Num;
    return n ? r ? (0, Ee._)`"[" + ${e} + "]"` : (0, Ee._)`"['" + ${e} + "']"` : r ? (0, Ee._)`"/" + ${e}` : (0, Ee._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, Ee.getProperty)(e).toString() : "/" + Kc(e);
}
V.getErrorPath = ix;
function ch(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
V.checkStrictMode = ch;
var xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
const at = de, ox = {
  // validation function arguments
  data: new at.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new at.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new at.Name("instancePath"),
  parentData: new at.Name("parentData"),
  parentDataProperty: new at.Name("parentDataProperty"),
  rootData: new at.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new at.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new at.Name("vErrors"),
  // null or array of validation errors
  errors: new at.Name("errors"),
  // counter of validation errors
  this: new at.Name("this"),
  // "globals"
  self: new at.Name("self"),
  scope: new at.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new at.Name("json"),
  jsonPos: new at.Name("jsonPos"),
  jsonLen: new at.Name("jsonLen"),
  jsonPart: new at.Name("jsonPart")
};
xt.default = ox;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = de, n = V, r = xt;
  e.keywordError = {
    message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: v, schemaType: f }) => f ? (0, t.str)`"${v}" keyword must be ${f} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
  };
  function a(v, f = e.keywordError, $, E) {
    const { it: O } = v, { gen: A, compositeRule: M, allErrors: X } = O, C = p(v, f, $);
    E ?? (M || X) ? c(A, C) : u(O, (0, t._)`[${C}]`);
  }
  e.reportError = a;
  function s(v, f = e.keywordError, $) {
    const { it: E } = v, { gen: O, compositeRule: A, allErrors: M } = E, X = p(v, f, $);
    c(O, X), A || M || u(E, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(v, f) {
    v.assign(r.default.errors, f), v.if((0, t._)`${r.default.vErrors} !== null`, () => v.if(f, () => v.assign((0, t._)`${r.default.vErrors}.length`, f), () => v.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function o({ gen: v, keyword: f, schemaValue: $, data: E, errsCount: O, it: A }) {
    if (O === void 0)
      throw new Error("ajv implementation error");
    const M = v.name("err");
    v.forRange("i", O, r.default.errors, (X) => {
      v.const(M, (0, t._)`${r.default.vErrors}[${X}]`), v.if((0, t._)`${M}.instancePath === undefined`, () => v.assign((0, t._)`${M}.instancePath`, (0, t.strConcat)(r.default.instancePath, A.errorPath))), v.assign((0, t._)`${M}.schemaPath`, (0, t.str)`${A.errSchemaPath}/${f}`), A.opts.verbose && (v.assign((0, t._)`${M}.schema`, $), v.assign((0, t._)`${M}.data`, E));
    });
  }
  e.extendErrors = o;
  function c(v, f) {
    const $ = v.const("err", f);
    v.if((0, t._)`${r.default.vErrors} === null`, () => v.assign(r.default.vErrors, (0, t._)`[${$}]`), (0, t._)`${r.default.vErrors}.push(${$})`), v.code((0, t._)`${r.default.errors}++`);
  }
  function u(v, f) {
    const { gen: $, validateName: E, schemaEnv: O } = v;
    O.$async ? $.throw((0, t._)`new ${v.ValidationError}(${f})`) : ($.assign((0, t._)`${E}.errors`, f), $.return(!1));
  }
  const l = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    // also used in JTD errors
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function p(v, f, $) {
    const { createErrors: E } = v.it;
    return E === !1 ? (0, t._)`{}` : m(v, f, $);
  }
  function m(v, f, $ = {}) {
    const { gen: E, it: O } = v, A = [
      h(O, $),
      g(v, $)
    ];
    return y(v, f, A), E.object(...A);
  }
  function h({ errorPath: v }, { instancePath: f }) {
    const $ = f ? (0, t.str)`${v}${(0, n.getErrorPath)(f, n.Type.Str)}` : v;
    return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, $)];
  }
  function g({ keyword: v, it: { errSchemaPath: f } }, { schemaPath: $, parentSchema: E }) {
    let O = E ? f : (0, t.str)`${f}/${v}`;
    return $ && (O = (0, t.str)`${O}${(0, n.getErrorPath)($, n.Type.Str)}`), [l.schemaPath, O];
  }
  function y(v, { params: f, message: $ }, E) {
    const { keyword: O, data: A, schemaValue: M, it: X } = v, { opts: C, propertyName: J, topSchemaRef: T, schemaPath: F } = X;
    E.push([l.keyword, O], [l.params, typeof f == "function" ? f(v) : f || (0, t._)`{}`]), C.messages && E.push([l.message, typeof $ == "function" ? $(v) : $]), C.verbose && E.push([l.schema, M], [l.parentSchema, (0, t._)`${T}${F}`], [r.default.data, A]), J && E.push([l.propertyName, J]);
  }
})(Ra);
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.boolOrEmptySchema = gr.topBoolOrEmptySchema = void 0;
const cx = Ra, lx = de, ux = xt, px = {
  message: "boolean schema is false"
};
function dx(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? lh(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(ux.default.data) : (t.assign((0, lx._)`${r}.errors`, null), t.return(!0));
}
gr.topBoolOrEmptySchema = dx;
function fx(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), lh(e)) : n.var(t, !0);
}
gr.boolOrEmptySchema = fx;
function lh(e, t) {
  const { gen: n, data: r } = e, a = {
    gen: n,
    keyword: "false schema",
    data: r,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, cx.reportError)(a, px, void 0, t);
}
var ze = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.getRules = zn.isJSONType = void 0;
const mx = ["string", "number", "integer", "boolean", "null", "object", "array"], hx = new Set(mx);
function vx(e) {
  return typeof e == "string" && hx.has(e);
}
zn.isJSONType = vx;
function yx() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
zn.getRules = yx;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.shouldUseRule = Zt.shouldUseGroup = Zt.schemaHasRulesForType = void 0;
function gx({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && uh(e, r);
}
Zt.schemaHasRulesForType = gx;
function uh(e, t) {
  return t.rules.some((n) => ph(e, n));
}
Zt.shouldUseGroup = uh;
function ph(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
Zt.shouldUseRule = ph;
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.reportTypeError = ze.checkDataTypes = ze.checkDataType = ze.coerceAndCheckDataType = ze.getJSONTypes = ze.getSchemaTypes = ze.DataType = void 0;
const bx = zn, $x = Zt, _x = Ra, fe = de, dh = V;
var lr;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(lr || (ze.DataType = lr = {}));
function wx(e) {
  const t = fh(e.type);
  if (t.includes("null")) {
    if (e.nullable === !1)
      throw new Error("type: null contradicts nullable: false");
  } else {
    if (!t.length && e.nullable !== void 0)
      throw new Error('"nullable" cannot be used without "type"');
    e.nullable === !0 && t.push("null");
  }
  return t;
}
ze.getSchemaTypes = wx;
function fh(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(bx.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
ze.getJSONTypes = fh;
function xx(e, t) {
  const { gen: n, data: r, opts: a } = e, s = Ex(t, a.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, $x.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const o = Jc(t, r, a.strictNumbers, lr.Wrong);
    n.if(o, () => {
      s.length ? Sx(e, t, s) : Xc(e);
    });
  }
  return i;
}
ze.coerceAndCheckDataType = xx;
const mh = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function Ex(e, t) {
  return t ? e.filter((n) => mh.has(n) || t === "array" && n === "array") : [];
}
function Sx(e, t, n) {
  const { gen: r, data: a, opts: s } = e, i = r.let("dataType", (0, fe._)`typeof ${a}`), o = r.let("coerced", (0, fe._)`undefined`);
  s.coerceTypes === "array" && r.if((0, fe._)`${i} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, fe._)`${a}[0]`).assign(i, (0, fe._)`typeof ${a}`).if(Jc(t, a, s.strictNumbers), () => r.assign(o, a))), r.if((0, fe._)`${o} !== undefined`);
  for (const u of n)
    (mh.has(u) || u === "array" && s.coerceTypes === "array") && c(u);
  r.else(), Xc(e), r.endIf(), r.if((0, fe._)`${o} !== undefined`, () => {
    r.assign(a, o), Px(e, o);
  });
  function c(u) {
    switch (u) {
      case "string":
        r.elseIf((0, fe._)`${i} == "number" || ${i} == "boolean"`).assign(o, (0, fe._)`"" + ${a}`).elseIf((0, fe._)`${a} === null`).assign(o, (0, fe._)`""`);
        return;
      case "number":
        r.elseIf((0, fe._)`${i} == "boolean" || ${a} === null
              || (${i} == "string" && ${a} && ${a} == +${a})`).assign(o, (0, fe._)`+${a}`);
        return;
      case "integer":
        r.elseIf((0, fe._)`${i} === "boolean" || ${a} === null
              || (${i} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(o, (0, fe._)`+${a}`);
        return;
      case "boolean":
        r.elseIf((0, fe._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(o, !1).elseIf((0, fe._)`${a} === "true" || ${a} === 1`).assign(o, !0);
        return;
      case "null":
        r.elseIf((0, fe._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(o, null);
        return;
      case "array":
        r.elseIf((0, fe._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${a} === null`).assign(o, (0, fe._)`[${a}]`);
    }
  }
}
function Px({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, fe._)`${t} !== undefined`, () => e.assign((0, fe._)`${t}[${n}]`, r));
}
function Yo(e, t, n, r = lr.Correct) {
  const a = r === lr.Correct ? fe.operators.EQ : fe.operators.NEQ;
  let s;
  switch (e) {
    case "null":
      return (0, fe._)`${t} ${a} null`;
    case "array":
      s = (0, fe._)`Array.isArray(${t})`;
      break;
    case "object":
      s = (0, fe._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      s = i((0, fe._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      s = i();
      break;
    default:
      return (0, fe._)`typeof ${t} ${a} ${e}`;
  }
  return r === lr.Correct ? s : (0, fe.not)(s);
  function i(o = fe.nil) {
    return (0, fe.and)((0, fe._)`typeof ${t} == "number"`, o, n ? (0, fe._)`isFinite(${t})` : fe.nil);
  }
}
ze.checkDataType = Yo;
function Jc(e, t, n, r) {
  if (e.length === 1)
    return Yo(e[0], t, n, r);
  let a;
  const s = (0, dh.toHash)(e);
  if (s.array && s.object) {
    const i = (0, fe._)`typeof ${t} != "object"`;
    a = s.null ? i : (0, fe._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    a = fe.nil;
  s.number && delete s.integer;
  for (const i in s)
    a = (0, fe.and)(a, Yo(i, t, n, r));
  return a;
}
ze.checkDataTypes = Jc;
const Rx = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, fe._)`{type: ${e}}` : (0, fe._)`{type: ${t}}`
};
function Xc(e) {
  const t = Ox(e);
  (0, _x.reportError)(t, Rx);
}
ze.reportTypeError = Xc;
function Ox(e) {
  const { gen: t, data: n, schema: r } = e, a = (0, dh.schemaRefOrVal)(e, r, "type");
  return {
    gen: t,
    keyword: "type",
    data: n,
    schema: r.type,
    schemaCode: a,
    schemaValue: a,
    parentSchema: r,
    params: {},
    it: e
  };
}
var ii = {};
Object.defineProperty(ii, "__esModule", { value: !0 });
ii.assignDefaults = void 0;
const Jn = de, Ax = V;
function Tx(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const a in n)
      ld(e, a, n[a].default);
  else t === "array" && Array.isArray(r) && r.forEach((a, s) => ld(e, s, a.default));
}
ii.assignDefaults = Tx;
function ld(e, t, n) {
  const { gen: r, compositeRule: a, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const o = (0, Jn._)`${s}${(0, Jn.getProperty)(t)}`;
  if (a) {
    (0, Ax.checkStrictMode)(e, `default is ignored for: ${o}`);
    return;
  }
  let c = (0, Jn._)`${o} === undefined`;
  i.useDefaults === "empty" && (c = (0, Jn._)`${c} || ${o} === null || ${o} === ""`), r.if(c, (0, Jn._)`${o} = ${(0, Jn.stringify)(n)}`);
}
var Gt = {}, ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.validateUnion = ve.validateArray = ve.usePattern = ve.callValidateCode = ve.schemaProperties = ve.allSchemaProperties = ve.noPropertyInData = ve.propertyInData = ve.isOwnProperty = ve.hasPropFunc = ve.reportMissingProp = ve.checkMissingProp = ve.checkReportMissingProp = void 0;
const Te = de, Yc = V, cn = xt, jx = V;
function kx(e, t) {
  const { gen: n, data: r, it: a } = e;
  n.if(Qc(n, r, t, a.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, Te._)`${t}` }, !0), e.error();
  });
}
ve.checkReportMissingProp = kx;
function Nx({ gen: e, data: t, it: { opts: n } }, r, a) {
  return (0, Te.or)(...r.map((s) => (0, Te.and)(Qc(e, t, s, n.ownProperties), (0, Te._)`${a} = ${s}`)));
}
ve.checkMissingProp = Nx;
function Ix(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
ve.reportMissingProp = Ix;
function hh(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, Te._)`Object.prototype.hasOwnProperty`
  });
}
ve.hasPropFunc = hh;
function Zc(e, t, n) {
  return (0, Te._)`${hh(e)}.call(${t}, ${n})`;
}
ve.isOwnProperty = Zc;
function Cx(e, t, n, r) {
  const a = (0, Te._)`${t}${(0, Te.getProperty)(n)} !== undefined`;
  return r ? (0, Te._)`${a} && ${Zc(e, t, n)}` : a;
}
ve.propertyInData = Cx;
function Qc(e, t, n, r) {
  const a = (0, Te._)`${t}${(0, Te.getProperty)(n)} === undefined`;
  return r ? (0, Te.or)(a, (0, Te.not)(Zc(e, t, n))) : a;
}
ve.noPropertyInData = Qc;
function vh(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
ve.allSchemaProperties = vh;
function Dx(e, t) {
  return vh(t).filter((n) => !(0, Yc.alwaysValidSchema)(e, t[n]));
}
ve.schemaProperties = Dx;
function Fx({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: a, errorPath: s }, it: i }, o, c, u) {
  const l = u ? (0, Te._)`${e}, ${t}, ${r}${a}` : t, p = [
    [cn.default.instancePath, (0, Te.strConcat)(cn.default.instancePath, s)],
    [cn.default.parentData, i.parentData],
    [cn.default.parentDataProperty, i.parentDataProperty],
    [cn.default.rootData, cn.default.rootData]
  ];
  i.opts.dynamicRef && p.push([cn.default.dynamicAnchors, cn.default.dynamicAnchors]);
  const m = (0, Te._)`${l}, ${n.object(...p)}`;
  return c !== Te.nil ? (0, Te._)`${o}.call(${c}, ${m})` : (0, Te._)`${o}(${m})`;
}
ve.callValidateCode = Fx;
const Lx = (0, Te._)`new RegExp`;
function Mx({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: a } = t.code, s = a(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, Te._)`${a.code === "new RegExp" ? Lx : (0, jx.useFunc)(e, a)}(${n}, ${r})`
  });
}
ve.usePattern = Mx;
function Ux(e) {
  const { gen: t, data: n, keyword: r, it: a } = e, s = t.name("valid");
  if (a.allErrors) {
    const o = t.let("valid", !0);
    return i(() => t.assign(o, !1)), o;
  }
  return t.var(s, !0), i(() => t.break()), s;
  function i(o) {
    const c = t.const("len", (0, Te._)`${n}.length`);
    t.forRange("i", 0, c, (u) => {
      e.subschema({
        keyword: r,
        dataProp: u,
        dataPropType: Yc.Type.Num
      }, s), t.if((0, Te.not)(s), o);
    });
  }
}
ve.validateArray = Ux;
function zx(e) {
  const { gen: t, schema: n, keyword: r, it: a } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, Yc.alwaysValidSchema)(a, c)) && !a.opts.unevaluated)
    return;
  const i = t.let("valid", !1), o = t.name("_valid");
  t.block(() => n.forEach((c, u) => {
    const l = e.subschema({
      keyword: r,
      schemaProp: u,
      compositeRule: !0
    }, o);
    t.assign(i, (0, Te._)`${i} || ${o}`), e.mergeValidEvaluated(l, o) || t.if((0, Te.not)(i));
  })), e.result(i, () => e.reset(), () => e.error(!0));
}
ve.validateUnion = zx;
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.validateKeywordUsage = Gt.validSchemaType = Gt.funcKeywordCode = Gt.macroKeywordCode = void 0;
const ut = de, xn = xt, qx = ve, Vx = Ra;
function Bx(e, t) {
  const { gen: n, keyword: r, schema: a, parentSchema: s, it: i } = e, o = t.macro.call(i.self, a, s, i), c = yh(n, r, o);
  i.opts.validateSchema !== !1 && i.self.validateSchema(o, !0);
  const u = n.name("valid");
  e.subschema({
    schema: o,
    schemaPath: ut.nil,
    errSchemaPath: `${i.errSchemaPath}/${r}`,
    topSchemaRef: c,
    compositeRule: !0
  }, u), e.pass(u, () => e.error(!0));
}
Gt.macroKeywordCode = Bx;
function Hx(e, t) {
  var n;
  const { gen: r, keyword: a, schema: s, parentSchema: i, $data: o, it: c } = e;
  Kx(c, t);
  const u = !o && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = yh(r, a, u), p = r.let("valid");
  e.block$data(p, m), e.ok((n = t.valid) !== null && n !== void 0 ? n : p);
  function m() {
    if (t.errors === !1)
      y(), t.modifying && ud(e), v(() => e.error());
    else {
      const f = t.async ? h() : g();
      t.modifying && ud(e), v(() => Gx(e, f));
    }
  }
  function h() {
    const f = r.let("ruleErrs", null);
    return r.try(() => y((0, ut._)`await `), ($) => r.assign(p, !1).if((0, ut._)`${$} instanceof ${c.ValidationError}`, () => r.assign(f, (0, ut._)`${$}.errors`), () => r.throw($))), f;
  }
  function g() {
    const f = (0, ut._)`${l}.errors`;
    return r.assign(f, null), y(ut.nil), f;
  }
  function y(f = t.async ? (0, ut._)`await ` : ut.nil) {
    const $ = c.opts.passContext ? xn.default.this : xn.default.self, E = !("compile" in t && !o || t.schema === !1);
    r.assign(p, (0, ut._)`${f}${(0, qx.callValidateCode)(e, l, $, E)}`, t.modifying);
  }
  function v(f) {
    var $;
    r.if((0, ut.not)(($ = t.valid) !== null && $ !== void 0 ? $ : p), f);
  }
}
Gt.funcKeywordCode = Hx;
function ud(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, ut._)`${r.parentData}[${r.parentDataProperty}]`));
}
function Gx(e, t) {
  const { gen: n } = e;
  n.if((0, ut._)`Array.isArray(${t})`, () => {
    n.assign(xn.default.vErrors, (0, ut._)`${xn.default.vErrors} === null ? ${t} : ${xn.default.vErrors}.concat(${t})`).assign(xn.default.errors, (0, ut._)`${xn.default.vErrors}.length`), (0, Vx.extendErrors)(e);
  }, () => e.error());
}
function Kx({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function yh(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, ut.stringify)(n) });
}
function Wx(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
Gt.validSchemaType = Wx;
function Jx({ schema: e, opts: t, self: n, errSchemaPath: r }, a, s) {
  if (Array.isArray(a.keyword) ? !a.keyword.includes(s) : a.keyword !== s)
    throw new Error("ajv implementation error");
  const i = a.dependencies;
  if (i?.some((o) => !Object.prototype.hasOwnProperty.call(e, o)))
    throw new Error(`parent schema must have dependencies of ${s}: ${i.join(",")}`);
  if (a.validateSchema && !a.validateSchema(e[s])) {
    const c = `keyword "${s}" value is invalid at path "${r}": ` + n.errorsText(a.validateSchema.errors);
    if (t.validateSchema === "log")
      n.logger.error(c);
    else
      throw new Error(c);
  }
}
Gt.validateKeywordUsage = Jx;
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.extendSubschemaMode = bn.extendSubschemaData = bn.getSubschema = void 0;
const Bt = de, gh = V;
function Xx(e, { keyword: t, schemaProp: n, schema: r, schemaPath: a, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const o = e.schema[t];
    return n === void 0 ? {
      schema: o,
      schemaPath: (0, Bt._)`${e.schemaPath}${(0, Bt.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: o[n],
      schemaPath: (0, Bt._)`${e.schemaPath}${(0, Bt.getProperty)(t)}${(0, Bt.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, gh.escapeFragment)(n)}`
    };
  }
  if (r !== void 0) {
    if (a === void 0 || s === void 0 || i === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: r,
      schemaPath: a,
      topSchemaRef: i,
      errSchemaPath: s
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
bn.getSubschema = Xx;
function Yx(e, t, { dataProp: n, dataPropType: r, data: a, dataTypes: s, propertyName: i }) {
  if (a !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: o } = t;
  if (n !== void 0) {
    const { errorPath: u, dataPathArr: l, opts: p } = t, m = o.let("data", (0, Bt._)`${t.data}${(0, Bt.getProperty)(n)}`, !0);
    c(m), e.errorPath = (0, Bt.str)`${u}${(0, gh.getErrorPath)(n, r, p.jsPropertySyntax)}`, e.parentDataProperty = (0, Bt._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (a !== void 0) {
    const u = a instanceof Bt.Name ? a : o.let("data", a, !0);
    c(u), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(u) {
    e.data = u, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, u];
  }
}
bn.extendSubschemaData = Yx;
function Zx(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: a, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), a !== void 0 && (e.createErrors = a), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
bn.extendSubschemaMode = Zx;
var Ye = {}, oi = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, a, s;
    if (Array.isArray(t)) {
      if (r = t.length, r != n.length) return !1;
      for (a = r; a-- !== 0; )
        if (!e(t[a], n[a])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (s = Object.keys(t), r = s.length, r !== Object.keys(n).length) return !1;
    for (a = r; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, s[a])) return !1;
    for (a = r; a-- !== 0; ) {
      var i = s[a];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}, bh = { exports: {} }, hn = bh.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, a = n.post || function() {
  };
  ms(t, r, a, e, "", e);
};
hn.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
hn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
hn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
hn.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function ms(e, t, n, r, a, s, i, o, c, u) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, a, s, i, o, c, u);
    for (var l in r) {
      var p = r[l];
      if (Array.isArray(p)) {
        if (l in hn.arrayKeywords)
          for (var m = 0; m < p.length; m++)
            ms(e, t, n, p[m], a + "/" + l + "/" + m, s, a, l, r, m);
      } else if (l in hn.propsKeywords) {
        if (p && typeof p == "object")
          for (var h in p)
            ms(e, t, n, p[h], a + "/" + l + "/" + Qx(h), s, a, l, r, h);
      } else (l in hn.keywords || e.allKeys && !(l in hn.skipKeywords)) && ms(e, t, n, p, a + "/" + l, s, a, l, r);
    }
    n(r, a, s, i, o, c, u);
  }
}
function Qx(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var eE = bh.exports;
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.getSchemaRefs = Ye.resolveUrl = Ye.normalizeId = Ye._getFullPath = Ye.getFullPath = Ye.inlineRef = void 0;
const tE = V, nE = oi, rE = eE, aE = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function sE(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Zo(e) : t ? $h(e) <= t : !1;
}
Ye.inlineRef = sE;
const iE = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Zo(e) {
  for (const t in e) {
    if (iE.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(Zo) || typeof n == "object" && Zo(n))
      return !0;
  }
  return !1;
}
function $h(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !aE.has(n) && (typeof e[n] == "object" && (0, tE.eachItem)(e[n], (r) => t += $h(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function _h(e, t = "", n) {
  n !== !1 && (t = ur(t));
  const r = e.parse(t);
  return wh(e, r);
}
Ye.getFullPath = _h;
function wh(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Ye._getFullPath = wh;
const oE = /#\/?$/;
function ur(e) {
  return e ? e.replace(oE, "") : "";
}
Ye.normalizeId = ur;
function cE(e, t, n) {
  return n = ur(n), e.resolve(t, n);
}
Ye.resolveUrl = cE;
const lE = /^[a-z_][-a-z0-9._]*$/i;
function uE(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, a = ur(e[n] || t), s = { "": a }, i = _h(r, a, !1), o = {}, c = /* @__PURE__ */ new Set();
  return rE(e, { allKeys: !0 }, (p, m, h, g) => {
    if (g === void 0)
      return;
    const y = i + m;
    let v = s[g];
    typeof p[n] == "string" && (v = f.call(this, p[n])), $.call(this, p.$anchor), $.call(this, p.$dynamicAnchor), s[m] = v;
    function f(E) {
      const O = this.opts.uriResolver.resolve;
      if (E = ur(v ? O(v, E) : E), c.has(E))
        throw l(E);
      c.add(E);
      let A = this.refs[E];
      return typeof A == "string" && (A = this.refs[A]), typeof A == "object" ? u(p, A.schema, E) : E !== ur(y) && (E[0] === "#" ? (u(p, o[E], E), o[E] = p) : this.refs[E] = y), E;
    }
    function $(E) {
      if (typeof E == "string") {
        if (!lE.test(E))
          throw new Error(`invalid anchor "${E}"`);
        f.call(this, `#${E}`);
      }
    }
  }), o;
  function u(p, m, h) {
    if (m !== void 0 && !nE(p, m))
      throw l(h);
  }
  function l(p) {
    return new Error(`reference "${p}" resolves to more than one schema`);
  }
}
Ye.getSchemaRefs = uE;
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.getData = Ct.KeywordCxt = Ct.validateFunctionCode = void 0;
const xh = gr, pd = ze, el = Zt, Fs = ze, pE = ii, ea = Gt, io = bn, ee = de, ie = xt, dE = Ye, Qt = V, Br = Ra;
function fE(e) {
  if (Ph(e) && (Rh(e), Sh(e))) {
    vE(e);
    return;
  }
  Eh(e, () => (0, xh.topBoolOrEmptySchema)(e));
}
Ct.validateFunctionCode = fE;
function Eh({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: a }, s) {
  a.code.es5 ? e.func(t, (0, ee._)`${ie.default.data}, ${ie.default.valCxt}`, r.$async, () => {
    e.code((0, ee._)`"use strict"; ${dd(n, a)}`), hE(e, a), e.code(s);
  }) : e.func(t, (0, ee._)`${ie.default.data}, ${mE(a)}`, r.$async, () => e.code(dd(n, a)).code(s));
}
function mE(e) {
  return (0, ee._)`{${ie.default.instancePath}="", ${ie.default.parentData}, ${ie.default.parentDataProperty}, ${ie.default.rootData}=${ie.default.data}${e.dynamicRef ? (0, ee._)`, ${ie.default.dynamicAnchors}={}` : ee.nil}}={}`;
}
function hE(e, t) {
  e.if(ie.default.valCxt, () => {
    e.var(ie.default.instancePath, (0, ee._)`${ie.default.valCxt}.${ie.default.instancePath}`), e.var(ie.default.parentData, (0, ee._)`${ie.default.valCxt}.${ie.default.parentData}`), e.var(ie.default.parentDataProperty, (0, ee._)`${ie.default.valCxt}.${ie.default.parentDataProperty}`), e.var(ie.default.rootData, (0, ee._)`${ie.default.valCxt}.${ie.default.rootData}`), t.dynamicRef && e.var(ie.default.dynamicAnchors, (0, ee._)`${ie.default.valCxt}.${ie.default.dynamicAnchors}`);
  }, () => {
    e.var(ie.default.instancePath, (0, ee._)`""`), e.var(ie.default.parentData, (0, ee._)`undefined`), e.var(ie.default.parentDataProperty, (0, ee._)`undefined`), e.var(ie.default.rootData, ie.default.data), t.dynamicRef && e.var(ie.default.dynamicAnchors, (0, ee._)`{}`);
  });
}
function vE(e) {
  const { schema: t, opts: n, gen: r } = e;
  Eh(e, () => {
    n.$comment && t.$comment && Ah(e), _E(e), r.let(ie.default.vErrors, null), r.let(ie.default.errors, 0), n.unevaluated && yE(e), Oh(e), EE(e);
  });
}
function yE(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, ee._)`${n}.evaluated`), t.if((0, ee._)`${e.evaluated}.dynamicProps`, () => t.assign((0, ee._)`${e.evaluated}.props`, (0, ee._)`undefined`)), t.if((0, ee._)`${e.evaluated}.dynamicItems`, () => t.assign((0, ee._)`${e.evaluated}.items`, (0, ee._)`undefined`));
}
function dd(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, ee._)`/*# sourceURL=${n} */` : ee.nil;
}
function gE(e, t) {
  if (Ph(e) && (Rh(e), Sh(e))) {
    bE(e, t);
    return;
  }
  (0, xh.boolOrEmptySchema)(e, t);
}
function Sh({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function Ph(e) {
  return typeof e.schema != "boolean";
}
function bE(e, t) {
  const { schema: n, gen: r, opts: a } = e;
  a.$comment && n.$comment && Ah(e), wE(e), xE(e);
  const s = r.const("_errs", ie.default.errors);
  Oh(e, s), r.var(t, (0, ee._)`${s} === ${ie.default.errors}`);
}
function Rh(e) {
  (0, Qt.checkUnknownRules)(e), $E(e);
}
function Oh(e, t) {
  if (e.opts.jtd)
    return fd(e, [], !1, t);
  const n = (0, pd.getSchemaTypes)(e.schema), r = (0, pd.coerceAndCheckDataType)(e, n);
  fd(e, n, !r, t);
}
function $E(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: a } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, Qt.schemaHasRulesButRef)(t, a.RULES) && a.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function _E(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, Qt.checkStrictMode)(e, "default is ignored in the schema root");
}
function wE(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, dE.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function xE(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Ah({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: a }) {
  const s = n.$comment;
  if (a.$comment === !0)
    e.code((0, ee._)`${ie.default.self}.logger.log(${s})`);
  else if (typeof a.$comment == "function") {
    const i = (0, ee.str)`${r}/$comment`, o = e.scopeValue("root", { ref: t.root });
    e.code((0, ee._)`${ie.default.self}.opts.$comment(${s}, ${i}, ${o}.schema)`);
  }
}
function EE(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: a, opts: s } = e;
  n.$async ? t.if((0, ee._)`${ie.default.errors} === 0`, () => t.return(ie.default.data), () => t.throw((0, ee._)`new ${a}(${ie.default.vErrors})`)) : (t.assign((0, ee._)`${r}.errors`, ie.default.vErrors), s.unevaluated && SE(e), t.return((0, ee._)`${ie.default.errors} === 0`));
}
function SE({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof ee.Name && e.assign((0, ee._)`${t}.props`, n), r instanceof ee.Name && e.assign((0, ee._)`${t}.items`, r);
}
function fd(e, t, n, r) {
  const { gen: a, schema: s, data: i, allErrors: o, opts: c, self: u } = e, { RULES: l } = u;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, Qt.schemaHasRulesButRef)(s, l))) {
    a.block(() => kh(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || PE(e, t), a.block(() => {
    for (const m of l.rules)
      p(m);
    p(l.post);
  });
  function p(m) {
    (0, el.shouldUseGroup)(s, m) && (m.type ? (a.if((0, Fs.checkDataType)(m.type, i, c.strictNumbers)), md(e, m), t.length === 1 && t[0] === m.type && n && (a.else(), (0, Fs.reportTypeError)(e)), a.endIf()) : md(e, m), o || a.if((0, ee._)`${ie.default.errors} === ${r || 0}`));
  }
}
function md(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: a } } = e;
  a && (0, pE.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, el.shouldUseRule)(r, s) && kh(e, s.keyword, s.definition, t.type);
  });
}
function PE(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (RE(e, t), e.opts.allowUnionTypes || OE(e, t), AE(e, e.dataTypes));
}
function RE(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      Th(e.dataTypes, n) || tl(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), jE(e, t);
  }
}
function OE(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && tl(e, "use allowUnionTypes to allow union type keyword");
}
function AE(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const a = n[r];
    if (typeof a == "object" && (0, el.shouldUseRule)(e.schema, a)) {
      const { type: s } = a.definition;
      s.length && !s.some((i) => TE(t, i)) && tl(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function TE(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Th(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function jE(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    Th(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function tl(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, Qt.checkStrictMode)(e, t, e.opts.strictTypes);
}
let jh = class {
  constructor(t, n, r) {
    if ((0, ea.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Qt.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Nh(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, ea.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${r} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = t.gen.const("_errs", ie.default.errors));
  }
  result(t, n, r) {
    this.failResult((0, ee.not)(t), n, r);
  }
  failResult(t, n, r) {
    this.gen.if(t), r ? r() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, n) {
    this.failResult((0, ee.not)(t), void 0, n);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: n } = this;
    this.fail((0, ee._)`${n} !== undefined && (${(0, ee.or)(this.invalid$data(), t)})`);
  }
  error(t, n, r) {
    if (n) {
      this.setParams(n), this._error(t, r), this.setParams({});
      return;
    }
    this._error(t, r);
  }
  _error(t, n) {
    (t ? Br.reportExtraError : Br.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, Br.reportError)(this, this.def.$dataError || Br.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Br.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, n) {
    n ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, n, r = ee.nil) {
    this.gen.block(() => {
      this.check$data(t, r), n();
    });
  }
  check$data(t = ee.nil, n = ee.nil) {
    if (!this.$data)
      return;
    const { gen: r, schemaCode: a, schemaType: s, def: i } = this;
    r.if((0, ee.or)((0, ee._)`${a} === undefined`, n)), t !== ee.nil && r.assign(t, !0), (s.length || i.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), t !== ee.nil && r.assign(t, !1)), r.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: n, schemaType: r, def: a, it: s } = this;
    return (0, ee.or)(i(), o());
    function i() {
      if (r.length) {
        if (!(n instanceof ee.Name))
          throw new Error("ajv implementation error");
        const c = Array.isArray(r) ? r : [r];
        return (0, ee._)`${(0, Fs.checkDataTypes)(c, n, s.opts.strictNumbers, Fs.DataType.Wrong)}`;
      }
      return ee.nil;
    }
    function o() {
      if (a.validateSchema) {
        const c = t.scopeValue("validate$data", { ref: a.validateSchema });
        return (0, ee._)`!${c}(${n})`;
      }
      return ee.nil;
    }
  }
  subschema(t, n) {
    const r = (0, io.getSubschema)(this.it, t);
    (0, io.extendSubschemaData)(r, this.it, t), (0, io.extendSubschemaMode)(r, t);
    const a = { ...this.it, ...r, items: void 0, props: void 0 };
    return gE(a, n), a;
  }
  mergeEvaluated(t, n) {
    const { it: r, gen: a } = this;
    r.opts.unevaluated && (r.props !== !0 && t.props !== void 0 && (r.props = Qt.mergeEvaluated.props(a, t.props, r.props, n)), r.items !== !0 && t.items !== void 0 && (r.items = Qt.mergeEvaluated.items(a, t.items, r.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: r, gen: a } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return a.if(n, () => this.mergeEvaluated(t, ee.Name)), !0;
  }
};
Ct.KeywordCxt = jh;
function kh(e, t, n, r) {
  const a = new jh(e, n, t);
  "code" in n ? n.code(a, r) : a.$data && n.validate ? (0, ea.funcKeywordCode)(a, n) : "macro" in n ? (0, ea.macroKeywordCode)(a, n) : (n.compile || n.validate) && (0, ea.funcKeywordCode)(a, n);
}
const kE = /^\/(?:[^~]|~0|~1)*$/, NE = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Nh(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let a, s;
  if (e === "")
    return ie.default.rootData;
  if (e[0] === "/") {
    if (!kE.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    a = e, s = ie.default.rootData;
  } else {
    const u = NE.exec(e);
    if (!u)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const l = +u[1];
    if (a = u[2], a === "#") {
      if (l >= t)
        throw new Error(c("property/index", l));
      return r[t - l];
    }
    if (l > t)
      throw new Error(c("data", l));
    if (s = n[t - l], !a)
      return s;
  }
  let i = s;
  const o = a.split("/");
  for (const u of o)
    u && (s = (0, ee._)`${s}${(0, ee.getProperty)((0, Qt.unescapeJsonPointer)(u))}`, i = (0, ee._)`${i} && ${s}`);
  return i;
  function c(u, l) {
    return `Cannot access ${u} ${l} levels up, current level is ${t}`;
  }
}
Ct.getData = Nh;
var Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
let IE = class extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
};
Oa.default = IE;
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
const oo = Ye;
let CE = class extends Error {
  constructor(t, n, r, a) {
    super(a || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, oo.resolveUrl)(t, n, r), this.missingSchema = (0, oo.normalizeId)((0, oo.getFullPath)(t, this.missingRef));
  }
};
Or.default = CE;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.resolveSchema = dt.getCompilingSchema = dt.resolveRef = dt.compileSchema = dt.SchemaEnv = void 0;
const Rt = de, DE = Oa, _n = xt, Nt = Ye, hd = V, FE = Ct;
let ci = class {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, Nt.normalizeId)(r?.[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r?.$async, this.refs = {};
  }
};
dt.SchemaEnv = ci;
function nl(e) {
  const t = Ih.call(this, e);
  if (t)
    return t;
  const n = (0, Nt.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: a } = this.opts.code, { ownProperties: s } = this.opts, i = new Rt.CodeGen(this.scope, { es5: r, lines: a, ownProperties: s });
  let o;
  e.$async && (o = i.scopeValue("Error", {
    ref: DE.default,
    code: (0, Rt._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const u = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: _n.default.data,
    parentData: _n.default.parentData,
    parentDataProperty: _n.default.parentDataProperty,
    dataNames: [_n.default.data],
    dataPathArr: [Rt.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Rt.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: o,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: Rt.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Rt._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, FE.validateFunctionCode)(u), i.optimize(this.opts.code.optimize);
    const p = i.toString();
    l = `${i.scopeRefs(_n.default.scope)}return ${p}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const h = new Function(`${_n.default.self}`, `${_n.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: h }), h.errors = null, h.schema = e.schema, h.schemaEnv = e, e.$async && (h.$async = !0), this.opts.code.source === !0 && (h.source = { validateName: c, validateCode: p, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: g, items: y } = u;
      h.evaluated = {
        props: g instanceof Rt.Name ? void 0 : g,
        items: y instanceof Rt.Name ? void 0 : y,
        dynamicProps: g instanceof Rt.Name,
        dynamicItems: y instanceof Rt.Name
      }, h.source && (h.source.evaluated = (0, Rt.stringify)(h.evaluated));
    }
    return e.validate = h, e;
  } catch (p) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), p;
  } finally {
    this._compilations.delete(e);
  }
}
dt.compileSchema = nl;
function LE(e, t, n) {
  var r;
  n = (0, Nt.resolveUrl)(this.opts.uriResolver, t, n);
  const a = e.refs[n];
  if (a)
    return a;
  let s = zE.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: o } = this.opts;
    i && (s = new ci({ schema: i, schemaId: o, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = ME.call(this, s);
}
dt.resolveRef = LE;
function ME(e) {
  return (0, Nt.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : nl.call(this, e);
}
function Ih(e) {
  for (const t of this._compilations)
    if (UE(t, e))
      return t;
}
dt.getCompilingSchema = Ih;
function UE(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function zE(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || li.call(this, e, t);
}
function li(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, Nt._getFullPath)(this.opts.uriResolver, n);
  let a = (0, Nt.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === a)
    return co.call(this, n, e);
  const s = (0, Nt.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const o = li.call(this, e, i);
    return typeof o?.schema != "object" ? void 0 : co.call(this, n, o);
  }
  if (typeof i?.schema == "object") {
    if (i.validate || nl.call(this, i), s === (0, Nt.normalizeId)(t)) {
      const { schema: o } = i, { schemaId: c } = this.opts, u = o[c];
      return u && (a = (0, Nt.resolveUrl)(this.opts.uriResolver, a, u)), new ci({ schema: o, schemaId: c, root: e, baseId: a });
    }
    return co.call(this, n, i);
  }
}
dt.resolveSchema = li;
const qE = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function co(e, { baseId: t, schema: n, root: r }) {
  var a;
  if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/")
    return;
  for (const o of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, hd.unescapeFragment)(o)];
    if (c === void 0)
      return;
    n = c;
    const u = typeof n == "object" && n[this.opts.schemaId];
    !qE.has(o) && u && (t = (0, Nt.resolveUrl)(this.opts.uriResolver, t, u));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, hd.schemaHasRulesButRef)(n, this.RULES)) {
    const o = (0, Nt.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = li.call(this, r, o);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new ci({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const VE = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", BE = "Meta-schema for $data reference (JSON AnySchema extension proposal)", HE = "object", GE = [
  "$data"
], KE = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, WE = !1, JE = {
  $id: VE,
  description: BE,
  type: HE,
  required: GE,
  properties: KE,
  additionalProperties: WE
};
var rl = {}, ui = { exports: {} };
const XE = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), Ch = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), al = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), Dh = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), YE = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
function Fh(e) {
  let t = "", n = 0, r = 0;
  for (r = 0; r < e.length; r++)
    if (n = e[r].charCodeAt(0), n !== 48) {
      if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102))
        return "";
      t += e[r];
      break;
    }
  for (r += 1; r < e.length; r++) {
    if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102))
      return "";
    t += e[r];
  }
  return t;
}
const ZE = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function vd(e) {
  return e.length = 0, !0;
}
function QE(e, t, n) {
  if (e.length) {
    const r = Fh(e);
    if (r !== "")
      t.push(r);
    else
      return n.error = !0, !1;
    e.length = 0;
  }
  return !0;
}
function eS(e) {
  let t = 0;
  const n = { error: !1, address: "", zone: "" }, r = [], a = [];
  let s = !1, i = !1, o = QE;
  for (let c = 0; c < e.length; c++) {
    const u = e[c];
    if (!(u === "[" || u === "]"))
      if (u === ":") {
        if (s === !0 && (i = !0), !o(a, r, n))
          break;
        if (++t > 7) {
          n.error = !0;
          break;
        }
        c > 0 && e[c - 1] === ":" && (s = !0), r.push(":");
        continue;
      } else if (u === "%") {
        if (!o(a, r, n))
          break;
        o = vd;
      } else {
        a.push(u);
        continue;
      }
  }
  return a.length && (o === vd ? n.zone = a.join("") : i ? r.push(a.join("")) : r.push(Fh(a))), n.address = r.join(""), n;
}
function Lh(e) {
  if (tS(e, ":") < 2)
    return { host: e, isIPV6: !1 };
  const t = eS(e);
  if (t.error)
    return { host: e, isIPV6: !1 };
  {
    let n = t.address, r = t.address;
    return t.zone && (n += "%" + t.zone, r += "%25" + t.zone), { host: n, isIPV6: !0, escapedHost: r };
  }
}
function tS(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    e[r] === t && n++;
  return n;
}
function nS(e) {
  let t = e;
  const n = [];
  let r = -1, a = 0;
  for (; a = t.length; ) {
    if (a === 1) {
      if (t === ".")
        break;
      if (t === "/") {
        n.push("/");
        break;
      } else {
        n.push(t);
        break;
      }
    } else if (a === 2) {
      if (t[0] === ".") {
        if (t[1] === ".")
          break;
        if (t[1] === "/") {
          t = t.slice(2);
          continue;
        }
      } else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
        n.push("/");
        break;
      }
    } else if (a === 3 && t === "/..") {
      n.length !== 0 && n.pop(), n.push("/");
      break;
    }
    if (t[0] === ".") {
      if (t[1] === ".") {
        if (t[2] === "/") {
          t = t.slice(3);
          continue;
        }
      } else if (t[1] === "/") {
        t = t.slice(2);
        continue;
      }
    } else if (t[0] === "/" && t[1] === ".") {
      if (t[2] === "/") {
        t = t.slice(2);
        continue;
      } else if (t[2] === "." && t[3] === "/") {
        t = t.slice(3), n.length !== 0 && n.pop();
        continue;
      }
    }
    if ((r = t.indexOf("/", 1)) === -1) {
      n.push(t);
      break;
    } else
      n.push(t.slice(0, r)), t = t.slice(r);
  }
  return n.join("");
}
const rS = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, aS = /[@/?#:]/g, sS = /[@/?#]/g;
function Mh(e, t) {
  const n = t ? sS : aS;
  return n.lastIndex = 0, e.replace(n, (r) => rS[r]);
}
function iS(e, t = !1) {
  if (e.indexOf("%") === -1)
    return e;
  let n = "";
  for (let r = 0; r < e.length; r++) {
    if (e[r] === "%" && r + 2 < e.length) {
      const a = e.slice(r + 1, r + 3);
      if (al(a)) {
        const s = a.toUpperCase(), i = String.fromCharCode(parseInt(s, 16));
        t && Dh(i) ? n += i : n += "%" + s, r += 2;
        continue;
      }
    }
    n += e[r];
  }
  return n;
}
function oS(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    if (e[n] === "%" && n + 2 < e.length) {
      const r = e.slice(n + 1, n + 3);
      if (al(r)) {
        const a = r.toUpperCase(), s = String.fromCharCode(parseInt(a, 16));
        s !== "." && Dh(s) ? t += s : t += "%" + a, n += 2;
        continue;
      }
    }
    YE(e[n]) ? t += e[n] : t += escape(e[n]);
  }
  return t;
}
function cS(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    if (e[n] === "%" && n + 2 < e.length) {
      const r = e.slice(n + 1, n + 3);
      if (al(r)) {
        t += "%" + r.toUpperCase(), n += 2;
        continue;
      }
    }
    t += escape(e[n]);
  }
  return t;
}
function lS(e) {
  const t = [];
  if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
    let n = unescape(e.host);
    if (!Ch(n)) {
      const r = Lh(n);
      r.isIPV6 === !0 ? n = `[${r.escapedHost}]` : n = Mh(n, !1);
    }
    t.push(n);
  }
  return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
}
var Uh = {
  nonSimpleDomain: ZE,
  recomposeAuthority: lS,
  reescapeHostDelimiters: Mh,
  normalizePercentEncoding: iS,
  normalizePathEncoding: oS,
  escapePreservingEscapes: cS,
  removeDotSegments: nS,
  isIPv4: Ch,
  isUUID: XE,
  normalizeIPv6: Lh
};
const { isUUID: uS } = Uh, pS = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
function zh(e) {
  return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
}
function qh(e) {
  return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
}
function Vh(e) {
  const t = String(e.scheme).toLowerCase() === "https";
  return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
}
function dS(e) {
  return e.secure = zh(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
}
function fS(e) {
  if ((e.port === (zh(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
    const [t, n] = e.resourceName.split("?");
    e.path = t && t !== "/" ? t : void 0, e.query = n, e.resourceName = void 0;
  }
  return e.fragment = void 0, e;
}
function mS(e, t) {
  if (!e.path)
    return e.error = "URN can not be parsed", e;
  const n = e.path.match(pS);
  if (n) {
    const r = t.scheme || e.scheme || "urn";
    e.nid = n[1].toLowerCase(), e.nss = n[2];
    const a = `${r}:${t.nid || e.nid}`, s = sl(a);
    e.path = void 0, s && (e = s.parse(e, t));
  } else
    e.error = e.error || "URN can not be parsed.";
  return e;
}
function hS(e, t) {
  if (e.nid === void 0)
    throw new Error("URN without nid cannot be serialized");
  const n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), a = `${n}:${t.nid || r}`, s = sl(a);
  s && (e = s.serialize(e, t));
  const i = e, o = e.nss;
  return i.path = `${r || t.nid}:${o}`, t.skipEscape = !0, i;
}
function vS(e, t) {
  const n = e;
  return n.uuid = n.nss, n.nss = void 0, !t.tolerant && (!n.uuid || !uS(n.uuid)) && (n.error = n.error || "UUID is not valid."), n;
}
function yS(e) {
  const t = e;
  return t.nss = (e.uuid || "").toLowerCase(), t;
}
const Bh = (
  /** @type {SchemeHandler} */
  {
    scheme: "http",
    domainHost: !0,
    parse: qh,
    serialize: Vh
  }
), gS = (
  /** @type {SchemeHandler} */
  {
    scheme: "https",
    domainHost: Bh.domainHost,
    parse: qh,
    serialize: Vh
  }
), hs = (
  /** @type {SchemeHandler} */
  {
    scheme: "ws",
    domainHost: !0,
    parse: dS,
    serialize: fS
  }
), bS = (
  /** @type {SchemeHandler} */
  {
    scheme: "wss",
    domainHost: hs.domainHost,
    parse: hs.parse,
    serialize: hs.serialize
  }
), $S = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn",
    parse: mS,
    serialize: hS,
    skipNormalize: !0
  }
), _S = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn:uuid",
    parse: vS,
    serialize: yS,
    skipNormalize: !0
  }
), Ls = (
  /** @type {Record<SchemeName, SchemeHandler>} */
  {
    http: Bh,
    https: gS,
    ws: hs,
    wss: bS,
    urn: $S,
    "urn:uuid": _S
  }
);
Object.setPrototypeOf(Ls, null);
function sl(e) {
  return e && (Ls[
    /** @type {SchemeName} */
    e
  ] || Ls[
    /** @type {SchemeName} */
    e.toLowerCase()
  ]) || void 0;
}
var wS = {
  SCHEMES: Ls,
  getSchemeHandler: sl
};
const { normalizeIPv6: xS, removeDotSegments: Yr, recomposeAuthority: ES, normalizePercentEncoding: SS, normalizePathEncoding: PS, escapePreservingEscapes: RS, reescapeHostDelimiters: OS, isIPv4: AS, nonSimpleDomain: TS } = Uh, { SCHEMES: jS, getSchemeHandler: Hh } = wS;
function kS(e, t) {
  return typeof e == "string" ? e = /** @type {T} */
  FS(e, t) : typeof e == "object" && (e = /** @type {T} */
  br(qn(e, t), t)), e;
}
function NS(e, t, n) {
  const r = n ? Object.assign({ scheme: "null" }, n) : { scheme: "null" }, a = Gh(br(e, r), br(t, r), r, !0);
  return r.skipEscape = !0, qn(a, r);
}
function Gh(e, t, n, r) {
  const a = {};
  return r || (e = br(qn(e, n), n), t = br(qn(t, n), n)), n = n || {}, !n.tolerant && t.scheme ? (a.scheme = t.scheme, a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = Yr(t.path || ""), a.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = Yr(t.path || ""), a.query = t.query) : (t.path ? (t.path[0] === "/" ? a.path = Yr(t.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? a.path = "/" + t.path : e.path ? a.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : a.path = t.path, a.path = Yr(a.path)), a.query = t.query) : (a.path = e.path, t.query !== void 0 ? a.query = t.query : a.query = e.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = t.fragment, a;
}
function IS(e, t, n) {
  const r = yd(e, n), a = yd(t, n);
  return r !== void 0 && a !== void 0 && r.toLowerCase() === a.toLowerCase();
}
function qn(e, t) {
  const n = {
    host: e.host,
    scheme: e.scheme,
    userinfo: e.userinfo,
    port: e.port,
    path: e.path,
    query: e.query,
    nid: e.nid,
    nss: e.nss,
    uuid: e.uuid,
    fragment: e.fragment,
    reference: e.reference,
    resourceName: e.resourceName,
    secure: e.secure,
    error: ""
  }, r = Object.assign({}, t), a = [], s = Hh(r.scheme || n.scheme);
  s && s.serialize && s.serialize(n, r), n.path !== void 0 && (r.skipEscape ? n.path = SS(n.path) : (n.path = RS(n.path), n.scheme !== void 0 && (n.path = n.path.split("%3A").join(":")))), r.reference !== "suffix" && n.scheme && a.push(n.scheme, ":");
  const i = ES(n);
  if (i !== void 0 && (r.reference !== "suffix" && a.push("//"), a.push(i), n.path && n.path[0] !== "/" && a.push("/")), n.path !== void 0) {
    let o = n.path;
    !r.absolutePath && (!s || !s.absolutePath) && (o = Yr(o)), i === void 0 && o[0] === "/" && o[1] === "/" && (o = "/%2F" + o.slice(2)), a.push(o);
  }
  return n.query !== void 0 && a.push("?", n.query), n.fragment !== void 0 && a.push("#", n.fragment), a.join("");
}
const CS = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
function DS(e, t) {
  if (t[2] !== void 0 && e.path && e.path[0] !== "/")
    return 'URI path must start with "/" when authority is present.';
  if (typeof e.port == "number" && (e.port < 0 || e.port > 65535))
    return "URI port is malformed.";
}
function Kh(e, t) {
  const n = Object.assign({}, t), r = {
    scheme: void 0,
    userinfo: void 0,
    host: "",
    port: void 0,
    path: "",
    query: void 0,
    fragment: void 0
  };
  let a = !1, s = !1;
  n.reference === "suffix" && (n.scheme ? e = n.scheme + ":" + e : e = "//" + e);
  const i = e.match(CS);
  if (i) {
    r.scheme = i[1], r.userinfo = i[3], r.host = i[4], r.port = parseInt(i[5], 10), r.path = i[6] || "", r.query = i[7], r.fragment = i[8], isNaN(r.port) && (r.port = i[5]);
    const o = DS(r, i);
    if (o !== void 0 && (r.error = r.error || o, a = !0), r.host)
      if (AS(r.host) === !1) {
        const l = xS(r.host);
        r.host = l.host.toLowerCase(), s = l.isIPV6;
      } else
        s = !0;
    r.scheme === void 0 && r.userinfo === void 0 && r.host === void 0 && r.port === void 0 && r.query === void 0 && !r.path ? r.reference = "same-document" : r.scheme === void 0 ? r.reference = "relative" : r.fragment === void 0 ? r.reference = "absolute" : r.reference = "uri", n.reference && n.reference !== "suffix" && n.reference !== r.reference && (r.error = r.error || "URI is not a " + n.reference + " reference.");
    const c = Hh(n.scheme || r.scheme);
    if (!n.unicodeSupport && (!c || !c.unicodeSupport) && r.host && (n.domainHost || c && c.domainHost) && s === !1 && TS(r.host))
      try {
        r.host = new URL("http://" + r.host).hostname;
      } catch (u) {
        r.error = r.error || "Host's domain name can not be converted to ASCII: " + u;
      }
    if ((!c || c && !c.skipNormalize) && (e.indexOf("%") !== -1 && (r.scheme !== void 0 && (r.scheme = unescape(r.scheme)), r.host !== void 0 && (r.host = OS(unescape(r.host), s))), r.path && (r.path = PS(r.path)), r.fragment))
      try {
        r.fragment = encodeURI(decodeURIComponent(r.fragment));
      } catch {
        r.error = r.error || "URI malformed";
      }
    c && c.parse && c.parse(r, n);
  } else
    r.error = r.error || "URI can not be parsed.";
  return { parsed: r, malformedAuthorityOrPort: a };
}
function br(e, t) {
  return Kh(e, t).parsed;
}
function FS(e, t) {
  return Wh(e, t).normalized;
}
function Wh(e, t) {
  const { parsed: n, malformedAuthorityOrPort: r } = Kh(e, t);
  return {
    normalized: r ? e : qn(n, t),
    malformedAuthorityOrPort: r
  };
}
function yd(e, t) {
  if (typeof e == "string") {
    const { normalized: n, malformedAuthorityOrPort: r } = Wh(e, t);
    return r ? void 0 : n;
  }
  if (typeof e == "object")
    return qn(e, t);
}
const il = {
  SCHEMES: jS,
  normalize: kS,
  resolve: NS,
  resolveComponent: Gh,
  equal: IS,
  serialize: qn,
  parse: br
};
ui.exports = il;
ui.exports.default = il;
ui.exports.fastUri = il;
var Jh = ui.exports;
Object.defineProperty(rl, "__esModule", { value: !0 });
const Xh = Jh;
Xh.code = 'require("ajv/dist/runtime/uri").default';
rl.default = Xh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Ct;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = de;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return n.CodeGen;
  } });
  const r = Oa, a = Or, s = zn, i = dt, o = de, c = Ye, u = ze, l = V, p = JE, m = rl, h = (R, _) => new RegExp(R, _);
  h.code = "new RegExp";
  const g = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), v = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, f = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, $ = 200;
  function E(R) {
    var _, S, w, d, b, x, k, I, G, W, ce, le, et, ft, Ue, re, Ae, q, U, ue, we, ae, Oe, ke, xe;
    const Be = R.strict, $t = (_ = R.code) === null || _ === void 0 ? void 0 : _.optimize, Ne = $t === !0 || $t === void 0 ? 1 : $t || 0, rn = (w = (S = R.code) === null || S === void 0 ? void 0 : S.regExp) !== null && w !== void 0 ? w : h, Pi = (d = R.uriResolver) !== null && d !== void 0 ? d : m.default;
    return {
      strictSchema: (x = (b = R.strictSchema) !== null && b !== void 0 ? b : Be) !== null && x !== void 0 ? x : !0,
      strictNumbers: (I = (k = R.strictNumbers) !== null && k !== void 0 ? k : Be) !== null && I !== void 0 ? I : !0,
      strictTypes: (W = (G = R.strictTypes) !== null && G !== void 0 ? G : Be) !== null && W !== void 0 ? W : "log",
      strictTuples: (le = (ce = R.strictTuples) !== null && ce !== void 0 ? ce : Be) !== null && le !== void 0 ? le : "log",
      strictRequired: (ft = (et = R.strictRequired) !== null && et !== void 0 ? et : Be) !== null && ft !== void 0 ? ft : !1,
      code: R.code ? { ...R.code, optimize: Ne, regExp: rn } : { optimize: Ne, regExp: rn },
      loopRequired: (Ue = R.loopRequired) !== null && Ue !== void 0 ? Ue : $,
      loopEnum: (re = R.loopEnum) !== null && re !== void 0 ? re : $,
      meta: (Ae = R.meta) !== null && Ae !== void 0 ? Ae : !0,
      messages: (q = R.messages) !== null && q !== void 0 ? q : !0,
      inlineRefs: (U = R.inlineRefs) !== null && U !== void 0 ? U : !0,
      schemaId: (ue = R.schemaId) !== null && ue !== void 0 ? ue : "$id",
      addUsedSchema: (we = R.addUsedSchema) !== null && we !== void 0 ? we : !0,
      validateSchema: (ae = R.validateSchema) !== null && ae !== void 0 ? ae : !0,
      validateFormats: (Oe = R.validateFormats) !== null && Oe !== void 0 ? Oe : !0,
      unicodeRegExp: (ke = R.unicodeRegExp) !== null && ke !== void 0 ? ke : !0,
      int32range: (xe = R.int32range) !== null && xe !== void 0 ? xe : !0,
      uriResolver: Pi
    };
  }
  class O {
    constructor(_ = {}) {
      this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), _ = this.opts = { ..._, ...E(_) };
      const { es5: S, lines: w } = this.opts.code;
      this.scope = new o.ValueScope({ scope: {}, prefixes: y, es5: S, lines: w }), this.logger = L(_.logger);
      const d = _.validateFormats;
      _.validateFormats = !1, this.RULES = (0, s.getRules)(), A.call(this, v, _, "NOT SUPPORTED"), A.call(this, f, _, "DEPRECATED", "warn"), this._metaOpts = T.call(this), _.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), _.keywords && J.call(this, _.keywords), typeof _.meta == "object" && this.addMetaSchema(_.meta), X.call(this), _.validateFormats = d;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: _, meta: S, schemaId: w } = this.opts;
      let d = p;
      w === "id" && (d = { ...p }, d.id = d.$id, delete d.$id), S && _ && this.addMetaSchema(d, d[w], !1);
    }
    defaultMeta() {
      const { meta: _, schemaId: S } = this.opts;
      return this.opts.defaultMeta = typeof _ == "object" ? _[S] || _ : void 0;
    }
    validate(_, S) {
      let w;
      if (typeof _ == "string") {
        if (w = this.getSchema(_), !w)
          throw new Error(`no schema with key or ref "${_}"`);
      } else
        w = this.compile(_);
      const d = w(S);
      return "$async" in w || (this.errors = w.errors), d;
    }
    compile(_, S) {
      const w = this._addSchema(_, S);
      return w.validate || this._compileSchemaEnv(w);
    }
    compileAsync(_, S) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: w } = this.opts;
      return d.call(this, _, S);
      async function d(W, ce) {
        await b.call(this, W.$schema);
        const le = this._addSchema(W, ce);
        return le.validate || x.call(this, le);
      }
      async function b(W) {
        W && !this.getSchema(W) && await d.call(this, { $ref: W }, !0);
      }
      async function x(W) {
        try {
          return this._compileSchemaEnv(W);
        } catch (ce) {
          if (!(ce instanceof a.default))
            throw ce;
          return k.call(this, ce), await I.call(this, ce.missingSchema), x.call(this, W);
        }
      }
      function k({ missingSchema: W, missingRef: ce }) {
        if (this.refs[W])
          throw new Error(`AnySchema ${W} is loaded but ${ce} cannot be resolved`);
      }
      async function I(W) {
        const ce = await G.call(this, W);
        this.refs[W] || await b.call(this, ce.$schema), this.refs[W] || this.addSchema(ce, W, S);
      }
      async function G(W) {
        const ce = this._loading[W];
        if (ce)
          return ce;
        try {
          return await (this._loading[W] = w(W));
        } finally {
          delete this._loading[W];
        }
      }
    }
    // Adds schema to the instance
    addSchema(_, S, w, d = this.opts.validateSchema) {
      if (Array.isArray(_)) {
        for (const x of _)
          this.addSchema(x, void 0, w, d);
        return this;
      }
      let b;
      if (typeof _ == "object") {
        const { schemaId: x } = this.opts;
        if (b = _[x], b !== void 0 && typeof b != "string")
          throw new Error(`schema ${x} must be string`);
      }
      return S = (0, c.normalizeId)(S || b), this._checkUnique(S), this.schemas[S] = this._addSchema(_, w, S, d, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(_, S, w = this.opts.validateSchema) {
      return this.addSchema(_, S, !0, w), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(_, S) {
      if (typeof _ == "boolean")
        return !0;
      let w;
      if (w = _.$schema, w !== void 0 && typeof w != "string")
        throw new Error("$schema must be a string");
      if (w = w || this.opts.defaultMeta || this.defaultMeta(), !w)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const d = this.validate(w, _);
      if (!d && S) {
        const b = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(b);
        else
          throw new Error(b);
      }
      return d;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(_) {
      let S;
      for (; typeof (S = M.call(this, _)) == "string"; )
        _ = S;
      if (S === void 0) {
        const { schemaId: w } = this.opts, d = new i.SchemaEnv({ schema: {}, schemaId: w });
        if (S = i.resolveSchema.call(this, d, _), !S)
          return;
        this.refs[_] = S;
      }
      return S.validate || this._compileSchemaEnv(S);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(_) {
      if (_ instanceof RegExp)
        return this._removeAllSchemas(this.schemas, _), this._removeAllSchemas(this.refs, _), this;
      switch (typeof _) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const S = M.call(this, _);
          return typeof S == "object" && this._cache.delete(S.schema), delete this.schemas[_], delete this.refs[_], this;
        }
        case "object": {
          const S = _;
          this._cache.delete(S);
          let w = _[this.opts.schemaId];
          return w && (w = (0, c.normalizeId)(w), delete this.schemas[w], delete this.refs[w]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(_) {
      for (const S of _)
        this.addKeyword(S);
      return this;
    }
    addKeyword(_, S) {
      let w;
      if (typeof _ == "string")
        w = _, typeof S == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), S.keyword = w);
      else if (typeof _ == "object" && S === void 0) {
        if (S = _, w = S.keyword, Array.isArray(w) && !w.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (j.call(this, w, S), !S)
        return (0, l.eachItem)(w, (b) => D.call(this, b)), this;
      z.call(this, S);
      const d = {
        ...S,
        type: (0, u.getJSONTypes)(S.type),
        schemaType: (0, u.getJSONTypes)(S.schemaType)
      };
      return (0, l.eachItem)(w, d.type.length === 0 ? (b) => D.call(this, b, d) : (b) => d.type.forEach((x) => D.call(this, b, d, x))), this;
    }
    getKeyword(_) {
      const S = this.RULES.all[_];
      return typeof S == "object" ? S.definition : !!S;
    }
    // Remove keyword
    removeKeyword(_) {
      const { RULES: S } = this;
      delete S.keywords[_], delete S.all[_];
      for (const w of S.rules) {
        const d = w.rules.findIndex((b) => b.keyword === _);
        d >= 0 && w.rules.splice(d, 1);
      }
      return this;
    }
    // Add format
    addFormat(_, S) {
      return typeof S == "string" && (S = new RegExp(S)), this.formats[_] = S, this;
    }
    errorsText(_ = this.errors, { separator: S = ", ", dataVar: w = "data" } = {}) {
      return !_ || _.length === 0 ? "No errors" : _.map((d) => `${w}${d.instancePath} ${d.message}`).reduce((d, b) => d + S + b);
    }
    $dataMetaSchema(_, S) {
      const w = this.RULES.all;
      _ = JSON.parse(JSON.stringify(_));
      for (const d of S) {
        const b = d.split("/").slice(1);
        let x = _;
        for (const k of b)
          x = x[k];
        for (const k in w) {
          const I = w[k];
          if (typeof I != "object")
            continue;
          const { $data: G } = I.definition, W = x[k];
          G && W && (x[k] = H(W));
        }
      }
      return _;
    }
    _removeAllSchemas(_, S) {
      for (const w in _) {
        const d = _[w];
        (!S || S.test(w)) && (typeof d == "string" ? delete _[w] : d && !d.meta && (this._cache.delete(d.schema), delete _[w]));
      }
    }
    _addSchema(_, S, w, d = this.opts.validateSchema, b = this.opts.addUsedSchema) {
      let x;
      const { schemaId: k } = this.opts;
      if (typeof _ == "object")
        x = _[k];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof _ != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let I = this._cache.get(_);
      if (I !== void 0)
        return I;
      w = (0, c.normalizeId)(x || w);
      const G = c.getSchemaRefs.call(this, _, w);
      return I = new i.SchemaEnv({ schema: _, schemaId: k, meta: S, baseId: w, localRefs: G }), this._cache.set(I.schema, I), b && !w.startsWith("#") && (w && this._checkUnique(w), this.refs[w] = I), d && this.validateSchema(_, !0), I;
    }
    _checkUnique(_) {
      if (this.schemas[_] || this.refs[_])
        throw new Error(`schema with key or id "${_}" already exists`);
    }
    _compileSchemaEnv(_) {
      if (_.meta ? this._compileMetaSchema(_) : i.compileSchema.call(this, _), !_.validate)
        throw new Error("ajv implementation error");
      return _.validate;
    }
    _compileMetaSchema(_) {
      const S = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, _);
      } finally {
        this.opts = S;
      }
    }
  }
  O.ValidationError = r.default, O.MissingRefError = a.default, e.default = O;
  function A(R, _, S, w = "error") {
    for (const d in R) {
      const b = d;
      b in _ && this.logger[w](`${S}: option ${d}. ${R[b]}`);
    }
  }
  function M(R) {
    return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
  }
  function X() {
    const R = this.opts.schemas;
    if (R)
      if (Array.isArray(R))
        this.addSchema(R);
      else
        for (const _ in R)
          this.addSchema(R[_], _);
  }
  function C() {
    for (const R in this.opts.formats) {
      const _ = this.opts.formats[R];
      _ && this.addFormat(R, _);
    }
  }
  function J(R) {
    if (Array.isArray(R)) {
      this.addVocabulary(R);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const _ in R) {
      const S = R[_];
      S.keyword || (S.keyword = _), this.addKeyword(S);
    }
  }
  function T() {
    const R = { ...this.opts };
    for (const _ of g)
      delete R[_];
    return R;
  }
  const F = { log() {
  }, warn() {
  }, error() {
  } };
  function L(R) {
    if (R === !1)
      return F;
    if (R === void 0)
      return console;
    if (R.log && R.warn && R.error)
      return R;
    throw new Error("logger must implement log, warn and error methods");
  }
  const Z = /^[a-z_$][a-z0-9_$:-]*$/i;
  function j(R, _) {
    const { RULES: S } = this;
    if ((0, l.eachItem)(R, (w) => {
      if (S.keywords[w])
        throw new Error(`Keyword ${w} is already defined`);
      if (!Z.test(w))
        throw new Error(`Keyword ${w} has invalid name`);
    }), !!_ && _.$data && !("code" in _ || "validate" in _))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function D(R, _, S) {
    var w;
    const d = _?.post;
    if (S && d)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: b } = this;
    let x = d ? b.post : b.rules.find(({ type: I }) => I === S);
    if (x || (x = { type: S, rules: [] }, b.rules.push(x)), b.keywords[R] = !0, !_)
      return;
    const k = {
      keyword: R,
      definition: {
        ..._,
        type: (0, u.getJSONTypes)(_.type),
        schemaType: (0, u.getJSONTypes)(_.schemaType)
      }
    };
    _.before ? B.call(this, x, k, _.before) : x.rules.push(k), b.all[R] = k, (w = _.implements) === null || w === void 0 || w.forEach((I) => this.addKeyword(I));
  }
  function B(R, _, S) {
    const w = R.rules.findIndex((d) => d.keyword === S);
    w >= 0 ? R.rules.splice(w, 0, _) : (R.rules.push(_), this.logger.warn(`rule ${S} is not defined`));
  }
  function z(R) {
    let { metaSchema: _ } = R;
    _ !== void 0 && (R.$data && this.opts.$data && (_ = H(_)), R.validateSchema = this.compile(_, !0));
  }
  const Q = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function H(R) {
    return { anyOf: [R, Q] };
  }
})(rh);
var ol = {}, cl = {}, ll = {};
Object.defineProperty(ll, "__esModule", { value: !0 });
const LS = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
ll.default = LS;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.callRef = nn.getValidate = void 0;
const MS = Or, gd = ve, mt = de, Xn = xt, bd = dt, qa = V, US = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: a, schemaEnv: s, validateName: i, opts: o, self: c } = r, { root: u } = s;
    if ((n === "#" || n === "#/") && a === u.baseId)
      return p();
    const l = bd.resolveRef.call(c, u, a, n);
    if (l === void 0)
      throw new MS.default(r.opts.uriResolver, a, n);
    if (l instanceof bd.SchemaEnv)
      return m(l);
    return h(l);
    function p() {
      if (s === u)
        return vs(e, i, s, s.$async);
      const g = t.scopeValue("root", { ref: u });
      return vs(e, (0, mt._)`${g}.validate`, u, u.$async);
    }
    function m(g) {
      const y = Yh(e, g);
      vs(e, y, g, g.$async);
    }
    function h(g) {
      const y = t.scopeValue("schema", o.code.source === !0 ? { ref: g, code: (0, mt.stringify)(g) } : { ref: g }), v = t.name("valid"), f = e.subschema({
        schema: g,
        dataTypes: [],
        schemaPath: mt.nil,
        topSchemaRef: y,
        errSchemaPath: n
      }, v);
      e.mergeEvaluated(f), e.ok(v);
    }
  }
};
function Yh(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, mt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
nn.getValidate = Yh;
function vs(e, t, n, r) {
  const { gen: a, it: s } = e, { allErrors: i, schemaEnv: o, opts: c } = s, u = c.passContext ? Xn.default.this : mt.nil;
  r ? l() : p();
  function l() {
    if (!o.$async)
      throw new Error("async schema referenced by sync schema");
    const g = a.let("valid");
    a.try(() => {
      a.code((0, mt._)`await ${(0, gd.callValidateCode)(e, t, u)}`), h(t), i || a.assign(g, !0);
    }, (y) => {
      a.if((0, mt._)`!(${y} instanceof ${s.ValidationError})`, () => a.throw(y)), m(y), i || a.assign(g, !1);
    }), e.ok(g);
  }
  function p() {
    e.result((0, gd.callValidateCode)(e, t, u), () => h(t), () => m(t));
  }
  function m(g) {
    const y = (0, mt._)`${g}.errors`;
    a.assign(Xn.default.vErrors, (0, mt._)`${Xn.default.vErrors} === null ? ${y} : ${Xn.default.vErrors}.concat(${y})`), a.assign(Xn.default.errors, (0, mt._)`${Xn.default.vErrors}.length`);
  }
  function h(g) {
    var y;
    if (!s.opts.unevaluated)
      return;
    const v = (y = n?.validate) === null || y === void 0 ? void 0 : y.evaluated;
    if (s.props !== !0)
      if (v && !v.dynamicProps)
        v.props !== void 0 && (s.props = qa.mergeEvaluated.props(a, v.props, s.props));
      else {
        const f = a.var("props", (0, mt._)`${g}.evaluated.props`);
        s.props = qa.mergeEvaluated.props(a, f, s.props, mt.Name);
      }
    if (s.items !== !0)
      if (v && !v.dynamicItems)
        v.items !== void 0 && (s.items = qa.mergeEvaluated.items(a, v.items, s.items));
      else {
        const f = a.var("items", (0, mt._)`${g}.evaluated.items`);
        s.items = qa.mergeEvaluated.items(a, f, s.items, mt.Name);
      }
  }
}
nn.callRef = vs;
nn.default = US;
Object.defineProperty(cl, "__esModule", { value: !0 });
const zS = ll, qS = nn, VS = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  zS.default,
  qS.default
];
cl.default = VS;
var ul = {}, pl = {};
Object.defineProperty(pl, "__esModule", { value: !0 });
const Ms = de, ln = Ms.operators, Us = {
  maximum: { okStr: "<=", ok: ln.LTE, fail: ln.GT },
  minimum: { okStr: ">=", ok: ln.GTE, fail: ln.LT },
  exclusiveMaximum: { okStr: "<", ok: ln.LT, fail: ln.GTE },
  exclusiveMinimum: { okStr: ">", ok: ln.GT, fail: ln.LTE }
}, BS = {
  message: ({ keyword: e, schemaCode: t }) => (0, Ms.str)`must be ${Us[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Ms._)`{comparison: ${Us[e].okStr}, limit: ${t}}`
}, HS = {
  keyword: Object.keys(Us),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: BS,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Ms._)`${n} ${Us[t].fail} ${r} || isNaN(${n})`);
  }
};
pl.default = HS;
var dl = {};
Object.defineProperty(dl, "__esModule", { value: !0 });
const ta = de, GS = {
  message: ({ schemaCode: e }) => (0, ta.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, ta._)`{multipleOf: ${e}}`
}, KS = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: GS,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: a } = e, s = a.opts.multipleOfPrecision, i = t.let("res"), o = s ? (0, ta._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, ta._)`${i} !== parseInt(${i})`;
    e.fail$data((0, ta._)`(${r} === 0 || (${i} = ${n}/${r}, ${o}))`);
  }
};
dl.default = KS;
var fl = {}, ml = {};
Object.defineProperty(ml, "__esModule", { value: !0 });
function Zh(e) {
  const t = e.length;
  let n = 0, r = 0, a;
  for (; r < t; )
    n++, a = e.charCodeAt(r++), a >= 55296 && a <= 56319 && r < t && (a = e.charCodeAt(r), (a & 64512) === 56320 && r++);
  return n;
}
ml.default = Zh;
Zh.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(fl, "__esModule", { value: !0 });
const En = de, WS = V, JS = ml, XS = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, En.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, En._)`{limit: ${e}}`
}, YS = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: XS,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: a } = e, s = t === "maxLength" ? En.operators.GT : En.operators.LT, i = a.opts.unicode === !1 ? (0, En._)`${n}.length` : (0, En._)`${(0, WS.useFunc)(e.gen, JS.default)}(${n})`;
    e.fail$data((0, En._)`${i} ${s} ${r}`);
  }
};
fl.default = YS;
var hl = {};
Object.defineProperty(hl, "__esModule", { value: !0 });
const ZS = ve, QS = V, ir = de, e1 = {
  message: ({ schemaCode: e }) => (0, ir.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, ir._)`{pattern: ${e}}`
}, t1 = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: e1,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e, o = i.opts.unicodeRegExp ? "u" : "";
    if (r) {
      const { regExp: c } = i.opts.code, u = c.code === "new RegExp" ? (0, ir._)`new RegExp` : (0, QS.useFunc)(t, c), l = t.let("valid");
      t.try(() => t.assign(l, (0, ir._)`${u}(${s}, ${o}).test(${n})`), () => t.assign(l, !1)), e.fail$data((0, ir._)`!${l}`);
    } else {
      const c = (0, ZS.usePattern)(e, a);
      e.fail$data((0, ir._)`!${c}.test(${n})`);
    }
  }
};
hl.default = t1;
var vl = {};
Object.defineProperty(vl, "__esModule", { value: !0 });
const na = de, n1 = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, na.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, na._)`{limit: ${e}}`
}, r1 = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: n1,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxProperties" ? na.operators.GT : na.operators.LT;
    e.fail$data((0, na._)`Object.keys(${n}).length ${a} ${r}`);
  }
};
vl.default = r1;
var yl = {};
Object.defineProperty(yl, "__esModule", { value: !0 });
const Hr = ve, ra = de, a1 = V, s1 = {
  message: ({ params: { missingProperty: e } }) => (0, ra.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, ra._)`{missingProperty: ${e}}`
}, i1 = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: s1,
  code(e) {
    const { gen: t, schema: n, schemaCode: r, data: a, $data: s, it: i } = e, { opts: o } = i;
    if (!s && n.length === 0)
      return;
    const c = n.length >= o.loopRequired;
    if (i.allErrors ? u() : l(), o.strictRequired) {
      const h = e.parentSchema.properties, { definedProperties: g } = e.it;
      for (const y of n)
        if (h?.[y] === void 0 && !g.has(y)) {
          const v = i.schemaEnv.baseId + i.errSchemaPath, f = `required property "${y}" is not defined at "${v}" (strictRequired)`;
          (0, a1.checkStrictMode)(i, f, i.opts.strictRequired);
        }
    }
    function u() {
      if (c || s)
        e.block$data(ra.nil, p);
      else
        for (const h of n)
          (0, Hr.checkReportMissingProp)(e, h);
    }
    function l() {
      const h = t.let("missing");
      if (c || s) {
        const g = t.let("valid", !0);
        e.block$data(g, () => m(h, g)), e.ok(g);
      } else
        t.if((0, Hr.checkMissingProp)(e, n, h)), (0, Hr.reportMissingProp)(e, h), t.else();
    }
    function p() {
      t.forOf("prop", r, (h) => {
        e.setParams({ missingProperty: h }), t.if((0, Hr.noPropertyInData)(t, a, h, o.ownProperties), () => e.error());
      });
    }
    function m(h, g) {
      e.setParams({ missingProperty: h }), t.forOf(h, r, () => {
        t.assign(g, (0, Hr.propertyInData)(t, a, h, o.ownProperties)), t.if((0, ra.not)(g), () => {
          e.error(), t.break();
        });
      }, ra.nil);
    }
  }
};
yl.default = i1;
var gl = {};
Object.defineProperty(gl, "__esModule", { value: !0 });
const aa = de, o1 = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, aa.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, aa._)`{limit: ${e}}`
}, c1 = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: o1,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxItems" ? aa.operators.GT : aa.operators.LT;
    e.fail$data((0, aa._)`${n}.length ${a} ${r}`);
  }
};
gl.default = c1;
var bl = {}, Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
const Qh = oi;
Qh.code = 'require("ajv/dist/runtime/equal").default';
Aa.default = Qh;
Object.defineProperty(bl, "__esModule", { value: !0 });
const lo = ze, We = de, l1 = V, u1 = Aa, p1 = {
  message: ({ params: { i: e, j: t } }) => (0, We.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, We._)`{i: ${e}, j: ${t}}`
}, d1 = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: p1,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, parentSchema: s, schemaCode: i, it: o } = e;
    if (!r && !a)
      return;
    const c = t.let("valid"), u = s.items ? (0, lo.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, We._)`${i} === false`), e.ok(c);
    function l() {
      const g = t.let("i", (0, We._)`${n}.length`), y = t.let("j");
      e.setParams({ i: g, j: y }), t.assign(c, !0), t.if((0, We._)`${g} > 1`, () => (p() ? m : h)(g, y));
    }
    function p() {
      return u.length > 0 && !u.some((g) => g === "object" || g === "array");
    }
    function m(g, y) {
      const v = t.name("item"), f = (0, lo.checkDataTypes)(u, v, o.opts.strictNumbers, lo.DataType.Wrong), $ = t.const("indices", (0, We._)`{}`);
      t.for((0, We._)`;${g}--;`, () => {
        t.let(v, (0, We._)`${n}[${g}]`), t.if(f, (0, We._)`continue`), u.length > 1 && t.if((0, We._)`typeof ${v} == "string"`, (0, We._)`${v} += "_"`), t.if((0, We._)`typeof ${$}[${v}] == "number"`, () => {
          t.assign(y, (0, We._)`${$}[${v}]`), e.error(), t.assign(c, !1).break();
        }).code((0, We._)`${$}[${v}] = ${g}`);
      });
    }
    function h(g, y) {
      const v = (0, l1.useFunc)(t, u1.default), f = t.name("outer");
      t.label(f).for((0, We._)`;${g}--;`, () => t.for((0, We._)`${y} = ${g}; ${y}--;`, () => t.if((0, We._)`${v}(${n}[${g}], ${n}[${y}])`, () => {
        e.error(), t.assign(c, !1).break(f);
      })));
    }
  }
};
bl.default = d1;
var $l = {};
Object.defineProperty($l, "__esModule", { value: !0 });
const Qo = de, f1 = V, m1 = Aa, h1 = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Qo._)`{allowedValue: ${e}}`
}, v1 = {
  keyword: "const",
  $data: !0,
  error: h1,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: a, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, Qo._)`!${(0, f1.useFunc)(t, m1.default)}(${n}, ${a})`) : e.fail((0, Qo._)`${s} !== ${n}`);
  }
};
$l.default = v1;
var _l = {};
Object.defineProperty(_l, "__esModule", { value: !0 });
const Zr = de, y1 = V, g1 = Aa, b1 = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Zr._)`{allowedValues: ${e}}`
}, $1 = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: b1,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e;
    if (!r && a.length === 0)
      throw new Error("enum must have non-empty array");
    const o = a.length >= i.opts.loopEnum;
    let c;
    const u = () => c ?? (c = (0, y1.useFunc)(t, g1.default));
    let l;
    if (o || r)
      l = t.let("valid"), e.block$data(l, p);
    else {
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const h = t.const("vSchema", s);
      l = (0, Zr.or)(...a.map((g, y) => m(h, y)));
    }
    e.pass(l);
    function p() {
      t.assign(l, !1), t.forOf("v", s, (h) => t.if((0, Zr._)`${u()}(${n}, ${h})`, () => t.assign(l, !0).break()));
    }
    function m(h, g) {
      const y = a[g];
      return typeof y == "object" && y !== null ? (0, Zr._)`${u()}(${n}, ${h}[${g}])` : (0, Zr._)`${n} === ${y}`;
    }
  }
};
_l.default = $1;
Object.defineProperty(ul, "__esModule", { value: !0 });
const _1 = pl, w1 = dl, x1 = fl, E1 = hl, S1 = vl, P1 = yl, R1 = gl, O1 = bl, A1 = $l, T1 = _l, j1 = [
  // number
  _1.default,
  w1.default,
  // string
  x1.default,
  E1.default,
  // object
  S1.default,
  P1.default,
  // array
  R1.default,
  O1.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  A1.default,
  T1.default
];
ul.default = j1;
var wl = {}, Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.validateAdditionalItems = void 0;
const Sn = de, ec = V, k1 = {
  message: ({ params: { len: e } }) => (0, Sn.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, Sn._)`{limit: ${e}}`
}, N1 = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: k1,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, ec.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    ev(e, r);
  }
};
function ev(e, t) {
  const { gen: n, schema: r, data: a, keyword: s, it: i } = e;
  i.items = !0;
  const o = n.const("len", (0, Sn._)`${a}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, Sn._)`${o} <= ${t.length}`);
  else if (typeof r == "object" && !(0, ec.alwaysValidSchema)(i, r)) {
    const u = n.var("valid", (0, Sn._)`${o} <= ${t.length}`);
    n.if((0, Sn.not)(u), () => c(u)), e.ok(u);
  }
  function c(u) {
    n.forRange("i", t.length, o, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: ec.Type.Num }, u), i.allErrors || n.if((0, Sn.not)(u), () => n.break());
    });
  }
}
Ar.validateAdditionalItems = ev;
Ar.default = N1;
var xl = {}, Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.validateTuple = void 0;
const $d = de, ys = V, I1 = ve, C1 = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return tv(e, "additionalItems", t);
    n.items = !0, !(0, ys.alwaysValidSchema)(n, t) && e.ok((0, I1.validateArray)(e));
  }
};
function tv(e, t, n = e.schema) {
  const { gen: r, parentSchema: a, data: s, keyword: i, it: o } = e;
  l(a), o.opts.unevaluated && n.length && o.items !== !0 && (o.items = ys.mergeEvaluated.items(r, n.length, o.items));
  const c = r.name("valid"), u = r.const("len", (0, $d._)`${s}.length`);
  n.forEach((p, m) => {
    (0, ys.alwaysValidSchema)(o, p) || (r.if((0, $d._)`${u} > ${m}`, () => e.subschema({
      keyword: i,
      schemaProp: m,
      dataProp: m
    }, c)), e.ok(c));
  });
  function l(p) {
    const { opts: m, errSchemaPath: h } = o, g = n.length, y = g === p.minItems && (g === p.maxItems || p[t] === !1);
    if (m.strictTuples && !y) {
      const v = `"${i}" is ${g}-tuple, but minItems or maxItems/${t} are not specified or different at path "${h}"`;
      (0, ys.checkStrictMode)(o, v, m.strictTuples);
    }
  }
}
Tr.validateTuple = tv;
Tr.default = C1;
Object.defineProperty(xl, "__esModule", { value: !0 });
const D1 = Tr, F1 = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, D1.validateTuple)(e, "items")
};
xl.default = F1;
var El = {};
Object.defineProperty(El, "__esModule", { value: !0 });
const _d = de, L1 = V, M1 = ve, U1 = Ar, z1 = {
  message: ({ params: { len: e } }) => (0, _d.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, _d._)`{limit: ${e}}`
}, q1 = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: z1,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: a } = n;
    r.items = !0, !(0, L1.alwaysValidSchema)(r, t) && (a ? (0, U1.validateAdditionalItems)(e, a) : e.ok((0, M1.validateArray)(e)));
  }
};
El.default = q1;
var Sl = {};
Object.defineProperty(Sl, "__esModule", { value: !0 });
const Et = de, Va = V, V1 = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Et.str)`must contain at least ${e} valid item(s)` : (0, Et.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Et._)`{minContains: ${e}}` : (0, Et._)`{minContains: ${e}, maxContains: ${t}}`
}, B1 = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: V1,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    let i, o;
    const { minContains: c, maxContains: u } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, o = u) : i = 1;
    const l = t.const("len", (0, Et._)`${a}.length`);
    if (e.setParams({ min: i, max: o }), o === void 0 && i === 0) {
      (0, Va.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (o !== void 0 && i > o) {
      (0, Va.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Va.alwaysValidSchema)(s, n)) {
      let y = (0, Et._)`${l} >= ${i}`;
      o !== void 0 && (y = (0, Et._)`${y} && ${l} <= ${o}`), e.pass(y);
      return;
    }
    s.items = !0;
    const p = t.name("valid");
    o === void 0 && i === 1 ? h(p, () => t.if(p, () => t.break())) : i === 0 ? (t.let(p, !0), o !== void 0 && t.if((0, Et._)`${a}.length > 0`, m)) : (t.let(p, !1), m()), e.result(p, () => e.reset());
    function m() {
      const y = t.name("_valid"), v = t.let("count", 0);
      h(y, () => t.if(y, () => g(v)));
    }
    function h(y, v) {
      t.forRange("i", 0, l, (f) => {
        e.subschema({
          keyword: "contains",
          dataProp: f,
          dataPropType: Va.Type.Num,
          compositeRule: !0
        }, y), v();
      });
    }
    function g(y) {
      t.code((0, Et._)`${y}++`), o === void 0 ? t.if((0, Et._)`${y} >= ${i}`, () => t.assign(p, !0).break()) : (t.if((0, Et._)`${y} > ${o}`, () => t.assign(p, !1).break()), i === 1 ? t.assign(p, !0) : t.if((0, Et._)`${y} >= ${i}`, () => t.assign(p, !0)));
    }
  }
};
Sl.default = B1;
var pi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = de, n = V, r = ve;
  e.error = {
    message: ({ params: { property: c, depsCount: u, deps: l } }) => {
      const p = u === 1 ? "property" : "properties";
      return (0, t.str)`must have ${p} ${l} when property ${c} is present`;
    },
    params: ({ params: { property: c, depsCount: u, deps: l, missingProperty: p } }) => (0, t._)`{property: ${c},
    missingProperty: ${p},
    depsCount: ${u},
    deps: ${l}}`
    // TODO change to reference
  };
  const a = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(c) {
      const [u, l] = s(c);
      i(c, u), o(c, l);
    }
  };
  function s({ schema: c }) {
    const u = {}, l = {};
    for (const p in c) {
      if (p === "__proto__")
        continue;
      const m = Array.isArray(c[p]) ? u : l;
      m[p] = c[p];
    }
    return [u, l];
  }
  function i(c, u = c.schema) {
    const { gen: l, data: p, it: m } = c;
    if (Object.keys(u).length === 0)
      return;
    const h = l.let("missing");
    for (const g in u) {
      const y = u[g];
      if (y.length === 0)
        continue;
      const v = (0, r.propertyInData)(l, p, g, m.opts.ownProperties);
      c.setParams({
        property: g,
        depsCount: y.length,
        deps: y.join(", ")
      }), m.allErrors ? l.if(v, () => {
        for (const f of y)
          (0, r.checkReportMissingProp)(c, f);
      }) : (l.if((0, t._)`${v} && (${(0, r.checkMissingProp)(c, y, h)})`), (0, r.reportMissingProp)(c, h), l.else());
    }
  }
  e.validatePropertyDeps = i;
  function o(c, u = c.schema) {
    const { gen: l, data: p, keyword: m, it: h } = c, g = l.name("valid");
    for (const y in u)
      (0, n.alwaysValidSchema)(h, u[y]) || (l.if(
        (0, r.propertyInData)(l, p, y, h.opts.ownProperties),
        () => {
          const v = c.subschema({ keyword: m, schemaProp: y }, g);
          c.mergeValidEvaluated(v, g);
        },
        () => l.var(g, !0)
        // TODO var
      ), c.ok(g));
  }
  e.validateSchemaDeps = o, e.default = a;
})(pi);
var Pl = {};
Object.defineProperty(Pl, "__esModule", { value: !0 });
const nv = de, H1 = V, G1 = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, nv._)`{propertyName: ${e.propertyName}}`
}, K1 = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: G1,
  code(e) {
    const { gen: t, schema: n, data: r, it: a } = e;
    if ((0, H1.alwaysValidSchema)(a, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, nv.not)(s), () => {
        e.error(!0), a.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
Pl.default = K1;
var di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
const Ba = ve, At = de, W1 = xt, Ha = V, J1 = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, At._)`{additionalProperty: ${e.additionalProperty}}`
}, X1 = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: J1,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: o, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, Ha.alwaysValidSchema)(i, n))
      return;
    const u = (0, Ba.allSchemaProperties)(r.properties), l = (0, Ba.allSchemaProperties)(r.patternProperties);
    p(), e.ok((0, At._)`${s} === ${W1.default.errors}`);
    function p() {
      t.forIn("key", a, (v) => {
        !u.length && !l.length ? g(v) : t.if(m(v), () => g(v));
      });
    }
    function m(v) {
      let f;
      if (u.length > 8) {
        const $ = (0, Ha.schemaRefOrVal)(i, r.properties, "properties");
        f = (0, Ba.isOwnProperty)(t, $, v);
      } else u.length ? f = (0, At.or)(...u.map(($) => (0, At._)`${v} === ${$}`)) : f = At.nil;
      return l.length && (f = (0, At.or)(f, ...l.map(($) => (0, At._)`${(0, Ba.usePattern)(e, $)}.test(${v})`))), (0, At.not)(f);
    }
    function h(v) {
      t.code((0, At._)`delete ${a}[${v}]`);
    }
    function g(v) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        h(v);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: v }), e.error(), o || t.break();
        return;
      }
      if (typeof n == "object" && !(0, Ha.alwaysValidSchema)(i, n)) {
        const f = t.name("valid");
        c.removeAdditional === "failing" ? (y(v, f, !1), t.if((0, At.not)(f), () => {
          e.reset(), h(v);
        })) : (y(v, f), o || t.if((0, At.not)(f), () => t.break()));
      }
    }
    function y(v, f, $) {
      const E = {
        keyword: "additionalProperties",
        dataProp: v,
        dataPropType: Ha.Type.Str
      };
      $ === !1 && Object.assign(E, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(E, f);
    }
  }
};
di.default = X1;
var Rl = {};
Object.defineProperty(Rl, "__esModule", { value: !0 });
const Y1 = Ct, wd = ve, uo = V, xd = di, Z1 = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && xd.default.code(new Y1.KeywordCxt(s, xd.default, "additionalProperties"));
    const i = (0, wd.allSchemaProperties)(n);
    for (const p of i)
      s.definedProperties.add(p);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = uo.mergeEvaluated.props(t, (0, uo.toHash)(i), s.props));
    const o = i.filter((p) => !(0, uo.alwaysValidSchema)(s, n[p]));
    if (o.length === 0)
      return;
    const c = t.name("valid");
    for (const p of o)
      u(p) ? l(p) : (t.if((0, wd.propertyInData)(t, a, p, s.opts.ownProperties)), l(p), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(p), e.ok(c);
    function u(p) {
      return s.opts.useDefaults && !s.compositeRule && n[p].default !== void 0;
    }
    function l(p) {
      e.subschema({
        keyword: "properties",
        schemaProp: p,
        dataProp: p
      }, c);
    }
  }
};
Rl.default = Z1;
var Ol = {};
Object.defineProperty(Ol, "__esModule", { value: !0 });
const Ed = ve, Ga = de, Sd = V, Pd = V, Q1 = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: a, it: s } = e, { opts: i } = s, o = (0, Ed.allSchemaProperties)(n), c = o.filter((y) => (0, Sd.alwaysValidSchema)(s, n[y]));
    if (o.length === 0 || c.length === o.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const u = i.strictSchema && !i.allowMatchingProperties && a.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof Ga.Name) && (s.props = (0, Pd.evaluatedPropsToName)(t, s.props));
    const { props: p } = s;
    m();
    function m() {
      for (const y of o)
        u && h(y), s.allErrors ? g(y) : (t.var(l, !0), g(y), t.if(l));
    }
    function h(y) {
      for (const v in u)
        new RegExp(y).test(v) && (0, Sd.checkStrictMode)(s, `property ${v} matches pattern ${y} (use allowMatchingProperties)`);
    }
    function g(y) {
      t.forIn("key", r, (v) => {
        t.if((0, Ga._)`${(0, Ed.usePattern)(e, y)}.test(${v})`, () => {
          const f = c.includes(y);
          f || e.subschema({
            keyword: "patternProperties",
            schemaProp: y,
            dataProp: v,
            dataPropType: Pd.Type.Str
          }, l), s.opts.unevaluated && p !== !0 ? t.assign((0, Ga._)`${p}[${v}]`, !0) : !f && !s.allErrors && t.if((0, Ga.not)(l), () => t.break());
        });
      });
    }
  }
};
Ol.default = Q1;
var Al = {};
Object.defineProperty(Al, "__esModule", { value: !0 });
const eP = V, tP = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, eP.alwaysValidSchema)(r, n)) {
      e.fail();
      return;
    }
    const a = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, a), e.failResult(a, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
Al.default = tP;
var Tl = {};
Object.defineProperty(Tl, "__esModule", { value: !0 });
const nP = ve, rP = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: nP.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Tl.default = rP;
var jl = {};
Object.defineProperty(jl, "__esModule", { value: !0 });
const gs = de, aP = V, sP = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, gs._)`{passingSchemas: ${e.passing}}`
}, iP = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: sP,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, it: a } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    if (a.opts.discriminator && r.discriminator)
      return;
    const s = n, i = t.let("valid", !1), o = t.let("passing", null), c = t.name("_valid");
    e.setParams({ passing: o }), t.block(u), e.result(i, () => e.reset(), () => e.error(!0));
    function u() {
      s.forEach((l, p) => {
        let m;
        (0, aP.alwaysValidSchema)(a, l) ? t.var(c, !0) : m = e.subschema({
          keyword: "oneOf",
          schemaProp: p,
          compositeRule: !0
        }, c), p > 0 && t.if((0, gs._)`${c} && ${i}`).assign(i, !1).assign(o, (0, gs._)`[${o}, ${p}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(o, p), m && e.mergeEvaluated(m, gs.Name);
        });
      });
    }
  }
};
jl.default = iP;
var kl = {};
Object.defineProperty(kl, "__esModule", { value: !0 });
const oP = V, cP = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const a = t.name("valid");
    n.forEach((s, i) => {
      if ((0, oP.alwaysValidSchema)(r, s))
        return;
      const o = e.subschema({ keyword: "allOf", schemaProp: i }, a);
      e.ok(a), e.mergeEvaluated(o);
    });
  }
};
kl.default = cP;
var Nl = {};
Object.defineProperty(Nl, "__esModule", { value: !0 });
const zs = de, rv = V, lP = {
  message: ({ params: e }) => (0, zs.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, zs._)`{failingKeyword: ${e.ifClause}}`
}, uP = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: lP,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, rv.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const a = Rd(r, "then"), s = Rd(r, "else");
    if (!a && !s)
      return;
    const i = t.let("valid", !0), o = t.name("_valid");
    if (c(), e.reset(), a && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(o, u("then", l), u("else", l));
    } else a ? t.if(o, u("then")) : t.if((0, zs.not)(o), u("else"));
    e.pass(i, () => e.error(!0));
    function c() {
      const l = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, o);
      e.mergeEvaluated(l);
    }
    function u(l, p) {
      return () => {
        const m = e.subschema({ keyword: l }, o);
        t.assign(i, o), e.mergeValidEvaluated(m, i), p ? t.assign(p, (0, zs._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function Rd(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, rv.alwaysValidSchema)(e, n);
}
Nl.default = uP;
var Il = {};
Object.defineProperty(Il, "__esModule", { value: !0 });
const pP = V, dP = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, pP.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
Il.default = dP;
Object.defineProperty(wl, "__esModule", { value: !0 });
const fP = Ar, mP = xl, hP = Tr, vP = El, yP = Sl, gP = pi, bP = Pl, $P = di, _P = Rl, wP = Ol, xP = Al, EP = Tl, SP = jl, PP = kl, RP = Nl, OP = Il;
function AP(e = !1) {
  const t = [
    // any
    xP.default,
    EP.default,
    SP.default,
    PP.default,
    RP.default,
    OP.default,
    // object
    bP.default,
    $P.default,
    gP.default,
    _P.default,
    wP.default
  ];
  return e ? t.push(mP.default, vP.default) : t.push(fP.default, hP.default), t.push(yP.default), t;
}
wl.default = AP;
var Cl = {}, jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.dynamicAnchor = void 0;
const po = de, TP = xt, Od = dt, jP = nn, kP = {
  keyword: "$dynamicAnchor",
  schemaType: "string",
  code: (e) => av(e, e.schema)
};
function av(e, t) {
  const { gen: n, it: r } = e;
  r.schemaEnv.root.dynamicAnchors[t] = !0;
  const a = (0, po._)`${TP.default.dynamicAnchors}${(0, po.getProperty)(t)}`, s = r.errSchemaPath === "#" ? r.validateName : NP(e);
  n.if((0, po._)`!${a}`, () => n.assign(a, s));
}
jr.dynamicAnchor = av;
function NP(e) {
  const { schemaEnv: t, schema: n, self: r } = e.it, { root: a, baseId: s, localRefs: i, meta: o } = t.root, { schemaId: c } = r.opts, u = new Od.SchemaEnv({ schema: n, schemaId: c, root: a, baseId: s, localRefs: i, meta: o });
  return Od.compileSchema.call(r, u), (0, jP.getValidate)(e, u);
}
jr.default = kP;
var kr = {};
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.dynamicRef = void 0;
const Ad = de, IP = xt, Td = nn, CP = {
  keyword: "$dynamicRef",
  schemaType: "string",
  code: (e) => sv(e, e.schema)
};
function sv(e, t) {
  const { gen: n, keyword: r, it: a } = e;
  if (t[0] !== "#")
    throw new Error(`"${r}" only supports hash fragment reference`);
  const s = t.slice(1);
  if (a.allErrors)
    i();
  else {
    const c = n.let("valid", !1);
    i(c), e.ok(c);
  }
  function i(c) {
    if (a.schemaEnv.root.dynamicAnchors[s]) {
      const u = n.let("_v", (0, Ad._)`${IP.default.dynamicAnchors}${(0, Ad.getProperty)(s)}`);
      n.if(u, o(u, c), o(a.validateName, c));
    } else
      o(a.validateName, c)();
  }
  function o(c, u) {
    return u ? () => n.block(() => {
      (0, Td.callRef)(e, c), n.let(u, !0);
    }) : () => (0, Td.callRef)(e, c);
  }
}
kr.dynamicRef = sv;
kr.default = CP;
var Dl = {};
Object.defineProperty(Dl, "__esModule", { value: !0 });
const DP = jr, FP = V, LP = {
  keyword: "$recursiveAnchor",
  schemaType: "boolean",
  code(e) {
    e.schema ? (0, DP.dynamicAnchor)(e, "") : (0, FP.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
  }
};
Dl.default = LP;
var Fl = {};
Object.defineProperty(Fl, "__esModule", { value: !0 });
const MP = kr, UP = {
  keyword: "$recursiveRef",
  schemaType: "string",
  code: (e) => (0, MP.dynamicRef)(e, e.schema)
};
Fl.default = UP;
Object.defineProperty(Cl, "__esModule", { value: !0 });
const zP = jr, qP = kr, VP = Dl, BP = Fl, HP = [zP.default, qP.default, VP.default, BP.default];
Cl.default = HP;
var Ll = {}, Ml = {};
Object.defineProperty(Ml, "__esModule", { value: !0 });
const jd = pi, GP = {
  keyword: "dependentRequired",
  type: "object",
  schemaType: "object",
  error: jd.error,
  code: (e) => (0, jd.validatePropertyDeps)(e)
};
Ml.default = GP;
var Ul = {};
Object.defineProperty(Ul, "__esModule", { value: !0 });
const KP = pi, WP = {
  keyword: "dependentSchemas",
  type: "object",
  schemaType: "object",
  code: (e) => (0, KP.validateSchemaDeps)(e)
};
Ul.default = WP;
var zl = {};
Object.defineProperty(zl, "__esModule", { value: !0 });
const JP = V, XP = {
  keyword: ["maxContains", "minContains"],
  type: "array",
  schemaType: "number",
  code({ keyword: e, parentSchema: t, it: n }) {
    t.contains === void 0 && (0, JP.checkStrictMode)(n, `"${e}" without "contains" is ignored`);
  }
};
zl.default = XP;
Object.defineProperty(Ll, "__esModule", { value: !0 });
const YP = Ml, ZP = Ul, QP = zl, eR = [YP.default, ZP.default, QP.default];
Ll.default = eR;
var ql = {}, Vl = {};
Object.defineProperty(Vl, "__esModule", { value: !0 });
const dn = de, kd = V, tR = xt, nR = {
  message: "must NOT have unevaluated properties",
  params: ({ params: e }) => (0, dn._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
}, rR = {
  keyword: "unevaluatedProperties",
  type: "object",
  schemaType: ["boolean", "object"],
  trackErrors: !0,
  error: nR,
  code(e) {
    const { gen: t, schema: n, data: r, errsCount: a, it: s } = e;
    if (!a)
      throw new Error("ajv implementation error");
    const { allErrors: i, props: o } = s;
    o instanceof dn.Name ? t.if((0, dn._)`${o} !== true`, () => t.forIn("key", r, (p) => t.if(u(o, p), () => c(p)))) : o !== !0 && t.forIn("key", r, (p) => o === void 0 ? c(p) : t.if(l(o, p), () => c(p))), s.props = !0, e.ok((0, dn._)`${a} === ${tR.default.errors}`);
    function c(p) {
      if (n === !1) {
        e.setParams({ unevaluatedProperty: p }), e.error(), i || t.break();
        return;
      }
      if (!(0, kd.alwaysValidSchema)(s, n)) {
        const m = t.name("valid");
        e.subschema({
          keyword: "unevaluatedProperties",
          dataProp: p,
          dataPropType: kd.Type.Str
        }, m), i || t.if((0, dn.not)(m), () => t.break());
      }
    }
    function u(p, m) {
      return (0, dn._)`!${p} || !${p}[${m}]`;
    }
    function l(p, m) {
      const h = [];
      for (const g in p)
        p[g] === !0 && h.push((0, dn._)`${m} !== ${g}`);
      return (0, dn.and)(...h);
    }
  }
};
Vl.default = rR;
var Bl = {};
Object.defineProperty(Bl, "__esModule", { value: !0 });
const Pn = de, Nd = V, aR = {
  message: ({ params: { len: e } }) => (0, Pn.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, Pn._)`{limit: ${e}}`
}, sR = {
  keyword: "unevaluatedItems",
  type: "array",
  schemaType: ["boolean", "object"],
  error: aR,
  code(e) {
    const { gen: t, schema: n, data: r, it: a } = e, s = a.items || 0;
    if (s === !0)
      return;
    const i = t.const("len", (0, Pn._)`${r}.length`);
    if (n === !1)
      e.setParams({ len: s }), e.fail((0, Pn._)`${i} > ${s}`);
    else if (typeof n == "object" && !(0, Nd.alwaysValidSchema)(a, n)) {
      const c = t.var("valid", (0, Pn._)`${i} <= ${s}`);
      t.if((0, Pn.not)(c), () => o(c, s)), e.ok(c);
    }
    a.items = !0;
    function o(c, u) {
      t.forRange("i", u, i, (l) => {
        e.subschema({ keyword: "unevaluatedItems", dataProp: l, dataPropType: Nd.Type.Num }, c), a.allErrors || t.if((0, Pn.not)(c), () => t.break());
      });
    }
  }
};
Bl.default = sR;
Object.defineProperty(ql, "__esModule", { value: !0 });
const iR = Vl, oR = Bl, cR = [iR.default, oR.default];
ql.default = cR;
var Hl = {}, Gl = {};
Object.defineProperty(Gl, "__esModule", { value: !0 });
const Le = de, lR = {
  message: ({ schemaCode: e }) => (0, Le.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, Le._)`{format: ${e}}`
}, uR = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: lR,
  code(e, t) {
    const { gen: n, data: r, $data: a, schema: s, schemaCode: i, it: o } = e, { opts: c, errSchemaPath: u, schemaEnv: l, self: p } = o;
    if (!c.validateFormats)
      return;
    a ? m() : h();
    function m() {
      const g = n.scopeValue("formats", {
        ref: p.formats,
        code: c.code.formats
      }), y = n.const("fDef", (0, Le._)`${g}[${i}]`), v = n.let("fType"), f = n.let("format");
      n.if((0, Le._)`typeof ${y} == "object" && !(${y} instanceof RegExp)`, () => n.assign(v, (0, Le._)`${y}.type || "string"`).assign(f, (0, Le._)`${y}.validate`), () => n.assign(v, (0, Le._)`"string"`).assign(f, y)), e.fail$data((0, Le.or)($(), E()));
      function $() {
        return c.strictSchema === !1 ? Le.nil : (0, Le._)`${i} && !${f}`;
      }
      function E() {
        const O = l.$async ? (0, Le._)`(${y}.async ? await ${f}(${r}) : ${f}(${r}))` : (0, Le._)`${f}(${r})`, A = (0, Le._)`(typeof ${f} == "function" ? ${O} : ${f}.test(${r}))`;
        return (0, Le._)`${f} && ${f} !== true && ${v} === ${t} && !${A}`;
      }
    }
    function h() {
      const g = p.formats[s];
      if (!g) {
        $();
        return;
      }
      if (g === !0)
        return;
      const [y, v, f] = E(g);
      y === t && e.pass(O());
      function $() {
        if (c.strictSchema === !1) {
          p.logger.warn(A());
          return;
        }
        throw new Error(A());
        function A() {
          return `unknown format "${s}" ignored in schema at path "${u}"`;
        }
      }
      function E(A) {
        const M = A instanceof RegExp ? (0, Le.regexpCode)(A) : c.code.formats ? (0, Le._)`${c.code.formats}${(0, Le.getProperty)(s)}` : void 0, X = n.scopeValue("formats", { key: s, ref: A, code: M });
        return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, Le._)`${X}.validate`] : ["string", A, X];
      }
      function O() {
        if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, Le._)`await ${f}(${r})`;
        }
        return typeof v == "function" ? (0, Le._)`${f}(${r})` : (0, Le._)`${f}.test(${r})`;
      }
    }
  }
};
Gl.default = uR;
Object.defineProperty(Hl, "__esModule", { value: !0 });
const pR = Gl, dR = [pR.default];
Hl.default = dR;
var $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
$r.contentVocabulary = $r.metadataVocabulary = void 0;
$r.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
$r.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(ol, "__esModule", { value: !0 });
const fR = cl, mR = ul, hR = wl, vR = Cl, yR = Ll, gR = ql, bR = Hl, Id = $r, $R = [
  vR.default,
  fR.default,
  mR.default,
  (0, hR.default)(!0),
  bR.default,
  Id.metadataVocabulary,
  Id.contentVocabulary,
  yR.default,
  gR.default
];
ol.default = $R;
var Kl = {}, fi = {};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.DiscrError = void 0;
var Cd;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(Cd || (fi.DiscrError = Cd = {}));
Object.defineProperty(Kl, "__esModule", { value: !0 });
const tr = de, tc = fi, Dd = dt, _R = Or, wR = V, xR = {
  message: ({ params: { discrError: e, tagName: t } }) => e === tc.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, tr._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, ER = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: xR,
  code(e) {
    const { gen: t, data: n, schema: r, parentSchema: a, it: s } = e, { oneOf: i } = a;
    if (!s.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const o = r.propertyName;
    if (typeof o != "string")
      throw new Error("discriminator: requires propertyName");
    if (r.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!i)
      throw new Error("discriminator: requires oneOf keyword");
    const c = t.let("valid", !1), u = t.const("tag", (0, tr._)`${n}${(0, tr.getProperty)(o)}`);
    t.if((0, tr._)`typeof ${u} == "string"`, () => l(), () => e.error(!1, { discrError: tc.DiscrError.Tag, tag: u, tagName: o })), e.ok(c);
    function l() {
      const h = m();
      t.if(!1);
      for (const g in h)
        t.elseIf((0, tr._)`${u} === ${g}`), t.assign(c, p(h[g]));
      t.else(), e.error(!1, { discrError: tc.DiscrError.Mapping, tag: u, tagName: o }), t.endIf();
    }
    function p(h) {
      const g = t.name("valid"), y = e.subschema({ keyword: "oneOf", schemaProp: h }, g);
      return e.mergeEvaluated(y, tr.Name), g;
    }
    function m() {
      var h;
      const g = {}, y = f(a);
      let v = !0;
      for (let O = 0; O < i.length; O++) {
        let A = i[O];
        if (A?.$ref && !(0, wR.schemaHasRulesButRef)(A, s.self.RULES)) {
          const X = A.$ref;
          if (A = Dd.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, X), A instanceof Dd.SchemaEnv && (A = A.schema), A === void 0)
            throw new _R.default(s.opts.uriResolver, s.baseId, X);
        }
        const M = (h = A?.properties) === null || h === void 0 ? void 0 : h[o];
        if (typeof M != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${o}"`);
        v = v && (y || f(A)), $(M, O);
      }
      if (!v)
        throw new Error(`discriminator: "${o}" must be required`);
      return g;
      function f({ required: O }) {
        return Array.isArray(O) && O.includes(o);
      }
      function $(O, A) {
        if (O.const)
          E(O.const, A);
        else if (O.enum)
          for (const M of O.enum)
            E(M, A);
        else
          throw new Error(`discriminator: "properties/${o}" must have "const" or "enum"`);
      }
      function E(O, A) {
        if (typeof O != "string" || O in g)
          throw new Error(`discriminator: "${o}" values must be unique strings`);
        g[O] = A;
      }
    }
  }
};
Kl.default = ER;
var Wl = {};
const SR = "https://json-schema.org/draft/2020-12/schema", PR = "https://json-schema.org/draft/2020-12/schema", RR = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0,
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
  "https://json-schema.org/draft/2020-12/vocab/validation": !0,
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, OR = "meta", AR = "Core and Validation specifications meta-schema", TR = [
  {
    $ref: "meta/core"
  },
  {
    $ref: "meta/applicator"
  },
  {
    $ref: "meta/unevaluated"
  },
  {
    $ref: "meta/validation"
  },
  {
    $ref: "meta/meta-data"
  },
  {
    $ref: "meta/format-annotation"
  },
  {
    $ref: "meta/content"
  }
], jR = [
  "object",
  "boolean"
], kR = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", NR = {
  definitions: {
    $comment: '"definitions" has been replaced by "$defs".',
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    deprecated: !0,
    default: {}
  },
  dependencies: {
    $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $dynamicRef: "#meta"
        },
        {
          $ref: "meta/validation#/$defs/stringArray"
        }
      ]
    },
    deprecated: !0,
    default: {}
  },
  $recursiveAnchor: {
    $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
    $ref: "meta/core#/$defs/anchorString",
    deprecated: !0
  },
  $recursiveRef: {
    $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
    $ref: "meta/core#/$defs/uriReferenceString",
    deprecated: !0
  }
}, IR = {
  $schema: SR,
  $id: PR,
  $vocabulary: RR,
  $dynamicAnchor: OR,
  title: AR,
  allOf: TR,
  type: jR,
  $comment: kR,
  properties: NR
}, CR = "https://json-schema.org/draft/2020-12/schema", DR = "https://json-schema.org/draft/2020-12/meta/applicator", FR = {
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0
}, LR = "meta", MR = "Applicator vocabulary meta-schema", UR = [
  "object",
  "boolean"
], zR = {
  prefixItems: {
    $ref: "#/$defs/schemaArray"
  },
  items: {
    $dynamicRef: "#meta"
  },
  contains: {
    $dynamicRef: "#meta"
  },
  additionalProperties: {
    $dynamicRef: "#meta"
  },
  properties: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependentSchemas: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    },
    default: {}
  },
  propertyNames: {
    $dynamicRef: "#meta"
  },
  if: {
    $dynamicRef: "#meta"
  },
  then: {
    $dynamicRef: "#meta"
  },
  else: {
    $dynamicRef: "#meta"
  },
  allOf: {
    $ref: "#/$defs/schemaArray"
  },
  anyOf: {
    $ref: "#/$defs/schemaArray"
  },
  oneOf: {
    $ref: "#/$defs/schemaArray"
  },
  not: {
    $dynamicRef: "#meta"
  }
}, qR = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $dynamicRef: "#meta"
    }
  }
}, VR = {
  $schema: CR,
  $id: DR,
  $vocabulary: FR,
  $dynamicAnchor: LR,
  title: MR,
  type: UR,
  properties: zR,
  $defs: qR
}, BR = "https://json-schema.org/draft/2020-12/schema", HR = "https://json-schema.org/draft/2020-12/meta/unevaluated", GR = {
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
}, KR = "meta", WR = "Unevaluated applicator vocabulary meta-schema", JR = [
  "object",
  "boolean"
], XR = {
  unevaluatedItems: {
    $dynamicRef: "#meta"
  },
  unevaluatedProperties: {
    $dynamicRef: "#meta"
  }
}, YR = {
  $schema: BR,
  $id: HR,
  $vocabulary: GR,
  $dynamicAnchor: KR,
  title: WR,
  type: JR,
  properties: XR
}, ZR = "https://json-schema.org/draft/2020-12/schema", QR = "https://json-schema.org/draft/2020-12/meta/content", eO = {
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, tO = "meta", nO = "Content vocabulary meta-schema", rO = [
  "object",
  "boolean"
], aO = {
  contentEncoding: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentSchema: {
    $dynamicRef: "#meta"
  }
}, sO = {
  $schema: ZR,
  $id: QR,
  $vocabulary: eO,
  $dynamicAnchor: tO,
  title: nO,
  type: rO,
  properties: aO
}, iO = "https://json-schema.org/draft/2020-12/schema", oO = "https://json-schema.org/draft/2020-12/meta/core", cO = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0
}, lO = "meta", uO = "Core vocabulary meta-schema", pO = [
  "object",
  "boolean"
], dO = {
  $id: {
    $ref: "#/$defs/uriReferenceString",
    $comment: "Non-empty fragments not allowed.",
    pattern: "^[^#]*#?$"
  },
  $schema: {
    $ref: "#/$defs/uriString"
  },
  $ref: {
    $ref: "#/$defs/uriReferenceString"
  },
  $anchor: {
    $ref: "#/$defs/anchorString"
  },
  $dynamicRef: {
    $ref: "#/$defs/uriReferenceString"
  },
  $dynamicAnchor: {
    $ref: "#/$defs/anchorString"
  },
  $vocabulary: {
    type: "object",
    propertyNames: {
      $ref: "#/$defs/uriString"
    },
    additionalProperties: {
      type: "boolean"
    }
  },
  $comment: {
    type: "string"
  },
  $defs: {
    type: "object",
    additionalProperties: {
      $dynamicRef: "#meta"
    }
  }
}, fO = {
  anchorString: {
    type: "string",
    pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
  },
  uriString: {
    type: "string",
    format: "uri"
  },
  uriReferenceString: {
    type: "string",
    format: "uri-reference"
  }
}, mO = {
  $schema: iO,
  $id: oO,
  $vocabulary: cO,
  $dynamicAnchor: lO,
  title: uO,
  type: pO,
  properties: dO,
  $defs: fO
}, hO = "https://json-schema.org/draft/2020-12/schema", vO = "https://json-schema.org/draft/2020-12/meta/format-annotation", yO = {
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
}, gO = "meta", bO = "Format vocabulary meta-schema for annotation results", $O = [
  "object",
  "boolean"
], _O = {
  format: {
    type: "string"
  }
}, wO = {
  $schema: hO,
  $id: vO,
  $vocabulary: yO,
  $dynamicAnchor: gO,
  title: bO,
  type: $O,
  properties: _O
}, xO = "https://json-schema.org/draft/2020-12/schema", EO = "https://json-schema.org/draft/2020-12/meta/meta-data", SO = {
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
}, PO = "meta", RO = "Meta-data vocabulary meta-schema", OO = [
  "object",
  "boolean"
], AO = {
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  deprecated: {
    type: "boolean",
    default: !1
  },
  readOnly: {
    type: "boolean",
    default: !1
  },
  writeOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  }
}, TO = {
  $schema: xO,
  $id: EO,
  $vocabulary: SO,
  $dynamicAnchor: PO,
  title: RO,
  type: OO,
  properties: AO
}, jO = "https://json-schema.org/draft/2020-12/schema", kO = "https://json-schema.org/draft/2020-12/meta/validation", NO = {
  "https://json-schema.org/draft/2020-12/vocab/validation": !0
}, IO = "meta", CO = "Validation vocabulary meta-schema", DO = [
  "object",
  "boolean"
], FO = {
  type: {
    anyOf: [
      {
        $ref: "#/$defs/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/$defs/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  const: !0,
  enum: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  maxItems: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  maxContains: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minContains: {
    $ref: "#/$defs/nonNegativeInteger",
    default: 1
  },
  maxProperties: {
    $ref: "#/$defs/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/$defs/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/$defs/stringArray"
  },
  dependentRequired: {
    type: "object",
    additionalProperties: {
      $ref: "#/$defs/stringArray"
    }
  }
}, LO = {
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    $ref: "#/$defs/nonNegativeInteger",
    default: 0
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, MO = {
  $schema: jO,
  $id: kO,
  $vocabulary: NO,
  $dynamicAnchor: IO,
  title: CO,
  type: DO,
  properties: FO,
  $defs: LO
};
Object.defineProperty(Wl, "__esModule", { value: !0 });
const UO = IR, zO = VR, qO = YR, VO = sO, BO = mO, HO = wO, GO = TO, KO = MO, WO = ["/properties"];
function JO(e) {
  return [
    UO,
    zO,
    qO,
    VO,
    BO,
    t(this, HO),
    GO,
    t(this, KO)
  ].forEach((n) => this.addMetaSchema(n, void 0, !1)), this;
  function t(n, r) {
    return e ? n.$dataMetaSchema(r, WO) : r;
  }
}
Wl.default = JO;
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
  const n = rh, r = ol, a = Kl, s = Wl, i = "https://json-schema.org/draft/2020-12/schema";
  class o extends n.default {
    constructor(h = {}) {
      super({
        ...h,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((h) => this.addVocabulary(h)), this.opts.discriminator && this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      const { $data: h, meta: g } = this.opts;
      g && (s.default.call(this, h), this.refs["http://json-schema.org/schema"] = i);
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
    }
  }
  t.Ajv2020 = o, e.exports = t = o, e.exports.Ajv2020 = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
  var c = Ct;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return c.KeywordCxt;
  } });
  var u = de;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return u._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return u.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return u.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return u.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return u.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return u.CodeGen;
  } });
  var l = Oa;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return l.default;
  } });
  var p = Or;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return p.default;
  } });
})(Wo, Wo.exports);
var XO = Wo.exports, nc = { exports: {} }, iv = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function t(F, L) {
    return { validate: F, compare: L };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: t(s, i),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: t(c(!0), u),
    "date-time": t(m(!0), h),
    "iso-time": t(c(), l),
    "iso-date-time": t(m(), g),
    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: f,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    // uri-template: https://tools.ietf.org/html/rfc6570
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: T,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
    // byte: https://github.com/miguelmota/is-base64
    byte: E,
    // signed 32 bit integer
    int32: { type: "number", validate: M },
    // signed 64 bit integer
    int64: { type: "number", validate: X },
    // C-type float
    float: { type: "number", validate: C },
    // C-type double
    double: { type: "number", validate: C },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, e.fastFormats = {
    ...e.fullFormats,
    date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i),
    time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
    "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, h),
    "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
    "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, g),
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  }, e.formatNames = Object.keys(e.fullFormats);
  function n(F) {
    return F % 4 === 0 && (F % 100 !== 0 || F % 400 === 0);
  }
  const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function s(F) {
    const L = r.exec(F);
    if (!L)
      return !1;
    const Z = +L[1], j = +L[2], D = +L[3];
    return j >= 1 && j <= 12 && D >= 1 && D <= (j === 2 && n(Z) ? 29 : a[j]);
  }
  function i(F, L) {
    if (F && L)
      return F > L ? 1 : F < L ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function c(F) {
    return function(Z) {
      const j = o.exec(Z);
      if (!j)
        return !1;
      const D = +j[1], B = +j[2], z = +j[3], Q = j[4], H = j[5] === "-" ? -1 : 1, R = +(j[6] || 0), _ = +(j[7] || 0);
      if (R > 23 || _ > 59 || F && !Q)
        return !1;
      if (D <= 23 && B <= 59 && z < 60)
        return !0;
      const S = B - _ * H, w = D - R * H - (S < 0 ? 1 : 0);
      return (w === 23 || w === -1) && (S === 59 || S === -1) && z < 61;
    };
  }
  function u(F, L) {
    if (!(F && L))
      return;
    const Z = (/* @__PURE__ */ new Date("2020-01-01T" + F)).valueOf(), j = (/* @__PURE__ */ new Date("2020-01-01T" + L)).valueOf();
    if (Z && j)
      return Z - j;
  }
  function l(F, L) {
    if (!(F && L))
      return;
    const Z = o.exec(F), j = o.exec(L);
    if (Z && j)
      return F = Z[1] + Z[2] + Z[3], L = j[1] + j[2] + j[3], F > L ? 1 : F < L ? -1 : 0;
  }
  const p = /t|\s/i;
  function m(F) {
    const L = c(F);
    return function(j) {
      const D = j.split(p);
      return D.length === 2 && s(D[0]) && L(D[1]);
    };
  }
  function h(F, L) {
    if (!(F && L))
      return;
    const Z = new Date(F).valueOf(), j = new Date(L).valueOf();
    if (Z && j)
      return Z - j;
  }
  function g(F, L) {
    if (!(F && L))
      return;
    const [Z, j] = F.split(p), [D, B] = L.split(p), z = i(Z, D);
    if (z !== void 0)
      return z || u(j, B);
  }
  const y = /\/|:/, v = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function f(F) {
    return y.test(F) && v.test(F);
  }
  const $ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function E(F) {
    return $.lastIndex = 0, $.test(F);
  }
  const O = -2147483648, A = 2 ** 31 - 1;
  function M(F) {
    return Number.isInteger(F) && F <= A && F >= O;
  }
  function X(F) {
    return Number.isInteger(F);
  }
  function C() {
    return !0;
  }
  const J = /[^\\]\\Z/;
  function T(F) {
    if (J.test(F))
      return !1;
    try {
      return new RegExp(F), !0;
    } catch {
      return !1;
    }
  }
})(iv);
var ov = {}, rc = { exports: {} }, cv = {}, Dt = {}, _r = {}, Ta = {}, he = {}, ba = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor($) {
      if (super(), !e.IDENTIFIER.test($))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = n;
  class r extends t {
    constructor($) {
      super(), this._items = typeof $ == "string" ? [$] : $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const $ = this._items[0];
      return $ === "" || $ === '""';
    }
    get str() {
      var $;
      return ($ = this._str) !== null && $ !== void 0 ? $ : this._str = this._items.reduce((E, O) => `${E}${O}`, "");
    }
    get names() {
      var $;
      return ($ = this._names) !== null && $ !== void 0 ? $ : this._names = this._items.reduce((E, O) => (O instanceof n && (E[O.str] = (E[O.str] || 0) + 1), E), {});
    }
  }
  e._Code = r, e.nil = new r("");
  function a(f, ...$) {
    const E = [f[0]];
    let O = 0;
    for (; O < $.length; )
      o(E, $[O]), E.push(f[++O]);
    return new r(E);
  }
  e._ = a;
  const s = new r("+");
  function i(f, ...$) {
    const E = [h(f[0])];
    let O = 0;
    for (; O < $.length; )
      E.push(s), o(E, $[O]), E.push(s, h(f[++O]));
    return c(E), new r(E);
  }
  e.str = i;
  function o(f, $) {
    $ instanceof r ? f.push(...$._items) : $ instanceof n ? f.push($) : f.push(p($));
  }
  e.addCodeArg = o;
  function c(f) {
    let $ = 1;
    for (; $ < f.length - 1; ) {
      if (f[$] === s) {
        const E = u(f[$ - 1], f[$ + 1]);
        if (E !== void 0) {
          f.splice($ - 1, 3, E);
          continue;
        }
        f[$++] = "+";
      }
      $++;
    }
  }
  function u(f, $) {
    if ($ === '""')
      return f;
    if (f === '""')
      return $;
    if (typeof f == "string")
      return $ instanceof n || f[f.length - 1] !== '"' ? void 0 : typeof $ != "string" ? `${f.slice(0, -1)}${$}"` : $[0] === '"' ? f.slice(0, -1) + $.slice(1) : void 0;
    if (typeof $ == "string" && $[0] === '"' && !(f instanceof n))
      return `"${f}${$.slice(1)}`;
  }
  function l(f, $) {
    return $.emptyStr() ? f : f.emptyStr() ? $ : i`${f}${$}`;
  }
  e.strConcat = l;
  function p(f) {
    return typeof f == "number" || typeof f == "boolean" || f === null ? f : h(Array.isArray(f) ? f.join(",") : f);
  }
  function m(f) {
    return new r(h(f));
  }
  e.stringify = m;
  function h(f) {
    return JSON.stringify(f).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = h;
  function g(f) {
    return typeof f == "string" && e.IDENTIFIER.test(f) ? new r(`.${f}`) : a`[${f}]`;
  }
  e.getProperty = g;
  function y(f) {
    if (typeof f == "string" && e.IDENTIFIER.test(f))
      return new r(`${f}`);
    throw new Error(`CodeGen: invalid export name: ${f}, use explicit $id name mapping`);
  }
  e.getEsmExportName = y;
  function v(f) {
    return new r(f.toString());
  }
  e.regexpCode = v;
})(ba);
var ac = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = ba;
  class n extends Error {
    constructor(u) {
      super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
    }
  }
  var r;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(r || (e.UsedValueState = r = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class a {
    constructor({ prefixes: u, parent: l } = {}) {
      this._names = {}, this._prefixes = u, this._parent = l;
    }
    toName(u) {
      return u instanceof t.Name ? u : this.name(u);
    }
    name(u) {
      return new t.Name(this._newName(u));
    }
    _newName(u) {
      const l = this._names[u] || this._nameGroup(u);
      return `${u}${l.index++}`;
    }
    _nameGroup(u) {
      var l, p;
      if (!((p = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || p === void 0) && p.has(u) || this._prefixes && !this._prefixes.has(u))
        throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
      return this._names[u] = { prefix: u, index: 0 };
    }
  }
  e.Scope = a;
  class s extends t.Name {
    constructor(u, l) {
      super(l), this.prefix = u;
    }
    setValue(u, { property: l, itemIndex: p }) {
      this.value = u, this.scopePath = (0, t._)`.${new t.Name(l)}[${p}]`;
    }
  }
  e.ValueScopeName = s;
  const i = (0, t._)`\n`;
  class o extends a {
    constructor(u) {
      super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? i : t.nil };
    }
    get() {
      return this._scope;
    }
    name(u) {
      return new s(u, this._newName(u));
    }
    value(u, l) {
      var p;
      if (l.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const m = this.toName(u), { prefix: h } = m, g = (p = l.key) !== null && p !== void 0 ? p : l.ref;
      let y = this._values[h];
      if (y) {
        const $ = y.get(g);
        if ($)
          return $;
      } else
        y = this._values[h] = /* @__PURE__ */ new Map();
      y.set(g, m);
      const v = this._scope[h] || (this._scope[h] = []), f = v.length;
      return v[f] = l.ref, m.setValue(l, { property: h, itemIndex: f }), m;
    }
    getValue(u, l) {
      const p = this._values[u];
      if (p)
        return p.get(l);
    }
    scopeRefs(u, l = this._values) {
      return this._reduceValues(l, (p) => {
        if (p.scopePath === void 0)
          throw new Error(`CodeGen: name "${p}" has no value`);
        return (0, t._)`${u}${p.scopePath}`;
      });
    }
    scopeCode(u = this._values, l, p) {
      return this._reduceValues(u, (m) => {
        if (m.value === void 0)
          throw new Error(`CodeGen: name "${m}" has no value`);
        return m.value.code;
      }, l, p);
    }
    _reduceValues(u, l, p = {}, m) {
      let h = t.nil;
      for (const g in u) {
        const y = u[g];
        if (!y)
          continue;
        const v = p[g] = p[g] || /* @__PURE__ */ new Map();
        y.forEach((f) => {
          if (v.has(f))
            return;
          v.set(f, r.Started);
          let $ = l(f);
          if ($) {
            const E = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            h = (0, t._)`${h}${E} ${f} = ${$};${this.opts._n}`;
          } else if ($ = m?.(f))
            h = (0, t._)`${h}${$}${this.opts._n}`;
          else
            throw new n(f);
          v.set(f, r.Completed);
        });
      }
      return h;
    }
  }
  e.ValueScope = o;
})(ac);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = ba, n = ac;
  var r = ba;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return r._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return r.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return r.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return r.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return r.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return r.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return r.Name;
  } });
  var a = ac;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return a.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return a.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return a.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return a.varKinds;
  } }), e.operators = {
    GT: new t._Code(">"),
    GTE: new t._Code(">="),
    LT: new t._Code("<"),
    LTE: new t._Code("<="),
    EQ: new t._Code("==="),
    NEQ: new t._Code("!=="),
    NOT: new t._Code("!"),
    OR: new t._Code("||"),
    AND: new t._Code("&&"),
    ADD: new t._Code("+")
  };
  class s {
    optimizeNodes() {
      return this;
    }
    optimizeNames(d, b) {
      return this;
    }
  }
  class i extends s {
    constructor(d, b, x) {
      super(), this.varKind = d, this.name = b, this.rhs = x;
    }
    render({ es5: d, _n: b }) {
      const x = d ? n.varKinds.var : this.varKind, k = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${x} ${this.name}${k};` + b;
    }
    optimizeNames(d, b) {
      if (d[this.name.str])
        return this.rhs && (this.rhs = j(this.rhs, d, b)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends s {
    constructor(d, b, x) {
      super(), this.lhs = d, this.rhs = b, this.sideEffects = x;
    }
    render({ _n: d }) {
      return `${this.lhs} = ${this.rhs};` + d;
    }
    optimizeNames(d, b) {
      if (!(this.lhs instanceof t.Name && !d[this.lhs.str] && !this.sideEffects))
        return this.rhs = j(this.rhs, d, b), this;
    }
    get names() {
      const d = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return Z(d, this.rhs);
    }
  }
  class c extends o {
    constructor(d, b, x, k) {
      super(d, x, k), this.op = b;
    }
    render({ _n: d }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + d;
    }
  }
  class u extends s {
    constructor(d) {
      super(), this.label = d, this.names = {};
    }
    render({ _n: d }) {
      return `${this.label}:` + d;
    }
  }
  class l extends s {
    constructor(d) {
      super(), this.label = d, this.names = {};
    }
    render({ _n: d }) {
      return `break${this.label ? ` ${this.label}` : ""};` + d;
    }
  }
  class p extends s {
    constructor(d) {
      super(), this.error = d;
    }
    render({ _n: d }) {
      return `throw ${this.error};` + d;
    }
    get names() {
      return this.error.names;
    }
  }
  class m extends s {
    constructor(d) {
      super(), this.code = d;
    }
    render({ _n: d }) {
      return `${this.code};` + d;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(d, b) {
      return this.code = j(this.code, d, b), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class h extends s {
    constructor(d = []) {
      super(), this.nodes = d;
    }
    render(d) {
      return this.nodes.reduce((b, x) => b + x.render(d), "");
    }
    optimizeNodes() {
      const { nodes: d } = this;
      let b = d.length;
      for (; b--; ) {
        const x = d[b].optimizeNodes();
        Array.isArray(x) ? d.splice(b, 1, ...x) : x ? d[b] = x : d.splice(b, 1);
      }
      return d.length > 0 ? this : void 0;
    }
    optimizeNames(d, b) {
      const { nodes: x } = this;
      let k = x.length;
      for (; k--; ) {
        const I = x[k];
        I.optimizeNames(d, b) || (D(d, I.names), x.splice(k, 1));
      }
      return x.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((d, b) => L(d, b.names), {});
    }
  }
  class g extends h {
    render(d) {
      return "{" + d._n + super.render(d) + "}" + d._n;
    }
  }
  class y extends h {
  }
  class v extends g {
  }
  v.kind = "else";
  class f extends g {
    constructor(d, b) {
      super(b), this.condition = d;
    }
    render(d) {
      let b = `if(${this.condition})` + super.render(d);
      return this.else && (b += "else " + this.else.render(d)), b;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const d = this.condition;
      if (d === !0)
        return this.nodes;
      let b = this.else;
      if (b) {
        const x = b.optimizeNodes();
        b = this.else = Array.isArray(x) ? new v(x) : x;
      }
      if (b)
        return d === !1 ? b instanceof f ? b : b.nodes : this.nodes.length ? this : new f(B(d), b instanceof f ? [b] : b.nodes);
      if (!(d === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(d, b) {
      var x;
      if (this.else = (x = this.else) === null || x === void 0 ? void 0 : x.optimizeNames(d, b), !!(super.optimizeNames(d, b) || this.else))
        return this.condition = j(this.condition, d, b), this;
    }
    get names() {
      const d = super.names;
      return Z(d, this.condition), this.else && L(d, this.else.names), d;
    }
  }
  f.kind = "if";
  class $ extends g {
  }
  $.kind = "for";
  class E extends $ {
    constructor(d) {
      super(), this.iteration = d;
    }
    render(d) {
      return `for(${this.iteration})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iteration = j(this.iteration, d, b), this;
    }
    get names() {
      return L(super.names, this.iteration.names);
    }
  }
  class O extends $ {
    constructor(d, b, x, k) {
      super(), this.varKind = d, this.name = b, this.from = x, this.to = k;
    }
    render(d) {
      const b = d.es5 ? n.varKinds.var : this.varKind, { name: x, from: k, to: I } = this;
      return `for(${b} ${x}=${k}; ${x}<${I}; ${x}++)` + super.render(d);
    }
    get names() {
      const d = Z(super.names, this.from);
      return Z(d, this.to);
    }
  }
  class A extends $ {
    constructor(d, b, x, k) {
      super(), this.loop = d, this.varKind = b, this.name = x, this.iterable = k;
    }
    render(d) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iterable = j(this.iterable, d, b), this;
    }
    get names() {
      return L(super.names, this.iterable.names);
    }
  }
  class M extends g {
    constructor(d, b, x) {
      super(), this.name = d, this.args = b, this.async = x;
    }
    render(d) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(d);
    }
  }
  M.kind = "func";
  class X extends h {
    render(d) {
      return "return " + super.render(d);
    }
  }
  X.kind = "return";
  class C extends g {
    render(d) {
      let b = "try" + super.render(d);
      return this.catch && (b += this.catch.render(d)), this.finally && (b += this.finally.render(d)), b;
    }
    optimizeNodes() {
      var d, b;
      return super.optimizeNodes(), (d = this.catch) === null || d === void 0 || d.optimizeNodes(), (b = this.finally) === null || b === void 0 || b.optimizeNodes(), this;
    }
    optimizeNames(d, b) {
      var x, k;
      return super.optimizeNames(d, b), (x = this.catch) === null || x === void 0 || x.optimizeNames(d, b), (k = this.finally) === null || k === void 0 || k.optimizeNames(d, b), this;
    }
    get names() {
      const d = super.names;
      return this.catch && L(d, this.catch.names), this.finally && L(d, this.finally.names), d;
    }
  }
  class J extends g {
    constructor(d) {
      super(), this.error = d;
    }
    render(d) {
      return `catch(${this.error})` + super.render(d);
    }
  }
  J.kind = "catch";
  class T extends g {
    render(d) {
      return "finally" + super.render(d);
    }
  }
  T.kind = "finally";
  class F {
    constructor(d, b = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...b, _n: b.lines ? `
` : "" }, this._extScope = d, this._scope = new n.Scope({ parent: d }), this._nodes = [new y()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(d) {
      return this._scope.name(d);
    }
    // reserves unique name in the external scope
    scopeName(d) {
      return this._extScope.name(d);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(d, b) {
      const x = this._extScope.value(d, b);
      return (this._values[x.prefix] || (this._values[x.prefix] = /* @__PURE__ */ new Set())).add(x), x;
    }
    getScopeValue(d, b) {
      return this._extScope.getValue(d, b);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(d) {
      return this._extScope.scopeRefs(d, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(d, b, x, k) {
      const I = this._scope.toName(b);
      return x !== void 0 && k && (this._constants[I.str] = x), this._leafNode(new i(d, I, x)), I;
    }
    // `const` declaration (`var` in es5 mode)
    const(d, b, x) {
      return this._def(n.varKinds.const, d, b, x);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(d, b, x) {
      return this._def(n.varKinds.let, d, b, x);
    }
    // `var` declaration with optional assignment
    var(d, b, x) {
      return this._def(n.varKinds.var, d, b, x);
    }
    // assignment code
    assign(d, b, x) {
      return this._leafNode(new o(d, b, x));
    }
    // `+=` code
    add(d, b) {
      return this._leafNode(new c(d, e.operators.ADD, b));
    }
    // appends passed SafeExpr to code or executes Block
    code(d) {
      return typeof d == "function" ? d() : d !== t.nil && this._leafNode(new m(d)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...d) {
      const b = ["{"];
      for (const [x, k] of d)
        b.length > 1 && b.push(","), b.push(x), (x !== k || this.opts.es5) && (b.push(":"), (0, t.addCodeArg)(b, k));
      return b.push("}"), new t._Code(b);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(d, b, x) {
      if (this._blockNode(new f(d)), b && x)
        this.code(b).else().code(x).endIf();
      else if (b)
        this.code(b).endIf();
      else if (x)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(d) {
      return this._elseNode(new f(d));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new v());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(f, v);
    }
    _for(d, b) {
      return this._blockNode(d), b && this.code(b).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(d, b) {
      return this._for(new E(d), b);
    }
    // `for` statement for a range of values
    forRange(d, b, x, k, I = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const G = this._scope.toName(d);
      return this._for(new O(I, G, b, x), () => k(G));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(d, b, x, k = n.varKinds.const) {
      const I = this._scope.toName(d);
      if (this.opts.es5) {
        const G = b instanceof t.Name ? b : this.var("_arr", b);
        return this.forRange("_i", 0, (0, t._)`${G}.length`, (W) => {
          this.var(I, (0, t._)`${G}[${W}]`), x(I);
        });
      }
      return this._for(new A("of", k, I, b), () => x(I));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(d, b, x, k = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(d, (0, t._)`Object.keys(${b})`, x);
      const I = this._scope.toName(d);
      return this._for(new A("in", k, I, b), () => x(I));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode($);
    }
    // `label` statement
    label(d) {
      return this._leafNode(new u(d));
    }
    // `break` statement
    break(d) {
      return this._leafNode(new l(d));
    }
    // `return` statement
    return(d) {
      const b = new X();
      if (this._blockNode(b), this.code(d), b.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(X);
    }
    // `try` statement
    try(d, b, x) {
      if (!b && !x)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const k = new C();
      if (this._blockNode(k), this.code(d), b) {
        const I = this.name("e");
        this._currNode = k.catch = new J(I), b(I);
      }
      return x && (this._currNode = k.finally = new T(), this.code(x)), this._endBlockNode(J, T);
    }
    // `throw` statement
    throw(d) {
      return this._leafNode(new p(d));
    }
    // start self-balancing block
    block(d, b) {
      return this._blockStarts.push(this._nodes.length), d && this.code(d).endBlock(b), this;
    }
    // end the current self-balancing block
    endBlock(d) {
      const b = this._blockStarts.pop();
      if (b === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const x = this._nodes.length - b;
      if (x < 0 || d !== void 0 && x !== d)
        throw new Error(`CodeGen: wrong number of nodes: ${x} vs ${d} expected`);
      return this._nodes.length = b, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(d, b = t.nil, x, k) {
      return this._blockNode(new M(d, b, x)), k && this.code(k).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(M);
    }
    optimize(d = 1) {
      for (; d-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(d) {
      return this._currNode.nodes.push(d), this;
    }
    _blockNode(d) {
      this._currNode.nodes.push(d), this._nodes.push(d);
    }
    _endBlockNode(d, b) {
      const x = this._currNode;
      if (x instanceof d || b && x instanceof b)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${b ? `${d.kind}/${b.kind}` : d.kind}"`);
    }
    _elseNode(d) {
      const b = this._currNode;
      if (!(b instanceof f))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = b.else = d, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const d = this._nodes;
      return d[d.length - 1];
    }
    set _currNode(d) {
      const b = this._nodes;
      b[b.length - 1] = d;
    }
  }
  e.CodeGen = F;
  function L(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) + (d[b] || 0);
    return w;
  }
  function Z(w, d) {
    return d instanceof t._CodeOrName ? L(w, d.names) : w;
  }
  function j(w, d, b) {
    if (w instanceof t.Name)
      return x(w);
    if (!k(w))
      return w;
    return new t._Code(w._items.reduce((I, G) => (G instanceof t.Name && (G = x(G)), G instanceof t._Code ? I.push(...G._items) : I.push(G), I), []));
    function x(I) {
      const G = b[I.str];
      return G === void 0 || d[I.str] !== 1 ? I : (delete d[I.str], G);
    }
    function k(I) {
      return I instanceof t._Code && I._items.some((G) => G instanceof t.Name && d[G.str] === 1 && b[G.str] !== void 0);
    }
  }
  function D(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) - (d[b] || 0);
  }
  function B(w) {
    return typeof w == "boolean" || typeof w == "number" || w === null ? !w : (0, t._)`!${S(w)}`;
  }
  e.not = B;
  const z = _(e.operators.AND);
  function Q(...w) {
    return w.reduce(z);
  }
  e.and = Q;
  const H = _(e.operators.OR);
  function R(...w) {
    return w.reduce(H);
  }
  e.or = R;
  function _(w) {
    return (d, b) => d === t.nil ? b : b === t.nil ? d : (0, t._)`${S(d)} ${w} ${S(b)}`;
  }
  function S(w) {
    return w instanceof t.Name ? w : (0, t._)`(${w})`;
  }
})(he);
var K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.checkStrictMode = K.getErrorPath = K.Type = K.useFunc = K.setEvaluated = K.evaluatedPropsToName = K.mergeEvaluated = K.eachItem = K.unescapeJsonPointer = K.escapeJsonPointer = K.escapeFragment = K.unescapeFragment = K.schemaRefOrVal = K.schemaHasRulesButRef = K.schemaHasRules = K.checkUnknownRules = K.alwaysValidSchema = K.toHash = void 0;
const Se = he, YO = ba;
function ZO(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
K.toHash = ZO;
function QO(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (lv(e, t), !uv(t, e.self.RULES.all));
}
K.alwaysValidSchema = QO;
function lv(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const a = r.RULES.keywords;
  for (const s in t)
    a[s] || fv(e, `unknown keyword: "${s}"`);
}
K.checkUnknownRules = lv;
function uv(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
K.schemaHasRules = uv;
function eA(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
K.schemaHasRulesButRef = eA;
function tA({ topSchemaRef: e, schemaPath: t }, n, r, a) {
  if (!a) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, Se._)`${n}`;
  }
  return (0, Se._)`${e}${t}${(0, Se.getProperty)(r)}`;
}
K.schemaRefOrVal = tA;
function nA(e) {
  return pv(decodeURIComponent(e));
}
K.unescapeFragment = nA;
function rA(e) {
  return encodeURIComponent(Jl(e));
}
K.escapeFragment = rA;
function Jl(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
K.escapeJsonPointer = Jl;
function pv(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
K.unescapeJsonPointer = pv;
function aA(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
K.eachItem = aA;
function Fd({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (a, s, i, o) => {
    const c = i === void 0 ? s : i instanceof Se.Name ? (s instanceof Se.Name ? e(a, s, i) : t(a, s, i), i) : s instanceof Se.Name ? (t(a, i, s), s) : n(s, i);
    return o === Se.Name && !(c instanceof Se.Name) ? r(a, c) : c;
  };
}
K.mergeEvaluated = {
  props: Fd({
    mergeNames: (e, t, n) => e.if((0, Se._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, Se._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, Se._)`${n} || {}`).code((0, Se._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, Se._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, Se._)`${n} || {}`), Xl(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: dv
  }),
  items: Fd({
    mergeNames: (e, t, n) => e.if((0, Se._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, Se._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, Se._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, Se._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function dv(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, Se._)`{}`);
  return t !== void 0 && Xl(e, n, t), n;
}
K.evaluatedPropsToName = dv;
function Xl(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, Se._)`${t}${(0, Se.getProperty)(r)}`, !0));
}
K.setEvaluated = Xl;
const Ld = {};
function sA(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: Ld[t.code] || (Ld[t.code] = new YO._Code(t.code))
  });
}
K.useFunc = sA;
var sc;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(sc || (K.Type = sc = {}));
function iA(e, t, n) {
  if (e instanceof Se.Name) {
    const r = t === sc.Num;
    return n ? r ? (0, Se._)`"[" + ${e} + "]"` : (0, Se._)`"['" + ${e} + "']"` : r ? (0, Se._)`"/" + ${e}` : (0, Se._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, Se.getProperty)(e).toString() : "/" + Jl(e);
}
K.getErrorPath = iA;
function fv(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
K.checkStrictMode = fv;
var Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
const st = he, oA = {
  // validation function arguments
  data: new st.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new st.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new st.Name("instancePath"),
  parentData: new st.Name("parentData"),
  parentDataProperty: new st.Name("parentDataProperty"),
  rootData: new st.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new st.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new st.Name("vErrors"),
  // null or array of validation errors
  errors: new st.Name("errors"),
  // counter of validation errors
  this: new st.Name("this"),
  // "globals"
  self: new st.Name("self"),
  scope: new st.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new st.Name("json"),
  jsonPos: new st.Name("jsonPos"),
  jsonLen: new st.Name("jsonLen"),
  jsonPart: new st.Name("jsonPart")
};
Wt.default = oA;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = he, n = K, r = Wt;
  e.keywordError = {
    message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: v, schemaType: f }) => f ? (0, t.str)`"${v}" keyword must be ${f} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
  };
  function a(v, f = e.keywordError, $, E) {
    const { it: O } = v, { gen: A, compositeRule: M, allErrors: X } = O, C = p(v, f, $);
    E ?? (M || X) ? c(A, C) : u(O, (0, t._)`[${C}]`);
  }
  e.reportError = a;
  function s(v, f = e.keywordError, $) {
    const { it: E } = v, { gen: O, compositeRule: A, allErrors: M } = E, X = p(v, f, $);
    c(O, X), A || M || u(E, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(v, f) {
    v.assign(r.default.errors, f), v.if((0, t._)`${r.default.vErrors} !== null`, () => v.if(f, () => v.assign((0, t._)`${r.default.vErrors}.length`, f), () => v.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function o({ gen: v, keyword: f, schemaValue: $, data: E, errsCount: O, it: A }) {
    if (O === void 0)
      throw new Error("ajv implementation error");
    const M = v.name("err");
    v.forRange("i", O, r.default.errors, (X) => {
      v.const(M, (0, t._)`${r.default.vErrors}[${X}]`), v.if((0, t._)`${M}.instancePath === undefined`, () => v.assign((0, t._)`${M}.instancePath`, (0, t.strConcat)(r.default.instancePath, A.errorPath))), v.assign((0, t._)`${M}.schemaPath`, (0, t.str)`${A.errSchemaPath}/${f}`), A.opts.verbose && (v.assign((0, t._)`${M}.schema`, $), v.assign((0, t._)`${M}.data`, E));
    });
  }
  e.extendErrors = o;
  function c(v, f) {
    const $ = v.const("err", f);
    v.if((0, t._)`${r.default.vErrors} === null`, () => v.assign(r.default.vErrors, (0, t._)`[${$}]`), (0, t._)`${r.default.vErrors}.push(${$})`), v.code((0, t._)`${r.default.errors}++`);
  }
  function u(v, f) {
    const { gen: $, validateName: E, schemaEnv: O } = v;
    O.$async ? $.throw((0, t._)`new ${v.ValidationError}(${f})`) : ($.assign((0, t._)`${E}.errors`, f), $.return(!1));
  }
  const l = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    // also used in JTD errors
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function p(v, f, $) {
    const { createErrors: E } = v.it;
    return E === !1 ? (0, t._)`{}` : m(v, f, $);
  }
  function m(v, f, $ = {}) {
    const { gen: E, it: O } = v, A = [
      h(O, $),
      g(v, $)
    ];
    return y(v, f, A), E.object(...A);
  }
  function h({ errorPath: v }, { instancePath: f }) {
    const $ = f ? (0, t.str)`${v}${(0, n.getErrorPath)(f, n.Type.Str)}` : v;
    return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, $)];
  }
  function g({ keyword: v, it: { errSchemaPath: f } }, { schemaPath: $, parentSchema: E }) {
    let O = E ? f : (0, t.str)`${f}/${v}`;
    return $ && (O = (0, t.str)`${O}${(0, n.getErrorPath)($, n.Type.Str)}`), [l.schemaPath, O];
  }
  function y(v, { params: f, message: $ }, E) {
    const { keyword: O, data: A, schemaValue: M, it: X } = v, { opts: C, propertyName: J, topSchemaRef: T, schemaPath: F } = X;
    E.push([l.keyword, O], [l.params, typeof f == "function" ? f(v) : f || (0, t._)`{}`]), C.messages && E.push([l.message, typeof $ == "function" ? $(v) : $]), C.verbose && E.push([l.schema, M], [l.parentSchema, (0, t._)`${T}${F}`], [r.default.data, A]), J && E.push([l.propertyName, J]);
  }
})(Ta);
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.boolOrEmptySchema = _r.topBoolOrEmptySchema = void 0;
const cA = Ta, lA = he, uA = Wt, pA = {
  message: "boolean schema is false"
};
function dA(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? mv(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(uA.default.data) : (t.assign((0, lA._)`${r}.errors`, null), t.return(!0));
}
_r.topBoolOrEmptySchema = dA;
function fA(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), mv(e)) : n.var(t, !0);
}
_r.boolOrEmptySchema = fA;
function mv(e, t) {
  const { gen: n, data: r } = e, a = {
    gen: n,
    keyword: "false schema",
    data: r,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, cA.reportError)(a, pA, void 0, t);
}
var qe = {}, Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.getRules = Vn.isJSONType = void 0;
const mA = ["string", "number", "integer", "boolean", "null", "object", "array"], hA = new Set(mA);
function vA(e) {
  return typeof e == "string" && hA.has(e);
}
Vn.isJSONType = vA;
function yA() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
Vn.getRules = yA;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.shouldUseRule = en.shouldUseGroup = en.schemaHasRulesForType = void 0;
function gA({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && hv(e, r);
}
en.schemaHasRulesForType = gA;
function hv(e, t) {
  return t.rules.some((n) => vv(e, n));
}
en.shouldUseGroup = hv;
function vv(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
en.shouldUseRule = vv;
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.reportTypeError = qe.checkDataTypes = qe.checkDataType = qe.coerceAndCheckDataType = qe.getJSONTypes = qe.getSchemaTypes = qe.DataType = void 0;
const bA = Vn, $A = en, _A = Ta, me = he, yv = K;
var pr;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(pr || (qe.DataType = pr = {}));
function wA(e) {
  const t = gv(e.type);
  if (t.includes("null")) {
    if (e.nullable === !1)
      throw new Error("type: null contradicts nullable: false");
  } else {
    if (!t.length && e.nullable !== void 0)
      throw new Error('"nullable" cannot be used without "type"');
    e.nullable === !0 && t.push("null");
  }
  return t;
}
qe.getSchemaTypes = wA;
function gv(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(bA.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
qe.getJSONTypes = gv;
function xA(e, t) {
  const { gen: n, data: r, opts: a } = e, s = EA(t, a.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, $A.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const o = Yl(t, r, a.strictNumbers, pr.Wrong);
    n.if(o, () => {
      s.length ? SA(e, t, s) : Zl(e);
    });
  }
  return i;
}
qe.coerceAndCheckDataType = xA;
const bv = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function EA(e, t) {
  return t ? e.filter((n) => bv.has(n) || t === "array" && n === "array") : [];
}
function SA(e, t, n) {
  const { gen: r, data: a, opts: s } = e, i = r.let("dataType", (0, me._)`typeof ${a}`), o = r.let("coerced", (0, me._)`undefined`);
  s.coerceTypes === "array" && r.if((0, me._)`${i} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, me._)`${a}[0]`).assign(i, (0, me._)`typeof ${a}`).if(Yl(t, a, s.strictNumbers), () => r.assign(o, a))), r.if((0, me._)`${o} !== undefined`);
  for (const u of n)
    (bv.has(u) || u === "array" && s.coerceTypes === "array") && c(u);
  r.else(), Zl(e), r.endIf(), r.if((0, me._)`${o} !== undefined`, () => {
    r.assign(a, o), PA(e, o);
  });
  function c(u) {
    switch (u) {
      case "string":
        r.elseIf((0, me._)`${i} == "number" || ${i} == "boolean"`).assign(o, (0, me._)`"" + ${a}`).elseIf((0, me._)`${a} === null`).assign(o, (0, me._)`""`);
        return;
      case "number":
        r.elseIf((0, me._)`${i} == "boolean" || ${a} === null
              || (${i} == "string" && ${a} && ${a} == +${a})`).assign(o, (0, me._)`+${a}`);
        return;
      case "integer":
        r.elseIf((0, me._)`${i} === "boolean" || ${a} === null
              || (${i} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(o, (0, me._)`+${a}`);
        return;
      case "boolean":
        r.elseIf((0, me._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(o, !1).elseIf((0, me._)`${a} === "true" || ${a} === 1`).assign(o, !0);
        return;
      case "null":
        r.elseIf((0, me._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(o, null);
        return;
      case "array":
        r.elseIf((0, me._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${a} === null`).assign(o, (0, me._)`[${a}]`);
    }
  }
}
function PA({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, me._)`${t} !== undefined`, () => e.assign((0, me._)`${t}[${n}]`, r));
}
function ic(e, t, n, r = pr.Correct) {
  const a = r === pr.Correct ? me.operators.EQ : me.operators.NEQ;
  let s;
  switch (e) {
    case "null":
      return (0, me._)`${t} ${a} null`;
    case "array":
      s = (0, me._)`Array.isArray(${t})`;
      break;
    case "object":
      s = (0, me._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      s = i((0, me._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      s = i();
      break;
    default:
      return (0, me._)`typeof ${t} ${a} ${e}`;
  }
  return r === pr.Correct ? s : (0, me.not)(s);
  function i(o = me.nil) {
    return (0, me.and)((0, me._)`typeof ${t} == "number"`, o, n ? (0, me._)`isFinite(${t})` : me.nil);
  }
}
qe.checkDataType = ic;
function Yl(e, t, n, r) {
  if (e.length === 1)
    return ic(e[0], t, n, r);
  let a;
  const s = (0, yv.toHash)(e);
  if (s.array && s.object) {
    const i = (0, me._)`typeof ${t} != "object"`;
    a = s.null ? i : (0, me._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    a = me.nil;
  s.number && delete s.integer;
  for (const i in s)
    a = (0, me.and)(a, ic(i, t, n, r));
  return a;
}
qe.checkDataTypes = Yl;
const RA = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, me._)`{type: ${e}}` : (0, me._)`{type: ${t}}`
};
function Zl(e) {
  const t = OA(e);
  (0, _A.reportError)(t, RA);
}
qe.reportTypeError = Zl;
function OA(e) {
  const { gen: t, data: n, schema: r } = e, a = (0, yv.schemaRefOrVal)(e, r, "type");
  return {
    gen: t,
    keyword: "type",
    data: n,
    schema: r.type,
    schemaCode: a,
    schemaValue: a,
    parentSchema: r,
    params: {},
    it: e
  };
}
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.assignDefaults = void 0;
const Yn = he, AA = K;
function TA(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const a in n)
      Md(e, a, n[a].default);
  else t === "array" && Array.isArray(r) && r.forEach((a, s) => Md(e, s, a.default));
}
mi.assignDefaults = TA;
function Md(e, t, n) {
  const { gen: r, compositeRule: a, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const o = (0, Yn._)`${s}${(0, Yn.getProperty)(t)}`;
  if (a) {
    (0, AA.checkStrictMode)(e, `default is ignored for: ${o}`);
    return;
  }
  let c = (0, Yn._)`${o} === undefined`;
  i.useDefaults === "empty" && (c = (0, Yn._)`${c} || ${o} === null || ${o} === ""`), r.if(c, (0, Yn._)`${o} = ${(0, Yn.stringify)(n)}`);
}
var Kt = {}, ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.validateUnion = ye.validateArray = ye.usePattern = ye.callValidateCode = ye.schemaProperties = ye.allSchemaProperties = ye.noPropertyInData = ye.propertyInData = ye.isOwnProperty = ye.hasPropFunc = ye.reportMissingProp = ye.checkMissingProp = ye.checkReportMissingProp = void 0;
const je = he, Ql = K, un = Wt, jA = K;
function kA(e, t) {
  const { gen: n, data: r, it: a } = e;
  n.if(tu(n, r, t, a.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, je._)`${t}` }, !0), e.error();
  });
}
ye.checkReportMissingProp = kA;
function NA({ gen: e, data: t, it: { opts: n } }, r, a) {
  return (0, je.or)(...r.map((s) => (0, je.and)(tu(e, t, s, n.ownProperties), (0, je._)`${a} = ${s}`)));
}
ye.checkMissingProp = NA;
function IA(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
ye.reportMissingProp = IA;
function $v(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, je._)`Object.prototype.hasOwnProperty`
  });
}
ye.hasPropFunc = $v;
function eu(e, t, n) {
  return (0, je._)`${$v(e)}.call(${t}, ${n})`;
}
ye.isOwnProperty = eu;
function CA(e, t, n, r) {
  const a = (0, je._)`${t}${(0, je.getProperty)(n)} !== undefined`;
  return r ? (0, je._)`${a} && ${eu(e, t, n)}` : a;
}
ye.propertyInData = CA;
function tu(e, t, n, r) {
  const a = (0, je._)`${t}${(0, je.getProperty)(n)} === undefined`;
  return r ? (0, je.or)(a, (0, je.not)(eu(e, t, n))) : a;
}
ye.noPropertyInData = tu;
function _v(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
ye.allSchemaProperties = _v;
function DA(e, t) {
  return _v(t).filter((n) => !(0, Ql.alwaysValidSchema)(e, t[n]));
}
ye.schemaProperties = DA;
function FA({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: a, errorPath: s }, it: i }, o, c, u) {
  const l = u ? (0, je._)`${e}, ${t}, ${r}${a}` : t, p = [
    [un.default.instancePath, (0, je.strConcat)(un.default.instancePath, s)],
    [un.default.parentData, i.parentData],
    [un.default.parentDataProperty, i.parentDataProperty],
    [un.default.rootData, un.default.rootData]
  ];
  i.opts.dynamicRef && p.push([un.default.dynamicAnchors, un.default.dynamicAnchors]);
  const m = (0, je._)`${l}, ${n.object(...p)}`;
  return c !== je.nil ? (0, je._)`${o}.call(${c}, ${m})` : (0, je._)`${o}(${m})`;
}
ye.callValidateCode = FA;
const LA = (0, je._)`new RegExp`;
function MA({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: a } = t.code, s = a(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, je._)`${a.code === "new RegExp" ? LA : (0, jA.useFunc)(e, a)}(${n}, ${r})`
  });
}
ye.usePattern = MA;
function UA(e) {
  const { gen: t, data: n, keyword: r, it: a } = e, s = t.name("valid");
  if (a.allErrors) {
    const o = t.let("valid", !0);
    return i(() => t.assign(o, !1)), o;
  }
  return t.var(s, !0), i(() => t.break()), s;
  function i(o) {
    const c = t.const("len", (0, je._)`${n}.length`);
    t.forRange("i", 0, c, (u) => {
      e.subschema({
        keyword: r,
        dataProp: u,
        dataPropType: Ql.Type.Num
      }, s), t.if((0, je.not)(s), o);
    });
  }
}
ye.validateArray = UA;
function zA(e) {
  const { gen: t, schema: n, keyword: r, it: a } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, Ql.alwaysValidSchema)(a, c)) && !a.opts.unevaluated)
    return;
  const i = t.let("valid", !1), o = t.name("_valid");
  t.block(() => n.forEach((c, u) => {
    const l = e.subschema({
      keyword: r,
      schemaProp: u,
      compositeRule: !0
    }, o);
    t.assign(i, (0, je._)`${i} || ${o}`), e.mergeValidEvaluated(l, o) || t.if((0, je.not)(i));
  })), e.result(i, () => e.reset(), () => e.error(!0));
}
ye.validateUnion = zA;
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.validateKeywordUsage = Kt.validSchemaType = Kt.funcKeywordCode = Kt.macroKeywordCode = void 0;
const pt = he, Rn = Wt, qA = ye, VA = Ta;
function BA(e, t) {
  const { gen: n, keyword: r, schema: a, parentSchema: s, it: i } = e, o = t.macro.call(i.self, a, s, i), c = wv(n, r, o);
  i.opts.validateSchema !== !1 && i.self.validateSchema(o, !0);
  const u = n.name("valid");
  e.subschema({
    schema: o,
    schemaPath: pt.nil,
    errSchemaPath: `${i.errSchemaPath}/${r}`,
    topSchemaRef: c,
    compositeRule: !0
  }, u), e.pass(u, () => e.error(!0));
}
Kt.macroKeywordCode = BA;
function HA(e, t) {
  var n;
  const { gen: r, keyword: a, schema: s, parentSchema: i, $data: o, it: c } = e;
  KA(c, t);
  const u = !o && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = wv(r, a, u), p = r.let("valid");
  e.block$data(p, m), e.ok((n = t.valid) !== null && n !== void 0 ? n : p);
  function m() {
    if (t.errors === !1)
      y(), t.modifying && Ud(e), v(() => e.error());
    else {
      const f = t.async ? h() : g();
      t.modifying && Ud(e), v(() => GA(e, f));
    }
  }
  function h() {
    const f = r.let("ruleErrs", null);
    return r.try(() => y((0, pt._)`await `), ($) => r.assign(p, !1).if((0, pt._)`${$} instanceof ${c.ValidationError}`, () => r.assign(f, (0, pt._)`${$}.errors`), () => r.throw($))), f;
  }
  function g() {
    const f = (0, pt._)`${l}.errors`;
    return r.assign(f, null), y(pt.nil), f;
  }
  function y(f = t.async ? (0, pt._)`await ` : pt.nil) {
    const $ = c.opts.passContext ? Rn.default.this : Rn.default.self, E = !("compile" in t && !o || t.schema === !1);
    r.assign(p, (0, pt._)`${f}${(0, qA.callValidateCode)(e, l, $, E)}`, t.modifying);
  }
  function v(f) {
    var $;
    r.if((0, pt.not)(($ = t.valid) !== null && $ !== void 0 ? $ : p), f);
  }
}
Kt.funcKeywordCode = HA;
function Ud(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, pt._)`${r.parentData}[${r.parentDataProperty}]`));
}
function GA(e, t) {
  const { gen: n } = e;
  n.if((0, pt._)`Array.isArray(${t})`, () => {
    n.assign(Rn.default.vErrors, (0, pt._)`${Rn.default.vErrors} === null ? ${t} : ${Rn.default.vErrors}.concat(${t})`).assign(Rn.default.errors, (0, pt._)`${Rn.default.vErrors}.length`), (0, VA.extendErrors)(e);
  }, () => e.error());
}
function KA({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function wv(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, pt.stringify)(n) });
}
function WA(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
Kt.validSchemaType = WA;
function JA({ schema: e, opts: t, self: n, errSchemaPath: r }, a, s) {
  if (Array.isArray(a.keyword) ? !a.keyword.includes(s) : a.keyword !== s)
    throw new Error("ajv implementation error");
  const i = a.dependencies;
  if (i?.some((o) => !Object.prototype.hasOwnProperty.call(e, o)))
    throw new Error(`parent schema must have dependencies of ${s}: ${i.join(",")}`);
  if (a.validateSchema && !a.validateSchema(e[s])) {
    const c = `keyword "${s}" value is invalid at path "${r}": ` + n.errorsText(a.validateSchema.errors);
    if (t.validateSchema === "log")
      n.logger.error(c);
    else
      throw new Error(c);
  }
}
Kt.validateKeywordUsage = JA;
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.extendSubschemaMode = $n.extendSubschemaData = $n.getSubschema = void 0;
const Ht = he, xv = K;
function XA(e, { keyword: t, schemaProp: n, schema: r, schemaPath: a, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const o = e.schema[t];
    return n === void 0 ? {
      schema: o,
      schemaPath: (0, Ht._)`${e.schemaPath}${(0, Ht.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: o[n],
      schemaPath: (0, Ht._)`${e.schemaPath}${(0, Ht.getProperty)(t)}${(0, Ht.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, xv.escapeFragment)(n)}`
    };
  }
  if (r !== void 0) {
    if (a === void 0 || s === void 0 || i === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: r,
      schemaPath: a,
      topSchemaRef: i,
      errSchemaPath: s
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
$n.getSubschema = XA;
function YA(e, t, { dataProp: n, dataPropType: r, data: a, dataTypes: s, propertyName: i }) {
  if (a !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: o } = t;
  if (n !== void 0) {
    const { errorPath: u, dataPathArr: l, opts: p } = t, m = o.let("data", (0, Ht._)`${t.data}${(0, Ht.getProperty)(n)}`, !0);
    c(m), e.errorPath = (0, Ht.str)`${u}${(0, xv.getErrorPath)(n, r, p.jsPropertySyntax)}`, e.parentDataProperty = (0, Ht._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (a !== void 0) {
    const u = a instanceof Ht.Name ? a : o.let("data", a, !0);
    c(u), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(u) {
    e.data = u, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, u];
  }
}
$n.extendSubschemaData = YA;
function ZA(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: a, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), a !== void 0 && (e.createErrors = a), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
$n.extendSubschemaMode = ZA;
var Ze = {}, Ev = { exports: {} }, vn = Ev.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, a = n.post || function() {
  };
  bs(t, r, a, e, "", e);
};
vn.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
vn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
vn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
vn.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function bs(e, t, n, r, a, s, i, o, c, u) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, a, s, i, o, c, u);
    for (var l in r) {
      var p = r[l];
      if (Array.isArray(p)) {
        if (l in vn.arrayKeywords)
          for (var m = 0; m < p.length; m++)
            bs(e, t, n, p[m], a + "/" + l + "/" + m, s, a, l, r, m);
      } else if (l in vn.propsKeywords) {
        if (p && typeof p == "object")
          for (var h in p)
            bs(e, t, n, p[h], a + "/" + l + "/" + QA(h), s, a, l, r, h);
      } else (l in vn.keywords || e.allKeys && !(l in vn.skipKeywords)) && bs(e, t, n, p, a + "/" + l, s, a, l, r);
    }
    n(r, a, s, i, o, c, u);
  }
}
function QA(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var eT = Ev.exports;
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.getSchemaRefs = Ze.resolveUrl = Ze.normalizeId = Ze._getFullPath = Ze.getFullPath = Ze.inlineRef = void 0;
const tT = K, nT = oi, rT = eT, aT = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function sT(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !oc(e) : t ? Sv(e) <= t : !1;
}
Ze.inlineRef = sT;
const iT = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function oc(e) {
  for (const t in e) {
    if (iT.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(oc) || typeof n == "object" && oc(n))
      return !0;
  }
  return !1;
}
function Sv(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !aT.has(n) && (typeof e[n] == "object" && (0, tT.eachItem)(e[n], (r) => t += Sv(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function Pv(e, t = "", n) {
  n !== !1 && (t = dr(t));
  const r = e.parse(t);
  return Rv(e, r);
}
Ze.getFullPath = Pv;
function Rv(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Ze._getFullPath = Rv;
const oT = /#\/?$/;
function dr(e) {
  return e ? e.replace(oT, "") : "";
}
Ze.normalizeId = dr;
function cT(e, t, n) {
  return n = dr(n), e.resolve(t, n);
}
Ze.resolveUrl = cT;
const lT = /^[a-z_][-a-z0-9._]*$/i;
function uT(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, a = dr(e[n] || t), s = { "": a }, i = Pv(r, a, !1), o = {}, c = /* @__PURE__ */ new Set();
  return rT(e, { allKeys: !0 }, (p, m, h, g) => {
    if (g === void 0)
      return;
    const y = i + m;
    let v = s[g];
    typeof p[n] == "string" && (v = f.call(this, p[n])), $.call(this, p.$anchor), $.call(this, p.$dynamicAnchor), s[m] = v;
    function f(E) {
      const O = this.opts.uriResolver.resolve;
      if (E = dr(v ? O(v, E) : E), c.has(E))
        throw l(E);
      c.add(E);
      let A = this.refs[E];
      return typeof A == "string" && (A = this.refs[A]), typeof A == "object" ? u(p, A.schema, E) : E !== dr(y) && (E[0] === "#" ? (u(p, o[E], E), o[E] = p) : this.refs[E] = y), E;
    }
    function $(E) {
      if (typeof E == "string") {
        if (!lT.test(E))
          throw new Error(`invalid anchor "${E}"`);
        f.call(this, `#${E}`);
      }
    }
  }), o;
  function u(p, m, h) {
    if (m !== void 0 && !nT(p, m))
      throw l(h);
  }
  function l(p) {
    return new Error(`reference "${p}" resolves to more than one schema`);
  }
}
Ze.getSchemaRefs = uT;
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.getData = Dt.KeywordCxt = Dt.validateFunctionCode = void 0;
const Ov = _r, zd = qe, nu = en, qs = qe, pT = mi, sa = Kt, fo = $n, te = he, oe = Wt, dT = Ze, tn = K, Gr = Ta;
function fT(e) {
  if (jv(e) && (kv(e), Tv(e))) {
    vT(e);
    return;
  }
  Av(e, () => (0, Ov.topBoolOrEmptySchema)(e));
}
Dt.validateFunctionCode = fT;
function Av({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: a }, s) {
  a.code.es5 ? e.func(t, (0, te._)`${oe.default.data}, ${oe.default.valCxt}`, r.$async, () => {
    e.code((0, te._)`"use strict"; ${qd(n, a)}`), hT(e, a), e.code(s);
  }) : e.func(t, (0, te._)`${oe.default.data}, ${mT(a)}`, r.$async, () => e.code(qd(n, a)).code(s));
}
function mT(e) {
  return (0, te._)`{${oe.default.instancePath}="", ${oe.default.parentData}, ${oe.default.parentDataProperty}, ${oe.default.rootData}=${oe.default.data}${e.dynamicRef ? (0, te._)`, ${oe.default.dynamicAnchors}={}` : te.nil}}={}`;
}
function hT(e, t) {
  e.if(oe.default.valCxt, () => {
    e.var(oe.default.instancePath, (0, te._)`${oe.default.valCxt}.${oe.default.instancePath}`), e.var(oe.default.parentData, (0, te._)`${oe.default.valCxt}.${oe.default.parentData}`), e.var(oe.default.parentDataProperty, (0, te._)`${oe.default.valCxt}.${oe.default.parentDataProperty}`), e.var(oe.default.rootData, (0, te._)`${oe.default.valCxt}.${oe.default.rootData}`), t.dynamicRef && e.var(oe.default.dynamicAnchors, (0, te._)`${oe.default.valCxt}.${oe.default.dynamicAnchors}`);
  }, () => {
    e.var(oe.default.instancePath, (0, te._)`""`), e.var(oe.default.parentData, (0, te._)`undefined`), e.var(oe.default.parentDataProperty, (0, te._)`undefined`), e.var(oe.default.rootData, oe.default.data), t.dynamicRef && e.var(oe.default.dynamicAnchors, (0, te._)`{}`);
  });
}
function vT(e) {
  const { schema: t, opts: n, gen: r } = e;
  Av(e, () => {
    n.$comment && t.$comment && Iv(e), _T(e), r.let(oe.default.vErrors, null), r.let(oe.default.errors, 0), n.unevaluated && yT(e), Nv(e), ET(e);
  });
}
function yT(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, te._)`${n}.evaluated`), t.if((0, te._)`${e.evaluated}.dynamicProps`, () => t.assign((0, te._)`${e.evaluated}.props`, (0, te._)`undefined`)), t.if((0, te._)`${e.evaluated}.dynamicItems`, () => t.assign((0, te._)`${e.evaluated}.items`, (0, te._)`undefined`));
}
function qd(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, te._)`/*# sourceURL=${n} */` : te.nil;
}
function gT(e, t) {
  if (jv(e) && (kv(e), Tv(e))) {
    bT(e, t);
    return;
  }
  (0, Ov.boolOrEmptySchema)(e, t);
}
function Tv({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function jv(e) {
  return typeof e.schema != "boolean";
}
function bT(e, t) {
  const { schema: n, gen: r, opts: a } = e;
  a.$comment && n.$comment && Iv(e), wT(e), xT(e);
  const s = r.const("_errs", oe.default.errors);
  Nv(e, s), r.var(t, (0, te._)`${s} === ${oe.default.errors}`);
}
function kv(e) {
  (0, tn.checkUnknownRules)(e), $T(e);
}
function Nv(e, t) {
  if (e.opts.jtd)
    return Vd(e, [], !1, t);
  const n = (0, zd.getSchemaTypes)(e.schema), r = (0, zd.coerceAndCheckDataType)(e, n);
  Vd(e, n, !r, t);
}
function $T(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: a } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, tn.schemaHasRulesButRef)(t, a.RULES) && a.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function _T(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, tn.checkStrictMode)(e, "default is ignored in the schema root");
}
function wT(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, dT.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function xT(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Iv({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: a }) {
  const s = n.$comment;
  if (a.$comment === !0)
    e.code((0, te._)`${oe.default.self}.logger.log(${s})`);
  else if (typeof a.$comment == "function") {
    const i = (0, te.str)`${r}/$comment`, o = e.scopeValue("root", { ref: t.root });
    e.code((0, te._)`${oe.default.self}.opts.$comment(${s}, ${i}, ${o}.schema)`);
  }
}
function ET(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: a, opts: s } = e;
  n.$async ? t.if((0, te._)`${oe.default.errors} === 0`, () => t.return(oe.default.data), () => t.throw((0, te._)`new ${a}(${oe.default.vErrors})`)) : (t.assign((0, te._)`${r}.errors`, oe.default.vErrors), s.unevaluated && ST(e), t.return((0, te._)`${oe.default.errors} === 0`));
}
function ST({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof te.Name && e.assign((0, te._)`${t}.props`, n), r instanceof te.Name && e.assign((0, te._)`${t}.items`, r);
}
function Vd(e, t, n, r) {
  const { gen: a, schema: s, data: i, allErrors: o, opts: c, self: u } = e, { RULES: l } = u;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, tn.schemaHasRulesButRef)(s, l))) {
    a.block(() => Fv(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || PT(e, t), a.block(() => {
    for (const m of l.rules)
      p(m);
    p(l.post);
  });
  function p(m) {
    (0, nu.shouldUseGroup)(s, m) && (m.type ? (a.if((0, qs.checkDataType)(m.type, i, c.strictNumbers)), Bd(e, m), t.length === 1 && t[0] === m.type && n && (a.else(), (0, qs.reportTypeError)(e)), a.endIf()) : Bd(e, m), o || a.if((0, te._)`${oe.default.errors} === ${r || 0}`));
  }
}
function Bd(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: a } } = e;
  a && (0, pT.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, nu.shouldUseRule)(r, s) && Fv(e, s.keyword, s.definition, t.type);
  });
}
function PT(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (RT(e, t), e.opts.allowUnionTypes || OT(e, t), AT(e, e.dataTypes));
}
function RT(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      Cv(e.dataTypes, n) || ru(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), jT(e, t);
  }
}
function OT(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && ru(e, "use allowUnionTypes to allow union type keyword");
}
function AT(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const a = n[r];
    if (typeof a == "object" && (0, nu.shouldUseRule)(e.schema, a)) {
      const { type: s } = a.definition;
      s.length && !s.some((i) => TT(t, i)) && ru(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function TT(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Cv(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function jT(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    Cv(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function ru(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, tn.checkStrictMode)(e, t, e.opts.strictTypes);
}
class Dv {
  constructor(t, n, r) {
    if ((0, sa.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, tn.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", Lv(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, sa.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${r} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = t.gen.const("_errs", oe.default.errors));
  }
  result(t, n, r) {
    this.failResult((0, te.not)(t), n, r);
  }
  failResult(t, n, r) {
    this.gen.if(t), r ? r() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, n) {
    this.failResult((0, te.not)(t), void 0, n);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: n } = this;
    this.fail((0, te._)`${n} !== undefined && (${(0, te.or)(this.invalid$data(), t)})`);
  }
  error(t, n, r) {
    if (n) {
      this.setParams(n), this._error(t, r), this.setParams({});
      return;
    }
    this._error(t, r);
  }
  _error(t, n) {
    (t ? Gr.reportExtraError : Gr.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, Gr.reportError)(this, this.def.$dataError || Gr.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Gr.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, n) {
    n ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, n, r = te.nil) {
    this.gen.block(() => {
      this.check$data(t, r), n();
    });
  }
  check$data(t = te.nil, n = te.nil) {
    if (!this.$data)
      return;
    const { gen: r, schemaCode: a, schemaType: s, def: i } = this;
    r.if((0, te.or)((0, te._)`${a} === undefined`, n)), t !== te.nil && r.assign(t, !0), (s.length || i.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), t !== te.nil && r.assign(t, !1)), r.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: n, schemaType: r, def: a, it: s } = this;
    return (0, te.or)(i(), o());
    function i() {
      if (r.length) {
        if (!(n instanceof te.Name))
          throw new Error("ajv implementation error");
        const c = Array.isArray(r) ? r : [r];
        return (0, te._)`${(0, qs.checkDataTypes)(c, n, s.opts.strictNumbers, qs.DataType.Wrong)}`;
      }
      return te.nil;
    }
    function o() {
      if (a.validateSchema) {
        const c = t.scopeValue("validate$data", { ref: a.validateSchema });
        return (0, te._)`!${c}(${n})`;
      }
      return te.nil;
    }
  }
  subschema(t, n) {
    const r = (0, fo.getSubschema)(this.it, t);
    (0, fo.extendSubschemaData)(r, this.it, t), (0, fo.extendSubschemaMode)(r, t);
    const a = { ...this.it, ...r, items: void 0, props: void 0 };
    return gT(a, n), a;
  }
  mergeEvaluated(t, n) {
    const { it: r, gen: a } = this;
    r.opts.unevaluated && (r.props !== !0 && t.props !== void 0 && (r.props = tn.mergeEvaluated.props(a, t.props, r.props, n)), r.items !== !0 && t.items !== void 0 && (r.items = tn.mergeEvaluated.items(a, t.items, r.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: r, gen: a } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return a.if(n, () => this.mergeEvaluated(t, te.Name)), !0;
  }
}
Dt.KeywordCxt = Dv;
function Fv(e, t, n, r) {
  const a = new Dv(e, n, t);
  "code" in n ? n.code(a, r) : a.$data && n.validate ? (0, sa.funcKeywordCode)(a, n) : "macro" in n ? (0, sa.macroKeywordCode)(a, n) : (n.compile || n.validate) && (0, sa.funcKeywordCode)(a, n);
}
const kT = /^\/(?:[^~]|~0|~1)*$/, NT = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function Lv(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let a, s;
  if (e === "")
    return oe.default.rootData;
  if (e[0] === "/") {
    if (!kT.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    a = e, s = oe.default.rootData;
  } else {
    const u = NT.exec(e);
    if (!u)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const l = +u[1];
    if (a = u[2], a === "#") {
      if (l >= t)
        throw new Error(c("property/index", l));
      return r[t - l];
    }
    if (l > t)
      throw new Error(c("data", l));
    if (s = n[t - l], !a)
      return s;
  }
  let i = s;
  const o = a.split("/");
  for (const u of o)
    u && (s = (0, te._)`${s}${(0, te.getProperty)((0, tn.unescapeJsonPointer)(u))}`, i = (0, te._)`${i} && ${s}`);
  return i;
  function c(u, l) {
    return `Cannot access ${u} ${l} levels up, current level is ${t}`;
  }
}
Dt.getData = Lv;
var ja = {};
Object.defineProperty(ja, "__esModule", { value: !0 });
class IT extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
ja.default = IT;
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
const mo = Ze;
class CT extends Error {
  constructor(t, n, r, a) {
    super(a || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, mo.resolveUrl)(t, n, r), this.missingSchema = (0, mo.normalizeId)((0, mo.getFullPath)(t, this.missingRef));
  }
}
Nr.default = CT;
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.resolveSchema = vt.getCompilingSchema = vt.resolveRef = vt.compileSchema = vt.SchemaEnv = void 0;
const Ot = he, DT = ja, wn = Wt, It = Ze, Hd = K, FT = Dt;
class hi {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, It.normalizeId)(r?.[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r?.$async, this.refs = {};
  }
}
vt.SchemaEnv = hi;
function au(e) {
  const t = Mv.call(this, e);
  if (t)
    return t;
  const n = (0, It.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: a } = this.opts.code, { ownProperties: s } = this.opts, i = new Ot.CodeGen(this.scope, { es5: r, lines: a, ownProperties: s });
  let o;
  e.$async && (o = i.scopeValue("Error", {
    ref: DT.default,
    code: (0, Ot._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const u = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: wn.default.data,
    parentData: wn.default.parentData,
    parentDataProperty: wn.default.parentDataProperty,
    dataNames: [wn.default.data],
    dataPathArr: [Ot.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Ot.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: o,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: Ot.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Ot._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, FT.validateFunctionCode)(u), i.optimize(this.opts.code.optimize);
    const p = i.toString();
    l = `${i.scopeRefs(wn.default.scope)}return ${p}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const h = new Function(`${wn.default.self}`, `${wn.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: h }), h.errors = null, h.schema = e.schema, h.schemaEnv = e, e.$async && (h.$async = !0), this.opts.code.source === !0 && (h.source = { validateName: c, validateCode: p, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: g, items: y } = u;
      h.evaluated = {
        props: g instanceof Ot.Name ? void 0 : g,
        items: y instanceof Ot.Name ? void 0 : y,
        dynamicProps: g instanceof Ot.Name,
        dynamicItems: y instanceof Ot.Name
      }, h.source && (h.source.evaluated = (0, Ot.stringify)(h.evaluated));
    }
    return e.validate = h, e;
  } catch (p) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), p;
  } finally {
    this._compilations.delete(e);
  }
}
vt.compileSchema = au;
function LT(e, t, n) {
  var r;
  n = (0, It.resolveUrl)(this.opts.uriResolver, t, n);
  const a = e.refs[n];
  if (a)
    return a;
  let s = zT.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: o } = this.opts;
    i && (s = new hi({ schema: i, schemaId: o, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = MT.call(this, s);
}
vt.resolveRef = LT;
function MT(e) {
  return (0, It.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : au.call(this, e);
}
function Mv(e) {
  for (const t of this._compilations)
    if (UT(t, e))
      return t;
}
vt.getCompilingSchema = Mv;
function UT(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function zT(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || vi.call(this, e, t);
}
function vi(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, It._getFullPath)(this.opts.uriResolver, n);
  let a = (0, It.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === a)
    return ho.call(this, n, e);
  const s = (0, It.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const o = vi.call(this, e, i);
    return typeof o?.schema != "object" ? void 0 : ho.call(this, n, o);
  }
  if (typeof i?.schema == "object") {
    if (i.validate || au.call(this, i), s === (0, It.normalizeId)(t)) {
      const { schema: o } = i, { schemaId: c } = this.opts, u = o[c];
      return u && (a = (0, It.resolveUrl)(this.opts.uriResolver, a, u)), new hi({ schema: o, schemaId: c, root: e, baseId: a });
    }
    return ho.call(this, n, i);
  }
}
vt.resolveSchema = vi;
const qT = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function ho(e, { baseId: t, schema: n, root: r }) {
  var a;
  if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/")
    return;
  for (const o of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, Hd.unescapeFragment)(o)];
    if (c === void 0)
      return;
    n = c;
    const u = typeof n == "object" && n[this.opts.schemaId];
    !qT.has(o) && u && (t = (0, It.resolveUrl)(this.opts.uriResolver, t, u));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, Hd.schemaHasRulesButRef)(n, this.RULES)) {
    const o = (0, It.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = vi.call(this, r, o);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new hi({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const VT = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", BT = "Meta-schema for $data reference (JSON AnySchema extension proposal)", HT = "object", GT = [
  "$data"
], KT = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, WT = !1, JT = {
  $id: VT,
  description: BT,
  type: HT,
  required: GT,
  properties: KT,
  additionalProperties: WT
};
var su = {};
Object.defineProperty(su, "__esModule", { value: !0 });
const Uv = Jh;
Uv.code = 'require("ajv/dist/runtime/uri").default';
su.default = Uv;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Dt;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = he;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return n.CodeGen;
  } });
  const r = ja, a = Nr, s = Vn, i = vt, o = he, c = Ze, u = qe, l = K, p = JT, m = su, h = (R, _) => new RegExp(R, _);
  h.code = "new RegExp";
  const g = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), v = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, f = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, $ = 200;
  function E(R) {
    var _, S, w, d, b, x, k, I, G, W, ce, le, et, ft, Ue, re, Ae, q, U, ue, we, ae, Oe, ke, xe;
    const Be = R.strict, $t = (_ = R.code) === null || _ === void 0 ? void 0 : _.optimize, Ne = $t === !0 || $t === void 0 ? 1 : $t || 0, rn = (w = (S = R.code) === null || S === void 0 ? void 0 : S.regExp) !== null && w !== void 0 ? w : h, Pi = (d = R.uriResolver) !== null && d !== void 0 ? d : m.default;
    return {
      strictSchema: (x = (b = R.strictSchema) !== null && b !== void 0 ? b : Be) !== null && x !== void 0 ? x : !0,
      strictNumbers: (I = (k = R.strictNumbers) !== null && k !== void 0 ? k : Be) !== null && I !== void 0 ? I : !0,
      strictTypes: (W = (G = R.strictTypes) !== null && G !== void 0 ? G : Be) !== null && W !== void 0 ? W : "log",
      strictTuples: (le = (ce = R.strictTuples) !== null && ce !== void 0 ? ce : Be) !== null && le !== void 0 ? le : "log",
      strictRequired: (ft = (et = R.strictRequired) !== null && et !== void 0 ? et : Be) !== null && ft !== void 0 ? ft : !1,
      code: R.code ? { ...R.code, optimize: Ne, regExp: rn } : { optimize: Ne, regExp: rn },
      loopRequired: (Ue = R.loopRequired) !== null && Ue !== void 0 ? Ue : $,
      loopEnum: (re = R.loopEnum) !== null && re !== void 0 ? re : $,
      meta: (Ae = R.meta) !== null && Ae !== void 0 ? Ae : !0,
      messages: (q = R.messages) !== null && q !== void 0 ? q : !0,
      inlineRefs: (U = R.inlineRefs) !== null && U !== void 0 ? U : !0,
      schemaId: (ue = R.schemaId) !== null && ue !== void 0 ? ue : "$id",
      addUsedSchema: (we = R.addUsedSchema) !== null && we !== void 0 ? we : !0,
      validateSchema: (ae = R.validateSchema) !== null && ae !== void 0 ? ae : !0,
      validateFormats: (Oe = R.validateFormats) !== null && Oe !== void 0 ? Oe : !0,
      unicodeRegExp: (ke = R.unicodeRegExp) !== null && ke !== void 0 ? ke : !0,
      int32range: (xe = R.int32range) !== null && xe !== void 0 ? xe : !0,
      uriResolver: Pi
    };
  }
  class O {
    constructor(_ = {}) {
      this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), _ = this.opts = { ..._, ...E(_) };
      const { es5: S, lines: w } = this.opts.code;
      this.scope = new o.ValueScope({ scope: {}, prefixes: y, es5: S, lines: w }), this.logger = L(_.logger);
      const d = _.validateFormats;
      _.validateFormats = !1, this.RULES = (0, s.getRules)(), A.call(this, v, _, "NOT SUPPORTED"), A.call(this, f, _, "DEPRECATED", "warn"), this._metaOpts = T.call(this), _.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), _.keywords && J.call(this, _.keywords), typeof _.meta == "object" && this.addMetaSchema(_.meta), X.call(this), _.validateFormats = d;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: _, meta: S, schemaId: w } = this.opts;
      let d = p;
      w === "id" && (d = { ...p }, d.id = d.$id, delete d.$id), S && _ && this.addMetaSchema(d, d[w], !1);
    }
    defaultMeta() {
      const { meta: _, schemaId: S } = this.opts;
      return this.opts.defaultMeta = typeof _ == "object" ? _[S] || _ : void 0;
    }
    validate(_, S) {
      let w;
      if (typeof _ == "string") {
        if (w = this.getSchema(_), !w)
          throw new Error(`no schema with key or ref "${_}"`);
      } else
        w = this.compile(_);
      const d = w(S);
      return "$async" in w || (this.errors = w.errors), d;
    }
    compile(_, S) {
      const w = this._addSchema(_, S);
      return w.validate || this._compileSchemaEnv(w);
    }
    compileAsync(_, S) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: w } = this.opts;
      return d.call(this, _, S);
      async function d(W, ce) {
        await b.call(this, W.$schema);
        const le = this._addSchema(W, ce);
        return le.validate || x.call(this, le);
      }
      async function b(W) {
        W && !this.getSchema(W) && await d.call(this, { $ref: W }, !0);
      }
      async function x(W) {
        try {
          return this._compileSchemaEnv(W);
        } catch (ce) {
          if (!(ce instanceof a.default))
            throw ce;
          return k.call(this, ce), await I.call(this, ce.missingSchema), x.call(this, W);
        }
      }
      function k({ missingSchema: W, missingRef: ce }) {
        if (this.refs[W])
          throw new Error(`AnySchema ${W} is loaded but ${ce} cannot be resolved`);
      }
      async function I(W) {
        const ce = await G.call(this, W);
        this.refs[W] || await b.call(this, ce.$schema), this.refs[W] || this.addSchema(ce, W, S);
      }
      async function G(W) {
        const ce = this._loading[W];
        if (ce)
          return ce;
        try {
          return await (this._loading[W] = w(W));
        } finally {
          delete this._loading[W];
        }
      }
    }
    // Adds schema to the instance
    addSchema(_, S, w, d = this.opts.validateSchema) {
      if (Array.isArray(_)) {
        for (const x of _)
          this.addSchema(x, void 0, w, d);
        return this;
      }
      let b;
      if (typeof _ == "object") {
        const { schemaId: x } = this.opts;
        if (b = _[x], b !== void 0 && typeof b != "string")
          throw new Error(`schema ${x} must be string`);
      }
      return S = (0, c.normalizeId)(S || b), this._checkUnique(S), this.schemas[S] = this._addSchema(_, w, S, d, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(_, S, w = this.opts.validateSchema) {
      return this.addSchema(_, S, !0, w), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(_, S) {
      if (typeof _ == "boolean")
        return !0;
      let w;
      if (w = _.$schema, w !== void 0 && typeof w != "string")
        throw new Error("$schema must be a string");
      if (w = w || this.opts.defaultMeta || this.defaultMeta(), !w)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const d = this.validate(w, _);
      if (!d && S) {
        const b = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(b);
        else
          throw new Error(b);
      }
      return d;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(_) {
      let S;
      for (; typeof (S = M.call(this, _)) == "string"; )
        _ = S;
      if (S === void 0) {
        const { schemaId: w } = this.opts, d = new i.SchemaEnv({ schema: {}, schemaId: w });
        if (S = i.resolveSchema.call(this, d, _), !S)
          return;
        this.refs[_] = S;
      }
      return S.validate || this._compileSchemaEnv(S);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(_) {
      if (_ instanceof RegExp)
        return this._removeAllSchemas(this.schemas, _), this._removeAllSchemas(this.refs, _), this;
      switch (typeof _) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const S = M.call(this, _);
          return typeof S == "object" && this._cache.delete(S.schema), delete this.schemas[_], delete this.refs[_], this;
        }
        case "object": {
          const S = _;
          this._cache.delete(S);
          let w = _[this.opts.schemaId];
          return w && (w = (0, c.normalizeId)(w), delete this.schemas[w], delete this.refs[w]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(_) {
      for (const S of _)
        this.addKeyword(S);
      return this;
    }
    addKeyword(_, S) {
      let w;
      if (typeof _ == "string")
        w = _, typeof S == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), S.keyword = w);
      else if (typeof _ == "object" && S === void 0) {
        if (S = _, w = S.keyword, Array.isArray(w) && !w.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (j.call(this, w, S), !S)
        return (0, l.eachItem)(w, (b) => D.call(this, b)), this;
      z.call(this, S);
      const d = {
        ...S,
        type: (0, u.getJSONTypes)(S.type),
        schemaType: (0, u.getJSONTypes)(S.schemaType)
      };
      return (0, l.eachItem)(w, d.type.length === 0 ? (b) => D.call(this, b, d) : (b) => d.type.forEach((x) => D.call(this, b, d, x))), this;
    }
    getKeyword(_) {
      const S = this.RULES.all[_];
      return typeof S == "object" ? S.definition : !!S;
    }
    // Remove keyword
    removeKeyword(_) {
      const { RULES: S } = this;
      delete S.keywords[_], delete S.all[_];
      for (const w of S.rules) {
        const d = w.rules.findIndex((b) => b.keyword === _);
        d >= 0 && w.rules.splice(d, 1);
      }
      return this;
    }
    // Add format
    addFormat(_, S) {
      return typeof S == "string" && (S = new RegExp(S)), this.formats[_] = S, this;
    }
    errorsText(_ = this.errors, { separator: S = ", ", dataVar: w = "data" } = {}) {
      return !_ || _.length === 0 ? "No errors" : _.map((d) => `${w}${d.instancePath} ${d.message}`).reduce((d, b) => d + S + b);
    }
    $dataMetaSchema(_, S) {
      const w = this.RULES.all;
      _ = JSON.parse(JSON.stringify(_));
      for (const d of S) {
        const b = d.split("/").slice(1);
        let x = _;
        for (const k of b)
          x = x[k];
        for (const k in w) {
          const I = w[k];
          if (typeof I != "object")
            continue;
          const { $data: G } = I.definition, W = x[k];
          G && W && (x[k] = H(W));
        }
      }
      return _;
    }
    _removeAllSchemas(_, S) {
      for (const w in _) {
        const d = _[w];
        (!S || S.test(w)) && (typeof d == "string" ? delete _[w] : d && !d.meta && (this._cache.delete(d.schema), delete _[w]));
      }
    }
    _addSchema(_, S, w, d = this.opts.validateSchema, b = this.opts.addUsedSchema) {
      let x;
      const { schemaId: k } = this.opts;
      if (typeof _ == "object")
        x = _[k];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof _ != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let I = this._cache.get(_);
      if (I !== void 0)
        return I;
      w = (0, c.normalizeId)(x || w);
      const G = c.getSchemaRefs.call(this, _, w);
      return I = new i.SchemaEnv({ schema: _, schemaId: k, meta: S, baseId: w, localRefs: G }), this._cache.set(I.schema, I), b && !w.startsWith("#") && (w && this._checkUnique(w), this.refs[w] = I), d && this.validateSchema(_, !0), I;
    }
    _checkUnique(_) {
      if (this.schemas[_] || this.refs[_])
        throw new Error(`schema with key or id "${_}" already exists`);
    }
    _compileSchemaEnv(_) {
      if (_.meta ? this._compileMetaSchema(_) : i.compileSchema.call(this, _), !_.validate)
        throw new Error("ajv implementation error");
      return _.validate;
    }
    _compileMetaSchema(_) {
      const S = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, _);
      } finally {
        this.opts = S;
      }
    }
  }
  O.ValidationError = r.default, O.MissingRefError = a.default, e.default = O;
  function A(R, _, S, w = "error") {
    for (const d in R) {
      const b = d;
      b in _ && this.logger[w](`${S}: option ${d}. ${R[b]}`);
    }
  }
  function M(R) {
    return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
  }
  function X() {
    const R = this.opts.schemas;
    if (R)
      if (Array.isArray(R))
        this.addSchema(R);
      else
        for (const _ in R)
          this.addSchema(R[_], _);
  }
  function C() {
    for (const R in this.opts.formats) {
      const _ = this.opts.formats[R];
      _ && this.addFormat(R, _);
    }
  }
  function J(R) {
    if (Array.isArray(R)) {
      this.addVocabulary(R);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const _ in R) {
      const S = R[_];
      S.keyword || (S.keyword = _), this.addKeyword(S);
    }
  }
  function T() {
    const R = { ...this.opts };
    for (const _ of g)
      delete R[_];
    return R;
  }
  const F = { log() {
  }, warn() {
  }, error() {
  } };
  function L(R) {
    if (R === !1)
      return F;
    if (R === void 0)
      return console;
    if (R.log && R.warn && R.error)
      return R;
    throw new Error("logger must implement log, warn and error methods");
  }
  const Z = /^[a-z_$][a-z0-9_$:-]*$/i;
  function j(R, _) {
    const { RULES: S } = this;
    if ((0, l.eachItem)(R, (w) => {
      if (S.keywords[w])
        throw new Error(`Keyword ${w} is already defined`);
      if (!Z.test(w))
        throw new Error(`Keyword ${w} has invalid name`);
    }), !!_ && _.$data && !("code" in _ || "validate" in _))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function D(R, _, S) {
    var w;
    const d = _?.post;
    if (S && d)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: b } = this;
    let x = d ? b.post : b.rules.find(({ type: I }) => I === S);
    if (x || (x = { type: S, rules: [] }, b.rules.push(x)), b.keywords[R] = !0, !_)
      return;
    const k = {
      keyword: R,
      definition: {
        ..._,
        type: (0, u.getJSONTypes)(_.type),
        schemaType: (0, u.getJSONTypes)(_.schemaType)
      }
    };
    _.before ? B.call(this, x, k, _.before) : x.rules.push(k), b.all[R] = k, (w = _.implements) === null || w === void 0 || w.forEach((I) => this.addKeyword(I));
  }
  function B(R, _, S) {
    const w = R.rules.findIndex((d) => d.keyword === S);
    w >= 0 ? R.rules.splice(w, 0, _) : (R.rules.push(_), this.logger.warn(`rule ${S} is not defined`));
  }
  function z(R) {
    let { metaSchema: _ } = R;
    _ !== void 0 && (R.$data && this.opts.$data && (_ = H(_)), R.validateSchema = this.compile(_, !0));
  }
  const Q = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function H(R) {
    return { anyOf: [R, Q] };
  }
})(cv);
var iu = {}, ou = {}, cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
const XT = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
cu.default = XT;
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.callRef = Bn.getValidate = void 0;
const YT = Nr, Gd = ye, ht = he, Zn = Wt, Kd = vt, Ka = K, ZT = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: a, schemaEnv: s, validateName: i, opts: o, self: c } = r, { root: u } = s;
    if ((n === "#" || n === "#/") && a === u.baseId)
      return p();
    const l = Kd.resolveRef.call(c, u, a, n);
    if (l === void 0)
      throw new YT.default(r.opts.uriResolver, a, n);
    if (l instanceof Kd.SchemaEnv)
      return m(l);
    return h(l);
    function p() {
      if (s === u)
        return $s(e, i, s, s.$async);
      const g = t.scopeValue("root", { ref: u });
      return $s(e, (0, ht._)`${g}.validate`, u, u.$async);
    }
    function m(g) {
      const y = zv(e, g);
      $s(e, y, g, g.$async);
    }
    function h(g) {
      const y = t.scopeValue("schema", o.code.source === !0 ? { ref: g, code: (0, ht.stringify)(g) } : { ref: g }), v = t.name("valid"), f = e.subschema({
        schema: g,
        dataTypes: [],
        schemaPath: ht.nil,
        topSchemaRef: y,
        errSchemaPath: n
      }, v);
      e.mergeEvaluated(f), e.ok(v);
    }
  }
};
function zv(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, ht._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
Bn.getValidate = zv;
function $s(e, t, n, r) {
  const { gen: a, it: s } = e, { allErrors: i, schemaEnv: o, opts: c } = s, u = c.passContext ? Zn.default.this : ht.nil;
  r ? l() : p();
  function l() {
    if (!o.$async)
      throw new Error("async schema referenced by sync schema");
    const g = a.let("valid");
    a.try(() => {
      a.code((0, ht._)`await ${(0, Gd.callValidateCode)(e, t, u)}`), h(t), i || a.assign(g, !0);
    }, (y) => {
      a.if((0, ht._)`!(${y} instanceof ${s.ValidationError})`, () => a.throw(y)), m(y), i || a.assign(g, !1);
    }), e.ok(g);
  }
  function p() {
    e.result((0, Gd.callValidateCode)(e, t, u), () => h(t), () => m(t));
  }
  function m(g) {
    const y = (0, ht._)`${g}.errors`;
    a.assign(Zn.default.vErrors, (0, ht._)`${Zn.default.vErrors} === null ? ${y} : ${Zn.default.vErrors}.concat(${y})`), a.assign(Zn.default.errors, (0, ht._)`${Zn.default.vErrors}.length`);
  }
  function h(g) {
    var y;
    if (!s.opts.unevaluated)
      return;
    const v = (y = n?.validate) === null || y === void 0 ? void 0 : y.evaluated;
    if (s.props !== !0)
      if (v && !v.dynamicProps)
        v.props !== void 0 && (s.props = Ka.mergeEvaluated.props(a, v.props, s.props));
      else {
        const f = a.var("props", (0, ht._)`${g}.evaluated.props`);
        s.props = Ka.mergeEvaluated.props(a, f, s.props, ht.Name);
      }
    if (s.items !== !0)
      if (v && !v.dynamicItems)
        v.items !== void 0 && (s.items = Ka.mergeEvaluated.items(a, v.items, s.items));
      else {
        const f = a.var("items", (0, ht._)`${g}.evaluated.items`);
        s.items = Ka.mergeEvaluated.items(a, f, s.items, ht.Name);
      }
  }
}
Bn.callRef = $s;
Bn.default = ZT;
Object.defineProperty(ou, "__esModule", { value: !0 });
const QT = cu, ej = Bn, tj = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  QT.default,
  ej.default
];
ou.default = tj;
var lu = {}, uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
const Vs = he, pn = Vs.operators, Bs = {
  maximum: { okStr: "<=", ok: pn.LTE, fail: pn.GT },
  minimum: { okStr: ">=", ok: pn.GTE, fail: pn.LT },
  exclusiveMaximum: { okStr: "<", ok: pn.LT, fail: pn.GTE },
  exclusiveMinimum: { okStr: ">", ok: pn.GT, fail: pn.LTE }
}, nj = {
  message: ({ keyword: e, schemaCode: t }) => (0, Vs.str)`must be ${Bs[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Vs._)`{comparison: ${Bs[e].okStr}, limit: ${t}}`
}, rj = {
  keyword: Object.keys(Bs),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: nj,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Vs._)`${n} ${Bs[t].fail} ${r} || isNaN(${n})`);
  }
};
uu.default = rj;
var pu = {};
Object.defineProperty(pu, "__esModule", { value: !0 });
const ia = he, aj = {
  message: ({ schemaCode: e }) => (0, ia.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, ia._)`{multipleOf: ${e}}`
}, sj = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: aj,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: a } = e, s = a.opts.multipleOfPrecision, i = t.let("res"), o = s ? (0, ia._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, ia._)`${i} !== parseInt(${i})`;
    e.fail$data((0, ia._)`(${r} === 0 || (${i} = ${n}/${r}, ${o}))`);
  }
};
pu.default = sj;
var du = {}, fu = {};
Object.defineProperty(fu, "__esModule", { value: !0 });
function qv(e) {
  const t = e.length;
  let n = 0, r = 0, a;
  for (; r < t; )
    n++, a = e.charCodeAt(r++), a >= 55296 && a <= 56319 && r < t && (a = e.charCodeAt(r), (a & 64512) === 56320 && r++);
  return n;
}
fu.default = qv;
qv.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(du, "__esModule", { value: !0 });
const On = he, ij = K, oj = fu, cj = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, On.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, On._)`{limit: ${e}}`
}, lj = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: cj,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: a } = e, s = t === "maxLength" ? On.operators.GT : On.operators.LT, i = a.opts.unicode === !1 ? (0, On._)`${n}.length` : (0, On._)`${(0, ij.useFunc)(e.gen, oj.default)}(${n})`;
    e.fail$data((0, On._)`${i} ${s} ${r}`);
  }
};
du.default = lj;
var mu = {};
Object.defineProperty(mu, "__esModule", { value: !0 });
const uj = ye, pj = K, or = he, dj = {
  message: ({ schemaCode: e }) => (0, or.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, or._)`{pattern: ${e}}`
}, fj = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: dj,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e, o = i.opts.unicodeRegExp ? "u" : "";
    if (r) {
      const { regExp: c } = i.opts.code, u = c.code === "new RegExp" ? (0, or._)`new RegExp` : (0, pj.useFunc)(t, c), l = t.let("valid");
      t.try(() => t.assign(l, (0, or._)`${u}(${s}, ${o}).test(${n})`), () => t.assign(l, !1)), e.fail$data((0, or._)`!${l}`);
    } else {
      const c = (0, uj.usePattern)(e, a);
      e.fail$data((0, or._)`!${c}.test(${n})`);
    }
  }
};
mu.default = fj;
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
const oa = he, mj = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, oa.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, oa._)`{limit: ${e}}`
}, hj = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: mj,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxProperties" ? oa.operators.GT : oa.operators.LT;
    e.fail$data((0, oa._)`Object.keys(${n}).length ${a} ${r}`);
  }
};
hu.default = hj;
var vu = {};
Object.defineProperty(vu, "__esModule", { value: !0 });
const Kr = ye, ca = he, vj = K, yj = {
  message: ({ params: { missingProperty: e } }) => (0, ca.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, ca._)`{missingProperty: ${e}}`
}, gj = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: yj,
  code(e) {
    const { gen: t, schema: n, schemaCode: r, data: a, $data: s, it: i } = e, { opts: o } = i;
    if (!s && n.length === 0)
      return;
    const c = n.length >= o.loopRequired;
    if (i.allErrors ? u() : l(), o.strictRequired) {
      const h = e.parentSchema.properties, { definedProperties: g } = e.it;
      for (const y of n)
        if (h?.[y] === void 0 && !g.has(y)) {
          const v = i.schemaEnv.baseId + i.errSchemaPath, f = `required property "${y}" is not defined at "${v}" (strictRequired)`;
          (0, vj.checkStrictMode)(i, f, i.opts.strictRequired);
        }
    }
    function u() {
      if (c || s)
        e.block$data(ca.nil, p);
      else
        for (const h of n)
          (0, Kr.checkReportMissingProp)(e, h);
    }
    function l() {
      const h = t.let("missing");
      if (c || s) {
        const g = t.let("valid", !0);
        e.block$data(g, () => m(h, g)), e.ok(g);
      } else
        t.if((0, Kr.checkMissingProp)(e, n, h)), (0, Kr.reportMissingProp)(e, h), t.else();
    }
    function p() {
      t.forOf("prop", r, (h) => {
        e.setParams({ missingProperty: h }), t.if((0, Kr.noPropertyInData)(t, a, h, o.ownProperties), () => e.error());
      });
    }
    function m(h, g) {
      e.setParams({ missingProperty: h }), t.forOf(h, r, () => {
        t.assign(g, (0, Kr.propertyInData)(t, a, h, o.ownProperties)), t.if((0, ca.not)(g), () => {
          e.error(), t.break();
        });
      }, ca.nil);
    }
  }
};
vu.default = gj;
var yu = {};
Object.defineProperty(yu, "__esModule", { value: !0 });
const la = he, bj = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, la.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, la._)`{limit: ${e}}`
}, $j = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: bj,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxItems" ? la.operators.GT : la.operators.LT;
    e.fail$data((0, la._)`${n}.length ${a} ${r}`);
  }
};
yu.default = $j;
var gu = {}, ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
const Vv = oi;
Vv.code = 'require("ajv/dist/runtime/equal").default';
ka.default = Vv;
Object.defineProperty(gu, "__esModule", { value: !0 });
const vo = qe, Je = he, _j = K, wj = ka, xj = {
  message: ({ params: { i: e, j: t } }) => (0, Je.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, Je._)`{i: ${e}, j: ${t}}`
}, Ej = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: xj,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, parentSchema: s, schemaCode: i, it: o } = e;
    if (!r && !a)
      return;
    const c = t.let("valid"), u = s.items ? (0, vo.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, Je._)`${i} === false`), e.ok(c);
    function l() {
      const g = t.let("i", (0, Je._)`${n}.length`), y = t.let("j");
      e.setParams({ i: g, j: y }), t.assign(c, !0), t.if((0, Je._)`${g} > 1`, () => (p() ? m : h)(g, y));
    }
    function p() {
      return u.length > 0 && !u.some((g) => g === "object" || g === "array");
    }
    function m(g, y) {
      const v = t.name("item"), f = (0, vo.checkDataTypes)(u, v, o.opts.strictNumbers, vo.DataType.Wrong), $ = t.const("indices", (0, Je._)`{}`);
      t.for((0, Je._)`;${g}--;`, () => {
        t.let(v, (0, Je._)`${n}[${g}]`), t.if(f, (0, Je._)`continue`), u.length > 1 && t.if((0, Je._)`typeof ${v} == "string"`, (0, Je._)`${v} += "_"`), t.if((0, Je._)`typeof ${$}[${v}] == "number"`, () => {
          t.assign(y, (0, Je._)`${$}[${v}]`), e.error(), t.assign(c, !1).break();
        }).code((0, Je._)`${$}[${v}] = ${g}`);
      });
    }
    function h(g, y) {
      const v = (0, _j.useFunc)(t, wj.default), f = t.name("outer");
      t.label(f).for((0, Je._)`;${g}--;`, () => t.for((0, Je._)`${y} = ${g}; ${y}--;`, () => t.if((0, Je._)`${v}(${n}[${g}], ${n}[${y}])`, () => {
        e.error(), t.assign(c, !1).break(f);
      })));
    }
  }
};
gu.default = Ej;
var bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
const cc = he, Sj = K, Pj = ka, Rj = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, cc._)`{allowedValue: ${e}}`
}, Oj = {
  keyword: "const",
  $data: !0,
  error: Rj,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: a, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, cc._)`!${(0, Sj.useFunc)(t, Pj.default)}(${n}, ${a})`) : e.fail((0, cc._)`${s} !== ${n}`);
  }
};
bu.default = Oj;
var $u = {};
Object.defineProperty($u, "__esModule", { value: !0 });
const Qr = he, Aj = K, Tj = ka, jj = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Qr._)`{allowedValues: ${e}}`
}, kj = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: jj,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e;
    if (!r && a.length === 0)
      throw new Error("enum must have non-empty array");
    const o = a.length >= i.opts.loopEnum;
    let c;
    const u = () => c ?? (c = (0, Aj.useFunc)(t, Tj.default));
    let l;
    if (o || r)
      l = t.let("valid"), e.block$data(l, p);
    else {
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const h = t.const("vSchema", s);
      l = (0, Qr.or)(...a.map((g, y) => m(h, y)));
    }
    e.pass(l);
    function p() {
      t.assign(l, !1), t.forOf("v", s, (h) => t.if((0, Qr._)`${u()}(${n}, ${h})`, () => t.assign(l, !0).break()));
    }
    function m(h, g) {
      const y = a[g];
      return typeof y == "object" && y !== null ? (0, Qr._)`${u()}(${n}, ${h}[${g}])` : (0, Qr._)`${n} === ${y}`;
    }
  }
};
$u.default = kj;
Object.defineProperty(lu, "__esModule", { value: !0 });
const Nj = uu, Ij = pu, Cj = du, Dj = mu, Fj = hu, Lj = vu, Mj = yu, Uj = gu, zj = bu, qj = $u, Vj = [
  // number
  Nj.default,
  Ij.default,
  // string
  Cj.default,
  Dj.default,
  // object
  Fj.default,
  Lj.default,
  // array
  Mj.default,
  Uj.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  zj.default,
  qj.default
];
lu.default = Vj;
var _u = {}, Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.validateAdditionalItems = void 0;
const An = he, lc = K, Bj = {
  message: ({ params: { len: e } }) => (0, An.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, An._)`{limit: ${e}}`
}, Hj = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: Bj,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, lc.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    Bv(e, r);
  }
};
function Bv(e, t) {
  const { gen: n, schema: r, data: a, keyword: s, it: i } = e;
  i.items = !0;
  const o = n.const("len", (0, An._)`${a}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, An._)`${o} <= ${t.length}`);
  else if (typeof r == "object" && !(0, lc.alwaysValidSchema)(i, r)) {
    const u = n.var("valid", (0, An._)`${o} <= ${t.length}`);
    n.if((0, An.not)(u), () => c(u)), e.ok(u);
  }
  function c(u) {
    n.forRange("i", t.length, o, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: lc.Type.Num }, u), i.allErrors || n.if((0, An.not)(u), () => n.break());
    });
  }
}
Ir.validateAdditionalItems = Bv;
Ir.default = Hj;
var wu = {}, Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.validateTuple = void 0;
const Wd = he, _s = K, Gj = ye, Kj = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return Hv(e, "additionalItems", t);
    n.items = !0, !(0, _s.alwaysValidSchema)(n, t) && e.ok((0, Gj.validateArray)(e));
  }
};
function Hv(e, t, n = e.schema) {
  const { gen: r, parentSchema: a, data: s, keyword: i, it: o } = e;
  l(a), o.opts.unevaluated && n.length && o.items !== !0 && (o.items = _s.mergeEvaluated.items(r, n.length, o.items));
  const c = r.name("valid"), u = r.const("len", (0, Wd._)`${s}.length`);
  n.forEach((p, m) => {
    (0, _s.alwaysValidSchema)(o, p) || (r.if((0, Wd._)`${u} > ${m}`, () => e.subschema({
      keyword: i,
      schemaProp: m,
      dataProp: m
    }, c)), e.ok(c));
  });
  function l(p) {
    const { opts: m, errSchemaPath: h } = o, g = n.length, y = g === p.minItems && (g === p.maxItems || p[t] === !1);
    if (m.strictTuples && !y) {
      const v = `"${i}" is ${g}-tuple, but minItems or maxItems/${t} are not specified or different at path "${h}"`;
      (0, _s.checkStrictMode)(o, v, m.strictTuples);
    }
  }
}
Cr.validateTuple = Hv;
Cr.default = Kj;
Object.defineProperty(wu, "__esModule", { value: !0 });
const Wj = Cr, Jj = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, Wj.validateTuple)(e, "items")
};
wu.default = Jj;
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
const Jd = he, Xj = K, Yj = ye, Zj = Ir, Qj = {
  message: ({ params: { len: e } }) => (0, Jd.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, Jd._)`{limit: ${e}}`
}, ek = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: Qj,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: a } = n;
    r.items = !0, !(0, Xj.alwaysValidSchema)(r, t) && (a ? (0, Zj.validateAdditionalItems)(e, a) : e.ok((0, Yj.validateArray)(e)));
  }
};
xu.default = ek;
var Eu = {};
Object.defineProperty(Eu, "__esModule", { value: !0 });
const St = he, Wa = K, tk = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, St.str)`must contain at least ${e} valid item(s)` : (0, St.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, St._)`{minContains: ${e}}` : (0, St._)`{minContains: ${e}, maxContains: ${t}}`
}, nk = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: tk,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    let i, o;
    const { minContains: c, maxContains: u } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, o = u) : i = 1;
    const l = t.const("len", (0, St._)`${a}.length`);
    if (e.setParams({ min: i, max: o }), o === void 0 && i === 0) {
      (0, Wa.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (o !== void 0 && i > o) {
      (0, Wa.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Wa.alwaysValidSchema)(s, n)) {
      let y = (0, St._)`${l} >= ${i}`;
      o !== void 0 && (y = (0, St._)`${y} && ${l} <= ${o}`), e.pass(y);
      return;
    }
    s.items = !0;
    const p = t.name("valid");
    o === void 0 && i === 1 ? h(p, () => t.if(p, () => t.break())) : i === 0 ? (t.let(p, !0), o !== void 0 && t.if((0, St._)`${a}.length > 0`, m)) : (t.let(p, !1), m()), e.result(p, () => e.reset());
    function m() {
      const y = t.name("_valid"), v = t.let("count", 0);
      h(y, () => t.if(y, () => g(v)));
    }
    function h(y, v) {
      t.forRange("i", 0, l, (f) => {
        e.subschema({
          keyword: "contains",
          dataProp: f,
          dataPropType: Wa.Type.Num,
          compositeRule: !0
        }, y), v();
      });
    }
    function g(y) {
      t.code((0, St._)`${y}++`), o === void 0 ? t.if((0, St._)`${y} >= ${i}`, () => t.assign(p, !0).break()) : (t.if((0, St._)`${y} > ${o}`, () => t.assign(p, !1).break()), i === 1 ? t.assign(p, !0) : t.if((0, St._)`${y} >= ${i}`, () => t.assign(p, !0)));
    }
  }
};
Eu.default = nk;
var Gv = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = he, n = K, r = ye;
  e.error = {
    message: ({ params: { property: c, depsCount: u, deps: l } }) => {
      const p = u === 1 ? "property" : "properties";
      return (0, t.str)`must have ${p} ${l} when property ${c} is present`;
    },
    params: ({ params: { property: c, depsCount: u, deps: l, missingProperty: p } }) => (0, t._)`{property: ${c},
    missingProperty: ${p},
    depsCount: ${u},
    deps: ${l}}`
    // TODO change to reference
  };
  const a = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(c) {
      const [u, l] = s(c);
      i(c, u), o(c, l);
    }
  };
  function s({ schema: c }) {
    const u = {}, l = {};
    for (const p in c) {
      if (p === "__proto__")
        continue;
      const m = Array.isArray(c[p]) ? u : l;
      m[p] = c[p];
    }
    return [u, l];
  }
  function i(c, u = c.schema) {
    const { gen: l, data: p, it: m } = c;
    if (Object.keys(u).length === 0)
      return;
    const h = l.let("missing");
    for (const g in u) {
      const y = u[g];
      if (y.length === 0)
        continue;
      const v = (0, r.propertyInData)(l, p, g, m.opts.ownProperties);
      c.setParams({
        property: g,
        depsCount: y.length,
        deps: y.join(", ")
      }), m.allErrors ? l.if(v, () => {
        for (const f of y)
          (0, r.checkReportMissingProp)(c, f);
      }) : (l.if((0, t._)`${v} && (${(0, r.checkMissingProp)(c, y, h)})`), (0, r.reportMissingProp)(c, h), l.else());
    }
  }
  e.validatePropertyDeps = i;
  function o(c, u = c.schema) {
    const { gen: l, data: p, keyword: m, it: h } = c, g = l.name("valid");
    for (const y in u)
      (0, n.alwaysValidSchema)(h, u[y]) || (l.if(
        (0, r.propertyInData)(l, p, y, h.opts.ownProperties),
        () => {
          const v = c.subschema({ keyword: m, schemaProp: y }, g);
          c.mergeValidEvaluated(v, g);
        },
        () => l.var(g, !0)
        // TODO var
      ), c.ok(g));
  }
  e.validateSchemaDeps = o, e.default = a;
})(Gv);
var Su = {};
Object.defineProperty(Su, "__esModule", { value: !0 });
const Kv = he, rk = K, ak = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Kv._)`{propertyName: ${e.propertyName}}`
}, sk = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: ak,
  code(e) {
    const { gen: t, schema: n, data: r, it: a } = e;
    if ((0, rk.alwaysValidSchema)(a, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, Kv.not)(s), () => {
        e.error(!0), a.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
Su.default = sk;
var yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
const Ja = ye, Tt = he, ik = Wt, Xa = K, ok = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Tt._)`{additionalProperty: ${e.additionalProperty}}`
}, ck = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: ok,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: o, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, Xa.alwaysValidSchema)(i, n))
      return;
    const u = (0, Ja.allSchemaProperties)(r.properties), l = (0, Ja.allSchemaProperties)(r.patternProperties);
    p(), e.ok((0, Tt._)`${s} === ${ik.default.errors}`);
    function p() {
      t.forIn("key", a, (v) => {
        !u.length && !l.length ? g(v) : t.if(m(v), () => g(v));
      });
    }
    function m(v) {
      let f;
      if (u.length > 8) {
        const $ = (0, Xa.schemaRefOrVal)(i, r.properties, "properties");
        f = (0, Ja.isOwnProperty)(t, $, v);
      } else u.length ? f = (0, Tt.or)(...u.map(($) => (0, Tt._)`${v} === ${$}`)) : f = Tt.nil;
      return l.length && (f = (0, Tt.or)(f, ...l.map(($) => (0, Tt._)`${(0, Ja.usePattern)(e, $)}.test(${v})`))), (0, Tt.not)(f);
    }
    function h(v) {
      t.code((0, Tt._)`delete ${a}[${v}]`);
    }
    function g(v) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        h(v);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: v }), e.error(), o || t.break();
        return;
      }
      if (typeof n == "object" && !(0, Xa.alwaysValidSchema)(i, n)) {
        const f = t.name("valid");
        c.removeAdditional === "failing" ? (y(v, f, !1), t.if((0, Tt.not)(f), () => {
          e.reset(), h(v);
        })) : (y(v, f), o || t.if((0, Tt.not)(f), () => t.break()));
      }
    }
    function y(v, f, $) {
      const E = {
        keyword: "additionalProperties",
        dataProp: v,
        dataPropType: Xa.Type.Str
      };
      $ === !1 && Object.assign(E, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(E, f);
    }
  }
};
yi.default = ck;
var Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
const lk = Dt, Xd = ye, yo = K, Yd = yi, uk = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && Yd.default.code(new lk.KeywordCxt(s, Yd.default, "additionalProperties"));
    const i = (0, Xd.allSchemaProperties)(n);
    for (const p of i)
      s.definedProperties.add(p);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = yo.mergeEvaluated.props(t, (0, yo.toHash)(i), s.props));
    const o = i.filter((p) => !(0, yo.alwaysValidSchema)(s, n[p]));
    if (o.length === 0)
      return;
    const c = t.name("valid");
    for (const p of o)
      u(p) ? l(p) : (t.if((0, Xd.propertyInData)(t, a, p, s.opts.ownProperties)), l(p), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(p), e.ok(c);
    function u(p) {
      return s.opts.useDefaults && !s.compositeRule && n[p].default !== void 0;
    }
    function l(p) {
      e.subschema({
        keyword: "properties",
        schemaProp: p,
        dataProp: p
      }, c);
    }
  }
};
Pu.default = uk;
var Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
const Zd = ye, Ya = he, Qd = K, ef = K, pk = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: a, it: s } = e, { opts: i } = s, o = (0, Zd.allSchemaProperties)(n), c = o.filter((y) => (0, Qd.alwaysValidSchema)(s, n[y]));
    if (o.length === 0 || c.length === o.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const u = i.strictSchema && !i.allowMatchingProperties && a.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof Ya.Name) && (s.props = (0, ef.evaluatedPropsToName)(t, s.props));
    const { props: p } = s;
    m();
    function m() {
      for (const y of o)
        u && h(y), s.allErrors ? g(y) : (t.var(l, !0), g(y), t.if(l));
    }
    function h(y) {
      for (const v in u)
        new RegExp(y).test(v) && (0, Qd.checkStrictMode)(s, `property ${v} matches pattern ${y} (use allowMatchingProperties)`);
    }
    function g(y) {
      t.forIn("key", r, (v) => {
        t.if((0, Ya._)`${(0, Zd.usePattern)(e, y)}.test(${v})`, () => {
          const f = c.includes(y);
          f || e.subschema({
            keyword: "patternProperties",
            schemaProp: y,
            dataProp: v,
            dataPropType: ef.Type.Str
          }, l), s.opts.unevaluated && p !== !0 ? t.assign((0, Ya._)`${p}[${v}]`, !0) : !f && !s.allErrors && t.if((0, Ya.not)(l), () => t.break());
        });
      });
    }
  }
};
Ru.default = pk;
var Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
const dk = K, fk = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, dk.alwaysValidSchema)(r, n)) {
      e.fail();
      return;
    }
    const a = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, a), e.failResult(a, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
Ou.default = fk;
var Au = {};
Object.defineProperty(Au, "__esModule", { value: !0 });
const mk = ye, hk = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: mk.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
Au.default = hk;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
const ws = he, vk = K, yk = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, ws._)`{passingSchemas: ${e.passing}}`
}, gk = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: yk,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, it: a } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    if (a.opts.discriminator && r.discriminator)
      return;
    const s = n, i = t.let("valid", !1), o = t.let("passing", null), c = t.name("_valid");
    e.setParams({ passing: o }), t.block(u), e.result(i, () => e.reset(), () => e.error(!0));
    function u() {
      s.forEach((l, p) => {
        let m;
        (0, vk.alwaysValidSchema)(a, l) ? t.var(c, !0) : m = e.subschema({
          keyword: "oneOf",
          schemaProp: p,
          compositeRule: !0
        }, c), p > 0 && t.if((0, ws._)`${c} && ${i}`).assign(i, !1).assign(o, (0, ws._)`[${o}, ${p}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(o, p), m && e.mergeEvaluated(m, ws.Name);
        });
      });
    }
  }
};
Tu.default = gk;
var ju = {};
Object.defineProperty(ju, "__esModule", { value: !0 });
const bk = K, $k = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const a = t.name("valid");
    n.forEach((s, i) => {
      if ((0, bk.alwaysValidSchema)(r, s))
        return;
      const o = e.subschema({ keyword: "allOf", schemaProp: i }, a);
      e.ok(a), e.mergeEvaluated(o);
    });
  }
};
ju.default = $k;
var ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
const Hs = he, Wv = K, _k = {
  message: ({ params: e }) => (0, Hs.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, Hs._)`{failingKeyword: ${e.ifClause}}`
}, wk = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: _k,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Wv.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const a = tf(r, "then"), s = tf(r, "else");
    if (!a && !s)
      return;
    const i = t.let("valid", !0), o = t.name("_valid");
    if (c(), e.reset(), a && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(o, u("then", l), u("else", l));
    } else a ? t.if(o, u("then")) : t.if((0, Hs.not)(o), u("else"));
    e.pass(i, () => e.error(!0));
    function c() {
      const l = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, o);
      e.mergeEvaluated(l);
    }
    function u(l, p) {
      return () => {
        const m = e.subschema({ keyword: l }, o);
        t.assign(i, o), e.mergeValidEvaluated(m, i), p ? t.assign(p, (0, Hs._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function tf(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Wv.alwaysValidSchema)(e, n);
}
ku.default = wk;
var Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
const xk = K, Ek = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, xk.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
Nu.default = Ek;
Object.defineProperty(_u, "__esModule", { value: !0 });
const Sk = Ir, Pk = wu, Rk = Cr, Ok = xu, Ak = Eu, Tk = Gv, jk = Su, kk = yi, Nk = Pu, Ik = Ru, Ck = Ou, Dk = Au, Fk = Tu, Lk = ju, Mk = ku, Uk = Nu;
function zk(e = !1) {
  const t = [
    // any
    Ck.default,
    Dk.default,
    Fk.default,
    Lk.default,
    Mk.default,
    Uk.default,
    // object
    jk.default,
    kk.default,
    Tk.default,
    Nk.default,
    Ik.default
  ];
  return e ? t.push(Pk.default, Ok.default) : t.push(Sk.default, Rk.default), t.push(Ak.default), t;
}
_u.default = zk;
var Iu = {}, Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
const Me = he, qk = {
  message: ({ schemaCode: e }) => (0, Me.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, Me._)`{format: ${e}}`
}, Vk = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: qk,
  code(e, t) {
    const { gen: n, data: r, $data: a, schema: s, schemaCode: i, it: o } = e, { opts: c, errSchemaPath: u, schemaEnv: l, self: p } = o;
    if (!c.validateFormats)
      return;
    a ? m() : h();
    function m() {
      const g = n.scopeValue("formats", {
        ref: p.formats,
        code: c.code.formats
      }), y = n.const("fDef", (0, Me._)`${g}[${i}]`), v = n.let("fType"), f = n.let("format");
      n.if((0, Me._)`typeof ${y} == "object" && !(${y} instanceof RegExp)`, () => n.assign(v, (0, Me._)`${y}.type || "string"`).assign(f, (0, Me._)`${y}.validate`), () => n.assign(v, (0, Me._)`"string"`).assign(f, y)), e.fail$data((0, Me.or)($(), E()));
      function $() {
        return c.strictSchema === !1 ? Me.nil : (0, Me._)`${i} && !${f}`;
      }
      function E() {
        const O = l.$async ? (0, Me._)`(${y}.async ? await ${f}(${r}) : ${f}(${r}))` : (0, Me._)`${f}(${r})`, A = (0, Me._)`(typeof ${f} == "function" ? ${O} : ${f}.test(${r}))`;
        return (0, Me._)`${f} && ${f} !== true && ${v} === ${t} && !${A}`;
      }
    }
    function h() {
      const g = p.formats[s];
      if (!g) {
        $();
        return;
      }
      if (g === !0)
        return;
      const [y, v, f] = E(g);
      y === t && e.pass(O());
      function $() {
        if (c.strictSchema === !1) {
          p.logger.warn(A());
          return;
        }
        throw new Error(A());
        function A() {
          return `unknown format "${s}" ignored in schema at path "${u}"`;
        }
      }
      function E(A) {
        const M = A instanceof RegExp ? (0, Me.regexpCode)(A) : c.code.formats ? (0, Me._)`${c.code.formats}${(0, Me.getProperty)(s)}` : void 0, X = n.scopeValue("formats", { key: s, ref: A, code: M });
        return typeof A == "object" && !(A instanceof RegExp) ? [A.type || "string", A.validate, (0, Me._)`${X}.validate`] : ["string", A, X];
      }
      function O() {
        if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, Me._)`await ${f}(${r})`;
        }
        return typeof v == "function" ? (0, Me._)`${f}(${r})` : (0, Me._)`${f}.test(${r})`;
      }
    }
  }
};
Cu.default = Vk;
Object.defineProperty(Iu, "__esModule", { value: !0 });
const Bk = Cu, Hk = [Bk.default];
Iu.default = Hk;
var wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.contentVocabulary = wr.metadataVocabulary = void 0;
wr.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
wr.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(iu, "__esModule", { value: !0 });
const Gk = ou, Kk = lu, Wk = _u, Jk = Iu, nf = wr, Xk = [
  Gk.default,
  Kk.default,
  (0, Wk.default)(),
  Jk.default,
  nf.metadataVocabulary,
  nf.contentVocabulary
];
iu.default = Xk;
var Du = {}, gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.DiscrError = void 0;
var rf;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(rf || (gi.DiscrError = rf = {}));
Object.defineProperty(Du, "__esModule", { value: !0 });
const nr = he, uc = gi, af = vt, Yk = Nr, Zk = K, Qk = {
  message: ({ params: { discrError: e, tagName: t } }) => e === uc.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, nr._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, eN = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Qk,
  code(e) {
    const { gen: t, data: n, schema: r, parentSchema: a, it: s } = e, { oneOf: i } = a;
    if (!s.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const o = r.propertyName;
    if (typeof o != "string")
      throw new Error("discriminator: requires propertyName");
    if (r.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!i)
      throw new Error("discriminator: requires oneOf keyword");
    const c = t.let("valid", !1), u = t.const("tag", (0, nr._)`${n}${(0, nr.getProperty)(o)}`);
    t.if((0, nr._)`typeof ${u} == "string"`, () => l(), () => e.error(!1, { discrError: uc.DiscrError.Tag, tag: u, tagName: o })), e.ok(c);
    function l() {
      const h = m();
      t.if(!1);
      for (const g in h)
        t.elseIf((0, nr._)`${u} === ${g}`), t.assign(c, p(h[g]));
      t.else(), e.error(!1, { discrError: uc.DiscrError.Mapping, tag: u, tagName: o }), t.endIf();
    }
    function p(h) {
      const g = t.name("valid"), y = e.subschema({ keyword: "oneOf", schemaProp: h }, g);
      return e.mergeEvaluated(y, nr.Name), g;
    }
    function m() {
      var h;
      const g = {}, y = f(a);
      let v = !0;
      for (let O = 0; O < i.length; O++) {
        let A = i[O];
        if (A?.$ref && !(0, Zk.schemaHasRulesButRef)(A, s.self.RULES)) {
          const X = A.$ref;
          if (A = af.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, X), A instanceof af.SchemaEnv && (A = A.schema), A === void 0)
            throw new Yk.default(s.opts.uriResolver, s.baseId, X);
        }
        const M = (h = A?.properties) === null || h === void 0 ? void 0 : h[o];
        if (typeof M != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${o}"`);
        v = v && (y || f(A)), $(M, O);
      }
      if (!v)
        throw new Error(`discriminator: "${o}" must be required`);
      return g;
      function f({ required: O }) {
        return Array.isArray(O) && O.includes(o);
      }
      function $(O, A) {
        if (O.const)
          E(O.const, A);
        else if (O.enum)
          for (const M of O.enum)
            E(M, A);
        else
          throw new Error(`discriminator: "properties/${o}" must have "const" or "enum"`);
      }
      function E(O, A) {
        if (typeof O != "string" || O in g)
          throw new Error(`discriminator: "${o}" values must be unique strings`);
        g[O] = A;
      }
    }
  }
};
Du.default = eN;
const tN = "http://json-schema.org/draft-07/schema#", nN = "http://json-schema.org/draft-07/schema#", rN = "Core schema meta-schema", aN = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, sN = [
  "object",
  "boolean"
], iN = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, oN = {
  $schema: tN,
  $id: nN,
  title: rN,
  definitions: aN,
  type: sN,
  properties: iN,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
  const n = cv, r = iu, a = Du, s = oN, i = ["/properties"], o = "http://json-schema.org/draft-07/schema";
  class c extends n.default {
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((g) => this.addVocabulary(g)), this.opts.discriminator && this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const g = this.opts.$data ? this.$dataMetaSchema(s, i) : s;
      this.addMetaSchema(g, o, !1), this.refs["http://json-schema.org/schema"] = o;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
    }
  }
  t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
  var u = Dt;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return u.KeywordCxt;
  } });
  var l = he;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return l._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return l.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return l.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return l.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return l.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return l.CodeGen;
  } });
  var p = ja;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return p.default;
  } });
  var m = Nr;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return m.default;
  } });
})(rc, rc.exports);
var cN = rc.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const t = cN, n = he, r = n.operators, a = {
    formatMaximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
    formatMinimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
    formatExclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
  }, s = {
    message: ({ keyword: o, schemaCode: c }) => (0, n.str)`should be ${a[o].okStr} ${c}`,
    params: ({ keyword: o, schemaCode: c }) => (0, n._)`{comparison: ${a[o].okStr}, limit: ${c}}`
  };
  e.formatLimitDefinition = {
    keyword: Object.keys(a),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: s,
    code(o) {
      const { gen: c, data: u, schemaCode: l, keyword: p, it: m } = o, { opts: h, self: g } = m;
      if (!h.validateFormats)
        return;
      const y = new t.KeywordCxt(m, g.RULES.all.format.definition, "format");
      y.$data ? v() : f();
      function v() {
        const E = c.scopeValue("formats", {
          ref: g.formats,
          code: h.code.formats
        }), O = c.const("fmt", (0, n._)`${E}[${y.schemaCode}]`);
        o.fail$data((0, n.or)((0, n._)`typeof ${O} != "object"`, (0, n._)`${O} instanceof RegExp`, (0, n._)`typeof ${O}.compare != "function"`, $(O)));
      }
      function f() {
        const E = y.schema, O = g.formats[E];
        if (!O || O === !0)
          return;
        if (typeof O != "object" || O instanceof RegExp || typeof O.compare != "function")
          throw new Error(`"${p}": format "${E}" does not define "compare" function`);
        const A = c.scopeValue("formats", {
          key: E,
          ref: O,
          code: h.code.formats ? (0, n._)`${h.code.formats}${(0, n.getProperty)(E)}` : void 0
        });
        o.fail$data($(A));
      }
      function $(E) {
        return (0, n._)`${E}.compare(${u}, ${l}) ${a[p].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const i = (o) => (o.addKeyword(e.formatLimitDefinition), o);
  e.default = i;
})(ov);
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = iv, r = ov, a = he, s = new a.Name("fullFormats"), i = new a.Name("fastFormats"), o = (u, l = { keywords: !0 }) => {
    if (Array.isArray(l))
      return c(u, l, n.fullFormats, s), u;
    const [p, m] = l.mode === "fast" ? [n.fastFormats, i] : [n.fullFormats, s], h = l.formats || n.formatNames;
    return c(u, h, p, m), l.keywords && (0, r.default)(u), u;
  };
  o.get = (u, l = "full") => {
    const m = (l === "fast" ? n.fastFormats : n.fullFormats)[u];
    if (!m)
      throw new Error(`Unknown format "${u}"`);
    return m;
  };
  function c(u, l, p, m) {
    var h, g;
    (h = (g = u.opts.code).formats) !== null && h !== void 0 || (g.formats = (0, a._)`require("ajv-formats/dist/formats").${m}`);
    for (const y of l)
      u.addFormat(y, p[y]);
  }
  e.exports = t = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
})(nc, nc.exports);
var lN = nc.exports;
const uN = /* @__PURE__ */ Pr(lN), pN = (e, t, n, r) => {
  if (n === "length" || n === "prototype" || n === "arguments" || n === "caller")
    return;
  const a = Object.getOwnPropertyDescriptor(e, n), s = Object.getOwnPropertyDescriptor(t, n);
  !dN(a, s) && r || Object.defineProperty(e, n, s);
}, dN = function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, fN = (e, t) => {
  const n = Object.getPrototypeOf(t);
  n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
}, mN = (e, t) => `/* Wrapped ${e}*/
${t}`, hN = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), vN = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), yN = (e, t, n) => {
  const r = n === "" ? "" : `with ${n.trim()}() `, a = mN.bind(null, r, t.toString());
  Object.defineProperty(a, "name", vN);
  const { writable: s, enumerable: i, configurable: o } = hN;
  Object.defineProperty(e, "toString", { value: a, writable: s, enumerable: i, configurable: o });
};
function gN(e, t, { ignoreNonConfigurable: n = !1 } = {}) {
  const { name: r } = e;
  for (const a of Reflect.ownKeys(t))
    pN(e, t, a, n);
  return fN(e, t), yN(e, t, r), e;
}
const sf = (e, t = {}) => {
  if (typeof e != "function")
    throw new TypeError(`Expected the first argument to be a function, got \`${typeof e}\``);
  const {
    wait: n = 0,
    maxWait: r = Number.POSITIVE_INFINITY,
    before: a = !1,
    after: s = !0
  } = t;
  if (n < 0 || r < 0)
    throw new RangeError("`wait` and `maxWait` must not be negative.");
  if (!a && !s)
    throw new Error("Both `before` and `after` are false, function wouldn't be called.");
  let i, o, c;
  const u = function(...l) {
    const p = this, m = () => {
      i = void 0, o && (clearTimeout(o), o = void 0), s && (c = e.apply(p, l));
    }, h = () => {
      o = void 0, i && (clearTimeout(i), i = void 0), s && (c = e.apply(p, l));
    }, g = a && !i;
    return clearTimeout(i), i = setTimeout(m, n), r > 0 && r !== Number.POSITIVE_INFINITY && !o && (o = setTimeout(h, r)), g && (c = e.apply(p, l)), c;
  };
  return gN(u, e), u.cancel = () => {
    i && (clearTimeout(i), i = void 0), o && (clearTimeout(o), o = void 0);
  }, u;
};
var pc = { exports: {} };
const bN = "2.0.0", Jv = 256, $N = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, _N = 16, wN = Jv - 6, xN = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Na = {
  MAX_LENGTH: Jv,
  MAX_SAFE_COMPONENT_LENGTH: _N,
  MAX_SAFE_BUILD_LENGTH: wN,
  MAX_SAFE_INTEGER: $N,
  RELEASE_TYPES: xN,
  SEMVER_SPEC_VERSION: bN,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const EN = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var bi = EN;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: a
  } = Na, s = bi;
  t = e.exports = {};
  const i = t.re = [], o = t.safeRe = [], c = t.src = [], u = t.safeSrc = [], l = t.t = {};
  let p = 0;
  const m = "[a-zA-Z0-9-]", h = [
    ["\\s", 1],
    ["\\d", a],
    [m, r]
  ], g = (v) => {
    for (const [f, $] of h)
      v = v.split(`${f}*`).join(`${f}{0,${$}}`).split(`${f}+`).join(`${f}{1,${$}}`);
    return v;
  }, y = (v, f, $) => {
    const E = g(f), O = p++;
    s(v, O, f), l[v] = O, c[O] = f, u[O] = E, i[O] = new RegExp(f, $ ? "g" : void 0), o[O] = new RegExp(E, $ ? "g" : void 0);
  };
  y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "\\d+"), y("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), y("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`), y("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASEIDENTIFIER", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIER]})`), y("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIERLOOSE]})`), y("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`), y("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`), y("BUILDIDENTIFIER", `${m}+`), y("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`), y("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`), y("FULL", `^${c[l.FULLPLAIN]}$`), y("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`), y("LOOSE", `^${c[l.LOOSEPLAIN]}$`), y("GTLT", "((?:<|>)?=?)"), y("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), y("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`), y("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`), y("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`), y("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`), y("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`), y("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), y("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`), y("COERCEFULL", c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?(?:${c[l.BUILD]})?(?:$|[^\\d])`), y("COERCERTL", c[l.COERCE], !0), y("COERCERTLFULL", c[l.COERCEFULL], !0), y("LONETILDE", "(?:~>?)"), y("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", y("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`), y("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`), y("LONECARET", "(?:\\^)"), y("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", y("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`), y("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`), y("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`), y("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`), y("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", y("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`), y("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`), y("STAR", "(<|>)?=?\\s*\\*"), y("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), y("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(pc, pc.exports);
var Ia = pc.exports;
const SN = Object.freeze({ loose: !0 }), PN = Object.freeze({}), RN = (e) => e ? typeof e != "object" ? SN : e : PN;
var Fu = RN;
const of = /^[0-9]+$/, Xv = (e, t) => {
  if (typeof e == "number" && typeof t == "number")
    return e === t ? 0 : e < t ? -1 : 1;
  const n = of.test(e), r = of.test(t);
  return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}, ON = (e, t) => Xv(t, e);
var Yv = {
  compareIdentifiers: Xv,
  rcompareIdentifiers: ON
};
const Za = bi, { MAX_LENGTH: cf, MAX_SAFE_INTEGER: Qa } = Na, { safeRe: es, t: ts } = Ia, AN = Fu, { compareIdentifiers: go } = Yv;
let TN = class Vt {
  constructor(t, n) {
    if (n = AN(n), t instanceof Vt) {
      if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > cf)
      throw new TypeError(
        `version is longer than ${cf} characters`
      );
    Za("SemVer", t, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const r = t.trim().match(n.loose ? es[ts.LOOSE] : es[ts.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Qa || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Qa || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Qa || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((a) => {
      if (/^[0-9]+$/.test(a)) {
        const s = +a;
        if (s >= 0 && s < Qa)
          return s;
      }
      return a;
    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Za("SemVer.compare", this.version, this.options, t), !(t instanceof Vt)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new Vt(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof Vt || (t = new Vt(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : this.patch > t.patch ? 1 : 0;
  }
  comparePre(t) {
    if (t instanceof Vt || (t = new Vt(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let n = 0;
    do {
      const r = this.prerelease[n], a = t.prerelease[n];
      if (Za("prerelease compare", n, r, a), r === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === a)
        continue;
      return go(r, a);
    } while (++n);
  }
  compareBuild(t) {
    t instanceof Vt || (t = new Vt(t, this.options));
    let n = 0;
    do {
      const r = this.build[n], a = t.build[n];
      if (Za("build compare", n, r, a), r === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === a)
        continue;
      return go(r, a);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, n, r) {
    if (t.startsWith("pre")) {
      if (!n && r === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const a = `-${n}`.match(this.options.loose ? es[ts.PRERELEASELOOSE] : es[ts.PRERELEASE]);
        if (!a || a[1] !== n)
          throw new Error(`invalid identifier: ${n}`);
      }
    }
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", n, r);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", n, r);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", n, r), this.inc("pre", n, r);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const a = Number(r) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [a];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" && (this.prerelease[s]++, s = -2);
          if (s === -1) {
            if (n === this.prerelease.join(".") && r === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(a);
          }
        }
        if (n) {
          let s = [n, a];
          r === !1 && (s = [n]), go(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var lt = TN;
const lf = lt, jN = (e, t, n = !1) => {
  if (e instanceof lf)
    return e;
  try {
    return new lf(e, t);
  } catch (r) {
    if (!n)
      return null;
    throw r;
  }
};
var Gn = jN;
const kN = Gn, NN = (e, t) => {
  const n = kN(e, t);
  return n ? n.version : null;
};
var IN = NN;
const CN = Gn, DN = (e, t) => {
  const n = CN(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null;
};
var FN = DN;
const uf = lt, LN = (e, t, n, r, a) => {
  typeof n == "string" && (a = r, r = n, n = void 0);
  try {
    return new uf(
      e instanceof uf ? e.version : e,
      n
    ).inc(t, r, a).version;
  } catch {
    return null;
  }
};
var MN = LN;
const pf = Gn, UN = (e, t) => {
  const n = pf(e, null, !0), r = pf(t, null, !0), a = n.compare(r);
  if (a === 0)
    return null;
  const s = a > 0, i = s ? n : r, o = s ? r : n, c = !!i.prerelease.length;
  if (!!o.prerelease.length && !c) {
    if (!o.patch && !o.minor)
      return "major";
    if (o.compareMain(i) === 0)
      return o.minor && !o.patch ? "minor" : "patch";
  }
  const l = c ? "pre" : "";
  return n.major !== r.major ? l + "major" : n.minor !== r.minor ? l + "minor" : n.patch !== r.patch ? l + "patch" : "prerelease";
};
var zN = UN;
const qN = lt, VN = (e, t) => new qN(e, t).major;
var BN = VN;
const HN = lt, GN = (e, t) => new HN(e, t).minor;
var KN = GN;
const WN = lt, JN = (e, t) => new WN(e, t).patch;
var XN = JN;
const YN = Gn, ZN = (e, t) => {
  const n = YN(e, t);
  return n && n.prerelease.length ? n.prerelease : null;
};
var QN = ZN;
const df = lt, eI = (e, t, n) => new df(e, n).compare(new df(t, n));
var zt = eI;
const tI = zt, nI = (e, t, n) => tI(t, e, n);
var rI = nI;
const aI = zt, sI = (e, t) => aI(e, t, !0);
var iI = sI;
const ff = lt, oI = (e, t, n) => {
  const r = new ff(e, n), a = new ff(t, n);
  return r.compare(a) || r.compareBuild(a);
};
var Lu = oI;
const cI = Lu, lI = (e, t) => e.sort((n, r) => cI(n, r, t));
var uI = lI;
const pI = Lu, dI = (e, t) => e.sort((n, r) => pI(r, n, t));
var fI = dI;
const mI = zt, hI = (e, t, n) => mI(e, t, n) > 0;
var $i = hI;
const vI = zt, yI = (e, t, n) => vI(e, t, n) < 0;
var Mu = yI;
const gI = zt, bI = (e, t, n) => gI(e, t, n) === 0;
var Zv = bI;
const $I = zt, _I = (e, t, n) => $I(e, t, n) !== 0;
var Qv = _I;
const wI = zt, xI = (e, t, n) => wI(e, t, n) >= 0;
var Uu = xI;
const EI = zt, SI = (e, t, n) => EI(e, t, n) <= 0;
var zu = SI;
const PI = Zv, RI = Qv, OI = $i, AI = Uu, TI = Mu, jI = zu, kI = (e, t, n, r) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e === n;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return PI(e, n, r);
    case "!=":
      return RI(e, n, r);
    case ">":
      return OI(e, n, r);
    case ">=":
      return AI(e, n, r);
    case "<":
      return TI(e, n, r);
    case "<=":
      return jI(e, n, r);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var ey = kI;
const NI = lt, II = Gn, { safeRe: ns, t: rs } = Ia, CI = (e, t) => {
  if (e instanceof NI)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let n = null;
  if (!t.rtl)
    n = e.match(t.includePrerelease ? ns[rs.COERCEFULL] : ns[rs.COERCE]);
  else {
    const c = t.includePrerelease ? ns[rs.COERCERTLFULL] : ns[rs.COERCERTL];
    let u;
    for (; (u = c.exec(e)) && (!n || n.index + n[0].length !== e.length); )
      (!n || u.index + u[0].length !== n.index + n[0].length) && (n = u), c.lastIndex = u.index + u[1].length + u[2].length;
    c.lastIndex = -1;
  }
  if (n === null)
    return null;
  const r = n[2], a = n[3] || "0", s = n[4] || "0", i = t.includePrerelease && n[5] ? `-${n[5]}` : "", o = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return II(`${r}.${a}.${s}${i}${o}`, t);
};
var DI = CI;
const FI = Gn, LI = Na, MI = lt, UI = (e, t, n) => {
  if (!LI.RELEASE_TYPES.includes(t))
    return null;
  const r = zI(e, n);
  return r && qI(r, t);
}, zI = (e, t) => {
  const n = e instanceof MI ? e.version : e;
  return FI(n, t);
}, qI = (e, t) => {
  if (VI(t))
    return e.version;
  switch (e.prerelease = [], t) {
    case "major":
      e.minor = 0, e.patch = 0;
      break;
    case "minor":
      e.patch = 0;
      break;
  }
  return e.format();
}, VI = (e) => e.startsWith("pre");
var BI = UI;
class HI {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const n = this.map.get(t);
    if (n !== void 0)
      return this.map.delete(t), this.map.set(t, n), n;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, n) {
    if (!this.delete(t) && n !== void 0) {
      if (this.map.size >= this.max) {
        const a = this.map.keys().next().value;
        this.delete(a);
      }
      this.map.set(t, n);
    }
    return this;
  }
}
var GI = HI, bo, mf;
function qt() {
  if (mf) return bo;
  mf = 1;
  const e = /\s+/g;
  class t {
    constructor(D, B) {
      if (B = a(B), D instanceof t)
        return D.loose === !!B.loose && D.includePrerelease === !!B.includePrerelease ? D : new t(D.raw, B);
      if (D instanceof s)
        return this.raw = D.value, this.set = [[D]], this.formatted = void 0, this;
      if (this.options = B, this.loose = !!B.loose, this.includePrerelease = !!B.includePrerelease, this.raw = D.trim().replace(e, " "), this.set = this.raw.split("||").map((z) => this.parseRange(z.trim())).filter((z) => z.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const z = this.set[0];
        if (this.set = this.set.filter((Q) => !y(Q[0])), this.set.length === 0)
          this.set = [z];
        else if (this.set.length > 1) {
          for (const Q of this.set)
            if (Q.length === 1 && v(Q[0])) {
              this.set = [Q];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let D = 0; D < this.set.length; D++) {
          D > 0 && (this.formatted += "||");
          const B = this.set[D];
          for (let z = 0; z < B.length; z++)
            z > 0 && (this.formatted += " "), this.formatted += B[z].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(D) {
      const z = ((this.options.includePrerelease && h) | (this.options.loose && g)) + ":" + D, Q = r.get(z);
      if (Q)
        return Q;
      const H = this.options.loose, R = H ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
      D = D.replace(R, L(this.options.includePrerelease)), i("hyphen replace", D), D = D.replace(c[u.COMPARATORTRIM], l), i("comparator trim", D), D = D.replace(c[u.TILDETRIM], p), i("tilde trim", D), D = D.replace(c[u.CARETTRIM], m), i("caret trim", D);
      let _ = D.split(" ").map((b) => $(b, this.options)).join(" ").split(/\s+/).map((b) => F(b, this.options));
      H && (_ = _.filter((b) => (i("loose invalid filter", b, this.options), !!b.match(c[u.COMPARATORLOOSE])))), i("range list", _);
      const S = /* @__PURE__ */ new Map(), w = _.map((b) => new s(b, this.options));
      for (const b of w) {
        if (y(b))
          return [b];
        S.set(b.value, b);
      }
      S.size > 1 && S.has("") && S.delete("");
      const d = [...S.values()];
      return r.set(z, d), d;
    }
    intersects(D, B) {
      if (!(D instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((z) => f(z, B) && D.set.some((Q) => f(Q, B) && z.every((H) => Q.every((R) => H.intersects(R, B)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(D) {
      if (!D)
        return !1;
      if (typeof D == "string")
        try {
          D = new o(D, this.options);
        } catch {
          return !1;
        }
      for (let B = 0; B < this.set.length; B++)
        if (Z(this.set[B], D, this.options))
          return !0;
      return !1;
    }
  }
  bo = t;
  const n = GI, r = new n(), a = Fu, s = _i(), i = bi, o = lt, {
    safeRe: c,
    t: u,
    comparatorTrimReplace: l,
    tildeTrimReplace: p,
    caretTrimReplace: m
  } = Ia, { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: g } = Na, y = (j) => j.value === "<0.0.0-0", v = (j) => j.value === "", f = (j, D) => {
    let B = !0;
    const z = j.slice();
    let Q = z.pop();
    for (; B && z.length; )
      B = z.every((H) => Q.intersects(H, D)), Q = z.pop();
    return B;
  }, $ = (j, D) => (j = j.replace(c[u.BUILD], ""), i("comp", j, D), j = M(j, D), i("caret", j), j = O(j, D), i("tildes", j), j = C(j, D), i("xrange", j), j = T(j, D), i("stars", j), j), E = (j) => !j || j.toLowerCase() === "x" || j === "*", O = (j, D) => j.trim().split(/\s+/).map((B) => A(B, D)).join(" "), A = (j, D) => {
    const B = D.loose ? c[u.TILDELOOSE] : c[u.TILDE];
    return j.replace(B, (z, Q, H, R, _) => {
      i("tilde", j, z, Q, H, R, _);
      let S;
      return E(Q) ? S = "" : E(H) ? S = `>=${Q}.0.0 <${+Q + 1}.0.0-0` : E(R) ? S = `>=${Q}.${H}.0 <${Q}.${+H + 1}.0-0` : _ ? (i("replaceTilde pr", _), S = `>=${Q}.${H}.${R}-${_} <${Q}.${+H + 1}.0-0`) : S = `>=${Q}.${H}.${R} <${Q}.${+H + 1}.0-0`, i("tilde return", S), S;
    });
  }, M = (j, D) => j.trim().split(/\s+/).map((B) => X(B, D)).join(" "), X = (j, D) => {
    i("caret", j, D);
    const B = D.loose ? c[u.CARETLOOSE] : c[u.CARET], z = D.includePrerelease ? "-0" : "";
    return j.replace(B, (Q, H, R, _, S) => {
      i("caret", j, Q, H, R, _, S);
      let w;
      return E(H) ? w = "" : E(R) ? w = `>=${H}.0.0${z} <${+H + 1}.0.0-0` : E(_) ? H === "0" ? w = `>=${H}.${R}.0${z} <${H}.${+R + 1}.0-0` : w = `>=${H}.${R}.0${z} <${+H + 1}.0.0-0` : S ? (i("replaceCaret pr", S), H === "0" ? R === "0" ? w = `>=${H}.${R}.${_}-${S} <${H}.${R}.${+_ + 1}-0` : w = `>=${H}.${R}.${_}-${S} <${H}.${+R + 1}.0-0` : w = `>=${H}.${R}.${_}-${S} <${+H + 1}.0.0-0`) : (i("no pr"), H === "0" ? R === "0" ? w = `>=${H}.${R}.${_}${z} <${H}.${R}.${+_ + 1}-0` : w = `>=${H}.${R}.${_}${z} <${H}.${+R + 1}.0-0` : w = `>=${H}.${R}.${_} <${+H + 1}.0.0-0`), i("caret return", w), w;
    });
  }, C = (j, D) => (i("replaceXRanges", j, D), j.split(/\s+/).map((B) => J(B, D)).join(" ")), J = (j, D) => {
    j = j.trim();
    const B = D.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
    return j.replace(B, (z, Q, H, R, _, S) => {
      i("xRange", j, z, Q, H, R, _, S);
      const w = E(H), d = w || E(R), b = d || E(_), x = b;
      return Q === "=" && x && (Q = ""), S = D.includePrerelease ? "-0" : "", w ? Q === ">" || Q === "<" ? z = "<0.0.0-0" : z = "*" : Q && x ? (d && (R = 0), _ = 0, Q === ">" ? (Q = ">=", d ? (H = +H + 1, R = 0, _ = 0) : (R = +R + 1, _ = 0)) : Q === "<=" && (Q = "<", d ? H = +H + 1 : R = +R + 1), Q === "<" && (S = "-0"), z = `${Q + H}.${R}.${_}${S}`) : d ? z = `>=${H}.0.0${S} <${+H + 1}.0.0-0` : b && (z = `>=${H}.${R}.0${S} <${H}.${+R + 1}.0-0`), i("xRange return", z), z;
    });
  }, T = (j, D) => (i("replaceStars", j, D), j.trim().replace(c[u.STAR], "")), F = (j, D) => (i("replaceGTE0", j, D), j.trim().replace(c[D.includePrerelease ? u.GTE0PRE : u.GTE0], "")), L = (j) => (D, B, z, Q, H, R, _, S, w, d, b, x) => (E(z) ? B = "" : E(Q) ? B = `>=${z}.0.0${j ? "-0" : ""}` : E(H) ? B = `>=${z}.${Q}.0${j ? "-0" : ""}` : R ? B = `>=${B}` : B = `>=${B}${j ? "-0" : ""}`, E(w) ? S = "" : E(d) ? S = `<${+w + 1}.0.0-0` : E(b) ? S = `<${w}.${+d + 1}.0-0` : x ? S = `<=${w}.${d}.${b}-${x}` : j ? S = `<${w}.${d}.${+b + 1}-0` : S = `<=${S}`, `${B} ${S}`.trim()), Z = (j, D, B) => {
    for (let z = 0; z < j.length; z++)
      if (!j[z].test(D))
        return !1;
    if (D.prerelease.length && !B.includePrerelease) {
      for (let z = 0; z < j.length; z++)
        if (i(j[z].semver), j[z].semver !== s.ANY && j[z].semver.prerelease.length > 0) {
          const Q = j[z].semver;
          if (Q.major === D.major && Q.minor === D.minor && Q.patch === D.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return bo;
}
var $o, hf;
function _i() {
  if (hf) return $o;
  hf = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(l, p) {
      if (p = n(p), l instanceof t) {
        if (l.loose === !!p.loose)
          return l;
        l = l.value;
      }
      l = l.trim().split(/\s+/).join(" "), i("comparator", l, p), this.options = p, this.loose = !!p.loose, this.parse(l), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, i("comp", this);
    }
    parse(l) {
      const p = this.options.loose ? r[a.COMPARATORLOOSE] : r[a.COMPARATOR], m = l.match(p);
      if (!m)
        throw new TypeError(`Invalid comparator: ${l}`);
      this.operator = m[1] !== void 0 ? m[1] : "", this.operator === "=" && (this.operator = ""), m[2] ? this.semver = new o(m[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(l) {
      if (i("Comparator.test", l, this.options.loose), this.semver === e || l === e)
        return !0;
      if (typeof l == "string")
        try {
          l = new o(l, this.options);
        } catch {
          return !1;
        }
      return s(l, this.operator, this.semver, this.options);
    }
    intersects(l, p) {
      if (!(l instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new c(l.value, p).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new c(this.value, p).test(l.semver) : (p = n(p), p.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !p.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || s(this.semver, "<", l.semver, p) && this.operator.startsWith(">") && l.operator.startsWith("<") || s(this.semver, ">", l.semver, p) && this.operator.startsWith("<") && l.operator.startsWith(">")));
    }
  }
  $o = t;
  const n = Fu, { safeRe: r, t: a } = Ia, s = ey, i = bi, o = lt, c = qt();
  return $o;
}
const KI = qt(), WI = (e, t, n) => {
  try {
    t = new KI(t, n);
  } catch {
    return !1;
  }
  return t.test(e);
};
var wi = WI;
const JI = qt(), XI = (e, t) => new JI(e, t).set.map((n) => n.map((r) => r.value).join(" ").trim().split(" "));
var YI = XI;
const ZI = lt, QI = qt(), eC = (e, t, n) => {
  let r = null, a = null, s = null;
  try {
    s = new QI(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || a.compare(i) === -1) && (r = i, a = new ZI(r, n));
  }), r;
};
var tC = eC;
const nC = lt, rC = qt(), aC = (e, t, n) => {
  let r = null, a = null, s = null;
  try {
    s = new rC(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || a.compare(i) === 1) && (r = i, a = new nC(r, n));
  }), r;
};
var sC = aC;
const _o = lt, iC = qt(), vf = $i, oC = (e, t) => {
  e = new iC(e, t);
  let n = new _o("0.0.0");
  if (e.test(n) || (n = new _o("0.0.0-0"), e.test(n)))
    return n;
  n = null;
  for (let r = 0; r < e.set.length; ++r) {
    const a = e.set[r];
    let s = null;
    a.forEach((i) => {
      const o = new _o(i.semver.version);
      switch (i.operator) {
        case ">":
          o.prerelease.length === 0 ? o.patch++ : o.prerelease.push(0), o.raw = o.format();
        case "":
        case ">=":
          (!s || vf(o, s)) && (s = o);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${i.operator}`);
      }
    }), s && (!n || vf(n, s)) && (n = s);
  }
  return n && e.test(n) ? n : null;
};
var cC = oC;
const lC = qt(), uC = (e, t) => {
  try {
    return new lC(e, t).range || "*";
  } catch {
    return null;
  }
};
var pC = uC;
const dC = lt, ty = _i(), { ANY: fC } = ty, mC = qt(), hC = wi, yf = $i, gf = Mu, vC = zu, yC = Uu, gC = (e, t, n, r) => {
  e = new dC(e, r), t = new mC(t, r);
  let a, s, i, o, c;
  switch (n) {
    case ">":
      a = yf, s = vC, i = gf, o = ">", c = ">=";
      break;
    case "<":
      a = gf, s = yC, i = yf, o = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (hC(e, t, r))
    return !1;
  for (let u = 0; u < t.set.length; ++u) {
    const l = t.set[u];
    let p = null, m = null;
    if (l.forEach((h) => {
      h.semver === fC && (h = new ty(">=0.0.0")), p = p || h, m = m || h, a(h.semver, p.semver, r) ? p = h : i(h.semver, m.semver, r) && (m = h);
    }), p.operator === o || p.operator === c || (!m.operator || m.operator === o) && s(e, m.semver))
      return !1;
    if (m.operator === c && i(e, m.semver))
      return !1;
  }
  return !0;
};
var qu = gC;
const bC = qu, $C = (e, t, n) => bC(e, t, ">", n);
var _C = $C;
const wC = qu, xC = (e, t, n) => wC(e, t, "<", n);
var EC = xC;
const bf = qt(), SC = (e, t, n) => (e = new bf(e, n), t = new bf(t, n), e.intersects(t, n));
var PC = SC;
const RC = wi, OC = zt;
var AC = (e, t, n) => {
  const r = [];
  let a = null, s = null;
  const i = e.sort((l, p) => OC(l, p, n));
  for (const l of i)
    RC(l, t, n) ? (s = l, a || (a = l)) : (s && r.push([a, s]), s = null, a = null);
  a && r.push([a, null]);
  const o = [];
  for (const [l, p] of r)
    l === p ? o.push(l) : !p && l === i[0] ? o.push("*") : p ? l === i[0] ? o.push(`<=${p}`) : o.push(`${l} - ${p}`) : o.push(`>=${l}`);
  const c = o.join(" || "), u = typeof t.raw == "string" ? t.raw : String(t);
  return c.length < u.length ? c : t;
};
const $f = qt(), Vu = _i(), { ANY: wo } = Vu, Wr = wi, Bu = zt, TC = (e, t, n = {}) => {
  if (e === t)
    return !0;
  e = new $f(e, n), t = new $f(t, n);
  let r = !1;
  e: for (const a of e.set) {
    for (const s of t.set) {
      const i = kC(a, s, n);
      if (r = r || i !== null, i)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, jC = [new Vu(">=0.0.0-0")], _f = [new Vu(">=0.0.0")], kC = (e, t, n) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === wo) {
    if (t.length === 1 && t[0].semver === wo)
      return !0;
    n.includePrerelease ? e = jC : e = _f;
  }
  if (t.length === 1 && t[0].semver === wo) {
    if (n.includePrerelease)
      return !0;
    t = _f;
  }
  const r = /* @__PURE__ */ new Set();
  let a, s;
  for (const h of e)
    h.operator === ">" || h.operator === ">=" ? a = wf(a, h, n) : h.operator === "<" || h.operator === "<=" ? s = xf(s, h, n) : r.add(h.semver);
  if (r.size > 1)
    return null;
  let i;
  if (a && s) {
    if (i = Bu(a.semver, s.semver, n), i > 0)
      return null;
    if (i === 0 && (a.operator !== ">=" || s.operator !== "<="))
      return null;
  }
  for (const h of r) {
    if (a && !Wr(h, String(a), n) || s && !Wr(h, String(s), n))
      return null;
    for (const g of t)
      if (!Wr(h, String(g), n))
        return !1;
    return !0;
  }
  let o, c, u, l, p = s && !n.includePrerelease && s.semver.prerelease.length ? s.semver : !1, m = a && !n.includePrerelease && a.semver.prerelease.length ? a.semver : !1;
  p && p.prerelease.length === 1 && s.operator === "<" && p.prerelease[0] === 0 && (p = !1);
  for (const h of t) {
    if (l = l || h.operator === ">" || h.operator === ">=", u = u || h.operator === "<" || h.operator === "<=", a) {
      if (m && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === m.major && h.semver.minor === m.minor && h.semver.patch === m.patch && (m = !1), h.operator === ">" || h.operator === ">=") {
        if (o = wf(a, h, n), o === h && o !== a)
          return !1;
      } else if (a.operator === ">=" && !Wr(a.semver, String(h), n))
        return !1;
    }
    if (s) {
      if (p && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === p.major && h.semver.minor === p.minor && h.semver.patch === p.patch && (p = !1), h.operator === "<" || h.operator === "<=") {
        if (c = xf(s, h, n), c === h && c !== s)
          return !1;
      } else if (s.operator === "<=" && !Wr(s.semver, String(h), n))
        return !1;
    }
    if (!h.operator && (s || a) && i !== 0)
      return !1;
  }
  return !(a && u && !s && i !== 0 || s && l && !a && i !== 0 || m || p);
}, wf = (e, t, n) => {
  if (!e)
    return t;
  const r = Bu(e.semver, t.semver, n);
  return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, xf = (e, t, n) => {
  if (!e)
    return t;
  const r = Bu(e.semver, t.semver, n);
  return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var NC = TC;
const xo = Ia, Ef = Na, IC = lt, Sf = Yv, CC = Gn, DC = IN, FC = FN, LC = MN, MC = zN, UC = BN, zC = KN, qC = XN, VC = QN, BC = zt, HC = rI, GC = iI, KC = Lu, WC = uI, JC = fI, XC = $i, YC = Mu, ZC = Zv, QC = Qv, e2 = Uu, t2 = zu, n2 = ey, r2 = DI, a2 = BI, s2 = _i(), i2 = qt(), o2 = wi, c2 = YI, l2 = tC, u2 = sC, p2 = cC, d2 = pC, f2 = qu, m2 = _C, h2 = EC, v2 = PC, y2 = AC, g2 = NC;
var b2 = {
  parse: CC,
  valid: DC,
  clean: FC,
  inc: LC,
  diff: MC,
  major: UC,
  minor: zC,
  patch: qC,
  prerelease: VC,
  compare: BC,
  rcompare: HC,
  compareLoose: GC,
  compareBuild: KC,
  sort: WC,
  rsort: JC,
  gt: XC,
  lt: YC,
  eq: ZC,
  neq: QC,
  gte: e2,
  lte: t2,
  cmp: n2,
  coerce: r2,
  truncate: a2,
  Comparator: s2,
  Range: i2,
  satisfies: o2,
  toComparators: c2,
  maxSatisfying: l2,
  minSatisfying: u2,
  minVersion: p2,
  validRange: d2,
  outside: f2,
  gtr: m2,
  ltr: h2,
  intersects: v2,
  simplifyRange: y2,
  subset: g2,
  SemVer: IC,
  re: xo.re,
  src: xo.src,
  tokens: xo.t,
  SEMVER_SPEC_VERSION: Ef.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Ef.RELEASE_TYPES,
  compareIdentifiers: Sf.compareIdentifiers,
  rcompareIdentifiers: Sf.rcompareIdentifiers
};
const Qn = /* @__PURE__ */ Pr(b2), $2 = Object.prototype.toString, _2 = "[object Uint8Array]", w2 = "[object ArrayBuffer]";
function ny(e, t, n) {
  return e ? e.constructor === t ? !0 : $2.call(e) === n : !1;
}
function ry(e) {
  return ny(e, Uint8Array, _2);
}
function x2(e) {
  return ny(e, ArrayBuffer, w2);
}
function E2(e) {
  return ry(e) || x2(e);
}
function S2(e) {
  if (!ry(e))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof e}\``);
}
function P2(e) {
  if (!E2(e))
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
}
function Eo(e, t) {
  if (e.length === 0)
    return new Uint8Array(0);
  t ??= e.reduce((a, s) => a + s.length, 0);
  const n = new Uint8Array(t);
  let r = 0;
  for (const a of e)
    S2(a), n.set(a, r), r += a.length;
  return n;
}
const Pf = {
  utf8: new globalThis.TextDecoder("utf8")
};
function as(e, t = "utf8") {
  return P2(e), Pf[t] ??= new globalThis.TextDecoder(t), Pf[t].decode(e);
}
function R2(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof e}\``);
}
const O2 = new globalThis.TextEncoder();
function So(e) {
  return R2(e), O2.encode(e);
}
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
const Rf = "aes-256-cbc", ay = /* @__PURE__ */ new Set([
  "aes-256-cbc",
  "aes-256-gcm",
  "aes-256-ctr"
]), A2 = (e) => typeof e == "string" && ay.has(e), Xt = () => /* @__PURE__ */ Object.create(null), Of = (e) => e !== void 0, Po = (e, t) => {
  const n = /* @__PURE__ */ new Set([
    "undefined",
    "symbol",
    "function"
  ]), r = typeof t;
  if (n.has(r))
    throw new TypeError(`Setting a value of type \`${r}\` for key \`${e}\` is not allowed as it's not supported by JSON`);
}, fn = "__internal__", Ro = `${fn}.migrations.version`;
class T2 {
  path;
  events;
  #r;
  #a;
  #s;
  #e;
  #t = {};
  #i = !1;
  #o;
  #c;
  #n;
  constructor(t = {}) {
    const n = this.#l(t);
    this.#e = n, this.#u(n), this.#d(n), this.#f(n), this.events = new EventTarget(), this.#a = n.encryptionKey, this.#s = n.encryptionAlgorithm ?? Rf, this.path = this.#m(n), this.#h(n), n.watch && this._watch();
  }
  get(t, n) {
    if (this.#e.accessPropertiesByDotNotation)
      return this._get(t, n);
    const { store: r } = this;
    return t in r ? r[t] : n;
  }
  set(t, n) {
    if (typeof t != "string" && typeof t != "object")
      throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof t}`);
    if (typeof t != "object" && n === void 0)
      throw new TypeError("Use `delete()` to clear values");
    if (this._containsReservedKey(t))
      throw new TypeError(`Please don't use the ${fn} key, as it's used to manage this module internal operations.`);
    const { store: r } = this, a = (s, i) => {
      if (Po(s, i), this.#e.accessPropertiesByDotNotation)
        Ua(r, s, i);
      else {
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return;
        r[s] = i;
      }
    };
    if (typeof t == "object") {
      const s = t;
      for (const [i, o] of Object.entries(s))
        a(i, o);
    } else
      a(t, n);
    this.store = r;
  }
  has(t) {
    return this.#e.accessPropertiesByDotNotation ? ao(this.store, t) : t in this.store;
  }
  appendToArray(t, n) {
    Po(t, n);
    const r = this.#e.accessPropertiesByDotNotation ? this._get(t, []) : t in this.store ? this.store[t] : [];
    if (!Array.isArray(r))
      throw new TypeError(`The key \`${t}\` is already set to a non-array value`);
    this.set(t, [...r, n]);
  }
  /**
      Reset items to their default values, as defined by the `defaults` or `schema` option.
  
      @see `clear()` to reset all items.
  
      @param keys - The keys of the items to reset.
      */
  reset(...t) {
    for (const n of t)
      Of(this.#t[n]) && this.set(n, this.#t[n]);
  }
  delete(t) {
    const { store: n } = this;
    this.#e.accessPropertiesByDotNotation ? kw(n, t) : delete n[t], this.store = n;
  }
  /**
      Delete all items.
  
      This resets known items to their default values, if defined by the `defaults` or `schema` option.
      */
  clear() {
    const t = Xt();
    for (const n of Object.keys(this.#t))
      Of(this.#t[n]) && (Po(n, this.#t[n]), this.#e.accessPropertiesByDotNotation ? Ua(t, n, this.#t[n]) : t[n] = this.#t[n]);
    this.store = t;
  }
  onDidChange(t, n) {
    if (typeof t != "string")
      throw new TypeError(`Expected \`key\` to be of type \`string\`, got ${typeof t}`);
    if (typeof n != "function")
      throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof n}`);
    return this._handleValueChange(() => this.get(t), n);
  }
  /**
      Watches the whole config object, calling `callback` on any changes.
  
      @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
      @returns A function, that when called, will unsubscribe.
      */
  onDidAnyChange(t) {
    if (typeof t != "function")
      throw new TypeError(`Expected \`callback\` to be of type \`function\`, got ${typeof t}`);
    return this._handleStoreChange(t);
  }
  get size() {
    return Object.keys(this.store).filter((n) => !this._isReservedKeyPath(n)).length;
  }
  /**
      Get all the config as an object or replace the current config with an object.
  
      @example
      ```
      console.log(config.store);
      //=> {name: 'John', age: 30}
      ```
  
      @example
      ```
      config.store = {
          hello: 'world'
      };
      ```
      */
  get store() {
    try {
      const t = pe.readFileSync(this.path, this.#a ? null : "utf8"), n = this._decryptData(t);
      return ((a) => {
        const s = this._deserialize(a);
        return this.#i || this._validate(s), Object.assign(Xt(), s);
      })(n);
    } catch (t) {
      if (t?.code === "ENOENT")
        return this._ensureDirectory(), Xt();
      if (this.#e.clearInvalidConfig) {
        const n = t;
        if (n.name === "SyntaxError" || n.message?.startsWith("Config schema violation:") || n.message === "Failed to decrypt config data.")
          return Xt();
      }
      throw t;
    }
  }
  set store(t) {
    if (this._ensureDirectory(), !ao(t, fn))
      try {
        const n = pe.readFileSync(this.path, this.#a ? null : "utf8"), r = this._decryptData(n), a = this._deserialize(r);
        ao(a, fn) && Ua(t, fn, rd(a, fn));
      } catch {
      }
    this.#i || this._validate(t), this._write(t), this.events.dispatchEvent(new Event("change"));
  }
  *[Symbol.iterator]() {
    for (const [t, n] of Object.entries(this.store))
      this._isReservedKeyPath(t) || (yield [t, n]);
  }
  /**
  Close the file watcher if one exists. This is useful in tests to prevent the process from hanging.
  */
  _closeWatcher() {
    this.#o && (this.#o.close(), this.#o = void 0), this.#c && (pe.unwatchFile(this.path), this.#c = !1), this.#n = void 0;
  }
  _decryptData(t) {
    const n = this.#a;
    if (!n)
      return typeof t == "string" ? t : as(t);
    const r = this.#s, a = r === "aes-256-gcm" ? 16 : 0, s = ":".codePointAt(0), i = typeof t == "string" ? t.codePointAt(16) : t[16];
    if (!(s !== void 0 && i === s)) {
      if (r === "aes-256-cbc")
        return typeof t == "string" ? t : as(t);
      throw new Error("Failed to decrypt config data.");
    }
    const c = (h) => {
      if (a === 0)
        return { ciphertext: h };
      const g = h.length - a;
      if (g < 0)
        throw new Error("Invalid authentication tag length.");
      return {
        ciphertext: h.slice(0, g),
        authenticationTag: h.slice(g)
      };
    }, u = t.slice(0, 16), l = t.slice(17), p = typeof l == "string" ? So(l) : l, m = (h) => {
      const { ciphertext: g, authenticationTag: y } = c(p), v = Lr.pbkdf2Sync(n, h, 1e4, 32, "sha512"), f = Lr.createDecipheriv(r, v, u);
      return y && f.setAuthTag(y), as(Eo([f.update(g), f.final()]));
    };
    try {
      return m(u);
    } catch {
      try {
        return m(u.toString());
      } catch {
      }
    }
    if (r === "aes-256-cbc")
      return typeof t == "string" ? t : as(t);
    throw new Error("Failed to decrypt config data.");
  }
  _handleStoreChange(t) {
    let n = this.store;
    const r = () => {
      const a = n, s = this.store;
      Zu(s, a) || (n = s, t.call(this, s, a));
    };
    return this.events.addEventListener("change", r), () => {
      this.events.removeEventListener("change", r);
    };
  }
  _handleValueChange(t, n) {
    let r = t();
    const a = () => {
      const s = r, i = t();
      Zu(i, s) || (r = i, n.call(this, i, s));
    };
    return this.events.addEventListener("change", a), () => {
      this.events.removeEventListener("change", a);
    };
  }
  _deserialize = (t) => JSON.parse(t);
  _serialize = (t) => JSON.stringify(t, void 0, "	");
  _validate(t) {
    if (!this.#r || this.#r(t) || !this.#r.errors)
      return;
    const r = this.#r.errors.map(({ instancePath: a, message: s = "" }) => `\`${a.slice(1)}\` ${s}`);
    throw new Error("Config schema violation: " + r.join("; "));
  }
  _ensureDirectory() {
    pe.mkdirSync(ne.dirname(this.path), { recursive: !0 });
  }
  _write(t) {
    let n = this._serialize(t);
    const r = this.#a;
    if (r) {
      const a = Lr.randomBytes(16), s = Lr.pbkdf2Sync(r, a, 1e4, 32, "sha512"), i = Lr.createCipheriv(this.#s, s, a), o = Eo([i.update(So(n)), i.final()]), c = [a, So(":"), o];
      this.#s === "aes-256-gcm" && c.push(i.getAuthTag()), n = Eo(c);
    }
    if (Ie.env.SNAP)
      pe.writeFileSync(this.path, n, { mode: this.#e.configFileMode });
    else
      try {
        nh(this.path, n, { mode: this.#e.configFileMode });
      } catch (a) {
        if (a?.code === "EXDEV") {
          pe.writeFileSync(this.path, n, { mode: this.#e.configFileMode });
          return;
        }
        throw a;
      }
  }
  _watch() {
    if (this._ensureDirectory(), pe.existsSync(this.path) || this._write(Xt()), Ie.platform === "win32" || Ie.platform === "darwin") {
      this.#n ??= sf(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 100 });
      const t = ne.dirname(this.path), n = ne.basename(this.path);
      this.#o = pe.watch(t, { persistent: !1, encoding: "utf8" }, (r, a) => {
        a && a !== n || typeof this.#n == "function" && this.#n();
      });
    } else
      this.#n ??= sf(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 1e3 }), pe.watchFile(this.path, { persistent: !1 }, (t, n) => {
        typeof this.#n == "function" && this.#n();
      }), this.#c = !0;
  }
  _migrate(t, n, r) {
    let a = this._get(Ro, "0.0.0");
    const s = Object.keys(t).filter((o) => this._shouldPerformMigration(o, a, n));
    let i = structuredClone(this.store);
    for (const o of s)
      try {
        r && r(this, {
          fromVersion: a,
          toVersion: o,
          finalVersion: n,
          versions: s
        });
        const c = t[o];
        c?.(this), this._set(Ro, o), a = o, i = structuredClone(this.store);
      } catch (c) {
        this.store = i;
        const u = c instanceof Error ? c.message : String(c);
        throw new Error(`Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ${u}`);
      }
    (this._isVersionInRangeFormat(a) || !Qn.eq(a, n)) && this._set(Ro, n);
  }
  _containsReservedKey(t) {
    return typeof t == "string" ? this._isReservedKeyPath(t) : !t || typeof t != "object" ? !1 : this._objectContainsReservedKey(t);
  }
  _objectContainsReservedKey(t) {
    if (!t || typeof t != "object")
      return !1;
    for (const [n, r] of Object.entries(t))
      if (this._isReservedKeyPath(n) || this._objectContainsReservedKey(r))
        return !0;
    return !1;
  }
  _isReservedKeyPath(t) {
    return t === fn || t.startsWith(`${fn}.`);
  }
  _isVersionInRangeFormat(t) {
    return Qn.clean(t) === null;
  }
  _shouldPerformMigration(t, n, r) {
    return this._isVersionInRangeFormat(t) ? n !== "0.0.0" && Qn.satisfies(n, t) ? !1 : Qn.satisfies(r, t) : !(Qn.lte(t, n) || Qn.gt(t, r));
  }
  _get(t, n) {
    return rd(this.store, t, n);
  }
  _set(t, n) {
    const { store: r } = this;
    Ua(r, t, n), this.store = r;
  }
  #l(t) {
    const n = {
      configName: "config",
      fileExtension: "json",
      projectSuffix: "nodejs",
      clearInvalidConfig: !1,
      accessPropertiesByDotNotation: !0,
      configFileMode: 438,
      ...t
    };
    if (n.encryptionAlgorithm ??= Rf, !A2(n.encryptionAlgorithm))
      throw new TypeError(`The \`encryptionAlgorithm\` option must be one of: ${[...ay].join(", ")}`);
    if (!n.cwd) {
      if (!n.projectName)
        throw new Error("Please specify the `projectName` option.");
      n.cwd = Dw(n.projectName, { suffix: n.projectSuffix }).config;
    }
    return typeof n.fileExtension == "string" && (n.fileExtension = n.fileExtension.replace(/^\.+/, "")), n;
  }
  #u(t) {
    if (!(t.schema ?? t.ajvOptions ?? t.rootSchema))
      return;
    if (t.schema && typeof t.schema != "object")
      throw new TypeError("The `schema` option must be an object.");
    const n = uN.default, r = new XO.Ajv2020({
      allErrors: !0,
      useDefaults: !0,
      ...t.ajvOptions
    });
    n(r);
    const a = {
      ...t.rootSchema,
      type: "object",
      properties: t.schema
    };
    this.#r = r.compile(a), this.#p(t.schema);
  }
  #p(t) {
    const n = Object.entries(t ?? {});
    for (const [r, a] of n) {
      if (!a || typeof a != "object" || !Object.hasOwn(a, "default"))
        continue;
      const { default: s } = a;
      s !== void 0 && (this.#t[r] = s);
    }
  }
  #d(t) {
    t.defaults && Object.assign(this.#t, t.defaults);
  }
  #f(t) {
    t.serialize && (this._serialize = t.serialize), t.deserialize && (this._deserialize = t.deserialize);
  }
  #m(t) {
    const n = typeof t.fileExtension == "string" ? t.fileExtension : void 0, r = n ? `.${n}` : "";
    return ne.resolve(t.cwd, `${t.configName ?? "config"}${r}`);
  }
  #h(t) {
    if (t.migrations) {
      this.#v(t), this._validate(this.store);
      return;
    }
    const n = this.store, r = Object.assign(Xt(), t.defaults ?? {}, n);
    this._validate(r);
    try {
      ep.deepEqual(n, r);
    } catch {
      this.store = r;
    }
  }
  #v(t) {
    const { migrations: n, projectVersion: r } = t;
    if (n) {
      if (!r)
        throw new Error("Please specify the `projectVersion` option.");
      this.#i = !0;
      try {
        const a = this.store, s = Object.assign(Xt(), t.defaults ?? {}, a);
        try {
          ep.deepEqual(a, s);
        } catch {
          this._write(s);
        }
        this._migrate(n, r, t.beforeEachMigration);
      } finally {
        this.#i = !1;
      }
    }
  }
}
const { app: xs, ipcMain: dc, shell: j2 } = Uf;
let Af = !1;
const Tf = () => {
  if (!dc || !xs)
    throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
  const e = {
    defaultCwd: xs.getPath("userData"),
    appVersion: xs.getVersion()
  };
  return Af || (dc.on("electron-store-get-data", (t) => {
    t.returnValue = e;
  }), Af = !0), e;
};
class k2 extends T2 {
  constructor(t) {
    let n, r;
    if (Ie.type === "renderer") {
      const a = Uf.ipcRenderer.sendSync("electron-store-get-data");
      if (!a)
        throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
      ({ defaultCwd: n, appVersion: r } = a);
    } else dc && xs && ({ defaultCwd: n, appVersion: r } = Tf());
    t = {
      name: "config",
      ...t
    }, t.projectVersion ||= r, t.cwd ? t.cwd = ne.isAbsolute(t.cwd) ? t.cwd : ne.join(n, t.cwd) : t.cwd = n, t.configName = t.name, delete t.name, super(t);
  }
  static initRenderer() {
    Tf();
  }
  async openInEditor() {
    const t = await j2.openPath(this.path);
    if (t)
      throw new Error(t);
  }
}
const Qe = new k2({
  defaults: {
    steamApiKey: "",
    sgdbApiKey: "",
    greenLumaPath: "",
    steam32Id: "",
    runInBackground: !0,
    goldbergCache: {},
    realAppIdCache: {},
    achievementsEnabledCache: {}
  }
});
async function Dr() {
  return Qe.store;
}
async function sy() {
  return Qe.get("sgdbApiKey");
}
async function fc(e) {
  Qe.set("sgdbApiKey", e);
}
async function iy(e, t) {
  Qe.set(e, t);
}
async function oy(e) {
  return (Qe.get("goldbergCache") || {})[e];
}
async function mc(e, t) {
  const n = Qe.get("goldbergCache") || {};
  n[e] = t, Qe.set("goldbergCache", n);
}
async function N2(e) {
  const t = Qe.get("goldbergCache") || {};
  return t[e] ? (delete t[e], Qe.set("goldbergCache", t), !0) : !1;
}
async function I2(e) {
  return (Qe.get("realAppIdCache") || {})[e];
}
async function C2(e, t) {
  const n = Qe.get("realAppIdCache") || {};
  n[e] = t, Qe.set("realAppIdCache", n);
}
async function D2(e) {
  const t = Qe.get("achievementsEnabledCache") || {};
  return t[e] !== void 0 ? t[e] : !0;
}
async function F2(e, t) {
  const n = Qe.get("achievementsEnabledCache") || {};
  n[e] = t, Qe.set("achievementsEnabledCache", n);
}
function Hu() {
  return Qe.get("runInBackground");
}
async function L2(e) {
  Qe.set("runInBackground", e);
}
const Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearGoldbergCache: N2,
  getAchievementsEnabledCache: D2,
  getConfig: Dr,
  getGoldbergCache: oy,
  getRealAppIdCache: I2,
  getRunInBackgroundSync: Hu,
  getSavedApiKey: sy,
  saveAchievementsEnabledCache: F2,
  saveApiKey: fc,
  saveConfigData: iy,
  saveGoldbergCache: mc,
  saveRealAppIdCache: C2,
  saveRunInBackground: L2
}, Symbol.toStringTag, { value: "Module" }));
var cy = {};
/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
(function(e) {
  (function(t) {
    t(typeof DO_NOT_EXPORT_CRC > "u" ? e : {});
  })(function(t) {
    t.version = "1.2.2";
    function n() {
      for (var C = 0, J = new Array(256), T = 0; T != 256; ++T)
        C = T, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, J[T] = C;
      return typeof Int32Array < "u" ? new Int32Array(J) : J;
    }
    var r = n();
    function a(C) {
      var J = 0, T = 0, F = 0, L = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (F = 0; F != 256; ++F) L[F] = C[F];
      for (F = 0; F != 256; ++F)
        for (T = C[F], J = 256 + F; J < 4096; J += 256) T = L[J] = T >>> 8 ^ C[T & 255];
      var Z = [];
      for (F = 1; F != 16; ++F) Z[F - 1] = typeof Int32Array < "u" ? L.subarray(F * 256, F * 256 + 256) : L.slice(F * 256, F * 256 + 256);
      return Z;
    }
    var s = a(r), i = s[0], o = s[1], c = s[2], u = s[3], l = s[4], p = s[5], m = s[6], h = s[7], g = s[8], y = s[9], v = s[10], f = s[11], $ = s[12], E = s[13], O = s[14];
    function A(C, J) {
      for (var T = J ^ -1, F = 0, L = C.length; F < L; ) T = T >>> 8 ^ r[(T ^ C.charCodeAt(F++)) & 255];
      return ~T;
    }
    function M(C, J) {
      for (var T = J ^ -1, F = C.length - 15, L = 0; L < F; ) T = O[C[L++] ^ T & 255] ^ E[C[L++] ^ T >> 8 & 255] ^ $[C[L++] ^ T >> 16 & 255] ^ f[C[L++] ^ T >>> 24] ^ v[C[L++]] ^ y[C[L++]] ^ g[C[L++]] ^ h[C[L++]] ^ m[C[L++]] ^ p[C[L++]] ^ l[C[L++]] ^ u[C[L++]] ^ c[C[L++]] ^ o[C[L++]] ^ i[C[L++]] ^ r[C[L++]];
      for (F += 15; L < F; ) T = T >>> 8 ^ r[(T ^ C[L++]) & 255];
      return ~T;
    }
    function X(C, J) {
      for (var T = J ^ -1, F = 0, L = C.length, Z = 0, j = 0; F < L; )
        Z = C.charCodeAt(F++), Z < 128 ? T = T >>> 8 ^ r[(T ^ Z) & 255] : Z < 2048 ? (T = T >>> 8 ^ r[(T ^ (192 | Z >> 6 & 31)) & 255], T = T >>> 8 ^ r[(T ^ (128 | Z & 63)) & 255]) : Z >= 55296 && Z < 57344 ? (Z = (Z & 1023) + 64, j = C.charCodeAt(F++) & 1023, T = T >>> 8 ^ r[(T ^ (240 | Z >> 8 & 7)) & 255], T = T >>> 8 ^ r[(T ^ (128 | Z >> 2 & 63)) & 255], T = T >>> 8 ^ r[(T ^ (128 | j >> 6 & 15 | (Z & 3) << 4)) & 255], T = T >>> 8 ^ r[(T ^ (128 | j & 63)) & 255]) : (T = T >>> 8 ^ r[(T ^ (224 | Z >> 12 & 15)) & 255], T = T >>> 8 ^ r[(T ^ (128 | Z >> 6 & 63)) & 255], T = T >>> 8 ^ r[(T ^ (128 | Z & 63)) & 255]);
      return ~T;
    }
    t.table = r, t.bstr = A, t.buf = M, t.str = X;
  });
})(cy);
const Gu = /* @__PURE__ */ Pr(cy);
var yt = {}, Ft = $c;
function Lt(e) {
  e = e || new Buffer(0), Ft(Buffer.isBuffer(e), "A Buffer must be provided"), this.buf = e, this.offset = 0;
}
Lt.prototype.append = function(e) {
  return Ft(Buffer.isBuffer(e), "A Buffer must be provided"), this.buf = Buffer.concat([this.buf, e]), this;
};
Lt.prototype.tell = function() {
  return this.offset;
};
Lt.prototype.seek = function(e) {
  return Ft(e >= 0 && e <= this.buf.length, "Position is Invalid"), this.offset = e, this;
};
Lt.prototype.move = function(e) {
  return Ft(this.offset + e >= 0 && this.offset + e <= this.buf.length, "Difference is Invalid"), this.offset += e, this;
};
Lt.prototype.nextAll = Lt.prototype.restAll = function() {
  var e = this.buf.length - this.offset;
  Ft(e >= 0, "Buffer is not in normal state: offset > totalLength");
  var t = new Buffer(e);
  return this.buf.copy(t, 0, this.offset), this.offset = this.buf.length, t;
};
Lt.prototype.nextBuffer = function(e) {
  Ft(e >= 0, "Length must be no negative"), Ft(this.offset + e <= this.buf.length, "Out of Original Buffer's Boundary");
  var t = new Buffer(e);
  return this.buf.copy(t, 0, this.offset, this.offset + e), this.offset += e, t;
};
Lt.prototype.nextString = function(e, t) {
  return Ft(e >= 0, "Length must be no negative"), Ft(this.offset + e <= this.buf.length, "Out of Original Buffer's Boundary"), this.offset += e, this.buf.toString(t, this.offset - e, this.offset);
};
Lt.prototype.nextStringZero = function(e) {
  for (var t = 0; t + this.offset < this.buf.length && this.buf[this.offset + t] !== 0; t++) ;
  return Ft(t <= this.buf.length && this.buf[this.offset + t] === 0, "Out of Original Buffer's Boundary"), this.offset += t + 1, this.buf.toString(e, this.offset - t - 1, this.offset - 1);
};
function Gs(e, t) {
  e = M2(e), Lt.prototype["next" + e] = function() {
    Ft(this.offset + t <= this.buf.length, "Out of Original Buffer's Boundary");
    var n = this.buf["read" + e](this.offset);
    return this.offset += t, n;
  };
}
function Fr(e, t) {
  Gs(e + "LE", t), Gs(e + "BE", t);
}
Gs("Int8", 1);
Gs("UInt8", 1);
Fr("UInt16", 2);
Fr("Int16", 2);
Fr("UInt32", 4);
Fr("Int32", 4);
Fr("Float", 4);
Fr("Double", 8);
function M2(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var U2 = Lt, ly = { exports: {} };
(function(e) {
  class t {
    constructor(o, c, u, l, p) {
      this.width = o, this.poly = c, this.xor_in = u, this.reflected_xor_in = r(u, o), this.xor_out = l, this.reflect = p, this.msb_mask = 1 << this.width - 1, this.mask = this.msb_mask - 1 << 1 | 1, this.crc_shift = this.width < 8 ? 8 - this.width : 0, this.shifted_xor_in = this.xor_in << this.crc_shift;
      let m = this.gen_table();
      this.table = m, this.width === 8 && !this.xor_in && !this.xor_out && !this.reflect && (this.calculate = function(h) {
        h = n(h);
        let g = 0;
        for (let y = 0; y < h.length; y++)
          g = m[g ^ h[y]];
        return g;
      });
    }
    calculate(o) {
      o = n(o);
      let c, { table: u, width: l, crc_shift: p, mask: m } = this;
      if (this.reflect) {
        c = this.reflected_xor_in;
        for (let h = 0; h < o.length; h++) {
          let g = o[h];
          c = (u[(c ^ g) & 255] ^ c >>> 8) & m;
        }
      } else {
        c = this.shifted_xor_in;
        for (let h = 0; h < o.length; h++)
          c = u[(c >> l - 8 + p ^ o[h]) & 255] << p ^ c << 8 - p & m << p;
        c >>= p;
      }
      return c ^= this.xor_out, c >>> 0;
    }
    calculate_no_table(o) {
      o = n(o);
      let c = this.xor_in;
      for (let u = 0; u < o.length; u++) {
        let l = o[u];
        this.reflect && (l = r(l, 8));
        for (let p = 0; p < 8; p++) {
          let m = c & this.msb_mask;
          l & 128 >> p && (m ^= this.msb_mask), c <<= 1, m && (c ^= this.poly);
        }
        c &= this.mask;
      }
      return this.reflect && (c = r(c, this.width)), c ^= this.xor_out, c >>> 0;
    }
    gen_table() {
      let o = 256, c = [];
      for (let u = 0; u < o; u++) {
        let l = u;
        this.reflect && (l = r(l, 8)), l = l << this.width - 8 + this.crc_shift;
        for (let p = 0; p < 8; p++)
          l & this.msb_mask << this.crc_shift ? (l <<= 1, l ^= this.poly << this.crc_shift) : l <<= 1;
        this.reflect && (l = r(l >> this.crc_shift, this.width) << this.crc_shift), l = l >> this.crc_shift & this.mask, c[u] = l >>> 0;
      }
      return new Int32Array(c);
    }
    print_table() {
      let o = this.table, c = Math.ceil(this.width / 4), u = c < 4 ? 4 : 3, l = o.length >> u, p = 1 << u, m = "";
      for (let h = 0; h < l; h++) {
        let g = "";
        for (let y = 0; y < p; y++) {
          let v = o[h << u | y];
          v = "000000000" + v.toString(16), v = v.substr(v.length - c), g += "0x" + v + ", ";
        }
        m += "  " + g + `
`;
      }
      return m = `[
` + m.slice(0, -3) + `
]`, m;
    }
  }
  function n(i) {
    if (Buffer.isBuffer(i)) return i;
    switch (typeof i) {
      case "number":
        let o = Buffer.alloc(4);
        return o.writeUInt32BE(i), o;
      case "string":
        return Buffer.from(i);
      default:
        throw new Error();
    }
  }
  function r(i, o) {
    let c = 0;
    for (let u = 0; u < o; u++)
      c = c << 1 | i & 1, i >>= 1;
    return c;
  }
  const a = {
    crc1: new t(1, 1, 0, 0, !1),
    crc6: new t(6, 47, 0, 0, !1),
    crc8: new t(8, 7, 0, 0, !1),
    crc10: new t(10, 563, 0, 0, !1),
    crc16: new t(16, 32773, 0, 0, !0),
    crc24: new t(24, 8801531, 11994318, 0, !1),
    crc32: new t(32, 79764919, 4294967295, 4294967295, !0),
    crc32c: new t(32, 517762881, 4294967295, 4294967295, !0)
  };
  e.exports = {
    CRC: t,
    models: a,
    crc: s
  };
  function s(i, o, c, u, l) {
    let p = new t(i, o, c, u, l);
    return p.calculate.bind(p);
  }
  for (let i in a) {
    let o = a[i];
    e.exports[i] = o.calculate.bind(o);
  }
})(ly);
var z2 = ly.exports, uy = { exports: {} }, Oo = 4294967296, py = [];
for (var Jr = 0; Jr < 256; Jr++)
  py[Jr] = (Jr > 15 ? "" : "0") + Jr.toString(16);
var ua = uy.exports = function(e, t) {
  e instanceof Buffer ? (this.buffer = e, this.offset = t || 0) : Object.prototype.toString.call(e) == "[object Uint8Array]" ? (this.buffer = new Buffer(e), this.offset = t || 0) : (this.buffer = this.buffer || new Buffer(8), this.offset = 0, this.setValue.apply(this, arguments));
};
ua.MAX_INT = Math.pow(2, 53);
ua.MIN_INT = -Math.pow(2, 53);
ua.prototype = {
  constructor: ua,
  /**
   * Do in-place 2's compliment.  See
   * http://en.wikipedia.org/wiki/Two's_complement
   */
  _2scomp: function() {
    for (var e = this.buffer, t = this.offset, n = 1, r = t + 7; r >= t; r--) {
      var a = (e[r] ^ 255) + n;
      e[r] = a & 255, n = a >> 8;
    }
  },
  /**
   * Set the value. Takes any of the following arguments:
   *
   * setValue(string) - A hexidecimal string
   * setValue(number) - Number (throws if n is outside int64 range)
   * setValue(hi, lo) - Raw bits as two 32-bit values
   */
  setValue: function(e, t) {
    var n = !1;
    if (arguments.length == 1)
      if (typeof e == "number") {
        if (n = e < 0, e = Math.abs(e), t = e % Oo, e = e / Oo, e > Oo) throw new RangeError(e + " is outside Int64 range");
        e = e | 0;
      } else if (typeof e == "string")
        e = (e + "").replace(/^0x/, ""), t = e.substr(-8), e = e.length > 8 ? e.substr(0, e.length - 8) : "", e = parseInt(e, 16), t = parseInt(t, 16);
      else
        throw new Error(e + " must be a Number or String");
    for (var r = this.buffer, a = this.offset, s = 7; s >= 0; s--)
      r[a + s] = t & 255, t = s == 4 ? e : t >>> 8;
    n && this._2scomp();
  },
  /**
   * Convert to a native JS number.
   *
   * WARNING: Do not expect this value to be accurate to integer precision for
   * large (positive or negative) numbers!
   *
   * @param allowImprecise If true, no check is performed to verify the
   * returned value is accurate to integer precision.  If false, imprecise
   * numbers (very large positive or negative numbers) will be forced to +/-
   * Infinity.
   */
  toNumber: function(e) {
    for (var t = this.buffer, n = this.offset, r = t[n] & 128, a = 0, s = 1, i = 7, o = 1; i >= 0; i--, o *= 256) {
      var c = t[n + i];
      r && (c = (c ^ 255) + s, s = c >> 8, c = c & 255), a += c * o;
    }
    return !e && a >= ua.MAX_INT ? r ? -1 / 0 : 1 / 0 : r ? -a : a;
  },
  /**
   * Convert to a JS Number. Returns +/-Infinity for values that can't be
   * represented to integer precision.
   */
  valueOf: function() {
    return this.toNumber(!1);
  },
  /**
   * Return string value
   *
   * @param radix Just like Number#toString()'s radix
   */
  toString: function(e) {
    return this.valueOf().toString(e || 10);
  },
  /**
   * Return a string showing the buffer octets, with MSB on the left.
   *
   * @param sep separator string. default is '' (empty string)
   */
  toOctetString: function(e) {
    for (var t = new Array(8), n = this.buffer, r = this.offset, a = 0; a < 8; a++)
      t[a] = py[n[r + a]];
    return t.join(e || "");
  },
  /**
   * Returns the int64's 8 bytes in a buffer.
   *
   * @param {bool} [rawBuffer=false]  If no offset and this is true, return the internal buffer.  Should only be used if
   *                                  you're discarding the Int64 afterwards, as it breaks encapsulation.
   */
  toBuffer: function(e) {
    if (e && this.offset === 0) return this.buffer;
    var t = new Buffer(8);
    return this.buffer.copy(t, 0, this.offset, this.offset + 8), t;
  },
  /**
   * Copy 8 bytes of int64 into target buffer at target offset.
   *
   * @param {Buffer} targetBuffer       Buffer to copy into.
   * @param {number} [targetOffset=0]   Offset into target buffer.
   */
  copy: function(e, t) {
    this.buffer.copy(e, t || 0, this.offset, this.offset + 8);
  },
  /**
   * Returns a number indicating whether this comes before or after or is the
   * same as the other in sort order.
   *
   * @param {Int64} other  Other Int64 to compare.
   */
  compare: function(e) {
    if ((this.buffer[this.offset] & 128) != (e.buffer[e.offset] & 128))
      return e.buffer[e.offset] - this.buffer[this.offset];
    for (var t = 0; t < 8; t++)
      if (this.buffer[this.offset + t] !== e.buffer[e.offset + t])
        return this.buffer[this.offset + t] - e.buffer[e.offset + t];
    return 0;
  },
  /**
   * Returns a boolean indicating if this integer is equal to other.
   *
   * @param {Int64} other  Other Int64 to compare.
   */
  equals: function(e) {
    return this.compare(e) === 0;
  },
  /**
   * Pretty output in console.log
   */
  inspect: function() {
    return "[Int64 value:" + this + " octets:" + this.toOctetString(" ") + "]";
  }
};
var q2 = uy.exports;
function hc(e, t, n) {
  for (var r = [], a = Math.max(e.length, t.length), s = 0, i = 0; i < a || s; ) {
    var o = i < e.length ? e[i] : 0, c = i < t.length ? t[i] : 0, u = s + o + c;
    r.push(u % n), s = Math.floor(u / n), i++;
  }
  return r;
}
function jf(e, t, n) {
  if (e < 0) return null;
  if (e == 0) return [];
  for (var r = [], a = t; e & 1 && (r = hc(r, a, n)), e = e >> 1, e !== 0; )
    a = hc(a, a, n);
  return r;
}
function V2(e, t) {
  for (var n = e.split(""), r = [], a = n.length - 1; a >= 0; a--) {
    var s = parseInt(n[a], t);
    if (isNaN(s)) return null;
    r.push(s);
  }
  return r;
}
function dy(e, t, n) {
  var r = V2(e, t);
  if (r === null) return null;
  for (var a = [], s = [1], i = 0; i < r.length; i++)
    r[i] && (a = hc(a, jf(r[i], s, n), n)), s = jf(t, s, n);
  for (var o = "", i = a.length - 1; i >= 0; i--)
    o += a[i].toString(n);
  return o === "" && (o = "0"), o;
}
function B2(e, t) {
  var n = t && t.prefix === !1, r = dy(e, 10, 16);
  return r ? n ? r : "0x" + r : null;
}
function H2(e) {
  return e.substring(0, 2) === "0x" && (e = e.substring(2)), e = e.toLowerCase(), dy(e, 16, 10);
}
var G2 = {
  hexToDec: H2,
  decToHex: B2
}, K2 = Ke && Ke.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), W2 = Ke && Ke.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), J2 = Ke && Ke.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.hasOwnProperty.call(e, n) && K2(t, e, n);
  return W2(t, e), t;
}, fy = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.getShortcutUrl = yt.getShortcutHash = Ku = yt.writeVdf = xi = yt.readVdf = void 0;
const X2 = fy(U2), Y2 = J2(z2), Z2 = fy(q2), Q2 = G2;
function eD(e) {
  const t = e.nextUInt8();
  if (t === 8)
    return {
      type: t
    };
  const n = e.nextStringZero();
  let r;
  switch (t) {
    case 0: {
      r = my(e);
      break;
    }
    case 1: {
      r = e.nextStringZero("utf-8");
      break;
    }
    case 2: {
      r = e.nextUInt32LE();
      break;
    }
  }
  return {
    type: t,
    name: n,
    value: r
  };
}
function my(e) {
  const t = {};
  for (; ; ) {
    const n = eD(e);
    if (n.type === 8)
      break;
    t[n.name] = n.value;
  }
  return t;
}
function tD(e, t) {
  const n = new X2.default(e);
  return t && n.seek(t), my(n);
}
var xi = yt.readVdf = tD;
function Es(e, t) {
  const n = Buffer.allocUnsafe(1);
  n.writeUInt8(e), t.push(n);
}
function nD(e, t) {
  const n = Buffer.allocUnsafe(4);
  n.writeUInt32LE(e), t.push(n);
}
function ss(e, t) {
  if (e.indexOf("\0") !== -1)
    throw new Error('Strings in VDF files cannot have null chars ("\\0")');
  t.push(Buffer.from(e, "utf-8")), Es(0, t);
}
function hy(e, t) {
  for (const r of Object.keys(e)) {
    const a = e[r];
    if (typeof a == "number")
      Es(2, t), ss(r, t), nD(a, t);
    else if (typeof a == "string")
      Es(1, t), ss(r, t), ss(a, t);
    else if (typeof a == "object")
      Es(0, t), ss(r, t), hy(a, t);
    else
      throw new Error(`Type at ${r} (${typeof a}) is not allowed in VDF files. VDF files can only contain numbers, strings, or objects`);
  }
  const n = Buffer.allocUnsafe(1);
  n.writeUInt8(
    8
    /* MapEnd */
  ), t.push(n);
}
function rD(e) {
  const t = [];
  return hy(e, t), Buffer.concat(t);
}
var Ku = yt.writeVdf = rD;
let Ao;
function vy(e) {
  Ao = Ao || Y2.crc(32, 79764919, 4294967295, 4294967295, !0);
  const t = new Z2.default(Ao(e) | 2147483648, 33554432);
  return Q2.hexToDec(t.toOctetString());
}
yt.getShortcutHash = vy;
function aD(e, t) {
  return "steam://rungameid/" + vy(t + e);
}
yt.getShortcutUrl = aD;
var xr = {};
const To = {
  INT: /^\-?\d+$/,
  FLOAT: /^\-?\d+\.\d+$/,
  BOOLEAN: /^(true|false)$/i
};
function sD(e, t) {
  if (typeof e != "string")
    throw new TypeError("VDF.parse: Expecting parameter to be a string");
  t = {
    types: typeof t == "boolean" ? t : typeof t == "object" && "types" in t ? t.types : !0,
    arrayify: typeof t == "object" && "arrayify" in t ? t.arrayify : !0,
    conditionals: typeof t == "object" && "conditionals" in t ? t.conditionals : void 0
  }, t.conditionals && !Array.isArray(t.conditionals) && typeof t.conditionals == "string" && (t.conditionals = [t.conditionals]);
  for (var n = e.split(`
`), r = {}, a = [r], s = !1, i = !1, o = new RegExp(
    '^[ \\t]*("((?:\\\\.|[^\\\\"])+)"|([a-zA-Z0-9\\-\\_]+))([ \\t]*("((?:\\\\.|[^\\\\"])*)(")?|([a-zA-Z0-9\\-\\_.]+)))?(?:[ \\t]*\\[(\\!?\\$[A-Z0-9]+(?:(?:[\\|]{2}|[\\&]{2})\\!?\\$[A-Z0-9]+)*)\\])?'
    // conditionals
  ), c = -1, u = n.length, l, p, m = function() {
    if (p && p.length) {
      var J = p.shift();
      return i || (J = J.trim()), J;
    }
    for (var T = n[++c]; !i && T !== void 0 && (T = T.trim()) && (T == "" || T[0] == "/"); )
      T = n[++c];
    if (T === void 0)
      return !1;
    var F = -1;
    e: for (var L = 0; L < T.length; L++)
      switch (T.charAt(L)) {
        case '"':
          T.charAt(L - 1) != "\\" && (i = !i);
          break;
        case "/":
          if (!i) {
            F = L;
            break e;
          }
          break;
        case "{":
          i || (T = T.slice(0, L) + `
{
` + T.slice(L + 1), L += 2);
          break;
        case "}":
          i || (T = T.slice(0, L) + `
}
` + T.slice(L + 1), L += 2);
          break;
      }
    return F > -1 && (T = T.substr(0, F)), p = T.split(`
`), m();
  }; (l = m()) !== !1; )
    if (!(l == "" || l[0] == "/")) {
      if (l[0] == "{") {
        s = !1;
        continue;
      }
      if (s)
        throw new SyntaxError("VDF.parse: invalid syntax on line " + (c + 1) + ` (expected opening bracket, empty unquoted values are not allowed):
` + l);
      if (l[0] == "}") {
        Array.isArray(a[a.length - 2]) && a.pop(), a.pop();
        continue;
      }
      for (; ; ) {
        var h = o.exec(l);
        if (h === null)
          throw new SyntaxError("VDF.parse: invalid syntax on line " + (c + 1) + `:
` + l);
        var g = h[2] !== void 0 ? h[2] : h[3], y = h[6] !== void 0 ? h[6] : h[8];
        if (y === void 0) {
          if (a[a.length - 1][g] === void 0)
            a[a.length - 1][g] = {}, a.push(a[a.length - 1][g]);
          else if (a[a.length - 1][g] !== void 0 && !Array.isArray(a[a.length - 1][g]))
            t.arrayify ? (a[a.length - 1][g] = [a[a.length - 1][g], {}], a.push(a[a.length - 1][g]), a.push(a[a.length - 1][1])) : a.push(a[a.length - 1][g]);
          else if (a[a.length - 1][g] !== void 0 && Array.isArray(a[a.length - 1][g])) {
            if (!t.arrayify)
              throw new Error("VDF.parse: this code block should never be reached with arrayify set to false! [1]");
            a.push(a[a.length - 1][g]), a[a.length - 1].push({}), a.push(a[a.length - 1][a[a.length - 1].length - 1]);
          }
          s = !0;
        } else {
          if (h[7] === void 0 && h[8] === void 0) {
            if (c + 1 >= u)
              throw new SyntaxError("VDF.parse: un-closed quotes at end of file");
            l += `
` + m();
            continue;
          }
          if (t.conditionals !== void 0 && Array.isArray(t.conditionals) && h[9]) {
            for (var v = h[9], f = new RegExp("^(\\|\\||&&)?(!)?\\$([A-Z0-9]+)"), $ = !1; v; ) {
              var E = f.exec(v);
              if (E === null || !E[3])
                throw new SyntaxError("VDF.parse: encountered an incorrect conditional: " + v);
              v = v.replace(E[0], "").trim();
              var O = E[1], A = E[2] && E[2] === "!", M = E[3], X = t.conditionals.indexOf(M) !== -1, C = A ? !X : X;
              !O || O === "||" ? $ = $ || C : $ = $ && C;
            }
            if (!$) {
              if (l = l.replace(h[0], ""), !l || l[0] == "/") break;
              continue;
            }
          }
          if (t.types && (To.INT.test(y) ? y = parseInt(y) : To.FLOAT.test(y) ? y = parseFloat(y) : To.BOOLEAN.test(y) && (y = y.toLowerCase() == "true")), a[a.length - 1][g] === void 0)
            a[a.length - 1][g] = y;
          else if (a[a.length - 1][g] !== void 0 && !Array.isArray(a[a.length - 1][g]))
            t.arrayify ? a[a.length - 1][g] = [a[a.length - 1][g], y] : a[a.length - 1][g] = y;
          else if (a[a.length - 1][g] !== void 0 && Array.isArray(a[a.length - 1][g])) {
            if (!t.arrayify)
              throw new Error("VDF.parse: this code block should never be reached with arrayify set to false! [2]");
            a[a.length - 1][g].push(y);
          }
        }
        if (s || (l = l.replace(h[0], "").trim(), !l || l[0] == "/") || (l = l.replace(/^\s*\[\!?\$[A-Z0-9]+(?:(?:[\|]{2}|[\&]{2})\!?\$[A-Z0-9]+)*\]/, "").trim(), !l || l[0] == "/")) break;
      }
    }
  if (a.length != 1) throw new SyntaxError("VDF.parse: open parentheses somewhere");
  return r;
}
function iD(e, t) {
  if (typeof e != "object")
    throw new TypeError("VDF.stringify: First input parameter is not an object");
  return t = {
    pretty: typeof t == "boolean" ? t : typeof t == "object" && "pretty" in t ? t.pretty : !1,
    indent: typeof t == "object" && "indent" in t ? t.indent : "	"
  }, Ss(e, t, 0);
}
function Ss(e, t, n) {
  if (typeof e != "object")
    throw new TypeError("VDF.stringify: a key has value of type other than string or object: " + typeof e);
  var r = t.indent, a = "", s = "";
  if (t.pretty)
    for (var i = 0; i < n; i++)
      s += r;
  for (var o in e)
    typeof e[o] == "object" ? Array.isArray(e[o]) ? e[o].forEach(function(c) {
      typeof c != "object" ? (_element = {}, _element[o] = c, a += Ss(_element, t, n)) : a += [s, '"', o, `"
`, s, `{
`, Ss(c, t, n + 1), s, `}
`].join("");
    }) : a += [s, '"', o, `"
`, s, `{
`, Ss(e[o], t, n + 1), s, `}
`].join("") : a += [s, '"', o, '" "', String(e[o]), `"
`].join("");
  return a;
}
var yy = xr.parse = sD, oD = xr.stringify = iD;
class Ps {
  apiKey;
  baseUrl = "https://www.steamgriddb.com/api/v2";
  constructor(t) {
    this.apiKey = t;
  }
  get headers() {
    return { Authorization: `Bearer ${this.apiKey}` };
  }
  async searchGame(t) {
    return (await _e.get(`${this.baseUrl}/search/autocomplete/${encodeURIComponent(t)}`, { headers: this.headers })).data.data[0];
  }
  async getAssets(t) {
    const [n, r, a, s, i] = await Promise.all([
      _e.get(`${this.baseUrl}/grids/game/${t}?dimensions=600x900,342x482`, { headers: this.headers }),
      _e.get(`${this.baseUrl}/grids/game/${t}?dimensions=920x430,460x215`, { headers: this.headers }),
      _e.get(`${this.baseUrl}/heroes/game/${t}`, { headers: this.headers }),
      _e.get(`${this.baseUrl}/logos/game/${t}`, { headers: this.headers }),
      _e.get(`${this.baseUrl}/icons/game/${t}`, { headers: this.headers })
    ]);
    return {
      grid: n.data.data[0]?.url,
      gridHorizontal: r.data.data[0]?.url,
      hero: a.data.data[0]?.url,
      logo: s.data.data[0]?.url,
      icon: i.data.data[0]?.url
    };
  }
  async getAlternativeAssets(t, n) {
    let r = "", a = "";
    return n === "grid" ? (r = "grids", a = "?dimensions=600x900,342x482") : n === "gridHorizontal" ? (r = "grids", a = "?dimensions=920x430,460x215") : n === "hero" ? r = "heroes" : n === "logo" ? r = "logos" : n === "icon" && (r = "icons"), (await _e.get(`${this.baseUrl}/${r}/game/${t}${a}`, { headers: this.headers })).data.data.map((i) => i.url);
  }
  async downloadImage(t, n) {
    const r = await _e({
      url: t,
      method: "GET",
      responseType: "arraybuffer"
    });
    await Re.writeFile(n, r.data);
  }
}
async function gy() {
  const e = [
    Y.join(ct.homedir(), ".steam/steam"),
    Y.join(ct.homedir(), ".local/share/Steam"),
    Y.join(ct.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam")
  ];
  for (const t of e)
    if (Pe(Y.join(t, "config", "config.vdf"))) return t;
  return e[0];
}
async function cD(e, t) {
  if (!t || t === "Nenhum") return;
  const n = await gy(), r = Y.join(n, "config/config.vdf"), a = `${r}.bak`;
  if (!Pe(r)) return;
  await Re.copyFile(r, a);
  const s = await Re.readFile(r, "utf-8"), i = yy(s);
  i.InstallConfigStore || (i.InstallConfigStore = {}), i.InstallConfigStore.Software || (i.InstallConfigStore.Software = {}), i.InstallConfigStore.Software.Valve || (i.InstallConfigStore.Software.Valve = {}), i.InstallConfigStore.Software.Valve.Steam || (i.InstallConfigStore.Software.Valve.Steam = {}), i.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping || (i.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping = {}), i.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping[e.toString()] = {
    name: t,
    config: "",
    priority: "250"
  };
  const o = oD(i, !0);
  await Re.writeFile(r, o);
}
async function Xr(e, t, n) {
  if (e.startsWith("http"))
    await n.downloadImage(e, t);
  else {
    const r = e.replace("steam-asset://", "");
    Pe(r) && r !== t && await Re.copyFile(r, t);
  }
}
async function lD(e) {
  const { exePath: t, gameName: n, sgdbApiKey: r, launchOptions: a, protonVersion: s, customArt: i, oldAppName: o } = e, c = await gy(), u = Y.join(c, "userdata"), p = (await Dr()).steam32Id;
  if (!p)
    throw new Error("Nenhum Perfil da Steam foi selecionado nas Configurações.");
  const m = Y.join(u, p, "config/shortcuts.vdf"), h = Y.join(u, p, "config/grid"), g = `\0${n}\0${t}`, y = (Gu.str(g) | 2147483648) >>> 0;
  await Re.mkdir(h, { recursive: !0 });
  const v = new Ps(r);
  let f = "";
  if (i)
    i.grid && await Xr(i.grid, Y.join(h, `${y}p.png`), v), i.gridHorizontal && await Xr(i.gridHorizontal, Y.join(h, `${y}.png`), v), i.hero && await Xr(i.hero, Y.join(h, `${y}_hero.png`), v), i.logo && await Xr(i.logo, Y.join(h, `${y}_logo.png`), v), i.icon && (f = Y.join(h, `${y}_icon.png`), await Xr(i.icon, f, v));
  else {
    const C = await v.searchGame(n);
    if (C) {
      const J = await v.getAssets(C.id);
      J.grid && await v.downloadImage(J.grid, Y.join(h, `${y}p.png`)), J.gridHorizontal && await v.downloadImage(J.gridHorizontal, Y.join(h, `${y}.png`)), J.hero && await v.downloadImage(J.hero, Y.join(h, `${y}_hero.png`)), J.logo && await v.downloadImage(J.logo, Y.join(h, `${y}_logo.png`)), J.icon && (f = Y.join(h, `${y}_icon.png`), await v.downloadImage(J.icon, f));
    }
  }
  let $ = { shortcuts: {} };
  try {
    if (Pe(m)) {
      const C = await Re.readFile(m);
      $ = (xi || yt?.readVdf)(C);
    }
  } catch {
    console.log("Iniciando novo arquivo.");
  }
  const E = {
    appid: y,
    AppName: n,
    Exe: `"${t}"`,
    StartDir: `"${Y.dirname(t)}/"`,
    icon: f,
    ShortcutPath: "",
    LaunchOptions: a || "",
    IsHidden: 0,
    AllowDesktopConfig: 1,
    AllowOverlay: 1,
    OpenVR: 0,
    Devkit: 0,
    DevkitGameID: "",
    LastPlayTime: 0,
    tags: {}
  }, O = {};
  let A = 0;
  $.shortcuts && Object.keys($.shortcuts).forEach((C) => {
    const J = $.shortcuts[C], T = o || n;
    J.AppName !== T && J.appname !== T && (O[A++] = J);
  }), O[A] = E, $.shortcuts = O;
  const X = (Ku || yt?.writeVdf)($);
  try {
    const { execSync: C } = await import("child_process");
    C("pkill -9 -x steam || killall -9 steam || flatpak kill com.valvesoftware.Steam || true");
  } catch {
  }
  return await Re.writeFile(m, X), s && await cD(y, s), { success: !0, appId: y };
}
async function Ei() {
  const e = [
    Y.join(ct.homedir(), ".steam/steam"),
    Y.join(ct.homedir(), ".local/share/Steam"),
    Y.join(ct.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam")
  ];
  for (const t of e)
    if (Pe(Y.join(t, "config", "config.vdf"))) return t;
  return e[0];
}
async function uD() {
  const e = await Ei(), t = Y.join(e, "userdata");
  if (!Pe(t)) return [];
  const n = await Dr(), r = await Re.readdir(t), a = n.steam32Id || r.find((l) => l !== "0" && l !== "anonymous") || r[0];
  if (!a) return [];
  const s = Y.join(t, a, "config/shortcuts.vdf"), i = Y.join(t, a, "config/grid");
  if (!Pe(s)) return [];
  const o = Y.join(e, "config/config.vdf");
  let c = {};
  try {
    if (Pe(o)) {
      const l = await Re.readFile(o, "utf-8");
      c = xr.parse(l);
    }
  } catch {
  }
  const u = c?.InstallConfigStore?.Software?.Valve?.Steam?.CompatibilityMapping || {};
  try {
    const l = await Re.readFile(s), h = (xi || yt?.readVdf)(l).shortcuts || {};
    return Object.values(h).map((y) => {
      const v = (y.Exe || y.exe || "").replace(/"/g, ""), f = `\0${y.AppName || y.appname}\0${v}`, $ = (Gu.str(f) | 2147483648) >>> 0, E = u[$.toString()]?.name || "Nenhum";
      return {
        appId: $,
        name: y.AppName || y.appname,
        exe: y.Exe || y.exe,
        launchOptions: y.LaunchOptions || y.launchoptions || "",
        proton: E,
        art: {
          grid: Pe(Y.join(i, `${$}p.png`)) ? `steam-asset://${Y.join(i, `${$}p.png`)}` : null,
          gridHorizontal: Pe(Y.join(i, `${$}.png`)) ? `steam-asset://${Y.join(i, `${$}.png`)}` : null,
          hero: Pe(Y.join(i, `${$}_hero.png`)) ? `steam-asset://${Y.join(i, `${$}_hero.png`)}` : null,
          logo: Pe(Y.join(i, `${$}_logo.png`)) ? `steam-asset://${Y.join(i, `${$}_logo.png`)}` : null,
          icon: Pe(Y.join(i, `${$}_icon.png`)) ? `steam-asset://${Y.join(i, `${$}_icon.png`)}` : y.icon && Pe(y.icon) ? `steam-asset://${y.icon}` : null
        }
      };
    });
  } catch {
    return [];
  }
}
async function pD(e, t, n) {
  const r = await Ei(), a = Y.join(r, "userdata"), s = await Re.readdir(a), i = s.find((l) => l !== "0" && l !== "anonymous") || s[0], o = Y.join(a, i, "config/grid");
  await Re.mkdir(o, { recursive: !0 });
  let c = "";
  t === "grid" ? c = `${e}p.png` : t === "gridHorizontal" ? c = `${e}.png` : t === "hero" ? c = `${e}_hero.png` : t === "logo" && (c = `${e}_logo.png`);
  const u = Y.join(o, c);
  return await Re.copyFile(n, u), { success: !0, path: u };
}
async function dD(e) {
  const { getConfig: t } = await Promise.resolve().then(() => Yt), n = await t(), r = await Ei(), a = Y.join(r, "userdata"), s = await Re.readdir(a), i = n.steam32Id || s.find(($) => $ !== "0" && $ !== "anonymous") || s[0], o = Y.join(a, i, "config/shortcuts.vdf"), c = Y.join(a, i, "config/grid");
  if (!Pe(o)) return { success: !1, error: "Arquivo não encontrado." };
  const u = await Re.readFile(o), p = (xi || yt?.readVdf)(u), m = Number(e), h = {};
  let g = 0;
  p.shortcuts && Object.keys(p.shortcuts).forEach(($) => {
    const E = p.shortcuts[$], O = (E.Exe || E.exe || "").replace(/"/g, ""), A = `\0${E.AppName || E.appname}\0${O}`;
    (Gu.str(A) | 2147483648) >>> 0 !== m && (h[g++] = E);
  }), p.shortcuts = h;
  const v = (Ku || yt?.writeVdf)(p);
  try {
    const { execSync: $ } = await import("child_process");
    $("pkill -9 steam || flatpak kill com.valvesoftware.Steam || true");
  } catch {
  }
  await Re.writeFile(o, v);
  const f = [
    Y.join(c, `${e}p.png`),
    Y.join(c, `${e}.png`),
    Y.join(c, `${e}_hero.png`),
    Y.join(c, `${e}_logo.png`),
    Y.join(c, `${e}_icon.png`)
  ];
  for (const $ of f)
    Pe($) && await Re.unlink($);
  return { success: !0 };
}
async function fD() {
  const e = await Ei(), t = Y.join(e, "compatibilitytools.d"), n = /* @__PURE__ */ new Map([
    ["Nenhum", "Nenhum"],
    ["proton_experimental", "Proton Experimental"]
  ]), r = [e];
  try {
    const i = Y.join(e, "steamapps/libraryfolders.vdf");
    if (Pe(i)) {
      const o = await Re.readFile(i, "utf-8"), u = xr.parse(o).libraryfolders || {};
      Object.values(u).forEach((l) => {
        l.path && typeof l.path == "string" && r.push(l.path);
      });
    }
  } catch (i) {
    console.error("Erro ao ler libraryfolders.vdf:", i);
  }
  for (const i of r)
    try {
      const o = Y.join(i, "steamapps/common");
      if (Pe(o)) {
        const c = await Re.readdir(o);
        for (const u of c)
          if (u.toLowerCase().includes("proton")) {
            let l = u.toLowerCase().replace(/ /g, "_").replace(/\./g, "");
            u === "Proton Experimental" && (l = "proton_experimental"), n.set(l, u);
          }
      }
    } catch (o) {
      console.error(`Erro ao ler common path em ${i}:`, o);
    }
  const a = async (i) => {
    try {
      if (Pe(i)) {
        const o = await Re.readdir(i);
        for (const c of o) {
          const u = Y.join(i, c, "compatibilitytool.vdf");
          let l = c, p = c;
          if (Pe(u)) {
            const m = await Re.readFile(u, "utf-8"), h = xr.parse(m);
            h?.compatibilitytools?.compat_tools && (l = Object.keys(h.compatibilitytools.compat_tools)[0], p = h.compatibilitytools.compat_tools[l]?.display_name || c);
          }
          n.set(l, p);
        }
      }
    } catch {
    }
  };
  await a(t);
  const s = Y.join(ct.homedir(), ".local/share/Steam/compatibilitytools.d");
  return s !== t && await a(s), Array.from(n.entries()).map(([i, o]) => ({ value: i, label: o }));
}
async function by(e, t) {
  try {
    const n = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${t}&appid=${e}`, r = await _e.get(n);
    return r.data && r.data.game && r.data.game.availableGameStats && r.data.game.availableGameStats.achievements ? r.data.game.availableGameStats.achievements : [];
  } catch (n) {
    return console.error(`Erro ao buscar conquistas da Steam para AppID ${e}:`, n), [];
  }
}
async function mD() {
  const e = [
    ne.join(yn.homedir(), ".steam/steam"),
    ne.join(yn.homedir(), ".local/share/Steam"),
    ne.join(yn.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam")
  ];
  for (const t of e)
    if (_c(t)) return t;
  return e[0];
}
async function hD() {
  const e = await mD(), t = [e];
  try {
    const n = ne.join(e, "steamapps/libraryfolders.vdf");
    if (_c(n)) {
      const r = await Gf.readFile(n, "utf-8"), s = xr.parse(r).libraryfolders || {};
      Object.values(s).forEach((i) => {
        i.path && typeof i.path == "string" && t.push(i.path);
      });
    }
  } catch (n) {
    console.error("Erro ao ler libraryfolders.vdf no goldbergParser:", n);
  }
  return t;
}
async function vD(e, t, n) {
  const r = [];
  if (n && r.push(n), t) {
    const i = ne.dirname(t);
    r.push(
      ne.join(i, "Goldberg SteamEmu Saves", e, "achievements.json"),
      ne.join(i, "steam_settings", "saves", e, "achievements.json")
      // Another common pattern
    );
  }
  r.push(
    ne.join(yn.homedir(), ".config/Goldberg SteamEmu Saves", e, "achievements.json"),
    ne.join(yn.homedir(), ".local/share/Goldberg SteamEmu Saves", e, "achievements.json"),
    ne.join(yn.homedir(), ".config/GSE", e, "achievements.json")
  );
  const a = await hD();
  for (const i of a) {
    const o = ne.join(i, "steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves", e, "achievements.json");
    r.push(o);
  }
  let s = "";
  for (const i of r)
    if (_c(i)) {
      s = i;
      break;
    }
  if (!s)
    return [];
  try {
    const i = await Gf.readFile(s, "utf-8"), o = JSON.parse(i), c = [];
    if (Array.isArray(o))
      o.forEach((u) => {
        (u.earned || u.achieved) && c.push(u.name || u.id);
      });
    else
      for (const [u, l] of Object.entries(o)) {
        const p = l;
        (p.earned || p.achieved) && c.push(u);
      }
    return c;
  } catch (i) {
    return console.error("Falha ao parsear achievements.json:", i), [];
  }
}
async function yD(e, t, n, r) {
  const a = await vD(e, n, r);
  if (!t)
    throw new Error("Steam Web API Key não configurada.");
  let s = e;
  const { getRealAppIdCache: i } = await Promise.resolve().then(() => Yt), o = await i(e);
  if (o)
    s = o;
  else if (r) {
    const u = ne.basename(ne.dirname(r));
    /^\d+$/.test(u) && (s = u);
  }
  const c = await by(s, t);
  return !c || c.length === 0 ? [] : c.map((u) => {
    const l = a.includes(u.name);
    return {
      ...u,
      unlocked: l,
      currentIcon: l ? u.icon : u.icongray
    };
  });
}
async function gD(e) {
  try {
    return (await _e.get("https://www.steamgriddb.com/api/v2/games/id/1", {
      headers: {
        Authorization: `Bearer ${e}`
      }
    })).status === 200 ? { valid: !0 } : { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}
async function bD(e) {
  try {
    const t = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${e}&appid=440`;
    return (await _e.get(t)).status === 200 ? { valid: !0 } : { valid: !1 };
  } catch (t) {
    return t.response && (t.response.status === 401 || t.response.status === 403) ? { valid: !1 } : { valid: !1 };
  }
}
async function $D() {
  const e = [
    Y.join(ct.homedir(), ".steam/steam/config/loginusers.vdf"),
    Y.join(ct.homedir(), ".local/share/Steam/config/loginusers.vdf")
  ], t = Y.join(ct.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/config/loginusers.vdf");
  let n = "", r = "none";
  for (const a of e)
    if (Pe(a)) {
      n = a, r = "native";
      break;
    }
  if (!n && Pe(t) && (n = t, r = "flatpak"), !n)
    return { users: [], installType: "none" };
  try {
    const a = await Re.readFile(n, "utf-8"), s = yy(a);
    if (!s || !s.users)
      return { users: [], installType: r };
    const i = [];
    for (const o in s.users) {
      const c = s.users[o], u = (BigInt(o) - 76561197960265728n).toString();
      i.push({
        steam32Id: u,
        steam64Id: o,
        accountName: c.AccountName || "Unknown",
        personaName: c.PersonaName || "Unknown",
        mostRecent: c.MostRecent === "1"
      });
    }
    return { users: i, installType: r };
  } catch (a) {
    return console.error("Error parsing loginusers.vdf:", a), { users: [], installType: "none" };
  }
}
async function vc(e, t, n) {
  if (t > n) return null;
  try {
    const r = await Re.readdir(e, { withFileTypes: !0 });
    for (const a of r) {
      const s = Y.join(e, a.name);
      if (a.isDirectory()) {
        const i = await vc(s, t + 1, n);
        if (i) return i;
      } else if (a.isFile() && a.name.toLowerCase() === "achievements.json" && s.includes("Goldberg SteamEmu Saves"))
        return s;
    }
  } catch {
  }
  return null;
}
async function _D(e) {
  const t = await oy(e);
  if (t && Pe(t))
    return t;
  const n = [
    Y.join(ct.homedir(), ".steam/steam/steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves"),
    Y.join(ct.homedir(), ".local/share/Steam/steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves"),
    Y.join(ct.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves")
  ];
  for (const r of n)
    if (Pe(r)) {
      const a = await vc(r, 0, 3);
      if (a)
        return await mc(e, a), a;
    } else {
      const a = r.replace("Goldberg SteamEmu Saves", "");
      if (Pe(a)) {
        const s = await vc(a, 0, 4);
        if (s)
          return await mc(e, s), s;
      }
    }
  return null;
}
const wt = {
  FILE_TYPE: "files",
  DIR_TYPE: "directories",
  FILE_DIR_TYPE: "files_directories",
  EVERYTHING_TYPE: "all"
}, yc = {
  root: ".",
  fileFilter: (e) => !0,
  directoryFilter: (e) => !0,
  type: wt.FILE_TYPE,
  lstat: !1,
  depth: 2147483648,
  alwaysStat: !1,
  highWaterMark: 4096
};
Object.freeze(yc);
const $y = "READDIRP_RECURSIVE_ERROR", wD = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", $y]), kf = [
  wt.DIR_TYPE,
  wt.EVERYTHING_TYPE,
  wt.FILE_DIR_TYPE,
  wt.FILE_TYPE
], xD = /* @__PURE__ */ new Set([
  wt.DIR_TYPE,
  wt.EVERYTHING_TYPE,
  wt.FILE_DIR_TYPE
]), ED = /* @__PURE__ */ new Set([
  wt.EVERYTHING_TYPE,
  wt.FILE_DIR_TYPE,
  wt.FILE_TYPE
]), SD = (e) => wD.has(e.code), PD = process.platform === "win32", Nf = (e) => !0, If = (e) => {
  if (e === void 0)
    return Nf;
  if (typeof e == "function")
    return e;
  if (typeof e == "string") {
    const t = e.trim();
    return (n) => n.basename === t;
  }
  if (Array.isArray(e)) {
    const t = e.map((n) => n.trim());
    return (n) => t.some((r) => n.basename === r);
  }
  return Nf;
};
class RD extends Yy {
  parents;
  reading;
  parent;
  _stat;
  _maxDepth;
  _wantsDir;
  _wantsFile;
  _wantsEverything;
  _root;
  _isDirent;
  _statsProp;
  _rdOptions;
  _fileFilter;
  _directoryFilter;
  constructor(t = {}) {
    super({
      objectMode: !0,
      autoDestroy: !0,
      highWaterMark: t.highWaterMark
    });
    const n = { ...yc, ...t }, { root: r, type: a } = n;
    this._fileFilter = If(n.fileFilter), this._directoryFilter = If(n.directoryFilter);
    const s = n.lstat ? Co : Ys;
    PD ? this._stat = (i) => s(i, { bigint: !0 }) : this._stat = s, this._maxDepth = n.depth != null && Number.isSafeInteger(n.depth) ? n.depth : yc.depth, this._wantsDir = a ? xD.has(a) : !1, this._wantsFile = a ? ED.has(a) : !1, this._wantsEverything = a === wt.EVERYTHING_TYPE, this._root = Yu(r), this._isDirent = !n.alwaysStat, this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent }, this.parents = [this._exploreDir(r, 1)], this.reading = !1, this.parent = void 0;
  }
  async _read(t) {
    if (!this.reading) {
      this.reading = !0;
      try {
        for (; !this.destroyed && t > 0; ) {
          const n = this.parent, r = n && n.files;
          if (r && r.length > 0) {
            const { path: a, depth: s } = n, i = r.splice(0, t).map((c) => this._formatEntry(c, a)), o = await Promise.all(i);
            for (const c of o) {
              if (!c)
                continue;
              if (this.destroyed)
                return;
              const u = await this._getEntryType(c);
              u === "directory" && this._directoryFilter(c) ? (s <= this._maxDepth && this.parents.push(this._exploreDir(c.fullPath, s + 1)), this._wantsDir && (this.push(c), t--)) : (u === "file" || this._includeAsFile(c)) && this._fileFilter(c) && this._wantsFile && (this.push(c), t--);
            }
          } else {
            const a = this.parents.pop();
            if (!a) {
              this.push(null);
              break;
            }
            if (this.parent = await a, this.destroyed)
              return;
          }
        }
      } catch (n) {
        this.destroy(n);
      } finally {
        this.reading = !1;
      }
    }
  }
  async _exploreDir(t, n) {
    let r;
    try {
      r = await Kf(t, this._rdOptions);
    } catch (a) {
      this._onError(a);
    }
    return { files: r, depth: n, path: t };
  }
  async _formatEntry(t, n) {
    let r;
    const a = this._isDirent ? t.name : t;
    try {
      const s = Yu(Vy(n, a));
      r = { path: By(this._root, s), fullPath: s, basename: a }, r[this._statsProp] = this._isDirent ? t : await this._stat(s);
    } catch (s) {
      this._onError(s);
      return;
    }
    return r;
  }
  _onError(t) {
    SD(t) && !this.destroyed ? this.emit("warn", t) : this.destroy(t);
  }
  async _getEntryType(t) {
    if (!t && this._statsProp in t)
      return "";
    const n = t[this._statsProp];
    if (n.isFile())
      return "file";
    if (n.isDirectory())
      return "directory";
    if (n && n.isSymbolicLink()) {
      const r = t.fullPath;
      try {
        const a = await cs(r), s = await Co(a);
        if (s.isFile())
          return "file";
        if (s.isDirectory()) {
          const i = a.length;
          if (r.startsWith(a) && r.substr(i, 1) === Hy) {
            const o = new Error(`Circular symlink detected: "${r}" points to "${a}"`);
            return o.code = $y, this._onError(o);
          }
          return "directory";
        }
      } catch (a) {
        return this._onError(a), "";
      }
    }
  }
  _includeAsFile(t) {
    const n = t && t[this._statsProp];
    return n && this._wantsEverything && !n.isDirectory();
  }
}
function OD(e, t = {}) {
  let n = t.entryType || t.type;
  if (n === "both" && (n = wt.FILE_DIR_TYPE), n && (t.type = n), e) {
    if (typeof e != "string")
      throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
    if (n && !kf.includes(n))
      throw new Error(`readdirp: Invalid type passed. Use one of ${kf.join(", ")}`);
  } else throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
  return t.root = e, new RD(t);
}
const AD = "data", _y = "end", TD = "close", Wu = () => {
}, Si = process.platform, wy = Si === "win32", jD = Si === "darwin", kD = Si === "linux", ND = Si === "freebsd", ID = Jy() === "OS400", De = {
  ALL: "all",
  READY: "ready",
  ADD: "add",
  CHANGE: "change",
  ADD_DIR: "addDir",
  UNLINK: "unlink",
  UNLINK_DIR: "unlinkDir",
  RAW: "raw",
  ERROR: "error"
}, jt = De, CD = "watch", DD = { lstat: Co, stat: Ys }, Cn = "listeners", Rs = "errHandlers", fr = "rawEmitters", FD = [Cn, Rs, fr], LD = /* @__PURE__ */ new Set([
  "3dm",
  "3ds",
  "3g2",
  "3gp",
  "7z",
  "a",
  "aac",
  "adp",
  "afdesign",
  "afphoto",
  "afpub",
  "ai",
  "aif",
  "aiff",
  "alz",
  "ape",
  "apk",
  "appimage",
  "ar",
  "arj",
  "asf",
  "au",
  "avi",
  "bak",
  "baml",
  "bh",
  "bin",
  "bk",
  "bmp",
  "btif",
  "bz2",
  "bzip2",
  "cab",
  "caf",
  "cgm",
  "class",
  "cmx",
  "cpio",
  "cr2",
  "cur",
  "dat",
  "dcm",
  "deb",
  "dex",
  "djvu",
  "dll",
  "dmg",
  "dng",
  "doc",
  "docm",
  "docx",
  "dot",
  "dotm",
  "dra",
  "DS_Store",
  "dsk",
  "dts",
  "dtshd",
  "dvb",
  "dwg",
  "dxf",
  "ecelp4800",
  "ecelp7470",
  "ecelp9600",
  "egg",
  "eol",
  "eot",
  "epub",
  "exe",
  "f4v",
  "fbs",
  "fh",
  "fla",
  "flac",
  "flatpak",
  "fli",
  "flv",
  "fpx",
  "fst",
  "fvt",
  "g3",
  "gh",
  "gif",
  "graffle",
  "gz",
  "gzip",
  "h261",
  "h263",
  "h264",
  "icns",
  "ico",
  "ief",
  "img",
  "ipa",
  "iso",
  "jar",
  "jpeg",
  "jpg",
  "jpgv",
  "jpm",
  "jxr",
  "key",
  "ktx",
  "lha",
  "lib",
  "lvp",
  "lz",
  "lzh",
  "lzma",
  "lzo",
  "m3u",
  "m4a",
  "m4v",
  "mar",
  "mdi",
  "mht",
  "mid",
  "midi",
  "mj2",
  "mka",
  "mkv",
  "mmr",
  "mng",
  "mobi",
  "mov",
  "movie",
  "mp3",
  "mp4",
  "mp4a",
  "mpeg",
  "mpg",
  "mpga",
  "mxu",
  "nef",
  "npx",
  "numbers",
  "nupkg",
  "o",
  "odp",
  "ods",
  "odt",
  "oga",
  "ogg",
  "ogv",
  "otf",
  "ott",
  "pages",
  "pbm",
  "pcx",
  "pdb",
  "pdf",
  "pea",
  "pgm",
  "pic",
  "png",
  "pnm",
  "pot",
  "potm",
  "potx",
  "ppa",
  "ppam",
  "ppm",
  "pps",
  "ppsm",
  "ppsx",
  "ppt",
  "pptm",
  "pptx",
  "psd",
  "pya",
  "pyc",
  "pyo",
  "pyv",
  "qt",
  "rar",
  "ras",
  "raw",
  "resources",
  "rgb",
  "rip",
  "rlc",
  "rmf",
  "rmvb",
  "rpm",
  "rtf",
  "rz",
  "s3m",
  "s7z",
  "scpt",
  "sgi",
  "shar",
  "snap",
  "sil",
  "sketch",
  "slk",
  "smv",
  "snk",
  "so",
  "stl",
  "suo",
  "sub",
  "swf",
  "tar",
  "tbz",
  "tbz2",
  "tga",
  "tgz",
  "thmx",
  "tif",
  "tiff",
  "tlz",
  "ttc",
  "ttf",
  "txz",
  "udf",
  "uvh",
  "uvi",
  "uvm",
  "uvp",
  "uvs",
  "uvu",
  "viv",
  "vob",
  "war",
  "wav",
  "wax",
  "wbmp",
  "wdp",
  "weba",
  "webm",
  "webp",
  "whl",
  "wim",
  "wm",
  "wma",
  "wmv",
  "wmx",
  "woff",
  "woff2",
  "wrm",
  "wvx",
  "xbm",
  "xif",
  "xla",
  "xlam",
  "xls",
  "xlsb",
  "xlsm",
  "xlsx",
  "xlt",
  "xltm",
  "xltx",
  "xm",
  "xmind",
  "xpi",
  "xpm",
  "xwd",
  "xz",
  "z",
  "zip",
  "zipx"
]), MD = (e) => LD.has(se.extname(e).slice(1).toLowerCase()), gc = (e, t) => {
  e instanceof Set ? e.forEach(t) : t(e);
}, pa = (e, t, n) => {
  let r = e[t];
  r instanceof Set || (e[t] = r = /* @__PURE__ */ new Set([r])), r.add(n);
}, UD = (e) => (t) => {
  const n = e[t];
  n instanceof Set ? n.clear() : delete e[t];
}, da = (e, t, n) => {
  const r = e[t];
  r instanceof Set ? r.delete(n) : r === n && delete e[t];
}, xy = (e) => e instanceof Set ? e.size === 0 : !e, Os = /* @__PURE__ */ new Map();
function Cf(e, t, n, r, a) {
  const s = (i, o) => {
    n(e), a(i, o, { watchedPath: e }), o && e !== o && As(se.resolve(e, o), Cn, se.join(e, o));
  };
  try {
    return Ky(e, {
      persistent: t.persistent
    }, s);
  } catch (i) {
    r(i);
    return;
  }
}
const As = (e, t, n, r, a) => {
  const s = Os.get(e);
  s && gc(s[t], (i) => {
    i(n, r, a);
  });
}, zD = (e, t, n, r) => {
  const { listener: a, errHandler: s, rawEmitter: i } = r;
  let o = Os.get(t), c;
  if (!n.persistent)
    return c = Cf(e, n, a, s, i), c ? c.close.bind(c) : void 0;
  if (o)
    pa(o, Cn, a), pa(o, Rs, s), pa(o, fr, i);
  else {
    if (c = Cf(
      e,
      n,
      As.bind(null, t, Cn),
      s,
      // no need to use broadcast here
      As.bind(null, t, fr)
    ), !c)
      return;
    c.on(jt.ERROR, async (u) => {
      const l = As.bind(null, t, Rs);
      if (o && (o.watcherUnusable = !0), wy && u.code === "EPERM")
        try {
          await (await Zy(e, "r")).close(), l(u);
        } catch {
        }
      else
        l(u);
    }), o = {
      listeners: a,
      errHandlers: s,
      rawEmitters: i,
      watcher: c
    }, Os.set(t, o);
  }
  return () => {
    da(o, Cn, a), da(o, Rs, s), da(o, fr, i), xy(o.listeners) && (o.watcher.close(), Os.delete(t), FD.forEach(UD(o)), o.watcher = void 0, Object.freeze(o));
  };
}, jo = /* @__PURE__ */ new Map(), qD = (e, t, n, r) => {
  const { listener: a, rawEmitter: s } = r;
  let i = jo.get(t);
  const o = i && i.options;
  return o && (o.persistent < n.persistent || o.interval > n.interval) && (Qu(t), i = void 0), i ? (pa(i, Cn, a), pa(i, fr, s)) : (i = {
    listeners: a,
    rawEmitters: s,
    options: n,
    watcher: Gy(t, n, (c, u) => {
      gc(i.rawEmitters, (p) => {
        p(jt.CHANGE, t, { curr: c, prev: u });
      });
      const l = c.mtimeMs;
      (c.size !== u.size || l > u.mtimeMs || l === 0) && gc(i.listeners, (p) => p(e, c));
    })
  }, jo.set(t, i)), () => {
    da(i, Cn, a), da(i, fr, s), xy(i.listeners) && (jo.delete(t), Qu(t), i.options = i.watcher = void 0, Object.freeze(i));
  };
};
class VD {
  fsw;
  _boundHandleError;
  constructor(t) {
    this.fsw = t, this._boundHandleError = (n) => t._handleError(n);
  }
  /**
   * Watch file for changes with fs_watchFile or fs_watch.
   * @param path to file or dir
   * @param listener on fs change
   * @returns closer for the watcher instance
   */
  _watchWithNodeFs(t, n) {
    const r = this.fsw.options, a = se.dirname(t), s = se.basename(t);
    this.fsw._getWatchedDir(a).add(s);
    const o = se.resolve(t), c = {
      persistent: r.persistent
    };
    n || (n = Wu);
    let u;
    if (r.usePolling) {
      const l = r.interval !== r.binaryInterval;
      c.interval = l && MD(s) ? r.binaryInterval : r.interval, u = qD(t, o, c, {
        listener: n,
        rawEmitter: this.fsw._emitRaw
      });
    } else
      u = zD(t, o, c, {
        listener: n,
        errHandler: this._boundHandleError,
        rawEmitter: this.fsw._emitRaw
      });
    return u;
  }
  /**
   * Watch a file and emit add event if warranted.
   * @returns closer for the watcher instance
   */
  _handleFile(t, n, r) {
    if (this.fsw.closed)
      return;
    const a = se.dirname(t), s = se.basename(t), i = this.fsw._getWatchedDir(a);
    let o = n;
    if (i.has(s))
      return;
    const c = async (l, p) => {
      if (this.fsw._throttle(CD, t, 5)) {
        if (!p || p.mtimeMs === 0)
          try {
            const m = await Ys(t);
            if (this.fsw.closed)
              return;
            const h = m.atimeMs, g = m.mtimeMs;
            if ((!h || h <= g || g !== o.mtimeMs) && this.fsw._emit(jt.CHANGE, t, m), (jD || kD || ND) && o.ino !== m.ino) {
              this.fsw._closeFile(l), o = m;
              const y = this._watchWithNodeFs(t, c);
              y && this.fsw._addPathCloser(l, y);
            } else
              o = m;
          } catch {
            this.fsw._remove(a, s);
          }
        else if (i.has(s)) {
          const m = p.atimeMs, h = p.mtimeMs;
          (!m || m <= h || h !== o.mtimeMs) && this.fsw._emit(jt.CHANGE, t, p), o = p;
        }
      }
    }, u = this._watchWithNodeFs(t, c);
    if (!(r && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(t)) {
      if (!this.fsw._throttle(jt.ADD, t, 0))
        return;
      this.fsw._emit(jt.ADD, t, n);
    }
    return u;
  }
  /**
   * Handle symlinks encountered while reading a dir.
   * @param entry returned by readdirp
   * @param directory path of dir being read
   * @param path of this item
   * @param item basename of this item
   * @returns true if no more processing is needed for this entry.
   */
  async _handleSymlink(t, n, r, a) {
    if (this.fsw.closed)
      return;
    const s = t.fullPath, i = this.fsw._getWatchedDir(n);
    if (!this.fsw.options.followSymlinks) {
      this.fsw._incrReadyCount();
      let o;
      try {
        o = await cs(r);
      } catch {
        return this.fsw._emitReady(), !0;
      }
      return this.fsw.closed ? void 0 : (i.has(a) ? this.fsw._symlinkPaths.get(s) !== o && (this.fsw._symlinkPaths.set(s, o), this.fsw._emit(jt.CHANGE, r, t.stats)) : (i.add(a), this.fsw._symlinkPaths.set(s, o), this.fsw._emit(jt.ADD, r, t.stats)), this.fsw._emitReady(), !0);
    }
    if (this.fsw._symlinkPaths.has(s))
      return !0;
    this.fsw._symlinkPaths.set(s, !0);
  }
  _handleRead(t, n, r, a, s, i, o) {
    t = se.join(t, "");
    const c = a ? `${t}:${a}` : t;
    if (o = this.fsw._throttle("readdir", c, 1e3), !o)
      return;
    const u = this.fsw._getWatchedDir(r.path), l = /* @__PURE__ */ new Set();
    let p = this.fsw._readdirp(t, {
      fileFilter: (m) => r.filterPath(m),
      directoryFilter: (m) => r.filterDir(m)
    });
    if (p)
      return p.on(AD, async (m) => {
        if (this.fsw.closed) {
          p = void 0;
          return;
        }
        const h = m.path;
        let g = se.join(t, h);
        if (l.add(h), !(m.stats.isSymbolicLink() && await this._handleSymlink(m, t, g, h))) {
          if (this.fsw.closed) {
            p = void 0;
            return;
          }
          (h === a || !a && !u.has(h)) && (this.fsw._incrReadyCount(), g = se.join(s, se.relative(s, g)), this._addToNodeFs(g, n, r, i + 1));
        }
      }).on(jt.ERROR, this._boundHandleError), new Promise((m, h) => {
        if (!p)
          return h();
        p.once(_y, () => {
          if (this.fsw.closed) {
            p = void 0;
            return;
          }
          const g = o ? o.clear() : !1;
          m(void 0), u.getChildren().filter((y) => y !== t && !l.has(y)).forEach((y) => {
            this.fsw._remove(t, y);
          }), p = void 0, g && this._handleRead(t, !1, r, a, s, i, o);
        });
      });
  }
  /**
   * Read directory to add / remove files from `@watched` list and re-read it on change.
   * @param dir fs path
   * @param stats
   * @param initialAdd
   * @param depth relative to user-supplied path
   * @param target child path targeted for watch
   * @param wh Common watch helpers for this path
   * @param realpath
   * @returns closer for the watcher instance.
   */
  async _handleDir(t, n, r, a, s, i, o) {
    const c = this.fsw._getWatchedDir(se.dirname(t)), u = c.has(se.basename(t));
    !(r && this.fsw.options.ignoreInitial) && !s && !u && this.fsw._emit(jt.ADD_DIR, t, n), c.add(se.basename(t)), this.fsw._getWatchedDir(t);
    let l, p;
    const m = this.fsw.options.depth;
    if ((m == null || a <= m) && !this.fsw._symlinkPaths.has(o)) {
      if (!s && (await this._handleRead(t, r, i, s, t, a, l), this.fsw.closed))
        return;
      p = this._watchWithNodeFs(t, (h, g) => {
        g && g.mtimeMs === 0 || this._handleRead(h, !1, i, s, t, a, l);
      });
    }
    return p;
  }
  /**
   * Handle added file, directory, or glob pattern.
   * Delegates call to _handleFile / _handleDir after checks.
   * @param path to file or ir
   * @param initialAdd was the file added at watch instantiation?
   * @param priorWh depth relative to user-supplied path
   * @param depth Child path actually targeted for watch
   * @param target Child path actually targeted for watch
   */
  async _addToNodeFs(t, n, r, a, s) {
    const i = this.fsw._emitReady;
    if (this.fsw._isIgnored(t) || this.fsw.closed)
      return i(), !1;
    const o = this.fsw._getWatchHelpers(t);
    r && (o.filterPath = (c) => r.filterPath(c), o.filterDir = (c) => r.filterDir(c));
    try {
      const c = await DD[o.statMethod](o.watchPath);
      if (this.fsw.closed)
        return;
      if (this.fsw._isIgnored(o.watchPath, c))
        return i(), !1;
      const u = this.fsw.options.followSymlinks;
      let l;
      if (c.isDirectory()) {
        const p = se.resolve(t), m = u ? await cs(t) : t;
        if (this.fsw.closed || (l = await this._handleDir(o.watchPath, c, n, a, s, o, m), this.fsw.closed))
          return;
        p !== m && m !== void 0 && this.fsw._symlinkPaths.set(p, m);
      } else if (c.isSymbolicLink()) {
        const p = u ? await cs(t) : t;
        if (this.fsw.closed)
          return;
        const m = se.dirname(o.watchPath);
        if (this.fsw._getWatchedDir(m).add(o.watchPath), this.fsw._emit(jt.ADD, o.watchPath, c), l = await this._handleDir(m, c, n, a, t, o, p), this.fsw.closed)
          return;
        p !== void 0 && this.fsw._symlinkPaths.set(se.resolve(t), p);
      } else
        l = this._handleFile(o.watchPath, c, n);
      return i(), l && this.fsw._addPathCloser(t, l), !1;
    } catch (c) {
      if (this.fsw._handleError(c))
        return i(), t;
    }
  }
}
/*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
const ko = "/", BD = "//", Ey = ".", HD = "..", GD = "string", KD = /\\/g, Sy = /\/\//g, WD = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, JD = /^\.[/\\]/;
function Ks(e) {
  return Array.isArray(e) ? e : [e];
}
const No = (e) => typeof e == "object" && e !== null && !(e instanceof RegExp);
function XD(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => e === t : e instanceof RegExp ? (t) => e.test(t) : typeof e == "object" && e !== null ? (t) => {
    if (e.path === t)
      return !0;
    if (e.recursive) {
      const n = se.relative(e.path, t);
      return n ? !n.startsWith("..") && !se.isAbsolute(n) : !1;
    }
    return !1;
  } : () => !1;
}
function YD(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  e = se.normalize(e), e = e.replace(/\\/g, "/");
  let t = !1;
  return e.startsWith("//") && (t = !0), e = e.replace(Sy, "/"), t && (e = "/" + e), e;
}
function ZD(e, t, n) {
  const r = YD(t);
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (s(r, n))
      return !0;
  }
  return !1;
}
function QD(e, t) {
  if (e == null)
    throw new TypeError("anymatch: specify first argument");
  const r = Ks(e).map((a) => XD(a));
  return (a, s) => ZD(r, a, s);
}
const Df = (e) => {
  const t = Ks(e).flat();
  if (!t.every((n) => typeof n === GD))
    throw new TypeError(`Non-string provided as watch path: ${t}`);
  return t.map(Py);
}, Ff = (e) => {
  let t = e.replace(KD, ko), n = !1;
  return t.startsWith(BD) && (n = !0), t = t.replace(Sy, ko), n && (t = ko + t), t;
}, Py = (e) => Ff(se.normalize(Ff(e))), Lf = (e = "") => (t) => typeof t == "string" ? Py(se.isAbsolute(t) ? t : se.join(e, t)) : t, eF = (e, t) => se.isAbsolute(e) ? e : se.join(t, e), tF = Object.freeze(/* @__PURE__ */ new Set());
class nF {
  path;
  _removeWatcher;
  items;
  constructor(t, n) {
    this.path = t, this._removeWatcher = n, this.items = /* @__PURE__ */ new Set();
  }
  add(t) {
    const { items: n } = this;
    n && t !== Ey && t !== HD && n.add(t);
  }
  async remove(t) {
    const { items: n } = this;
    if (!n || (n.delete(t), n.size > 0))
      return;
    const r = this.path;
    try {
      await Kf(r);
    } catch {
      this._removeWatcher && this._removeWatcher(se.dirname(r), se.basename(r));
    }
  }
  has(t) {
    const { items: n } = this;
    if (n)
      return n.has(t);
  }
  getChildren() {
    const { items: t } = this;
    return t ? [...t.values()] : [];
  }
  dispose() {
    this.items.clear(), this.path = "", this._removeWatcher = Wu, this.items = tF, Object.freeze(this);
  }
}
const rF = "stat", aF = "lstat";
class sF {
  fsw;
  path;
  watchPath;
  fullWatchPath;
  dirParts;
  followSymlinks;
  statMethod;
  constructor(t, n, r) {
    this.fsw = r;
    const a = t;
    this.path = t = t.replace(JD, ""), this.watchPath = a, this.fullWatchPath = se.resolve(a), this.dirParts = [], this.dirParts.forEach((s) => {
      s.length > 1 && s.pop();
    }), this.followSymlinks = n, this.statMethod = n ? rF : aF;
  }
  entryPath(t) {
    return se.join(this.watchPath, se.relative(this.watchPath, t.fullPath));
  }
  filterPath(t) {
    const { stats: n } = t;
    if (n && n.isSymbolicLink())
      return this.filterDir(t);
    const r = this.entryPath(t);
    return this.fsw._isntIgnored(r, n) && this.fsw._hasReadPermissions(n);
  }
  filterDir(t) {
    return this.fsw._isntIgnored(this.entryPath(t), t.stats);
  }
}
class Ry extends Xy {
  closed;
  options;
  _closers;
  _ignoredPaths;
  _throttled;
  _streams;
  _symlinkPaths;
  _watched;
  _pendingWrites;
  _pendingUnlinks;
  _readyCount;
  _emitReady;
  _closePromise;
  _userIgnored;
  _readyEmitted;
  _emitRaw;
  _boundRemove;
  _nodeFsHandler;
  // Not indenting methods for history sake; for now.
  constructor(t = {}) {
    super(), this.closed = !1, this._closers = /* @__PURE__ */ new Map(), this._ignoredPaths = /* @__PURE__ */ new Set(), this._throttled = /* @__PURE__ */ new Map(), this._streams = /* @__PURE__ */ new Set(), this._symlinkPaths = /* @__PURE__ */ new Map(), this._watched = /* @__PURE__ */ new Map(), this._pendingWrites = /* @__PURE__ */ new Map(), this._pendingUnlinks = /* @__PURE__ */ new Map(), this._readyCount = 0, this._readyEmitted = !1;
    const n = t.awaitWriteFinish, r = { stabilityThreshold: 2e3, pollInterval: 100 }, a = {
      // Defaults
      persistent: !0,
      ignoreInitial: !1,
      ignorePermissionErrors: !1,
      interval: 100,
      binaryInterval: 300,
      followSymlinks: !0,
      usePolling: !1,
      // useAsync: false,
      atomic: !0,
      // NOTE: overwritten later (depends on usePolling)
      ...t,
      // Change format
      ignored: t.ignored ? Ks(t.ignored) : Ks([]),
      awaitWriteFinish: n === !0 ? r : typeof n == "object" ? { ...r, ...n } : !1
    };
    ID && (a.usePolling = !0), a.atomic === void 0 && (a.atomic = !a.usePolling);
    const s = process.env.CHOKIDAR_USEPOLLING;
    if (s !== void 0) {
      const c = s.toLowerCase();
      c === "false" || c === "0" ? a.usePolling = !1 : c === "true" || c === "1" ? a.usePolling = !0 : a.usePolling = !!c;
    }
    const i = process.env.CHOKIDAR_INTERVAL;
    i && (a.interval = Number.parseInt(i, 10));
    let o = 0;
    this._emitReady = () => {
      o++, o >= this._readyCount && (this._emitReady = Wu, this._readyEmitted = !0, process.nextTick(() => this.emit(De.READY)));
    }, this._emitRaw = (...c) => this.emit(De.RAW, ...c), this._boundRemove = this._remove.bind(this), this.options = a, this._nodeFsHandler = new VD(this), Object.freeze(a);
  }
  _addIgnoredPath(t) {
    if (No(t)) {
      for (const n of this._ignoredPaths)
        if (No(n) && n.path === t.path && n.recursive === t.recursive)
          return;
    }
    this._ignoredPaths.add(t);
  }
  _removeIgnoredPath(t) {
    if (this._ignoredPaths.delete(t), typeof t == "string")
      for (const n of this._ignoredPaths)
        No(n) && n.path === t && this._ignoredPaths.delete(n);
  }
  // Public methods
  /**
   * Adds paths to be watched on an existing FSWatcher instance.
   * @param paths_ file or file list. Other arguments are unused
   */
  add(t, n, r) {
    const { cwd: a } = this.options;
    this.closed = !1, this._closePromise = void 0;
    let s = Df(t);
    return a && (s = s.map((i) => eF(i, a))), s.forEach((i) => {
      this._removeIgnoredPath(i);
    }), this._userIgnored = void 0, this._readyCount || (this._readyCount = 0), this._readyCount += s.length, Promise.all(s.map(async (i) => {
      const o = await this._nodeFsHandler._addToNodeFs(i, !r, void 0, 0, n);
      return o && this._emitReady(), o;
    })).then((i) => {
      this.closed || i.forEach((o) => {
        o && this.add(se.dirname(o), se.basename(n || o));
      });
    }), this;
  }
  /**
   * Close watchers or start ignoring events from specified paths.
   */
  unwatch(t) {
    if (this.closed)
      return this;
    const n = Df(t), { cwd: r } = this.options;
    return n.forEach((a) => {
      !se.isAbsolute(a) && !this._closers.has(a) && (r && (a = se.join(r, a)), a = se.resolve(a)), this._closePath(a), this._addIgnoredPath(a), this._watched.has(a) && this._addIgnoredPath({
        path: a,
        recursive: !0
      }), this._userIgnored = void 0;
    }), this;
  }
  /**
   * Close watchers and remove all listeners from watched paths.
   */
  close() {
    if (this._closePromise)
      return this._closePromise;
    this.closed = !0, this.removeAllListeners();
    const t = [];
    return this._closers.forEach((n) => n.forEach((r) => {
      const a = r();
      a instanceof Promise && t.push(a);
    })), this._streams.forEach((n) => n.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = !1, this._watched.forEach((n) => n.dispose()), this._closers.clear(), this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), this._closePromise = t.length ? Promise.all(t).then(() => {
    }) : Promise.resolve(), this._closePromise;
  }
  /**
   * Expose list of watched paths
   * @returns for chaining
   */
  getWatched() {
    const t = {};
    return this._watched.forEach((n, r) => {
      const s = (this.options.cwd ? se.relative(this.options.cwd, r) : r) || Ey;
      t[s] = n.getChildren().sort();
    }), t;
  }
  emitWithAll(t, n) {
    this.emit(t, ...n), t !== De.ERROR && this.emit(De.ALL, t, ...n);
  }
  // Common helpers
  // --------------
  /**
   * Normalize and emit events.
   * Calling _emit DOES NOT MEAN emit() would be called!
   * @param event Type of event
   * @param path File or directory path
   * @param stats arguments to be passed with event
   * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
   */
  async _emit(t, n, r) {
    if (this.closed)
      return;
    const a = this.options;
    wy && (n = se.normalize(n)), a.cwd && (n = se.relative(a.cwd, n));
    const s = [n];
    r != null && s.push(r);
    const i = a.awaitWriteFinish;
    let o;
    if (i && (o = this._pendingWrites.get(n)))
      return o.lastChange = /* @__PURE__ */ new Date(), this;
    if (a.atomic) {
      if (t === De.UNLINK)
        return this._pendingUnlinks.set(n, [t, ...s]), setTimeout(() => {
          this._pendingUnlinks.forEach((c, u) => {
            this.emit(...c), this.emit(De.ALL, ...c), this._pendingUnlinks.delete(u);
          });
        }, typeof a.atomic == "number" ? a.atomic : 100), this;
      t === De.ADD && this._pendingUnlinks.has(n) && (t = De.CHANGE, this._pendingUnlinks.delete(n));
    }
    if (i && (t === De.ADD || t === De.CHANGE) && this._readyEmitted) {
      const c = (u, l) => {
        u ? (t = De.ERROR, s[0] = u, this.emitWithAll(t, s)) : l && (s.length > 1 ? s[1] = l : s.push(l), this.emitWithAll(t, s));
      };
      return this._awaitWriteFinish(n, i.stabilityThreshold, t, c), this;
    }
    if (t === De.CHANGE && !this._throttle(De.CHANGE, n, 50))
      return this;
    if (a.alwaysStat && r === void 0 && (t === De.ADD || t === De.ADD_DIR || t === De.CHANGE)) {
      const c = a.cwd ? se.join(a.cwd, n) : n;
      let u;
      try {
        u = await Ys(c);
      } catch {
      }
      if (!u || this.closed)
        return;
      s.push(u);
    }
    return this.emitWithAll(t, s), this;
  }
  /**
   * Common handler for errors
   * @returns The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
   */
  _handleError(t) {
    const n = t && t.code;
    return t && n !== "ENOENT" && n !== "ENOTDIR" && (!this.options.ignorePermissionErrors || n !== "EPERM" && n !== "EACCES") && this.emit(De.ERROR, t), t || this.closed;
  }
  /**
   * Helper utility for throttling
   * @param actionType type being throttled
   * @param path being acted upon
   * @param timeout duration of time to suppress duplicate actions
   * @returns tracking object or false if action should be suppressed
   */
  _throttle(t, n, r) {
    this._throttled.has(t) || this._throttled.set(t, /* @__PURE__ */ new Map());
    const a = this._throttled.get(t);
    if (!a)
      throw new Error("invalid throttle");
    const s = a.get(n);
    if (s)
      return s.count++, !1;
    let i;
    const o = () => {
      const u = a.get(n), l = u ? u.count : 0;
      return a.delete(n), clearTimeout(i), u && clearTimeout(u.timeoutObject), l;
    };
    i = setTimeout(o, r);
    const c = { timeoutObject: i, clear: o, count: 0 };
    return a.set(n, c), c;
  }
  _incrReadyCount() {
    return this._readyCount++;
  }
  /**
   * Awaits write operation to finish.
   * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
   * @param path being acted upon
   * @param threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
   * @param event
   * @param awfEmit Callback to be called when ready for event to be emitted.
   */
  _awaitWriteFinish(t, n, r, a) {
    const s = this.options.awaitWriteFinish;
    if (typeof s != "object")
      return;
    const i = s.pollInterval;
    let o, c = t;
    this.options.cwd && !se.isAbsolute(t) && (c = se.join(this.options.cwd, t));
    const u = /* @__PURE__ */ new Date(), l = this._pendingWrites;
    function p(m) {
      Wy(c, (h, g) => {
        if (h || !l.has(t)) {
          h && h.code !== "ENOENT" && a(h);
          return;
        }
        const y = Number(/* @__PURE__ */ new Date());
        m && g.size !== m.size && (l.get(t).lastChange = y);
        const v = l.get(t);
        y - v.lastChange >= n ? (l.delete(t), a(void 0, g)) : o = setTimeout(p, i, g);
      });
    }
    l.has(t) || (l.set(t, {
      lastChange: u,
      cancelWait: () => (l.delete(t), clearTimeout(o), r)
    }), o = setTimeout(p, i));
  }
  /**
   * Determines whether user has asked to ignore this path.
   */
  _isIgnored(t, n) {
    if (this.options.atomic && WD.test(t))
      return !0;
    if (!this._userIgnored) {
      const { cwd: r } = this.options, s = (this.options.ignored || []).map(Lf(r)), o = [...[...this._ignoredPaths].map(Lf(r)), ...s];
      this._userIgnored = QD(o);
    }
    return this._userIgnored(t, n);
  }
  _isntIgnored(t, n) {
    return !this._isIgnored(t, n);
  }
  /**
   * Provides a set of common helpers and properties relating to symlink handling.
   * @param path file or directory pattern being watched
   */
  _getWatchHelpers(t) {
    return new sF(t, this.options.followSymlinks, this);
  }
  // Directory helpers
  // -----------------
  /**
   * Provides directory tracking objects
   * @param directory path of the directory
   */
  _getWatchedDir(t) {
    const n = se.resolve(t);
    return this._watched.has(n) || this._watched.set(n, new nF(n, this._boundRemove)), this._watched.get(n);
  }
  // File helpers
  // ------------
  /**
   * Check for read permissions: https://stackoverflow.com/a/11781404/1358405
   */
  _hasReadPermissions(t) {
    return this.options.ignorePermissionErrors ? !0 : !!(Number(t.mode) & 256);
  }
  /**
   * Handles emitting unlink events for
   * files and directories, and via recursion, for
   * files and directories within directories that are unlinked
   * @param directory within which the following item is located
   * @param item      base path of item/directory
   */
  _remove(t, n, r) {
    const a = se.join(t, n), s = se.resolve(a);
    if (r = r ?? (this._watched.has(a) || this._watched.has(s)), !this._throttle("remove", a, 100))
      return;
    !r && this._watched.size === 1 && this.add(t, n, !0), this._getWatchedDir(a).getChildren().forEach((m) => this._remove(a, m));
    const c = this._getWatchedDir(t), u = c.has(n);
    c.remove(n), this._symlinkPaths.has(s) && this._symlinkPaths.delete(s);
    let l = a;
    if (this.options.cwd && (l = se.relative(this.options.cwd, a)), this.options.awaitWriteFinish && this._pendingWrites.has(l) && this._pendingWrites.get(l).cancelWait() === De.ADD)
      return;
    this._watched.delete(a), this._watched.delete(s);
    const p = r ? De.UNLINK_DIR : De.UNLINK;
    u && !this._isIgnored(a) && this._emit(p, a), this._closePath(a);
  }
  /**
   * Closes all watchers for a path
   */
  _closePath(t) {
    this._closeFile(t);
    const n = se.dirname(t);
    this._getWatchedDir(n).remove(se.basename(t));
  }
  /**
   * Closes only file-specific watchers
   */
  _closeFile(t) {
    const n = this._closers.get(t);
    n && (n.forEach((r) => r()), this._closers.delete(t));
  }
  _addPathCloser(t, n) {
    if (!n)
      return;
    let r = this._closers.get(t);
    r || (r = [], this._closers.set(t, r)), r.push(n);
  }
  _readdirp(t, n) {
    if (this.closed)
      return;
    const r = { type: De.ALL, alwaysStat: !0, lstat: !0, ...n, depth: 0 };
    let a = OD(t, r);
    return this._streams.add(a), a.once(TD, () => {
      a = void 0;
    }), a.once(_y, () => {
      a && (this._streams.delete(a), a = void 0);
    }), a;
  }
}
function iF(e, t = {}) {
  const n = new Ry(t);
  return n.add(e), n;
}
const oF = { watch: iF, FSWatcher: Ry }, is = {}, Io = {};
function Mf(e) {
  try {
    if (!Pe(e)) return [];
    const t = Ly(e, "utf-8");
    if (!t.trim()) return [];
    const n = JSON.parse(t);
    return Array.isArray(n) ? n.map(String) : typeof n == "object" && n !== null ? Object.keys(n) : [];
  } catch (t) {
    return console.error(`[AchievementWatcher] Erro ao ler arquivo ${e}:`, t), [];
  }
}
async function cF() {
  console.log("[AchievementWatcher] Inicializando observador de conquistas...");
  try {
    const t = (await Dr()).goldbergCache || {};
    for (const [n, r] of Object.entries(t))
      lF(n, r);
  } catch (e) {
    console.error("[AchievementWatcher] Erro ao inicializar watchers:", e);
  }
}
function lF(e, t) {
  Io[e] && Io[e].close(), is[e] = Mf(t), console.log(`[AchievementWatcher] Monitorando AppID ${e} em ${t} (${is[e].length} conquistas)`);
  const n = oF.watch(t, {
    persistent: !0,
    awaitWriteFinish: {
      stabilityThreshold: 500,
      pollInterval: 100
    }
  });
  n.on("change", async (r) => {
    try {
      const a = Mf(r), s = is[e] || [], i = a.filter((o) => !s.includes(o));
      if (i.length > 0) {
        console.log(`[AchievementWatcher] Novas conquistas detectadas para AppID ${e}:`, i), is[e] = a;
        for (const o of i)
          await uF(e, o);
      }
    } catch (a) {
      console.error(`[AchievementWatcher] Erro no evento change para ${e}:`, a);
    }
  }), n.on("error", (r) => {
    console.error(`[AchievementWatcher] Erro no watcher para ${e}:`, r);
  }), Io[e] = n;
}
async function uF(e, t) {
  let n = "🏆 Conquista Desbloqueada!", r = `ID: ${t}`, a;
  try {
    const i = (await Dr()).steamApiKey;
    if (i) {
      const c = (await by(e, i)).find((u) => u.name === t);
      c && (r = c.displayName, c.icon && (a = await pF(c.icon, e, t)));
    } else
      console.warn("[AchievementWatcher] Steam API Key não configurada. Mostrando notificação genérica.");
  } catch (s) {
    console.error(`[AchievementWatcher] Erro ao buscar dados da conquista ${t}:`, s);
  }
  Ju.isSupported() ? new Ju({
    title: n,
    body: r,
    icon: a,
    silent: !1
    // Tocar som padrão do sistema
  }).show() : console.warn("[AchievementWatcher] Notificações não são suportadas neste sistema.");
}
async function pF(e, t, n) {
  try {
    const r = Y.join(ct.tmpdir(), "non-steam-automation-achievements");
    await Re.mkdir(r, { recursive: !0 });
    const a = `${t}_${n}.jpg`, s = Y.join(r, a);
    if (Pe(s))
      return s;
    const i = await _e.get(e, { responseType: "arraybuffer" });
    return await Re.writeFile(s, Buffer.from(i.data)), s;
  } catch (r) {
    console.error(`[AchievementWatcher] Erro ao baixar ícone de ${e}:`, r);
    return;
  }
}
kt.setName("NonSteamAutomation");
process.platform === "linux" && (kt.setDesktopName("nonsteamautomation.desktop"), kt.setAppUserModelId("com.marcus.nonsteamauto"), kt.commandLine.appendSwitch("disable-gpu-vsync"));
const Oy = ne.dirname(Hf(import.meta.url));
process.env.APP_ROOT = ne.join(Oy, "..");
const bc = process.env.VITE_DEV_SERVER_URL, Ay = ne.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = bc ? ne.join(process.env.APP_ROOT, "public") : Ay;
let Ge = null, os = null, Ty = !1;
zf.registerSchemesAsPrivileged([
  { scheme: "steam-asset", privileges: { bypassCSP: !0, secure: !0, supportFetchAPI: !0 } }
]);
function dF() {
  Ge = new Cy({
    width: 1280,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    icon: ne.join(process.env.VITE_PUBLIC, "icon.png"),
    frame: !1,
    webPreferences: {
      preload: ne.join(Oy, "preload.cjs"),
      nodeIntegration: !1,
      contextIsolation: !0,
      sandbox: !1
    },
    title: "Non-Steam Automation",
    backgroundColor: "#1b2838"
  }), be.on("window-minimize", () => Ge?.minimize()), be.on("window-maximize", () => {
    Ge?.isMaximized() ? Ge?.unmaximize() : Ge?.maximize();
  }), be.on("window-close", () => Ge?.close()), bc ? Ge.loadURL(bc) : Ge.loadFile(ne.join(Ay, "index.html")), Ge.on("close", (e) => {
    !Ty && Hu() && (e.preventDefault(), Ge?.hide());
  });
}
const fF = kt.requestSingleInstanceLock();
fF ? (kt.on("second-instance", () => {
  Ge && (Ge.isVisible() || Ge.show(), Ge.isMinimized() && Ge.restore(), Ge.focus());
}), kt.whenReady().then(() => {
  cF();
  try {
    const e = ne.join(process.env.VITE_PUBLIC, "icon.png");
    os = new jy(e), os.setToolTip("Non-Steam Automation");
    const t = ky.buildFromTemplate([
      { label: "Abrir", click: () => Ge?.show() },
      {
        label: "Encerrar completamente",
        click: () => {
          Ty = !0, kt.quit();
        }
      }
    ]);
    os.setContextMenu(t), os.on("click", () => Ge?.show());
  } catch (e) {
    console.error("Falha ao criar System Tray:", e);
  }
  zf.handle("steam-asset", (e) => {
    const t = Hf(e.url.replace("steam-asset://", "file://"));
    return Ny.fetch("file://" + t);
  }), be.handle("get-api-key", () => sy()), be.handle("save-api-key", async (e, t) => await fc(t)), be.handle("get-config", () => Dr()), be.handle("save-config-data", async (e, t) => await iy(t.key, t.value)), be.handle("get-run-in-background", () => Hu()), be.handle("save-run-in-background", async (e, t) => {
    const { saveRunInBackground: n } = await Promise.resolve().then(() => Yt);
    await n(t);
  }), be.handle("validate-sgdb-key", async (e, t) => await gD(t)), be.handle("validate-steam-key", async (e, t) => await bD(t)), be.handle("get-local-steam-users", () => $D()), be.handle("get-protons", () => fD()), be.handle("get-hybrid-achievements", async (e, t) => await yD(t.appId, t.apiKey, t.exePath, t.achievementsJsonPath)), be.handle("auto-scan-goldberg", async (e, t) => await _D(t)), be.handle("manual-select-goldberg", async (e, t) => {
    const n = await Ri.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Achievements JSON", extensions: ["json"] }]
    });
    if (!n.canceled && n.filePaths.length > 0) {
      const r = n.filePaths[0];
      if (r.toLowerCase().endsWith("achievements.json")) {
        const { saveGoldbergCache: a } = await Promise.resolve().then(() => Yt);
        return await a(t, r), r;
      }
    }
    return null;
  }), be.handle("clear-goldberg-cache", async (e, t) => {
    const { clearGoldbergCache: n } = await Promise.resolve().then(() => Yt);
    return await n(t);
  }), be.handle("get-real-app-id", async (e, t) => {
    const { getRealAppIdCache: n } = await Promise.resolve().then(() => Yt);
    return await n(t);
  }), be.handle("save-real-app-id", async (e, t) => {
    const { saveRealAppIdCache: n } = await Promise.resolve().then(() => Yt);
    return await n(t.appId, t.realAppId), !0;
  }), be.handle("get-achievements-enabled", async (e, t) => {
    const { getAchievementsEnabledCache: n } = await Promise.resolve().then(() => Yt);
    return await n(t);
  }), be.handle("save-achievements-enabled", async (e, t) => {
    const { saveAchievementsEnabledCache: n } = await Promise.resolve().then(() => Yt);
    return await n(t.appId, t.enabled), !0;
  }), be.handle("select-exe", async () => {
    const e = await Ri.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Executables", extensions: ["exe", "x86_64", "bin", "sh", "AppImage"] }]
    });
    return e.canceled ? null : e.filePaths[0];
  }), be.handle("search-sgdb-arts", async (e, { gameName: t, apiKey: n }) => {
    const r = new Ps(n), a = await r.searchGame(t);
    return a ? await r.getAssets(a.id) : null;
  }), be.handle("search-steam-game", async (e, t) => {
    if (!t || t.trim() === "") return [];
    try {
      const n = await _e.get(`https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(t)}&l=portuguese&cc=BR`);
      return n.data && n.data.items ? n.data.items.map((r) => ({
        id: r.id,
        name: r.name,
        tiny_image: r.tiny_image
      })) : [];
    } catch (n) {
      return console.error("Failed to search Steam games:", n), [];
    }
  }), be.handle("get-alternative-arts", async (e, { gameName: t, apiKey: n, type: r }) => {
    const a = new Ps(n), s = await a.searchGame(t);
    return s ? await a.getAlternativeAssets(s.id, r) : [];
  }), be.handle("download-temp-art", async (e, { url: t }) => {
    const n = ne.join(ct.tmpdir(), "non-steam-automation-temp");
    await Re.mkdir(n, { recursive: !0 });
    const r = `temp_${Date.now()}.png`, a = ne.join(n, r);
    return await new Ps("").downloadImage(t, a), `steam-asset://${a}`;
  }), be.handle("inject-automated-shortcut", async (e, t) => {
    try {
      return t.sgdbApiKey && await fc(t.sgdbApiKey), await lD(t);
    } catch (n) {
      return console.error(n), { success: !1, error: String(n) };
    }
  }), be.handle("get-non-steam-library", () => uD()), be.handle("remove-shortcut", (e, { appId: t }) => dD(t)), be.handle("update-manual-art", (e, t) => pD(t.appId, t.artType, t.sourceFilePath)), be.handle("select-art-file", async () => {
    const e = await Ri.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Images", extensions: ["png", "jpg", "jpeg", "webp"] }]
    });
    return e.canceled ? null : e.filePaths[0];
  }), be.handle("restart-steam", () => new Promise((e) => {
    Qy("pkill -9 -x steam || killall -9 steam || flatpak kill com.valvesoftware.Steam || true", () => {
      setTimeout(async () => {
        const { spawn: t } = await import("child_process");
        t("sh", ["-c", "steam || flatpak run com.valvesoftware.Steam &"], {
          detached: !0,
          stdio: "ignore"
        }).unref(), e({ success: !0 });
      }, 1e3);
    });
  })), be.handle("install-vcredist", async (e, t) => {
    const { installVCRedist: n } = await import("./dependencyManager-C-x0SQxr.js");
    return await n(t, (r) => {
      e.sender.send("vcredist-progress", r);
    });
  }), be.on("open-external-url", (e, t) => {
    Iy.openExternal(t);
  }), dF();
}), kt.on("window-all-closed", () => {
  process.platform !== "darwin" && kt.quit();
})) : kt.quit();
export {
  Ay as R,
  bc as V,
  _e as a
};
