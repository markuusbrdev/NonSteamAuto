import kf, { Notification as Mu, app as Tt, protocol as Nf, Tray as cy, Menu as ly, net as uy, ipcMain as xe, dialog as gi, shell as py, BrowserWindow as dy } from "electron";
import Un from "util";
import Xe, { Readable as fy } from "stream";
import se, { resolve as Uu } from "path";
import Ms from "http";
import Us from "https";
import zs from "url";
import my, { existsSync as Ae, readFileSync as hy } from "fs";
import If from "crypto";
import vy from "net";
import yy from "tls";
import pc from "assert";
import Cf from "tty";
import ot from "os";
import gy, { EventEmitter as by } from "events";
import Df from "http2";
import xt from "zlib";
import * as ue from "node:path";
import ce, { resolve as zu, join as _y, relative as $y, sep as wy } from "node:path";
import { fileURLToPath as Ff } from "node:url";
import Te from "fs/promises";
import Ce from "node:process";
import { promisify as et, isDeepStrictEqual as qu } from "node:util";
import fe, { existsSync as dc, unwatchFile as Vu, watchFile as xy, watch as Ey, stat as Sy } from "node:fs";
import jr from "node:crypto";
import Bu from "node:assert";
import fn, { type as Py } from "node:os";
import { EventEmitter as Ry } from "node:events";
import { Readable as Oy } from "node:stream";
import Lf, { lstat as Po, stat as qs, readdir as Mf, realpath as es, open as Ay } from "node:fs/promises";
import { exec as Ty } from "node:child_process";
function Uf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jy } = Object.prototype, { getPrototypeOf: cr } = Object, { iterator: da, toStringTag: zf } = Symbol, ws = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), sa = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null && n !== Object.prototype; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    if (r.push(n), ws(n, t))
      return !0;
    n = cr(n);
  }
  return !1;
}, ky = (e, t) => e != null && sa(e, t) ? e[t] : void 0, fc = /* @__PURE__ */ ((e) => (t) => {
  const n = jy.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (e) => (e = e.toLowerCase(), (t) => fc(t) === e), Vs = (e) => (t) => typeof t === e, { isArray: jn } = Array, lr = Vs("undefined");
function yr(e) {
  return e !== null && !lr(e) && e.constructor !== null && !lr(e.constructor) && ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qf = Dt("ArrayBuffer");
function Ny(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qf(e.buffer), t;
}
const Iy = Vs("string"), ht = Vs("function"), Vf = Vs("number"), gr = (e) => e !== null && typeof e == "object", Cy = (e) => e === !0 || e === !1, ts = (e) => {
  if (!gr(e))
    return !1;
  const t = cr(e);
  return (t === null || t === Object.prototype || cr(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !sa(e, zf) && !sa(e, da);
}, Dy = (e) => {
  if (!gr(e) || yr(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Fy = Dt("Date"), Ly = Dt("File"), My = (e) => !!(e && typeof e.uri < "u"), Uy = (e) => e && typeof e.getParts < "u", zy = Dt("Blob"), qy = Dt("FileList"), Vy = (e) => gr(e) && ht(e.pipe);
function By() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Hu = By(), Gu = typeof Hu.FormData < "u" ? Hu.FormData : void 0, Hy = (e) => {
  if (!e) return !1;
  if (Gu && e instanceof Gu) return !0;
  const t = cr(e);
  if (!t || t === Object.prototype || !ht(e.append)) return !1;
  const n = fc(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && ht(e.toString) && e.toString() === "[object FormData]";
}, Gy = Dt("URLSearchParams"), [Ky, Wy, Jy, Xy] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Dt), Yy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), jn(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (yr(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let o;
    for (r = 0; r < i; r++)
      o = s[r], t.call(null, e[o], o, e);
  }
}
function Bf(e, t) {
  if (yr(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hf = (e) => !lr(e) && e !== Sn;
function Ro(...e) {
  const { caseless: t, skipUndefined: n } = Hf(this) && this || {}, r = {}, a = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const o = t && typeof i == "string" && Bf(r, i) || i, c = ws(r, o) ? r[o] : void 0;
    ts(c) && ts(s) ? r[o] = Ro(c, s) : ts(s) ? r[o] = Ro({}, s) : jn(s) ? r[o] = s.slice() : (!n || !lr(s)) && (r[o] = s);
  };
  for (let s = 0, i = e.length; s < i; s++) {
    const o = e[s];
    if (!o || yr(o) || (fa(o, a), typeof o != "object" || jn(o)))
      continue;
    const c = Object.getOwnPropertySymbols(o);
    for (let u = 0; u < c.length; u++) {
      const l = c[u];
      lg.call(o, l) && a(o[l], l);
    }
  }
  return r;
}
const Zy = (e, t, n, { allOwnKeys: r } = {}) => (fa(
  t,
  (a, s) => {
    n && ht(a) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Uf(a, n),
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
), e), Qy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), eg = (e, t, n, r) => {
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
}, tg = (e, t, n, r) => {
  let a, s, i;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      i = a[s], (!r || r(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = n !== !1 && cr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ng = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, rg = (e) => {
  if (!e) return null;
  if (jn(e)) return e;
  let t = e.length;
  if (!Vf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ag = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && cr(Uint8Array)), sg = (e, t) => {
  const r = (e && e[da]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, ig = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, og = Dt("HTMLFormElement"), cg = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
  return r.toUpperCase() + a;
}), { propertyIsEnumerable: lg } = Object.prototype, ug = Dt("RegExp"), Gf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  fa(n, (a, s) => {
    let i;
    (i = t(a, s, e)) !== !1 && (r[s] = i || a);
  }), Object.defineProperties(e, r);
}, pg = (e) => {
  Gf(e, (t, n) => {
    if (ht(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (ht(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, dg = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return jn(e) ? r(e) : r(String(e).split(t)), n;
}, fg = () => {
}, mg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function hg(e) {
  return !!(e && ht(e.append) && e[zf] === "FormData" && e[da]);
}
const vg = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (gr(r)) {
      if (t.has(r))
        return;
      if (yr(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const a = jn(r) ? [] : {};
        return fa(r, (s, i) => {
          const o = n(s);
          !lr(o) && (a[i] = o);
        }), t.delete(r), a;
      }
    }
    return r;
  };
  return n(e);
}, yg = Dt("AsyncFunction"), gg = (e) => e && (gr(e) || ht(e)) && ht(e.then) && ht(e.catch), Kf = ((e, t) => e ? setImmediate : t ? ((n, r) => (Sn.addEventListener(
  "message",
  ({ source: a, data: s }) => {
    a === Sn && s === n && r.length && r.shift()();
  },
  !1
), (a) => {
  r.push(a), Sn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ht(Sn.postMessage)), bg = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sn) : typeof process < "u" && process.nextTick || Kf, Wf = (e) => e != null && ht(e[da]), _g = (e) => e != null && sa(e, da) && Wf(e), P = {
  isArray: jn,
  isArrayBuffer: qf,
  isBuffer: yr,
  isFormData: Hy,
  isArrayBufferView: Ny,
  isString: Iy,
  isNumber: Vf,
  isBoolean: Cy,
  isObject: gr,
  isPlainObject: ts,
  isEmptyObject: Dy,
  isReadableStream: Ky,
  isRequest: Wy,
  isResponse: Jy,
  isHeaders: Xy,
  isUndefined: lr,
  isDate: Fy,
  isFile: Ly,
  isReactNativeBlob: My,
  isReactNative: Uy,
  isBlob: zy,
  isRegExp: ug,
  isFunction: ht,
  isStream: Vy,
  isURLSearchParams: Gy,
  isTypedArray: ag,
  isFileList: qy,
  forEach: fa,
  merge: Ro,
  extend: Zy,
  trim: Yy,
  stripBOM: Qy,
  inherits: eg,
  toFlatObject: tg,
  kindOf: fc,
  kindOfTest: Dt,
  endsWith: ng,
  toArray: rg,
  forEachEntry: sg,
  matchAll: ig,
  isHTMLForm: og,
  hasOwnProperty: ws,
  hasOwnProp: ws,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: sa,
  getSafeProp: ky,
  reduceDescriptors: Gf,
  freezeMethods: pg,
  toObjectSet: dg,
  toCamelCase: cg,
  noop: fg,
  toFiniteNumber: mg,
  findKey: Bf,
  global: Sn,
  isContextDefined: Hf,
  isSpecCompliantForm: hg,
  toJSONObject: vg,
  isAsyncFn: yg,
  isThenable: gg,
  setImmediate: Kf,
  asap: bg,
  isIterable: Wf,
  isSafeIterable: _g
}, $g = P.toObjectSet([
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
]), wg = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && $g[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function xg(e) {
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
const Eg = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Sg = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function mc(e, t) {
  return P.isArray(e) ? e.map((n) => mc(n, t)) : xg(String(e).replace(t, ""));
}
const Pg = (e) => mc(e, Eg), Rg = (e) => mc(e, Sg);
function hc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return P.forEach(e.toJSON(), (n, r) => {
    t[r] = Rg(n);
  }), t;
}
const Ku = Symbol("internals");
function kr(e) {
  return e && String(e).trim().toLowerCase();
}
function ns(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(ns) : Pg(String(e));
}
function Og(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ag = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bi(e, t, n, r, a) {
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function Tg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jg(e, t) {
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
      const l = kr(c);
      if (!l)
        return;
      const p = P.findKey(a, l);
      (!p || a[p] === void 0 || u === !0 || u === void 0 && a[p] !== !1) && (a[p || c] = ns(o));
    }
    const i = (o, c) => P.forEach(o, (u, l) => s(u, l, c));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (P.isString(t) && (t = t.trim()) && !Ag(t))
      i(wg(t), n);
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
    if (t = kr(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Og(a);
        if (P.isFunction(n))
          return n.call(this, a, r);
        if (P.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = kr(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(i) {
      if (i = kr(i), i) {
        const o = P.findKey(r, i);
        o && (!n || bi(r, r[o], o, n)) && (delete r[o], a = !0);
      }
    }
    return P.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || bi(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return P.forEach(this, (a, s) => {
      const i = P.findKey(r, s);
      if (i) {
        n[i] = ns(a), delete n[s];
        return;
      }
      const o = t ? Tg(s) : String(s).trim();
      o !== s && delete n[s], n[o] = ns(a), r[o] = !0;
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
    const r = (this[Ku] = this[Ku] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(i) {
      const o = kr(i);
      r[o] || (jg(a, i), r[o] = !0);
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
const kg = "[REDACTED ****]";
function Ng(e) {
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
function Ig(e, t) {
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
      if (!P.isPlainObject(s) && Ng(s))
        return r.pop(), s;
      i = /* @__PURE__ */ Object.create(null);
      for (const [o, c] of Object.entries(s)) {
        const u = n.has(o.toLowerCase()) ? kg : a(c);
        P.isUndefined(u) || (i[o] = u);
      }
    }
    return r.pop(), i;
  };
  return a(e);
}
let D = class Jf extends Error {
  static from(t, n, r, a, s, i) {
    const o = new Jf(t.message, n || t.code, r, a, s);
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
    const t = this.config, n = t && P.hasOwnProp(t, "redact") ? t.redact : void 0, r = P.isArray(n) && n.length > 0 ? Ig(t, n) : P.toJSONObject(t);
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
D.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
D.ERR_BAD_OPTION = "ERR_BAD_OPTION";
D.ECONNABORTED = "ECONNABORTED";
D.ETIMEDOUT = "ETIMEDOUT";
D.ECONNREFUSED = "ECONNREFUSED";
D.ERR_NETWORK = "ERR_NETWORK";
D.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
D.ERR_DEPRECATED = "ERR_DEPRECATED";
D.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
D.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
D.ERR_CANCELED = "ERR_CANCELED";
D.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
D.ERR_INVALID_URL = "ERR_INVALID_URL";
D.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xf = Xe.Stream, Cg = Un, Dg = Ft;
function Ft() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
Cg.inherits(Ft, Xf);
Ft.create = function(e, t) {
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
Object.defineProperty(Ft.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
Ft.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
Ft.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
Ft.prototype.pause = function() {
  this.source.pause();
};
Ft.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach(function(e) {
    this.emit.apply(this, e);
  }.bind(this)), this._bufferedEvents = [];
};
Ft.prototype.pipe = function() {
  var e = Xf.prototype.pipe.apply(this, arguments);
  return this.resume(), e;
};
Ft.prototype._handleEmit = function(e) {
  if (this._released) {
    this.emit.apply(this, e);
    return;
  }
  e[0] === "data" && (this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e);
};
Ft.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(e));
  }
};
var Fg = Un, Yf = Xe.Stream, Wu = Dg, Lg = Le;
function Le() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
Fg.inherits(Le, Yf);
Le.create = function(e) {
  var t = new this();
  e = e || {};
  for (var n in e)
    t[n] = e[n];
  return t;
};
Le.isStreamLike = function(e) {
  return typeof e != "function" && typeof e != "string" && typeof e != "boolean" && typeof e != "number" && !Buffer.isBuffer(e);
};
Le.prototype.append = function(e) {
  var t = Le.isStreamLike(e);
  if (t) {
    if (!(e instanceof Wu)) {
      var n = Wu.create(e, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      e.on("data", this._checkDataSize.bind(this)), e = n;
    }
    this._handleErrors(e), this.pauseStreams && e.pause();
  }
  return this._streams.push(e), this;
};
Le.prototype.pipe = function(e, t) {
  return Yf.prototype.pipe.call(this, e, t), this.resume(), e;
};
Le.prototype._getNext = function() {
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
Le.prototype._realGetNext = function() {
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
    var r = Le.isStreamLike(n);
    r && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }.bind(this));
};
Le.prototype._pipeNext = function(e) {
  this._currentStream = e;
  var t = Le.isStreamLike(e);
  if (t) {
    e.on("end", this._getNext.bind(this)), e.pipe(this, { end: !1 });
    return;
  }
  var n = e;
  this.write(n), this._getNext();
};
Le.prototype._handleErrors = function(e) {
  var t = this;
  e.on("error", function(n) {
    t._emitError(n);
  });
};
Le.prototype.write = function(e) {
  this.emit("data", e);
};
Le.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
Le.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
Le.prototype.end = function() {
  this._reset(), this.emit("end");
};
Le.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
Le.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
Le.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(e));
  }
};
Le.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var e = this;
  this._streams.forEach(function(t) {
    t.dataSize && (e.dataSize += t.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
Le.prototype._emitError = function(e) {
  this._reset(), this.emit("error", e);
};
var Zf = {};
const Mg = {
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
var Ug = Mg;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = Ug, n = se.extname, r = /^\s*([^;\s]*)(?:;|\s|$)/, a = /^text\//i;
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
    Object.keys(t).forEach(function(y) {
      var v = t[y], g = v.extensions;
      if (!(!g || !g.length)) {
        l[y] = g;
        for (var h = 0; h < g.length; h++) {
          var _ = g[h];
          if (p[_]) {
            var x = m.indexOf(t[p[_]].source), O = m.indexOf(v.source);
            if (p[_] !== "application/octet-stream" && (x > O || x === O && p[_].substr(0, 12) === "application/"))
              continue;
          }
          p[_] = y;
        }
      }
    });
  }
})(Zf);
var zg = qg;
function qg(e) {
  var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  t ? t(e) : setTimeout(e, 0);
}
var Ju = zg, Qf = Vg;
function Vg(e) {
  var t = !1;
  return Ju(function() {
    t = !0;
  }), function(r, a) {
    t ? e(r, a) : Ju(function() {
      e(r, a);
    });
  };
}
var em = Bg;
function Bg(e) {
  Object.keys(e.jobs).forEach(Hg.bind(e)), e.jobs = {};
}
function Hg(e) {
  typeof this.jobs[e] == "function" && this.jobs[e]();
}
var Xu = Qf, Gg = em, tm = Kg;
function Kg(e, t, n, r) {
  var a = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[a] = Wg(t, a, e[a], function(s, i) {
    a in n.jobs && (delete n.jobs[a], s ? Gg(n) : n.results[a] = i, r(s, n.results));
  });
}
function Wg(e, t, n, r) {
  var a;
  return e.length == 2 ? a = e(n, Xu(r)) : a = e(n, t, Xu(r)), a;
}
var nm = Jg;
function Jg(e, t) {
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
var Xg = em, Yg = Qf, rm = Zg;
function Zg(e) {
  Object.keys(this.jobs).length && (this.index = this.size, Xg(this), Yg(e)(null, this.results));
}
var Qg = tm, eb = nm, tb = rm, nb = rb;
function rb(e, t, n) {
  for (var r = eb(e); r.index < (r.keyedList || e).length; )
    Qg(e, t, r, function(a, s) {
      if (a) {
        n(a, s);
        return;
      }
      if (Object.keys(r.jobs).length === 0) {
        n(null, r.results);
        return;
      }
    }), r.index++;
  return tb.bind(r, n);
}
var Bs = { exports: {} }, Yu = tm, ab = nm, sb = rm;
Bs.exports = ib;
Bs.exports.ascending = am;
Bs.exports.descending = ob;
function ib(e, t, n, r) {
  var a = ab(e, n);
  return Yu(e, t, a, function s(i, o) {
    if (i) {
      r(i, o);
      return;
    }
    if (a.index++, a.index < (a.keyedList || e).length) {
      Yu(e, t, a, s);
      return;
    }
    r(null, a.results);
  }), sb.bind(a, r);
}
function am(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ob(e, t) {
  return -1 * am(e, t);
}
var sm = Bs.exports, cb = sm, lb = ub;
function ub(e, t, n) {
  return cb(e, t, null, n);
}
var pb = {
  parallel: nb,
  serial: lb,
  serialOrdered: sm
}, im = Object, db = Error, fb = EvalError, mb = RangeError, hb = ReferenceError, vb = SyntaxError, _i, Zu;
function vc() {
  return Zu || (Zu = 1, _i = TypeError), _i;
}
var yb = URIError, gb = Math.abs, bb = Math.floor, _b = Math.max, $b = Math.min, wb = Math.pow, xb = Math.round, Eb = Number.isNaN || function(t) {
  return t !== t;
}, Sb = Eb, Pb = function(t) {
  return Sb(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, Rb = Object.getOwnPropertyDescriptor, rs = Rb;
if (rs)
  try {
    rs([], "length");
  } catch {
    rs = null;
  }
var om = rs, as = Object.defineProperty || !1;
if (as)
  try {
    as({}, "a", { value: 1 });
  } catch {
    as = !1;
  }
var Ob = as, $i, Qu;
function cm() {
  return Qu || (Qu = 1, $i = function() {
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
  }), $i;
}
var wi, ep;
function Ab() {
  if (ep) return wi;
  ep = 1;
  var e = typeof Symbol < "u" && Symbol, t = cm();
  return wi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, wi;
}
var xi, tp;
function lm() {
  return tp || (tp = 1, xi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), xi;
}
var Ei, np;
function um() {
  if (np) return Ei;
  np = 1;
  var e = im;
  return Ei = e.getPrototypeOf || null, Ei;
}
var Tb = "Function.prototype.bind called on incompatible ", jb = Object.prototype.toString, kb = Math.max, Nb = "[object Function]", rp = function(t, n) {
  for (var r = [], a = 0; a < t.length; a += 1)
    r[a] = t[a];
  for (var s = 0; s < n.length; s += 1)
    r[s + t.length] = n[s];
  return r;
}, Ib = function(t, n) {
  for (var r = [], a = n, s = 0; a < t.length; a += 1, s += 1)
    r[s] = t[a];
  return r;
}, Cb = function(e, t) {
  for (var n = "", r = 0; r < e.length; r += 1)
    n += e[r], r + 1 < e.length && (n += t);
  return n;
}, Db = function(t) {
  var n = this;
  if (typeof n != "function" || jb.apply(n) !== Nb)
    throw new TypeError(Tb + n);
  for (var r = Ib(arguments, 1), a, s = function() {
    if (this instanceof a) {
      var l = n.apply(
        this,
        rp(r, arguments)
      );
      return Object(l) === l ? l : this;
    }
    return n.apply(
      t,
      rp(r, arguments)
    );
  }, i = kb(0, n.length - r.length), o = [], c = 0; c < i; c++)
    o[c] = "$" + c;
  if (a = Function("binder", "return function (" + Cb(o, ",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Fb = Db, Hs = Function.prototype.bind || Fb, Si, ap;
function yc() {
  return ap || (ap = 1, Si = Function.prototype.call), Si;
}
var Pi, sp;
function pm() {
  return sp || (sp = 1, Pi = Function.prototype.apply), Pi;
}
var Ri, ip;
function Lb() {
  return ip || (ip = 1, Ri = typeof Reflect < "u" && Reflect && Reflect.apply), Ri;
}
var Oi, op;
function Mb() {
  if (op) return Oi;
  op = 1;
  var e = Hs, t = pm(), n = yc(), r = Lb();
  return Oi = r || e.call(n, t), Oi;
}
var Ai, cp;
function Ub() {
  if (cp) return Ai;
  cp = 1;
  var e = Hs, t = vc(), n = yc(), r = Mb();
  return Ai = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new t("a function is required");
    return r(e, n, s);
  }, Ai;
}
var Ti, lp;
function zb() {
  if (lp) return Ti;
  lp = 1;
  var e = Ub(), t = om, n;
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
  return Ti = r && typeof r.get == "function" ? e([r.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(o) {
      return s(o == null ? o : a(o));
    }
  ) : !1, Ti;
}
var ji, up;
function qb() {
  if (up) return ji;
  up = 1;
  var e = lm(), t = um(), n = zb();
  return ji = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : n ? function(a) {
    return n(a);
  } : null, ji;
}
var Vb = Function.prototype.call, Bb = Object.prototype.hasOwnProperty, Hb = Hs, gc = Hb.call(Vb, Bb), $e, Gb = im, Kb = db, Wb = fb, Jb = mb, Xb = hb, ur = vb, nr = vc(), Yb = yb, Zb = gb, Qb = bb, e_ = _b, t_ = $b, n_ = wb, r_ = xb, a_ = Pb, dm = Function, ki = function(e) {
  try {
    return dm('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, ia = om, s_ = Ob, Ni = function() {
  throw new nr();
}, i_ = ia ? function() {
  try {
    return arguments.callee, Ni;
  } catch {
    try {
      return ia(arguments, "callee").get;
    } catch {
      return Ni;
    }
  }
}() : Ni, qn = Ab()(), He = qb(), o_ = um(), c_ = lm(), fm = pm(), ma = yc(), Wn = {}, l_ = typeof Uint8Array > "u" || !He ? $e : He(Uint8Array), Rn = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? $e : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? $e : ArrayBuffer,
  "%ArrayIteratorPrototype%": qn && He ? He([][Symbol.iterator]()) : $e,
  "%AsyncFromSyncIteratorPrototype%": $e,
  "%AsyncFunction%": Wn,
  "%AsyncGenerator%": Wn,
  "%AsyncGeneratorFunction%": Wn,
  "%AsyncIteratorPrototype%": Wn,
  "%Atomics%": typeof Atomics > "u" ? $e : Atomics,
  "%BigInt%": typeof BigInt > "u" ? $e : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? $e : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? $e : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? $e : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Kb,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Wb,
  "%Float16Array%": typeof Float16Array > "u" ? $e : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? $e : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? $e : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? $e : FinalizationRegistry,
  "%Function%": dm,
  "%GeneratorFunction%": Wn,
  "%Int8Array%": typeof Int8Array > "u" ? $e : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? $e : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? $e : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": qn && He ? He(He([][Symbol.iterator]())) : $e,
  "%JSON%": typeof JSON == "object" ? JSON : $e,
  "%Map%": typeof Map > "u" ? $e : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !qn || !He ? $e : He((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Gb,
  "%Object.getOwnPropertyDescriptor%": ia,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? $e : Promise,
  "%Proxy%": typeof Proxy > "u" ? $e : Proxy,
  "%RangeError%": Jb,
  "%ReferenceError%": Xb,
  "%Reflect%": typeof Reflect > "u" ? $e : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? $e : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !qn || !He ? $e : He((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? $e : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": qn && He ? He(""[Symbol.iterator]()) : $e,
  "%Symbol%": qn ? Symbol : $e,
  "%SyntaxError%": ur,
  "%ThrowTypeError%": i_,
  "%TypedArray%": l_,
  "%TypeError%": nr,
  "%Uint8Array%": typeof Uint8Array > "u" ? $e : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? $e : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? $e : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? $e : Uint32Array,
  "%URIError%": Yb,
  "%WeakMap%": typeof WeakMap > "u" ? $e : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? $e : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? $e : WeakSet,
  "%Function.prototype.call%": ma,
  "%Function.prototype.apply%": fm,
  "%Object.defineProperty%": s_,
  "%Object.getPrototypeOf%": o_,
  "%Math.abs%": Zb,
  "%Math.floor%": Qb,
  "%Math.max%": e_,
  "%Math.min%": t_,
  "%Math.pow%": n_,
  "%Math.round%": r_,
  "%Math.sign%": a_,
  "%Reflect.getPrototypeOf%": c_
};
if (He)
  try {
    null.error;
  } catch (e) {
    var u_ = He(He(e));
    Rn["%Error.prototype%"] = u_;
  }
var p_ = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = ki("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = ki("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = ki("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && He && (n = He(a.prototype));
  }
  return Rn[t] = n, n;
}, pp = {
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
}, ha = Hs, xs = gc, d_ = ha.call(ma, Array.prototype.concat), f_ = ha.call(fm, Array.prototype.splice), dp = ha.call(ma, String.prototype.replace), Es = ha.call(ma, String.prototype.slice), m_ = ha.call(ma, RegExp.prototype.exec), h_ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, v_ = /\\(\\)?/g, y_ = function(t) {
  var n = Es(t, 0, 1), r = Es(t, -1);
  if (n === "%" && r !== "%")
    throw new ur("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new ur("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return dp(t, h_, function(s, i, o, c) {
    a[a.length] = o ? dp(c, v_, "$1") : i || s;
  }), a;
}, g_ = function(t, n) {
  var r = t, a;
  if (xs(pp, r) && (a = pp[r], r = "%" + a[0] + "%"), xs(Rn, r)) {
    var s = Rn[r];
    if (s === Wn && (s = p_(r)), typeof s > "u" && !n)
      throw new nr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: s
    };
  }
  throw new ur("intrinsic " + t + " does not exist!");
}, b_ = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new nr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new nr('"allowMissing" argument must be a boolean');
  if (m_(/^%?[^%]*%?$/, t) === null)
    throw new ur("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = y_(t), a = r.length > 0 ? r[0] : "", s = g_("%" + a + "%", n), i = s.name, o = s.value, c = !1, u = s.alias;
  u && (a = u[0], f_(r, d_([0, 1], u)));
  for (var l = 1, p = !0; l < r.length; l += 1) {
    var m = r[l], f = Es(m, 0, 1), y = Es(m, -1);
    if ((f === '"' || f === "'" || f === "`" || y === '"' || y === "'" || y === "`") && f !== y)
      throw new ur("property names with quotes must have matching quotes");
    if ((m === "constructor" || !p) && (c = !0), a += "." + m, i = "%" + a + "%", xs(Rn, i))
      o = Rn[i];
    else if (o != null) {
      if (!(m in o)) {
        if (!n)
          throw new nr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (ia && l + 1 >= r.length) {
        var v = ia(o, m);
        p = !!v, p && "get" in v && !("originalValue" in v.get) ? o = v.get : o = o[m];
      } else
        p = xs(o, m), o = o[m];
      p && !c && (Rn[i] = o);
    }
  }
  return o;
}, Ii, fp;
function __() {
  if (fp) return Ii;
  fp = 1;
  var e = cm();
  return Ii = function() {
    return e() && !!Symbol.toStringTag;
  }, Ii;
}
var $_ = b_, mp = $_("%Object.defineProperty%", !0), w_ = __()(), x_ = gc, E_ = vc(), Pa = w_ ? Symbol.toStringTag : null, S_ = function(t, n) {
  var r = arguments.length > 2 && !!arguments[2] && arguments[2].force, a = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof r < "u" && typeof r != "boolean" || typeof a < "u" && typeof a != "boolean")
    throw new E_("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Pa && (r || !x_(t, Pa)) && (mp ? mp(t, Pa, {
    configurable: !a,
    enumerable: !1,
    value: n,
    writable: !1
  }) : t[Pa] = n);
}, P_ = function(e, t) {
  return Object.keys(t).forEach(function(n) {
    e[n] = e[n] || t[n];
  }), e;
}, bc = Lg, R_ = Un, Ci = se, O_ = Ms, A_ = Us, T_ = zs.parse, j_ = my, k_ = Xe.Stream, N_ = If, Di = Zf, I_ = pb, C_ = S_, mn = gc, Oo = P_;
function Ee(e) {
  if (!(this instanceof Ee))
    return new Ee(e);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], bc.call(this), e = e || {};
  for (var t in e)
    this[t] = e[t];
}
R_.inherits(Ee, bc);
Ee.LINE_BREAK = `\r
`;
Ee.DEFAULT_CONTENT_TYPE = "application/octet-stream";
Ee.prototype.append = function(e, t, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var r = bc.prototype.append.bind(this);
  if ((typeof t == "number" || t == null) && (t = String(t)), Array.isArray(t)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var a = this._multiPartHeader(e, t, n), s = this._multiPartFooter();
  r(a), r(t), r(s), this._trackLength(a, t, n);
};
Ee.prototype._trackLength = function(e, t, n) {
  var r = 0;
  n.knownLength != null ? r += Number(n.knownLength) : Buffer.isBuffer(t) ? r = t.length : typeof t == "string" && (r = Buffer.byteLength(t)), this._valueLength += r, this._overheadLength += Buffer.byteLength(e) + Ee.LINE_BREAK.length, !(!t || !t.path && !(t.readable && mn(t, "httpVersion")) && !(t instanceof k_)) && (n.knownLength || this._valuesToMeasure.push(t));
};
Ee.prototype._lengthRetriever = function(e, t) {
  mn(e, "fd") ? e.end != null && e.end != 1 / 0 && e.start != null ? t(null, e.end + 1 - (e.start ? e.start : 0)) : j_.stat(e.path, function(n, r) {
    if (n) {
      t(n);
      return;
    }
    var a = r.size - (e.start ? e.start : 0);
    t(null, a);
  }) : mn(e, "httpVersion") ? t(null, Number(e.headers["content-length"])) : mn(e, "httpModule") ? (e.on("response", function(n) {
    e.pause(), t(null, Number(n.headers["content-length"]));
  }), e.resume()) : t("Unknown stream");
};
Ee.prototype._multiPartHeader = function(e, t, n) {
  if (typeof n.header == "string")
    return n.header;
  var r = this._getContentDisposition(t, n), a = this._getContentType(t, n), s = "", i = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(r || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(a || [])
  };
  typeof n.header == "object" && Oo(i, n.header);
  var o;
  for (var c in i)
    if (mn(i, c)) {
      if (o = i[c], o == null)
        continue;
      Array.isArray(o) || (o = [o]), o.length && (s += c + ": " + o.join("; ") + Ee.LINE_BREAK);
    }
  return "--" + this.getBoundary() + Ee.LINE_BREAK + s + Ee.LINE_BREAK;
};
Ee.prototype._getContentDisposition = function(e, t) {
  var n;
  if (typeof t.filepath == "string" ? n = Ci.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e && (e.name || e.path) ? n = Ci.basename(t.filename || e && (e.name || e.path)) : e && e.readable && mn(e, "httpVersion") && (n = Ci.basename(e.client._httpMessage.path || "")), n)
    return 'filename="' + n + '"';
};
Ee.prototype._getContentType = function(e, t) {
  var n = t.contentType;
  return !n && e && e.name && (n = Di.lookup(e.name)), !n && e && e.path && (n = Di.lookup(e.path)), !n && e && e.readable && mn(e, "httpVersion") && (n = e.headers["content-type"]), !n && (t.filepath || t.filename) && (n = Di.lookup(t.filepath || t.filename)), !n && e && typeof e == "object" && (n = Ee.DEFAULT_CONTENT_TYPE), n;
};
Ee.prototype._multiPartFooter = function() {
  return function(e) {
    var t = Ee.LINE_BREAK, n = this._streams.length === 0;
    n && (t += this._lastBoundary()), e(t);
  }.bind(this);
};
Ee.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + Ee.LINE_BREAK;
};
Ee.prototype.getHeaders = function(e) {
  var t, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (t in e)
    mn(e, t) && (n[t.toLowerCase()] = e[t]);
  return n;
};
Ee.prototype.setBoundary = function(e) {
  if (typeof e != "string")
    throw new TypeError("FormData boundary must be a string");
  this._boundary = e;
};
Ee.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
Ee.prototype.getBuffer = function() {
  for (var e = new Buffer.alloc(0), t = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? e = Buffer.concat([e, this._streams[n]]) : e = Buffer.concat([e, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, t.length + 2) !== t) && (e = Buffer.concat([e, Buffer.from(Ee.LINE_BREAK)])));
  return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
};
Ee.prototype._generateBoundary = function() {
  this._boundary = "--------------------------" + N_.randomBytes(12).toString("hex");
};
Ee.prototype.getLengthSync = function() {
  var e = this._overheadLength + this._valueLength;
  return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), e;
};
Ee.prototype.hasKnownLength = function() {
  var e = !0;
  return this._valuesToMeasure.length && (e = !1), e;
};
Ee.prototype.getLength = function(e) {
  var t = this._overheadLength + this._valueLength;
  if (this._streams.length && (t += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(e.bind(this, null, t));
    return;
  }
  I_.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
    if (n) {
      e(n);
      return;
    }
    r.forEach(function(a) {
      t += a;
    }), e(null, t);
  });
};
Ee.prototype.submit = function(e, t) {
  var n, r, a = { method: "post" };
  return typeof e == "string" ? (e = T_(e), r = Oo({
    port: e.port,
    path: e.pathname,
    host: e.hostname,
    protocol: e.protocol
  }, a)) : (r = Oo(e, a), r.port || (r.port = r.protocol === "https:" ? 443 : 80)), r.headers = this.getHeaders(e.headers), r.protocol === "https:" ? n = A_.request(r) : n = O_.request(r), this.getLength(function(s, i) {
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
Ee.prototype._error = function(e) {
  this.error || (this.error = e, this.pause(), this.emit("error", e));
};
Ee.prototype.toString = function() {
  return "[object FormData]";
};
C_(Ee.prototype, "FormData");
var D_ = Ee;
const mm = /* @__PURE__ */ br(D_), hm = 100;
function Ao(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function vm(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fi(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = vm(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function F_(e) {
  return P.isArray(e) && !e.some(Ao);
}
const L_ = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Gs(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (mm || FormData)(), n = P.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(_, x) {
      return !P.isUndefined(x[_]);
    }
  );
  const r = n.metaTokens, a = n.visitor || y, s = n.dots, i = n.indexes, o = n.Blob || typeof Blob < "u" && Blob, c = n.maxDepth === void 0 ? hm : n.maxDepth, u = o && P.isSpecCompliantForm(t), l = [];
  if (!P.isFunction(a))
    throw new TypeError("visitor must be a function");
  function p(h) {
    if (h === null) return "";
    if (P.isDate(h))
      return h.toISOString();
    if (P.isBoolean(h))
      return h.toString();
    if (!u && P.isBlob(h))
      throw new D("Blob is not supported. Use a Buffer instead.");
    if (P.isArrayBuffer(h) || P.isTypedArray(h)) {
      if (u && typeof o == "function")
        return new o([h]);
      if (typeof Buffer < "u")
        return Buffer.from(h);
      throw new D("Blob is not supported. Use a Buffer instead.", D.ERR_NOT_SUPPORT);
    }
    return h;
  }
  function m(h) {
    if (h > c)
      throw new D(
        "Object is too deeply nested (" + h + " levels). Max depth: " + c,
        D.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function f(h, _) {
    if (c === 1 / 0)
      return JSON.stringify(h);
    const x = [];
    return JSON.stringify(h, function(j, q) {
      if (!P.isObject(q))
        return q;
      for (; x.length && x[x.length - 1] !== this; )
        x.pop();
      return x.push(q), m(_ + x.length - 1), q;
    });
  }
  function y(h, _, x) {
    let O = h;
    if (P.isReactNative(t) && P.isReactNativeBlob(h))
      return t.append(Fi(x, _, s), p(h)), !1;
    if (h && !x && typeof h == "object") {
      if (P.endsWith(_, "{}"))
        _ = r ? _ : _.slice(0, -2), h = f(h, 1);
      else if (P.isArray(h) && F_(h) || (P.isFileList(h) || P.endsWith(_, "[]")) && (O = P.toArray(h)))
        return _ = vm(_), O.forEach(function(q, J) {
          !(P.isUndefined(q) || q === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Fi([_], J, s) : i === null ? _ : _ + "[]",
            p(q)
          );
        }), !1;
    }
    return Ao(h) ? !0 : (t.append(Fi(x, _, s), p(h)), !1);
  }
  const v = Object.assign(L_, {
    defaultVisitor: y,
    convertValue: p,
    isVisitable: Ao
  });
  function g(h, _, x = 0) {
    if (!P.isUndefined(h)) {
      if (m(x), l.indexOf(h) !== -1)
        throw new Error("Circular reference detected in " + _.join("."));
      l.push(h), P.forEach(h, function(j, q) {
        (!(P.isUndefined(j) || j === null) && a.call(t, j, P.isString(q) ? q.trim() : q, _, v)) === !0 && g(j, _ ? _.concat(q) : [q], x + 1);
      }), l.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function hp(e) {
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
function ym(e, t) {
  this._pairs = [], e && Gs(e, this, t);
}
const gm = ym.prototype;
gm.append = function(t, n) {
  this._pairs.push([t, n]);
};
gm.toString = function(t) {
  const n = t ? (r) => t.call(this, r, hp) : hp;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function M_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _c(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = P.isFunction(n) ? {
    serialize: n
  } : n, a = P.getSafeProp(r, "encode") || M_, s = P.getSafeProp(r, "serialize");
  let i;
  if (s ? i = s(t, r) : i = P.isURLSearchParams(t) ? t.toString() : new ym(t, r).toString(a), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class vp {
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
const Ks = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, U_ = zs.URLSearchParams, Li = "abcdefghijklmnopqrstuvwxyz", yp = "0123456789", bm = {
  DIGIT: yp,
  ALPHA: Li,
  ALPHA_DIGIT: Li + Li.toUpperCase() + yp
}, z_ = (e = 16, t = bm.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t, a = new Uint32Array(e);
  If.randomFillSync(a);
  for (let s = 0; s < e; s++)
    n += t[a[s] % r];
  return n;
}, q_ = {
  isNode: !0,
  classes: {
    URLSearchParams: U_,
    FormData: mm,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: bm,
  generateString: z_,
  protocols: ["http", "https", "file", "data"]
}, $c = typeof window < "u" && typeof document < "u", To = typeof navigator == "object" && navigator || void 0, V_ = $c && (!To || ["ReactNative", "NativeScript", "NS"].indexOf(To.product) < 0), B_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", H_ = $c && window.location.href || "http://localhost", G_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: $c,
  hasStandardBrowserEnv: V_,
  hasStandardBrowserWebWorkerEnv: B_,
  navigator: To,
  origin: H_
}, Symbol.toStringTag, { value: "Module" })), De = {
  ...G_,
  ...q_
};
function K_(e, t) {
  return Gs(e, new De.classes.URLSearchParams(), {
    visitor: function(n, r, a, s) {
      return De.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const gp = hm;
function _m(e) {
  if (e > gp)
    throw new D(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + gp,
      D.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function W_(e) {
  const t = [], n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    _m(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function J_(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function $m(e) {
  function t(n, r, a, s) {
    _m(s);
    let i = n[s++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), c = s >= n.length;
    return i = !i && P.isArray(a) ? a.length : i, c ? (P.hasOwnProp(a, i) ? a[i] = P.isArray(a[i]) ? a[i].concat(r) : [a[i], r] : a[i] = r, !o) : ((!P.hasOwnProp(a, i) || !P.isObject(a[i])) && (a[i] = []), t(n, r, a[i], s) && P.isArray(a[i]) && (a[i] = J_(a[i])), !o);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, a) => {
      t(W_(r), a, n, 0);
    }), n;
  }
  return null;
}
const Vn = (e, t) => e != null && P.hasOwnProp(e, t) ? e[t] : void 0;
function X_(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const va = {
  transitional: Ks,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = P.isObject(t);
      if (s && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
        return a ? JSON.stringify($m(t)) : t;
      if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
        return t;
      if (P.isArrayBufferView(t))
        return t.buffer;
      if (P.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let o;
      if (s) {
        const c = Vn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return K_(t, c).toString();
        if ((o = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Vn(this, "env"), l = u && u.FormData;
          return Gs(
            o ? { "files[]": t } : t,
            l && new l(),
            c
          );
        }
      }
      return s || a ? (n.setContentType("application/json", !1), X_(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Vn(this, "transitional") || va.transitional, r = n && n.forcedJSONParsing, a = Vn(this, "responseType"), s = a === "json";
      if (P.isResponse(t) || P.isReadableStream(t))
        return t;
      if (t && P.isString(t) && (r && !a || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Vn(this, "parseReviver"));
        } catch (c) {
          if (o)
            throw c.name === "SyntaxError" ? D.from(c, D.ERR_BAD_RESPONSE, this, null, Vn(this, "response")) : c;
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
    FormData: De.classes.FormData,
    Blob: De.classes.Blob
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
  va.headers[e] = {};
});
function Mi(e, t) {
  const n = this || va, r = t || n, a = Ve.from(r.headers);
  let s = r.data;
  return P.forEach(e, function(o) {
    s = o.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function wm(e) {
  return !!(e && e.__CANCEL__);
}
let kn = class extends D {
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
    super(t ?? "canceled", D.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Yn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new D(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? D.ERR_BAD_REQUEST : D.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function Y_(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Z_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const Q_ = /^https?:(?!\/\/)/i, e$ = /[\t\n\r]/g;
function t$(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function n$(e) {
  return t$(e).replace(e$, "");
}
function bp(e, t) {
  if (typeof e == "string" && Q_.test(n$(e)))
    throw new D(
      'Invalid URL: missing "//" after protocol',
      D.ERR_INVALID_URL,
      t
    );
}
function wc(e, t, n, r) {
  bp(t, r);
  let a = !Y_(t);
  return e && (a || n === !1) ? (bp(e, r), Z_(e, t)) : t;
}
var r$ = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
function a$(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function s$(e) {
  var t = (typeof e == "string" ? a$(e) : e) || {}, n = t.protocol, r = t.host, a = t.port;
  if (typeof r != "string" || !r || typeof n != "string" || (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), a = parseInt(a) || r$[n] || 0, !i$(r, a)))
    return "";
  var s = jo(n + "_proxy") || jo("all_proxy");
  return s && s.indexOf("://") === -1 && (s = n + "://" + s), s;
}
function i$(e, t) {
  var n = jo("no_proxy").toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(r) {
    if (!r)
      return !0;
    var a = r.match(/^(.+):(\d+)$/), s = a ? a[1] : r, i = a ? parseInt(a[2]) : 0;
    return i && i !== t ? !0 : /^[.*]/.test(s) ? (s.charAt(0) === "*" && (s = s.slice(1)), !e.endsWith(s)) : e !== s;
  }) : !0;
}
function jo(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
var xc = {}, ko = { exports: {} }, Ra = { exports: {} }, Ui, _p;
function o$() {
  if (_p) return Ui;
  _p = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, a = r * 7, s = r * 365.25;
  Ui = function(l, p) {
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
        var m = parseFloat(p[1]), f = (p[2] || "ms").toLowerCase();
        switch (f) {
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
  function u(l, p, m, f) {
    var y = p >= m * 1.5;
    return Math.round(l / m) + " " + f + (y ? "s" : "");
  }
  return Ui;
}
var zi, $p;
function xm() {
  if ($p) return zi;
  $p = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = u, r.disable = o, r.enable = s, r.enabled = c, r.humanize = o$(), r.destroy = l, Object.keys(t).forEach((p) => {
      r[p] = t[p];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(p) {
      let m = 0;
      for (let f = 0; f < p.length; f++)
        m = (m << 5) - m + p.charCodeAt(f), m |= 0;
      return r.colors[Math.abs(m) % r.colors.length];
    }
    r.selectColor = n;
    function r(p) {
      let m, f = null, y, v;
      function g(...h) {
        if (!g.enabled)
          return;
        const _ = g, x = Number(/* @__PURE__ */ new Date()), O = x - (m || x);
        _.diff = O, _.prev = m, _.curr = x, m = x, h[0] = r.coerce(h[0]), typeof h[0] != "string" && h.unshift("%O");
        let j = 0;
        h[0] = h[0].replace(/%([a-zA-Z%])/g, (J, C) => {
          if (J === "%%")
            return "%";
          j++;
          const ee = r.formatters[C];
          if (typeof ee == "function") {
            const N = h[j];
            J = ee.call(_, N), h.splice(j, 1), j--;
          }
          return J;
        }), r.formatArgs.call(_, h), (_.log || r.log).apply(_, h);
      }
      return g.namespace = p, g.useColors = r.useColors(), g.color = r.selectColor(p), g.extend = a, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => f !== null ? f : (y !== r.namespaces && (y = r.namespaces, v = r.enabled(p)), v),
        set: (h) => {
          f = h;
        }
      }), typeof r.init == "function" && r.init(g), g;
    }
    function a(p, m) {
      const f = r(this.namespace + (typeof m > "u" ? ":" : m) + p);
      return f.log = this.log, f;
    }
    function s(p) {
      r.save(p), r.namespaces = p, r.names = [], r.skips = [];
      const m = (typeof p == "string" ? p : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const f of m)
        f[0] === "-" ? r.skips.push(f.slice(1)) : r.names.push(f);
    }
    function i(p, m) {
      let f = 0, y = 0, v = -1, g = 0;
      for (; f < p.length; )
        if (y < m.length && (m[y] === p[f] || m[y] === "*"))
          m[y] === "*" ? (v = y, g = f, y++) : (f++, y++);
        else if (v !== -1)
          y = v + 1, g++, f = g;
        else
          return !1;
      for (; y < m.length && m[y] === "*"; )
        y++;
      return y === m.length;
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
  return zi = e, zi;
}
var wp;
function c$() {
  return wp || (wp = 1, function(e, t) {
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
    e.exports = xm()(t);
    const { formatters: o } = e.exports;
    o.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  }(Ra, Ra.exports)), Ra.exports;
}
var Oa = { exports: {} }, qi, xp;
function l$() {
  return xp || (xp = 1, qi = (e, t = process.argv) => {
    const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), a = t.indexOf("--");
    return r !== -1 && (a === -1 || r < a);
  }), qi;
}
var Vi, Ep;
function u$() {
  if (Ep) return Vi;
  Ep = 1;
  const e = ot, t = Cf, n = l$(), { env: r } = process;
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
  return Vi = {
    supportsColor: o,
    stdout: s(i(!0, t.isatty(1))),
    stderr: s(i(!0, t.isatty(2)))
  }, Vi;
}
var Sp;
function p$() {
  return Sp || (Sp = 1, function(e, t) {
    const n = Cf, r = Un;
    t.init = l, t.log = o, t.formatArgs = s, t.save = c, t.load = u, t.useColors = a, t.destroy = r.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), t.colors = [6, 2, 3, 4, 5, 1];
    try {
      const m = u$();
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
    t.inspectOpts = Object.keys(process.env).filter((m) => /^debug_/i.test(m)).reduce((m, f) => {
      const y = f.substring(6).toLowerCase().replace(/_([a-z])/g, (g, h) => h.toUpperCase());
      let v = process.env[f];
      return /^(yes|on|true|enabled)$/i.test(v) ? v = !0 : /^(no|off|false|disabled)$/i.test(v) ? v = !1 : v === "null" ? v = null : v = Number(v), m[y] = v, m;
    }, {});
    function a() {
      return "colors" in t.inspectOpts ? !!t.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function s(m) {
      const { namespace: f, useColors: y } = this;
      if (y) {
        const v = this.color, g = "\x1B[3" + (v < 8 ? v : "8;5;" + v), h = `  ${g};1m${f} \x1B[0m`;
        m[0] = h + m[0].split(`
`).join(`
` + h), m.push(g + "m+" + e.exports.humanize(this.diff) + "\x1B[0m");
      } else
        m[0] = i() + f + " " + m[0];
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
      const f = Object.keys(t.inspectOpts);
      for (let y = 0; y < f.length; y++)
        m.inspectOpts[f[y]] = t.inspectOpts[f[y]];
    }
    e.exports = xm()(t);
    const { formatters: p } = e.exports;
    p.o = function(m) {
      return this.inspectOpts.colors = this.useColors, r.inspect(m, this.inspectOpts).split(`
`).map((f) => f.trim()).join(" ");
    }, p.O = function(m) {
      return this.inspectOpts.colors = this.useColors, r.inspect(m, this.inspectOpts);
    };
  }(Oa, Oa.exports)), Oa.exports;
}
typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? ko.exports = c$() : ko.exports = p$();
var Ws = ko.exports, Ec = {};
Object.defineProperty(Ec, "__esModule", { value: !0 });
function d$(e) {
  return function(t, n) {
    return new Promise((r, a) => {
      e.call(this, t, n, (s, i) => {
        s ? a(s) : r(i);
      });
    });
  };
}
Ec.default = d$;
var Em = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
const f$ = gy, m$ = Em(Ws), h$ = Em(Ec), Nr = m$.default("agent-base");
function v$(e) {
  return !!e && typeof e.addRequest == "function";
}
function Bi() {
  const { stack: e } = new Error();
  return typeof e != "string" ? !1 : e.split(`
`).some((t) => t.indexOf("(https.js:") !== -1 || t.indexOf("node:https:") !== -1);
}
function Ss(e, t) {
  return new Ss.Agent(e, t);
}
(function(e) {
  class t extends f$.EventEmitter {
    constructor(r, a) {
      super();
      let s = a;
      typeof r == "function" ? this.callback = r : r && (s = r), this.timeout = null, s && typeof s.timeout == "number" && (this.timeout = s.timeout), this.maxFreeSockets = 1, this.maxSockets = 1, this.maxTotalSockets = 1 / 0, this.sockets = {}, this.freeSockets = {}, this.requests = {}, this.options = {};
    }
    get defaultPort() {
      return typeof this.explicitDefaultPort == "number" ? this.explicitDefaultPort : Bi() ? 443 : 80;
    }
    set defaultPort(r) {
      this.explicitDefaultPort = r;
    }
    get protocol() {
      return typeof this.explicitProtocol == "string" ? this.explicitProtocol : Bi() ? "https:" : "http:";
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
      typeof s.secureEndpoint != "boolean" && (s.secureEndpoint = Bi()), s.host == null && (s.host = "localhost"), s.port == null && (s.port = s.secureEndpoint ? 443 : 80), s.protocol == null && (s.protocol = s.secureEndpoint ? "https:" : "http:"), s.host && s.path && delete s.path, delete s.agent, delete s.hostname, delete s._defaultAgent, delete s.defaultPort, delete s.createConnection, r._last = !0, r.shouldKeepAlive = !1;
      let i = !1, o = null;
      const c = s.timeout || this.timeout, u = (f) => {
        r._hadError || (r.emit("error", f), r._hadError = !0);
      }, l = () => {
        o = null, i = !0;
        const f = new Error(`A "socket" was not created for HTTP request before ${c}ms`);
        f.code = "ETIMEOUT", u(f);
      }, p = (f) => {
        i || (o !== null && (clearTimeout(o), o = null), u(f));
      }, m = (f) => {
        if (i)
          return;
        if (o != null && (clearTimeout(o), o = null), v$(f)) {
          Nr("Callback returned another Agent instance %o", f.constructor.name), f.addRequest(r, s);
          return;
        }
        if (f) {
          f.once("free", () => {
            this.freeSocket(f, s);
          }), r.onSocket(f);
          return;
        }
        const y = new Error(`no Duplex stream was returned to agent-base for \`${r.method} ${r.path}\``);
        u(y);
      };
      if (typeof this.callback != "function") {
        u(new Error("`callback` is not defined"));
        return;
      }
      this.promisifiedCallback || (this.callback.length >= 3 ? (Nr("Converting legacy callback function to promise"), this.promisifiedCallback = h$.default(this.callback)) : this.promisifiedCallback = this.callback), typeof c == "number" && c > 0 && (o = setTimeout(l, c)), "port" in s && typeof s.port != "number" && (s.port = Number(s.port));
      try {
        Nr("Resolving socket for %o request: %o", s.protocol, `${r.method} ${r.path}`), Promise.resolve(this.promisifiedCallback(r, s)).then(m, p);
      } catch (f) {
        Promise.reject(f).catch(p);
      }
    }
    freeSocket(r, a) {
      Nr("Freeing socket %o %o", r.constructor.name, a), r.destroy();
    }
    destroy() {
      Nr("Destroying agent %o", this.constructor.name);
    }
  }
  e.Agent = t, e.prototype = e.Agent.prototype;
})(Ss || (Ss = {}));
var y$ = Ss, Sc = {}, g$ = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Sc, "__esModule", { value: !0 });
const b$ = g$(Ws), Ir = b$.default("https-proxy-agent:parse-proxy-response");
function _$(e) {
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
      Ir("onclose had error %o", p);
    }
    function c() {
      Ir("onend");
    }
    function u(p) {
      i(), Ir("onerror %o", p), n(p);
    }
    function l(p) {
      a.push(p), r += p.length;
      const m = Buffer.concat(a, r);
      if (m.indexOf(`\r
\r
`) === -1) {
        Ir("have not received end of HTTP headers yet..."), s();
        return;
      }
      const y = m.toString("ascii", 0, m.indexOf(`\r
`)), v = +y.split(" ")[1];
      Ir("got proxy server response: %o", y), t({
        statusCode: v,
        buffered: m
      });
    }
    e.on("error", u), e.on("close", o), e.on("end", c), s();
  });
}
Sc.default = _$;
var $$ = Ke && Ke.__awaiter || function(e, t, n, r) {
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
}, _r = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xc, "__esModule", { value: !0 });
const Pp = _r(vy), Rp = _r(yy), w$ = _r(zs), x$ = _r(pc), E$ = _r(Ws), S$ = y$, P$ = _r(Sc), Cr = E$.default("https-proxy-agent:agent");
let R$ = class extends S$.Agent {
  constructor(t) {
    let n;
    if (typeof t == "string" ? n = w$.default.parse(t) : n = t, !n)
      throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
    Cr("creating new HttpsProxyAgent instance: %o", n), super(n);
    const r = Object.assign({}, n);
    this.secureProxy = n.secureProxy || T$(r.protocol), r.host = r.hostname || r.host, typeof r.port == "string" && (r.port = parseInt(r.port, 10)), !r.port && r.host && (r.port = this.secureProxy ? 443 : 80), this.secureProxy && !("ALPNProtocols" in r) && (r.ALPNProtocols = ["http 1.1"]), r.host && r.path && (delete r.path, delete r.pathname), this.proxy = r;
  }
  /**
   * Called when the node-core HTTP client library is creating a
   * new HTTP request.
   *
   * @api protected
   */
  callback(t, n) {
    return $$(this, void 0, void 0, function* () {
      const { proxy: r, secureProxy: a } = this;
      let s;
      a ? (Cr("Creating `tls.Socket`: %o", r), s = Rp.default.connect(r)) : (Cr("Creating `net.Socket`: %o", r), s = Pp.default.connect(r));
      const i = Object.assign({}, r.headers);
      let c = `CONNECT ${`${n.host}:${n.port}`} HTTP/1.1\r
`;
      r.auth && (i["Proxy-Authorization"] = `Basic ${Buffer.from(r.auth).toString("base64")}`);
      let { host: u, port: l, secureEndpoint: p } = n;
      A$(l, p) || (u += `:${l}`), i.Host = u, i.Connection = "close";
      for (const g of Object.keys(i))
        c += `${g}: ${i[g]}\r
`;
      const m = P$.default(s);
      s.write(`${c}\r
`);
      const { statusCode: f, buffered: y } = yield m;
      if (f === 200) {
        if (t.once("socket", O$), n.secureEndpoint) {
          Cr("Upgrading socket connection to TLS");
          const g = n.servername || n.host;
          return Rp.default.connect(Object.assign(Object.assign({}, j$(n, "host", "hostname", "path", "port")), {
            socket: s,
            servername: g
          }));
        }
        return s;
      }
      s.destroy();
      const v = new Pp.default.Socket({ writable: !1 });
      return v.readable = !0, t.once("socket", (g) => {
        Cr("replaying proxy buffer for failed request"), x$.default(g.listenerCount("data") > 0), g.push(y), g.push(null);
      }), v;
    });
  }
};
xc.default = R$;
function O$(e) {
  e.resume();
}
function A$(e, t) {
  return !!(!t && e === 80 || t && e === 443);
}
function T$(e) {
  return typeof e == "string" ? /^https:?$/i.test(e) : !1;
}
function j$(e, ...t) {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
var k$ = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
const No = k$(xc);
function Io(e) {
  return new No.default(e);
}
(function(e) {
  e.HttpsProxyAgent = No.default, e.prototype = No.default.prototype;
})(Io || (Io = {}));
var N$ = Io;
const Sm = /* @__PURE__ */ br(N$);
var Pc = { exports: {} }, Dr, I$ = function() {
  if (!Dr) {
    try {
      Dr = Ws("follow-redirects");
    } catch {
    }
    typeof Dr != "function" && (Dr = function() {
    });
  }
  Dr.apply(null, arguments);
}, ya = zs, oa = ya.URL, C$ = Ms, D$ = Us, Rc = Xe.Writable, Oc = pc, Pm = I$;
(function() {
  var t = typeof process < "u", n = typeof window < "u" && typeof document < "u", r = Nn(Error.captureStackTrace);
  !t && (n || !r) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var Ac = !1;
try {
  Oc(new oa(""));
} catch (e) {
  Ac = e.code === "ERR_INVALID_URL";
}
var F$ = [
  "Authorization",
  "Proxy-Authorization",
  "Cookie"
], L$ = [
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
], Tc = ["abort", "aborted", "connect", "error", "socket", "timeout"], jc = /* @__PURE__ */ Object.create(null);
Tc.forEach(function(e) {
  jc[e] = function(t, n, r) {
    this._redirectable.emit(e, t, n, r);
  };
});
var Co = ga(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), Do = ga(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), M$ = ga(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Do
), U$ = ga(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), z$ = ga(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), q$ = Rc.prototype.destroy || Om;
function vt(e, t) {
  Rc.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
  var n = this;
  this._onNativeResponse = function(r) {
    try {
      n._processResponse(r);
    } catch (a) {
      n.emit("error", a instanceof Do ? a : new Do({ cause: a }));
    }
  }, this._headerFilter = new RegExp("^(?:" + F$.concat(e.sensitiveHeaders).map(W$).join("|") + ")$", "i"), this._performRequest();
}
vt.prototype = Object.create(Rc.prototype);
vt.prototype.abort = function() {
  Nc(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
vt.prototype.destroy = function(e) {
  return Nc(this._currentRequest, e), q$.call(this, e), this;
};
vt.prototype.write = function(e, t, n) {
  if (this._ending)
    throw new z$();
  if (!On(e) && !G$(e))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (Nn(t) && (n = t, t = null), e.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: t }), this._currentRequest.write(e, t, n)) : (this.emit("error", new U$()), this.abort());
};
vt.prototype.end = function(e, t, n) {
  if (Nn(e) ? (n = e, e = t = null) : Nn(t) && (n = t, t = null), !e)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var r = this, a = this._currentRequest;
    this.write(e, t, function() {
      r._ended = !0, a.end(null, null, n);
    }), this._ending = !0;
  }
};
vt.prototype.setHeader = function(e, t) {
  this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
};
vt.prototype.removeHeader = function(e) {
  delete this._options.headers[e], this._currentRequest.removeHeader(e);
};
vt.prototype.setTimeout = function(e, t) {
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
  vt.prototype[e] = function(t, n) {
    return this._currentRequest[e](t, n);
  };
});
["aborted", "connection", "socket"].forEach(function(e) {
  Object.defineProperty(vt.prototype, e, {
    get: function() {
      return this._currentRequest[e];
    }
  });
});
vt.prototype._sanitizeOptions = function(e) {
  if (e.headers || (e.headers = {}), H$(e.sensitiveHeaders) || (e.sensitiveHeaders = []), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
    var t = e.path.indexOf("?");
    t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t));
  }
};
vt.prototype._performRequest = function() {
  var e = this._options.protocol, t = this._options.nativeProtocols[e];
  if (!t)
    throw new TypeError("Unsupported protocol " + e);
  if (this._options.agents) {
    var n = e.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
  r._redirectable = this;
  for (var a of Tc)
    r.on(a, jc[a]);
  if (this._currentUrl = /^\//.test(this._options.path) ? ya.format(this._options) : (
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
vt.prototype._processResponse = function(e) {
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
  if (Nc(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new M$();
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
  t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], Hi(/^content-/i, this._options.headers));
  var i = Hi(/^host$/i, this._options.headers), o = kc(this._currentUrl), c = i || o.host, u = /^\w+:/.test(n) ? this._currentUrl : ya.format(Object.assign(o, { host: c })), l = V$(n, u);
  if (Pm("redirecting to", l.href), this._isRedirect = !0, Fo(l, this._options), (l.protocol !== o.protocol && l.protocol !== "https:" || l.host !== c && !B$(l.host, c)) && Hi(this._headerFilter, this._options.headers), Nn(a)) {
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
function Rm(e) {
  var t = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(e).forEach(function(r) {
    var a = r + ":", s = n[a] = e[r], i = t[r] = Object.create(s);
    function o(u, l, p) {
      return K$(u) ? u = Fo(u) : On(u) ? u = Fo(kc(u)) : (p = l, l = Am(u), u = { protocol: a }), Nn(l) && (p = l, l = null), l = Object.assign({
        maxRedirects: t.maxRedirects,
        maxBodyLength: t.maxBodyLength
      }, u, l), l.nativeProtocols = n, !On(l.host) && !On(l.hostname) && (l.hostname = "::1"), Oc.equal(l.protocol, a, "protocol mismatch"), Pm("options", l), new vt(l, p);
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
function Om() {
}
function kc(e) {
  var t;
  if (Ac)
    t = new oa(e);
  else if (t = Am(ya.parse(e)), !On(t.protocol))
    throw new Co({ input: e });
  return t;
}
function V$(e, t) {
  return Ac ? new oa(e, t) : kc(ya.resolve(t, e));
}
function Am(e) {
  if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
    throw new Co({ input: e.href || e });
  if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
    throw new Co({ input: e.href || e });
  return e;
}
function Fo(e, t) {
  var n = t || {};
  for (var r of L$)
    n[r] = e[r];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function Hi(e, t) {
  var n;
  for (var r in t)
    e.test(r) && (n = t[r], delete t[r]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function ga(e, t, n) {
  function r(a) {
    Nn(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, a || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
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
function Nc(e, t) {
  for (var n of Tc)
    e.removeListener(n, jc[n]);
  e.on("error", Om), e.destroy(t);
}
function B$(e, t) {
  Oc(On(e) && On(t));
  var n = e.length - t.length - 1;
  return n > 0 && e[n] === "." && e.endsWith(t);
}
function H$(e) {
  return e instanceof Array;
}
function On(e) {
  return typeof e == "string" || e instanceof String;
}
function Nn(e) {
  return typeof e == "function";
}
function G$(e) {
  return typeof e == "object" && "length" in e;
}
function K$(e) {
  return oa && e instanceof oa;
}
function W$(e) {
  return e.replace(/[\]\\/()*+?.$]/g, "\\$&");
}
Pc.exports = Rm({ http: C$, https: D$ });
Pc.exports.wrap = Rm;
var J$ = Pc.exports;
const X$ = /* @__PURE__ */ br(J$), ca = "1.18.1";
function Tm(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
const Y$ = /^([^,;]+\/[^,;]+)?((?:;[^,;=]+=[^,;]+)*)(;base64)?,([\s\S]*)$/;
function Z$(e, t, n) {
  const r = n && n.Blob || De.classes.Blob, a = Tm(e);
  if (t === void 0 && r && (t = !0), a === "data") {
    e = a.length ? e.slice(a.length + 1) : e;
    const s = Y$.exec(e);
    if (!s)
      throw new D("Invalid URL", D.ERR_INVALID_URL);
    const i = s[1], o = s[2], c = s[3] ? "base64" : "utf8", u = s[4];
    let l = "";
    i ? l = o ? i + o : i : o && (l = "text/plain" + o);
    const p = c === "base64" ? Buffer.from(u, "base64") : Buffer.from(decodeURIComponent(u), c);
    if (t) {
      if (!r)
        throw new D("Blob is not supported", D.ERR_NOT_SUPPORT);
      return new r([p], { type: l });
    }
    return p;
  }
  throw new D("Unsupported protocol " + a, D.ERR_NOT_SUPPORT);
}
const Gi = Symbol("internals");
class Op extends Xe.Transform {
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
    const n = this[Gi] = {
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
    const n = this[Gi];
    return n.onReadCallback && n.onReadCallback(), super._read(t);
  }
  _transform(t, n, r) {
    const a = this[Gi], s = a.maxRate, i = this.readableHighWaterMark, o = a.timeWindow, c = 1e3 / o, u = s / c, l = a.minChunkSize !== !1 ? Math.max(a.minChunkSize, u * 0.01) : 0, p = (f, y) => {
      const v = Buffer.byteLength(f);
      a.bytesSeen += v, a.bytes += v, a.isCaptured && this.emit("progress", a.bytesSeen), this.push(f) ? process.nextTick(y) : a.onReadCallback = () => {
        a.onReadCallback = null, process.nextTick(y);
      };
    }, m = (f, y) => {
      const v = Buffer.byteLength(f);
      let g = null, h = i, _, x = 0;
      if (s) {
        const O = Date.now();
        (!a.ts || (x = O - a.ts) >= o) && (a.ts = O, _ = u - a.bytes, a.bytes = _ < 0 ? -_ : 0, x = 0), _ = u - a.bytes;
      }
      if (s) {
        if (_ <= 0)
          return setTimeout(() => {
            y(null, f);
          }, o - x);
        _ < h && (h = _);
      }
      h && v > h && v - h > l && (g = f.subarray(h), f = f.subarray(0, h)), p(
        f,
        g ? () => {
          process.nextTick(y, null, g);
        } : y
      );
    };
    m(t, function f(y, v) {
      if (y)
        return r(y);
      v ? m(v, f) : r(null);
    });
  }
}
const { asyncIterator: Ap } = Symbol, jm = async function* (e) {
  e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[Ap] ? yield* e[Ap]() : yield e;
}, Q$ = De.ALPHABET.ALPHA_DIGIT + "-_", la = typeof TextEncoder == "function" ? new TextEncoder() : new Un.TextEncoder(), Pn = `\r
`, e0 = la.encode(Pn), t0 = 2;
class n0 {
  constructor(t, n) {
    const { escapeName: r } = this.constructor, a = P.isString(n);
    let s = `Content-Disposition: form-data; name="${r(t)}"${!a && n.name ? `; filename="${r(n.name)}"` : ""}${Pn}`;
    if (a)
      n = la.encode(String(n).replace(/\r?\n|\r\n?/g, Pn));
    else {
      const i = String(n.type || "application/octet-stream").replace(/[\r\n]/g, "");
      s += `Content-Type: ${i}${Pn}`;
    }
    this.headers = la.encode(s + Pn), this.contentLength = a ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + t0, this.name = t, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: t } = this;
    P.isTypedArray(t) ? yield t : yield* jm(t), yield e0;
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
const r0 = (e, t, n) => {
  const {
    tag: r = "form-data-boundary",
    size: a = 25,
    boundary: s = r + "-" + De.generateString(a, Q$)
  } = n || {};
  if (!P.isFormData(e))
    throw new TypeError("FormData instance required");
  if (s.length < 1 || s.length > 70)
    throw new Error("boundary must be 1-70 characters long");
  const i = la.encode("--" + s + Pn), o = la.encode("--" + s + "--" + Pn);
  let c = o.byteLength;
  const u = Array.from(e.entries()).map(([p, m]) => {
    const f = new n0(p, m);
    return c += f.size, f;
  });
  c += i.byteLength * u.length, c = P.toFiniteNumber(c);
  const l = {
    "Content-Type": `multipart/form-data; boundary=${s}`
  };
  return Number.isFinite(c) && (l["Content-Length"] = c), t && t(l), fy.from(
    async function* () {
      for (const p of u)
        yield i, yield* p.encode();
      yield o;
    }()
  );
};
class a0 extends Xe.Transform {
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
class s0 {
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
        const [f, y] = r[m];
        if (!f.destroyed && !f.closed && Un.isDeepStrictEqual(y, n))
          return f;
      }
    }
    const a = Df.connect(t, n);
    let s, i;
    const o = () => {
      if (s)
        return;
      s = !0, i && (clearTimeout(i), i = null);
      let p = r, m = p.length, f = m;
      for (; f--; )
        if (p[f][0] === a) {
          m === 1 ? delete this.sessions[t] : p.splice(f, 1), a.closed || a.close();
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
const i0 = (e, t) => P.isAsyncFn(e) ? function(...n) {
  const r = n.pop();
  e.apply(this, n).then((a) => {
    try {
      t ? r(null, ...t(a)) : r(null, a);
    } catch (s) {
      r(s);
    }
  }, r);
} : e, o0 = /* @__PURE__ */ new Set(["localhost", "0.0.0.0"]), km = (e) => {
  const t = e.split(".");
  return t.length !== 4 || t[0] !== "127" ? !1 : t.every((n) => /^\d+$/.test(n) && Number(n) >= 0 && Number(n) <= 255);
}, Ki = (e) => /^0{1,4}$/.test(e), c0 = (e) => {
  if (e === "::") return !0;
  const t = e.indexOf("::");
  if (t !== -1) {
    if (t !== e.lastIndexOf("::")) return !1;
    const r = e.slice(0, t), a = e.slice(t + 2), s = r ? r.split(":") : [], i = a ? a.split(":") : [];
    return s.length + i.length < 8 && s.every(Ki) && i.every(Ki);
  }
  const n = e.split(":");
  return n.length === 8 && n.every(Ki);
}, l0 = (e) => {
  if (e === "::1") return !0;
  const t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (t) return km(t[1]);
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
}, Tp = (e) => e ? o0.has(e) || km(e) || c0(e) ? !0 : l0(e) : !1, u0 = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
}, p0 = (e) => {
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
}, d0 = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:(\d+\.\d+\.\d+\.\d+)$/i, f0 = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i, m0 = (e) => {
  if (typeof e != "string" || e.indexOf(":") === -1) return e;
  const t = e.match(d0);
  if (t) return t[1];
  const n = e.match(f0);
  if (n) {
    const r = parseInt(n[1], 16), a = parseInt(n[2], 16);
    return `${r >> 8}.${r & 255}.${a >> 8}.${a & 255}`;
  }
  return e;
}, jp = (e) => e && (e.charAt(0) === "[" && e.charAt(e.length - 1) === "]" && (e = e.slice(1, -1)), m0(e.replace(/\.+$/, "")));
function h0(e) {
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
  const r = Number.parseInt(t.port, 10) || u0[t.protocol.split(":", 1)[0]] || 0, a = jp(t.hostname.toLowerCase());
  return n.split(/[\s,]+/).some((s) => {
    if (!s)
      return !1;
    let [i, o] = p0(s);
    return i = jp(i), !i || o && o !== r ? !1 : (i.charAt(0) === "*" && (i = i.slice(1)), i.charAt(0) === "." ? a.endsWith(i) : a === i || Tp(a) && Tp(i));
  });
}
function v0(e, t) {
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
    const f = l && u - l;
    return f ? Math.round(m * 1e3 / f) : void 0;
  };
}
function y0(e, t) {
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
const pr = (e, t, n = 3) => {
  let r = 0;
  const a = v0(50, 250);
  return y0((s) => {
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
}, Ps = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Rs = (e) => (...t) => P.asap(() => e(...t)), Os = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, g0 = (e, t, n) => t + 2 < n && Os(e.charCodeAt(t + 1)) && Os(e.charCodeAt(t + 2));
function Nm(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const o = r.length;
    for (let f = 0; f < o; f++)
      if (r.charCodeAt(f) === 37 && f + 2 < o) {
        const y = r.charCodeAt(f + 1), v = r.charCodeAt(f + 2);
        Os(y) && Os(v) && (i -= 2, f += 2);
      }
    let c = 0, u = o - 1;
    const l = (f) => f >= 2 && r.charCodeAt(f - 2) === 37 && // '%'
    r.charCodeAt(f - 1) === 51 && // '3'
    (r.charCodeAt(f) === 68 || r.charCodeAt(f) === 100);
    u >= 0 && (r.charCodeAt(u) === 61 ? (c++, u--) : l(u) && (c++, u -= 3)), c === 1 && u >= 0 && (r.charCodeAt(u) === 61 || l(u)) && c++;
    const m = Math.floor(i / 4) * 3 - (c || 0);
    return m > 0 ? m : 0;
  }
  let s = 0;
  for (let i = 0, o = r.length; i < o; i++) {
    const c = r.charCodeAt(i);
    if (c === 37 && g0(r, i, o))
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
const kp = {
  flush: xt.constants.Z_SYNC_FLUSH,
  finishFlush: xt.constants.Z_SYNC_FLUSH
}, b0 = {
  flush: xt.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: xt.constants.BROTLI_OPERATION_FLUSH
}, _0 = {
  flush: xt.constants.ZSTD_e_flush,
  finishFlush: xt.constants.ZSTD_e_flush
}, Im = P.isFunction(xt.createBrotliDecompress), Cm = P.isFunction(xt.createZstdDecompress), Dm = "gzip, compress, deflate" + (Im ? ", br" : ""), $0 = Dm + (Cm ? ", zstd" : ""), { http: w0, https: x0 } = X$, Ic = /https:?/, E0 = ["content-type", "content-length"];
function S0(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, a]) => {
    E0.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const Np = Symbol("axios.http.socketListener"), Aa = Symbol("axios.http.currentReq"), Fm = Symbol("axios.http.installedTunnel"), P0 = /* @__PURE__ */ new Map(), Ip = /* @__PURE__ */ new WeakMap(), Cp = {
  22: 21,
  24: 5
};
function R0(e = process.versions && process.versions.node) {
  if (!e)
    return !1;
  const [t, n] = e.split(".").map((r) => Number(r));
  return !Number.isInteger(t) || !Number.isInteger(n) ? !1 : t > 24 ? !0 : Cp[t] != null && n >= Cp[t];
}
function O0(e, t = process.versions && process.versions.node) {
  if (!R0(t))
    return !1;
  const n = e && e.options;
  return !!(n && P.hasOwnProp(n, "proxyEnv") && n.proxyEnv != null);
}
function A0(e, t, n) {
  return Ic.test(e.protocol) ? n || Us.globalAgent : t || Ms.globalAgent;
}
function T0(e, t) {
  const n = e.protocol + "//" + e.hostname + ":" + (e.port || "") + "#" + (e.auth || ""), r = t ? Ip.get(t) || Ip.set(t, /* @__PURE__ */ new Map()).get(t) : P0;
  let a = r.get(n);
  if (a) return a;
  const s = t && t.options ? { ...t.options, ...e } : e;
  if (a = new Sm(s), t && t.options) {
    const i = { ...t.options }, o = a.callback;
    a.callback = function(u, l) {
      return o.call(this, u, { ...i, ...l });
    };
  }
  return a[Fm] = !0, r.set(n, a), a;
}
const Dp = De.protocols.map((e) => e + ":"), Fp = (e) => {
  if (!P.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Lp = (e, [t, n]) => (e.on("end", n).on("error", n), t), j0 = new s0();
function k0(e, t, n) {
  e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.auth && e.beforeRedirects.auth(e), e.beforeRedirects.sensitiveHeaders && e.beforeRedirects.sensitiveHeaders(e, n), e.beforeRedirects.config && e.beforeRedirects.config(e, t, n);
}
function N0(e, t) {
  e && Object.keys(e).forEach((n) => {
    t.has(n.toLowerCase()) && delete e[n];
  });
}
function I0(e, t) {
  if (!t)
    return !1;
  try {
    return new URL(t.url).origin === new URL(e.href).origin;
  } catch {
    return !1;
  }
}
function Lm(e, t, n, r, a, s) {
  let i = t;
  const o = A0(e, s, a);
  if (!i && i !== !1 && !O0(o)) {
    const c = s$(n);
    c && (h0(n) || (i = new URL(c)));
  }
  if (r && e.headers)
    for (const c of Object.keys(e.headers))
      c.toLowerCase() === "proxy-authorization" && delete e.headers[c];
  if (r && e.agent && e.agent[Fm] && (e.agent = void 0), i) {
    const c = i instanceof URL, u = (y) => c || P.hasOwnProp(i, y) ? i[y] : void 0, l = u("username"), p = u("password");
    let m = P.hasOwnProp(i, "auth") ? i.auth : void 0;
    if (l && (m = (l || "") + ":" + (p || "")), m) {
      const y = typeof m == "object", v = y && P.hasOwnProp(m, "username") ? m.username : void 0, g = y && P.hasOwnProp(m, "password") ? m.password : void 0;
      if (!!(v || g))
        m = (v || "") + ":" + (g || "");
      else if (y)
        throw new D("Invalid proxy authorization", D.ERR_BAD_OPTION, { proxy: i });
    }
    if (Ic.test(e.protocol)) {
      if (!(a instanceof Sm)) {
        const y = u("hostname") || u("host"), v = u("port"), g = u("protocol"), h = g ? g.includes(":") ? g : `${g}:` : "http:", _ = y && y.includes(":") && !y.startsWith("[") ? `[${y}]` : y, x = new URL(
          `${h}//${_}${v ? ":" + v : ""}`
        ), O = {
          protocol: x.protocol,
          hostname: x.hostname.replace(/^\[|\]$/g, ""),
          port: x.port,
          auth: m && typeof m == "string" ? m : void 0
        };
        x.protocol === "https:" && (O.ALPNProtocols = ["http/1.1"]);
        const j = T0(O, a);
        e.agent = j, e.agents && (e.agents.https = j);
      }
    } else {
      if (m) {
        const h = Buffer.from(m, "utf8").toString("base64");
        e.headers["Proxy-Authorization"] = "Basic " + h;
      }
      let y = !1;
      for (const h of Object.keys(e.headers))
        if (h.toLowerCase() === "host") {
          y = !0;
          break;
        }
      y || (e.headers.host = e.hostname + (e.port ? ":" + e.port : ""));
      const v = u("hostname") || u("host");
      e.hostname = v, e.host = v, e.port = u("port"), e.path = n;
      const g = u("protocol");
      g && (e.protocol = g.includes(":") ? g : `${g}:`);
    }
  }
  e.beforeRedirects.proxy = function(u) {
    Lm(
      u,
      t,
      u.href,
      !0,
      a,
      s
    );
  };
}
const C0 = typeof process < "u" && P.kindOf(process) === "process", D0 = (e) => new Promise((t, n) => {
  let r, a;
  const s = (c, u) => {
    a || (a = !0, r && r(c, u));
  }, i = (c) => {
    s(c), t(c);
  }, o = (c) => {
    s(c, !0), n(c);
  };
  e(i, o, (c) => r = c).catch(o);
}), F0 = ({ address: e, family: t }) => {
  if (!P.isString(e))
    throw TypeError("address must be a string");
  return {
    address: e,
    family: t || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, Mp = (e, t) => F0(P.isObject(e) ? e : { address: e, family: t }), L0 = {
  request(e, t) {
    const n = e.protocol + "//" + e.hostname + ":" + (e.port || (e.protocol === "https:" ? 443 : 80)), { http2Options: r, headers: a } = e, s = j0.getSession(n, r), { HTTP2_HEADER_SCHEME: i, HTTP2_HEADER_METHOD: o, HTTP2_HEADER_PATH: c, HTTP2_HEADER_STATUS: u } = Df.constants, l = {
      [i]: e.protocol.replace(":", ""),
      [o]: e.method,
      [c]: e.path
    };
    P.forEach(a, (m, f) => {
      f.charAt(0) !== ":" && (l[f] = m);
    });
    const p = s.request(l);
    return p.once("response", (m) => {
      const f = p;
      m = Object.assign({}, m);
      const y = m[u];
      delete m[u], f.headers = m, f.statusCode = +y, t(f);
    }), p;
  }
}, M0 = C0 && function(t) {
  return D0(async function(r, a, s) {
    const i = (G) => P.getSafeProp(t, G), o = i("transitional") || Ks;
    let c = i("data"), u = i("lookup"), l = i("family"), p = i("httpVersion");
    p === void 0 && (p = 1);
    let m = i("http2Options");
    const f = i("httpAgent"), y = i("httpsAgent"), v = i("proxy"), g = i("responseType"), h = i("responseEncoding"), _ = i("socketPath"), x = i("method").toUpperCase(), O = i("maxRedirects"), j = i("maxBodyLength"), q = i("maxContentLength"), J = i("decompress");
    let C, ee = !1, N, M;
    if (p = +p, Number.isNaN(p))
      throw TypeError(`Invalid protocol version: '${t.httpVersion}' is not a number`);
    if (p !== 1 && p !== 2)
      throw TypeError(`Unsupported protocol version '${p}'`);
    const z = p === 2;
    if (u) {
      const G = i0(u, (B) => P.isArray(B) ? B : [B]);
      u = (B, oe, de) => {
        G(B, oe, (le, we, Ne) => {
          if (le)
            return de(le);
          const Pe = P.isArray(we) ? we.map((Be) => Mp(Be)) : [Mp(we, Ne)];
          oe.all ? de(le, Pe) : de(le, Pe[0].address, Pe[0].family);
        });
      };
    }
    const W = new by();
    function k(G) {
      try {
        W.emit(
          "abort",
          !G || G.type ? new kn(null, t, N) : G
        );
      } catch {
      }
    }
    function U() {
      M && (clearTimeout(M), M = null);
    }
    function X() {
      const G = i("timeout");
      let B = G ? "timeout of " + G + "ms exceeded" : "timeout exceeded";
      const oe = i("timeoutErrorMessage");
      return oe && (B = oe), new D(
        B,
        o.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        t,
        N
      );
    }
    W.once("abort", a);
    const K = () => {
      U(), t.cancelToken && t.cancelToken.unsubscribe(k), t.signal && t.signal.removeEventListener("abort", k), W.removeAllListeners();
    };
    (t.cancelToken || t.signal) && (t.cancelToken && t.cancelToken.subscribe(k), t.signal && (t.signal.aborted ? k() : t.signal.addEventListener("abort", k))), s((G, B) => {
      if (C = !0, U(), B) {
        ee = !0, K();
        return;
      }
      const { data: oe } = G;
      if (oe instanceof Xe.Readable || oe instanceof Xe.Duplex) {
        const de = Xe.finished(oe, () => {
          de(), K();
        });
      } else
        K();
    });
    const ae = wc(i("baseURL"), i("url"), i("allowAbsoluteUrls"), t), Q = _ ? "http://localhost" : De.hasBrowserEnv ? De.origin : void 0, R = new URL(ae, Q), $ = R.protocol || Dp[0];
    if ($ === "data:") {
      if (q > -1) {
        const B = String(i("url") || ae || "");
        if (Nm(B) > q)
          return a(
            new D(
              "maxContentLength size of " + q + " exceeded",
              D.ERR_BAD_RESPONSE,
              t
            )
          );
      }
      let G;
      if (x !== "GET")
        return Yn(r, a, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: t
        });
      try {
        G = Z$(i("url"), g === "blob", {
          Blob: t.env && t.env.Blob
        });
      } catch (B) {
        throw D.from(B, D.ERR_BAD_REQUEST, t);
      }
      return g === "text" ? (G = G.toString(h), (!h || h === "utf8") && (G = P.stripBOM(G))) : g === "stream" && (G = Xe.Readable.from(G)), Yn(r, a, {
        data: G,
        status: 200,
        statusText: "OK",
        headers: new Ve(),
        config: t
      });
    }
    if (Dp.indexOf($) === -1)
      return a(
        new D("Unsupported protocol " + $, D.ERR_BAD_REQUEST, t)
      );
    const S = Ve.from(t.headers).normalize();
    S.set("User-Agent", "axios/" + ca, !1);
    const { onUploadProgress: w, onDownloadProgress: d } = t, b = t.maxRate;
    let E, I;
    if (P.isSpecCompliantForm(c)) {
      const G = S.getContentType(/boundary=([-_\w\d]{10,70})/i);
      c = r0(
        c,
        (B) => {
          S.set(B);
        },
        {
          tag: `axios-${ca}-boundary`,
          boundary: G && G[1] || void 0
        }
      );
    } else if (P.isFormData(c) && P.isFunction(c.getHeaders) && c.getHeaders !== Object.prototype.getHeaders) {
      if (S0(S, c.getHeaders(), i("formDataHeaderPolicy")), !S.hasContentLength())
        try {
          const G = await Un.promisify(c.getLength).call(c);
          Number.isFinite(G) && G >= 0 && S.setContentLength(G);
        } catch {
        }
    } else if (P.isBlob(c) || P.isFile(c))
      c.size && S.setContentType(c.type || "application/octet-stream"), S.setContentLength(c.size || 0), c = Xe.Readable.from(jm(c));
    else if (c && !P.isStream(c)) {
      if (!Buffer.isBuffer(c)) if (P.isArrayBuffer(c))
        c = Buffer.from(new Uint8Array(c));
      else if (P.isString(c))
        c = Buffer.from(c, "utf-8");
      else
        return a(
          new D(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            D.ERR_BAD_REQUEST,
            t
          )
        );
      if (S.setContentLength(c.length, !1), j > -1 && c.length > j)
        return a(
          new D(
            "Request body larger than maxBodyLength limit",
            D.ERR_BAD_REQUEST,
            t
          )
        );
    }
    const F = P.toFiniteNumber(S.getContentLength());
    P.isArray(b) ? (E = b[0], I = b[1]) : E = I = b, c && (w || E) && (P.isStream(c) || (c = Xe.Readable.from(c, { objectMode: !1 })), c = Xe.pipeline(
      [
        c,
        new Op({
          maxRate: P.toFiniteNumber(E)
        })
      ],
      P.noop
    ), w && c.on(
      "progress",
      Lp(
        c,
        Ps(
          F,
          pr(Rs(w), !1, 3)
        )
      )
    ));
    let te;
    const ne = i("auth");
    if (ne) {
      const G = P.getSafeProp(ne, "username") || "", B = P.getSafeProp(ne, "password") || "";
      te = G + ":" + B;
    }
    if (!te && (R.username || R.password)) {
      const G = Fp(R.username), B = Fp(R.password);
      te = G + ":" + B;
    }
    te && S.delete("authorization");
    let A;
    try {
      A = _c(
        R.pathname + R.search,
        i("params"),
        i("paramsSerializer")
      ).replace(/^\?/, "");
    } catch (G) {
      return a(
        D.from(G, D.ERR_BAD_REQUEST, t, null, null, {
          url: i("url"),
          exists: !0
        })
      );
    }
    S.set(
      "Accept-Encoding",
      P.hasOwnProp(o, "advertiseZstdAcceptEncoding") && o.advertiseZstdAcceptEncoding === !0 ? $0 : Dm,
      !1
    );
    const T = Object.assign(/* @__PURE__ */ Object.create(null), {
      path: A,
      method: x,
      headers: hc(S),
      agents: { http: f, https: y },
      auth: te,
      protocol: $,
      family: l,
      beforeRedirect: k0,
      beforeRedirects: /* @__PURE__ */ Object.create(null),
      http2Options: m
    });
    if (!P.isUndefined(u) && (T.lookup = u), _) {
      if (typeof _ != "string")
        return a(
          new D("socketPath must be a string", D.ERR_BAD_OPTION_VALUE, t)
        );
      const G = i("allowedSocketPaths");
      if (G != null) {
        const B = Array.isArray(G) ? G : [G], oe = Uu(_);
        if (!B.some(
          (le) => typeof le == "string" && Uu(le) === oe
        ))
          return a(
            new D(
              `socketPath "${_}" is not permitted by allowedSocketPaths`,
              D.ERR_BAD_OPTION_VALUE,
              t
            )
          );
      }
      T.socketPath = _;
    } else
      T.hostname = R.hostname.startsWith("[") ? R.hostname.slice(1, -1) : R.hostname, T.port = R.port, Lm(
        T,
        v,
        $ + "//" + R.hostname + (R.port ? ":" + R.port : "") + T.path,
        !1,
        y,
        f
      );
    let L, V = !1, Y = !1;
    const H = Ic.test(T.protocol);
    if (T.agent == null && (T.agent = H ? y : f), z)
      L = L0;
    else {
      const G = i("transport");
      if (G)
        L = G;
      else if (O === 0)
        L = H ? Us : Ms, V = !0;
      else {
        Y = !0, T.sensitiveHeaders = [], O && (T.maxRedirects = O);
        const B = i("beforeRedirect");
        if (B && (T.beforeRedirects.config = B), te) {
          const de = R.origin, le = te;
          T.beforeRedirects.auth = function(Ne) {
            try {
              new URL(Ne.href).origin === de && (Ne.auth = le);
            } catch {
            }
          };
        }
        const oe = i("sensitiveHeaders");
        if (oe != null) {
          if (!P.isArray(oe))
            return a(
              new D(
                "sensitiveHeaders must be an array of strings",
                D.ERR_BAD_OPTION_VALUE,
                t
              )
            );
          const de = /* @__PURE__ */ new Set();
          for (const le of oe) {
            if (!P.isString(le))
              return a(
                new D(
                  "sensitiveHeaders must be an array of strings",
                  D.ERR_BAD_OPTION_VALUE,
                  t
                )
              );
            de.add(le.toLowerCase());
          }
          de.size && (T.sensitiveHeaders = Array.from(de), T.beforeRedirects.sensitiveHeaders = function(we, Ne) {
            I0(we, Ne) || N0(we.headers, de);
          });
        }
        L = H ? x0 : w0;
      }
    }
    j > -1 ? T.maxBodyLength = j : T.maxBodyLength = 1 / 0, T.insecureHTTPParser = !!i("insecureHTTPParser"), N = L.request(T, function(B) {
      if (U(), N.destroyed) return;
      const oe = [B], de = P.toFiniteNumber(B.headers["content-length"]);
      if (d || I) {
        const Pe = new Op({
          maxRate: P.toFiniteNumber(I)
        });
        d && Pe.on(
          "progress",
          Lp(
            Pe,
            Ps(
              de,
              pr(Rs(d), !0, 3)
            )
          )
        ), oe.push(Pe);
      }
      let le = B;
      const we = B.req || N;
      if (J !== !1 && B.headers["content-encoding"])
        switch ((x === "HEAD" || B.statusCode === 204) && delete B.headers["content-encoding"], (B.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            oe.push(xt.createUnzip(kp)), delete B.headers["content-encoding"];
            break;
          case "deflate":
            oe.push(new a0()), oe.push(xt.createUnzip(kp)), delete B.headers["content-encoding"];
            break;
          case "br":
            Im && (oe.push(xt.createBrotliDecompress(b0)), delete B.headers["content-encoding"]);
            break;
          case "zstd":
            Cm && (oe.push(xt.createZstdDecompress(_0)), delete B.headers["content-encoding"]);
            break;
        }
      le = oe.length > 1 ? Xe.pipeline(oe, P.noop) : oe[0];
      const Ne = {
        status: B.statusCode,
        statusText: B.statusMessage,
        headers: new Ve(B.headers),
        config: t,
        request: we
      };
      if (g === "stream") {
        if (q > -1) {
          const Pe = q, Be = le;
          async function* yt() {
            let Ie = 0;
            for await (const Qt of Be) {
              if (Ie += Qt.length, Ie > Pe)
                throw new D(
                  "maxContentLength size of " + Pe + " exceeded",
                  D.ERR_BAD_RESPONSE,
                  t,
                  we
                );
              yield Qt;
            }
          }
          le = Xe.Readable.from(yt(), {
            objectMode: !1
          });
        }
        Ne.data = le, Yn(r, a, Ne);
      } else {
        const Pe = [];
        let Be = 0;
        le.on("data", function(Ie) {
          Pe.push(Ie), Be += Ie.length, q > -1 && Be > q && (ee = !0, le.destroy(), k(
            new D(
              "maxContentLength size of " + q + " exceeded",
              D.ERR_BAD_RESPONSE,
              t,
              we
            )
          ));
        }), le.on("aborted", function() {
          if (ee)
            return;
          const Ie = new D(
            "stream has been aborted",
            D.ERR_BAD_RESPONSE,
            t,
            we,
            Ne
          );
          le.destroy(Ie), a(Ie);
        }), le.on("error", function(Ie) {
          ee || a(D.from(Ie, null, t, we, Ne));
        }), le.on("end", function() {
          try {
            let Ie = Pe.length === 1 ? Pe[0] : Buffer.concat(Pe);
            g !== "arraybuffer" && (Ie = Ie.toString(h), (!h || h === "utf8") && (Ie = P.stripBOM(Ie))), Ne.data = Ie;
          } catch (Ie) {
            return a(D.from(Ie, null, t, Ne.request, Ne));
          }
          Yn(r, a, Ne);
        });
      }
      W.once("abort", (Pe) => {
        le.destroyed || (le.emit("error", Pe), le.destroy());
      });
    }), W.once("abort", (G) => {
      N.close ? N.close() : N.destroy(G);
    }), N.on("error", function(B) {
      a(D.from(B, null, t, N));
    });
    const ge = /* @__PURE__ */ new Set();
    if (N.on("socket", function(B) {
      typeof B.setKeepAlive == "function" && B.setKeepAlive(!0, 1e3 * 60), B[Np] || (B.on("error", function(de) {
        const le = B[Aa];
        le && !le.destroyed && le.destroy(de);
      }), B[Np] = !0), B[Aa] = N, ge.add(B);
    }), N.once("close", function() {
      U();
      for (const B of ge)
        B[Aa] === N && (B[Aa] = null);
      ge.clear();
    }), i("timeout")) {
      const G = parseInt(i("timeout"), 10);
      if (Number.isNaN(G)) {
        k(
          new D(
            "error trying to parse `config.timeout` to int",
            D.ERR_BAD_OPTION_VALUE,
            t,
            N
          )
        );
        return;
      }
      const B = function() {
        C || k(X());
      };
      V && G > 0 && (M = setTimeout(B, G)), N.setTimeout(G, B);
    } else
      N.setTimeout(0);
    if (P.isStream(c)) {
      let G = !1, B = !1;
      c.on("end", () => {
        G = !0;
      }), c.once("error", (de) => {
        B = !0, N.destroy(de);
      }), c.on("close", () => {
        !G && !B && k(new kn("Request stream has been aborted", t, N));
      });
      let oe = c;
      if (j > -1 && !Y) {
        const de = j;
        let le = 0;
        oe = Xe.pipeline(
          [
            c,
            new Xe.Transform({
              transform(we, Ne, Pe) {
                if (le += we.length, le > de)
                  return Pe(
                    new D(
                      "Request body larger than maxBodyLength limit",
                      D.ERR_BAD_REQUEST,
                      t,
                      N
                    )
                  );
                Pe(null, we);
              }
            })
          ],
          P.noop
        ), oe.on("error", (we) => {
          N.destroyed || N.destroy(we);
        });
      }
      oe.pipe(N);
    } else
      c && N.write(c), N.end();
  });
}, U0 = De.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, De.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(De.origin),
  De.navigator && /(msie|trident)/i.test(De.navigator.userAgent)
) : () => !0, z0 = De.hasStandardBrowserEnv ? (
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
), Up = (e) => e instanceof Ve ? { ...e } : e;
function In(e, t) {
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
  function r(l, p, m, f) {
    return P.isPlainObject(l) && P.isPlainObject(p) ? P.merge.call({ caseless: f }, l, p) : P.isPlainObject(p) ? P.merge({}, p) : P.isArray(p) ? p.slice() : p;
  }
  function a(l, p, m, f) {
    if (P.isUndefined(p)) {
      if (!P.isUndefined(l))
        return r(void 0, l, m, f);
    } else return r(l, p, m, f);
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
    headers: (l, p, m) => a(Up(l), Up(p), m, !0)
  };
  return P.forEach(Object.keys({ ...e, ...t }), function(p) {
    if (p === "__proto__" || p === "constructor" || p === "prototype") return;
    const m = P.hasOwnProp(u, p) ? u[p] : a, f = P.hasOwnProp(e, p) ? e[p] : void 0, y = P.hasOwnProp(t, p) ? t[p] : void 0, v = m(f, y, p);
    P.isUndefined(v) && m !== c || (n[p] = v);
  }), P.hasOwnProp(t, "validateStatus") && P.isUndefined(t.validateStatus) && o("validateStatusUndefinedResolves") === !1 && (P.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const q0 = ["content-type", "content-length"];
function V0(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, a]) => {
    q0.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const B0 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Mm(e) {
  const t = In({}, e), n = (m) => P.hasOwnProp(t, m) ? t[m] : void 0, r = n("data");
  let a = n("withXSRFToken");
  const s = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let o = n("headers");
  const c = n("auth"), u = n("baseURL"), l = n("allowAbsoluteUrls"), p = n("url");
  if (t.headers = o = Ve.from(o), t.url = _c(
    wc(u, p, l, t),
    n("params"),
    n("paramsSerializer")
  ), c) {
    const m = P.getSafeProp(c, "username") || "", f = P.getSafeProp(c, "password") || "";
    try {
      o.set(
        "Authorization",
        "Basic " + btoa(m + ":" + (f ? B0(f) : ""))
      );
    } catch (y) {
      throw D.from(y, D.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (P.isFormData(r) && (De.hasStandardBrowserEnv || De.hasStandardBrowserWebWorkerEnv || P.isReactNative(r) ? o.setContentType(void 0) : P.isFunction(r.getHeaders) && V0(o, r.getHeaders(), n("formDataHeaderPolicy"))), De.hasStandardBrowserEnv && (P.isFunction(a) && (a = a(t)), a === !0 || a == null && U0(t.url))) {
    const f = s && i && z0.read(i);
    f && o.set(s, f);
  }
  return t;
}
const H0 = typeof XMLHttpRequest < "u", G0 = H0 && function(e) {
  return new Promise(function(n, r) {
    const a = Mm(e);
    let s = a.data;
    const i = Ve.from(a.headers).normalize();
    let { responseType: o, onUploadProgress: c, onDownloadProgress: u } = a, l, p, m, f, y;
    function v() {
      f && f(), y && y(), a.cancelToken && a.cancelToken.unsubscribe(l), a.signal && a.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(a.method.toUpperCase(), a.url, !0), g.timeout = a.timeout;
    function h() {
      if (!g)
        return;
      const x = Ve.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), j = {
        data: !o || o === "text" || o === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      Yn(
        function(J) {
          n(J), v();
        },
        function(J) {
          r(J), v();
        },
        j
      ), g = null;
    }
    "onloadend" in g ? g.onloadend = h : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(h);
    }, g.onabort = function() {
      g && (r(new D("Request aborted", D.ECONNABORTED, e, g)), v(), g = null);
    }, g.onerror = function(O) {
      const j = O && O.message ? O.message : "Network Error", q = new D(j, D.ERR_NETWORK, e, g);
      q.event = O || null, r(q), v(), g = null;
    }, g.ontimeout = function() {
      let O = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const j = a.transitional || Ks;
      a.timeoutErrorMessage && (O = a.timeoutErrorMessage), r(
        new D(
          O,
          j.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
          e,
          g
        )
      ), v(), g = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in g && P.forEach(hc(i), function(O, j) {
      g.setRequestHeader(j, O);
    }), P.isUndefined(a.withCredentials) || (g.withCredentials = !!a.withCredentials), o && o !== "json" && (g.responseType = a.responseType), u && ([m, y] = pr(u, !0), g.addEventListener("progress", m)), c && g.upload && ([p, f] = pr(c), g.upload.addEventListener("progress", p), g.upload.addEventListener("loadend", f)), (a.cancelToken || a.signal) && (l = (x) => {
      g && (r(!x || x.type ? new kn(null, e, g) : x), g.abort(), v(), g = null);
    }, a.cancelToken && a.cancelToken.subscribe(l), a.signal && (a.signal.aborted ? l() : a.signal.addEventListener("abort", l)));
    const _ = Tm(a.url);
    if (_ && !De.protocols.includes(_)) {
      r(
        new D(
          "Unsupported protocol " + _ + ":",
          D.ERR_BAD_REQUEST,
          e
        )
      ), v();
      return;
    }
    g.send(s || null);
  });
}, K0 = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const a = function(c) {
    if (!r) {
      r = !0, i();
      const u = c instanceof Error ? c : this.reason;
      n.abort(
        u instanceof D ? u : new kn(u instanceof Error ? u.message : u)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, a(new D(`timeout of ${t}ms exceeded`, D.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((c) => {
      c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
    }), e = null);
  };
  e.forEach((c) => c.addEventListener("abort", a, { once: !0 }));
  const { signal: o } = n;
  return o.unsubscribe = () => P.asap(i), o;
}, W0 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, J0 = async function* (e, t) {
  for await (const n of X0(e))
    yield* W0(n, t);
}, X0 = async function* (e) {
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
}, zp = (e, t, n, r) => {
  const a = J0(e, t);
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
}, qp = 64 * 1024, { isFunction: Ta } = P, Y0 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Vp = (e) => {
  if (!P.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Bp = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Z0 = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Q0 = (e) => {
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
  const { fetch: a, Request: s, Response: i } = e, o = a ? Ta(a) : typeof fetch == "function", c = Ta(s), u = Ta(i);
  if (!o)
    return !1;
  const l = o && Ta(n), p = o && (typeof r == "function" ? /* @__PURE__ */ ((h) => (_) => h.encode(_))(new r()) : async (h) => new Uint8Array(await new s(h).arrayBuffer())), m = c && l && Bp(() => {
    let h = !1;
    const _ = new s(De.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }), x = _.headers.has("Content-Type");
    return _.body != null && _.body.cancel(), h && !x;
  }), f = u && l && Bp(() => P.isReadableStream(new i("").body)), y = {
    stream: f && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !y[h] && (y[h] = (_, x) => {
      let O = _ && _[h];
      if (O)
        return O.call(_);
      throw new D(
        `Response type '${h}' is not supported`,
        D.ERR_NOT_SUPPORT,
        x
      );
    });
  });
  const v = async (h) => {
    if (h == null)
      return 0;
    if (P.isBlob(h))
      return h.size;
    if (P.isSpecCompliantForm(h))
      return (await new s(De.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (P.isArrayBufferView(h) || P.isArrayBuffer(h))
      return h.byteLength;
    if (P.isURLSearchParams(h) && (h = h + ""), P.isString(h))
      return (await p(h)).byteLength;
  }, g = async (h, _) => {
    const x = P.toFiniteNumber(h.getContentLength());
    return x ?? v(_);
  };
  return async (h) => {
    let {
      url: _,
      method: x,
      data: O,
      signal: j,
      cancelToken: q,
      timeout: J,
      onDownloadProgress: C,
      onUploadProgress: ee,
      responseType: N,
      headers: M,
      withCredentials: z = "same-origin",
      fetchOptions: W,
      maxContentLength: k,
      maxBodyLength: U
    } = Mm(h);
    const X = P.isNumber(k) && k > -1, K = P.isNumber(U) && U > -1, ae = (E) => P.hasOwnProp(h, E) ? h[E] : void 0;
    let Q = a || fetch;
    N = N ? (N + "").toLowerCase() : "text";
    let R = K0(
      [j, q && q.toAbortSignal()],
      J
    ), $ = null;
    const S = R && R.unsubscribe && (() => {
      R.unsubscribe();
    });
    let w, d = null;
    const b = () => new D(
      "Request body larger than maxBodyLength limit",
      D.ERR_BAD_REQUEST,
      h,
      $
    );
    try {
      let E;
      const I = ae("auth");
      if (I) {
        const H = P.getSafeProp(I, "username") || "", ge = P.getSafeProp(I, "password") || "";
        E = {
          username: H,
          password: ge
        };
      }
      if (Z0(_)) {
        const H = new URL(_, De.origin);
        if (!E && (H.username || H.password)) {
          const ge = Vp(H.username), G = Vp(H.password);
          E = {
            username: ge,
            password: G
          };
        }
        (H.username || H.password) && (H.username = "", H.password = "", _ = H.href);
      }
      if (E && (M.delete("authorization"), M.set(
        "Authorization",
        "Basic " + btoa(Y0((E.username || "") + ":" + (E.password || "")))
      )), X && typeof _ == "string" && _.startsWith("data:") && Nm(_) > k)
        throw new D(
          "maxContentLength size of " + k + " exceeded",
          D.ERR_BAD_RESPONSE,
          h,
          $
        );
      if (K && x !== "get" && x !== "head") {
        const H = await v(O);
        if (typeof H == "number" && isFinite(H) && (w = H, H > U))
          throw b();
      }
      const F = K && (P.isReadableStream(O) || P.isStream(O)), te = (H, ge, G) => zp(
        H,
        qp,
        (B) => {
          if (K && B > U)
            throw d = b();
          ge && ge(B);
        },
        G
      );
      if (m && x !== "get" && x !== "head" && (ee || F)) {
        if (w = w ?? await g(M, O), w !== 0 || F) {
          let H = new s(_, {
            method: "POST",
            body: O,
            duplex: "half"
          }), ge;
          if (P.isFormData(O) && (ge = H.headers.get("content-type")) && M.setContentType(ge), H.body) {
            const [G, B] = ee && Ps(
              w,
              pr(Rs(ee))
            ) || [];
            O = te(H.body, G, B);
          }
        }
      } else if (F && !c && l && x !== "get" && x !== "head")
        O = te(O);
      else if (F && c && !m && x !== "get" && x !== "head")
        throw new D(
          "Stream request bodies are not supported by the current fetch implementation",
          D.ERR_NOT_SUPPORT,
          h,
          $
        );
      P.isString(z) || (z = z ? "include" : "omit");
      const ne = c && "credentials" in s.prototype;
      if (P.isFormData(O)) {
        const H = M.getContentType();
        H && /^multipart\/form-data/i.test(H) && !/boundary=/i.test(H) && M.delete("content-type");
      }
      M.set("User-Agent", "axios/" + ca, !1);
      const A = {
        ...W,
        signal: R,
        method: x.toUpperCase(),
        headers: hc(M.normalize()),
        body: O,
        duplex: "half",
        credentials: ne ? z : void 0
      };
      $ = c && new s(_, A);
      let T = await (c ? Q($, W) : Q(_, A));
      const L = Ve.from(T.headers);
      if (X) {
        const H = P.toFiniteNumber(L.getContentLength());
        if (H != null && H > k)
          throw new D(
            "maxContentLength size of " + k + " exceeded",
            D.ERR_BAD_RESPONSE,
            h,
            $
          );
      }
      const V = f && (N === "stream" || N === "response");
      if (f && T.body && (C || X || V && S)) {
        const H = {};
        ["status", "statusText", "headers"].forEach((le) => {
          H[le] = T[le];
        });
        const ge = P.toFiniteNumber(L.getContentLength()), [G, B] = C && Ps(
          ge,
          pr(Rs(C), !0)
        ) || [];
        let oe = 0;
        const de = (le) => {
          if (X && (oe = le, oe > k))
            throw new D(
              "maxContentLength size of " + k + " exceeded",
              D.ERR_BAD_RESPONSE,
              h,
              $
            );
          G && G(le);
        };
        T = new i(
          zp(T.body, qp, de, () => {
            B && B(), S && S();
          }),
          H
        );
      }
      N = N || "text";
      let Y = await y[P.findKey(y, N) || "text"](
        T,
        h
      );
      if (X && !f && !V) {
        let H;
        if (Y != null && (typeof Y.byteLength == "number" ? H = Y.byteLength : typeof Y.size == "number" ? H = Y.size : typeof Y == "string" && (H = typeof r == "function" ? new r().encode(Y).byteLength : Y.length)), typeof H == "number" && H > k)
          throw new D(
            "maxContentLength size of " + k + " exceeded",
            D.ERR_BAD_RESPONSE,
            h,
            $
          );
      }
      return !V && S && S(), await new Promise((H, ge) => {
        Yn(H, ge, {
          data: Y,
          headers: Ve.from(T.headers),
          status: T.status,
          statusText: T.statusText,
          config: h,
          request: $
        });
      });
    } catch (E) {
      if (S && S(), R && R.aborted && R.reason instanceof D) {
        const I = R.reason;
        throw I.config = h, $ && (I.request = $), E !== I && Object.defineProperty(I, "cause", {
          __proto__: null,
          value: E,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), I;
      }
      if (d)
        throw $ && !d.request && (d.request = $), d;
      if (E instanceof D)
        throw $ && !E.request && (E.request = $), E;
      if (E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message)) {
        const I = new D(
          "Network Error",
          D.ERR_NETWORK,
          h,
          $,
          E && E.response
        );
        throw Object.defineProperty(I, "cause", {
          __proto__: null,
          value: E.cause || E,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), I;
      }
      throw D.from(E, E && E.code, h, $, E && E.response);
    }
  };
}, ew = /* @__PURE__ */ new Map(), Um = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: a } = t, s = [r, a, n];
  let i = s.length, o = i, c, u, l = ew;
  for (; o--; )
    c = s[o], u = l.get(c), u === void 0 && l.set(c, u = o ? /* @__PURE__ */ new Map() : Q0(t)), l = u;
  return u;
};
Um();
const Cc = {
  http: M0,
  xhr: G0,
  fetch: {
    get: Um
  }
};
P.forEach(Cc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Hp = (e) => `- ${e}`, tw = (e) => P.isFunction(e) || e === null || e === !1;
function nw(e, t) {
  e = P.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, a;
  const s = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let o;
    if (a = r, !tw(r) && (a = Cc[(o = String(r)).toLowerCase()], a === void 0))
      throw new D(`Unknown adapter '${o}'`);
    if (a && (P.isFunction(a) || (a = a.get(t))))
      break;
    s[o || "#" + i] = a;
  }
  if (!a) {
    const i = Object.entries(s).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let o = n ? i.length > 1 ? `since :
` + i.map(Hp).join(`
`) : " " + Hp(i[0]) : "as no adapter specified";
    throw new D(
      "There is no suitable adapter to dispatch the request " + o,
      D.ERR_NOT_SUPPORT
    );
  }
  return a;
}
const zm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: nw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cc
};
function Wi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new kn(null, e);
}
function Gp(e) {
  return Wi(e), e.headers = Ve.from(e.headers), e.data = Mi.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), zm.getAdapter(e.adapter || va.adapter, e)(e).then(
    function(r) {
      Wi(e), e.response = r;
      try {
        r.data = Mi.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = Ve.from(r.headers), r;
    },
    function(r) {
      if (!wm(r) && (Wi(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = Mi.call(
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
const Js = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Js[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Kp = {};
Js.transitional = function(t, n, r) {
  function a(s, i) {
    return "[Axios v" + ca + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, o) => {
    if (t === !1)
      throw new D(
        a(i, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED
      );
    return n && !Kp[i] && (Kp[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, o) : !0;
  };
};
Js.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function rw(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      const o = e[s], c = o === void 0 || i(o, s, e);
      if (c !== !0)
        throw new D(
          "option " + s + " must be " + c,
          D.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new D("Unknown option " + s, D.ERR_BAD_OPTION);
  }
}
const ss = {
  assertOptions: rw,
  validators: Js
}, tt = ss.validators;
let An = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new vp(),
      response: new vp()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = In(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && ss.assertOptions(
      r,
      {
        silentJSONParsing: tt.transitional(tt.boolean),
        forcedJSONParsing: tt.transitional(tt.boolean),
        clarifyTimeoutError: tt.transitional(tt.boolean),
        legacyInterceptorReqResOrdering: tt.transitional(tt.boolean),
        advertiseZstdAcceptEncoding: tt.transitional(tt.boolean),
        validateStatusUndefinedResolves: tt.transitional(tt.boolean)
      },
      !1
    ), a != null && (P.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : ss.assertOptions(
      a,
      {
        encode: tt.function,
        serialize: tt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ss.assertOptions(
      n,
      {
        baseUrl: tt.spelling("baseURL"),
        withXsrfToken: tt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && P.merge(s.common, s[n.method]);
    s && P.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (y) => {
      delete s[y];
    }), n.headers = Ve.concat(i, s);
    const o = [];
    let c = !0;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1)
        return;
      c = c && v.synchronous;
      const g = n.transitional || Ks;
      g && g.legacyInterceptorReqResOrdering ? o.unshift(v.fulfilled, v.rejected) : o.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let l, p = 0, m;
    if (!c) {
      const y = [Gp.bind(this), void 0];
      for (y.unshift(...o), y.push(...u), m = y.length, l = Promise.resolve(n); p < m; )
        l = l.then(y[p++], y[p++]);
      return l;
    }
    m = o.length;
    let f = n;
    for (; p < m; ) {
      const y = o[p++], v = o[p++];
      try {
        f = y(f);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      l = Gp.call(this, f);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, m = u.length; p < m; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(t) {
    t = In(this.defaults, t);
    const n = wc(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return _c(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  An.prototype[t] = function(n, r) {
    return this.request(
      In(r || {}, {
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
        In(o || {}, {
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
  An.prototype[t] = n(), t !== "query" && (An.prototype[t + "Form"] = n(!0));
});
let aw = class qm {
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
      r.reason || (r.reason = new kn(s, i, o), n(r.reason));
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
      token: new qm(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function sw(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function iw(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Lo = {
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
Object.entries(Lo).forEach(([e, t]) => {
  Lo[t] = e;
});
function Vm(e) {
  const t = new An(e), n = Uf(An.prototype.request, t);
  return P.extend(n, An.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Vm(In(e, a));
  }, n;
}
const Se = Vm(va);
Se.Axios = An;
Se.CanceledError = kn;
Se.CancelToken = aw;
Se.isCancel = wm;
Se.VERSION = ca;
Se.toFormData = Gs;
Se.AxiosError = D;
Se.Cancel = Se.CanceledError;
Se.all = function(t) {
  return Promise.all(t);
};
Se.spread = sw;
Se.isAxiosError = iw;
Se.mergeConfig = In;
Se.AxiosHeaders = Ve;
Se.formToJSON = (e) => $m(P.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = zm.getAdapter;
Se.HttpStatusCode = Lo;
Se.default = Se;
const {
  Axios: MD,
  AxiosError: UD,
  CanceledError: zD,
  isCancel: qD,
  CancelToken: VD,
  VERSION: BD,
  all: HD,
  Cancel: GD,
  isAxiosError: KD,
  spread: WD,
  toFormData: JD,
  AxiosHeaders: XD,
  HttpStatusCode: YD,
  formToJSON: ZD,
  getAdapter: QD,
  mergeConfig: eF,
  create: tF
} = Se, Cn = (e) => {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
}, Bm = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Hm = 1e6, ow = (e) => e >= "0" && e <= "9";
function Gm(e) {
  if (e === "0")
    return !0;
  if (/^[1-9]\d*$/.test(e)) {
    const t = Number.parseInt(e, 10);
    return t <= Number.MAX_SAFE_INTEGER && t <= Hm;
  }
  return !1;
}
function Ji(e, t) {
  return Bm.has(e) ? !1 : (e && Gm(e) ? t.push(Number.parseInt(e, 10)) : t.push(e), !0);
}
function cw(e) {
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
        if (!Ji(n, t))
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
          if ((n || r === "property") && !Ji(n, t))
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
            !Number.isNaN(o) && Number.isFinite(o) && o >= 0 && o <= Number.MAX_SAFE_INTEGER && o <= Hm && n === String(o) ? t.push(o) : t.push(n), n = "", r = "indexEnd";
          }
          break;
        }
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        n += i;
        break;
      }
      default: {
        if (r === "index" && !ow(i))
          throw new Error(`Invalid character '${i}' in an index at position ${s}`);
        if (r === "indexEnd")
          throw new Error(`Invalid character '${i}' after an index at position ${s}`);
        r === "start" && (r = "property"), n += i;
      }
    }
  }
  switch (a && (n += "\\"), r) {
    case "property": {
      if (!Ji(n, t))
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
function Xs(e) {
  if (typeof e == "string")
    return cw(e);
  if (Array.isArray(e)) {
    const t = [];
    for (const [n, r] of e.entries()) {
      if (typeof r != "string" && typeof r != "number")
        throw new TypeError(`Expected a string or number for path segment at index ${n}, got ${typeof r}`);
      if (typeof r == "number" && !Number.isFinite(r))
        throw new TypeError(`Path segment at index ${n} must be a finite number, got ${r}`);
      if (Bm.has(r))
        return [];
      typeof r == "string" && Gm(r) ? t.push(Number.parseInt(r, 10)) : t.push(r);
    }
    return t;
  }
  return [];
}
function Wp(e, t, n) {
  if (!Cn(e) || typeof t != "string" && !Array.isArray(t))
    return n === void 0 ? e : n;
  const r = Xs(t);
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
function ja(e, t, n) {
  if (!Cn(e) || typeof t != "string" && !Array.isArray(t))
    return e;
  const r = e, a = Xs(t);
  if (a.length === 0)
    return e;
  for (let s = 0; s < a.length; s++) {
    const i = a[s];
    if (s === a.length - 1)
      e[i] = n;
    else if (!Cn(e[i])) {
      const c = typeof a[s + 1] == "number";
      e[i] = c ? [] : {};
    }
    e = e[i];
  }
  return r;
}
function lw(e, t) {
  if (!Cn(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = Xs(t);
  if (n.length === 0)
    return !1;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (r === n.length - 1)
      return Object.hasOwn(e, a) ? (delete e[a], !0) : !1;
    if (e = e[a], !Cn(e))
      return !1;
  }
}
function Xi(e, t) {
  if (!Cn(e) || typeof t != "string" && !Array.isArray(t))
    return !1;
  const n = Xs(t);
  if (n.length === 0)
    return !1;
  for (const r of n) {
    if (!Cn(e) || !(r in e))
      return !1;
    e = e[r];
  }
  return !0;
}
const un = fn.homedir(), Dc = fn.tmpdir(), { env: Zn } = Ce, uw = (e) => {
  const t = ce.join(un, "Library");
  return {
    data: ce.join(t, "Application Support", e),
    config: ce.join(t, "Preferences", e),
    cache: ce.join(t, "Caches", e),
    log: ce.join(t, "Logs", e),
    temp: ce.join(Dc, e)
  };
}, pw = (e) => {
  const t = Zn.APPDATA || ce.join(un, "AppData", "Roaming"), n = Zn.LOCALAPPDATA || ce.join(un, "AppData", "Local");
  return {
    // Data/config/cache/log are invented by me as Windows isn't opinionated about this
    data: ce.join(n, e, "Data"),
    config: ce.join(t, e, "Config"),
    cache: ce.join(n, e, "Cache"),
    log: ce.join(n, e, "Log"),
    temp: ce.join(Dc, e)
  };
}, dw = (e) => {
  const t = ce.basename(un);
  return {
    data: ce.join(Zn.XDG_DATA_HOME || ce.join(un, ".local", "share"), e),
    config: ce.join(Zn.XDG_CONFIG_HOME || ce.join(un, ".config"), e),
    cache: ce.join(Zn.XDG_CACHE_HOME || ce.join(un, ".cache"), e),
    // https://wiki.debian.org/XDGBaseDirectorySpecification#state
    log: ce.join(Zn.XDG_STATE_HOME || ce.join(un, ".local", "state"), e),
    temp: ce.join(Dc, t, e)
  };
};
function fw(e, { suffix: t = "nodejs" } = {}) {
  if (typeof e != "string")
    throw new TypeError(`Expected a string, got ${typeof e}`);
  return t && (e += `-${t}`), Ce.platform === "darwin" ? uw(e) : Ce.platform === "win32" ? pw(e) : dw(e);
}
const en = (e, t) => {
  const { onError: n } = t;
  return function(...a) {
    return e.apply(void 0, a).catch(n);
  };
}, Bt = (e, t) => {
  const { onError: n } = t;
  return function(...a) {
    try {
      return e.apply(void 0, a);
    } catch (s) {
      return n(s);
    }
  };
}, mw = 250, tn = (e, t) => {
  const { isRetriable: n } = t;
  return function(a) {
    const { timeout: s } = a, i = a.interval ?? mw, o = Date.now() + s;
    return function c(...u) {
      return e.apply(void 0, u).catch((l) => {
        if (!n(l) || Date.now() >= o)
          throw l;
        const p = Math.round(i * Math.random());
        return p > 0 ? new Promise((f) => setTimeout(f, p)).then(() => c.apply(void 0, u)) : c.apply(void 0, u);
      });
    };
  };
}, nn = (e, t) => {
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
}, Qn = {
  /* API */
  isChangeErrorOk: (e) => {
    if (!Qn.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "ENOSYS" || !hw && (t === "EINVAL" || t === "EPERM");
  },
  isNodeError: (e) => e instanceof Error,
  isRetriableError: (e) => {
    if (!Qn.isNodeError(e))
      return !1;
    const { code: t } = e;
    return t === "EMFILE" || t === "ENFILE" || t === "EAGAIN" || t === "EBUSY" || t === "EACCESS" || t === "EACCES" || t === "EACCS" || t === "EPERM";
  },
  onChangeError: (e) => {
    if (!Qn.isNodeError(e))
      throw e;
    if (!Qn.isChangeErrorOk(e))
      throw e;
  }
}, ka = {
  onError: Qn.onChangeError
}, gt = {
  onError: () => {
  }
}, hw = Ce.getuid ? !Ce.getuid() : !1, nt = {
  isRetriable: Qn.isRetriableError
}, st = {
  attempt: {
    /* ASYNC */
    chmod: en(et(fe.chmod), ka),
    chown: en(et(fe.chown), ka),
    close: en(et(fe.close), gt),
    fsync: en(et(fe.fsync), gt),
    mkdir: en(et(fe.mkdir), gt),
    realpath: en(et(fe.realpath), gt),
    stat: en(et(fe.stat), gt),
    unlink: en(et(fe.unlink), gt),
    /* SYNC */
    chmodSync: Bt(fe.chmodSync, ka),
    chownSync: Bt(fe.chownSync, ka),
    closeSync: Bt(fe.closeSync, gt),
    existsSync: Bt(fe.existsSync, gt),
    fsyncSync: Bt(fe.fsync, gt),
    mkdirSync: Bt(fe.mkdirSync, gt),
    realpathSync: Bt(fe.realpathSync, gt),
    statSync: Bt(fe.statSync, gt),
    unlinkSync: Bt(fe.unlinkSync, gt)
  },
  retry: {
    /* ASYNC */
    close: tn(et(fe.close), nt),
    fsync: tn(et(fe.fsync), nt),
    open: tn(et(fe.open), nt),
    readFile: tn(et(fe.readFile), nt),
    rename: tn(et(fe.rename), nt),
    stat: tn(et(fe.stat), nt),
    write: tn(et(fe.write), nt),
    writeFile: tn(et(fe.writeFile), nt),
    /* SYNC */
    closeSync: nn(fe.closeSync, nt),
    fsyncSync: nn(fe.fsyncSync, nt),
    openSync: nn(fe.openSync, nt),
    readFileSync: nn(fe.readFileSync, nt),
    renameSync: nn(fe.renameSync, nt),
    statSync: nn(fe.statSync, nt),
    writeSync: nn(fe.writeSync, nt),
    writeFileSync: nn(fe.writeFileSync, nt)
  }
}, vw = "utf8", Jp = 438, yw = 511, gw = {}, bw = Ce.geteuid ? Ce.geteuid() : -1, _w = Ce.getegid ? Ce.getegid() : -1, $w = 1e3, ww = !!Ce.getuid;
Ce.getuid && Ce.getuid();
const Xp = 128, xw = (e) => e instanceof Error && "code" in e, Yp = (e) => typeof e == "string", Yi = (e) => e === void 0, Ew = Ce.platform === "linux", Km = Ce.platform === "win32", Fc = ["SIGHUP", "SIGINT", "SIGTERM"];
Km || Fc.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
Ew && Fc.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
class Sw {
  /* CONSTRUCTOR */
  constructor() {
    this.callbacks = /* @__PURE__ */ new Set(), this.exited = !1, this.exit = (t) => {
      if (!this.exited) {
        this.exited = !0;
        for (const n of this.callbacks)
          n();
        t && (Km && t !== "SIGINT" && t !== "SIGTERM" && t !== "SIGKILL" ? Ce.kill(Ce.pid, "SIGTERM") : Ce.kill(Ce.pid, t));
      }
    }, this.hook = () => {
      Ce.once("exit", () => this.exit());
      for (const t of Fc)
        try {
          Ce.once(t, () => this.exit(t));
        } catch {
        }
    }, this.register = (t) => (this.callbacks.add(t), () => {
      this.callbacks.delete(t);
    }), this.hook();
  }
}
const Pw = new Sw(), Rw = Pw.register, it = {
  /* VARIABLES */
  store: {},
  // filePath => purge
  /* API */
  create: (e) => {
    const t = `000000${Math.floor(Math.random() * 16777215).toString(16)}`.slice(-6), a = `.tmp-${Date.now().toString().slice(-10)}${t}`;
    return `${e}${a}`;
  },
  get: (e, t, n = !0) => {
    const r = it.truncate(t(e));
    return r in it.store ? it.get(e, t, n) : (it.store[r] = n, [r, () => delete it.store[r]]);
  },
  purge: (e) => {
    it.store[e] && (delete it.store[e], st.attempt.unlink(e));
  },
  purgeSync: (e) => {
    it.store[e] && (delete it.store[e], st.attempt.unlinkSync(e));
  },
  purgeSyncAll: () => {
    for (const e in it.store)
      it.purgeSync(e);
  },
  truncate: (e) => {
    const t = ce.basename(e);
    if (t.length <= Xp)
      return e;
    const n = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(t);
    if (!n)
      return e;
    const r = t.length - Xp;
    return `${e.slice(0, -t.length)}${n[1]}${n[2].slice(0, -r)}${n[3]}`;
  }
};
Rw(it.purgeSyncAll);
function Wm(e, t, n = gw) {
  if (Yp(n))
    return Wm(e, t, { encoding: n });
  const a = { timeout: n.timeout ?? $w };
  let s = null, i = null, o = null;
  try {
    const c = st.attempt.realpathSync(e), u = !!c;
    e = c || e, [i, s] = it.get(e, n.tmpCreate || it.create, n.tmpPurge !== !1);
    const l = ww && Yi(n.chown), p = Yi(n.mode);
    if (u && (l || p)) {
      const m = st.attempt.statSync(e);
      m && (n = { ...n }, l && (n.chown = { uid: m.uid, gid: m.gid }), p && (n.mode = m.mode));
    }
    if (!u) {
      const m = ce.dirname(e);
      st.attempt.mkdirSync(m, {
        mode: yw,
        recursive: !0
      });
    }
    o = st.retry.openSync(a)(i, "w", n.mode || Jp), n.tmpCreated && n.tmpCreated(i), Yp(t) ? st.retry.writeSync(a)(o, t, 0, n.encoding || vw) : Yi(t) || st.retry.writeSync(a)(o, t, 0, t.length, 0), n.fsync !== !1 && (n.fsyncWait !== !1 ? st.retry.fsyncSync(a)(o) : st.attempt.fsync(o)), st.retry.closeSync(a)(o), o = null, n.chown && (n.chown.uid !== bw || n.chown.gid !== _w) && st.attempt.chownSync(i, n.chown.uid, n.chown.gid), n.mode && n.mode !== Jp && st.attempt.chmodSync(i, n.mode);
    try {
      st.retry.renameSync(a)(i, e);
    } catch (m) {
      if (!xw(m) || m.code !== "ENAMETOOLONG")
        throw m;
      st.retry.renameSync(a)(i, it.truncate(e));
    }
    s(), i = null;
  } finally {
    o && st.attempt.closeSync(o), i && it.purge(i);
  }
}
var Mo = { exports: {} }, Jm = {}, Ht = {}, vn = {}, ba = {}, me = {}, ua = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor(_) {
      if (super(), !e.IDENTIFIER.test(_))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = _;
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
    constructor(_) {
      super(), this._items = typeof _ == "string" ? [_] : _;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const _ = this._items[0];
      return _ === "" || _ === '""';
    }
    get str() {
      var _;
      return (_ = this._str) !== null && _ !== void 0 ? _ : this._str = this._items.reduce((x, O) => `${x}${O}`, "");
    }
    get names() {
      var _;
      return (_ = this._names) !== null && _ !== void 0 ? _ : this._names = this._items.reduce((x, O) => (O instanceof n && (x[O.str] = (x[O.str] || 0) + 1), x), {});
    }
  }
  e._Code = r, e.nil = new r("");
  function a(h, ..._) {
    const x = [h[0]];
    let O = 0;
    for (; O < _.length; )
      o(x, _[O]), x.push(h[++O]);
    return new r(x);
  }
  e._ = a;
  const s = new r("+");
  function i(h, ..._) {
    const x = [f(h[0])];
    let O = 0;
    for (; O < _.length; )
      x.push(s), o(x, _[O]), x.push(s, f(h[++O]));
    return c(x), new r(x);
  }
  e.str = i;
  function o(h, _) {
    _ instanceof r ? h.push(..._._items) : _ instanceof n ? h.push(_) : h.push(p(_));
  }
  e.addCodeArg = o;
  function c(h) {
    let _ = 1;
    for (; _ < h.length - 1; ) {
      if (h[_] === s) {
        const x = u(h[_ - 1], h[_ + 1]);
        if (x !== void 0) {
          h.splice(_ - 1, 3, x);
          continue;
        }
        h[_++] = "+";
      }
      _++;
    }
  }
  function u(h, _) {
    if (_ === '""')
      return h;
    if (h === '""')
      return _;
    if (typeof h == "string")
      return _ instanceof n || h[h.length - 1] !== '"' ? void 0 : typeof _ != "string" ? `${h.slice(0, -1)}${_}"` : _[0] === '"' ? h.slice(0, -1) + _.slice(1) : void 0;
    if (typeof _ == "string" && _[0] === '"' && !(h instanceof n))
      return `"${h}${_.slice(1)}`;
  }
  function l(h, _) {
    return _.emptyStr() ? h : h.emptyStr() ? _ : i`${h}${_}`;
  }
  e.strConcat = l;
  function p(h) {
    return typeof h == "number" || typeof h == "boolean" || h === null ? h : f(Array.isArray(h) ? h.join(",") : h);
  }
  function m(h) {
    return new r(f(h));
  }
  e.stringify = m;
  function f(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = f;
  function y(h) {
    return typeof h == "string" && e.IDENTIFIER.test(h) ? new r(`.${h}`) : a`[${h}]`;
  }
  e.getProperty = y;
  function v(h) {
    if (typeof h == "string" && e.IDENTIFIER.test(h))
      return new r(`${h}`);
    throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e.getEsmExportName = v;
  function g(h) {
    return new r(h.toString());
  }
  e.regexpCode = g;
})(ua);
var Uo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = ua;
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
      const m = this.toName(u), { prefix: f } = m, y = (p = l.key) !== null && p !== void 0 ? p : l.ref;
      let v = this._values[f];
      if (v) {
        const _ = v.get(y);
        if (_)
          return _;
      } else
        v = this._values[f] = /* @__PURE__ */ new Map();
      v.set(y, m);
      const g = this._scope[f] || (this._scope[f] = []), h = g.length;
      return g[h] = l.ref, m.setValue(l, { property: f, itemIndex: h }), m;
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
      let f = t.nil;
      for (const y in u) {
        const v = u[y];
        if (!v)
          continue;
        const g = p[y] = p[y] || /* @__PURE__ */ new Map();
        v.forEach((h) => {
          if (g.has(h))
            return;
          g.set(h, r.Started);
          let _ = l(h);
          if (_) {
            const x = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            f = (0, t._)`${f}${x} ${h} = ${_};${this.opts._n}`;
          } else if (_ = m?.(h))
            f = (0, t._)`${f}${_}${this.opts._n}`;
          else
            throw new n(h);
          g.set(h, r.Completed);
        });
      }
      return f;
    }
  }
  e.ValueScope = o;
})(Uo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = ua, n = Uo;
  var r = ua;
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
  var a = Uo;
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
    constructor(d, b, E) {
      super(), this.varKind = d, this.name = b, this.rhs = E;
    }
    render({ es5: d, _n: b }) {
      const E = d ? n.varKinds.var : this.varKind, I = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${E} ${this.name}${I};` + b;
    }
    optimizeNames(d, b) {
      if (d[this.name.str])
        return this.rhs && (this.rhs = k(this.rhs, d, b)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends s {
    constructor(d, b, E) {
      super(), this.lhs = d, this.rhs = b, this.sideEffects = E;
    }
    render({ _n: d }) {
      return `${this.lhs} = ${this.rhs};` + d;
    }
    optimizeNames(d, b) {
      if (!(this.lhs instanceof t.Name && !d[this.lhs.str] && !this.sideEffects))
        return this.rhs = k(this.rhs, d, b), this;
    }
    get names() {
      const d = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return W(d, this.rhs);
    }
  }
  class c extends o {
    constructor(d, b, E, I) {
      super(d, E, I), this.op = b;
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
      return this.code = k(this.code, d, b), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class f extends s {
    constructor(d = []) {
      super(), this.nodes = d;
    }
    render(d) {
      return this.nodes.reduce((b, E) => b + E.render(d), "");
    }
    optimizeNodes() {
      const { nodes: d } = this;
      let b = d.length;
      for (; b--; ) {
        const E = d[b].optimizeNodes();
        Array.isArray(E) ? d.splice(b, 1, ...E) : E ? d[b] = E : d.splice(b, 1);
      }
      return d.length > 0 ? this : void 0;
    }
    optimizeNames(d, b) {
      const { nodes: E } = this;
      let I = E.length;
      for (; I--; ) {
        const F = E[I];
        F.optimizeNames(d, b) || (U(d, F.names), E.splice(I, 1));
      }
      return E.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((d, b) => z(d, b.names), {});
    }
  }
  class y extends f {
    render(d) {
      return "{" + d._n + super.render(d) + "}" + d._n;
    }
  }
  class v extends f {
  }
  class g extends y {
  }
  g.kind = "else";
  class h extends y {
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
        const E = b.optimizeNodes();
        b = this.else = Array.isArray(E) ? new g(E) : E;
      }
      if (b)
        return d === !1 ? b instanceof h ? b : b.nodes : this.nodes.length ? this : new h(X(d), b instanceof h ? [b] : b.nodes);
      if (!(d === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(d, b) {
      var E;
      if (this.else = (E = this.else) === null || E === void 0 ? void 0 : E.optimizeNames(d, b), !!(super.optimizeNames(d, b) || this.else))
        return this.condition = k(this.condition, d, b), this;
    }
    get names() {
      const d = super.names;
      return W(d, this.condition), this.else && z(d, this.else.names), d;
    }
  }
  h.kind = "if";
  class _ extends y {
  }
  _.kind = "for";
  class x extends _ {
    constructor(d) {
      super(), this.iteration = d;
    }
    render(d) {
      return `for(${this.iteration})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iteration = k(this.iteration, d, b), this;
    }
    get names() {
      return z(super.names, this.iteration.names);
    }
  }
  class O extends _ {
    constructor(d, b, E, I) {
      super(), this.varKind = d, this.name = b, this.from = E, this.to = I;
    }
    render(d) {
      const b = d.es5 ? n.varKinds.var : this.varKind, { name: E, from: I, to: F } = this;
      return `for(${b} ${E}=${I}; ${E}<${F}; ${E}++)` + super.render(d);
    }
    get names() {
      const d = W(super.names, this.from);
      return W(d, this.to);
    }
  }
  class j extends _ {
    constructor(d, b, E, I) {
      super(), this.loop = d, this.varKind = b, this.name = E, this.iterable = I;
    }
    render(d) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iterable = k(this.iterable, d, b), this;
    }
    get names() {
      return z(super.names, this.iterable.names);
    }
  }
  class q extends y {
    constructor(d, b, E) {
      super(), this.name = d, this.args = b, this.async = E;
    }
    render(d) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(d);
    }
  }
  q.kind = "func";
  class J extends f {
    render(d) {
      return "return " + super.render(d);
    }
  }
  J.kind = "return";
  class C extends y {
    render(d) {
      let b = "try" + super.render(d);
      return this.catch && (b += this.catch.render(d)), this.finally && (b += this.finally.render(d)), b;
    }
    optimizeNodes() {
      var d, b;
      return super.optimizeNodes(), (d = this.catch) === null || d === void 0 || d.optimizeNodes(), (b = this.finally) === null || b === void 0 || b.optimizeNodes(), this;
    }
    optimizeNames(d, b) {
      var E, I;
      return super.optimizeNames(d, b), (E = this.catch) === null || E === void 0 || E.optimizeNames(d, b), (I = this.finally) === null || I === void 0 || I.optimizeNames(d, b), this;
    }
    get names() {
      const d = super.names;
      return this.catch && z(d, this.catch.names), this.finally && z(d, this.finally.names), d;
    }
  }
  class ee extends y {
    constructor(d) {
      super(), this.error = d;
    }
    render(d) {
      return `catch(${this.error})` + super.render(d);
    }
  }
  ee.kind = "catch";
  class N extends y {
    render(d) {
      return "finally" + super.render(d);
    }
  }
  N.kind = "finally";
  class M {
    constructor(d, b = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...b, _n: b.lines ? `
` : "" }, this._extScope = d, this._scope = new n.Scope({ parent: d }), this._nodes = [new v()];
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
      const E = this._extScope.value(d, b);
      return (this._values[E.prefix] || (this._values[E.prefix] = /* @__PURE__ */ new Set())).add(E), E;
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
    _def(d, b, E, I) {
      const F = this._scope.toName(b);
      return E !== void 0 && I && (this._constants[F.str] = E), this._leafNode(new i(d, F, E)), F;
    }
    // `const` declaration (`var` in es5 mode)
    const(d, b, E) {
      return this._def(n.varKinds.const, d, b, E);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(d, b, E) {
      return this._def(n.varKinds.let, d, b, E);
    }
    // `var` declaration with optional assignment
    var(d, b, E) {
      return this._def(n.varKinds.var, d, b, E);
    }
    // assignment code
    assign(d, b, E) {
      return this._leafNode(new o(d, b, E));
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
      for (const [E, I] of d)
        b.length > 1 && b.push(","), b.push(E), (E !== I || this.opts.es5) && (b.push(":"), (0, t.addCodeArg)(b, I));
      return b.push("}"), new t._Code(b);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(d, b, E) {
      if (this._blockNode(new h(d)), b && E)
        this.code(b).else().code(E).endIf();
      else if (b)
        this.code(b).endIf();
      else if (E)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(d) {
      return this._elseNode(new h(d));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new g());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(h, g);
    }
    _for(d, b) {
      return this._blockNode(d), b && this.code(b).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(d, b) {
      return this._for(new x(d), b);
    }
    // `for` statement for a range of values
    forRange(d, b, E, I, F = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const te = this._scope.toName(d);
      return this._for(new O(F, te, b, E), () => I(te));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(d, b, E, I = n.varKinds.const) {
      const F = this._scope.toName(d);
      if (this.opts.es5) {
        const te = b instanceof t.Name ? b : this.var("_arr", b);
        return this.forRange("_i", 0, (0, t._)`${te}.length`, (ne) => {
          this.var(F, (0, t._)`${te}[${ne}]`), E(F);
        });
      }
      return this._for(new j("of", I, F, b), () => E(F));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(d, b, E, I = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(d, (0, t._)`Object.keys(${b})`, E);
      const F = this._scope.toName(d);
      return this._for(new j("in", I, F, b), () => E(F));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(_);
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
      const b = new J();
      if (this._blockNode(b), this.code(d), b.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(J);
    }
    // `try` statement
    try(d, b, E) {
      if (!b && !E)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const I = new C();
      if (this._blockNode(I), this.code(d), b) {
        const F = this.name("e");
        this._currNode = I.catch = new ee(F), b(F);
      }
      return E && (this._currNode = I.finally = new N(), this.code(E)), this._endBlockNode(ee, N);
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
      const E = this._nodes.length - b;
      if (E < 0 || d !== void 0 && E !== d)
        throw new Error(`CodeGen: wrong number of nodes: ${E} vs ${d} expected`);
      return this._nodes.length = b, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(d, b = t.nil, E, I) {
      return this._blockNode(new q(d, b, E)), I && this.code(I).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(q);
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
      const E = this._currNode;
      if (E instanceof d || b && E instanceof b)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${b ? `${d.kind}/${b.kind}` : d.kind}"`);
    }
    _elseNode(d) {
      const b = this._currNode;
      if (!(b instanceof h))
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
  e.CodeGen = M;
  function z(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) + (d[b] || 0);
    return w;
  }
  function W(w, d) {
    return d instanceof t._CodeOrName ? z(w, d.names) : w;
  }
  function k(w, d, b) {
    if (w instanceof t.Name)
      return E(w);
    if (!I(w))
      return w;
    return new t._Code(w._items.reduce((F, te) => (te instanceof t.Name && (te = E(te)), te instanceof t._Code ? F.push(...te._items) : F.push(te), F), []));
    function E(F) {
      const te = b[F.str];
      return te === void 0 || d[F.str] !== 1 ? F : (delete d[F.str], te);
    }
    function I(F) {
      return F instanceof t._Code && F._items.some((te) => te instanceof t.Name && d[te.str] === 1 && b[te.str] !== void 0);
    }
  }
  function U(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) - (d[b] || 0);
  }
  function X(w) {
    return typeof w == "boolean" || typeof w == "number" || w === null ? !w : (0, t._)`!${S(w)}`;
  }
  e.not = X;
  const K = $(e.operators.AND);
  function ae(...w) {
    return w.reduce(K);
  }
  e.and = ae;
  const Q = $(e.operators.OR);
  function R(...w) {
    return w.reduce(Q);
  }
  e.or = R;
  function $(w) {
    return (d, b) => d === t.nil ? b : b === t.nil ? d : (0, t._)`${S(d)} ${w} ${S(b)}`;
  }
  function S(w) {
    return w instanceof t.Name ? w : (0, t._)`(${w})`;
  }
})(me);
var Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.checkStrictMode = Z.getErrorPath = Z.Type = Z.useFunc = Z.setEvaluated = Z.evaluatedPropsToName = Z.mergeEvaluated = Z.eachItem = Z.unescapeJsonPointer = Z.escapeJsonPointer = Z.escapeFragment = Z.unescapeFragment = Z.schemaRefOrVal = Z.schemaHasRulesButRef = Z.schemaHasRules = Z.checkUnknownRules = Z.alwaysValidSchema = Z.toHash = void 0;
const Re = me, Ow = ua;
function Aw(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
Z.toHash = Aw;
function Tw(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (Xm(e, t), !Ym(t, e.self.RULES.all));
}
Z.alwaysValidSchema = Tw;
function Xm(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const a = r.RULES.keywords;
  for (const s in t)
    a[s] || eh(e, `unknown keyword: "${s}"`);
}
Z.checkUnknownRules = Xm;
function Ym(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
Z.schemaHasRules = Ym;
function jw(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
Z.schemaHasRulesButRef = jw;
function kw({ topSchemaRef: e, schemaPath: t }, n, r, a) {
  if (!a) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, Re._)`${n}`;
  }
  return (0, Re._)`${e}${t}${(0, Re.getProperty)(r)}`;
}
Z.schemaRefOrVal = kw;
function Nw(e) {
  return Zm(decodeURIComponent(e));
}
Z.unescapeFragment = Nw;
function Iw(e) {
  return encodeURIComponent(Lc(e));
}
Z.escapeFragment = Iw;
function Lc(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
Z.escapeJsonPointer = Lc;
function Zm(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
Z.unescapeJsonPointer = Zm;
function Cw(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
Z.eachItem = Cw;
function Zp({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (a, s, i, o) => {
    const c = i === void 0 ? s : i instanceof Re.Name ? (s instanceof Re.Name ? e(a, s, i) : t(a, s, i), i) : s instanceof Re.Name ? (t(a, i, s), s) : n(s, i);
    return o === Re.Name && !(c instanceof Re.Name) ? r(a, c) : c;
  };
}
Z.mergeEvaluated = {
  props: Zp({
    mergeNames: (e, t, n) => e.if((0, Re._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, Re._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, Re._)`${n} || {}`).code((0, Re._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, Re._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, Re._)`${n} || {}`), Mc(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: Qm
  }),
  items: Zp({
    mergeNames: (e, t, n) => e.if((0, Re._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, Re._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, Re._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, Re._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function Qm(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, Re._)`{}`);
  return t !== void 0 && Mc(e, n, t), n;
}
Z.evaluatedPropsToName = Qm;
function Mc(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, Re._)`${t}${(0, Re.getProperty)(r)}`, !0));
}
Z.setEvaluated = Mc;
const Qp = {};
function Dw(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: Qp[t.code] || (Qp[t.code] = new Ow._Code(t.code))
  });
}
Z.useFunc = Dw;
var zo;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(zo || (Z.Type = zo = {}));
function Fw(e, t, n) {
  if (e instanceof Re.Name) {
    const r = t === zo.Num;
    return n ? r ? (0, Re._)`"[" + ${e} + "]"` : (0, Re._)`"['" + ${e} + "']"` : r ? (0, Re._)`"/" + ${e}` : (0, Re._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, Re.getProperty)(e).toString() : "/" + Lc(e);
}
Z.getErrorPath = Fw;
function eh(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
Z.checkStrictMode = eh;
var _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
const rt = me, Lw = {
  // validation function arguments
  data: new rt.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new rt.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new rt.Name("instancePath"),
  parentData: new rt.Name("parentData"),
  parentDataProperty: new rt.Name("parentDataProperty"),
  rootData: new rt.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new rt.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new rt.Name("vErrors"),
  // null or array of validation errors
  errors: new rt.Name("errors"),
  // counter of validation errors
  this: new rt.Name("this"),
  // "globals"
  self: new rt.Name("self"),
  scope: new rt.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new rt.Name("json"),
  jsonPos: new rt.Name("jsonPos"),
  jsonLen: new rt.Name("jsonLen"),
  jsonPart: new rt.Name("jsonPart")
};
_t.default = Lw;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = me, n = Z, r = _t;
  e.keywordError = {
    message: ({ keyword: g }) => (0, t.str)`must pass "${g}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: g, schemaType: h }) => h ? (0, t.str)`"${g}" keyword must be ${h} ($data)` : (0, t.str)`"${g}" keyword is invalid ($data)`
  };
  function a(g, h = e.keywordError, _, x) {
    const { it: O } = g, { gen: j, compositeRule: q, allErrors: J } = O, C = p(g, h, _);
    x ?? (q || J) ? c(j, C) : u(O, (0, t._)`[${C}]`);
  }
  e.reportError = a;
  function s(g, h = e.keywordError, _) {
    const { it: x } = g, { gen: O, compositeRule: j, allErrors: q } = x, J = p(g, h, _);
    c(O, J), j || q || u(x, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(g, h) {
    g.assign(r.default.errors, h), g.if((0, t._)`${r.default.vErrors} !== null`, () => g.if(h, () => g.assign((0, t._)`${r.default.vErrors}.length`, h), () => g.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function o({ gen: g, keyword: h, schemaValue: _, data: x, errsCount: O, it: j }) {
    if (O === void 0)
      throw new Error("ajv implementation error");
    const q = g.name("err");
    g.forRange("i", O, r.default.errors, (J) => {
      g.const(q, (0, t._)`${r.default.vErrors}[${J}]`), g.if((0, t._)`${q}.instancePath === undefined`, () => g.assign((0, t._)`${q}.instancePath`, (0, t.strConcat)(r.default.instancePath, j.errorPath))), g.assign((0, t._)`${q}.schemaPath`, (0, t.str)`${j.errSchemaPath}/${h}`), j.opts.verbose && (g.assign((0, t._)`${q}.schema`, _), g.assign((0, t._)`${q}.data`, x));
    });
  }
  e.extendErrors = o;
  function c(g, h) {
    const _ = g.const("err", h);
    g.if((0, t._)`${r.default.vErrors} === null`, () => g.assign(r.default.vErrors, (0, t._)`[${_}]`), (0, t._)`${r.default.vErrors}.push(${_})`), g.code((0, t._)`${r.default.errors}++`);
  }
  function u(g, h) {
    const { gen: _, validateName: x, schemaEnv: O } = g;
    O.$async ? _.throw((0, t._)`new ${g.ValidationError}(${h})`) : (_.assign((0, t._)`${x}.errors`, h), _.return(!1));
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
  function p(g, h, _) {
    const { createErrors: x } = g.it;
    return x === !1 ? (0, t._)`{}` : m(g, h, _);
  }
  function m(g, h, _ = {}) {
    const { gen: x, it: O } = g, j = [
      f(O, _),
      y(g, _)
    ];
    return v(g, h, j), x.object(...j);
  }
  function f({ errorPath: g }, { instancePath: h }) {
    const _ = h ? (0, t.str)`${g}${(0, n.getErrorPath)(h, n.Type.Str)}` : g;
    return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, _)];
  }
  function y({ keyword: g, it: { errSchemaPath: h } }, { schemaPath: _, parentSchema: x }) {
    let O = x ? h : (0, t.str)`${h}/${g}`;
    return _ && (O = (0, t.str)`${O}${(0, n.getErrorPath)(_, n.Type.Str)}`), [l.schemaPath, O];
  }
  function v(g, { params: h, message: _ }, x) {
    const { keyword: O, data: j, schemaValue: q, it: J } = g, { opts: C, propertyName: ee, topSchemaRef: N, schemaPath: M } = J;
    x.push([l.keyword, O], [l.params, typeof h == "function" ? h(g) : h || (0, t._)`{}`]), C.messages && x.push([l.message, typeof _ == "function" ? _(g) : _]), C.verbose && x.push([l.schema, q], [l.parentSchema, (0, t._)`${N}${M}`], [r.default.data, j]), ee && x.push([l.propertyName, ee]);
  }
})(ba);
var ed;
function Mw() {
  if (ed) return vn;
  ed = 1, Object.defineProperty(vn, "__esModule", { value: !0 }), vn.boolOrEmptySchema = vn.topBoolOrEmptySchema = void 0;
  const e = ba, t = me, n = _t, r = {
    message: "boolean schema is false"
  };
  function a(o) {
    const { gen: c, schema: u, validateName: l } = o;
    u === !1 ? i(o, !1) : typeof u == "object" && u.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${l}.errors`, null), c.return(!0));
  }
  vn.topBoolOrEmptySchema = a;
  function s(o, c) {
    const { gen: u, schema: l } = o;
    l === !1 ? (u.var(c, !1), i(o)) : u.var(c, !0);
  }
  vn.boolOrEmptySchema = s;
  function i(o, c) {
    const { gen: u, data: l } = o, p = {
      gen: u,
      keyword: "false schema",
      data: l,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: o
    };
    (0, e.reportError)(p, r, void 0, c);
  }
  return vn;
}
var ze = {}, Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.getRules = Dn.isJSONType = void 0;
const Uw = ["string", "number", "integer", "boolean", "null", "object", "array"], zw = new Set(Uw);
function qw(e) {
  return typeof e == "string" && zw.has(e);
}
Dn.isJSONType = qw;
function Vw() {
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
Dn.getRules = Vw;
var Gt = {}, td;
function th() {
  if (td) return Gt;
  td = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.shouldUseRule = Gt.shouldUseGroup = Gt.schemaHasRulesForType = void 0;
  function e({ schema: r, self: a }, s) {
    const i = a.RULES.types[s];
    return i && i !== !0 && t(r, i);
  }
  Gt.schemaHasRulesForType = e;
  function t(r, a) {
    return a.rules.some((s) => n(r, s));
  }
  Gt.shouldUseGroup = t;
  function n(r, a) {
    var s;
    return r[a.keyword] !== void 0 || ((s = a.definition.implements) === null || s === void 0 ? void 0 : s.some((i) => r[i] !== void 0));
  }
  return Gt.shouldUseRule = n, Gt;
}
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.reportTypeError = ze.checkDataTypes = ze.checkDataType = ze.coerceAndCheckDataType = ze.getJSONTypes = ze.getSchemaTypes = ze.DataType = void 0;
const Bw = Dn, Hw = th(), Gw = ba, he = me, nh = Z;
var rr;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(rr || (ze.DataType = rr = {}));
function Kw(e) {
  const t = rh(e.type);
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
ze.getSchemaTypes = Kw;
function rh(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(Bw.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
ze.getJSONTypes = rh;
function Ww(e, t) {
  const { gen: n, data: r, opts: a } = e, s = Jw(t, a.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, Hw.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const o = Uc(t, r, a.strictNumbers, rr.Wrong);
    n.if(o, () => {
      s.length ? Xw(e, t, s) : zc(e);
    });
  }
  return i;
}
ze.coerceAndCheckDataType = Ww;
const ah = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function Jw(e, t) {
  return t ? e.filter((n) => ah.has(n) || t === "array" && n === "array") : [];
}
function Xw(e, t, n) {
  const { gen: r, data: a, opts: s } = e, i = r.let("dataType", (0, he._)`typeof ${a}`), o = r.let("coerced", (0, he._)`undefined`);
  s.coerceTypes === "array" && r.if((0, he._)`${i} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, he._)`${a}[0]`).assign(i, (0, he._)`typeof ${a}`).if(Uc(t, a, s.strictNumbers), () => r.assign(o, a))), r.if((0, he._)`${o} !== undefined`);
  for (const u of n)
    (ah.has(u) || u === "array" && s.coerceTypes === "array") && c(u);
  r.else(), zc(e), r.endIf(), r.if((0, he._)`${o} !== undefined`, () => {
    r.assign(a, o), Yw(e, o);
  });
  function c(u) {
    switch (u) {
      case "string":
        r.elseIf((0, he._)`${i} == "number" || ${i} == "boolean"`).assign(o, (0, he._)`"" + ${a}`).elseIf((0, he._)`${a} === null`).assign(o, (0, he._)`""`);
        return;
      case "number":
        r.elseIf((0, he._)`${i} == "boolean" || ${a} === null
              || (${i} == "string" && ${a} && ${a} == +${a})`).assign(o, (0, he._)`+${a}`);
        return;
      case "integer":
        r.elseIf((0, he._)`${i} === "boolean" || ${a} === null
              || (${i} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(o, (0, he._)`+${a}`);
        return;
      case "boolean":
        r.elseIf((0, he._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(o, !1).elseIf((0, he._)`${a} === "true" || ${a} === 1`).assign(o, !0);
        return;
      case "null":
        r.elseIf((0, he._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(o, null);
        return;
      case "array":
        r.elseIf((0, he._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${a} === null`).assign(o, (0, he._)`[${a}]`);
    }
  }
}
function Yw({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, he._)`${t} !== undefined`, () => e.assign((0, he._)`${t}[${n}]`, r));
}
function qo(e, t, n, r = rr.Correct) {
  const a = r === rr.Correct ? he.operators.EQ : he.operators.NEQ;
  let s;
  switch (e) {
    case "null":
      return (0, he._)`${t} ${a} null`;
    case "array":
      s = (0, he._)`Array.isArray(${t})`;
      break;
    case "object":
      s = (0, he._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      s = i((0, he._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      s = i();
      break;
    default:
      return (0, he._)`typeof ${t} ${a} ${e}`;
  }
  return r === rr.Correct ? s : (0, he.not)(s);
  function i(o = he.nil) {
    return (0, he.and)((0, he._)`typeof ${t} == "number"`, o, n ? (0, he._)`isFinite(${t})` : he.nil);
  }
}
ze.checkDataType = qo;
function Uc(e, t, n, r) {
  if (e.length === 1)
    return qo(e[0], t, n, r);
  let a;
  const s = (0, nh.toHash)(e);
  if (s.array && s.object) {
    const i = (0, he._)`typeof ${t} != "object"`;
    a = s.null ? i : (0, he._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    a = he.nil;
  s.number && delete s.integer;
  for (const i in s)
    a = (0, he.and)(a, qo(i, t, n, r));
  return a;
}
ze.checkDataTypes = Uc;
const Zw = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, he._)`{type: ${e}}` : (0, he._)`{type: ${t}}`
};
function zc(e) {
  const t = Qw(e);
  (0, Gw.reportError)(t, Zw);
}
ze.reportTypeError = zc;
function Qw(e) {
  const { gen: t, data: n, schema: r } = e, a = (0, nh.schemaRefOrVal)(e, r, "type");
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
var Fr = {}, nd;
function ex() {
  if (nd) return Fr;
  nd = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.assignDefaults = void 0;
  const e = me, t = Z;
  function n(a, s) {
    const { properties: i, items: o } = a.schema;
    if (s === "object" && i)
      for (const c in i)
        r(a, c, i[c].default);
    else s === "array" && Array.isArray(o) && o.forEach((c, u) => r(a, u, c.default));
  }
  Fr.assignDefaults = n;
  function r(a, s, i) {
    const { gen: o, compositeRule: c, data: u, opts: l } = a;
    if (i === void 0)
      return;
    const p = (0, e._)`${u}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(a, `default is ignored for: ${p}`);
      return;
    }
    let m = (0, e._)`${p} === undefined`;
    l.useDefaults === "empty" && (m = (0, e._)`${m} || ${p} === null || ${p} === ""`), o.if(m, (0, e._)`${p} = ${(0, e.stringify)(i)}`);
  }
  return Fr;
}
var Et = {}, be = {};
Object.defineProperty(be, "__esModule", { value: !0 });
be.validateUnion = be.validateArray = be.usePattern = be.callValidateCode = be.schemaProperties = be.allSchemaProperties = be.noPropertyInData = be.propertyInData = be.isOwnProperty = be.hasPropFunc = be.reportMissingProp = be.checkMissingProp = be.checkReportMissingProp = void 0;
const je = me, qc = Z, rn = _t, tx = Z;
function nx(e, t) {
  const { gen: n, data: r, it: a } = e;
  n.if(Bc(n, r, t, a.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, je._)`${t}` }, !0), e.error();
  });
}
be.checkReportMissingProp = nx;
function rx({ gen: e, data: t, it: { opts: n } }, r, a) {
  return (0, je.or)(...r.map((s) => (0, je.and)(Bc(e, t, s, n.ownProperties), (0, je._)`${a} = ${s}`)));
}
be.checkMissingProp = rx;
function ax(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
be.reportMissingProp = ax;
function sh(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, je._)`Object.prototype.hasOwnProperty`
  });
}
be.hasPropFunc = sh;
function Vc(e, t, n) {
  return (0, je._)`${sh(e)}.call(${t}, ${n})`;
}
be.isOwnProperty = Vc;
function sx(e, t, n, r) {
  const a = (0, je._)`${t}${(0, je.getProperty)(n)} !== undefined`;
  return r ? (0, je._)`${a} && ${Vc(e, t, n)}` : a;
}
be.propertyInData = sx;
function Bc(e, t, n, r) {
  const a = (0, je._)`${t}${(0, je.getProperty)(n)} === undefined`;
  return r ? (0, je.or)(a, (0, je.not)(Vc(e, t, n))) : a;
}
be.noPropertyInData = Bc;
function ih(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
be.allSchemaProperties = ih;
function ix(e, t) {
  return ih(t).filter((n) => !(0, qc.alwaysValidSchema)(e, t[n]));
}
be.schemaProperties = ix;
function ox({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: a, errorPath: s }, it: i }, o, c, u) {
  const l = u ? (0, je._)`${e}, ${t}, ${r}${a}` : t, p = [
    [rn.default.instancePath, (0, je.strConcat)(rn.default.instancePath, s)],
    [rn.default.parentData, i.parentData],
    [rn.default.parentDataProperty, i.parentDataProperty],
    [rn.default.rootData, rn.default.rootData]
  ];
  i.opts.dynamicRef && p.push([rn.default.dynamicAnchors, rn.default.dynamicAnchors]);
  const m = (0, je._)`${l}, ${n.object(...p)}`;
  return c !== je.nil ? (0, je._)`${o}.call(${c}, ${m})` : (0, je._)`${o}(${m})`;
}
be.callValidateCode = ox;
const cx = (0, je._)`new RegExp`;
function lx({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: a } = t.code, s = a(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, je._)`${a.code === "new RegExp" ? cx : (0, tx.useFunc)(e, a)}(${n}, ${r})`
  });
}
be.usePattern = lx;
function ux(e) {
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
        dataPropType: qc.Type.Num
      }, s), t.if((0, je.not)(s), o);
    });
  }
}
be.validateArray = ux;
function px(e) {
  const { gen: t, schema: n, keyword: r, it: a } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, qc.alwaysValidSchema)(a, c)) && !a.opts.unevaluated)
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
be.validateUnion = px;
var rd;
function dx() {
  if (rd) return Et;
  rd = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.validateKeywordUsage = Et.validSchemaType = Et.funcKeywordCode = Et.macroKeywordCode = void 0;
  const e = me, t = _t, n = be, r = ba;
  function a(m, f) {
    const { gen: y, keyword: v, schema: g, parentSchema: h, it: _ } = m, x = f.macro.call(_.self, g, h, _), O = u(y, v, x);
    _.opts.validateSchema !== !1 && _.self.validateSchema(x, !0);
    const j = y.name("valid");
    m.subschema({
      schema: x,
      schemaPath: e.nil,
      errSchemaPath: `${_.errSchemaPath}/${v}`,
      topSchemaRef: O,
      compositeRule: !0
    }, j), m.pass(j, () => m.error(!0));
  }
  Et.macroKeywordCode = a;
  function s(m, f) {
    var y;
    const { gen: v, keyword: g, schema: h, parentSchema: _, $data: x, it: O } = m;
    c(O, f);
    const j = !x && f.compile ? f.compile.call(O.self, h, _, O) : f.validate, q = u(v, g, j), J = v.let("valid");
    m.block$data(J, C), m.ok((y = f.valid) !== null && y !== void 0 ? y : J);
    function C() {
      if (f.errors === !1)
        M(), f.modifying && i(m), z(() => m.error());
      else {
        const W = f.async ? ee() : N();
        f.modifying && i(m), z(() => o(m, W));
      }
    }
    function ee() {
      const W = v.let("ruleErrs", null);
      return v.try(() => M((0, e._)`await `), (k) => v.assign(J, !1).if((0, e._)`${k} instanceof ${O.ValidationError}`, () => v.assign(W, (0, e._)`${k}.errors`), () => v.throw(k))), W;
    }
    function N() {
      const W = (0, e._)`${q}.errors`;
      return v.assign(W, null), M(e.nil), W;
    }
    function M(W = f.async ? (0, e._)`await ` : e.nil) {
      const k = O.opts.passContext ? t.default.this : t.default.self, U = !("compile" in f && !x || f.schema === !1);
      v.assign(J, (0, e._)`${W}${(0, n.callValidateCode)(m, q, k, U)}`, f.modifying);
    }
    function z(W) {
      var k;
      v.if((0, e.not)((k = f.valid) !== null && k !== void 0 ? k : J), W);
    }
  }
  Et.funcKeywordCode = s;
  function i(m) {
    const { gen: f, data: y, it: v } = m;
    f.if(v.parentData, () => f.assign(y, (0, e._)`${v.parentData}[${v.parentDataProperty}]`));
  }
  function o(m, f) {
    const { gen: y } = m;
    y.if((0, e._)`Array.isArray(${f})`, () => {
      y.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(m);
    }, () => m.error());
  }
  function c({ schemaEnv: m }, f) {
    if (f.async && !m.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(m, f, y) {
    if (y === void 0)
      throw new Error(`keyword "${f}" failed to compile`);
    return m.scopeValue("keyword", typeof y == "function" ? { ref: y } : { ref: y, code: (0, e.stringify)(y) });
  }
  function l(m, f, y = !1) {
    return !f.length || f.some((v) => v === "array" ? Array.isArray(m) : v === "object" ? m && typeof m == "object" && !Array.isArray(m) : typeof m == v || y && typeof m > "u");
  }
  Et.validSchemaType = l;
  function p({ schema: m, opts: f, self: y, errSchemaPath: v }, g, h) {
    if (Array.isArray(g.keyword) ? !g.keyword.includes(h) : g.keyword !== h)
      throw new Error("ajv implementation error");
    const _ = g.dependencies;
    if (_?.some((x) => !Object.prototype.hasOwnProperty.call(m, x)))
      throw new Error(`parent schema must have dependencies of ${h}: ${_.join(",")}`);
    if (g.validateSchema && !g.validateSchema(m[h])) {
      const O = `keyword "${h}" value is invalid at path "${v}": ` + y.errorsText(g.validateSchema.errors);
      if (f.validateSchema === "log")
        y.logger.error(O);
      else
        throw new Error(O);
    }
  }
  return Et.validateKeywordUsage = p, Et;
}
var Kt = {}, ad;
function fx() {
  if (ad) return Kt;
  ad = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.extendSubschemaMode = Kt.extendSubschemaData = Kt.getSubschema = void 0;
  const e = me, t = Z;
  function n(s, { keyword: i, schemaProp: o, schema: c, schemaPath: u, errSchemaPath: l, topSchemaRef: p }) {
    if (i !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (i !== void 0) {
      const m = s.schema[i];
      return o === void 0 ? {
        schema: m,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}`
      } : {
        schema: m[o],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(i)}${(0, e.getProperty)(o)}`,
        errSchemaPath: `${s.errSchemaPath}/${i}/${(0, t.escapeFragment)(o)}`
      };
    }
    if (c !== void 0) {
      if (u === void 0 || l === void 0 || p === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: u,
        topSchemaRef: p,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Kt.getSubschema = n;
  function r(s, i, { dataProp: o, dataPropType: c, data: u, dataTypes: l, propertyName: p }) {
    if (u !== void 0 && o !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: m } = i;
    if (o !== void 0) {
      const { errorPath: y, dataPathArr: v, opts: g } = i, h = m.let("data", (0, e._)`${i.data}${(0, e.getProperty)(o)}`, !0);
      f(h), s.errorPath = (0, e.str)`${y}${(0, t.getErrorPath)(o, c, g.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${o}`, s.dataPathArr = [...v, s.parentDataProperty];
    }
    if (u !== void 0) {
      const y = u instanceof e.Name ? u : m.let("data", u, !0);
      f(y), p !== void 0 && (s.propertyName = p);
    }
    l && (s.dataTypes = l);
    function f(y) {
      s.data = y, s.dataLevel = i.dataLevel + 1, s.dataTypes = [], i.definedProperties = /* @__PURE__ */ new Set(), s.parentData = i.data, s.dataNames = [...i.dataNames, y];
    }
  }
  Kt.extendSubschemaData = r;
  function a(s, { jtdDiscriminator: i, jtdMetadata: o, compositeRule: c, createErrors: u, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), u !== void 0 && (s.createErrors = u), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = i, s.jtdMetadata = o;
  }
  return Kt.extendSubschemaMode = a, Kt;
}
var Ye = {}, Ys = function e(t, n) {
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
}, oh = { exports: {} }, pn = oh.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, a = n.post || function() {
  };
  is(t, r, a, e, "", e);
};
pn.keywords = {
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
pn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
pn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
pn.skipKeywords = {
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
function is(e, t, n, r, a, s, i, o, c, u) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, a, s, i, o, c, u);
    for (var l in r) {
      var p = r[l];
      if (Array.isArray(p)) {
        if (l in pn.arrayKeywords)
          for (var m = 0; m < p.length; m++)
            is(e, t, n, p[m], a + "/" + l + "/" + m, s, a, l, r, m);
      } else if (l in pn.propsKeywords) {
        if (p && typeof p == "object")
          for (var f in p)
            is(e, t, n, p[f], a + "/" + l + "/" + mx(f), s, a, l, r, f);
      } else (l in pn.keywords || e.allKeys && !(l in pn.skipKeywords)) && is(e, t, n, p, a + "/" + l, s, a, l, r);
    }
    n(r, a, s, i, o, c, u);
  }
}
function mx(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var hx = oh.exports;
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.getSchemaRefs = Ye.resolveUrl = Ye.normalizeId = Ye._getFullPath = Ye.getFullPath = Ye.inlineRef = void 0;
const vx = Z, yx = Ys, gx = hx, bx = /* @__PURE__ */ new Set([
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
function _x(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Vo(e) : t ? ch(e) <= t : !1;
}
Ye.inlineRef = _x;
const $x = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Vo(e) {
  for (const t in e) {
    if ($x.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(Vo) || typeof n == "object" && Vo(n))
      return !0;
  }
  return !1;
}
function ch(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !bx.has(n) && (typeof e[n] == "object" && (0, vx.eachItem)(e[n], (r) => t += ch(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function lh(e, t = "", n) {
  n !== !1 && (t = ar(t));
  const r = e.parse(t);
  return uh(e, r);
}
Ye.getFullPath = lh;
function uh(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Ye._getFullPath = uh;
const wx = /#\/?$/;
function ar(e) {
  return e ? e.replace(wx, "") : "";
}
Ye.normalizeId = ar;
function xx(e, t, n) {
  return n = ar(n), e.resolve(t, n);
}
Ye.resolveUrl = xx;
const Ex = /^[a-z_][-a-z0-9._]*$/i;
function Sx(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, a = ar(e[n] || t), s = { "": a }, i = lh(r, a, !1), o = {}, c = /* @__PURE__ */ new Set();
  return gx(e, { allKeys: !0 }, (p, m, f, y) => {
    if (y === void 0)
      return;
    const v = i + m;
    let g = s[y];
    typeof p[n] == "string" && (g = h.call(this, p[n])), _.call(this, p.$anchor), _.call(this, p.$dynamicAnchor), s[m] = g;
    function h(x) {
      const O = this.opts.uriResolver.resolve;
      if (x = ar(g ? O(g, x) : x), c.has(x))
        throw l(x);
      c.add(x);
      let j = this.refs[x];
      return typeof j == "string" && (j = this.refs[j]), typeof j == "object" ? u(p, j.schema, x) : x !== ar(v) && (x[0] === "#" ? (u(p, o[x], x), o[x] = p) : this.refs[x] = v), x;
    }
    function _(x) {
      if (typeof x == "string") {
        if (!Ex.test(x))
          throw new Error(`invalid anchor "${x}"`);
        h.call(this, `#${x}`);
      }
    }
  }), o;
  function u(p, m, f) {
    if (m !== void 0 && !yx(p, m))
      throw l(f);
  }
  function l(p) {
    return new Error(`reference "${p}" resolves to more than one schema`);
  }
}
Ye.getSchemaRefs = Sx;
var sd;
function Zs() {
  if (sd) return Ht;
  sd = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.getData = Ht.KeywordCxt = Ht.validateFunctionCode = void 0;
  const e = Mw(), t = ze, n = th(), r = ze, a = ex(), s = dx(), i = fx(), o = me, c = _t, u = Ye, l = Z, p = ba;
  function m(A) {
    if (j(A) && (J(A), O(A))) {
      g(A);
      return;
    }
    f(A, () => (0, e.topBoolOrEmptySchema)(A));
  }
  Ht.validateFunctionCode = m;
  function f({ gen: A, validateName: T, schema: L, schemaEnv: V, opts: Y }, H) {
    Y.code.es5 ? A.func(T, (0, o._)`${c.default.data}, ${c.default.valCxt}`, V.$async, () => {
      A.code((0, o._)`"use strict"; ${_(L, Y)}`), v(A, Y), A.code(H);
    }) : A.func(T, (0, o._)`${c.default.data}, ${y(Y)}`, V.$async, () => A.code(_(L, Y)).code(H));
  }
  function y(A) {
    return (0, o._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${A.dynamicRef ? (0, o._)`, ${c.default.dynamicAnchors}={}` : o.nil}}={}`;
  }
  function v(A, T) {
    A.if(c.default.valCxt, () => {
      A.var(c.default.instancePath, (0, o._)`${c.default.valCxt}.${c.default.instancePath}`), A.var(c.default.parentData, (0, o._)`${c.default.valCxt}.${c.default.parentData}`), A.var(c.default.parentDataProperty, (0, o._)`${c.default.valCxt}.${c.default.parentDataProperty}`), A.var(c.default.rootData, (0, o._)`${c.default.valCxt}.${c.default.rootData}`), T.dynamicRef && A.var(c.default.dynamicAnchors, (0, o._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      A.var(c.default.instancePath, (0, o._)`""`), A.var(c.default.parentData, (0, o._)`undefined`), A.var(c.default.parentDataProperty, (0, o._)`undefined`), A.var(c.default.rootData, c.default.data), T.dynamicRef && A.var(c.default.dynamicAnchors, (0, o._)`{}`);
    });
  }
  function g(A) {
    const { schema: T, opts: L, gen: V } = A;
    f(A, () => {
      L.$comment && T.$comment && W(A), N(A), V.let(c.default.vErrors, null), V.let(c.default.errors, 0), L.unevaluated && h(A), C(A), k(A);
    });
  }
  function h(A) {
    const { gen: T, validateName: L } = A;
    A.evaluated = T.const("evaluated", (0, o._)`${L}.evaluated`), T.if((0, o._)`${A.evaluated}.dynamicProps`, () => T.assign((0, o._)`${A.evaluated}.props`, (0, o._)`undefined`)), T.if((0, o._)`${A.evaluated}.dynamicItems`, () => T.assign((0, o._)`${A.evaluated}.items`, (0, o._)`undefined`));
  }
  function _(A, T) {
    const L = typeof A == "object" && A[T.schemaId];
    return L && (T.code.source || T.code.process) ? (0, o._)`/*# sourceURL=${L} */` : o.nil;
  }
  function x(A, T) {
    if (j(A) && (J(A), O(A))) {
      q(A, T);
      return;
    }
    (0, e.boolOrEmptySchema)(A, T);
  }
  function O({ schema: A, self: T }) {
    if (typeof A == "boolean")
      return !A;
    for (const L in A)
      if (T.RULES.all[L])
        return !0;
    return !1;
  }
  function j(A) {
    return typeof A.schema != "boolean";
  }
  function q(A, T) {
    const { schema: L, gen: V, opts: Y } = A;
    Y.$comment && L.$comment && W(A), M(A), z(A);
    const H = V.const("_errs", c.default.errors);
    C(A, H), V.var(T, (0, o._)`${H} === ${c.default.errors}`);
  }
  function J(A) {
    (0, l.checkUnknownRules)(A), ee(A);
  }
  function C(A, T) {
    if (A.opts.jtd)
      return X(A, [], !1, T);
    const L = (0, t.getSchemaTypes)(A.schema), V = (0, t.coerceAndCheckDataType)(A, L);
    X(A, L, !V, T);
  }
  function ee(A) {
    const { schema: T, errSchemaPath: L, opts: V, self: Y } = A;
    T.$ref && V.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(T, Y.RULES) && Y.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function N(A) {
    const { schema: T, opts: L } = A;
    T.default !== void 0 && L.useDefaults && L.strictSchema && (0, l.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function M(A) {
    const T = A.schema[A.opts.schemaId];
    T && (A.baseId = (0, u.resolveUrl)(A.opts.uriResolver, A.baseId, T));
  }
  function z(A) {
    if (A.schema.$async && !A.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function W({ gen: A, schemaEnv: T, schema: L, errSchemaPath: V, opts: Y }) {
    const H = L.$comment;
    if (Y.$comment === !0)
      A.code((0, o._)`${c.default.self}.logger.log(${H})`);
    else if (typeof Y.$comment == "function") {
      const ge = (0, o.str)`${V}/$comment`, G = A.scopeValue("root", { ref: T.root });
      A.code((0, o._)`${c.default.self}.opts.$comment(${H}, ${ge}, ${G}.schema)`);
    }
  }
  function k(A) {
    const { gen: T, schemaEnv: L, validateName: V, ValidationError: Y, opts: H } = A;
    L.$async ? T.if((0, o._)`${c.default.errors} === 0`, () => T.return(c.default.data), () => T.throw((0, o._)`new ${Y}(${c.default.vErrors})`)) : (T.assign((0, o._)`${V}.errors`, c.default.vErrors), H.unevaluated && U(A), T.return((0, o._)`${c.default.errors} === 0`));
  }
  function U({ gen: A, evaluated: T, props: L, items: V }) {
    L instanceof o.Name && A.assign((0, o._)`${T}.props`, L), V instanceof o.Name && A.assign((0, o._)`${T}.items`, V);
  }
  function X(A, T, L, V) {
    const { gen: Y, schema: H, data: ge, allErrors: G, opts: B, self: oe } = A, { RULES: de } = oe;
    if (H.$ref && (B.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(H, de))) {
      Y.block(() => I(A, "$ref", de.all.$ref.definition));
      return;
    }
    B.jtd || ae(A, T), Y.block(() => {
      for (const we of de.rules)
        le(we);
      le(de.post);
    });
    function le(we) {
      (0, n.shouldUseGroup)(H, we) && (we.type ? (Y.if((0, r.checkDataType)(we.type, ge, B.strictNumbers)), K(A, we), T.length === 1 && T[0] === we.type && L && (Y.else(), (0, r.reportTypeError)(A)), Y.endIf()) : K(A, we), G || Y.if((0, o._)`${c.default.errors} === ${V || 0}`));
    }
  }
  function K(A, T) {
    const { gen: L, schema: V, opts: { useDefaults: Y } } = A;
    Y && (0, a.assignDefaults)(A, T.type), L.block(() => {
      for (const H of T.rules)
        (0, n.shouldUseRule)(V, H) && I(A, H.keyword, H.definition, T.type);
    });
  }
  function ae(A, T) {
    A.schemaEnv.meta || !A.opts.strictTypes || (Q(A, T), A.opts.allowUnionTypes || R(A, T), $(A, A.dataTypes));
  }
  function Q(A, T) {
    if (T.length) {
      if (!A.dataTypes.length) {
        A.dataTypes = T;
        return;
      }
      T.forEach((L) => {
        w(A.dataTypes, L) || b(A, `type "${L}" not allowed by context "${A.dataTypes.join(",")}"`);
      }), d(A, T);
    }
  }
  function R(A, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && b(A, "use allowUnionTypes to allow union type keyword");
  }
  function $(A, T) {
    const L = A.self.RULES.all;
    for (const V in L) {
      const Y = L[V];
      if (typeof Y == "object" && (0, n.shouldUseRule)(A.schema, Y)) {
        const { type: H } = Y.definition;
        H.length && !H.some((ge) => S(T, ge)) && b(A, `missing type "${H.join(",")}" for keyword "${V}"`);
      }
    }
  }
  function S(A, T) {
    return A.includes(T) || T === "number" && A.includes("integer");
  }
  function w(A, T) {
    return A.includes(T) || T === "integer" && A.includes("number");
  }
  function d(A, T) {
    const L = [];
    for (const V of A.dataTypes)
      w(T, V) ? L.push(V) : T.includes("integer") && V === "number" && L.push("integer");
    A.dataTypes = L;
  }
  function b(A, T) {
    const L = A.schemaEnv.baseId + A.errSchemaPath;
    T += ` at "${L}" (strictTypes)`, (0, l.checkStrictMode)(A, T, A.opts.strictTypes);
  }
  class E {
    constructor(T, L, V) {
      if ((0, s.validateKeywordUsage)(T, L, V), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = V, this.data = T.data, this.schema = T.schema[V], this.$data = L.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(T, this.schema, V, this.$data), this.schemaType = L.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = L, this.$data)
        this.schemaCode = T.gen.const("vSchema", ne(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${V} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = T.gen.const("_errs", c.default.errors));
    }
    result(T, L, V) {
      this.failResult((0, o.not)(T), L, V);
    }
    failResult(T, L, V) {
      this.gen.if(T), V ? V() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(T, L) {
      this.failResult((0, o.not)(T), void 0, L);
    }
    fail(T) {
      if (T === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(T), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(T) {
      if (!this.$data)
        return this.fail(T);
      const { schemaCode: L } = this;
      this.fail((0, o._)`${L} !== undefined && (${(0, o.or)(this.invalid$data(), T)})`);
    }
    error(T, L, V) {
      if (L) {
        this.setParams(L), this._error(T, V), this.setParams({});
        return;
      }
      this._error(T, V);
    }
    _error(T, L) {
      (T ? p.reportExtraError : p.reportError)(this, this.def.error, L);
    }
    $dataError() {
      (0, p.reportError)(this, this.def.$dataError || p.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, p.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(T) {
      this.allErrors || this.gen.if(T);
    }
    setParams(T, L) {
      L ? Object.assign(this.params, T) : this.params = T;
    }
    block$data(T, L, V = o.nil) {
      this.gen.block(() => {
        this.check$data(T, V), L();
      });
    }
    check$data(T = o.nil, L = o.nil) {
      if (!this.$data)
        return;
      const { gen: V, schemaCode: Y, schemaType: H, def: ge } = this;
      V.if((0, o.or)((0, o._)`${Y} === undefined`, L)), T !== o.nil && V.assign(T, !0), (H.length || ge.validateSchema) && (V.elseIf(this.invalid$data()), this.$dataError(), T !== o.nil && V.assign(T, !1)), V.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: L, schemaType: V, def: Y, it: H } = this;
      return (0, o.or)(ge(), G());
      function ge() {
        if (V.length) {
          if (!(L instanceof o.Name))
            throw new Error("ajv implementation error");
          const B = Array.isArray(V) ? V : [V];
          return (0, o._)`${(0, r.checkDataTypes)(B, L, H.opts.strictNumbers, r.DataType.Wrong)}`;
        }
        return o.nil;
      }
      function G() {
        if (Y.validateSchema) {
          const B = T.scopeValue("validate$data", { ref: Y.validateSchema });
          return (0, o._)`!${B}(${L})`;
        }
        return o.nil;
      }
    }
    subschema(T, L) {
      const V = (0, i.getSubschema)(this.it, T);
      (0, i.extendSubschemaData)(V, this.it, T), (0, i.extendSubschemaMode)(V, T);
      const Y = { ...this.it, ...V, items: void 0, props: void 0 };
      return x(Y, L), Y;
    }
    mergeEvaluated(T, L) {
      const { it: V, gen: Y } = this;
      V.opts.unevaluated && (V.props !== !0 && T.props !== void 0 && (V.props = l.mergeEvaluated.props(Y, T.props, V.props, L)), V.items !== !0 && T.items !== void 0 && (V.items = l.mergeEvaluated.items(Y, T.items, V.items, L)));
    }
    mergeValidEvaluated(T, L) {
      const { it: V, gen: Y } = this;
      if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
        return Y.if(L, () => this.mergeEvaluated(T, o.Name)), !0;
    }
  }
  Ht.KeywordCxt = E;
  function I(A, T, L, V) {
    const Y = new E(A, L, T);
    "code" in L ? L.code(Y, V) : Y.$data && L.validate ? (0, s.funcKeywordCode)(Y, L) : "macro" in L ? (0, s.macroKeywordCode)(Y, L) : (L.compile || L.validate) && (0, s.funcKeywordCode)(Y, L);
  }
  const F = /^\/(?:[^~]|~0|~1)*$/, te = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ne(A, { dataLevel: T, dataNames: L, dataPathArr: V }) {
    let Y, H;
    if (A === "")
      return c.default.rootData;
    if (A[0] === "/") {
      if (!F.test(A))
        throw new Error(`Invalid JSON-pointer: ${A}`);
      Y = A, H = c.default.rootData;
    } else {
      const oe = te.exec(A);
      if (!oe)
        throw new Error(`Invalid JSON-pointer: ${A}`);
      const de = +oe[1];
      if (Y = oe[2], Y === "#") {
        if (de >= T)
          throw new Error(B("property/index", de));
        return V[T - de];
      }
      if (de > T)
        throw new Error(B("data", de));
      if (H = L[T - de], !Y)
        return H;
    }
    let ge = H;
    const G = Y.split("/");
    for (const oe of G)
      oe && (H = (0, o._)`${H}${(0, o.getProperty)((0, l.unescapeJsonPointer)(oe))}`, ge = (0, o._)`${ge} && ${H}`);
    return ge;
    function B(oe, de) {
      return `Cannot access ${oe} ${de} levels up, current level is ${T}`;
    }
  }
  return Ht.getData = ne, Ht;
}
var Na = {}, id;
function Hc() {
  if (id) return Na;
  id = 1, Object.defineProperty(Na, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Na.default = e, Na;
}
var $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
const Zi = Ye;
let Px = class extends Error {
  constructor(t, n, r, a) {
    super(a || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, Zi.resolveUrl)(t, n, r), this.missingSchema = (0, Zi.normalizeId)((0, Zi.getFullPath)(t, this.missingRef));
  }
};
$r.default = Px;
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.resolveSchema = ut.getCompilingSchema = ut.resolveRef = ut.compileSchema = ut.SchemaEnv = void 0;
const St = me, Rx = Hc(), yn = _t, jt = Ye, od = Z, Ox = Zs();
let Qs = class {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, jt.normalizeId)(r?.[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r?.$async, this.refs = {};
  }
};
ut.SchemaEnv = Qs;
function Gc(e) {
  const t = ph.call(this, e);
  if (t)
    return t;
  const n = (0, jt.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: a } = this.opts.code, { ownProperties: s } = this.opts, i = new St.CodeGen(this.scope, { es5: r, lines: a, ownProperties: s });
  let o;
  e.$async && (o = i.scopeValue("Error", {
    ref: Rx.default,
    code: (0, St._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const u = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: yn.default.data,
    parentData: yn.default.parentData,
    parentDataProperty: yn.default.parentDataProperty,
    dataNames: [yn.default.data],
    dataPathArr: [St.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, St.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: o,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: St.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, St._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, Ox.validateFunctionCode)(u), i.optimize(this.opts.code.optimize);
    const p = i.toString();
    l = `${i.scopeRefs(yn.default.scope)}return ${p}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const f = new Function(`${yn.default.self}`, `${yn.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: f }), f.errors = null, f.schema = e.schema, f.schemaEnv = e, e.$async && (f.$async = !0), this.opts.code.source === !0 && (f.source = { validateName: c, validateCode: p, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: y, items: v } = u;
      f.evaluated = {
        props: y instanceof St.Name ? void 0 : y,
        items: v instanceof St.Name ? void 0 : v,
        dynamicProps: y instanceof St.Name,
        dynamicItems: v instanceof St.Name
      }, f.source && (f.source.evaluated = (0, St.stringify)(f.evaluated));
    }
    return e.validate = f, e;
  } catch (p) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), p;
  } finally {
    this._compilations.delete(e);
  }
}
ut.compileSchema = Gc;
function Ax(e, t, n) {
  var r;
  n = (0, jt.resolveUrl)(this.opts.uriResolver, t, n);
  const a = e.refs[n];
  if (a)
    return a;
  let s = kx.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: o } = this.opts;
    i && (s = new Qs({ schema: i, schemaId: o, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = Tx.call(this, s);
}
ut.resolveRef = Ax;
function Tx(e) {
  return (0, jt.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : Gc.call(this, e);
}
function ph(e) {
  for (const t of this._compilations)
    if (jx(t, e))
      return t;
}
ut.getCompilingSchema = ph;
function jx(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function kx(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || ei.call(this, e, t);
}
function ei(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, jt._getFullPath)(this.opts.uriResolver, n);
  let a = (0, jt.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === a)
    return Qi.call(this, n, e);
  const s = (0, jt.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const o = ei.call(this, e, i);
    return typeof o?.schema != "object" ? void 0 : Qi.call(this, n, o);
  }
  if (typeof i?.schema == "object") {
    if (i.validate || Gc.call(this, i), s === (0, jt.normalizeId)(t)) {
      const { schema: o } = i, { schemaId: c } = this.opts, u = o[c];
      return u && (a = (0, jt.resolveUrl)(this.opts.uriResolver, a, u)), new Qs({ schema: o, schemaId: c, root: e, baseId: a });
    }
    return Qi.call(this, n, i);
  }
}
ut.resolveSchema = ei;
const Nx = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function Qi(e, { baseId: t, schema: n, root: r }) {
  var a;
  if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/")
    return;
  for (const o of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, od.unescapeFragment)(o)];
    if (c === void 0)
      return;
    n = c;
    const u = typeof n == "object" && n[this.opts.schemaId];
    !Nx.has(o) && u && (t = (0, jt.resolveUrl)(this.opts.uriResolver, t, u));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, od.schemaHasRulesButRef)(n, this.RULES)) {
    const o = (0, jt.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = ei.call(this, r, o);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new Qs({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const Ix = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Cx = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Dx = "object", Fx = [
  "$data"
], Lx = {
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
}, Mx = !1, Ux = {
  $id: Ix,
  description: Cx,
  type: Dx,
  required: Fx,
  properties: Lx,
  additionalProperties: Mx
};
var Kc = {}, ti = { exports: {} };
const zx = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), dh = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), Wc = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), fh = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), qx = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
function mh(e) {
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
const Vx = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
function cd(e) {
  return e.length = 0, !0;
}
function Bx(e, t, n) {
  if (e.length) {
    const r = mh(e);
    if (r !== "")
      t.push(r);
    else
      return n.error = !0, !1;
    e.length = 0;
  }
  return !0;
}
function Hx(e) {
  let t = 0;
  const n = { error: !1, address: "", zone: "" }, r = [], a = [];
  let s = !1, i = !1, o = Bx;
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
        o = cd;
      } else {
        a.push(u);
        continue;
      }
  }
  return a.length && (o === cd ? n.zone = a.join("") : i ? r.push(a.join("")) : r.push(mh(a))), n.address = r.join(""), n;
}
function hh(e) {
  if (Gx(e, ":") < 2)
    return { host: e, isIPV6: !1 };
  const t = Hx(e);
  if (t.error)
    return { host: e, isIPV6: !1 };
  {
    let n = t.address, r = t.address;
    return t.zone && (n += "%" + t.zone, r += "%25" + t.zone), { host: n, isIPV6: !0, escapedHost: r };
  }
}
function Gx(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    e[r] === t && n++;
  return n;
}
function Kx(e) {
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
const Wx = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, Jx = /[@/?#:]/g, Xx = /[@/?#]/g;
function vh(e, t) {
  const n = t ? Xx : Jx;
  return n.lastIndex = 0, e.replace(n, (r) => Wx[r]);
}
function Yx(e, t = !1) {
  if (e.indexOf("%") === -1)
    return e;
  let n = "";
  for (let r = 0; r < e.length; r++) {
    if (e[r] === "%" && r + 2 < e.length) {
      const a = e.slice(r + 1, r + 3);
      if (Wc(a)) {
        const s = a.toUpperCase(), i = String.fromCharCode(parseInt(s, 16));
        t && fh(i) ? n += i : n += "%" + s, r += 2;
        continue;
      }
    }
    n += e[r];
  }
  return n;
}
function Zx(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    if (e[n] === "%" && n + 2 < e.length) {
      const r = e.slice(n + 1, n + 3);
      if (Wc(r)) {
        const a = r.toUpperCase(), s = String.fromCharCode(parseInt(a, 16));
        s !== "." && fh(s) ? t += s : t += "%" + a, n += 2;
        continue;
      }
    }
    qx(e[n]) ? t += e[n] : t += escape(e[n]);
  }
  return t;
}
function Qx(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    if (e[n] === "%" && n + 2 < e.length) {
      const r = e.slice(n + 1, n + 3);
      if (Wc(r)) {
        t += "%" + r.toUpperCase(), n += 2;
        continue;
      }
    }
    t += escape(e[n]);
  }
  return t;
}
function eE(e) {
  const t = [];
  if (e.userinfo !== void 0 && (t.push(e.userinfo), t.push("@")), e.host !== void 0) {
    let n = unescape(e.host);
    if (!dh(n)) {
      const r = hh(n);
      r.isIPV6 === !0 ? n = `[${r.escapedHost}]` : n = vh(n, !1);
    }
    t.push(n);
  }
  return (typeof e.port == "number" || typeof e.port == "string") && (t.push(":"), t.push(String(e.port))), t.length ? t.join("") : void 0;
}
var yh = {
  nonSimpleDomain: Vx,
  recomposeAuthority: eE,
  reescapeHostDelimiters: vh,
  normalizePercentEncoding: Yx,
  normalizePathEncoding: Zx,
  escapePreservingEscapes: Qx,
  removeDotSegments: Kx,
  isIPv4: dh,
  isUUID: zx,
  normalizeIPv6: hh
};
const { isUUID: tE } = yh, nE = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
function gh(e) {
  return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
}
function bh(e) {
  return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
}
function _h(e) {
  const t = String(e.scheme).toLowerCase() === "https";
  return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
}
function rE(e) {
  return e.secure = gh(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
}
function aE(e) {
  if ((e.port === (gh(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
    const [t, n] = e.resourceName.split("?");
    e.path = t && t !== "/" ? t : void 0, e.query = n, e.resourceName = void 0;
  }
  return e.fragment = void 0, e;
}
function sE(e, t) {
  if (!e.path)
    return e.error = "URN can not be parsed", e;
  const n = e.path.match(nE);
  if (n) {
    const r = t.scheme || e.scheme || "urn";
    e.nid = n[1].toLowerCase(), e.nss = n[2];
    const a = `${r}:${t.nid || e.nid}`, s = Jc(a);
    e.path = void 0, s && (e = s.parse(e, t));
  } else
    e.error = e.error || "URN can not be parsed.";
  return e;
}
function iE(e, t) {
  if (e.nid === void 0)
    throw new Error("URN without nid cannot be serialized");
  const n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), a = `${n}:${t.nid || r}`, s = Jc(a);
  s && (e = s.serialize(e, t));
  const i = e, o = e.nss;
  return i.path = `${r || t.nid}:${o}`, t.skipEscape = !0, i;
}
function oE(e, t) {
  const n = e;
  return n.uuid = n.nss, n.nss = void 0, !t.tolerant && (!n.uuid || !tE(n.uuid)) && (n.error = n.error || "UUID is not valid."), n;
}
function cE(e) {
  const t = e;
  return t.nss = (e.uuid || "").toLowerCase(), t;
}
const $h = (
  /** @type {SchemeHandler} */
  {
    scheme: "http",
    domainHost: !0,
    parse: bh,
    serialize: _h
  }
), lE = (
  /** @type {SchemeHandler} */
  {
    scheme: "https",
    domainHost: $h.domainHost,
    parse: bh,
    serialize: _h
  }
), os = (
  /** @type {SchemeHandler} */
  {
    scheme: "ws",
    domainHost: !0,
    parse: rE,
    serialize: aE
  }
), uE = (
  /** @type {SchemeHandler} */
  {
    scheme: "wss",
    domainHost: os.domainHost,
    parse: os.parse,
    serialize: os.serialize
  }
), pE = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn",
    parse: sE,
    serialize: iE,
    skipNormalize: !0
  }
), dE = (
  /** @type {SchemeHandler} */
  {
    scheme: "urn:uuid",
    parse: oE,
    serialize: cE,
    skipNormalize: !0
  }
), As = (
  /** @type {Record<SchemeName, SchemeHandler>} */
  {
    http: $h,
    https: lE,
    ws: os,
    wss: uE,
    urn: pE,
    "urn:uuid": dE
  }
);
Object.setPrototypeOf(As, null);
function Jc(e) {
  return e && (As[
    /** @type {SchemeName} */
    e
  ] || As[
    /** @type {SchemeName} */
    e.toLowerCase()
  ]) || void 0;
}
var fE = {
  SCHEMES: As,
  getSchemeHandler: Jc
};
const { normalizeIPv6: mE, removeDotSegments: Br, recomposeAuthority: hE, normalizePercentEncoding: vE, normalizePathEncoding: yE, escapePreservingEscapes: gE, reescapeHostDelimiters: bE, isIPv4: _E, nonSimpleDomain: $E } = yh, { SCHEMES: wE, getSchemeHandler: wh } = fE;
function xE(e, t) {
  return typeof e == "string" ? e = /** @type {T} */
  OE(e, t) : typeof e == "object" && (e = /** @type {T} */
  dr(Fn(e, t), t)), e;
}
function EE(e, t, n) {
  const r = n ? Object.assign({ scheme: "null" }, n) : { scheme: "null" }, a = xh(dr(e, r), dr(t, r), r, !0);
  return r.skipEscape = !0, Fn(a, r);
}
function xh(e, t, n, r) {
  const a = {};
  return r || (e = dr(Fn(e, n), n), t = dr(Fn(t, n), n)), n = n || {}, !n.tolerant && t.scheme ? (a.scheme = t.scheme, a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = Br(t.path || ""), a.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = Br(t.path || ""), a.query = t.query) : (t.path ? (t.path[0] === "/" ? a.path = Br(t.path) : ((e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? a.path = "/" + t.path : e.path ? a.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : a.path = t.path, a.path = Br(a.path)), a.query = t.query) : (a.path = e.path, t.query !== void 0 ? a.query = t.query : a.query = e.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = t.fragment, a;
}
function SE(e, t, n) {
  const r = ld(e, n), a = ld(t, n);
  return r !== void 0 && a !== void 0 && r.toLowerCase() === a.toLowerCase();
}
function Fn(e, t) {
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
  }, r = Object.assign({}, t), a = [], s = wh(r.scheme || n.scheme);
  s && s.serialize && s.serialize(n, r), n.path !== void 0 && (r.skipEscape ? n.path = vE(n.path) : (n.path = gE(n.path), n.scheme !== void 0 && (n.path = n.path.split("%3A").join(":")))), r.reference !== "suffix" && n.scheme && a.push(n.scheme, ":");
  const i = hE(n);
  if (i !== void 0 && (r.reference !== "suffix" && a.push("//"), a.push(i), n.path && n.path[0] !== "/" && a.push("/")), n.path !== void 0) {
    let o = n.path;
    !r.absolutePath && (!s || !s.absolutePath) && (o = Br(o)), i === void 0 && o[0] === "/" && o[1] === "/" && (o = "/%2F" + o.slice(2)), a.push(o);
  }
  return n.query !== void 0 && a.push("?", n.query), n.fragment !== void 0 && a.push("#", n.fragment), a.join("");
}
const PE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
function RE(e, t) {
  if (t[2] !== void 0 && e.path && e.path[0] !== "/")
    return 'URI path must start with "/" when authority is present.';
  if (typeof e.port == "number" && (e.port < 0 || e.port > 65535))
    return "URI port is malformed.";
}
function Eh(e, t) {
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
  const i = e.match(PE);
  if (i) {
    r.scheme = i[1], r.userinfo = i[3], r.host = i[4], r.port = parseInt(i[5], 10), r.path = i[6] || "", r.query = i[7], r.fragment = i[8], isNaN(r.port) && (r.port = i[5]);
    const o = RE(r, i);
    if (o !== void 0 && (r.error = r.error || o, a = !0), r.host)
      if (_E(r.host) === !1) {
        const l = mE(r.host);
        r.host = l.host.toLowerCase(), s = l.isIPV6;
      } else
        s = !0;
    r.scheme === void 0 && r.userinfo === void 0 && r.host === void 0 && r.port === void 0 && r.query === void 0 && !r.path ? r.reference = "same-document" : r.scheme === void 0 ? r.reference = "relative" : r.fragment === void 0 ? r.reference = "absolute" : r.reference = "uri", n.reference && n.reference !== "suffix" && n.reference !== r.reference && (r.error = r.error || "URI is not a " + n.reference + " reference.");
    const c = wh(n.scheme || r.scheme);
    if (!n.unicodeSupport && (!c || !c.unicodeSupport) && r.host && (n.domainHost || c && c.domainHost) && s === !1 && $E(r.host))
      try {
        r.host = new URL("http://" + r.host).hostname;
      } catch (u) {
        r.error = r.error || "Host's domain name can not be converted to ASCII: " + u;
      }
    if ((!c || c && !c.skipNormalize) && (e.indexOf("%") !== -1 && (r.scheme !== void 0 && (r.scheme = unescape(r.scheme)), r.host !== void 0 && (r.host = bE(unescape(r.host), s))), r.path && (r.path = yE(r.path)), r.fragment))
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
function dr(e, t) {
  return Eh(e, t).parsed;
}
function OE(e, t) {
  return Sh(e, t).normalized;
}
function Sh(e, t) {
  const { parsed: n, malformedAuthorityOrPort: r } = Eh(e, t);
  return {
    normalized: r ? e : Fn(n, t),
    malformedAuthorityOrPort: r
  };
}
function ld(e, t) {
  if (typeof e == "string") {
    const { normalized: n, malformedAuthorityOrPort: r } = Sh(e, t);
    return r ? void 0 : n;
  }
  if (typeof e == "object")
    return Fn(e, t);
}
const Xc = {
  SCHEMES: wE,
  normalize: xE,
  resolve: EE,
  resolveComponent: xh,
  equal: SE,
  serialize: Fn,
  parse: dr
};
ti.exports = Xc;
ti.exports.default = Xc;
ti.exports.fastUri = Xc;
var Ph = ti.exports;
Object.defineProperty(Kc, "__esModule", { value: !0 });
const Rh = Ph;
Rh.code = 'require("ajv/dist/runtime/uri").default';
Kc.default = Rh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Zs();
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = me;
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
  const r = Hc(), a = $r, s = Dn, i = ut, o = me, c = Ye, u = ze, l = Z, p = Ux, m = Kc, f = (R, $) => new RegExp(R, $);
  f.code = "new RegExp";
  const y = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set([
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
  ]), g = {
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
  }, h = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, _ = 200;
  function x(R) {
    var $, S, w, d, b, E, I, F, te, ne, A, T, L, V, Y, H, ge, G, B, oe, de, le, we, Ne, Pe;
    const Be = R.strict, yt = ($ = R.code) === null || $ === void 0 ? void 0 : $.optimize, Ie = yt === !0 || yt === void 0 ? 1 : yt || 0, Qt = (w = (S = R.code) === null || S === void 0 ? void 0 : S.regExp) !== null && w !== void 0 ? w : f, yi = (d = R.uriResolver) !== null && d !== void 0 ? d : m.default;
    return {
      strictSchema: (E = (b = R.strictSchema) !== null && b !== void 0 ? b : Be) !== null && E !== void 0 ? E : !0,
      strictNumbers: (F = (I = R.strictNumbers) !== null && I !== void 0 ? I : Be) !== null && F !== void 0 ? F : !0,
      strictTypes: (ne = (te = R.strictTypes) !== null && te !== void 0 ? te : Be) !== null && ne !== void 0 ? ne : "log",
      strictTuples: (T = (A = R.strictTuples) !== null && A !== void 0 ? A : Be) !== null && T !== void 0 ? T : "log",
      strictRequired: (V = (L = R.strictRequired) !== null && L !== void 0 ? L : Be) !== null && V !== void 0 ? V : !1,
      code: R.code ? { ...R.code, optimize: Ie, regExp: Qt } : { optimize: Ie, regExp: Qt },
      loopRequired: (Y = R.loopRequired) !== null && Y !== void 0 ? Y : _,
      loopEnum: (H = R.loopEnum) !== null && H !== void 0 ? H : _,
      meta: (ge = R.meta) !== null && ge !== void 0 ? ge : !0,
      messages: (G = R.messages) !== null && G !== void 0 ? G : !0,
      inlineRefs: (B = R.inlineRefs) !== null && B !== void 0 ? B : !0,
      schemaId: (oe = R.schemaId) !== null && oe !== void 0 ? oe : "$id",
      addUsedSchema: (de = R.addUsedSchema) !== null && de !== void 0 ? de : !0,
      validateSchema: (le = R.validateSchema) !== null && le !== void 0 ? le : !0,
      validateFormats: (we = R.validateFormats) !== null && we !== void 0 ? we : !0,
      unicodeRegExp: (Ne = R.unicodeRegExp) !== null && Ne !== void 0 ? Ne : !0,
      int32range: (Pe = R.int32range) !== null && Pe !== void 0 ? Pe : !0,
      uriResolver: yi
    };
  }
  class O {
    constructor($ = {}) {
      this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), $ = this.opts = { ...$, ...x($) };
      const { es5: S, lines: w } = this.opts.code;
      this.scope = new o.ValueScope({ scope: {}, prefixes: v, es5: S, lines: w }), this.logger = z($.logger);
      const d = $.validateFormats;
      $.validateFormats = !1, this.RULES = (0, s.getRules)(), j.call(this, g, $, "NOT SUPPORTED"), j.call(this, h, $, "DEPRECATED", "warn"), this._metaOpts = N.call(this), $.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), $.keywords && ee.call(this, $.keywords), typeof $.meta == "object" && this.addMetaSchema($.meta), J.call(this), $.validateFormats = d;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: $, meta: S, schemaId: w } = this.opts;
      let d = p;
      w === "id" && (d = { ...p }, d.id = d.$id, delete d.$id), S && $ && this.addMetaSchema(d, d[w], !1);
    }
    defaultMeta() {
      const { meta: $, schemaId: S } = this.opts;
      return this.opts.defaultMeta = typeof $ == "object" ? $[S] || $ : void 0;
    }
    validate($, S) {
      let w;
      if (typeof $ == "string") {
        if (w = this.getSchema($), !w)
          throw new Error(`no schema with key or ref "${$}"`);
      } else
        w = this.compile($);
      const d = w(S);
      return "$async" in w || (this.errors = w.errors), d;
    }
    compile($, S) {
      const w = this._addSchema($, S);
      return w.validate || this._compileSchemaEnv(w);
    }
    compileAsync($, S) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: w } = this.opts;
      return d.call(this, $, S);
      async function d(ne, A) {
        await b.call(this, ne.$schema);
        const T = this._addSchema(ne, A);
        return T.validate || E.call(this, T);
      }
      async function b(ne) {
        ne && !this.getSchema(ne) && await d.call(this, { $ref: ne }, !0);
      }
      async function E(ne) {
        try {
          return this._compileSchemaEnv(ne);
        } catch (A) {
          if (!(A instanceof a.default))
            throw A;
          return I.call(this, A), await F.call(this, A.missingSchema), E.call(this, ne);
        }
      }
      function I({ missingSchema: ne, missingRef: A }) {
        if (this.refs[ne])
          throw new Error(`AnySchema ${ne} is loaded but ${A} cannot be resolved`);
      }
      async function F(ne) {
        const A = await te.call(this, ne);
        this.refs[ne] || await b.call(this, A.$schema), this.refs[ne] || this.addSchema(A, ne, S);
      }
      async function te(ne) {
        const A = this._loading[ne];
        if (A)
          return A;
        try {
          return await (this._loading[ne] = w(ne));
        } finally {
          delete this._loading[ne];
        }
      }
    }
    // Adds schema to the instance
    addSchema($, S, w, d = this.opts.validateSchema) {
      if (Array.isArray($)) {
        for (const E of $)
          this.addSchema(E, void 0, w, d);
        return this;
      }
      let b;
      if (typeof $ == "object") {
        const { schemaId: E } = this.opts;
        if (b = $[E], b !== void 0 && typeof b != "string")
          throw new Error(`schema ${E} must be string`);
      }
      return S = (0, c.normalizeId)(S || b), this._checkUnique(S), this.schemas[S] = this._addSchema($, w, S, d, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema($, S, w = this.opts.validateSchema) {
      return this.addSchema($, S, !0, w), this;
    }
    //  Validate schema against its meta-schema
    validateSchema($, S) {
      if (typeof $ == "boolean")
        return !0;
      let w;
      if (w = $.$schema, w !== void 0 && typeof w != "string")
        throw new Error("$schema must be a string");
      if (w = w || this.opts.defaultMeta || this.defaultMeta(), !w)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const d = this.validate(w, $);
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
    getSchema($) {
      let S;
      for (; typeof (S = q.call(this, $)) == "string"; )
        $ = S;
      if (S === void 0) {
        const { schemaId: w } = this.opts, d = new i.SchemaEnv({ schema: {}, schemaId: w });
        if (S = i.resolveSchema.call(this, d, $), !S)
          return;
        this.refs[$] = S;
      }
      return S.validate || this._compileSchemaEnv(S);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema($) {
      if ($ instanceof RegExp)
        return this._removeAllSchemas(this.schemas, $), this._removeAllSchemas(this.refs, $), this;
      switch (typeof $) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const S = q.call(this, $);
          return typeof S == "object" && this._cache.delete(S.schema), delete this.schemas[$], delete this.refs[$], this;
        }
        case "object": {
          const S = $;
          this._cache.delete(S);
          let w = $[this.opts.schemaId];
          return w && (w = (0, c.normalizeId)(w), delete this.schemas[w], delete this.refs[w]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary($) {
      for (const S of $)
        this.addKeyword(S);
      return this;
    }
    addKeyword($, S) {
      let w;
      if (typeof $ == "string")
        w = $, typeof S == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), S.keyword = w);
      else if (typeof $ == "object" && S === void 0) {
        if (S = $, w = S.keyword, Array.isArray(w) && !w.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (k.call(this, w, S), !S)
        return (0, l.eachItem)(w, (b) => U.call(this, b)), this;
      K.call(this, S);
      const d = {
        ...S,
        type: (0, u.getJSONTypes)(S.type),
        schemaType: (0, u.getJSONTypes)(S.schemaType)
      };
      return (0, l.eachItem)(w, d.type.length === 0 ? (b) => U.call(this, b, d) : (b) => d.type.forEach((E) => U.call(this, b, d, E))), this;
    }
    getKeyword($) {
      const S = this.RULES.all[$];
      return typeof S == "object" ? S.definition : !!S;
    }
    // Remove keyword
    removeKeyword($) {
      const { RULES: S } = this;
      delete S.keywords[$], delete S.all[$];
      for (const w of S.rules) {
        const d = w.rules.findIndex((b) => b.keyword === $);
        d >= 0 && w.rules.splice(d, 1);
      }
      return this;
    }
    // Add format
    addFormat($, S) {
      return typeof S == "string" && (S = new RegExp(S)), this.formats[$] = S, this;
    }
    errorsText($ = this.errors, { separator: S = ", ", dataVar: w = "data" } = {}) {
      return !$ || $.length === 0 ? "No errors" : $.map((d) => `${w}${d.instancePath} ${d.message}`).reduce((d, b) => d + S + b);
    }
    $dataMetaSchema($, S) {
      const w = this.RULES.all;
      $ = JSON.parse(JSON.stringify($));
      for (const d of S) {
        const b = d.split("/").slice(1);
        let E = $;
        for (const I of b)
          E = E[I];
        for (const I in w) {
          const F = w[I];
          if (typeof F != "object")
            continue;
          const { $data: te } = F.definition, ne = E[I];
          te && ne && (E[I] = Q(ne));
        }
      }
      return $;
    }
    _removeAllSchemas($, S) {
      for (const w in $) {
        const d = $[w];
        (!S || S.test(w)) && (typeof d == "string" ? delete $[w] : d && !d.meta && (this._cache.delete(d.schema), delete $[w]));
      }
    }
    _addSchema($, S, w, d = this.opts.validateSchema, b = this.opts.addUsedSchema) {
      let E;
      const { schemaId: I } = this.opts;
      if (typeof $ == "object")
        E = $[I];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof $ != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let F = this._cache.get($);
      if (F !== void 0)
        return F;
      w = (0, c.normalizeId)(E || w);
      const te = c.getSchemaRefs.call(this, $, w);
      return F = new i.SchemaEnv({ schema: $, schemaId: I, meta: S, baseId: w, localRefs: te }), this._cache.set(F.schema, F), b && !w.startsWith("#") && (w && this._checkUnique(w), this.refs[w] = F), d && this.validateSchema($, !0), F;
    }
    _checkUnique($) {
      if (this.schemas[$] || this.refs[$])
        throw new Error(`schema with key or id "${$}" already exists`);
    }
    _compileSchemaEnv($) {
      if ($.meta ? this._compileMetaSchema($) : i.compileSchema.call(this, $), !$.validate)
        throw new Error("ajv implementation error");
      return $.validate;
    }
    _compileMetaSchema($) {
      const S = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, $);
      } finally {
        this.opts = S;
      }
    }
  }
  O.ValidationError = r.default, O.MissingRefError = a.default, e.default = O;
  function j(R, $, S, w = "error") {
    for (const d in R) {
      const b = d;
      b in $ && this.logger[w](`${S}: option ${d}. ${R[b]}`);
    }
  }
  function q(R) {
    return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
  }
  function J() {
    const R = this.opts.schemas;
    if (R)
      if (Array.isArray(R))
        this.addSchema(R);
      else
        for (const $ in R)
          this.addSchema(R[$], $);
  }
  function C() {
    for (const R in this.opts.formats) {
      const $ = this.opts.formats[R];
      $ && this.addFormat(R, $);
    }
  }
  function ee(R) {
    if (Array.isArray(R)) {
      this.addVocabulary(R);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const $ in R) {
      const S = R[$];
      S.keyword || (S.keyword = $), this.addKeyword(S);
    }
  }
  function N() {
    const R = { ...this.opts };
    for (const $ of y)
      delete R[$];
    return R;
  }
  const M = { log() {
  }, warn() {
  }, error() {
  } };
  function z(R) {
    if (R === !1)
      return M;
    if (R === void 0)
      return console;
    if (R.log && R.warn && R.error)
      return R;
    throw new Error("logger must implement log, warn and error methods");
  }
  const W = /^[a-z_$][a-z0-9_$:-]*$/i;
  function k(R, $) {
    const { RULES: S } = this;
    if ((0, l.eachItem)(R, (w) => {
      if (S.keywords[w])
        throw new Error(`Keyword ${w} is already defined`);
      if (!W.test(w))
        throw new Error(`Keyword ${w} has invalid name`);
    }), !!$ && $.$data && !("code" in $ || "validate" in $))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function U(R, $, S) {
    var w;
    const d = $?.post;
    if (S && d)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: b } = this;
    let E = d ? b.post : b.rules.find(({ type: F }) => F === S);
    if (E || (E = { type: S, rules: [] }, b.rules.push(E)), b.keywords[R] = !0, !$)
      return;
    const I = {
      keyword: R,
      definition: {
        ...$,
        type: (0, u.getJSONTypes)($.type),
        schemaType: (0, u.getJSONTypes)($.schemaType)
      }
    };
    $.before ? X.call(this, E, I, $.before) : E.rules.push(I), b.all[R] = I, (w = $.implements) === null || w === void 0 || w.forEach((F) => this.addKeyword(F));
  }
  function X(R, $, S) {
    const w = R.rules.findIndex((d) => d.keyword === S);
    w >= 0 ? R.rules.splice(w, 0, $) : (R.rules.push($), this.logger.warn(`rule ${S} is not defined`));
  }
  function K(R) {
    let { metaSchema: $ } = R;
    $ !== void 0 && (R.$data && this.opts.$data && ($ = Q($)), R.validateSchema = this.compile($, !0));
  }
  const ae = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function Q(R) {
    return { anyOf: [R, ae] };
  }
})(Jm);
var Yc = {}, Zc = {}, Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
const AE = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Qc.default = AE;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.callRef = Zt.getValidate = void 0;
const TE = $r, ud = be, pt = me, Bn = _t, pd = ut, Ia = Z, jE = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: a, schemaEnv: s, validateName: i, opts: o, self: c } = r, { root: u } = s;
    if ((n === "#" || n === "#/") && a === u.baseId)
      return p();
    const l = pd.resolveRef.call(c, u, a, n);
    if (l === void 0)
      throw new TE.default(r.opts.uriResolver, a, n);
    if (l instanceof pd.SchemaEnv)
      return m(l);
    return f(l);
    function p() {
      if (s === u)
        return cs(e, i, s, s.$async);
      const y = t.scopeValue("root", { ref: u });
      return cs(e, (0, pt._)`${y}.validate`, u, u.$async);
    }
    function m(y) {
      const v = Oh(e, y);
      cs(e, v, y, y.$async);
    }
    function f(y) {
      const v = t.scopeValue("schema", o.code.source === !0 ? { ref: y, code: (0, pt.stringify)(y) } : { ref: y }), g = t.name("valid"), h = e.subschema({
        schema: y,
        dataTypes: [],
        schemaPath: pt.nil,
        topSchemaRef: v,
        errSchemaPath: n
      }, g);
      e.mergeEvaluated(h), e.ok(g);
    }
  }
};
function Oh(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, pt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
Zt.getValidate = Oh;
function cs(e, t, n, r) {
  const { gen: a, it: s } = e, { allErrors: i, schemaEnv: o, opts: c } = s, u = c.passContext ? Bn.default.this : pt.nil;
  r ? l() : p();
  function l() {
    if (!o.$async)
      throw new Error("async schema referenced by sync schema");
    const y = a.let("valid");
    a.try(() => {
      a.code((0, pt._)`await ${(0, ud.callValidateCode)(e, t, u)}`), f(t), i || a.assign(y, !0);
    }, (v) => {
      a.if((0, pt._)`!(${v} instanceof ${s.ValidationError})`, () => a.throw(v)), m(v), i || a.assign(y, !1);
    }), e.ok(y);
  }
  function p() {
    e.result((0, ud.callValidateCode)(e, t, u), () => f(t), () => m(t));
  }
  function m(y) {
    const v = (0, pt._)`${y}.errors`;
    a.assign(Bn.default.vErrors, (0, pt._)`${Bn.default.vErrors} === null ? ${v} : ${Bn.default.vErrors}.concat(${v})`), a.assign(Bn.default.errors, (0, pt._)`${Bn.default.vErrors}.length`);
  }
  function f(y) {
    var v;
    if (!s.opts.unevaluated)
      return;
    const g = (v = n?.validate) === null || v === void 0 ? void 0 : v.evaluated;
    if (s.props !== !0)
      if (g && !g.dynamicProps)
        g.props !== void 0 && (s.props = Ia.mergeEvaluated.props(a, g.props, s.props));
      else {
        const h = a.var("props", (0, pt._)`${y}.evaluated.props`);
        s.props = Ia.mergeEvaluated.props(a, h, s.props, pt.Name);
      }
    if (s.items !== !0)
      if (g && !g.dynamicItems)
        g.items !== void 0 && (s.items = Ia.mergeEvaluated.items(a, g.items, s.items));
      else {
        const h = a.var("items", (0, pt._)`${y}.evaluated.items`);
        s.items = Ia.mergeEvaluated.items(a, h, s.items, pt.Name);
      }
  }
}
Zt.callRef = cs;
Zt.default = jE;
Object.defineProperty(Zc, "__esModule", { value: !0 });
const kE = Qc, NE = Zt, IE = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  kE.default,
  NE.default
];
Zc.default = IE;
var el = {}, tl = {};
Object.defineProperty(tl, "__esModule", { value: !0 });
const Ts = me, an = Ts.operators, js = {
  maximum: { okStr: "<=", ok: an.LTE, fail: an.GT },
  minimum: { okStr: ">=", ok: an.GTE, fail: an.LT },
  exclusiveMaximum: { okStr: "<", ok: an.LT, fail: an.GTE },
  exclusiveMinimum: { okStr: ">", ok: an.GT, fail: an.LTE }
}, CE = {
  message: ({ keyword: e, schemaCode: t }) => (0, Ts.str)`must be ${js[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Ts._)`{comparison: ${js[e].okStr}, limit: ${t}}`
}, DE = {
  keyword: Object.keys(js),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: CE,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Ts._)`${n} ${js[t].fail} ${r} || isNaN(${n})`);
  }
};
tl.default = DE;
var nl = {};
Object.defineProperty(nl, "__esModule", { value: !0 });
const Kr = me, FE = {
  message: ({ schemaCode: e }) => (0, Kr.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Kr._)`{multipleOf: ${e}}`
}, LE = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: FE,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: a } = e, s = a.opts.multipleOfPrecision, i = t.let("res"), o = s ? (0, Kr._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, Kr._)`${i} !== parseInt(${i})`;
    e.fail$data((0, Kr._)`(${r} === 0 || (${i} = ${n}/${r}, ${o}))`);
  }
};
nl.default = LE;
var rl = {}, al = {};
Object.defineProperty(al, "__esModule", { value: !0 });
function Ah(e) {
  const t = e.length;
  let n = 0, r = 0, a;
  for (; r < t; )
    n++, a = e.charCodeAt(r++), a >= 55296 && a <= 56319 && r < t && (a = e.charCodeAt(r), (a & 64512) === 56320 && r++);
  return n;
}
al.default = Ah;
Ah.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(rl, "__esModule", { value: !0 });
const bn = me, ME = Z, UE = al, zE = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, bn.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, bn._)`{limit: ${e}}`
}, qE = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: zE,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: a } = e, s = t === "maxLength" ? bn.operators.GT : bn.operators.LT, i = a.opts.unicode === !1 ? (0, bn._)`${n}.length` : (0, bn._)`${(0, ME.useFunc)(e.gen, UE.default)}(${n})`;
    e.fail$data((0, bn._)`${i} ${s} ${r}`);
  }
};
rl.default = qE;
var sl = {};
Object.defineProperty(sl, "__esModule", { value: !0 });
const VE = be, BE = Z, er = me, HE = {
  message: ({ schemaCode: e }) => (0, er.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, er._)`{pattern: ${e}}`
}, GE = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: HE,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e, o = i.opts.unicodeRegExp ? "u" : "";
    if (r) {
      const { regExp: c } = i.opts.code, u = c.code === "new RegExp" ? (0, er._)`new RegExp` : (0, BE.useFunc)(t, c), l = t.let("valid");
      t.try(() => t.assign(l, (0, er._)`${u}(${s}, ${o}).test(${n})`), () => t.assign(l, !1)), e.fail$data((0, er._)`!${l}`);
    } else {
      const c = (0, VE.usePattern)(e, a);
      e.fail$data((0, er._)`!${c}.test(${n})`);
    }
  }
};
sl.default = GE;
var il = {};
Object.defineProperty(il, "__esModule", { value: !0 });
const Wr = me, KE = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Wr.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Wr._)`{limit: ${e}}`
}, WE = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: KE,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxProperties" ? Wr.operators.GT : Wr.operators.LT;
    e.fail$data((0, Wr._)`Object.keys(${n}).length ${a} ${r}`);
  }
};
il.default = WE;
var ol = {};
Object.defineProperty(ol, "__esModule", { value: !0 });
const Lr = be, Jr = me, JE = Z, XE = {
  message: ({ params: { missingProperty: e } }) => (0, Jr.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Jr._)`{missingProperty: ${e}}`
}, YE = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: XE,
  code(e) {
    const { gen: t, schema: n, schemaCode: r, data: a, $data: s, it: i } = e, { opts: o } = i;
    if (!s && n.length === 0)
      return;
    const c = n.length >= o.loopRequired;
    if (i.allErrors ? u() : l(), o.strictRequired) {
      const f = e.parentSchema.properties, { definedProperties: y } = e.it;
      for (const v of n)
        if (f?.[v] === void 0 && !y.has(v)) {
          const g = i.schemaEnv.baseId + i.errSchemaPath, h = `required property "${v}" is not defined at "${g}" (strictRequired)`;
          (0, JE.checkStrictMode)(i, h, i.opts.strictRequired);
        }
    }
    function u() {
      if (c || s)
        e.block$data(Jr.nil, p);
      else
        for (const f of n)
          (0, Lr.checkReportMissingProp)(e, f);
    }
    function l() {
      const f = t.let("missing");
      if (c || s) {
        const y = t.let("valid", !0);
        e.block$data(y, () => m(f, y)), e.ok(y);
      } else
        t.if((0, Lr.checkMissingProp)(e, n, f)), (0, Lr.reportMissingProp)(e, f), t.else();
    }
    function p() {
      t.forOf("prop", r, (f) => {
        e.setParams({ missingProperty: f }), t.if((0, Lr.noPropertyInData)(t, a, f, o.ownProperties), () => e.error());
      });
    }
    function m(f, y) {
      e.setParams({ missingProperty: f }), t.forOf(f, r, () => {
        t.assign(y, (0, Lr.propertyInData)(t, a, f, o.ownProperties)), t.if((0, Jr.not)(y), () => {
          e.error(), t.break();
        });
      }, Jr.nil);
    }
  }
};
ol.default = YE;
var cl = {};
Object.defineProperty(cl, "__esModule", { value: !0 });
const Xr = me, ZE = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, Xr.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, Xr._)`{limit: ${e}}`
}, QE = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: ZE,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxItems" ? Xr.operators.GT : Xr.operators.LT;
    e.fail$data((0, Xr._)`${n}.length ${a} ${r}`);
  }
};
cl.default = QE;
var ll = {}, _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
const Th = Ys;
Th.code = 'require("ajv/dist/runtime/equal").default';
_a.default = Th;
Object.defineProperty(ll, "__esModule", { value: !0 });
const eo = ze, We = me, eS = Z, tS = _a, nS = {
  message: ({ params: { i: e, j: t } }) => (0, We.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, We._)`{i: ${e}, j: ${t}}`
}, rS = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: nS,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, parentSchema: s, schemaCode: i, it: o } = e;
    if (!r && !a)
      return;
    const c = t.let("valid"), u = s.items ? (0, eo.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, We._)`${i} === false`), e.ok(c);
    function l() {
      const y = t.let("i", (0, We._)`${n}.length`), v = t.let("j");
      e.setParams({ i: y, j: v }), t.assign(c, !0), t.if((0, We._)`${y} > 1`, () => (p() ? m : f)(y, v));
    }
    function p() {
      return u.length > 0 && !u.some((y) => y === "object" || y === "array");
    }
    function m(y, v) {
      const g = t.name("item"), h = (0, eo.checkDataTypes)(u, g, o.opts.strictNumbers, eo.DataType.Wrong), _ = t.const("indices", (0, We._)`{}`);
      t.for((0, We._)`;${y}--;`, () => {
        t.let(g, (0, We._)`${n}[${y}]`), t.if(h, (0, We._)`continue`), u.length > 1 && t.if((0, We._)`typeof ${g} == "string"`, (0, We._)`${g} += "_"`), t.if((0, We._)`typeof ${_}[${g}] == "number"`, () => {
          t.assign(v, (0, We._)`${_}[${g}]`), e.error(), t.assign(c, !1).break();
        }).code((0, We._)`${_}[${g}] = ${y}`);
      });
    }
    function f(y, v) {
      const g = (0, eS.useFunc)(t, tS.default), h = t.name("outer");
      t.label(h).for((0, We._)`;${y}--;`, () => t.for((0, We._)`${v} = ${y}; ${v}--;`, () => t.if((0, We._)`${g}(${n}[${y}], ${n}[${v}])`, () => {
        e.error(), t.assign(c, !1).break(h);
      })));
    }
  }
};
ll.default = rS;
var ul = {};
Object.defineProperty(ul, "__esModule", { value: !0 });
const Bo = me, aS = Z, sS = _a, iS = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Bo._)`{allowedValue: ${e}}`
}, oS = {
  keyword: "const",
  $data: !0,
  error: iS,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: a, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, Bo._)`!${(0, aS.useFunc)(t, sS.default)}(${n}, ${a})`) : e.fail((0, Bo._)`${s} !== ${n}`);
  }
};
ul.default = oS;
var pl = {};
Object.defineProperty(pl, "__esModule", { value: !0 });
const Hr = me, cS = Z, lS = _a, uS = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Hr._)`{allowedValues: ${e}}`
}, pS = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: uS,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e;
    if (!r && a.length === 0)
      throw new Error("enum must have non-empty array");
    const o = a.length >= i.opts.loopEnum;
    let c;
    const u = () => c ?? (c = (0, cS.useFunc)(t, lS.default));
    let l;
    if (o || r)
      l = t.let("valid"), e.block$data(l, p);
    else {
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const f = t.const("vSchema", s);
      l = (0, Hr.or)(...a.map((y, v) => m(f, v)));
    }
    e.pass(l);
    function p() {
      t.assign(l, !1), t.forOf("v", s, (f) => t.if((0, Hr._)`${u()}(${n}, ${f})`, () => t.assign(l, !0).break()));
    }
    function m(f, y) {
      const v = a[y];
      return typeof v == "object" && v !== null ? (0, Hr._)`${u()}(${n}, ${f}[${y}])` : (0, Hr._)`${n} === ${v}`;
    }
  }
};
pl.default = pS;
Object.defineProperty(el, "__esModule", { value: !0 });
const dS = tl, fS = nl, mS = rl, hS = sl, vS = il, yS = ol, gS = cl, bS = ll, _S = ul, $S = pl, wS = [
  // number
  dS.default,
  fS.default,
  // string
  mS.default,
  hS.default,
  // object
  vS.default,
  yS.default,
  // array
  gS.default,
  bS.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  _S.default,
  $S.default
];
el.default = wS;
var dl = {}, wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.validateAdditionalItems = void 0;
const _n = me, Ho = Z, xS = {
  message: ({ params: { len: e } }) => (0, _n.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, _n._)`{limit: ${e}}`
}, ES = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: xS,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, Ho.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    jh(e, r);
  }
};
function jh(e, t) {
  const { gen: n, schema: r, data: a, keyword: s, it: i } = e;
  i.items = !0;
  const o = n.const("len", (0, _n._)`${a}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, _n._)`${o} <= ${t.length}`);
  else if (typeof r == "object" && !(0, Ho.alwaysValidSchema)(i, r)) {
    const u = n.var("valid", (0, _n._)`${o} <= ${t.length}`);
    n.if((0, _n.not)(u), () => c(u)), e.ok(u);
  }
  function c(u) {
    n.forRange("i", t.length, o, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: Ho.Type.Num }, u), i.allErrors || n.if((0, _n.not)(u), () => n.break());
    });
  }
}
wr.validateAdditionalItems = jh;
wr.default = ES;
var fl = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.validateTuple = void 0;
const dd = me, ls = Z, SS = be, PS = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return kh(e, "additionalItems", t);
    n.items = !0, !(0, ls.alwaysValidSchema)(n, t) && e.ok((0, SS.validateArray)(e));
  }
};
function kh(e, t, n = e.schema) {
  const { gen: r, parentSchema: a, data: s, keyword: i, it: o } = e;
  l(a), o.opts.unevaluated && n.length && o.items !== !0 && (o.items = ls.mergeEvaluated.items(r, n.length, o.items));
  const c = r.name("valid"), u = r.const("len", (0, dd._)`${s}.length`);
  n.forEach((p, m) => {
    (0, ls.alwaysValidSchema)(o, p) || (r.if((0, dd._)`${u} > ${m}`, () => e.subschema({
      keyword: i,
      schemaProp: m,
      dataProp: m
    }, c)), e.ok(c));
  });
  function l(p) {
    const { opts: m, errSchemaPath: f } = o, y = n.length, v = y === p.minItems && (y === p.maxItems || p[t] === !1);
    if (m.strictTuples && !v) {
      const g = `"${i}" is ${y}-tuple, but minItems or maxItems/${t} are not specified or different at path "${f}"`;
      (0, ls.checkStrictMode)(o, g, m.strictTuples);
    }
  }
}
xr.validateTuple = kh;
xr.default = PS;
Object.defineProperty(fl, "__esModule", { value: !0 });
const RS = xr, OS = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, RS.validateTuple)(e, "items")
};
fl.default = OS;
var ml = {};
Object.defineProperty(ml, "__esModule", { value: !0 });
const fd = me, AS = Z, TS = be, jS = wr, kS = {
  message: ({ params: { len: e } }) => (0, fd.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, fd._)`{limit: ${e}}`
}, NS = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: kS,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: a } = n;
    r.items = !0, !(0, AS.alwaysValidSchema)(r, t) && (a ? (0, jS.validateAdditionalItems)(e, a) : e.ok((0, TS.validateArray)(e)));
  }
};
ml.default = NS;
var hl = {};
Object.defineProperty(hl, "__esModule", { value: !0 });
const $t = me, Ca = Z, IS = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, $t.str)`must contain at least ${e} valid item(s)` : (0, $t.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, $t._)`{minContains: ${e}}` : (0, $t._)`{minContains: ${e}, maxContains: ${t}}`
}, CS = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: IS,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    let i, o;
    const { minContains: c, maxContains: u } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, o = u) : i = 1;
    const l = t.const("len", (0, $t._)`${a}.length`);
    if (e.setParams({ min: i, max: o }), o === void 0 && i === 0) {
      (0, Ca.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (o !== void 0 && i > o) {
      (0, Ca.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Ca.alwaysValidSchema)(s, n)) {
      let v = (0, $t._)`${l} >= ${i}`;
      o !== void 0 && (v = (0, $t._)`${v} && ${l} <= ${o}`), e.pass(v);
      return;
    }
    s.items = !0;
    const p = t.name("valid");
    o === void 0 && i === 1 ? f(p, () => t.if(p, () => t.break())) : i === 0 ? (t.let(p, !0), o !== void 0 && t.if((0, $t._)`${a}.length > 0`, m)) : (t.let(p, !1), m()), e.result(p, () => e.reset());
    function m() {
      const v = t.name("_valid"), g = t.let("count", 0);
      f(v, () => t.if(v, () => y(g)));
    }
    function f(v, g) {
      t.forRange("i", 0, l, (h) => {
        e.subschema({
          keyword: "contains",
          dataProp: h,
          dataPropType: Ca.Type.Num,
          compositeRule: !0
        }, v), g();
      });
    }
    function y(v) {
      t.code((0, $t._)`${v}++`), o === void 0 ? t.if((0, $t._)`${v} >= ${i}`, () => t.assign(p, !0).break()) : (t.if((0, $t._)`${v} > ${o}`, () => t.assign(p, !1).break()), i === 1 ? t.assign(p, !0) : t.if((0, $t._)`${v} >= ${i}`, () => t.assign(p, !0)));
    }
  }
};
hl.default = CS;
var ni = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = me, n = Z, r = be;
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
    const f = l.let("missing");
    for (const y in u) {
      const v = u[y];
      if (v.length === 0)
        continue;
      const g = (0, r.propertyInData)(l, p, y, m.opts.ownProperties);
      c.setParams({
        property: y,
        depsCount: v.length,
        deps: v.join(", ")
      }), m.allErrors ? l.if(g, () => {
        for (const h of v)
          (0, r.checkReportMissingProp)(c, h);
      }) : (l.if((0, t._)`${g} && (${(0, r.checkMissingProp)(c, v, f)})`), (0, r.reportMissingProp)(c, f), l.else());
    }
  }
  e.validatePropertyDeps = i;
  function o(c, u = c.schema) {
    const { gen: l, data: p, keyword: m, it: f } = c, y = l.name("valid");
    for (const v in u)
      (0, n.alwaysValidSchema)(f, u[v]) || (l.if(
        (0, r.propertyInData)(l, p, v, f.opts.ownProperties),
        () => {
          const g = c.subschema({ keyword: m, schemaProp: v }, y);
          c.mergeValidEvaluated(g, y);
        },
        () => l.var(y, !0)
        // TODO var
      ), c.ok(y));
  }
  e.validateSchemaDeps = o, e.default = a;
})(ni);
var vl = {};
Object.defineProperty(vl, "__esModule", { value: !0 });
const Nh = me, DS = Z, FS = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Nh._)`{propertyName: ${e.propertyName}}`
}, LS = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: FS,
  code(e) {
    const { gen: t, schema: n, data: r, it: a } = e;
    if ((0, DS.alwaysValidSchema)(a, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, Nh.not)(s), () => {
        e.error(!0), a.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
vl.default = LS;
var ri = {};
Object.defineProperty(ri, "__esModule", { value: !0 });
const Da = be, Rt = me, MS = _t, Fa = Z, US = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Rt._)`{additionalProperty: ${e.additionalProperty}}`
}, zS = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: US,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: o, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, Fa.alwaysValidSchema)(i, n))
      return;
    const u = (0, Da.allSchemaProperties)(r.properties), l = (0, Da.allSchemaProperties)(r.patternProperties);
    p(), e.ok((0, Rt._)`${s} === ${MS.default.errors}`);
    function p() {
      t.forIn("key", a, (g) => {
        !u.length && !l.length ? y(g) : t.if(m(g), () => y(g));
      });
    }
    function m(g) {
      let h;
      if (u.length > 8) {
        const _ = (0, Fa.schemaRefOrVal)(i, r.properties, "properties");
        h = (0, Da.isOwnProperty)(t, _, g);
      } else u.length ? h = (0, Rt.or)(...u.map((_) => (0, Rt._)`${g} === ${_}`)) : h = Rt.nil;
      return l.length && (h = (0, Rt.or)(h, ...l.map((_) => (0, Rt._)`${(0, Da.usePattern)(e, _)}.test(${g})`))), (0, Rt.not)(h);
    }
    function f(g) {
      t.code((0, Rt._)`delete ${a}[${g}]`);
    }
    function y(g) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        f(g);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: g }), e.error(), o || t.break();
        return;
      }
      if (typeof n == "object" && !(0, Fa.alwaysValidSchema)(i, n)) {
        const h = t.name("valid");
        c.removeAdditional === "failing" ? (v(g, h, !1), t.if((0, Rt.not)(h), () => {
          e.reset(), f(g);
        })) : (v(g, h), o || t.if((0, Rt.not)(h), () => t.break()));
      }
    }
    function v(g, h, _) {
      const x = {
        keyword: "additionalProperties",
        dataProp: g,
        dataPropType: Fa.Type.Str
      };
      _ === !1 && Object.assign(x, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(x, h);
    }
  }
};
ri.default = zS;
var yl = {};
Object.defineProperty(yl, "__esModule", { value: !0 });
const qS = Zs(), md = be, to = Z, hd = ri, VS = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && hd.default.code(new qS.KeywordCxt(s, hd.default, "additionalProperties"));
    const i = (0, md.allSchemaProperties)(n);
    for (const p of i)
      s.definedProperties.add(p);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = to.mergeEvaluated.props(t, (0, to.toHash)(i), s.props));
    const o = i.filter((p) => !(0, to.alwaysValidSchema)(s, n[p]));
    if (o.length === 0)
      return;
    const c = t.name("valid");
    for (const p of o)
      u(p) ? l(p) : (t.if((0, md.propertyInData)(t, a, p, s.opts.ownProperties)), l(p), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(p), e.ok(c);
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
yl.default = VS;
var gl = {};
Object.defineProperty(gl, "__esModule", { value: !0 });
const vd = be, La = me, yd = Z, gd = Z, BS = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: a, it: s } = e, { opts: i } = s, o = (0, vd.allSchemaProperties)(n), c = o.filter((v) => (0, yd.alwaysValidSchema)(s, n[v]));
    if (o.length === 0 || c.length === o.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const u = i.strictSchema && !i.allowMatchingProperties && a.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof La.Name) && (s.props = (0, gd.evaluatedPropsToName)(t, s.props));
    const { props: p } = s;
    m();
    function m() {
      for (const v of o)
        u && f(v), s.allErrors ? y(v) : (t.var(l, !0), y(v), t.if(l));
    }
    function f(v) {
      for (const g in u)
        new RegExp(v).test(g) && (0, yd.checkStrictMode)(s, `property ${g} matches pattern ${v} (use allowMatchingProperties)`);
    }
    function y(v) {
      t.forIn("key", r, (g) => {
        t.if((0, La._)`${(0, vd.usePattern)(e, v)}.test(${g})`, () => {
          const h = c.includes(v);
          h || e.subschema({
            keyword: "patternProperties",
            schemaProp: v,
            dataProp: g,
            dataPropType: gd.Type.Str
          }, l), s.opts.unevaluated && p !== !0 ? t.assign((0, La._)`${p}[${g}]`, !0) : !h && !s.allErrors && t.if((0, La.not)(l), () => t.break());
        });
      });
    }
  }
};
gl.default = BS;
var bl = {};
Object.defineProperty(bl, "__esModule", { value: !0 });
const HS = Z, GS = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, HS.alwaysValidSchema)(r, n)) {
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
bl.default = GS;
var _l = {};
Object.defineProperty(_l, "__esModule", { value: !0 });
const KS = be, WS = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: KS.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
_l.default = WS;
var $l = {};
Object.defineProperty($l, "__esModule", { value: !0 });
const us = me, JS = Z, XS = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, us._)`{passingSchemas: ${e.passing}}`
}, YS = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: XS,
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
        (0, JS.alwaysValidSchema)(a, l) ? t.var(c, !0) : m = e.subschema({
          keyword: "oneOf",
          schemaProp: p,
          compositeRule: !0
        }, c), p > 0 && t.if((0, us._)`${c} && ${i}`).assign(i, !1).assign(o, (0, us._)`[${o}, ${p}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(o, p), m && e.mergeEvaluated(m, us.Name);
        });
      });
    }
  }
};
$l.default = YS;
var wl = {};
Object.defineProperty(wl, "__esModule", { value: !0 });
const ZS = Z, QS = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const a = t.name("valid");
    n.forEach((s, i) => {
      if ((0, ZS.alwaysValidSchema)(r, s))
        return;
      const o = e.subschema({ keyword: "allOf", schemaProp: i }, a);
      e.ok(a), e.mergeEvaluated(o);
    });
  }
};
wl.default = QS;
var xl = {};
Object.defineProperty(xl, "__esModule", { value: !0 });
const ks = me, Ih = Z, e1 = {
  message: ({ params: e }) => (0, ks.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, ks._)`{failingKeyword: ${e.ifClause}}`
}, t1 = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: e1,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Ih.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const a = bd(r, "then"), s = bd(r, "else");
    if (!a && !s)
      return;
    const i = t.let("valid", !0), o = t.name("_valid");
    if (c(), e.reset(), a && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(o, u("then", l), u("else", l));
    } else a ? t.if(o, u("then")) : t.if((0, ks.not)(o), u("else"));
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
        t.assign(i, o), e.mergeValidEvaluated(m, i), p ? t.assign(p, (0, ks._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function bd(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Ih.alwaysValidSchema)(e, n);
}
xl.default = t1;
var El = {};
Object.defineProperty(El, "__esModule", { value: !0 });
const n1 = Z, r1 = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, n1.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
El.default = r1;
Object.defineProperty(dl, "__esModule", { value: !0 });
const a1 = wr, s1 = fl, i1 = xr, o1 = ml, c1 = hl, l1 = ni, u1 = vl, p1 = ri, d1 = yl, f1 = gl, m1 = bl, h1 = _l, v1 = $l, y1 = wl, g1 = xl, b1 = El;
function _1(e = !1) {
  const t = [
    // any
    m1.default,
    h1.default,
    v1.default,
    y1.default,
    g1.default,
    b1.default,
    // object
    u1.default,
    p1.default,
    l1.default,
    d1.default,
    f1.default
  ];
  return e ? t.push(s1.default, o1.default) : t.push(a1.default, i1.default), t.push(c1.default), t;
}
dl.default = _1;
var Sl = {}, Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.dynamicAnchor = void 0;
const no = me, $1 = _t, _d = ut, w1 = Zt, x1 = {
  keyword: "$dynamicAnchor",
  schemaType: "string",
  code: (e) => Ch(e, e.schema)
};
function Ch(e, t) {
  const { gen: n, it: r } = e;
  r.schemaEnv.root.dynamicAnchors[t] = !0;
  const a = (0, no._)`${$1.default.dynamicAnchors}${(0, no.getProperty)(t)}`, s = r.errSchemaPath === "#" ? r.validateName : E1(e);
  n.if((0, no._)`!${a}`, () => n.assign(a, s));
}
Er.dynamicAnchor = Ch;
function E1(e) {
  const { schemaEnv: t, schema: n, self: r } = e.it, { root: a, baseId: s, localRefs: i, meta: o } = t.root, { schemaId: c } = r.opts, u = new _d.SchemaEnv({ schema: n, schemaId: c, root: a, baseId: s, localRefs: i, meta: o });
  return _d.compileSchema.call(r, u), (0, w1.getValidate)(e, u);
}
Er.default = x1;
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.dynamicRef = void 0;
const $d = me, S1 = _t, wd = Zt, P1 = {
  keyword: "$dynamicRef",
  schemaType: "string",
  code: (e) => Dh(e, e.schema)
};
function Dh(e, t) {
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
      const u = n.let("_v", (0, $d._)`${S1.default.dynamicAnchors}${(0, $d.getProperty)(s)}`);
      n.if(u, o(u, c), o(a.validateName, c));
    } else
      o(a.validateName, c)();
  }
  function o(c, u) {
    return u ? () => n.block(() => {
      (0, wd.callRef)(e, c), n.let(u, !0);
    }) : () => (0, wd.callRef)(e, c);
  }
}
Sr.dynamicRef = Dh;
Sr.default = P1;
var Pl = {};
Object.defineProperty(Pl, "__esModule", { value: !0 });
const R1 = Er, O1 = Z, A1 = {
  keyword: "$recursiveAnchor",
  schemaType: "boolean",
  code(e) {
    e.schema ? (0, R1.dynamicAnchor)(e, "") : (0, O1.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
  }
};
Pl.default = A1;
var Rl = {};
Object.defineProperty(Rl, "__esModule", { value: !0 });
const T1 = Sr, j1 = {
  keyword: "$recursiveRef",
  schemaType: "string",
  code: (e) => (0, T1.dynamicRef)(e, e.schema)
};
Rl.default = j1;
Object.defineProperty(Sl, "__esModule", { value: !0 });
const k1 = Er, N1 = Sr, I1 = Pl, C1 = Rl, D1 = [k1.default, N1.default, I1.default, C1.default];
Sl.default = D1;
var Ol = {}, Al = {};
Object.defineProperty(Al, "__esModule", { value: !0 });
const xd = ni, F1 = {
  keyword: "dependentRequired",
  type: "object",
  schemaType: "object",
  error: xd.error,
  code: (e) => (0, xd.validatePropertyDeps)(e)
};
Al.default = F1;
var Tl = {};
Object.defineProperty(Tl, "__esModule", { value: !0 });
const L1 = ni, M1 = {
  keyword: "dependentSchemas",
  type: "object",
  schemaType: "object",
  code: (e) => (0, L1.validateSchemaDeps)(e)
};
Tl.default = M1;
var jl = {};
Object.defineProperty(jl, "__esModule", { value: !0 });
const U1 = Z, z1 = {
  keyword: ["maxContains", "minContains"],
  type: "array",
  schemaType: "number",
  code({ keyword: e, parentSchema: t, it: n }) {
    t.contains === void 0 && (0, U1.checkStrictMode)(n, `"${e}" without "contains" is ignored`);
  }
};
jl.default = z1;
Object.defineProperty(Ol, "__esModule", { value: !0 });
const q1 = Al, V1 = Tl, B1 = jl, H1 = [q1.default, V1.default, B1.default];
Ol.default = H1;
var kl = {}, Nl = {};
Object.defineProperty(Nl, "__esModule", { value: !0 });
const cn = me, Ed = Z, G1 = _t, K1 = {
  message: "must NOT have unevaluated properties",
  params: ({ params: e }) => (0, cn._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
}, W1 = {
  keyword: "unevaluatedProperties",
  type: "object",
  schemaType: ["boolean", "object"],
  trackErrors: !0,
  error: K1,
  code(e) {
    const { gen: t, schema: n, data: r, errsCount: a, it: s } = e;
    if (!a)
      throw new Error("ajv implementation error");
    const { allErrors: i, props: o } = s;
    o instanceof cn.Name ? t.if((0, cn._)`${o} !== true`, () => t.forIn("key", r, (p) => t.if(u(o, p), () => c(p)))) : o !== !0 && t.forIn("key", r, (p) => o === void 0 ? c(p) : t.if(l(o, p), () => c(p))), s.props = !0, e.ok((0, cn._)`${a} === ${G1.default.errors}`);
    function c(p) {
      if (n === !1) {
        e.setParams({ unevaluatedProperty: p }), e.error(), i || t.break();
        return;
      }
      if (!(0, Ed.alwaysValidSchema)(s, n)) {
        const m = t.name("valid");
        e.subschema({
          keyword: "unevaluatedProperties",
          dataProp: p,
          dataPropType: Ed.Type.Str
        }, m), i || t.if((0, cn.not)(m), () => t.break());
      }
    }
    function u(p, m) {
      return (0, cn._)`!${p} || !${p}[${m}]`;
    }
    function l(p, m) {
      const f = [];
      for (const y in p)
        p[y] === !0 && f.push((0, cn._)`${m} !== ${y}`);
      return (0, cn.and)(...f);
    }
  }
};
Nl.default = W1;
var Il = {};
Object.defineProperty(Il, "__esModule", { value: !0 });
const $n = me, Sd = Z, J1 = {
  message: ({ params: { len: e } }) => (0, $n.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, $n._)`{limit: ${e}}`
}, X1 = {
  keyword: "unevaluatedItems",
  type: "array",
  schemaType: ["boolean", "object"],
  error: J1,
  code(e) {
    const { gen: t, schema: n, data: r, it: a } = e, s = a.items || 0;
    if (s === !0)
      return;
    const i = t.const("len", (0, $n._)`${r}.length`);
    if (n === !1)
      e.setParams({ len: s }), e.fail((0, $n._)`${i} > ${s}`);
    else if (typeof n == "object" && !(0, Sd.alwaysValidSchema)(a, n)) {
      const c = t.var("valid", (0, $n._)`${i} <= ${s}`);
      t.if((0, $n.not)(c), () => o(c, s)), e.ok(c);
    }
    a.items = !0;
    function o(c, u) {
      t.forRange("i", u, i, (l) => {
        e.subschema({ keyword: "unevaluatedItems", dataProp: l, dataPropType: Sd.Type.Num }, c), a.allErrors || t.if((0, $n.not)(c), () => t.break());
      });
    }
  }
};
Il.default = X1;
Object.defineProperty(kl, "__esModule", { value: !0 });
const Y1 = Nl, Z1 = Il, Q1 = [Y1.default, Z1.default];
kl.default = Q1;
var Cl = {}, Dl = {};
Object.defineProperty(Dl, "__esModule", { value: !0 });
const Me = me, eP = {
  message: ({ schemaCode: e }) => (0, Me.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, Me._)`{format: ${e}}`
}, tP = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: eP,
  code(e, t) {
    const { gen: n, data: r, $data: a, schema: s, schemaCode: i, it: o } = e, { opts: c, errSchemaPath: u, schemaEnv: l, self: p } = o;
    if (!c.validateFormats)
      return;
    a ? m() : f();
    function m() {
      const y = n.scopeValue("formats", {
        ref: p.formats,
        code: c.code.formats
      }), v = n.const("fDef", (0, Me._)`${y}[${i}]`), g = n.let("fType"), h = n.let("format");
      n.if((0, Me._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => n.assign(g, (0, Me._)`${v}.type || "string"`).assign(h, (0, Me._)`${v}.validate`), () => n.assign(g, (0, Me._)`"string"`).assign(h, v)), e.fail$data((0, Me.or)(_(), x()));
      function _() {
        return c.strictSchema === !1 ? Me.nil : (0, Me._)`${i} && !${h}`;
      }
      function x() {
        const O = l.$async ? (0, Me._)`(${v}.async ? await ${h}(${r}) : ${h}(${r}))` : (0, Me._)`${h}(${r})`, j = (0, Me._)`(typeof ${h} == "function" ? ${O} : ${h}.test(${r}))`;
        return (0, Me._)`${h} && ${h} !== true && ${g} === ${t} && !${j}`;
      }
    }
    function f() {
      const y = p.formats[s];
      if (!y) {
        _();
        return;
      }
      if (y === !0)
        return;
      const [v, g, h] = x(y);
      v === t && e.pass(O());
      function _() {
        if (c.strictSchema === !1) {
          p.logger.warn(j());
          return;
        }
        throw new Error(j());
        function j() {
          return `unknown format "${s}" ignored in schema at path "${u}"`;
        }
      }
      function x(j) {
        const q = j instanceof RegExp ? (0, Me.regexpCode)(j) : c.code.formats ? (0, Me._)`${c.code.formats}${(0, Me.getProperty)(s)}` : void 0, J = n.scopeValue("formats", { key: s, ref: j, code: q });
        return typeof j == "object" && !(j instanceof RegExp) ? [j.type || "string", j.validate, (0, Me._)`${J}.validate`] : ["string", j, J];
      }
      function O() {
        if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, Me._)`await ${h}(${r})`;
        }
        return typeof g == "function" ? (0, Me._)`${h}(${r})` : (0, Me._)`${h}.test(${r})`;
      }
    }
  }
};
Dl.default = tP;
Object.defineProperty(Cl, "__esModule", { value: !0 });
const nP = Dl, rP = [nP.default];
Cl.default = rP;
var fr = {};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.contentVocabulary = fr.metadataVocabulary = void 0;
fr.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
fr.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Yc, "__esModule", { value: !0 });
const aP = Zc, sP = el, iP = dl, oP = Sl, cP = Ol, lP = kl, uP = Cl, Pd = fr, pP = [
  oP.default,
  aP.default,
  sP.default,
  (0, iP.default)(!0),
  uP.default,
  Pd.metadataVocabulary,
  Pd.contentVocabulary,
  cP.default,
  lP.default
];
Yc.default = pP;
var Fl = {}, ai = {};
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.DiscrError = void 0;
var Rd;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(Rd || (ai.DiscrError = Rd = {}));
Object.defineProperty(Fl, "__esModule", { value: !0 });
const Jn = me, Go = ai, Od = ut, dP = $r, fP = Z, mP = {
  message: ({ params: { discrError: e, tagName: t } }) => e === Go.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Jn._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, hP = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: mP,
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
    const c = t.let("valid", !1), u = t.const("tag", (0, Jn._)`${n}${(0, Jn.getProperty)(o)}`);
    t.if((0, Jn._)`typeof ${u} == "string"`, () => l(), () => e.error(!1, { discrError: Go.DiscrError.Tag, tag: u, tagName: o })), e.ok(c);
    function l() {
      const f = m();
      t.if(!1);
      for (const y in f)
        t.elseIf((0, Jn._)`${u} === ${y}`), t.assign(c, p(f[y]));
      t.else(), e.error(!1, { discrError: Go.DiscrError.Mapping, tag: u, tagName: o }), t.endIf();
    }
    function p(f) {
      const y = t.name("valid"), v = e.subschema({ keyword: "oneOf", schemaProp: f }, y);
      return e.mergeEvaluated(v, Jn.Name), y;
    }
    function m() {
      var f;
      const y = {}, v = h(a);
      let g = !0;
      for (let O = 0; O < i.length; O++) {
        let j = i[O];
        if (j?.$ref && !(0, fP.schemaHasRulesButRef)(j, s.self.RULES)) {
          const J = j.$ref;
          if (j = Od.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, J), j instanceof Od.SchemaEnv && (j = j.schema), j === void 0)
            throw new dP.default(s.opts.uriResolver, s.baseId, J);
        }
        const q = (f = j?.properties) === null || f === void 0 ? void 0 : f[o];
        if (typeof q != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${o}"`);
        g = g && (v || h(j)), _(q, O);
      }
      if (!g)
        throw new Error(`discriminator: "${o}" must be required`);
      return y;
      function h({ required: O }) {
        return Array.isArray(O) && O.includes(o);
      }
      function _(O, j) {
        if (O.const)
          x(O.const, j);
        else if (O.enum)
          for (const q of O.enum)
            x(q, j);
        else
          throw new Error(`discriminator: "properties/${o}" must have "const" or "enum"`);
      }
      function x(O, j) {
        if (typeof O != "string" || O in y)
          throw new Error(`discriminator: "${o}" values must be unique strings`);
        y[O] = j;
      }
    }
  }
};
Fl.default = hP;
var Ll = {};
const vP = "https://json-schema.org/draft/2020-12/schema", yP = "https://json-schema.org/draft/2020-12/schema", gP = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0,
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
  "https://json-schema.org/draft/2020-12/vocab/validation": !0,
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, bP = "meta", _P = "Core and Validation specifications meta-schema", $P = [
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
], wP = [
  "object",
  "boolean"
], xP = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", EP = {
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
}, SP = {
  $schema: vP,
  $id: yP,
  $vocabulary: gP,
  $dynamicAnchor: bP,
  title: _P,
  allOf: $P,
  type: wP,
  $comment: xP,
  properties: EP
}, PP = "https://json-schema.org/draft/2020-12/schema", RP = "https://json-schema.org/draft/2020-12/meta/applicator", OP = {
  "https://json-schema.org/draft/2020-12/vocab/applicator": !0
}, AP = "meta", TP = "Applicator vocabulary meta-schema", jP = [
  "object",
  "boolean"
], kP = {
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
}, NP = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $dynamicRef: "#meta"
    }
  }
}, IP = {
  $schema: PP,
  $id: RP,
  $vocabulary: OP,
  $dynamicAnchor: AP,
  title: TP,
  type: jP,
  properties: kP,
  $defs: NP
}, CP = "https://json-schema.org/draft/2020-12/schema", DP = "https://json-schema.org/draft/2020-12/meta/unevaluated", FP = {
  "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
}, LP = "meta", MP = "Unevaluated applicator vocabulary meta-schema", UP = [
  "object",
  "boolean"
], zP = {
  unevaluatedItems: {
    $dynamicRef: "#meta"
  },
  unevaluatedProperties: {
    $dynamicRef: "#meta"
  }
}, qP = {
  $schema: CP,
  $id: DP,
  $vocabulary: FP,
  $dynamicAnchor: LP,
  title: MP,
  type: UP,
  properties: zP
}, VP = "https://json-schema.org/draft/2020-12/schema", BP = "https://json-schema.org/draft/2020-12/meta/content", HP = {
  "https://json-schema.org/draft/2020-12/vocab/content": !0
}, GP = "meta", KP = "Content vocabulary meta-schema", WP = [
  "object",
  "boolean"
], JP = {
  contentEncoding: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentSchema: {
    $dynamicRef: "#meta"
  }
}, XP = {
  $schema: VP,
  $id: BP,
  $vocabulary: HP,
  $dynamicAnchor: GP,
  title: KP,
  type: WP,
  properties: JP
}, YP = "https://json-schema.org/draft/2020-12/schema", ZP = "https://json-schema.org/draft/2020-12/meta/core", QP = {
  "https://json-schema.org/draft/2020-12/vocab/core": !0
}, eR = "meta", tR = "Core vocabulary meta-schema", nR = [
  "object",
  "boolean"
], rR = {
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
}, aR = {
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
}, sR = {
  $schema: YP,
  $id: ZP,
  $vocabulary: QP,
  $dynamicAnchor: eR,
  title: tR,
  type: nR,
  properties: rR,
  $defs: aR
}, iR = "https://json-schema.org/draft/2020-12/schema", oR = "https://json-schema.org/draft/2020-12/meta/format-annotation", cR = {
  "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
}, lR = "meta", uR = "Format vocabulary meta-schema for annotation results", pR = [
  "object",
  "boolean"
], dR = {
  format: {
    type: "string"
  }
}, fR = {
  $schema: iR,
  $id: oR,
  $vocabulary: cR,
  $dynamicAnchor: lR,
  title: uR,
  type: pR,
  properties: dR
}, mR = "https://json-schema.org/draft/2020-12/schema", hR = "https://json-schema.org/draft/2020-12/meta/meta-data", vR = {
  "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
}, yR = "meta", gR = "Meta-data vocabulary meta-schema", bR = [
  "object",
  "boolean"
], _R = {
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
}, $R = {
  $schema: mR,
  $id: hR,
  $vocabulary: vR,
  $dynamicAnchor: yR,
  title: gR,
  type: bR,
  properties: _R
}, wR = "https://json-schema.org/draft/2020-12/schema", xR = "https://json-schema.org/draft/2020-12/meta/validation", ER = {
  "https://json-schema.org/draft/2020-12/vocab/validation": !0
}, SR = "meta", PR = "Validation vocabulary meta-schema", RR = [
  "object",
  "boolean"
], OR = {
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
}, AR = {
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
}, TR = {
  $schema: wR,
  $id: xR,
  $vocabulary: ER,
  $dynamicAnchor: SR,
  title: PR,
  type: RR,
  properties: OR,
  $defs: AR
};
Object.defineProperty(Ll, "__esModule", { value: !0 });
const jR = SP, kR = IP, NR = qP, IR = XP, CR = sR, DR = fR, FR = $R, LR = TR, MR = ["/properties"];
function UR(e) {
  return [
    jR,
    kR,
    NR,
    IR,
    CR,
    t(this, DR),
    FR,
    t(this, LR)
  ].forEach((n) => this.addMetaSchema(n, void 0, !1)), this;
  function t(n, r) {
    return e ? n.$dataMetaSchema(r, MR) : r;
  }
}
Ll.default = UR;
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
  const n = Jm, r = Yc, a = Fl, s = Ll, i = "https://json-schema.org/draft/2020-12/schema";
  class o extends n.default {
    constructor(f = {}) {
      super({
        ...f,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((f) => this.addVocabulary(f)), this.opts.discriminator && this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      const { $data: f, meta: y } = this.opts;
      y && (s.default.call(this, f), this.refs["http://json-schema.org/schema"] = i);
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
    }
  }
  t.Ajv2020 = o, e.exports = t = o, e.exports.Ajv2020 = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
  var c = Zs();
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return c.KeywordCxt;
  } });
  var u = me;
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
  var l = Hc();
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return l.default;
  } });
  var p = $r;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return p.default;
  } });
})(Mo, Mo.exports);
var zR = Mo.exports, Ko = { exports: {} }, Fh = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function t(M, z) {
    return { validate: M, compare: z };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: t(s, i),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: t(c(!0), u),
    "date-time": t(m(!0), f),
    "iso-time": t(c(), l),
    "iso-date-time": t(m(), y),
    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: h,
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
    regex: N,
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
    byte: x,
    // signed 32 bit integer
    int32: { type: "number", validate: q },
    // signed 64 bit integer
    int64: { type: "number", validate: J },
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
    "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f),
    "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
    "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, y),
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  }, e.formatNames = Object.keys(e.fullFormats);
  function n(M) {
    return M % 4 === 0 && (M % 100 !== 0 || M % 400 === 0);
  }
  const r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function s(M) {
    const z = r.exec(M);
    if (!z)
      return !1;
    const W = +z[1], k = +z[2], U = +z[3];
    return k >= 1 && k <= 12 && U >= 1 && U <= (k === 2 && n(W) ? 29 : a[k]);
  }
  function i(M, z) {
    if (M && z)
      return M > z ? 1 : M < z ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function c(M) {
    return function(W) {
      const k = o.exec(W);
      if (!k)
        return !1;
      const U = +k[1], X = +k[2], K = +k[3], ae = k[4], Q = k[5] === "-" ? -1 : 1, R = +(k[6] || 0), $ = +(k[7] || 0);
      if (R > 23 || $ > 59 || M && !ae)
        return !1;
      if (U <= 23 && X <= 59 && K < 60)
        return !0;
      const S = X - $ * Q, w = U - R * Q - (S < 0 ? 1 : 0);
      return (w === 23 || w === -1) && (S === 59 || S === -1) && K < 61;
    };
  }
  function u(M, z) {
    if (!(M && z))
      return;
    const W = (/* @__PURE__ */ new Date("2020-01-01T" + M)).valueOf(), k = (/* @__PURE__ */ new Date("2020-01-01T" + z)).valueOf();
    if (W && k)
      return W - k;
  }
  function l(M, z) {
    if (!(M && z))
      return;
    const W = o.exec(M), k = o.exec(z);
    if (W && k)
      return M = W[1] + W[2] + W[3], z = k[1] + k[2] + k[3], M > z ? 1 : M < z ? -1 : 0;
  }
  const p = /t|\s/i;
  function m(M) {
    const z = c(M);
    return function(k) {
      const U = k.split(p);
      return U.length === 2 && s(U[0]) && z(U[1]);
    };
  }
  function f(M, z) {
    if (!(M && z))
      return;
    const W = new Date(M).valueOf(), k = new Date(z).valueOf();
    if (W && k)
      return W - k;
  }
  function y(M, z) {
    if (!(M && z))
      return;
    const [W, k] = M.split(p), [U, X] = z.split(p), K = i(W, U);
    if (K !== void 0)
      return K || u(k, X);
  }
  const v = /\/|:/, g = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function h(M) {
    return v.test(M) && g.test(M);
  }
  const _ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function x(M) {
    return _.lastIndex = 0, _.test(M);
  }
  const O = -2147483648, j = 2 ** 31 - 1;
  function q(M) {
    return Number.isInteger(M) && M <= j && M >= O;
  }
  function J(M) {
    return Number.isInteger(M);
  }
  function C() {
    return !0;
  }
  const ee = /[^\\]\\Z/;
  function N(M) {
    if (ee.test(M))
      return !1;
    try {
      return new RegExp(M), !0;
    } catch {
      return !1;
    }
  }
})(Fh);
var Lh = {}, Wo = { exports: {} }, Mh = {}, Nt = {}, mr = {}, $a = {}, ye = {}, pa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class n extends t {
    constructor(_) {
      if (super(), !e.IDENTIFIER.test(_))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = _;
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
    constructor(_) {
      super(), this._items = typeof _ == "string" ? [_] : _;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const _ = this._items[0];
      return _ === "" || _ === '""';
    }
    get str() {
      var _;
      return (_ = this._str) !== null && _ !== void 0 ? _ : this._str = this._items.reduce((x, O) => `${x}${O}`, "");
    }
    get names() {
      var _;
      return (_ = this._names) !== null && _ !== void 0 ? _ : this._names = this._items.reduce((x, O) => (O instanceof n && (x[O.str] = (x[O.str] || 0) + 1), x), {});
    }
  }
  e._Code = r, e.nil = new r("");
  function a(h, ..._) {
    const x = [h[0]];
    let O = 0;
    for (; O < _.length; )
      o(x, _[O]), x.push(h[++O]);
    return new r(x);
  }
  e._ = a;
  const s = new r("+");
  function i(h, ..._) {
    const x = [f(h[0])];
    let O = 0;
    for (; O < _.length; )
      x.push(s), o(x, _[O]), x.push(s, f(h[++O]));
    return c(x), new r(x);
  }
  e.str = i;
  function o(h, _) {
    _ instanceof r ? h.push(..._._items) : _ instanceof n ? h.push(_) : h.push(p(_));
  }
  e.addCodeArg = o;
  function c(h) {
    let _ = 1;
    for (; _ < h.length - 1; ) {
      if (h[_] === s) {
        const x = u(h[_ - 1], h[_ + 1]);
        if (x !== void 0) {
          h.splice(_ - 1, 3, x);
          continue;
        }
        h[_++] = "+";
      }
      _++;
    }
  }
  function u(h, _) {
    if (_ === '""')
      return h;
    if (h === '""')
      return _;
    if (typeof h == "string")
      return _ instanceof n || h[h.length - 1] !== '"' ? void 0 : typeof _ != "string" ? `${h.slice(0, -1)}${_}"` : _[0] === '"' ? h.slice(0, -1) + _.slice(1) : void 0;
    if (typeof _ == "string" && _[0] === '"' && !(h instanceof n))
      return `"${h}${_.slice(1)}`;
  }
  function l(h, _) {
    return _.emptyStr() ? h : h.emptyStr() ? _ : i`${h}${_}`;
  }
  e.strConcat = l;
  function p(h) {
    return typeof h == "number" || typeof h == "boolean" || h === null ? h : f(Array.isArray(h) ? h.join(",") : h);
  }
  function m(h) {
    return new r(f(h));
  }
  e.stringify = m;
  function f(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = f;
  function y(h) {
    return typeof h == "string" && e.IDENTIFIER.test(h) ? new r(`.${h}`) : a`[${h}]`;
  }
  e.getProperty = y;
  function v(h) {
    if (typeof h == "string" && e.IDENTIFIER.test(h))
      return new r(`${h}`);
    throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e.getEsmExportName = v;
  function g(h) {
    return new r(h.toString());
  }
  e.regexpCode = g;
})(pa);
var Jo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = pa;
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
      const m = this.toName(u), { prefix: f } = m, y = (p = l.key) !== null && p !== void 0 ? p : l.ref;
      let v = this._values[f];
      if (v) {
        const _ = v.get(y);
        if (_)
          return _;
      } else
        v = this._values[f] = /* @__PURE__ */ new Map();
      v.set(y, m);
      const g = this._scope[f] || (this._scope[f] = []), h = g.length;
      return g[h] = l.ref, m.setValue(l, { property: f, itemIndex: h }), m;
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
      let f = t.nil;
      for (const y in u) {
        const v = u[y];
        if (!v)
          continue;
        const g = p[y] = p[y] || /* @__PURE__ */ new Map();
        v.forEach((h) => {
          if (g.has(h))
            return;
          g.set(h, r.Started);
          let _ = l(h);
          if (_) {
            const x = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            f = (0, t._)`${f}${x} ${h} = ${_};${this.opts._n}`;
          } else if (_ = m?.(h))
            f = (0, t._)`${f}${_}${this.opts._n}`;
          else
            throw new n(h);
          g.set(h, r.Completed);
        });
      }
      return f;
    }
  }
  e.ValueScope = o;
})(Jo);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = pa, n = Jo;
  var r = pa;
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
    constructor(d, b, E) {
      super(), this.varKind = d, this.name = b, this.rhs = E;
    }
    render({ es5: d, _n: b }) {
      const E = d ? n.varKinds.var : this.varKind, I = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${E} ${this.name}${I};` + b;
    }
    optimizeNames(d, b) {
      if (d[this.name.str])
        return this.rhs && (this.rhs = k(this.rhs, d, b)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends s {
    constructor(d, b, E) {
      super(), this.lhs = d, this.rhs = b, this.sideEffects = E;
    }
    render({ _n: d }) {
      return `${this.lhs} = ${this.rhs};` + d;
    }
    optimizeNames(d, b) {
      if (!(this.lhs instanceof t.Name && !d[this.lhs.str] && !this.sideEffects))
        return this.rhs = k(this.rhs, d, b), this;
    }
    get names() {
      const d = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return W(d, this.rhs);
    }
  }
  class c extends o {
    constructor(d, b, E, I) {
      super(d, E, I), this.op = b;
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
      return this.code = k(this.code, d, b), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class f extends s {
    constructor(d = []) {
      super(), this.nodes = d;
    }
    render(d) {
      return this.nodes.reduce((b, E) => b + E.render(d), "");
    }
    optimizeNodes() {
      const { nodes: d } = this;
      let b = d.length;
      for (; b--; ) {
        const E = d[b].optimizeNodes();
        Array.isArray(E) ? d.splice(b, 1, ...E) : E ? d[b] = E : d.splice(b, 1);
      }
      return d.length > 0 ? this : void 0;
    }
    optimizeNames(d, b) {
      const { nodes: E } = this;
      let I = E.length;
      for (; I--; ) {
        const F = E[I];
        F.optimizeNames(d, b) || (U(d, F.names), E.splice(I, 1));
      }
      return E.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((d, b) => z(d, b.names), {});
    }
  }
  class y extends f {
    render(d) {
      return "{" + d._n + super.render(d) + "}" + d._n;
    }
  }
  class v extends f {
  }
  class g extends y {
  }
  g.kind = "else";
  class h extends y {
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
        const E = b.optimizeNodes();
        b = this.else = Array.isArray(E) ? new g(E) : E;
      }
      if (b)
        return d === !1 ? b instanceof h ? b : b.nodes : this.nodes.length ? this : new h(X(d), b instanceof h ? [b] : b.nodes);
      if (!(d === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(d, b) {
      var E;
      if (this.else = (E = this.else) === null || E === void 0 ? void 0 : E.optimizeNames(d, b), !!(super.optimizeNames(d, b) || this.else))
        return this.condition = k(this.condition, d, b), this;
    }
    get names() {
      const d = super.names;
      return W(d, this.condition), this.else && z(d, this.else.names), d;
    }
  }
  h.kind = "if";
  class _ extends y {
  }
  _.kind = "for";
  class x extends _ {
    constructor(d) {
      super(), this.iteration = d;
    }
    render(d) {
      return `for(${this.iteration})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iteration = k(this.iteration, d, b), this;
    }
    get names() {
      return z(super.names, this.iteration.names);
    }
  }
  class O extends _ {
    constructor(d, b, E, I) {
      super(), this.varKind = d, this.name = b, this.from = E, this.to = I;
    }
    render(d) {
      const b = d.es5 ? n.varKinds.var : this.varKind, { name: E, from: I, to: F } = this;
      return `for(${b} ${E}=${I}; ${E}<${F}; ${E}++)` + super.render(d);
    }
    get names() {
      const d = W(super.names, this.from);
      return W(d, this.to);
    }
  }
  class j extends _ {
    constructor(d, b, E, I) {
      super(), this.loop = d, this.varKind = b, this.name = E, this.iterable = I;
    }
    render(d) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(d);
    }
    optimizeNames(d, b) {
      if (super.optimizeNames(d, b))
        return this.iterable = k(this.iterable, d, b), this;
    }
    get names() {
      return z(super.names, this.iterable.names);
    }
  }
  class q extends y {
    constructor(d, b, E) {
      super(), this.name = d, this.args = b, this.async = E;
    }
    render(d) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(d);
    }
  }
  q.kind = "func";
  class J extends f {
    render(d) {
      return "return " + super.render(d);
    }
  }
  J.kind = "return";
  class C extends y {
    render(d) {
      let b = "try" + super.render(d);
      return this.catch && (b += this.catch.render(d)), this.finally && (b += this.finally.render(d)), b;
    }
    optimizeNodes() {
      var d, b;
      return super.optimizeNodes(), (d = this.catch) === null || d === void 0 || d.optimizeNodes(), (b = this.finally) === null || b === void 0 || b.optimizeNodes(), this;
    }
    optimizeNames(d, b) {
      var E, I;
      return super.optimizeNames(d, b), (E = this.catch) === null || E === void 0 || E.optimizeNames(d, b), (I = this.finally) === null || I === void 0 || I.optimizeNames(d, b), this;
    }
    get names() {
      const d = super.names;
      return this.catch && z(d, this.catch.names), this.finally && z(d, this.finally.names), d;
    }
  }
  class ee extends y {
    constructor(d) {
      super(), this.error = d;
    }
    render(d) {
      return `catch(${this.error})` + super.render(d);
    }
  }
  ee.kind = "catch";
  class N extends y {
    render(d) {
      return "finally" + super.render(d);
    }
  }
  N.kind = "finally";
  class M {
    constructor(d, b = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...b, _n: b.lines ? `
` : "" }, this._extScope = d, this._scope = new n.Scope({ parent: d }), this._nodes = [new v()];
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
      const E = this._extScope.value(d, b);
      return (this._values[E.prefix] || (this._values[E.prefix] = /* @__PURE__ */ new Set())).add(E), E;
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
    _def(d, b, E, I) {
      const F = this._scope.toName(b);
      return E !== void 0 && I && (this._constants[F.str] = E), this._leafNode(new i(d, F, E)), F;
    }
    // `const` declaration (`var` in es5 mode)
    const(d, b, E) {
      return this._def(n.varKinds.const, d, b, E);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(d, b, E) {
      return this._def(n.varKinds.let, d, b, E);
    }
    // `var` declaration with optional assignment
    var(d, b, E) {
      return this._def(n.varKinds.var, d, b, E);
    }
    // assignment code
    assign(d, b, E) {
      return this._leafNode(new o(d, b, E));
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
      for (const [E, I] of d)
        b.length > 1 && b.push(","), b.push(E), (E !== I || this.opts.es5) && (b.push(":"), (0, t.addCodeArg)(b, I));
      return b.push("}"), new t._Code(b);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(d, b, E) {
      if (this._blockNode(new h(d)), b && E)
        this.code(b).else().code(E).endIf();
      else if (b)
        this.code(b).endIf();
      else if (E)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(d) {
      return this._elseNode(new h(d));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new g());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(h, g);
    }
    _for(d, b) {
      return this._blockNode(d), b && this.code(b).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(d, b) {
      return this._for(new x(d), b);
    }
    // `for` statement for a range of values
    forRange(d, b, E, I, F = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
      const te = this._scope.toName(d);
      return this._for(new O(F, te, b, E), () => I(te));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(d, b, E, I = n.varKinds.const) {
      const F = this._scope.toName(d);
      if (this.opts.es5) {
        const te = b instanceof t.Name ? b : this.var("_arr", b);
        return this.forRange("_i", 0, (0, t._)`${te}.length`, (ne) => {
          this.var(F, (0, t._)`${te}[${ne}]`), E(F);
        });
      }
      return this._for(new j("of", I, F, b), () => E(F));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(d, b, E, I = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(d, (0, t._)`Object.keys(${b})`, E);
      const F = this._scope.toName(d);
      return this._for(new j("in", I, F, b), () => E(F));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(_);
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
      const b = new J();
      if (this._blockNode(b), this.code(d), b.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(J);
    }
    // `try` statement
    try(d, b, E) {
      if (!b && !E)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const I = new C();
      if (this._blockNode(I), this.code(d), b) {
        const F = this.name("e");
        this._currNode = I.catch = new ee(F), b(F);
      }
      return E && (this._currNode = I.finally = new N(), this.code(E)), this._endBlockNode(ee, N);
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
      const E = this._nodes.length - b;
      if (E < 0 || d !== void 0 && E !== d)
        throw new Error(`CodeGen: wrong number of nodes: ${E} vs ${d} expected`);
      return this._nodes.length = b, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(d, b = t.nil, E, I) {
      return this._blockNode(new q(d, b, E)), I && this.code(I).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(q);
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
      const E = this._currNode;
      if (E instanceof d || b && E instanceof b)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${b ? `${d.kind}/${b.kind}` : d.kind}"`);
    }
    _elseNode(d) {
      const b = this._currNode;
      if (!(b instanceof h))
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
  e.CodeGen = M;
  function z(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) + (d[b] || 0);
    return w;
  }
  function W(w, d) {
    return d instanceof t._CodeOrName ? z(w, d.names) : w;
  }
  function k(w, d, b) {
    if (w instanceof t.Name)
      return E(w);
    if (!I(w))
      return w;
    return new t._Code(w._items.reduce((F, te) => (te instanceof t.Name && (te = E(te)), te instanceof t._Code ? F.push(...te._items) : F.push(te), F), []));
    function E(F) {
      const te = b[F.str];
      return te === void 0 || d[F.str] !== 1 ? F : (delete d[F.str], te);
    }
    function I(F) {
      return F instanceof t._Code && F._items.some((te) => te instanceof t.Name && d[te.str] === 1 && b[te.str] !== void 0);
    }
  }
  function U(w, d) {
    for (const b in d)
      w[b] = (w[b] || 0) - (d[b] || 0);
  }
  function X(w) {
    return typeof w == "boolean" || typeof w == "number" || w === null ? !w : (0, t._)`!${S(w)}`;
  }
  e.not = X;
  const K = $(e.operators.AND);
  function ae(...w) {
    return w.reduce(K);
  }
  e.and = ae;
  const Q = $(e.operators.OR);
  function R(...w) {
    return w.reduce(Q);
  }
  e.or = R;
  function $(w) {
    return (d, b) => d === t.nil ? b : b === t.nil ? d : (0, t._)`${S(d)} ${w} ${S(b)}`;
  }
  function S(w) {
    return w instanceof t.Name ? w : (0, t._)`(${w})`;
  }
})(ye);
var re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.checkStrictMode = re.getErrorPath = re.Type = re.useFunc = re.setEvaluated = re.evaluatedPropsToName = re.mergeEvaluated = re.eachItem = re.unescapeJsonPointer = re.escapeJsonPointer = re.escapeFragment = re.unescapeFragment = re.schemaRefOrVal = re.schemaHasRulesButRef = re.schemaHasRules = re.checkUnknownRules = re.alwaysValidSchema = re.toHash = void 0;
const Oe = ye, qR = pa;
function VR(e) {
  const t = {};
  for (const n of e)
    t[n] = !0;
  return t;
}
re.toHash = VR;
function BR(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (Uh(e, t), !zh(t, e.self.RULES.all));
}
re.alwaysValidSchema = BR;
function Uh(e, t = e.schema) {
  const { opts: n, self: r } = e;
  if (!n.strictSchema || typeof t == "boolean")
    return;
  const a = r.RULES.keywords;
  for (const s in t)
    a[s] || Bh(e, `unknown keyword: "${s}"`);
}
re.checkUnknownRules = Uh;
function zh(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t[n])
      return !0;
  return !1;
}
re.schemaHasRules = zh;
function HR(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (n !== "$ref" && t.all[n])
      return !0;
  return !1;
}
re.schemaHasRulesButRef = HR;
function GR({ topSchemaRef: e, schemaPath: t }, n, r, a) {
  if (!a) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string")
      return (0, Oe._)`${n}`;
  }
  return (0, Oe._)`${e}${t}${(0, Oe.getProperty)(r)}`;
}
re.schemaRefOrVal = GR;
function KR(e) {
  return qh(decodeURIComponent(e));
}
re.unescapeFragment = KR;
function WR(e) {
  return encodeURIComponent(Ml(e));
}
re.escapeFragment = WR;
function Ml(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
re.escapeJsonPointer = Ml;
function qh(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
re.unescapeJsonPointer = qh;
function JR(e, t) {
  if (Array.isArray(e))
    for (const n of e)
      t(n);
  else
    t(e);
}
re.eachItem = JR;
function Ad({ mergeNames: e, mergeToName: t, mergeValues: n, resultToName: r }) {
  return (a, s, i, o) => {
    const c = i === void 0 ? s : i instanceof Oe.Name ? (s instanceof Oe.Name ? e(a, s, i) : t(a, s, i), i) : s instanceof Oe.Name ? (t(a, i, s), s) : n(s, i);
    return o === Oe.Name && !(c instanceof Oe.Name) ? r(a, c) : c;
  };
}
re.mergeEvaluated = {
  props: Ad({
    mergeNames: (e, t, n) => e.if((0, Oe._)`${n} !== true && ${t} !== undefined`, () => {
      e.if((0, Oe._)`${t} === true`, () => e.assign(n, !0), () => e.assign(n, (0, Oe._)`${n} || {}`).code((0, Oe._)`Object.assign(${n}, ${t})`));
    }),
    mergeToName: (e, t, n) => e.if((0, Oe._)`${n} !== true`, () => {
      t === !0 ? e.assign(n, !0) : (e.assign(n, (0, Oe._)`${n} || {}`), Ul(e, n, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: Vh
  }),
  items: Ad({
    mergeNames: (e, t, n) => e.if((0, Oe._)`${n} !== true && ${t} !== undefined`, () => e.assign(n, (0, Oe._)`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
    mergeToName: (e, t, n) => e.if((0, Oe._)`${n} !== true`, () => e.assign(n, t === !0 ? !0 : (0, Oe._)`${n} > ${t} ? ${n} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function Vh(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const n = e.var("props", (0, Oe._)`{}`);
  return t !== void 0 && Ul(e, n, t), n;
}
re.evaluatedPropsToName = Vh;
function Ul(e, t, n) {
  Object.keys(n).forEach((r) => e.assign((0, Oe._)`${t}${(0, Oe.getProperty)(r)}`, !0));
}
re.setEvaluated = Ul;
const Td = {};
function XR(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: Td[t.code] || (Td[t.code] = new qR._Code(t.code))
  });
}
re.useFunc = XR;
var Xo;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(Xo || (re.Type = Xo = {}));
function YR(e, t, n) {
  if (e instanceof Oe.Name) {
    const r = t === Xo.Num;
    return n ? r ? (0, Oe._)`"[" + ${e} + "]"` : (0, Oe._)`"['" + ${e} + "']"` : r ? (0, Oe._)`"/" + ${e}` : (0, Oe._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return n ? (0, Oe.getProperty)(e).toString() : "/" + Ml(e);
}
re.getErrorPath = YR;
function Bh(e, t, n = e.opts.strictSchema) {
  if (n) {
    if (t = `strict mode: ${t}`, n === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
re.checkStrictMode = Bh;
var Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
const at = ye, ZR = {
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
Vt.default = ZR;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = ye, n = re, r = Vt;
  e.keywordError = {
    message: ({ keyword: g }) => (0, t.str)`must pass "${g}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: g, schemaType: h }) => h ? (0, t.str)`"${g}" keyword must be ${h} ($data)` : (0, t.str)`"${g}" keyword is invalid ($data)`
  };
  function a(g, h = e.keywordError, _, x) {
    const { it: O } = g, { gen: j, compositeRule: q, allErrors: J } = O, C = p(g, h, _);
    x ?? (q || J) ? c(j, C) : u(O, (0, t._)`[${C}]`);
  }
  e.reportError = a;
  function s(g, h = e.keywordError, _) {
    const { it: x } = g, { gen: O, compositeRule: j, allErrors: q } = x, J = p(g, h, _);
    c(O, J), j || q || u(x, r.default.vErrors);
  }
  e.reportExtraError = s;
  function i(g, h) {
    g.assign(r.default.errors, h), g.if((0, t._)`${r.default.vErrors} !== null`, () => g.if(h, () => g.assign((0, t._)`${r.default.vErrors}.length`, h), () => g.assign(r.default.vErrors, null)));
  }
  e.resetErrorsCount = i;
  function o({ gen: g, keyword: h, schemaValue: _, data: x, errsCount: O, it: j }) {
    if (O === void 0)
      throw new Error("ajv implementation error");
    const q = g.name("err");
    g.forRange("i", O, r.default.errors, (J) => {
      g.const(q, (0, t._)`${r.default.vErrors}[${J}]`), g.if((0, t._)`${q}.instancePath === undefined`, () => g.assign((0, t._)`${q}.instancePath`, (0, t.strConcat)(r.default.instancePath, j.errorPath))), g.assign((0, t._)`${q}.schemaPath`, (0, t.str)`${j.errSchemaPath}/${h}`), j.opts.verbose && (g.assign((0, t._)`${q}.schema`, _), g.assign((0, t._)`${q}.data`, x));
    });
  }
  e.extendErrors = o;
  function c(g, h) {
    const _ = g.const("err", h);
    g.if((0, t._)`${r.default.vErrors} === null`, () => g.assign(r.default.vErrors, (0, t._)`[${_}]`), (0, t._)`${r.default.vErrors}.push(${_})`), g.code((0, t._)`${r.default.errors}++`);
  }
  function u(g, h) {
    const { gen: _, validateName: x, schemaEnv: O } = g;
    O.$async ? _.throw((0, t._)`new ${g.ValidationError}(${h})`) : (_.assign((0, t._)`${x}.errors`, h), _.return(!1));
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
  function p(g, h, _) {
    const { createErrors: x } = g.it;
    return x === !1 ? (0, t._)`{}` : m(g, h, _);
  }
  function m(g, h, _ = {}) {
    const { gen: x, it: O } = g, j = [
      f(O, _),
      y(g, _)
    ];
    return v(g, h, j), x.object(...j);
  }
  function f({ errorPath: g }, { instancePath: h }) {
    const _ = h ? (0, t.str)`${g}${(0, n.getErrorPath)(h, n.Type.Str)}` : g;
    return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, _)];
  }
  function y({ keyword: g, it: { errSchemaPath: h } }, { schemaPath: _, parentSchema: x }) {
    let O = x ? h : (0, t.str)`${h}/${g}`;
    return _ && (O = (0, t.str)`${O}${(0, n.getErrorPath)(_, n.Type.Str)}`), [l.schemaPath, O];
  }
  function v(g, { params: h, message: _ }, x) {
    const { keyword: O, data: j, schemaValue: q, it: J } = g, { opts: C, propertyName: ee, topSchemaRef: N, schemaPath: M } = J;
    x.push([l.keyword, O], [l.params, typeof h == "function" ? h(g) : h || (0, t._)`{}`]), C.messages && x.push([l.message, typeof _ == "function" ? _(g) : _]), C.verbose && x.push([l.schema, q], [l.parentSchema, (0, t._)`${N}${M}`], [r.default.data, j]), ee && x.push([l.propertyName, ee]);
  }
})($a);
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.boolOrEmptySchema = mr.topBoolOrEmptySchema = void 0;
const QR = $a, eO = ye, tO = Vt, nO = {
  message: "boolean schema is false"
};
function rO(e) {
  const { gen: t, schema: n, validateName: r } = e;
  n === !1 ? Hh(e, !1) : typeof n == "object" && n.$async === !0 ? t.return(tO.default.data) : (t.assign((0, eO._)`${r}.errors`, null), t.return(!0));
}
mr.topBoolOrEmptySchema = rO;
function aO(e, t) {
  const { gen: n, schema: r } = e;
  r === !1 ? (n.var(t, !1), Hh(e)) : n.var(t, !0);
}
mr.boolOrEmptySchema = aO;
function Hh(e, t) {
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
  (0, QR.reportError)(a, nO, void 0, t);
}
var qe = {}, Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.getRules = Ln.isJSONType = void 0;
const sO = ["string", "number", "integer", "boolean", "null", "object", "array"], iO = new Set(sO);
function oO(e) {
  return typeof e == "string" && iO.has(e);
}
Ln.isJSONType = oO;
function cO() {
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
Ln.getRules = cO;
var Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.shouldUseRule = Xt.shouldUseGroup = Xt.schemaHasRulesForType = void 0;
function lO({ schema: e, self: t }, n) {
  const r = t.RULES.types[n];
  return r && r !== !0 && Gh(e, r);
}
Xt.schemaHasRulesForType = lO;
function Gh(e, t) {
  return t.rules.some((n) => Kh(e, n));
}
Xt.shouldUseGroup = Gh;
function Kh(e, t) {
  var n;
  return e[t.keyword] !== void 0 || ((n = t.definition.implements) === null || n === void 0 ? void 0 : n.some((r) => e[r] !== void 0));
}
Xt.shouldUseRule = Kh;
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.reportTypeError = qe.checkDataTypes = qe.checkDataType = qe.coerceAndCheckDataType = qe.getJSONTypes = qe.getSchemaTypes = qe.DataType = void 0;
const uO = Ln, pO = Xt, dO = $a, ve = ye, Wh = re;
var sr;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})(sr || (qe.DataType = sr = {}));
function fO(e) {
  const t = Jh(e.type);
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
qe.getSchemaTypes = fO;
function Jh(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(uO.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
qe.getJSONTypes = Jh;
function mO(e, t) {
  const { gen: n, data: r, opts: a } = e, s = hO(t, a.coerceTypes), i = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, pO.schemaHasRulesForType)(e, t[0]));
  if (i) {
    const o = zl(t, r, a.strictNumbers, sr.Wrong);
    n.if(o, () => {
      s.length ? vO(e, t, s) : ql(e);
    });
  }
  return i;
}
qe.coerceAndCheckDataType = mO;
const Xh = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function hO(e, t) {
  return t ? e.filter((n) => Xh.has(n) || t === "array" && n === "array") : [];
}
function vO(e, t, n) {
  const { gen: r, data: a, opts: s } = e, i = r.let("dataType", (0, ve._)`typeof ${a}`), o = r.let("coerced", (0, ve._)`undefined`);
  s.coerceTypes === "array" && r.if((0, ve._)`${i} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, ve._)`${a}[0]`).assign(i, (0, ve._)`typeof ${a}`).if(zl(t, a, s.strictNumbers), () => r.assign(o, a))), r.if((0, ve._)`${o} !== undefined`);
  for (const u of n)
    (Xh.has(u) || u === "array" && s.coerceTypes === "array") && c(u);
  r.else(), ql(e), r.endIf(), r.if((0, ve._)`${o} !== undefined`, () => {
    r.assign(a, o), yO(e, o);
  });
  function c(u) {
    switch (u) {
      case "string":
        r.elseIf((0, ve._)`${i} == "number" || ${i} == "boolean"`).assign(o, (0, ve._)`"" + ${a}`).elseIf((0, ve._)`${a} === null`).assign(o, (0, ve._)`""`);
        return;
      case "number":
        r.elseIf((0, ve._)`${i} == "boolean" || ${a} === null
              || (${i} == "string" && ${a} && ${a} == +${a})`).assign(o, (0, ve._)`+${a}`);
        return;
      case "integer":
        r.elseIf((0, ve._)`${i} === "boolean" || ${a} === null
              || (${i} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(o, (0, ve._)`+${a}`);
        return;
      case "boolean":
        r.elseIf((0, ve._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(o, !1).elseIf((0, ve._)`${a} === "true" || ${a} === 1`).assign(o, !0);
        return;
      case "null":
        r.elseIf((0, ve._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(o, null);
        return;
      case "array":
        r.elseIf((0, ve._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${a} === null`).assign(o, (0, ve._)`[${a}]`);
    }
  }
}
function yO({ gen: e, parentData: t, parentDataProperty: n }, r) {
  e.if((0, ve._)`${t} !== undefined`, () => e.assign((0, ve._)`${t}[${n}]`, r));
}
function Yo(e, t, n, r = sr.Correct) {
  const a = r === sr.Correct ? ve.operators.EQ : ve.operators.NEQ;
  let s;
  switch (e) {
    case "null":
      return (0, ve._)`${t} ${a} null`;
    case "array":
      s = (0, ve._)`Array.isArray(${t})`;
      break;
    case "object":
      s = (0, ve._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      s = i((0, ve._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      s = i();
      break;
    default:
      return (0, ve._)`typeof ${t} ${a} ${e}`;
  }
  return r === sr.Correct ? s : (0, ve.not)(s);
  function i(o = ve.nil) {
    return (0, ve.and)((0, ve._)`typeof ${t} == "number"`, o, n ? (0, ve._)`isFinite(${t})` : ve.nil);
  }
}
qe.checkDataType = Yo;
function zl(e, t, n, r) {
  if (e.length === 1)
    return Yo(e[0], t, n, r);
  let a;
  const s = (0, Wh.toHash)(e);
  if (s.array && s.object) {
    const i = (0, ve._)`typeof ${t} != "object"`;
    a = s.null ? i : (0, ve._)`!${t} || ${i}`, delete s.null, delete s.array, delete s.object;
  } else
    a = ve.nil;
  s.number && delete s.integer;
  for (const i in s)
    a = (0, ve.and)(a, Yo(i, t, n, r));
  return a;
}
qe.checkDataTypes = zl;
const gO = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, ve._)`{type: ${e}}` : (0, ve._)`{type: ${t}}`
};
function ql(e) {
  const t = bO(e);
  (0, dO.reportError)(t, gO);
}
qe.reportTypeError = ql;
function bO(e) {
  const { gen: t, data: n, schema: r } = e, a = (0, Wh.schemaRefOrVal)(e, r, "type");
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
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.assignDefaults = void 0;
const Hn = ye, _O = re;
function $O(e, t) {
  const { properties: n, items: r } = e.schema;
  if (t === "object" && n)
    for (const a in n)
      jd(e, a, n[a].default);
  else t === "array" && Array.isArray(r) && r.forEach((a, s) => jd(e, s, a.default));
}
si.assignDefaults = $O;
function jd(e, t, n) {
  const { gen: r, compositeRule: a, data: s, opts: i } = e;
  if (n === void 0)
    return;
  const o = (0, Hn._)`${s}${(0, Hn.getProperty)(t)}`;
  if (a) {
    (0, _O.checkStrictMode)(e, `default is ignored for: ${o}`);
    return;
  }
  let c = (0, Hn._)`${o} === undefined`;
  i.useDefaults === "empty" && (c = (0, Hn._)`${c} || ${o} === null || ${o} === ""`), r.if(c, (0, Hn._)`${o} = ${(0, Hn.stringify)(n)}`);
}
var qt = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.validateUnion = _e.validateArray = _e.usePattern = _e.callValidateCode = _e.schemaProperties = _e.allSchemaProperties = _e.noPropertyInData = _e.propertyInData = _e.isOwnProperty = _e.hasPropFunc = _e.reportMissingProp = _e.checkMissingProp = _e.checkReportMissingProp = void 0;
const ke = ye, Vl = re, sn = Vt, wO = re;
function xO(e, t) {
  const { gen: n, data: r, it: a } = e;
  n.if(Hl(n, r, t, a.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, ke._)`${t}` }, !0), e.error();
  });
}
_e.checkReportMissingProp = xO;
function EO({ gen: e, data: t, it: { opts: n } }, r, a) {
  return (0, ke.or)(...r.map((s) => (0, ke.and)(Hl(e, t, s, n.ownProperties), (0, ke._)`${a} = ${s}`)));
}
_e.checkMissingProp = EO;
function SO(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
_e.reportMissingProp = SO;
function Yh(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, ke._)`Object.prototype.hasOwnProperty`
  });
}
_e.hasPropFunc = Yh;
function Bl(e, t, n) {
  return (0, ke._)`${Yh(e)}.call(${t}, ${n})`;
}
_e.isOwnProperty = Bl;
function PO(e, t, n, r) {
  const a = (0, ke._)`${t}${(0, ke.getProperty)(n)} !== undefined`;
  return r ? (0, ke._)`${a} && ${Bl(e, t, n)}` : a;
}
_e.propertyInData = PO;
function Hl(e, t, n, r) {
  const a = (0, ke._)`${t}${(0, ke.getProperty)(n)} === undefined`;
  return r ? (0, ke.or)(a, (0, ke.not)(Bl(e, t, n))) : a;
}
_e.noPropertyInData = Hl;
function Zh(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
_e.allSchemaProperties = Zh;
function RO(e, t) {
  return Zh(t).filter((n) => !(0, Vl.alwaysValidSchema)(e, t[n]));
}
_e.schemaProperties = RO;
function OO({ schemaCode: e, data: t, it: { gen: n, topSchemaRef: r, schemaPath: a, errorPath: s }, it: i }, o, c, u) {
  const l = u ? (0, ke._)`${e}, ${t}, ${r}${a}` : t, p = [
    [sn.default.instancePath, (0, ke.strConcat)(sn.default.instancePath, s)],
    [sn.default.parentData, i.parentData],
    [sn.default.parentDataProperty, i.parentDataProperty],
    [sn.default.rootData, sn.default.rootData]
  ];
  i.opts.dynamicRef && p.push([sn.default.dynamicAnchors, sn.default.dynamicAnchors]);
  const m = (0, ke._)`${l}, ${n.object(...p)}`;
  return c !== ke.nil ? (0, ke._)`${o}.call(${c}, ${m})` : (0, ke._)`${o}(${m})`;
}
_e.callValidateCode = OO;
const AO = (0, ke._)`new RegExp`;
function TO({ gen: e, it: { opts: t } }, n) {
  const r = t.unicodeRegExp ? "u" : "", { regExp: a } = t.code, s = a(n, r);
  return e.scopeValue("pattern", {
    key: s.toString(),
    ref: s,
    code: (0, ke._)`${a.code === "new RegExp" ? AO : (0, wO.useFunc)(e, a)}(${n}, ${r})`
  });
}
_e.usePattern = TO;
function jO(e) {
  const { gen: t, data: n, keyword: r, it: a } = e, s = t.name("valid");
  if (a.allErrors) {
    const o = t.let("valid", !0);
    return i(() => t.assign(o, !1)), o;
  }
  return t.var(s, !0), i(() => t.break()), s;
  function i(o) {
    const c = t.const("len", (0, ke._)`${n}.length`);
    t.forRange("i", 0, c, (u) => {
      e.subschema({
        keyword: r,
        dataProp: u,
        dataPropType: Vl.Type.Num
      }, s), t.if((0, ke.not)(s), o);
    });
  }
}
_e.validateArray = jO;
function kO(e) {
  const { gen: t, schema: n, keyword: r, it: a } = e;
  if (!Array.isArray(n))
    throw new Error("ajv implementation error");
  if (n.some((c) => (0, Vl.alwaysValidSchema)(a, c)) && !a.opts.unevaluated)
    return;
  const i = t.let("valid", !1), o = t.name("_valid");
  t.block(() => n.forEach((c, u) => {
    const l = e.subschema({
      keyword: r,
      schemaProp: u,
      compositeRule: !0
    }, o);
    t.assign(i, (0, ke._)`${i} || ${o}`), e.mergeValidEvaluated(l, o) || t.if((0, ke.not)(i));
  })), e.result(i, () => e.reset(), () => e.error(!0));
}
_e.validateUnion = kO;
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.validateKeywordUsage = qt.validSchemaType = qt.funcKeywordCode = qt.macroKeywordCode = void 0;
const lt = ye, wn = Vt, NO = _e, IO = $a;
function CO(e, t) {
  const { gen: n, keyword: r, schema: a, parentSchema: s, it: i } = e, o = t.macro.call(i.self, a, s, i), c = Qh(n, r, o);
  i.opts.validateSchema !== !1 && i.self.validateSchema(o, !0);
  const u = n.name("valid");
  e.subschema({
    schema: o,
    schemaPath: lt.nil,
    errSchemaPath: `${i.errSchemaPath}/${r}`,
    topSchemaRef: c,
    compositeRule: !0
  }, u), e.pass(u, () => e.error(!0));
}
qt.macroKeywordCode = CO;
function DO(e, t) {
  var n;
  const { gen: r, keyword: a, schema: s, parentSchema: i, $data: o, it: c } = e;
  LO(c, t);
  const u = !o && t.compile ? t.compile.call(c.self, s, i, c) : t.validate, l = Qh(r, a, u), p = r.let("valid");
  e.block$data(p, m), e.ok((n = t.valid) !== null && n !== void 0 ? n : p);
  function m() {
    if (t.errors === !1)
      v(), t.modifying && kd(e), g(() => e.error());
    else {
      const h = t.async ? f() : y();
      t.modifying && kd(e), g(() => FO(e, h));
    }
  }
  function f() {
    const h = r.let("ruleErrs", null);
    return r.try(() => v((0, lt._)`await `), (_) => r.assign(p, !1).if((0, lt._)`${_} instanceof ${c.ValidationError}`, () => r.assign(h, (0, lt._)`${_}.errors`), () => r.throw(_))), h;
  }
  function y() {
    const h = (0, lt._)`${l}.errors`;
    return r.assign(h, null), v(lt.nil), h;
  }
  function v(h = t.async ? (0, lt._)`await ` : lt.nil) {
    const _ = c.opts.passContext ? wn.default.this : wn.default.self, x = !("compile" in t && !o || t.schema === !1);
    r.assign(p, (0, lt._)`${h}${(0, NO.callValidateCode)(e, l, _, x)}`, t.modifying);
  }
  function g(h) {
    var _;
    r.if((0, lt.not)((_ = t.valid) !== null && _ !== void 0 ? _ : p), h);
  }
}
qt.funcKeywordCode = DO;
function kd(e) {
  const { gen: t, data: n, it: r } = e;
  t.if(r.parentData, () => t.assign(n, (0, lt._)`${r.parentData}[${r.parentDataProperty}]`));
}
function FO(e, t) {
  const { gen: n } = e;
  n.if((0, lt._)`Array.isArray(${t})`, () => {
    n.assign(wn.default.vErrors, (0, lt._)`${wn.default.vErrors} === null ? ${t} : ${wn.default.vErrors}.concat(${t})`).assign(wn.default.errors, (0, lt._)`${wn.default.vErrors}.length`), (0, IO.extendErrors)(e);
  }, () => e.error());
}
function LO({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function Qh(e, t, n) {
  if (n === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof n == "function" ? { ref: n } : { ref: n, code: (0, lt.stringify)(n) });
}
function MO(e, t, n = !1) {
  return !t.length || t.some((r) => r === "array" ? Array.isArray(e) : r === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == r || n && typeof e > "u");
}
qt.validSchemaType = MO;
function UO({ schema: e, opts: t, self: n, errSchemaPath: r }, a, s) {
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
qt.validateKeywordUsage = UO;
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.extendSubschemaMode = hn.extendSubschemaData = hn.getSubschema = void 0;
const zt = ye, ev = re;
function zO(e, { keyword: t, schemaProp: n, schema: r, schemaPath: a, errSchemaPath: s, topSchemaRef: i }) {
  if (t !== void 0 && r !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const o = e.schema[t];
    return n === void 0 ? {
      schema: o,
      schemaPath: (0, zt._)`${e.schemaPath}${(0, zt.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: o[n],
      schemaPath: (0, zt._)`${e.schemaPath}${(0, zt.getProperty)(t)}${(0, zt.getProperty)(n)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, ev.escapeFragment)(n)}`
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
hn.getSubschema = zO;
function qO(e, t, { dataProp: n, dataPropType: r, data: a, dataTypes: s, propertyName: i }) {
  if (a !== void 0 && n !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: o } = t;
  if (n !== void 0) {
    const { errorPath: u, dataPathArr: l, opts: p } = t, m = o.let("data", (0, zt._)`${t.data}${(0, zt.getProperty)(n)}`, !0);
    c(m), e.errorPath = (0, zt.str)`${u}${(0, ev.getErrorPath)(n, r, p.jsPropertySyntax)}`, e.parentDataProperty = (0, zt._)`${n}`, e.dataPathArr = [...l, e.parentDataProperty];
  }
  if (a !== void 0) {
    const u = a instanceof zt.Name ? a : o.let("data", a, !0);
    c(u), i !== void 0 && (e.propertyName = i);
  }
  s && (e.dataTypes = s);
  function c(u) {
    e.data = u, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, u];
  }
}
hn.extendSubschemaData = qO;
function VO(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: a, allErrors: s }) {
  r !== void 0 && (e.compositeRule = r), a !== void 0 && (e.createErrors = a), s !== void 0 && (e.allErrors = s), e.jtdDiscriminator = t, e.jtdMetadata = n;
}
hn.extendSubschemaMode = VO;
var Ze = {}, tv = { exports: {} }, dn = tv.exports = function(e, t, n) {
  typeof t == "function" && (n = t, t = {}), n = t.cb || n;
  var r = typeof n == "function" ? n : n.pre || function() {
  }, a = n.post || function() {
  };
  ps(t, r, a, e, "", e);
};
dn.keywords = {
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
dn.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
dn.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
dn.skipKeywords = {
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
function ps(e, t, n, r, a, s, i, o, c, u) {
  if (r && typeof r == "object" && !Array.isArray(r)) {
    t(r, a, s, i, o, c, u);
    for (var l in r) {
      var p = r[l];
      if (Array.isArray(p)) {
        if (l in dn.arrayKeywords)
          for (var m = 0; m < p.length; m++)
            ps(e, t, n, p[m], a + "/" + l + "/" + m, s, a, l, r, m);
      } else if (l in dn.propsKeywords) {
        if (p && typeof p == "object")
          for (var f in p)
            ps(e, t, n, p[f], a + "/" + l + "/" + BO(f), s, a, l, r, f);
      } else (l in dn.keywords || e.allKeys && !(l in dn.skipKeywords)) && ps(e, t, n, p, a + "/" + l, s, a, l, r);
    }
    n(r, a, s, i, o, c, u);
  }
}
function BO(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var HO = tv.exports;
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.getSchemaRefs = Ze.resolveUrl = Ze.normalizeId = Ze._getFullPath = Ze.getFullPath = Ze.inlineRef = void 0;
const GO = re, KO = Ys, WO = HO, JO = /* @__PURE__ */ new Set([
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
function XO(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Zo(e) : t ? nv(e) <= t : !1;
}
Ze.inlineRef = XO;
const YO = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Zo(e) {
  for (const t in e) {
    if (YO.has(t))
      return !0;
    const n = e[t];
    if (Array.isArray(n) && n.some(Zo) || typeof n == "object" && Zo(n))
      return !0;
  }
  return !1;
}
function nv(e) {
  let t = 0;
  for (const n in e) {
    if (n === "$ref")
      return 1 / 0;
    if (t++, !JO.has(n) && (typeof e[n] == "object" && (0, GO.eachItem)(e[n], (r) => t += nv(r)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function rv(e, t = "", n) {
  n !== !1 && (t = ir(t));
  const r = e.parse(t);
  return av(e, r);
}
Ze.getFullPath = rv;
function av(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
Ze._getFullPath = av;
const ZO = /#\/?$/;
function ir(e) {
  return e ? e.replace(ZO, "") : "";
}
Ze.normalizeId = ir;
function QO(e, t, n) {
  return n = ir(n), e.resolve(t, n);
}
Ze.resolveUrl = QO;
const eA = /^[a-z_][-a-z0-9._]*$/i;
function tA(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: n, uriResolver: r } = this.opts, a = ir(e[n] || t), s = { "": a }, i = rv(r, a, !1), o = {}, c = /* @__PURE__ */ new Set();
  return WO(e, { allKeys: !0 }, (p, m, f, y) => {
    if (y === void 0)
      return;
    const v = i + m;
    let g = s[y];
    typeof p[n] == "string" && (g = h.call(this, p[n])), _.call(this, p.$anchor), _.call(this, p.$dynamicAnchor), s[m] = g;
    function h(x) {
      const O = this.opts.uriResolver.resolve;
      if (x = ir(g ? O(g, x) : x), c.has(x))
        throw l(x);
      c.add(x);
      let j = this.refs[x];
      return typeof j == "string" && (j = this.refs[j]), typeof j == "object" ? u(p, j.schema, x) : x !== ir(v) && (x[0] === "#" ? (u(p, o[x], x), o[x] = p) : this.refs[x] = v), x;
    }
    function _(x) {
      if (typeof x == "string") {
        if (!eA.test(x))
          throw new Error(`invalid anchor "${x}"`);
        h.call(this, `#${x}`);
      }
    }
  }), o;
  function u(p, m, f) {
    if (m !== void 0 && !KO(p, m))
      throw l(f);
  }
  function l(p) {
    return new Error(`reference "${p}" resolves to more than one schema`);
  }
}
Ze.getSchemaRefs = tA;
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.getData = Nt.KeywordCxt = Nt.validateFunctionCode = void 0;
const sv = mr, Nd = qe, Gl = Xt, Ns = qe, nA = si, Yr = qt, ro = hn, ie = ye, pe = Vt, rA = Ze, Yt = re, Mr = $a;
function aA(e) {
  if (cv(e) && (lv(e), ov(e))) {
    oA(e);
    return;
  }
  iv(e, () => (0, sv.topBoolOrEmptySchema)(e));
}
Nt.validateFunctionCode = aA;
function iv({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: a }, s) {
  a.code.es5 ? e.func(t, (0, ie._)`${pe.default.data}, ${pe.default.valCxt}`, r.$async, () => {
    e.code((0, ie._)`"use strict"; ${Id(n, a)}`), iA(e, a), e.code(s);
  }) : e.func(t, (0, ie._)`${pe.default.data}, ${sA(a)}`, r.$async, () => e.code(Id(n, a)).code(s));
}
function sA(e) {
  return (0, ie._)`{${pe.default.instancePath}="", ${pe.default.parentData}, ${pe.default.parentDataProperty}, ${pe.default.rootData}=${pe.default.data}${e.dynamicRef ? (0, ie._)`, ${pe.default.dynamicAnchors}={}` : ie.nil}}={}`;
}
function iA(e, t) {
  e.if(pe.default.valCxt, () => {
    e.var(pe.default.instancePath, (0, ie._)`${pe.default.valCxt}.${pe.default.instancePath}`), e.var(pe.default.parentData, (0, ie._)`${pe.default.valCxt}.${pe.default.parentData}`), e.var(pe.default.parentDataProperty, (0, ie._)`${pe.default.valCxt}.${pe.default.parentDataProperty}`), e.var(pe.default.rootData, (0, ie._)`${pe.default.valCxt}.${pe.default.rootData}`), t.dynamicRef && e.var(pe.default.dynamicAnchors, (0, ie._)`${pe.default.valCxt}.${pe.default.dynamicAnchors}`);
  }, () => {
    e.var(pe.default.instancePath, (0, ie._)`""`), e.var(pe.default.parentData, (0, ie._)`undefined`), e.var(pe.default.parentDataProperty, (0, ie._)`undefined`), e.var(pe.default.rootData, pe.default.data), t.dynamicRef && e.var(pe.default.dynamicAnchors, (0, ie._)`{}`);
  });
}
function oA(e) {
  const { schema: t, opts: n, gen: r } = e;
  iv(e, () => {
    n.$comment && t.$comment && pv(e), dA(e), r.let(pe.default.vErrors, null), r.let(pe.default.errors, 0), n.unevaluated && cA(e), uv(e), hA(e);
  });
}
function cA(e) {
  const { gen: t, validateName: n } = e;
  e.evaluated = t.const("evaluated", (0, ie._)`${n}.evaluated`), t.if((0, ie._)`${e.evaluated}.dynamicProps`, () => t.assign((0, ie._)`${e.evaluated}.props`, (0, ie._)`undefined`)), t.if((0, ie._)`${e.evaluated}.dynamicItems`, () => t.assign((0, ie._)`${e.evaluated}.items`, (0, ie._)`undefined`));
}
function Id(e, t) {
  const n = typeof e == "object" && e[t.schemaId];
  return n && (t.code.source || t.code.process) ? (0, ie._)`/*# sourceURL=${n} */` : ie.nil;
}
function lA(e, t) {
  if (cv(e) && (lv(e), ov(e))) {
    uA(e, t);
    return;
  }
  (0, sv.boolOrEmptySchema)(e, t);
}
function ov({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const n in e)
    if (t.RULES.all[n])
      return !0;
  return !1;
}
function cv(e) {
  return typeof e.schema != "boolean";
}
function uA(e, t) {
  const { schema: n, gen: r, opts: a } = e;
  a.$comment && n.$comment && pv(e), fA(e), mA(e);
  const s = r.const("_errs", pe.default.errors);
  uv(e, s), r.var(t, (0, ie._)`${s} === ${pe.default.errors}`);
}
function lv(e) {
  (0, Yt.checkUnknownRules)(e), pA(e);
}
function uv(e, t) {
  if (e.opts.jtd)
    return Cd(e, [], !1, t);
  const n = (0, Nd.getSchemaTypes)(e.schema), r = (0, Nd.coerceAndCheckDataType)(e, n);
  Cd(e, n, !r, t);
}
function pA(e) {
  const { schema: t, errSchemaPath: n, opts: r, self: a } = e;
  t.$ref && r.ignoreKeywordsWithRef && (0, Yt.schemaHasRulesButRef)(t, a.RULES) && a.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
}
function dA(e) {
  const { schema: t, opts: n } = e;
  t.default !== void 0 && n.useDefaults && n.strictSchema && (0, Yt.checkStrictMode)(e, "default is ignored in the schema root");
}
function fA(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, rA.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function mA(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function pv({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: a }) {
  const s = n.$comment;
  if (a.$comment === !0)
    e.code((0, ie._)`${pe.default.self}.logger.log(${s})`);
  else if (typeof a.$comment == "function") {
    const i = (0, ie.str)`${r}/$comment`, o = e.scopeValue("root", { ref: t.root });
    e.code((0, ie._)`${pe.default.self}.opts.$comment(${s}, ${i}, ${o}.schema)`);
  }
}
function hA(e) {
  const { gen: t, schemaEnv: n, validateName: r, ValidationError: a, opts: s } = e;
  n.$async ? t.if((0, ie._)`${pe.default.errors} === 0`, () => t.return(pe.default.data), () => t.throw((0, ie._)`new ${a}(${pe.default.vErrors})`)) : (t.assign((0, ie._)`${r}.errors`, pe.default.vErrors), s.unevaluated && vA(e), t.return((0, ie._)`${pe.default.errors} === 0`));
}
function vA({ gen: e, evaluated: t, props: n, items: r }) {
  n instanceof ie.Name && e.assign((0, ie._)`${t}.props`, n), r instanceof ie.Name && e.assign((0, ie._)`${t}.items`, r);
}
function Cd(e, t, n, r) {
  const { gen: a, schema: s, data: i, allErrors: o, opts: c, self: u } = e, { RULES: l } = u;
  if (s.$ref && (c.ignoreKeywordsWithRef || !(0, Yt.schemaHasRulesButRef)(s, l))) {
    a.block(() => mv(e, "$ref", l.all.$ref.definition));
    return;
  }
  c.jtd || yA(e, t), a.block(() => {
    for (const m of l.rules)
      p(m);
    p(l.post);
  });
  function p(m) {
    (0, Gl.shouldUseGroup)(s, m) && (m.type ? (a.if((0, Ns.checkDataType)(m.type, i, c.strictNumbers)), Dd(e, m), t.length === 1 && t[0] === m.type && n && (a.else(), (0, Ns.reportTypeError)(e)), a.endIf()) : Dd(e, m), o || a.if((0, ie._)`${pe.default.errors} === ${r || 0}`));
  }
}
function Dd(e, t) {
  const { gen: n, schema: r, opts: { useDefaults: a } } = e;
  a && (0, nA.assignDefaults)(e, t.type), n.block(() => {
    for (const s of t.rules)
      (0, Gl.shouldUseRule)(r, s) && mv(e, s.keyword, s.definition, t.type);
  });
}
function yA(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (gA(e, t), e.opts.allowUnionTypes || bA(e, t), _A(e, e.dataTypes));
}
function gA(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((n) => {
      dv(e.dataTypes, n) || Kl(e, `type "${n}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), wA(e, t);
  }
}
function bA(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && Kl(e, "use allowUnionTypes to allow union type keyword");
}
function _A(e, t) {
  const n = e.self.RULES.all;
  for (const r in n) {
    const a = n[r];
    if (typeof a == "object" && (0, Gl.shouldUseRule)(e.schema, a)) {
      const { type: s } = a.definition;
      s.length && !s.some((i) => $A(t, i)) && Kl(e, `missing type "${s.join(",")}" for keyword "${r}"`);
    }
  }
}
function $A(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function dv(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function wA(e, t) {
  const n = [];
  for (const r of e.dataTypes)
    dv(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
  e.dataTypes = n;
}
function Kl(e, t) {
  const n = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${n}" (strictTypes)`, (0, Yt.checkStrictMode)(e, t, e.opts.strictTypes);
}
class fv {
  constructor(t, n, r) {
    if ((0, Yr.validateKeywordUsage)(t, n, r), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = r, this.data = t.data, this.schema = t.schema[r], this.$data = n.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Yt.schemaRefOrVal)(t, this.schema, r, this.$data), this.schemaType = n.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = n, this.$data)
      this.schemaCode = t.gen.const("vSchema", hv(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Yr.validSchemaType)(this.schema, n.schemaType, n.allowUndefined))
      throw new Error(`${r} value must be ${JSON.stringify(n.schemaType)}`);
    ("code" in n ? n.trackErrors : n.errors !== !1) && (this.errsCount = t.gen.const("_errs", pe.default.errors));
  }
  result(t, n, r) {
    this.failResult((0, ie.not)(t), n, r);
  }
  failResult(t, n, r) {
    this.gen.if(t), r ? r() : this.error(), n ? (this.gen.else(), n(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, n) {
    this.failResult((0, ie.not)(t), void 0, n);
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
    this.fail((0, ie._)`${n} !== undefined && (${(0, ie.or)(this.invalid$data(), t)})`);
  }
  error(t, n, r) {
    if (n) {
      this.setParams(n), this._error(t, r), this.setParams({});
      return;
    }
    this._error(t, r);
  }
  _error(t, n) {
    (t ? Mr.reportExtraError : Mr.reportError)(this, this.def.error, n);
  }
  $dataError() {
    (0, Mr.reportError)(this, this.def.$dataError || Mr.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Mr.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, n) {
    n ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, n, r = ie.nil) {
    this.gen.block(() => {
      this.check$data(t, r), n();
    });
  }
  check$data(t = ie.nil, n = ie.nil) {
    if (!this.$data)
      return;
    const { gen: r, schemaCode: a, schemaType: s, def: i } = this;
    r.if((0, ie.or)((0, ie._)`${a} === undefined`, n)), t !== ie.nil && r.assign(t, !0), (s.length || i.validateSchema) && (r.elseIf(this.invalid$data()), this.$dataError(), t !== ie.nil && r.assign(t, !1)), r.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: n, schemaType: r, def: a, it: s } = this;
    return (0, ie.or)(i(), o());
    function i() {
      if (r.length) {
        if (!(n instanceof ie.Name))
          throw new Error("ajv implementation error");
        const c = Array.isArray(r) ? r : [r];
        return (0, ie._)`${(0, Ns.checkDataTypes)(c, n, s.opts.strictNumbers, Ns.DataType.Wrong)}`;
      }
      return ie.nil;
    }
    function o() {
      if (a.validateSchema) {
        const c = t.scopeValue("validate$data", { ref: a.validateSchema });
        return (0, ie._)`!${c}(${n})`;
      }
      return ie.nil;
    }
  }
  subschema(t, n) {
    const r = (0, ro.getSubschema)(this.it, t);
    (0, ro.extendSubschemaData)(r, this.it, t), (0, ro.extendSubschemaMode)(r, t);
    const a = { ...this.it, ...r, items: void 0, props: void 0 };
    return lA(a, n), a;
  }
  mergeEvaluated(t, n) {
    const { it: r, gen: a } = this;
    r.opts.unevaluated && (r.props !== !0 && t.props !== void 0 && (r.props = Yt.mergeEvaluated.props(a, t.props, r.props, n)), r.items !== !0 && t.items !== void 0 && (r.items = Yt.mergeEvaluated.items(a, t.items, r.items, n)));
  }
  mergeValidEvaluated(t, n) {
    const { it: r, gen: a } = this;
    if (r.opts.unevaluated && (r.props !== !0 || r.items !== !0))
      return a.if(n, () => this.mergeEvaluated(t, ie.Name)), !0;
  }
}
Nt.KeywordCxt = fv;
function mv(e, t, n, r) {
  const a = new fv(e, n, t);
  "code" in n ? n.code(a, r) : a.$data && n.validate ? (0, Yr.funcKeywordCode)(a, n) : "macro" in n ? (0, Yr.macroKeywordCode)(a, n) : (n.compile || n.validate) && (0, Yr.funcKeywordCode)(a, n);
}
const xA = /^\/(?:[^~]|~0|~1)*$/, EA = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function hv(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
  let a, s;
  if (e === "")
    return pe.default.rootData;
  if (e[0] === "/") {
    if (!xA.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    a = e, s = pe.default.rootData;
  } else {
    const u = EA.exec(e);
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
    u && (s = (0, ie._)`${s}${(0, ie.getProperty)((0, Yt.unescapeJsonPointer)(u))}`, i = (0, ie._)`${i} && ${s}`);
  return i;
  function c(u, l) {
    return `Cannot access ${u} ${l} levels up, current level is ${t}`;
  }
}
Nt.getData = hv;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
class SA extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
wa.default = SA;
var Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
const ao = Ze;
class PA extends Error {
  constructor(t, n, r, a) {
    super(a || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, ao.resolveUrl)(t, n, r), this.missingSchema = (0, ao.normalizeId)((0, ao.getFullPath)(t, this.missingRef));
  }
}
Pr.default = PA;
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.resolveSchema = ft.getCompilingSchema = ft.resolveRef = ft.compileSchema = ft.SchemaEnv = void 0;
const Pt = ye, RA = wa, gn = Vt, kt = Ze, Fd = re, OA = Nt;
class ii {
  constructor(t) {
    var n;
    this.refs = {}, this.dynamicAnchors = {};
    let r;
    typeof t.schema == "object" && (r = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (n = t.baseId) !== null && n !== void 0 ? n : (0, kt.normalizeId)(r?.[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = r?.$async, this.refs = {};
  }
}
ft.SchemaEnv = ii;
function Wl(e) {
  const t = vv.call(this, e);
  if (t)
    return t;
  const n = (0, kt.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: r, lines: a } = this.opts.code, { ownProperties: s } = this.opts, i = new Pt.CodeGen(this.scope, { es5: r, lines: a, ownProperties: s });
  let o;
  e.$async && (o = i.scopeValue("Error", {
    ref: RA.default,
    code: (0, Pt._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const c = i.scopeName("validate");
  e.validateName = c;
  const u = {
    gen: i,
    allErrors: this.opts.allErrors,
    data: gn.default.data,
    parentData: gn.default.parentData,
    parentDataProperty: gn.default.parentDataProperty,
    dataNames: [gn.default.data],
    dataPathArr: [Pt.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: i.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Pt.stringify)(e.schema) } : { ref: e.schema }),
    validateName: c,
    ValidationError: o,
    schema: e.schema,
    schemaEnv: e,
    rootId: n,
    baseId: e.baseId || n,
    schemaPath: Pt.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Pt._)`""`,
    opts: this.opts,
    self: this
  };
  let l;
  try {
    this._compilations.add(e), (0, OA.validateFunctionCode)(u), i.optimize(this.opts.code.optimize);
    const p = i.toString();
    l = `${i.scopeRefs(gn.default.scope)}return ${p}`, this.opts.code.process && (l = this.opts.code.process(l, e));
    const f = new Function(`${gn.default.self}`, `${gn.default.scope}`, l)(this, this.scope.get());
    if (this.scope.value(c, { ref: f }), f.errors = null, f.schema = e.schema, f.schemaEnv = e, e.$async && (f.$async = !0), this.opts.code.source === !0 && (f.source = { validateName: c, validateCode: p, scopeValues: i._values }), this.opts.unevaluated) {
      const { props: y, items: v } = u;
      f.evaluated = {
        props: y instanceof Pt.Name ? void 0 : y,
        items: v instanceof Pt.Name ? void 0 : v,
        dynamicProps: y instanceof Pt.Name,
        dynamicItems: v instanceof Pt.Name
      }, f.source && (f.source.evaluated = (0, Pt.stringify)(f.evaluated));
    }
    return e.validate = f, e;
  } catch (p) {
    throw delete e.validate, delete e.validateName, l && this.logger.error("Error compiling schema, function code:", l), p;
  } finally {
    this._compilations.delete(e);
  }
}
ft.compileSchema = Wl;
function AA(e, t, n) {
  var r;
  n = (0, kt.resolveUrl)(this.opts.uriResolver, t, n);
  const a = e.refs[n];
  if (a)
    return a;
  let s = kA.call(this, e, n);
  if (s === void 0) {
    const i = (r = e.localRefs) === null || r === void 0 ? void 0 : r[n], { schemaId: o } = this.opts;
    i && (s = new ii({ schema: i, schemaId: o, root: e, baseId: t }));
  }
  if (s !== void 0)
    return e.refs[n] = TA.call(this, s);
}
ft.resolveRef = AA;
function TA(e) {
  return (0, kt.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : Wl.call(this, e);
}
function vv(e) {
  for (const t of this._compilations)
    if (jA(t, e))
      return t;
}
ft.getCompilingSchema = vv;
function jA(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function kA(e, t) {
  let n;
  for (; typeof (n = this.refs[t]) == "string"; )
    t = n;
  return n || this.schemas[t] || oi.call(this, e, t);
}
function oi(e, t) {
  const n = this.opts.uriResolver.parse(t), r = (0, kt._getFullPath)(this.opts.uriResolver, n);
  let a = (0, kt.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && r === a)
    return so.call(this, n, e);
  const s = (0, kt.normalizeId)(r), i = this.refs[s] || this.schemas[s];
  if (typeof i == "string") {
    const o = oi.call(this, e, i);
    return typeof o?.schema != "object" ? void 0 : so.call(this, n, o);
  }
  if (typeof i?.schema == "object") {
    if (i.validate || Wl.call(this, i), s === (0, kt.normalizeId)(t)) {
      const { schema: o } = i, { schemaId: c } = this.opts, u = o[c];
      return u && (a = (0, kt.resolveUrl)(this.opts.uriResolver, a, u)), new ii({ schema: o, schemaId: c, root: e, baseId: a });
    }
    return so.call(this, n, i);
  }
}
ft.resolveSchema = oi;
const NA = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function so(e, { baseId: t, schema: n, root: r }) {
  var a;
  if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/")
    return;
  for (const o of e.fragment.slice(1).split("/")) {
    if (typeof n == "boolean")
      return;
    const c = n[(0, Fd.unescapeFragment)(o)];
    if (c === void 0)
      return;
    n = c;
    const u = typeof n == "object" && n[this.opts.schemaId];
    !NA.has(o) && u && (t = (0, kt.resolveUrl)(this.opts.uriResolver, t, u));
  }
  let s;
  if (typeof n != "boolean" && n.$ref && !(0, Fd.schemaHasRulesButRef)(n, this.RULES)) {
    const o = (0, kt.resolveUrl)(this.opts.uriResolver, t, n.$ref);
    s = oi.call(this, r, o);
  }
  const { schemaId: i } = this.opts;
  if (s = s || new ii({ schema: n, schemaId: i, root: r, baseId: t }), s.schema !== s.root.schema)
    return s;
}
const IA = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", CA = "Meta-schema for $data reference (JSON AnySchema extension proposal)", DA = "object", FA = [
  "$data"
], LA = {
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
}, MA = !1, UA = {
  $id: IA,
  description: CA,
  type: DA,
  required: FA,
  properties: LA,
  additionalProperties: MA
};
var Jl = {};
Object.defineProperty(Jl, "__esModule", { value: !0 });
const yv = Ph;
yv.code = 'require("ajv/dist/runtime/uri").default';
Jl.default = yv;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Nt;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var n = ye;
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
  const r = wa, a = Pr, s = Ln, i = ft, o = ye, c = Ze, u = qe, l = re, p = UA, m = Jl, f = (R, $) => new RegExp(R, $);
  f.code = "new RegExp";
  const y = ["removeAdditional", "useDefaults", "coerceTypes"], v = /* @__PURE__ */ new Set([
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
  ]), g = {
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
  }, h = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, _ = 200;
  function x(R) {
    var $, S, w, d, b, E, I, F, te, ne, A, T, L, V, Y, H, ge, G, B, oe, de, le, we, Ne, Pe;
    const Be = R.strict, yt = ($ = R.code) === null || $ === void 0 ? void 0 : $.optimize, Ie = yt === !0 || yt === void 0 ? 1 : yt || 0, Qt = (w = (S = R.code) === null || S === void 0 ? void 0 : S.regExp) !== null && w !== void 0 ? w : f, yi = (d = R.uriResolver) !== null && d !== void 0 ? d : m.default;
    return {
      strictSchema: (E = (b = R.strictSchema) !== null && b !== void 0 ? b : Be) !== null && E !== void 0 ? E : !0,
      strictNumbers: (F = (I = R.strictNumbers) !== null && I !== void 0 ? I : Be) !== null && F !== void 0 ? F : !0,
      strictTypes: (ne = (te = R.strictTypes) !== null && te !== void 0 ? te : Be) !== null && ne !== void 0 ? ne : "log",
      strictTuples: (T = (A = R.strictTuples) !== null && A !== void 0 ? A : Be) !== null && T !== void 0 ? T : "log",
      strictRequired: (V = (L = R.strictRequired) !== null && L !== void 0 ? L : Be) !== null && V !== void 0 ? V : !1,
      code: R.code ? { ...R.code, optimize: Ie, regExp: Qt } : { optimize: Ie, regExp: Qt },
      loopRequired: (Y = R.loopRequired) !== null && Y !== void 0 ? Y : _,
      loopEnum: (H = R.loopEnum) !== null && H !== void 0 ? H : _,
      meta: (ge = R.meta) !== null && ge !== void 0 ? ge : !0,
      messages: (G = R.messages) !== null && G !== void 0 ? G : !0,
      inlineRefs: (B = R.inlineRefs) !== null && B !== void 0 ? B : !0,
      schemaId: (oe = R.schemaId) !== null && oe !== void 0 ? oe : "$id",
      addUsedSchema: (de = R.addUsedSchema) !== null && de !== void 0 ? de : !0,
      validateSchema: (le = R.validateSchema) !== null && le !== void 0 ? le : !0,
      validateFormats: (we = R.validateFormats) !== null && we !== void 0 ? we : !0,
      unicodeRegExp: (Ne = R.unicodeRegExp) !== null && Ne !== void 0 ? Ne : !0,
      int32range: (Pe = R.int32range) !== null && Pe !== void 0 ? Pe : !0,
      uriResolver: yi
    };
  }
  class O {
    constructor($ = {}) {
      this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), $ = this.opts = { ...$, ...x($) };
      const { es5: S, lines: w } = this.opts.code;
      this.scope = new o.ValueScope({ scope: {}, prefixes: v, es5: S, lines: w }), this.logger = z($.logger);
      const d = $.validateFormats;
      $.validateFormats = !1, this.RULES = (0, s.getRules)(), j.call(this, g, $, "NOT SUPPORTED"), j.call(this, h, $, "DEPRECATED", "warn"), this._metaOpts = N.call(this), $.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), $.keywords && ee.call(this, $.keywords), typeof $.meta == "object" && this.addMetaSchema($.meta), J.call(this), $.validateFormats = d;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: $, meta: S, schemaId: w } = this.opts;
      let d = p;
      w === "id" && (d = { ...p }, d.id = d.$id, delete d.$id), S && $ && this.addMetaSchema(d, d[w], !1);
    }
    defaultMeta() {
      const { meta: $, schemaId: S } = this.opts;
      return this.opts.defaultMeta = typeof $ == "object" ? $[S] || $ : void 0;
    }
    validate($, S) {
      let w;
      if (typeof $ == "string") {
        if (w = this.getSchema($), !w)
          throw new Error(`no schema with key or ref "${$}"`);
      } else
        w = this.compile($);
      const d = w(S);
      return "$async" in w || (this.errors = w.errors), d;
    }
    compile($, S) {
      const w = this._addSchema($, S);
      return w.validate || this._compileSchemaEnv(w);
    }
    compileAsync($, S) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: w } = this.opts;
      return d.call(this, $, S);
      async function d(ne, A) {
        await b.call(this, ne.$schema);
        const T = this._addSchema(ne, A);
        return T.validate || E.call(this, T);
      }
      async function b(ne) {
        ne && !this.getSchema(ne) && await d.call(this, { $ref: ne }, !0);
      }
      async function E(ne) {
        try {
          return this._compileSchemaEnv(ne);
        } catch (A) {
          if (!(A instanceof a.default))
            throw A;
          return I.call(this, A), await F.call(this, A.missingSchema), E.call(this, ne);
        }
      }
      function I({ missingSchema: ne, missingRef: A }) {
        if (this.refs[ne])
          throw new Error(`AnySchema ${ne} is loaded but ${A} cannot be resolved`);
      }
      async function F(ne) {
        const A = await te.call(this, ne);
        this.refs[ne] || await b.call(this, A.$schema), this.refs[ne] || this.addSchema(A, ne, S);
      }
      async function te(ne) {
        const A = this._loading[ne];
        if (A)
          return A;
        try {
          return await (this._loading[ne] = w(ne));
        } finally {
          delete this._loading[ne];
        }
      }
    }
    // Adds schema to the instance
    addSchema($, S, w, d = this.opts.validateSchema) {
      if (Array.isArray($)) {
        for (const E of $)
          this.addSchema(E, void 0, w, d);
        return this;
      }
      let b;
      if (typeof $ == "object") {
        const { schemaId: E } = this.opts;
        if (b = $[E], b !== void 0 && typeof b != "string")
          throw new Error(`schema ${E} must be string`);
      }
      return S = (0, c.normalizeId)(S || b), this._checkUnique(S), this.schemas[S] = this._addSchema($, w, S, d, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema($, S, w = this.opts.validateSchema) {
      return this.addSchema($, S, !0, w), this;
    }
    //  Validate schema against its meta-schema
    validateSchema($, S) {
      if (typeof $ == "boolean")
        return !0;
      let w;
      if (w = $.$schema, w !== void 0 && typeof w != "string")
        throw new Error("$schema must be a string");
      if (w = w || this.opts.defaultMeta || this.defaultMeta(), !w)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const d = this.validate(w, $);
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
    getSchema($) {
      let S;
      for (; typeof (S = q.call(this, $)) == "string"; )
        $ = S;
      if (S === void 0) {
        const { schemaId: w } = this.opts, d = new i.SchemaEnv({ schema: {}, schemaId: w });
        if (S = i.resolveSchema.call(this, d, $), !S)
          return;
        this.refs[$] = S;
      }
      return S.validate || this._compileSchemaEnv(S);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema($) {
      if ($ instanceof RegExp)
        return this._removeAllSchemas(this.schemas, $), this._removeAllSchemas(this.refs, $), this;
      switch (typeof $) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const S = q.call(this, $);
          return typeof S == "object" && this._cache.delete(S.schema), delete this.schemas[$], delete this.refs[$], this;
        }
        case "object": {
          const S = $;
          this._cache.delete(S);
          let w = $[this.opts.schemaId];
          return w && (w = (0, c.normalizeId)(w), delete this.schemas[w], delete this.refs[w]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary($) {
      for (const S of $)
        this.addKeyword(S);
      return this;
    }
    addKeyword($, S) {
      let w;
      if (typeof $ == "string")
        w = $, typeof S == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), S.keyword = w);
      else if (typeof $ == "object" && S === void 0) {
        if (S = $, w = S.keyword, Array.isArray(w) && !w.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (k.call(this, w, S), !S)
        return (0, l.eachItem)(w, (b) => U.call(this, b)), this;
      K.call(this, S);
      const d = {
        ...S,
        type: (0, u.getJSONTypes)(S.type),
        schemaType: (0, u.getJSONTypes)(S.schemaType)
      };
      return (0, l.eachItem)(w, d.type.length === 0 ? (b) => U.call(this, b, d) : (b) => d.type.forEach((E) => U.call(this, b, d, E))), this;
    }
    getKeyword($) {
      const S = this.RULES.all[$];
      return typeof S == "object" ? S.definition : !!S;
    }
    // Remove keyword
    removeKeyword($) {
      const { RULES: S } = this;
      delete S.keywords[$], delete S.all[$];
      for (const w of S.rules) {
        const d = w.rules.findIndex((b) => b.keyword === $);
        d >= 0 && w.rules.splice(d, 1);
      }
      return this;
    }
    // Add format
    addFormat($, S) {
      return typeof S == "string" && (S = new RegExp(S)), this.formats[$] = S, this;
    }
    errorsText($ = this.errors, { separator: S = ", ", dataVar: w = "data" } = {}) {
      return !$ || $.length === 0 ? "No errors" : $.map((d) => `${w}${d.instancePath} ${d.message}`).reduce((d, b) => d + S + b);
    }
    $dataMetaSchema($, S) {
      const w = this.RULES.all;
      $ = JSON.parse(JSON.stringify($));
      for (const d of S) {
        const b = d.split("/").slice(1);
        let E = $;
        for (const I of b)
          E = E[I];
        for (const I in w) {
          const F = w[I];
          if (typeof F != "object")
            continue;
          const { $data: te } = F.definition, ne = E[I];
          te && ne && (E[I] = Q(ne));
        }
      }
      return $;
    }
    _removeAllSchemas($, S) {
      for (const w in $) {
        const d = $[w];
        (!S || S.test(w)) && (typeof d == "string" ? delete $[w] : d && !d.meta && (this._cache.delete(d.schema), delete $[w]));
      }
    }
    _addSchema($, S, w, d = this.opts.validateSchema, b = this.opts.addUsedSchema) {
      let E;
      const { schemaId: I } = this.opts;
      if (typeof $ == "object")
        E = $[I];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof $ != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let F = this._cache.get($);
      if (F !== void 0)
        return F;
      w = (0, c.normalizeId)(E || w);
      const te = c.getSchemaRefs.call(this, $, w);
      return F = new i.SchemaEnv({ schema: $, schemaId: I, meta: S, baseId: w, localRefs: te }), this._cache.set(F.schema, F), b && !w.startsWith("#") && (w && this._checkUnique(w), this.refs[w] = F), d && this.validateSchema($, !0), F;
    }
    _checkUnique($) {
      if (this.schemas[$] || this.refs[$])
        throw new Error(`schema with key or id "${$}" already exists`);
    }
    _compileSchemaEnv($) {
      if ($.meta ? this._compileMetaSchema($) : i.compileSchema.call(this, $), !$.validate)
        throw new Error("ajv implementation error");
      return $.validate;
    }
    _compileMetaSchema($) {
      const S = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, $);
      } finally {
        this.opts = S;
      }
    }
  }
  O.ValidationError = r.default, O.MissingRefError = a.default, e.default = O;
  function j(R, $, S, w = "error") {
    for (const d in R) {
      const b = d;
      b in $ && this.logger[w](`${S}: option ${d}. ${R[b]}`);
    }
  }
  function q(R) {
    return R = (0, c.normalizeId)(R), this.schemas[R] || this.refs[R];
  }
  function J() {
    const R = this.opts.schemas;
    if (R)
      if (Array.isArray(R))
        this.addSchema(R);
      else
        for (const $ in R)
          this.addSchema(R[$], $);
  }
  function C() {
    for (const R in this.opts.formats) {
      const $ = this.opts.formats[R];
      $ && this.addFormat(R, $);
    }
  }
  function ee(R) {
    if (Array.isArray(R)) {
      this.addVocabulary(R);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const $ in R) {
      const S = R[$];
      S.keyword || (S.keyword = $), this.addKeyword(S);
    }
  }
  function N() {
    const R = { ...this.opts };
    for (const $ of y)
      delete R[$];
    return R;
  }
  const M = { log() {
  }, warn() {
  }, error() {
  } };
  function z(R) {
    if (R === !1)
      return M;
    if (R === void 0)
      return console;
    if (R.log && R.warn && R.error)
      return R;
    throw new Error("logger must implement log, warn and error methods");
  }
  const W = /^[a-z_$][a-z0-9_$:-]*$/i;
  function k(R, $) {
    const { RULES: S } = this;
    if ((0, l.eachItem)(R, (w) => {
      if (S.keywords[w])
        throw new Error(`Keyword ${w} is already defined`);
      if (!W.test(w))
        throw new Error(`Keyword ${w} has invalid name`);
    }), !!$ && $.$data && !("code" in $ || "validate" in $))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function U(R, $, S) {
    var w;
    const d = $?.post;
    if (S && d)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: b } = this;
    let E = d ? b.post : b.rules.find(({ type: F }) => F === S);
    if (E || (E = { type: S, rules: [] }, b.rules.push(E)), b.keywords[R] = !0, !$)
      return;
    const I = {
      keyword: R,
      definition: {
        ...$,
        type: (0, u.getJSONTypes)($.type),
        schemaType: (0, u.getJSONTypes)($.schemaType)
      }
    };
    $.before ? X.call(this, E, I, $.before) : E.rules.push(I), b.all[R] = I, (w = $.implements) === null || w === void 0 || w.forEach((F) => this.addKeyword(F));
  }
  function X(R, $, S) {
    const w = R.rules.findIndex((d) => d.keyword === S);
    w >= 0 ? R.rules.splice(w, 0, $) : (R.rules.push($), this.logger.warn(`rule ${S} is not defined`));
  }
  function K(R) {
    let { metaSchema: $ } = R;
    $ !== void 0 && (R.$data && this.opts.$data && ($ = Q($)), R.validateSchema = this.compile($, !0));
  }
  const ae = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function Q(R) {
    return { anyOf: [R, ae] };
  }
})(Mh);
var Xl = {}, Yl = {}, Zl = {};
Object.defineProperty(Zl, "__esModule", { value: !0 });
const zA = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Zl.default = zA;
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.callRef = Mn.getValidate = void 0;
const qA = Pr, Ld = _e, dt = ye, Gn = Vt, Md = ft, Ma = re, VA = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: n, it: r } = e, { baseId: a, schemaEnv: s, validateName: i, opts: o, self: c } = r, { root: u } = s;
    if ((n === "#" || n === "#/") && a === u.baseId)
      return p();
    const l = Md.resolveRef.call(c, u, a, n);
    if (l === void 0)
      throw new qA.default(r.opts.uriResolver, a, n);
    if (l instanceof Md.SchemaEnv)
      return m(l);
    return f(l);
    function p() {
      if (s === u)
        return ds(e, i, s, s.$async);
      const y = t.scopeValue("root", { ref: u });
      return ds(e, (0, dt._)`${y}.validate`, u, u.$async);
    }
    function m(y) {
      const v = gv(e, y);
      ds(e, v, y, y.$async);
    }
    function f(y) {
      const v = t.scopeValue("schema", o.code.source === !0 ? { ref: y, code: (0, dt.stringify)(y) } : { ref: y }), g = t.name("valid"), h = e.subschema({
        schema: y,
        dataTypes: [],
        schemaPath: dt.nil,
        topSchemaRef: v,
        errSchemaPath: n
      }, g);
      e.mergeEvaluated(h), e.ok(g);
    }
  }
};
function gv(e, t) {
  const { gen: n } = e;
  return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, dt._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
}
Mn.getValidate = gv;
function ds(e, t, n, r) {
  const { gen: a, it: s } = e, { allErrors: i, schemaEnv: o, opts: c } = s, u = c.passContext ? Gn.default.this : dt.nil;
  r ? l() : p();
  function l() {
    if (!o.$async)
      throw new Error("async schema referenced by sync schema");
    const y = a.let("valid");
    a.try(() => {
      a.code((0, dt._)`await ${(0, Ld.callValidateCode)(e, t, u)}`), f(t), i || a.assign(y, !0);
    }, (v) => {
      a.if((0, dt._)`!(${v} instanceof ${s.ValidationError})`, () => a.throw(v)), m(v), i || a.assign(y, !1);
    }), e.ok(y);
  }
  function p() {
    e.result((0, Ld.callValidateCode)(e, t, u), () => f(t), () => m(t));
  }
  function m(y) {
    const v = (0, dt._)`${y}.errors`;
    a.assign(Gn.default.vErrors, (0, dt._)`${Gn.default.vErrors} === null ? ${v} : ${Gn.default.vErrors}.concat(${v})`), a.assign(Gn.default.errors, (0, dt._)`${Gn.default.vErrors}.length`);
  }
  function f(y) {
    var v;
    if (!s.opts.unevaluated)
      return;
    const g = (v = n?.validate) === null || v === void 0 ? void 0 : v.evaluated;
    if (s.props !== !0)
      if (g && !g.dynamicProps)
        g.props !== void 0 && (s.props = Ma.mergeEvaluated.props(a, g.props, s.props));
      else {
        const h = a.var("props", (0, dt._)`${y}.evaluated.props`);
        s.props = Ma.mergeEvaluated.props(a, h, s.props, dt.Name);
      }
    if (s.items !== !0)
      if (g && !g.dynamicItems)
        g.items !== void 0 && (s.items = Ma.mergeEvaluated.items(a, g.items, s.items));
      else {
        const h = a.var("items", (0, dt._)`${y}.evaluated.items`);
        s.items = Ma.mergeEvaluated.items(a, h, s.items, dt.Name);
      }
  }
}
Mn.callRef = ds;
Mn.default = VA;
Object.defineProperty(Yl, "__esModule", { value: !0 });
const BA = Zl, HA = Mn, GA = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  BA.default,
  HA.default
];
Yl.default = GA;
var Ql = {}, eu = {};
Object.defineProperty(eu, "__esModule", { value: !0 });
const Is = ye, on = Is.operators, Cs = {
  maximum: { okStr: "<=", ok: on.LTE, fail: on.GT },
  minimum: { okStr: ">=", ok: on.GTE, fail: on.LT },
  exclusiveMaximum: { okStr: "<", ok: on.LT, fail: on.GTE },
  exclusiveMinimum: { okStr: ">", ok: on.GT, fail: on.LTE }
}, KA = {
  message: ({ keyword: e, schemaCode: t }) => (0, Is.str)`must be ${Cs[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, Is._)`{comparison: ${Cs[e].okStr}, limit: ${t}}`
}, WA = {
  keyword: Object.keys(Cs),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: KA,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e;
    e.fail$data((0, Is._)`${n} ${Cs[t].fail} ${r} || isNaN(${n})`);
  }
};
eu.default = WA;
var tu = {};
Object.defineProperty(tu, "__esModule", { value: !0 });
const Zr = ye, JA = {
  message: ({ schemaCode: e }) => (0, Zr.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Zr._)`{multipleOf: ${e}}`
}, XA = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: JA,
  code(e) {
    const { gen: t, data: n, schemaCode: r, it: a } = e, s = a.opts.multipleOfPrecision, i = t.let("res"), o = s ? (0, Zr._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${s}` : (0, Zr._)`${i} !== parseInt(${i})`;
    e.fail$data((0, Zr._)`(${r} === 0 || (${i} = ${n}/${r}, ${o}))`);
  }
};
tu.default = XA;
var nu = {}, ru = {};
Object.defineProperty(ru, "__esModule", { value: !0 });
function bv(e) {
  const t = e.length;
  let n = 0, r = 0, a;
  for (; r < t; )
    n++, a = e.charCodeAt(r++), a >= 55296 && a <= 56319 && r < t && (a = e.charCodeAt(r), (a & 64512) === 56320 && r++);
  return n;
}
ru.default = bv;
bv.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(nu, "__esModule", { value: !0 });
const xn = ye, YA = re, ZA = ru, QA = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxLength" ? "more" : "fewer";
    return (0, xn.str)`must NOT have ${n} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, xn._)`{limit: ${e}}`
}, eT = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: QA,
  code(e) {
    const { keyword: t, data: n, schemaCode: r, it: a } = e, s = t === "maxLength" ? xn.operators.GT : xn.operators.LT, i = a.opts.unicode === !1 ? (0, xn._)`${n}.length` : (0, xn._)`${(0, YA.useFunc)(e.gen, ZA.default)}(${n})`;
    e.fail$data((0, xn._)`${i} ${s} ${r}`);
  }
};
nu.default = eT;
var au = {};
Object.defineProperty(au, "__esModule", { value: !0 });
const tT = _e, nT = re, tr = ye, rT = {
  message: ({ schemaCode: e }) => (0, tr.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, tr._)`{pattern: ${e}}`
}, aT = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: rT,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e, o = i.opts.unicodeRegExp ? "u" : "";
    if (r) {
      const { regExp: c } = i.opts.code, u = c.code === "new RegExp" ? (0, tr._)`new RegExp` : (0, nT.useFunc)(t, c), l = t.let("valid");
      t.try(() => t.assign(l, (0, tr._)`${u}(${s}, ${o}).test(${n})`), () => t.assign(l, !1)), e.fail$data((0, tr._)`!${l}`);
    } else {
      const c = (0, tT.usePattern)(e, a);
      e.fail$data((0, tr._)`!${c}.test(${n})`);
    }
  }
};
au.default = aT;
var su = {};
Object.defineProperty(su, "__esModule", { value: !0 });
const Qr = ye, sT = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxProperties" ? "more" : "fewer";
    return (0, Qr.str)`must NOT have ${n} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Qr._)`{limit: ${e}}`
}, iT = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: sT,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxProperties" ? Qr.operators.GT : Qr.operators.LT;
    e.fail$data((0, Qr._)`Object.keys(${n}).length ${a} ${r}`);
  }
};
su.default = iT;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
const Ur = _e, ea = ye, oT = re, cT = {
  message: ({ params: { missingProperty: e } }) => (0, ea.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, ea._)`{missingProperty: ${e}}`
}, lT = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: cT,
  code(e) {
    const { gen: t, schema: n, schemaCode: r, data: a, $data: s, it: i } = e, { opts: o } = i;
    if (!s && n.length === 0)
      return;
    const c = n.length >= o.loopRequired;
    if (i.allErrors ? u() : l(), o.strictRequired) {
      const f = e.parentSchema.properties, { definedProperties: y } = e.it;
      for (const v of n)
        if (f?.[v] === void 0 && !y.has(v)) {
          const g = i.schemaEnv.baseId + i.errSchemaPath, h = `required property "${v}" is not defined at "${g}" (strictRequired)`;
          (0, oT.checkStrictMode)(i, h, i.opts.strictRequired);
        }
    }
    function u() {
      if (c || s)
        e.block$data(ea.nil, p);
      else
        for (const f of n)
          (0, Ur.checkReportMissingProp)(e, f);
    }
    function l() {
      const f = t.let("missing");
      if (c || s) {
        const y = t.let("valid", !0);
        e.block$data(y, () => m(f, y)), e.ok(y);
      } else
        t.if((0, Ur.checkMissingProp)(e, n, f)), (0, Ur.reportMissingProp)(e, f), t.else();
    }
    function p() {
      t.forOf("prop", r, (f) => {
        e.setParams({ missingProperty: f }), t.if((0, Ur.noPropertyInData)(t, a, f, o.ownProperties), () => e.error());
      });
    }
    function m(f, y) {
      e.setParams({ missingProperty: f }), t.forOf(f, r, () => {
        t.assign(y, (0, Ur.propertyInData)(t, a, f, o.ownProperties)), t.if((0, ea.not)(y), () => {
          e.error(), t.break();
        });
      }, ea.nil);
    }
  }
};
iu.default = lT;
var ou = {};
Object.defineProperty(ou, "__esModule", { value: !0 });
const ta = ye, uT = {
  message({ keyword: e, schemaCode: t }) {
    const n = e === "maxItems" ? "more" : "fewer";
    return (0, ta.str)`must NOT have ${n} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, ta._)`{limit: ${e}}`
}, pT = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: uT,
  code(e) {
    const { keyword: t, data: n, schemaCode: r } = e, a = t === "maxItems" ? ta.operators.GT : ta.operators.LT;
    e.fail$data((0, ta._)`${n}.length ${a} ${r}`);
  }
};
ou.default = pT;
var cu = {}, xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
const _v = Ys;
_v.code = 'require("ajv/dist/runtime/equal").default';
xa.default = _v;
Object.defineProperty(cu, "__esModule", { value: !0 });
const io = qe, Je = ye, dT = re, fT = xa, mT = {
  message: ({ params: { i: e, j: t } }) => (0, Je.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, Je._)`{i: ${e}, j: ${t}}`
}, hT = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: mT,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, parentSchema: s, schemaCode: i, it: o } = e;
    if (!r && !a)
      return;
    const c = t.let("valid"), u = s.items ? (0, io.getSchemaTypes)(s.items) : [];
    e.block$data(c, l, (0, Je._)`${i} === false`), e.ok(c);
    function l() {
      const y = t.let("i", (0, Je._)`${n}.length`), v = t.let("j");
      e.setParams({ i: y, j: v }), t.assign(c, !0), t.if((0, Je._)`${y} > 1`, () => (p() ? m : f)(y, v));
    }
    function p() {
      return u.length > 0 && !u.some((y) => y === "object" || y === "array");
    }
    function m(y, v) {
      const g = t.name("item"), h = (0, io.checkDataTypes)(u, g, o.opts.strictNumbers, io.DataType.Wrong), _ = t.const("indices", (0, Je._)`{}`);
      t.for((0, Je._)`;${y}--;`, () => {
        t.let(g, (0, Je._)`${n}[${y}]`), t.if(h, (0, Je._)`continue`), u.length > 1 && t.if((0, Je._)`typeof ${g} == "string"`, (0, Je._)`${g} += "_"`), t.if((0, Je._)`typeof ${_}[${g}] == "number"`, () => {
          t.assign(v, (0, Je._)`${_}[${g}]`), e.error(), t.assign(c, !1).break();
        }).code((0, Je._)`${_}[${g}] = ${y}`);
      });
    }
    function f(y, v) {
      const g = (0, dT.useFunc)(t, fT.default), h = t.name("outer");
      t.label(h).for((0, Je._)`;${y}--;`, () => t.for((0, Je._)`${v} = ${y}; ${v}--;`, () => t.if((0, Je._)`${g}(${n}[${y}], ${n}[${v}])`, () => {
        e.error(), t.assign(c, !1).break(h);
      })));
    }
  }
};
cu.default = hT;
var lu = {};
Object.defineProperty(lu, "__esModule", { value: !0 });
const Qo = ye, vT = re, yT = xa, gT = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Qo._)`{allowedValue: ${e}}`
}, bT = {
  keyword: "const",
  $data: !0,
  error: gT,
  code(e) {
    const { gen: t, data: n, $data: r, schemaCode: a, schema: s } = e;
    r || s && typeof s == "object" ? e.fail$data((0, Qo._)`!${(0, vT.useFunc)(t, yT.default)}(${n}, ${a})`) : e.fail((0, Qo._)`${s} !== ${n}`);
  }
};
lu.default = bT;
var uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
const Gr = ye, _T = re, $T = xa, wT = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Gr._)`{allowedValues: ${e}}`
}, xT = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: wT,
  code(e) {
    const { gen: t, data: n, $data: r, schema: a, schemaCode: s, it: i } = e;
    if (!r && a.length === 0)
      throw new Error("enum must have non-empty array");
    const o = a.length >= i.opts.loopEnum;
    let c;
    const u = () => c ?? (c = (0, _T.useFunc)(t, $T.default));
    let l;
    if (o || r)
      l = t.let("valid"), e.block$data(l, p);
    else {
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const f = t.const("vSchema", s);
      l = (0, Gr.or)(...a.map((y, v) => m(f, v)));
    }
    e.pass(l);
    function p() {
      t.assign(l, !1), t.forOf("v", s, (f) => t.if((0, Gr._)`${u()}(${n}, ${f})`, () => t.assign(l, !0).break()));
    }
    function m(f, y) {
      const v = a[y];
      return typeof v == "object" && v !== null ? (0, Gr._)`${u()}(${n}, ${f}[${y}])` : (0, Gr._)`${n} === ${v}`;
    }
  }
};
uu.default = xT;
Object.defineProperty(Ql, "__esModule", { value: !0 });
const ET = eu, ST = tu, PT = nu, RT = au, OT = su, AT = iu, TT = ou, jT = cu, kT = lu, NT = uu, IT = [
  // number
  ET.default,
  ST.default,
  // string
  PT.default,
  RT.default,
  // object
  OT.default,
  AT.default,
  // array
  TT.default,
  jT.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  kT.default,
  NT.default
];
Ql.default = IT;
var pu = {}, Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.validateAdditionalItems = void 0;
const En = ye, ec = re, CT = {
  message: ({ params: { len: e } }) => (0, En.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, En._)`{limit: ${e}}`
}, DT = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: CT,
  code(e) {
    const { parentSchema: t, it: n } = e, { items: r } = t;
    if (!Array.isArray(r)) {
      (0, ec.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    $v(e, r);
  }
};
function $v(e, t) {
  const { gen: n, schema: r, data: a, keyword: s, it: i } = e;
  i.items = !0;
  const o = n.const("len", (0, En._)`${a}.length`);
  if (r === !1)
    e.setParams({ len: t.length }), e.pass((0, En._)`${o} <= ${t.length}`);
  else if (typeof r == "object" && !(0, ec.alwaysValidSchema)(i, r)) {
    const u = n.var("valid", (0, En._)`${o} <= ${t.length}`);
    n.if((0, En.not)(u), () => c(u)), e.ok(u);
  }
  function c(u) {
    n.forRange("i", t.length, o, (l) => {
      e.subschema({ keyword: s, dataProp: l, dataPropType: ec.Type.Num }, u), i.allErrors || n.if((0, En.not)(u), () => n.break());
    });
  }
}
Rr.validateAdditionalItems = $v;
Rr.default = DT;
var du = {}, Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.validateTuple = void 0;
const Ud = ye, fs = re, FT = _e, LT = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: n } = e;
    if (Array.isArray(t))
      return wv(e, "additionalItems", t);
    n.items = !0, !(0, fs.alwaysValidSchema)(n, t) && e.ok((0, FT.validateArray)(e));
  }
};
function wv(e, t, n = e.schema) {
  const { gen: r, parentSchema: a, data: s, keyword: i, it: o } = e;
  l(a), o.opts.unevaluated && n.length && o.items !== !0 && (o.items = fs.mergeEvaluated.items(r, n.length, o.items));
  const c = r.name("valid"), u = r.const("len", (0, Ud._)`${s}.length`);
  n.forEach((p, m) => {
    (0, fs.alwaysValidSchema)(o, p) || (r.if((0, Ud._)`${u} > ${m}`, () => e.subschema({
      keyword: i,
      schemaProp: m,
      dataProp: m
    }, c)), e.ok(c));
  });
  function l(p) {
    const { opts: m, errSchemaPath: f } = o, y = n.length, v = y === p.minItems && (y === p.maxItems || p[t] === !1);
    if (m.strictTuples && !v) {
      const g = `"${i}" is ${y}-tuple, but minItems or maxItems/${t} are not specified or different at path "${f}"`;
      (0, fs.checkStrictMode)(o, g, m.strictTuples);
    }
  }
}
Or.validateTuple = wv;
Or.default = LT;
Object.defineProperty(du, "__esModule", { value: !0 });
const MT = Or, UT = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, MT.validateTuple)(e, "items")
};
du.default = UT;
var fu = {};
Object.defineProperty(fu, "__esModule", { value: !0 });
const zd = ye, zT = re, qT = _e, VT = Rr, BT = {
  message: ({ params: { len: e } }) => (0, zd.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, zd._)`{limit: ${e}}`
}, HT = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: BT,
  code(e) {
    const { schema: t, parentSchema: n, it: r } = e, { prefixItems: a } = n;
    r.items = !0, !(0, zT.alwaysValidSchema)(r, t) && (a ? (0, VT.validateAdditionalItems)(e, a) : e.ok((0, qT.validateArray)(e)));
  }
};
fu.default = HT;
var mu = {};
Object.defineProperty(mu, "__esModule", { value: !0 });
const wt = ye, Ua = re, GT = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, wt.str)`must contain at least ${e} valid item(s)` : (0, wt.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, wt._)`{minContains: ${e}}` : (0, wt._)`{minContains: ${e}, maxContains: ${t}}`
}, KT = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: GT,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    let i, o;
    const { minContains: c, maxContains: u } = r;
    s.opts.next ? (i = c === void 0 ? 1 : c, o = u) : i = 1;
    const l = t.const("len", (0, wt._)`${a}.length`);
    if (e.setParams({ min: i, max: o }), o === void 0 && i === 0) {
      (0, Ua.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (o !== void 0 && i > o) {
      (0, Ua.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Ua.alwaysValidSchema)(s, n)) {
      let v = (0, wt._)`${l} >= ${i}`;
      o !== void 0 && (v = (0, wt._)`${v} && ${l} <= ${o}`), e.pass(v);
      return;
    }
    s.items = !0;
    const p = t.name("valid");
    o === void 0 && i === 1 ? f(p, () => t.if(p, () => t.break())) : i === 0 ? (t.let(p, !0), o !== void 0 && t.if((0, wt._)`${a}.length > 0`, m)) : (t.let(p, !1), m()), e.result(p, () => e.reset());
    function m() {
      const v = t.name("_valid"), g = t.let("count", 0);
      f(v, () => t.if(v, () => y(g)));
    }
    function f(v, g) {
      t.forRange("i", 0, l, (h) => {
        e.subschema({
          keyword: "contains",
          dataProp: h,
          dataPropType: Ua.Type.Num,
          compositeRule: !0
        }, v), g();
      });
    }
    function y(v) {
      t.code((0, wt._)`${v}++`), o === void 0 ? t.if((0, wt._)`${v} >= ${i}`, () => t.assign(p, !0).break()) : (t.if((0, wt._)`${v} > ${o}`, () => t.assign(p, !1).break()), i === 1 ? t.assign(p, !0) : t.if((0, wt._)`${v} >= ${i}`, () => t.assign(p, !0)));
    }
  }
};
mu.default = KT;
var xv = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = ye, n = re, r = _e;
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
    const f = l.let("missing");
    for (const y in u) {
      const v = u[y];
      if (v.length === 0)
        continue;
      const g = (0, r.propertyInData)(l, p, y, m.opts.ownProperties);
      c.setParams({
        property: y,
        depsCount: v.length,
        deps: v.join(", ")
      }), m.allErrors ? l.if(g, () => {
        for (const h of v)
          (0, r.checkReportMissingProp)(c, h);
      }) : (l.if((0, t._)`${g} && (${(0, r.checkMissingProp)(c, v, f)})`), (0, r.reportMissingProp)(c, f), l.else());
    }
  }
  e.validatePropertyDeps = i;
  function o(c, u = c.schema) {
    const { gen: l, data: p, keyword: m, it: f } = c, y = l.name("valid");
    for (const v in u)
      (0, n.alwaysValidSchema)(f, u[v]) || (l.if(
        (0, r.propertyInData)(l, p, v, f.opts.ownProperties),
        () => {
          const g = c.subschema({ keyword: m, schemaProp: v }, y);
          c.mergeValidEvaluated(g, y);
        },
        () => l.var(y, !0)
        // TODO var
      ), c.ok(y));
  }
  e.validateSchemaDeps = o, e.default = a;
})(xv);
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
const Ev = ye, WT = re, JT = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Ev._)`{propertyName: ${e.propertyName}}`
}, XT = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: JT,
  code(e) {
    const { gen: t, schema: n, data: r, it: a } = e;
    if ((0, WT.alwaysValidSchema)(a, n))
      return;
    const s = t.name("valid");
    t.forIn("key", r, (i) => {
      e.setParams({ propertyName: i }), e.subschema({
        keyword: "propertyNames",
        data: i,
        dataTypes: ["string"],
        propertyName: i,
        compositeRule: !0
      }, s), t.if((0, Ev.not)(s), () => {
        e.error(!0), a.allErrors || t.break();
      });
    }), e.ok(s);
  }
};
hu.default = XT;
var ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
const za = _e, Ot = ye, YT = Vt, qa = re, ZT = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Ot._)`{additionalProperty: ${e.additionalProperty}}`
}, QT = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: ZT,
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, errsCount: s, it: i } = e;
    if (!s)
      throw new Error("ajv implementation error");
    const { allErrors: o, opts: c } = i;
    if (i.props = !0, c.removeAdditional !== "all" && (0, qa.alwaysValidSchema)(i, n))
      return;
    const u = (0, za.allSchemaProperties)(r.properties), l = (0, za.allSchemaProperties)(r.patternProperties);
    p(), e.ok((0, Ot._)`${s} === ${YT.default.errors}`);
    function p() {
      t.forIn("key", a, (g) => {
        !u.length && !l.length ? y(g) : t.if(m(g), () => y(g));
      });
    }
    function m(g) {
      let h;
      if (u.length > 8) {
        const _ = (0, qa.schemaRefOrVal)(i, r.properties, "properties");
        h = (0, za.isOwnProperty)(t, _, g);
      } else u.length ? h = (0, Ot.or)(...u.map((_) => (0, Ot._)`${g} === ${_}`)) : h = Ot.nil;
      return l.length && (h = (0, Ot.or)(h, ...l.map((_) => (0, Ot._)`${(0, za.usePattern)(e, _)}.test(${g})`))), (0, Ot.not)(h);
    }
    function f(g) {
      t.code((0, Ot._)`delete ${a}[${g}]`);
    }
    function y(g) {
      if (c.removeAdditional === "all" || c.removeAdditional && n === !1) {
        f(g);
        return;
      }
      if (n === !1) {
        e.setParams({ additionalProperty: g }), e.error(), o || t.break();
        return;
      }
      if (typeof n == "object" && !(0, qa.alwaysValidSchema)(i, n)) {
        const h = t.name("valid");
        c.removeAdditional === "failing" ? (v(g, h, !1), t.if((0, Ot.not)(h), () => {
          e.reset(), f(g);
        })) : (v(g, h), o || t.if((0, Ot.not)(h), () => t.break()));
      }
    }
    function v(g, h, _) {
      const x = {
        keyword: "additionalProperties",
        dataProp: g,
        dataPropType: qa.Type.Str
      };
      _ === !1 && Object.assign(x, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(x, h);
    }
  }
};
ci.default = QT;
var vu = {};
Object.defineProperty(vu, "__esModule", { value: !0 });
const ej = Nt, qd = _e, oo = re, Vd = ci, tj = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, parentSchema: r, data: a, it: s } = e;
    s.opts.removeAdditional === "all" && r.additionalProperties === void 0 && Vd.default.code(new ej.KeywordCxt(s, Vd.default, "additionalProperties"));
    const i = (0, qd.allSchemaProperties)(n);
    for (const p of i)
      s.definedProperties.add(p);
    s.opts.unevaluated && i.length && s.props !== !0 && (s.props = oo.mergeEvaluated.props(t, (0, oo.toHash)(i), s.props));
    const o = i.filter((p) => !(0, oo.alwaysValidSchema)(s, n[p]));
    if (o.length === 0)
      return;
    const c = t.name("valid");
    for (const p of o)
      u(p) ? l(p) : (t.if((0, qd.propertyInData)(t, a, p, s.opts.ownProperties)), l(p), s.allErrors || t.else().var(c, !0), t.endIf()), e.it.definedProperties.add(p), e.ok(c);
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
vu.default = tj;
var yu = {};
Object.defineProperty(yu, "__esModule", { value: !0 });
const Bd = _e, Va = ye, Hd = re, Gd = re, nj = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: n, data: r, parentSchema: a, it: s } = e, { opts: i } = s, o = (0, Bd.allSchemaProperties)(n), c = o.filter((v) => (0, Hd.alwaysValidSchema)(s, n[v]));
    if (o.length === 0 || c.length === o.length && (!s.opts.unevaluated || s.props === !0))
      return;
    const u = i.strictSchema && !i.allowMatchingProperties && a.properties, l = t.name("valid");
    s.props !== !0 && !(s.props instanceof Va.Name) && (s.props = (0, Gd.evaluatedPropsToName)(t, s.props));
    const { props: p } = s;
    m();
    function m() {
      for (const v of o)
        u && f(v), s.allErrors ? y(v) : (t.var(l, !0), y(v), t.if(l));
    }
    function f(v) {
      for (const g in u)
        new RegExp(v).test(g) && (0, Hd.checkStrictMode)(s, `property ${g} matches pattern ${v} (use allowMatchingProperties)`);
    }
    function y(v) {
      t.forIn("key", r, (g) => {
        t.if((0, Va._)`${(0, Bd.usePattern)(e, v)}.test(${g})`, () => {
          const h = c.includes(v);
          h || e.subschema({
            keyword: "patternProperties",
            schemaProp: v,
            dataProp: g,
            dataPropType: Gd.Type.Str
          }, l), s.opts.unevaluated && p !== !0 ? t.assign((0, Va._)`${p}[${g}]`, !0) : !h && !s.allErrors && t.if((0, Va.not)(l), () => t.break());
        });
      });
    }
  }
};
yu.default = nj;
var gu = {};
Object.defineProperty(gu, "__esModule", { value: !0 });
const rj = re, aj = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if ((0, rj.alwaysValidSchema)(r, n)) {
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
gu.default = aj;
var bu = {};
Object.defineProperty(bu, "__esModule", { value: !0 });
const sj = _e, ij = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: sj.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
bu.default = ij;
var _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
const ms = ye, oj = re, cj = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, ms._)`{passingSchemas: ${e.passing}}`
}, lj = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: cj,
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
        (0, oj.alwaysValidSchema)(a, l) ? t.var(c, !0) : m = e.subschema({
          keyword: "oneOf",
          schemaProp: p,
          compositeRule: !0
        }, c), p > 0 && t.if((0, ms._)`${c} && ${i}`).assign(i, !1).assign(o, (0, ms._)`[${o}, ${p}]`).else(), t.if(c, () => {
          t.assign(i, !0), t.assign(o, p), m && e.mergeEvaluated(m, ms.Name);
        });
      });
    }
  }
};
_u.default = lj;
var $u = {};
Object.defineProperty($u, "__esModule", { value: !0 });
const uj = re, pj = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: n, it: r } = e;
    if (!Array.isArray(n))
      throw new Error("ajv implementation error");
    const a = t.name("valid");
    n.forEach((s, i) => {
      if ((0, uj.alwaysValidSchema)(r, s))
        return;
      const o = e.subschema({ keyword: "allOf", schemaProp: i }, a);
      e.ok(a), e.mergeEvaluated(o);
    });
  }
};
$u.default = pj;
var wu = {};
Object.defineProperty(wu, "__esModule", { value: !0 });
const Ds = ye, Sv = re, dj = {
  message: ({ params: e }) => (0, Ds.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, Ds._)`{failingKeyword: ${e.ifClause}}`
}, fj = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: dj,
  code(e) {
    const { gen: t, parentSchema: n, it: r } = e;
    n.then === void 0 && n.else === void 0 && (0, Sv.checkStrictMode)(r, '"if" without "then" and "else" is ignored');
    const a = Kd(r, "then"), s = Kd(r, "else");
    if (!a && !s)
      return;
    const i = t.let("valid", !0), o = t.name("_valid");
    if (c(), e.reset(), a && s) {
      const l = t.let("ifClause");
      e.setParams({ ifClause: l }), t.if(o, u("then", l), u("else", l));
    } else a ? t.if(o, u("then")) : t.if((0, Ds.not)(o), u("else"));
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
        t.assign(i, o), e.mergeValidEvaluated(m, i), p ? t.assign(p, (0, Ds._)`${l}`) : e.setParams({ ifClause: l });
      };
    }
  }
};
function Kd(e, t) {
  const n = e.schema[t];
  return n !== void 0 && !(0, Sv.alwaysValidSchema)(e, n);
}
wu.default = fj;
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
const mj = re, hj = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: n }) {
    t.if === void 0 && (0, mj.checkStrictMode)(n, `"${e}" without "if" is ignored`);
  }
};
xu.default = hj;
Object.defineProperty(pu, "__esModule", { value: !0 });
const vj = Rr, yj = du, gj = Or, bj = fu, _j = mu, $j = xv, wj = hu, xj = ci, Ej = vu, Sj = yu, Pj = gu, Rj = bu, Oj = _u, Aj = $u, Tj = wu, jj = xu;
function kj(e = !1) {
  const t = [
    // any
    Pj.default,
    Rj.default,
    Oj.default,
    Aj.default,
    Tj.default,
    jj.default,
    // object
    wj.default,
    xj.default,
    $j.default,
    Ej.default,
    Sj.default
  ];
  return e ? t.push(yj.default, bj.default) : t.push(vj.default, gj.default), t.push(_j.default), t;
}
pu.default = kj;
var Eu = {}, Su = {};
Object.defineProperty(Su, "__esModule", { value: !0 });
const Ue = ye, Nj = {
  message: ({ schemaCode: e }) => (0, Ue.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, Ue._)`{format: ${e}}`
}, Ij = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: Nj,
  code(e, t) {
    const { gen: n, data: r, $data: a, schema: s, schemaCode: i, it: o } = e, { opts: c, errSchemaPath: u, schemaEnv: l, self: p } = o;
    if (!c.validateFormats)
      return;
    a ? m() : f();
    function m() {
      const y = n.scopeValue("formats", {
        ref: p.formats,
        code: c.code.formats
      }), v = n.const("fDef", (0, Ue._)`${y}[${i}]`), g = n.let("fType"), h = n.let("format");
      n.if((0, Ue._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => n.assign(g, (0, Ue._)`${v}.type || "string"`).assign(h, (0, Ue._)`${v}.validate`), () => n.assign(g, (0, Ue._)`"string"`).assign(h, v)), e.fail$data((0, Ue.or)(_(), x()));
      function _() {
        return c.strictSchema === !1 ? Ue.nil : (0, Ue._)`${i} && !${h}`;
      }
      function x() {
        const O = l.$async ? (0, Ue._)`(${v}.async ? await ${h}(${r}) : ${h}(${r}))` : (0, Ue._)`${h}(${r})`, j = (0, Ue._)`(typeof ${h} == "function" ? ${O} : ${h}.test(${r}))`;
        return (0, Ue._)`${h} && ${h} !== true && ${g} === ${t} && !${j}`;
      }
    }
    function f() {
      const y = p.formats[s];
      if (!y) {
        _();
        return;
      }
      if (y === !0)
        return;
      const [v, g, h] = x(y);
      v === t && e.pass(O());
      function _() {
        if (c.strictSchema === !1) {
          p.logger.warn(j());
          return;
        }
        throw new Error(j());
        function j() {
          return `unknown format "${s}" ignored in schema at path "${u}"`;
        }
      }
      function x(j) {
        const q = j instanceof RegExp ? (0, Ue.regexpCode)(j) : c.code.formats ? (0, Ue._)`${c.code.formats}${(0, Ue.getProperty)(s)}` : void 0, J = n.scopeValue("formats", { key: s, ref: j, code: q });
        return typeof j == "object" && !(j instanceof RegExp) ? [j.type || "string", j.validate, (0, Ue._)`${J}.validate`] : ["string", j, J];
      }
      function O() {
        if (typeof y == "object" && !(y instanceof RegExp) && y.async) {
          if (!l.$async)
            throw new Error("async format in sync schema");
          return (0, Ue._)`await ${h}(${r})`;
        }
        return typeof g == "function" ? (0, Ue._)`${h}(${r})` : (0, Ue._)`${h}.test(${r})`;
      }
    }
  }
};
Su.default = Ij;
Object.defineProperty(Eu, "__esModule", { value: !0 });
const Cj = Su, Dj = [Cj.default];
Eu.default = Dj;
var hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.contentVocabulary = hr.metadataVocabulary = void 0;
hr.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
hr.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Xl, "__esModule", { value: !0 });
const Fj = Yl, Lj = Ql, Mj = pu, Uj = Eu, Wd = hr, zj = [
  Fj.default,
  Lj.default,
  (0, Mj.default)(),
  Uj.default,
  Wd.metadataVocabulary,
  Wd.contentVocabulary
];
Xl.default = zj;
var Pu = {}, li = {};
Object.defineProperty(li, "__esModule", { value: !0 });
li.DiscrError = void 0;
var Jd;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(Jd || (li.DiscrError = Jd = {}));
Object.defineProperty(Pu, "__esModule", { value: !0 });
const Xn = ye, tc = li, Xd = ft, qj = Pr, Vj = re, Bj = {
  message: ({ params: { discrError: e, tagName: t } }) => e === tc.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: n } }) => (0, Xn._)`{error: ${e}, tag: ${n}, tagValue: ${t}}`
}, Hj = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Bj,
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
    const c = t.let("valid", !1), u = t.const("tag", (0, Xn._)`${n}${(0, Xn.getProperty)(o)}`);
    t.if((0, Xn._)`typeof ${u} == "string"`, () => l(), () => e.error(!1, { discrError: tc.DiscrError.Tag, tag: u, tagName: o })), e.ok(c);
    function l() {
      const f = m();
      t.if(!1);
      for (const y in f)
        t.elseIf((0, Xn._)`${u} === ${y}`), t.assign(c, p(f[y]));
      t.else(), e.error(!1, { discrError: tc.DiscrError.Mapping, tag: u, tagName: o }), t.endIf();
    }
    function p(f) {
      const y = t.name("valid"), v = e.subschema({ keyword: "oneOf", schemaProp: f }, y);
      return e.mergeEvaluated(v, Xn.Name), y;
    }
    function m() {
      var f;
      const y = {}, v = h(a);
      let g = !0;
      for (let O = 0; O < i.length; O++) {
        let j = i[O];
        if (j?.$ref && !(0, Vj.schemaHasRulesButRef)(j, s.self.RULES)) {
          const J = j.$ref;
          if (j = Xd.resolveRef.call(s.self, s.schemaEnv.root, s.baseId, J), j instanceof Xd.SchemaEnv && (j = j.schema), j === void 0)
            throw new qj.default(s.opts.uriResolver, s.baseId, J);
        }
        const q = (f = j?.properties) === null || f === void 0 ? void 0 : f[o];
        if (typeof q != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${o}"`);
        g = g && (v || h(j)), _(q, O);
      }
      if (!g)
        throw new Error(`discriminator: "${o}" must be required`);
      return y;
      function h({ required: O }) {
        return Array.isArray(O) && O.includes(o);
      }
      function _(O, j) {
        if (O.const)
          x(O.const, j);
        else if (O.enum)
          for (const q of O.enum)
            x(q, j);
        else
          throw new Error(`discriminator: "properties/${o}" must have "const" or "enum"`);
      }
      function x(O, j) {
        if (typeof O != "string" || O in y)
          throw new Error(`discriminator: "${o}" values must be unique strings`);
        y[O] = j;
      }
    }
  }
};
Pu.default = Hj;
const Gj = "http://json-schema.org/draft-07/schema#", Kj = "http://json-schema.org/draft-07/schema#", Wj = "Core schema meta-schema", Jj = {
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
}, Xj = [
  "object",
  "boolean"
], Yj = {
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
}, Zj = {
  $schema: Gj,
  $id: Kj,
  title: Wj,
  definitions: Jj,
  type: Xj,
  properties: Yj,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
  const n = Mh, r = Xl, a = Pu, s = Zj, i = ["/properties"], o = "http://json-schema.org/draft-07/schema";
  class c extends n.default {
    _addVocabularies() {
      super._addVocabularies(), r.default.forEach((y) => this.addVocabulary(y)), this.opts.discriminator && this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const y = this.opts.$data ? this.$dataMetaSchema(s, i) : s;
      this.addMetaSchema(y, o, !1), this.refs["http://json-schema.org/schema"] = o;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
    }
  }
  t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
  var u = Nt;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return u.KeywordCxt;
  } });
  var l = ye;
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
  var p = wa;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return p.default;
  } });
  var m = Pr;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return m.default;
  } });
})(Wo, Wo.exports);
var Qj = Wo.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const t = Qj, n = ye, r = n.operators, a = {
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
      const { gen: c, data: u, schemaCode: l, keyword: p, it: m } = o, { opts: f, self: y } = m;
      if (!f.validateFormats)
        return;
      const v = new t.KeywordCxt(m, y.RULES.all.format.definition, "format");
      v.$data ? g() : h();
      function g() {
        const x = c.scopeValue("formats", {
          ref: y.formats,
          code: f.code.formats
        }), O = c.const("fmt", (0, n._)`${x}[${v.schemaCode}]`);
        o.fail$data((0, n.or)((0, n._)`typeof ${O} != "object"`, (0, n._)`${O} instanceof RegExp`, (0, n._)`typeof ${O}.compare != "function"`, _(O)));
      }
      function h() {
        const x = v.schema, O = y.formats[x];
        if (!O || O === !0)
          return;
        if (typeof O != "object" || O instanceof RegExp || typeof O.compare != "function")
          throw new Error(`"${p}": format "${x}" does not define "compare" function`);
        const j = c.scopeValue("formats", {
          key: x,
          ref: O,
          code: f.code.formats ? (0, n._)`${f.code.formats}${(0, n.getProperty)(x)}` : void 0
        });
        o.fail$data(_(j));
      }
      function _(x) {
        return (0, n._)`${x}.compare(${u}, ${l}) ${a[p].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const i = (o) => (o.addKeyword(e.formatLimitDefinition), o);
  e.default = i;
})(Lh);
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = Fh, r = Lh, a = ye, s = new a.Name("fullFormats"), i = new a.Name("fastFormats"), o = (u, l = { keywords: !0 }) => {
    if (Array.isArray(l))
      return c(u, l, n.fullFormats, s), u;
    const [p, m] = l.mode === "fast" ? [n.fastFormats, i] : [n.fullFormats, s], f = l.formats || n.formatNames;
    return c(u, f, p, m), l.keywords && (0, r.default)(u), u;
  };
  o.get = (u, l = "full") => {
    const m = (l === "fast" ? n.fastFormats : n.fullFormats)[u];
    if (!m)
      throw new Error(`Unknown format "${u}"`);
    return m;
  };
  function c(u, l, p, m) {
    var f, y;
    (f = (y = u.opts.code).formats) !== null && f !== void 0 || (y.formats = (0, a._)`require("ajv-formats/dist/formats").${m}`);
    for (const v of l)
      u.addFormat(v, p[v]);
  }
  e.exports = t = o, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
})(Ko, Ko.exports);
var ek = Ko.exports;
const tk = /* @__PURE__ */ br(ek), nk = (e, t, n, r) => {
  if (n === "length" || n === "prototype" || n === "arguments" || n === "caller")
    return;
  const a = Object.getOwnPropertyDescriptor(e, n), s = Object.getOwnPropertyDescriptor(t, n);
  !rk(a, s) && r || Object.defineProperty(e, n, s);
}, rk = function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, ak = (e, t) => {
  const n = Object.getPrototypeOf(t);
  n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
}, sk = (e, t) => `/* Wrapped ${e}*/
${t}`, ik = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), ok = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), ck = (e, t, n) => {
  const r = n === "" ? "" : `with ${n.trim()}() `, a = sk.bind(null, r, t.toString());
  Object.defineProperty(a, "name", ok);
  const { writable: s, enumerable: i, configurable: o } = ik;
  Object.defineProperty(e, "toString", { value: a, writable: s, enumerable: i, configurable: o });
};
function lk(e, t, { ignoreNonConfigurable: n = !1 } = {}) {
  const { name: r } = e;
  for (const a of Reflect.ownKeys(t))
    nk(e, t, a, n);
  return ak(e, t), ck(e, t, r), e;
}
const Yd = (e, t = {}) => {
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
    }, f = () => {
      o = void 0, i && (clearTimeout(i), i = void 0), s && (c = e.apply(p, l));
    }, y = a && !i;
    return clearTimeout(i), i = setTimeout(m, n), r > 0 && r !== Number.POSITIVE_INFINITY && !o && (o = setTimeout(f, r)), y && (c = e.apply(p, l)), c;
  };
  return lk(u, e), u.cancel = () => {
    i && (clearTimeout(i), i = void 0), o && (clearTimeout(o), o = void 0);
  }, u;
};
var nc = { exports: {} };
const uk = "2.0.0", Pv = 256, pk = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, dk = 16, fk = Pv - 6, mk = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Ea = {
  MAX_LENGTH: Pv,
  MAX_SAFE_COMPONENT_LENGTH: dk,
  MAX_SAFE_BUILD_LENGTH: fk,
  MAX_SAFE_INTEGER: pk,
  RELEASE_TYPES: mk,
  SEMVER_SPEC_VERSION: uk,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const hk = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var ui = hk;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: a
  } = Ea, s = ui;
  t = e.exports = {};
  const i = t.re = [], o = t.safeRe = [], c = t.src = [], u = t.safeSrc = [], l = t.t = {};
  let p = 0;
  const m = "[a-zA-Z0-9-]", f = [
    ["\\s", 1],
    ["\\d", a],
    [m, r]
  ], y = (g) => {
    for (const [h, _] of f)
      g = g.split(`${h}*`).join(`${h}{0,${_}}`).split(`${h}+`).join(`${h}{1,${_}}`);
    return g;
  }, v = (g, h, _) => {
    const x = y(h), O = p++;
    s(g, O, h), l[g] = O, c[O] = h, u[O] = x, i[O] = new RegExp(h, _ ? "g" : void 0), o[O] = new RegExp(x, _ ? "g" : void 0);
  };
  v("NUMERICIDENTIFIER", "0|[1-9]\\d*"), v("NUMERICIDENTIFIERLOOSE", "\\d+"), v("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), v("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`), v("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASEIDENTIFIER", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIER]})`), v("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NONNUMERICIDENTIFIER]}|${c[l.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`), v("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`), v("BUILDIDENTIFIER", `${m}+`), v("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`), v("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`), v("FULL", `^${c[l.FULLPLAIN]}$`), v("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`), v("LOOSE", `^${c[l.LOOSEPLAIN]}$`), v("GTLT", "((?:<|>)?=?)"), v("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), v("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`), v("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`), v("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`), v("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`), v("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`), v("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), v("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`), v("COERCEFULL", c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?(?:${c[l.BUILD]})?(?:$|[^\\d])`), v("COERCERTL", c[l.COERCE], !0), v("COERCERTLFULL", c[l.COERCEFULL], !0), v("LONETILDE", "(?:~>?)"), v("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", v("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`), v("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`), v("LONECARET", "(?:\\^)"), v("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", v("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`), v("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`), v("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`), v("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`), v("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", v("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`), v("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`), v("STAR", "(<|>)?=?\\s*\\*"), v("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), v("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(nc, nc.exports);
var Sa = nc.exports;
const vk = Object.freeze({ loose: !0 }), yk = Object.freeze({}), gk = (e) => e ? typeof e != "object" ? vk : e : yk;
var Ru = gk;
const Zd = /^[0-9]+$/, Rv = (e, t) => {
  if (typeof e == "number" && typeof t == "number")
    return e === t ? 0 : e < t ? -1 : 1;
  const n = Zd.test(e), r = Zd.test(t);
  return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}, bk = (e, t) => Rv(t, e);
var Ov = {
  compareIdentifiers: Rv,
  rcompareIdentifiers: bk
};
const Ba = ui, { MAX_LENGTH: Qd, MAX_SAFE_INTEGER: Ha } = Ea, { safeRe: Ga, t: Ka } = Sa, _k = Ru, { compareIdentifiers: co } = Ov;
let $k = class Ut {
  constructor(t, n) {
    if (n = _k(n), t instanceof Ut) {
      if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Qd)
      throw new TypeError(
        `version is longer than ${Qd} characters`
      );
    Ba("SemVer", t, n), this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
    const r = t.trim().match(n.loose ? Ga[Ka.LOOSE] : Ga[Ka.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Ha || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Ha || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Ha || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((a) => {
      if (/^[0-9]+$/.test(a)) {
        const s = +a;
        if (s >= 0 && s < Ha)
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
    if (Ba("SemVer.compare", this.version, this.options, t), !(t instanceof Ut)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new Ut(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof Ut || (t = new Ut(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : this.patch > t.patch ? 1 : 0;
  }
  comparePre(t) {
    if (t instanceof Ut || (t = new Ut(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let n = 0;
    do {
      const r = this.prerelease[n], a = t.prerelease[n];
      if (Ba("prerelease compare", n, r, a), r === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === a)
        continue;
      return co(r, a);
    } while (++n);
  }
  compareBuild(t) {
    t instanceof Ut || (t = new Ut(t, this.options));
    let n = 0;
    do {
      const r = this.build[n], a = t.build[n];
      if (Ba("build compare", n, r, a), r === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === a)
        continue;
      return co(r, a);
    } while (++n);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, n, r) {
    if (t.startsWith("pre")) {
      if (!n && r === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (n) {
        const a = `-${n}`.match(this.options.loose ? Ga[Ka.PRERELEASELOOSE] : Ga[Ka.PRERELEASE]);
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
          r === !1 && (s = [n]), co(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var ct = $k;
const ef = ct, wk = (e, t, n = !1) => {
  if (e instanceof ef)
    return e;
  try {
    return new ef(e, t);
  } catch (r) {
    if (!n)
      return null;
    throw r;
  }
};
var zn = wk;
const xk = zn, Ek = (e, t) => {
  const n = xk(e, t);
  return n ? n.version : null;
};
var Sk = Ek;
const Pk = zn, Rk = (e, t) => {
  const n = Pk(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null;
};
var Ok = Rk;
const tf = ct, Ak = (e, t, n, r, a) => {
  typeof n == "string" && (a = r, r = n, n = void 0);
  try {
    return new tf(
      e instanceof tf ? e.version : e,
      n
    ).inc(t, r, a).version;
  } catch {
    return null;
  }
};
var Tk = Ak;
const nf = zn, jk = (e, t) => {
  const n = nf(e, null, !0), r = nf(t, null, !0), a = n.compare(r);
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
var kk = jk;
const Nk = ct, Ik = (e, t) => new Nk(e, t).major;
var Ck = Ik;
const Dk = ct, Fk = (e, t) => new Dk(e, t).minor;
var Lk = Fk;
const Mk = ct, Uk = (e, t) => new Mk(e, t).patch;
var zk = Uk;
const qk = zn, Vk = (e, t) => {
  const n = qk(e, t);
  return n && n.prerelease.length ? n.prerelease : null;
};
var Bk = Vk;
const rf = ct, Hk = (e, t, n) => new rf(e, n).compare(new rf(t, n));
var Lt = Hk;
const Gk = Lt, Kk = (e, t, n) => Gk(t, e, n);
var Wk = Kk;
const Jk = Lt, Xk = (e, t) => Jk(e, t, !0);
var Yk = Xk;
const af = ct, Zk = (e, t, n) => {
  const r = new af(e, n), a = new af(t, n);
  return r.compare(a) || r.compareBuild(a);
};
var Ou = Zk;
const Qk = Ou, eN = (e, t) => e.sort((n, r) => Qk(n, r, t));
var tN = eN;
const nN = Ou, rN = (e, t) => e.sort((n, r) => nN(r, n, t));
var aN = rN;
const sN = Lt, iN = (e, t, n) => sN(e, t, n) > 0;
var pi = iN;
const oN = Lt, cN = (e, t, n) => oN(e, t, n) < 0;
var Au = cN;
const lN = Lt, uN = (e, t, n) => lN(e, t, n) === 0;
var Av = uN;
const pN = Lt, dN = (e, t, n) => pN(e, t, n) !== 0;
var Tv = dN;
const fN = Lt, mN = (e, t, n) => fN(e, t, n) >= 0;
var Tu = mN;
const hN = Lt, vN = (e, t, n) => hN(e, t, n) <= 0;
var ju = vN;
const yN = Av, gN = Tv, bN = pi, _N = Tu, $N = Au, wN = ju, xN = (e, t, n, r) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e === n;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof n == "object" && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return yN(e, n, r);
    case "!=":
      return gN(e, n, r);
    case ">":
      return bN(e, n, r);
    case ">=":
      return _N(e, n, r);
    case "<":
      return $N(e, n, r);
    case "<=":
      return wN(e, n, r);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var jv = xN;
const EN = ct, SN = zn, { safeRe: Wa, t: Ja } = Sa, PN = (e, t) => {
  if (e instanceof EN)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let n = null;
  if (!t.rtl)
    n = e.match(t.includePrerelease ? Wa[Ja.COERCEFULL] : Wa[Ja.COERCE]);
  else {
    const c = t.includePrerelease ? Wa[Ja.COERCERTLFULL] : Wa[Ja.COERCERTL];
    let u;
    for (; (u = c.exec(e)) && (!n || n.index + n[0].length !== e.length); )
      (!n || u.index + u[0].length !== n.index + n[0].length) && (n = u), c.lastIndex = u.index + u[1].length + u[2].length;
    c.lastIndex = -1;
  }
  if (n === null)
    return null;
  const r = n[2], a = n[3] || "0", s = n[4] || "0", i = t.includePrerelease && n[5] ? `-${n[5]}` : "", o = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return SN(`${r}.${a}.${s}${i}${o}`, t);
};
var RN = PN;
const ON = zn, AN = Ea, TN = ct, jN = (e, t, n) => {
  if (!AN.RELEASE_TYPES.includes(t))
    return null;
  const r = kN(e, n);
  return r && NN(r, t);
}, kN = (e, t) => {
  const n = e instanceof TN ? e.version : e;
  return ON(n, t);
}, NN = (e, t) => {
  if (IN(t))
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
}, IN = (e) => e.startsWith("pre");
var CN = jN;
class DN {
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
var FN = DN, lo, sf;
function Mt() {
  if (sf) return lo;
  sf = 1;
  const e = /\s+/g;
  class t {
    constructor(U, X) {
      if (X = a(X), U instanceof t)
        return U.loose === !!X.loose && U.includePrerelease === !!X.includePrerelease ? U : new t(U.raw, X);
      if (U instanceof s)
        return this.raw = U.value, this.set = [[U]], this.formatted = void 0, this;
      if (this.options = X, this.loose = !!X.loose, this.includePrerelease = !!X.includePrerelease, this.raw = U.trim().replace(e, " "), this.set = this.raw.split("||").map((K) => this.parseRange(K.trim())).filter((K) => K.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const K = this.set[0];
        if (this.set = this.set.filter((ae) => !v(ae[0])), this.set.length === 0)
          this.set = [K];
        else if (this.set.length > 1) {
          for (const ae of this.set)
            if (ae.length === 1 && g(ae[0])) {
              this.set = [ae];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let U = 0; U < this.set.length; U++) {
          U > 0 && (this.formatted += "||");
          const X = this.set[U];
          for (let K = 0; K < X.length; K++)
            K > 0 && (this.formatted += " "), this.formatted += X[K].toString().trim();
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
    parseRange(U) {
      const K = ((this.options.includePrerelease && f) | (this.options.loose && y)) + ":" + U, ae = r.get(K);
      if (ae)
        return ae;
      const Q = this.options.loose, R = Q ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
      U = U.replace(R, z(this.options.includePrerelease)), i("hyphen replace", U), U = U.replace(c[u.COMPARATORTRIM], l), i("comparator trim", U), U = U.replace(c[u.TILDETRIM], p), i("tilde trim", U), U = U.replace(c[u.CARETTRIM], m), i("caret trim", U);
      let $ = U.split(" ").map((b) => _(b, this.options)).join(" ").split(/\s+/).map((b) => M(b, this.options));
      Q && ($ = $.filter((b) => (i("loose invalid filter", b, this.options), !!b.match(c[u.COMPARATORLOOSE])))), i("range list", $);
      const S = /* @__PURE__ */ new Map(), w = $.map((b) => new s(b, this.options));
      for (const b of w) {
        if (v(b))
          return [b];
        S.set(b.value, b);
      }
      S.size > 1 && S.has("") && S.delete("");
      const d = [...S.values()];
      return r.set(K, d), d;
    }
    intersects(U, X) {
      if (!(U instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((K) => h(K, X) && U.set.some((ae) => h(ae, X) && K.every((Q) => ae.every((R) => Q.intersects(R, X)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(U) {
      if (!U)
        return !1;
      if (typeof U == "string")
        try {
          U = new o(U, this.options);
        } catch {
          return !1;
        }
      for (let X = 0; X < this.set.length; X++)
        if (W(this.set[X], U, this.options))
          return !0;
      return !1;
    }
  }
  lo = t;
  const n = FN, r = new n(), a = Ru, s = di(), i = ui, o = ct, {
    safeRe: c,
    t: u,
    comparatorTrimReplace: l,
    tildeTrimReplace: p,
    caretTrimReplace: m
  } = Sa, { FLAG_INCLUDE_PRERELEASE: f, FLAG_LOOSE: y } = Ea, v = (k) => k.value === "<0.0.0-0", g = (k) => k.value === "", h = (k, U) => {
    let X = !0;
    const K = k.slice();
    let ae = K.pop();
    for (; X && K.length; )
      X = K.every((Q) => ae.intersects(Q, U)), ae = K.pop();
    return X;
  }, _ = (k, U) => (k = k.replace(c[u.BUILD], ""), i("comp", k, U), k = q(k, U), i("caret", k), k = O(k, U), i("tildes", k), k = C(k, U), i("xrange", k), k = N(k, U), i("stars", k), k), x = (k) => !k || k.toLowerCase() === "x" || k === "*", O = (k, U) => k.trim().split(/\s+/).map((X) => j(X, U)).join(" "), j = (k, U) => {
    const X = U.loose ? c[u.TILDELOOSE] : c[u.TILDE];
    return k.replace(X, (K, ae, Q, R, $) => {
      i("tilde", k, K, ae, Q, R, $);
      let S;
      return x(ae) ? S = "" : x(Q) ? S = `>=${ae}.0.0 <${+ae + 1}.0.0-0` : x(R) ? S = `>=${ae}.${Q}.0 <${ae}.${+Q + 1}.0-0` : $ ? (i("replaceTilde pr", $), S = `>=${ae}.${Q}.${R}-${$} <${ae}.${+Q + 1}.0-0`) : S = `>=${ae}.${Q}.${R} <${ae}.${+Q + 1}.0-0`, i("tilde return", S), S;
    });
  }, q = (k, U) => k.trim().split(/\s+/).map((X) => J(X, U)).join(" "), J = (k, U) => {
    i("caret", k, U);
    const X = U.loose ? c[u.CARETLOOSE] : c[u.CARET], K = U.includePrerelease ? "-0" : "";
    return k.replace(X, (ae, Q, R, $, S) => {
      i("caret", k, ae, Q, R, $, S);
      let w;
      return x(Q) ? w = "" : x(R) ? w = `>=${Q}.0.0${K} <${+Q + 1}.0.0-0` : x($) ? Q === "0" ? w = `>=${Q}.${R}.0${K} <${Q}.${+R + 1}.0-0` : w = `>=${Q}.${R}.0${K} <${+Q + 1}.0.0-0` : S ? (i("replaceCaret pr", S), Q === "0" ? R === "0" ? w = `>=${Q}.${R}.${$}-${S} <${Q}.${R}.${+$ + 1}-0` : w = `>=${Q}.${R}.${$}-${S} <${Q}.${+R + 1}.0-0` : w = `>=${Q}.${R}.${$}-${S} <${+Q + 1}.0.0-0`) : (i("no pr"), Q === "0" ? R === "0" ? w = `>=${Q}.${R}.${$}${K} <${Q}.${R}.${+$ + 1}-0` : w = `>=${Q}.${R}.${$}${K} <${Q}.${+R + 1}.0-0` : w = `>=${Q}.${R}.${$} <${+Q + 1}.0.0-0`), i("caret return", w), w;
    });
  }, C = (k, U) => (i("replaceXRanges", k, U), k.split(/\s+/).map((X) => ee(X, U)).join(" ")), ee = (k, U) => {
    k = k.trim();
    const X = U.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
    return k.replace(X, (K, ae, Q, R, $, S) => {
      i("xRange", k, K, ae, Q, R, $, S);
      const w = x(Q), d = w || x(R), b = d || x($), E = b;
      return ae === "=" && E && (ae = ""), S = U.includePrerelease ? "-0" : "", w ? ae === ">" || ae === "<" ? K = "<0.0.0-0" : K = "*" : ae && E ? (d && (R = 0), $ = 0, ae === ">" ? (ae = ">=", d ? (Q = +Q + 1, R = 0, $ = 0) : (R = +R + 1, $ = 0)) : ae === "<=" && (ae = "<", d ? Q = +Q + 1 : R = +R + 1), ae === "<" && (S = "-0"), K = `${ae + Q}.${R}.${$}${S}`) : d ? K = `>=${Q}.0.0${S} <${+Q + 1}.0.0-0` : b && (K = `>=${Q}.${R}.0${S} <${Q}.${+R + 1}.0-0`), i("xRange return", K), K;
    });
  }, N = (k, U) => (i("replaceStars", k, U), k.trim().replace(c[u.STAR], "")), M = (k, U) => (i("replaceGTE0", k, U), k.trim().replace(c[U.includePrerelease ? u.GTE0PRE : u.GTE0], "")), z = (k) => (U, X, K, ae, Q, R, $, S, w, d, b, E) => (x(K) ? X = "" : x(ae) ? X = `>=${K}.0.0${k ? "-0" : ""}` : x(Q) ? X = `>=${K}.${ae}.0${k ? "-0" : ""}` : R ? X = `>=${X}` : X = `>=${X}${k ? "-0" : ""}`, x(w) ? S = "" : x(d) ? S = `<${+w + 1}.0.0-0` : x(b) ? S = `<${w}.${+d + 1}.0-0` : E ? S = `<=${w}.${d}.${b}-${E}` : k ? S = `<${w}.${d}.${+b + 1}-0` : S = `<=${S}`, `${X} ${S}`.trim()), W = (k, U, X) => {
    for (let K = 0; K < k.length; K++)
      if (!k[K].test(U))
        return !1;
    if (U.prerelease.length && !X.includePrerelease) {
      for (let K = 0; K < k.length; K++)
        if (i(k[K].semver), k[K].semver !== s.ANY && k[K].semver.prerelease.length > 0) {
          const ae = k[K].semver;
          if (ae.major === U.major && ae.minor === U.minor && ae.patch === U.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return lo;
}
var uo, of;
function di() {
  if (of) return uo;
  of = 1;
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
  uo = t;
  const n = Ru, { safeRe: r, t: a } = Sa, s = jv, i = ui, o = ct, c = Mt();
  return uo;
}
const LN = Mt(), MN = (e, t, n) => {
  try {
    t = new LN(t, n);
  } catch {
    return !1;
  }
  return t.test(e);
};
var fi = MN;
const UN = Mt(), zN = (e, t) => new UN(e, t).set.map((n) => n.map((r) => r.value).join(" ").trim().split(" "));
var qN = zN;
const VN = ct, BN = Mt(), HN = (e, t, n) => {
  let r = null, a = null, s = null;
  try {
    s = new BN(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || a.compare(i) === -1) && (r = i, a = new VN(r, n));
  }), r;
};
var GN = HN;
const KN = ct, WN = Mt(), JN = (e, t, n) => {
  let r = null, a = null, s = null;
  try {
    s = new WN(t, n);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    s.test(i) && (!r || a.compare(i) === 1) && (r = i, a = new KN(r, n));
  }), r;
};
var XN = JN;
const po = ct, YN = Mt(), cf = pi, ZN = (e, t) => {
  e = new YN(e, t);
  let n = new po("0.0.0");
  if (e.test(n) || (n = new po("0.0.0-0"), e.test(n)))
    return n;
  n = null;
  for (let r = 0; r < e.set.length; ++r) {
    const a = e.set[r];
    let s = null;
    a.forEach((i) => {
      const o = new po(i.semver.version);
      switch (i.operator) {
        case ">":
          o.prerelease.length === 0 ? o.patch++ : o.prerelease.push(0), o.raw = o.format();
        case "":
        case ">=":
          (!s || cf(o, s)) && (s = o);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${i.operator}`);
      }
    }), s && (!n || cf(n, s)) && (n = s);
  }
  return n && e.test(n) ? n : null;
};
var QN = ZN;
const eI = Mt(), tI = (e, t) => {
  try {
    return new eI(e, t).range || "*";
  } catch {
    return null;
  }
};
var nI = tI;
const rI = ct, kv = di(), { ANY: aI } = kv, sI = Mt(), iI = fi, lf = pi, uf = Au, oI = ju, cI = Tu, lI = (e, t, n, r) => {
  e = new rI(e, r), t = new sI(t, r);
  let a, s, i, o, c;
  switch (n) {
    case ">":
      a = lf, s = oI, i = uf, o = ">", c = ">=";
      break;
    case "<":
      a = uf, s = cI, i = lf, o = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (iI(e, t, r))
    return !1;
  for (let u = 0; u < t.set.length; ++u) {
    const l = t.set[u];
    let p = null, m = null;
    if (l.forEach((f) => {
      f.semver === aI && (f = new kv(">=0.0.0")), p = p || f, m = m || f, a(f.semver, p.semver, r) ? p = f : i(f.semver, m.semver, r) && (m = f);
    }), p.operator === o || p.operator === c || (!m.operator || m.operator === o) && s(e, m.semver))
      return !1;
    if (m.operator === c && i(e, m.semver))
      return !1;
  }
  return !0;
};
var ku = lI;
const uI = ku, pI = (e, t, n) => uI(e, t, ">", n);
var dI = pI;
const fI = ku, mI = (e, t, n) => fI(e, t, "<", n);
var hI = mI;
const pf = Mt(), vI = (e, t, n) => (e = new pf(e, n), t = new pf(t, n), e.intersects(t, n));
var yI = vI;
const gI = fi, bI = Lt;
var _I = (e, t, n) => {
  const r = [];
  let a = null, s = null;
  const i = e.sort((l, p) => bI(l, p, n));
  for (const l of i)
    gI(l, t, n) ? (s = l, a || (a = l)) : (s && r.push([a, s]), s = null, a = null);
  a && r.push([a, null]);
  const o = [];
  for (const [l, p] of r)
    l === p ? o.push(l) : !p && l === i[0] ? o.push("*") : p ? l === i[0] ? o.push(`<=${p}`) : o.push(`${l} - ${p}`) : o.push(`>=${l}`);
  const c = o.join(" || "), u = typeof t.raw == "string" ? t.raw : String(t);
  return c.length < u.length ? c : t;
};
const df = Mt(), Nu = di(), { ANY: fo } = Nu, zr = fi, Iu = Lt, $I = (e, t, n = {}) => {
  if (e === t)
    return !0;
  e = new df(e, n), t = new df(t, n);
  let r = !1;
  e: for (const a of e.set) {
    for (const s of t.set) {
      const i = xI(a, s, n);
      if (r = r || i !== null, i)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, wI = [new Nu(">=0.0.0-0")], ff = [new Nu(">=0.0.0")], xI = (e, t, n) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === fo) {
    if (t.length === 1 && t[0].semver === fo)
      return !0;
    n.includePrerelease ? e = wI : e = ff;
  }
  if (t.length === 1 && t[0].semver === fo) {
    if (n.includePrerelease)
      return !0;
    t = ff;
  }
  const r = /* @__PURE__ */ new Set();
  let a, s;
  for (const f of e)
    f.operator === ">" || f.operator === ">=" ? a = mf(a, f, n) : f.operator === "<" || f.operator === "<=" ? s = hf(s, f, n) : r.add(f.semver);
  if (r.size > 1)
    return null;
  let i;
  if (a && s) {
    if (i = Iu(a.semver, s.semver, n), i > 0)
      return null;
    if (i === 0 && (a.operator !== ">=" || s.operator !== "<="))
      return null;
  }
  for (const f of r) {
    if (a && !zr(f, String(a), n) || s && !zr(f, String(s), n))
      return null;
    for (const y of t)
      if (!zr(f, String(y), n))
        return !1;
    return !0;
  }
  let o, c, u, l, p = s && !n.includePrerelease && s.semver.prerelease.length ? s.semver : !1, m = a && !n.includePrerelease && a.semver.prerelease.length ? a.semver : !1;
  p && p.prerelease.length === 1 && s.operator === "<" && p.prerelease[0] === 0 && (p = !1);
  for (const f of t) {
    if (l = l || f.operator === ">" || f.operator === ">=", u = u || f.operator === "<" || f.operator === "<=", a) {
      if (m && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === m.major && f.semver.minor === m.minor && f.semver.patch === m.patch && (m = !1), f.operator === ">" || f.operator === ">=") {
        if (o = mf(a, f, n), o === f && o !== a)
          return !1;
      } else if (a.operator === ">=" && !zr(a.semver, String(f), n))
        return !1;
    }
    if (s) {
      if (p && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === p.major && f.semver.minor === p.minor && f.semver.patch === p.patch && (p = !1), f.operator === "<" || f.operator === "<=") {
        if (c = hf(s, f, n), c === f && c !== s)
          return !1;
      } else if (s.operator === "<=" && !zr(s.semver, String(f), n))
        return !1;
    }
    if (!f.operator && (s || a) && i !== 0)
      return !1;
  }
  return !(a && u && !s && i !== 0 || s && l && !a && i !== 0 || m || p);
}, mf = (e, t, n) => {
  if (!e)
    return t;
  const r = Iu(e.semver, t.semver, n);
  return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, hf = (e, t, n) => {
  if (!e)
    return t;
  const r = Iu(e.semver, t.semver, n);
  return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var EI = $I;
const mo = Sa, vf = Ea, SI = ct, yf = Ov, PI = zn, RI = Sk, OI = Ok, AI = Tk, TI = kk, jI = Ck, kI = Lk, NI = zk, II = Bk, CI = Lt, DI = Wk, FI = Yk, LI = Ou, MI = tN, UI = aN, zI = pi, qI = Au, VI = Av, BI = Tv, HI = Tu, GI = ju, KI = jv, WI = RN, JI = CN, XI = di(), YI = Mt(), ZI = fi, QI = qN, eC = GN, tC = XN, nC = QN, rC = nI, aC = ku, sC = dI, iC = hI, oC = yI, cC = _I, lC = EI;
var uC = {
  parse: PI,
  valid: RI,
  clean: OI,
  inc: AI,
  diff: TI,
  major: jI,
  minor: kI,
  patch: NI,
  prerelease: II,
  compare: CI,
  rcompare: DI,
  compareLoose: FI,
  compareBuild: LI,
  sort: MI,
  rsort: UI,
  gt: zI,
  lt: qI,
  eq: VI,
  neq: BI,
  gte: HI,
  lte: GI,
  cmp: KI,
  coerce: WI,
  truncate: JI,
  Comparator: XI,
  Range: YI,
  satisfies: ZI,
  toComparators: QI,
  maxSatisfying: eC,
  minSatisfying: tC,
  minVersion: nC,
  validRange: rC,
  outside: aC,
  gtr: sC,
  ltr: iC,
  intersects: oC,
  simplifyRange: cC,
  subset: lC,
  SemVer: SI,
  re: mo.re,
  src: mo.src,
  tokens: mo.t,
  SEMVER_SPEC_VERSION: vf.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: vf.RELEASE_TYPES,
  compareIdentifiers: yf.compareIdentifiers,
  rcompareIdentifiers: yf.rcompareIdentifiers
};
const Kn = /* @__PURE__ */ br(uC), pC = Object.prototype.toString, dC = "[object Uint8Array]", fC = "[object ArrayBuffer]";
function Nv(e, t, n) {
  return e ? e.constructor === t ? !0 : pC.call(e) === n : !1;
}
function Iv(e) {
  return Nv(e, Uint8Array, dC);
}
function mC(e) {
  return Nv(e, ArrayBuffer, fC);
}
function hC(e) {
  return Iv(e) || mC(e);
}
function vC(e) {
  if (!Iv(e))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof e}\``);
}
function yC(e) {
  if (!hC(e))
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
}
function ho(e, t) {
  if (e.length === 0)
    return new Uint8Array(0);
  t ??= e.reduce((a, s) => a + s.length, 0);
  const n = new Uint8Array(t);
  let r = 0;
  for (const a of e)
    vC(a), n.set(a, r), r += a.length;
  return n;
}
const gf = {
  utf8: new globalThis.TextDecoder("utf8")
};
function Xa(e, t = "utf8") {
  return yC(e), gf[t] ??= new globalThis.TextDecoder(t), gf[t].decode(e);
}
function gC(e) {
  if (typeof e != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof e}\``);
}
const bC = new globalThis.TextEncoder();
function vo(e) {
  return gC(e), bC.encode(e);
}
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
const bf = "aes-256-cbc", Cv = /* @__PURE__ */ new Set([
  "aes-256-cbc",
  "aes-256-gcm",
  "aes-256-ctr"
]), _C = (e) => typeof e == "string" && Cv.has(e), Wt = () => /* @__PURE__ */ Object.create(null), _f = (e) => e !== void 0, yo = (e, t) => {
  const n = /* @__PURE__ */ new Set([
    "undefined",
    "symbol",
    "function"
  ]), r = typeof t;
  if (n.has(r))
    throw new TypeError(`Setting a value of type \`${r}\` for key \`${e}\` is not allowed as it's not supported by JSON`);
}, ln = "__internal__", go = `${ln}.migrations.version`;
class $C {
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
    this.#e = n, this.#u(n), this.#d(n), this.#f(n), this.events = new EventTarget(), this.#a = n.encryptionKey, this.#s = n.encryptionAlgorithm ?? bf, this.path = this.#m(n), this.#h(n), n.watch && this._watch();
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
      throw new TypeError(`Please don't use the ${ln} key, as it's used to manage this module internal operations.`);
    const { store: r } = this, a = (s, i) => {
      if (yo(s, i), this.#e.accessPropertiesByDotNotation)
        ja(r, s, i);
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
    return this.#e.accessPropertiesByDotNotation ? Xi(this.store, t) : t in this.store;
  }
  appendToArray(t, n) {
    yo(t, n);
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
      _f(this.#t[n]) && this.set(n, this.#t[n]);
  }
  delete(t) {
    const { store: n } = this;
    this.#e.accessPropertiesByDotNotation ? lw(n, t) : delete n[t], this.store = n;
  }
  /**
      Delete all items.
  
      This resets known items to their default values, if defined by the `defaults` or `schema` option.
      */
  clear() {
    const t = Wt();
    for (const n of Object.keys(this.#t))
      _f(this.#t[n]) && (yo(n, this.#t[n]), this.#e.accessPropertiesByDotNotation ? ja(t, n, this.#t[n]) : t[n] = this.#t[n]);
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
      const t = fe.readFileSync(this.path, this.#a ? null : "utf8"), n = this._decryptData(t);
      return ((a) => {
        const s = this._deserialize(a);
        return this.#i || this._validate(s), Object.assign(Wt(), s);
      })(n);
    } catch (t) {
      if (t?.code === "ENOENT")
        return this._ensureDirectory(), Wt();
      if (this.#e.clearInvalidConfig) {
        const n = t;
        if (n.name === "SyntaxError" || n.message?.startsWith("Config schema violation:") || n.message === "Failed to decrypt config data.")
          return Wt();
      }
      throw t;
    }
  }
  set store(t) {
    if (this._ensureDirectory(), !Xi(t, ln))
      try {
        const n = fe.readFileSync(this.path, this.#a ? null : "utf8"), r = this._decryptData(n), a = this._deserialize(r);
        Xi(a, ln) && ja(t, ln, Wp(a, ln));
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
    this.#o && (this.#o.close(), this.#o = void 0), this.#c && (fe.unwatchFile(this.path), this.#c = !1), this.#n = void 0;
  }
  _decryptData(t) {
    const n = this.#a;
    if (!n)
      return typeof t == "string" ? t : Xa(t);
    const r = this.#s, a = r === "aes-256-gcm" ? 16 : 0, s = ":".codePointAt(0), i = typeof t == "string" ? t.codePointAt(16) : t[16];
    if (!(s !== void 0 && i === s)) {
      if (r === "aes-256-cbc")
        return typeof t == "string" ? t : Xa(t);
      throw new Error("Failed to decrypt config data.");
    }
    const c = (f) => {
      if (a === 0)
        return { ciphertext: f };
      const y = f.length - a;
      if (y < 0)
        throw new Error("Invalid authentication tag length.");
      return {
        ciphertext: f.slice(0, y),
        authenticationTag: f.slice(y)
      };
    }, u = t.slice(0, 16), l = t.slice(17), p = typeof l == "string" ? vo(l) : l, m = (f) => {
      const { ciphertext: y, authenticationTag: v } = c(p), g = jr.pbkdf2Sync(n, f, 1e4, 32, "sha512"), h = jr.createDecipheriv(r, g, u);
      return v && h.setAuthTag(v), Xa(ho([h.update(y), h.final()]));
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
      return typeof t == "string" ? t : Xa(t);
    throw new Error("Failed to decrypt config data.");
  }
  _handleStoreChange(t) {
    let n = this.store;
    const r = () => {
      const a = n, s = this.store;
      qu(s, a) || (n = s, t.call(this, s, a));
    };
    return this.events.addEventListener("change", r), () => {
      this.events.removeEventListener("change", r);
    };
  }
  _handleValueChange(t, n) {
    let r = t();
    const a = () => {
      const s = r, i = t();
      qu(i, s) || (r = i, n.call(this, i, s));
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
    fe.mkdirSync(ce.dirname(this.path), { recursive: !0 });
  }
  _write(t) {
    let n = this._serialize(t);
    const r = this.#a;
    if (r) {
      const a = jr.randomBytes(16), s = jr.pbkdf2Sync(r, a, 1e4, 32, "sha512"), i = jr.createCipheriv(this.#s, s, a), o = ho([i.update(vo(n)), i.final()]), c = [a, vo(":"), o];
      this.#s === "aes-256-gcm" && c.push(i.getAuthTag()), n = ho(c);
    }
    if (Ce.env.SNAP)
      fe.writeFileSync(this.path, n, { mode: this.#e.configFileMode });
    else
      try {
        Wm(this.path, n, { mode: this.#e.configFileMode });
      } catch (a) {
        if (a?.code === "EXDEV") {
          fe.writeFileSync(this.path, n, { mode: this.#e.configFileMode });
          return;
        }
        throw a;
      }
  }
  _watch() {
    if (this._ensureDirectory(), fe.existsSync(this.path) || this._write(Wt()), Ce.platform === "win32" || Ce.platform === "darwin") {
      this.#n ??= Yd(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 100 });
      const t = ce.dirname(this.path), n = ce.basename(this.path);
      this.#o = fe.watch(t, { persistent: !1, encoding: "utf8" }, (r, a) => {
        a && a !== n || typeof this.#n == "function" && this.#n();
      });
    } else
      this.#n ??= Yd(() => {
        this.events.dispatchEvent(new Event("change"));
      }, { wait: 1e3 }), fe.watchFile(this.path, { persistent: !1 }, (t, n) => {
        typeof this.#n == "function" && this.#n();
      }), this.#c = !0;
  }
  _migrate(t, n, r) {
    let a = this._get(go, "0.0.0");
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
        c?.(this), this._set(go, o), a = o, i = structuredClone(this.store);
      } catch (c) {
        this.store = i;
        const u = c instanceof Error ? c.message : String(c);
        throw new Error(`Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. ${u}`);
      }
    (this._isVersionInRangeFormat(a) || !Kn.eq(a, n)) && this._set(go, n);
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
    return t === ln || t.startsWith(`${ln}.`);
  }
  _isVersionInRangeFormat(t) {
    return Kn.clean(t) === null;
  }
  _shouldPerformMigration(t, n, r) {
    return this._isVersionInRangeFormat(t) ? n !== "0.0.0" && Kn.satisfies(n, t) ? !1 : Kn.satisfies(r, t) : !(Kn.lte(t, n) || Kn.gt(t, r));
  }
  _get(t, n) {
    return Wp(this.store, t, n);
  }
  _set(t, n) {
    const { store: r } = this;
    ja(r, t, n), this.store = r;
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
    if (n.encryptionAlgorithm ??= bf, !_C(n.encryptionAlgorithm))
      throw new TypeError(`The \`encryptionAlgorithm\` option must be one of: ${[...Cv].join(", ")}`);
    if (!n.cwd) {
      if (!n.projectName)
        throw new Error("Please specify the `projectName` option.");
      n.cwd = fw(n.projectName, { suffix: n.projectSuffix }).config;
    }
    return typeof n.fileExtension == "string" && (n.fileExtension = n.fileExtension.replace(/^\.+/, "")), n;
  }
  #u(t) {
    if (!(t.schema ?? t.ajvOptions ?? t.rootSchema))
      return;
    if (t.schema && typeof t.schema != "object")
      throw new TypeError("The `schema` option must be an object.");
    const n = tk.default, r = new zR.Ajv2020({
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
    return ce.resolve(t.cwd, `${t.configName ?? "config"}${r}`);
  }
  #h(t) {
    if (t.migrations) {
      this.#v(t), this._validate(this.store);
      return;
    }
    const n = this.store, r = Object.assign(Wt(), t.defaults ?? {}, n);
    this._validate(r);
    try {
      Bu.deepEqual(n, r);
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
        const a = this.store, s = Object.assign(Wt(), t.defaults ?? {}, a);
        try {
          Bu.deepEqual(a, s);
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
const { app: hs, ipcMain: rc, shell: wC } = kf;
let $f = !1;
const wf = () => {
  if (!rc || !hs)
    throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
  const e = {
    defaultCwd: hs.getPath("userData"),
    appVersion: hs.getVersion()
  };
  return $f || (rc.on("electron-store-get-data", (t) => {
    t.returnValue = e;
  }), $f = !0), e;
};
class xC extends $C {
  constructor(t) {
    let n, r;
    if (Ce.type === "renderer") {
      const a = kf.ipcRenderer.sendSync("electron-store-get-data");
      if (!a)
        throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
      ({ defaultCwd: n, appVersion: r } = a);
    } else rc && hs && ({ defaultCwd: n, appVersion: r } = wf());
    t = {
      name: "config",
      ...t
    }, t.projectVersion ||= r, t.cwd ? t.cwd = ce.isAbsolute(t.cwd) ? t.cwd : ce.join(n, t.cwd) : t.cwd = n, t.configName = t.name, delete t.name, super(t);
  }
  static initRenderer() {
    wf();
  }
  async openInEditor() {
    const t = await wC.openPath(this.path);
    if (t)
      throw new Error(t);
  }
}
const Qe = new xC({
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
async function Ar() {
  return Qe.store;
}
async function Dv() {
  return Qe.get("sgdbApiKey");
}
async function ac(e) {
  Qe.set("sgdbApiKey", e);
}
async function Fv(e, t) {
  Qe.set(e, t);
}
async function Lv(e) {
  return (Qe.get("goldbergCache") || {})[e];
}
async function sc(e, t) {
  const n = Qe.get("goldbergCache") || {};
  n[e] = t, Qe.set("goldbergCache", n);
}
async function EC(e) {
  const t = Qe.get("goldbergCache") || {};
  return t[e] ? (delete t[e], Qe.set("goldbergCache", t), !0) : !1;
}
async function SC(e) {
  return (Qe.get("realAppIdCache") || {})[e];
}
async function PC(e, t) {
  const n = Qe.get("realAppIdCache") || {};
  n[e] = t, Qe.set("realAppIdCache", n);
}
async function RC(e) {
  const t = Qe.get("achievementsEnabledCache") || {};
  return t[e] !== void 0 ? t[e] : !0;
}
async function OC(e, t) {
  const n = Qe.get("achievementsEnabledCache") || {};
  n[e] = t, Qe.set("achievementsEnabledCache", n);
}
function Cu() {
  return Qe.get("runInBackground");
}
async function AC(e) {
  Qe.set("runInBackground", e);
}
const Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearGoldbergCache: EC,
  getAchievementsEnabledCache: RC,
  getConfig: Ar,
  getGoldbergCache: Lv,
  getRealAppIdCache: SC,
  getRunInBackgroundSync: Cu,
  getSavedApiKey: Dv,
  saveAchievementsEnabledCache: OC,
  saveApiKey: ac,
  saveConfigData: Fv,
  saveGoldbergCache: sc,
  saveRealAppIdCache: PC,
  saveRunInBackground: AC
}, Symbol.toStringTag, { value: "Module" }));
var Mv = {};
/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
(function(e) {
  (function(t) {
    t(typeof DO_NOT_EXPORT_CRC > "u" ? e : {});
  })(function(t) {
    t.version = "1.2.2";
    function n() {
      for (var C = 0, ee = new Array(256), N = 0; N != 256; ++N)
        C = N, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, ee[N] = C;
      return typeof Int32Array < "u" ? new Int32Array(ee) : ee;
    }
    var r = n();
    function a(C) {
      var ee = 0, N = 0, M = 0, z = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (M = 0; M != 256; ++M) z[M] = C[M];
      for (M = 0; M != 256; ++M)
        for (N = C[M], ee = 256 + M; ee < 4096; ee += 256) N = z[ee] = N >>> 8 ^ C[N & 255];
      var W = [];
      for (M = 1; M != 16; ++M) W[M - 1] = typeof Int32Array < "u" ? z.subarray(M * 256, M * 256 + 256) : z.slice(M * 256, M * 256 + 256);
      return W;
    }
    var s = a(r), i = s[0], o = s[1], c = s[2], u = s[3], l = s[4], p = s[5], m = s[6], f = s[7], y = s[8], v = s[9], g = s[10], h = s[11], _ = s[12], x = s[13], O = s[14];
    function j(C, ee) {
      for (var N = ee ^ -1, M = 0, z = C.length; M < z; ) N = N >>> 8 ^ r[(N ^ C.charCodeAt(M++)) & 255];
      return ~N;
    }
    function q(C, ee) {
      for (var N = ee ^ -1, M = C.length - 15, z = 0; z < M; ) N = O[C[z++] ^ N & 255] ^ x[C[z++] ^ N >> 8 & 255] ^ _[C[z++] ^ N >> 16 & 255] ^ h[C[z++] ^ N >>> 24] ^ g[C[z++]] ^ v[C[z++]] ^ y[C[z++]] ^ f[C[z++]] ^ m[C[z++]] ^ p[C[z++]] ^ l[C[z++]] ^ u[C[z++]] ^ c[C[z++]] ^ o[C[z++]] ^ i[C[z++]] ^ r[C[z++]];
      for (M += 15; z < M; ) N = N >>> 8 ^ r[(N ^ C[z++]) & 255];
      return ~N;
    }
    function J(C, ee) {
      for (var N = ee ^ -1, M = 0, z = C.length, W = 0, k = 0; M < z; )
        W = C.charCodeAt(M++), W < 128 ? N = N >>> 8 ^ r[(N ^ W) & 255] : W < 2048 ? (N = N >>> 8 ^ r[(N ^ (192 | W >> 6 & 31)) & 255], N = N >>> 8 ^ r[(N ^ (128 | W & 63)) & 255]) : W >= 55296 && W < 57344 ? (W = (W & 1023) + 64, k = C.charCodeAt(M++) & 1023, N = N >>> 8 ^ r[(N ^ (240 | W >> 8 & 7)) & 255], N = N >>> 8 ^ r[(N ^ (128 | W >> 2 & 63)) & 255], N = N >>> 8 ^ r[(N ^ (128 | k >> 6 & 15 | (W & 3) << 4)) & 255], N = N >>> 8 ^ r[(N ^ (128 | k & 63)) & 255]) : (N = N >>> 8 ^ r[(N ^ (224 | W >> 12 & 15)) & 255], N = N >>> 8 ^ r[(N ^ (128 | W >> 6 & 63)) & 255], N = N >>> 8 ^ r[(N ^ (128 | W & 63)) & 255]);
      return ~N;
    }
    t.table = r, t.bstr = j, t.buf = q, t.str = J;
  });
})(Mv);
const Du = /* @__PURE__ */ br(Mv);
var mt = {}, It = pc;
function Ct(e) {
  e = e || new Buffer(0), It(Buffer.isBuffer(e), "A Buffer must be provided"), this.buf = e, this.offset = 0;
}
Ct.prototype.append = function(e) {
  return It(Buffer.isBuffer(e), "A Buffer must be provided"), this.buf = Buffer.concat([this.buf, e]), this;
};
Ct.prototype.tell = function() {
  return this.offset;
};
Ct.prototype.seek = function(e) {
  return It(e >= 0 && e <= this.buf.length, "Position is Invalid"), this.offset = e, this;
};
Ct.prototype.move = function(e) {
  return It(this.offset + e >= 0 && this.offset + e <= this.buf.length, "Difference is Invalid"), this.offset += e, this;
};
Ct.prototype.nextAll = Ct.prototype.restAll = function() {
  var e = this.buf.length - this.offset;
  It(e >= 0, "Buffer is not in normal state: offset > totalLength");
  var t = new Buffer(e);
  return this.buf.copy(t, 0, this.offset), this.offset = this.buf.length, t;
};
Ct.prototype.nextBuffer = function(e) {
  It(e >= 0, "Length must be no negative"), It(this.offset + e <= this.buf.length, "Out of Original Buffer's Boundary");
  var t = new Buffer(e);
  return this.buf.copy(t, 0, this.offset, this.offset + e), this.offset += e, t;
};
Ct.prototype.nextString = function(e, t) {
  return It(e >= 0, "Length must be no negative"), It(this.offset + e <= this.buf.length, "Out of Original Buffer's Boundary"), this.offset += e, this.buf.toString(t, this.offset - e, this.offset);
};
Ct.prototype.nextStringZero = function(e) {
  for (var t = 0; t + this.offset < this.buf.length && this.buf[this.offset + t] !== 0; t++) ;
  return It(t <= this.buf.length && this.buf[this.offset + t] === 0, "Out of Original Buffer's Boundary"), this.offset += t + 1, this.buf.toString(e, this.offset - t - 1, this.offset - 1);
};
function Fs(e, t) {
  e = TC(e), Ct.prototype["next" + e] = function() {
    It(this.offset + t <= this.buf.length, "Out of Original Buffer's Boundary");
    var n = this.buf["read" + e](this.offset);
    return this.offset += t, n;
  };
}
function Tr(e, t) {
  Fs(e + "LE", t), Fs(e + "BE", t);
}
Fs("Int8", 1);
Fs("UInt8", 1);
Tr("UInt16", 2);
Tr("Int16", 2);
Tr("UInt32", 4);
Tr("Int32", 4);
Tr("Float", 4);
Tr("Double", 8);
function TC(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var jC = Ct, Uv = { exports: {} };
(function(e) {
  class t {
    constructor(o, c, u, l, p) {
      this.width = o, this.poly = c, this.xor_in = u, this.reflected_xor_in = r(u, o), this.xor_out = l, this.reflect = p, this.msb_mask = 1 << this.width - 1, this.mask = this.msb_mask - 1 << 1 | 1, this.crc_shift = this.width < 8 ? 8 - this.width : 0, this.shifted_xor_in = this.xor_in << this.crc_shift;
      let m = this.gen_table();
      this.table = m, this.width === 8 && !this.xor_in && !this.xor_out && !this.reflect && (this.calculate = function(f) {
        f = n(f);
        let y = 0;
        for (let v = 0; v < f.length; v++)
          y = m[y ^ f[v]];
        return y;
      });
    }
    calculate(o) {
      o = n(o);
      let c, { table: u, width: l, crc_shift: p, mask: m } = this;
      if (this.reflect) {
        c = this.reflected_xor_in;
        for (let f = 0; f < o.length; f++) {
          let y = o[f];
          c = (u[(c ^ y) & 255] ^ c >>> 8) & m;
        }
      } else {
        c = this.shifted_xor_in;
        for (let f = 0; f < o.length; f++)
          c = u[(c >> l - 8 + p ^ o[f]) & 255] << p ^ c << 8 - p & m << p;
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
      for (let f = 0; f < l; f++) {
        let y = "";
        for (let v = 0; v < p; v++) {
          let g = o[f << u | v];
          g = "000000000" + g.toString(16), g = g.substr(g.length - c), y += "0x" + g + ", ";
        }
        m += "  " + y + `
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
})(Uv);
var kC = Uv.exports, zv = { exports: {} }, bo = 4294967296, qv = [];
for (var qr = 0; qr < 256; qr++)
  qv[qr] = (qr > 15 ? "" : "0") + qr.toString(16);
var na = zv.exports = function(e, t) {
  e instanceof Buffer ? (this.buffer = e, this.offset = t || 0) : Object.prototype.toString.call(e) == "[object Uint8Array]" ? (this.buffer = new Buffer(e), this.offset = t || 0) : (this.buffer = this.buffer || new Buffer(8), this.offset = 0, this.setValue.apply(this, arguments));
};
na.MAX_INT = Math.pow(2, 53);
na.MIN_INT = -Math.pow(2, 53);
na.prototype = {
  constructor: na,
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
        if (n = e < 0, e = Math.abs(e), t = e % bo, e = e / bo, e > bo) throw new RangeError(e + " is outside Int64 range");
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
    return !e && a >= na.MAX_INT ? r ? -1 / 0 : 1 / 0 : r ? -a : a;
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
      t[a] = qv[n[r + a]];
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
var NC = zv.exports;
function ic(e, t, n) {
  for (var r = [], a = Math.max(e.length, t.length), s = 0, i = 0; i < a || s; ) {
    var o = i < e.length ? e[i] : 0, c = i < t.length ? t[i] : 0, u = s + o + c;
    r.push(u % n), s = Math.floor(u / n), i++;
  }
  return r;
}
function xf(e, t, n) {
  if (e < 0) return null;
  if (e == 0) return [];
  for (var r = [], a = t; e & 1 && (r = ic(r, a, n)), e = e >> 1, e !== 0; )
    a = ic(a, a, n);
  return r;
}
function IC(e, t) {
  for (var n = e.split(""), r = [], a = n.length - 1; a >= 0; a--) {
    var s = parseInt(n[a], t);
    if (isNaN(s)) return null;
    r.push(s);
  }
  return r;
}
function Vv(e, t, n) {
  var r = IC(e, t);
  if (r === null) return null;
  for (var a = [], s = [1], i = 0; i < r.length; i++)
    r[i] && (a = ic(a, xf(r[i], s, n), n)), s = xf(t, s, n);
  for (var o = "", i = a.length - 1; i >= 0; i--)
    o += a[i].toString(n);
  return o === "" && (o = "0"), o;
}
function CC(e, t) {
  var n = t && t.prefix === !1, r = Vv(e, 10, 16);
  return r ? n ? r : "0x" + r : null;
}
function DC(e) {
  return e.substring(0, 2) === "0x" && (e = e.substring(2)), e = e.toLowerCase(), Vv(e, 16, 10);
}
var FC = {
  hexToDec: DC,
  decToHex: CC
}, LC = Ke && Ke.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), MC = Ke && Ke.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), UC = Ke && Ke.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.hasOwnProperty.call(e, n) && LC(t, e, n);
  return MC(t, e), t;
}, Bv = Ke && Ke.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.getShortcutUrl = mt.getShortcutHash = Fu = mt.writeVdf = mi = mt.readVdf = void 0;
const zC = Bv(jC), qC = UC(kC), VC = Bv(NC), BC = FC;
function HC(e) {
  const t = e.nextUInt8();
  if (t === 8)
    return {
      type: t
    };
  const n = e.nextStringZero();
  let r;
  switch (t) {
    case 0: {
      r = Hv(e);
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
function Hv(e) {
  const t = {};
  for (; ; ) {
    const n = HC(e);
    if (n.type === 8)
      break;
    t[n.name] = n.value;
  }
  return t;
}
function GC(e, t) {
  const n = new zC.default(e);
  return t && n.seek(t), Hv(n);
}
var mi = mt.readVdf = GC;
function vs(e, t) {
  const n = Buffer.allocUnsafe(1);
  n.writeUInt8(e), t.push(n);
}
function KC(e, t) {
  const n = Buffer.allocUnsafe(4);
  n.writeUInt32LE(e), t.push(n);
}
function Ya(e, t) {
  if (e.indexOf("\0") !== -1)
    throw new Error('Strings in VDF files cannot have null chars ("\\0")');
  t.push(Buffer.from(e, "utf-8")), vs(0, t);
}
function Gv(e, t) {
  for (const r of Object.keys(e)) {
    const a = e[r];
    if (typeof a == "number")
      vs(2, t), Ya(r, t), KC(a, t);
    else if (typeof a == "string")
      vs(1, t), Ya(r, t), Ya(a, t);
    else if (typeof a == "object")
      vs(0, t), Ya(r, t), Gv(a, t);
    else
      throw new Error(`Type at ${r} (${typeof a}) is not allowed in VDF files. VDF files can only contain numbers, strings, or objects`);
  }
  const n = Buffer.allocUnsafe(1);
  n.writeUInt8(
    8
    /* MapEnd */
  ), t.push(n);
}
function WC(e) {
  const t = [];
  return Gv(e, t), Buffer.concat(t);
}
var Fu = mt.writeVdf = WC;
let _o;
function Kv(e) {
  _o = _o || qC.crc(32, 79764919, 4294967295, 4294967295, !0);
  const t = new VC.default(_o(e) | 2147483648, 33554432);
  return BC.hexToDec(t.toOctetString());
}
mt.getShortcutHash = Kv;
function JC(e, t) {
  return "steam://rungameid/" + Kv(t + e);
}
mt.getShortcutUrl = JC;
var vr = {};
const $o = {
  INT: /^\-?\d+$/,
  FLOAT: /^\-?\d+\.\d+$/,
  BOOLEAN: /^(true|false)$/i
};
function XC(e, t) {
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
      var ee = p.shift();
      return i || (ee = ee.trim()), ee;
    }
    for (var N = n[++c]; !i && N !== void 0 && (N = N.trim()) && (N == "" || N[0] == "/"); )
      N = n[++c];
    if (N === void 0)
      return !1;
    var M = -1;
    e: for (var z = 0; z < N.length; z++)
      switch (N.charAt(z)) {
        case '"':
          N.charAt(z - 1) != "\\" && (i = !i);
          break;
        case "/":
          if (!i) {
            M = z;
            break e;
          }
          break;
        case "{":
          i || (N = N.slice(0, z) + `
{
` + N.slice(z + 1), z += 2);
          break;
        case "}":
          i || (N = N.slice(0, z) + `
}
` + N.slice(z + 1), z += 2);
          break;
      }
    return M > -1 && (N = N.substr(0, M)), p = N.split(`
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
        var f = o.exec(l);
        if (f === null)
          throw new SyntaxError("VDF.parse: invalid syntax on line " + (c + 1) + `:
` + l);
        var y = f[2] !== void 0 ? f[2] : f[3], v = f[6] !== void 0 ? f[6] : f[8];
        if (v === void 0) {
          if (a[a.length - 1][y] === void 0)
            a[a.length - 1][y] = {}, a.push(a[a.length - 1][y]);
          else if (a[a.length - 1][y] !== void 0 && !Array.isArray(a[a.length - 1][y]))
            t.arrayify ? (a[a.length - 1][y] = [a[a.length - 1][y], {}], a.push(a[a.length - 1][y]), a.push(a[a.length - 1][1])) : a.push(a[a.length - 1][y]);
          else if (a[a.length - 1][y] !== void 0 && Array.isArray(a[a.length - 1][y])) {
            if (!t.arrayify)
              throw new Error("VDF.parse: this code block should never be reached with arrayify set to false! [1]");
            a.push(a[a.length - 1][y]), a[a.length - 1].push({}), a.push(a[a.length - 1][a[a.length - 1].length - 1]);
          }
          s = !0;
        } else {
          if (f[7] === void 0 && f[8] === void 0) {
            if (c + 1 >= u)
              throw new SyntaxError("VDF.parse: un-closed quotes at end of file");
            l += `
` + m();
            continue;
          }
          if (t.conditionals !== void 0 && Array.isArray(t.conditionals) && f[9]) {
            for (var g = f[9], h = new RegExp("^(\\|\\||&&)?(!)?\\$([A-Z0-9]+)"), _ = !1; g; ) {
              var x = h.exec(g);
              if (x === null || !x[3])
                throw new SyntaxError("VDF.parse: encountered an incorrect conditional: " + g);
              g = g.replace(x[0], "").trim();
              var O = x[1], j = x[2] && x[2] === "!", q = x[3], J = t.conditionals.indexOf(q) !== -1, C = j ? !J : J;
              !O || O === "||" ? _ = _ || C : _ = _ && C;
            }
            if (!_) {
              if (l = l.replace(f[0], ""), !l || l[0] == "/") break;
              continue;
            }
          }
          if (t.types && ($o.INT.test(v) ? v = parseInt(v) : $o.FLOAT.test(v) ? v = parseFloat(v) : $o.BOOLEAN.test(v) && (v = v.toLowerCase() == "true")), a[a.length - 1][y] === void 0)
            a[a.length - 1][y] = v;
          else if (a[a.length - 1][y] !== void 0 && !Array.isArray(a[a.length - 1][y]))
            t.arrayify ? a[a.length - 1][y] = [a[a.length - 1][y], v] : a[a.length - 1][y] = v;
          else if (a[a.length - 1][y] !== void 0 && Array.isArray(a[a.length - 1][y])) {
            if (!t.arrayify)
              throw new Error("VDF.parse: this code block should never be reached with arrayify set to false! [2]");
            a[a.length - 1][y].push(v);
          }
        }
        if (s || (l = l.replace(f[0], "").trim(), !l || l[0] == "/") || (l = l.replace(/^\s*\[\!?\$[A-Z0-9]+(?:(?:[\|]{2}|[\&]{2})\!?\$[A-Z0-9]+)*\]/, "").trim(), !l || l[0] == "/")) break;
      }
    }
  if (a.length != 1) throw new SyntaxError("VDF.parse: open parentheses somewhere");
  return r;
}
function YC(e, t) {
  if (typeof e != "object")
    throw new TypeError("VDF.stringify: First input parameter is not an object");
  return t = {
    pretty: typeof t == "boolean" ? t : typeof t == "object" && "pretty" in t ? t.pretty : !1,
    indent: typeof t == "object" && "indent" in t ? t.indent : "	"
  }, ys(e, t, 0);
}
function ys(e, t, n) {
  if (typeof e != "object")
    throw new TypeError("VDF.stringify: a key has value of type other than string or object: " + typeof e);
  var r = t.indent, a = "", s = "";
  if (t.pretty)
    for (var i = 0; i < n; i++)
      s += r;
  for (var o in e)
    typeof e[o] == "object" ? Array.isArray(e[o]) ? e[o].forEach(function(c) {
      typeof c != "object" ? (_element = {}, _element[o] = c, a += ys(_element, t, n)) : a += [s, '"', o, `"
`, s, `{
`, ys(c, t, n + 1), s, `}
`].join("");
    }) : a += [s, '"', o, `"
`, s, `{
`, ys(e[o], t, n + 1), s, `}
`].join("") : a += [s, '"', o, '" "', String(e[o]), `"
`].join("");
  return a;
}
var Wv = vr.parse = XC, ZC = vr.stringify = YC;
class gs {
  apiKey;
  baseUrl = "https://www.steamgriddb.com/api/v2";
  constructor(t) {
    this.apiKey = t;
  }
  get headers() {
    return { Authorization: `Bearer ${this.apiKey}` };
  }
  async searchGame(t) {
    return (await Se.get(`${this.baseUrl}/search/autocomplete/${encodeURIComponent(t)}`, { headers: this.headers })).data.data[0];
  }
  async getAssets(t) {
    const [n, r, a, s, i] = await Promise.all([
      Se.get(`${this.baseUrl}/grids/game/${t}?dimensions=600x900,342x482`, { headers: this.headers }),
      Se.get(`${this.baseUrl}/grids/game/${t}?dimensions=920x430,460x215`, { headers: this.headers }),
      Se.get(`${this.baseUrl}/heroes/game/${t}`, { headers: this.headers }),
      Se.get(`${this.baseUrl}/logos/game/${t}`, { headers: this.headers }),
      Se.get(`${this.baseUrl}/icons/game/${t}`, { headers: this.headers })
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
    return n === "grid" ? (r = "grids", a = "?dimensions=600x900,342x482") : n === "gridHorizontal" ? (r = "grids", a = "?dimensions=920x430,460x215") : n === "hero" ? r = "heroes" : n === "logo" ? r = "logos" : n === "icon" && (r = "icons"), (await Se.get(`${this.baseUrl}/${r}/game/${t}${a}`, { headers: this.headers })).data.data.map((i) => i.url);
  }
  async downloadImage(t, n) {
    const r = await Se({
      url: t,
      method: "GET",
      responseType: "arraybuffer"
    });
    await Te.writeFile(n, r.data);
  }
}
async function Jv() {
  const e = [
    se.join(ot.homedir(), ".steam/steam"),
    se.join(ot.homedir(), ".local/share/Steam"),
    se.join(ot.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam")
  ];
  for (const t of e)
    if (Ae(se.join(t, "config", "config.vdf"))) return t;
  return e[0];
}
async function QC(e, t) {
  if (!t || t === "Nenhum") return;
  const n = await Jv(), r = se.join(n, "config/config.vdf"), a = `${r}.bak`;
  if (!Ae(r)) return;
  await Te.copyFile(r, a);
  const s = await Te.readFile(r, "utf-8"), i = Wv(s);
  i.InstallConfigStore || (i.InstallConfigStore = {}), i.InstallConfigStore.Software || (i.InstallConfigStore.Software = {}), i.InstallConfigStore.Software.Valve || (i.InstallConfigStore.Software.Valve = {}), i.InstallConfigStore.Software.Valve.Steam || (i.InstallConfigStore.Software.Valve.Steam = {}), i.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping || (i.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping = {}), i.InstallConfigStore.Software.Valve.Steam.CompatibilityMapping[e.toString()] = {
    name: t,
    config: "",
    priority: "250"
  };
  const o = ZC(i, !0);
  await Te.writeFile(r, o);
}
async function Vr(e, t, n) {
  if (e.startsWith("http"))
    await n.downloadImage(e, t);
  else {
    const r = e.replace("steam-asset://", "");
    Ae(r) && r !== t && await Te.copyFile(r, t);
  }
}
async function e2(e) {
  const { exePath: t, gameName: n, sgdbApiKey: r, launchOptions: a, protonVersion: s, customArt: i, oldAppName: o } = e, c = await Jv(), u = se.join(c, "userdata"), p = (await Ar()).steam32Id;
  if (!p)
    throw new Error("Nenhum Perfil da Steam foi selecionado nas Configurações.");
  const m = se.join(u, p, "config/shortcuts.vdf"), f = se.join(u, p, "config/grid"), y = `\0${n}\0${t}`, v = (Du.str(y) | 2147483648) >>> 0;
  await Te.mkdir(f, { recursive: !0 });
  const g = new gs(r);
  let h = "";
  if (i)
    i.grid && await Vr(i.grid, se.join(f, `${v}p.png`), g), i.gridHorizontal && await Vr(i.gridHorizontal, se.join(f, `${v}.png`), g), i.hero && await Vr(i.hero, se.join(f, `${v}_hero.png`), g), i.logo && await Vr(i.logo, se.join(f, `${v}_logo.png`), g), i.icon && (h = se.join(f, `${v}_icon.png`), await Vr(i.icon, h, g));
  else {
    const C = await g.searchGame(n);
    if (C) {
      const ee = await g.getAssets(C.id);
      ee.grid && await g.downloadImage(ee.grid, se.join(f, `${v}p.png`)), ee.gridHorizontal && await g.downloadImage(ee.gridHorizontal, se.join(f, `${v}.png`)), ee.hero && await g.downloadImage(ee.hero, se.join(f, `${v}_hero.png`)), ee.logo && await g.downloadImage(ee.logo, se.join(f, `${v}_logo.png`)), ee.icon && (h = se.join(f, `${v}_icon.png`), await g.downloadImage(ee.icon, h));
    }
  }
  let _ = { shortcuts: {} };
  try {
    if (Ae(m)) {
      const C = await Te.readFile(m);
      _ = (mi || mt?.readVdf)(C);
    }
  } catch {
    console.log("Iniciando novo arquivo.");
  }
  const x = {
    appid: v,
    AppName: n,
    Exe: `"${t}"`,
    StartDir: `"${se.dirname(t)}/"`,
    icon: h,
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
  let j = 0;
  _.shortcuts && Object.keys(_.shortcuts).forEach((C) => {
    const ee = _.shortcuts[C], N = o || n;
    ee.AppName !== N && ee.appname !== N && (O[j++] = ee);
  }), O[j] = x, _.shortcuts = O;
  const J = (Fu || mt?.writeVdf)(_);
  try {
    const { execSync: C } = await import("child_process");
    C("steam -shutdown || flatpak run com.valvesoftware.Steam -shutdown || true"), C("sleep 2"), C("pkill -9 -x steam || killall -9 steam || pkill -9 -e ubuntu12_32/steam || flatpak kill com.valvesoftware.Steam || true");
  } catch {
  }
  return await Te.writeFile(m, J), s && await QC(v, s), { success: !0, appId: v };
}
async function hi() {
  const e = [
    se.join(ot.homedir(), ".steam/steam"),
    se.join(ot.homedir(), ".local/share/Steam"),
    se.join(ot.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam")
  ];
  for (const t of e)
    if (Ae(se.join(t, "config", "config.vdf"))) return t;
  return e[0];
}
async function t2() {
  const e = await hi(), t = se.join(e, "userdata");
  if (!Ae(t)) return [];
  const n = await Ar(), r = await Te.readdir(t), a = n.steam32Id || r.find((l) => l !== "0" && l !== "anonymous") || r[0];
  if (!a) return [];
  const s = se.join(t, a, "config/shortcuts.vdf"), i = se.join(t, a, "config/grid");
  if (!Ae(s)) return [];
  const o = se.join(e, "config/config.vdf");
  let c = {};
  try {
    if (Ae(o)) {
      const l = await Te.readFile(o, "utf-8");
      c = vr.parse(l);
    }
  } catch {
  }
  const u = c?.InstallConfigStore?.Software?.Valve?.Steam?.CompatibilityMapping || {};
  try {
    const l = await Te.readFile(s), f = (mi || mt?.readVdf)(l).shortcuts || {};
    return Object.values(f).map((v) => {
      const g = (v.Exe || v.exe || "").replace(/"/g, ""), h = `\0${v.AppName || v.appname}\0${g}`, _ = (Du.str(h) | 2147483648) >>> 0, x = u[_.toString()]?.name || "Nenhum";
      return {
        appId: _,
        name: v.AppName || v.appname,
        exe: v.Exe || v.exe,
        launchOptions: v.LaunchOptions || v.launchoptions || "",
        proton: x,
        art: {
          grid: Ae(se.join(i, `${_}p.png`)) ? `steam-asset://${se.join(i, `${_}p.png`)}` : null,
          gridHorizontal: Ae(se.join(i, `${_}.png`)) ? `steam-asset://${se.join(i, `${_}.png`)}` : null,
          hero: Ae(se.join(i, `${_}_hero.png`)) ? `steam-asset://${se.join(i, `${_}_hero.png`)}` : null,
          logo: Ae(se.join(i, `${_}_logo.png`)) ? `steam-asset://${se.join(i, `${_}_logo.png`)}` : null,
          icon: Ae(se.join(i, `${_}_icon.png`)) ? `steam-asset://${se.join(i, `${_}_icon.png`)}` : v.icon && Ae(v.icon) ? `steam-asset://${v.icon}` : null
        }
      };
    });
  } catch {
    return [];
  }
}
async function n2(e, t, n) {
  const r = await hi(), a = se.join(r, "userdata"), s = await Te.readdir(a), i = s.find((l) => l !== "0" && l !== "anonymous") || s[0], o = se.join(a, i, "config/grid");
  await Te.mkdir(o, { recursive: !0 });
  let c = "";
  t === "grid" ? c = `${e}p.png` : t === "gridHorizontal" ? c = `${e}.png` : t === "hero" ? c = `${e}_hero.png` : t === "logo" && (c = `${e}_logo.png`);
  const u = se.join(o, c);
  return await Te.copyFile(n, u), { success: !0, path: u };
}
async function r2(e) {
  const { getConfig: t } = await Promise.resolve().then(() => Jt), n = await t(), r = await hi(), a = se.join(r, "userdata"), s = await Te.readdir(a), i = n.steam32Id || s.find((_) => _ !== "0" && _ !== "anonymous") || s[0], o = se.join(a, i, "config/shortcuts.vdf"), c = se.join(a, i, "config/grid");
  if (!Ae(o)) return { success: !1, error: "Arquivo não encontrado." };
  const u = await Te.readFile(o), p = (mi || mt?.readVdf)(u), m = Number(e), f = {};
  let y = 0;
  p.shortcuts && Object.keys(p.shortcuts).forEach((_) => {
    const x = p.shortcuts[_], O = (x.Exe || x.exe || "").replace(/"/g, ""), j = `\0${x.AppName || x.appname}\0${O}`;
    (Du.str(j) | 2147483648) >>> 0 !== m && (f[y++] = x);
  }), p.shortcuts = f;
  const g = (Fu || mt?.writeVdf)(p);
  try {
    const { execSync: _ } = await import("child_process");
    _("pkill -9 steam || flatpak kill com.valvesoftware.Steam || true");
  } catch {
  }
  await Te.writeFile(o, g);
  const h = [
    se.join(c, `${e}p.png`),
    se.join(c, `${e}.png`),
    se.join(c, `${e}_hero.png`),
    se.join(c, `${e}_logo.png`),
    se.join(c, `${e}_icon.png`)
  ];
  for (const _ of h)
    Ae(_) && await Te.unlink(_);
  return { success: !0 };
}
async function a2() {
  const e = await hi(), t = se.join(e, "compatibilitytools.d"), n = /* @__PURE__ */ new Map([
    ["Nenhum", "Nenhum"],
    ["proton_experimental", "Proton Experimental"]
  ]), r = [e];
  try {
    const i = se.join(e, "steamapps/libraryfolders.vdf");
    if (Ae(i)) {
      const o = await Te.readFile(i, "utf-8"), u = vr.parse(o).libraryfolders || {};
      Object.values(u).forEach((l) => {
        l.path && typeof l.path == "string" && r.push(l.path);
      });
    }
  } catch (i) {
    console.error("Erro ao ler libraryfolders.vdf:", i);
  }
  for (const i of r)
    try {
      const o = se.join(i, "steamapps/common");
      if (Ae(o)) {
        const c = await Te.readdir(o);
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
      if (Ae(i)) {
        const o = await Te.readdir(i);
        for (const c of o) {
          const u = se.join(i, c, "compatibilitytool.vdf");
          let l = c, p = c;
          if (Ae(u)) {
            const m = await Te.readFile(u, "utf-8"), f = vr.parse(m);
            f?.compatibilitytools?.compat_tools && (l = Object.keys(f.compatibilitytools.compat_tools)[0], p = f.compatibilitytools.compat_tools[l]?.display_name || c);
          }
          n.set(l, p);
        }
      }
    } catch {
    }
  };
  await a(t);
  const s = se.join(ot.homedir(), ".local/share/Steam/compatibilitytools.d");
  return s !== t && await a(s), Array.from(n.entries()).map(([i, o]) => ({ value: i, label: o }));
}
async function Xv(e, t) {
  try {
    const n = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${t}&appid=${e}`, r = await Se.get(n);
    return r.data && r.data.game && r.data.game.availableGameStats && r.data.game.availableGameStats.achievements ? r.data.game.availableGameStats.achievements : [];
  } catch (n) {
    return console.error(`Erro ao buscar conquistas da Steam para AppID ${e}:`, n), [];
  }
}
async function s2() {
  const e = [
    ce.join(fn.homedir(), ".steam/steam"),
    ce.join(fn.homedir(), ".local/share/Steam"),
    ce.join(fn.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam")
  ];
  for (const t of e)
    if (dc(t)) return t;
  return e[0];
}
async function i2() {
  const e = await s2(), t = [e];
  try {
    const n = ce.join(e, "steamapps/libraryfolders.vdf");
    if (dc(n)) {
      const r = await Lf.readFile(n, "utf-8"), s = vr.parse(r).libraryfolders || {};
      Object.values(s).forEach((i) => {
        i.path && typeof i.path == "string" && t.push(i.path);
      });
    }
  } catch (n) {
    console.error("Erro ao ler libraryfolders.vdf no goldbergParser:", n);
  }
  return t;
}
async function o2(e, t, n) {
  const r = [];
  if (n && r.push(n), t) {
    const i = ce.dirname(t);
    r.push(
      ce.join(i, "Goldberg SteamEmu Saves", e, "achievements.json"),
      ce.join(i, "steam_settings", "saves", e, "achievements.json")
      // Another common pattern
    );
  }
  r.push(
    ce.join(fn.homedir(), ".config/Goldberg SteamEmu Saves", e, "achievements.json"),
    ce.join(fn.homedir(), ".local/share/Goldberg SteamEmu Saves", e, "achievements.json"),
    ce.join(fn.homedir(), ".config/GSE", e, "achievements.json")
  );
  const a = await i2();
  for (const i of a) {
    const o = ce.join(i, "steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves", e, "achievements.json");
    r.push(o);
  }
  let s = "";
  for (const i of r)
    if (dc(i)) {
      s = i;
      break;
    }
  if (!s)
    return [];
  try {
    const i = await Lf.readFile(s, "utf-8"), o = JSON.parse(i), c = [];
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
async function c2(e, t, n, r) {
  const a = await o2(e, n, r);
  if (!t)
    throw new Error("Steam Web API Key não configurada.");
  let s = e;
  const { getRealAppIdCache: i } = await Promise.resolve().then(() => Jt), o = await i(e);
  if (o)
    s = o;
  else if (r) {
    const u = ce.basename(ce.dirname(r));
    /^\d+$/.test(u) && (s = u);
  }
  const c = await Xv(s, t);
  return !c || c.length === 0 ? [] : c.map((u) => {
    const l = a.includes(u.name);
    return {
      ...u,
      unlocked: l,
      currentIcon: l ? u.icon : u.icongray
    };
  });
}
async function l2(e) {
  try {
    return (await Se.get("https://www.steamgriddb.com/api/v2/games/id/1", {
      headers: {
        Authorization: `Bearer ${e}`
      }
    })).status === 200 ? { valid: !0 } : { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}
async function u2(e) {
  try {
    const t = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${e}&appid=440`;
    return (await Se.get(t)).status === 200 ? { valid: !0 } : { valid: !1 };
  } catch (t) {
    return t.response && (t.response.status === 401 || t.response.status === 403) ? { valid: !1 } : { valid: !1 };
  }
}
async function p2() {
  const e = [
    se.join(ot.homedir(), ".steam/steam/config/loginusers.vdf"),
    se.join(ot.homedir(), ".local/share/Steam/config/loginusers.vdf")
  ], t = se.join(ot.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/config/loginusers.vdf");
  let n = "", r = "none";
  for (const a of e)
    if (Ae(a)) {
      n = a, r = "native";
      break;
    }
  if (!n && Ae(t) && (n = t, r = "flatpak"), !n)
    return { users: [], installType: "none" };
  try {
    const a = await Te.readFile(n, "utf-8"), s = Wv(a);
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
async function oc(e, t, n) {
  if (t > n) return null;
  try {
    const r = await Te.readdir(e, { withFileTypes: !0 });
    for (const a of r) {
      const s = se.join(e, a.name);
      if (a.isDirectory()) {
        const i = await oc(s, t + 1, n);
        if (i) return i;
      } else if (a.isFile() && a.name.toLowerCase() === "achievements.json" && s.includes("Goldberg SteamEmu Saves"))
        return s;
    }
  } catch {
  }
  return null;
}
async function d2(e) {
  const t = await Lv(e);
  if (t && Ae(t))
    return t;
  const n = [
    se.join(ot.homedir(), ".steam/steam/steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves"),
    se.join(ot.homedir(), ".local/share/Steam/steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves"),
    se.join(ot.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/compatdata", e, "pfx/drive_c/users/steamuser/AppData/Roaming/Goldberg SteamEmu Saves")
  ];
  for (const r of n)
    if (Ae(r)) {
      const a = await oc(r, 0, 3);
      if (a)
        return await sc(e, a), a;
    } else {
      const a = r.replace("Goldberg SteamEmu Saves", "");
      if (Ae(a)) {
        const s = await oc(a, 0, 4);
        if (s)
          return await sc(e, s), s;
      }
    }
  return null;
}
const bt = {
  FILE_TYPE: "files",
  DIR_TYPE: "directories",
  FILE_DIR_TYPE: "files_directories",
  EVERYTHING_TYPE: "all"
}, cc = {
  root: ".",
  fileFilter: (e) => !0,
  directoryFilter: (e) => !0,
  type: bt.FILE_TYPE,
  lstat: !1,
  depth: 2147483648,
  alwaysStat: !1,
  highWaterMark: 4096
};
Object.freeze(cc);
const Yv = "READDIRP_RECURSIVE_ERROR", f2 = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", Yv]), Ef = [
  bt.DIR_TYPE,
  bt.EVERYTHING_TYPE,
  bt.FILE_DIR_TYPE,
  bt.FILE_TYPE
], m2 = /* @__PURE__ */ new Set([
  bt.DIR_TYPE,
  bt.EVERYTHING_TYPE,
  bt.FILE_DIR_TYPE
]), h2 = /* @__PURE__ */ new Set([
  bt.EVERYTHING_TYPE,
  bt.FILE_DIR_TYPE,
  bt.FILE_TYPE
]), v2 = (e) => f2.has(e.code), y2 = process.platform === "win32", Sf = (e) => !0, Pf = (e) => {
  if (e === void 0)
    return Sf;
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
  return Sf;
};
class g2 extends Oy {
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
    const n = { ...cc, ...t }, { root: r, type: a } = n;
    this._fileFilter = Pf(n.fileFilter), this._directoryFilter = Pf(n.directoryFilter);
    const s = n.lstat ? Po : qs;
    y2 ? this._stat = (i) => s(i, { bigint: !0 }) : this._stat = s, this._maxDepth = n.depth != null && Number.isSafeInteger(n.depth) ? n.depth : cc.depth, this._wantsDir = a ? m2.has(a) : !1, this._wantsFile = a ? h2.has(a) : !1, this._wantsEverything = a === bt.EVERYTHING_TYPE, this._root = zu(r), this._isDirent = !n.alwaysStat, this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent }, this.parents = [this._exploreDir(r, 1)], this.reading = !1, this.parent = void 0;
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
      r = await Mf(t, this._rdOptions);
    } catch (a) {
      this._onError(a);
    }
    return { files: r, depth: n, path: t };
  }
  async _formatEntry(t, n) {
    let r;
    const a = this._isDirent ? t.name : t;
    try {
      const s = zu(_y(n, a));
      r = { path: $y(this._root, s), fullPath: s, basename: a }, r[this._statsProp] = this._isDirent ? t : await this._stat(s);
    } catch (s) {
      this._onError(s);
      return;
    }
    return r;
  }
  _onError(t) {
    v2(t) && !this.destroyed ? this.emit("warn", t) : this.destroy(t);
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
        const a = await es(r), s = await Po(a);
        if (s.isFile())
          return "file";
        if (s.isDirectory()) {
          const i = a.length;
          if (r.startsWith(a) && r.substr(i, 1) === wy) {
            const o = new Error(`Circular symlink detected: "${r}" points to "${a}"`);
            return o.code = Yv, this._onError(o);
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
function b2(e, t = {}) {
  let n = t.entryType || t.type;
  if (n === "both" && (n = bt.FILE_DIR_TYPE), n && (t.type = n), e) {
    if (typeof e != "string")
      throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
    if (n && !Ef.includes(n))
      throw new Error(`readdirp: Invalid type passed. Use one of ${Ef.join(", ")}`);
  } else throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
  return t.root = e, new g2(t);
}
const _2 = "data", Zv = "end", $2 = "close", Lu = () => {
}, vi = process.platform, Qv = vi === "win32", w2 = vi === "darwin", x2 = vi === "linux", E2 = vi === "freebsd", S2 = Py() === "OS400", Fe = {
  ALL: "all",
  READY: "ready",
  ADD: "add",
  CHANGE: "change",
  ADD_DIR: "addDir",
  UNLINK: "unlink",
  UNLINK_DIR: "unlinkDir",
  RAW: "raw",
  ERROR: "error"
}, At = Fe, P2 = "watch", R2 = { lstat: Po, stat: qs }, Tn = "listeners", bs = "errHandlers", or = "rawEmitters", O2 = [Tn, bs, or], A2 = /* @__PURE__ */ new Set([
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
]), T2 = (e) => A2.has(ue.extname(e).slice(1).toLowerCase()), lc = (e, t) => {
  e instanceof Set ? e.forEach(t) : t(e);
}, ra = (e, t, n) => {
  let r = e[t];
  r instanceof Set || (e[t] = r = /* @__PURE__ */ new Set([r])), r.add(n);
}, j2 = (e) => (t) => {
  const n = e[t];
  n instanceof Set ? n.clear() : delete e[t];
}, aa = (e, t, n) => {
  const r = e[t];
  r instanceof Set ? r.delete(n) : r === n && delete e[t];
}, ey = (e) => e instanceof Set ? e.size === 0 : !e, _s = /* @__PURE__ */ new Map();
function Rf(e, t, n, r, a) {
  const s = (i, o) => {
    n(e), a(i, o, { watchedPath: e }), o && e !== o && $s(ue.resolve(e, o), Tn, ue.join(e, o));
  };
  try {
    return Ey(e, {
      persistent: t.persistent
    }, s);
  } catch (i) {
    r(i);
    return;
  }
}
const $s = (e, t, n, r, a) => {
  const s = _s.get(e);
  s && lc(s[t], (i) => {
    i(n, r, a);
  });
}, k2 = (e, t, n, r) => {
  const { listener: a, errHandler: s, rawEmitter: i } = r;
  let o = _s.get(t), c;
  if (!n.persistent)
    return c = Rf(e, n, a, s, i), c ? c.close.bind(c) : void 0;
  if (o)
    ra(o, Tn, a), ra(o, bs, s), ra(o, or, i);
  else {
    if (c = Rf(
      e,
      n,
      $s.bind(null, t, Tn),
      s,
      // no need to use broadcast here
      $s.bind(null, t, or)
    ), !c)
      return;
    c.on(At.ERROR, async (u) => {
      const l = $s.bind(null, t, bs);
      if (o && (o.watcherUnusable = !0), Qv && u.code === "EPERM")
        try {
          await (await Ay(e, "r")).close(), l(u);
        } catch {
        }
      else
        l(u);
    }), o = {
      listeners: a,
      errHandlers: s,
      rawEmitters: i,
      watcher: c
    }, _s.set(t, o);
  }
  return () => {
    aa(o, Tn, a), aa(o, bs, s), aa(o, or, i), ey(o.listeners) && (o.watcher.close(), _s.delete(t), O2.forEach(j2(o)), o.watcher = void 0, Object.freeze(o));
  };
}, wo = /* @__PURE__ */ new Map(), N2 = (e, t, n, r) => {
  const { listener: a, rawEmitter: s } = r;
  let i = wo.get(t);
  const o = i && i.options;
  return o && (o.persistent < n.persistent || o.interval > n.interval) && (Vu(t), i = void 0), i ? (ra(i, Tn, a), ra(i, or, s)) : (i = {
    listeners: a,
    rawEmitters: s,
    options: n,
    watcher: xy(t, n, (c, u) => {
      lc(i.rawEmitters, (p) => {
        p(At.CHANGE, t, { curr: c, prev: u });
      });
      const l = c.mtimeMs;
      (c.size !== u.size || l > u.mtimeMs || l === 0) && lc(i.listeners, (p) => p(e, c));
    })
  }, wo.set(t, i)), () => {
    aa(i, Tn, a), aa(i, or, s), ey(i.listeners) && (wo.delete(t), Vu(t), i.options = i.watcher = void 0, Object.freeze(i));
  };
};
class I2 {
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
    const r = this.fsw.options, a = ue.dirname(t), s = ue.basename(t);
    this.fsw._getWatchedDir(a).add(s);
    const o = ue.resolve(t), c = {
      persistent: r.persistent
    };
    n || (n = Lu);
    let u;
    if (r.usePolling) {
      const l = r.interval !== r.binaryInterval;
      c.interval = l && T2(s) ? r.binaryInterval : r.interval, u = N2(t, o, c, {
        listener: n,
        rawEmitter: this.fsw._emitRaw
      });
    } else
      u = k2(t, o, c, {
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
    const a = ue.dirname(t), s = ue.basename(t), i = this.fsw._getWatchedDir(a);
    let o = n;
    if (i.has(s))
      return;
    const c = async (l, p) => {
      if (this.fsw._throttle(P2, t, 5)) {
        if (!p || p.mtimeMs === 0)
          try {
            const m = await qs(t);
            if (this.fsw.closed)
              return;
            const f = m.atimeMs, y = m.mtimeMs;
            if ((!f || f <= y || y !== o.mtimeMs) && this.fsw._emit(At.CHANGE, t, m), (w2 || x2 || E2) && o.ino !== m.ino) {
              this.fsw._closeFile(l), o = m;
              const v = this._watchWithNodeFs(t, c);
              v && this.fsw._addPathCloser(l, v);
            } else
              o = m;
          } catch {
            this.fsw._remove(a, s);
          }
        else if (i.has(s)) {
          const m = p.atimeMs, f = p.mtimeMs;
          (!m || m <= f || f !== o.mtimeMs) && this.fsw._emit(At.CHANGE, t, p), o = p;
        }
      }
    }, u = this._watchWithNodeFs(t, c);
    if (!(r && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(t)) {
      if (!this.fsw._throttle(At.ADD, t, 0))
        return;
      this.fsw._emit(At.ADD, t, n);
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
        o = await es(r);
      } catch {
        return this.fsw._emitReady(), !0;
      }
      return this.fsw.closed ? void 0 : (i.has(a) ? this.fsw._symlinkPaths.get(s) !== o && (this.fsw._symlinkPaths.set(s, o), this.fsw._emit(At.CHANGE, r, t.stats)) : (i.add(a), this.fsw._symlinkPaths.set(s, o), this.fsw._emit(At.ADD, r, t.stats)), this.fsw._emitReady(), !0);
    }
    if (this.fsw._symlinkPaths.has(s))
      return !0;
    this.fsw._symlinkPaths.set(s, !0);
  }
  _handleRead(t, n, r, a, s, i, o) {
    t = ue.join(t, "");
    const c = a ? `${t}:${a}` : t;
    if (o = this.fsw._throttle("readdir", c, 1e3), !o)
      return;
    const u = this.fsw._getWatchedDir(r.path), l = /* @__PURE__ */ new Set();
    let p = this.fsw._readdirp(t, {
      fileFilter: (m) => r.filterPath(m),
      directoryFilter: (m) => r.filterDir(m)
    });
    if (p)
      return p.on(_2, async (m) => {
        if (this.fsw.closed) {
          p = void 0;
          return;
        }
        const f = m.path;
        let y = ue.join(t, f);
        if (l.add(f), !(m.stats.isSymbolicLink() && await this._handleSymlink(m, t, y, f))) {
          if (this.fsw.closed) {
            p = void 0;
            return;
          }
          (f === a || !a && !u.has(f)) && (this.fsw._incrReadyCount(), y = ue.join(s, ue.relative(s, y)), this._addToNodeFs(y, n, r, i + 1));
        }
      }).on(At.ERROR, this._boundHandleError), new Promise((m, f) => {
        if (!p)
          return f();
        p.once(Zv, () => {
          if (this.fsw.closed) {
            p = void 0;
            return;
          }
          const y = o ? o.clear() : !1;
          m(void 0), u.getChildren().filter((v) => v !== t && !l.has(v)).forEach((v) => {
            this.fsw._remove(t, v);
          }), p = void 0, y && this._handleRead(t, !1, r, a, s, i, o);
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
    const c = this.fsw._getWatchedDir(ue.dirname(t)), u = c.has(ue.basename(t));
    !(r && this.fsw.options.ignoreInitial) && !s && !u && this.fsw._emit(At.ADD_DIR, t, n), c.add(ue.basename(t)), this.fsw._getWatchedDir(t);
    let l, p;
    const m = this.fsw.options.depth;
    if ((m == null || a <= m) && !this.fsw._symlinkPaths.has(o)) {
      if (!s && (await this._handleRead(t, r, i, s, t, a, l), this.fsw.closed))
        return;
      p = this._watchWithNodeFs(t, (f, y) => {
        y && y.mtimeMs === 0 || this._handleRead(f, !1, i, s, t, a, l);
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
      const c = await R2[o.statMethod](o.watchPath);
      if (this.fsw.closed)
        return;
      if (this.fsw._isIgnored(o.watchPath, c))
        return i(), !1;
      const u = this.fsw.options.followSymlinks;
      let l;
      if (c.isDirectory()) {
        const p = ue.resolve(t), m = u ? await es(t) : t;
        if (this.fsw.closed || (l = await this._handleDir(o.watchPath, c, n, a, s, o, m), this.fsw.closed))
          return;
        p !== m && m !== void 0 && this.fsw._symlinkPaths.set(p, m);
      } else if (c.isSymbolicLink()) {
        const p = u ? await es(t) : t;
        if (this.fsw.closed)
          return;
        const m = ue.dirname(o.watchPath);
        if (this.fsw._getWatchedDir(m).add(o.watchPath), this.fsw._emit(At.ADD, o.watchPath, c), l = await this._handleDir(m, c, n, a, t, o, p), this.fsw.closed)
          return;
        p !== void 0 && this.fsw._symlinkPaths.set(ue.resolve(t), p);
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
const xo = "/", C2 = "//", ty = ".", D2 = "..", F2 = "string", L2 = /\\/g, ny = /\/\//g, M2 = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, U2 = /^\.[/\\]/;
function Ls(e) {
  return Array.isArray(e) ? e : [e];
}
const Eo = (e) => typeof e == "object" && e !== null && !(e instanceof RegExp);
function z2(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => e === t : e instanceof RegExp ? (t) => e.test(t) : typeof e == "object" && e !== null ? (t) => {
    if (e.path === t)
      return !0;
    if (e.recursive) {
      const n = ue.relative(e.path, t);
      return n ? !n.startsWith("..") && !ue.isAbsolute(n) : !1;
    }
    return !1;
  } : () => !1;
}
function q2(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  e = ue.normalize(e), e = e.replace(/\\/g, "/");
  let t = !1;
  return e.startsWith("//") && (t = !0), e = e.replace(ny, "/"), t && (e = "/" + e), e;
}
function V2(e, t, n) {
  const r = q2(t);
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (s(r, n))
      return !0;
  }
  return !1;
}
function B2(e, t) {
  if (e == null)
    throw new TypeError("anymatch: specify first argument");
  const r = Ls(e).map((a) => z2(a));
  return (a, s) => V2(r, a, s);
}
const Of = (e) => {
  const t = Ls(e).flat();
  if (!t.every((n) => typeof n === F2))
    throw new TypeError(`Non-string provided as watch path: ${t}`);
  return t.map(ry);
}, Af = (e) => {
  let t = e.replace(L2, xo), n = !1;
  return t.startsWith(C2) && (n = !0), t = t.replace(ny, xo), n && (t = xo + t), t;
}, ry = (e) => Af(ue.normalize(Af(e))), Tf = (e = "") => (t) => typeof t == "string" ? ry(ue.isAbsolute(t) ? t : ue.join(e, t)) : t, H2 = (e, t) => ue.isAbsolute(e) ? e : ue.join(t, e), G2 = Object.freeze(/* @__PURE__ */ new Set());
class K2 {
  path;
  _removeWatcher;
  items;
  constructor(t, n) {
    this.path = t, this._removeWatcher = n, this.items = /* @__PURE__ */ new Set();
  }
  add(t) {
    const { items: n } = this;
    n && t !== ty && t !== D2 && n.add(t);
  }
  async remove(t) {
    const { items: n } = this;
    if (!n || (n.delete(t), n.size > 0))
      return;
    const r = this.path;
    try {
      await Mf(r);
    } catch {
      this._removeWatcher && this._removeWatcher(ue.dirname(r), ue.basename(r));
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
    this.items.clear(), this.path = "", this._removeWatcher = Lu, this.items = G2, Object.freeze(this);
  }
}
const W2 = "stat", J2 = "lstat";
class X2 {
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
    this.path = t = t.replace(U2, ""), this.watchPath = a, this.fullWatchPath = ue.resolve(a), this.dirParts = [], this.dirParts.forEach((s) => {
      s.length > 1 && s.pop();
    }), this.followSymlinks = n, this.statMethod = n ? W2 : J2;
  }
  entryPath(t) {
    return ue.join(this.watchPath, ue.relative(this.watchPath, t.fullPath));
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
class ay extends Ry {
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
      ignored: t.ignored ? Ls(t.ignored) : Ls([]),
      awaitWriteFinish: n === !0 ? r : typeof n == "object" ? { ...r, ...n } : !1
    };
    S2 && (a.usePolling = !0), a.atomic === void 0 && (a.atomic = !a.usePolling);
    const s = process.env.CHOKIDAR_USEPOLLING;
    if (s !== void 0) {
      const c = s.toLowerCase();
      c === "false" || c === "0" ? a.usePolling = !1 : c === "true" || c === "1" ? a.usePolling = !0 : a.usePolling = !!c;
    }
    const i = process.env.CHOKIDAR_INTERVAL;
    i && (a.interval = Number.parseInt(i, 10));
    let o = 0;
    this._emitReady = () => {
      o++, o >= this._readyCount && (this._emitReady = Lu, this._readyEmitted = !0, process.nextTick(() => this.emit(Fe.READY)));
    }, this._emitRaw = (...c) => this.emit(Fe.RAW, ...c), this._boundRemove = this._remove.bind(this), this.options = a, this._nodeFsHandler = new I2(this), Object.freeze(a);
  }
  _addIgnoredPath(t) {
    if (Eo(t)) {
      for (const n of this._ignoredPaths)
        if (Eo(n) && n.path === t.path && n.recursive === t.recursive)
          return;
    }
    this._ignoredPaths.add(t);
  }
  _removeIgnoredPath(t) {
    if (this._ignoredPaths.delete(t), typeof t == "string")
      for (const n of this._ignoredPaths)
        Eo(n) && n.path === t && this._ignoredPaths.delete(n);
  }
  // Public methods
  /**
   * Adds paths to be watched on an existing FSWatcher instance.
   * @param paths_ file or file list. Other arguments are unused
   */
  add(t, n, r) {
    const { cwd: a } = this.options;
    this.closed = !1, this._closePromise = void 0;
    let s = Of(t);
    return a && (s = s.map((i) => H2(i, a))), s.forEach((i) => {
      this._removeIgnoredPath(i);
    }), this._userIgnored = void 0, this._readyCount || (this._readyCount = 0), this._readyCount += s.length, Promise.all(s.map(async (i) => {
      const o = await this._nodeFsHandler._addToNodeFs(i, !r, void 0, 0, n);
      return o && this._emitReady(), o;
    })).then((i) => {
      this.closed || i.forEach((o) => {
        o && this.add(ue.dirname(o), ue.basename(n || o));
      });
    }), this;
  }
  /**
   * Close watchers or start ignoring events from specified paths.
   */
  unwatch(t) {
    if (this.closed)
      return this;
    const n = Of(t), { cwd: r } = this.options;
    return n.forEach((a) => {
      !ue.isAbsolute(a) && !this._closers.has(a) && (r && (a = ue.join(r, a)), a = ue.resolve(a)), this._closePath(a), this._addIgnoredPath(a), this._watched.has(a) && this._addIgnoredPath({
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
      const s = (this.options.cwd ? ue.relative(this.options.cwd, r) : r) || ty;
      t[s] = n.getChildren().sort();
    }), t;
  }
  emitWithAll(t, n) {
    this.emit(t, ...n), t !== Fe.ERROR && this.emit(Fe.ALL, t, ...n);
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
    Qv && (n = ue.normalize(n)), a.cwd && (n = ue.relative(a.cwd, n));
    const s = [n];
    r != null && s.push(r);
    const i = a.awaitWriteFinish;
    let o;
    if (i && (o = this._pendingWrites.get(n)))
      return o.lastChange = /* @__PURE__ */ new Date(), this;
    if (a.atomic) {
      if (t === Fe.UNLINK)
        return this._pendingUnlinks.set(n, [t, ...s]), setTimeout(() => {
          this._pendingUnlinks.forEach((c, u) => {
            this.emit(...c), this.emit(Fe.ALL, ...c), this._pendingUnlinks.delete(u);
          });
        }, typeof a.atomic == "number" ? a.atomic : 100), this;
      t === Fe.ADD && this._pendingUnlinks.has(n) && (t = Fe.CHANGE, this._pendingUnlinks.delete(n));
    }
    if (i && (t === Fe.ADD || t === Fe.CHANGE) && this._readyEmitted) {
      const c = (u, l) => {
        u ? (t = Fe.ERROR, s[0] = u, this.emitWithAll(t, s)) : l && (s.length > 1 ? s[1] = l : s.push(l), this.emitWithAll(t, s));
      };
      return this._awaitWriteFinish(n, i.stabilityThreshold, t, c), this;
    }
    if (t === Fe.CHANGE && !this._throttle(Fe.CHANGE, n, 50))
      return this;
    if (a.alwaysStat && r === void 0 && (t === Fe.ADD || t === Fe.ADD_DIR || t === Fe.CHANGE)) {
      const c = a.cwd ? ue.join(a.cwd, n) : n;
      let u;
      try {
        u = await qs(c);
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
    return t && n !== "ENOENT" && n !== "ENOTDIR" && (!this.options.ignorePermissionErrors || n !== "EPERM" && n !== "EACCES") && this.emit(Fe.ERROR, t), t || this.closed;
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
    this.options.cwd && !ue.isAbsolute(t) && (c = ue.join(this.options.cwd, t));
    const u = /* @__PURE__ */ new Date(), l = this._pendingWrites;
    function p(m) {
      Sy(c, (f, y) => {
        if (f || !l.has(t)) {
          f && f.code !== "ENOENT" && a(f);
          return;
        }
        const v = Number(/* @__PURE__ */ new Date());
        m && y.size !== m.size && (l.get(t).lastChange = v);
        const g = l.get(t);
        v - g.lastChange >= n ? (l.delete(t), a(void 0, y)) : o = setTimeout(p, i, y);
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
    if (this.options.atomic && M2.test(t))
      return !0;
    if (!this._userIgnored) {
      const { cwd: r } = this.options, s = (this.options.ignored || []).map(Tf(r)), o = [...[...this._ignoredPaths].map(Tf(r)), ...s];
      this._userIgnored = B2(o);
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
    return new X2(t, this.options.followSymlinks, this);
  }
  // Directory helpers
  // -----------------
  /**
   * Provides directory tracking objects
   * @param directory path of the directory
   */
  _getWatchedDir(t) {
    const n = ue.resolve(t);
    return this._watched.has(n) || this._watched.set(n, new K2(n, this._boundRemove)), this._watched.get(n);
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
    const a = ue.join(t, n), s = ue.resolve(a);
    if (r = r ?? (this._watched.has(a) || this._watched.has(s)), !this._throttle("remove", a, 100))
      return;
    !r && this._watched.size === 1 && this.add(t, n, !0), this._getWatchedDir(a).getChildren().forEach((m) => this._remove(a, m));
    const c = this._getWatchedDir(t), u = c.has(n);
    c.remove(n), this._symlinkPaths.has(s) && this._symlinkPaths.delete(s);
    let l = a;
    if (this.options.cwd && (l = ue.relative(this.options.cwd, a)), this.options.awaitWriteFinish && this._pendingWrites.has(l) && this._pendingWrites.get(l).cancelWait() === Fe.ADD)
      return;
    this._watched.delete(a), this._watched.delete(s);
    const p = r ? Fe.UNLINK_DIR : Fe.UNLINK;
    u && !this._isIgnored(a) && this._emit(p, a), this._closePath(a);
  }
  /**
   * Closes all watchers for a path
   */
  _closePath(t) {
    this._closeFile(t);
    const n = ue.dirname(t);
    this._getWatchedDir(n).remove(ue.basename(t));
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
    const r = { type: Fe.ALL, alwaysStat: !0, lstat: !0, ...n, depth: 0 };
    let a = b2(t, r);
    return this._streams.add(a), a.once($2, () => {
      a = void 0;
    }), a.once(Zv, () => {
      a && (this._streams.delete(a), a = void 0);
    }), a;
  }
}
function Y2(e, t = {}) {
  const n = new ay(t);
  return n.add(e), n;
}
const Z2 = { watch: Y2, FSWatcher: ay }, Za = {}, So = {};
function jf(e) {
  try {
    if (!Ae(e)) return [];
    const t = hy(e, "utf-8");
    if (!t.trim()) return [];
    const n = JSON.parse(t);
    return Array.isArray(n) ? n.map(String) : typeof n == "object" && n !== null ? Object.keys(n) : [];
  } catch (t) {
    return console.error(`[AchievementWatcher] Erro ao ler arquivo ${e}:`, t), [];
  }
}
async function Q2() {
  console.log("[AchievementWatcher] Inicializando observador de conquistas...");
  try {
    const t = (await Ar()).goldbergCache || {};
    for (const [n, r] of Object.entries(t))
      eD(n, r);
  } catch (e) {
    console.error("[AchievementWatcher] Erro ao inicializar watchers:", e);
  }
}
function eD(e, t) {
  So[e] && So[e].close(), Za[e] = jf(t), console.log(`[AchievementWatcher] Monitorando AppID ${e} em ${t} (${Za[e].length} conquistas)`);
  const n = Z2.watch(t, {
    persistent: !0,
    awaitWriteFinish: {
      stabilityThreshold: 500,
      pollInterval: 100
    }
  });
  n.on("change", async (r) => {
    try {
      const a = jf(r), s = Za[e] || [], i = a.filter((o) => !s.includes(o));
      if (i.length > 0) {
        console.log(`[AchievementWatcher] Novas conquistas detectadas para AppID ${e}:`, i), Za[e] = a;
        for (const o of i)
          await tD(e, o);
      }
    } catch (a) {
      console.error(`[AchievementWatcher] Erro no evento change para ${e}:`, a);
    }
  }), n.on("error", (r) => {
    console.error(`[AchievementWatcher] Erro no watcher para ${e}:`, r);
  }), So[e] = n;
}
async function tD(e, t) {
  let n = "🏆 Conquista Desbloqueada!", r = `ID: ${t}`, a;
  try {
    const i = (await Ar()).steamApiKey;
    if (i) {
      const c = (await Xv(e, i)).find((u) => u.name === t);
      c && (r = c.displayName, c.icon && (a = await nD(c.icon, e, t)));
    } else
      console.warn("[AchievementWatcher] Steam API Key não configurada. Mostrando notificação genérica.");
  } catch (s) {
    console.error(`[AchievementWatcher] Erro ao buscar dados da conquista ${t}:`, s);
  }
  Mu.isSupported() ? new Mu({
    title: n,
    body: r,
    icon: a,
    silent: !1
    // Tocar som padrão do sistema
  }).show() : console.warn("[AchievementWatcher] Notificações não são suportadas neste sistema.");
}
async function nD(e, t, n) {
  try {
    const r = se.join(ot.tmpdir(), "non-steam-automation-achievements");
    await Te.mkdir(r, { recursive: !0 });
    const a = `${t}_${n}.jpg`, s = se.join(r, a);
    if (Ae(s))
      return s;
    const i = await Se.get(e, { responseType: "arraybuffer" });
    return await Te.writeFile(s, Buffer.from(i.data)), s;
  } catch (r) {
    console.error(`[AchievementWatcher] Erro ao baixar ícone de ${e}:`, r);
    return;
  }
}
Tt.setName("NonSteamAutomation");
process.platform === "linux" && (Tt.setDesktopName("nonsteamautomation.desktop"), Tt.setAppUserModelId("com.marcus.nonsteamauto"), Tt.commandLine.appendSwitch("disable-gpu-vsync"));
const sy = ce.dirname(Ff(import.meta.url));
process.env.APP_ROOT = ce.join(sy, "..");
const uc = process.env.VITE_DEV_SERVER_URL, iy = ce.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = uc ? ce.join(process.env.APP_ROOT, "public") : iy;
let Ge = null, Qa = null, oy = !1;
Nf.registerSchemesAsPrivileged([
  { scheme: "steam-asset", privileges: { bypassCSP: !0, secure: !0, supportFetchAPI: !0 } }
]);
function rD() {
  Ge = new dy({
    width: 1280,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    icon: ce.join(process.env.VITE_PUBLIC, "icon.png"),
    frame: !1,
    webPreferences: {
      preload: ce.join(sy, "preload.cjs"),
      nodeIntegration: !1,
      contextIsolation: !0,
      sandbox: !1
    },
    title: "Non-Steam Automation",
    backgroundColor: "#1b2838"
  }), xe.on("window-minimize", () => Ge?.minimize()), xe.on("window-maximize", () => {
    Ge?.isMaximized() ? Ge?.unmaximize() : Ge?.maximize();
  }), xe.on("window-close", () => Ge?.close()), uc ? Ge.loadURL(uc) : Ge.loadFile(ce.join(iy, "index.html")), Ge.on("close", (e) => {
    !oy && Cu() && (e.preventDefault(), Ge?.hide());
  });
}
const aD = Tt.requestSingleInstanceLock();
aD ? (Tt.on("second-instance", () => {
  Ge && (Ge.isVisible() || Ge.show(), Ge.isMinimized() && Ge.restore(), Ge.focus());
}), Tt.whenReady().then(() => {
  Q2();
  try {
    const e = ce.join(process.env.VITE_PUBLIC, "icon.png");
    Qa = new cy(e), Qa.setToolTip("Non-Steam Automation");
    const t = ly.buildFromTemplate([
      { label: "Abrir", click: () => Ge?.show() },
      {
        label: "Encerrar completamente",
        click: () => {
          oy = !0, Tt.quit();
        }
      }
    ]);
    Qa.setContextMenu(t), Qa.on("click", () => Ge?.show());
  } catch (e) {
    console.error("Falha ao criar System Tray:", e);
  }
  Nf.handle("steam-asset", (e) => {
    const t = Ff(e.url.replace("steam-asset://", "file://"));
    return uy.fetch("file://" + t);
  }), xe.handle("get-api-key", () => Dv()), xe.handle("save-api-key", async (e, t) => await ac(t)), xe.handle("get-config", () => Ar()), xe.handle("save-config-data", async (e, t) => await Fv(t.key, t.value)), xe.handle("get-run-in-background", () => Cu()), xe.handle("save-run-in-background", async (e, t) => {
    const { saveRunInBackground: n } = await Promise.resolve().then(() => Jt);
    await n(t);
  }), xe.handle("validate-sgdb-key", async (e, t) => await l2(t)), xe.handle("validate-steam-key", async (e, t) => await u2(t)), xe.handle("get-local-steam-users", () => p2()), xe.handle("get-protons", () => a2()), xe.handle("get-hybrid-achievements", async (e, t) => await c2(t.appId, t.apiKey, t.exePath, t.achievementsJsonPath)), xe.handle("auto-scan-goldberg", async (e, t) => await d2(t)), xe.handle("manual-select-goldberg", async (e, t) => {
    const n = await gi.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Achievements JSON", extensions: ["json"] }]
    });
    if (!n.canceled && n.filePaths.length > 0) {
      const r = n.filePaths[0];
      if (r.toLowerCase().endsWith("achievements.json")) {
        const { saveGoldbergCache: a } = await Promise.resolve().then(() => Jt);
        return await a(t, r), r;
      }
    }
    return null;
  }), xe.handle("clear-goldberg-cache", async (e, t) => {
    const { clearGoldbergCache: n } = await Promise.resolve().then(() => Jt);
    return await n(t);
  }), xe.handle("get-real-app-id", async (e, t) => {
    const { getRealAppIdCache: n } = await Promise.resolve().then(() => Jt);
    return await n(t);
  }), xe.handle("save-real-app-id", async (e, t) => {
    const { saveRealAppIdCache: n } = await Promise.resolve().then(() => Jt);
    return await n(t.appId, t.realAppId), !0;
  }), xe.handle("get-achievements-enabled", async (e, t) => {
    const { getAchievementsEnabledCache: n } = await Promise.resolve().then(() => Jt);
    return await n(t);
  }), xe.handle("save-achievements-enabled", async (e, t) => {
    const { saveAchievementsEnabledCache: n } = await Promise.resolve().then(() => Jt);
    return await n(t.appId, t.enabled), !0;
  }), xe.handle("select-exe", async () => {
    const e = await gi.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Executables", extensions: ["exe", "x86_64", "bin", "sh", "AppImage"] }]
    });
    return e.canceled ? null : e.filePaths[0];
  }), xe.handle("search-sgdb-arts", async (e, { gameName: t, apiKey: n }) => {
    const r = new gs(n), a = await r.searchGame(t);
    return a ? await r.getAssets(a.id) : null;
  }), xe.handle("search-steam-game", async (e, t) => {
    if (!t || t.trim() === "") return [];
    try {
      const n = await Se.get(`https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(t)}&l=portuguese&cc=BR`);
      return n.data && n.data.items ? n.data.items.map((r) => ({
        id: r.id,
        name: r.name,
        tiny_image: r.tiny_image
      })) : [];
    } catch (n) {
      return console.error("Failed to search Steam games:", n), [];
    }
  }), xe.handle("get-alternative-arts", async (e, { gameName: t, apiKey: n, type: r }) => {
    const a = new gs(n), s = await a.searchGame(t);
    return s ? await a.getAlternativeAssets(s.id, r) : [];
  }), xe.handle("download-temp-art", async (e, { url: t }) => {
    const n = ce.join(ot.tmpdir(), "non-steam-automation-temp");
    await Te.mkdir(n, { recursive: !0 });
    const r = `temp_${Date.now()}.png`, a = ce.join(n, r);
    return await new gs("").downloadImage(t, a), `steam-asset://${a}`;
  }), xe.handle("inject-automated-shortcut", async (e, t) => {
    try {
      return t.sgdbApiKey && await ac(t.sgdbApiKey), await e2(t);
    } catch (n) {
      return console.error(n), { success: !1, error: String(n) };
    }
  }), xe.handle("get-non-steam-library", () => t2()), xe.handle("remove-shortcut", (e, { appId: t }) => r2(t)), xe.handle("update-manual-art", (e, t) => n2(t.appId, t.artType, t.sourceFilePath)), xe.handle("select-art-file", async () => {
    const e = await gi.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Images", extensions: ["png", "jpg", "jpeg", "webp"] }]
    });
    return e.canceled ? null : e.filePaths[0];
  }), xe.handle("restart-steam", () => new Promise((e) => {
    Ty("pkill -9 -x steam || killall -9 steam || flatpak kill com.valvesoftware.Steam || true", () => {
      setTimeout(async () => {
        const { spawn: t } = await import("child_process");
        t("sh", ["-c", "steam || flatpak run com.valvesoftware.Steam &"], {
          detached: !0,
          stdio: "ignore"
        }).unref(), e({ success: !0 });
      }, 1e3);
    });
  })), xe.handle("install-vcredist", async (e, t) => {
    const { installVCRedist: n } = await import("./dependencyManager-DUi_4aIR.js");
    return await n(t, (r) => {
      e.sender.send("vcredist-progress", r);
    });
  }), xe.on("open-external-url", (e, t) => {
    py.openExternal(t);
  }), rD();
}), Tt.on("window-all-closed", () => {
  process.platform !== "darwin" && Tt.quit();
})) : Tt.quit();
export {
  iy as R,
  uc as V,
  Se as a
};
