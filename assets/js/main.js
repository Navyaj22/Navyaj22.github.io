/* ====== CONTENT: edit the text here ====== */
const MY_EMAIL = "navyajain600@gmail.com";
const DESC = {
  core: "Hardware, embedded systems, digital design and communication projects.",
  tech: "AI applications, analytics and software projects."
};
const PROJECTS = {
  core: [
    {t:"Industrial IoT Monitoring & Predictive Maintenance Platform", tags:["MQTT","Modbus RTU/TCP","Node-RED","Grafana"],
     d:"Developed an edge-based industrial monitoring platform integrating MQTT and Modbus RTU/TCP protocols. Used Node-RED for data processing and Grafana for real-time visualization of temperature, vibration, and equipment performance. Implemented sensor simulation and monitoring alerts to support industrial automation and predictive maintenance."},
    {t:"Smart Risk-Based Optical Fiber Surveillance", tags:["STM32","MPU6050","Piezo sensors","LoRa","React"],
     d:"Proposed a smart surveillance system to identify potential risks to optical fiber infrastructure. Integrated STM32, MPU6050, piezoelectric sensors, and LoRa communication for distributed monitoring. Explored a web dashboard using React and mapping technologies to visualize risk locations and support faster fault detection."},
    {t:"LDPC Encoder Implementation (ISRO ISTRAC)", tags:["Verilog HDL","Xilinx Vivado","MATLAB"],
     d:"Worked on implementing an LDPC encoder using Verilog HDL and Xilinx Vivado. Focused on parity generation, shift-based logic, counters, and memory-based data handling for hardware implementation. Developed and verified key logic blocks to support efficient hardware encoding."},
    {t:"Wishbone Network-on-Chip (NoC) with QoS", tags:["Verilog HDL","Wishbone","QoS"],
     d:"Designed a Network-on-Chip architecture using Verilog HDL and the Wishbone bus interface. Focused on inter-module communication, data transfer, and Quality of Service considerations. Explored hardware-level design and simulation to understand efficient on-chip communication."},
    {t:"Electric Vehicle Electrical System: eBAJA", tags:["PCB design","Power distribution","CAN"],
     d:"Contributed to the electrical system of an electric off-road vehicle as part of the eBAJA team. Worked on PCB design, power distribution, and communication protocols for vehicle components. Later took on electrical team leadership, coordinating members and supporting system integration and competition preparation."},
    {t:"ESP32-Based Surveillance Car", tags:["ESP32","Wireless control","Embedded C"],
     d:"Developed an ESP32-based mobile surveillance prototype with wireless control capabilities. Integrated embedded hardware and software to enable remote movement and monitoring, exploring microcontroller programming, wireless communication, and real-time control."}
  ],
  tech: [
    {t:"MediAssist: AI-Powered Medical Report Assistant", tags:["Generative AI","LLM","Document Q&A"],
     d:"Developed an AI-powered assistant that helps users understand uploaded medical and general health reports in PDF, TXT, and Markdown formats. Enables document-based question answering to find relevant information in reports. It is an informational tool, not a medical diagnostic system."},
    {t:"B2B Prospect Research & Lead Prioritization Dashboard", tags:["Power BI","Lead scoring","Analytics"],
     d:"Created a lead-scoring framework using business fit, customer needs, and buying signals to evaluate 20 sample companies. Developed a dashboard to categorize prospects by priority and support targeted outreach and business development decisions."},
    {t:"Financial Analysis Agent: Multi-Agent Research", tags:["CrewAI","Streamlit","Multi-agent"],
     d:"Built a financial research workflow using three specialized AI agents to research a listed company, analyze historical price movements, and generate a professional report. Results are presented in an interactive Streamlit dashboard with PDF and CSV export."}
  ]
};
const SKILLS = [
  {n:"Programming Languages", i:"ri-terminal-box-line", c:"t1", s:["Python","C","C++","SQL","Verilog HDL","SystemVerilog","JavaScript"]},
  {n:"Data Analytics & Visualization", i:"ri-bar-chart-grouped-line", c:"t2", s:["SQL","Power BI","Microsoft Excel","Pandas","NumPy","Matplotlib","Data Cleaning","EDA","KPI Analysis"]},
  {n:"Embedded & Industrial IoT", i:"ri-router-line", c:"t2 hot", s:["MQTT","Modbus RTU/TCP","LoRa","CAN","ESP32","STM32","Arduino"]},
  {n:"Web & App Development", i:"ri-window-line", c:"t1", s:["HTML","CSS","JavaScript","React","Streamlit","FastAPI","Node.js"]},
  {n:"Hardware & Design", i:"ri-chip-line", c:"t1", s:["RTL Design","Xilinx Vivado","PCB Design","Power Distribution"]},
  {n:"Tools & Platforms", i:"ri-tools-line", c:"t2", s:["Git","GitHub","VS Code","Jupyter Notebook","MATLAB","Node-RED","Grafana"]}
];
const ACH = [
  {t:"Schneider Electric Hackathon: 3rd Prize", i:"ri-trophy-line", d:"Secured 3rd place with Team Semicolon and won ₹20,000 for an edge-first industrial monitoring platform integrating industrial communication protocols, real-time data visualization, and equipment monitoring."},
  {t:"ISRO ISTRAC Internship", i:"ri-rocket-line", d:"Gained exposure to space technology and engineering at ISRO’s ISTRAC facility in Bengaluru, working on an LDPC encoder implementation involving MATLAB, Verilog, and hardware design."}
];
const LEAD = [
  {t:"Electrical Team Lead: eBAJA", i:"ri-flashlight-line", d:"Led electrical team activities for an electric off-road vehicle, coordinating members and contributing to PCB design, power distribution, and communication protocols."},
  {t:"AARUUSH: SRM Institute of Science and Technology", i:"ri-team-line", d:"Progressed from Volunteer to Event Coordinator and Committee Head, contributing to event planning, scheduling, budgeting, resource allocation, and team coordination for the university’s techno-management fest."},
  {t:"Volunteering & Social Impact", i:"ri-heart-line", d:"Supported crowdfunding, social media awareness, pollution awareness sessions, and plantation activities through Muskurahat Foundation and Sonali Public Shiksha Samiti."}
];

/* ====== RENDERING ====== */
const $ = s => document.querySelector(s);
const chips = a => a.map(x => `<li>${x}</li>`).join("");
const card = p => `<article class="card"><h3>${p.t}</h3><ul class="chips chips--sm">${chips(p.tags)}</ul><p>${p.d}</p>${p.link ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">View on GitHub</a>` : ""}</article>`;
const info = x => `<article class="card"><i class="${x.i}"></i><h3>${x.t}</h3><p>${x.d}</p></article>`;

function showTab(key) {
  document.querySelectorAll(".tab").forEach(b => {
    const on = b.dataset.tab === key;
    b.classList.toggle("is-active", on); b.setAttribute("aria-selected", on);
  });
  $("#tab-desc").textContent = DESC[key];
  const box = $("#cards");
  box.setAttribute("aria-labelledby", "tab-" + key);
  box.classList.remove("swap"); void box.offsetWidth;
  box.innerHTML = PROJECTS[key].map(card).join("");
  box.classList.add("swap");
}
document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
$("#n-core").textContent = PROJECTS.core.length; $("#n-tech").textContent = PROJECTS.tech.length;
showTab("core");

$("#bento").innerHTML = SKILLS.map(g => `<div class="tile ${g.c}"><i class="${g.i} tile__ghost"></i><h3>${g.n}</h3><ul class="chips">${chips(g.s)}</ul></div>`).join("");
const all = [...new Set(SKILLS.flatMap(g => g.s))].map(x => `<span>${x}</span>`).join("");
$("#marquee").innerHTML = all + all;
$("#ach").innerHTML = ACH.map(info).join("");
$("#lead").innerHTML = LEAD.map(info).join("");

/* ====== THEME, MENU, FORM ====== */
const root = document.documentElement, tb = $("#theme-btn");
const setTheme = t => { root.dataset.theme = t; tb.innerHTML = `<i class="ri-${t === "dark" ? "sun" : "moon"}-line"></i>`; try { localStorage.setItem("theme", t) } catch (e) {} };
let saved = null; try { saved = localStorage.getItem("theme") } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
tb.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

const mb = $("#menu-btn"), nl = $("#nav-links");
mb.addEventListener("click", () => { const o = nl.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });
nl.addEventListener("click", e => { if (e.target.tagName === "A") { nl.classList.remove("open"); mb.setAttribute("aria-expanded", false); } });

$("#form").addEventListener("submit", e => {
  e.preventDefault(); const f = new FormData(e.target);
  const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
  location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  $("#form-note").textContent = "Opening your email app…";
});
