const SITE = "https://www.estismitbio.co.za/";
const URL = SITE + "can-biokinetics-help-me";
const BODY_AREAS = ["Neck / shoulders","Back / lower back","Hip / groin","Knee","Ankle / foot","Elbow / wrist / hand","Multiple areas"];
const opts = (labels, next) => labels.map((l) => ({ l, next }));

const FLOW = {
  start: {
    bot: [
      ["Hi! Wondering whether Biokinetics is right for you?", "Answer a few quick questions and we'll show you exactly how a Biokineticist may be able to help."],
      ["Do you currently experience pain, discomfort or an injury that affects your movement?"],
    ],
    options: [{ l: "Yes, I have pain / an injury", next: "area" }, { l: "No, I'm not in pain", next: "goals" }],
  },
  area: {
    bot: [["Where are you experiencing the problem?"]],
    options: [
      ...opts(BODY_AREAS, "duration"),
      { l: "Post-operative / recovering from surgery", next: "postop" },
      { l: "Neurological condition / disability", next: "neuro" },
      { l: "Other", next: "duration" },
    ],
  },
  duration: { bot: [["How long has this been bothering you?"]], options: opts(["Less than 2 weeks","2–6 weeks","More than 6 weeks","It keeps coming back"], "affects") },
  affects: { bot: [["Does it affect any of these?"]], options: opts(["Exercise / sport","Work / sitting","Walking / stairs","Sleep / everyday activities","More than one of these"], "painResult") },
  painResult: { result: true, bot: [
    ["Yes — this is exactly where Biokinetics may help."],
    ["A Biokineticist doesn't only look at where you experience pain. We assess how your body moves, identify weakness, muscle imbalances and movement limitations that may be contributing to the problem, and then use individualised exercise rehabilitation to help restore function."],
    ["Your first step would usually be a First Evaluation, where we assess your movement, strength and function before developing your rehabilitation plan."],
  ] },
  postop: { bot: [["What stage are you currently in?"]], options: opts(["Surgery is still coming up","Recently had surgery","Finished physio but still need rehabilitation","Long-term weakness / limitations after surgery"], "postopResult") },
  postopResult: { result: true, bot: [
    ["Biokinetics can definitely form part of your recovery."],
    ["We specialise in the exercise rehabilitation phase of recovery — rebuilding your strength, mobility, stability, confidence and physical function so you can return to everyday life, work or sport safely."],
    ["We'll first evaluate where you are in your recovery and build your programme from there."],
  ] },
  neuro: { bot: [["What would you most like help with?"]], options: opts(["Strength","Balance & stability","Walking / mobility","Independence with daily activities","General fitness","Preventing further physical decline"], "neuroResult") },
  neuroResult: { result: true, bot: [
    ["Yes — Biokinetics may be able to help."],
    ["Exercise can be adapted to your individual abilities. A Biokineticist can work on strength, balance, mobility, cardiovascular fitness and functional independence while taking your specific condition and limitations into account."],
    ["We'd start with an individual assessment to determine exactly what you can do and where we can help you improve."],
  ] },
  goals: {
    bot: [["Great! You don't need to be injured or in pain to benefit from Biokinetics."], ["What would you most like help with?"]],
    options: [
      { l: "Sports performance", next: "sports" },
      { l: "Getting stronger", next: "starting" },
      { l: "Weight management", next: "weight" },
      { l: "Chronic disease / improving my health", next: "chronic" },
      { l: "Posture & movement", next: "posture" },
      { l: "Healthy ageing / staying independent", next: "ageing" },
      { l: "Pre- or post-natal exercise", next: "end" },
      { l: "Starting exercise safely", next: "starting" },
      { l: "Improving fitness & endurance", next: "end" },
      { l: "Osteoporosis / bone health", next: "end" },
      { l: "Balance & fall prevention", next: "ageing" },
      { l: "Sedentary lifestyle / desk work", next: "posture" },
      { l: "General strength & conditioning", next: "starting" },
      { l: "I'm not sure — I just want to be healthier", next: "end" },
    ],
  },
  sports: { bot: [["What would you most like to improve?"]], options: opts(["Strength / Power","Speed / Agility","Endurance","Movement efficiency","Injury prevention"], "sportsResult") },
  sportsResult: { result: true, bot: [
    ["Absolutely. Biokinetics isn't only rehabilitation."],
    ["We can assess your strength and movement, identify areas that may be limiting your performance, and build a programme around the demands of your sport."],
    ["Whether you're a competitive athlete or simply want to perform better, we can help you become stronger, more efficient and more resilient."],
  ] },
  weight: { bot: [["What best describes your goal?"]], options: opts(["Lose body fat","Build muscle","Improve fitness","Improve overall health","A combination"], "weightResult") },
  weightResult: { result: true, bot: [
    ["Yes — Biokinetics can be an important part of your journey."],
    ["Instead of simply telling you to \"exercise more\", we can assess your current fitness and physical ability and prescribe exercise specifically for you."],
    ["The focus is on building strength, improving fitness, increasing physical capacity and creating an exercise routine you can maintain long term."],
  ] },
  chronic: { bot: [["Are you currently managing a diagnosed health condition?"]], options: opts(["High blood pressure","Diabetes / insulin resistance","High cholesterol","Heart condition","Obesity","Multiple conditions","Other"], "chronicResult") },
  chronicResult: { result: true, bot: [
    ["This is an important area of Biokinetics."],
    ["Biokineticists use scientifically prescribed exercise to help manage many chronic conditions and improve physical capacity, strength and cardiovascular health."],
    ["Your programme would be based on your health history, current ability and individual needs."],
  ] },
  ageing: { bot: [["What is most important to you?"]], options: opts(["Staying strong","Balance / preventing falls","Walking better","Remaining independent","Getting fit again","All of the above"], "ageingResult") },
  ageingResult: { result: true, bot: [
    ["Yes — and you don't need to already be struggling before you start."],
    ["Biokinetics can help maintain or improve strength, balance, mobility, fitness and independence as you age."],
    ["We'll meet you at your current ability level and progress from there."],
  ] },
  posture: { bot: [["What would you most like to improve?"]], options: opts(["My posture","Weak core","Stiffness","Movement / mobility","Prevent future problems"], "postureResult") },
  postureResult: { result: true, bot: [
    ["Yes."],
    ["Rather than simply telling you to \"sit up straight\", we can assess how you move, where you're weak or restricted, and then strengthen the areas that need it."],
    ["The aim is to help your body become stronger and more capable, not simply force it into a particular posture."],
  ] },
  starting: { bot: [["Which sounds most like you?"]], options: opts(["I haven't exercised in years","I'm a complete beginner","I exercise but don't know what I should be doing","I want professional guidance"], "startingResult") },
  startingResult: { result: true, bot: [
    ["You're actually an ideal candidate for Biokinetics."],
    ["You don't need to be fit before seeing us."],
    ["We'll assess where you're starting, identify your strengths and weaknesses and help you exercise at the right level for your body — then progressively build from there."],
  ] },
  end: { result: true, bot: [] },
};

const ENDING = [
  ["It sounds like Biokinetics could be a great fit for you.", "Based on your answers, we'd recommend starting with a First Evaluation."],
  ["During your evaluation we'll look at your movement, strength, mobility and physical function to understand exactly where you're starting.", "From there, we'll explain what we found and recommend the best way forward for you."],
  ["No guessing. No generic exercise programme. A plan based on your body and your goals."],
];

const AREA = { "Neck / shoulders": "neck and shoulder pain", "Back / lower back": "lower back pain", "Hip / groin": "hip and groin pain", "Knee": "knee pain", "Ankle / foot": "ankle and foot pain", "Elbow / wrist / hand": "elbow, wrist or hand pain", "Multiple areas": "pain in multiple areas", "Other": "pain" };
const DUR = { "Less than 2 weeks": ["recent ", ""], "2–6 weeks": ["", " that started 2–6 weeks ago"], "More than 6 weeks": ["ongoing ", ""], "It keeps coming back": ["recurring ", ""] };
const AFF = { "Exercise / sport": "when exercising", "Work / sitting": "at work and when sitting", "Walking / stairs": "when walking or on stairs", "Sleep / everyday activities": "with sleep and everyday activities", "More than one of these": "in more than one part of my day" };
const POSTOP = { "Surgery is still coming up": "I have surgery coming up", "Recently had surgery": "I recently had surgery", "Finished physio but still need rehabilitation": "I've finished physio after surgery but still need rehabilitation", "Long-term weakness / limitations after surgery": "I have long-term weakness and limitations after surgery" };

function summary(a) {
  if (a.area === "Post-operative / recovering from surgery") return POSTOP[a.postop] || "I'm recovering from surgery";
  if (a.area === "Neurological condition / disability") return "I have a neurological condition / disability and would like help with " + (a.neuro || "").toLowerCase();
  if (a.area) {
    const d = DUR[a.duration] || ["", ""];
    let s = "I have " + d[0] + AREA[a.area] + d[1];
    if (a.affects) s += " that affects me " + AFF[a.affects];
    return s;
  }
  if (a.goals) {
    const detail = a.sports || a.weight || a.chronic || a.ageing || a.posture || a.starting;
    return "I'd like help with " + a.goals.toLowerCase() + (detail ? " (" + detail.toLowerCase() + ")" : "");
  }
  return "I'd like to find out more";
}

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": URL + "#webpage", url: URL, name: "Can Biokinetics Help Me? | Biokineticist in Paarl", description: "Answer a few quick questions to find out if biokinetics can help with your pain, injury, surgery recovery or health goals.", inLanguage: "en-ZA", isPartOf: { "@id": SITE + "#website" }, about: { "@id": SITE + "#practice" }, breadcrumb: { "@id": URL + "#breadcrumb" } },
    { "@type": "BreadcrumbList", "@id": URL + "#breadcrumb", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Can Biokinetics Help Me?", item: URL },
    ] },
  ],
};


export { FLOW, ENDING, summary, SCHEMA };
