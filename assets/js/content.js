/* ==========================================================================
   Site content. Edit this file to add news, awards and publications —
   you shouldn't need to touch index.html or site.js.
   ========================================================================== */

const ME = "Srija Anand";

/* AWARDS — newest first. */
const AWARDS = [
  { year: "2026", title: "Social Impact Award & SAC Highlights", detail: "ACL 2026, for Afri-MCQA" },
  { year: "2026–28", title: "Dean's Fellowship", detail: "University of Maryland, in recognition of outstanding academic achievement" },
  { year: "2024", title: "Google Travel Grant", detail: "To attend NeurIPS 2024" },
  { year: "2024", title: "Young Female Researchers in Speech Workshop travel grant", detail: "To attend Interspeech 2024 and its satellite events" },
  { year: "2024", title: "Google Research Week", detail: "Selected to attend, Google Bangalore" },
  { year: "2020", title: "Grace Hopper Celebration India Scholar", detail: "Travel grant awarded to 250 women students in technology" },
  { year: "2019", title: "Dean's Award for Best Internship Project", detail: "IIIT Delhi, for building Chartr, a live-tracking and routing public transport app" },
];

/* NEWS — newest first. `text` may contain HTML links.
   All items show in a scrollable box; its height is set by .news-scroll in site.css. */
const NEWS = [
  { date: "Aug 2026", text: 'Started my PhD at the <a href="https://www.cs.umd.edu">University of Maryland</a> with Prof. <a href="https://www.cs.umd.edu/~marine/">Marine Carpuat</a>, supported by the Dean\'s Fellowship.' },
  { date: "Apr 2026", text: '<a href="https://aclanthology.org/2026.acl-long.1869/">Afri-MCQA</a>, a multimodal cultural QA benchmark for 15 African languages, was accepted to the ACL 2026 main conference.' },
  { date: "May 2025", text: 'Spending the summer at <a href="https://mbzuai.ac.ae">MBZUAI</a> as a research intern with Prof. <a href="https://mbzuai.ac.ae/academics/faculty-directory/thamar-solorio">Thamar Solorio</a>.' },
  { date: "Dec 2024", text: 'Presented <a href="https://arxiv.org/abs/2409.05356">IndicVoices-R</a> at NeurIPS 2024 in Vancouver.' },
  { date: "Sep 2024", text: '<a href="https://arxiv.org/abs/2409.05356">IndicVoices-R</a> was accepted to the NeurIPS 2024 Datasets &amp; Benchmarks track: 1.7k hours of TTS data across all 22 scheduled Indian languages and 10k+ speakers.' },
  { date: "Sep 2024", text: 'Presented <a href="https://arxiv.org/abs/2407.13435">IndicOOV</a> at Interspeech 2024 in Kos, Greece.' },
  { date: "Jul 2024", text: 'Started the MS (Research) program at <a href="https://www.iitm.ac.in">IIT Madras</a>.' },
  { date: "Jun 2024", text: "Received the Young Female Researchers in Speech Workshop travel grant to attend Interspeech 2024." },
  { date: "Jun 2024", text: '<a href="https://arxiv.org/abs/2407.13435">IndicOOV</a> was accepted to Interspeech 2024.' },
];

/* PUBLICATION TOPICS — used for the filter buttons. */
const TOPICS = {
  tts: "Speech synthesis",
  asr: "Speech recognition",
  eval: "Evaluation",
  data: "Datasets & benchmarks",
  culture: "Culture & multimodality",
};

/* PUBLICATIONS — newest first.
   authors       comma-separated; your name is bolded; * = equal contribution
   venue         short label, e.g. "ACL 2026"; use "Preprint" for arXiv-only
   presentation  optional: "Oral" | "Poster" | "Spotlight" | "Demo"
   awards        optional array, e.g. ["Societal Impact Award"]
   image         thumbnail path (16:9 works best); empty = generated placeholder
   topics        keys from TOPICS above
   links         paper  = published version (ACL Anthology, journal page, ...)
                 arxiv  = arXiv link        github = GitHub repo
                 leave any of them "" and it simply won't show.
                 also allowed: data, demo, project, poster, slides, video
*/
const PUBLICATIONS = [
  {
    year: 2026,
    title: "Preferences of a Voice-First Nation: Large-Scale Pairwise Evaluation and Preference Analysis for TTS in Indian Languages",
    authors: "Srija Anand, Ashwin Sankar, Ishvinder Sethi, Aaditya Pareek, Kartik Rajput, Gaurav Yadav, Nikhil Narasimhan, Adish Pandya, Deepon Halder, Mohammed Safi Ur Rahman Khan, Praveen S V, Shobhit Banga, Mitesh M. Khapra",
    venue: "Interspeech 2026",
    presentation: "Oral",
    awards: [],
    image: "assets/imgs/indic-arena.png",
    topics: ["eval", "tts"],
    summary: "A controlled, multidimensional pairwise evaluation framework for multilingual TTS, run at scale across Indian languages, and an analysis of what listeners actually prefer.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2604.21481", github: "" },
  },
  {
    year: 2026,
    title: "Vimarsha: Faithful ASR Evaluation for Indian Languages with Demographic Diversity, In-the-Wild Audio and Spelling Variations",
    authors: "Kaushal Santosh Bhogale, Srija Anand, Sadakopa Ramakrishnan Thothathiri, Tahir Javed, Sshubam Verma, Mitesh M. Khapra",
    venue: "Interspeech 2026",
    presentation: "Oral",
    awards: [],
    image: "assets/imgs/vimarsha.png",
    topics: ["asr", "eval", "data"],
    summary: "A 100-hour ASR benchmark across all 22 scheduled Indian languages that uses in-the-wild audio and accepts valid spelling variations, so scores are neither too optimistic nor too harsh.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2609.24199", github: "" },
  },
  {
    year: 2026,
    title: "IndicF5: An English Fairytaler is a Strong Faker of Fluent Speech in Low-Resource Indian Languages",
    shortName: "IndicF5",
    authors: "Praveen Srinivasa Varadhan, Srija Anand, Soma Siddhartha, Mitesh M. Khapra",
    venue: "Interspeech 2026",
    presentation: "Oral",
    awards: [],
    image: "assets/imgs/indic-f5.png",
    topics: ["tts"],
    summary: "Fine-tuning English F5-TTS on 11 Indian languages gives a near-human polyglot that lets a speaker of one language fluently speak another.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2505.20693", github: "" },
  },
  {
    year: 2026,
    title: "Afri-MCQA: Multimodal Cultural Question Answering for African Languages",
    authors: "Atnafu Lambebo Tonja*, Srija Anand*, Emilio Villa-Cueva*, Israel Abebe Azime, Jesujoba O. Alabi, Muhidin A. Mohamed, Debela Desalegn Yadeta, Negasi Haile Abadi, Abigail Oppong, Nnaemeka Casmir Obiefuna, Idris Abdulmumin, Naome A. Etori, Eric Peter Wairagala, Kanda Patrick Tshinu, Imanigirimbabazi Emmanuel, Gabofetswe Malema, Alham Fikri Aji, David Ifeoluwa Adelani, Thamar Solorio",
    venue: "ACL 2026",
    venueFull: "ACL 2026, Main Conference",
    presentation: "Oral",
    awards: ["Social Impact Award", "SAC Highlights"],
    image: "assets/imgs/afri-mcqa.png",
    topics: ["culture", "data"],
    summary: "7.5k text and speech QA pairs across 15 African languages, written by native speakers. Open models score near zero on open-ended VQA in native language or speech.",
    links: { paper: "https://aclanthology.org/2026.acl-long.1869/", arxiv: "", github: "", data: "https://huggingface.co/datasets/Atnafu/Afri-MCQA" },
  },
  {
    year: 2025,
    title: "Rethinking MUSHRA: Addressing Modern Challenges in Text-to-Speech Evaluation",
    authors: "Praveen Srinivasa Varadhan, Amogh Gulati, Ashwin Sankar, Srija Anand, Anirudh Gupta, Anirudh Mukherjee, Shiva Kumar Marepally, Ankur Bhatia, Saloni Jaju, Suvrat Bhooshan, Mitesh M. Khapra",
    venue: "TMLR 2025",
    venueFull: "Transactions on Machine Learning Research",
    presentation: "",
    awards: [],
    image: "assets/imgs/rethinking-mushra.png",
    topics: ["eval", "tts"],
    summary: "MUSHRA's reliance on matching human reference speech unfairly penalizes modern TTS. We show where it breaks and propose variants that make ratings reliable again.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2411.12719", github: "" },
  },
  {
    year: 2024,
    title: "IndicVoices-R: Unlocking a Massive Multilingual Multi-speaker Speech Corpus for Scaling Indian TTS",
    authors: "Ashwin Sankar*, Srija Anand*, Praveen Srinivasa Varadhan*, Sherry Thomas, Mehak Singal, Shridhar Kumar, Deovrat Mehendale, Aditi Krishana, Giri Raju, Mitesh M. Khapra",
    venue: "NeurIPS 2024",
    venueFull: "NeurIPS 2024, Datasets and Benchmarks Track",
    presentation: "Poster",
    awards: [],
    image: "assets/imgs/indicvoices-r.png",
    topics: ["data", "tts"],
    summary: "1.7k hours of TTS-quality speech from 10k+ speakers across all 22 scheduled Indian languages, made by cleaning up noisy ASR recordings, plus a benchmark for zero-shot speaker generalization.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2409.05356", github: "https://github.com/AI4Bharat/IndicVoices-R" },
  },
  {
    year: 2024,
    title: "ELAICHI: Enhancing Low-resource TTS by Addressing Infrequent and Low-frequency Character Bigrams",
    authors: "Srija Anand*, Praveen Srinivasa Varadhan*, Mehak Singal, Mitesh M. Khapra",
    venue: "Preprint",
    presentation: "",
    awards: [],
    image: "assets/imgs/elaichi.png",
    topics: ["tts"],
    summary: "Three data strategies that make low-resource TTS intelligible on character bigrams it has rarely or never seen.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2410.17901", github: "" },
  },
  {
    year: 2024,
    title: "Enhancing Out-of-Vocabulary Performance of Indian TTS Systems for Practical Applications through Low-Effort Data Strategies",
    shortName: "IndicOOV",
    authors: "Srija Anand, Praveen Srinivasa Varadhan, Ashwin Sankar, Giri Raju, Mitesh M. Khapra",
    venue: "Interspeech 2024",
    presentation: "Oral",
    awards: [],
    image: "assets/imgs/indic-oov.png",
    topics: ["tts", "eval"],
    summary: "IndicOOV, a benchmark for out-of-vocabulary pronunciation in Indian TTS, and cheap data strategies that fix it.",
    links: { paper: "", arxiv: "https://arxiv.org/abs/2407.13435", github: "https://github.com/AI4Bharat/IndicOOV" },
  },
];
