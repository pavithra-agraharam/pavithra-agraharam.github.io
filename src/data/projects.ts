export type Domain =
  | 'Computer Vision & Deep Learning'
  | 'NLP & Conversational AI'
  | 'Data Science & Predictive ML'
  | 'Data Engineering & MLOps'
  | 'Full-Stack Engineering'

export const DOMAINS: Domain[] = [
  'Computer Vision & Deep Learning',
  'NLP & Conversational AI',
  'Data Science & Predictive ML',
  'Data Engineering & MLOps',
  'Full-Stack Engineering',
]

export const DOMAIN_SHORT: Record<Domain, string> = {
  'Computer Vision & Deep Learning': 'Computer Vision',
  'NLP & Conversational AI': 'NLP',
  'Data Science & Predictive ML': 'Data Science',
  'Data Engineering & MLOps': 'Data Eng / MLOps',
  'Full-Stack Engineering': 'Full-Stack',
}

export interface ProjectDetails {
  goal: string
  challenges: string[]
  highlights: string[]
}

export interface Project {
  title: string
  domain: Domain
  blurb: string
  metrics: string[]
  tech: string[]
  github?: string
  featured?: boolean
  details: ProjectDetails
}

export const projects: Project[] = [
  // ---------- Computer Vision & Deep Learning ----------
  {
    title: 'Liveness Authentication System',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Anti-spoofing security AI that uses 3D optical flow across 68 facial landmarks to tell a live human from a photo or video replay, firing SMTP alerts on intrusions.',
    metrics: ['<0.1% false-accept rate', '5,000+ frames @ 30 FPS', '2s threat alerts'],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Dlib', 'NumPy'],
    github: 'https://github.com/pavithra-agraharam/LivenessAuthentication',
    featured: true,
    details: {
      goal: 'Build a security system that can tell a live human from a printed photo or video replay trying to spoof facial recognition.',
      challenges: [
        'Continuous webcam frame extraction leaked memory and crashed hardware after ~10 minutes - fixed by managing OpenCV capture buffers and forcing garbage collection on unused tensors each inference cycle.',
        'Static high-res images could fool the system - trained the model on 3D optical flow to track how pixels and shadows move over time, distinguishing real depth from a flat screen.',
      ],
      highlights: [
        'Architected a 3D optical-flow pipeline tracking 68 facial landmarks in real time.',
        'Optimized the TensorFlow inference engine to sustain 1080p at 30 FPS with no dropped frames.',
        'Integrated automated SMTP alerts firing within 2s of a detected spoof; held a <0.1% false-accept rate over 5,000+ validation frames.',
      ],
    },
  },
  {
    title: 'Agricultural Crop Disease Detection',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Snap-a-leaf diagnostic engine using ResNet50/MobileNet transfer learning with heavy regularization to ignore soil noise and pinpoint plant pathogens instantly.',
    metrics: ['92% accuracy', '15,000 images', 'week → <1 min diagnosis'],
    tech: ['Python', 'PyTorch', 'Keras', 'ResNet50', 'CNN'],
    featured: true,
    details: {
      goal: 'Give farmers an instant tool to identify what disease is killing their crops from a single phone photo of a leaf.',
      challenges: [
        'Models latched onto background soil and shadows instead of disease spots - forced focus on the leaf with heavy L2 regularization, Global Average Pooling and a strict 0.5 dropout rate.',
        'Training from scratch was compute-heavy - used ResNet50/MobileNet transfer learning to extract deep feature maps efficiently.',
      ],
      highlights: [
        'Processed and augmented a 15,000-image dataset of healthy and diseased crops.',
        'Tuned with the Adam optimizer and sparse categorical cross-entropy across 50 epochs.',
        'Hit 92% accuracy (13,800/15,000), cutting diagnosis from a week-long lab test to under a minute.',
      ],
    },
  },
  {
    title: 'Monkey Species Detection',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Wildlife-conservation classifier identifying 10 monkey species from raw jungle photos, using transfer learning and a memory-optimized Torchvision pipeline to beat GPU OOM crashes.',
    metrics: ['99% test accuracy', '100% validation', '10 species'],
    tech: ['PyTorch', 'Torchvision', 'ResNet50', 'Python'],
    featured: true,
    details: {
      goal: 'Identify 10 different monkey species from raw, unstructured jungle photographs to help conservationists track endangered populations.',
      challenges: [
        'A from-scratch model overfit on background jungle foliage instead of biological traits - switched to a pre-trained ResNet50 with transfer learning.',
        'Variably sized high-res images caused fatal GPU out-of-memory errors - built a Torchvision pipeline resizing to 224×224 with center-crop and normalization.',
      ],
      highlights: [
        "Re-engineered ResNet50's final fully-connected layer for 10 classes; trained with SGD and an LR scheduler over 10 epochs.",
        'Used PyTorch DataLoaders to optimize memory batching for complex image tensors.',
        'Delivered 99% test accuracy (990/1,000) and 100% validation; handles unseen user uploads.',
      ],
    },
  },
  {
    title: 'Driver Drowsiness Detection',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Edge-computing dashcam co-pilot that calculates EAR/MAR facial geometry to catch micro-sleeps and fires a 90 dB alarm on an async thread - without freezing the video feed.',
    metrics: ['30 FPS, zero drops', '<400 ms alert', '68-point landmarks'],
    tech: ['Python', 'OpenCV', 'dlib', 'Threading'],
    details: {
      goal: "Monitor a driver's face in real time and sound an immediate alarm the moment they begin to fall asleep or yawn.",
      challenges: [
        'A synchronous alarm froze the entire video feed until playback finished - decoupled the architecture, dispatching audio to an async background worker so frame processing never stalls.',
        'Detecting fatigue reliably came down to geometry - computed custom Eye and Mouth Aspect Ratios (EAR/MAR) across 20 consecutive frames.',
      ],
      highlights: [
        "Used Euclidean distance over dlib's 68-point landmarks to extract eye and mouth coordinates.",
        'Sustained a seamless 30 FPS with zero dropped frames, even during alerts.',
        'Triggers a 90 dB warning within 400 ms of a detected micro-sleep.',
      ],
    },
  },
  {
    title: 'Road Traffic Condition Monitoring',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Custom CNN that filters weather and lighting noise to flag road anomalies from live camera feeds, laying the groundwork for automated emergency dispatch.',
    metrics: ['99% accuracy', '1,980 / 2,000 tests', '5,000+ images'],
    tech: ['Python', 'OpenCV', 'Keras', 'CNN'],
    details: {
      goal: 'Classify traffic conditions and road anomalies from camera imagery as the foundation of an automated emergency-alert system.',
      challenges: [
        'A custom dataset had wildly varying resolution, lighting and weather noise that confused the CNN and caused OOM crashes - built an OpenCV pipeline resizing, greyscaling and Gaussian-blurring to strip noise.',
        'Prevented GPU memory overloads by streaming images in precise batches via Keras iterators.',
      ],
      highlights: [
        'Designed a custom CNN with max-pooling and dropout to force generalization across unseen weather.',
        'Streamed 5,000+ training images in batches to avoid hardware crashes.',
        'Reached 99% accuracy (1,980/2,000) on blind test images - production-ready for live camera integration.',
      ],
    },
  },
  {
    title: 'Virtual Mouse - Hand Gestures',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Dataset-free HCI that replaces the physical mouse with a webcam, mapping fingertip contours to OS-level click and scroll events via a dynamic boundary-box algorithm.',
    metrics: ['<15 ms latency', '60 FPS', '4 mouse actions'],
    tech: ['Python', 'OpenCV', 'NumPy', 'PyAutoGUI'],
    details: {
      goal: 'Let users control a computer with hand movements in the air, replacing the physical mouse entirely with just a webcam.',
      challenges: [
        'Traditional gesture systems cross-reference live feeds against huge datasets, draining memory and causing lag - eliminated the dataset with a dynamic boundary-box algorithm mapping fingertip contours straight to cursor moves.',
        'Built a live background-subtraction model on blurred greyscale frames to count fingertips reliably across lighting.',
      ],
      highlights: [
        'Isolated the hand across 5 distinct lighting environments.',
        'Mapped geometric coordinate shifts to 4 OS-level events (left/right/double-click, scroll).',
        'Tuned the PyAutoGUI thread to 60 FPS for sub-15 ms action-to-execution latency.',
      ],
    },
  },
  {
    title: 'Attendance via Facial Recognition',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Biometric roll-call system pairing Viola-Jones detection with PCA Eigenfaces and histogram equalization to log a full class to Excel in seconds - killing proxy attendance.',
    metrics: ['30 students <10 s', 'zero manual entry', '500+ image DB'],
    tech: ['Python', 'OpenCV', 'Viola-Jones', 'Eigenfaces', 'OpenPyXL'],
    details: {
      goal: 'Automate classroom roll-call by identifying students from live video and logging attendance with no manual intervention.',
      challenges: [
        'Fluctuating classroom lighting broke Eigenfaces, which read deep shadows as structural facial changes - added histogram equalization to balance contrast before recognition.',
        'Built a layered pipeline: Haarcascade classifiers detect faces despite noise, then feed cropped data into PCA-based Eigenfaces for stable recognition.',
      ],
      highlights: [
        'Generated a secure 500+ augmented-image student database.',
        'Isolated and cropped up to 30 faces from a single wide-angle frame.',
        'Logged 30 students in under 10s straight to a formatted Excel ledger via OpenPyXL.',
      ],
    },
  },
  {
    title: 'Emotion Detection Models',
    domain: 'Computer Vision & Deep Learning',
    blurb:
      'Educational computer-vision prototype that reads facial emotion, fixing class imbalance with augmentation while mentoring 3 student cohorts through the full pipeline.',
    metrics: ['92% accuracy', '10,000+ images', '+2,000 synthetic'],
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    details: {
      goal: 'Build a model that reads emotion from a human face - and use it to demystify ML for beginner students.',
      challenges: [
        'Severely imbalanced classes (many happy images, few disgusted) biased predictions - synthesized 2,000 extra samples via image mirroring and rotation.',
        'Translated dense tensor math into runnable Python scripts so 3 student cohorts could follow along.',
      ],
      highlights: [
        'Preprocessed and normalized 10,000+ facial images for ingestion.',
        'Ran k=5 cross-validation against unseen data batches.',
        'Delivered 92% accuracy (9,200/10,000) as a stable teaching prototype.',
      ],
    },
  },

  // ---------- NLP & Conversational AI ----------
  {
    title: 'Intelligent Ticket Routing System',
    domain: 'NLP & Conversational AI',
    blurb:
      'NLP classification engine (SVM + TF-IDF) with a custom jargon-normalization layer that reads incoming IT tickets and auto-routes them to the right engineering tier.',
    metrics: ['500+ tickets/day', '$40k/yr saved', '50,000+ records'],
    tech: ['Python', 'NLP', 'SVM', 'TF-IDF', 'spaCy', 'FastAPI'],
    featured: true,
    details: {
      goal: 'Stop IT and support teams from drowning in misdirected help-desk tickets by reading and routing them automatically.',
      challenges: [
        'Requests arrived in hundreds of formats and styles - built an NLP engine to read, normalize and categorize text to the exact engineering tier.',
        'Proprietary corporate jargon caused misclassifications - added a regex + hard-coded dictionary normalization layer before vectorization.',
      ],
      highlights: [
        'Trained a Support Vector Machine on 50,000+ resolved tickets.',
        'Engineered a TF-IDF vectorizer to extract meaning from raw text.',
        'Integrated into the ticketing API via REST; routes 500+ tickets/day, saving $40k/yr.',
      ],
    },
  },
  {
    title: 'Vishra - AI Virtual Assistant',
    domain: 'NLP & Conversational AI',
    blurb:
      'Voice-activated desktop assistant with an async intent-parsing engine that offloads API calls to background threads and falls back to typed prompts for fault tolerance.',
    metrics: ['50+ voice intents', '30+ ops/session', 'hands-free OS control'],
    tech: ['Python', 'Asyncio', 'SpeechRecognition', 'Wolfram/Wiki APIs'],
    details: {
      goal: 'Build a hands-free, voice-activated desktop assistant from scratch that can control a computer and handle daily chores.',
      challenges: [
        'Synchronous external API calls froze the UI thread and crashed audio buffers - moved network requests to background threads with Python asyncio.',
        'Speech recognition failed on different accents - added a typed-prompt fallback after two failed recognition attempts.',
      ],
      highlights: [
        'Parsed 50+ unique daily voice commands from continuous audio streams.',
        'Routed authenticated commands to Wolfram Alpha, Wikipedia, OS and browser APIs.',
        'Robust exception handling kept it stable on 0-byte audio; executed 30+ operations per session.',
      ],
    },
  },

  // ---------- Data Science & Predictive ML ----------
  {
    title: 'COVID-19 Mortality & Weather Predictor',
    domain: 'Data Science & Predictive ML',
    blurb:
      'Epidemiological early-warning framework that rescues missing climate data via KNN imputation and benchmarks 20 ensemble models to forecast localized mortality spikes.',
    metrics: ['15-pt error reduction', '50,000+ rows', '20 models tuned'],
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'CatBoost'],
    featured: true,
    details: {
      goal: 'Forecast localized COVID-19 mortality spikes from climate data so hospitals could plan ICU capacity ahead of time.',
      challenges: [
        'Meteorological datasets had massive gaps that shrank training volume - built a KNN imputation pipeline to rescue thousands of rows instead of dropping them.',
        'Weak baseline algorithms - normalized features with MinMaxScaler and pivoted to gradient-boosting ensembles.',
      ],
      highlights: [
        'Aggregated and normalized 50,000+ rows of global weather and pandemic data.',
        'Systematically trained and benchmarked 20 regression models, tuning XGBoost/LightGBM hyperparameters.',
        'LightGBM cut absolute error 15 points below baseline for mortality-spike prediction.',
      ],
    },
  },
  {
    title: 'Credit Risk Assessment',
    domain: 'Data Science & Predictive ML',
    blurb:
      'Predictive loan-evaluation model with a 5× cost matrix penalizing false positives and Reduced Error Pruning, plus a star-schema warehouse for a hospital management system.',
    metrics: ['72% accuracy', '5,000 applications', '5× FP penalty'],
    tech: ['WEKA', 'J48', 'SQL', 'Star-Schema'],
    details: {
      goal: 'Predict whether a loan applicant is a good or bad credit risk, and design a foundational hospital data-warehouse schema.',
      challenges: [
        'The J48 tree overfit on 21 attributes and plain accuracy was misleading (approving a bad loan costs far more than rejecting a good one) - added a 5× cost matrix and Reduced Error Pruning.',
        'Enforced a strict minimum-leaf-size hyperparameter to remove unstable branches and force generalization.',
      ],
      highlights: [
        'Processed a raw banking dataset of 5,000 loan applications.',
        'Architected a star-schema (1 fact, 4 dimensions) for a parallel hospital-management system.',
        'Hit 72% cross-validation accuracy while sharply cutting risky approvals.',
      ],
    },
  },
  {
    title: 'Retail Analytics & Demand Forecasting',
    domain: 'Data Science & Predictive ML',
    blurb:
      'Cleaned 2M+ rows of messy retail history with IQR outlier capping and 15 engineered features to forecast item-level demand across 50 categories and slash dead stock.',
    metrics: ['2M+ rows / 3 yrs', '50 categories', '10,000+ dead stock cut'],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
    details: {
      goal: 'Mine messy retail data for hidden buying trends and deploy predictive models for inventory optimization.',
      challenges: [
        'Data was dirty with missing entries, odd formatting and seasonal outliers that skewed predictions - cleaned the pipelines before modeling.',
        'Black-Friday-style spikes caused massive over-prediction for normal months - built an IQR statistical filter to cap extreme outliers before training.',
      ],
      highlights: [
        'Ingested and cleaned ~2M rows spanning 3 years of operations.',
        'Engineered 15 features such as rolling averages and lead-time metrics.',
        'Forecast item-level demand across 50 categories, cutting 10,000+ units of dead stock.',
      ],
    },
  },

  // ---------- Data Engineering & MLOps ----------
  {
    title: 'Intelligent Network Inventory Pipeline',
    domain: 'Data Engineering & MLOps',
    blurb:
      'Automated ETL pipeline with secure API connectors that unifies 4 siloed IT systems, conforms timestamps to ISO 8601, and dedupes by MAC address into one source of truth.',
    metrics: ['25,000+ assets', '40 hrs saved', '4 systems unified'],
    tech: ['Python', 'SQL', 'ETL', 'Pandas', 'Cron'],
    github: 'https://github.com/pavithra-agraharam/network-inventory-data-pipeline',
    featured: true,
    details: {
      goal: 'Build a robust pipeline so IT could automatically track hardware and software inventory across incompatible systems.',
      challenges: [
        '4 sub-systems formatted data in entirely different ways, breaking integration - built an ETL pipeline to scrub and standardize everything before load.',
        'Conflicting timestamps and null representations were rejected by the central DB - added a Pandas transformation layer conforming all timestamps to ISO 8601.',
      ],
      highlights: [
        'Architected secure API connectors pulling daily snapshots from 4 corporate silos.',
        'Engineered complex SQL merge logic to deduplicate by MAC address.',
        'Deployed a scheduled midnight cron ETL; unified 25,000+ assets and eliminated 40 hrs of manual tracking.',
      ],
    },
  },
  {
    title: 'Automated Digital Preservation Pipeline',
    domain: 'Data Engineering & MLOps',
    blurb:
      'FADGI-compliant Python/Bash ingestion engine applying SHA-256 checksums and BagIt packaging with auto-quarantine, processing 50,000+ archival TIFFs with zero data loss.',
    metrics: ['50,000+ files', '65 hrs/batch saved', '100% integrity'],
    tech: ['Python', 'Bash', 'Google Cloud Vision', 'Hashlib', 'BagIt'],
    details: {
      goal: 'Digitize fragile historical archives safely so nothing is lost to time, and make them searchable for researchers.',
      challenges: [
        'Strict federal FADGI rules mean one corrupted file fails an entire batch - automated SHA-256/MD5 checksums and BagIt packaging to guarantee nothing is altered during ingestion.',
        'Manually verifying huge TIFF batches was error-prone - used hashlib to generate and verify a checksum for every file on ingestion.',
      ],
      highlights: [
        'Automated BagIt packaging via Bash scripts across 50,000+ archival files.',
        'Integrated the Google Cloud Vision API to extract baseline metadata.',
        'Built resilient error-logging that quarantines corrupt files without halting the batch; reclaimed 65 hrs/batch with a perfect audit record.',
      ],
    },
  },
  {
    title: 'OCR / HTR Digitization Framework',
    domain: 'Data Engineering & MLOps',
    blurb:
      'Turned 19th-century handwritten ledgers into searchable data by tuning Tesseract PSM and OpenCV adaptive thresholding, benchmarked against 500 pages of ground truth.',
    metrics: ['500-page ground truth', '5,000+ lines recovered', 'PyTest-validated'],
    tech: ['Python', 'OpenCV', 'Tesseract', 'PyTest'],
    details: {
      goal: 'Turn faded, handwritten 19th-century AMHS ledgers into a modern, searchable digital database.',
      challenges: [
        'Standard OCR produced gibberish on faded cursive - restored ink first with OpenCV adaptive Gaussian thresholding.',
        'Tesseract scrambled complex multi-column layouts - tuned Page Segmentation Mode (PSM) to treat pages as sparse text and preserve tabular structure.',
      ],
      highlights: [
        'Built a Python framework benchmarking OCR output against 500 pages of human-transcribed ground truth.',
        'Wrote extensive PyTest suites to flag systematic reading errors across batches.',
        'Transformed thousands of unreadable handwritten lines into clean, queryable data.',
      ],
    },
  },
  {
    title: 'Telemetry Aggregation Platform',
    domain: 'Data Engineering & MLOps',
    blurb:
      'Airflow-orchestrated platform with Dockerized API integrations that unifies 4 enterprise sub-systems and centralizes assets into an AWS-to-Snowflake architecture.',
    metrics: ['25,000+ records', '40 hrs/mo saved', 'ISO 8601 enforced'],
    tech: ['Python', 'Pandas', 'SQL', 'Airflow', 'Docker', 'Snowflake'],
    details: {
      goal: 'Eliminate data silos by unifying telemetry from 4 incompatible enterprise sub-systems into one source of truth.',
      challenges: [
        'The systems used conflicting formats - built secure API connectors and a Pandas transformation layer standardizing everything to ISO 8601.',
        'Duplicate assets spanned systems - engineered SQL merge logic to dedupe by MAC address on a schedule.',
      ],
      highlights: [
        'Containerized REST integrations with Docker and Amazon ECS.',
        'Orchestrated nightly DAGs on Amazon MWAA + Apache Airflow staging S3 data.',
        'Centralized 25,000+ records into an AWS-to-Snowflake architecture, saving 40 hrs/month.',
      ],
    },
  },
  {
    title: 'Global FMCG Data Harmonization',
    domain: 'Data Engineering & MLOps',
    blurb:
      'Cleansed a global SAP S/4HANA supply chain with fuzzy-matching SQL and dbt pipelines, scrubbing 1.5M+ legacy records to prevent factory stock-outs.',
    metrics: ['1.5M+ records', '33% fewer errors', '300+ raw materials'],
    tech: ['SAP S/4HANA', 'SQL', 'dbt', 'Airflow', 'Snowflake', 'Tableau'],
    details: {
      goal: 'Fix messy data inside a massive global SAP-ERP database so the supply-chain team could forecast accurately.',
      challenges: [
        'Duplicates and outdated records drove bad forecasts and warehouse waste - authored complex SQL validation to cleanse the legacy data.',
        'Factories named the same materials differently, breaking aggregate calculations - used SQL JOIN/COALESCE with fuzzy-matching to merge duplicates.',
      ],
      highlights: [
        'Queried and validated 1.5M+ legacy records in the production SAP database.',
        'Ran scheduled nightly SQL scrubbing against strict validation constraints.',
        'Mapped routing for 300+ materials; cut data errors 33% and standardized 75% of records.',
      ],
    },
  },
  {
    title: 'JobGenie - Daily Job Aggregator',
    domain: 'Data Engineering & MLOps',
    blurb:
      'Zero-touch scraping pipeline using JobSpy with rotating headers to bypass anti-bot infra, aggregating targeted AI/ML roles from 4 boards into Google Drive daily.',
    metrics: ['150+ leads/day', '4 job boards', '15 hrs/wk saved'],
    tech: ['Python', 'JobSpy', 'Google Colab', 'Drive API'],
    details: {
      goal: 'Automate the daily hunt for specific technical roles across the internet’s job boards.',
      challenges: [
        'Boards actively blocked scrapers and shifted HTML layouts - used JobSpy with concurrent execution and rotating user-agents to bypass throttling.',
        'IP bans hit after exactly 3 pages - managed request delays and header rotation to evade anti-bot infrastructure.',
      ],
      highlights: [
        'Queried LinkedIn, Indeed, Google Jobs and ZipRecruiter simultaneously.',
        'Normalized messy HTML into a clean, flat CSV.',
        'Integrated the Google Drive API to auto-write daily payloads; pulls 150+ leads/day, saving 15+ hrs/week.',
      ],
    },
  },

  // ---------- Full-Stack Engineering ----------
  {
    title: 'Jennex - Geospatial Dispatch Engine',
    domain: 'Full-Stack Engineering',
    blurb:
      'Re-architected a monolithic ride-hailing backend onto AWS + Flask + MongoDB Atlas with 2dsphere indexing and OAuth 2.0, collapsing driver-match latency from 45s to 5s.',
    metrics: ['45s → 5s latency', '5,000+ sessions', '89% faster'],
    tech: ['AWS EC2', 'Flask', 'MongoDB', 'React', 'OAuth 2.0'],
    featured: true,
    details: {
      goal: 'Overhaul a laggy legacy ride-hailing architecture to modernize the backend and dramatically cut driver-matching latency.',
      challenges: [
        'Legacy geolocation queries took up to 45s at peak - migrated geospatial data to MongoDB Atlas with targeted 2dsphere indexes for fast radius queries.',
        'The old system had security flaws - rebuilt on a modern AWS stack with OAuth 2.0 and JWT.',
      ],
      highlights: [
        'Rebuilt the monolith as a lightweight Python Flask API on scalable AWS EC2.',
        'Managed 5,000+ secure user/driver sessions with OAuth 2.0 and JWT.',
        'Optimized the React frontend via Hooks; cut driver-match latency 45s → 5s (89% faster).',
      ],
    },
  },
  {
    title: 'Secure Source-to-Pay (S2P) Portal',
    domain: 'Full-Stack Engineering',
    blurb:
      'Locked-down enterprise procurement portal for Nestlé with OAuth 2.0/SAML auth, encrypted SAP-ERP API bridges, and frontend state-locks to stop duplicate requisitions.',
    metrics: ['$65k saved / 6 mo', '14 → 3 day cycle', '1,500 PRs/wk'],
    tech: ['Java', 'Spring Boot', 'React', 'SAP-ERP API', 'OAuth/SAML'],
    featured: true,
    details: {
      goal: "Build a secure, specialized web portal for Nestlé's procurement team to safely track purchase requisitions and supply-chain orders.",
      challenges: [
        'Weak endpoints risked interception of corporate financial data - engineered encrypted API bridges to the SAP-ERP backend with OAuth 2.0/SAML.',
        'Network lag could trigger duplicate PR submissions (paying twice) - added precise frontend state-locking that freezes the interface on submit.',
      ],
      highlights: [
        'Built a role-based, locked-down web app verifying buyers and suppliers before revealing contract details.',
        'Routed all vendor negotiations through a centralized encrypted vault.',
        'Saved ~$65k in duplicate payments in 6 months; cut the PR cycle from 14 days to 3 at 1,500 PRs/week.',
      ],
    },
  },
  {
    title: 'E-Post Office Web Platform',
    domain: 'Full-Stack Engineering',
    blurb:
      'Digital postal portal with a normalized 12-table schema, InnoDB row-level locking for atomic writes, and role-based access across customer, clerk, and admin tiers.',
    metrics: ['500+ concurrent', '1,000+ transactions', '3 user tiers'],
    tech: ['PHP', 'SQL', 'JavaScript', 'Bootstrap'],
    details: {
      goal: 'Bring the post office online - a one-stop portal for booking, tracking and paying for shipments, with admin workflows.',
      challenges: [
        'Concurrent admin writes caused locked tables and SQL timeouts - implemented transactional SQL with strict InnoDB row-level locking for atomic updates.',
        'Mixing customers, clerks and admins risked tangled permissions - built a strict role-based authentication backend isolating each session.',
      ],
      highlights: [
        'Designed a normalized 12-table relational schema for users, hubs and package IDs.',
        'Governed 3 distinct user tiers (customer, clerk, admin).',
        'Built a live JS dashboard; supported 500+ concurrent users and 1,000+ test transactions.',
      ],
    },
  },
  {
    title: 'Secure Online Voting System',
    domain: 'Full-Stack Engineering',
    blurb:
      'Web voting platform hardened against SQL injection with PDO parameterized queries and millisecond token expiry to mathematically enforce one vote per person.',
    metrics: ['1,500 ballots', '0 duplicates', '100% attack mitigation'],
    tech: ['PHP', 'MySQL', 'JavaScript', 'PDO'],
    details: {
      goal: 'Build a secure, automated web platform that lets citizens cast votes from any location.',
      challenges: [
        'The initial PHP login was open to SQL injection - rebuilt the data layer with PDO parameterized queries to neutralize injection vectors.',
        'Risk of double-voting - expired the user’s authenticated token the exact millisecond a vote was committed.',
      ],
      highlights: [
        'Designed a relational schema for voters, candidates and encrypted vote tallies.',
        'Built an admin dashboard aggregating live results from thousands of rows.',
        'Processed 1,500 simulated ballots with 0 duplicates and 100% attack mitigation.',
      ],
    },
  },
  {
    title: 'Bank Account Management System',
    domain: 'Full-Stack Engineering',
    blurb:
      'Desktop banking app with a custom JDBC connection-pool wrapper and strict SQL transaction blocks with row-level locking to guarantee atomic, race-free ledger updates.',
    metrics: ['500+ transactions', '100% accuracy', 'zero dropped conns'],
    tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
    details: {
      goal: 'Build a secure desktop banking app for real-time account management and financial transactions.',
      challenges: [
        'A dropped connection or unhandled exception mid-deposit could corrupt the ledger - built a persistent JDBC connection bridge with atomic, listener-triggered updates.',
        'Simultaneous deposits/withdrawals caused stale-read race conditions - used SQL transaction blocks with row-level locking during calculations.',
      ],
      highlights: [
        'Engineered a 50+ component Java Swing/AWT GUI for registration and navigation.',
        'Wrote 20+ dynamic CRUD operations for PIN updates, transfers and ledger lookups.',
        'Processed 500+ transactions in load testing with zero errors or dropped connections.',
      ],
    },
  },
  {
    title: 'HR & Employee Management System',
    domain: 'Full-Stack Engineering',
    blurb:
      'Object-oriented HR desktop tool with exception-handled CRUD across 8 modular classes and a wildcard SQL search that cuts dossier retrieval from minutes to seconds.',
    metrics: ['1,000+ records', '<3s retrieval', 'crash-resistant'],
    tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
    details: {
      goal: 'Digitize and streamline HR operations with a centralized desktop app that securely manages employee profiles.',
      challenges: [
        'Unhandled exceptions during insert/delete crashed the app and corrupted records - built exception-handled CRUD and a decoupled, standalone database-connection class.',
        'Refactored to strict OOP, separating interface panels from data logic for maintainability.',
      ],
      highlights: [
        'Modularized login, data entry, deletion and printing across 8 classes.',
        'Built a dynamic wildcard SQL search over 1,000+ employee records.',
        'Cut dossier retrieval from minutes to under 3 seconds.',
      ],
    },
  },
  {
    title: 'UG-Codexile Corporate Website',
    domain: 'Full-Stack Engineering',
    blurb:
      'High-performance React corporate site with code-splitting, deep structural SEO, and a GitHub Actions CI/CD pipeline that cut load time by 4s and drove organic growth.',
    metrics: ['+35% traffic', '10,000+ visitors/mo', '-4s load time'],
    tech: ['React', 'PHP', 'GitHub Actions', 'SEO'],
    details: {
      goal: 'Build a sleek, fast corporate site that ranks on Google and actually drives client leads.',
      challenges: [
        'The original site was invisible on search - rebuilt from the ground up in React with aggressive, structural SEO.',
        'LCP delays from loading the whole JS bundle at once - added strict code-splitting and lazy-loaded non-critical assets.',
      ],
      highlights: [
        'Built a custom responsive component library with semantic, SEO-rich markup.',
        'Configured a secure PHP routing backend for contact forms.',
        'Automated zero-downtime deploys via GitHub Actions; cut load 4s, +35% traffic, 10,000+ visitors/mo.',
      ],
    },
  },
]
