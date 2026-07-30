let CURRENT_VIEW = 'home';
let ACTIVE_CATEGORY = null;

window.onload = function() {
    function renderAnnouncements() {

    const container = document.getElementById("announcement-carousel");
    const dotsContainer = document.getElementById("announcement-dots");
    const prevBtn = document.getElementById("announcement-prev");
    const nextBtn = document.getElementById("announcement-next");

    if (!container || !dotsContainer || !prevBtn || !nextBtn) return;

    const announcements = DATABASE.announcements;

    let current = 0;
    let autoSlide;

    function getIcon(type = "") {

        switch(type.toLowerCase()) {

            case "event":
                return "📅";

            case "warning":
                return "⚠️";

            case "tip":
                return "💡";

            default:
                return "📢";

        }

    }

    function renderSlide(index) {

        const item = announcements[index];

        container.innerHTML = `
            <div class="flex items-center gap-8">

                <div class="text-6xl flex-shrink-0">
                    ${item.type.split(" ")[0]}
                </div>

                <div>
                    <div class="uppercase tracking-[0.2em] text-sm font-extrabold text-clay">
                        ${item.type.split(" ").slice(1).join(" ")}
                    </div>

                    <p class="text-xl mt-3 text-crust leading-relaxed max-w-3xl">
                        ${item.message}
                    </p>

                    ${item.link ? `
                        <a
                            href="${item.link}"
                            target="_blank"
                            class="inline-flex items-center gap-2 mt-5
                            px-5 py-2 rounded-full
                            bg-clay text-white
                            hover:scale-105
                            transition">

                            ${item.buttonText || "Open Link"}

                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>
                    ` : ""}
                </div>

            </div>
        `;

        dotsContainer.innerHTML = announcements.map((_, i) => `

            <button
                class="w-4 h-4 rounded-full transition
                ${i===index
                    ? "bg-clay"
                    : "bg-yellow-300 hover:bg-yellow-400"}"
                data-index="${i}">
            </button>

        `).join("");

        document.querySelectorAll("#announcement-dots button")
        .forEach(dot => {

            dot.onclick = () => {

                current = Number(dot.dataset.index);

                renderSlide(current);

                restartAuto();

            };

        });

    }

    function next() {

        current = (current + 1) % announcements.length;

        renderSlide(current);

    }

    function previous() {

        current--;

        if(current < 0)
            current = announcements.length - 1;

        renderSlide(current);

    }

    function restartAuto() {

        clearInterval(autoSlide);

        autoSlide = setInterval(next,5000);

    }

    prevBtn.onclick = () => {

        previous();

        restartAuto();

    };

    nextBtn.onclick = () => {

        next();

        restartAuto();

    };

    renderSlide(current);

    restartAuto();

}
    renderMasterCategories();
    renderAnnouncements();
    setupSearchIndex();
};

// Visual identity per category — food doodle, colors, compartment size
const CATEGORY_VISUALS = {
    academics:    { emoji: '📚', food: 'Academia',   icon: 'fa-graduation-cap', bg: 'bg-clay',  tint: 'bg-[#FBE3D4]', ring: 'border-clay',  text: 'text-clayDeep',  tape: 'bg-clay' },
    hostel:       { emoji: '🏠', food: 'Hostel Life',  icon: 'fa-house',          bg: 'bg-sage',  tint: 'bg-[#E9EEDD]', ring: 'border-sage',  text: 'text-sageDeep',  tape: 'bg-sage' },
    student_life: { emoji: '✨', food: 'Miscellaneous',    icon: 'fa-star',           bg: 'bg-yolk',  tint: 'bg-[#FBEFD1]', ring: 'border-yolk',  text: 'text-[#8A6412]', tape: 'bg-yolk' },
    nearby:       { emoji: '🗺️', food: 'Outside Campus',   icon: 'fa-map-location-dot', bg: 'bg-sky', tint: 'bg-[#DFEDF0]', ring: 'border-sky',   text: 'text-[#2E6274]', tape: 'bg-sky' },
    emergency:    { emoji: '🩹', food: 'Student Wellness', icon: 'fa-kit-medical',    bg: 'bg-tomato', tint: 'bg-[#FBE1DA]', ring: 'border-tomato', text: 'text-[#B4432A]', tape: 'bg-tomato' },
};

function renderMasterCategories() {
    const grid = document.getElementById('master-categories-grid');
    grid.innerHTML = '';

    Object.values(DATABASE.categories).forEach(cat => {
        const v = CATEGORY_VISUALS[cat.id] || CATEGORY_VISUALS.academics;
        const isBig = cat.id === 'academics';

        const cardHtml = `
            <div onclick="openCategoryPage('${cat.id}')" class="lb-${cat.id} box-card ${v.tint} relative overflow-hidden rounded-[1.75rem] flex flex-col justify-between p-5 sm:p-6 cursor-pointer group border-crust min-h-[150px]">
                <div class="absolute -right-4 -bottom-4 text-7xl opacity-20 group-hover:opacity-35 transition-opacity select-none pointer-events-none">${v.emoji}</div>

                <div class="relative z-10">
                    <div class="flex items-center gap-2.5 mb-3">
                        <span class="w-10 h-10 rounded-xl flex items-center justify-center text-paper ${v.bg} border-2 border-crust shadow-soft">
                            <i class="fa-solid ${v.icon} text-sm"></i>
                        </span>
                        <span class="text-3xs uppercase tracking-widest font-extrabold ${v.text}">${v.food}</span>
                    </div>

                    <h3 class="${isBig ? 'text-2xl sm:text-3xl' : 'text-lg'} font-display font-semibold text-crust group-hover:${v.text} transition-colors">${cat.title}</h3>
                    <p class="text-xs sm:text-sm text-crust/70 mt-2 ${isBig ? 'max-w-md' : 'line-clamp-2'}">${cat.description}</p>
                </div>

                <div class="relative z-10 flex items-center gap-1.5 text-crust text-2xs sm:text-xs font-extrabold uppercase tracking-wider mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    Open compartment <i class="fa-solid fa-arrow-right text-3xs group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

function navigateTo(viewName) {
    const homeView = document.getElementById('view-home');
    const categoryView = document.getElementById('view-category');

    if(viewName === 'home') {
        categoryView.classList.add('hidden');
        homeView.classList.remove('hidden');
        CURRENT_VIEW = 'home';
        ACTIVE_CATEGORY = null;
    } else if(viewName === 'category') {
        homeView.classList.add('hidden');
        categoryView.classList.remove('hidden');
        CURRENT_VIEW = 'category';
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function openCategoryPage(catId) {
    const category = DATABASE.categories[catId];
    if(!category) return;

    ACTIVE_CATEGORY = catId;
    const v = CATEGORY_VISUALS[catId] || CATEGORY_VISUALS.academics;

    document.getElementById('category-page-title').innerText = category.title;
    document.getElementById('category-page-desc').innerText = category.description;

    const bentoGrid = document.getElementById('bento-box-grid');
    bentoGrid.innerHTML = '';

    // Generate Bento Grid Card Layout elements dynamically with rich visible text & quotes
    category.cards.forEach((card, idx) => {
        const rotate = '';
        const badgeClass = card.badgeColor || 'text-crust bg-cream border-crust/20';
        const bentoHtml = `
            <div onclick="openCardDetail('${catId}', '${card.id}')" class="box-card group relative flex flex-col justify-between p-5 rounded-[1.5rem] cursor-pointer ${card.size || 'col-span-1'} border-crust bg-paper">
                <div class="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="washi ${rotate} inline-block text-3xs uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full ${v.bg} text-paper border-2 border-crust">
                                ${card.badge || 'INFO'}
                            </span>
                        </div>
                        <h4 class="text-md font-display font-semibold text-crust group-hover:${v.text} transition-colors line-clamp-2">${card.title}</h4>
                        <p class="text-xs text-crust/65 mt-2 line-clamp-2 leading-relaxed">${card.summary}</p>

                        <div class="mt-2.5 p-2.5 bg-cream border-2 border-dashed border-crust/20 rounded-xl">
                            <p class="text-3xs text-crust/70 italic line-clamp-2 font-hand text-sm">
                                <i class="fa-solid fa-quote-left ${v.text} mr-1 text-4xs"></i>${card.quote || 'Tap for the full scoop.'}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-3">
                        <span class="text-4xs uppercase tracking-wider text-crust/50 group-hover:text-crust font-extrabold transition-colors">Open the box</span>
                        <span class="w-7 h-7 rounded-full bg-cream border-2 border-crust/20 text-crust/60 group-hover:${v.text} group-hover:border-crust flex items-center justify-center transition-all">
                            <i class="fa-solid fa-arrow-up-right-from-square text-3xs"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
        bentoGrid.innerHTML += bentoHtml;
    });

    navigateTo('category');
}

function openCardDetail(catId, cardId) {
    const cat = DATABASE.categories[catId];
    const card = cat.cards.find(c => c.id === cardId);
    if(!card) return;

    const v = CATEGORY_VISUALS[catId] || CATEGORY_VISUALS.academics;
    const accentHex = cat.accentHex || '#C1502E';

    document.getElementById('modal-accent-line').className = `h-2 w-full ${v.bg}`;

    const tag = document.getElementById('modal-category-tag');
    tag.innerText = cat.title;
    tag.className = `text-2xs uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full washi border-2 border-crust text-paper mb-3 inline-block ${v.bg}`;

    document.getElementById('modal-title').innerText = card.title;
    document.getElementById('modal-body-content').innerHTML = card.details;

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

function openEmergencyModal() {
    document.getElementById('emergency-modal').classList.remove('hidden');
}

function closeEmergencyModal() {
    document.getElementById('emergency-modal').classList.add('hidden');
}

let searchIndex = [];

function setupSearchIndex() {
    searchIndex = [];
    Object.values(DATABASE.categories).forEach(cat => {
        cat.cards.forEach(card => {
            searchIndex.push({
                categoryId: cat.id,
                categoryTitle: cat.title,
                cardId: card.id,
                title: card.title,
                summary: card.summary,
            });
        });
    });
}

function handleSearch(query) {
    const dropdown = document.getElementById('search-dropdown');
    if(!query || query.trim() === '') {
        dropdown.classList.add('hidden');
        return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const matches = searchIndex.filter(item =>
        item.title.toLowerCase().includes(cleanQuery) ||
        item.summary.toLowerCase().includes(cleanQuery) ||
        item.categoryTitle.toLowerCase().includes(cleanQuery)
    ).slice(0, 5);

    if(matches.length === 0) {
        dropdown.innerHTML = `<div class="p-4 text-xs text-crust/50 text-center">No matching survival tips found in the lunchbox.</div>`;
    } else {
        dropdown.innerHTML = '';
        matches.forEach(match => {
            const v = CATEGORY_VISUALS[match.categoryId] || CATEGORY_VISUALS.academics;
            const row = `
                <div onclick="selectSearchResult('${match.categoryId}', '${match.cardId}')" class="p-3 border-b-2 border-crust/10 hover:bg-cream cursor-pointer transition-colors">
                    <span class="text-3xs uppercase tracking-widest ${v.text} block font-extrabold mb-0.5">${match.categoryTitle}</span>
                    <strong class="text-xs sm:text-sm text-crust block line-clamp-1">${match.title}</strong>
                    <p class="text-2xs text-crust/60 mt-0.5 line-clamp-1">${match.summary}</p>
                </div>
            `;
            dropdown.innerHTML += row;
        });
    }
    dropdown.classList.remove('hidden');
}

function selectSearchResult(catId, cardId) {
    document.getElementById('global-search').value = '';
    document.getElementById('search-dropdown').classList.add('hidden');

    openCategoryPage(catId);
    setTimeout(() => {
        openCardDetail(catId, cardId);
    }, 350);
}

function runBunkCalc() {
    const attendedInput = document.getElementById('calc-attended');
    const totalInput = document.getElementById('calc-total');
    const resultBox = document.getElementById('calc-result');

    const attended = parseInt(attendedInput.value) || 0;
    const total = parseInt(totalInput.value) || 0;

    if (total < 0 || attended < 0 || attended > total) {
        resultBox.innerHTML = `
            <div class="text-rose-500 font-bold flex items-center gap-1">
                <i class="fa-solid fa-circle-xmark"></i> Invalid Values Input
            </div>
            <p class="text-2xs text-stone-400 mt-1">Attended classes cannot exceed total conducted classes. Try entering logical values!</p>
        `;
        resultBox.classList.remove('hidden');
        return;
    }

    const currentPercent = total > 0 ? (attended / total) * 100 : 100;
    let resultMessage = '';

    if (currentPercent >= 75) {
        const safeBunks = Math.floor((4 / 3) * attended - total);
        if (safeBunks > 0) {
            resultMessage = `
                <div class="text-emerald-400 font-bold flex items-center gap-1.5">
                    <i class="fa-solid fa-circle-check"></i> Safe Margin! (Currently ${currentPercent.toFixed(1)}%)
                </div>
                <p class="text-xs text-stone-300 mt-2">You can safely skip (bunk) up to <strong class="text-emerald-400 text-sm font-extrabold">${safeBunks}</strong> consecutive classes without dropping below the mandatory 75% limit.</p>
            `;
        } else {
            resultMessage = `
                <div class="text-amber-400 font-bold flex items-center gap-1.5">
                    <i class="fa-solid fa-triangle-exclamation"></i> Borderline Warning! (Currently ${currentPercent.toFixed(1)}%)
                </div>
                <p class="text-xs text-stone-300 mt-2">You are precisely near the limit. You **cannot skip any more classes** without dipping below 75%.</p>
            `;
        }
    } else {
        const requiredAttend = Math.max(0, (3 * total) - (4 * attended));
        resultMessage = `
            <div class="text-rose-500 font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-circle-exclamation animate-pulse"></i> Shortage Action Required! (Currently ${currentPercent.toFixed(1)}%)
            </div>
            <p class="text-xs text-stone-300 mt-2">Your attendance is currently below safety criteria. You must attend the next <strong class="text-rose-400 text-sm font-extrabold">${requiredAttend}</strong> classes consecutively to recover above 75%.</p>
        `;
    }

    resultBox.innerHTML = resultMessage;
    resultBox.classList.remove('hidden');
}