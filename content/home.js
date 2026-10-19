const BOOK = "https://mygc.co.za/external/diary/7b937c87-0ed3-42b1-893e-374071e5bb94";
const SITE = "https://www.estismitbio.co.za/";
const waLink = (n) => "https://wa.me/27686104880?text=" + encodeURIComponent("Hi! I'd like to get started with the " + n.replace(/™/g, "").trim() + " programme.");
const PROGRAMMES = [
  { num: "01", name: "Move Beyond Pain™", blurb: "For ongoing pain that's stopping you from enjoying life.", accent: "orange", tags: ["Back pain","Neck pain","Hip pain","Shoulder pain","Knee pain","Arthritis","Ankle pain","Sciatica","Chronic pain","Tendinopathies","Repetitive strain injuries"] },
  { num: "02", name: "Recover Stronger™", blurb: "Recover safely after surgery or injury.", accent: "blue", tags: ["ACL rehab","Shoulder surgery","Hip replacements","Knee replacements","Fractures","Sports injuries","Tendon repairs","Post-operative rehabilitation"] },
  { num: "03", name: "Move Better™", blurb: "Improve mobility, posture and strength before injuries start.", accent: "orange", tags: ["Poor posture","Tight muscles","Weakness","Limited mobility","Balance problems","Frequent stiffness","Office workers","New moms","People wanting to prevent injuries"] },
  { num: "04", name: "Perform Better™", blurb: "Helping active people improve performance, recover faster, and reduce their risk of injury.", accent: "blue", tags: ["Golfers","Runners","Cyclists","Padel","CrossFit","HYROX","Active Adults"] },
  { num: "05", name: "Healthy Living™", blurb: "Exercise is medicine. Improve your health through safe, guided movement.", accent: "orange", tags: ["Diabetes","High blood pressure","Obesity","High cholesterol","Metabolic syndrome","Weight management","Cancer rehabilitation","Cardiac rehabilitation"] },
  { num: "06", name: "Stay Active for Life™", blurb: "Helping you stay independent, strong and active as you age.", accent: "blue", tags: ["Over 50s","Over 60s","Osteoporosis","Arthritis","Balance issues","Fall prevention","General weakness","Joint stiffness"] },
].map((p) => ({ ...p, href: waLink(p.name) }));
const REGIONS = [
  { key: "knee", title: "Knee Pain & Injuries", text: "From everyday knee pain to sports injuries, arthritis, ACL injuries and post-surgery rehab, we assess the whole movement chain to find what’s contributing to your pain and build strength where it’s needed.", tags: ["General knee pain","ACL rehab","Runner's knee","Patellofemoral pain","Meniscus injuries","Osgood-Schlatter","Arthritis","Knee replacement rehab"] },
  { key: "hip", title: "Hip Pain & Injuries", text: "Hip pain when walking, running, climbing stairs or getting up from a chair? Maybe it aches after sitting for too long, feels stiff in the mornings, or stops you from exercising like you used to. We can help you move more comfortably and confidently again.", tags: ["Hip impingement","Arthritis","Bursitis","Groin strain","Hip replacement rehab","Fracture recovery"] },
  { key: "neck & shoulder", title: "Neck & Shoulder Pain", text: "Neck or shoulder pain when working at a desk, driving, exercising or reaching overhead? Maybe you wake up stiff, struggle to turn your neck, or feel tension building through your shoulders as the day goes on. We can help you get moving freely again.", tags: ["Rotator cuff injuries","Impingement","Labrum tears","Frozen shoulder","Tendinopathy","Dislocations","Shoulder surgery rehab","Whiplash","Nerve pain down the arm","Tension headaches","Desk posture","Stiffness"] },
  { key: "low back", title: "Low Back Pain", text: "Lower back pain when sitting, standing, bending, lifting or exercising? Maybe your back feels stiff when you wake up, aches after a long day, or the same pain just keeps coming back. We can help you get stronger and move with confidence again.", tags: ["Disc injuries","Sciatica","Spinal stenosis","Spondylolisthesis","Muscle spasm","Chronic back pain"] },
  { key: "foot & ankle", title: "Foot & Ankle Pain", text: "Foot or ankle pain when walking, running, jumping or standing for long periods? Maybe your ankle feels unstable, your feet ache by the end of the day, or an old injury keeps bothering you. We can help you build strength and get back to moving comfortably.", tags: ["Plantar fasciitis","Achilles tendinopathy","Ankle sprains","Flat feet","Shin splints","Ligament surgery rehab"] },
  { key: "elbow & wrist", title: "Elbow & Wrist Pain", text: "Elbow or wrist pain when lifting, gripping, typing, playing sport or doing everyday tasks? Maybe it hurts when carrying something, opening a jar or putting weight through your hands. We can help you rebuild strength and get back to using your arm comfortably.", tags: ["Tennis elbow","Golfer's elbow","Carpal tunnel","Wrist fractures","Repetitive strain injuries"] },
  { key: "balance & posture", title: "Balance, Posture & Healthy Ageing", text: "For older adults who want to stay steady, upright and independent. We build strength, balance and confidence so everyday movement feels safer.", tags: ["Fall prevention","Poor balance","Rounded posture","Osteoporosis","Joint stiffness","General weakness","Over 60s"] },
  { key: "disability", title: "Disabilities & Neurological Conditions", text: "Exercise adapted to your body and your goals. We work at your pace to improve strength, mobility and independence in daily life.", tags: ["Stroke recovery","Cerebral palsy","Multiple sclerosis","Parkinson's disease","Spinal cord injury","Traumatic brain injury","Amputee rehab","Intellectual disability"] },
  { key: "sports performance", title: "Athletes & Sports Performance", text: "For active people who want to perform better and stay injury-free. We test how you move, find the weak links and build a programme around your sport.", tags: ["Runners","Cyclists","Golfers","Padel","CrossFit","HYROX","Return to sport","Injury prevention","And more…"] },
  { key: "chronic", title: "Chronic Conditions", text: "Exercise is medicine. Safe, supervised exercise helps you manage long-term conditions, improve your health and feel more in control.", tags: ["Diabetes","High blood pressure","High cholesterol","Obesity","Metabolic syndrome","Osteoporosis","Arthritis","Cardiac rehabilitation","Cancer rehabilitation"] },
];
const ROOT_STEPS = [
  { n: "01", accent: "orange", title: "We find the muscles that switched off.", text: "A thorough assessment shows us what isn't doing its job." },
  { n: "02", accent: "blue", title: "We get them working again.", text: "Targeted exercises wake up and strengthen those muscles." },
  { n: "03", accent: "orange", title: "Your body settles down.", text: "The overworked muscles and joints get relief, and the pain eases." },
];
const STEPS = [
  { n: "01", title: "Assess", text: "Understand the real cause." },
  { n: "02", title: "Restore", text: "Reduce pain. Improve movement." },
  { n: "03", title: "Strengthen", text: "Build confidence." },
  { n: "04", title: "Perform", text: "Return to doing what you love." },
  { n: "05", title: "Maintain", text: "Prevent future injuries." },
];
const WHY = [
  { icon: "shield-check", text: "Registered Biokineticist" },
  { icon: "target", text: "Evidence-Based Care" },
  { icon: "heart-handshake", text: "Medical Aid Friendly" },
  { icon: "users", text: "Personalised Programmes" },
  { icon: "star", text: "Google 5-Star Reviews" },
  { icon: "heart", text: "Individual Attention" },
  { icon: "activity", text: "Root Cause Focus" },
  { icon: "award", text: "Long-Term Results" },
];
const INCLUDED = ["Comprehensive Assessment","Root Cause Analysis","Personalised Recovery Plan","Guided Exercise Sessions","Home Exercise Programme","Progress Tracking","Education","WhatsApp Support"];
const TEAM = [
  { image: "/assets/team-img-1.jpg", name: "Esti Smit" },
  { image: "/assets/team-img-2.jpg", name: "Zani Van Zyl" },
  { image: "/assets/team-img-3.jpg", name: "Anya Bruwer" },
];
const TESTIMONIALS = [
  { image: "/assets/shawn-img.jpg", name: "Shawn Smit", quote: "", story: "Ran 100km, couldn’t have done it without Esti. I have had mobility issues in my ankle since a ligament surgery 15 years ago. Started training with Esti two years ago and she managed to take me from unbearable pain in my right knee when running to being able to take on a 100km run. Esti doesn’t shy away from my crazy goals. She has believed in me and provided me the tools and reality checks I need to prepare my body for the load on race day. The most progress I have seen is with regular visits and keeping to the recommended exercises after each session. If you want to take your running to the next level then Esti can help you get the right muscles firing and strong enough to achieve your goals." },
  { image: "/assets/maggie-img.jpg", name: "Maggie Grobler", quote: "", story: "By my forties I was in pain almost every morning, and surgery was becoming a consideration. What completely changed my perspective was starting treatment with a biokineticist after acute physiotherapy. Through Esti and Zani, I finally began to understand that true core strength involves far more than just abdominal muscles. I learned that weakness often starts from the ground up — especially in the feet and ankles. Even simple exercises, when done correctly, have already made a remarkable difference. Esti and Zani have an exceptional ability to teach exactly which muscles to activate and how to engage the body properly. Their group sessions still feel incredibly personal and attentive, and their holistic approach to movement, strength, and rehabilitation has been life-changing for me." },
  { image: "/assets/albert-img.jpg", name: "Albert Geiger", quote: "", story: "Zani has been supporting me as recover mobility after reconstructive surgery and other cancer treatment. She sets up workable exercises, does videos for clarity and keeps me on my toes with my exercise program.\n\nThe practise has a well equipped gym area and communication and administration are well managed.\nZani has been an immeasurable support as I navigate a long road to recovery. She is a qualified biokinetecist in Esti Smit's practise." },
  { image: "/assets/bettina-img.jpg", name: "Bettina Meyer", quote: "", story: "Esti is the perfect combo of relational and professional. She helped me strengthen my ankle after a 3 third degree tare. I went from not being able to bend, to being strong enough to run a half marathon. She not only strengthened my ankle, but also all the muscle that had weaknesses, to ensure my knee and hips dont over compensate because of the ankle. Highly recommend her!" },
].map((t) => ({ ...t, imageAlt: t.name + ", patient at Esti Smit Biokinetics, Paarl" }));
const FAQS = [
  { q: "What is Biokinetics?", a: "Biokinetics is about helping your body move better, feel stronger and function the way it should. Through personalised exercise and movement therapy, we look beyond where it hurts to understand why it hurts. Instead of simply managing symptoms, we focus on finding the root cause, restoring proper muscle function and building long-term strength, so you can get back to doing what you love, with confidence." },
  { q: "Do I need a referral to see a Biokineticist?", a: "No. You can contact us directly to book your first evaluation. If you’ve been referred by a doctor, physio or specialist, you’re also welcome to bring along any reports, scans or relevant information." },
  { q: "Do you claim from medical aid?", a: "Yes, we can claim directly from your medical aid if you would like us to. We are registered healthcare providers and Biokinetics may be covered by your medical aid, depending on your scheme, plan and available benefits. We recommend confirming your specific benefits with your medical aid." },
  { q: "What if I’ve already tried physio or other treatment and I’m still in pain?", a: "You’re definitely not alone. Sometimes the painful area isn’t the only part of the problem. We assess your movement, strength, mobility and muscle function to identify weaknesses or compensations that may be contributing to your symptoms — and then use exercise to address them." },
  { q: "How many sessions will I need?", a: "Everyone is different. It depends on your condition, how long you’ve had it, your current strength and function, and what you want to get back to doing. After your first evaluation, we’ll explain what we found and recommend a plan specifically for you." },
  { q: "Do you help with rehabilitation after surgery?", a: "Yes. Post-operative rehabilitation is an important part of Biokinetics. We help rebuild strength, mobility and function following procedures such as knee and hip replacements, ACL reconstruction, shoulder surgery and other orthopaedic procedures. Biokinetics is particularly associated with the final phase of rehabilitation and return to normal activity or sport." },
  { q: "Do I have to be injured to see a Biokineticist?", a: "Not at all! Biokinetics isn't only for pain and injuries. We also work with people who want to get stronger, improve fitness, manage chronic conditions, improve balance and mobility, exercise safely as they age, or improve sports performance." },
  { q: "What happens at my first evaluation?", a: "We start by talking about what’s bothering you and what you want to get back to doing. We then assess relevant areas such as your movement, strength, mobility and muscle function. From there, we explain what we found and create an individualised exercise and rehabilitation plan." },
  { q: "I'm not very fit. Can I still come?", a: "Absolutely. You don't need to be fit before seeing a Biokineticist. Your programme starts at your current ability level and progresses as you become stronger and more confident." },
  { q: "Can you help me if I don't know exactly what's causing my pain?", a: "Yes — that's what the first evaluation is for. You don't need to arrive with a diagnosis. We assess how you move and function and determine the most appropriate way forward. If we feel your symptoms need to be assessed by another healthcare professional first, we'll tell you." },
  { q: "Can you help if I've had pain for years?", a: "Yes. Many of the people we help have been living with pain for years and assumed it was just something to manage. Finding the actual root cause often changes that." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "Physiotherapy"],
      "@id": SITE + "#practice",
      name: "Esti Smit Biokinetics",
      alternateName: "Esti Smit Biokineticist",
      description: "HPCSA-registered biokinetics practice in Paarl offering personalised exercise therapy for pain, injury, post-operative rehabilitation, chronic conditions and healthy ageing.",
      url: SITE,
      logo: SITE + "assets/logo-img.png",
      image: SITE + "og-image.jpg",
      telephone: "+27686104880",
      email: "esti.healthplus@gmail.com",
      priceRange: "Medical aid accepted",
      address: { "@type": "PostalAddress", streetAddress: "Winelands Medical Centre, 1D New Eskdale Street, De Zoete Inval", addressLocality: "Paarl", addressRegion: "Western Cape", postalCode: "7646", addressCountry: "ZA" },
      areaServed: [{ "@type": "City", name: "Paarl" }, { "@type": "AdministrativeArea", name: "Cape Winelands" }],
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" }],
      medicalSpecialty: "Physiotherapy",
      knowsAbout: ["Biokinetics","Exercise therapy","Back pain","Sports injury rehabilitation","Post-operative rehabilitation","Chronic disease management","Fall prevention"],
      employee: [
        { "@type": "Person", name: "Esti Smit", jobTitle: "Biokineticist", alumniOf: "University of the Western Cape", memberOf: [{ "@type": "Organization", name: "Health Professions Council of South Africa" }, { "@type": "Organization", name: "Biokinetics Association of South Africa" }] },
        { "@type": "Person", name: "Zani Van Zyl", jobTitle: "Biokineticist" },
        { "@type": "Person", name: "Anya Bruwer", jobTitle: "Biokineticist" },
      ],
      potentialAction: { "@type": "ReserveAction", target: BOOK, name: "Book Your Assessment" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Biokinetics programmes",
        itemListElement: PROGRAMMES.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: p.name, description: p.blurb, serviceType: "Biokinetics", areaServed: "Paarl", provider: { "@id": SITE + "#practice" } } })),
      },
    },
    { "@type": "WebSite", "@id": SITE + "#website", url: SITE, name: "Esti Smit Biokinetics", inLanguage: "en-ZA", publisher: { "@id": SITE + "#practice" } },
    { "@type": "WebPage", "@id": SITE + "#webpage", url: SITE, name: "Biokineticist in Paarl | Esti Smit Biokinetics", isPartOf: { "@id": SITE + "#website" }, about: { "@id": SITE + "#practice" }, inLanguage: "en-ZA" },
    { "@type": "FAQPage", "@id": SITE + "#faq", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};


export { REGIONS, ROOT_STEPS, TESTIMONIALS, FAQS, PROGRAMMES, SCHEMA, BOOK, SITE };
