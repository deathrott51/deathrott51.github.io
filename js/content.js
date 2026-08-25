/**
 * Site copy for Anupam Shukla. Edit this file to change anything on the page.
 */
window.PORTFOLIO = {
  sample: false,
  person: {
    name: "Anupam Shukla",
    firstName: "Anupam",
    title: "Data Science",
    eyebrow: "IIT (BHU) · Electronics",
    location: "Bangalore, India",
    email: "Anupam.shukla.iit25@gmail.com",
    phone: "+91-808-147-7979",
    linkedin: "https://www.linkedin.com/in/deathrott/",
    github: "https://github.com/deathrott51",
    resume: "assets/resume.pdf",
    photo: "assets/anupam.jpg",
    availability: "Open to data roles",
    tagline:
      "IIT (BHU) engineer who moves data with SQL, models with Python, and writes the check so a teammate can audit it.",
    lede: "You sit down with Anupam in Bangalore — tea, a messy spreadsheet, and a question that actually matters. He is an IIT (BHU) Electronics graduate looking for data work, not a gallery of notebooks.",
    about: [
      "Competition podiums taught him to frame a dataset fast. E-Ring taught him to make a pipeline survive month-end. Xelron, remote, put him on Merline, Terminus, Cobra, and Sentinel as project lead.",
      "He wants roles where SQL, Python, and a clear recommendation sit in the same conversation.",
    ],
    contactBlurb: "If this sitting should continue — email, call, LinkedIn, or GitHub. The résumé is a PDF.",
    queryHome: "SELECT name, title, status FROM anupam WHERE open_to_work = TRUE;",
  },
  ticker: [
    "ETL 8h → 45m",
    "1.2M+ county rows",
    "page load −18%",
    "Cassandra 1st · IIT BHU",
    "Datathon 2nd · IIT KGP",
    "Xelron · remote lead",
    "Parliament · highest votes",
    "Channel charting · IIT (BHU)",
  ],
  queries: {
    hero: "SELECT name, title, status FROM anupam LIMIT 1;",
    work: "SELECT exhibit, grain, result FROM work ORDER BY impact DESC;",
    about: "SELECT bio, medals FROM anupam JOIN iit_bhu;",
    skills: "SELECT skill, family FROM stack;",
    experience: "SELECT role, org FROM history ORDER BY start DESC;",
    contact: "INSERT INTO inbox (from_recruiter) VALUES (?);",
  },
  nav: [
    { href: "index.html#work", label: "The work" },
    { href: "index.html#about", label: "The person" },
    { href: "index.html#skills", label: "The kit" },
    { href: "index.html#experience", label: "The years" },
    { href: "index.html#contact", label: "Write" },
  ],
  achievements: [
    "1st — Cassandra, Udyam’23, IIT BHU",
    "2nd — Datathon, Kshitij’22, IIT Kharagpur",
    "2nd — Vichesta ROS, Takshak’21, IIT (ISM) Dhanbad",
    "3rd — Epidemic Data Analytics, Xpecto’22, IIT Mandi",
    "3rd — Cascade Cup’22, IIT Guwahati",
  ],
  skills: [
    {
      group: "Languages",
      items: ["Python", "SQL", "T-SQL", "C++"],
    },
    {
      group: "Analysis & ML",
      items: [
        "Regression",
        "Classification",
        "Clustering",
        "Statistical modeling",
        "Feature engineering",
        "Model interpretation",
      ],
    },
    {
      group: "Visualization",
      items: ["Tableau", "Power BI", "Excel", "Jupyter"],
    },
    {
      group: "Tools",
      items: [
        "Scikit-learn",
        "XGBoost",
        "SQL Server",
        "BCP pipelines",
        "Query Store",
        "Azure DevOps",
        "SSMS",
      ],
    },
  ],
  experience: [
    {
      role: "Software Development Engineer Intern",
      org: "Xelron · remote",
      dates: "Feb 2026 — Jun 2026",
      bullets: [
        "Project lead on Merline, Terminus, Cobra, and Sentinel.",
      ],
    },
    {
      role: "Software Development Engineer",
      org: "E-Ring Inc., Hyderabad",
      dates: "Jul 2025 — Dec 2025",
      bullets: [
        "Migrated DevExpress + VB logic to plain JavaScript in ASP.NET pages, cutting page load time by 18%.",
        "Replaced cursor-based extracts with BCP pipelines so a monthly county-wide ETL of 1.2M+ records went from 8 hours to 45 minutes.",
        "Wrote T-SQL monitoring for billing and reconciliation, cutting manual validation effort by 20%.",
      ],
    },
    {
      role: "Summer Research Intern — Channel Charting & Wireless AI",
      org: "Prof. Muralikrishnan Srinivasan, IIT (BHU)",
      dates: "May 2024 — Jun 2024",
      bullets: [
        "Reimplemented a channel-charting framework with a cleaner architecture so the mapping step could scale.",
        "Built fused dissimilarity metrics to send high-dimensional CSI into a lower-dimensional logical chart.",
        "Calibrated DNNs with IFFT and phase correction so they beat MDS and Isomap baselines.",
      ],
    },
    {
      role: "Student’s Parliament",
      org: "IIT (BHU) Varanasi",
      dates: "During B.Tech",
      bullets: [
        "Student-elected; highest votes of any parliament member to date.",
        "Hostel Committee and Grievance Committee member.",
      ],
    },
  ],
  education: {
    school: "Indian Institute of Technology (BHU) Varanasi",
    credential: "B.Tech, Electronics Engineering",
    dates: "Dec 2021 — May 2025",
  },
  projects: [
    {
      id: "etl",
      kicker: "SQL Server · ETL",
      title: "County extracts that finish before lunch",
      outcome: "1.2M+ rows: 8 hours → 45 minutes",
      summary:
        "At E-Ring the monthly county load still ran on cursors. I moved it to BCP, then put T-SQL checks on billing so speed did not silently break reconciliation.",
      tools: ["SQL Server", "T-SQL", "BCP", "Query Store", "SSMS"],
      role: "Software development engineer",
      timeframe: "E-Ring Inc., Jul–Dec 2025",
      question:
        "Can a monthly county-wide extract leave an eight-hour cursor job without weakening billing and audit checks?",
      data: "1.2M+ records in SQL Server. Grain: county extract at month-end, plus billing and reconciliation queries that had been checked by hand.",
      method: [
        "Replaced row-by-row cursor extraction with BCP-based bulk pipelines.",
        "Used Query Store and T-SQL monitors so slow or drifting statements showed up before the close.",
        "Moved DevExpress + VB page logic to JavaScript in ASP.NET so the UI was not the other bottleneck.",
      ],
      findings: [
        {
          stat: "8h → 45m",
          label: "County-wide monthly ETL on 1.2M+ records",
        },
        {
          stat: "18%",
          label: "Lower page load after dropping DevExpress + VB for JS",
        },
        {
          stat: "20%",
          label: "Less manual effort on billing and reconciliation checks",
        },
      ],
      recommendation:
        "Keep bulk copy as the extract path. Leave the T-SQL monitors in the close calendar so a fast pipeline cannot drift without someone noticing.",
      next: "Baseline Query Store captures at month-end so the next regression is a diff, not a war story.",
      chart: {
        type: "bar",
        title: "Monthly ETL runtime (minutes)",
        yLabel: "Minutes",
        labels: ["Cursors", "BCP"],
        series: [{ name: "Runtime", values: [480, 45] }],
      },
    },
    {
      id: "attrition",
      kicker: "HR · classification",
      title: "Who leaves — without trusting accuracy",
      outcome: "XGBoost + SMOTE, scored with ROC-AUC",
      summary:
        "Attrition is a rare-event problem. I treated it that way: engineer the HR features, fix the class skew, then pick a ranking metric that does not lie.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SMOTE"],
      role: "Data science project",
      timeframe: "Personal / academic project",
      question:
        "Which employees are likely to leave, given satisfaction, environment, growth, and pay — and how do you score that when most people stay?",
      data: "HR analytics table: job satisfaction, work environment, career growth, compensation, and related personnel fields. Target: attrition.",
      method: [
        "Cleaned and engineered features in Pandas / NumPy; did not dump raw categoricals into the model.",
        "Handled class imbalance with SMOTE so the learner saw leavers, not only stayers.",
        "Trained gradient boosting (XGBoost) and judged it with ROC-AUC rather than headline accuracy.",
      ],
      findings: [
        {
          stat: "SMOTE",
          label: "Imbalance fix so the leave class was not a rounding error",
        },
        {
          stat: "XGBoost",
          label: "Boosted trees on engineered HR features",
        },
        {
          stat: "ROC-AUC",
          label: "Ranking metric instead of accuracy on a skewed label",
        },
      ],
      recommendation:
        "Hand HR a ranked risk list for stay conversations. Do not treat a high score as a firing recommendation.",
      next: "If this went near production, I would check stability by department and quarter before anyone trusted the rank order.",
    },
    {
      id: "loan",
      kicker: "Credit · classification",
      title: "Approve, decline, or ask for another document",
      outcome: "Logistic, trees, and forests on applicant files",
      summary:
        "A loan book is a classification problem with missing fields. I imputed, selected features, and compared three model families instead of falling in love with the first notebook that ran.",
      tools: ["Python", "Scikit-learn", "Pandas"],
      role: "Data science project",
      timeframe: "Personal / academic project",
      question:
        "Given credit score, income, employment history, loan amount, and debt-to-income, can we predict approval without leaking the decision we are trying to make?",
      data: "Applicant-level records: credit score, income, employment history, requested amount, debt-to-income ratio, plus related fields used after imputation.",
      method: [
        "Imputed missing values instead of dropping thin files.",
        "Ran feature selection so correlated credit fields did not all shout at once.",
        "Compared logistic regression, decision trees, and random forests, then tuned hyperparameters.",
      ],
      findings: [
        {
          stat: "3 families",
          label: "Logistic regression, decision trees, random forest",
        },
        {
          stat: "Imputation",
          label: "Missing applicant fields filled, not silently dropped",
        },
        {
          stat: "Tuning",
          label: "Hyperparameters searched after the feature set was honest",
        },
      ],
      recommendation:
        "Use the model as a second reader for underwriters, with a manual queue for thin files. A probability is not a policy.",
      next: "Add a simple fairness slice (income band, employment type) before anyone calls it production-ready.",
    },
    {
      id: "channel",
      kicker: "Research · wireless ML",
      title: "Charts of a radio channel, not a spreadsheet",
      outcome: "DNN charting beat MDS and Isomap baselines",
      summary:
        "Under Prof. Muralikrishnan Srinivasan I rebuilt a channel-charting stack: CSI in, a logical map out, with a network that could grow past classical manifold methods.",
      tools: ["Python", "Deep neural nets", "IFFT", "CSI"],
      role: "Summer research intern",
      timeframe: "IIT (BHU), May–Jun 2024",
      question:
        "Can high-dimensional channel-state information be mapped into a low-dimensional logical chart that still scales when the radio scene grows?",
      data: "CSI (channel-state) tensors. The job was a geometry problem: keep relative radio structure while throwing away dimensions that only add noise.",
      method: [
        "Reimplemented the charting framework so the architecture could be extended without a rewrite.",
        "Fused dissimilarity metrics instead of a single distance that ignored part of the CSI.",
        "Used IFFT and phase calibration on the network; compared against MDS and Isomap.",
      ],
      findings: [
        {
          stat: "Fused metric",
          label: "Dissimilarities combined before the chart, not after",
        },
        {
          stat: "IFFT + phase",
          label: "Calibration so the net was not fighting antenna geometry",
        },
        {
          stat: "vs MDS / Isomap",
          label: "DNN baseline comparison on the same charting task",
        },
      ],
      recommendation:
        "Treat channel charting as a representation problem with an explicit baseline. If the net cannot beat MDS on a holdout scene, it is not a paper, it is a sketch.",
      next: "I would publish the split by scene size so scalability is a number, not a slide.",
    },
  ],
};
