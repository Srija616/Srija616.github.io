(function () {
  "use strict";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- news ---------- */
  function renderNews() {
    const list = document.getElementById("news-list");
    if (!list || typeof NEWS === "undefined") return;
    list.innerHTML = NEWS.map((n) => `<li><time>${n.date}</time><span>${n.text}</span></li>`).join("");
  }

  /* ---------- awards ---------- */
  function renderAwards() {
    const list = document.getElementById("award-list");
    if (!list || typeof AWARDS === "undefined") return;
    list.innerHTML = AWARDS.map((a) =>
      `<li><span class="award-year">${esc(a.year)}</span><span><span class="award-title">${esc(a.title)}</span>${a.detail ? `<span class="award-detail">${esc(a.detail)}</span>` : ""}</span></li>`).join("");
  }

  /* ---------- publications ---------- */
  const LINK_LABELS = { paper: "Paper", arxiv: "arXiv", github: "GitHub", code: "Code", data: "Data", demo: "Demo", project: "Project page", poster: "Poster", slides: "Slides", video: "Video" };
  const AUTHOR_LIMIT = 6;
  const star = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 1.2l2 4.3 4.7.5-3.5 3.2 1 4.6L8 11.5 3.8 13.8l1-4.6L1.3 6l4.7-.5z"/></svg>';
  const isMe = (n) => n.replace("*", "").trim() === ME;

  function authorsHTML(str, id) {
    const names = str.split(",").map((s) => s.trim());
    const fmt = (n) => (isMe(n) ? `<strong>${esc(n)}</strong>` : esc(n));
    if (names.length <= AUTHOR_LIMIT) return names.map(fmt).join(", ");
    const shownCount = Math.max(AUTHOR_LIMIT - 2, names.findIndex(isMe) + 1);
    return `${names.slice(0, shownCount).map(fmt).join(", ")}, <button class="etal" type="button" data-rest="${id}">and ${names.length - shownCount} more</button><span id="${id}" hidden>${names.slice(shownCount).map(fmt).join(", ")}</span>`;
  }

  function pubHTML(p, i) {
    const tags = [`<li class="tag tag-venue"${p.venueFull ? ` title="${esc(p.venueFull)}"` : ""}>${esc(p.venue)}</li>`];
    if (p.presentation) tags.push(`<li class="tag tag-${p.presentation.toLowerCase()}">${esc(p.presentation)}</li>`);
    (p.awards || []).forEach((a) => tags.push(`<li class="tag tag-award">${star}${esc(a)}</li>`));
    const paper = p.links && (p.links.paper || p.links.arxiv);
    const short = p.shortName || p.title.split(":")[0];
    const thumbInner = p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : `<span class="thumb-ph">${esc(short)}</span>`;
    const thumb = paper ? `<a class="thumb" href="${esc(paper)}" tabindex="-1" aria-hidden="true">${thumbInner}</a>` : `<div class="thumb">${thumbInner}</div>`;
    const links = Object.entries(p.links || {}).filter(([, u]) => u)
      .map(([k, u]) => `<a href="${esc(u)}">${LINK_LABELS[k] || esc(k)}</a>`).join("");
    return `<article class="pub" data-topics="${(p.topics || []).join(" ")}">
      ${thumb}
      <div class="pub-body">
        <ul class="tags">${tags.join("")}</ul>
        <h3 class="pub-title">${paper ? `<a href="${esc(paper)}">${esc(p.title)}</a>` : esc(p.title)}</h3>
        <p class="pub-authors">${authorsHTML(p.authors, "rest-" + i)}</p>
        ${p.summary ? `<p class="pub-summary">${esc(p.summary)}</p>` : ""}
        ${links ? `<div class="pub-links">${links}</div>` : ""}
      </div>
    </article>`;
  }

  function renderPubs() {
    const grid = document.getElementById("pub-grid");
    const filters = document.getElementById("filters");
    if (!grid || typeof PUBLICATIONS === "undefined") return;
    grid.innerHTML = PUBLICATIONS.map(pubHTML).join("");
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".etal");
      if (!btn) return;
      document.getElementById(btn.dataset.rest).hidden = false;
      btn.remove();
    });

    if (!filters || typeof TOPICS === "undefined") return;
    const used = new Set(PUBLICATIONS.flatMap((p) => p.topics || []));
    const opts = [["all", "All"], ...Object.entries(TOPICS).filter(([k]) => used.has(k))];
    filters.innerHTML = opts.map(([k, label]) =>
      `<button type="button" data-topic="${k}" aria-pressed="${k === "all"}">${esc(label)}</button>`).join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const t = btn.dataset.topic;
      filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      grid.querySelectorAll(".pub").forEach((el) => {
        el.hidden = t !== "all" && !el.dataset.topics.split(" ").includes(t);
      });
    });
  }

  /* ---------- scroll boxes: fade the bottom edge only while there is more below ---------- */
  function initScrollBoxes() {
    document.querySelectorAll(".scroll-box").forEach((box) => {
      const update = () => box.classList.toggle("at-end", box.scrollTop + box.clientHeight >= box.scrollHeight - 4);
      box.addEventListener("scroll", update, { passive: true });
      update();
    });
  }

  // render each section independently so one failure can't blank the rest
  [renderNews, renderAwards, renderPubs, initScrollBoxes].forEach((fn) => {
    try { fn(); } catch (err) { console.error(fn.name, err); }
  });
})();
