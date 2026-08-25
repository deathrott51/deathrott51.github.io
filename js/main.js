(function () {
  const data = window.PORTFOLIO;
  if (!data) return;

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pills(tools) {
    return `<div class="pills">${(tools || [])
      .map((t) => `<span class="pill">${esc(t)}</span>`)
      .join("")}</div>`;
  }

  function header(active) {
    const nav = data.nav
      .map((item) => {
        const current =
          item.label.toLowerCase() === active ||
          (active === "work" && item.label.toLowerCase().includes("work"))
            ? ' aria-current="page"'
            : "";
        return `<a href="${esc(item.href)}"${current}>${esc(item.label)}</a>`;
      })
      .join("");

    return `
      <div class="wrap masthead">
        <strong>In person</strong>
        <span>${esc(data.person.location)} · 2026</span>
      </div>
      <div class="wrap header-inner">
        <a class="wordmark" href="index.html">${esc(data.person.name)}</a>
        <nav class="nav" aria-label="Primary">${nav}</nav>
      </div>`;
  }

  function footer() {
    return `
      <div class="wrap">
        <span>In person · ${esc(data.person.name)}</span>
        <span>${esc(data.person.availability)}</span>
      </div>`;
  }

  function renderHome() {
    document.getElementById("site-header").innerHTML = header("");
    document.getElementById("site-footer").innerHTML = footer();
    document.title = `A sitting with ${data.person.name}`;

    const p = data.person;
    const portrait = p.photo
      ? `<figure class="portrait">
          <img src="${esc(p.photo)}" alt="${esc(p.name)}" width="240" height="300" />
        </figure>`
      : "";

    document.getElementById("hero").innerHTML = `
      <div class="wrap hero">
        <div class="hero-grid">
          ${portrait}
          <div>
            <p class="kicker">A sitting · ${esc(p.eyebrow || "")}</p>
            <h1>${esc(p.name)}</h1>
            <p class="title">${esc(p.title)}</p>
            <p class="lede">${esc(p.lede || p.about[0])}</p>
            <p class="pull">${esc(p.tagline)}</p>
            <div class="actions">
              <a href="#work">The work</a>
              <a href="${esc(p.resume)}">The résumé</a>
              <a href="${esc(p.linkedin)}">LinkedIn</a>
              ${p.github ? `<a href="${esc(p.github)}">GitHub</a>` : ""}
            </div>
            <div class="meta-row">
              <span>${esc(p.location)}</span>
              <a href="mailto:${esc(p.email)}">${esc(p.email)}</a>
              ${p.phone ? `<a href="tel:${esc(p.phone)}">${esc(p.phone)}</a>` : ""}
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById("work").innerHTML = `
      <div class="wrap section">
        <div class="section-head">
          <h2>The work</h2>
          <span class="section-num">Four pieces</span>
        </div>
        <div class="toc">
          ${data.projects
            .map(
              (project, i) => `
            <a href="project.html?id=${esc(project.id)}">
              <span class="idx">${String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>${esc(project.title)}</h3>
                <p>${esc(project.summary)}</p>
                ${pills(project.tools)}
              </div>
              <span class="hit">${esc(project.outcome)}</span>
            </a>`
            )
            .join("")}
        </div>
      </div>`;

    document.getElementById("about").innerHTML = `
      <div class="wrap section">
        <div class="section-head">
          <h2>The person</h2>
          <span class="section-num">After the handshake</span>
        </div>
        <div class="about-grid">
          <div class="col">${p.about.map((para) => `<p>${esc(para)}</p>`).join("")}</div>
          <aside class="podium">
            <h3>On the podium</h3>
            <ol>
              ${(data.achievements || []).map((item) => `<li>${esc(item)}</li>`).join("")}
            </ol>
          </aside>
        </div>
      </div>`;

    document.getElementById("skills").innerHTML = `
      <div class="wrap section">
        <div class="section-head">
          <h2>What he carries</h2>
          <span class="section-num">The kit</span>
        </div>
        <dl class="kit">
          ${data.skills
            .map(
              (block) => `
            <div class="kit-row">
              <dt>${esc(block.group)}</dt>
              <dd>${esc(block.items.join("  ·  "))}</dd>
            </div>`
            )
            .join("")}
        </dl>
      </div>`;

    const edu = data.education;
    document.getElementById("experience").innerHTML = `
      <div class="wrap section">
        <div class="section-head">
          <h2>The years</h2>
          <span class="section-num">A short chronology</span>
        </div>
        <div class="years">
          ${data.experience
            .map(
              (job) => `
            <article class="job">
              <div class="when">${esc(job.dates)}</div>
              <h3>${esc(job.role)}</h3>
              <div class="org">${esc(job.org)}</div>
              ${
                (job.bullets || []).length
                  ? `<ul>${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
                  : ""
              }
            </article>`
            )
            .join("")}
          <article class="job">
            <div class="when">${esc(edu.dates)}</div>
            <h3>${esc(edu.credential)}</h3>
            <div class="org">${esc(edu.school)}</div>
          </article>
        </div>
      </div>`;

    document.getElementById("contact").innerHTML = `
      <div class="wrap section" style="border-bottom:0">
        <div class="letter">
          <div>
            <p class="kicker">If you would like another hour</p>
            <h2>Write to him</h2>
            <p>${esc(p.contactBlurb || "")}</p>
          </div>
          <div class="links">
            <a href="mailto:${esc(p.email)}">${esc(p.email)}</a>
            ${p.phone ? `<a href="tel:${esc(p.phone)}">${esc(p.phone)}</a>` : ""}
            ${p.github ? `<a href="${esc(p.github)}">GitHub</a>` : ""}
            <a href="${esc(p.linkedin)}">LinkedIn</a>
            <span>${esc(p.location)}</span>
          </div>
        </div>
      </div>`;
  }

  function yScale(values, height, padTop, padBottom) {
    const min = 0;
    const max = Math.max(...values, 1) * 1.15;
    const plot = height - padTop - padBottom;
    return {
      max,
      y: (v) => padTop + plot * (1 - (v - min) / (max - min)),
    };
  }

  function renderChart(chart) {
    const width = 640;
    const height = 260;
    const pad = { l: 48, r: 16, t: 16, b: 42 };
    const innerW = width - pad.l - pad.r;
    const allValues = chart.series.flatMap((s) => s.values);
    const scale = yScale(allValues, height, pad.t, pad.b);
    const n = chart.labels.length;
    const colors = ["#7a1f1a", "#1c1612", "#6a6158"];

    let grid = "";
    for (let i = 0; i <= 4; i += 1) {
      const gy = pad.t + ((height - pad.t - pad.b) * i) / 4;
      const val = scale.max * (1 - i / 4);
      grid += `<line class="grid" x1="${pad.l}" x2="${width - pad.r}" y1="${gy}" y2="${gy}" />`;
      grid += `<text class="axis" x="${pad.l - 8}" y="${gy + 4}" text-anchor="end">${val.toFixed(1)}</text>`;
    }

    const xFor = (i) => pad.l + (innerW * (i + 0.5)) / n;
    let body = "";
    let legend = "";

    if (chart.type === "bar") {
      const bw = (innerW / n) * 0.45;
      chart.series[0].values.forEach((v, i) => {
        const x = xFor(i) - bw / 2;
        const y = scale.y(v);
        body += `<rect x="${x}" y="${y}" width="${bw}" height="${height - pad.b - y}" fill="${colors[0]}" />`;
        body += `<text class="axis" x="${xFor(i)}" y="${height - 18}" text-anchor="middle">${esc(chart.labels[i])}</text>`;
      });
    } else if (chart.type === "grouped") {
      const groupW = innerW / n;
      const barW = groupW * 0.28;
      chart.labels.forEach((label, i) => {
        chart.series.forEach((s, si) => {
          const v = s.values[i];
          const x = pad.l + groupW * i + groupW * 0.22 + si * (barW + 8);
          const y = scale.y(v);
          body += `<rect x="${x}" y="${y}" width="${barW}" height="${height - pad.b - y}" fill="${colors[si]}" />`;
        });
        body += `<text class="axis" x="${pad.l + groupW * i + groupW / 2}" y="${height - 18}" text-anchor="middle">${esc(label)}</text>`;
      });
      legend = `<div class="legend">${chart.series
        .map((s, i) => `<span><i style="background:${colors[i]}"></i>${esc(s.name)}</span>`)
        .join("")}</div>`;
    } else {
      chart.series.forEach((s, si) => {
        const pts = s.values.map((v, i) => `${xFor(i)},${scale.y(v)}`).join(" ");
        body += `<polyline fill="none" stroke="${colors[si]}" stroke-width="2.4" points="${pts}" />`;
        s.values.forEach((v, i) => {
          body += `<circle cx="${xFor(i)}" cy="${scale.y(v)}" r="3.5" fill="${colors[si]}" />`;
        });
      });
      chart.labels.forEach((label, i) => {
        body += `<text class="axis" x="${xFor(i)}" y="${height - 18}" text-anchor="middle">${esc(label)}</text>`;
      });
      if (chart.series.length > 1) {
        legend = `<div class="legend">${chart.series
          .map((s, i) => `<span><i style="background:${colors[i]}"></i>${esc(s.name)}</span>`)
          .join("")}</div>`;
      }
    }

    return `
      <div class="chart-card">
        <h2>${esc(chart.title)}</h2>
        ${legend}
        <div class="chart">
          <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(chart.title)}">
            ${grid}
            ${body}
          </svg>
        </div>
      </div>`;
  }

  function renderProject() {
    document.getElementById("site-header").innerHTML = header("work");
    document.getElementById("site-footer").innerHTML = footer();

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || window.location.hash.replace(/^#/, "") || "";
    const project = data.projects.find((item) => item.id === id);
    const root = document.getElementById("case");

    if (!project) {
      document.title = "Not in this issue";
      root.innerHTML = `
        <div class="wrap missing">
          <h1>That piece is not in this issue</h1>
          <p><a href="index.html">Back to the sitting</a></p>
        </div>`;
      return;
    }

    document.title = `${project.title} — ${data.person.name}`;

    root.innerHTML = `
      <div class="wrap case-hero">
        <p class="kicker">${esc(project.kicker)}</p>
        <h1>${esc(project.title)}</h1>
        <p class="standfirst">${esc(project.summary)}</p>
        <div class="case-meta">
          <span>${esc(project.role)}</span>
          <span>${esc(project.timeframe)}</span>
          <span class="outcome">${esc(project.outcome)}</span>
        </div>
        ${pills(project.tools)}
      </div>
      <div class="wrap story">
        <article>
          <h2>The question</h2>
          <p>${esc(project.question)}</p>
        </article>
        <article>
          <h2>The data</h2>
          <p>${esc(project.data)}</p>
        </article>
        <article>
          <h2>How he did it</h2>
          <ul>${project.method.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        </article>
        <div>
          <h2>What showed up</h2>
          <div class="findings">
            ${project.findings
              .map(
                (f) => `
              <div class="finding">
                <span class="stat">${esc(f.stat)}</span>
                <span>${esc(f.label)}</span>
              </div>`
              )
              .join("")}
          </div>
        </div>
        ${project.chart ? renderChart(project.chart) : ""}
        <article>
          <h2>What he would tell the room</h2>
          <p>${esc(project.recommendation)}</p>
        </article>
        <article>
          <h2>If there were another week</h2>
          <p>${esc(project.next)}</p>
        </article>
        <p><a href="index.html#work">← The work</a></p>
      </div>`;
  }

  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "project") renderProject();
})();
