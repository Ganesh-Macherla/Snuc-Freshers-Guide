const DATABASE = {
            categories: {
                academics: {
                    id: "academics",
                    title: "Academics & Survival Core",
                    accent: "coral",
                    accentHex: "#f43f5e",
                    icon: "fa-graduation-cap",
                    banner: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
                    description: "Learn how to survive the 75% rule, map exact department offices, find exam centres, and adapt to library codes.",
                    cards: [
                        {
                            id: "attendance",
                            title: "The 75% Attendance Trap & Punctuality",
                            badge: "Critical Warning",
                            badgeColor: "text-rose-400 bg-rose-950/40 border-rose-800/50",
                            size: "col-span-1 md:col-span-2 row-span-2",
                            quote: "Arriving even 1 minute late defaults you as absent. Check mail daily.",
                            summary: "The attendance platform registers entries electronically. Missing classes blindly is academic suicide.",
                            details: `
                                <div class='space-y-4'>
                                    <p class='text-sm text-stone-300 leading-relaxed'>SNUC operates an automated attendance logging system. Faculty submit rosters in real-time, leaving virtually no room for retrospective manual overrides or soft excuses.</p>
                                    
                                    <div class='p-4 bg-rose-950/15 border border-rose-500/25 rounded-2xl'>
                                        <h4 class='text-sm font-bold text-rose-400 flex items-center gap-2 mb-1.5'>
                                            <i class='fa-solid fa-clock'></i> What happens if you come late?
                                        </h4>
                                        <p class='text-xs text-stone-300'>Entering past the class bell usually means you are logged absent for that lecture hour. Watch out! Do not gamble away your 25% margin on early morning sleepiness; you will urgently need that cushion for medical phases or exam prep weeks.</p>
                                    </div>

                                    <div class='p-4 bg-stone-900 border border-stone-800 rounded-2xl'>
                                        <h4 class='text-sm font-bold text-amber-400 flex items-center gap-2 mb-1'>
                                            <i class='fa-solid fa-envelope'></i> Official Student Inbox Rule
                                        </h4>
                                        <p class='text-xs text-stone-400'>All academic notifications, course registration dates, warning logs, and schedule modifications arrive strictly on your official ID. Add your student email to your smartphone inbox and review it twice daily.</p>
                                    </div>

                                    <!-- Bunk Calculator Widget -->
                                    <div class='p-5 rounded-2xl bg-stone-950/80 border border-orange-500/20'>
                                        <h4 class='text-sm font-bold text-orange-400 flex items-center gap-2 mb-1'>
                                            <i class='fa-solid fa-calculator'></i> Interactive Attendance Bunk Calculator
                                        </h4>
                                        <p class='text-xs text-stone-400 mb-4'>Enter your current parameters to calculate bunk tolerances:</p>
                                        <div class='grid grid-cols-2 gap-4 mb-4'>
                                            <div>
                                                <label class='block text-3xs uppercase text-stone-500 font-bold mb-1'>Classes Attended</label>
                                                <input type='number' id='calc-attended' value='16' class='w-full bg-stone-900 border border-stone-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-clay'>
                                            </div>
                                            <div>
                                                <label class='block text-3xs uppercase text-stone-500 font-bold mb-1'>Classes Conducted</label>
                                                <input type='number' id='calc-total' value='20' class='w-full bg-stone-900 border border-stone-800 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-clay'>
                                            </div>
                                        </div>
                                        <button onclick='runBunkCalc()' class='w-full bg-gradient-to-r from-clay to-yolk text-white font-bold py-2 rounded-xl text-xs transition-opacity hover:opacity-90'>
                                            Calculate My Status
                                        </button>
                                        <div id='calc-result' class='mt-4 p-3 bg-stone-900/60 rounded-xl text-xs hidden border border-stone-800'></div>
                                    </div>
                                </div>
                            `
                        },
                        {
                            id: "admin-locations",
                            title: "Admin & Departments Roadmap",
                            badge: "Locations Hub",
                            badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/50",
                            size: "col-span-1",
                            quote: "Bonafide, finance, transport, and hostels are separated.",
                            summary: "Avoid spending hours walking around aimlessly. Know where to submit specific papers.",
                            details: `
                                <div class='space-y-4'>
                                    <p class='text-sm text-stone-300'>Seniors recommend keeping this operational map saved for administrative errands:</p>
                                    <ul class='space-y-3'>
                                        <li class='p-3 bg-stone-900/60 border border-stone-800 rounded-xl'>
                                            <strong class='text-clay block text-xs uppercase tracking-wider mb-0.5'>Academic Block 1:</strong>
                                            <span class='text-xs text-stone-300'>First floor houses the primary administrative hub for Bonafide Certificates, registration errors, and grade logs.</span>
                                        </li>
                                        <li class='p-3 bg-stone-900/60 border border-stone-800 rounded-xl'>
                                            <strong class='text-clay block text-xs uppercase tracking-wider mb-0.5'>Administrative Block:</strong>
                                            <span class='text-xs text-stone-300'>The Ground Floor is where the Finance and Fee desks reside (for caution deposits, academic transactions).</span>
                                        </li>
                                        <li class='p-3 bg-stone-900/60 border border-stone-800 rounded-xl'>
                                            <strong class='text-clay block text-xs uppercase tracking-wider mb-0.5'>Lobby & Gatehouse:</strong>
                                            <span class='text-xs text-stone-300'>Check here for Transport Cards, bus pass updates, and ID card claims. Hostel management offices sit next to the primary mess entrance.</span>
                                        </li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "ct-resilience",
                            title: "Academic Resilience (The CT Rule)",
                            badge: "Core Advice",
                            badgeColor: "text-orange-400 bg-orange-950/40 border-orange-800/50",
                            size: "col-span-1",
                            quote: "Don't go to CT without mental resilience.",
                            summary: "Continuous Tests move fast. Learn how to stay afloat and organize early.",
                            details: `
                                <div class='space-y-4'>
                                    <blockquote class='border-l-4 border-clay pl-4 italic text-stone-400'>
                                        "Don't go to CT without mental resilience."
                                    </blockquote>
                                    <p class='text-xs text-stone-300 leading-relaxed'>Continuous Tests (CT) occur in rapid succession. Freshers often underestimate the syllabus coverage. To survive, join local study groups early, use digital library notes, and solve past semester patterns weeks before the actual test week.</p>
                                </div>
                            `
                        },
                        {
                            id: "exam-centres",
                            title: "NPTEL & BS Degree Exam Centres",
                            badge: "External Exams",
                            badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/50",
                            size: "col-span-1",
                            quote: "Common coordinate groups and location grids.",
                            summary: "How to safely navigate outstation centers and track BS test alignments.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Standardized external programs require off-campus travel. Keep these rules in mind:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Coordinate Groups:</strong> Join the senior-moderated WhatsApp loops immediately to share travel logistics and past question pools.</li>
                                        <li><strong>Exam Slips:</strong> Verify hall tickets 48 hours before departure. Many exam halls are located on OMR outskirts with tricky transit patterns.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "library",
                            title: "Library Rules & Workspace",
                            badge: "Silent Zone",
                            badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/50",
                            size: "col-span-1",
                            quote: "Scan ID cards and stay strictly quiet on top floors.",
                            summary: "Access premium digital research workstations and clean workspaces.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>The institutional library is a world-class resource if you follow its basic courtesy codes:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li>Always scan your physical student ID card at the electronic turnstile.</li>
                                        <li>Strict silence is maintained on the upper mezzanine levels. It's the ultimate quiet zone for exam prep.</li>
                                        <li>Avoid keeping food items on study tables; library wardens inspect the desks regularly.</li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                },
                hostel: {
                    id: "hostel",
                    title: "Hostel Life & Regulations",
                    accent: "orange",
                    accentHex: "#f97316",
                    icon: "fa-hotel",
                    banner: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
                    description: "Step-by-step procedures to request Outpasses, handle Curfews, set up Wi-Fi, and evaluate cellular signals.",
                    cards: [
                        {
                            id: "outpass-proc",
                            title: "Hostel Outpass Procedures",
                            badge: "Outpass Portal",
                            badgeColor: "text-orange-400 bg-orange-950/40 border-orange-800/50",
                            size: "col-span-1 md:col-span-2 row-span-1",
                            quote: "Apply at least 4 hours ahead on the portal.",
                            summary: "Avoid gateway holdups. Learn the digital steps to secure outing approvals.",
                            details: `
                                <div class='space-y-3'>
                                    <p class='text-xs text-stone-300'>To exit campus boundaries legally, follow this sequence:</p>
                                    <ol class='list-decimal pl-5 space-y-2 text-xs text-stone-300'>
                                        <li>Log onto your student ERP portal and submit either an 'Outing Outpass' or 'Home Outpass'.</li>
                                        <li>Secure approval from your assigned Faculty Advisor. Send a polite request if it stays pending.</li>
                                        <li>The automated system will call or text your registered parent's number for verification. Ensure they are expecting it!</li>
                                        <li>Once approved, present your digital QR pass at the security desk to exit.</li>
                                    </ol>
                                </div>
                            `
                        },
                        {
                            id: "curfew-rules",
                            title: "Curfew & Late Rules",
                            badge: "9:00 PM Sharp",
                            badgeColor: "text-rose-400 bg-rose-950/40 border-rose-800/50",
                            size: "col-span-1",
                            quote: "Warnings on first breach, parent calls on second.",
                            summary: "Understand lock-in guidelines and curfew checks on residential blocks.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Campus security prioritizes resident safety with strict guidelines:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>In-And-Out Curfew:</strong> High gates close at <strong>9:00 PM sharp</strong>. Missing the count gets logged in the warden's roster.</li>
                                        <li><strong>No Birthday Chaos:</strong> Due to past administrative restrictions, rough birthday rituals (like cake smearing or water throwing) are banned inside the hallways. Celebrate neatly in designated spots.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "wifi-info",
                            title: "SNUC Wi-Fi & VPN Limits",
                            badge: "Portal Config",
                            badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/50",
                            size: "col-span-1",
                            quote: "Proxy login details and blocked ports list.",
                            summary: "Onboarding details, blocked sites, and troubleshooting connection drops.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Access high-speed campus internet using these setups:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li>Connect to the official **SNUC-Student** SSID.</li>
                                        <li>Authenticate using your custom credentials provided during admission.</li>
                                        <li><strong>Blocked Content:</strong> Steam download tunnels, common VPN proxies, and illegal torrent repositories are blocked on the central firewall. Avoid using them to prevent your portal account from being locked.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "network-provider",
                            title: "Network Provider Signals",
                            badge: "Carrier Stats",
                            badgeColor: "text-purple-400 bg-purple-950/40 border-purple-800/50",
                            size: "col-span-1",
                            quote: "Airtel is strongest; Jio is moderate.",
                            summary: "Senior rating reviews of cellular signals inside concrete hostel blocks.",
                            details: `
                                <div class='space-y-2 text-xs text-stone-300'>
                                    <p>Signal performance inside concrete hostel walls:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li><strong>Airtel:</strong> Best overall speeds, especially near windows and balconies.</li>
                                        <li><strong>Jio:</strong> Stable outside, but bandwidth can drop inside lower levels.</li>
                                        <li><strong>BSNL / Vi:</strong> Unreliable cell reception indoors. Keep an alternative hotspot handy.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "hostel-contacts",
                            title: "Hostel Contacts & Bus Routes",
                            badge: "Directories",
                            badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/50",
                            size: "col-span-1",
                            quote: "Emergency warden details and shuttle frequencies.",
                            summary: "Direct contacts for hostel offices, plus campus bus timetables.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Essential contacts and local timetables:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li><strong>Residential Shuttle:</strong> Free shuttle runs from the main hostel blocks to Academic Block 1 every 15 minutes between 7:50 AM - 8:45 AM.</li>
                                        <li><strong>Warden Desk:</strong> Available at the hostel ground-floor lobby. Log maintenance tickets directly in their ledger for quick support.</li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                },
                student_life: {
                    id: "student_life",
                    title: "Quality of Life & Advices",
                    accent: "amber",
                    accentHex: "#f59e0b",
                    icon: "fa-rocket",
                    banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
                    description: "Learn how to get involved in student clubs, follow sports codes, connect with seniors, and check local guidelines.",
                    cards: [
                        {
                            id: "clubs-involvement",
                            title: "Clubs Directory & Community",
                            badge: "Explore",
                            badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/50",
                            size: "col-span-1 md:col-span-2 row-span-1",
                            quote: "Involve yourself in clubs and events. Come out and explore!",
                            summary: "How to apply, clear recruitments, and balance clubs with study tracks.",
                            details: `
                                <div class='space-y-3'>
                                    <blockquote class='border-l-4 border-amber-500 pl-4 italic text-stone-400 text-xs'>
                                        "Involve yourself in clubs and events. Come out and explore! Do not hesitate to strike up conversations and expand your student network early."
                                    </blockquote>
                                    <p class='text-xs text-stone-300 leading-relaxed'>Clubs are the heartbeat of the campus. From technical communities (Webdev, AI/ML, Robotics) to cultural chapters (Music, Drama, Art), active participation helps you build strong leadership experience. Recruitment cycles open within the first month of college!</p>
                                </div>
                            `
                        },
                        {
                            id: "sports-facilities",
                            title: "Sports & Gym Infrastructure",
                            badge: "Gym & Court",
                            badgeColor: "text-purple-400 bg-purple-950/40 border-purple-800/50",
                            size: "col-span-1",
                            quote: "Gym access rules and indoor court grids.",
                            summary: "Operating hours, equipment catalogs, and booking systems for courts.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>SNUC offers high-quality sports facilities for all students:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li><strong>Gymnasium:</strong> Free access with modern weight areas. Open 6:00 AM - 8:30 AM and 4:30 PM - 8:00 PM daily.</li>
                                        <li><strong>Indoor Courts:</strong> Excellent facilities for badminton, squash, and table tennis matches.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "sports-dresscode",
                            title: "Sports Complex Dress Code",
                            badge: "Strict Mandate",
                            badgeColor: "text-rose-400 bg-rose-950/40 border-rose-800/50",
                            size: "col-span-1",
                            quote: "Strictly non-marking shoes inside wooden courts.",
                            summary: "Avoid disciplinary fees. Learn the footwear requirements and rules.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>To keep the facilities in top shape, the sports department enforces these codes strictly:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Footwear:</strong> Strictly <strong>non-marking sports shoes</strong> are required inside the wooden squash and badminton courts. Standard dark-soled running shoes are not allowed.</li>
                                        <li><strong>Attire:</strong> Appropriate athletic track pants or shorts are mandatory. Casual clothing like jeans or cargos is not permitted inside the gym or court areas.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "networking-advice",
                            title: "Senior-Junior Networking Tips",
                            badge: "Connections",
                            badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/50",
                            size: "col-span-1",
                            quote: "Don't have resistance in talking with people and network early.",
                            summary: "Join student study pools, notes directories, and safe senior loops.",
                            details: `
                                <div class='space-y-3'>
                                    <p class='text-xs text-stone-300 leading-relaxed'>Developing a strong peer network early is incredibly helpful. Seniors can guide you through tough subjects, share previous study guides, and help you find great learning resources.</p>
                                    <blockquote class='border-l-4 border-emerald-500 pl-4 italic text-stone-400 text-xs'>
                                        "Do not have resistance in talking with a lot of people and network early. We are always happy to share our notes and guidance."
                                    </blockquote>
                                </div>
                            `
                        },
                        {
                            id: "bunking-tips",
                            title: "How to Safely Bunk Classes",
                            badge: "Bunking Guide",
                            badgeColor: "text-orange-400 bg-orange-950/40 border-orange-800/50",
                            size: "col-span-1",
                            quote: "Keep a clean log and save your buffer.",
                            summary: "Tactical tips from seniors on maintaining a safe attendance cushion.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>While we strongly advise attending all lectures, we know that sometimes seasonal coughs or coding deadlines pop up. Here's how seniors manage attendance buffers:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li><strong>Save your buffer:</strong> Do not use up your absences early in the semester. Keep them for the end of the term when you'll really need that study time.</li>
                                        <li><strong>Track manually:</strong> Never rely on guesswork. Maintain an accurate log of missed lectures for each subject.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "restriction-history",
                            title: "Campus Lore & Rules History",
                            badge: "History Room",
                            badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/50",
                            size: "col-span-1",
                            quote: "Why certain rules were born (forest lines & curfew logic).",
                            summary: "Learn the backstory behind the campus guidelines.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Ever wondered why certain rules are so strict? Here are some interesting bits of campus history:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Path Curfews:</strong> Evening restrictions on walking near the perimeter paths were introduced after students ventured too close to the outer forest areas late at night.</li>
                                        <li><strong>Birthday Celebrations:</strong> Rules keeping celebrations indoors in common rooms were established to keep residential blocks peaceful during late-night study weeks.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "pet-archives",
                            title: "The Campus Pet Archives",
                            badge: "Pet Homage",
                            badgeColor: "text-pink-400 bg-pink-950/40 border-pink-800/50",
                            size: "col-span-1",
                            quote: "Meet Sambar and Whiskers, our campus companions.",
                            summary: "Say hello to our friendly campus indie dogs and cats.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>The campus is home to several friendly animals cared for by the community:</p>
                                    <ul class='space-y-3'>
                                        <li class='p-3 bg-stone-900 border border-stone-800 rounded-xl flex items-center gap-3'>
                                            <span class='text-2xl'>🐕</span>
                                            <div>
                                                <strong class='text-stone-100 block'>Sambar (The Indie King)</strong>
                                                <span class='text-2xs text-stone-400'>Often seen resting near the central cafeteria. Friendly and loves biscuits.</span>
                                            </div>
                                        </li>
                                        <li class='p-3 bg-stone-900 border border-stone-800 rounded-xl flex items-center gap-3'>
                                            <span class='text-2xl'>🐈</span>
                                            <div>
                                                <strong class='text-stone-100 block'>Whiskers (The Library Guardian)</strong>
                                                <span class='text-2xs text-stone-400'>A calm calico cat roaming the library bushes. Very photogenic.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                },
                nearby: {
                    id: "nearby",
                    title: "Nearby Locations & Utilities",
                    accent: "terracotta",
                    accentHex: "#ea580c",
                    icon: "fa-map-location-dot",
                    banner: "https://images.unsplash.com/photo-1513829096999-4978602297f7?auto=format&fit=crop&w=1200&q=80",
                    description: "Find local highway restaurants, city transit options, cycle repair shops, and driving schools.",
                    cards: [
                        {
                            id: "college-map",
                            title: "Campus Layout & Map",
                            badge: "Navigation",
                            badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/50",
                            size: "col-span-1",
                            quote: "Quick mapping guides to classrooms.",
                            summary: "Locate academic blocks, hostels, and sports hubs easily.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>A quick guide for navigating the main campus areas:</p>
                                    <ul class='list-disc pl-5 space-y-1.5'>
                                        <li><strong>Academic Blocks 1 & 2:</strong> Main classrooms, labs, departmental offices, and administrative desks.</li>
                                        <li><strong>The Food Plaza:</strong> Centrally located right next to the sports fields.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "mtc-routes",
                            title: "Major MTC Routes",
                            badge: "Local Bus",
                            badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/50",
                            size: "col-span-1",
                            quote: "Bus 519 and 102 tracks.",
                            summary: "Key public bus routes connecting Kalavakkam with central Chennai.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Get around OMR and the city easily with these popular bus routes:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Bus 519:</strong> Kalavakkam to T. Nagar. A direct and very popular route for weekend shopping trips.</li>
                                        <li><strong>Bus 102:</strong> Kalavakkam to Broadway. Links directly through central OMR corridors.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "culinary-map",
                            title: "The Culinary Map (Eats & Stalls)",
                            badge: "Eateries",
                            badgeColor: "text-orange-400 bg-orange-950/40 border-orange-800/50",
                            size: "col-span-1 md:col-span-2 row-span-1",
                            quote: "Campus juice corners and off-campus highway spots.",
                            summary: "Insiders guide to on-campus food stalls and tasty highway spots.",
                            details: `
                                <div class='space-y-4 text-xs text-stone-300'>
                                    <div>
                                        <h5 class='font-bold text-orange-400 uppercase tracking-wider mb-1'>On-Campus Spots:</h5>
                                        <p>The central food plaza offers delicious evening snacks, fresh juices, and hot parottas during study breaks.</p>
                                    </div>
                                    <div>
                                        <h5 class='font-bold text-orange-400 uppercase tracking-wider mb-1'>Off-Campus Gems:</h5>
                                        <p>Head to Kelambakkam town (just 5 minutes away) for great local shawarmas and highway food stalls.</p>
                                    </div>
                                </div>
                            `
                        },
                        {
                            id: "weekend-itinerary",
                            title: "Weekend Plans & Sightseeing",
                            badge: "Day Trips",
                            badgeColor: "text-purple-400 bg-purple-950/40 border-purple-800/50",
                            size: "col-span-1",
                            quote: "ECR beaches, Kovalam surfing, and local malls.",
                            summary: "Fun sightseeing ideas and local getaways for your free days.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Plan a refreshing weekend trip along the East Coast Road:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Kovalam Beach:</strong> Located 15 minutes away, famous for surfing classes and scenic sunset views.</li>
                                        <li><strong>The Marina Mall:</strong> Your go-to spot on OMR for movies, restaurants, and shopping.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "repairs-driving",
                            title: "Cycle Repairs & Driving Lessons",
                            badge: "Local Services",
                            badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/50",
                            size: "col-span-1",
                            quote: "Bicycle fixes near the gate and local driving schools.",
                            summary: "Where to fix your bike and sign up for driving classes.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Useful services located right near campus:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Cycle Repair Shop:</strong> Located right near the hostel gate. Quick fixes for punctures, brakes, and chains.</li>
                                        <li><strong>Driving Schools:</strong> Several local driving schools near Kelambakkam offer student discount rates and flexible lesson slots.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "online-deliveries",
                            title: "Online Deliveries & Gate Collection",
                            badge: "Courier Drop",
                            badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/50",
                            size: "col-span-1",
                            quote: "Parcels must be collected at Gate 1 or Gate 2.",
                            summary: "Rules for picking up Amazon, Flipkart, and food deliveries.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Getting your packages delivered safely on campus:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Gate Pickup:</strong> Courier delivery vehicles are not allowed past the residential gates. All packages must be picked up directly at the **Gate 1 or Gate 2 security checkpoints**.</li>
                                        <li><strong>Food App Deliveries:</strong> Coordinate with Swiggy/Zomato riders to meet them at the main entrance gate barrier.</li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                },
                emergency: {
                    id: "emergency",
                    title: "Emergency & Wellness",
                    accent: "rosegold",
                    accentHex: "#ec4899",
                    icon: "fa-circle-exclamation",
                    banner: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
                    description: "Access campus health resources, the Student Counsellor, emergency transport, and scholarship aid.",
                    cards: [
                        {
                            id: "clinic-hub",
                            title: "Clinic & Doctor Appointments",
                            badge: "Medical Room",
                            badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/50",
                            size: "col-span-1 md:col-span-2 row-span-1",
                            quote: "On-campus medical aid and free primary medicines.",
                            summary: "Doctor consultation hours, available medicines, and clinic setups.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>The on-campus clinic is fully equipped to handle basic health needs and immediate care:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>Doctor Visits:</strong> General practitioners are available daily between 3:00 PM - 5:00 PM.</li>
                                        <li><strong>Free Medicines:</strong> Common over-the-counter cold tablets, painkillers, and band-aids are provided free of charge when you show your student ID card.</li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "student-counsellor",
                            title: "Student Counsellor Desk",
                            badge: "Safe Space",
                            badgeColor: "text-pink-400 bg-pink-950/40 border-pink-800/50",
                            size: "col-span-1",
                            quote: "Confidential guidance sessions with Ilakkiya L Ma'am.",
                            summary: "Guidance paths for academic, social, or emotional adjustments.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Adapting to college life can sometimes feel challenging. Helpful and confidential guidance is always here for you:</p>
                                    <div class='p-4 bg-stone-900 border border-pink-500/10 rounded-2xl text-center mt-2'>
                                        <strong class='text-stone-100 text-sm block'>Mrs. Ilakkiya L</strong>
                                        <span class='text-xs text-pink-400 block mb-1 font-semibold uppercase tracking-wider'>Student Counsellor</span>
                                        <p class='text-2xs text-stone-400 mb-2'>Confidential personal guidance, academic support, and wellness exercises.</p>
                                        <span class='text-2xs font-mono bg-stone-950 px-2 py-1 border border-stone-800 rounded text-stone-300 inline-block'>Office: Academic Block 1, First Floor</span>
                                    </div>
                                </div>
                            `
                        },
                        {
                            id: "ssn-helpdesk",
                            title: "SSN / SNUC Helpdesk Portal",
                            badge: "Repairs",
                            badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/50",
                            size: "col-span-1",
                            quote: "Log tickets for IT, electrical, or plumbing maintenance.",
                            summary: "How to log maintenance requests for campus facilities.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Need something in your room or wing fixed? Use the institutional ticketing portal:</p>
                                    <ol class='list-decimal pl-5 space-y-2'>
                                        <li>Log onto the official **Helpdesk Portal** using your student credentials.</li>
                                        <li>Select your category (e.g., IT, Electrical, Infrastructure).</li>
                                        <li>Submit your ticket. Maintenance staff usually address requests within 24-48 hours.</li>
                                    </ol>
                                </div>
                            `
                        },
                        {
                            id: "medical-directory",
                            title: "Specialized Medical Directory",
                            badge: "Local ER",
                            badgeColor: "text-rose-400 bg-rose-950/40 border-rose-800/50",
                            size: "col-span-1",
                            quote: "Chettinad Health City and nearby dental clinics.",
                            summary: "External hospitals and specialized clinics located close to campus.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>For specialized medical care or emergencies outside our campus clinic:</p>
                                    <ul class='space-y-2'>
                                        <li class='p-2 bg-stone-900 border border-stone-800 rounded-lg'>
                                            <strong class='text-pink-400 block'>Chettinad Health City (OMR)</strong>
                                            <span>Full 24/7 multi-specialty trauma and general emergency care (15 mins from campus).</span>
                                        </li>
                                        <li class='p-2 bg-stone-900 border border-stone-800 rounded-lg'>
                                            <strong class='text-pink-400 block'>Local Dental & Skin Care</strong>
                                            <span>Specialized dermatology and dentistry clinics are located in Kelambakkam town.</span>
                                        </li>
                                    </ul>
                                </div>
                            `
                        },
                        {
                            id: "scholarships-aid",
                            title: "SIRS & Other Scholarships",
                            badge: "Financial Aid",
                            badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/50",
                            size: "col-span-1",
                            quote: "Navigate SIRS systems and Buddy4Study platforms.",
                            summary: "Guide to institutional scholarships and external funding aggregate tools.",
                            details: `
                                <div class='space-y-3 text-xs text-stone-300'>
                                    <p>Helpful resources for tracking financial aid options:</p>
                                    <ul class='list-disc pl-5 space-y-2'>
                                        <li><strong>SIRS Merit Scholarships:</strong> Awarded annually based on academic or athletic excellence. Applications open via the admin office in September.</li>
                                        <li><strong>Buddy4Study Portal:</strong> A fantastic external platform for checking private, corporate, and national scholarship programs.</li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                }
            }
        };