import { a as u } from "./main-Bix59_ZE.js";
import c from "fs";
import n from "path";
import i from "os";
import { exec as x } from "child_process";
import { promisify as y } from "util";
const h = y(x);
async function v(t) {
  const e = "https://aka.ms/vs/17/release/vc_redist.x64.exe", r = i.tmpdir(), o = n.join(r, "vc_redist.x64.exe");
  if (c.existsSync(o))
    return t && t(100), o;
  const s = await u({
    url: e,
    method: "GET",
    responseType: "stream"
  }), a = parseInt(String(s.headers["content-length"] || "25000000"), 10);
  let d = 0;
  const m = c.createWriteStream(o);
  return new Promise((l, f) => {
    s.data.on("data", (p) => {
      if (d += p.length, t && a) {
        const w = Math.round(d / a * 100);
        t(Math.min(w, 100));
      }
    }), s.data.pipe(m), m.on("finish", () => l(o)), m.on("error", (p) => {
      c.unlink(o, () => {
      }), f(p);
    });
  });
}
async function S(t) {
  const e = [
    n.join(i.homedir(), ".steam/steam/steamapps/compatdata", t, "pfx"),
    n.join(i.homedir(), ".local/share/Steam/steamapps/compatdata", t, "pfx"),
    n.join(i.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/compatdata", t, "pfx")
  ];
  for (const r of e)
    if (c.existsSync(r))
      return r;
  throw new Error("Prefixo Proton não encontrado para o jogo. Inicie o jogo pelo menos uma vez pela Steam.");
}
async function j() {
  try {
    const { stdout: e } = await h("which wine");
    if (e.trim()) return "wine";
  } catch {
  }
  const t = [
    n.join(i.homedir(), ".steam/steam/steamapps/common"),
    n.join(i.homedir(), ".local/share/Steam/compatibilitytools.d"),
    n.join(i.homedir(), ".local/share/Steam/steamapps/common"),
    n.join(i.homedir(), ".var/app/com.valvesoftware.Steam/.local/share/Steam/steamapps/common")
  ];
  try {
    const e = `find ${t.join(" ")} -maxdepth 5 -type f -name "wine" -executable 2>/dev/null | head -n 1`, { stdout: r } = await h(e), o = r.trim();
    if (o) return `"${o}"`;
  } catch {
  }
  throw new Error('Wine nativo não encontrado no sistema e nenhum Wine do Proton foi localizado. Por favor, instale o pacote "wine".');
}
async function R(t, e) {
  let r = "";
  try {
    r = await j();
  } catch (a) {
    throw new Error(a.message || "Falha ao buscar wine");
  }
  const o = await S(t), s = await v(e);
  try {
    const a = `WINEPREFIX="${o}" ${r} "${s}" /quiet /norestart`;
    return await h(a), !0;
  } catch (a) {
    if (a.code === 3010 || a.code === 1638)
      return !0;
    throw console.error("Erro ao instalar VCRedist:", a), new Error(`Falha ao instalar o pacote: ${a.message}`);
  }
}
export {
  v as downloadVCRedist,
  j as findWineBinary,
  S as getPrefixPath,
  R as installVCRedist
};
